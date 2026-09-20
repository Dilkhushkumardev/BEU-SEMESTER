import React, { useState } from 'react';
import { Sparkles, Eye, Info, Layers } from 'lucide-react';

interface LabCircuitDiagramProps {
  courseId: string;
  experimentNumber: number;
  experimentTitle: string;
}

export const LabCircuitDiagram: React.FC<LabCircuitDiagramProps> = ({
  courseId,
  experimentNumber,
  experimentTitle,
}) => {
  const [activeTab, setActiveTab] = useState<'schematic' | 'connections'>('schematic');

  const getLabSchematic = () => {
    const cid = courseId.toLowerCase();

    // ==========================================
    // 1. PHYSICS LAB SCHEMATICS
    // ==========================================
    if (cid.includes('phy')) {
      // Newton's Rings (Exp 1 or Newton in title)
      if (experimentNumber === 1 || experimentTitle.toLowerCase().includes('newton')) {
        return {
          title: "Newton's Rings Traveling Microscope Experimental Setup",
          caption: "Monochromatic Sodium Lamp (5893 Å) → 45° Glass Plate Reflector → Plano-Convex Lens on Flat Plate",
          svg: (
            <svg viewBox="0 0 620 250" className="w-full max-w-2xl h-auto drop-shadow-xl">
              <defs>
                <linearGradient id="labBg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0f172a" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#022c22" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <rect x="15" y="15" width="590" height="220" rx="14" fill="url(#labBg)" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" />

              {/* Sodium Lamp & Slit */}
              <g transform="translate(40, 60)">
                <rect x="0" y="0" width="45" height="70" rx="6" fill="#78350f" stroke="#f59e0b" strokeWidth="2" />
                <circle cx="22" cy="35" r="14" fill="#fbbf24" fillOpacity="0.8" />
                <text x="22" y="39" fill="#000000" fontSize="10" textAnchor="middle" fontWeight="bold">Na</text>
                <text x="22" y="85" fill="#fde68a" fontSize="10" textAnchor="middle">Sodium Lamp</text>
                {/* Yellow Beam */}
                <line x1="45" y1="35" x2="110" y2="35" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#arrowYellow)" />
              </g>

              {/* Condensing Lens L1 */}
              <g transform="translate(160, 45)">
                <ellipse cx="10" cy="50" rx="8" ry="35" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2" />
                <text x="10" y="100" fill="#93c5fd" fontSize="10" textAnchor="middle">Condenser</text>
                {/* Parallel Light Rays */}
                <line x1="20" y1="35" x2="180" y2="35" stroke="#fbbf24" strokeWidth="2.5" />
                <line x1="20" y1="65" x2="180" y2="65" stroke="#fbbf24" strokeWidth="2.5" />
              </g>

              {/* 45° Inclined Glass Plate G */}
              <g transform="translate(350, 45)">
                <line x1="0" y1="20" x2="50" y2="70" stroke="#94a3b8" strokeWidth="4" />
                <text x="35" y="15" fill="#cbd5e1" fontSize="11" fontWeight="bold">Glass Plate G (45°)</text>
                
                {/* Reflected downward ray */}
                <line x1="25" y1="45" x2="25" y2="120" stroke="#fbbf24" strokeWidth="2.5" markerEnd="url(#arrowYellow)" />
              </g>

              {/* Traveling Microscope Above */}
              <g transform="translate(340, 10)">
                <rect x="25" y="0" width="20" height="25" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="75" y="18" fill="#38bdf8" fontSize="11" fontWeight="bold">Traveling Microscope</text>
              </g>

              {/* Plano-Convex Lens on Flat Plate Bottom */}
              <g transform="translate(300, 165)">
                {/* Plano-convex lens */}
                <path d="M 25 10 Q 75 35, 125 10 Z" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2" />
                {/* Flat plate */}
                <rect x="15" y="35" width="120" height="14" fill="#64748b" fillOpacity="0.4" stroke="#94a3b8" strokeWidth="1.5" />
                <text x="75" y="60" fill="#34d399" fontSize="11" textAnchor="middle" fontWeight="bold">Plano-Convex Lens &amp; Glass Plate</text>
              </g>

              {/* Formula Badge Bottom Left */}
              <rect x="30" y="185" width="230" height="28" rx="6" fill="#064e3b" stroke="#10b981" />
              <text x="145" y="203" fill="#a7f3d0" fontSize="11" textAnchor="middle" fontWeight="bold">
                λ = (D²_{`n+p`} - D²_n) / (4·p·R)
              </text>
            </svg>
          ),
          connections: "1. Align the sodium lamp and condensing lens horizontally so a parallel monochromatic beam falls on the 45° inclined glass plate. 2. The glass plate directs 50% of light normally downwards onto the lens-plate system. 3. Adjust the microscope focus vertically until concentric dark and bright rings with a sharp central dark fringe appear in the field of view."
        };
      }

      // Hall Effect Setup
      if (experimentNumber === 2 || experimentTitle.toLowerCase().includes('hall')) {
        return {
          title: "Hall Effect Probe & Electromagnet Circuit Setup",
          caption: "Constant Current Source (I_x) + Electromagnet Magnetic Field (B_z) → Hall Voltage (V_H)",
          svg: (
            <svg viewBox="0 0 620 250" className="w-full max-w-2xl h-auto drop-shadow-xl">
              <rect x="15" y="15" width="590" height="220" rx="14" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.5" />
              
              {/* Electromagnet Poles */}
              <rect x="140" y="35" width="90" height="45" rx="6" fill="#312e81" stroke="#818cf8" strokeWidth="2" />
              <text x="185" y="62" fill="#c7d2fe" fontSize="14" textAnchor="middle" fontWeight="bold">N Pole</text>

              <rect x="140" y="165" width="90" height="45" rx="6" fill="#312e81" stroke="#818cf8" strokeWidth="2" />
              <text x="185" y="192" fill="#c7d2fe" fontSize="14" textAnchor="middle" fontWeight="bold">S Pole</text>

              {/* Magnetic field lines */}
              <line x1="185" y1="80" x2="185" y2="165" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrowYellow)" />
              <text x="205" y="125" fill="#fbbf24" fontSize="11" fontWeight="bold">B (Tesla)</text>

              {/* Semiconductor Crystal Probe */}
              <rect x="160" y="105" width="50" height="35" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
              <text x="185" y="127" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="bold">Ge/Si</text>

              {/* Constant Current Supply Left */}
              <g transform="translate(30, 95)">
                <rect x="0" y="0" width="80" height="55" rx="6" fill="#1e293b" stroke="#34d399" strokeWidth="1.5" />
                <text x="40" y="25" fill="#34d399" fontSize="10" textAnchor="middle" fontWeight="bold">DC Current</text>
                <text x="40" y="42" fill="#a7f3d0" fontSize="12" textAnchor="middle" fontWeight="bold">0 - 20 mA</text>
                <line x1="80" y1="28" x2="160" y2="120" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrowCyan)" />
              </g>

              {/* Digital Millivoltmeter Right */}
              <g transform="translate(350, 95)">
                <rect x="0" y="0" width="120" height="55" rx="6" fill="#1e293b" stroke="#ec4899" strokeWidth="1.5" />
                <text x="60" y="25" fill="#f472b6" fontSize="10" textAnchor="middle" fontWeight="bold">Digital Hall Meter</text>
                <text x="60" y="44" fill="#fbcfe8" fontSize="14" textAnchor="middle" fontFamily="monospace" fontWeight="bold">V_H (mV)</text>
                <line x1="210" y1="120" x2="350" y2="122" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowPink)" />
              </g>

              {/* Hall Coefficient Formula */}
              <rect x="350" y="175" width="220" height="35" rx="6" fill="#4c1d95" stroke="#c084fc" />
              <text x="460" y="197" fill="#e9d5ff" fontSize="11" textAnchor="middle" fontWeight="bold">
                R_H = (V_H · w) / (I · B) = 1 / (n·e)
              </text>
            </svg>
          ),
          connections: "1. Insert the Hall probe centrally between the pole pieces of the electromagnet. 2. Pass a known constant current Ix through the probe. 3. Calibrate the magnetic field B with a Gaussmeter. 4. Record transverse Hall voltage VH across opposite side contacts to compute carrier density n and Hall coefficient RH."
        };
      }
    }

    // ==========================================
    // 2. ELECTRICAL (BEEE) LAB SCHEMATICS
    // ==========================================
    if (cid.includes('elec') || cid.includes('beee')) {
      // KVL / KCL / Thevenin / RLC
      return {
        title: "BEEE Laboratory Circuit Schematic & Breadboard Mesh",
        caption: "Regulated Dual DC Power Supply → Precision Resistor Network → Digital Multi-meters (DMM)",
        svg: (
          <svg viewBox="0 0 620 240" className="w-full max-w-2xl h-auto drop-shadow-xl">
            <rect x="15" y="15" width="590" height="220" rx="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
            
            {/* DC Power Supply Box */}
            <g transform="translate(40, 50)">
              <rect x="0" y="0" width="85" height="130" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <text x="42" y="25" fill="#38bdf8" fontSize="10" textAnchor="middle" fontWeight="bold">DC SUPPLY</text>
              <circle cx="42" cy="55" r="16" fill="#0f172a" stroke="#60a5fa" />
              <text x="42" y="60" fill="#93c5fd" fontSize="12" textAnchor="middle" fontWeight="bold">12V</text>
              <circle cx="25" cy="105" r="5" fill="#ef4444" />
              <text x="25" y="95" fill="#f87171" fontSize="9" textAnchor="middle">+</text>
              <circle cx="60" cy="105" r="5" fill="#1e293b" stroke="#94a3b8" />
              <text x="60" y="95" fill="#cbd5e1" fontSize="9" textAnchor="middle">-</text>
            </g>

            {/* Circuit Loops */}
            <g transform="translate(160, 45)">
              <rect x="0" y="15" width="380" height="120" fill="none" stroke="#64748b" strokeWidth="2.5" />
              <line x1="190" y1="15" x2="190" y2="135" stroke="#64748b" strokeWidth="2.5" />

              {/* Resistor R1 */}
              <rect x="60" y="7" width="60" height="16" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="90" y="0" fill="#fbbf24" fontSize="11" textAnchor="middle">R₁ (100Ω)</text>

              {/* Resistor R2 (Middle) */}
              <rect x="182" y="55" width="16" height="50" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="220" y="85" fill="#fbbf24" fontSize="11">R₂ (220Ω)</text>

              {/* Resistor R3 / Load RL */}
              <rect x="250" y="7" width="60" height="16" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="280" y="0" fill="#fbbf24" fontSize="11" textAnchor="middle">R₃ / R_L</text>

              {/* Node A */}
              <circle cx="190" cy="15" r="6" fill="#34d399" />
              <text x="190" y="-8" fill="#34d399" fontSize="12" textAnchor="middle" fontWeight="bold">Node A (KCL: I₁ = I₂ + I₃)</text>

              {/* Current Loop arrows */}
              <path d="M 80 75 A 20 20 0 1 1 105 100" fill="none" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrowCyan)" />
              <text x="95" y="90" fill="#38bdf8" fontSize="11" textAnchor="middle">Mesh 1</text>

              <path d="M 270 75 A 20 20 0 1 1 295 100" fill="none" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrowPurple)" />
              <text x="285" y="90" fill="#c084fc" fontSize="11" textAnchor="middle">Mesh 2</text>
            </g>

            {/* Wire from Supply */}
            <line x1="65" y1="155" x2="160" y2="60" stroke="#ef4444" strokeWidth="2" />
            <line x1="100" y1="155" x2="160" y2="180" stroke="#64748b" strokeWidth="2" />
          </svg>
        ),
        connections: "1. Connect DC voltage source to Node A through ammeter A1 in series. 2. Connect branch resistors R1, R2, and R3 on the breadboard. 3. Measure current in each branch using digital multimeter to verify KCL: I1 = I2 + I3. 4. Verify KVL: V_supply = V_R1 + V_R2."
      };
    }

    // ==========================================
    // 3. PPS / C PROGRAMMING LAB SCHEMATICS
    // ==========================================
    return {
      title: "C Program Execution & RAM Memory Allocation Trace",
      caption: "Source Code (.c) → Preprocessor → Compiler (gcc) → Process Memory (Stack / Heap / Data)",
      svg: (
        <svg viewBox="0 0 620 240" className="w-full max-w-2xl h-auto drop-shadow-xl">
          <rect x="15" y="15" width="590" height="220" rx="14" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          
          {/* C Code Block */}
          <g transform="translate(40, 40)">
            <rect x="0" y="0" width="160" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="15" y="25" fill="#38bdf8" fontSize="11" fontWeight="bold">main.c</text>
            <text x="15" y="50" fill="#93c5fd" fontSize="10" fontFamily="monospace">int a = 42;</text>
            <text x="15" y="70" fill="#93c5fd" fontSize="10" fontFamily="monospace">int *p = malloc(..);</text>
            <text x="15" y="90" fill="#93c5fd" fontSize="10" fontFamily="monospace">*p = 100;</text>
            <text x="15" y="110" fill="#93c5fd" fontSize="10" fontFamily="monospace">printf("%d", *p);</text>
            <text x="15" y="130" fill="#f87171" fontSize="10" fontFamily="monospace">free(p);</text>
          </g>

          {/* Arrow */}
          <line x1="210" y1="115" x2="260" y2="115" stroke="#34d399" strokeWidth="3" markerEnd="url(#arrowCyan)" />
          <text x="235" y="105" fill="#34d399" fontSize="10" textAnchor="middle" fontWeight="bold">gcc</text>

          {/* Process Memory Layout */}
          <g transform="translate(280, 30)">
            {/* Stack Segment */}
            <rect x="0" y="0" width="280" height="40" rx="4" fill="#1e3a8a" stroke="#60a5fa" />
            <text x="140" y="25" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="bold">
              STACK (Local vars: a = 42, p = 0x5000) ↓
            </text>

            {/* Heap Segment */}
            <rect x="0" y="45" width="280" height="45" rx="4" fill="#065f46" stroke="#34d399" />
            <text x="140" y="72" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="bold">
              HEAP (Dynamic malloc block: *p = 100) ↑
            </text>

            {/* Data / BSS Segment */}
            <rect x="0" y="95" width="280" height="35" rx="4" fill="#78350f" stroke="#f59e0b" />
            <text x="140" y="118" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="bold">
              DATA / BSS (Global &amp; Static variables)
            </text>

            {/* Text / Code Segment */}
            <rect x="0" y="135" width="280" height="35" rx="4" fill="#4c1d95" stroke="#c084fc" />
            <text x="140" y="158" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="bold">
              TEXT SEGMENT (Machine Instructions)
            </text>
          </g>
        </svg>
      ),
      connections: "1. Local variables reside in stack frames created on function call. 2. Dynamic allocations via malloc() are reserved on the Heap segment and must be released using free() to prevent memory leaks."
    };
  };

  const schematic = getLabSchematic();

  return (
    <div className="my-6 rounded-3xl bg-gradient-to-b from-purple-950/40 via-slate-900 to-slate-950 border border-purple-500/40 p-5 sm:p-6 shadow-2xl space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/20 shrink-0">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              {schematic.title}
            </h4>
            <p className="text-xs text-purple-300 font-mono">{schematic.caption}</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-950/80 border border-slate-800 p-1 rounded-xl shrink-0">
          <button
            onClick={() => setActiveTab('schematic')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'schematic'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Circuit / Setup Diagram</span>
          </button>
          <button
            onClick={() => setActiveTab('connections')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'connections'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Wiring Guide</span>
          </button>
        </div>
      </div>

      <div className="bg-slate-950/90 rounded-2xl border border-slate-800/90 p-4 flex flex-col items-center justify-center">
        {activeTab === 'schematic' ? (
          schematic.svg
        ) : (
          <div className="w-full max-w-2xl text-left space-y-3 py-2 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <Info className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="text-slate-100 font-bold block text-sm">Laboratory Connection &amp; Safety Protocol:</strong>
                <p className="text-xs text-slate-300 leading-relaxed">{schematic.connections}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
