import React from 'react';
import { 
  BarChart3, 
  Clock, 
  Bookmark, 
  BookOpen, 
  TrendingUp, 
  ArrowRight, 
  Award,
  ChevronRight,
  Calculator,
  Atom,
  Zap,
  Sparkles,
  Binary,
  ShieldCheck,
  HeartHandshake
} from 'lucide-react';
import { allSubjects, findTopicGlobal } from '../data';
import { useProgress } from '../context/ProgressContext';
import { useBookmarks } from '../context/BookmarkContext';

interface DashboardPageProps {
  onNavigate: (url: string) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
  const { 
    completedTopicIds, 
    recentTopicIds, 
    stats 
  } = useProgress();
  const { bookmarkedTopicIds, bookmarkedFormulaIds, bookmarkedLabIds } = useBookmarks();

  const totalSyllabusTopics = 56;
  const overallPercentage = Math.min(100, Math.round((stats.completedTopicsCount / totalSyllabusTopics) * 100));

  const continueTopicInfo = recentTopicIds.length > 0 ? findTopicGlobal(recentTopicIds[0]) : null;

  const getSubjectIcon = (code: string) => {
    switch (code) {
      case '100102':
        return <Calculator className="w-5 h-5 text-cyan-400" />;
      case '100104':
        return <Atom className="w-5 h-5 text-blue-400" />;
      case '100111':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case '100105':
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case '100108':
        return <Binary className="w-5 h-5 text-purple-400" />;
      case '100110':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case '100109':
        return <HeartHandshake className="w-5 h-5 text-rose-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <div className="space-y-10 py-6 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-2">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>STUDENT DASHBOARD</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Semester Progress &amp; Analytics
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Track your mastery across all 7 theory subjects, 35 units, and 45 practical labs.
          </p>
        </div>

        {/* Global Progress Radial Card */}
        <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-xl">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-800"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-cyan-400 transition-all duration-700 stroke-current"
                strokeWidth="3.5"
                strokeDasharray={`${overallPercentage}, 100`}
                strokeLinecap="round"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute text-sm font-bold text-white font-mono">
              {overallPercentage}%
            </span>
          </div>
          <div>
            <div className="text-xs text-slate-400">Syllabus Completion</div>
            <div className="text-sm font-bold text-white">
              {stats.completedTopicsCount} of {totalSyllabusTopics} Topics
            </div>
            <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-0.5">
              <Award className="w-3.5 h-3.5" />
              <span>Target: 9+ SGPA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Learning Jump Card */}
      {continueTopicInfo && (
        <div className="rounded-2xl bg-gradient-to-r from-blue-950/60 via-cyan-950/40 to-slate-900 border border-cyan-500/40 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
              <TrendingUp className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400 font-semibold">Active Study Topic</span>
              <h3 className="text-base font-bold text-white">{continueTopicInfo.topic.title}</h3>
              <p className="text-xs text-slate-400">{continueTopicInfo.subject.name}</p>
            </div>
          </div>
          <button
            onClick={() => onNavigate(`/subject/${continueTopicInfo.subject.id}/topic/${continueTopicInfo.topic.id}`)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all shrink-0"
          >
            <span>Resume Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Subject-Wise Mastery Progress Grid */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-cyan-400" />
          <span>Subject-Wise Progress Breakdown</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allSubjects.map((subject) => {
            const allTopicIds = subject.units.flatMap((u) => u.topics.map((t) => t.id));
            const completedCount = allTopicIds.filter((id) => completedTopicIds.has(id)).length;
            const progress = allTopicIds.length > 0 ? Math.round((completedCount / allTopicIds.length) * 100) : 0;

            return (
              <div
                key={subject.id}
                onClick={() => onNavigate(`/subject/${subject.id}`)}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
                      {getSubjectIcon(subject.code)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                        {subject.code}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors mt-1.5">
                        {subject.name}
                      </h3>
                    </div>
                  </div>
                  <span className="text-sm font-bold font-mono text-cyan-400">
                    {progress}%
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{completedCount} of {allTopicIds.length} topics completed</span>
                    <span>{subject.units.length} Units</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two Column Section: Recently Viewed & Saved Bookmarks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Recently Viewed Topics */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Recently Studied</span>
          </h3>

          {recentTopicIds.length === 0 ? (
            <p className="text-xs text-slate-500 py-6 text-center">
              No recent topics yet. Click into any subject to start learning!
            </p>
          ) : (
            <div className="space-y-2">
              {recentTopicIds.slice(0, 5).map((topicId) => {
                const info = findTopicGlobal(topicId);
                if (!info) return null;
                return (
                  <div
                    key={topicId}
                    onClick={() => onNavigate(`/subject/${info.subject.id}/topic/${info.topic.id}`)}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                        {info.topic.title}
                      </h4>
                      <p className="text-[11px] text-slate-400">{info.subject.name}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Pinned Bookmarks Summary */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-amber-400" />
              <span>Saved Bookmarks ({bookmarkedTopicIds.size + bookmarkedFormulaIds.size + bookmarkedLabIds.size})</span>
            </h3>
            <button
              onClick={() => onNavigate('/bookmarks')}
              className="text-xs text-cyan-400 hover:text-cyan-300 font-medium"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-lg font-bold text-emerald-400 font-mono">{bookmarkedTopicIds.size}</div>
              <div className="text-[11px] text-slate-400">Topics</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-lg font-bold text-amber-400 font-mono">{bookmarkedFormulaIds.size}</div>
              <div className="text-[11px] text-slate-400">Formulas</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-lg font-bold text-purple-400 font-mono">{bookmarkedLabIds.size}</div>
              <div className="text-[11px] text-slate-400">Labs</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
