import { type LabExperiment } from '../../types';

export const physicsLabExperiments: LabExperiment[] = [
  {
    id: 'phy-lab-le1',
    experimentNumber: 1,
    code: 'LE-1',
    title: 'Wavelength Determination Using Plane Diffraction Grating',
    subjectId: 'physics-lab-1',
    subjectCode: '100104P',
    mappedCOs: ['CO1', 'CO2'],
    lso: 'Measure the wavelength of a given light source using a plane diffraction grating.',
    objective: 'To determine the wavelength of prominent spectral lines of mercury light using a plane transmission diffraction grating and a spectrometer.',
    apparatus: ['Spectrometer', 'Plane Transmission Diffraction Grating (15000 lines/inch)', 'Mercury vapor lamp', 'Reading lens / Magnifier', 'Spirit level'],
    theory: 'When parallel light from the collimator strikes the plane grating normally, diffraction occurs according to the grating equation (a + b) sin θ = n λ, where (a + b) is the grating element, θ is the angle of diffraction for the nth order, and λ is the wavelength of light.',
    procedure: [
      'Level the spectrometer turntable using a spirit level and adjust telescope and collimator for parallel light (Schuster’s method).',
      'Mount the diffraction grating on the prism table and adjust for normal incidence.',
      'Observe the central zero-order image and position the crosswire on prominent spectral lines (Violet, Green, Yellow-1, Yellow-2) in the first and second orders on both left and right sides.',
      'Record both vernier readings (V1 and V2) for each line on both left and right sides.',
      'Calculate the angle of diffraction 2θ and compute wavelength λ = [(a + b) sin θ] / n.'
    ],
    formulas: [
      {
        title: 'Grating Wavelength Formula',
        latex: '\\lambda = \\frac{(a + b) \\sin\\theta}{n} = \\frac{\\sin\\theta}{n N\'}',
        explanation: 'Where N\' is lines per meter on grating, n is spectral order, and θ is diffraction angle.'
      }
    ],
    observationTable: {
      headers: ['Spectral Line Color', 'Order (n)', 'Left Reading (V1, V2)', 'Right Reading (V1, V2)', 'Diffraction Angle 2θ', 'Calculated λ (Å)'],
      sampleRows: [
        ['Violet (404.6 nm)', '1', '142° 15\'', '132° 45\'', '9° 30\'', '4048 Å'],
        ['Green (546.1 nm)', '1', '145° 10\'', '129° 50\'', '15° 20\'', '5465 Å'],
        ['Yellow-1 (577.0 nm)', '1', '146° 05\'', '128° 55\'', '17° 10\'', '5774 Å'],
        ['Yellow-2 (579.0 nm)', '1', '146° 18\'', '128° 42\'', '17° 36\'', '5792 Å']
      ]
    },
    result: 'The wavelengths of mercury spectral lines were experimentally measured: Violet ≈ 4048 Å, Green ≈ 5465 Å, Yellow ≈ 5780 Å, with less than 1.5% experimental error.',
    precautions: [
      'Do not touch the ruled surface of the grating with fingers; hold only by edges.',
      'Ensure the grating is set strictly perpendicular to the incident collimator beam (normal incidence).',
      'Take readings from both Verniers (V1 and V2) to eliminate eccentricity errors.'
    ],
    vivaQuestions: [
      { question: 'What is a diffraction grating?', answer: 'An optical element consisting of a large number of equidistant, parallel, closely spaced transparent slits separated by opaque lines.' },
      { question: 'What is the grating element?', answer: 'The combined width of one transparent slit (a) and one opaque space (b), denoted as (a + b) = 1/N.' },
      { question: 'Why are spectra observed on both sides of central maximum?', answer: 'Because diffraction occurs symmetrically at positive and negative angles ±θ for each spectral order n.' },
      { question: 'Which color deviates the most in grating diffraction?', answer: 'Red deviates the most (largest wavelength λ), while violet deviates the least (opposite of prism dispersion).' }
    ]
  },
  {
    id: 'phy-lab-le2',
    experimentNumber: 2,
    code: 'LE-2',
    title: 'Newton’s Ring Experiment (Wavelength & Radius of Curvature)',
    subjectId: 'physics-lab-1',
    subjectCode: '100104P',
    mappedCOs: ['CO1'],
    lso: 'Measure the wavelength of given monochromatic light source and radius of curvature of the given plano-convex lens using Newton’s Ring Experiment.',
    objective: 'To determine (i) the wavelength of sodium light, and (ii) the radius of curvature of a plano-convex lens using Newton’s rings interference method.',
    apparatus: ['Travelling Microscope', 'Plano-convex lens of large focal length', 'Optically flat glass plate', 'Glass plate inclined at 45°', 'Sodium vapor lamp', 'Spherometer'],
    theory: 'A wedge-shaped circular air film forms between the curved lens surface and flat glass plate. Interference between rays reflected from upper and lower air film boundaries produces concentric circular rings. Ring diameters satisfy D_{n+p}^2 - D_n^2 = 4 p R λ.',
    procedure: [
      'Clean optical surfaces and place the plano-convex lens on the flat glass plate under the 45° beam splitter plate.',
      'Illuminate with monochromatic yellow sodium lamp and adjust travelling microscope to view sharp circular dark and bright rings.',
      'Move microscope crosswire to the 20th dark ring on the left, then advance towards the right, recording micrometer positions for every 2nd ring down to the center and up to the 20th ring on the right.',
      'Calculate ring diameters D_n = |Left - Right| and plot D_n^2 vs ring number n.',
      'Compute slope of D_n^2 vs n graph: Slope = 4 R λ to calculate wavelength λ or radius of curvature R.'
    ],
    formulas: [
      {
        title: 'Wavelength Formula',
        latex: '\\lambda = \\frac{D_{n+p}^2 - D_n^2}{4 p R}',
        explanation: 'Where D_n is diameter of nth ring, p is ring step interval, and R is lens radius of curvature.'
      }
    ],
    observationTable: {
      headers: ['Ring Number (n)', 'Left Reading (cm)', 'Right Reading (cm)', 'Diameter D_n (cm)', 'D_n^2 (cm^2)', 'D_{n+p}^2 - D_n^2 (cm^2)'],
      sampleRows: [
        ['16', '4.850', '4.150', '0.700', '0.490', '0.330 (p=8)'],
        ['12', '4.780', '4.220', '0.560', '0.314', '0.326'],
        ['8', '4.700', '4.300', '0.400', '0.160', '0.320'],
        ['4', '4.600', '4.400', '0.200', '0.040', '—']
      ]
    },
    result: 'Wavelength of sodium yellow light was found to be λ = 5892 Å; Radius of curvature of lens R = 98.6 cm.',
    precautions: [
      'Handle plano-convex lens gently to avoid scratching the polished optical surface.',
      'Turn the microscope micrometer drum in ONE DIRECTION ONLY during readings to avoid backlash mechanical error.'
    ],
    vivaQuestions: [
      { question: 'Why is the central spot in Newton’s rings dark in reflected light?', answer: 'At point of contact t=0, the path difference is λ/2 due to the phase change of π upon reflection at the denser glass boundary, causing destructive interference.' },
      { question: 'Why do rings become closer together as we move away from center?', answer: 'Because ring radius r_n ∝ √n, so the radial gap Δr = r_{n+1} - r_n decreases with increasing n.' },
      { question: 'What happens if a drop of water is placed between the lens and glass plate?', answer: 'The ring diameters shrink by a factor of 1/√μ_water (where μ ≈ 1.33) because optical path difference becomes 2 μ t + λ/2.' }
    ]
  },
  {
    id: 'phy-lab-le3',
    experimentNumber: 3,
    code: 'LE-3',
    title: 'Resolving Power of a Telescope',
    subjectId: 'physics-lab-1',
    subjectCode: '100104P',
    mappedCOs: ['CO1'],
    lso: 'Determine the resolving power of a given telescope.',
    objective: 'To determine the resolving power of a telescope and verify Rayleigh’s criterion of resolution.',
    apparatus: ['Astronomical Telescope with rectangular adjustable slit aperture', 'Source of light (Sodium lamp)', 'Two parallel black line slits mounted on glass plate', 'Traveling microscope / Scale'],
    theory: 'The theoretical limit of resolution of a telescope with rectangular aperture of width a is dθ = λ / a. The theoretical resolving power is RP = a / λ. The practical resolving power is D / d, where d is the separation between two object lines and D is the distance of the telescope from the object.',
    procedure: [
      'Mount the two object lines illuminated with sodium light at distance D (~5 meters) from telescope.',
      'Adjust the rectangular slit attached to telescope objective, slowly narrowing slit width a until the two lines just cease to be resolved.',
      'Measure slit width a using a traveling microscope and compute theoretical and practical resolving powers.'
    ],
    formulas: [
      {
        title: 'Theoretical Resolving Power (Rectangular Aperture)',
        latex: '\\text{RP}_{\\text{theoretical}} = \\frac{a}{\\lambda}, \\quad \\text{RP}_{\\text{practical}} = \\frac{D}{d}',
        explanation: 'Where a is slit width, D is object distance, and d is line spacing.'
      }
    ],
    result: 'Theoretical Resolving Power = 1.72 x 10^3; Practical Resolving Power = 1.68 x 10^3 (Verification within 2.5% accuracy).',
    precautions: ['Ensure the telescope axis is collinear with the object lines.'],
    vivaQuestions: [
      { question: 'Define Resolving Power of a telescope.', answer: 'The reciprocal of the smallest angular separation (dθ) between two point objects such that they appear distinctly separated.' }
    ]
  },
  {
    id: 'phy-lab-le4',
    experimentNumber: 4,
    code: 'LE-4',
    title: 'Specific Rotation of Cane Sugar Using Polarimeter',
    subjectId: 'physics-lab-1',
    subjectCode: '100104P',
    mappedCOs: ['CO1'],
    lso: 'Determine the specific rotation of cane sugar solution using a polarimeter.',
    objective: 'To determine the specific rotation [α] of cane sugar (sucrose) solution and calculate the unknown concentration of an unlabelled sugar solution.',
    apparatus: ['Laurent’s Half-Shade Polarimeter', 'Sodium vapor lamp', 'Pure Cane Sugar (Sucrose)', 'Chemical balance & measuring flasks', 'Polarimeter tube (20 cm)'],
    theory: 'Optically active sugar solutions rotate the plane of polarized light by angle θ. The specific rotation is [α] = (10 * θ) / (L * C), where θ is rotation in degrees, L is tube length in decimeters, and C is concentration in grams/100 mL.',
    procedure: [
      'Fill polarimeter tube with pure distilled water and record zero reading θ_0 where both halves of the half-shade field appear equally illuminated.',
      'Prepare sugar solutions of known concentrations (5%, 10%, 15%, 20% w/v).',
      'Fill the tube with each sugar solution, measure optical rotation angle θ, plot θ vs concentration C, and compute slope to find specific rotation.'
    ],
    formulas: [
      {
        title: 'Specific Rotation Formula',
        latex: '[\\alpha]_D^{20^\\circ\\text{C}} = \\frac{10 \\cdot \\theta}{L \\cdot C} \\quad [^\\circ / (\\text{dm} \\cdot \\text{g/mL})]',
        explanation: 'Where θ is angle of optical rotation in degrees, L is tube length in cm, and C is concentration in g/100mL.'
      }
    ],
    result: 'Specific rotation of cane sugar [α] = +66.5° / (dm·g/mL) (Dextrorotatory).',
    precautions: ['Ensure no air bubbles are trapped inside the polarimeter glass tube.'],
    vivaQuestions: [
      { question: 'What is optical activity?', answer: 'The property of certain chiral molecules to rotate the plane of polarization of linearly polarized light.' },
      { question: 'What is the purpose of Laurent’s half-shade device?', answer: 'It divides the optical field into two halves to allow highly accurate matching of equal brightness rather than estimating maximum darkness.' }
    ]
  },
  {
    id: 'phy-lab-le5',
    experimentNumber: 5,
    code: 'LE-5',
    title: 'Numerical Aperture of Optical Fiber (Virtual Lab)',
    subjectId: 'physics-lab-1',
    subjectCode: '100104P',
    mappedCOs: ['CO2'],
    lso: 'Determine the Numerical Aperture of given optical fiber.',
    objective: 'To measure the Numerical Aperture (NA) and acceptance angle of step-index optical fiber using a semiconductor laser source and circular target screen.',
    apparatus: ['Semiconductor He-Ne/Diode Laser Source (650 nm)', 'Fiber Optic Patch Cable with bare end', 'Micro-positioner jig', 'Circular Screen with metric concentric grid', 'Scale'],
    theory: 'Light exiting an optical fiber diverges as a circular cone with half-angle θ_a (acceptance angle). If the spot on screen has diameter W at distance L from fiber tip, NA = sin θ_a = (W/2) / sqrt[L^2 + (W/2)^2] = W / sqrt(4 L^2 + W^2).',
    procedure: [
      'Connect semiconductor laser source to optical fiber launch port.',
      'Position the output fiber tip at distance L (e.g. 10 mm, 20 mm, 30 mm) perpendicular to the metric screen.',
      'Measure horizontal and vertical diameter W of the illuminated circular red spot on the screen.',
      'Compute NA for varying distances L and take average.'
    ],
    formulas: [
      {
        title: 'Numerical Aperture from Spot Geometry',
        latex: '\\text{NA} = \\sin\\theta_a = \\frac{W}{\\sqrt{4L^2 + W^2}}',
        explanation: 'Where W is diameter of laser spot and L is distance from fiber tip to screen.'
      }
    ],
    result: 'Numerical Aperture of given fiber NA = 0.385; Acceptance Angle θ_a = 22.6°.',
    precautions: ['Never look directly into the laser beam emitted from the fiber end.'],
    vivaQuestions: [
      { question: 'What does Numerical Aperture signify?', answer: 'It measures the light-gathering capacity of the optical fiber.' }
    ]
  },
  {
    id: 'phy-lab-le6',
    experimentNumber: 6,
    code: 'LE-6',
    title: 'Measurement of Dielectric Constant of Solid Materials',
    subjectId: 'physics-lab-1',
    subjectCode: '100104P',
    mappedCOs: ['CO3'],
    lso: 'Measure the dielectric constant of given dielectric materials.',
    objective: 'To determine the dielectric constant (relative permittivity ε_r) of solid insulating materials (Bakelite, Glass, Mica) using a parallel plate capacitor setup and LCR meter.',
    apparatus: ['Variable Parallel Plate Capacitor setup with micrometer screw', 'Digital LCR Meter / High Frequency Bridge', 'Dielectric sample slabs of uniform thickness', 'Vernier Caliper'],
    theory: 'The capacitance of parallel plates of area A and gap d in air is C_0 = ε_0 A / d. When filled with a dielectric slab of thickness d, capacitance increases to C = ε_r C_0. Hence, dielectric constant ε_r = C / C_0.',
    procedure: [
      'Measure plate diameter D and calculate plate area A = π D^2 / 4.',
      'Measure capacitance C_0 with air gap equal to slab thickness d.',
      'Insert the solid dielectric slab between plates without air gap and measure new capacitance C on LCR meter.',
      'Compute ε_r = C / C_0.'
    ],
    formulas: [
      {
        title: 'Dielectric Constant Ratio',
        latex: '\\varepsilon_r = K = \\frac{C_{\\text{dielectric}}}{C_{\\text{air}}} = \\frac{C \\cdot d}{\\varepsilon_0 A}',
        explanation: 'Ratio of capacitance with dielectric medium to vacuum/air capacitance.'
      }
    ],
    result: 'Dielectric constant of Bakelite ε_r = 4.8; Mica ε_r = 6.2.',
    precautions: ['Ensure no air gap exists between dielectric slab surfaces and metal capacitor plates.'],
    vivaQuestions: [
      { question: 'Why does capacitance increase with dielectric insertion?', answer: 'Dielectric polarization creates internal bound charges producing an opposing electric field that lowers potential difference V for the same charge Q, boosting C = Q/V.' }
    ]
  },
  {
    id: 'phy-lab-le7',
    experimentNumber: 7,
    code: 'LE-7',
    title: 'Measurement of Planck’s Constant Using Photocell',
    subjectId: 'physics-lab-1',
    subjectCode: '100104P',
    mappedCOs: ['CO4'],
    lso: 'Determine the value of Planck’s constant using a photocell.',
    objective: 'To determine Planck’s constant h and verify Einstein’s photoelectric equation using a vacuum vacuum photocell and narrow optical color filters.',
    apparatus: ['Photoelectric Cell Setup with variable DC reverse stopping potential', 'Monochromatic color filters (Red, Yellow, Green, Blue, Violet)', 'Micro-ammeter / Digital picoammeter', 'Regulated power supply'],
    theory: 'By Einstein’s Photoelectric Equation: e V_0 = h ν - Φ ==> Stopping potential V_0 = (h/e) ν - (Φ/e). The graph of Stopping Potential V_0 vs Frequency ν is a straight line with slope = h / e.',
    procedure: [
      'Insert color filter of known frequency ν (e.g. Blue 460 nm, Green 540 nm, Yellow 580 nm) in front of photocell.',
      'Adjust reverse retarding voltage until photocurrent drops strictly to zero (Stopping Potential V_0).',
      'Repeat for 5 distinct color filters and plot V_0 vs ν.',
      'Compute Planck’s constant: h = e * Slope.'
    ],
    formulas: [
      {
        title: 'Einstein Photoelectric Stopping Potential',
        latex: 'V_0 = \\left( \\frac{h}{e} \\right) \\nu - \\frac{\\Phi}{e} \\implies h = e \\cdot \\text{Slope}',
        explanation: 'Linear relation between stopping potential V_0 and light frequency ν.'
      }
    ],
    result: 'Value of Planck’s constant experimentally determined: h = 6.64 x 10^(-34) J·s (Standard: 6.626 x 10^(-34) J·s, 0.2% error).',
    precautions: ['Protect photocell from stray background room light during stopping potential measurements.'],
    vivaQuestions: [
      { question: 'What is Stopping Potential?', answer: 'The minimum negative anode potential required to stop the fastest emitted photoelectrons, reducing photocurrent to zero.' }
    ]
  },
  {
    id: 'phy-lab-le8',
    experimentNumber: 8,
    code: 'LE-8',
    title: 'Stern-Gerlach Experiment (Virtual Lab)',
    subjectId: 'physics-lab-1',
    subjectCode: '100104P',
    mappedCOs: ['CO4'],
    lso: 'Determine the spatial quantization and electron spin using Stern-Gerlach experiment.',
    objective: 'To demonstrate space quantization of magnetic moments and prove intrinsic electron spin angular momentum (s = 1/2).',
    apparatus: ['Virtual Lab Simulation Platform (Amrita / IIT Kanpur VLab)', 'Inhomogeneous Magnetic Field simulator', 'Silver atom thermal beam furnace', 'Detector screen'],
    theory: 'A beam of neutral silver atoms (single 5s valence electron) passes through an inhomogeneous magnetic field ∂B_z/∂z. Deflection force is F_z = μ_z (∂B_z/∂z). Classical physics predicts a continuous spread, but quantum mechanics predicts splitting into exactly TWO discrete beams corresponding to spin up (m_s = +1/2) and spin down (m_s = -1/2).',
    procedure: [
      'Launch virtual simulator and set furnace temperature T to generate collimated silver beam.',
      'Turn on inhomogeneous magnetic field gradient ∂B_z/∂z and observe beam splitting on the detector screen.',
      'Measure peak-to-peak beam separation Δz and compute Bohr magneton μ_B.'
    ],
    formulas: [
      {
        title: 'Deflection Force in Inhomogeneous Field',
        latex: 'F_z = \\mu_z \\frac{\\partial B_z}{\\partial z} = g_s m_s \\mu_B \\frac{\\partial B_z}{\\partial z}',
        explanation: 'Where m_s = ±1/2 and μ_B is Bohr Magneton.'
      }
    ],
    result: 'Silver atom beam split into exactly two discrete symmetric traces, proving electron spin quantization s = 1/2.',
    precautions: ['Ensure magnetic field gradient is strictly non-uniform (∂B_z/∂z ≠ 0).'],
    vivaQuestions: [
      { question: 'Why are silver atoms used in Stern-Gerlach experiment?', answer: 'Silver has 47 electrons; inner 46 form a closed inert shell with zero total angular momentum, leaving a single 5s valence electron whose intrinsic spin determines total magnetic moment.' }
    ]
  },
  {
    id: 'phy-lab-le9',
    experimentNumber: 9,
    code: 'LE-9',
    title: 'V-I Characteristics of P-N Junction Diode',
    subjectId: 'physics-lab-1',
    subjectCode: '100104P',
    mappedCOs: ['CO5'],
    lso: 'Determine the I-V characteristic of a given p-n junction diode.',
    objective: 'To plot Forward and Reverse bias I-V characteristics of a Silicon / Germanium P-N junction diode and determine cut-in knee voltage and dynamic resistance.',
    apparatus: ['P-N Junction Diode (1N4007)', 'Variable DC power supply (0-30V)', 'Digital DC Voltmeter & Ammeter (mA and μA)', 'Connecting wires'],
    theory: 'In forward bias, current rises exponentially beyond knee voltage V_γ (~0.7V for Si). Dynamic forward resistance is r_d = ΔV_f / ΔI_f. In reverse bias, a tiny reverse saturation current (~μA) flows until breakdown.',
    procedure: [
      'Connect diode in Forward Bias (Anode to + supply, Cathode through mA ammeter to - supply).',
      'Vary forward voltage in 0.1V steps from 0V to 1.0V; record current in mA.',
      'Reverse diode connections (Reverse Bias) and vary voltage from 0V to 20V; record current in μA.',
      'Plot Forward and Reverse I-V curves on graph paper and calculate knee voltage and dynamic resistance.'
    ],
    formulas: [
      {
        title: 'Dynamic Forward Resistance',
        latex: 'r_d = \\frac{\\Delta V_f}{\\Delta I_f} \\quad (\\text{at operating Q-point})',
        explanation: 'Slope reciprocal of forward conduction characteristic.'
      }
    ],
    result: 'Silicon diode cut-in knee voltage V_γ = 0.68 V; Dynamic forward resistance r_d = 12.5 Ω.',
    precautions: ['Do not exceed maximum forward current rating to avoid thermal destruction of diode.'],
    vivaQuestions: [
      { question: 'What is knee / cut-in voltage?', answer: 'The forward voltage threshold beyond which barrier potential is overcome and current rises rapidly.' }
    ]
  },
  {
    id: 'phy-lab-le10',
    experimentNumber: 10,
    code: 'LE-10',
    title: 'Hall Effect: Carrier Concentration & Mobility Measurement',
    subjectId: 'physics-lab-1',
    subjectCode: '100104P',
    mappedCOs: ['CO5'],
    lso: 'Determine hole and electron density in given semiconductor using Hall effect.',
    objective: 'To measure Hall coefficient R_H, identify carrier type (N/P), and compute carrier concentration n and mobility μ in a semiconductor wafer.',
    apparatus: ['Electromagnet with Constant Current Power Supply', 'Hall Probe sample (Germanium crystal)', 'Digital Gaussmeter', 'Digital Hall Microvoltmeter', 'Current source'],
    theory: 'When current I flows perpendicular to magnetic field B, Lorentz force produces Hall voltage V_H = (R_H I B) / w. Carrier concentration is n = 1 / (q |R_H|) and mobility is μ = σ |R_H|.',
    procedure: [
      'Calibrate electromagnet using Gaussmeter to establish magnetic field B (e.g. 0.2 to 0.8 Tesla).',
      'Pass constant current I (1 to 5 mA) through semiconductor Hall probe.',
      'Record transverse Hall voltage V_H for varying magnetic fields B.',
      'Plot V_H vs B, calculate slope, and compute Hall coefficient R_H and carrier density n.'
    ],
    formulas: [
      {
        title: 'Hall Coefficient and Carrier Density',
        latex: 'R_H = \\frac{V_H \\cdot w}{I \\cdot B}, \\quad n = \\frac{1}{q |R_H|}, \\quad \\mu = \\sigma |R_H|',
        explanation: 'Where w is sample thickness and q = 1.6 x 10^(-19) C.'
      }
    ],
    result: 'Semiconductor identified as N-type (R_H negative); Electron density n = 3.8 x 10^15 cm^(-3); Hall mobility μ = 3200 cm^2/(V·s).',
    precautions: ['Ensure Hall probe is positioned strictly in the uniform center of electromagnet pole pieces.'],
    vivaQuestions: [
      { question: 'How does sign of Hall voltage determine semiconductor type?', answer: 'Electrons and holes deflect in the same spatial direction under Lorentz force but have opposite charges, producing opposite polarities of Hall voltage V_H.' }
    ]
  },
  {
    id: 'phy-lab-le11',
    experimentNumber: 11,
    code: 'LE-11',
    title: 'Energy Band Gap Measurement Using Four-Probe Method',
    subjectId: 'physics-lab-1',
    subjectCode: '100104P',
    mappedCOs: ['CO5'],
    lso: 'Use four-probe method to determine the resistivity and energy band gap of given semiconductor material.',
    objective: 'To determine the temperature dependence of semiconductor resistivity and compute energy band gap E_g of Germanium using the Four-Probe technique.',
    apparatus: ['Four-Probe arrangement with spring-loaded tungsten probes', 'Germanium crystal sample in temperature-controlled oven', 'Constant current power source', 'Digital microvoltmeter', 'Thermometer'],
    theory: 'The Four-Probe method eliminates contact resistance errors. Outer probes pass constant current I; inner probes measure voltage V. Resistivity is ρ = (V/I) * (2π s) * f(W/s). In intrinsic range, ρ = ρ_0 exp(E_g / 2kT) ==> ln ρ vs 1000/T gives slope = E_g / (2k).',
    procedure: [
      'Mount 4-probe assembly on Germanium sample and place inside heating oven.',
      'Pass constant current I = 2 mA through outer probes.',
      'Heat oven from room temperature to 160°C and record voltage V at every 5°C interval.',
      'Calculate resistivity ρ at each temperature and plot ln ρ vs 1000/T.',
      'Determine slope of the linear intrinsic region and compute band gap: E_g = 2 k * Slope * 1000 eV.'
    ],
    formulas: [
      {
        title: 'Semiconductor Band Gap from Four-Probe',
        latex: 'E_g = 2k \\cdot \\left[ \\frac{\\ln\\rho_1 - \\ln\\rho_2}{\\frac{1}{T_1} - \\frac{1}{T_2}} \\right] = 2k \\cdot \\text{Slope} \\quad [\\text{eV}]',
        explanation: 'Where k = 8.617 x 10^(-5) eV/K is Boltzmann constant.'
      }
    ],
    result: 'Energy band gap of Germanium experimentally determined: E_g = 0.69 eV (Standard value: 0.67 eV at 300K).',
    precautions: ['Do not heat oven above 180°C to avoid melting probe insulation.'],
    vivaQuestions: [
      { question: 'Why is the Four-Probe method superior to the Two-Probe method?', answer: 'The four-probe method passes current through outer leads while measuring voltage with high-impedance inner leads, completely eliminating contact resistance and lead resistance errors.' }
    ]
  },
  {
    id: 'phy-lab-le12',
    experimentNumber: 12,
    code: 'LE-12',
    title: 'Nanoparticle Size-Dependent Light Absorption (Quantum Confinement)',
    subjectId: 'physics-lab-1',
    subjectCode: '100104P',
    mappedCOs: ['CO5'],
    lso: 'Demonstrate the change in absorption of light on changing size of nanoparticle.',
    objective: 'To synthesize gold / cadmium selenide nanoparticles of varying sizes and demonstrate the blue-shift in optical absorption spectrum due to quantum confinement using UV-Visible Spectrophotometer.',
    apparatus: ['UV-Visible Spectrophotometer (200–800 nm)', 'Quartz cuvettes', 'Gold / CdSe colloidal nanoparticle samples (Sizes: 5 nm, 15 nm, 30 nm, 50 nm)', 'Deionized water'],
    theory: 'Surface Plasmon Resonance (SPR) in metallic nanoparticles and quantum confinement in semiconductor quantum dots shift optical absorption peaks to shorter wavelengths (blue shift) as particle diameter decreases: E_g(nano) = E_g(bulk) + h^2 / (8 m* R^2).',
    procedure: [
      'Calibrate UV-Vis Spectrophotometer using deionized water baseline blank.',
      'Place cuvettes containing nanoparticle solutions of different synthesis growth times (sizes 5 nm to 50 nm) into sample chamber.',
      'Record optical absorbance spectra from 350 nm to 750 nm and note absorption peak wavelengths λ_max.',
      'Plot absorption peak wavelength λ_max vs particle size.'
    ],
    formulas: [
      {
        title: 'Brus Quantum Confinement Wavelength Shift',
        latex: '\\Delta E_g = \\frac{h c}{\\lambda_{\\text{nano}}} - \\frac{h c}{\\lambda_{\\text{bulk}}} \\approx \\frac{h^2}{8 R^2 \\mu^*}',
        explanation: 'Bandgap expansion directly proportional to 1/R^2.'
      }
    ],
    result: 'Observed absorption peak shifted from 560 nm (50 nm particles) to 518 nm (5 nm particles), confirming quantum confinement blue-shift.',
    precautions: ['Use quartz cuvettes (not plastic) for accurate UV-region light transmission.'],
    vivaQuestions: [
      { question: 'What is Blue Shift?', answer: 'The shift of absorption/emission spectra towards shorter wavelengths (higher photon energy) caused by bandgap widening in quantum-confined nanoparticles.' }
    ]
  }
];
