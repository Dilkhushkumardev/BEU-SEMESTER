import React from 'react';
import { 
  Bookmark, 
  Trash2, 
  ArrowRight, 
  Sigma, 
  FileText, 
  Beaker
} from 'lucide-react';
import { useBookmarks } from '../context/BookmarkContext';
import { findTopicGlobal, allFormulas, findLabExperimentGlobal } from '../data';

interface BookmarksPageProps {
  onNavigate: (url: string) => void;
}

export const BookmarksPage: React.FC<BookmarksPageProps> = ({ onNavigate }) => {
  const { 
    bookmarkedTopicIds, 
    bookmarkedFormulaIds, 
    bookmarkedLabIds, 
    toggleBookmarkTopic,
    toggleBookmarkFormula,
    toggleBookmarkLab,
    totalBookmarksCount
  } = useBookmarks();

  // Aggregate bookmarked topics
  const bookmarkedTopics = Array.from(bookmarkedTopicIds)
    .map((id) => findTopicGlobal(id))
    .filter(Boolean);

  // Aggregate bookmarked formulas
  const bookmarkedFormulas = allFormulas.filter((f) => bookmarkedFormulaIds.has(f.id));

  // Aggregate bookmarked labs
  const bookmarkedLabs = Array.from(bookmarkedLabIds)
    .map((id) => findLabExperimentGlobal(id))
    .filter(Boolean);

  return (
    <div className="space-y-8 py-6 animate-fade-in max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/60 text-amber-400 text-xs font-mono mb-2">
            <Bookmark className="w-3.5 h-3.5" />
            <span>SAVED REPOSITORIES</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Saved Bookmarks ({totalBookmarksCount})
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Quick-access pinboard for your important syllabus topics, formulas, and lab experiments.
          </p>
        </div>
      </div>

      {totalBookmarksCount === 0 ? (
        <div className="py-20 text-center space-y-4 bg-slate-900/40 rounded-3xl border border-slate-800">
          <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-amber-400 mx-auto">
            <Bookmark className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-white">No Bookmarks Saved Yet</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto">
            Click the bookmark icon on any topic, formula card, or lab experiment to pin it here for quick revision.
          </p>
          <button
            onClick={() => onNavigate('/subjects')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20"
          >
            Browse All Subjects
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          
          {/* Saved Topics */}
          {bookmarkedTopics.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Saved Topics ({bookmarkedTopics.length})</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bookmarkedTopics.map((item) => {
                  if (!item) return null;
                  return (
                    <div
                      key={item.topic.id}
                      className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-3 shadow-lg group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0 mt-0.5">
                            <FileText className="w-4 h-4 text-emerald-400" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                              {item.subject.name}
                            </span>
                            <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mt-1.5">
                              {item.topic.title}
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 mt-1">{item.topic.quickDefinition}</p>
                          </div>
                        </div>

                        <button
                          onClick={() => toggleBookmarkTopic(item.topic.id)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-800 transition-colors shrink-0"
                          title="Remove bookmark"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-end">
                        <button
                          onClick={() => onNavigate(`/subject/${item.subject.id}/topic/${item.topic.id}`)}
                          className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors"
                        >
                          <span>Open Topic</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Saved Formulas */}
          {bookmarkedFormulas.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sigma className="w-4 h-4 text-amber-400" />
                <span>Saved Formulas ({bookmarkedFormulas.length})</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bookmarkedFormulas.map((formula) => (
                  <div
                    key={formula.id}
                    className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-3 shadow-lg group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0 mt-0.5">
                          <Sigma className="w-4 h-4 text-amber-400" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-amber-400 border border-amber-900/40">
                            {formula.subjectName}
                          </span>
                          <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors mt-1.5">
                            {formula.title}
                          </h4>
                          <p className="text-xs text-slate-400 line-clamp-2 mt-1">{formula.explanation}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleBookmarkFormula(formula.id)}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-800 transition-colors shrink-0"
                        title="Remove bookmark"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-end">
                      <button
                        onClick={() => onNavigate(`/formulas`)}
                        className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
                      >
                        <span>Open Formula Bank</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Saved Labs */}
          {bookmarkedLabs.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Beaker className="w-4 h-4 text-purple-400" />
                <span>Saved Practical Labs ({bookmarkedLabs.length})</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bookmarkedLabs.map((item) => {
                  if (!item) return null;
                  return (
                    <div
                      key={item.experiment.id}
                      className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-3 shadow-lg group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0 mt-0.5">
                            <Beaker className="w-4 h-4 text-purple-400" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-purple-300 border border-purple-900/40">
                              LE-{item.experiment.experimentNumber} • {item.labCourse.name}
                            </span>
                            <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors mt-1.5">
                              {item.experiment.title}
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 mt-1">{item.experiment.objective}</p>
                          </div>
                        </div>

                        <button
                          onClick={() => toggleBookmarkLab(item.experiment.id)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-800 transition-colors shrink-0"
                          title="Remove bookmark"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-end">
                        <button
                          onClick={() => onNavigate(`/labs/${item.labCourse.id}/${item.experiment.id}`)}
                          className="text-xs text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1 transition-colors"
                        >
                          <span>Open Experiment</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
