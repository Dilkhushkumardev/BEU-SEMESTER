import React, { useState } from 'react';
import { Sparkles, X, Lightbulb, Zap, HelpCircle, CheckCircle2, Copy, Check } from 'lucide-react';
import type { Topic } from '../../types';

interface AIExplainerModalProps {
  topic: Topic | null;
  isOpen: boolean;
  onClose: () => void;
}

export const AIExplainerModal: React.FC<AIExplainerModalProps> = ({ topic, isOpen, onClose }) => {
  const [activeMode, setActiveMode] = useState<'analogy' | 'examTips' | 'viva' | 'summary'>('analogy');
  const [copied, setCopied] = useState(false);

  if (!isOpen || !topic) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getAIContent = () => {
    switch (activeMode) {
      case 'analogy':
        return {
          title: '💡 Real-World Intuitive Analogy',
          content: `Imagine ${topic.title} like this: ${topic.quickDefinition}\n\nIn practical engineering terms, think of it as the foundational backbone that makes ${topic.engineeringApplication?.title || 'modern computing and physical engineering systems'} possible.\n\nImpact: ${topic.engineeringApplication?.impact || 'Ensures mathematical accuracy and physical system reliability.'}`,
          takeaway: 'Focus on the physical intuition before jumping into the mathematical equations in your university exam answer book!'
        };
      case 'examTips':
        return {
          title: '🎯 BEU 14-Mark University Exam Strategy',
          content: `1. Always start with the official definition: "${topic.quickDefinition.slice(0, 100)}..."\n2. Draw the neat labeled diagram (100% mandatory for 4 marks).\n3. State governing equations clearly: ${topic.formulas?.[0]?.latex || 'Standard formula'}\n4. Write the real-world application: ${topic.engineeringApplication?.title || 'General Engineering'}.\n5. Highlight the final conclusion in a neat box.\n\nTip: ${topic.examFocus?.tip || 'Highlight key steps and state all assumptions clearly.'}`,
          takeaway: `Expected Marks: ${topic.examFocus?.likelyMarks || '14 Marks (Part-B)'} • Key Questions: ${topic.examFocus?.questionTypes?.join(', ') || 'Long Answer'}`
        };
      case 'viva':
        return {
          title: '🎙️ Professor Viva Voce Simulation',
          content: `Q: What is the primary physical/computational significance of ${topic.title}?\n\nA: "${topic.quickDefinition}"\n\nQ: What is the most common mistake students make?\n\nA: "${topic.commonMistakes?.[0]?.mistake || 'Neglecting initial assumptions or boundary conditions.'}" -> Correction: "${topic.commonMistakes?.[0]?.correction || 'Always verify boundary values.'}"`,
          takeaway: 'Be confident, state crisp definitions, and write standard mathematical notations on the blackboard if requested.'
        };
      case 'summary':
        return {
          title: '⚡ 60-Second Flash Cramming Summary',
          content: `${topic.quickRevision?.map((k, i) => `${i + 1}. ${k}`).join('\n') || topic.quickDefinition}\n\nKey Formula:\n${topic.formulas?.[0]?.latex || topic.quickDefinition}`,
          takeaway: 'Review these bullet points 15 minutes before entering the examination hall!'
        };
    }
  };

  const current = getAIContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow header */}
        <div className="bg-gradient-to-r from-blue-900/60 via-cyan-900/40 to-slate-900 p-5 border-b border-cyan-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/25">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-100">AI Concept Explainer</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800">
                  Semester Point AI
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium truncate max-w-sm">{topic.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector */}
        <div className="flex border-b border-slate-800 bg-slate-950/80 p-1.5 gap-1">
          {[
            { id: 'analogy', label: 'Intuitive Analogy', icon: Lightbulb },
            { id: 'examTips', label: '14-Mark Strategy', icon: Zap },
            { id: 'viva', label: 'Viva Voce Drill', icon: HelpCircle },
            { id: 'summary', label: 'Flash Cram', icon: CheckCircle2 },
          ].map((mode) => {
            const Icon = mode.icon;
            const active = activeMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id as any)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-medium transition-all ${
                  active
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline">{mode.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Body */}
        <div className="p-5 overflow-y-auto max-h-[55vh] space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-cyan-300">{current.title}</h4>
            <button
              onClick={() => handleCopy(current.content)}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-300 px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/80 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Notes'}</span>
            </button>
          </div>

          <div className="bg-slate-950/80 rounded-xl border border-slate-800/80 p-4 text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line font-mono">
            {current.content}
          </div>

          <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-950/40 to-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-200 flex items-start gap-2.5">
            <span className="text-cyan-400 font-bold shrink-0">PRO TIP:</span>
            <span>{current.takeaway}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-500 px-5">
          <span>Trained specifically on Bihar Engineering University (BEU) syllabus</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
