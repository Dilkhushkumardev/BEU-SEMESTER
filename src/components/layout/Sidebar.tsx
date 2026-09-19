import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  Beaker, 
  Sigma, 
  Zap, 
  Bookmark, 
  BarChart3, 
  Settings, 
  ChevronRight, 
  Sparkles,
  Calculator,
  Atom,
  Binary,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { allSubjects, allLabCourses } from '../../data';
import { useProgress } from '../../context/ProgressContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (url: string) => void;
  currentPath: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNavigate, currentPath }) => {
  const [subjectsExpanded, setSubjectsExpanded] = useState(true);
  const [labsExpanded, setLabsExpanded] = useState(false);
  const { completedTopicIds } = useProgress();

  const handleNav = (url: string) => {
    onNavigate(url);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const getSubjectIcon = (code: string) => {
    switch (code) {
      case '100102':
        return <Calculator className="w-4 h-4 text-cyan-400" />;
      case '100104':
        return <Atom className="w-4 h-4 text-blue-400" />;
      case '100111':
        return <Zap className="w-4 h-4 text-amber-400" />;
      case '100105':
        return <Sparkles className="w-4 h-4 text-indigo-400" />;
      case '100108':
        return <Binary className="w-4 h-4 text-purple-400" />;
      case '100110':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case '100109':
        return <HeartHandshake className="w-4 h-4 text-rose-400" />;
      default:
        return <BookOpen className="w-4 h-4 text-slate-400" />;
    }
  };

  const mainNavItems = [
    { label: 'Overview', url: '/', icon: Home },
    { label: 'My Dashboard', url: '/dashboard', icon: BarChart3 },
    { label: 'All Subjects', url: '/subjects', icon: BookOpen },
    { label: 'Formula Bank', url: '/formulas', icon: Sigma },
    { label: 'Quick Revision', url: '/revision', icon: Zap },
    { label: 'Practical Labs (45)', url: '/labs', icon: Beaker },
    { label: 'Saved Bookmarks', url: '/bookmarks', icon: Bookmark },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-40 w-72 bg-slate-950/95 border-r border-slate-800/80 backdrop-blur-xl flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex-1 overflow-y-auto p-3 space-y-6">
          
          {/* Main Navigation Links */}
          <div className="space-y-1">
            <div className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
              Explore Platform
            </div>
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.url;
              return (
                <button
                  key={item.url}
                  onClick={() => handleNav(item.url)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all group ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-transparent text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <span className="flex-1 text-left">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Theory Subjects Accordion */}
          <div className="space-y-1">
            <button
              onClick={() => setSubjectsExpanded(!subjectsExpanded)}
              className="w-full flex items-center justify-between px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold hover:text-slate-300"
            >
              <span>Theory Courses (7)</span>
              <ChevronRight
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  subjectsExpanded ? 'rotate-90' : ''
                }`}
              />
            </button>

            {subjectsExpanded && (
              <div className="space-y-0.5 pt-1 pl-1">
                {allSubjects.map((subject) => {
                  const isActive = currentPath.startsWith(`/subject/${subject.id}`);
                  
                  // Calculate subject completion
                  const totalTopics = subject.units.reduce((acc, u) => acc + u.topics.length, 0);
                  const completedTopics = subject.units.reduce(
                    (acc, u) => acc + u.topics.filter((t) => completedTopicIds.has(t.id)).length,
                    0
                  );
                  const isDone = totalTopics > 0 && completedTopics === totalTopics;

                  return (
                    <button
                      key={subject.id}
                      onClick={() => handleNav(`/subject/${subject.id}`)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-all group text-left ${
                        isActive
                          ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-800/60 font-semibold'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        {getSubjectIcon(subject.code)}
                        <span className="truncate">{subject.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 shrink-0 ml-1">
                        {isDone ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          `${completedTopics}/${totalTopics}`
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Practical Lab Courses Accordion */}
          <div className="space-y-1">
            <button
              onClick={() => setLabsExpanded(!labsExpanded)}
              className="w-full flex items-center justify-between px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold hover:text-slate-300"
            >
              <span>Practical Labs (3)</span>
              <ChevronRight
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  labsExpanded ? 'rotate-90' : ''
                }`}
              />
            </button>

            {labsExpanded && (
              <div className="space-y-0.5 pt-1 pl-1">
                {allLabCourses.map((lab) => {
                  const isActive = currentPath.startsWith(`/labs/${lab.id}`);
                  return (
                    <button
                      key={lab.id}
                      onClick={() => handleNav(`/labs/${lab.id}`)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-all group text-left ${
                        isActive
                          ? 'bg-purple-950/60 text-purple-300 border border-purple-800/60 font-semibold'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <Beaker className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span className="truncate">{lab.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 shrink-0">
                        {lab.experiments.length} exp
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

        </div>

        {/* Footer / Settings link in Sidebar */}
        <div className="p-3 border-t border-slate-800/80 bg-slate-950/80">
          <button
            onClick={() => handleNav('/settings')}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
              currentPath === '/settings'
                ? 'bg-slate-800 text-slate-100 border border-slate-700'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Settings className="w-4 h-4 text-slate-400" />
            <span>Settings &amp; BEU Syllabus Info</span>
          </button>
        </div>
      </aside>
    </>
  );
};
