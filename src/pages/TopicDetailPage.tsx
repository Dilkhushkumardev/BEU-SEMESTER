import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Circle, 
  Bookmark, 
  Sparkles, 
  Copy, 
  Check, 
  BookOpen, 
  HelpCircle, 
  Zap, 
  ChevronLeft, 
  ChevronRight, 
  AlertTriangle, 
  Target, 
  CheckCircle, 
  Lightbulb, 
  FileCheck2,
  Clock,
  ListTree
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getSubjectById, getTopicById, getAllTopics, findTopicGlobal, getUnitById } from '../data';
import { useProgress } from '../context/ProgressContext';
import { useBookmarks } from '../context/BookmarkContext';
import { MathView } from '../components/math/MathView';
import { AIVisualDiagram } from '../components/visual/AIVisualDiagram';
import { AIExplainerModal } from '../components/ai/AIExplainerModal';

interface TopicDetailPageProps {
  subjectId: string;
  topicId: string;
  onNavigate: (url: string) => void;
}

export const TopicDetailPage: React.FC<TopicDetailPageProps> = ({ subjectId, topicId, onNavigate }) => {
  const globalTopicInfo = findTopicGlobal(topicId);
  const subject = getSubjectById(subjectId) || globalTopicInfo?.subject;
  const topic = subject ? getTopicById(subject.id, topicId) : globalTopicInfo?.topic;

  const { completedTopicIds, toggleTopicCompleted, addRecentlyViewed } = useProgress();
  const { isTopicBookmarked, toggleBookmarkTopic } = useBookmarks();

  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('sec-def');

  // Find unit containing this topic
  const unit = subject?.units.find((u) => u.topics.some((t) => t.id === topicId)) || (globalTopicInfo ? getUnitById(globalTopicInfo.subject.id, globalTopicInfo.unitId) : undefined);

  // Find previous and next topics globally or within subject
  const allTopicsList = getAllTopics();
  const currentIndex = allTopicsList.findIndex((item) => item.topic.id === topicId);
  const prevTopic = currentIndex > 0 ? allTopicsList[currentIndex - 1] : null;
  const nextTopic = currentIndex >= 0 && currentIndex < allTopicsList.length - 1 ? allTopicsList[currentIndex + 1] : null;

  useEffect(() => {
    if (topicId) {
      addRecentlyViewed(topicId);
    }
  }, [topicId, addRecentlyViewed]);

  if (!subject || !topic || !unit) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-white">Topic Not Found</h2>
        <p className="text-sm text-slate-400">The requested topic could not be found in the BEU syllabus.</p>
        <button
          onClick={() => onNavigate('/subjects')}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
        >
          Back to Subjects
        </button>
      </div>
    );
  }

  const isCompleted = completedTopicIds.has(topic.id);
  const bookmarked = isTopicBookmarked(topic.id);

  const handleCompleteToggle = () => {
    if (!isCompleted) {
      // Trigger festive confetti celebration!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#3b82f6', '#10b981', '#f59e0b'],
      });
    }
    toggleTopicCompleted(topic.id);
  };

  const handleCopyNotes = () => {
    const textToCopy = `# ${topic.title} (${subject.name} - Unit ${unit.unitNumber})\n\n## Definition\n${topic.quickDefinition}\n\n## Why It Matters\n${topic.whyItMatters}\n\n## Core Theory\n${topic.coreConcept?.map((c) => `${c.heading}\n${c.paragraphs.join('\n')}`).join('\n\n')}\n\n## Quick Revision\n${topic.quickRevision?.join('\n')}\n`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
            onClick={() => onNavigate(`/subject/${subject.id}`)}
            className="hover:text-cyan-300 transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{subject.name}</span>
          </button>
          <span>/</span>
          <span className="text-slate-500">Unit {unit.unitNumber}</span>
          <span>/</span>
          <span className="text-cyan-400 font-mono font-bold">{topic.topicNumber}</span>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleBookmarkTopic(topic.id)}
            className={`p-2 rounded-xl border transition-all flex items-center gap-1.5 ${
              bookmarked
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title="Bookmark this topic"
          >
            <Bookmark className="w-4 h-4" />
            <span className="hidden sm:inline text-xs">{bookmarked ? 'Saved' : 'Save'}</span>
          </button>

          <button
            onClick={handleCopyNotes}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 transition-all flex items-center gap-1.5"
            title="Copy topic notes to clipboard"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span className="hidden sm:inline text-xs">{copied ? 'Copied' : 'Copy Notes'}</span>
          </button>

          <button
            onClick={() => setAiModalOpen(true)}
            className="px-3 py-2 rounded-xl bg-gradient-to-r from-blue-600/30 to-cyan-500/30 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/20 transition-all flex items-center gap-1.5 font-semibold text-xs shadow-lg shadow-cyan-500/10"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>AI Explainer</span>
          </button>

          <button
            onClick={handleCompleteToggle}
            className={`px-3 py-2 rounded-xl border transition-all flex items-center gap-1.5 font-semibold text-xs ${
              isCompleted
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-emerald-500/50'
            }`}
          >
            {isCompleted ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Circle className="w-4 h-4" />}
            <span>{isCompleted ? 'Completed' : 'Mark as Done'}</span>
          </button>
        </div>
      </div>

      {/* Topic Header Card */}
      <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800">
              {topic.topicNumber}
            </span>
            <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
              Unit {unit.unitNumber}: {unit.title}
            </span>
            {topic.examFocus?.likelyMarks && (
              <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-amber-950/80 text-amber-300 border border-amber-800/80 font-bold">
                BEU Exam: {topic.examFocus.likelyMarks}
              </span>
            )}
            <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-indigo-950/80 text-indigo-300 border border-indigo-800/80 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {topic.estimatedMinutes || 12} mins read
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {topic.title}
          </h1>

          <p className="text-sm text-cyan-300/90 font-medium">
            {subject.name} • Course Code: <span className="font-mono text-cyan-200">{subject.code}</span>
          </p>

          {/* GFG Quick Info Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-slate-800/80">
            <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
              <span className="text-[10px] text-slate-500 uppercase font-mono block">Difficulty</span>
              <span className="text-xs font-bold text-cyan-300">Intermediate</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
              <span className="text-[10px] text-slate-500 uppercase font-mono block">Formulas</span>
              <span className="text-xs font-bold text-amber-300">{topic.formulas?.length || 0} Key Equations</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
              <span className="text-[10px] text-slate-500 uppercase font-mono block">BEU Status</span>
              <span className="text-xs font-bold text-emerald-300">High Weightage</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
              <span className="text-[10px] text-slate-500 uppercase font-mono block">Format</span>
              <span className="text-xs font-bold text-purple-300">10-Section GFG Style</span>
            </div>
          </div>
        </div>
      </div>

      {/* GeeksforGeeks Quick Navigation Pill Bar */}
      <div className="sticky top-2 z-20 p-2 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-slate-800/90 shadow-xl overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 min-w-max text-[11px] font-mono">
          <span className="text-slate-500 px-2 flex items-center gap-1"><ListTree className="w-3.5 h-3.5" /> Jump to:</span>
          {[
            { id: 'sec-def', label: '01. Definition' },
            { id: 'sec-why', label: '02. Engineering Context' },
            { id: 'sec-theory', label: '03. Deep Theory' },
            { id: 'sec-math', label: '04. Formulas' },
            { id: 'sec-diagram', label: '05. Diagrams' },
            { id: 'sec-example', label: '06. Numericals' },
            { id: 'sec-traps', label: '07. Traps' },
            { id: 'sec-revision', label: '08. Revision' },
            { id: 'sec-exam', label: '09. BEU Exam PYQs' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeSection === item.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================
          10-SECTION STRUCTURED TOPIC ENGINE (GFG STYLE)
          ======================================================== */}
      
      {/* 1. QUICK DEFINITION */}
      <section id="sec-def" className="p-6 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-blue-950/20 to-slate-900 border border-cyan-500/30 space-y-3 scroll-mt-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase font-bold tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>01. Quick Definition &amp; Core Essence</span>
          </div>
          <span className="text-[11px] font-mono text-cyan-300/80 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
            Exam Ready Definition
          </span>
        </div>
        <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
          {topic.quickDefinition}
        </p>
      </section>

      {/* 2. WHY IT MATTERS (Engineering Context) */}
      <section id="sec-why" className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3 scroll-mt-20">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase font-bold tracking-wider">
          <Lightbulb className="w-4 h-4" />
          <span>02. Why It Matters (Real-World Engineering Relevance)</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {topic.whyItMatters}
        </p>
      </section>

      {/* 3. CORE THEORY & STEP-BY-STEP CONCEPTS */}
      {topic.coreConcept && topic.coreConcept.length > 0 && (
        <section id="sec-theory" className="p-6 sm:p-8 rounded-3xl bg-slate-900/95 border border-slate-800 space-y-6 scroll-mt-20">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-mono uppercase font-bold tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>03. Core Theory &amp; Comprehensive Breakdown</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              {topic.coreConcept.length} Conceptual Subsections
            </span>
          </div>

          <div className="space-y-6">
            {topic.coreConcept.map((concept, cIdx) => (
              <div key={cIdx} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 font-mono text-xs font-bold flex items-center justify-center border border-blue-500/30">
                    {cIdx + 1}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-cyan-300">{concept.heading}</h4>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed pl-8">
                  {concept.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                  {concept.bulletPoints && (
                    <div className="pt-2">
                      <ul className="space-y-1.5 text-slate-300">
                        {concept.bulletPoints.map((bp, bpIdx) => (
                          <li key={bpIdx} className="flex items-start gap-2">
                            <span className="text-cyan-400 font-bold">•</span>
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. MATHEMATICAL FORMULATIONS & KaTeX EQUATIONS */}
      {topic.formulas && topic.formulas.length > 0 && (
        <section id="sec-math" className="p-6 sm:p-8 rounded-3xl bg-slate-900/95 border border-slate-800 space-y-5 scroll-mt-20">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase font-bold tracking-wider">
              <span className="font-mono text-base font-bold">∑</span>
              <span>04. Mathematical Formulations &amp; Derivations</span>
            </div>
            <span className="text-[11px] font-mono text-amber-400/80 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800">
              Live KaTeX Rendered
            </span>
          </div>

          <div className="space-y-4">
            {topic.formulas.map((formula, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800/90 space-y-3 shadow-lg">
                <div className="text-xs sm:text-sm font-bold text-slate-200 flex items-center justify-between">
                  <span>{formula.title}</span>
                  <span className="text-[10px] font-mono text-slate-500">Eq. {idx + 1}</span>
                </div>
                
                {/* Block Math Formula */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 overflow-x-auto text-center font-mono shadow-inner">
                  <MathView math={formula.latex} block />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{formula.explanation}</p>

                {formula.variables && formula.variables.length > 0 && (
                  <div className="pt-3 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono text-cyan-400 font-bold block mb-1.5">Variable Legend &amp; Units:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                      {formula.variables.map((v, i) => (
                        <div key={i} className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-900/60 border border-slate-800/60">
                          <span className="text-cyan-300 font-mono font-semibold"><MathView math={v.symbol} /></span>
                          <span className="text-slate-300">= {v.meaning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. AUTOMATIC AI VISUAL DIAGRAM (GEEKSFORGEEKS STYLE) */}
      <section id="sec-diagram" className="scroll-mt-20">
        <AIVisualDiagram
          topicId={topic.id}
          topicTitle={topic.title}
          category={subject.name}
        />
      </section>

      {/* 6. SOLVED NUMERICAL EXAMPLES */}
      {topic.example && (
        <section id="sec-example" className="p-6 sm:p-8 rounded-3xl bg-slate-900/95 border border-slate-800 space-y-5 scroll-mt-20">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase font-bold tracking-wider">
              <FileCheck2 className="w-4 h-4" />
              <span>06. Solved University Numerical Example (BEU Pattern)</span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400/80 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800">
              Step-by-Step Working
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800/90 space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-100">
              <span className="text-emerald-400 font-mono font-bold block mb-1">Problem Statement:</span>
              {topic.example.problem}
            </div>

            {/* Step by step solution */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-cyan-400 block uppercase font-mono tracking-wider">
                Detailed Analytical Solution:
              </span>
              {topic.example.solutionSteps.map((step, sIdx) => (
                <div key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 pl-3 border-l-2 border-cyan-500/40 py-1">
                  <span className="text-cyan-400 font-mono font-bold shrink-0">Step {sIdx + 1}:</span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>

            {/* Final Answer */}
            <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-800/60 text-xs sm:text-sm text-emerald-200 flex flex-wrap items-center justify-between gap-2 shadow-lg">
              <span className="font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Final Result:
              </span>
              <span className="font-mono font-bold text-emerald-300 text-sm">{topic.example.finalAnswer}</span>
            </div>
          </div>
        </section>
      )}

      {/* 7. REAL-WORLD ENGINEERING APPLICATIONS */}
      {topic.engineeringApplication && (
        <section id="sec-application" className="p-6 sm:p-8 rounded-3xl bg-slate-900/95 border border-slate-800 space-y-4 scroll-mt-20">
          <div className="flex items-center gap-2 text-purple-400 text-xs font-mono uppercase font-bold tracking-wider border-b border-slate-800 pb-4">
            <Target className="w-4 h-4" />
            <span>07. Industrial &amp; Modern Engineering Applications</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-3">
            <h4 className="text-sm sm:text-base font-bold text-purple-300">{topic.engineeringApplication.title}</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{topic.engineeringApplication.description}</p>
            <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-800/50 text-xs text-purple-200 leading-relaxed">
              <strong className="text-purple-300 font-bold block mb-0.5">Engineering Impact &amp; Technology:</strong>
              {topic.engineeringApplication.impact}
            </div>
          </div>
        </section>
      )}

      {/* 8. COMMON MISTAKES & PITFALLS */}
      {topic.commonMistakes && topic.commonMistakes.length > 0 && (
        <section id="sec-traps" className="p-6 sm:p-8 rounded-3xl bg-rose-950/20 border border-rose-900/40 space-y-4 scroll-mt-20">
          <div className="flex items-center justify-between border-b border-rose-900/40 pb-4">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase font-bold tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>08. Common Student Traps &amp; Exam Mistakes</span>
            </div>
            <span className="text-[11px] font-mono text-rose-300/80 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-800">
              Exam Warning
            </span>
          </div>

          <div className="space-y-3">
            {topic.commonMistakes.map((m, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-950/90 border border-rose-900/40 space-y-2">
                <div className="text-xs sm:text-sm font-bold text-rose-300 flex items-start gap-2">
                  <span className="text-rose-400 font-mono">⚠️ Mistake:</span>
                  <span>{m.mistake}</span>
                </div>
                <div className="text-xs sm:text-sm text-emerald-300 font-medium pl-6">
                  <strong>Correction:</strong> {m.correction}
                </div>
                <div className="text-xs text-slate-400 italic pl-6">
                  Why students lose marks: {m.why}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 9. QUICK REVISION & MEMORY HOOKS */}
      {topic.quickRevision && topic.quickRevision.length > 0 && (
        <section id="sec-revision" className="p-6 sm:p-8 rounded-3xl bg-slate-900/95 border border-slate-800 space-y-4 scroll-mt-20">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase font-bold tracking-wider">
              <Zap className="w-4 h-4" />
              <span>09. Quick Revision &amp; Memory Hooks</span>
            </div>
            <span className="text-[11px] font-mono text-cyan-300/80 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
              High-Yield Summary
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {topic.quickRevision.map((takeaway, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{takeaway}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 10. BEU EXAM FOCUS & EXPECTED QUESTION TYPES */}
      {topic.examFocus && (
        <section id="sec-exam" className="p-6 sm:p-8 rounded-3xl bg-slate-900/95 border border-slate-800 space-y-5 scroll-mt-20">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase font-bold tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>10. BEU University Exam Focus &amp; Expected PYQs</span>
            </div>
            <span className="text-[11px] font-mono text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-lg border border-amber-800 font-bold">
              Course Outcome: {unit.mappedCOs?.[0] || 'CO1'}
            </span>
          </div>

          {topic.examFocus.questionTypes && topic.examFocus.questionTypes.length > 0 && (
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-slate-300 block uppercase font-mono tracking-wider">
                Expected BEU Semester Exam Questions:
              </span>
              {topic.examFocus.questionTypes.map((q, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 flex items-start gap-3 shadow-sm">
                  <span className="text-amber-400 font-mono font-bold shrink-0">Q{i + 1}.</span>
                  <span className="leading-relaxed">{q}</span>
                </div>
              ))}
            </div>
          )}

          {topic.examFocus.keyTheorems && topic.examFocus.keyTheorems.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
              <strong className="text-cyan-400 block font-mono uppercase tracking-wider">Crucial Theorems &amp; Rules to Memorize:</strong>
              <div className="flex flex-wrap gap-2">
                {topic.examFocus.keyTheorems.map((th, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-slate-900 text-slate-200 font-mono text-xs border border-slate-700 font-medium">
                    {th}
                  </span>
                ))}
              </div>
            </div>
          )}

          {topic.examFocus.tip && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/50 to-slate-950 border border-amber-800/50 text-xs sm:text-sm text-amber-200 leading-relaxed shadow-lg">
              <strong className="text-amber-300 font-bold block mb-1">🎓 University Examiner's Tip:</strong>
              {topic.examFocus.tip}
            </div>
          )}
        </section>
      )}

      {/* Previous & Next Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800">
        {prevTopic ? (
          <button
            onClick={() => onNavigate(`/subject/${prevTopic.subject.id}/topic/${prevTopic.topic.id}`)}
            className="w-full sm:w-auto p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center gap-3 text-left group"
          >
            <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            <div>
              <div className="text-[10px] font-mono text-slate-500 uppercase">Previous Topic</div>
              <div className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors max-w-xs truncate">
                {prevTopic.topic.title}
              </div>
            </div>
          </button>
        ) : (
          <div />
        )}

        {nextTopic ? (
          <button
            onClick={() => onNavigate(`/subject/${nextTopic.subject.id}/topic/${nextTopic.topic.id}`)}
            className="w-full sm:w-auto p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center gap-3 text-right group ml-auto"
          >
            <div>
              <div className="text-[10px] font-mono text-slate-500 uppercase">Next Topic</div>
              <div className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors max-w-xs truncate">
                {nextTopic.topic.title}
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
          </button>
        ) : (
          <div />
        )}
      </div>

      {/* Interactive AI Explainer Modal */}
      <AIExplainerModal
        topic={topic}
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
      />

    </div>
  );
};
