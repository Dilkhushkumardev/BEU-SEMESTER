import React, { useState } from 'react';
import { 
  Settings, 
  RotateCcw, 
  Download, 
  ShieldCheck, 
  Keyboard
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { useBookmarks } from '../context/BookmarkContext';

export const SettingsPage: React.FC = () => {
  const { completedTopicIds, resetAllProgress, stats } = useProgress();
  const { bookmarkedTopicIds, bookmarkedFormulaIds, bookmarkedLabIds } = useBookmarks();
  const [resetConfirmed, setResetConfirmed] = useState(false);
  const [exported, setExported] = useState(false);

  const handleExportData = () => {
    const data = {
      platform: 'Semester Point',
      edition: 'Bihar Engineering University (BEU) B.Tech 1st Sem 2026-2030',
      exportedAt: new Date().toISOString(),
      completedTopicIds: Array.from(completedTopicIds),
      bookmarkedTopicIds: Array.from(bookmarkedTopicIds),
      bookmarkedFormulaIds: Array.from(bookmarkedFormulaIds),
      bookmarkedLabIds: Array.from(bookmarkedLabIds),
      stats,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `semester-point-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setExported(true);
    setTimeout(() => setExported(false), 2500);
  };

  const handleResetProgress = () => {
    if (!resetConfirmed) {
      setResetConfirmed(true);
      return;
    }
    resetAllProgress();
    setResetConfirmed(false);
  };

  return (
    <div className="space-y-8 py-6 animate-fade-in max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono mb-2">
          <Settings className="w-3.5 h-3.5 text-cyan-400" />
          <span>PREFERENCES &amp; ACCREDITATION</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Settings &amp; BEU Syllabus Info
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Curriculum accreditation, examination scheme, data backup, and study controls.
        </p>
      </div>

      {/* BEU Examination Scheme & Accreditation */}
      <div className="p-6 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-slate-800 space-y-5 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Bihar Engineering University (BEU) Accreditation
            </h3>
            <p className="text-xs text-slate-400">B.Tech 1st Year Syllabus (Batch 2026–2030) • CSE &amp; Group-A</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">End Semester Exam</span>
            <div className="text-xl font-bold text-white">70 Marks</div>
            <p className="text-[11px] text-slate-400">Theory examination conducted by BEU (3 Hours Duration).</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">Mid-Semester Exam</span>
            <div className="text-xl font-bold text-white">30 Marks</div>
            <p className="text-[11px] text-slate-400">Internal college mid-term written assessment.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">Practical &amp; Viva</span>
            <div className="text-xl font-bold text-white">100% Viva Prep</div>
            <p className="text-[11px] text-slate-400">Laboratory performance, records &amp; oral viva voce.</p>
          </div>
        </div>
      </div>

      {/* Keyboard Shortcuts */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Keyboard className="w-4 h-4 text-cyan-400" />
          <span>Keyboard Shortcuts</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
            <span className="text-xs text-slate-300">Global Search Modal</span>
            <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-xs text-cyan-400 font-bold">
              Ctrl + K
            </kbd>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
            <span className="text-xs text-slate-300">Close Modals / Overlays</span>
            <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-xs text-slate-400">
              Esc
            </kbd>
          </div>
        </div>
      </div>

      {/* Study Data Backup & Reset */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
        <div>
          <h3 className="text-base font-bold text-white">Study Progress &amp; Data Management</h3>
          <p className="text-xs text-slate-400">Export your notes and bookmarks or clear local storage data.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleExportData}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>{exported ? 'Data Exported!' : 'Export Study Backup (.json)'}</span>
          </button>

          <button
            onClick={handleResetProgress}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
              resetConfirmed
                ? 'bg-rose-600 text-white border-rose-500 animate-pulse'
                : 'bg-slate-900 text-rose-400 border-rose-900/50 hover:bg-rose-950/40'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>{resetConfirmed ? 'Confirm Reset All Progress?' : 'Reset Study Progress'}</span>
          </button>
        </div>

        {resetConfirmed && (
          <p className="text-xs text-rose-300">
            Click again to permanently reset completed topic counts and clear bookmarks.
          </p>
        )}
      </div>

    </div>
  );
};
