import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Circle, 
  ChevronDown, 
  Sigma, 
  Zap, 
  Award, 
  Clock, 
  ArrowRight,
  ChevronsUpDown,
  Sparkles,
  BookMarked,
  Filter,
  CheckCircle
} from 'lucide-react';
import { getSubjectById } from '../data';
import { useProgress } from '../context/ProgressContext';

interface SubjectDetailPageProps {
  subjectId: string;
  onNavigate: (url: string) => void;
}

export const SubjectDetailPage: React.FC<SubjectDetailPageProps> = ({ subjectId, onNavigate }) => {
  const subject = getSubjectById(subjectId);
  const { completedTopicIds, toggleTopicCompleted } = useProgress();
  
  // Track set of expanded unit IDs, defaulting to unit 1 of the active subject
  const [expandedUnitIds, setExpandedUnitIds] = useState<Set<string>>(() => {
    return new Set(subject?.units[0] ? [subject.units[0].id] : []);
  });
  const [selectedUnitFilter, setSelectedUnitFilter] = useState<string>('all');
  const [showCOs, setShowCOs] = useState<boolean>(false);
  const [showBooks, setShowBooks] = useState<boolean>(false);

  // Sync expanded unit when navigating between different subjects
  useEffect(() => {
    if (subject?.units && subject.units.length > 0) {
      setExpandedUnitIds(new Set([subject.units[0].id]));
    }
  }, [subjectId, subject]);

  const toggleUnit = (unitId: string) => {
    setExpandedUnitIds((prev) => {
      const next = new Set(prev);
      if (next.has(unitId)) {
        next.delete(unitId);
      } else {
        next.add(unitId);
      }
      return next;
    });
  };

  const toggleAllUnits = () => {
    if (!subject) return;
    if (expandedUnitIds.size === subject.units.length) {
      setExpandedUnitIds(new Set());
    } else {
      setExpandedUnitIds(new Set(subject.units.map((u) => u.id)));
    }
  };

  if (!subject) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-white">Subject Not Found</h2>
        <p className="text-sm text-slate-400">The requested subject ID could not be found in the BEU syllabus.</p>
        <button
          onClick={() => onNavigate('/subjects')}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
        >
          Back to Subjects
        </button>
      </div>
    );
  }

  const allTopicIds = subject.units.flatMap((u) => u.topics.map((t) => t.id));
  const completedCount = allTopicIds.filter((id) => completedTopicIds.has(id)).length;
  const progress = allTopicIds.length > 0 ? Math.round((completedCount / allTopicIds.length) * 100) : 0;

  const visibleUnits = selectedUnitFilter === 'all' 
    ? subject.units 
    : subject.units.filter((u) => u.id === selectedUnitFilter);

  return (
    <div className="space-y-8 py-6 animate-fade-in max-w-5xl mx-auto">
      
      {/* Back button & Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <button
          onClick={() => onNavigate('/subjects')}
          className="flex items-center gap-1 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Subjects</span>
        </button>
        <span>/</span>
        <span className="text-slate-200 font-medium truncate">{subject.name}</span>
      </div>

      {/* Subject Hero Header (GeeksforGeeks Style) */}
      <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800">
              Course Code: {subject.code}
            </span>
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              {subject.credits} Credits
            </span>
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              {subject.totalHours} Total Hours ({subject.lectureHours}L / Week)
            </span>
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-indigo-950 text-indigo-300 border border-indigo-800">
              BEU B.Tech Semester 1
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {subject.name}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            {subject.description}
          </p>

          {/* Quick Stats & Progress Bar */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800/80">
            <div className="space-y-1.5 flex-1 max-w-md">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium">Mastery Progress</span>
                <span className="font-mono text-cyan-400 font-bold">
                  {completedCount} / {allTopicIds.length} Topics ({progress}%)
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => onNavigate(`/formulas?subject=${subject.id}`)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-xs text-slate-200 transition-colors font-semibold shadow-sm"
              >
                <Sigma className="w-4 h-4 text-amber-400" />
                <span>Formula Sheet</span>
              </button>
              <button
                onClick={() => onNavigate(`/revision?subject=${subject.id}`)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-xs text-slate-200 transition-colors font-semibold shadow-sm"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Quick Revision</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Concept Roadmap (Visual Schematic) */}
      <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase font-bold tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Curriculum Concept Flowchart &amp; Unit Roadmap</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
          {subject.units.map((u) => (
            <div
              key={u.id}
              onClick={() => {
                setSelectedUnitFilter(u.id);
                setExpandedUnitIds(new Set([u.id]));
              }}
              className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                selectedUnitFilter === u.id
                  ? 'bg-cyan-950/60 border-cyan-500/80 shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 mb-1">
                <span>Unit {u.unitNumber}</span>
                <span>{u.hours}h</span>
              </div>
              <div className="text-xs font-bold text-slate-200 line-clamp-2 leading-snug">
                {u.title}
              </div>
              <div className="text-[10px] text-slate-400 mt-1 font-mono">
                {u.topics.length} In-Depth Notes
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Outcomes & Reference Books Collapsible Triggers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* CO Trigger */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden">
          <button
            onClick={() => setShowCOs(!showCOs)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-850/50 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-cyan-400" />
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white">Course Outcomes (CO1 – CO5)</h3>
                <p className="text-[10px] text-slate-400">BEU syllabus prescribed competencies</p>
              </div>
            </div>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${showCOs ? 'rotate-180' : ''}`} />
          </button>
          {showCOs && (
            <div className="p-4 pt-0 space-y-2 border-t border-slate-800/80 text-xs">
              {subject.courseOutcomes.map((co) => (
                <div key={co.code} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                  <span className="font-mono font-bold text-cyan-400 text-[11px]">{co.code}:</span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">{co.statement}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Books Trigger */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden">
          <button
            onClick={() => setShowBooks(!showBooks)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-850/50 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <BookMarked className="w-4 h-4 text-purple-400" />
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white">Prescribed Reference Textbooks</h3>
                <p className="text-[10px] text-slate-400">Standard BEU university authors &amp; editions</p>
              </div>
            </div>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${showBooks ? 'rotate-180' : ''}`} />
          </button>
          {showBooks && (
            <div className="p-4 pt-0 space-y-2 border-t border-slate-800/80 text-xs">
              {subject.referenceBooks.map((b, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                  <span className="font-bold text-slate-200 text-xs block">{b.title}</span>
                  <div className="text-[11px] text-slate-400 flex items-center gap-2">
                    <span className="text-purple-300">Author: {b.authors}</span>
                    <span>•</span>
                    <span>{b.publisher}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Unit Filter Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono font-bold text-slate-300">FILTER UNITS:</span>
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setSelectedUnitFilter('all')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
                selectedUnitFilter === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              All ({subject.units.length})
            </button>
            {subject.units.map((u) => (
              <button
                key={u.id}
                onClick={() => {
                  setSelectedUnitFilter(u.id);
                  setExpandedUnitIds(new Set([u.id]));
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
                  selectedUnitFilter === u.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Unit {u.unitNumber}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={toggleAllUnits}
          className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 transition-colors"
        >
          <ChevronsUpDown className="w-3.5 h-3.5" />
          <span>{expandedUnitIds.size === subject.units.length ? 'Collapse All' : 'Expand All'}</span>
        </button>
      </div>

      {/* Units & In-Depth Topics Section (GeeksforGeeks Format) */}
      <div className="space-y-4">
        {visibleUnits.map((unit) => {
          const isExpanded = expandedUnitIds.has(unit.id);
          const completedInUnit = unit.topics.filter((t) => completedTopicIds.has(t.id)).length;

          return (
            <div
              key={unit.id}
              className="rounded-3xl bg-slate-900/95 border border-slate-800 overflow-hidden transition-all shadow-xl"
            >
              {/* Unit Header Bar */}
              <button
                onClick={() => toggleUnit(unit.id)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-850/60 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono text-sm font-extrabold shrink-0 shadow-lg shadow-cyan-500/10">
                    U{unit.unitNumber}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-cyan-400 font-bold">
                        Unit {unit.unitNumber}.0 • Syllabus Module
                      </span>
                      <span className="text-xs text-slate-500">•</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                        <Clock className="w-3.5 h-3.5" /> {unit.hours} Lecture Hours
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {unit.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 ml-2">
                  <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 hidden sm:inline">
                    {completedInUnit}/{unit.topics.length} Completed
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Unit Body (when expanded) */}
              {isExpanded && (
                <div className="p-5 sm:p-6 pt-0 border-t border-slate-800/80 space-y-5">
                  {/* Unit Learning Objectives */}
                  {unit.learningObjectives && unit.learningObjectives.length > 0 && (
                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                      <span className="text-xs font-mono text-cyan-400 font-bold block uppercase tracking-wider">
                        Core Unit Competencies &amp; Objectives:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 leading-relaxed">
                        {unit.learningObjectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Topics List with GeeksforGeeks Style Cards */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-slate-400 uppercase font-bold block">
                      Detailed Theory Modules &amp; Explanations ({unit.topics.length} Topics):
                    </span>

                    {unit.topics.map((topic) => {
                      const isDone = completedTopicIds.has(topic.id);

                      return (
                        <div
                          key={topic.id}
                          className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group ${
                            isDone
                              ? 'bg-emerald-950/15 border-emerald-800/40 shadow-sm'
                              : 'bg-slate-950/80 border-slate-800/90 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5'
                          }`}
                        >
                          <div className="flex items-start gap-3.5 flex-1 min-w-0">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleTopicCompleted(topic.id);
                              }}
                              className="p-1 rounded text-slate-500 hover:text-emerald-400 transition-colors mt-0.5"
                              title={isDone ? 'Mark Incomplete' : 'Mark Complete'}
                            >
                              {isDone ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                              ) : (
                                <Circle className="w-5 h-5" />
                              )}
                            </button>

                            <div 
                              onClick={() => onNavigate(`/subject/${subject.id}/topic/${topic.id}`)}
                              className="flex-1 cursor-pointer space-y-1.5"
                            >
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="text-xs font-mono text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/80">
                                  Topic {topic.topicNumber}
                                </span>
                                {topic.examFocus?.likelyMarks && (
                                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800/60 font-semibold">
                                    BEU Exam: {topic.examFocus.likelyMarks}
                                  </span>
                                )}
                                {topic.formulas && topic.formulas.length > 0 && (
                                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800/60">
                                    {topic.formulas.length} Formulas
                                  </span>
                                )}
                              </div>

                              <h4 className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                                {topic.title}
                              </h4>

                              {/* Rich Brief Summary (GeeksforGeeks Style) */}
                              <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                                {topic.quickDefinition}
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => onNavigate(`/subject/${subject.id}/topic/${topic.id}`)}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 group-hover:bg-cyan-500 group-hover:text-slate-950 border border-slate-800 group-hover:border-cyan-400 text-xs text-slate-200 font-bold transition-all shadow-md shrink-0"
                          >
                            <span>Read Full Notes &amp; Diagrams</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
