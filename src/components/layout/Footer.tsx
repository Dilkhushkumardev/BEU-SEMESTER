import React from 'react';
import { GraduationCap, Sparkles, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (url: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        
        {/* Brand & Purpose */}
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-sky-400 p-[1.5px] shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Semester<span className="text-cyan-400">Point</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
            The dedicated academic learning companion for <strong>Bihar Engineering University (BEU)</strong> B.Tech 1st Semester students (CSE &amp; Group-A, Batch 2026–2030).
          </p>
          <div className="flex items-center gap-2 pt-1 text-xs text-cyan-400">
            <ShieldCheck className="w-4 h-4" />
            <span>100% faithful to the official 32-page BEU syllabus guidelines.</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-semibold uppercase font-mono tracking-wider text-slate-200 mb-3">
            Core Modules
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onNavigate('/subjects')} className="hover:text-cyan-300 transition-colors">
                7 Theory Courses
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('/labs')} className="hover:text-cyan-300 transition-colors">
                45 Practical Lab Experiments
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('/formulas')} className="hover:text-cyan-300 transition-colors">
                Interactive Formula Bank
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('/revision')} className="hover:text-cyan-300 transition-colors">
                Quick Revision Cram Cards
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('/dashboard')} className="hover:text-cyan-300 transition-colors">
                Semester Progress Tracker
              </button>
            </li>
          </ul>
        </div>

        {/* BEU Exam Accreditation */}
        <div>
          <h4 className="text-xs font-semibold uppercase font-mono tracking-wider text-slate-200 mb-3">
            Syllabus Standards
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed mb-3">
            Includes Course Outcomes (CO1–CO5), Topic Specific Outcomes (TSO), Step-by-Step Numericals, and Viva Voce drills.
          </p>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-mono">
            BEU B.Tech 2026–2030 Edition
          </div>
        </div>

      </div>

      {/* Bottom copyright bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© 2026 Semester Point. Crafted for Bihar Engineering University Students.</p>
        <p className="flex items-center gap-1">
          Made with precision for engineers of tomorrow <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        </p>
      </div>
    </footer>
  );
};
