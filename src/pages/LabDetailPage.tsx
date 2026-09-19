import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Beaker, 
  CheckCircle2, 
  HelpCircle, 
  Copy, 
  Check, 
  Code2, 
  AlertTriangle, 
  Table, 
  FileText, 
  Layers, 
  Bookmark, 
  ChevronDown
} from 'lucide-react';
import { getLabCourseById, getLabExperimentById } from '../data';
import { useBookmarks } from '../context/BookmarkContext';
import { MathView } from '../components/math/MathView';

interface LabDetailPageProps {
  courseId: string;
  experimentId: string;
  onNavigate: (url: string) => void;
}

export const LabDetailPage: React.FC<LabDetailPageProps> = ({ courseId, experimentId, onNavigate }) => {
  const labCourse = getLabCourseById(courseId);
  const experiment = labCourse ? getLabExperimentById(labCourse.id, experimentId) : undefined;
  const { isLabBookmarked, toggleBookmarkLab } = useBookmarks();

  const [copiedCode, setCopiedCode] = useState(false);
  const [expandedViva, setExpandedViva] = useState<number | null>(null);

  if (!labCourse || !experiment) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-white">Experiment Not Found</h2>
        <p className="text-sm text-slate-400">The requested lab experiment could not be found in the BEU syllabus.</p>
        <button
          onClick={() => onNavigate('/labs')}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
        >
          Back to Labs
        </button>
      </div>
    );
  }

  const bookmarked = isLabBookmarked(experiment.id);

  const handleCopyCode = () => {
    if (experiment.codeSnippet?.code) {
      navigator.clipboard.writeText(experiment.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="space-y-8 py-6 animate-fade-in max-w-4xl mx-auto">
      
      {/* Breadcrumbs & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('/labs')}
            className="hover:text-purple-300 transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Labs</span>
          </button>
          <span>/</span>
          <span className="text-slate-400">{labCourse.name}</span>
          <span>/</span>
          <span className="text-purple-400 font-mono">LE-{experiment.experimentNumber}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleBookmarkLab(experiment.id)}
            className={`px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-semibold ${
              bookmarked
                ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>{bookmarked ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* Experiment Header Hero */}
      <div className="rounded-3xl bg-gradient-to-b from-purple-950/40 via-slate-950 to-slate-950 border border-purple-800/40 p-6 sm:p-8 shadow-2xl space-y-3 relative overflow-hidden">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-800">
            Experiment #{experiment.experimentNumber}
          </span>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
            Course Code: {labCourse.code}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
          {experiment.title}
        </h1>

        <p className="text-xs sm:text-sm text-purple-300 font-mono">
          {labCourse.name}
        </p>
      </div>

      {/* 1. AIM & OBJECTIVE */}
      <section className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
        <div className="flex items-center gap-2 text-purple-400 text-xs font-mono uppercase font-bold tracking-wider">
          <Beaker className="w-4 h-4" />
          <span>01. Objective &amp; Lab Session Outcome</span>
        </div>
        <p className="text-sm text-slate-100 font-medium leading-relaxed">
          {experiment.objective}
        </p>
        {experiment.lso && (
          <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-400">
            <strong className="text-purple-300">LSO:</strong> {experiment.lso}
          </div>
        )}
      </section>

      {/* 2. APPARATUS & SOFTWARE REQUIRED */}
      <section className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase font-bold tracking-wider">
          <Layers className="w-4 h-4" />
          <span>02. Apparatus &amp; Hardware / Software Setup</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {experiment.apparatus.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{item}</span>
            </span>
          ))}
        </div>
      </section>

      {/* 3. CORE THEORY & FORMULA */}
      <section className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-blue-400 text-xs font-mono uppercase font-bold tracking-wider border-b border-slate-800 pb-3">
          <FileText className="w-4 h-4" />
          <span>03. Working Principle &amp; Governing Equations</span>
        </div>
        <div className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line space-y-3">
          {experiment.theory}
        </div>
        {experiment.formulas && experiment.formulas.length > 0 && (
          <div className="space-y-3 pt-2">
            {experiment.formulas.map((f, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center font-mono overflow-x-auto space-y-1">
                <div className="text-xs font-semibold text-slate-400">{f.title}</div>
                <MathView math={f.latex} block />
                <p className="text-xs text-slate-400">{f.explanation}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. STEP-BY-STEP PROCEDURE */}
      <section className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase font-bold tracking-wider border-b border-slate-800 pb-3">
          <CheckCircle2 className="w-4 h-4" />
          <span>04. Step-by-Step Laboratory Procedure</span>
        </div>
        <div className="space-y-2.5">
          {experiment.procedure.map((step, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                {idx + 1}
              </span>
              <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. C/C++ SOURCE CODE (For PPS Lab) */}
      {experiment.codeSnippet && (
        <section className="p-6 rounded-2xl bg-slate-900/90 border border-emerald-500/30 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase font-bold tracking-wider">
              <Code2 className="w-4 h-4" />
              <span>05. Source Code ({experiment.codeSnippet.language})</span>
            </div>
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1 text-xs text-slate-300 hover:text-emerald-400 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 transition-colors"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
            </button>
          </div>

          {experiment.codeSnippet.explanation && (
            <p className="text-xs text-slate-300 leading-relaxed">{experiment.codeSnippet.explanation}</p>
          )}

          <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-emerald-300 font-mono overflow-x-auto leading-relaxed">
            <code>{experiment.codeSnippet.code}</code>
          </pre>
        </section>
      )}

      {/* 6. OBSERVATION TABLES */}
      {experiment.observationTable && (
        <section className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase font-bold tracking-wider border-b border-slate-800 pb-3">
            <Table className="w-4 h-4" />
            <span>06. Laboratory Observation Table</span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-800">
                  {experiment.observationTable.headers.map((col, cIdx) => (
                    <th key={cIdx} className="p-3 text-slate-300 font-mono font-semibold">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/60">
                {experiment.observationTable.sampleRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-850/40">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="p-3 text-slate-400 font-mono">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 7. PRECAUTIONS & RESULTS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experiment.result && (
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase">Experiment Result:</span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{experiment.result}</p>
          </div>
        )}

        {experiment.precautions && experiment.precautions.length > 0 && (
          <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-900/30 space-y-2">
            <span className="text-xs font-mono font-bold text-rose-400 uppercase flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Precautions:</span>
            </span>
            <ul className="space-y-1 text-xs text-rose-200">
              {experiment.precautions.map((p, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-rose-400">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* 8. VIVA VOCE DRILL */}
      {experiment.vivaQuestions && experiment.vivaQuestions.length > 0 && (
        <section className="p-6 rounded-2xl bg-slate-900/90 border border-purple-500/30 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-purple-400 text-xs font-mono uppercase font-bold tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>08. Professor Viva Voce Drill ({experiment.vivaQuestions.length} Questions)</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
              Exam Viva Prep
            </span>
          </div>

          <div className="space-y-2.5">
            {experiment.vivaQuestions.map((viva, vIdx) => {
              const isOpen = expandedViva === vIdx;
              return (
                <div
                  key={vIdx}
                  className="rounded-xl bg-slate-950/80 border border-slate-800/90 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedViva(isOpen ? null : vIdx)}
                    className="w-full p-3.5 text-left flex items-start justify-between gap-3 hover:bg-slate-900/60 transition-colors"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="text-purple-400 font-mono font-bold text-xs shrink-0">
                        Q{vIdx + 1}.
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-100">
                        {viva.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 mt-0.5 ${
                        isOpen ? 'rotate-180 text-purple-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-4 pt-2 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/40">
                      <strong className="text-purple-300 block mb-1">Model Answer:</strong>
                      {viva.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

    </div>
  );
};
