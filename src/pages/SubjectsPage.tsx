import React, { useState } from 'react';
import { 
  BookOpen, 
  Layers, 
  Search, 
  Calculator, 
  Atom, 
  Zap, 
  Sparkles, 
  Binary, 
  ShieldCheck, 
  HeartHandshake
} from 'lucide-react';
import { allSubjects } from '../data';
import { useProgress } from '../context/ProgressContext';

interface SubjectsPageProps {
  onNavigate: (url: string) => void;
}

export const SubjectsPage: React.FC<SubjectsPageProps> = ({ onNavigate }) => {
  const [filterQuery, setFilterQuery] = useState('');
  const { completedTopicIds } = useProgress();

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

  const filteredSubjects = allSubjects.filter((s) => {
    const q = filterQuery.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.code.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-8 py-6 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-mono mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>BEU CURRICULUM</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Theory Courses (7 Subjects)
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Bihar Engineering University B.Tech 1st Semester • CSE &amp; Group-A (Batch 2026–2030)
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Filter subjects..."
            className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Grid of All Subjects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSubjects.map((subject) => {
          const allTopicIds = subject.units.flatMap((u) => u.topics.map((t) => t.id));
          const completedCount = allTopicIds.filter((id) => completedTopicIds.has(id)).length;
          const progress = allTopicIds.length > 0 ? Math.round((completedCount / allTopicIds.length) * 100) : 0;

          return (
            <div
              key={subject.id}
              onClick={() => onNavigate(`/subject/${subject.id}`)}
              className="group relative rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 p-6 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                    {getSubjectIcon(subject.code)}
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-800/80 px-2 py-0.5 rounded">
                      {subject.credits} Credits
                    </span>
                    <div className="text-[10px] text-slate-500 font-mono mt-1">Code: {subject.code}</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {subject.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {subject.description}
                </p>

                {/* Course Outcomes Preview */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {subject.courseOutcomes.slice(0, 3).map((co) => (
                    <span
                      key={co.code}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                      title={co.statement}
                    >
                      {co.code}
                    </span>
                  ))}
                  {subject.courseOutcomes.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-slate-500">
                      +{subject.courseOutcomes.length - 3} COs
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{subject.units.length} Units ({allTopicIds.length} Topics)</span>
                  </span>
                  <span className="font-mono text-cyan-400 font-semibold">{progress}%</span>
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
  );
};
