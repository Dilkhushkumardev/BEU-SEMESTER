import { type LabExperiment } from '../../types';

export const electricalLabExperiments: LabExperiment[] = [
  {
    id: 'ee-lab-le1',
    experimentNumber: 1,
    code: 'LE-1',
    title: 'Component Identification & Ohm’s Law Verification',
    subjectId: 'electrical-lab-1',
    subjectCode: '100111P',
    mappedCOs: ['CO1'],
    lso: 'Identify active and passive components used in electrical circuits and verify Ohm’s Law for a resistive load.',
    objective: 'To identify various active and passive electrical components and verify Ohm’s Law (V = I·R) by plotting V-I linear characteristics.',
    apparatus: ['Regulated DC Variable Power Supply (0–30V)', 'Carbon / Wirewound Resistors (100 Ω, 220 Ω, 1 kΩ)', 'Digital DC Voltmeter & Ammeter', 'Breadboard and patch cords'],
    theory: 'Ohm’s Law states that at constant temperature, current I through a metallic conductor is directly proportional to potential difference V across its ends: V = I R. The slope of V vs I gives Resistance R.',
    procedure: [
      'Connect DC power supply in series with ammeter, resistor R, and voltmeter in parallel across R.',
      'Vary power supply voltage in steps of 2V from 0V to 20V and record voltmeter (V) and ammeter (I) readings.',
      'Plot V vs I graph on millimeter graph sheet and verify linearity through origin.'
    ],
    formulas: [
      {
        title: 'Ohm’s Law Resistance',
        latex: 'R = \\frac{V}{I} = \\frac{\\Delta V}{\\Delta I} \\quad [\\Omega]',
        explanation: 'Resistance computed from slope of linear V-I plot.'
      }
    ],
    result: 'Ohm’s Law verified; V-I characteristic is a straight line through origin with measured R = 218 Ω (nominal 220 Ω, 0.9% error).',
    precautions: ['Do not exceed resistor power rating P = V·I to avoid resistor burnout.'],
    vivaQuestions: [
      { question: 'What are the limitations of Ohm’s Law?', answer: 'It does not apply to non-linear devices (diodes, transistors, vacuum tubes) or non-metallic electrolytes and arcs.' }
    ]
  },
  {
    id: 'ee-lab-le2',
    experimentNumber: 2,
    code: 'LE-2',
    title: 'Verification of Kirchhoff’s Voltage (KVL) & Current (KCL) Laws',
    subjectId: 'electrical-lab-1',
    subjectCode: '100111P',
    mappedCOs: ['CO1'],
    lso: 'Analyse series and parallel circuits to verify Kirchhoff’s Voltage and Current Laws and apply divider rules experimentally.',
    objective: 'To experimentally verify Kirchhoff’s Current Law (KCL) at a multi-branch node and Kirchhoff’s Voltage Law (KVL) around a closed mesh loop.',
    apparatus: ['DC Power Supply (0–30V)', 'Resistors (100 Ω, 220 Ω, 330 Ω)', 'Digital Multimeters', 'Connecting leads'],
    theory: 'KCL states that algebraic sum of currents at a junction is zero (Σ I = 0). KVL states that algebraic sum of voltages around a closed loop is zero (Σ V = 0).',
    procedure: [
      'Assemble two-mesh circuit with three resistors and DC supply on breadboard.',
      'Measure currents I_1, I_2, I_3 entering and leaving the central node; verify I_1 = I_2 + I_3.',
      'Measure individual voltage drops V_1, V_2 across loop components and verify V_supply = V_1 + V_2.'
    ],
    formulas: [
      {
        title: 'Kirchhoff’s Balance',
        latex: '\\sum I_{\\text{in}} = \\sum I_{\\text{out}}, \\quad \\sum V_{\\text{source}} = \\sum I R',
        explanation: 'Charge and energy conservation verification.'
      }
    ],
    result: 'KCL and KVL verified experimentally with measured error < 0.5%.',
    precautions: ['Ensure correct ammeter (series) and voltmeter (parallel) connection polarities.'],
    vivaQuestions: [
      { question: 'On what conservation laws are KCL and KVL based?', answer: 'KCL is based on Conservation of Charge; KVL is based on Conservation of Energy.' }
    ]
  },
  {
    id: 'ee-lab-le3',
    experimentNumber: 3,
    code: 'LE-3',
    title: 'Power Factor Improvement Using Shunt Capacitor',
    subjectId: 'electrical-lab-1',
    subjectCode: '100111P',
    mappedCOs: ['CO2'],
    lso: 'Identify the effect of low power factor and demonstrate power factor improvement of a single-phase load using a capacitor.',
    objective: 'To measure power factor of an inductive load (choke coil + incandescent lamp) and improve power factor towards unity using parallel power capacitors.',
    apparatus: ['Single-phase 230V AC supply', 'Choke coil (Inductive load)', 'Resistive lamp bank', 'AC Voltmeter, Ammeter, Wattmeter', 'Power factor meter', 'Capacitor bank (10–50 μF)'],
    theory: 'Inductive loads draw lagging reactive power Q_L. Connecting a parallel capacitor bank supplies leading reactive power Q_C = V^2 ω C, reducing total net line current and raising power factor cos φ = P / (V·I).',
    procedure: [
      'Connect R-L load across 230V AC with Wattmeter, Voltmeter, and Ammeter in line.',
      'Record uncompensated values: V, I_1, W_1, pf_1 (typically ~0.6 lagging).',
      'Connect parallel capacitor C across load and record compensated values: V, I_2, W_2, pf_2.',
      'Observe reduction in total line current I while real power W remains constant.'
    ],
    formulas: [
      {
        title: 'Required Capacitance for Power Factor Correction',
        latex: 'C = \\frac{P (\\tan\\phi_1 - \\tan\\phi_2)}{\\omega V^2}',
        explanation: 'Where P is active power in Watts, V is RMS voltage, and φ_1, φ_2 are initial and target phase angles.'
      }
    ],
    result: 'Power factor improved from 0.62 lagging to 0.96 lagging; total line current decreased from 2.8 A to 1.8 A.',
    precautions: ['Discharge capacitors safely after switching off AC mains.'],
    vivaQuestions: [
      { question: 'Why is low power factor undesirable?', answer: 'It causes higher line currents, requiring thicker cables, increasing I^2 R line power losses, and triggering utility penalty charges.' }
    ]
  },
  {
    id: 'ee-lab-le4',
    experimentNumber: 4,
    code: 'LE-4',
    title: 'Voltage Ratio and Turns Ratio of Single-Phase Transformer',
    subjectId: 'electrical-lab-1',
    subjectCode: '100111P',
    mappedCOs: ['CO3'],
    lso: 'Measure primary and secondary voltages and verify turns ratio of a single-phase transformer under test conditions.',
    objective: 'To determine the transformation ratio K = V_2 / V_1 = N_2 / N_1 of a 230V/115V single-phase transformer under varying input voltages.',
    apparatus: ['Single Phase Transformer (1 kVA, 230V/115V)', '1-Phase Variac (Autotransformer 0–270V)', 'Digital AC Voltmeters (0–300V)', 'Digital AC Ammeter'],
    theory: 'Transformation ratio K = V_2 / V_1 = N_2 / N_1 = I_1 / I_2. For a step-down transformer K < 1; for step-up K > 1.',
    procedure: [
      'Connect primary winding to AC supply through a Variac with voltmeter V_1 across primary.',
      'Connect voltmeter V_2 across secondary winding (Open Circuit).',
      'Vary primary voltage from 50V to 230V in 30V steps; record secondary voltage V_2.',
      'Compute ratio K = V_2 / V_1 and verify constancy.'
    ],
    formulas: [
      {
        title: 'Transformation Ratio',
        latex: 'K = \\frac{V_2}{V_1} = \\frac{N_2}{N_1}',
        explanation: 'Ratio of secondary to primary induced voltage.'
      }
    ],
    result: 'Transformation ratio determined: K = 0.501 (Turns ratio N_1 : N_2 = 2 : 1).',
    precautions: ['Start Variac from zero position before energizing mains.'],
    vivaQuestions: [
      { question: 'Why is transformer core laminated?', answer: 'To break large eddy current circulation loops, drastically reducing eddy current core power losses.' }
    ]
  },
  {
    id: 'ee-lab-le5',
    experimentNumber: 5,
    code: 'LE-5',
    title: 'Identification of Main Parts of DC & Induction Machines (Cut-Section Models)',
    subjectId: 'electrical-lab-1',
    subjectCode: '100111P',
    mappedCOs: ['CO3'],
    lso: 'Identify main constructional parts of DC machines and induction machines using cut-section models and examine component functions.',
    objective: 'To inspect cut-section models of DC machines (yoke, field poles, armature, commutator, brushes) and 3-Phase Induction Motors (stator, squirrel-cage/wound rotor, slip rings, cooling fan).',
    apparatus: ['Cut-section model of DC Machine', 'Cut-section model of 3-Phase Squirrel-Cage Induction Motor', 'Model of Wound Rotor Induction Motor with Slip Rings'],
    theory: 'DC machines use a mechanical commutator to convert internal AC to external DC. Induction motors use a stator 3-phase winding to produce a rotating magnetic field that induces currents in shorted rotor bars.',
    procedure: [
      'Inspect DC machine stator: yoke, pole core, pole shoe, field winding.',
      'Inspect DC machine rotor: laminated armature core with slots, copper winding, commutator segments, carbon brushes, and rocker assembly.',
      'Inspect 3-phase induction motor: stator core slots, squirrel cage end-rings, skewed rotor bars, and bearings.',
      'Document the physical function and material of each component.'
    ],
    result: 'All major parts of DC and Induction machines identified and their materials/functional roles mapped.',
    precautions: ['Do not apply force on cut-section model parts.'],
    vivaQuestions: [
      { question: 'Why are rotor slots skewed in squirrel-cage induction motors?', answer: 'To reduce magnetic humming noise (cogging) and prevent magnetic locking between stator and rotor teeth.' }
    ]
  },
  {
    id: 'ee-lab-le6',
    experimentNumber: 6,
    code: 'LE-6',
    title: 'Determination of V–I Characteristics of P–N Junction Diode',
    subjectId: 'electrical-lab-1',
    subjectCode: '100111P',
    mappedCOs: ['CO4'],
    lso: 'Identify the behavior of a P–N junction diode under forward and reverse bias and analyse V–I characteristics.',
    objective: 'To plot the forward and reverse bias characteristics of a silicon diode (1N4007) and determine barrier potential and static/dynamic resistances.',
    apparatus: ['1N4007 Silicon Diode', 'DC Power Supply', 'Digital Voltmeter and Ammeter', 'Breadboard'],
    theory: 'In forward bias, current rises exponentially once applied voltage exceeds knee voltage V_γ ≈ 0.7V. Reverse bias current is limited to minority carrier leakage I_0.',
    procedure: [
      'Connect diode in forward bias, record V_f and I_f up to 1V.',
      'Connect diode in reverse bias, record V_r and I_r up to 25V.',
      'Plot complete V-I curve in 1st and 3rd quadrants.'
    ],
    result: 'Silicon diode knee voltage V_γ = 0.69 V; Reverse leakage current I_0 = 0.08 μA.',
    precautions: ['Always include a series current-limiting resistor.'],
    vivaQuestions: [
      { question: 'Why is silicon preferred over germanium for diodes?', answer: 'Silicon has a wider bandgap (1.1 eV vs 0.67 eV), resulting in much lower reverse leakage current and higher temperature tolerance (150°C vs 75°C).' }
    ]
  },
  {
    id: 'ee-lab-le7',
    experimentNumber: 7,
    code: 'LE-7',
    title: 'Performance of Half-Wave and Full-Wave Rectifiers With/Without Filters',
    subjectId: 'electrical-lab-1',
    subjectCode: '100111P',
    mappedCOs: ['CO4'],
    lso: 'Verify half-wave and full wave rectifier circuits with and without filters using sinusoidal input.',
    objective: 'To construct Half-Wave and Full-Wave Bridge rectifiers, measure DC output voltage, AC ripple voltage, and evaluate filter capacitor smoothing.',
    apparatus: ['Step-down Transformer (230V/12V)', 'Diodes 1N4007 (4 Nos)', 'Filter Capacitors (100 μF, 470 μF, 1000 μF)', 'Load Resistor 1 kΩ', 'Cathode Ray Oscilloscope (CRO)'],
    theory: 'Rectifier converts AC to pulsating DC. Full-wave bridge rectifier conducts on both half-cycles (frequency = 2 f_in). Shunt capacitor filter charges to peak voltage V_m and discharges through R_L, smoothing out ripple: Ripple factor γ = 1 / (4√3 f C R_L).',
    procedure: [
      'Assemble 4-diode bridge rectifier connected to 12V AC transformer secondary.',
      'Observe unfiltered pulsating DC on CRO; measure V_dc and V_rms.',
      'Connect filter capacitor C across load and observe smooth DC waveform on CRO.',
      'Measure ripple voltage V_r(p-p) and compute experimental ripple factor.'
    ],
    formulas: [
      {
        title: 'Bridge Rectifier Ripple Factor with C-Filter',
        latex: '\\gamma = \\frac{1}{4\\sqrt{3} f C R_L}',
        explanation: 'Inverse dependence on capacitance C and load resistance R_L.'
      }
    ],
    result: 'Unfiltered bridge ripple factor = 0.48; With 1000 μF capacitor filter, ripple factor reduced to 0.024 (95% ripple eliminated).',
    precautions: ['Ensure correct electrolytic capacitor polarity (negative stripe to ground).'],
    vivaQuestions: [
      { question: 'What is Peak Inverse Voltage (PIV) of a bridge rectifier?', answer: 'PIV = V_m (Peak secondary AC voltage).' }
    ]
  },
  {
    id: 'ee-lab-le8',
    experimentNumber: 8,
    code: 'LE-8',
    title: 'Zener Diode Voltage Regulator Line and Load Regulation',
    subjectId: 'electrical-lab-1',
    subjectCode: '100111P',
    mappedCOs: ['CO4'],
    lso: 'Identify components and circuit setup of a Zener diode voltage regulator and analyse regulation performance under varying input voltage and load.',
    objective: 'To evaluate Line Regulation (constant V_out with varying V_in) and Load Regulation (constant V_out with varying I_L) using a 5.6V Zener diode.',
    apparatus: ['Zener Diode (5.6V, 1 Watt)', 'Series Resistor R_s = 220 Ω', 'Variable DC power supply', 'Decade Resistance Box (Load)', 'Digital Multimeters'],
    theory: 'In reverse breakdown region, Zener diode maintains nearly constant terminal voltage V_Z over a wide range of reverse current I_Z: V_out = V_Z.',
    procedure: [
      'Connect Zener diode in reverse bias across load with series resistor R_s.',
      'Line Regulation: Keep R_L fixed (1 kΩ), vary input voltage V_in from 7V to 20V; record V_out.',
      'Load Regulation: Keep V_in fixed at 12V, vary load resistance R_L from 100 Ω to 2 kΩ; record V_out and I_L.'
    ],
    result: 'Line regulation < 1.2% over 7V–20V input swing; Load regulation < 1.5% for load currents up to 35 mA.',
    precautions: ['Ensure input voltage V_in > V_Z at all times for regulation.'],
    vivaQuestions: [
      { question: 'What is Zener breakdown vs Avalanche breakdown?', answer: 'Zener breakdown occurs in heavily doped diodes at low voltages (<6V) via direct quantum electric field bond rupture; Avalanche breakdown occurs in lightly doped diodes (>6V) via carrier collision multiplication.' }
    ]
  },
  {
    id: 'ee-lab-le9',
    experimentNumber: 9,
    code: 'LE-9',
    title: 'Input and Output Characteristics of BJT in CE Configuration',
    subjectId: 'electrical-lab-1',
    subjectCode: '100111P',
    mappedCOs: ['CO4'],
    lso: 'Identify input and output characteristics of common emitter (CE) bipolar junction transistor and analyse current and voltage variation.',
    objective: 'To plot Input Characteristics (I_B vs V_BE at constant V_CE) and Output Characteristics (I_C vs V_CE at constant I_B) for an NPN transistor (BC547) and determine current gain β.',
    apparatus: ['NPN Transistor BC547', 'Dual DC Power Supplies', 'Digital Microammeter (μA) and Milliammeter (mA)', 'Digital Voltmeters', 'Breadboard'],
    theory: 'In CE configuration, Input characteristic resembles forward-biased diode. Output characteristic displays active, saturation, and cut-off regions. Current gain is β = ΔI_C / ΔI_B.',
    procedure: [
      'Input: Keep V_CE fixed at 2V, vary V_BE in 0.05V steps; record I_B in μA. Repeat for V_CE = 5V.',
      'Output: Set I_B fixed at 20 μA, vary V_CE from 0V to 10V; record I_C in mA. Repeat for I_B = 40 μA, 60 μA, 80 μA.',
      'Compute input resistance r_in = ΔV_BE / ΔI_B and current gain β = ΔI_C / ΔI_B.'
    ],
    formulas: [
      {
        title: 'BJT Current Gain β',
        latex: '\\beta = \\left( \\frac{\\Delta I_C}{\\Delta I_B} \\right)_{V_{CE} = \\text{const}}',
        explanation: 'Common Emitter current amplification factor.'
      }
    ],
    result: 'Current gain β = 145; Input resistance r_in = 1.8 kΩ; Output resistance r_out = 45 kΩ.',
    precautions: ['Do not exceed maximum transistor collector power rating P_C = V_CE · I_C.'],
    vivaQuestions: [
      { question: 'Why is CE configuration most widely used for amplifiers?', answer: 'Because CE configuration provides both high voltage gain and high current gain, yielding the highest overall POWER GAIN.' }
    ]
  },
  {
    id: 'ee-lab-le10',
    experimentNumber: 10,
    code: 'LE-10',
    title: 'Implementation of Logic Gates Using Universal NAND Gates',
    subjectId: 'electrical-lab-1',
    subjectCode: '100111P',
    mappedCOs: ['CO5'],
    lso: 'Construct basic logic gates (AND, OR, NOT, XOR) using only NAND and NOR gates and verify using truth tables.',
    objective: 'To synthesize NOT, AND, OR, and XOR logic gates using Quad 2-Input NAND IC 7400 and verify outputs using LED indicators.',
    apparatus: ['Digital Logic Trainer Kit', 'IC 7400 (Quad 2-Input NAND Gate)', '+5V Regulated DC Supply', 'Connecting patch cords'],
    theory: 'NAND is a universal gate. Applying De Morgan’s laws: NOT = A NAND A; AND = (A NAND B) NAND (A NAND B); OR = (A NAND A) NAND (B NAND B); XOR = 4 NAND gates.',
    procedure: [
      'Insert IC 7400 into trainer socket, connect Pin 14 to +5V (VCC) and Pin 7 to Ground.',
      'Wire the circuit for each gate configuration (NOT, AND, OR, XOR).',
      'Apply logic inputs (0V for logic 0, +5V for logic 1) via input switches.',
      'Observe output LED states and verify corresponding truth tables.'
    ],
    result: 'All logic gates (NOT, AND, OR, XOR) successfully constructed and verified using only IC 7400 NAND gates.',
    precautions: ['Turn off trainer power supply before inserting or removing ICs.'],
    vivaQuestions: [
      { question: 'Why are NAND and NOR called Universal Gates?', answer: 'Because any arbitrary digital Boolean logic function or complex arithmetic circuit can be realized using only NAND or only NOR gates without requiring any other gate type.' }
    ]
  },
  {
    id: 'ee-lab-le11',
    experimentNumber: 11,
    code: 'LE-11',
    title: 'Measurement of Amplitude, Time Period and Frequency Using CRO',
    subjectId: 'electrical-lab-1',
    subjectCode: '100111P',
    mappedCOs: ['CO6'],
    lso: 'Measure amplitude and time period of signals using a Cathode Ray Oscilloscope (CRO) and determine signal frequency.',
    objective: 'To operate a dual-channel CRO to measure Peak-to-Peak voltage V_p-p, RMS voltage, Time Period T, and frequency f of sine, square, and triangular waveforms from a Function Generator.',
    apparatus: ['Dual Trace 20 MHz Cathode Ray Oscilloscope (CRO) / Digital Storage Oscilloscope (DSO)', 'Function Generator (1 Hz – 2 MHz)', 'BNC to Crocodile probes'],
    theory: 'V_p-p = Vertical Divisions x Volts/Div; Time Period T = Horizontal Divisions x Time/Div; Frequency f = 1 / T.',
    procedure: [
      'Connect function generator output to CRO Channel 1 using BNC cable.',
      'Set function generator to 1 kHz Sine Wave at 5V p-p.',
      'Adjust CRO Volts/Div and Time/Div knobs to obtain 2 stable cycles on screen.',
      'Count vertical peak-to-peak divisions and horizontal cycle divisions to calculate V_p-p, T, and f.'
    ],
    formulas: [
      {
        title: 'Oscilloscope Frequency Formula',
        latex: 'f = \\frac{1}{T} = \\frac{1}{\\text{Divisions} \\times \\text{Time/Div}}',
        explanation: 'Calculates signal frequency from horizontal waveform display.'
      }
    ],
    result: 'Generated 1 kHz sine wave measured on CRO: V_p-p = 5.04 V, T = 1.002 ms, f = 998 Hz (0.2% measurement accuracy).',
    precautions: ['Calibrate oscilloscope probe 10x attenuation factor before taking voltage readings.'],
    vivaQuestions: [
      { question: 'What is the function of the timebase generator in a CRO?', answer: 'It generates a linear sawtooth ramp voltage applied to horizontal deflection plates to sweep the electron beam across the screen at constant velocity.' }
    ]
  },
  {
    id: 'ee-lab-le12',
    experimentNumber: 12,
    code: 'LE-12',
    title: 'Identification of Electrical Cables, Wires and Fuses',
    subjectId: 'electrical-lab-1',
    subjectCode: '100111P',
    mappedCOs: ['CO6'],
    lso: 'Identify different types of electrical cables, wires, and fuses based on construction, rating, and application.',
    objective: 'To inspect various electrical conductors (solid, stranded, flexible), cable types (single core, twin core, armored, shielded, co-axial, fiber optic), and fuse types (rewirable kit-kat, cartridge, HRC fuse).',
    apparatus: ['Sample board of electrical wires (PVC single core, multi-strand flexible, armored XLPE cable, coaxial RG-6)', 'Fuses (Kit-kat, Glass cartridge, HRC fuse)', 'Wire stripper & Micrometer wire gauge (SWG)'],
    theory: 'Current carrying capacity depends on conductor material (copper/aluminum) and cross-sectional area. Fuses have inverse time-current characteristics: fusing current I_f = k · d^(1.5) (Preece’s Law).',
    procedure: [
      'Measure wire conductor diameter using Standard Wire Gauge (SWG) gauge plate.',
      'Inspect insulation layers: Conductor, PVC insulation, Bedding, Steel wire armoring, Outer sheath.',
      'Examine HRC (High Rupturing Capacity) fuse quartz powder arc-quenching construction.'
    ],
    result: 'Cable types, current ratings, and fuse breaking capacities mapped across domestic and industrial use cases.',
    precautions: ['Do not use damaged or undersized cables for heavy heating loads.'],
    vivaQuestions: [
      { question: 'Why is quartz sand filled inside HRC fuses?', answer: 'When the silver fuse element melts during a short circuit, quartz sand absorbs heat and chemical vapor to instantly extinguish the electric arc, preventing explosion.' }
    ]
  },
  {
    id: 'ee-lab-le13',
    experimentNumber: 13,
    code: 'LE-13',
    title: 'Operation and Testing of Protection Devices: Fuse, MCB, and MCCB',
    subjectId: 'electrical-lab-1',
    subjectCode: '100111P',
    mappedCOs: ['CO6'],
    lso: 'Identify construction and functions of fuse, MCB, and MCCB and evaluate operation under fault and overload conditions.',
    objective: 'To study the tripping mechanism and time-current characteristics of Miniature Circuit Breakers (MCB Type B/C) and Molded Case Circuit Breakers (MCCB).',
    apparatus: ['MCB Testing Demonstration Panel', 'Single-pole MCB (6A, 16A, C-curve)', 'Overload current injection test set', 'Stopwatch'],
    theory: 'MCBs provide dual trip protection: Thermal trip (bimetallic strip bending under prolonged overload) and Magnetic trip (solenoid plunging instantly within 10 ms during short circuit).',
    procedure: [
      'Inject 1.5x rated current into MCB and record thermal trip time (~30 to 60 seconds).',
      'Inject 5x rated current (simulating short circuit) and observe instantaneous magnetic trip (< 0.02 seconds).',
      'Reset MCB lever and verify repeatability.'
    ],
    result: 'MCB thermal and magnetic trip mechanisms verified across overload and short-circuit thresholds.',
    precautions: ['Ensure adequate cooling time between successive thermal overload tests.'],
    vivaQuestions: [
      { question: 'What is the advantage of an MCB over a rewirable fuse?', answer: 'MCBs are reusable (simply reset lever), provide precise factory-calibrated tripping, protect against single-phasing, and are safe to operate without risk of live wire contact.' }
    ]
  },
  {
    id: 'ee-lab-le14',
    experimentNumber: 14,
    code: 'LE-14',
    title: 'Demonstration of Earthing Techniques and Electrical Safety',
    subjectId: 'electrical-lab-1',
    subjectCode: '100111P',
    mappedCOs: ['CO6'],
    lso: 'Demonstrate proper earthing techniques for electrical installations and apply electrical safety practices.',
    objective: 'To study the construction, layout, and installation of Pipe Earthing and Plate Earthing systems as per Indian Standard IS 3043.',
    apparatus: ['Cut-section model of Pipe Earthing pit', 'Cut-section model of Plate Earthing', 'Earth electrode (GI pipe / Copper plate)', 'Charcoal and salt layers sample'],
    theory: 'Earthing connects metallic equipment enclosures to earth mass with low resistance (< 5 Ω for domestic, < 1 Ω for substations). In a fault, high current flows through the earth wire to trip the circuit breaker in < 0.1 second, keeping touch voltage below safe limits (< 50V).',
    procedure: [
      'Inspect pipe earthing: 38 mm diameter perforated GI pipe placed vertically 3 meters deep in ground.',
      'Examine alternating layers of charcoal (moisture retention) and common salt (ion conductivity) surrounding the pipe.',
      'Inspect wire mesh funnel for pouring water into the pit during dry summer months.',
      'Document difference between System Earthing (Neutral grounding) and Equipment Earthing.'
    ],
    result: 'Pipe and Plate earthing construction protocols and safety guidelines documented per IS 3043.',
    precautions: ['Never disconnect the earth wire from electrical equipment during operation.'],
    vivaQuestions: [
      { question: 'Why are charcoal and salt used in an earthing pit?', answer: 'Salt provides free ions to decrease soil electrical resistivity, and charcoal retains moisture around the electrode for long periods.' }
    ]
  },
  {
    id: 'ee-lab-le15',
    experimentNumber: 15,
    code: 'LE-15',
    title: 'Domestic Wiring: Lamp & Fan With Regulator and MCB Protection',
    subjectId: 'electrical-lab-1',
    subjectCode: '100111P',
    mappedCOs: ['CO6'],
    lso: 'Implement domestic wiring for a single lamp and fan with regulator using switches and demonstrate fuse/MCB protection.',
    objective: 'To assemble and wire a residential electrical switchboard containing an MCB, indicator lamp, single light point with switch, and ceiling fan with electronic step-regulator.',
    apparatus: ['Wiring wooden board / PVC conduit box', 'Single Pole MCB (6A)', 'SPST Toggle Switches (6A)', 'Electronic Fan Regulator', 'Batten Lamp holder & 60W bulb', 'Ceiling Fan / Motor load', 'Color-coded wires (Red: Phase, Black: Neutral, Green: Earth)'],
    theory: 'All switches, fuses, and MCBs MUST be placed in the PHASE (Live) wire. Neutral wire connects directly to loads. Earth wire bonds metallic fan body to ground.',
    procedure: [
      'Feed incoming 230V Phase wire through 6A MCB onto the common switch busbar.',
      'Connect Switch 1 output to Lamp Holder; connect Lamp Holder return to Neutral busbar.',
      'Connect Switch 2 in series with Fan Regulator and Fan motor; connect Fan return to Neutral.',
      'Connect Green earth wire to fan metal chassis.',
      'Energize circuit and test independent switching, fan speed regulation, and MCB tripping.'
    ],
    result: 'Domestic lighting and fan circuit successfully wired and verified under 230V AC with full MCB protection.',
    precautions: ['Always connect switches and MCBs in the LIVE phase conductor, never in neutral.'],
    vivaQuestions: [
      { question: 'Why must switches always be connected in the Phase wire?', answer: 'If a switch is connected in the neutral wire, opening the switch disconnects the circuit, but the entire appliance remains live at 230V potential, causing fatal shocks if touched during maintenance.' }
    ]
  },
  {
    id: 'ee-lab-le16',
    experimentNumber: 16,
    code: 'LE-16',
    title: 'Earth Resistance & Insulation Resistance Testing Using Megger',
    subjectId: 'electrical-lab-1',
    subjectCode: '100111P',
    mappedCOs: ['CO6'],
    lso: 'Demonstrate safe handling and operation of a Megger for insulation and earth resistance testing.',
    objective: 'To measure Earth Pit Resistance using an Earth Megger Tester (Fall of Potential Method) and test cable insulation resistance (> 1 MΩ).',
    apparatus: ['Digital / Hand-driven Earth Tester Megger (0–20 Ω / 0–200 Ω)', 'Current spike (C) and Potential spike (P) auxiliary electrodes', 'Connecting cables on cable drums (30m, 15m)', 'Campus earthing pit under test'],
    theory: 'Earth resistance is measured via Fall-of-Potential method: Earth electrode E is connected to meter. Current electrode C is driven 30m away, and Potential electrode P is placed at 62% distance (18.6m). Earth Resistance R_e = V_P / I_C.',
    procedure: [
      'Disconnect main earth strip from electrical installation.',
      'Connect E terminal of Megger to Earth electrode pit under test.',
      'Drive Potential spike P at 18.6 meters and Current spike C at 30 meters in a straight line.',
      'Press test button (or rotate hand generator at 160 RPM) and read Earth Resistance directly on digital display.',
      'Verify earth resistance is below 3.0 Ω.'
    ],
    formulas: [
      {
        title: 'Fall-of-Potential 62% Rule',
        latex: 'R_E = \\frac{V_{EP}}{I_{EC}} \\quad (\\text{with P spike at } 62\\% \\text{ of } D_{EC})',
        explanation: 'Standard IEEE 81 method for precise earth resistance measurement.'
      }
    ],
    result: 'Campus laboratory earth resistance measured R_E = 1.85 Ω (well within safe limit < 3.0 Ω).',
    precautions: ['Perform earth testing in dry soil conditions to record worst-case resistance.'],
    vivaQuestions: [
      { question: 'What is the acceptable earth resistance value for residential and industrial systems?', answer: 'Residential: < 5 Ω; Large Substation: < 1 Ω; Data centers / Hospitals: < 0.5 Ω.' }
    ]
  }
];
