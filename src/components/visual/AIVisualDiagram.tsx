import React, { useState } from 'react';
import { Sparkles, Info, Eye, BookOpen } from 'lucide-react';

interface AIVisualDiagramProps {
  topicId: string;
  topicTitle: string;
  category?: string;
}

export const AIVisualDiagram: React.FC<AIVisualDiagramProps> = ({ topicId, topicTitle }) => {
  const [activeTab, setActiveTab] = useState<'diagram' | 'explanation' | 'steps'>('diagram');

  // Determine diagram type from topicId or category
  const getDiagramData = () => {
    const tid = topicId.toLowerCase();

    // 1. Matrices / Echelon / Rank / Normal Form
    if (tid.includes('math-u1-t1') || tid.includes('echelon') || tid.includes('rank')) {
      return {
        title: 'Matrix Row-Echelon & Canonical Normal Form',
        caption: 'Visualizing Gaussian elimination pivots and rank determination ρ(A)',
        svg: (
          <svg viewBox="0 0 620 250" className="w-full max-w-2xl h-auto drop-shadow-xl">
            <defs>
              <linearGradient id="matrixGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <rect x="15" y="15" width="590" height="220" rx="14" fill="url(#matrixGlow)" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" />
            
            {/* Original Matrix Bracket */}
            <path d="M 50 45 L 40 45 L 40 185 L 50 185" fill="none" stroke="#60a5fa" strokeWidth="2.5" />
            <path d="M 210 45 L 220 45 L 220 185 L 210 185" fill="none" stroke="#60a5fa" strokeWidth="2.5" />
            <text x="65" y="75" fill="#93c5fd" fontSize="15" fontFamily="monospace" fontWeight="bold">1   2  -1   4</text>
            <text x="65" y="115" fill="#93c5fd" fontSize="15" fontFamily="monospace" fontWeight="bold">2   4   3   5</text>
            <text x="65" y="155" fill="#93c5fd" fontSize="15" fontFamily="monospace" fontWeight="bold">3   6   2   9</text>
            <text x="130" y="205" fill="#94a3b8" fontSize="12" textAnchor="middle" fontWeight="semibold">Original Matrix A (3×4)</text>

            {/* Transform Arrow */}
            <g transform="translate(245, 100)">
              <line x1="0" y1="15" x2="60" y2="15" stroke="#06b6d4" strokeWidth="3" markerEnd="url(#arrowCyan)" />
              <text x="30" y="-2" fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold">R₂→R₂-2R₁</text>
              <text x="30" y="38" fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold">R₃→R₃-3R₁</text>
            </g>

            {/* Row Echelon Matrix */}
            <path d="M 360 45 L 350 45 L 350 185 L 360 185" fill="none" stroke="#34d399" strokeWidth="2.5" />
            <path d="M 530 45 L 540 45 L 540 185 L 530 185" fill="none" stroke="#34d399" strokeWidth="2.5" />
            
            {/* Row 1 Pivot */}
            <rect x="365" y="58" width="24" height="24" rx="4" fill="#3b82f6" fillOpacity="0.5" stroke="#60a5fa" />
            <text x="372" y="75" fill="#ffffff" fontSize="15" fontFamily="monospace" fontWeight="bold">1</text>
            <text x="405" y="75" fill="#cbd5e1" fontSize="15" fontFamily="monospace">2  -1   4</text>

            {/* Row 2 Pivot */}
            <text x="372" y="115" fill="#ef4444" fontSize="15" fontFamily="monospace">0</text>
            <text x="405" y="115" fill="#ef4444" fontSize="15" fontFamily="monospace">0</text>
            <rect x="435" y="98" width="24" height="24" rx="4" fill="#10b981" fillOpacity="0.5" stroke="#34d399" />
            <text x="442" y="115" fill="#ffffff" fontSize="15" fontFamily="monospace" fontWeight="bold">5</text>
            <text x="475" y="115" fill="#cbd5e1" fontSize="15" fontFamily="monospace">-3</text>

            {/* Row 3 Zero Row */}
            <text x="372" y="155" fill="#64748b" fontSize="15" fontFamily="monospace">0   0   0   0</text>
            <text x="445" y="205" fill="#34d399" fontSize="12" textAnchor="middle" fontWeight="bold">Echelon Form • Rank ρ(A) = 2</text>
          </svg>
        ),
        explanation: 'The rank of matrix A is equal to the number of non-zero rows in its Row Echelon Form. Here, row 3 becomes completely zeros under elementary row operations, giving 2 leading pivot entries (1 and 5), confirming ρ(A) = 2.'
      };
    }

    // 2. Eigenvalues & Eigenvectors
    if (tid.includes('math-u1-t2') || tid.includes('eigen') || tid.includes('diagonalization')) {
      return {
        title: 'Eigenvectors & Linear Transformation Scaling',
        caption: 'Geometric action of matrix A on eigenvector v: A·v = λ·v',
        svg: (
          <svg viewBox="0 0 620 240" className="w-full max-w-2xl h-auto">
            {/* Coordinate Grid */}
            <line x1="40" y1="120" x2="580" y2="120" stroke="#334155" strokeWidth="1.5" />
            <line x1="310" y1="20" x2="310" y2="220" stroke="#334155" strokeWidth="1.5" />
            
            {/* Eigenspace line */}
            <line x1="90" y1="210" x2="530" y2="30" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="5 5" />
            <text x="510" y="25" fill="#a5b4fc" fontSize="12" fontWeight="bold">Eigenspace E(λ = 2.5)</text>

            {/* Original Vector v */}
            <line x1="310" y1="120" x2="390" y2="87" stroke="#38bdf8" strokeWidth="3.5" markerEnd="url(#arrowCyan)" />
            <circle cx="390" cy="87" r="4" fill="#38bdf8" />
            <text x="360" y="75" fill="#38bdf8" fontSize="13" fontWeight="bold">v (Eigenvector)</text>

            {/* Transformed Vector Av = λv */}
            <line x1="310" y1="120" x2="490" y2="46" stroke="#ec4899" strokeWidth="3.5" markerEnd="url(#arrowPink)" />
            <circle cx="490" cy="46" r="4" fill="#ec4899" />
            <text x="450" y="38" fill="#f472b6" fontSize="14" fontWeight="bold">A · v = λ · v</text>

            {/* Non-eigenvector transformation */}
            <line x1="310" y1="120" x2="370" y2="175" stroke="#64748b" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="310" y1="120" x2="230" y2="185" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrowYellow)" />
            <text x="185" y="205" fill="#fbbf24" fontSize="11" fontWeight="semibold">Non-eigenvector u rotates (A·u ≠ λu)</text>
          </svg>
        ),
        explanation: 'An eigenvector is a special vector that does not rotate when transformed by matrix A; its direction stays strictly along the invariant eigenspace line, simply stretching or shrinking by eigenvalue λ.'
      };
    }

    // 3. Rolle's & Lagrange Mean Value Theorem
    if (tid.includes('math-u2') || tid.includes('rolle') || tid.includes('mean-value') || tid.includes('taylor')) {
      return {
        title: 'Lagrange Mean Value Theorem (Tangent ∥ Secant)',
        caption: 'Geometric proof: f\'(c) = [f(b) - f(a)] / (b - a)',
        svg: (
          <svg viewBox="0 0 620 240" className="w-full max-w-2xl h-auto">
            {/* Coordinate Axes */}
            <line x1="50" y1="210" x2="570" y2="210" stroke="#475569" strokeWidth="1.5" />
            <line x1="60" y1="20" x2="60" y2="220" stroke="#475569" strokeWidth="1.5" />
            <text x="560" y="225" fill="#94a3b8" fontSize="12">x</text>
            <text x="45" y="30" fill="#94a3b8" fontSize="12">y</text>

            {/* Smooth Curve y = f(x) */}
            <path d="M 120 180 Q 240 30, 480 110" fill="none" stroke="#38bdf8" strokeWidth="3" />
            <text x="500" y="110" fill="#38bdf8" fontSize="14" fontWeight="bold">y = f(x)</text>

            {/* Points A and B */}
            <circle cx="120" cy="180" r="5" fill="#f59e0b" />
            <text x="100" y="200" fill="#f59e0b" fontSize="12" fontWeight="bold">A(a, f(a))</text>
            <circle cx="480" cy="110" r="5" fill="#f59e0b" />
            <text x="470" y="135" fill="#f59e0b" fontSize="12" fontWeight="bold">B(b, f(b))</text>

            {/* Secant Line AB */}
            <line x1="80" y1="188" x2="520" y2="102" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 4" />
            <text x="210" y="175" fill="#fbbf24" fontSize="11">Secant slope = [f(b)-f(a)]/(b-a)</text>

            {/* Tangent at point C */}
            <circle cx="280" cy="85" r="5" fill="#34d399" />
            <line x1="160" y1="109" x2="400" y2="61" stroke="#34d399" strokeWidth="2.5" />
            <text x="290" y="70" fill="#34d399" fontSize="12" fontWeight="bold">Tangent at c: f'(c)</text>

            {/* Dropped dotted projections */}
            <line x1="120" y1="180" x2="120" y2="210" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="280" y1="85" x2="280" y2="210" stroke="#34d399" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="480" y1="110" x2="480" y2="210" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
            
            <text x="115" y="225" fill="#cbd5e1" fontSize="12">x = a</text>
            <text x="275" y="225" fill="#34d399" fontSize="12" fontWeight="bold">x = c</text>
            <text x="475" y="225" fill="#cbd5e1" fontSize="12">x = b</text>
          </svg>
        ),
        explanation: 'LMVT guarantees that for any continuous and differentiable curve between a and b, there exists at least one point c ∈ (a, b) where the instantaneous derivative (tangent slope) equals the average rate of change (secant slope).'
      };
    }

    // 4. Maxima, Minima & Saddle Points (Multivariable Calculus)
    if (tid.includes('math-u3') || tid.includes('maxima') || tid.includes('saddle') || tid.includes('lagrange-multiplier')) {
      return {
        title: '3D Surface Topology: Local Maxima, Minima & Saddle Points',
        caption: 'Hessian Discriminant Δ = rt - s² classification',
        svg: (
          <svg viewBox="0 0 620 240" className="w-full max-w-2xl h-auto">
            {/* 3 Panels */}
            {/* Panel 1: Local Maximum */}
            <g transform="translate(30, 20)">
              <rect x="0" y="0" width="170" height="200" rx="10" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
              <path d="M 20 140 Q 85 40, 150 140" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
              <ellipse cx="85" cy="85" rx="45" ry="15" fill="none" stroke="#60a5fa" strokeDasharray="3 3" />
              <circle cx="85" cy="62" r="5" fill="#ef4444" />
              <text x="85" y="50" fill="#fca5a5" fontSize="11" textAnchor="middle" fontWeight="bold">Peak (Maximum)</text>
              <text x="85" y="170" fill="#93c5fd" fontSize="11" textAnchor="middle" fontWeight="bold">rt - s² &gt; 0, r &lt; 0</text>
            </g>

            {/* Panel 2: Local Minimum */}
            <g transform="translate(225, 20)">
              <rect x="0" y="0" width="170" height="200" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <path d="M 20 60 Q 85 160, 150 60" fill="none" stroke="#34d399" strokeWidth="2.5" />
              <ellipse cx="85" cy="115" rx="45" ry="15" fill="none" stroke="#34d399" strokeDasharray="3 3" />
              <circle cx="85" cy="135" r="5" fill="#10b981" />
              <text x="85" y="155" fill="#6ee7b7" fontSize="11" textAnchor="middle" fontWeight="bold">Valley (Minimum)</text>
              <text x="85" y="175" fill="#a7f3d0" fontSize="11" textAnchor="middle" fontWeight="bold">rt - s² &gt; 0, r &gt; 0</text>
            </g>

            {/* Panel 3: Saddle Point */}
            <g transform="translate(420, 20)">
              <rect x="0" y="0" width="170" height="200" rx="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <path d="M 20 80 Q 85 140, 150 80" fill="none" stroke="#fbbf24" strokeWidth="2" />
              <path d="M 20 140 Q 85 80, 150 140" fill="none" stroke="#f43f5e" strokeWidth="2" />
              <circle cx="85" cy="110" r="5" fill="#f59e0b" />
              <text x="85" y="95" fill="#fde68a" fontSize="11" textAnchor="middle" fontWeight="bold">Saddle Point</text>
              <text x="85" y="170" fill="#fde68a" fontSize="11" textAnchor="middle" fontWeight="bold">rt - s² &lt; 0</text>
            </g>
          </svg>
        ),
        explanation: 'At stationary points where fx = fy = 0, the second derivative test uses r = fxx, s = fxy, t = fyy. When rt - s² > 0 with r < 0, it is a local maximum. If r > 0, it is a local minimum. If rt - s² < 0, it is a saddle point.'
      };
    }

    // 5. Vector Calculus: Gradient, Divergence & Curl
    if (tid.includes('math-u5') || tid.includes('gradient') || tid.includes('divergence') || tid.includes('curl') || tid.includes('gauss') || tid.includes('stokes')) {
      return {
        title: 'Vector Field Operations: Gradient, Divergence & Curl',
        caption: '∇f (Steepest ascent), ∇·V (Flux density), ∇×V (Vorticity)',
        svg: (
          <svg viewBox="0 0 620 240" className="w-full max-w-2xl h-auto">
            {/* Panel 1: Gradient */}
            <g transform="translate(30, 20)">
              <rect x="0" y="0" width="170" height="200" rx="10" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
              <ellipse cx="85" cy="100" rx="60" ry="30" fill="none" stroke="#334155" />
              <ellipse cx="85" cy="100" rx="40" ry="20" fill="none" stroke="#475569" />
              <ellipse cx="85" cy="100" rx="20" ry="10" fill="none" stroke="#64748b" />
              <line x1="85" y1="100" x2="85" y2="40" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrowCyan)" />
              <text x="85" y="30" fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold">∇f (Gradient)</text>
              <text x="85" y="160" fill="#94a3b8" fontSize="10" textAnchor="middle">Orthogonal to scalar</text>
              <text x="85" y="175" fill="#94a3b8" fontSize="10" textAnchor="middle">level curves f=c</text>
            </g>

            {/* Panel 2: Divergence */}
            <g transform="translate(225, 20)">
              <rect x="0" y="0" width="170" height="200" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <circle cx="85" cy="90" r="10" fill="#10b981" />
              {/* Outward arrows */}
              <line x1="85" y1="75" x2="85" y2="35" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrowCyan)" />
              <line x1="85" y1="105" x2="85" y2="145" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrowCyan)" />
              <line x1="70" y1="90" x2="30" y2="90" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrowCyan)" />
              <line x1="100" y1="90" x2="140" y2="90" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrowCyan)" />
              <text x="85" y="25" fill="#34d399" fontSize="11" textAnchor="middle" fontWeight="bold">∇ · V (Divergence)</text>
              <text x="85" y="165" fill="#a7f3d0" fontSize="10" textAnchor="middle">Positive: Source</text>
              <text x="85" y="180" fill="#a7f3d0" fontSize="10" textAnchor="middle">Zero: Solenoidal</text>
            </g>

            {/* Panel 3: Curl */}
            <g transform="translate(420, 20)">
              <rect x="0" y="0" width="170" height="200" rx="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <circle cx="85" cy="90" r="35" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6 4" />
              {/* Circulation arrow */}
              <path d="M 85 55 A 35 35 0 0 1 120 90" fill="none" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrowYellow)" />
              <line x1="85" y1="90" x2="85" y2="40" stroke="#ec4899" strokeWidth="2.5" markerEnd="url(#arrowPink)" />
              <text x="85" y="25" fill="#fde68a" fontSize="11" textAnchor="middle" fontWeight="bold">∇ × V (Curl)</text>
              <text x="85" y="165" fill="#fde68a" fontSize="10" textAnchor="middle">Rotation/Vorticity</text>
              <text x="85" y="180" fill="#fde68a" fontSize="10" textAnchor="middle">Zero: Irrotational</text>
            </g>
          </svg>
        ),
        explanation: 'Gradient ∇f produces a vector pointing in direction of maximum increase. Divergence ∇·V represents net volumetric flux escaping a point. Curl ∇×V represents rotational circulation.'
      };
    }

    // 6. Newton's Rings & Wave Optics Interference
    if (tid.includes('phy-u1') || tid.includes('newton') || tid.includes('interference') || tid.includes('diffraction')) {
      return {
        title: "Newton's Rings & Thin Air Film Interference",
        caption: 'Path difference Δ = 2μt cos r + λ/2 with Dark Central Spot',
        svg: (
          <svg viewBox="0 0 620 240" className="w-full max-w-2xl h-auto">
            {/* Concentric rings pattern on left */}
            <g transform="translate(150, 120)">
              <circle cx="0" cy="0" r="95" fill="none" stroke="#0ea5e9" strokeWidth="3.5" opacity="0.9" />
              <circle cx="0" cy="0" r="78" fill="none" stroke="#0ea5e9" strokeWidth="4.5" opacity="0.85" />
              <circle cx="0" cy="0" r="60" fill="none" stroke="#0ea5e9" strokeWidth="5.5" opacity="0.8" />
              <circle cx="0" cy="0" r="40" fill="none" stroke="#0ea5e9" strokeWidth="6.5" opacity="0.75" />
              <circle cx="0" cy="0" r="20" fill="none" stroke="#0ea5e9" strokeWidth="7.5" opacity="0.7" />
              <circle cx="0" cy="0" r="6" fill="#0284c7" />
              {/* Microscope crosshairs */}
              <line x1="-105" y1="0" x2="105" y2="0" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="0" y1="-105" x2="0" y2="105" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2" />
              <text x="0" y="115" fill="#94a3b8" fontSize="11" textAnchor="middle">Newton Rings (Dₙ² ∝ n)</text>
            </g>

            {/* Ray Optics Setup on right */}
            <g transform="translate(360, 35)">
              {/* Plano-convex lens */}
              <path d="M 30 50 Q 120 95 210 50 Z" fill="#38bdf8" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="2" />
              <text x="120" y="35" fill="#38bdf8" fontSize="11" textAnchor="middle">Plano-Convex Lens (R)</text>

              {/* Glass plate */}
              <rect x="20" y="95" width="200" height="18" fill="#64748b" fillOpacity="0.25" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="120" y="130" fill="#94a3b8" fontSize="11" textAnchor="middle">Flat Glass Plate</text>

              {/* Air film wedge */}
              <text x="120" y="90" fill="#f59e0b" fontSize="11" textAnchor="middle" fontWeight="bold">Air Film (t)</text>
              
              {/* Incident and reflected rays */}
              <line x1="80" y1="10" x2="80" y2="60" stroke="#fbbf24" strokeWidth="2" />
              <line x1="80" y1="60" x2="80" y2="95" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="80" y1="95" x2="105" y2="10" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrowCyan)" />
              <line x1="80" y1="60" x2="115" y2="10" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrowCyan)" />

              <text x="120" y="155" fill="#e2e8f0" fontSize="12" textAnchor="middle" fontWeight="bold">
                Dark Fringes: Dₙ = √(4nλR)
              </text>
              <text x="120" y="175" fill="#38bdf8" fontSize="11" textAnchor="middle">
                Central spot is DARK (t=0, Δ = λ/2)
              </text>
            </g>
          </svg>
        ),
        explanation: 'Interference takes place by division of amplitude between rays reflected from the bottom curved surface of the lens and the top of the glass plate. The extra λ/2 phase shift at the denser reflection causes the center spot to be dark.'
      };
    }

    // 7. Lasers: Population Inversion & Optical Cavity
    if (tid.includes('phy-u2') || tid.includes('laser') || tid.includes('ruby') || tid.includes('he-ne')) {
      return {
        title: 'Laser Action: 3-Level / 4-Level Population Inversion',
        caption: 'Pumping → Metastable State (N₂ > N₁) → Stimulated Emission (hν)',
        svg: (
          <svg viewBox="0 0 620 240" className="w-full max-w-2xl h-auto">
            {/* Energy Levels */}
            <g transform="translate(60, 20)">
              {/* E3 Upper Pump State */}
              <line x1="20" y1="40" x2="220" y2="40" stroke="#ef4444" strokeWidth="3" />
              <text x="230" y="45" fill="#fca5a5" fontSize="12" fontWeight="bold">E₃ (Pump Band, τ ~ 10⁻⁸ s)</text>

              {/* E2 Metastable State */}
              <line x1="20" y1="100" x2="220" y2="100" stroke="#10b981" strokeWidth="3" />
              <text x="230" y="105" fill="#6ee7b7" fontSize="12" fontWeight="bold">E₂ (Metastable, τ ~ 10⁻³ s) [N₂ High]</text>

              {/* E1 Ground State */}
              <line x1="20" y1="190" x2="220" y2="190" stroke="#3b82f6" strokeWidth="3" />
              <text x="230" y="195" fill="#93c5fd" fontSize="12" fontWeight="bold">E₁ (Ground State) [N₁]</text>

              {/* Optical Pumping Arrow E1 -> E3 */}
              <line x1="60" y1="185" x2="60" y2="45" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#arrowYellow)" />
              <text x="25" y="115" fill="#fbbf24" fontSize="11" fontWeight="bold">Pump</text>

              {/* Fast Radiationless Decay E3 -> E2 */}
              <path d="M 120 45 Q 140 70, 120 95" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#arrowCyan)" />
              <text x="135" y="75" fill="#94a3b8" fontSize="10">Non-radiative</text>

              {/* Laser Transition E2 -> E1 */}
              <line x1="180" y1="105" x2="180" y2="185" stroke="#ec4899" strokeWidth="3.5" markerEnd="url(#arrowPink)" />
              <text x="195" y="150" fill="#f472b6" fontSize="11" fontWeight="bold">Laser hν</text>
            </g>

            {/* Resonator Cavity */}
            <g transform="translate(420, 50)">
              <rect x="0" y="30" width="16" height="80" fill="#cbd5e1" stroke="#94a3b8" />
              <text x="8" y="125" fill="#94a3b8" fontSize="10" textAnchor="middle">100% Mirror</text>
              <rect x="150" y="30" width="16" height="80" fill="#38bdf8" stroke="#0284c7" fillOpacity="0.4" />
              <text x="158" y="125" fill="#38bdf8" fontSize="10" textAnchor="middle">98% Output</text>
              <rect x="20" y="45" width="125" height="50" rx="6" fill="#ec4899" fillOpacity="0.2" stroke="#ec4899" strokeWidth="1.5" />
              <text x="82" y="75" fill="#f472b6" fontSize="11" textAnchor="middle" fontWeight="bold">Active Medium</text>
              {/* Emitted laser beam */}
              <line x1="170" y1="70" x2="240" y2="70" stroke="#ec4899" strokeWidth="4" markerEnd="url(#arrowPink)" />
              <text x="205" y="60" fill="#f472b6" fontSize="11" fontWeight="bold">Coherent Beam</text>
            </g>
          </svg>
        ),
        explanation: 'Laser action requires Population Inversion where the number of atoms in the metastable state N₂ exceeds ground state N₁. Incident photons trigger coherent stimulated emission producing monochromatic light.'
      };
    }

    // 8. Optical Fiber & Total Internal Reflection
    if (tid.includes('phy-u3') || tid.includes('fiber') || tid.includes('total-internal-reflection') || tid.includes('numerical-aperture')) {
      return {
        title: 'Optical Fiber Waveguide & Numerical Aperture',
        caption: 'Total Internal Reflection (TIR) when θ > θ_c and n_core > n_cladding',
        svg: (
          <svg viewBox="0 0 620 220" className="w-full max-w-2xl h-auto">
            {/* Cladding top */}
            <rect x="160" y="25" width="420" height="35" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
            <text x="370" y="48" fill="#94a3b8" fontSize="12" textAnchor="middle">Cladding (n₂ = 1.46)</text>

            {/* Core */}
            <rect x="160" y="60" width="420" height="100" fill="#0369a1" fillOpacity="0.3" stroke="#0284c7" strokeWidth="2" />
            <text x="370" y="115" fill="#38bdf8" fontSize="14" textAnchor="middle" fontWeight="bold">Core (n₁ = 1.50, where n₁ &gt; n₂)</text>

            {/* Cladding bottom */}
            <rect x="160" y="160" width="420" height="35" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
            <text x="370" y="183" fill="#94a3b8" fontSize="12" textAnchor="middle">Cladding (n₂ = 1.46)</text>

            {/* Acceptance Cone at launch */}
            <path d="M 40 40 L 160 110 L 40 180 Z" fill="#38bdf8" fillOpacity="0.1" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="85" y="115" fill="#38bdf8" fontSize="11" textAnchor="middle">Acceptance Cone θₐ</text>

            {/* Propagating Light Ray via TIR */}
            <path d="M 50 75 L 160 110 L 250 60 L 360 160 L 470 60 L 560 135" fill="none" stroke="#facc15" strokeWidth="3" />
            
            {/* Critical Angle indication */}
            <circle cx="250" cy="60" r="5" fill="#facc15" />
            <text x="250" y="82" fill="#facc15" fontSize="11" textAnchor="middle">θ &gt; θc (TIR)</text>

            {/* NA formula badge */}
            <rect x="15" y="195" width="220" height="24" rx="4" fill="#082f49" stroke="#0284c7" />
            <text x="125" y="211" fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold">
              NA = sin θₐ = √(n₁² - n₂²)
            </text>
          </svg>
        ),
        explanation: 'Light launched within the acceptance cone enters the core and strikes the core-cladding interface at an angle greater than critical angle θc = sin⁻¹(n₂/n₁), undergoing continuous total internal reflection.'
      };
    }

    // 9. Hall Effect & Quantum/Semiconductor
    if (tid.includes('phy-u4') || tid.includes('hall') || tid.includes('band') || tid.includes('fermi')) {
      return {
        title: 'Hall Effect & Lorentz Force on Charge Carriers',
        caption: 'Hall Voltage V_H = (I · B) / (n · e · d) & Carrier Mobility',
        svg: (
          <svg viewBox="0 0 620 240" className="w-full max-w-2xl h-auto">
            {/* Semiconductor Slab */}
            <polygon points="180,60 440,60 480,120 220,120" fill="#1e3a8a" fillOpacity="0.4" stroke="#3b82f6" strokeWidth="2" />
            <polygon points="180,60 220,120 220,190 180,130" fill="#1d4ed8" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
            <polygon points="220,120 480,120 480,190 220,190" fill="#2563eb" fillOpacity="0.5" stroke="#60a5fa" strokeWidth="2" />

            {/* Current I (along X) */}
            <line x1="80" y1="155" x2="190" y2="155" stroke="#34d399" strokeWidth="3" markerEnd="url(#arrowCyan)" />
            <text x="120" y="145" fill="#34d399" fontSize="13" fontWeight="bold">Current I (X-axis)</text>

            {/* Magnetic Field B (along Z, upward) */}
            <line x1="330" y1="210" x2="330" y2="25" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrowYellow)" />
            <text x="345" y="40" fill="#fbbf24" fontSize="13" fontWeight="bold">B Field (Z-axis)</text>

            {/* Lorentz Force F_L = q(v x B) */}
            <circle cx="330" cy="155" r="8" fill="#ef4444" />
            <text x="330" y="159" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="bold">e⁻</text>
            <line x1="330" y1="155" x2="240" y2="155" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#arrowPink)" />
            <text x="270" y="175" fill="#f87171" fontSize="11" fontWeight="bold">F_L = -e(v×B)</text>

            {/* Hall Voltage V_H meter */}
            <line x1="480" y1="155" x2="550" y2="155" stroke="#a855f7" strokeWidth="2" />
            <circle cx="570" cy="155" r="16" fill="#581c87" stroke="#c084fc" strokeWidth="2" />
            <text x="570" y="160" fill="#f3e8ff" fontSize="11" textAnchor="middle" fontWeight="bold">V_H</text>
            <text x="570" y="190" fill="#c084fc" fontSize="11" textAnchor="middle" fontWeight="bold">Hall Voltage</text>
          </svg>
        ),
        explanation: 'When a current-carrying conductor or semiconductor is placed in a perpendicular magnetic field, charge carriers experience Lorentz force F = q(v × B), creating a transverse potential difference V_H.'
      };
    }

    // 10. DC Circuits: KVL, KCL & Node/Mesh
    if (tid.includes('elec-u1') || tid.includes('kvl') || tid.includes('kcl') || tid.includes('thevenin') || tid.includes('norton')) {
      return {
        title: 'Kirchhoff’s Laws & Network Mesh Analysis',
        caption: 'KCL: ∑I_in = ∑I_out at any Node | KVL: ∑V = 0 around any closed Loop',
        svg: (
          <svg viewBox="0 0 620 230" className="w-full max-w-2xl h-auto">
            {/* Circuit Loops */}
            <rect x="80" y="40" width="460" height="150" fill="none" stroke="#475569" strokeWidth="2.5" />
            <line x1="310" y1="40" x2="310" y2="190" stroke="#475569" strokeWidth="2.5" />

            {/* DC Voltage Source Left */}
            <circle cx="80" cy="115" r="18" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
            <text x="80" y="110" fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold">+</text>
            <text x="80" y="125" fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold">-</text>
            <text x="45" y="120" fill="#38bdf8" fontSize="12" fontWeight="bold">V₁</text>

            {/* Resistors */}
            <rect x="160" y="32" width="60" height="16" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="190" y="25" fill="#fbbf24" fontSize="11" textAnchor="middle">R₁</text>

            <rect x="302" y="90" width="16" height="60" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="335" y="125" fill="#fbbf24" fontSize="11">R₂</text>

            <rect x="380" y="32" width="60" height="16" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="410" y="25" fill="#fbbf24" fontSize="11" textAnchor="middle">R₃</text>

            {/* Node A */}
            <circle cx="310" cy="40" r="5" fill="#34d399" />
            <text x="310" y="22" fill="#34d399" fontSize="12" textAnchor="middle" fontWeight="bold">Node A (KCL: I₁ = I₂ + I₃)</text>

            {/* Loop 1 Mesh Current */}
            <path d="M 170 100 A 25 25 0 1 1 200 130" fill="none" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrowCyan)" />
            <text x="185" y="118" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">Loop 1 (I₁)</text>

            {/* Loop 2 Mesh Current */}
            <path d="M 400 100 A 25 25 0 1 1 430 130" fill="none" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrowPurple)" />
            <text x="415" y="118" fill="#c084fc" fontSize="12" textAnchor="middle" fontWeight="bold">Loop 2 (I₂)</text>
          </svg>
        ),
        explanation: 'At Node A, Kirchhoff’s Current Law states the sum of currents entering equals currents leaving. Along Mesh 1 and Mesh 2, Kirchhoff’s Voltage Law dictates the algebraic sum of voltages is zero.'
      };
    }

    // 11. AC Circuits: RLC Resonance Curve
    if (tid.includes('elec-u2') || tid.includes('rlc') || tid.includes('resonance') || tid.includes('ac')) {
      return {
        title: 'Series RLC Resonance & Bandwidth Response',
        caption: 'Resonance Frequency f_r = 1 / (2π√LC) | Quality Factor Q = f_r / Δf',
        svg: (
          <svg viewBox="0 0 620 230" className="w-full max-w-2xl h-auto">
            {/* Coordinate Axes */}
            <line x1="60" y1="190" x2="560" y2="190" stroke="#475569" strokeWidth="2" />
            <line x1="80" y1="20" x2="80" y2="200" stroke="#475569" strokeWidth="2" />
            <text x="540" y="210" fill="#94a3b8" fontSize="12">Frequency f (Hz)</text>
            <text x="40" y="35" fill="#94a3b8" fontSize="12">Current I</text>

            {/* Bell Curve Current Response */}
            <path d="M 100 185 Q 260 180, 310 40 Q 360 180, 520 185" fill="none" stroke="#38bdf8" strokeWidth="3.5" />
            
            {/* Peak Max Current I_max at f_r */}
            <line x1="310" y1="40" x2="310" y2="190" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="310" cy="40" r="5" fill="#f59e0b" />
            <text x="310" y="25" fill="#fbbf24" fontSize="12" textAnchor="middle" fontWeight="bold">I_max = V / R</text>
            <text x="310" y="210" fill="#fbbf24" fontSize="12" textAnchor="middle" fontWeight="bold">f_r (Resonance)</text>

            {/* Half Power Cutoff frequencies f1 and f2 (0.707 I_max) */}
            <line x1="80" y1="84" x2="480" y2="84" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="130" y="78" fill="#34d399" fontSize="11">I_max / √2 = 0.707 I_max</text>

            <line x1="265" y1="84" x2="265" y2="190" stroke="#34d399" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="355" y1="84" x2="355" y2="190" stroke="#34d399" strokeWidth="1" strokeDasharray="2 2" />
            <text x="260" y="210" fill="#a7f3d0" fontSize="11" textAnchor="middle">f₁ (Lower)</text>
            <text x="360" y="210" fill="#a7f3d0" fontSize="11" textAnchor="middle">f₂ (Upper)</text>

            {/* Bandwidth Bracket */}
            <line x1="265" y1="130" x2="355" y2="130" stroke="#ec4899" strokeWidth="2" markerStart="url(#arrowPink)" markerEnd="url(#arrowPink)" />
            <text x="310" y="122" fill="#f472b6" fontSize="11" textAnchor="middle" fontWeight="bold">Bandwidth Δf = f₂ - f₁ = R / (2πL)</text>
          </svg>
        ),
        explanation: 'At resonance frequency fr, inductive reactance XL equals capacitive reactance XC, canceling total reactive impedance and allowing maximum AC current to flow, limited purely by resistance R.'
      };
    }

    // 12. Transistors & Semiconductor PN Diodes
    if (tid.includes('elec-u3') || tid.includes('elec-u4') || tid.includes('bjt') || tid.includes('diode') || tid.includes('transistor')) {
      return {
        title: 'BJT NPN Common-Emitter Output Characteristics',
        caption: 'Active Region (Amplification), Saturation Region (ON Switch), Cutoff (OFF Switch)',
        svg: (
          <svg viewBox="0 0 620 230" className="w-full max-w-2xl h-auto">
            <line x1="60" y1="190" x2="560" y2="190" stroke="#475569" strokeWidth="2" />
            <line x1="80" y1="20" x2="80" y2="200" stroke="#475569" strokeWidth="2" />
            <text x="520" y="210" fill="#94a3b8" fontSize="12">V_CE (Collector-Emitter Voltage)</text>
            <text x="40" y="35" fill="#94a3b8" fontSize="12">I_C (mA)</text>

            {/* Saturation boundary */}
            <path d="M 80 190 Q 110 50, 120 30" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="95" y="45" fill="#f87171" fontSize="10" textAnchor="middle">Saturation</text>

            {/* Family of IC curves for different IB */}
            <path d="M 80 190 Q 110 55, 520 50" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="535" y="55" fill="#38bdf8" fontSize="11">I_B = 40 μA</text>

            <path d="M 80 190 Q 110 95, 520 90" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="535" y="95" fill="#38bdf8" fontSize="11">I_B = 30 μA</text>

            <path d="M 80 190 Q 110 135, 520 130" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="535" y="135" fill="#38bdf8" fontSize="11">I_B = 20 μA</text>

            {/* Cutoff region */}
            <line x1="80" y1="188" x2="520" y2="188" stroke="#64748b" strokeWidth="2" />
            <text x="535" y="185" fill="#64748b" fontSize="11">I_B = 0 (Cutoff)</text>

            {/* Active Region Label */}
            <rect x="230" y="60" width="160" height="30" rx="6" fill="#0284c7" fillOpacity="0.2" stroke="#0284c7" />
            <text x="310" y="80" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">ACTIVE REGION (I_C = β·I_B)</text>
          </svg>
        ),
        explanation: 'In the Active Region, the emitter-base junction is forward-biased and collector-base is reverse-biased, enabling linear signal amplification where collector current IC is proportionally controlled by base current IB.'
      };
    }

    // 13. Computer Organization & CPU Von Neumann Architecture
    if (tid.includes('cfet') || tid.includes('computer') || tid.includes('cpu') || tid.includes('von-neumann') || tid.includes('bus')) {
      return {
        title: 'Von Neumann Architecture & Computer Organization',
        caption: 'Stored Program Concept: CPU (ALU + CU), Memory & System Bus Interconnect',
        svg: (
          <svg viewBox="0 0 620 240" className="w-full max-w-2xl h-auto">
            {/* CPU Block */}
            <rect x="50" y="25" width="220" height="170" rx="12" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
            <text x="160" y="48" fill="#60a5fa" fontSize="13" textAnchor="middle" fontWeight="bold">CENTRAL PROCESSING UNIT (CPU)</text>

            {/* Control Unit */}
            <rect x="70" y="65" width="80" height="50" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="110" y="90" fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold">Control Unit</text>
            <text x="110" y="105" fill="#94a3b8" fontSize="9" textAnchor="middle">(CU)</text>

            {/* ALU */}
            <rect x="170" y="65" width="80" height="50" rx="6" fill="#1e293b" stroke="#34d399" strokeWidth="1.5" />
            <text x="210" y="90" fill="#34d399" fontSize="11" textAnchor="middle" fontWeight="bold">ALU</text>
            <text x="210" y="105" fill="#94a3b8" fontSize="9" textAnchor="middle">(Arithmetic/Logic)</text>

            {/* Registers */}
            <rect x="70" y="130" width="180" height="45" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="160" y="152" fill="#fbbf24" fontSize="11" textAnchor="middle" fontWeight="bold">Registers (PC, MAR, MDR, AC)</text>

            {/* System Bus */}
            <rect x="290" y="40" width="40" height="140" rx="6" fill="#334155" stroke="#94a3b8" />
            <text x="310" y="115" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="bold" transform="rotate(-90 310 115)">SYSTEM BUS</text>

            {/* Main Memory (RAM) */}
            <rect x="350" y="25" width="120" height="80" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
            <text x="410" y="55" fill="#34d399" fontSize="12" textAnchor="middle" fontWeight="bold">PRIMARY MEMORY</text>
            <text x="410" y="75" fill="#94a3b8" fontSize="10" textAnchor="middle">RAM (Data + Code)</text>

            {/* I/O Devices */}
            <rect x="350" y="125" width="120" height="70" rx="8" fill="#0f172a" stroke="#ec4899" strokeWidth="2" />
            <text x="410" y="155" fill="#f472b6" fontSize="12" textAnchor="middle" fontWeight="bold">I/O SYSTEM</text>
            <text x="410" y="175" fill="#94a3b8" fontSize="10" textAnchor="middle">Keyboard, Display, Disk</text>

            {/* Interconnecting arrows */}
            <line x1="270" y1="110" x2="290" y2="110" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrowCyan)" />
            <line x1="330" y1="65" x2="350" y2="65" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrowCyan)" />
            <line x1="330" y1="160" x2="350" y2="160" stroke="#f472b6" strokeWidth="2" markerEnd="url(#arrowCyan)" />
          </svg>
        ),
        explanation: 'In the Von Neumann architecture, both instructions and program data share the same unified memory space. The CPU fetches instructions, decodes via CU, executes via ALU, and communicates across data/address buses.'
      };
    }

    // 14. Programming & C Pointers Memory Layout
    if (tid.includes('pps') || tid.includes('pointer') || tid.includes('c-programming') || tid.includes('memory-allocation')) {
      return {
        title: 'C Pointers & Memory Address Dereferencing Layout',
        caption: 'Pointer Variable ptr holds Address 0x1004 → Dereference *ptr yields Value 42',
        svg: (
          <svg viewBox="0 0 620 220" className="w-full max-w-2xl h-auto">
            {/* Memory Block 1: Integer Variable a */}
            <g transform="translate(360, 45)">
              <rect x="0" y="0" width="160" height="70" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
              <text x="80" y="25" fill="#34d399" fontSize="12" textAnchor="middle" fontWeight="bold">Variable 'a' (int)</text>
              <text x="80" y="55" fill="#ffffff" fontSize="20" textAnchor="middle" fontFamily="monospace" fontWeight="bold">42</text>
              <text x="80" y="90" fill="#64748b" fontSize="11" textAnchor="middle" fontFamily="monospace">Address: 0x7FFE20</text>
            </g>

            {/* Memory Block 2: Pointer Variable ptr */}
            <g transform="translate(80, 45)">
              <rect x="0" y="0" width="170" height="70" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
              <text x="85" y="25" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">Pointer 'ptr' (int*)</text>
              <text x="85" y="55" fill="#38bdf8" fontSize="15" textAnchor="middle" fontFamily="monospace" fontWeight="bold">0x7FFE20</text>
              <text x="85" y="90" fill="#64748b" fontSize="11" textAnchor="middle" fontFamily="monospace">Address: 0x7FFE18</text>
            </g>

            {/* Dereference Pointer Arrow */}
            <path d="M 250 80 Q 300 40, 355 75" fill="none" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrowYellow)" />
            <text x="305" y="45" fill="#fbbf24" fontSize="12" textAnchor="middle" fontWeight="bold">*ptr (Dereference)</text>

            {/* Code Snippet Box */}
            <rect x="80" y="155" width="440" height="45" rx="6" fill="#0f172a" stroke="#334155" />
            <text x="95" y="182" fill="#93c5fd" fontSize="12" fontFamily="monospace">int a = 42; int *ptr = &amp;a; printf("%d", *ptr); // prints 42</text>
          </svg>
        ),
        explanation: 'A pointer is a variable that stores the physical memory address of another variable. Using the address-of operator & retrieves the memory location, while the dereference operator * reads the value stored at that address.'
      };
    }

    // 15. Artificial Intelligence: Neural Network & Machine Learning
    if (tid.includes('ai') || tid.includes('neural') || tid.includes('machine-learning') || tid.includes('deep-learning')) {
      return {
        title: 'Deep Neural Network Architecture & Feedforward Flow',
        caption: 'Input Layer X → Hidden Layers W·X + b → Output Layer ŷ with Activation',
        svg: (
          <svg viewBox="0 0 620 230" className="w-full max-w-2xl h-auto">
            {/* Input Nodes */}
            <g transform="translate(80, 40)">
              <circle cx="0" cy="30" r="16" fill="#1e3a8a" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="34" fill="#ffffff" fontSize="11" textAnchor="middle">x₁</text>
              <circle cx="0" cy="80" r="16" fill="#1e3a8a" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="84" fill="#ffffff" fontSize="11" textAnchor="middle">x₂</text>
              <circle cx="0" cy="130" r="16" fill="#1e3a8a" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="134" fill="#ffffff" fontSize="11" textAnchor="middle">x₃</text>
              <text x="0" y="170" fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold">Input Layer</text>
            </g>

            {/* Hidden Layer 1 */}
            <g transform="translate(240, 20)">
              <circle cx="0" cy="25" r="16" fill="#312e81" stroke="#818cf8" strokeWidth="2" />
              <circle cx="0" cy="70" r="16" fill="#312e81" stroke="#818cf8" strokeWidth="2" />
              <circle cx="0" cy="115" r="16" fill="#312e81" stroke="#818cf8" strokeWidth="2" />
              <circle cx="0" cy="160" r="16" fill="#312e81" stroke="#818cf8" strokeWidth="2" />
              <text x="0" y="195" fill="#a5b4fc" fontSize="11" textAnchor="middle" fontWeight="bold">Hidden Layer 1</text>
            </g>

            {/* Hidden Layer 2 */}
            <g transform="translate(400, 20)">
              <circle cx="0" cy="25" r="16" fill="#312e81" stroke="#c084fc" strokeWidth="2" />
              <circle cx="0" cy="70" r="16" fill="#312e81" stroke="#c084fc" strokeWidth="2" />
              <circle cx="0" cy="115" r="16" fill="#312e81" stroke="#c084fc" strokeWidth="2" />
              <circle cx="0" cy="160" r="16" fill="#312e81" stroke="#c084fc" strokeWidth="2" />
              <text x="0" y="195" fill="#e9d5ff" fontSize="11" textAnchor="middle" fontWeight="bold">Hidden Layer 2</text>
            </g>

            {/* Output Nodes */}
            <g transform="translate(540, 60)">
              <circle cx="0" cy="35" r="18" fill="#065f46" stroke="#34d399" strokeWidth="2.5" />
              <text x="0" y="39" fill="#ffffff" fontSize="11" textAnchor="middle">ŷ₁</text>
              <circle cx="0" cy="95" r="18" fill="#065f46" stroke="#34d399" strokeWidth="2.5" />
              <text x="0" y="99" fill="#ffffff" fontSize="11" textAnchor="middle">ŷ₂</text>
              <text x="0" y="145" fill="#34d399" fontSize="11" textAnchor="middle" fontWeight="bold">Output</text>
            </g>

            {/* Synaptic Connections */}
            <line x1="96" y1="70" x2="224" y2="45" stroke="#334155" strokeWidth="1" opacity="0.6" />
            <line x1="96" y1="70" x2="224" y2="90" stroke="#334155" strokeWidth="1" opacity="0.6" />
            <line x1="96" y1="120" x2="224" y2="90" stroke="#334155" strokeWidth="1" opacity="0.6" />
            <line x1="96" y1="120" x2="224" y2="135" stroke="#334155" strokeWidth="1" opacity="0.6" />
            <line x1="256" y1="90" x2="384" y2="90" stroke="#6366f1" strokeWidth="1.5" opacity="0.7" />
            <line x1="416" y1="90" x2="522" y2="95" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowCyan)" />
          </svg>
        ),
        explanation: 'In neural networks, weighted linear combinations z = W·x + b pass through non-linear activation functions (ReLU, Sigmoid). During backpropagation, error gradients update weights via gradient descent.'
      };
    }

    // Default Fallback Diagram
    return {
      title: 'Engineering Core Concept & Mechanism Diagram',
      caption: `Conceptual architecture and operational dynamics for ${topicTitle}`,
      svg: (
        <svg viewBox="0 0 620 220" className="w-full max-w-2xl h-auto">
          <defs>
            <linearGradient id="genericGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#0f172a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#082f49" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <rect x="20" y="15" width="580" height="190" rx="14" fill="url(#genericGrad)" stroke="#3b82f6" strokeWidth="1.5" />
          
          {/* Central concept node */}
          <circle cx="310" cy="110" r="48" fill="#1e3a8a" stroke="#38bdf8" strokeWidth="3" />
          <text x="310" y="105" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="bold">CORE PRINCIPLE</text>
          <text x="310" y="123" fill="#7dd3fc" fontSize="9" textAnchor="middle">BEU Curriculum</text>

          {/* Satellite Node 1: Math Formulation */}
          <rect x="60" y="40" width="140" height="48" rx="8" fill="#0f172a" stroke="#818cf8" strokeWidth="2" />
          <text x="130" y="68" fill="#c7d2fe" fontSize="11" textAnchor="middle" fontWeight="bold">Mathematical Laws</text>
          <line x1="200" y1="65" x2="265" y2="95" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 3" />

          {/* Satellite Node 2: Physical Process */}
          <rect x="60" y="130" width="140" height="48" rx="8" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
          <text x="130" y="158" fill="#a7f3d0" fontSize="11" textAnchor="middle" fontWeight="bold">Physical Process</text>
          <line x1="200" y1="150" x2="265" y2="125" stroke="#34d399" strokeWidth="2" strokeDasharray="3 3" />

          {/* Satellite Node 3: Engg Application */}
          <rect x="420" y="40" width="140" height="48" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
          <text x="490" y="68" fill="#fde68a" fontSize="11" textAnchor="middle" fontWeight="bold">Industrial Application</text>
          <line x1="420" y1="65" x2="355" y2="95" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />

          {/* Satellite Node 4: Boundary Conditions */}
          <rect x="420" y="130" width="140" height="48" rx="8" fill="#0f172a" stroke="#ec4899" strokeWidth="2" />
          <text x="490" y="158" fill="#fbcfe8" fontSize="11" textAnchor="middle" fontWeight="bold">Boundary Conditions</text>
          <line x1="420" y1="150" x2="355" y2="125" stroke="#ec4899" strokeWidth="2" strokeDasharray="3 3" />
        </svg>
      ),
      explanation: 'Detailed technical diagram establishing the mathematical foundations, physical laws, and engineering applications corresponding to this unit.'
    };
  };

  const diagram = getDiagramData();

  return (
    <div className="my-6 rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/80 to-slate-950 border border-cyan-500/40 p-5 sm:p-6 shadow-2xl relative overflow-hidden">
      {/* Background glowing ambient orbs */}
      <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/25 shrink-0">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-100 flex items-center gap-2">
              {diagram.title}
            </h4>
            <p className="text-xs text-slate-400">{diagram.caption}</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 bg-slate-950/80 border border-slate-800 p-1 rounded-xl shrink-0">
          <button
            onClick={() => setActiveTab('diagram')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'diagram'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Interactive Diagram</span>
          </button>
          <button
            onClick={() => setActiveTab('explanation')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'explanation'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>GFG Concept Guide</span>
          </button>
        </div>
      </div>

      {/* Main Visual Display */}
      <div className="relative bg-slate-950/90 rounded-2xl border border-slate-800/80 p-4 sm:p-6 flex flex-col items-center justify-center min-h-[260px]">
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
          <div className="w-full flex flex-col items-center">
            {diagram.svg}
            <div className="mt-4 text-xs text-cyan-300/90 bg-cyan-950/50 border border-cyan-800/60 px-4 py-2 rounded-xl flex items-center gap-2 max-w-xl text-center">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0"></span>
              <span>{diagram.explanation}</span>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-2xl text-left space-y-4 py-2 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="text-slate-100 font-bold block text-sm">GeeksforGeeks Exam Representation Strategy:</strong>
                <p className="text-xs text-slate-300 leading-relaxed">
                  In university theory exams (BEU semester papers), always draw and label this schematic in your answer booklet. State the governing assumptions, parameter notations, and boundary conditions clearly to secure full 14 marks.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-1">
                <span className="text-cyan-400 font-mono font-bold block text-[11px] uppercase">Physical / Mathematical Insight</span>
                <p className="text-slate-300">{diagram.explanation}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-1">
                <span className="text-emerald-400 font-mono font-bold block text-[11px] uppercase">Common Exam Pitfall to Avoid</span>
                <p className="text-slate-300">Ensure vector directions and sign conventions (+/-) are marked before substituting numerical values.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
