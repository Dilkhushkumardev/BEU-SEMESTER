import type { Subject } from '../../types';

export const electricalSubject: Subject = {
  id: 'electrical-1',
  code: '100111',
  name: 'Basics of Electrical & Electronics Engineering',
  shortName: 'BEEE',
  type: 'theory',
  credits: 3,
  lectureHours: 3,
  tutorialHours: 0,
  practicalHours: 0,
  totalHours: 42,
  semester: 1,
  group: 'Group-A (CSE & Allied Branches)',
  description: 'Comprehensive study of DC/AC network analysis, transformers & electrical machines, semiconductor diodes & BJT amplifiers, digital logic, IC regulators, instrumentation, and electrical safety.',
  iconName: 'Zap',
  accentColor: '#eab308',
  courseOutcomes: [
    { code: 'CO1', statement: 'Apply fundamental electrical laws to analyse DC circuits.' },
    { code: 'CO2', statement: 'Analyse the performance of AC circuits.' },
    { code: 'CO3', statement: 'Interpret the applications of basic electrical machines.' },
    { code: 'CO4', statement: 'Analyse the characteristics of semiconductor devices such as diodes and transistors for its use in rectifiers, voltage regulators and amplifiers.' },
    { code: 'CO5', statement: 'Explain and apply the fundamentals of digital and analog electronics, electrical measurement, sensors and transducers, power systems, and electrical safety practices including protective devices and earthing.' },
  ],
  referenceBooks: [
    { title: 'Basic Electrical Engineering', authors: 'D. P. Kothari, I. J. Nagrath', publisher: 'McGraw-Hill Education, 2019', isbn: '978-9353165727' },
    { title: 'Electronic Devices and Circuit Theory', authors: 'Robert L. Boylestad and Louis Nashelsky', publisher: 'Pearson, 2013', isbn: '978-1292025636' },
    { title: 'Digital Logic and Computer Design', authors: 'M. Morris Mano', publisher: 'Pearson India, 2017', isbn: '978-9332586048' },
    { title: 'Electrical Machinery', authors: 'P. S. Bimbhra', publisher: 'Khanna Publishers, 2024', isbn: '978-9389139105' },
    { title: 'A Course in Electrical and Electronic Measurements and Instrumentation', authors: 'A. K. Sawhney', publisher: 'Dhanpat Rai & Co., 19th Edition', isbn: '978-8177001006' },
    { title: 'Fundamentals of Electric Circuits', authors: 'Charles K. Alexander and Matthew N. O. Sadiku', publisher: 'McGraw-Hill, 7th Edition', isbn: '978-9355320162' },
  ],
  units: [
    {
      id: 'ee-u1',
      unitNumber: 1,
      title: 'Basic Electrical Circuits',
      hours: 8,
      mappedCOs: ['CO1'],
      learningObjectives: [
        'Classify active/passive, unilateral/bilateral, linear/nonlinear circuit elements.',
        'Apply Ohm’s Law, KCL, and KVL to multi-loop DC circuits.',
        'Solve network problems using Mesh Analysis and Nodal Analysis techniques.',
        'Perform Star-Delta transformations and apply voltage/current divider rules.'
      ],
      topics: [
        {
          id: 'ee-u1-t1',
          topicNumber: '1.1',
          title: 'Circuit Elements, Classification & Basic Laws (Ohm’s, KCL, KVL)',
          syllabusText: 'Electrical Circuit Elements: Resistance, inductance, and capacitance as active and passive elements; Classification of Elements: Unilateral and bilateral elements; linear and nonlinear elements; Basic Circuit Laws: Ohm’s law and Kirchhoff’s current and voltage laws.',
          unitId: 'ee-u1',
          subjectId: 'electrical-1',
          subjectCode: '100111',
          quickDefinition: 'Active elements (batteries, generators) deliver net electrical power, while passive elements (R, L, C) absorb or store energy. Kirchhoff’s Current Law (KCL, Σ I_in = Σ I_out) embodies charge conservation at a node, while Kirchhoff’s Voltage Law (KVL, Σ V = 0) embodies energy conservation around a closed loop.',
          whyItMatters: 'Forms the universal foundation for all electrical engineering, microchip circuit design, PCB layouts, and battery management systems.',
          coreConcept: [
            {
              heading: 'Classification of Circuit Elements',
              paragraphs: [
                '• Active vs Passive: Active elements supply average energy over time (voltage/current sources, transistors, op-amps). Passive elements absorb energy (Resistors dissipate heat, Inductors store 1/2 L i^2 in magnetic field, Capacitors store 1/2 C v^2 in electric field).',
                '• Linear vs Non-linear: Linear elements have V-I characteristic passing through origin as a straight line (R, L, C). Non-linear elements do not obey superposition (diodes, transistors, incandescent bulbs).',
                '• Unilateral vs Bilateral: Bilateral elements conduct identically in both current directions (Resistor). Unilateral elements conduct predominantly in one direction (Diode).'
              ]
            },
            {
              heading: 'Kirchhoff’s Laws',
              paragraphs: [
                '1. Kirchhoff’s Current Law (KCL): The algebraic sum of currents entering any circuit node is zero: Σ I_in = Σ I_out. (Conservation of Electrical Charge).',
                '2. Kirchhoff’s Voltage Law (KVL): The algebraic sum of all branch voltages around any closed circuit loop is zero: Σ V_sources = Σ I R_drops. (Conservation of Energy).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Kirchhoff’s Current Law (KCL)',
              latex: '\\sum_{k=1}^N I_k = 0 \\quad \\text{at any junction node}',
              explanation: 'Law of conservation of electrical charge.'
            },
            {
              title: 'Kirchhoff’s Voltage Law (KVL)',
              latex: '\\sum_{k=1}^M V_k = 0 \\quad \\text{around any closed loop}',
              explanation: 'Law of conservation of electrical energy.'
            },
            {
              title: 'Energy Stored in Inductor & Capacitor',
              latex: 'W_L = \\frac{1}{2} L I^2, \\quad W_C = \\frac{1}{2} C V^2',
              explanation: 'Passive magnetic and electrostatic stored energies.'
            }
          ],
          example: {
            problem: 'In a node, three currents enter: I_1 = 4 A, I_2 = 6 A, and two currents leave: I_3 = 3 A and I_4. Calculate the unknown leaving current I_4.',
            solutionSteps: [
              'Step 1: Apply KCL: Σ I_entering = Σ I_leaving.',
              'Step 2: I_1 + I_2 = I_3 + I_4.',
              'Step 3: 4 + 6 = 3 + I_4 ==> 10 = 3 + I_4.',
              'Step 4: I_4 = 10 - 3 = 7 A.'
            ],
            finalAnswer: 'Unknown leaving current I_4 = 7 A.'
          },
          engineeringApplication: {
            title: 'Smartphone Multi-Rail Power Management Integrated Circuits (PMIC)',
            description: 'Smartphone PMICs distribute power from a single 3.8V Li-ion battery to dozens of voltage rails (0.8V CPU core, 1.8V RAM, 3.3V flash) by continuously balancing KCL node currents across high-efficiency buck converters.',
            impact: 'Extends mobile battery life and prevents thermal chip throttling.'
          },
          commonMistakes: [
            {
              mistake: 'Messing up signs in KVL when traversing through voltage sources.',
              correction: 'Entering negative terminal and leaving positive terminal counts as a VOLTAGE RISE (+V). Entering positive and leaving negative counts as a VOLTAGE DROP (-V).',
              why: 'Consistent sign convention around the loop is critical to avoid energy balance sign inversion.'
            }
          ],
          quickRevision: [
            'Passive: R (dissipates), L & C (store energy).',
            'Bilateral: conducts both ways; Linear: straight V-I line.',
            'KCL = conservation of charge; KVL = conservation of energy.',
            'Ohm’s law: V = I R.'
          ],
          examFocus: {
            questionTypes: ['State and explain Kirchhoff’s Laws with circuit diagrams (5-7 Marks)', 'Differentiate between active/passive, unilateral/bilateral, linear/nonlinear elements with examples (5 Marks)'],
            likelyMarks: '6 to 7 Marks',
            keyTheorems: ['Kirchhoff’s Current & Voltage Laws'],
            tip: 'Always state which physical conservation law corresponds to KCL (charge) and KVL (energy).'
          },
          visualType: 'kcl-kvl-circuit',
          visualCaption: 'KCL Nodal Current Balance & KVL Loop Voltage Walk',
          visualExplanation: 'Circuit schematic illustrating incoming/outgoing current vectors at a junction and clockwise potential drop/rise loop traversal.',
          estimatedMinutes: 25
        },
        {
          id: 'ee-u1-t2',
          topicNumber: '1.2',
          title: 'Mesh Analysis, Nodal Analysis & Star-Delta Transformations',
          syllabusText: 'Circuit Configurations: Series and parallel circuits, voltage sources, current sources, and source transformation; Circuit Analysis Methods: Mesh analysis and nodal analysis techniques; Network Theorems and Transformations: Current divider rule, voltage divider rule, and star-delta transformation.',
          unitId: 'ee-u1',
          subjectId: 'electrical-1',
          subjectCode: '100111',
          quickDefinition: 'Mesh Analysis applies KVL around independent planar loops using mesh currents, while Nodal Analysis applies KCL at non-reference nodes using node voltages. Star (Y) to Delta (Δ) transformation converts 3-terminal bridge networks into equivalent single loops without internal nodes.',
          whyItMatters: 'Provides systematic algorithms executed by SPICE simulation software to analyze complex multi-million transistor microchip schematics.',
          coreConcept: [
            {
              heading: 'Mesh Current Analysis (KVL-based)',
              paragraphs: [
                'Assign clockwise mesh currents I_1, I_2, ..., I_k for each independent window loop.',
                'For Mesh 1: I_1(Σ R in mesh 1) - I_2(Mutual R between 1 & 2) = Σ V_sources in mesh 1.',
                'Matrix Form: [R] [I] = [V]. Solved via Cramer’s rule or matrix inversion.',
                'Supermesh: If an ideal current source is shared between two meshes, combine them into one large loop bypassing the current source branch.'
              ]
            },
            {
              heading: 'Nodal Voltage Analysis (KCL-based)',
              paragraphs: [
                'Select one reference datum node (Ground, V_ref = 0). Label non-reference node voltages V_1, V_2, ..., V_n.',
                'For Node 1: V_1(Σ conductances connected to node 1) - V_2(mutual conductances) = Σ incoming current sources.',
                'Supernode: If an ideal voltage source is connected between two non-reference nodes, enclose the source in a supernode.'
              ]
            },
            {
              heading: 'Star-Delta (Y - Δ) Transformation',
              paragraphs: [
                'Delta to Star (Δ -> Y): R_1 = (R_12 * R_31) / (R_12 + R_23 + R_31). (Product of adjacent sides divided by perimeter sum).',
                'Star to Delta (Y -> Δ): R_12 = R_1 + R_2 + (R_1 * R_2) / R_3. (Sum of two star resistors plus product divided by opposite third resistor).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Delta to Star (Δ -> Y) Transformation',
              latex: 'R_A = \\frac{R_B R_C}{R_A\' + R_B\' + R_C\'} = \\frac{R_{12} R_{31}}{R_{12} + R_{23} + R_{31}}',
              explanation: 'Transforms triangular delta loop into star neutral point.'
            },
            {
              title: 'Star to Delta (Y -> Δ) Transformation',
              latex: 'R_{12} = R_1 + R_2 + \\frac{R_1 R_2}{R_3}',
              explanation: 'Eliminates central neutral star connection into delta perimeter.'
            },
            {
              title: 'Voltage & Current Divider Rules',
              latex: 'V_1 = V_{\\text{total}} \\left( \\frac{R_1}{R_1 + R_2} \\right), \\quad I_1 = I_{\\text{total}} \\left( \\frac{R_2}{R_1 + R_2} \\right)',
              explanation: 'Voltage divides proportionally with resistance; current divides inversely.'
            }
          ],
          example: {
            problem: 'Three identical resistors of 30 Ω are connected in Delta. Find the equivalent resistance in each arm of the Star connection.',
            solutionSteps: [
              'Step 1: Given R_12 = R_23 = R_31 = 30 Ω.',
              'Step 2: Apply Delta to Star formula: R_1 = (R_12 * R_31) / (R_12 + R_23 + R_31).',
              'Step 3: R_1 = (30 * 30) / (30 + 30 + 30) = 900 / 90 = 10 Ω.',
              'Step 4: Since all delta arms are equal: R_Y = R_Δ / 3 = 30 / 3 = 10 Ω.'
            ],
            finalAnswer: 'Each arm of Star network = 10 Ω.'
          },
          engineeringApplication: {
            title: 'Electric Motor Star-Delta Soft Starters',
            description: 'High-power 3-phase industrial induction motors draw 6x rated current if started in Delta. Connecting windings in Star during starting drops line current to 1/3rd (since I_Y = I_Δ / 3), preventing power brownouts.',
            impact: 'Protects factory transformers and electrical distribution switchgear.'
          },
          commonMistakes: [
            {
              mistake: 'Using opposite resistor in numerator of Current Divider Rule.',
              correction: 'Current through branch 1 is I_1 = I_total * [R_2 / (R_1 + R_2)] (uses OPPOSITE resistance R_2 in numerator).',
              why: 'Larger resistance draws smaller current due to inverse Ohm’s proportionality.'
            }
          ],
          quickRevision: [
            'Mesh analysis uses KVL; Nodal analysis uses KCL.',
            'For equal resistors: R_Y = R_Δ / 3 and R_Δ = 3 * R_Y.',
            'Voltage divider: V_1 = V * R_1 / (R_1 + R_2).',
            'Current divider: I_1 = I * R_2 / (R_1 + R_2).'
          ],
          examFocus: {
            questionTypes: ['Find current in branch using Mesh or Nodal Analysis (7-8 Marks)', 'Derive Star-Delta conversion formulas (7 Marks)', 'Find equivalent resistance of Wheatstone bridge using Star-Delta (6-8 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Star-Delta Duality Theorem'],
            tip: 'If solving a 3-loop mesh network in exam, set up matrix [R][I]=[V] and solve using Cramer’s rule (determinants) for maximum step marks.'
          },
          visualType: 'star-delta',
          visualCaption: 'Star-Delta (Y - Δ) Resistor Network Transformation',
          visualExplanation: 'Diagram illustrating 3-terminal Star network connected to central neutral node and equivalent perimeter-connected Delta network.',
          estimatedMinutes: 30
        }
      ]
    },
    {
      id: 'ee-u2',
      unitNumber: 2,
      title: 'A.C. Circuits',
      hours: 8,
      mappedCOs: ['CO2'],
      learningObjectives: [
        'Define peak, average, and RMS values and compute form factor and peak factor.',
        'Represent sinusoidal quantities as rotating phasors in polar and rectangular forms.',
        'Calculate impedance Z, power factor cos φ, active power P, reactive power Q, and apparent power S.',
        'Analyze 3-phase balanced and unbalanced star/delta systems.'
      ],
      topics: [
        {
          id: 'ee-u2-t1',
          topicNumber: '2.1',
          title: 'AC Quantities: Peak, RMS, Average, Form Factor & Phasors',
          syllabusText: 'Signals and Waveforms: Common electrical signals and their waveform characteristics; AC Quantities: Instantaneous, peak, average, and RMS values of alternating signals; Waveform Factors: Peak factor and form factor of sinusoidal waves; Phase and Phasors: Phase difference, lagging, leading, in-phase quantities, and phasor representation in rectangular and polar forms.',
          unitId: 'ee-u2',
          subjectId: 'electrical-1',
          subjectCode: '100111',
          quickDefinition: 'RMS (Root Mean Square) is the effective DC-equivalent heating value of an AC wave: V_rms = V_m / √2 ≈ 0.707 V_m for a sine wave. Form Factor is the ratio of RMS to Average value (1.11 for sine wave). Phasors represent sinusoidal AC voltages/currents as rotating vectors in the complex plane.',
          whyItMatters: 'All commercial utility AC grids (230V / 50Hz in India) are specified exclusively in RMS values.',
          coreConcept: [
            {
              heading: 'RMS & Average Values of Pure Sinusoidal Wave',
              paragraphs: [
                'Instantaneous equation: v(t) = V_m sin(ωt) where ω = 2πf.',
                'Average Value (over positive half cycle): V_avg = (1/π) ∫_0^π V_m sin θ dθ = (2 V_m) / π ≈ 0.637 V_m.',
                'RMS Value (heating equivalent over full cycle): V_rms = sqrt[(1/2π) ∫_0^{2π} V_m^2 sin^2 θ dθ] = V_m / √2 ≈ 0.707 V_m.'
              ]
            },
            {
              heading: 'Form Factor & Peak (Crest) Factor',
              paragraphs: [
                'Form Factor (K_f) = V_rms / V_avg = (V_m / √2) / (2 V_m / π) = π / (2√2) ≈ 1.11.',
                'Peak Factor (K_p) = V_peak / V_rms = V_m / (V_m / √2) = √2 ≈ 1.414.'
              ]
            },
            {
              heading: 'Phase Difference & Phasor Representations',
              paragraphs: [
                'In pure Resistor: Voltage and Current are in phase (φ = 0).',
                'In pure Inductor: Current LAGS voltage by 90° (φ = -90°).',
                'In pure Capacitor: Current LEADS voltage by 90° (φ = +90°).',
                'Representation: Polar form V = |V| ∠ θ; Rectangular form V = a + j b.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Sinusoidal RMS & Average Values',
              latex: 'V_{\\text{rms}} = \\frac{V_m}{\\sqrt{2}} \\approx 0.707 V_m, \\quad V_{\\text{avg}} = \\frac{2V_m}{\\pi} \\approx 0.637 V_m',
              explanation: 'Effective DC heating equivalent and rectified average value.'
            },
            {
              title: 'Form Factor and Peak Factor',
              latex: 'K_f = \\frac{V_{\\text{rms}}}{V_{\\text{avg}}} = 1.11, \\quad K_p = \\frac{V_{\\text{peak}}}{V_{\\text{rms}}} = 1.414',
              explanation: 'Standard dimensionless wave shape ratios for pure sine waves.'
            }
          ],
          example: {
            problem: 'An AC voltage is given by v(t) = 141.4 sin(314 t - π/6) Volts. Calculate (i) Peak amplitude V_m, (ii) RMS voltage, (iii) Frequency f, and (iv) Phase angle.',
            solutionSteps: [
              'Step 1: Peak value V_m = 141.4 Volts.',
              'Step 2: RMS value V_rms = V_m / √2 = 141.4 / 1.414 = 100 Volts.',
              'Step 3: Angular frequency ω = 314 rad/s ==> f = ω / (2π) = 314 / (2 * 3.1416) = 50 Hz.',
              'Step 4: Phase angle φ = -π/6 rad = -30° (lags reference by 30°).'
            ],
            finalAnswer: '(i) V_m = 141.4 V, (ii) V_rms = 100 V, (iii) f = 50 Hz, (iv) Phase = -30° (lagging).'
          },
          engineeringApplication: {
            title: 'Electric Heating & Household 230V Appliance Sizing',
            description: 'A 230V household electric water heater produces heat P = V_rms^2 / R identically to a 230V DC battery, because RMS value represents exact thermal energy equivalence.',
            impact: 'Standardizes energy ratings and safety insulation for consumer appliances.'
          },
          commonMistakes: [
            {
              mistake: 'Calculating average value of a full sinusoidal cycle as non-zero.',
              correction: 'Average value over a FULL complete cycle is ZERO because positive and negative halves cancel. Average is evaluated over positive HALF cycle.',
              why: 'Symmetric alternating waveforms have zero net DC mean over a full period.'
            }
          ],
          quickRevision: [
            'RMS = Peak / √2 = 0.707 V_m.',
            'Average = 2 * Peak / π = 0.637 V_m.',
            'Form factor K_f = 1.11; Peak factor K_p = 1.414.',
            'Inductor: current lags by 90°; Capacitor: current leads by 90°.'
          ],
          examFocus: {
            questionTypes: ['Derive expressions for RMS and Average values and Form Factor of sine wave (7-8 Marks)', 'Numerical on finding RMS, average, form factor, frequency from sinusoidal equation (5 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['Effective Heating Value (Joule’s Law Integration)'],
            tip: 'In the RMS derivation, remember sin^2 θ = (1 - cos 2θ)/2 to easily evaluate the integral.'
          },
          visualType: 'ac-sine-rms',
          visualCaption: 'AC Sinusoidal Waveform: Peak, RMS (70.7%) and Average (63.7%) Levels',
          visualExplanation: 'Graph showing pure sine wave with horizontal indicator lines for Peak amplitude V_m, effective RMS value, and average half-cycle value.',
          estimatedMinutes: 25
        },
        {
          id: 'ee-u2-t2',
          topicNumber: '2.2',
          title: 'RLC Series Circuits, Power Triangle & 3-Phase Systems',
          syllabusText: 'AC Circuit Parameters: Impedance, admittance, power factor, and power triangle; Three-Phase Systems: Necessity, advantages, phase sequence, and balanced/unbalanced supply and load concepts.',
          unitId: 'ee-u2',
          subjectId: 'electrical-1',
          subjectCode: '100111',
          quickDefinition: 'In series RLC circuits, total Impedance is Z = R + j(X_L - X_C). The Power Triangle relates Real Active Power P (Watts), Reactive Power Q (VAR), and Apparent Power S (VA) via S = P + jQ, with Power Factor cos φ = P / S. 3-Phase systems supply constant rotational torque with 73% less copper conductor mass than single-phase.',
          whyItMatters: 'Industrial factories are penalized with heavy electric bill surcharges if their power factor drops below 0.95 lagging due to induction motor reactive loads.',
          coreConcept: [
            {
              heading: 'RLC Series Circuit & Impedance Triangle',
              paragraphs: [
                'Inductive Reactance: X_L = 2π f L; Capacitive Reactance: X_C = 1 / (2π f C).',
                'Total Impedance: Z = R + j(X_L - X_C) = |Z| ∠ φ, where |Z| = sqrt[R^2 + (X_L - X_C)^2] and tan φ = (X_L - X_C) / R.',
                'Resonance occurs when X_L = X_C: resonant frequency f_0 = 1 / (2π sqrt(LC)), impedance is minimum (Z = R), and current is maximum.'
              ]
            },
            {
              heading: 'The Power Triangle & Power Factor',
              paragraphs: [
                '1. Active (Real) Power: P = V I cos φ (Watts or kW). Does actual physical mechanical/thermal work.',
                '2. Reactive Power: Q = V I sin φ (VAR or kVAR). Sustains magnetic fields in motors and transformers.',
                '3. Apparent Power: S = V I (VA or kVA). Total capacity required from utility grid. Relation: S^2 = P^2 + Q^2.',
                'Power Factor (pf) = cos φ = P / S = R / |Z|. Lagging for inductive loads, leading for capacitive loads.'
              ]
            },
            {
              heading: '3-Phase Systems (Star vs Delta Connections)',
              paragraphs: [
                'Three equal voltages displaced in time by 120°: V_R = V_m sin ωt, V_Y = V_m sin(ωt - 120°), V_B = V_m sin(ωt - 240°).',
                '• Star (Y) Connection: Line Voltage V_L = √3 V_ph (Line voltage leads phase voltage by 30°); Line Current I_L = I_ph.',
                '• Delta (Δ) Connection: Line Voltage V_L = V_ph; Line Current I_L = √3 I_ph.',
                'Total 3-Phase Power in both connections: P = √3 V_L I_L cos φ = 3 V_ph I_ph cos φ.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Series RLC Impedance',
              latex: 'Z = R + j(X_L - X_C), \\quad |Z| = \\sqrt{R^2 + (\\omega L - \\frac{1}{\\omega C})^2}',
              explanation: 'Total complex impedance in series AC circuits.'
            },
            {
              title: 'Power Triangle Relation',
              latex: 'S = P + jQ \\implies |S| = \\sqrt{P^2 + Q^2}, \\quad \\text{pf} = \\cos\\phi = \\frac{P}{S}',
              explanation: 'Apparent power (VA), Active power (W), Reactive power (VAR).'
            },
            {
              title: '3-Phase Power Formulas',
              latex: 'P_{\\text{3\\phi}} = \\sqrt{3} V_L I_L \\cos\\phi = 3 V_{\\text{ph}} I_{\\text{ph}} \\cos\\phi',
              explanation: 'Total 3-phase real electrical power for both Star and Delta loads.'
            }
          ],
          example: {
            problem: 'A series RLC circuit with R = 30 Ω, L = 0.1 H, and C = 50 μF is connected across a 230V, 50Hz AC supply. Calculate (i) Impedance Z, (ii) Current I, (iii) Power factor cos φ, and (iv) Real Power P.',
            solutionSteps: [
              'Step 1: X_L = 2π f L = 2 * 3.1416 * 50 * 0.1 = 31.42 Ω.',
              'Step 2: X_C = 1 / (2π f C) = 1 / (2 * 3.1416 * 50 * 50 * 10^(-6)) = 1 / 0.0157 = 63.66 Ω.',
              'Step 3: Reactance X = X_L - X_C = 31.42 - 63.66 = -32.24 Ω (Capacitive).',
              'Step 4: |Z| = sqrt(R^2 + X^2) = sqrt(30^2 + (-32.24)^2) = sqrt(900 + 1039.4) = sqrt(1939.4) = 44.04 Ω.',
              'Step 5: Current I = V / |Z| = 230 / 44.04 = 5.22 A.',
              'Step 6: Power Factor cos φ = R / |Z| = 30 / 44.04 = 0.681 (Leading).',
              'Step 7: Real Power P = V * I * cos φ = 230 * 5.22 * 0.681 = 817.6 Watts.'
            ],
            finalAnswer: '(i) Z = 44.04 Ω, (ii) I = 5.22 A, (iii) pf = 0.681 leading, (iv) P = 817.6 W.'
          },
          engineeringApplication: {
            title: 'Power Factor Correction using Capacitor Banks in Sub-stations',
            description: 'Induction motors in steel mills draw lagging reactive current. Connecting shunt capacitor banks supplies leading reactive current Q_C, bringing overall power factor close to 1.0 (unity).',
            impact: 'Reduces line transmission losses (I^2 R) and eliminates utility billing penalties.'
          },
          commonMistakes: [
            {
              mistake: 'Using V_L = √3 V_ph for Delta connection.',
              correction: 'In Delta connection, V_L = V_ph and I_L = √3 I_ph. In Star connection, V_L = √3 V_ph and I_L = I_ph.',
              why: 'Delta terminals are directly connected across individual phase coils.'
            }
          ],
          quickRevision: [
            'Z = sqrt[R^2 + (X_L - X_C)^2].',
            'Resonance: f_0 = 1 / [2π sqrt(LC)].',
            'Power triangle: S = sqrt(P^2 + Q^2), pf = P/S = cos φ.',
            'Star: V_L = √3 V_ph, I_L = I_ph.',
            'Delta: V_L = V_ph, I_L = √3 I_ph.',
            '3-phase power: P = √3 V_L I_L cos φ.'
          ],
          examFocus: {
            questionTypes: ['Derive relation between Line and Phase quantities in Star and Delta systems (8 Marks)', 'Numerical on Series RLC circuit finding Z, I, pf, P, Q (7-8 Marks)', 'Explain Power Triangle and Power Factor improvement (6 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Star-Delta 3-Phase Phase-Vector Relations'],
            tip: 'Draw phasor diagrams showing V_R, V_Y, V_B separated by 120° and show V_RY = V_R - V_Y = √3 V_ph at 30°.'
          },
          visualType: 'power-triangle',
          visualCaption: 'AC Power Triangle: Real Power (P), Reactive Power (Q) & Apparent Power (S)',
          visualExplanation: 'Right-angled triangle diagram showing Active Power P on x-axis, Reactive Power Q on y-axis, and Apparent Power S as hypotenuse with phase angle φ.',
          estimatedMinutes: 30
        }
      ]
    },
    {
      id: 'ee-u3',
      unitNumber: 3,
      title: 'Basic Electrical Machines',
      hours: 8,
      mappedCOs: ['CO3'],
      learningObjectives: [
        'Understand electromagnetic induction, Faraday’s laws, self and mutual inductance.',
        'Explain construction, operating principle, and classifications of DC machines.',
        'Derive EMF equation of single-phase transformer and compute voltage regulation & efficiency.',
        'Explain working principles of single-phase and three-phase induction motors.'
      ],
      topics: [
        {
          id: 'ee-u3-t1',
          topicNumber: '3.1',
          title: 'Transformers: Working Principle, EMF Equation & Voltage Regulation',
          syllabusText: 'Single-Phase Transformers: Necessity, working principle, construction, and E.M.F. equation of transformers; Transformer Performance: Voltage ratio, current ratio, and voltage regulation with significance.',
          unitId: 'ee-u3',
          subjectId: 'electrical-1',
          subjectCode: '100111',
          quickDefinition: 'A transformer is a static electromagnetic device that steps AC voltage up or down at constant frequency via Mutual Induction. The induced EMF in primary and secondary windings is E_1 = 4.44 f N_1 Φ_m and E_2 = 4.44 f N_2 Φ_m.',
          whyItMatters: 'Enables high-voltage (400 kV) long-distance electricity transmission, stepping down to 230V for safe home consumption.',
          coreConcept: [
            {
              heading: 'Working Principle & Construction',
              paragraphs: [
                'Primary winding connected to AC source creates alternating magnetic flux Φ = Φ_m sin ωt in laminated silicon steel core.',
                'Flux links secondary winding through the core, inducing secondary EMF by Faraday’s law e_2 = -N_2 (dΦ/dt).',
                'Core type (windings surround limbs) vs Shell type (core surrounds windings).'
              ]
            },
            {
              heading: 'Derivation of EMF Equation',
              paragraphs: [
                'Flux Φ = Φ_m sin(2πft).',
                'Instantaneous induced EMF: e_1 = -N_1 (dΦ/dt) = -N_1 [2πf Φ_m cos(2πft)] = 2πf N_1 Φ_m sin(2πft - π/2).',
                'Maximum EMF E_{m1} = 2πf N_1 Φ_m.',
                'RMS Value: E_1 = E_{m1} / √2 = (2π / √2) f N_1 Φ_m = 4.44 f N_1 Φ_m.',
                'Transformation Ratio: K = E_2 / E_1 = N_2 / N_1 = I_1 / I_2 = V_2 / V_1.'
              ]
            },
            {
              heading: 'Voltage Regulation',
              paragraphs: [
                'Voltage Regulation is the fractional change in secondary terminal voltage from no-load (V_{2,NL} = E_2) to full-load (V_{2,FL}) expressed as a percentage:',
                '% Regulation = [(E_2 - V_2) / E_2] * 100 = [(I_2 R_{02} cos φ ± I_2 X_{02} sin φ) / E_2] * 100 (+ for lagging pf, - for leading pf).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Transformer EMF Equation',
              latex: 'E_1 = 4.44 f N_1 \\Phi_m, \\quad E_2 = 4.44 f N_2 \\Phi_m',
              explanation: 'Fundamental induced voltage relation where Φ_m = B_m * A.'
            },
            {
              title: 'Voltage Regulation Formula',
              latex: '\\% \\text{VR} = \\frac{E_2 - V_2}{E_2} \\times 100 = \\frac{I_2 (R_{02}\\cos\\phi_2 \\pm X_{02}\\sin\\phi_2)}{E_2} \\times 100',
              explanation: 'Measure of terminal voltage drop under load (+ for lag, - for lead).'
            }
          ],
          example: {
            problem: 'A 25 kVA, 2200/220 V, 50 Hz single-phase transformer has 40 turns on the secondary winding. Calculate (i) Number of primary turns N_1, (ii) Full-load primary and secondary currents, and (iii) Maximum core flux Φ_m.',
            solutionSteps: [
              'Step 1: Transformation ratio K = V_2 / V_1 = 220 / 2200 = 1/10.',
              'Step 2: N_1 = N_2 / K = 40 / (1/10) = 400 turns.',
              'Step 3: Full load primary current I_1 = Rating / V_1 = 25,000 / 2200 = 11.36 A.',
              'Step 4: Full load secondary current I_2 = Rating / V_2 = 25,000 / 220 = 113.64 A.',
              'Step 5: Apply EMF formula: E_2 = 4.44 f N_2 Φ_m ==> 220 = 4.44 * 50 * 40 * Φ_m = 8880 Φ_m.',
              'Step 6: Φ_m = 220 / 8880 = 0.02477 Wb = 24.77 mWb.'
            ],
            finalAnswer: '(i) N_1 = 400 turns, (ii) I_1 = 11.36 A, I_2 = 113.64 A, (iii) Φ_m = 24.77 mWb.'
          },
          engineeringApplication: {
            title: 'Grid Distribution Step-Down Transformers',
            description: 'Neighborhood pole-mounted oil-immersed distribution transformers step down 11 kV feeder voltage to 415V three-phase / 230V single-phase with 98%+ efficiency.',
            impact: 'Safely delivers electrical utility power to homes and university campuses.'
          },
          commonMistakes: [
            {
              mistake: 'Using 4.0 or 4.44 without knowing the derivation.',
              correction: '4.44 arises from 4 * Form Factor = 4 * 1.11 = 4.44.',
              why: 'Average induced EMF per cycle is 4 f N Φ_m; multiplying by form factor 1.11 gives RMS 4.44 f N Φ_m.'
            }
          ],
          quickRevision: [
            'E = 4.44 f N Φ_m.',
            'Transformation ratio: K = V_2/V_1 = N_2/N_1 = I_1/I_2.',
            'Transformer does not change frequency or power (ideal).',
            'Core losses: Hysteresis + Eddy current losses.'
          ],
          examFocus: {
            questionTypes: ['Derive EMF equation of single phase transformer (7-8 Marks)', 'Explain open-circuit and short-circuit test for efficiency & regulation (8 Marks)', 'Numerical on turns ratio, currents, and core flux (5 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Transformer EMF Derivation'],
            tip: 'State clearly that Φ = Φ_m sin ωt and dΦ/dt = ω Φ_m cos ωt when beginning the EMF proof.'
          },
          visualType: 'transformer-working',
          visualCaption: 'Single-Phase Transformer: Laminated Core, Flux Linkage & Windings',
          visualExplanation: 'Diagram depicting primary and secondary coils wound on laminated magnetic iron core, illustrating mutual flux Φ_m transfer.',
          estimatedMinutes: 30
        },
        {
          id: 'ee-u3-t2',
          topicNumber: '3.2',
          title: 'DC Machines & Induction Motors (Principles & Construction)',
          syllabusText: 'DC Machines: Principle of operation, construction, classification, and applications of DC machines; Induction Motors: Overview of single-phase and three-phase induction motors and their working principles; Motor Applications: Applications of induction motors and fractional horsepower motors.',
          unitId: 'ee-u3',
          subjectId: 'electrical-1',
          subjectCode: '100111',
          quickDefinition: 'DC Generators convert mechanical power to DC via Fleming’s Right Hand Rule, while DC Motors produce torque via Lorentz force F = B I L (Fleming’s Left Hand Rule). 3-Phase Induction Motors operate on rotating magnetic fields (RMF) dragging a squirrel-cage rotor at asynchronous speed N_r < N_s (Slip s = (N_s - N_r)/N_s).',
          whyItMatters: 'Induction motors drive >60% of all global industrial electricity consumption (pumps, fans, conveyor belts, compressors, electric trains).',
          coreConcept: [
            {
              heading: 'DC Machine Construction & Back EMF',
              paragraphs: [
                'Main Parts: Stator (Yoke frame, field poles, field windings), Rotor (Armature core, armature winding, Commutator, Carbon brushes).',
                'DC Generator EMF Equation: E_g = (P Φ Z N) / (60 A) where P = poles, Φ = flux/pole, Z = total armature conductors, N = RPM, A = parallel paths (A = 2 for Wave winding, A = P for Lap winding).',
                'DC Motor Back EMF: E_b = V - I_a R_a. Back EMF regulates armature current automatically with mechanical load.'
              ]
            },
            {
              heading: 'Three-Phase Induction Motor (RMF & Slip)',
              paragraphs: [
                'Stator windings supplied with 3-phase currents create a constant-magnitude Rotating Magnetic Field (RMF) spinning at Synchronous Speed N_s = (120 f) / P.',
                'The spinning field cuts rotor conductors, inducing rotor currents. By Lenz’s law, the rotor chases the RMF.',
                'Rotor Speed N_r is always less than N_s. Slip s = (N_s - N_r) / N_s (typically 2% to 5% at full load).'
              ]
            },
            {
              heading: 'Fractional Horsepower (FHP) Single-Phase Motors',
              paragraphs: [
                'Single-phase induction motor has pulsating (not rotating) field and zero starting torque (Double Field Revolving Theory).',
                'Split-phase / Capacitor-start motors use an auxiliary winding with a series capacitor to create a 90° phase shift for starting torque (used in ceiling fans, refrigerators, washing machines).'
              ]
            }
          ],
          formulas: [
            {
              title: 'DC Generator / Motor EMF Equation',
              latex: 'E = \\frac{P \\Phi Z N}{60 A} \\quad \\begin{cases} A = 2 & \\text{for Wave winding} \\\\ A = P & \\text{for Lap winding} \\end{cases}',
              explanation: 'Induced voltage in rotating armature winding.'
            },
            {
              title: 'Synchronous Speed & Rotor Slip',
              latex: 'N_s = \\frac{120 f}{P} \\text{ RPM}, \\quad s = \\frac{N_s - N_r}{N_s} \\implies N_r = N_s(1 - s)',
              explanation: 'Rotating field speed and relative asynchronous rotor slip.'
            }
          ],
          example: {
            problem: 'A 4-pole, 3-phase induction motor is supplied from a 50 Hz AC source. If the full-load slip is 4%, calculate (i) Synchronous speed N_s, (ii) Rotor speed N_r, and (iii) Frequency of rotor induced EMF f_r.',
            solutionSteps: [
              'Step 1: Poles P = 4, f = 50 Hz, Slip s = 0.04 (4%).',
              'Step 2: Synchronous speed N_s = (120 * f) / P = (120 * 50) / 4 = 6000 / 4 = 1500 RPM.',
              'Step 3: Rotor speed N_r = N_s (1 - s) = 1500 * (1 - 0.04) = 1500 * 0.96 = 1440 RPM.',
              'Step 4: Rotor frequency f_r = s * f = 0.04 * 50 = 2 Hz.'
            ],
            finalAnswer: '(i) N_s = 1500 RPM, (ii) N_r = 1440 RPM, (iii) f_r = 2 Hz.'
          },
          engineeringApplication: {
            title: 'Electric Locomotive & Metro Train Traction Motors',
            description: 'Modern Indian Railways Vande Bharat and Metro trains utilize 3-phase squirrel cage induction motors driven by variable frequency drives (VFD) for regenerative braking and robust maintenance-free operation.',
            impact: 'Recovers kinetic energy during braking and returns electricity to overhead catenary wires.'
          },
          commonMistakes: [
            {
              mistake: 'Assuming a 3-phase induction motor can run at synchronous speed N_s.',
              correction: 'The rotor CAN NEVER reach synchronous speed N_s. If N_r = N_s, relative cutting of flux becomes zero, inducing zero rotor current and zero torque.',
              why: 'Relative motion between rotor conductors and RMF is mandatory to sustain torque.'
            }
          ],
          quickRevision: [
            'DC EMF: E = (P Φ Z N)/(60 A) [Lap: A=P, Wave: A=2].',
            'Synchronous speed: N_s = 120 f / P.',
            'Slip: s = (N_s - N_r) / N_s; Rotor frequency f_r = s * f.',
            'Single phase induction motor needs capacitor start to produce rotating field.'
          ],
          examFocus: {
            questionTypes: ['Derive EMF equation of DC Generator (7 Marks)', 'Explain production of Rotating Magnetic Field (RMF) in 3-phase induction motor (8 Marks)', 'Numerical on 3-phase induction motor calculating N_s, N_r, s, and f_r (5 Marks)'],
            likelyMarks: '8 Marks',
            keyTheorems: ['Ferrari’s Principle of Rotating Magnetic Field', 'Double Field Revolving Theory'],
            tip: 'For RMF derivation, show that the resultant magnetic flux magnitude is constant at (3/2) Φ_m at all time instants (ωt = 0°, 60°, 120°).'
          },
          visualType: 'induction-motor-rmf',
          visualCaption: 'Three-Phase Stator Rotating Magnetic Field & Rotor Torque',
          visualExplanation: 'Diagram illustrating how 120° displaced 3-phase stator currents produce a constant-amplitude rotating flux vector dragging the squirrel cage rotor.',
          estimatedMinutes: 30
        }
      ]
    },
    {
      id: 'ee-u4',
      unitNumber: 4,
      title: 'Semiconductor Devices & Transistors',
      hours: 8,
      mappedCOs: ['CO4'],
      learningObjectives: [
        'Analyze P-N junction diode forward and reverse bias I-V characteristics.',
        'Compare Half-Wave and Full-Wave rectifiers and Zener diode voltage regulators.',
        'Understand BJT operation in Common Emitter (CE) configuration as amplifier and switch.'
      ],
      topics: [
        {
          id: 'ee-u4-t1',
          topicNumber: '4.1',
          title: 'P-N Diode, Rectifiers (Half/Full Wave) & Zener Voltage Regulator',
          syllabusText: 'Semiconductor Materials: Intrinsic and extrinsic semiconductor types; p-n Junction Diode: Construction, characteristics, forward bias, and reverse bias operation; Diode Behavior: Temperature effects and breakdown mechanisms in diodes; Diode Applications: Half-wave rectifier, full-wave rectifier, filters, and Zener diode as voltage regulator.',
          unitId: 'ee-u4',
          subjectId: 'electrical-1',
          subjectCode: '100111',
          quickDefinition: 'A P-N junction diode allows unidirectional current flow (forward knee ~0.7V for Si). Rectifiers convert AC to pulsating DC: Half-Wave (efficiency 40.6%, Ripple factor 1.21) and Full-Wave Bridge (efficiency 81.2%, Ripple factor 0.482). Zener Diodes operate in reverse breakdown to maintain a constant regulated output voltage V_Z.',
          whyItMatters: 'Every DC electronic device (laptop chargers, phone adapters, TV power supplies) uses bridge rectifiers and voltage regulators.',
          coreConcept: [
            {
              heading: 'P-N Diode I-V Characteristics & Breakdown',
              paragraphs: [
                'Forward Bias: P connected to positive, N to negative. Depletion width narrows, barrier potential overcome at cut-in voltage V_γ (0.7V for Si, 0.3V for Ge). Current rises exponentially: I = I_0 [exp(V / η V_T) - 1].',
                'Reverse Bias: Depletion layer widens. Only tiny reverse saturation current I_0 flows until reverse breakdown voltage V_BR.',
                'Breakdown Mechanisms: (1) Zener Breakdown: In heavily doped junctions with narrow depletion layer (<10 nm), intense electric field (>10^6 V/m) directly ruptures covalent bonds (occurs < 6V). (2) Avalanche Breakdown: In lightly doped junctions, high reverse voltage accelerates minority carriers which collide and ionize lattice atoms via impact multiplication (occurs > 6V).'
              ]
            },
            {
              heading: 'Rectifiers & Performance Metrics',
              paragraphs: [
                '• Half-Wave Rectifier: 1 diode. Conducts only during positive half cycle. Efficiency η_max = 40.6%, Ripple factor γ = 1.21, PIV = V_m, Output frequency = f_in.',
                '• Center-Tapped Full-Wave: 2 diodes. η_max = 81.2%, Ripple factor γ = 0.482, PIV = 2 V_m, Output frequency = 2 f_in.',
                '• Bridge Rectifier: 4 diodes. η_max = 81.2%, Ripple factor γ = 0.482, PIV = V_m (does not require bulky center-tapped transformer).'
              ]
            },
            {
              heading: 'Zener Diode as Voltage Regulator',
              paragraphs: [
                'Connected in parallel with load in REVERSE BIAS with series current-limiting resistor R_s.',
                'When input voltage V_in or load current I_L fluctuates, Zener diode absorbs varying current (I_s = I_Z + I_L) while holding terminal voltage constant at breakdown voltage V_Z.',
                'Design: R_s = (V_{in,min} - V_Z) / I_{L,max}.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Rectifier Ripple Factor & Efficiency',
              latex: '\\gamma = \\sqrt{\\left( \\frac{V_{\\text{rms}}}{V_{\\text{dc}}} \\right)^2 - 1}, \\quad \\eta = \\frac{P_{\\text{dc}}}{P_{\\text{ac}}}',
              explanation: 'Measure of residual AC ripple in rectified DC output.'
            },
            {
              title: 'Zener Series Resistor Formula',
              latex: 'R_s = \\frac{V_{\\text{in}} - V_Z}{I_Z + I_L}',
              explanation: 'Drops excess input voltage while sustaining Zener breakdown current.'
            }
          ],
          example: {
            problem: 'A bridge rectifier supplies a load resistance R_L = 1 kΩ from a 230V, 50Hz step-down transformer secondary voltage of 24V RMS. Assuming ideal diodes, calculate (i) DC output voltage V_dc, (ii) DC load current I_dc, (iii) Ripple frequency, and (iv) Rectification efficiency.',
            solutionSteps: [
              'Step 1: Secondary RMS voltage V_rms = 24 V ==> Peak voltage V_m = 24 * √2 = 33.94 V.',
              'Step 2: DC output voltage for full wave: V_dc = (2 V_m) / π = (2 * 33.94) / 3.1416 = 21.61 V.',
              'Step 3: DC load current I_dc = V_dc / R_L = 21.61 / 1000 = 21.61 mA.',
              'Step 4: Ripple frequency = 2 * f_in = 2 * 50 = 100 Hz.',
              'Step 5: Theoretical maximum rectification efficiency = 81.2%.'
            ],
            finalAnswer: '(i) V_dc = 21.61 V, (ii) I_dc = 21.61 mA, (iii) f_ripple = 100 Hz, (iv) η = 81.2%.'
          },
          engineeringApplication: {
            title: 'USB-C Fast Charger Power Supply Regulation',
            description: 'Modern smartphone 65W GaN fast chargers use high-frequency bridge rectification and feedback Zener voltage references to deliver tightly regulated 5V, 9V, 15V, and 20V USB-PD power rails.',
            impact: 'Charges smartphones safely from 0% to 80% in 30 minutes.'
          },
          commonMistakes: [
            {
              mistake: 'Connecting Zener diode in forward bias for voltage regulation.',
              correction: 'Zener diode MUST be connected in REVERSE BIAS across the load to utilize its constant breakdown voltage V_Z.',
              why: 'In forward bias, it acts as an ordinary diode with 0.7V drop.'
            }
          ],
          quickRevision: [
            'Si diode cut-in: 0.7V; Ge: 0.3V.',
            'Zener breakdown (<6V) vs Avalanche breakdown (>6V).',
            'Half-wave: η = 40.6%, γ = 1.21; Full-wave: η = 81.2%, γ = 0.482.',
            'Bridge rectifier PIV = V_m; Center-tapped PIV = 2 V_m.',
            'Zener regulator holds V_out = V_Z in reverse bias.'
          ],
          examFocus: {
            questionTypes: ['Explain working of Full-Wave Bridge Rectifier with input/output waveforms and derive efficiency and ripple factor (8 Marks)', 'Explain Zener Diode as shunt voltage regulator with circuit and load/line regulation (7-8 Marks)', 'Differentiate between Zener and Avalanche breakdown (5 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Rectifier Fourier Series Derivation of Ripple Factor'],
            tip: 'Draw all four waveforms: Input AC, Diode D1-D2 conduction, Diode D3-D4 conduction, and pulsating DC output.'
          },
          visualType: 'bridge-rectifier',
          visualCaption: 'Full-Wave Bridge Rectifier Circuit & Smooth Filtered DC Waveform',
          visualExplanation: 'Circuit diagram showing 4-diode diamond bridge conducting on alternating half cycles, with capacitor smoothing output ripple.',
          estimatedMinutes: 30
        },
        {
          id: 'ee-u4-t2',
          topicNumber: '4.2',
          title: 'Bipolar Junction Transistor (BJT): Operation, CE Amplifier & Switch',
          syllabusText: 'BJT Fundamentals: PNP and NPN transistors, construction, and operating principles; BJT Applications: CE configuration as amplifier and transistor as a switch.',
          unitId: 'ee-u4',
          subjectId: 'electrical-1',
          subjectCode: '100111',
          quickDefinition: 'A Bipolar Junction Transistor (BJT) is a 3-terminal current-controlled device (Emitter, Base, Collector) with two junctions (J_E, J_C). In Common Emitter (CE) Active mode, small base current I_B controls large collector current I_C = β I_B, providing high voltage and power amplification.',
          whyItMatters: 'BJTs and their FET successors form the building blocks of analog audio amplifiers, operational amplifiers, and digital logic switching gates.',
          coreConcept: [
            {
              heading: 'BJT Structure & Operating Regions',
              paragraphs: [
                'NPN Transistor: Thin, lightly doped P-type Base sandwiched between heavily doped N-type Emitter and moderately doped large N-type Collector.',
                'Current relation: I_E = I_B + I_C (since base is thin, ~98% of injected electrons diffuse straight into collector).',
                'Operating Modes:',
                '• Active Mode (Amplifier): Emitter junction Forward-biased, Collector junction Reverse-biased.',
                '• Saturation Mode (Switch ON): Both junctions Forward-biased (V_CE ≈ 0.2V).',
                '• Cut-off Mode (Switch OFF): Both junctions Reverse-biased (I_B = 0, I_C ≈ 0, V_CE = V_CC).'
              ]
            },
            {
              heading: 'Current Gain Parameters & CE Configuration',
              paragraphs: [
                'Common Base current gain: α = I_C / I_E (typically 0.95 to 0.998).',
                'Common Emitter current gain: β = I_C / I_B = α / (1 - α) (typically 50 to 300).',
                'CE Output Characteristics plot I_C vs V_CE for constant values of I_B.'
              ]
            },
            {
              heading: 'BJT Applications: CE Amplifier & Switch',
              paragraphs: [
                'CE Amplifier: Small input AC voltage v_in applied to base produces 180° phase-inverted amplified voltage v_out = -A_v v_in at collector (Voltage Gain A_v = -g_m R_C).',
                'Transistor as Switch: Driving I_B = 0 puts transistor in Cut-off (Open switch, load unpowered); driving high I_B >= I_{C,sat}/β forces transistor into Saturation (Closed switch, load fully powered).'
              ]
            }
          ],
          formulas: [
            {
              title: 'BJT Current Relations',
              latex: 'I_E = I_B + I_C, \\quad I_C = \\beta I_B + I_{CEO}, \\quad \\beta = \\frac{\\alpha}{1 - \\alpha}',
              explanation: 'Current amplification relationships in BJT.'
            },
            {
              title: 'CE Amplifier Voltage Gain',
              latex: 'A_v = \\frac{v_{\\text{out}}}{v_{\\text{in}}} = -\\beta \\frac{R_C}{r_{\\text{in}}} \\quad (180^\\circ \\text{ phase shift})',
              explanation: 'Negative sign indicates phase inversion between input and output.'
            }
          ],
          example: {
            problem: 'A transistor in Common Emitter configuration has β = 100. If the base current is I_B = 25 μA, calculate (i) Collector current I_C, (ii) Emitter current I_E, and (iii) Alpha parameter α.',
            solutionSteps: [
              'Step 1: I_C = β * I_B = 100 * (25 * 10^(-6) A) = 2.5 * 10^(-3) A = 2.5 mA.',
              'Step 2: I_E = I_B + I_C = 0.025 mA + 2.5 mA = 2.525 mA.',
              'Step 3: α = β / (1 + β) = 100 / (1 + 100) = 100 / 101 = 0.9901.'
            ],
            finalAnswer: '(i) I_C = 2.5 mA, (ii) I_E = 2.525 mA, (iii) α = 0.9901.'
          },
          engineeringApplication: {
            title: 'Arduino Microcontroller Relay Driver Switch',
            description: 'Microcontroller GPIO pins can only source 20 mA at 5V, insufficient to trigger 12V/500mA industrial relays. An NPN transistor (2N2222) acts as a saturated switch triggered by the GPIO base pin.',
            impact: 'Enables low-voltage microcontrollers to safely switch high-power home appliances.'
          },
          commonMistakes: [
            {
              mistake: 'Assuming the emitter and collector terminals of a BJT can be swapped symmetrically.',
              correction: 'Emitter is HEAVILY doped to inject maximum carriers, while Collector is LARGER in physical area to dissipate heat. Swapping them yields terrible gain β < 2.',
              why: 'Asymmetric doping and physical geometries prevent interchangeability.'
            }
          ],
          quickRevision: [
            'I_E = I_B + I_C.',
            'β = I_C / I_B = α / (1 - α).',
            'Active mode: J_E forward, J_C reverse (Amplifier).',
            'Saturation: both forward (Switch ON, V_CE ≈ 0.2V).',
            'Cut-off: both reverse (Switch OFF, I_C = 0).',
            'CE amplifier produces 180° phase inversion.'
          ],
          examFocus: {
            questionTypes: ['Explain working of NPN transistor in CE configuration with input/output characteristics (8 Marks)', 'Explain transistor as a switch with circuit diagram (5 Marks)', 'Derive relation between α and β (4-5 Marks)'],
            likelyMarks: '8 Marks',
            keyTheorems: ['Ebers-Moll Transistor Model'],
            tip: 'Draw the CE output characteristic graph clearly labeling Saturation Region, Active Region, Cut-off Region, and Breakdown.'
          },
          visualType: 'bjt-amplifier',
          visualCaption: 'BJT Common Emitter Amplifier Circuit & Output Phase Inversion',
          visualExplanation: 'Schematic illustrating NPN transistor in CE mode with base coupling capacitor, collector load R_C, and 180° inverted amplified sine wave output.',
          estimatedMinutes: 30
        }
      ]
    },
    {
      id: 'ee-u5',
      unitNumber: 5,
      title: 'Digital & Analog Electronics, Measurement & Safety',
      hours: 10,
      mappedCOs: ['CO5'],
      learningObjectives: [
        'Perform number system conversions (Binary, Octal, Hexadecimal) and Boolean algebra.',
        'Construct logic gates (AND, OR, NOT, XOR) using Universal NAND/NOR gates.',
        'Understand seven-segment display decoding, IC 7805/7912 regulators, and CRO operation.',
        'Explain power distribution layout, sensors, and electrical safety practices (Fuse, MCB, Earthing).'
      ],
      topics: [
        {
          id: 'ee-u5-t1',
          topicNumber: '5.1',
          title: 'Number Systems, Logic Gates & Universal NAND/NOR Implementation',
          syllabusText: 'Binary, octal, and hexadecimal number systems; binary addition and basic number operations; Basic logic gates, universal gates, and Boolean algebra; LEDs, seven-segment display and truth table; overview of digital and analog integrated circuits.',
          unitId: 'ee-u5',
          subjectId: 'electrical-1',
          subjectCode: '100111',
          quickDefinition: 'Computers represent data in Binary (base 2), Octal (base 8), and Hexadecimal (base 16). Boolean algebra simplifies logic expressions using De Morgan’s Laws. NAND and NOR are Universal Gates because ANY Boolean logic function can be constructed using only NAND or only NOR gates.',
          whyItMatters: 'The entire digital world (CPUs, GPUs, memory, ALUs) is constructed from billions of interconnected CMOS universal logic gates.',
          coreConcept: [
            {
              heading: 'Number Systems & Conversions',
              paragraphs: [
                '• Decimal (Base 10): Digits 0–9.',
                '• Binary (Base 2): Bits 0 and 1.',
                '• Octal (Base 8): Digits 0–7 (each octal digit = 3 binary bits).',
                '• Hexadecimal (Base 16): Digits 0–9, A–F (each hex digit = 4 binary bits).',
                'Conversion trick: Binary 11010111_2 = Group in 4s -> (1101)(0111)_2 = D7_{16}.'
              ]
            },
            {
              heading: 'Logic Gates & De Morgan’s Theorems',
              paragraphs: [
                'Basic Gates: AND (Y = A • B), OR (Y = A + B), NOT (Y = A’).',
                'Universal Gates: NAND (Y = (A • B)’), NOR (Y = (A + B)’).',
                'Exclusive Gates: XOR (Y = A’B + AB’), XNOR (Y = AB + A’B’).',
                'De Morgan’s First Theorem: (A + B)’ = A’ • B’ (NOR equals Bubbled AND).',
                'De Morgan’s Second Theorem: (A • B)’ = A’ + B’ (NAND equals Bubbled OR).'
              ]
            },
            {
              heading: 'Seven-Segment Display & Decoder Truth Table',
              paragraphs: [
                'Array of 7 LED segments labeled a, b, c, d, e, f, g (plus decimal point dp) configured as Common Anode or Common Cathode.',
                'BCD to 7-Segment Decoder (e.g. IC 7447) maps 4-bit binary input (0000 to 1001) into illuminated segments displaying decimal numerals 0 to 9.'
              ]
            }
          ],
          formulas: [
            {
              title: 'De Morgan’s Boolean Identities',
              latex: '\\overline{A + B} = \\bar{A} \\cdot \\bar{B}, \\quad \\overline{A \\cdot B} = \\bar{A} + \\bar{B}',
              explanation: 'Fundamental duality rules for digital logic simplification.'
            },
            {
              title: 'XOR Logic Function',
              latex: 'Y = A \\oplus B = \\bar{A}B + A\\bar{B}',
              explanation: 'Output is 1 when odd number of inputs are high (parity checker & half adder sum).'
            }
          ],
          example: {
            problem: 'Construct an OR gate and an AND gate using only 2-input NAND gates.',
            solutionSteps: [
              'Step 1: To make NOT gate from NAND: Tie both inputs together: (A • A)’ = A’.',
              'Step 2: To make AND gate: Take NAND output (A • B)’ and pass through a NAND-inverter: [(A • B)’]’ = A • B (Requires 2 NAND gates).',
              'Step 3: To make OR gate: Invert inputs A and B using NAND inverters to get A’ and B’, then pass into a third NAND gate: (A’ • B’)’ = (A’)’ + (B’)’ = A + B by De Morgan’s law! (Requires 3 NAND gates).'
            ],
            finalAnswer: 'AND needs 2 NAND gates; OR needs 3 NAND gates.'
          },
          engineeringApplication: {
            title: 'Arithmetic Logic Unit (ALU) Binary Full Adders',
            description: 'ALUs inside Intel Core and ARM processors perform 64-bit integer addition using cascading full adders built from XOR, AND, and OR gates at billions of clock cycles per second.',
            impact: 'Executes foundational computation for operating systems and AI models.'
          },
          commonMistakes: [
            {
              mistake: 'Writing (A + B)’ = A’ + B’ without changing the operator.',
              correction: 'De Morgan’s law ALWAYS changes the operator: OR (+) becomes AND (•), and AND (•) becomes OR (+).',
              why: 'Break the line, change the sign.'
            }
          ],
          quickRevision: [
            'Hex 1 digit = 4 bits; Octal 1 digit = 3 bits.',
            'NAND and NOR are universal gates.',
            '(A + B)’ = A’ • B’; (A • B)’ = A’ + B’.',
            'XOR: Y = A’B + AB’ (Half Adder Sum).',
            'Seven-segment display uses segments a through g.'
          ],
          examFocus: {
            questionTypes: ['Realize AND, OR, NOT, XOR gates using NAND gates only (8 Marks)', 'State and prove De Morgan’s Theorems with truth tables (6-7 Marks)', 'Binary to Hexadecimal / Octal conversion and 2’s complement subtraction (5 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['De Morgan’s Laws', 'Universal Logic Completeness Theorem'],
            tip: 'Memorize the minimum number of NAND gates needed: NOT (1), AND (2), OR (3), NOR (4), XOR (4), XNOR (5).'
          },
          visualType: 'logic-gates',
          visualCaption: 'Universal NAND Logic Gate Realizations & Seven-Segment Decoder',
          visualExplanation: 'Diagram illustrating how interconnected NAND gates synthesize standard NOT, AND, OR, and XOR gates alongside a 7-segment display pinout.',
          estimatedMinutes: 25
        },
        {
          id: 'ee-u5-t2',
          topicNumber: '5.2',
          title: 'IC Regulators (7805/7912), CRO, Multimeter & Electrical Safety / Earthing',
          syllabusText: 'Functions and applications of IC 7805 and IC 7912; basic features and applications of multimeter and CRO; Fundamentals, types, and uses of sensors and transducers; generation, transmission, and distribution of electrical power; Safe handling practices, prevention of electrical hazards; functions and applications of fuse, MCB, and MCCB; Purpose, importance, and methods of earthing systems.',
          unitId: 'ee-u5',
          subjectId: 'electrical-1',
          subjectCode: '100111',
          quickDefinition: 'IC 7805 provides fixed +5V DC regulation, while IC 7912 provides -12V DC regulation. A Cathode Ray Oscilloscope (CRO) visually displays waveform voltage amplitude, frequency, and phase. Electrical safety utilizes Fuses, Miniature Circuit Breakers (MCB) for overload/short-circuit protection, and Pipe/Plate Earthing to safely divert fault currents into ground.',
          whyItMatters: 'Guarantees human life safety against lethal electric shocks and prevents fire hazards in residential and industrial high-voltage facilities.',
          coreConcept: [
            {
              heading: 'Voltage Regulator ICs (78XX and 79XX Series)',
              paragraphs: [
                '• IC 7805: 3-pin positive linear voltage regulator. Pin 1 = Input (7V–25V DC), Pin 2 = Ground, Pin 3 = Output (Regulated +5.0V DC up to 1.5A).',
                '• IC 7912: 3-pin negative voltage regulator providing regulated -12.0V DC. Pin 1 = Ground, Pin 2 = Input, Pin 3 = Output (-12V).'
              ]
            },
            {
              heading: 'Measurement Instruments: CRO & Digital Multimeter (DMM)',
              paragraphs: [
                '• CRO (Cathode Ray Oscilloscope): Visualizes time-varying signals. Electron gun shoots beam deflected by horizontal (timebase) and vertical (amplitude) deflection plates onto phosphor screen. Measures V_p-p, time period T, frequency f = 1/T, and phase shift via Lissajous figures.',
                '• Multimeter: Measures DC/AC voltage, DC/AC current, resistance, diode continuity, and transistor h_FE.'
              ]
            },
            {
              heading: 'Protective Devices & Earthing Systems',
              paragraphs: [
                '• Fuse: Thin wire of low melting point (lead-tin alloy) that melts by Joule heating (I^2 R) during overcurrent. One-time use.',
                '• MCB (Miniature Circuit Breaker): Automatically trips using a bimetallic strip (thermal overload) and electromagnetic solenoid (instantaneous short circuit). Resettable, rating up to 63A.',
                '• MCCB (Molded Case Circuit Breaker): Heavy industrial circuit breaker rated up to 1000A+ with adjustable trip thresholds.',
                '• Earthing / Grounding: Connecting metallic non-current-carrying parts of equipment to earth electrode (Pipe or Plate earthing with salt/charcoal surrounding) with low ground resistance (< 1 to 5 Ω) to blow the fuse/MCB instantly when live wire faults to casing, preventing fatal electric shocks.'
              ]
            }
          ],
          formulas: [
            {
              title: 'CRO Signal Frequency',
              latex: 'f = \\frac{1}{T} = \\frac{1}{\\text{Time/Div} \\times \\text{Number of Horizontal Divisions}}',
              explanation: 'Calculates signal frequency from observed oscilloscope timebase grid.'
            },
            {
              title: 'Lissajous Phase Difference',
              latex: '\\sin\\phi = \\frac{Y_1}{Y_2} \\implies \\phi = \\sin^{-1}\\left( \\frac{Y_1}{Y_2} \\right)',
              explanation: 'Determines phase angle between two equal-frequency AC signals from elliptical CRO display.'
            }
          ],
          example: {
            problem: 'On a CRO screen, a sinusoidal waveform occupies 4 vertical divisions peak-to-peak with a volts/div setting of 5V/div, and one complete cycle occupies 5 horizontal divisions with a time/div setting of 2 ms/div. Calculate (i) Peak-to-peak voltage V_p-p, (ii) RMS voltage, (iii) Time period T, and (iv) Frequency f.',
            solutionSteps: [
              'Step 1: V_p-p = (4 divisions) * (5 V/div) = 20 Volts.',
              'Step 2: Peak amplitude V_m = V_p-p / 2 = 10 V ==> V_rms = 10 / √2 = 7.07 Volts.',
              'Step 3: Time period T = (5 divisions) * (2 ms/div) = 10 ms = 10 * 10^(-3) s = 0.01 s.',
              'Step 4: Frequency f = 1 / T = 1 / 0.01 = 100 Hz.'
            ],
            finalAnswer: '(i) V_p-p = 20 V, (ii) V_rms = 7.07 V, (iii) T = 10 ms, (iv) f = 100 Hz.'
          },
          engineeringApplication: {
            title: 'Residual Current Circuit Breaker (RCCB / GFCI) Life Protection',
            description: 'RCCBs monitor the vector sum of live and neutral currents using a differential core transformer. If a human touches a live wire and 30 mA leaks to ground, the RCCB disconnects power in < 30 milliseconds, preventing cardiac ventricular fibrillation.',
            impact: 'Mandatory standard preventing electrocution in smart homes and laboratories.'
          },
          commonMistakes: [
            {
              mistake: 'Confusing Neutral and Earth wires.',
              correction: 'Neutral carries returning operating current back to the substation transformer. Earth is a DEDICATED SAFETY WIRE carrying zero current normally, only conducting during ground faults.',
              why: 'Connecting earth as a neutral can energize equipment metal chassis.'
            }
          ],
          quickRevision: [
            'IC 7805 = +5V; IC 7912 = -12V linear regulator.',
            'CRO measures V_p-p, Time period T, frequency f = 1/T.',
            'Lissajous ellipse: sin φ = Y_1/Y_2.',
            'MCB has dual trip: bimetallic (thermal overload) + solenoid (short-circuit).',
            'Earthing ensures low resistance (<5Ω) path to protect human life.'
          ],
          examFocus: {
            questionTypes: ['Explain working of CRO with block diagram (Cathode Ray Tube, deflection plates) (8 Marks)', 'Explain purpose, importance and methods of Earthing (Pipe and Plate earthing) (7-8 Marks)', 'Explain IC 7805 voltage regulator pin diagram and applications (5 Marks)', 'Differentiate between Fuse, MCB, and MCCB (5 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Principle of Cathode Ray Oscilloscope', 'Safety Grounding Standards (IS 3043)'],
            tip: 'Draw the pipe earthing diagram showing GI pipe, charcoal, salt layers, funnel, and concrete pit.'
          },
          visualType: 'cro-earthing',
          visualCaption: 'CRO Electron Gun Deflection System & Pipe Earthing Pit Cross-Section',
          visualExplanation: 'Diagram illustrating CRO CRT electron beam deflection on screen alongside residential pipe earthing pit with salt and charcoal layers.',
          estimatedMinutes: 30
        }
      ]
    }
  ]
};
