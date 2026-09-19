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
  FileCheck2 
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <span className="text-cyan-400 font-mono">{topic.topicNumber}</span>
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
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
              {topic.topicNumber}
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              Unit {unit.unitNumber}: {unit.title}
            </span>
            {topic.examFocus?.likelyMarks && (
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/80">
                BEU Exam: {topic.examFocus.likelyMarks}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {topic.title}
          </h1>

          <p className="text-sm text-cyan-300/90 font-medium">
            {subject.name} (Course Code: {subject.code})
          </p>
        </div>
      </div>

      {/* ========================================================
          10-SECTION STRUCTURED TOPIC ENGINE
          ======================================================== */}
      
      {/* 1. QUICK DEFINITION */}
      <section className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-blue-950/20 to-slate-900 border border-cyan-500/30 space-y-2">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase font-bold tracking-wider">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span>01. Quick Definition</span>
        </div>
        <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
          {topic.quickDefinition}
        </p>
      </section>

      {/* 2. WHY IT MATTERS (Engineering Context) */}
      <section className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase font-bold tracking-wider">
          <Lightbulb className="w-4 h-4" />
          <span>02. Why It Matters (Engineering Context)</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {topic.whyItMatters}
        </p>
      </section>

      {/* 3. CORE THEORY & STEP-BY-STEP CONCEPTS */}
      {topic.coreConcept && topic.coreConcept.length > 0 && (
        <section className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
          <div className="flex items-center gap-2 text-blue-400 text-xs font-mono uppercase font-bold tracking-wider border-b border-slate-800 pb-3">
            <BookOpen className="w-4 h-4" />
            <span>03. Core Theory &amp; In-Depth Concepts</span>
          </div>

          <div className="space-y-4">
            {topic.coreConcept.map((concept, cIdx) => (
              <div key={cIdx} className="space-y-2">
                <h4 className="text-sm font-bold text-cyan-300">{concept.heading}</h4>
                <div className="space-y-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {concept.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                  {concept.bulletPoints && (
                    <ul className="list-disc list-inside space-y-1 text-slate-300 pt-1">
                      {concept.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx}>{bp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. MATHEMATICAL FORMULATIONS & KaTeX EQUATIONS */}
      {topic.formulas && topic.formulas.length > 0 && (
        <section className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase font-bold tracking-wider border-b border-slate-800 pb-3">
            <span className="font-mono text-base font-bold">∑</span>
            <span>04. Mathematical Formulations &amp; Derivations</span>
          </div>

          <div className="space-y-4">
            {topic.formulas.map((formula, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                <div className="text-xs font-semibold text-slate-300">{formula.title}</div>
                
                {/* Block Math Formula */}
                <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-800 overflow-x-auto text-center font-mono">
                  <MathView math={formula.latex} block />
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">{formula.explanation}</p>

                {formula.variables && formula.variables.length > 0 && (
                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono text-cyan-400 block mb-1">Variable Notation:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-slate-400">
                      {formula.variables.map((v, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <MathView math={v.symbol} />
                          <span>= {v.meaning}</span>
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

      {/* 5. SOLVED NUMERICAL EXAMPLES */}
      {topic.example && (
        <section className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase font-bold tracking-wider border-b border-slate-800 pb-3">
            <FileCheck2 className="w-4 h-4" />
            <span>05. Solved University Numerical Example</span>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-100">
              {topic.example.problem}
            </h4>

            {/* Step by step solution */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-cyan-400 block">Step-by-Step Solution:</span>
              {topic.example.solutionSteps.map((step, sIdx) => (
                <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300 pl-2 border-l border-slate-800">
                  <span className="text-slate-500 font-mono">{sIdx + 1}.</span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>

            {/* Final Answer */}
            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-xs text-emerald-200 flex items-center justify-between">
              <span className="font-semibold">Final Result:</span>
              <span className="font-mono font-bold text-emerald-400">{topic.example.finalAnswer}</span>
            </div>
          </div>
        </section>
      )}

      {/* 6. REAL-WORLD ENGINEERING APPLICATIONS */}
      {topic.engineeringApplication && (
        <section className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-purple-400 text-xs font-mono uppercase font-bold tracking-wider border-b border-slate-800 pb-3">
            <Target className="w-4 h-4" />
            <span>06. Real-World Engineering Application</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
            <h4 className="text-sm font-bold text-purple-300">{topic.engineeringApplication.title}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{topic.engineeringApplication.description}</p>
            <div className="p-2.5 rounded-lg bg-purple-950/30 border border-purple-800/40 text-[11px] text-purple-200">
              <strong>Engineering Impact:</strong> {topic.engineeringApplication.impact}
            </div>
          </div>
        </section>
      )}

      {/* 7. COMMON MISTAKES & PITFALLS */}
      {topic.commonMistakes && topic.commonMistakes.length > 0 && (
        <section className="p-6 rounded-2xl bg-rose-950/20 border border-rose-900/30 space-y-3">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase font-bold tracking-wider border-b border-rose-900/30 pb-3">
            <AlertTriangle className="w-4 h-4" />
            <span>07. Common Student Mistakes &amp; Exam Traps</span>
          </div>

          <div className="space-y-2.5">
            {topic.commonMistakes.map((m, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/30 space-y-1">
                <div className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                  <span>⚠️ Mistake:</span> {m.mistake}
                </div>
                <div className="text-xs text-emerald-300 font-medium">
                  <strong>Correction:</strong> {m.correction}
                </div>
                <div className="text-[11px] text-slate-400">
                  <em>Reason: {m.why}</em>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. QUICK REVISION & MEMORY HOOKS */}
      {topic.quickRevision && topic.quickRevision.length > 0 && (
        <section className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase font-bold tracking-wider border-b border-slate-800 pb-3">
            <Zap className="w-4 h-4" />
            <span>08. Quick Revision &amp; Memory Hooks</span>
          </div>

          <div className="space-y-2">
            {topic.quickRevision.map((takeaway, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 9. BEU EXAM FOCUS & EXPECTED QUESTION TYPES */}
      {topic.examFocus && (
        <section className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase font-bold tracking-wider border-b border-slate-800 pb-3">
            <HelpCircle className="w-4 h-4" />
            <span>09. BEU University Exam Focus</span>
          </div>

          {topic.examFocus.questionTypes && topic.examFocus.questionTypes.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-300 block">Expected University Questions:</span>
              {topic.examFocus.questionTypes.map((q, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-amber-400 font-mono font-bold">Q{i + 1}.</span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          )}

          {topic.examFocus.keyTheorems && topic.examFocus.keyTheorems.length > 0 && (
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
              <strong className="text-cyan-400 block mb-1">Key Theorems &amp; Rules:</strong>
              <div className="flex flex-wrap gap-1.5">
                {topic.examFocus.keyTheorems.map((th, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 font-mono text-[11px] border border-slate-700">
                    {th}
                  </span>
                ))}
              </div>
            </div>
          )}

          {topic.examFocus.tip && (
            <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-800/40 text-xs text-amber-300">
              <strong>Professor's Tip:</strong> {topic.examFocus.tip}
            </div>
          )}
        </section>
      )}

      {/* 10. AUTOMATIC AI VISUAL DIAGRAM */}
      <section className="space-y-2">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase font-bold tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>10. Automatic AI Visual Diagram</span>
        </div>
        <AIVisualDiagram
          topicId={topic.id}
          topicTitle={topic.title}
          category={subject.name}
        />
      </section>

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
