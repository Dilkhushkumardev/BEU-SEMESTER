import React, { useState } from 'react';
import { 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Search 
} from 'lucide-react';
import { allSubjects } from '../data';
import { MathView } from '../components/math/MathView';

interface QuickRevisionPageProps {
  onNavigate: (url: string) => void;
  initialSubjectFilter?: string;
}

export const QuickRevisionPage: React.FC<QuickRevisionPageProps> = ({ onNavigate, initialSubjectFilter }) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(() => {
    const match = initialSubjectFilter ? allSubjects.find((s) => s.id === initialSubjectFilter || s.code === initialSubjectFilter) : undefined;
    return match ? match.id : allSubjects[0].id;
  });
  const [selectedUnitId, setSelectedUnitId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  React.useEffect(() => {
    if (initialSubjectFilter) {
      const match = allSubjects.find((s) => s.id === initialSubjectFilter || s.code === initialSubjectFilter);
      if (match) {
        setSelectedSubjectId(match.id);
        setSelectedUnitId('all');
      }
    }
  }, [initialSubjectFilter]);

  const currentSubject = allSubjects.find((s) => s.id === selectedSubjectId) || allSubjects[0];

  const unitsToDisplay = selectedUnitId === 'all'
    ? currentSubject.units
    : currentSubject.units.filter((u) => u.id === selectedUnitId);

  return (
    <div className="space-y-8 py-6 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-2">
            <Zap className="w-3.5 h-3.5" />
            <span>EXAM CRAM ENGINE</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Quick Revision Mode
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            High-yield definitions, memory hooks, and must-know exam formulas for rapid last-minute preparation.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search revision notes..."
            className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Subject Selector Tabs */}
      <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-none">
        {allSubjects.map((sub) => {
          const active = selectedSubjectId === sub.id;
          return (
            <button
              key={sub.id}
              onClick={() => {
                setSelectedSubjectId(sub.id);
                setSelectedUnitId('all');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                active
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {sub.name}
            </button>
          );
        })}
      </div>

      {/* Unit Selector Pills */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <button
          onClick={() => setSelectedUnitId('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            selectedUnitId === 'all'
              ? 'bg-cyan-950 text-cyan-300 border border-cyan-800'
              : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          All 5 Units
        </button>

        {currentSubject.units.map((unit) => (
          <button
            key={unit.id}
            onClick={() => setSelectedUnitId(unit.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedUnitId === unit.id
                ? 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            Unit {unit.unitNumber}: {unit.title.slice(0, 24)}...
          </button>
        ))}
      </div>

      {/* Revision Cards Section */}
      <div className="space-y-8">
        {unitsToDisplay.map((unit) => {
          const filteredTopics = unit.topics.filter((t) => {
            const q = searchQuery.toLowerCase().trim();
            if (!q) return true;
            return (
              t.title.toLowerCase().includes(q) ||
              t.quickDefinition.toLowerCase().includes(q) ||
              t.quickRevision?.some((k) => k.toLowerCase().includes(q))
            );
          });

          if (filteredTopics.length === 0) return null;

          return (
            <div key={unit.id} className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                <span className="w-6 h-6 rounded-md bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center font-mono text-xs font-bold">
                  {unit.unitNumber}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Unit {unit.unitNumber}: {unit.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTopics.map((topic) => (
                  <div
                    key={topic.id}
                    className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3.5 flex flex-col justify-between shadow-lg"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                          {topic.topicNumber}
                        </span>
                        {topic.examFocus?.likelyMarks && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-amber-300 border border-slate-800">
                            {topic.examFocus.likelyMarks}
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-slate-100">
                        {topic.title}
                      </h4>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {topic.quickDefinition}
                      </p>

                      {/* Key Takeaways */}
                      {topic.quickRevision && topic.quickRevision.length > 0 && (
                        <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                          <span className="text-[10px] font-mono text-cyan-400 uppercase font-semibold block">
                            Key Memory Takeaways:
                          </span>
                          {topic.quickRevision.slice(0, 3).map((takeaway, i) => (
                            <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span className="leading-tight">{takeaway}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Must Remember Formula (if present) */}
                      {topic.formulas && topic.formulas.length > 0 && (
                        <div className="p-2.5 rounded-lg bg-slate-950 border border-cyan-500/30 text-xs font-mono text-cyan-200 text-center overflow-x-auto">
                          <MathView math={topic.formulas[0].latex} block />
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-end">
                      <button
                        onClick={() => onNavigate(`/subject/${currentSubject.id}/topic/${topic.id}`)}
                        className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors"
                      >
                        <span>Full 10-Section Notes</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
