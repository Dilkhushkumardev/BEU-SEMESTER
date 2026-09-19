import React, { useState } from 'react';
import { 
  Sigma, 
  Search, 
  Copy, 
  Check, 
  Bookmark, 
  ArrowRight, 
  Calculator, 
  Atom, 
  Zap, 
  Sparkles
} from 'lucide-react';
import { allFormulas } from '../data';
import { useBookmarks } from '../context/BookmarkContext';
import { MathView } from '../components/math/MathView';
import type { FormulaItem } from '../types';

interface FormulaSheetPageProps {
  onNavigate: (url: string) => void;
  initialSubjectFilter?: string;
}

export const FormulaSheetPage: React.FC<FormulaSheetPageProps> = ({ onNavigate, initialSubjectFilter }) => {
  const [selectedSubject, setSelectedSubject] = useState<string>(initialSubjectFilter || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const { isFormulaBookmarked, toggleBookmarkFormula } = useBookmarks();

  const handleCopyLatex = (formula: FormulaItem) => {
    navigator.clipboard.writeText(formula.latex);
    setCopiedId(formula.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const isMatchingSubject = (formulaSubId: string, targetSubId: string) => {
    if (targetSubId === 'all') return true;
    if (formulaSubId === targetSubId) return true;
    if ((formulaSubId === 'phy-1' || formulaSubId === 'physics-1') && (targetSubId === 'phy-1' || targetSubId === 'physics-1' || targetSubId === '100104')) return true;
    if ((formulaSubId === 'ee-1' || formulaSubId === 'electrical-1') && (targetSubId === 'ee-1' || targetSubId === 'electrical-1' || targetSubId === '100111')) return true;
    if ((formulaSubId === 'math-1' || formulaSubId === '100102') && (targetSubId === 'math-1' || targetSubId === '100102')) return true;
    if ((formulaSubId === 'ai-1' || formulaSubId === '100105') && (targetSubId === 'ai-1' || targetSubId === '100105')) return true;
    return false;
  };

  const filteredFormulas = allFormulas.filter((f) => {
    const matchesSubject = isMatchingSubject(f.subjectId, selectedSubject);
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      f.title.toLowerCase().includes(q) ||
      f.latex.toLowerCase().includes(q) ||
      f.explanation.toLowerCase().includes(q) ||
      f.subjectName.toLowerCase().includes(q);

    return matchesSubject && matchesSearch;
  });

  return (
    <div className="space-y-8 py-6 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/60 text-amber-400 text-xs font-mono mb-2">
            <Sigma className="w-3.5 h-3.5" />
            <span>FORMULA BANK</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            BEU 1st Semester Formula Sheet
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Interactive mathematical formulations with KaTeX rendering, variable definitions, and LaTeX export.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search formulas by name or symbol..."
            className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      {/* Subject Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setSelectedSubject('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            selectedSubject === 'all'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
              : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          All Subjects ({allFormulas.length})
        </button>

        {[
          { id: 'math-1', name: 'Engineering Math-I', icon: Calculator },
          { id: 'phy-1', name: 'Engineering Physics', icon: Atom },
          { id: 'ee-1', name: 'BEEE', icon: Zap },
          { id: 'ai-1', name: 'Intro to AI', icon: Sparkles },
        ].map((sub) => {
          const Icon = sub.icon;
          const count = allFormulas.filter((f) => f.subjectId === sub.id).length;
          const active = selectedSubject === sub.id;

          return (
            <button
              key={sub.id}
              onClick={() => setSelectedSubject(sub.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                active
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{sub.name} ({count})</span>
            </button>
          );
        })}
      </div>

      {/* Formulas Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredFormulas.map((formula) => {
          const bookmarked = isFormulaBookmarked(formula.id);

          return (
            <div
              key={formula.id}
              className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4 shadow-lg group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-amber-400 border border-amber-900/50">
                      {formula.subjectName} • Unit {formula.unitNumber}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white mt-1.5 group-hover:text-amber-300 transition-colors">
                      {formula.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleCopyLatex(formula)}
                      className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-amber-300 transition-colors"
                      title="Copy LaTeX Formula"
                    >
                      {copiedId === formula.id ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      onClick={() => toggleBookmarkFormula(formula.id)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        bookmarked
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-amber-300'
                      }`}
                      title="Bookmark Formula"
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* KaTeX Display Box */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 overflow-x-auto text-center font-mono">
                  <MathView math={formula.latex} block />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {formula.explanation}
                </p>

                {/* Variables */}
                {formula.variables && formula.variables.length > 0 && (
                  <div className="pt-2 border-t border-slate-800/80 space-y-1">
                    <span className="text-[10px] font-mono text-amber-400/80 font-semibold block">
                      Notation:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-400">
                      {formula.variables.map((v, i) => (
                        <div key={i} className="flex items-center gap-1.5 truncate">
                          <MathView math={v.symbol} />
                          <span className="truncate">= {v.meaning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Jump Link */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 truncate max-w-[200px]">
                  {formula.category} • {formula.unitTitle}
                </span>
                <button
                  onClick={() => onNavigate(`/subject/${formula.subjectId}`)}
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Explore Subject</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
