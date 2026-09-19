import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Layers, 
  CheckCircle2, 
  Circle, 
  ChevronDown, 
  Sigma, 
  Zap, 
  Award, 
  Clock, 
  ArrowRight,
  ChevronsUpDown
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
  const [showCOs, setShowCOs] = useState<boolean>(true);

  // Sync expanded unit when navigating between different subjects
  useEffect(() => {
    if (subject?.units && subject.units.length > 0) {
      setExpandedUnitIds(new Set([subject.units[0].id]));
    }
  }, [subjectId]);

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

  return (
    <div className="space-y-8 py-6 animate-fade-in">
      
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

      {/* Subject Hero Header */}
      <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
              Course Code: {subject.code}
            </span>
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              {subject.credits} Credits
            </span>
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              {subject.lectureHours} Lectures / Week
            </span>
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              {subject.totalHours} Total Hours
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {subject.name}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            {subject.description}
          </p>

          {/* Quick Actions & Progress Bar */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800/80">
            <div className="space-y-1.5 flex-1 max-w-md">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Subject Progress</span>
                <span className="font-mono text-cyan-400 font-bold">
                  {completedCount} / {allTopicIds.length} Topics ({progress}%)
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate(`/formulas?subject=${subject.id}`)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-xs text-slate-200 transition-colors"
              >
                <Sigma className="w-3.5 h-3.5 text-amber-400" />
                <span>Formulas</span>
              </button>
              <button
                onClick={() => onNavigate(`/revision?subject=${subject.id}`)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-xs text-slate-200 transition-colors"
              >
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Quick Revision</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Course Outcomes (CO1-CO5) Accordion */}
      <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden">
        <button
          onClick={() => setShowCOs(!showCOs)}
          className="w-full flex items-center justify-between p-4 sm:px-6 text-left hover:bg-slate-850/50 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Course Outcomes (CO1 – CO5)
              </h3>
              <p className="text-[11px] text-slate-400">BEU syllabus prescribed competencies and mapping</p>
            </div>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
              showCOs ? 'rotate-180' : ''
            }`}
          />
        </button>

        {showCOs && (
          <div className="p-4 sm:p-6 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 border-t border-slate-800/80">
            {subject.courseOutcomes.map((co) => (
              <div key={co.code} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/90 space-y-1">
                <span className="text-xs font-mono font-bold text-cyan-400">{co.code}</span>
                <p className="text-xs text-slate-300 leading-relaxed">{co.statement}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 5 Units Accordion & Topics */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            <span>Syllabus Units &amp; Structured Topics</span>
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleAllUnits}
              className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <ChevronsUpDown className="w-3.5 h-3.5" />
              <span>{expandedUnitIds.size === subject.units.length ? 'Collapse All' : 'Expand All'}</span>
            </button>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">{subject.units.length} Units Total</span>
          </div>
        </div>

        <div className="space-y-3">
          {subject.units.map((unit) => {
            const isExpanded = expandedUnitIds.has(unit.id);
            const completedInUnit = unit.topics.filter((t) => completedTopicIds.has(t.id)).length;

            return (
              <div
                key={unit.id}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden transition-all"
              >
                {/* Unit Header Bar */}
                <button
                  onClick={() => toggleUnit(unit.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-850/60 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-700/80 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold shrink-0">
                      U{unit.unitNumber}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-mono text-cyan-400 font-semibold">
                          Unit {unit.unitNumber}.0
                        </span>
                        <span className="text-xs text-slate-500">•</span>
                        <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                          <Clock className="w-3 h-3" /> {unit.hours} Hours
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        {unit.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 ml-2">
                    <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                      {completedInUnit}/{unit.topics.length} Done
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Unit Body (when expanded) */}
                {isExpanded && (
                  <div className="p-4 sm:p-6 pt-0 border-t border-slate-800/80 space-y-4">
                    {/* Unit Learning Objectives */}
                    {unit.learningObjectives && unit.learningObjectives.length > 0 && (
                      <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                        <span className="text-[11px] font-mono text-cyan-400 font-semibold block">
                          Unit Learning Objectives:
                        </span>
                        <ul className="list-disc list-inside text-[11px] text-slate-300 space-y-1 leading-relaxed">
                          {unit.learningObjectives.map((obj, i) => (
                            <li key={i}>{obj}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Topics List */}
                    <div className="space-y-2">
                      {unit.topics.map((topic) => {
                        const isDone = completedTopicIds.has(topic.id);

                        return (
                          <div
                            key={topic.id}
                            className={`p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 group ${
                              isDone
                                ? 'bg-emerald-950/10 border-emerald-900/40'
                                : 'bg-slate-950/60 border-slate-800/80 hover:border-cyan-500/40'
                            }`}
                          >
                            <div className="flex items-start gap-3 flex-1 min-w-0">
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
                                className="flex-1 cursor-pointer"
                              >
                                <div className="flex items-center gap-2 mb-0.5">
                                  <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                                    {topic.topicNumber}
                                  </span>
                                  {topic.examFocus?.likelyMarks && (
                                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-900 text-amber-300 border border-slate-800">
                                      {topic.examFocus.likelyMarks}
                                    </span>
                                  )}
                                </div>
                                <h4 className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                                  {topic.title}
                                </h4>
                                <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                  {topic.quickDefinition}
                                </p>
                              </div>
                            </div>

                            <button
                              onClick={() => onNavigate(`/subject/${subject.id}/topic/${topic.id}`)}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 group-hover:bg-cyan-500 group-hover:text-slate-950 border border-slate-800 group-hover:border-cyan-400 text-xs text-slate-300 font-semibold transition-all shrink-0"
                            >
                              <span>Learn</span>
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

    </div>
  );
};
