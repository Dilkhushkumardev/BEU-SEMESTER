import React, { useState } from 'react';
import { Sparkles, Info } from 'lucide-react';

interface AIVisualDiagramProps {
  topicId: string;
  topicTitle: string;
  category?: string;
}

export const AIVisualDiagram: React.FC<AIVisualDiagramProps> = ({ topicId, topicTitle }) => {
  const [activeTab, setActiveTab] = useState<'diagram' | 'explanation'>('diagram');

  // Determine diagram type from topicId or category
  const getDiagramContent = () => {
    // 1. Matrices / Echelon / Rank / Cayley-Hamilton
    if (topicId.includes('math-u1-t1') || topicId.includes('echelon') || topicId.includes('rank')) {
      return (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 600 240" className="w-full max-w-xl h-auto drop-shadow-lg">
            <defs>
              <linearGradient id="matrixGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <rect x="20" y="20" width="560" height="200" rx="12" fill="url(#matrixGlow)" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" />
            
            {/* Original Matrix Bracket */}
            <path d="M 60 50 L 50 50 L 50 190 L 60 190" fill="none" stroke="#60a5fa" strokeWidth="2.5" />
            <path d="M 220 50 L 230 50 L 230 190 L 220 190" fill="none" stroke="#60a5fa" strokeWidth="2.5" />
            <text x="80" y="80" fill="#93c5fd" fontSize="16" fontFamily="monospace">1   2  -1   4</text>
            <text x="80" y="125" fill="#93c5fd" fontSize="16" fontFamily="monospace">2   4   3   5</text>
            <text x="80" y="170" fill="#93c5fd" fontSize="16" fontFamily="monospace">3   6   2   9</text>
            <text x="140" y="215" fill="#64748b" fontSize="12" textAnchor="middle">Original Matrix A (3x4)</text>

            {/* Transform Arrow */}
            <g transform="translate(260, 110)">
              <line x1="0" y1="10" x2="60" y2="10" stroke="#06b6d4" strokeWidth="3" markerEnd="url(#arrowCyan)" />
              <text x="30" y="-5" fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold">R₂→R₂-2R₁</text>
              <text x="30" y="30" fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold">R₃→R₃-3R₁</text>
            </g>

            {/* Row Echelon Matrix */}
            <path d="M 370 50 L 360 50 L 360 190 L 370 190" fill="none" stroke="#34d399" strokeWidth="2.5" />
            <path d="M 530 50 L 540 50 L 540 190 L 530 190" fill="none" stroke="#34d399" strokeWidth="2.5" />
            
            {/* Row 1 Pivot */}
            <rect x="375" y="63" width="22" height="22" rx="4" fill="#3b82f6" fillOpacity="0.4" stroke="#60a5fa" />
            <text x="382" y="80" fill="#ffffff" fontSize="16" fontFamily="monospace" fontWeight="bold">1</text>
            <text x="415" y="80" fill="#cbd5e1" fontSize="16" fontFamily="monospace">2  -1   4</text>

            {/* Row 2 Pivot */}
            <text x="382" y="125" fill="#ef4444" fontSize="16" fontFamily="monospace">0</text>
            <text x="415" y="125" fill="#ef4444" fontSize="16" fontFamily="monospace">0</text>
            <rect x="445" y="108" width="22" height="22" rx="4" fill="#10b981" fillOpacity="0.4" stroke="#34d399" />
            <text x="452" y="125" fill="#ffffff" fontSize="16" fontFamily="monospace" fontWeight="bold">5</text>
            <text x="485" y="125" fill="#cbd5e1" fontSize="16" fontFamily="monospace">-3</text>

            {/* Row 3 Zero Row */}
            <text x="382" y="170" fill="#64748b" fontSize="16" fontFamily="monospace">0   0   0   0</text>
            <text x="450" y="215" fill="#34d399" fontSize="12" textAnchor="middle" fontWeight="bold">Echelon Form • Rank ρ(A) = 2</text>
          </svg>
          <div className="mt-2 text-xs text-cyan-300/80 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1.5 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Non-zero rows with leading pivot entries determine the rank ρ(A) = 2.
          </div>
        </div>
      );
    }

    // 2. Eigenvalues & Eigenvectors
    if (topicId.includes('math-u1-t2') || topicId.includes('eigen')) {
      return (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 600 240" className="w-full max-w-xl h-auto">
            {/* Coordinate Grid */}
            <line x1="50" y1="120" x2="550" y2="120" stroke="#334155" strokeWidth="1.5" />
            <line x1="300" y1="20" x2="300" y2="220" stroke="#334155" strokeWidth="1.5" />
            
            {/* Eigenspace line */}
            <line x1="100" y1="200" x2="500" y2="40" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="5 5" />
            <text x="480" y="30" fill="#a5b4fc" fontSize="12" fontWeight="bold">Eigenspace E(λ)</text>

            {/* Original Vector x */}
            <line x1="300" y1="120" x2="380" y2="88" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrowCyan)" />
            <circle cx="380" cy="88" r="4" fill="#38bdf8" />
            <text x="350" y="75" fill="#38bdf8" fontSize="13" fontWeight="bold">v (Eigenvector)</text>

            {/* Transformed Vector Ax = λv */}
            <line x1="300" y1="120" x2="460" y2="56" stroke="#ec4899" strokeWidth="3" markerEnd="url(#arrowPink)" />
            <circle cx="460" cy="56" r="4" fill="#ec4899" />
            <text x="430" y="48" fill="#f472b6" fontSize="14" fontWeight="bold">A · v = λ · v</text>

            {/* Non-eigenvector transformation */}
            <line x1="300" y1="120" x2="360" y2="170" stroke="#64748b" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="300" y1="120" x2="230" y2="180" stroke="#f59e0b" strokeWidth="2" />
            <text x="210" y="200" fill="#fbbf24" fontSize="11">Non-eigenvector rotates (A·u ≠ λu)</text>
          </svg>
          <div className="text-xs text-purple-300/80 bg-purple-950/40 border border-purple-800/40 px-3 py-1.5 rounded-full mt-2">
            Action of matrix A on its eigenvector v merely scales its length by factor λ without rotating it!
          </div>
        </div>
      );
    }

    // 3. Newton's Rings Interference
    if (topicId.includes('phy-u1') || topicId.includes('newton') || topicId.includes('optics')) {
      return (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 600 240" className="w-full max-w-xl h-auto">
            {/* Concentric rings pattern on left */}
            <g transform="translate(140, 120)">
              <circle cx="0" cy="0" r="95" fill="none" stroke="#0ea5e9" strokeWidth="4" opacity="0.9" />
              <circle cx="0" cy="0" r="80" fill="none" stroke="#0ea5e9" strokeWidth="5" opacity="0.85" />
              <circle cx="0" cy="0" r="63" fill="none" stroke="#0ea5e9" strokeWidth="6" opacity="0.8" />
              <circle cx="0" cy="0" r="44" fill="none" stroke="#0ea5e9" strokeWidth="7" opacity="0.75" />
              <circle cx="0" cy="0" r="22" fill="none" stroke="#0ea5e9" strokeWidth="8" opacity="0.7" />
              <circle cx="0" cy="0" r="6" fill="#0284c7" />
              {/* Microscope crosshair */}
              <line x1="-105" y1="0" x2="105" y2="0" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="0" y1="-105" x2="0" y2="105" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2" />
              <text x="0" y="115" fill="#94a3b8" fontSize="11" textAnchor="middle">Newton's Fringes (D_n ∝ √n)</text>
            </g>

            {/* Ray Optics Setup on right */}
            <g transform="translate(350, 40)">
              {/* Plano-convex lens */}
              <path d="M 30 50 Q 110 90 190 50 Z" fill="#38bdf8" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="2" />
              {/* Glass plate */}
              <rect x="20" y="90" width="180" height="16" fill="#64748b" fillOpacity="0.25" stroke="#94a3b8" strokeWidth="1.5" />
              {/* Air film wedge */}
              <text x="110" y="85" fill="#f59e0b" fontSize="11" textAnchor="middle" fontWeight="bold">Air Film Wedge (t)</text>
              
              {/* Incident and reflected rays */}
              <line x1="80" y1="10" x2="80" y2="60" stroke="#fbbf24" strokeWidth="2" />
              <line x1="80" y1="60" x2="80" y2="90" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="80" y1="90" x2="100" y2="10" stroke="#34d399" strokeWidth="2" />
              <line x1="80" y1="60" x2="110" y2="10" stroke="#38bdf8" strokeWidth="2" />

              <text x="110" y="130" fill="#e2e8f0" fontSize="12" textAnchor="middle" fontWeight="bold">
                Path Diff Δ = 2μt cos r + λ/2
              </text>
              <text x="110" y="150" fill="#38bdf8" fontSize="11" textAnchor="middle">
                Central spot is DARK (t=0, Δ = λ/2)
              </text>
            </g>
          </svg>
          <div className="text-xs text-sky-300/80 bg-sky-950/40 border border-sky-800/40 px-3 py-1.5 rounded-full mt-2">
            Interference occurs by division of amplitude between reflection from curved lens surface and flat plate.
          </div>
        </div>
      );
    }

    // 4. Optical Fiber TIR & Numerical Aperture
    if (topicId.includes('phy-u2') || topicId.includes('fiber') || topicId.includes('laser')) {
      return (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 600 220" className="w-full max-w-xl h-auto">
            {/* Cladding top */}
            <rect x="180" y="25" width="380" height="35" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
            <text x="370" y="48" fill="#94a3b8" fontSize="12" textAnchor="middle">Cladding (n₂ = 1.46)</text>

            {/* Core */}
            <rect x="180" y="60" width="380" height="100" fill="#0369a1" fillOpacity="0.3" stroke="#0284c7" strokeWidth="2" />
            <text x="370" y="115" fill="#38bdf8" fontSize="14" textAnchor="middle" fontWeight="bold">Fiber Core (n₁ = 1.50, where n₁ &gt; n₂)</text>

            {/* Cladding bottom */}
            <rect x="180" y="160" width="380" height="35" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
            <text x="370" y="183" fill="#94a3b8" fontSize="12" textAnchor="middle">Cladding (n₂ = 1.46)</text>

            {/* Acceptance Cone at launch */}
            <path d="M 60 40 L 180 110 L 60 180 Z" fill="#38bdf8" fillOpacity="0.1" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="100" y="115" fill="#38bdf8" fontSize="11" textAnchor="middle">Acceptance Cone θₐ</text>

            {/* Propagating Light Ray via TIR */}
            <path d="M 70 80 L 180 110 L 260 60 L 370 160 L 480 60 L 560 130" fill="none" stroke="#facc15" strokeWidth="3" />
            
            {/* Critical Angle indication */}
            <circle cx="260" cy="60" r="5" fill="#facc15" />
            <text x="260" y="80" fill="#facc15" fontSize="11" textAnchor="middle">θ &gt; θc (TIR)</text>

            {/* NA formula badge */}
            <rect x="20" y="195" width="220" height="24" rx="4" fill="#082f49" stroke="#0284c7" />
            <text x="130" y="211" fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold">
              NA = sin θₐ = √(n₁² - n₂²)
            </text>
          </svg>
        </div>
      );
    }

    // Generic Default Engineering Diagram for other topics
    return (
      <div className="flex flex-col items-center">
        <svg viewBox="0 0 600 210" className="w-full max-w-xl h-auto">
          <defs>
            <linearGradient id="genericGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#0f172a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#082f49" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <rect x="20" y="15" width="560" height="180" rx="14" fill="url(#genericGrad)" stroke="#3b82f6" strokeWidth="1.5" />
          
          {/* Central concept node */}
          <circle cx="300" cy="105" r="45" fill="#1e3a8a" stroke="#38bdf8" strokeWidth="3" />
          <text x="300" y="100" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="bold">CORE PRINCIPLE</text>
          <text x="300" y="118" fill="#7dd3fc" fontSize="9" textAnchor="middle">Governing Laws</text>

          {/* Satellite Node 1: Math Formulation */}
          <rect x="60" y="40" width="130" height="45" rx="8" fill="#0f172a" stroke="#818cf8" strokeWidth="2" />
          <text x="125" y="67" fill="#c7d2fe" fontSize="11" textAnchor="middle" fontWeight="bold">Mathematical Model</text>
          <line x1="190" y1="65" x2="260" y2="90" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 3" />

          {/* Satellite Node 2: Physical Mechanism */}
          <rect x="60" y="125" width="130" height="45" rx="8" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
          <text x="125" y="152" fill="#a7f3d0" fontSize="11" textAnchor="middle" fontWeight="bold">Physical Process</text>
          <line x1="190" y1="145" x2="260" y2="120" stroke="#34d399" strokeWidth="2" strokeDasharray="3 3" />

          {/* Satellite Node 3: Engineering Application */}
          <rect x="410" y="40" width="130" height="45" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
          <text x="475" y="67" fill="#fde68a" fontSize="11" textAnchor="middle" fontWeight="bold">Engg Application</text>
          <line x1="410" y1="65" x2="340" y2="90" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />

          {/* Satellite Node 4: Boundary Conditions */}
          <rect x="410" y="125" width="130" height="45" rx="8" fill="#0f172a" stroke="#ec4899" strokeWidth="2" />
          <text x="475" y="152" fill="#fbcfe8" fontSize="11" textAnchor="middle" fontWeight="bold">Boundary Conditions</text>
          <line x1="410" y1="145" x2="340" y2="120" stroke="#ec4899" strokeWidth="2" strokeDasharray="3 3" />
        </svg>
        <div className="text-xs text-blue-300/80 bg-blue-950/40 border border-blue-800/40 px-3 py-1.5 rounded-full mt-1">
          Conceptual schematic mapping fundamental theoretical mechanisms to practical engineering constraints.
        </div>
      </div>
    );
  };

  return (
    <div className="my-6 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-cyan-500/30 p-5 shadow-2xl relative overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              Automatic AI Visual Diagram
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                Interactive SVG
              </span>
            </h4>
            <p className="text-xs text-slate-400">Technical schematics &amp; mathematical models for {topicTitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-950/60 border border-slate-800 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('diagram')}
            className={`px-3 py-1 rounded text-xs font-medium transition-all ${
              activeTab === 'diagram'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Diagram
          </button>
          <button
            onClick={() => setActiveTab('explanation')}
            className={`px-3 py-1 rounded text-xs font-medium transition-all ${
              activeTab === 'explanation'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Visual Guide
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative bg-slate-950/80 rounded-xl border border-slate-800/80 p-4 flex flex-col items-center justify-center min-h-[260px]">
        {/* SVG Marker Definitions */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <marker id="arrowCyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#06b6d4" />
            </marker>
            <marker id="arrowPink" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#ec4899" />
            </marker>
            <marker id="arrowYellow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#fbbf24" />
            </marker>
            <marker id="arrowPurple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#c084fc" />
            </marker>
            <marker id="arrowRed" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#ef4444" />
            </marker>
          </defs>
        </svg>

        {activeTab === 'diagram' ? (
          getDiagramContent()
        ) : (
          <div className="w-full max-w-xl text-left space-y-3 py-2 text-xs text-slate-300">
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/90 border border-slate-800">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-100 font-semibold block mb-0.5">How to interpret this diagram in BEU exams:</strong>
                Always sketch this vector or circuit representation neatly in pencil. Label coordinate axes, critical points, and boundary conditions clearly to secure maximum marks in 14-mark university exam questions.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800/80">
                <span className="text-cyan-400 font-mono font-semibold block mb-1">KEY VISUAL ELEMENT</span>
                Physical intuition and direction of vectors / signal flow.
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800/80">
                <span className="text-emerald-400 font-mono font-semibold block mb-1">EXAM BENEFIT</span>
                Directly maps to step-by-step mathematical derivations.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
