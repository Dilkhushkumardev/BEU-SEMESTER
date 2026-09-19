import type { FormulaItem } from '../../types';

export const formulaBank: FormulaItem[] = [
  // --- ENGINEERING MATHEMATICS-I (100102) ---
  {
    id: 'f-math-echelon-rank',
    subjectId: 'math-1',
    subjectName: 'Engineering Mathematics – I',
    unitNumber: 1,
    unitTitle: 'Basic Linear Algebra',
    title: 'Rank of a Matrix via Row Echelon Form',
    latex: '\\text{Rank}(A) = \\rho(A) = \\text{Number of Non-Zero Rows in Row Echelon Form}',
    explanation: 'The rank of matrix A is the maximum number of linearly independent row or column vectors.',
    variables: [
      { symbol: '\\rho(A)', meaning: 'Rank of matrix A' },
      { symbol: 'A', meaning: 'm x n real or complex matrix' }
    ],
    category: 'Mathematics',
    tags: ['Matrices', 'Rank', 'Echelon Form', 'Linear Algebra']
  },
  {
    id: 'f-math-cayley-hamilton',
    subjectId: 'math-1',
    subjectName: 'Engineering Mathematics – I',
    unitNumber: 1,
    unitTitle: 'Basic Linear Algebra',
    title: 'Cayley-Hamilton Theorem & Inverse Computation',
    latex: 'P(\\lambda) = \\det(A - \\lambda I) = 0 \\implies P(A) = A^n + c_{n-1}A^{n-1} + \\dots + c_0 I = O',
    explanation: 'Every square matrix satisfies its own characteristic equation. Multiplying by A^{-1} gives the matrix inverse.',
    variables: [
      { symbol: 'A', meaning: 'n x n square matrix' },
      { symbol: 'I', meaning: 'Identity matrix of order n' },
      { symbol: '\\lambda', meaning: 'Eigenvalues of matrix A' }
    ],
    category: 'Mathematics',
    tags: ['Eigenvalues', 'Cayley-Hamilton', 'Inverse Matrix']
  },
  {
    id: 'f-math-rolle',
    subjectId: 'math-1',
    subjectName: 'Engineering Mathematics – I',
    unitNumber: 2,
    unitTitle: 'Single Variable Differential Calculus',
    title: "Lagrange's Mean Value Theorem (LMVT)",
    latex: "f'(c) = \\frac{f(b) - f(a)}{b - a}, \\quad \\text{for some } c \\in (a, b)",
    explanation: 'If f is continuous on [a, b] and differentiable on (a, b), there exists at least one point c where instantaneous rate equals average rate.',
    variables: [
      { symbol: 'f(x)', meaning: 'Function defined on [a, b]' },
      { symbol: "f'(c)", meaning: 'Derivative of f at point c' }
    ],
    category: 'Mathematics',
    tags: ['LMVT', 'Calculus', 'Mean Value Theorems']
  },
  {
    id: 'f-math-cauchy-mvt',
    subjectId: 'math-1',
    subjectName: 'Engineering Mathematics – I',
    unitNumber: 2,
    unitTitle: 'Single Variable Differential Calculus',
    title: "Cauchy's Mean Value Theorem",
    latex: "\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}, \\quad c \\in (a, b)",
    explanation: 'Generalization of LMVT for parametric curves (f(t), g(t)).',
    variables: [
      { symbol: 'f(x), g(x)', meaning: 'Continuous and differentiable functions' }
    ],
    category: 'Mathematics',
    tags: ['Cauchy MVT', 'Calculus']
  },
  {
    id: 'f-math-taylor-series',
    subjectId: 'math-1',
    subjectName: 'Engineering Mathematics – I',
    unitNumber: 2,
    unitTitle: 'Single Variable Differential Calculus',
    title: "Taylor's Series Expansion about x = a",
    latex: "f(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\dots + \\frac{f^{(n)}(a)}{n!}(x-a)^n + R_n(x)",
    explanation: 'Expresses an infinitely differentiable function as an infinite polynomial series around point a.',
    variables: [
      { symbol: 'f^{(n)}(a)', meaning: 'n-th derivative of f evaluated at a' },
      { symbol: 'R_n(x)', meaning: 'Remainder term after n terms' }
    ],
    category: 'Mathematics',
    tags: ['Taylor Series', 'Maclaurin Series', 'Series Expansion']
  },
  {
    id: 'f-math-indeterminate-lh',
    subjectId: 'math-1',
    subjectName: 'Engineering Mathematics – I',
    unitNumber: 2,
    unitTitle: 'Single Variable Differential Calculus',
    title: "L'Hôpital's Rule for 0/0 and ∞/∞",
    latex: "\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)} \\quad \\left(\\text{when } \\frac{f(a)}{g(a)} = \\frac{0}{0} \\text{ or } \\frac{\\pm\\infty}{\\pm\\infty}\\right)",
    explanation: 'Evaluates limits of indeterminate quotients by differentiating numerator and denominator independently.',
    variables: [
      { symbol: "f'(x), g'(x)", meaning: 'Derivatives of numerator and denominator' }
    ],
    category: 'Mathematics',
    tags: ['L Hopital', 'Limits', 'Indeterminate Forms']
  },
  {
    id: 'f-math-euler-homogeneous',
    subjectId: 'math-1',
    subjectName: 'Engineering Mathematics – I',
    unitNumber: 3,
    unitTitle: 'Multivariable Differential Calculus',
    title: "Euler's Theorem on Homogeneous Functions",
    latex: "x\\frac{\\partial u}{\\partial x} + y\\frac{\\partial u}{\\partial y} = n u(x, y)",
    explanation: 'For a homogeneous function u(x, y) of degree n, the sum of partial derivatives scaled by coordinates equals n times the function.',
    variables: [
      { symbol: 'u(x, y)', meaning: 'Homogeneous function of degree n' },
      { symbol: 'n', meaning: 'Degree of homogeneity' }
    ],
    category: 'Mathematics',
    tags: ['Euler Theorem', 'Partial Differentiation', 'Homogeneous Functions']
  },
  {
    id: 'f-math-max-min-2var',
    subjectId: 'math-1',
    subjectName: 'Engineering Mathematics – I',
    unitNumber: 3,
    unitTitle: 'Multivariable Differential Calculus',
    title: 'Second Derivative Test for Functions of Two Variables',
    latex: "\\Delta = rt - s^2, \\quad r = f_{xx}, \\; s = f_{xy}, \\; t = f_{yy}",
    explanation: 'If Delta > 0 and r > 0 -> Local Min. If Delta > 0 and r < 0 -> Local Max. If Delta < 0 -> Saddle Point. If Delta = 0 -> Inconclusive.',
    variables: [
      { symbol: 'r, s, t', meaning: 'Second order partial derivatives f_xx, f_xy, f_yy' },
      { symbol: '\\Delta', meaning: 'Discriminant (Hessian determinant)' }
    ],
    category: 'Mathematics',
    tags: ['Maxima and Minima', 'Saddle Points', 'Optimization']
  },
  {
    id: 'f-math-beta-gamma-relation',
    subjectId: 'math-1',
    subjectName: 'Engineering Mathematics – I',
    unitNumber: 4,
    unitTitle: 'Multivariable Integral Calculus',
    title: 'Fundamental Beta-Gamma Relation',
    latex: "B(m, n) = \\frac{\\Gamma(m)\\Gamma(n)}{\\Gamma(m+n)}, \\quad \\Gamma(n) = \\int_0^\\infty x^{n-1} e^{-x}\\,dx",
    explanation: 'Connects the Beta function integral to the Gamma factorial function.',
    variables: [
      { symbol: 'B(m, n)', meaning: 'Euler Beta function' },
      { symbol: '\\Gamma(n)', meaning: 'Euler Gamma function, Gamma(n+1) = n!' }
    ],
    category: 'Mathematics',
    tags: ['Beta Function', 'Gamma Function', 'Special Integrals']
  },
  {
    id: 'f-math-gamma-half',
    subjectId: 'math-1',
    subjectName: 'Engineering Mathematics – I',
    unitNumber: 4,
    unitTitle: 'Multivariable Integral Calculus',
    title: 'Gamma of One Half',
    latex: "\\Gamma\\left(\\frac{1}{2}\\right) = \\sqrt{\\pi}",
    explanation: 'Exact value derived via Gaussian integral substitution.',
    variables: [],
    category: 'Mathematics',
    tags: ['Gamma Function', 'Constants']
  },

  // --- ENGINEERING PHYSICS (100104) ---
  {
    id: 'f-phys-newton-rings-dark',
    subjectId: 'phy-1',
    subjectName: 'Engineering Physics',
    unitNumber: 1,
    unitTitle: 'Wave Optics',
    title: "Newton's Rings: Diameter of n-th Dark Ring",
    latex: "D_n^2 = 4n\\lambda R \\implies D_n = 2\\sqrt{n\\lambda R}",
    explanation: 'Diameter of concentric dark interference rings formed between a plano-convex lens and flat glass plate in reflected light.',
    variables: [
      { symbol: 'D_n', meaning: 'Diameter of n-th dark ring' },
      { symbol: 'n', meaning: 'Order of ring (1, 2, 3, ...)' },
      { symbol: '\\lambda', meaning: 'Wavelength of monochromatic light' },
      { symbol: 'R', meaning: 'Radius of curvature of plano-convex lens' }
    ],
    category: 'Physics',
    tags: ['Wave Optics', 'Interference', 'Newton Rings']
  },
  {
    id: 'f-phys-grating-dispersive',
    subjectId: 'phy-1',
    subjectName: 'Engineering Physics',
    unitNumber: 1,
    unitTitle: 'Wave Optics',
    title: 'Grating Equation & Resolving Power',
    latex: "(a + b)\\sin\\theta = n\\lambda, \\quad \\text{R.P.} = \\frac{\\lambda}{d\\lambda} = n N",
    explanation: 'Condition for principal maxima and Rayleigh resolving power of a diffraction grating.',
    variables: [
      { symbol: '(a + b)', meaning: 'Grating element (slit width + opaque space)' },
      { symbol: 'n', meaning: 'Diffraction order' },
      { symbol: 'N', meaning: 'Total number of illuminated rulings' }
    ],
    category: 'Physics',
    tags: ['Diffraction', 'Grating', 'Resolving Power']
  },
  {
    id: 'f-phys-malus-law',
    subjectId: 'phy-1',
    subjectName: 'Engineering Physics',
    unitNumber: 1,
    unitTitle: 'Wave Optics',
    title: "Malus's Law of Polarized Light Intensity",
    latex: "I = I_0 \\cos^2\\theta",
    explanation: 'Transmitted intensity of linearly polarized light through an analyzer oriented at angle theta to the polarizer transmission axis.',
    variables: [
      { symbol: 'I_0', meaning: 'Initial incident polarized light intensity' },
      { symbol: '\\theta', meaning: 'Angle between polarizer and analyzer transmission axes' }
    ],
    category: 'Physics',
    tags: ['Polarization', 'Malus Law']
  },
  {
    id: 'f-phys-einstein-ab',
    subjectId: 'phy-1',
    subjectName: 'Engineering Physics',
    unitNumber: 2,
    unitTitle: 'Lasers & Optical Fiber',
    title: "Einstein's A and B Coefficients Ratio",
    latex: "\\frac{A_{21}}{B_{21}} = \\frac{8\\pi h \\nu^3}{c^3}, \\quad B_{12} = B_{21}",
    explanation: 'Ratio of spontaneous emission rate to stimulated emission rate in thermal equilibrium with Planck radiation.',
    variables: [
      { symbol: 'A_{21}', meaning: 'Einstein spontaneous emission probability coefficient' },
      { symbol: 'B_{21}', meaning: 'Einstein stimulated emission probability coefficient' },
      { symbol: '\\nu', meaning: 'Transition frequency (c/lambda)' }
    ],
    category: 'Physics',
    tags: ['Lasers', 'Einstein Coefficients', 'Stimulated Emission']
  },
  {
    id: 'f-phys-fiber-na',
    subjectId: 'phy-1',
    subjectName: 'Engineering Physics',
    unitNumber: 2,
    unitTitle: 'Lasers & Optical Fiber',
    title: 'Numerical Aperture (NA) and Acceptance Angle',
    latex: "\\text{NA} = \\sin\\theta_a = \\sqrt{n_1^2 - n_2^2} \\approx n_1\\sqrt{2\\Delta}",
    explanation: 'Figure of merit measuring the light-gathering capability of an optical fiber based on core and cladding indices.',
    variables: [
      { symbol: 'n_1', meaning: 'Core refractive index' },
      { symbol: 'n_2', meaning: 'Cladding refractive index (n_2 < n_1)' },
      { symbol: '\\theta_a', meaning: 'Maximum acceptance half-angle in air' },
      { symbol: '\\Delta', meaning: 'Fractional index difference (n_1 - n_2)/n_1' }
    ],
    category: 'Physics',
    tags: ['Optical Fiber', 'TIR', 'Numerical Aperture']
  },
  {
    id: 'f-phys-poynting-vector',
    subjectId: 'phy-1',
    subjectName: 'Engineering Physics',
    unitNumber: 3,
    unitTitle: 'Electromagnetic Waves',
    title: 'Poynting Vector (EM Power Flow Density)',
    latex: "\\vec{S} = \\vec{E} \\times \\vec{H} = \\frac{1}{\\mu_0}(\\vec{E} \\times \\vec{B}) \\quad [\\text{W/m}^2]",
    explanation: 'Direction and magnitude of electromagnetic energy flux per unit area per unit time.',
    variables: [
      { symbol: '\\vec{S}', meaning: 'Poynting vector (W/m^2)' },
      { symbol: '\\vec{E}', meaning: 'Electric field vector (V/m)' },
      { symbol: '\\vec{H}', meaning: 'Magnetic field intensity vector (A/m)' }
    ],
    category: 'Physics',
    tags: ['Electromagnetism', 'Poynting Vector', 'Maxwell Equations']
  },
  {
    id: 'f-phys-debroglie',
    subjectId: 'phy-1',
    subjectName: 'Engineering Physics',
    unitNumber: 4,
    unitTitle: 'Quantum Mechanics',
    title: 'de Broglie Wavelength & Heisenberg Uncertainty',
    latex: "\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2mE}}, \\quad \\Delta x \\Delta p_x \\ge \\frac{\\hbar}{2}",
    explanation: 'Matter-wave wavelength associated with moving particle and fundamental quantum uncertainty limit.',
    variables: [
      { symbol: 'h', meaning: 'Planck constant (6.626 x 10^-34 J.s)' },
      { symbol: '\\hbar', meaning: 'Reduced Planck constant h/(2pi)' },
      { symbol: 'p', meaning: 'Momentum of particle (m*v)' }
    ],
    category: 'Physics',
    tags: ['Quantum Mechanics', 'de Broglie', 'Uncertainty Principle']
  },
  {
    id: 'f-phys-schrodinger-box',
    subjectId: 'phy-1',
    subjectName: 'Engineering Physics',
    unitNumber: 4,
    unitTitle: 'Quantum Mechanics',
    title: 'Energy Quantization for 1D Infinite Potential Box',
    latex: "E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2m L^2} = \\frac{n^2 h^2}{8m L^2}, \\quad \\psi_n(x) = \\sqrt{\\frac{2}{L}}\\sin\\left(\\frac{n\\pi x}{L}\\right)",
    explanation: 'Discrete quantized energy eigenvalues and normalized spatial eigenfunctions for a particle trapped in box of length L.',
    variables: [
      { symbol: 'n', meaning: 'Quantum number (1, 2, 3, ...)' },
      { symbol: 'L', meaning: 'Width of infinite potential box (meters)' },
      { symbol: 'm', meaning: 'Mass of trapped particle (kg)' }
    ],
    category: 'Physics',
    tags: ['Schrodinger Equation', 'Particle in Box', 'Quantum Energy']
  },
  {
    id: 'f-phys-hall-effect',
    subjectId: 'phy-1',
    subjectName: 'Engineering Physics',
    unitNumber: 5,
    unitTitle: 'Semiconductors & Nanotechnology',
    title: 'Hall Coefficient and Carrier Concentration',
    latex: "R_H = \\frac{V_H \\cdot w}{I \\cdot B} = \\frac{1}{n q} \\quad [\\text{m}^3/\\text{C}]",
    explanation: 'Quantifies Hall voltage developed perpendicular to both current and magnetic field; sign determines carrier type (n-type or p-type).',
    variables: [
      { symbol: 'R_H', meaning: 'Hall coefficient' },
      { symbol: 'V_H', meaning: 'Measured transverse Hall voltage (V)' },
      { symbol: 'n', meaning: 'Free charge carrier concentration (m^-3)' },
      { symbol: 'q', meaning: 'Carrier charge (+e for holes, -e for electrons)' }
    ],
    category: 'Physics',
    tags: ['Hall Effect', 'Semiconductors', 'Carrier Density']
  },

  // --- BASIC ELECTRICAL & ELECTRONICS ENGINEERING (100111) ---
  {
    id: 'f-ee-kvl-kcl',
    subjectId: 'ee-1',
    subjectName: 'Basic Electrical & Electronics Engineering',
    unitNumber: 1,
    unitTitle: 'DC Circuits & Theorems',
    title: "Kirchhoff's Current & Voltage Laws (KCL & KVL)",
    latex: "\\sum_{k=1}^N I_k = 0 \\quad (\\text{KCL at Node}), \\qquad \\sum_{k=1}^M V_k = 0 \\quad (\\text{KVL around Loop})",
    explanation: 'Fundamental circuit conservation laws based on charge conservation (KCL) and energy conservation (KVL).',
    variables: [
      { symbol: 'I_k', meaning: 'Currents entering/leaving node k' },
      { symbol: 'V_k', meaning: 'Voltage drops and EMF sources in loop' }
    ],
    category: 'Electrical',
    tags: ['DC Circuits', 'KVL', 'KCL', 'Circuit Laws']
  },
  {
    id: 'f-ee-thevenin',
    subjectId: 'ee-1',
    subjectName: 'Basic Electrical & Electronics Engineering',
    unitNumber: 1,
    unitTitle: 'DC Circuits & Theorems',
    title: "Thevenin's Equivalent Circuit & Max Power Condition",
    latex: "I_L = \\frac{V_{th}}{R_{th} + R_L}, \\qquad P_{max} = \\frac{V_{th}^2}{4 R_{th}} \\quad (\\text{when } R_L = R_{th})",
    explanation: 'Any linear two-terminal DC network can be replaced by an equivalent voltage source V_th in series with resistance R_th.',
    variables: [
      { symbol: 'V_{th}', meaning: 'Open-circuit Thevenin voltage across terminals' },
      { symbol: 'R_{th}', meaning: 'Equivalent resistance seen from terminals with sources deactivated' },
      { symbol: 'R_L', meaning: 'Connected load resistance' }
    ],
    category: 'Electrical',
    tags: ['Thevenin Theorem', 'Maximum Power Transfer', 'Network Theorems']
  },
  {
    id: 'f-ee-ac-power-triangle',
    subjectId: 'ee-1',
    subjectName: 'Basic Electrical & Electronics Engineering',
    unitNumber: 2,
    unitTitle: 'AC Circuits & Resonance',
    title: 'AC Power Triangle: Active, Reactive, and Apparent Power',
    latex: "S = V_{rms} I_{rms}^* = P + jQ, \\quad P = V I \\cos\\phi \\text{ (W)}, \\quad Q = V I \\sin\\phi \\text{ (VAR)}, \\quad |S| = \\sqrt{P^2 + Q^2} \\text{ (VA)}",
    explanation: 'Relationship between real dissipated power P, stored circulating reactive power Q, and total apparent power S.',
    variables: [
      { symbol: 'P', meaning: 'Active power (Watts)' },
      { symbol: 'Q', meaning: 'Reactive power (Volt-Amperes Reactive)' },
      { symbol: 'S', meaning: 'Apparent power (Volt-Amperes)' },
      { symbol: '\\cos\\phi', meaning: 'Power Factor (PF)' }
    ],
    category: 'Electrical',
    tags: ['AC Power', 'Power Factor', 'Power Triangle']
  },
  {
    id: 'f-ee-rlc-resonance',
    subjectId: 'ee-1',
    subjectName: 'Basic Electrical & Electronics Engineering',
    unitNumber: 2,
    unitTitle: 'AC Circuits & Resonance',
    title: 'Series RLC Resonant Frequency and Quality Factor',
    latex: "f_0 = \\frac{1}{2\\pi\\sqrt{LC}}, \\qquad Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}, \\qquad \\text{BW} = \\frac{f_0}{Q}",
    explanation: 'At resonance, inductive and capacitive reactances cancel (X_L = X_C), impedance is purely resistive and minimum (Z = R), and current is maximum.',
    variables: [
      { symbol: 'f_0', meaning: 'Resonance frequency in Hertz' },
      { symbol: 'Q', meaning: 'Quality factor / voltage magnification factor' },
      { symbol: '\\text{BW}', meaning: 'Bandwidth (f_2 - f_1) in Hertz' }
    ],
    category: 'Electrical',
    tags: ['Resonance', 'RLC Circuits', 'Quality Factor']
  },
  {
    id: 'f-ee-transformer-emf',
    subjectId: 'ee-1',
    subjectName: 'Basic Electrical & Electronics Engineering',
    unitNumber: 3,
    unitTitle: 'Transformers & Electrical Machines',
    title: 'Transformer EMF Equation and Turns Ratio',
    latex: "E_1 = 4.44 f N_1 \\Phi_m, \\quad E_2 = 4.44 f N_2 \\Phi_m, \\quad \\frac{E_2}{E_1} = \\frac{N_2}{N_1} = \\frac{I_1}{I_2} = K",
    explanation: 'RMS induced voltage in primary and secondary windings linked by alternating magnetic flux of peak value Phi_m.',
    variables: [
      { symbol: 'f', meaning: 'Supply frequency (Hz)' },
      { symbol: 'N_1, N_2', meaning: 'Number of primary and secondary turns' },
      { symbol: '\\Phi_m', meaning: 'Maximum core flux in Webers (B_m * A)' },
      { symbol: 'K', meaning: 'Transformation ratio' }
    ],
    category: 'Electrical',
    tags: ['Transformers', 'EMF Equation', 'Turns Ratio']
  },
  {
    id: 'f-ee-induction-slip',
    subjectId: 'ee-1',
    subjectName: 'Basic Electrical & Electronics Engineering',
    unitNumber: 3,
    unitTitle: 'Transformers & Electrical Machines',
    title: 'Induction Motor Synchronous Speed and Fractional Slip',
    latex: "N_s = \\frac{120 f}{P}, \\qquad s = \\frac{N_s - N_r}{N_s}, \\qquad f_r = s \\cdot f",
    explanation: 'Speed of rotating magnetic field and relative slip between stator field and mechanical rotor speed.',
    variables: [
      { symbol: 'N_s', meaning: 'Synchronous speed in RPM' },
      { symbol: 'N_r', meaning: 'Actual rotor speed in RPM' },
      { symbol: 'f', meaning: 'Stator supply frequency (Hz)' },
      { symbol: 'P', meaning: 'Number of magnetic poles' },
      { symbol: 's', meaning: 'Fractional slip (typically 0.02 - 0.05 at full load)' }
    ],
    category: 'Electrical',
    tags: ['Induction Motor', 'Slip', 'Synchronous Speed']
  },

  // --- INTRODUCTION TO ARTIFICIAL INTELLIGENCE (100105) ---
  {
    id: 'f-ai-astar',
    subjectId: 'ai-1',
    subjectName: 'Introduction to Artificial Intelligence',
    unitNumber: 2,
    unitTitle: 'Informed Search & Heuristics',
    title: 'A* Heuristic Evaluation Function & Admissibility',
    latex: "f(n) = g(n) + h(n), \\qquad h(n) \\le h^*(n) \\quad (\\text{Admissible Condition})",
    explanation: 'Total estimated path cost through node n, combining exact cost so far g(n) and estimated remaining cost to goal h(n).',
    variables: [
      { symbol: 'g(n)', meaning: 'Exact path cost from initial start state to node n' },
      { symbol: 'h(n)', meaning: 'Estimated heuristic cost from node n to goal state' },
      { symbol: 'h^*(n)', meaning: 'True optimal cost from node n to goal' }
    ],
    category: 'Computer Science',
    tags: ['A* Search', 'Heuristics', 'AI Algorithms']
  },
  {
    id: 'f-ai-bayes-theorem',
    subjectId: 'ai-1',
    subjectName: 'Introduction to Artificial Intelligence',
    unitNumber: 4,
    unitTitle: 'Probabilistic Reasoning & Uncertainty',
    title: "Bayes' Theorem for Probabilistic Inference",
    latex: "P(H \\mid E) = \\frac{P(E \\mid H) \\cdot P(H)}{P(E)} = \\frac{P(E \\mid H) P(H)}{\\sum_{i} P(E \\mid H_i) P(H_i)}",
    explanation: 'Computes posterior probability of hypothesis H given observed evidence E based on prior beliefs and likelihood.',
    variables: [
      { symbol: 'P(H \\mid E)', meaning: 'Posterior probability of hypothesis H given evidence E' },
      { symbol: 'P(E \\mid H)', meaning: 'Likelihood of evidence E given hypothesis H' },
      { symbol: 'P(H)', meaning: 'Prior probability of hypothesis H' },
      { symbol: 'P(E)', meaning: 'Marginal probability of evidence E' }
    ],
    category: 'Computer Science',
    tags: ['Bayes Theorem', 'Probabilistic Reasoning', 'Uncertainty']
  },
  {
    id: 'f-ai-perceptron-update',
    subjectId: 'ai-1',
    subjectName: 'Introduction to Artificial Intelligence',
    unitNumber: 5,
    unitTitle: 'Machine Learning & Neural Networks',
    title: 'Perceptron Activation & Weight Update Rule',
    latex: "y = f\\left(\\sum_{i=1}^n w_i x_i + b\\right), \\qquad w_i \\leftarrow w_i + \\eta (y_{\\text{target}} - y) x_i",
    explanation: 'Forward calculation and gradient descent update rule for a single-layer artificial neuron.',
    variables: [
      { symbol: 'w_i', meaning: 'Synaptic weight associated with input feature x_i' },
      { symbol: 'b', meaning: 'Bias term' },
      { symbol: '\\eta', meaning: 'Learning rate (0 < eta <= 1)' },
      { symbol: 'f(\\cdot)', meaning: 'Non-linear activation function (Step, Sigmoid, ReLU)' }
    ],
    category: 'Computer Science',
    tags: ['Neural Networks', 'Perceptron', 'Machine Learning']
  }
];
