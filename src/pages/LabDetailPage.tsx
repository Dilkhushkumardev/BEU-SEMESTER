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
  ChevronDown,
  ListTree,
  Clock,
  Award
} from 'lucide-react';
import { getLabCourseById, getLabExperimentById } from '../data';
import { useBookmarks } from '../context/BookmarkContext';
import { MathView } from '../components/math/MathView';
import { LabCircuitDiagram } from '../components/visual/LabCircuitDiagram';

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
  const [activeSection, setActiveSection] = useState<string>('lab-obj');

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

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          <span className="text-purple-400 font-mono font-bold">LE-{experiment.experimentNumber}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleBookmarkLab(experiment.id)}
            className={`px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-semibold ${
              bookmarked
                ? 'bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-sm'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>{bookmarked ? 'Saved' : 'Save Lab'}</span>
          </button>
        </div>
      </div>

      {/* Experiment Header Hero */}
      <div className="rounded-3xl bg-gradient-to-b from-purple-950/50 via-slate-950 to-slate-950 border border-purple-800/40 p-6 sm:p-8 shadow-2xl space-y-4 relative overflow-hidden">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-purple-950 text-purple-300 border border-purple-800">
            Experiment #{experiment.experimentNumber}
          </span>
          <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
            Course Code: {labCourse.code}
          </span>
          <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-800 flex items-center gap-1">
            <Award className="w-3.5 h-3.5" />
            Credits: {labCourse.credits}
          </span>
          <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-indigo-950/80 text-indigo-300 border border-indigo-800 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            2 Hours Practical
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {experiment.title}
        </h1>

        <p className="text-sm text-purple-300 font-mono font-medium">
          {labCourse.name}
        </p>

        {/* Quick Fact Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-slate-800/80">
          <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
            <span className="text-[10px] text-slate-500 uppercase font-mono block">Category</span>
            <span className="text-xs font-bold text-purple-300">Practical Lab</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
            <span className="text-[10px] text-slate-500 uppercase font-mono block">Apparatus</span>
            <span className="text-xs font-bold text-cyan-300">{experiment.apparatus?.length || 0} Components</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
            <span className="text-[10px] text-slate-500 uppercase font-mono block">Viva Drill</span>
            <span className="text-xs font-bold text-emerald-300">{experiment.vivaQuestions?.length || 0} Questions</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
            <span className="text-[10px] text-slate-500 uppercase font-mono block">BEU Outcome</span>
            <span className="text-xs font-bold text-amber-300">{experiment.mappedCOs?.[0] || 'CO1'}</span>
          </div>
        </div>
      </div>

      {/* Sticky Section Jump Bar */}
      <div className="sticky top-2 z-20 p-2 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-slate-800/90 shadow-xl overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 min-w-max text-[11px] font-mono">
          <span className="text-slate-500 px-2 flex items-center gap-1"><ListTree className="w-3.5 h-3.5" /> Jump to:</span>
          {[
            { id: 'lab-obj', label: '01. Objective' },
            { id: 'lab-setup', label: '02. Apparatus' },
            { id: 'lab-diagram', label: '03. Circuit Diagram' },
            { id: 'lab-theory', label: '04. Theory & Formula' },
            { id: 'lab-procedure', label: '05. Procedure' },
            { id: 'lab-obs', label: '06. Observations' },
            { id: 'lab-viva', label: '07. Viva Drill' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeSection === item.id
                  ? 'bg-purple-500 text-white font-bold shadow-md shadow-purple-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================
          DETAILED LAB MANUAL SECTIONS
          ======================================================== */}

      {/* 1. AIM & OBJECTIVE */}
      <section id="lab-obj" className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3 scroll-mt-20">
        <div className="flex items-center gap-2 text-purple-400 text-xs font-mono uppercase font-bold tracking-wider">
          <Beaker className="w-4 h-4" />
          <span>01. Aim, Objective &amp; Lab Session Outcome (LSO)</span>
        </div>
        <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
          {experiment.objective}
        </p>
        {experiment.lso && (
          <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-800/50 text-xs text-purple-200 leading-relaxed">
            <strong className="text-purple-300 font-bold block mb-0.5">Lab Session Outcome:</strong>
            {experiment.lso}
          </div>
        )}
      </section>

      {/* 2. APPARATUS & SOFTWARE REQUIRED */}
      <section id="lab-setup" className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase font-bold tracking-wider">
            <Layers className="w-4 h-4" />
            <span>02. Apparatus &amp; Hardware / Software Setup</span>
          </div>
          <span className="text-[11px] font-mono text-cyan-300/80 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
            {experiment.apparatus.length} Items Required
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {experiment.apparatus.map((item, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 font-mono flex items-center gap-2.5 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXPERIMENTAL SETUP & CIRCUIT SCHEMATIC */}
      <section id="lab-diagram" className="scroll-mt-20">
        <LabCircuitDiagram
          courseId={labCourse.id}
          experimentNumber={experiment.experimentNumber}
          experimentTitle={experiment.title}
        />
      </section>

      {/* 4. CORE THEORY & GOVERNING EQUATIONS */}
      <section id="lab-theory" className="p-6 sm:p-8 rounded-3xl bg-slate-900/95 border border-slate-800 space-y-5 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-blue-400 text-xs font-mono uppercase font-bold tracking-wider">
            <FileText className="w-4 h-4" />
            <span>04. Working Principle &amp; Governing Equations</span>
          </div>
          <span className="text-[11px] font-mono text-blue-300 bg-blue-950 px-2.5 py-0.5 rounded-lg border border-blue-800">
            Analytical Foundation
          </span>
        </div>

        <div className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line space-y-4 p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80">
          {experiment.theory}
        </div>

        {experiment.formulas && experiment.formulas.length > 0 && (
          <div className="space-y-4 pt-2">
            <span className="text-xs font-bold text-amber-400 uppercase font-mono block">
              Governing Mathematical Formulas:
            </span>
            {experiment.formulas.map((f, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 text-center font-mono space-y-2 shadow-lg">
                <div className="text-xs font-bold text-slate-300">{f.title}</div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <MathView math={f.latex} block />
                </div>
                <p className="text-xs text-slate-400">{f.explanation}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 5. STEP-BY-STEP LABORATORY PROCEDURE */}
      <section id="lab-procedure" className="p-6 sm:p-8 rounded-3xl bg-slate-900/95 border border-slate-800 space-y-5 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase font-bold tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>05. Step-by-Step Laboratory Procedure</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950 px-2.5 py-0.5 rounded-lg border border-emerald-800">
            {experiment.procedure.length} Steps
          </span>
        </div>

        <div className="space-y-3">
          {experiment.procedure.map((step, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-3 shadow-sm">
              <span className="w-7 h-7 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                {idx + 1}
              </span>
              <span className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-0.5">{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. C/C++ SOURCE CODE (For PPS Lab) */}
      {experiment.codeSnippet && (
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/95 border border-emerald-500/30 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase font-bold tracking-wider">
              <Code2 className="w-4 h-4" />
              <span>Source Code &amp; Implementation ({experiment.codeSnippet.language})</span>
            </div>
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-emerald-400 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 transition-colors font-semibold"
            >
              {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
            </button>
          </div>

          {experiment.codeSnippet.explanation && (
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{experiment.codeSnippet.explanation}</p>
          )}

          <pre className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-emerald-300 font-mono overflow-x-auto leading-relaxed shadow-inner">
            <code>{experiment.codeSnippet.code}</code>
          </pre>
        </section>
      )}

      {/* 7. OBSERVATION TABLES */}
      {experiment.observationTable && (
        <section id="lab-obs" className="p-6 sm:p-8 rounded-3xl bg-slate-900/95 border border-slate-800 space-y-4 scroll-mt-20">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase font-bold tracking-wider">
              <Table className="w-4 h-4" />
              <span>06. Laboratory Observation Table</span>
            </div>
            <span className="text-[11px] font-mono text-amber-300 bg-amber-950 px-2.5 py-0.5 rounded border border-amber-800">
              Sample Experimental Readings
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 shadow-lg">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-800">
                  {experiment.observationTable.headers.map((col, cIdx) => (
                    <th key={cIdx} className="p-3.5 text-slate-200 font-mono font-semibold">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/60">
                {experiment.observationTable.sampleRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-850/40">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="p-3.5 text-slate-300 font-mono">
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

      {/* 8. PRECAUTIONS & RESULTS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experiment.result && (
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Experiment Result &amp; Inference:</span>
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{experiment.result}</p>
          </div>
        )}

        {experiment.precautions && experiment.precautions.length > 0 && (
          <div className="p-6 rounded-3xl bg-rose-950/20 border border-rose-900/40 space-y-3">
            <span className="text-xs font-mono font-bold text-rose-400 uppercase flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              <span>Crucial Safety Precautions:</span>
            </span>
            <ul className="space-y-1.5 text-xs text-rose-200">
              {experiment.precautions.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* 9. VIVA VOCE DRILL */}
      {experiment.vivaQuestions && experiment.vivaQuestions.length > 0 && (
        <section id="lab-viva" className="p-6 sm:p-8 rounded-3xl bg-slate-900/95 border border-purple-500/40 space-y-5 shadow-2xl scroll-mt-20">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-purple-400 text-xs font-mono uppercase font-bold tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>07. Professor Viva Voce Drill ({experiment.vivaQuestions.length} Questions)</span>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-purple-950 text-purple-300 border border-purple-800 font-bold">
              BEU University Viva Prep
            </span>
          </div>

          <div className="space-y-3">
            {experiment.vivaQuestions.map((viva, vIdx) => {
              const isOpen = expandedViva === vIdx;
              return (
                <div
                  key={vIdx}
                  className="rounded-2xl bg-slate-950/80 border border-slate-800/90 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setExpandedViva(isOpen ? null : vIdx)}
                    className="w-full p-4 text-left flex items-start justify-between gap-3 hover:bg-slate-900/60 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-purple-400 font-mono font-bold text-xs shrink-0 pt-0.5">
                        Q{vIdx + 1}.
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-100 leading-snug">
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
                    <div className="p-5 pt-3 border-t border-slate-800/80 text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-900/50 space-y-2">
                      <strong className="text-purple-300 font-bold block">Model Viva Answer:</strong>
                      <p>{viva.answer}</p>
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
