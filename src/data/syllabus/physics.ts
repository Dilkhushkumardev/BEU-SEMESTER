import type { Subject } from '../../types';

export const physicsSubject: Subject = {
  id: 'physics-1',
  code: '100104',
  name: 'Engineering Physics',
  shortName: 'Physics',
  type: 'theory',
  credits: 3,
  lectureHours: 3,
  tutorialHours: 0,
  practicalHours: 0,
  totalHours: 42,
  semester: 1,
  group: 'Group-A (CSE & Allied Branches)',
  description: 'Covers physical wave optics, laser systems & optical fibers, electrodynamics & Maxwell equations, quantum mechanics, and solid-state semiconductors & nanomaterials for modern engineering.',
  iconName: 'Atom',
  accentColor: '#06b6d4',
  courseOutcomes: [
    { code: 'CO1', statement: 'Apply the concepts of wave optics phenomena in various engineering fields.' },
    { code: 'CO2', statement: 'Apply the concepts of laser operation and fiber optic propagation in engineering applications.' },
    { code: 'CO3', statement: 'Apply the concepts of electromagnetics in engineering applications.' },
    { code: 'CO4', statement: 'Utilize semiconductor devices, based on their I-V characteristics, for various engineering applications.' },
    { code: 'CO5', statement: 'Apply the principles of Quantum mechanics to analyze quantum phenomena in engineering systems.' },
  ],
  referenceBooks: [
    { title: 'Optics', authors: 'Ajoy Ghatak', publisher: 'McGraw Hill Education, 5th Edition, 2012', isbn: '978-1259004340' },
    { title: 'Principles of Lasers', authors: 'O. Svelto', publisher: 'Springer Science & Business Media, 5th Ed, 2010', isbn: '978-1441913017' },
    { title: 'Introduction to Electrodynamics', authors: 'David J. Griffiths', publisher: 'Pearson Education / Cambridge University Press, 5th Ed, 2023', isbn: '978-1009397729' },
    { title: 'Principles of Electronic Materials and Devices', authors: 'S. O. Kasap', publisher: 'McGraw Hill Education, 3rd Edition, 2006', isbn: '978-0073104647' },
    { title: 'Semiconductor Physics and Devices', authors: 'Donald A. Neamen', publisher: 'McGraw-Hill Education, 4th Edition, 2011', isbn: '978-0073529583' },
    { title: 'Introduction to Quantum Mechanics', authors: 'David J. Griffiths', publisher: 'Cambridge University Press, 2nd Edition, 2016', isbn: '978-1107179866' },
  ],
  units: [
    {
      id: 'phy-u1',
      unitNumber: 1,
      title: 'Wave Optics',
      hours: 8,
      mappedCOs: ['CO1'],
      learningObjectives: [
        'Explain interference by division of amplitude (Newton’s rings, Michelson interferometer).',
        'Analyze Fraunhofer single/double slit diffraction and circular aperture patterns.',
        'Calculate grating spectra and resolving power of telescopes using Rayleigh criterion.',
        'Understand polarization, double refraction, and Nicol prism functioning.'
      ],
      topics: [
        {
          id: 'phy-u1-t1',
          topicNumber: '1.1',
          title: 'Interference, Division of Amplitude, Newton’s Rings & Michelson Interferometer',
          syllabusText: 'Interference, Division of amplitude, Newton’s Ring experiment, Michelson interferometer.',
          unitId: 'phy-u1',
          subjectId: 'physics-1',
          subjectCode: '100104',
          quickDefinition: 'Division of amplitude is an optical interference mechanism where an incident wavefront is divided into two or more beams of reduced amplitude at a partially reflecting boundary. In Newton’s Rings, interference takes place between monochromatic light waves reflected from the top and bottom boundaries of a thin, enclosed air film formed between a large-radius plano-convex lens and an optically plane glass plate, producing circular fringes of equal thickness.',
          whyItMatters: 'Newton’s Rings and interferometry represent the gold standard in ultra-precision optical metrology, enabling sub-nanometer measurement of optical surface flatness, lens curvature radius R, refractive indices of microscopic liquids, and gravitational wave detection in LIGO.',
          coreConcept: [
            {
              heading: '1. Geometric Derivation of Air Film Thickness (t = r² / 2R)',
              paragraphs: [
                'Consider a plano-convex lens of very large radius of curvature R resting on a perfectly flat glass plate. At the point of contact O, the thickness of the enclosed air film is zero (t = 0), and it increases symmetrically outward in all radial directions.',
                'Let C be the center of curvature of the spherical lens surface. Let r be the radius of a circular ring at a point where the air film thickness is t.',
                'Applying the Pythagorean theorem in the right-angled triangle formed by the radius of curvature R, radius r, and distance (R - t):',
                'R² = (R - t)² + r²  ==>  R² = R² - 2Rt + t² + r²',
                '2Rt - t² = r²',
                'Since the radius of curvature R is very large (~100 cm to 200 cm) and the film thickness t is on the order of a few micrometers, t² is negligibly small compared to 2Rt (t² << 2Rt).',
                'Neglecting t² gives the exact thickness relation: 2Rt ≈ r²  ==>  t = r² / (2R).'
              ],
              bulletPoints: [
                'Thickness t increases proportionally to the square of radial distance r from the contact point.',
                'Loci of constant thickness t are concentric circles, producing perfectly circular interference fringes centered at the contact point.',
                'At the exact center of contact (r = 0), the physical thickness t = 0.'
              ]
            },
            {
              heading: '2. Optical Path Difference & Stokes’ Phase Change Rule',
              paragraphs: [
                'When a monochromatic parallel beam of wavelength λ falls normally on the glass plate at 45°, it is reflected normally downwards onto the lens-plate system.',
                'Ray 1 reflects from the bottom curved surface of the lens (glass-to-air interface, reflecting from an optically rarer medium, hence undergoing ZERO phase change).',
                'Ray 2 passes through the air film of thickness t, reflects from the top surface of the flat glass plate (air-to-glass interface, reflecting from an optically denser medium), and travels back through the film.',
                'According to Stokes’ principle of optical reversibility, reflection from a denser medium introduces an abrupt phase shift of π radians, equivalent to an additional optical path difference of λ/2.',
                'The total effective optical path difference Δ between the two interfering rays for normal incidence (cos r = 1) in an air film (μ = 1) is given by:',
                'Δ = 2μt cos r + λ/2  ==>  Δ = 2t + λ/2 = (r² / R) + λ/2.'
              ],
              bulletPoints: [
                'Condition for Dark Rings (Destructive Interference): Δ = (2n + 1) λ/2  ==>  2t + λ/2 = (2n + 1) λ/2  ==>  2t = nλ  ==>  r_n² / R = nλ.',
                'Diameter of nth Dark Ring: D_n = 2 r_n  ==>  D_n² = 4 r_n² = 4 n R λ  ==>  D_n = √(4 n R λ)  ==>  D_n ∝ √n.',
                'Condition for Bright Rings (Constructive Interference): Δ = nλ  ==>  2t + λ/2 = nλ  ==>  2t = (2n - 1) λ/2  ==>  r_n² / R = (2n - 1) λ/2.',
                'Diameter of nth Bright Ring: D_n² = 2 (2n - 1) R λ  ==>  D_n ∝ √(2n - 1).',
                'Central Spot Behavior: At the contact point (r = 0, t = 0), Δ = λ/2. Thus, destructive interference occurs and the central fringe in reflected light is ALWAYS DARK.'
              ]
            },
            {
              heading: '3. Determination of Wavelength (λ) & Refractive Index of Liquid (μ)',
              paragraphs: [
                'To eliminate errors associated with identifying the exact zero-order contact point, the difference between the squares of the diameters of two well-separated dark rings (nth and (n+p)th) is used:',
                'D_{n+p}² = 4 (n + p) R λ   and   D_n² = 4 n R λ',
                'Subtracting the two equations gives: D_{n+p}² - D_n² = 4 (n + p) R λ - 4 n R λ = 4 p R λ',
                'Therefore, the wavelength of the monochromatic source is: λ = (D_{n+p}² - D_n²) / (4 p R).',
                'If a liquid of refractive index μ is placed between the lens and the glass plate, the optical path difference becomes 2μt + λ/2. The diameters reduce according to:',
                '(D_{n+p}² - D_n²)_{liquid} = (4 p R λ) / μ',
                'Hence, the refractive index of the liquid can be determined directly by: μ = (D_{n+p}² - D_n²)_{air} / (D_{n+p}² - D_n²)_{liquid}.'
              ]
            },
            {
              heading: '4. Michelson Interferometer Working & Fringe Classifications',
              paragraphs: [
                'The Michelson interferometer splits an amplitude wave into two coherent beams traveling along mutually perpendicular paths d1 and d2 via a beam splitter (a semi-silvered plane parallel glass plate P1) and an identical compensating plate P2.',
                'Beam 1 reflects from fixed reference mirror M2, while Beam 2 reflects from movable mirror M1 mounted on a precision micrometer carriage.',
                'When the two returning beams recombine, the optical path difference is Δ = 2(d1 - d2) cos θ.',
                'Circular Fringes (Fringes of Equal Inclination / Haidinger Fringes): Formed when mirrors M1 and M2 are strictly perpendicular to each other. Concentric circles appear with maximum order at the center.',
                'Localized Straight Fringes: Formed when one mirror is slightly tilted relative to the other, creating a wedge-shaped air film between M1 and virtual image M2\'.',
                'Mirror Displacement Relation: When mirror M1 is translated along its normal by distance x, and N circular fringes cross the center of the crosshair: x = N (λ / 2)  ==>  λ = 2x / N.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Newton’s Rings Wavelength Formula',
              latex: '\\lambda = \\frac{D_{n+p}^2 - D_n^2}{4 p R}',
              explanation: 'Determines wavelength λ by measuring diameter of nth and (n+p)th dark rings.'
            },
            {
              title: 'Refractive Index of Liquid in Newton’s Rings',
              latex: '\\mu = \\frac{(D_{n+p}^2 - D_n^2)_{\\text{air}}}{(D_{n+p}^2 - D_n^2)_{\\text{liquid}}}',
              explanation: 'Liquid film reduces ring diameter by factor of 1/√μ.'
            },
            {
              title: 'Michelson Mirror Displacement',
              latex: 'x = N \\frac{\\lambda}{2} \\implies \\lambda = \\frac{2x}{N}',
              explanation: 'Relates mirror translation x to number of fringe shifts N.'
            }
          ],
          example: {
            problem: 'In a Newton’s rings experiment, the diameter of the 4th and 12th dark rings are 0.40 cm and 0.70 cm respectively. If radius of curvature R = 100 cm, find the wavelength of light used.',
            solutionSteps: [
              'Step 1: Given n = 4, n + p = 12 ==> p = 8.',
              'Step 2: D_4 = 0.40 cm ==> D_4^2 = 0.16 cm^2; D_12 = 0.70 cm ==> D_12^2 = 0.49 cm^2.',
              'Step 3: D_12^2 - D_4^2 = 0.49 - 0.16 = 0.33 cm^2.',
              'Step 4: Radius of curvature R = 100 cm.',
              'Step 5: Apply formula: λ = (D_{n+p}^2 - D_n^2) / (4 p R) = 0.33 / (4 * 8 * 100) = 0.33 / 3200 = 1.03125 * 10^(-4) cm = 5890 Å (589.3 nm).'
            ],
            finalAnswer: 'Wavelength λ = 589.3 nm (5893 Å).'
          },
          engineeringApplication: {
            title: 'Optical Surface Flatness Testing & Semiconductor Lithography',
            description: 'Semiconductor silicon wafer surfaces must be flat to within fractions of an optical wavelength. Placing an optical flat creates interference contour maps where fringe distortions reveal nanoscale surface defects.',
            impact: 'Prevents focus defocusing in EUV photolithography for 3nm CPU fabrication.'
          },
          commonMistakes: [
            {
              mistake: 'Assuming the central spot in Newton’s rings reflected light is bright.',
              correction: 'The central spot is ALWAYS DARK in reflected light due to the extra π phase shift at the glass-air boundary.',
              why: 'At contact t=0, path difference is λ/2, creating complete destructive interference.'
            }
          ],
          quickRevision: [
            'Newton’s rings: circular fringes of equal thickness (wedge film).',
            'Dark ring diameter D_n ∝ √n; Bright ring D_n ∝ √(2n-1).',
            'λ = (D_{n+p}^2 - D_n^2) / (4pR).',
            'Central spot is dark in reflected light, bright in transmitted light.',
            'Michelson: 1 fringe shift = λ/2 mirror movement.'
          ],
          examFocus: {
            questionTypes: ['Derive expression for diameter of dark & bright Newton’s rings (7-8 Marks)', 'Explain Michelson Interferometer construction & working to find wavelength (7 Marks)', 'Numerical on finding λ or μ using Newton’s rings (5 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Stokes’ Treatment of Reflection (π phase shift at denser medium)'],
            tip: 'Always draw the cross-sectional ray diagram showing the plano-convex lens, glass plate, and path difference 2t cos r + λ/2.'
          },
          visualType: 'newton-rings',
          visualCaption: 'Newton’s Rings Optical Wedge Film & Concentric Interference Rings',
          visualExplanation: 'Diagram depicting the plano-convex lens resting on a flat glass plate, ray reflections at the wedge air film, and concentric dark/bright circular fringes.',
          estimatedMinutes: 30
        },
        {
          id: 'phy-u1-t2',
          topicNumber: '1.2',
          title: 'Diffraction: Fraunhofer Single Slit, Double Slit & Circular Aperture',
          syllabusText: 'Diffraction, Fraunhofer diffraction, Single and double slit, & Circular aperture.',
          unitId: 'phy-u1',
          subjectId: 'physics-1',
          subjectCode: '100104',
          quickDefinition: 'Fraunhofer diffraction is the phenomenon of wave bending and mutual interference of secondary wavelets when a planar wavefront is incident on an aperture, with both source and observation screen positioned effectively at infinity (using convergent lenses). The resulting spatial intensity distribution is governed by the sinc² function for rectangular slits and Bessel functions for circular apertures.',
          whyItMatters: 'Fraunhofer diffraction governs the fundamental physical resolution threshold (Rayleigh criterion & Airy disk) of all imaging optics, telescope apertures, photolithography stepper lenses, and radar antennas.',
          coreConcept: [
            {
              heading: '1. Analytical Derivation of Single Slit Intensity Distribution',
              paragraphs: [
                'Consider a narrow rectangular slit AB of width a illuminated normally by a monochromatic plane wave of wavelength λ. According to Huygens’ principle, every point on the exposed wavefront inside the slit acts as a source of secondary wavelets.',
                'Let the slit width a be divided into n equal strips, each of width dy = a/n. The phase difference between wavelets emerging from two adjacent strips separated by distance y from edge A at diffraction angle θ is:',
                'δ = (2π / λ) · y sin θ.',
                'The total resultant amplitude R obtained by vector addition (integration) across the entire slit from y = 0 to y = a is given by:',
                'R = ∫₀ᵃ A₀ e^{i (2π y sin θ / λ)} dy = A₀ [ (e^{i (2π a sin θ / λ)} - 1) / (i 2π sin θ / λ) ].',
                'Simplifying using Euler’s identity yields the standard Fraunhofer amplitude relation:',
                'R = A · [ sin α / α ], where α = (π a sin θ) / λ.',
                'The resultant intensity I(θ) observed on the focal plane screen is the square of amplitude:',
                'I(θ) = R² = I₀ · [ sin α / α ]², where I₀ represents the peak intensity of the central principal maximum.'
              ],
              bulletPoints: [
                'Central Principal Maximum (θ = 0, α = 0): By L’Hôpital’s rule, lim_{α→0} (sin α / α) = 1. Therefore, I(0) = I₀ (maximum intensity containing ~85% of total transmitted energy).',
                'Positions of Minima (Zero Intensity): Occur when sin α = 0 while α ≠ 0, meaning α = ±mπ (m = 1, 2, 3, ...). Substituting α gives: (π a sin θ) / λ = ±mπ  ==>  a sin θ = ±mλ (m = 1, 2, 3, ...).',
                'Positions of Secondary (Subsidiary) Maxima: Found by differentiating I with respect to α: dI/dα = 0 ==> α = tan α. Roots of this transcendental equation are α ≈ ±1.430π, ±2.459π, ±3.471π.',
                'Relative Intensity of Secondary Maxima: I₁ ≈ I₀ / (1.43π)² ≈ I₀ / 22.2 (4.5% of central peak); I₂ ≈ I₀ / (2.46π)² ≈ I₀ / 61.7 (1.6% of central peak).'
              ]
            },
            {
              heading: '2. Double Slit Diffraction & Missing Spectral Orders',
              paragraphs: [
                'In Fraunhofer double slit diffraction, two identical parallel slits of width a are separated by an opaque boundary of width b (center-to-center slit separation d = a + b).',
                'The resultant intensity on the screen is the product of single-slit diffraction envelope and two-beam interference fringes:',
                'I(θ) = 4 I₀ · [ sin α / α ]² · cos² β, where α = (π a sin θ) / λ and β = (π d sin θ) / λ = [ π (a + b) sin θ ] / λ.',
                'The factor [ sin α / α ]² represents the diffraction pattern of a single slit of width a, while cos² β represents the sharp interference fringes produced by two coherent point sources separated by distance d = a + b.',
                'Missing Orders (Absent Spectra): Occur when an interference maximum condition coincides exactly with a single-slit diffraction minimum at the same angle θ.',
                'Condition for nth Interference Maximum: (a + b) sin θ = n λ',
                'Condition for mth Diffraction Minimum: a sin θ = m λ',
                'Dividing the two conditions gives the missing order ratio: (a + b) / a = n / m  ==>  n = m · (a + b) / a.',
                'For example, if opaque width b equals slit width a (b = a, d = 2a), then n = m(2a)/a = 2m. Thus, the 2nd, 4th, 6th, 8th... interference maxima will be completely absent from the pattern.'
              ]
            },
            {
              heading: '3. Circular Aperture Diffraction & Airy Disk Limit',
              paragraphs: [
                'When light of wavelength λ passes through a circular aperture of diameter D, the two-dimensional symmetry produces a bright central circular disk (Airy disk) surrounded by alternating concentric dark and bright rings.',
                'The intensity distribution is derived using first-order Bessel functions J₁(x): I(θ) = I₀ · [ 2 J₁(ka sin θ) / (ka sin θ) ]².',
                'The angular radius θ₁ of the first dark minimum ring (Airy ring boundary) is given by:',
                'sin θ₁ ≈ θ₁ = 1.22 · (λ / D) (where angle θ₁ is measured in radians).',
                'Linear Radius of Airy Disk on Screen at focal distance f: r_Airy = f · θ₁ = 1.22 · (λ f / D) = 1.22 · λ · (F-number).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Single Slit Minima',
              latex: 'a \\sin\\theta = m \\lambda \\quad (m = 1, 2, 3, \\dots)',
              explanation: 'Condition for completely destructive interference at single slit.'
            },
            {
              title: 'Double Slit Intensity Distribution',
              latex: 'I(\\theta) = I_0 \\left( \\frac{\\sin\\alpha}{\\alpha} \\right)^2 \\cos^2\\beta \\quad \\left( \\alpha = \\frac{\\pi a \\sin\\theta}{\\lambda}, \\beta = \\frac{\\pi(a+b)\\sin\\theta}{\\lambda} \\right)',
              explanation: 'Modulation of interference fringes by single-slit diffraction envelope.'
            },
            {
              title: 'Airy Disk Angular Radius',
              latex: '\\theta_1 = 1.22 \\frac{\\lambda}{D}',
              explanation: 'Angular radius of first minimum for circular aperture of diameter D.'
            }
          ],
          example: {
            problem: 'A screen is placed 2 m away from a single narrow slit of width 0.1 mm illuminated with monochromatic light of 600 nm. Calculate the linear width of the central diffraction maximum on the screen.',
            solutionSteps: [
              'Step 1: Slit width a = 0.1 mm = 10^(-4) m; Wavelength λ = 600 nm = 6 * 10^(-7) m; Distance D = 2 m.',
              'Step 2: First minimum angle: a sin θ ≈ a θ = λ ==> θ = λ / a.',
              'Step 3: Angular width of central maximum: 2θ = 2λ / a = (2 * 6 * 10^(-7)) / 10^(-4) = 1.2 * 10^(-2) rad.',
              'Step 4: Linear width W = 2θ * D = 1.2 * 10^(-2) * 2 = 2.4 * 10^(-2) m = 2.4 cm (24 mm).'
            ],
            finalAnswer: 'Linear width of central maximum = 2.4 cm (24 mm).'
          },
          engineeringApplication: {
            title: 'Laser Beam Divergence & Optical Tweezers',
            description: 'Laser beams emitted from circular apertures diverge due to diffraction by angle θ = 1.22 λ/D. In optical tweezers, tightly focused laser beams trap biological cells and DNA molecules.',
            impact: 'Enables nano-manipulation in cellular biology and quantum photonics.'
          },
          commonMistakes: [
            {
              mistake: 'Confusing single slit minima (a sin θ = m λ) with interference maxima.',
              correction: 'In single slit diffraction, a sin θ = m λ is the condition for MINIMA (destructive), NOT maxima.',
              why: 'The slit divides into 2m equal sub-zones that pair-wise cancel out.'
            }
          ],
          quickRevision: [
            'Single slit: I = I_0 (sin α / α)^2.',
            'Minima: a sin θ = m λ (m = 1, 2, 3...).',
            'Central maximum width: 2λ / a.',
            'Double slit missing order: (a+b)/a = n/m.',
            'Circular aperture 1st dark ring: θ = 1.22 λ / D.'
          ],
          examFocus: {
            questionTypes: ['Derive intensity expression for Fraunhofer single slit diffraction (8 Marks)', 'Explain missing spectra in double slit diffraction (5 Marks)', 'Calculate width of central maximum (5 Marks)'],
            likelyMarks: '8 Marks',
            keyTheorems: ['Huygens-Fresnel Principle for Diffraction'],
            tip: 'Always sketch the combined curve of single slit envelope (sin α/α)^2 containing the rapid cos^2 β double-slit spikes.'
          },
          visualType: 'fraunhofer-diffraction',
          visualCaption: 'Fraunhofer Single & Double Slit Intensity Profiles',
          visualExplanation: 'Graph showing central peak, secondary maxima decay, and interference fringe modulation inside single-slit envelope.',
          estimatedMinutes: 25
        },
        {
          id: 'phy-u1-t3',
          topicNumber: '1.3',
          title: 'Diffraction Grating & Resolving Power of Telescope',
          syllabusText: 'Diffraction, Grating, Rayleigh criterion, resolving power of telescope.',
          unitId: 'phy-u1',
          subjectId: 'physics-1',
          subjectCode: '100104',
          quickDefinition: 'A diffraction grating is an optical device consisting of N closely spaced parallel equidistant slits (grating element d = a + b). Rayleigh’s criterion states that two spectral lines/sources are just resolved when the central maximum of one falls on the first minimum of the other.',
          whyItMatters: 'Spectrometers with diffraction gratings analyze chemical compositions of distant stars, detect greenhouse gas emissions from orbit, and measure atomic spectral lines.',
          coreConcept: [
            {
              heading: 'Plane Transmission Grating Equation',
              paragraphs: [
                'Grating element: (a + b) where a is transparent slit width and b is opaque spacing. Number of lines per unit length N’ = 1 / (a + b).',
                'Principal Maxima condition: (a + b) sin θ = n λ (n = 0, 1, 2, ... order of spectrum).',
                'Maximum possible order: n_max <= (a + b) / λ (since sin θ <= 1).'
              ]
            },
            {
              heading: 'Rayleigh Criterion for Resolution',
              paragraphs: [
                'Two close wavelength peaks λ and λ + dλ are just resolved when the central diffraction maximum of λ coincides with the first diffraction minimum of λ + dλ.',
                'Resolving Power of Grating: RP = λ / dλ = n * N (where n is order, N is total number of illuminated rulings).'
              ]
            },
            {
              heading: 'Resolving Power of a Telescope',
              paragraphs: [
                'A telescope objective of diameter D forms Airy disk images of two distant stars with angular separation dθ.',
                'By Rayleigh criterion: dθ = 1.22 λ / D.',
                'Resolving Power = 1 / dθ = D / (1.22 λ). Larger aperture diameter D directly gives higher resolving power.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Grating Spectrum Equation',
              latex: '(a + b) \\sin\\theta = n \\lambda \\iff \\frac{1}{N\'} \\sin\\theta = n \\lambda',
              explanation: 'Gives the angle θ for the nth order spectral line.'
            },
            {
              title: 'Grating Resolving Power',
              latex: '\\text{RP} = \\frac{\\lambda}{d\\lambda} = n N',
              explanation: 'Product of spectral order n and total active rulings N.'
            },
            {
              title: 'Telescope Resolving Power',
              latex: '\\text{RP}_{\\text{telescope}} = \\frac{1}{d\\theta} = \\frac{D}{1.22 \\lambda}',
              explanation: 'Reciprocal of minimum angular resolution dθ.'
            }
          ],
          example: {
            problem: 'Calculate the minimum number of lines on a diffraction grating required to just resolve the sodium D-lines (λ_1 = 589.0 nm and λ_2 = 589.6 nm) in the second order.',
            solutionSteps: [
              'Step 1: Mean wavelength λ = (589.0 + 589.6)/2 = 589.3 nm.',
              'Step 2: Difference dλ = 589.6 - 589.0 = 0.6 nm.',
              'Step 3: Required Resolving Power = λ / dλ = 589.3 / 0.6 = 982.17.',
              'Step 4: Spectral order n = 2.',
              'Step 5: Since RP = n * N ==> N = RP / n = 982.17 / 2 = 491.08.',
              'Step 6: Rounding up gives N = 492 lines.'
            ],
            finalAnswer: 'Minimum 492 lines required.'
          },
          engineeringApplication: {
            title: 'James Webb Space Telescope (JWST) Spectrograph',
            description: 'JWST’s 6.5-meter gold primary mirror provides extreme angular resolving power D/(1.22 λ) coupled with diffraction gratings to detect atmospheric water vapor and carbon dioxide on exoplanets.',
            impact: 'Detects habitable biosignature gases across light-years of interstellar space.'
          },
          commonMistakes: [
            {
              mistake: 'Using total lines per inch instead of total illuminated lines N in RP = nN.',
              correction: 'N is the TOTAL number of lines illuminated by the beam: N = (lines/cm) * (width of grating in cm).',
              why: 'Resolving power depends on the spatial breadth of wavelets interfering together.'
            }
          ],
          quickRevision: [
            '(a + b) sin θ = n λ.',
            'Grating RP = λ / dλ = n N.',
            'Rayleigh criterion: peak of one on valley of other.',
            'Telescope limit: dθ = 1.22 λ / D.',
            'Telescope RP = D / (1.22 λ).'
          ],
          examFocus: {
            questionTypes: ['State Rayleigh criterion and derive resolving power of plane diffraction grating (8 Marks)', 'Numerical on resolving sodium D-lines (5 Marks)', 'Define resolving power of telescope (4 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['Rayleigh Criterion of Limit of Resolution'],
            tip: 'Remember: Grating dispersive power dθ/dλ = n / [(a+b) cos θ], whereas Resolving power λ/dλ = nN.'
          },
          visualType: 'rayleigh-criterion',
          visualCaption: 'Rayleigh Criterion: Resolved, Just Resolved & Unresolved Spectral Peaks',
          visualExplanation: 'Graph showing overlap of two diffraction peaks with 19% dip at midpoint when just resolved.',
          estimatedMinutes: 25
        },
        {
          id: 'phy-u1-t4',
          topicNumber: '1.4',
          title: 'Polarization, Double Refraction & Nicol Prism',
          syllabusText: 'Polarization, double-refracting crystal, Nicol prism.',
          unitId: 'phy-u1',
          subjectId: 'physics-1',
          subjectCode: '100104',
          quickDefinition: 'Polarization restricts electric field vibrations of a transverse light wave to a single plane. In double-refracting calcite crystals (birefringence), an unpolarized ray splits into Ordinary (O-ray) and Extra-ordinary (E-ray). A Nicol prism eliminates the O-ray via Total Internal Reflection to produce 100% plane-polarized light.',
          whyItMatters: 'Powers LCD monitors, smartphone touchscreens, 3D cinema glasses, optical stress analysis in mechanical parts, and glare-reduction sunglasses.',
          coreConcept: [
            {
              heading: 'Double Refraction (Birefringence) in Calcite',
              paragraphs: [
                'When unpolarized light enters a uniaxial calcite crystal, it splits into two refracted rays with perpendicular polarizations:',
                '1. Ordinary Ray (O-ray): Obeys Snell’s law, travels with constant velocity v_o in all directions (spherical wavefront), refractive index μ_o.',
                '2. Extra-ordinary Ray (E-ray): Does NOT obey Snell’s law, velocity varies with direction (ellipsoidal wavefront), refractive index μ_e.',
                'In Calcite (negative crystal): v_e > v_o ==> μ_o > μ_e (μ_o = 1.658, μ_e = 1.486 for sodium light).'
              ]
            },
            {
              heading: 'Nicol Prism Construction & Working',
              paragraphs: [
                'Constructed by cutting a calcite crystal along its shorter diagonal (angles 68° and 112°) and cementing the halves with Canada Balsam resin (μ_CB = 1.550).',
                'Refractive index order: μ_o (1.658) > μ_CB (1.550) > μ_e (1.486).',
                'When light enters, the O-ray strikes the Canada Balsam layer at an angle greater than critical angle θ_c = sin^(-1)(1.550 / 1.658) ≈ 69° and undergoes Total Internal Reflection (TIR), absorbed by black casing.',
                'The E-ray passes straight through because it enters an optically denser medium (1.486 to 1.550), emerging as pure plane-polarized light.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Malus’ Law',
              latex: 'I = I_0 \\cos^2\\theta',
              explanation: 'Intensity of transmitted light through analyzer rotated by angle θ relative to polarizer.'
            },
            {
              title: 'Brewster’s Law',
              latex: '\\tan i_p = \\mu \\implies i_p + r = 90^\\circ',
              explanation: 'Polarizing angle where reflected ray is completely plane polarized.'
            },
            {
              title: 'Critical Angle for O-Ray in Nicol Prism',
              latex: '\\theta_c = \\sin^{-1}\\left( \\frac{\\mu_{\\text{Canada Balsam}}}{\\mu_o} \\right) = \\sin^{-1}\\left( \\frac{1.550}{1.658} \\right) \\approx 69.3^\\circ',
              explanation: 'Ensures total internal reflection of ordinary ray at cement interface.'
            }
          ],
          example: {
            problem: 'Two polarizers have their transmission axes inclined at 60° to each other. If unpolarized light of intensity I_0 is incident on the first polarizer, find the transmitted intensity from the second.',
            solutionSteps: [
              'Step 1: After passing through the 1st polarizer, unpolarized light intensity becomes I_1 = I_0 / 2 (unpolarized rule).',
              'Step 2: The light is now plane-polarized. Angle between axes θ = 60°.',
              'Step 3: Apply Malus’ Law for 2nd polarizer: I_2 = I_1 cos^2(60°).',
              'Step 4: cos(60°) = 1/2 ==> cos^2(60°) = 1/4.',
              'Step 5: I_2 = (I_0 / 2) * (1/4) = I_0 / 8 = 0.125 I_0 (12.5% of incident intensity).'
            ],
            finalAnswer: 'Transmitted Intensity = I_0 / 8.'
          },
          engineeringApplication: {
            title: 'Photoelastic Stress Analysis in Structural Engineering',
            description: 'Transparent acrylic models of bridges, aircraft landing gears, and crane hooks placed between crossed polarizers reveal colorful fringe lines (isochromatics) directly proportional to internal shear stress concentrations.',
            impact: 'Identifies stress concentration hotspots before casting multimillion-dollar steel components.'
          },
          commonMistakes: [
            {
              mistake: 'Thinking Canada Balsam absorbs the E-ray.',
              correction: 'Canada Balsam TIRs the ORDINARY ray (O-ray). The Extraordinary ray (E-ray) transmits through cleanly.',
              why: 'μ_o (1.658) > μ_CB (1.550), satisfying the rarer medium condition for TIR.'
            }
          ],
          quickRevision: [
            'O-ray obeys Snell’s law (spherical wavefront); E-ray does not (ellipsoid).',
            'In calcite: μ_o (1.658) > μ_CB (1.55) > μ_e (1.486).',
            'O-ray undergoes TIR at Canada Balsam cement.',
            'Malus’ Law: I = I_0 cos^2 θ.',
            'Brewster angle: tan i_p = μ.'
          ],
          examFocus: {
            questionTypes: ['Describe construction and working of Nicol prism with neat ray diagram (7-8 Marks)', 'State Malus’ law and solve numerical (5 Marks)', 'Differentiate between O-ray and E-ray (4 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['Malus’ Law', 'Brewster’s Law of Polarization by Reflection'],
            tip: 'Draw the Nicol prism showing the 68° and 112° crystal face angles, the Canada balsam split line, TIR of O-ray, and transmission of E-ray.'
          },
          visualType: 'nicol-prism',
          visualCaption: 'Nicol Prism Cross-Section & TIR Separation of O-Ray and E-Ray',
          visualExplanation: 'Diagram illustrating unpolarized ray entering calcite, O-ray TIR reflecting at the Canada balsam interface, and E-ray emerging plane-polarized.',
          estimatedMinutes: 25
        }
      ]
    },
    {
      id: 'phy-u2',
      unitNumber: 2,
      title: 'Lasers and Optical Fiber',
      hours: 8,
      mappedCOs: ['CO2'],
      learningObjectives: [
        'Understand stimulated emission, Einstein’s A & B coefficients, and population inversion.',
        'Explain construction & working of Ruby, He-Ne, and Semiconductor diode lasers.',
        'Analyze optical fiber light propagation, Total Internal Reflection, and Numerical Aperture.',
        'Evaluate fiber attenuation mechanisms and applications in optical sensors.'
      ],
      topics: [
        {
          id: 'phy-u2-t1',
          topicNumber: '2.1',
          title: 'Laser Principles, Einstein Coefficients & Population Inversion',
          syllabusText: 'Characteristics of laser light, Einstein’s A & B coefficients, Population inversion, pumping mechanism, Optical resonator.',
          unitId: 'phy-u2',
          subjectId: 'physics-1',
          subjectCode: '100104',
          quickDefinition: 'LASER (Light Amplification by Stimulated Emission of Radiation) produces coherent, monochromatic, directional, and high-intensity light. Einstein showed that transitions involve Spontaneous Absorption (B_12), Spontaneous Emission (A_21), and Stimulated Emission (B_21), with B_12 = B_21.',
          whyItMatters: 'Foundational for high-speed fiber internet transceivers, laser eye surgery, barcode scanners, lidar in autonomous cars, and precision metal cutting.',
          coreConcept: [
            {
              heading: 'Key Characteristics of Laser Light',
              paragraphs: [
                '1. High Monochromaticity: Extreme spectral purity with spectral linewidth Δλ ≈ 10^(-3) nm.',
                '2. High Coherence: High spatial and temporal coherence with coherence length L_c of many kilometers.',
                '3. High Directionality: Negligible divergence angle θ ≈ 10^(-4) rad.',
                '4. High Brightness / Intensity: Tremendous photon density focused into microscopic spots.'
              ]
            },
            {
              heading: 'Einstein’s A and B Coefficients',
              paragraphs: [
                'Consider two energy levels E_1 and E_2 (E_2 > E_1) in thermal equilibrium with blackbody radiation density u(ν):',
                '• Absorption Rate: R_abs = B_12 * N_1 * u(ν).',
                '• Spontaneous Emission Rate: R_sp = A_21 * N_2.',
                '• Stimulated Emission Rate: R_st = B_21 * N_2 * u(ν).',
                'At thermal equilibrium: R_abs = R_sp + R_st ==> B_12 N_1 u(ν) = A_21 N_2 + B_21 N_2 u(ν).',
                'Using Boltzmann statistics N_2/N_1 = exp(-hν / kT) and Planck’s radiation law u(ν) = (8π h ν^3 / c^3) / (exp(hν/kT) - 1):',
                'Result 1: B_12 = B_21 (Probability of stimulated emission equals stimulated absorption).',
                'Result 2: A_21 / B_21 = 8π h ν^3 / c^3 (Ratio of spontaneous to stimulated emission is proportional to ν^3).'
              ]
            },
            {
              heading: 'Population Inversion & Optical Resonator',
              paragraphs: [
                'Normally N_1 > N_2. Population Inversion achieves non-equilibrium state where N_2 > N_1 in a metastable state (lifetime ~10^(-3) s vs 10^(-8) s for ordinary states).',
                'Pumping methods: Optical pumping (xenon flash lamp), Electrical discharge (electron collision), Direct injection.',
                'Optical Resonator: Pair of parallel mirrors (one 100% reflective, one 95-99% partially transparent output coupler) creating positive optical feedback and standing waves satisfying L = m (λ / 2).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Einstein’s Relations',
              latex: 'B_{12} = B_{21}, \\quad \\frac{A_{21}}{B_{21}} = \\frac{8\\pi h \\nu^3}{c^3}',
              explanation: 'Fundamental relation linking spontaneous and stimulated transition probabilities.'
            },
            {
              title: 'Population Ratio (Boltzmann Distribution)',
              latex: '\\frac{N_2}{N_1} = e^{-\\frac{E_2 - E_1}{kT}} = e^{-\\frac{h\\nu}{kT}}',
              explanation: 'At room temperature, N_2 is negligibly small compared to N_1, necessitating pumping.'
            },
            {
              title: 'Cavity Resonance Condition',
              latex: 'L = m \\frac{\\lambda}{2} \\implies \\nu_m = m \\frac{c}{2L}',
              explanation: 'Standing wave resonance modes in laser cavity of length L.'
            }
          ],
          example: {
            problem: 'Calculate the ratio of stimulated to spontaneous emission for a laser transitioning at wavelength λ = 694.3 nm (Ruby laser) operating at room temperature T = 300 K.',
            solutionSteps: [
              'Step 1: Energy difference hν = hc / λ = (6.626 * 10^(-34) * 3 * 10^8) / (694.3 * 10^(-9)) = 2.863 * 10^(-19) J = 1.787 eV.',
              'Step 2: Thermal energy kT = 1.38 * 10^(-23) * 300 = 4.14 * 10^(-21) J = 0.02585 eV.',
              'Step 3: Ratio of stimulated to spontaneous rate: R_st / R_sp = 1 / (exp(hν / kT) - 1).',
              'Step 4: Exponent = hν / kT = (2.863 * 10^(-19)) / (4.14 * 10^(-21)) = 69.15.',
              'Step 5: exp(69.15) ≈ 1.07 * 10^30.',
              'Step 6: R_st / R_sp = 1 / (1.07 * 10^30) ≈ 9.3 * 10^(-31).'
            ],
            finalAnswer: 'Ratio in thermal equilibrium is 9.3 * 10^(-31), showing spontaneous emission dominates without external pumping.'
          },
          engineeringApplication: {
            title: 'Optical Coherence Tomography (OCT) & Eye Surgery',
            description: 'Femtosecond pulsed lasers deliver ultra-short focused pulses creating photodisruption inside the human cornea to correct vision without damaging surrounding retinal tissue.',
            impact: 'Enables painless LASIK surgeries restoring 20/20 vision for millions annually.'
          },
          commonMistakes: [
            {
              mistake: 'Assuming stimulated emission photon has random phase and direction.',
              correction: 'Stimulated emission produces a twin photon having EXACTLY the same energy, phase, polarization, and direction as the triggering photon.',
              why: 'This quantum clone effect is what gives lasers their extreme coherence.'
            }
          ],
          quickRevision: [
            'Four laser qualities: Monochromatic, Coherent, Directional, High intensity.',
            'Einstein proof: B_12 = B_21 and A_21/B_21 = 8πhν^3/c^3.',
            'Population inversion: N_2 > N_1 via metastable state.',
            '3 elements: Active medium, Pumping source, Optical resonator cavity.'
          ],
          examFocus: {
            questionTypes: ['Derive Einstein’s A and B coefficients relations (8 Marks)', 'Explain population inversion and role of metastable state (5 Marks)', 'Numerical on population ratio or cavity mode spacing (5 Marks)'],
            likelyMarks: '8 Marks',
            keyTheorems: ['Einstein’s Quantum Transition Relations'],
            tip: 'The Einstein A and B coefficient derivation using Planck’s law is one of the most scored 8-mark derivations in BEU exams.'
          },
          visualType: 'laser-resonator',
          visualCaption: 'Laser Operation: Population Inversion, Stimulated Cascade & Resonator',
          visualExplanation: 'Diagram illustrating ground vs metastable levels, pumping photon excitation, stimulated photon amplification between parallel cavity mirrors, and output beam.',
          estimatedMinutes: 30
        },
        {
          id: 'phy-u2-t2',
          topicNumber: '2.2',
          title: 'Laser Systems: Ruby Laser, He-Ne Laser & Semiconductor Laser',
          syllabusText: 'Ruby laser, He-Ne laser, and Semiconductor laser.',
          unitId: 'phy-u2',
          subjectId: 'physics-1',
          subjectCode: '100104',
          quickDefinition: 'Ruby laser is a 3-level solid-state pulsed laser (694.3 nm red), He-Ne laser is a 4-level continuous gas laser (632.8 nm red) using resonant energy transfer between Helium and Neon, and Semiconductor Laser uses forward-biased GaAs p-n junction direct bandgap recombination (850-1550 nm).',
          whyItMatters: 'Powers barcode scanners, optical disc drives, fiber-optic communication transmitters, and industrial laser welding systems.',
          coreConcept: [
            {
              heading: 'Ruby Laser (3-Level Solid State Laser)',
              paragraphs: [
                'Active Medium: Al_2O_3 crystal doped with 0.05% Cr^(3+) ions. End faces silvered (100% and ~95%).',
                'Pumping: Xenon helical flash lamp excites Cr^(3+) ions from ground level E_1 to broad absorption band E_3.',
                'Metastable State: Rapid non-radiative radiationless transition (~10^(-8) s) to level E_2 (lifetime ~3 ms).',
                'Laser Transition: Stimulated emission E_2 -> E_1 produces pulsed red beam at λ = 694.3 nm.'
              ]
            },
            {
              heading: 'He-Ne Laser (4-Level Continuous Gas Laser)',
              paragraphs: [
                'Active Medium: Mixture of Helium and Neon gas in 10:1 ratio at low pressure (~1 mm Hg) in quartz discharge tube.',
                'Pumping: Electric discharge excites He atoms to energetic metastable states 2^1S and 2^3S by electron collision.',
                'Resonant Energy Transfer: Energetic He atoms collide with Ne atoms, exciting Ne to matching 3s and 2s levels.',
                'Laser Transition: Ne transition from 3s -> 2p produces continuous red laser light at λ = 632.8 nm.',
                'Depopulation: 2p -> 1s spontaneous radiation, and 1s -> ground de-excitation via collisions with tube walls.'
              ]
            },
            {
              heading: 'Semiconductor / Injection Diode Laser',
              paragraphs: [
                'Active Medium: Heavily doped direct bandgap p-n junction (e.g. GaAs, InGaAsP).',
                'Pumping: Direct electrical forward bias injection of high current density (~10^4 A/cm^2).',
                'Mechanism: Electrons in conduction band recombine with holes in valence band, emitting photons hν ≈ E_g.',
                'Cleaved crystal facets act as natural reflecting mirrors.',
                'Wavelength: λ = hc / E_g (e.g. GaAs with E_g = 1.42 eV emits at ~870 nm in infrared).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Semiconductor Laser Wavelength',
              latex: '\\lambda = \\frac{hc}{E_g} = \\frac{1.24 \\times 10^{-6}}{E_g \\text{ (in eV)}} \\text{ meters} = \\frac{1240}{E_g \\text{ (in eV)}} \\text{ nm}',
              explanation: 'Emitted photon wavelength determined strictly by semiconductor band gap E_g.'
            }
          ],
          example: {
            problem: 'A GaAs semiconductor laser has a band gap of 1.44 eV. Calculate the wavelength of emitted laser light.',
            solutionSteps: [
              'Step 1: Band gap E_g = 1.44 eV = 1.44 * 1.6 * 10^(-19) J = 2.304 * 10^(-19) J.',
              'Step 2: Planck’s constant h = 6.626 * 10^(-34) J·s; Speed of light c = 3 * 10^8 m/s.',
              'Step 3: λ = hc / E_g = (6.626 * 10^(-34) * 3 * 10^8) / (2.304 * 10^(-19)) = 8.628 * 10^(-7) m = 862.8 nm.',
              'Step 4: Using quick shortcut: λ = 1240 / 1.44 = 861.1 nm.'
            ],
            finalAnswer: 'Wavelength λ ≈ 862.8 nm (Near Infrared).'
          },
          engineeringApplication: {
            title: 'Fiber Optic Transceivers for Global Internet Subsea Cables',
            description: 'InGaAsP Distributed Feedback (DFB) semiconductor lasers emit continuous 1550 nm light modulated at 800 Gbps per wavelength channel, carrying terabytes of internet data across transatlantic undersea cables.',
            impact: 'Enables global cloud computing and real-time planetary communication.'
          },
          commonMistakes: [
            {
              mistake: 'Thinking Helium atoms produce the laser light in He-Ne laser.',
              correction: 'Neon (Ne) atoms emit the laser photons! Helium acts purely as an energy transfer buffer to pump Neon efficiently.',
              why: 'Helium metastable levels match Neon energy states with less than 0.05 eV difference.'
            }
          ],
          quickRevision: [
            'Ruby: 3-level, solid state, pulsed, Cr^(3+) ions, λ = 694.3 nm.',
            'He-Ne: 4-level, gas, continuous, He pumps Ne, λ = 632.8 nm.',
            'Semiconductor: Direct bandgap p-n junction, forward bias injection, λ = hc/E_g.',
            'Direct bandgap (GaAs) is required; indirect (Si, Ge) cannot lase.'
          ],
          examFocus: {
            questionTypes: ['Explain construction, working and energy level diagram of He-Ne laser (8 Marks)', 'Explain Ruby laser with energy level diagram (7 Marks)', 'Explain Semiconductor diode laser and compute wavelength from bandgap (5-7 Marks)'],
            likelyMarks: '8 Marks',
            keyTheorems: ['4-level laser population inversion advantage over 3-level'],
            tip: 'Drawing clean energy level diagrams with arrows for pumping, resonant transfer, and laser transitions earns full marks in BEU exams.'
          },
          visualType: 'laser-types',
          visualCaption: 'Energy Level Transitions: Ruby (3-Level), He-Ne (4-Level) & GaAs Diode',
          visualExplanation: 'Comparison of energy level diagrams for Ruby laser, resonant collision transfer in He-Ne laser, and bandgap electron-hole recombination in GaAs diode.',
          estimatedMinutes: 30
        },
        {
          id: 'phy-u2-t3',
          topicNumber: '2.3',
          title: 'Optical Fiber: Structure, Total Internal Reflection & Numerical Aperture',
          syllabusText: 'Structure of optical fibre, Basic principles (TIR, Acceptance angle and Numerical Aperture), Types of optical fibres.',
          unitId: 'phy-u2',
          subjectId: 'physics-1',
          subjectCode: '100104',
          quickDefinition: 'An optical fiber is a cylindrical dielectric waveguide consisting of an inner Core of refractive index n_1 surrounded by a Cladding of slightly lower index n_2 (n_1 > n_2). Light is guided along the core via Total Internal Reflection (TIR).',
          whyItMatters: 'Carries >99% of global internet and telecommunication traffic with near-zero electromagnetic interference, ultra-low loss, and gigabit-to-terabit bandwidth.',
          coreConcept: [
            {
              heading: 'Optical Fiber Structure & TIR Condition',
              paragraphs: [
                'Structure consists of: Core (high refractive index n_1, silica glass/plastic), Cladding (lower index n_2, keeps light trapped), Silicone buffer coating, and Kevlar protective jacket.',
                'TIR Condition: Light traveling in the core strikes the core-cladding boundary at angle φ >= critical angle φ_c = sin^(-1)(n_2 / n_1).'
              ]
            },
            {
              heading: 'Acceptance Angle & Numerical Aperture (NA)',
              paragraphs: [
                'Acceptance Angle (θ_a): The maximum angle of incidence at the fiber launch face in air (n_0 = 1) for which light undergoes TIR inside the core.',
                'Derivation: At launch face, sin θ_a / sin r = n_1 / n_0. Inside core, triangle gives r = 90° - φ_c. Thus sin r = cos φ_c = sqrt(1 - sin^2 φ_c) = sqrt(1 - (n_2/n_1)^2) = sqrt(n_1^2 - n_2^2) / n_1.',
                'Therefore: sin θ_a = sqrt(n_1^2 - n_2^2) / n_0. For air (n_0 = 1): sin θ_a = sqrt(n_1^2 - n_2^2).',
                'Numerical Aperture (NA): The light-gathering power of the optical fiber: NA = sin θ_a = sqrt(n_1^2 - n_2^2) = n_1 sqrt(2 Δ), where Δ = (n_1 - n_2) / n_1 is the fractional index difference.'
              ]
            },
            {
              heading: 'Classification / Types of Optical Fibers',
              paragraphs: [
                '1. Step Index Single Mode Fiber (SMF): Core diameter ~8-10 μm, carries only 1 fundamental mode (HE_11). Zero intermodal dispersion, ideal for long-distance telecom (>100 km).',
                '2. Step Index Multimode Fiber (MMF): Core diameter ~50-100 μm, carries hundreds of modes, suffers high intermodal dispersion.',
                '3. Graded Index (GRIN) Multimode Fiber: Core index decreases parabolically from center to cladding n(r) = n_1 [1 - 2Δ(r/a)^2]^(1/2). Outer rays travel faster through lower-index glass, equalizing propagation times and dramatically reducing intermodal dispersion.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Numerical Aperture (NA)',
              latex: '\\text{NA} = \\sin\\theta_a = \\sqrt{n_1^2 - n_2^2} \\approx n_1 \\sqrt{2\\Delta}',
              explanation: 'Fundamental light gathering metric of the fiber.'
            },
            {
              title: 'Fractional Refractive Index Difference Δ',
              latex: '\\Delta = \\frac{n_1 - n_2}{n_1}',
              explanation: 'Typically 0.001 to 0.02 (0.1% to 2%) for optical communication fibers.'
            },
            {
              title: 'Normalized Frequency (V-Number)',
              latex: 'V = \\frac{2\\pi a}{\\lambda} \\text{NA} = \\frac{2\\pi a}{\\lambda} \\sqrt{n_1^2 - n_2^2}',
              explanation: 'V <= 2.405 ensures single-mode fiber operation.'
            }
          ],
          example: {
            problem: 'An optical fiber has a core refractive index n_1 = 1.50 and cladding index n_2 = 1.47. Calculate (i) Critical angle at core-cladding boundary, (ii) Acceptance angle, (iii) Numerical Aperture, and (iv) Fractional index difference Δ.',
            solutionSteps: [
              'Step 1: Critical angle φ_c = sin^(-1)(n_2 / n_1) = sin^(-1)(1.47 / 1.50) = sin^(-1)(0.98) = 78.52°.',
              'Step 2: NA = sqrt(n_1^2 - n_2^2) = sqrt(1.50^2 - 1.47^2) = sqrt(2.25 - 2.1609) = sqrt(0.0891) = 0.2985.',
              'Step 3: Acceptance angle θ_a = sin^(-1)(NA) = sin^(-1)(0.2985) = 17.37°.',
              'Step 4: Fractional index difference Δ = (n_1 - n_2) / n_1 = (1.50 - 1.47) / 1.50 = 0.03 / 1.50 = 0.02 (2%).'
            ],
            finalAnswer: '(i) φ_c = 78.52°, (ii) θ_a = 17.37°, (iii) NA = 0.2985, (iv) Δ = 0.02 (2%).'
          },
          engineeringApplication: {
            title: '5G Mobile Backhaul & FTTH (Fiber To The Home)',
            description: 'Fiber-to-the-home GPON networks deploy single-mode optical fibers delivering 1 Gbps broadband to millions of residential users with negligible latency.',
            impact: 'Eliminates copper wire electromagnetic interference and supports ultra-broadband connectivity.'
          },
          commonMistakes: [
            {
              mistake: 'Using n_2^2 - n_1^2 under the square root for NA.',
              correction: 'NA = sqrt(n_1^2 - n_2^2) because Core index n_1 is ALWAYS greater than Cladding index n_2.',
              why: 'TIR can only occur when light travels from denser medium (core) towards rarer medium (cladding).'
            }
          ],
          quickRevision: [
            'Core n_1 > Cladding n_2 is mandatory for TIR.',
            'Critical angle: φ_c = sin^(-1)(n_2/n_1).',
            'NA = sin θ_a = sqrt(n_1^2 - n_2^2) = n_1 sqrt(2Δ).',
            'Acceptance cone semi-angle is θ_a.',
            'Single mode: V <= 2.405; GRIN fiber reduces modal dispersion.'
          ],
          examFocus: {
            questionTypes: ['Define and derive Acceptance Angle and Numerical Aperture (8 Marks)', 'Differentiate between Step-index and Graded-index fibers with index profiles and ray paths (7 Marks)', 'Numerical on calculating NA, θ_a, Δ, and V-number (5 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Derivation of Numerical Aperture from Snell’s Law'],
            tip: 'Always state n_0 = 1 for air when deriving NA = sin θ_a.'
          },
          visualType: 'optical-fiber-tir',
          visualCaption: 'Optical Fiber Ray Geometry: Acceptance Cone, Critical Angle & TIR',
          visualExplanation: 'Diagram depicting launch light entering core within acceptance cone angle θ_a, propagating via repeated core-cladding boundary TIR reflections.',
          estimatedMinutes: 30
        },
        {
          id: 'phy-u2-t4',
          topicNumber: '2.4',
          title: 'Light Propagation, Attenuation & Fiber Optic Sensors',
          syllabusText: 'Propagation mechanism of light in fibre, Attenuation in optical fibres, Applications of optical fibres, Fibre optic sensors.',
          unitId: 'phy-u2',
          subjectId: 'physics-1',
          subjectCode: '100104',
          quickDefinition: 'Attenuation is the reduction in optical power as light travels through a fiber (expressed in dB/km). Signal degradation occurs due to absorption, Rayleigh scattering, and bending losses. Fiber optic sensors modulate light intensity, phase, or wavelength to measure physical parameters.',
          whyItMatters: 'Determines optical repeater/amplifier spacing across undersea networks and provides immune-to-EMI structural monitoring in aircraft wings and oil pipelines.',
          coreConcept: [
            {
              heading: 'Attenuation Mechanisms & Formula',
              paragraphs: [
                'Attenuation coefficient α (dB/km) = (10 / L) * log_10 (P_in / P_out).',
                'Loss Mechanisms:',
                '1. Material Absorption: Intrinsic UV/IR absorption and extrinsic impurity absorption (hydroxyl OH^- radical absorption peaks at 1380 nm).',
                '2. Rayleigh Scattering: Microscopic density fluctuations in molten silica freeze into random refractive index variations, scattering light with loss α_R ∝ 1 / λ^4. This makes 1550 nm the lowest-loss telecommunication window (~0.2 dB/km).',
                '3. Bending Losses: Macrobending (visible fiber bends radiating light out of cladding) and Microbending (microscopic pressure crimping).'
              ]
            },
            {
              heading: 'Fiber Optic Sensors (Intrinsic vs Extrinsic)',
              paragraphs: [
                'Intrinsic Sensors: The optical fiber itself acts as the sensing element (e.g. Fiber Bragg Grating [FBG] strain sensor, Sagnac optical gyroscope). Parameter changes alter core refractive index or grating period.',
                'Extrinsic Sensors: Fiber acts merely as a light conduit carrying light to/from an external sensing region (e.g. liquid level, temperature probe).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Attenuation in dB/km',
              latex: '\\alpha (\\text{dB/km}) = \\frac{10}{L} \\log_{10}\\left( \\frac{P_{\\text{in}}}{P_{\\text{out}}} \\right)',
              explanation: 'Quantifies optical power loss over fiber length L in kilometers.'
            },
            {
              title: 'Rayleigh Scattering Loss Dependence',
              latex: '\\alpha_{\\text{Rayleigh}} \\propto \\frac{1}{\\lambda^4}',
              explanation: 'Loss drops by factor of 16 when doubling wavelength.'
            },
            {
              title: 'Fiber Bragg Grating (FBG) Resonance',
              latex: '\\lambda_B = 2 n_{\\text{eff}} \\Lambda',
              explanation: 'Reflected Bragg wavelength shifts with strain and temperature changes.'
            }
          ],
          example: {
            problem: 'An optical signal of power 10 mW is launched into a 20 km long optical fiber. If the fiber has an attenuation coefficient of 0.5 dB/km, calculate the output power at the end of the fiber.',
            solutionSteps: [
              'Step 1: Input power P_in = 10 mW; Length L = 20 km; α = 0.5 dB/km.',
              'Step 2: Total loss in dB = α * L = 0.5 * 20 = 10 dB.',
              'Step 3: Apply formula: 10 = 10 * log_10(P_in / P_out) ==> log_10(P_in / P_out) = 1.',
              'Step 4: P_in / P_out = 10^1 = 10.',
              'Step 5: P_out = P_in / 10 = 10 mW / 10 = 1 mW.'
            ],
            finalAnswer: 'Output Power = 1 mW (90% power attenuated over 20 km).'
          },
          engineeringApplication: {
            title: 'Structural Health Monitoring of Bridges & Dams',
            description: 'Fiber Bragg Grating (FBG) optical sensors embedded inside concrete bridge decks monitor micro-strain and thermal expansion continuously without electrical sparking hazard.',
            impact: 'Provides early warning of structural cracks before catastrophic collapse.'
          },
          commonMistakes: [
            {
              mistake: 'Using natural logarithm ln instead of log_10 in the dB attenuation formula.',
              correction: 'dB is defined with base-10 logarithm: 10 * log_10(P_in / P_out).',
              why: 'Decibels are standardized on a base-10 logarithmic scale.'
            }
          ],
          quickRevision: [
            'Attenuation α = (10/L) log_10(P_in/P_out) dB/km.',
            'Lowest loss window is 1550 nm (~0.2 dB/km) due to 1/λ^4 Rayleigh drop.',
            'OH^- impurity causes absorption peak around 1.38 μm.',
            'Intrinsic sensor: fiber is transducer; Extrinsic: fiber is only light pipe.'
          ],
          examFocus: {
            questionTypes: ['Explain various losses/attenuation mechanisms in optical fibers (7 Marks)', 'Numerical on optical power attenuation and fiber length (5 Marks)', 'Explain principle and applications of fiber optic sensors (5-7 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['Rayleigh Scattering 1/λ^4 Law'],
            tip: 'Draw the attenuation vs wavelength curve showing the 3 optical communication windows (850 nm, 1310 nm, 1550 nm).'
          },
          visualType: 'fiber-attenuation',
          visualCaption: 'Optical Fiber Loss Spectrum: Absorption Peaks & Rayleigh 1/λ⁴ Curve',
          visualExplanation: 'Graph illustrating attenuation vs wavelength showing UV/IR tails, OH⁻ absorption peaks, and the 1550 nm minimum loss window.',
          estimatedMinutes: 25
        }
      ]
    },
    {
      id: 'phy-u3',
      unitNumber: 3,
      title: 'Electromagnetism & Propagation of Waves',
      hours: 8,
      mappedCOs: ['CO3'],
      learningObjectives: [
        'Apply Gauss’s Law in dielectric media and calculate capacitor capacitance.',
        'Classify magnetic materials (dia, para, ferromagnetic) based on magnetic susceptibility.',
        'State and derive Maxwell’s four equations in differential and integral forms.',
        'Analyze electromagnetic wave propagation in vacuum/dielectrics and Poynting Theorem.'
      ],
      topics: [
        {
          id: 'phy-u3-t1',
          topicNumber: '3.1',
          title: 'Electric Fields, Gauss’ Law, Dielectrics & Capacitors',
          syllabusText: 'Electric fields, Gauss’ Law, Dielectrics and Capacitors.',
          unitId: 'phy-u3',
          subjectId: 'physics-1',
          subjectCode: '100104',
          quickDefinition: 'Gauss’s Law states that the total electric flux out of a closed surface equals the enclosed charge divided by ε_0. In dielectric media, electric polarization P induces bound charges, introducing the Electric Displacement vector D = ε_0 E + P.',
          whyItMatters: 'Crucial for designing high-density DRAM capacitors, touch sensors, high-voltage insulator bushings, and power transmission lines.',
          coreConcept: [
            {
              heading: 'Gauss’s Law in Free Space & Dielectrics',
              paragraphs: [
                'Free space: ∮ E • dA = Q_enc / ε_0 or differential form ∇ • E = ρ / ε_0.',
                'In Dielectric Media: External electric field E induces atomic dipole moments producing polarization vector P = ε_0 χ_e E (where χ_e is electric susceptibility).',
                'Electric Displacement Vector: D = ε_0 E + P = ε_0 (1 + χ_e) E = ε_0 ε_r E = ε E.',
                'Gauss’s Law in Dielectrics: ∮ D • dA = Q_free,enc or ∇ • D = ρ_free (independent of bound polarization charges).'
              ]
            },
            {
              heading: 'Dielectrics in Capacitors',
              paragraphs: [
                'Parallel plate capacitor with dielectric slab of constant ε_r (or K) and thickness t < d:',
                'C = ε_0 A / (d - t + t/K).',
                'When slab completely fills gap (t = d): C = K * C_0 = (K ε_0 A) / d. Capacitance increases by factor K while electric field drops to E_0 / K.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Gauss’s Law in Dielectric Form',
              latex: '\\nabla \\cdot \\vec{D} = \\rho_{\\text{free}} \\iff \\oint_S \\vec{D} \\cdot d\\vec{A} = Q_{\\text{free,enc}}',
              explanation: 'Applies purely to free charges, absorbing polarization effects into D.'
            },
            {
              title: 'Displacement Vector & Polarization',
              latex: '\\vec{D} = \\varepsilon_0 \\vec{E} + \\vec{P} = \\varepsilon_0 \\varepsilon_r \\vec{E}',
              explanation: 'Fundamental constituent relation in linear isotropic dielectrics.'
            },
            {
              title: 'Capacitance with Dielectric Slab',
              latex: 'C = \\frac{\\varepsilon_0 A}{d - t + \\frac{t}{K}}',
              explanation: 'General formula for partially filled dielectric capacitor.'
            }
          ],
          example: {
            problem: 'A parallel plate capacitor has plate area 100 cm^2 and separation 2 mm. A dielectric slab of thickness 1 mm and dielectric constant K = 5 is inserted. Calculate the new capacitance.',
            solutionSteps: [
              'Step 1: Plate area A = 100 * 10^(-4) m^2 = 0.01 m^2.',
              'Step 2: Separation d = 2 mm = 2 * 10^(-3) m; Slab thickness t = 1 mm = 10^(-3) m; K = 5.',
              'Step 3: Effective spacing d’ = d - t + t/K = 2 - 1 + 1/5 = 1 + 0.2 = 1.2 mm = 1.2 * 10^(-3) m.',
              'Step 4: C = ε_0 A / d’ = (8.854 * 10^(-12) * 0.01) / (1.2 * 10^(-3)) = (8.854 * 10^(-14)) / (1.2 * 10^(-3)) = 7.378 * 10^(-11) F = 73.8 pF.',
              'Step 5: For comparison, vacuum capacitance C_0 = 44.3 pF (increase of 66.7%).'
            ],
            finalAnswer: 'New Capacitance C = 73.8 pF.'
          },
          engineeringApplication: {
            title: 'High-k Dielectrics in 3nm MOSFET Gate Capacitors',
            description: 'Modern Intel and Apple processors replace traditional SiO_2 with Hafnium Oxide (HfO_2, K ≈ 25) gate dielectrics to achieve high gate capacitance without quantum tunneling leakage current.',
            impact: 'Allows billion-transistor CPU chips to run cool with high clock frequencies.'
          },
          commonMistakes: [
            {
              mistake: 'Using total charge (free + bound) with D in Gauss’s law.',
              correction: '∇ • D = ρ_free ONLY. Total charge ρ_total is used with E: ∇ • E = ρ_total / ε_0.',
              why: 'Vector D is defined specifically to encapsulate polarization bound charges.'
            }
          ],
          quickRevision: [
            'D = ε_0 E + P = ε_0 ε_r E.',
            '∇ • D = ρ_free.',
            'Dielectric slab increases capacitance: C = ε_0 A / (d - t + t/K).',
            'Polarization P = ε_0 χ_e E.'
          ],
          examFocus: {
            questionTypes: ['Derive relation D = ε_0 E + P and Gauss’s law in dielectrics (7 Marks)', 'Find capacitance of parallel plate capacitor with dielectric slab (5-7 Marks)'],
            likelyMarks: '7 Marks',
            keyTheorems: ['Gauss’s Law in Dielectrics'],
            tip: 'Define electric susceptibility χ_e = ε_r - 1 clearly before writing D = ε_0 ε_r E.'
          },
          visualType: 'dielectric-polarization',
          visualCaption: 'Dielectric Polarization & Bound Surface Charges in Electric Field',
          visualExplanation: 'Shows aligned atomic dipoles inside dielectric material creating opposing internal bound electric field E_ind.',
          estimatedMinutes: 25
        },
        {
          id: 'phy-u3-t2',
          topicNumber: '3.2',
          title: 'Magnetic Fields, Magnetic Materials (Dia, Para, Ferro)',
          syllabusText: 'Magnetic fields & Magnetic Materials (Diamagnetic, Paramagnetic, Ferromagnetic).',
          unitId: 'phy-u3',
          subjectId: 'physics-1',
          subjectCode: '100104',
          quickDefinition: 'Magnetic materials are classified by their response to an external magnetic field H: Diamagnetic (weakly repelled, χ < 0, μ_r < 1), Paramagnetic (weakly attracted, χ > 0 small, Curie law χ ∝ 1/T), and Ferromagnetic (strongly magnetized with hysteresis domains, χ >> 1).',
          whyItMatters: 'Essential for transformer core steels, hard disk drive magnetic storage, electric motor permanent magnets, and MRI scanner superconducting magnets.',
          coreConcept: [
            {
              heading: 'Magnetic Vectors & Relations',
              paragraphs: [
                'B = Magnetic Flux Density (Tesla or Wb/m^2).',
                'H = Magnetic Field Intensity (A/m).',
                'M = Magnetization vector (magnetic dipole moment per unit volume, A/m).',
                'Relation: B = μ_0 (H + M) = μ_0 (1 + χ_m) H = μ_0 μ_r H.',
                'Magnetic Susceptibility: χ_m = M / H (dimensionless).'
              ]
            },
            {
              heading: 'Comparison of Dia, Para, and Ferromagnetic Materials',
              paragraphs: [
                '1. Diamagnetic: Paired electrons (no permanent dipole). Induced dipole opposes applied field. χ_m is small, negative (-10^(-5)), independent of temperature (e.g. Bismuth, Copper, Water). Superconductors exhibit perfect diamagnetism (Meissner effect, χ = -1).',
                '2. Paramagnetic: Unpaired electrons (permanent atomic dipole moments). Random thermal orientation aligned by field. χ_m is small, positive (+10^(-4)), obeys Curie Law χ = C / T (e.g. Aluminum, Platinum, Liquid Oxygen).',
                '3. Ferromagnetic: Spontaneous domain magnetization due to quantum exchange coupling. χ_m is huge (~10^3 to 10^5), exhibits Hysteresis (B-H curve, retentivity, coercivity), obeys Curie-Weiss Law χ = C / (T - T_c) above Curie temperature T_c (e.g. Iron, Cobalt, Nickel, NdFeB).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Magnetic Constituent Relation',
              latex: '\\vec{B} = \\mu_0 (\\vec{H} + \\vec{M}) = \\mu_0 \\mu_r \\vec{H}',
              explanation: 'Fundamental relation connecting B, H, and magnetization M.'
            },
            {
              title: 'Curie and Curie-Weiss Laws',
              latex: '\\chi_{\\text{para}} = \\frac{C}{T}, \\quad \\chi_{\\text{ferro}} = \\frac{C}{T - T_c} \\quad (T > T_c)',
              explanation: 'Temperature dependence of paramagnetic and ferromagnetic susceptibility.'
            }
          ],
          example: {
            problem: 'A magnetic material has a relative permeability μ_r = 500. Calculate (i) its magnetic susceptibility χ_m, and (ii) the magnetization M if an external field H = 200 A/m is applied.',
            solutionSteps: [
              'Step 1: Relation between μ_r and χ_m: μ_r = 1 + χ_m ==> χ_m = μ_r - 1.',
              'Step 2: χ_m = 500 - 1 = 499 (positive and large, hence ferromagnetic).',
              'Step 3: Magnetization M = χ_m * H = 499 * 200 = 99,800 A/m = 9.98 * 10^4 A/m.',
              'Step 4: Magnetic flux density B = μ_0 μ_r H = (4π * 10^(-7)) * 500 * 200 = 0.1257 Tesla.'
            ],
            finalAnswer: '(i) χ_m = 499, (ii) M = 99,800 A/m.'
          },
          engineeringApplication: {
            title: 'Transformer Core Soft Magnetic Silicon Steel',
            description: 'Transformers use soft ferromagnetic materials (silicon steel) with narrow hysteresis loops (low coercivity) to minimize cyclic hysteresis energy dissipation loss during 50 Hz AC grid cycles.',
            impact: 'Prevents massive power grid thermal energy waste across national utility networks.'
          },
          commonMistakes: [
            {
              mistake: 'Stating that diamagnetism depends on temperature.',
              correction: 'Diamagnetism is TEMPERATUE-INDEPENDENT because it arises from electron orbital precession (Lenz’s law at atomic scale).',
              why: 'Thermal vibrations do not disrupt induced orbital paired diamagnetism.'
            }
          ],
          quickRevision: [
            'B = μ_0 (H + M) = μ_0 μ_r H.',
            'Dia: χ < 0, independent of T, repelled.',
            'Para: χ > 0 small, χ ∝ 1/T (Curie law), attracted.',
            'Ferro: χ >> 1, domain structure, hysteresis, Curie-Weiss law χ = C/(T-T_c).'
          ],
          examFocus: {
            questionTypes: ['Compare Dia, Para, and Ferromagnetic materials on basis of susceptibility, permeability, and temperature (7-8 Marks)', 'Explain Hysteresis B-H loop, Retentivity, and Coercivity (7 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['Domain Theory of Ferromagnetism', 'Curie-Weiss Law'],
            tip: 'Draw the comparison table covering 5 parameters: dipoles, χ, μ_r, temperature effect, and examples.'
          },
          visualType: 'magnetic-hysteresis',
          visualCaption: 'B-H Hysteresis Loop: Retentivity, Coercivity & Saturation',
          visualExplanation: 'Graph showing ferromagnetic domain alignment, remanent flux B_r, coercive field H_c, and enclosed hysteresis loss loop.',
          estimatedMinutes: 25
        },
        {
          id: 'phy-u3-t3',
          topicNumber: '3.3',
          title: 'Maxwell’s Equations (Differential & Integral Forms)',
          syllabusText: 'Maxwell’s Equations (Gauss’ law for electricity and magnetism, Faraday’s law, Ampere-Maxwell law, Displacement current).',
          unitId: 'phy-u3',
          subjectId: 'physics-1',
          subjectCode: '100104',
          quickDefinition: 'Maxwell’s four equations unify electricity and magnetism into electrodynamics. Maxwell modified Ampere’s Law by adding the Displacement Current density J_D = ∂D/∂t, resolving the capacitor charging continuity paradox.',
          whyItMatters: 'Predicts the existence of electromagnetic waves (light, radio, Wi-Fi, X-rays) propagating at speed c = 1 / sqrt(μ_0 ε_0).',
          coreConcept: [
            {
              heading: 'The Four Maxwell Equations',
              paragraphs: [
                '1. Gauss’s Law for Electricity: ∇ • D = ρ_free  |  ∮ D • dA = Q_free.',
                '   Physical meaning: Electric field lines originate on positive charges and terminate on negative charges.',
                '2. Gauss’s Law for Magnetism: ∇ • B = 0  |  ∮ B • dA = 0.',
                '   Physical meaning: Magnetic monopoles do not exist; magnetic field lines are continuous closed loops.',
                '3. Faraday’s Law of Induction: ∇ x E = -∂B/∂t  |  ∮ E • dr = -d/dt ∬ B • dA.',
                '   Physical meaning: A time-varying magnetic field creates a circulating electric field.',
                '4. Ampere-Maxwell Law: ∇ x H = J_c + ∂D/∂t  |  ∮ H • dr = I_c + ∬ (∂D/∂t) • dA.',
                '   Physical meaning: Magnetic fields are produced by both conduction current J_c and time-varying electric displacement current J_D = ∂D/∂t.'
              ]
            },
            {
              heading: 'Displacement Current Concept',
              paragraphs: [
                'During charging of a capacitor, conduction current I_c flows in wires but zero current flows across the dielectric gap. Ampere’s original law ∇ x B = μ_0 J violates continuity equation ∇ • J = -∂ρ/∂t.',
                'Maxwell realized that changing electric field in the gap produces an equivalent displacement current I_D = ε_0 (dΦ_E / dt) = A (∂D/∂t), ensuring continuity of total current everywhere.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Maxwell’s Equations in Differential Form',
              latex: '\\begin{aligned} 1.\\quad & \\nabla \\cdot \\vec{D} = \\rho \\\\ 2.\\quad & \\nabla \\cdot \\vec{B} = 0 \\\\ 3.\\quad & \\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t} \\\\ 4.\\quad & \\nabla \\times \\vec{H} = \\vec{J} + \\frac{\\partial \\vec{D}}{\\partial t} \\end{aligned}',
              explanation: 'Fundamental laws of classical electrodynamics.'
            },
            {
              title: 'Displacement Current Density',
              latex: '\\vec{J}_D = \\frac{\\partial \\vec{D}}{\\partial t} = \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}',
              explanation: 'Source of magnetic field produced by changing electric flux.'
            }
          ],
          example: {
            problem: 'A parallel plate capacitor with circular plates of radius R = 10 cm is charged by a current of 2 A. Calculate the displacement current density J_D between the plates.',
            solutionSteps: [
              'Step 1: Total displacement current between plates equals conduction current: I_D = I_c = 2 A.',
              'Step 2: Area of circular plates A = π R^2 = π * (0.1)^2 = 0.01 π m^2 ≈ 0.0314 m^2.',
              'Step 3: Displacement current density J_D = I_D / A = 2 / 0.0314 = 63.66 A/m^2.',
              'Step 4: J_D = 63.66 A/m^2 uniformly distributed across the dielectric cross-section.'
            ],
            finalAnswer: 'Displacement current density J_D = 63.66 A/m^2.'
          },
          engineeringApplication: {
            title: 'Wireless Power Transfer & Wi-Fi Antennas',
            description: 'Alternating currents in antenna conductors create time-varying E and B fields that detach and self-propagate as radio waves via Maxwell’s coupled equations.',
            impact: 'Enables global wireless networks, satellite TV, radar, and smartphone connectivity.'
          },
          commonMistakes: [
            {
              mistake: 'Omitting displacement current ∂D/∂t in Ampere’s Law.',
              correction: 'Always include ∂D/∂t (or ε_0 ∂E/∂t) in ∇ x H = J + ∂D/∂t.',
              why: 'Without displacement current, electromagnetic waves cannot self-propagate through vacuum.'
            }
          ],
          quickRevision: [
            '∇ • D = ρ (Gauss law E).',
            '∇ • B = 0 (No magnetic monopoles).',
            '∇ x E = -∂B/∂t (Faraday law).',
            '∇ x H = J + ∂D/∂t (Ampere-Maxwell law).',
            'Displacement current J_D = ∂D/∂t.'
          ],
          examFocus: {
            questionTypes: ['State Maxwell’s equations in differential and integral forms with physical significance (8-10 Marks)', 'Explain displacement current and prove total current continuity in capacitor (7 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Maxwell’s Electromagnetic Field Equations'],
            tip: 'Memorize the 4-row table with columns: Name, Differential Form, Integral Form, and Physical Significance.'
          },
          visualType: 'maxwell-equations',
          visualCaption: 'Maxwell’s Equations: Coupled Oscillating Electric & Magnetic Fields',
          visualExplanation: 'Diagram depicting self-sustaining orthogonal oscillation of E and B fields creating an electromagnetic wave propagating along z-axis.',
          estimatedMinutes: 30
        },
        {
          id: 'phy-u3-t4',
          topicNumber: '3.4',
          title: 'Electromagnetic Waves & Poynting Theorem',
          syllabusText: 'Electromagnetic waves & Poynting Theorem (Wave equation in vacuum, Poynting vector, Energy transport).',
          unitId: 'phy-u3',
          subjectId: 'physics-1',
          subjectCode: '100104',
          quickDefinition: 'From Maxwell’s equations in vacuum, wave equations ∇^2 E = μ_0 ε_0 (∂^2 E / ∂t^2) emerge, establishing that EM waves propagate at c = 1 / sqrt(μ_0 ε_0) = 3 x 10^8 m/s. The Poynting vector S = E x H represents the instantaneous directional energy flux per unit area (W/m^2).',
          whyItMatters: 'Fundamental for calculating solar panel power capture, 5G wireless radiation safety standards, laser weapon power delivery, and radar cross-sections.',
          coreConcept: [
            {
              heading: 'Derivation of EM Wave Equation in Free Space',
              paragraphs: [
                'In source-free vacuum (ρ = 0, J = 0): ∇ • E = 0, ∇ • B = 0, ∇ x E = -∂B/∂t, ∇ x B = μ_0 ε_0 (∂E/∂t).',
                'Take curl of Faraday’s law: ∇ x (∇ x E) = -∂/∂t (∇ x B) = -∂/∂t [μ_0 ε_0 ∂E/∂t] = -μ_0 ε_0 (∂^2 E / ∂t^2).',
                'Using vector identity ∇ x (∇ x E) = ∇(∇ • E) - ∇^2 E = 0 - ∇^2 E:',
                'Wave Equation: ∇^2 E = μ_0 ε_0 (∂^2 E / ∂t^2) ==> c = 1 / sqrt(μ_0 ε_0) ≈ 3 * 10^8 m/s.',
                'E and B are mutually perpendicular to each other and to the direction of propagation k̂ (Transverse wave nature), with E_0 / B_0 = c.'
              ]
            },
            {
              heading: 'Poynting Theorem & Poynting Vector',
              paragraphs: [
                'Poynting Vector: S = E x H = (1 / μ_0) (E x B). Magnitude has units Watts/m^2.',
                'Poynting Theorem (Conservation of Energy): -∬_S (E x H) • n̂ dA = d/dt ∭_V (1/2 ε_0 E^2 + 1/2 μ_0 H^2) dV + ∭_V (J • E) dV.',
                'Interpretation: The rate of energy flowing out of volume V equals the rate of decrease in stored EM energy minus Joule heating work done on charges (J • E).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Poynting Vector',
              latex: '\\vec{S} = \\vec{E} \\times \\vec{H} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B}) \\quad [\\text{W/m}^2]',
              explanation: 'Direction and magnitude of electromagnetic power flow density.'
            },
            {
              title: 'Speed of Light in Vacuum',
              latex: 'c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = \\frac{1}{\\sqrt{(4\\pi \\times 10^{-7})(8.854 \\times 10^{-12})}} \\approx 3 \\times 10^8 \\text{ m/s}',
              explanation: 'Fundamental constant proving light is an electromagnetic wave.'
            },
            {
              title: 'Average Poynting Flux / Intensity',
              latex: '\\langle S \\rangle = I = \\frac{1}{2} \\varepsilon_0 c E_0^2 = \\frac{E_0^2}{2 \\eta_0} \\quad (\\eta_0 = \\sqrt{\\mu_0/\\varepsilon_0} \\approx 377\\, \\Omega)',
              explanation: 'Time-averaged wave power where η_0 is intrinsic impedance of free space.'
            }
          ],
          example: {
            problem: 'The electric field of a plane EM wave in free space is E = 50 sin(ωt - kz) ĵ V/m. Calculate (i) the magnetic field B, and (ii) the average Poynting vector <S>.',
            solutionSteps: [
              'Step 1: E is along y-axis (ĵ) and wave travels in +z direction (k̂).',
              'Step 2: Since S = E x H is along +z, H must be along -x axis (-î) because ĵ x (-î) = +k̂.',
              'Step 3: B_0 = E_0 / c = 50 / (3 * 10^8) = 1.667 * 10^(-7) Tesla.',
              'Step 4: B(z, t) = -1.667 * 10^(-7) sin(ωt - kz) î Tesla.',
              'Step 5: Average Poynting vector <S> = (1/2) * (E_0^2 / η_0) k̂ = (1/2) * (2500 / 377) k̂ = 3.315 k̂ W/m^2.'
            ],
            finalAnswer: '(i) B = -1.67 * 10^(-7) sin(ωt - kz) î T, (ii) <S> = 3.315 k̂ W/m^2.'
          },
          engineeringApplication: {
            title: 'Solar Photovoltaic Energy Harvesting & Spacecraft Solar Sails',
            description: 'Solar constant at Earth’s orbit is <S> ≈ 1361 W/m^2. Poynting flux determines solar panel power output and exerts radiation pressure P = <S>/c propelling deep space solar sail probes.',
            impact: 'Enables propellant-free exploration missions to outer planets.'
          },
          commonMistakes: [
            {
              mistake: 'Writing S = E • H instead of cross product E x H.',
              correction: 'Poynting vector is a VECTOR CROSS PRODUCT: S = E x H.',
              why: 'Energy propagates perpendicular to both electric and magnetic field oscillations.'
            }
          ],
          quickRevision: [
            'Wave equation: ∇^2 E = μ_0 ε_0 ∂^2E/∂t^2.',
            'Speed c = 1 / sqrt(μ_0 ε_0) = 3 x 10^8 m/s.',
            'Intrinsic impedance of vacuum: η_0 = sqrt(μ_0/ε_0) ≈ 377 Ω.',
            'Poynting vector S = E x H (W/m^2).',
            'Poynting theorem: Conservation of EM energy.'
          ],
          examFocus: {
            questionTypes: ['Derive EM wave equation from Maxwell’s equations and deduce speed of light (8 Marks)', 'State and prove Poynting Theorem with physical interpretation (8 Marks)', 'Numerical on calculating Poynting vector and B field (5 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Poynting Energy Conservation Theorem'],
            tip: 'When deriving Poynting theorem, start with vector identity ∇ • (E x H) = H • (∇ x E) - E • (∇ x H).'
          },
          visualType: 'poynting-vector',
          visualCaption: 'Poynting Vector & Orthogonal Wave Vectors (E, B, S)',
          visualExplanation: '3D vector diagram showing electric vector along y, magnetic vector along x, and Poynting energy flow S along z-axis.',
          estimatedMinutes: 30
        }
      ]
    },
    {
      id: 'phy-u4',
      unitNumber: 4,
      title: 'Quantum Mechanics',
      hours: 8,
      mappedCOs: ['CO5'],
      learningObjectives: [
        'Explain De-Broglie matter waves and Heisenberg Uncertainty Principle.',
        'Understand wave function ψ, Born probability interpretation, and normalization.',
        'Derive time-dependent and time-independent Schrödinger wave equations.',
        'Calculate quantized energy eigenvalues for a Particle in a 1D Box and analyze Quantum Tunneling.'
      ],
      topics: [
        {
          id: 'phy-u4-t1',
          topicNumber: '4.1',
          title: 'De-Broglie Hypothesis & Heisenberg Uncertainty Principle',
          syllabusText: 'Introduction to Quantum Mechanics, De-Broglie hypothesis, Heisenberg uncertainty principle.',
          unitId: 'phy-u4',
          subjectId: 'physics-1',
          subjectCode: '100104',
          quickDefinition: 'De Broglie postulated that every moving matter particle exhibits wave nature with de Broglie wavelength λ = h / p. Heisenberg’s Uncertainty Principle states that position x and momentum p cannot be simultaneously measured with arbitrary precision: Δx * Δp >= ℏ / 2.',
          whyItMatters: 'Underpins Transmission Electron Microscopy (TEM, resolving individual atoms), quantum computing qubits, and explains why electrons do not collapse into the atomic nucleus.',
          coreConcept: [
            {
              heading: 'De-Broglie Matter Waves',
              paragraphs: [
                'Dual nature of radiation (wave-particle) led de Broglie to propose that moving matter possesses wave character.',
                'Wavelength: λ = h / p = h / (m v) = h / sqrt(2 m E) = h / sqrt(2 m q V).',
                'For an electron accelerated through potential V volts: λ = 1.227 / sqrt(V) nm (e.g. at 100 V, λ = 0.123 nm, comparable to X-rays and atomic crystal lattices).',
                'Experimental proof: Davisson-Germer electron diffraction experiment verified Bragg peaks for nickel crystal.'
              ]
            },
            {
              heading: 'Heisenberg Uncertainty Principle',
              paragraphs: [
                'Fundamental limit of quantum measurement arising from non-commuting operators [x, p] = iℏ.',
                'Position-Momentum: Δx * Δp >= ℏ / 2 (where ℏ = h / (2π) = 1.054 * 10^(-34) J·s).',
                'Energy-Time: ΔE * Δt >= ℏ / 2 (explains natural spectral line broadening and virtual particle creation).',
                'Application: Proves non-existence of free electrons inside atomic nucleus (if Δx ≈ 10^(-14) m, electron kinetic energy would exceed 20 MeV, but observed beta decay energies are < 4 MeV).'
              ]
            }
          ],
          formulas: [
            {
              title: 'De-Broglie Wavelength',
              latex: '\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2mE}} = \\frac{1.227}{\\sqrt{V \\text{ (volts)}}} \\text{ nm (for electron)}',
              explanation: 'Wavelength of moving electron accelerated across voltage V.'
            },
            {
              title: 'Heisenberg Uncertainty Principle',
              latex: '\\Delta x \\cdot \\Delta p \\ge \\frac{\\hbar}{2} = \\frac{h}{4\\pi}, \\quad \\Delta E \\cdot \\Delta t \\ge \\frac{\\hbar}{2}',
              explanation: 'Inherent quantum lower bound on simultaneous conjugate measurements.'
            }
          ],
          example: {
            problem: 'Calculate the de Broglie wavelength of an electron accelerated through a potential difference of 100 Volts. If its position is localized within 0.1 nm, find the minimum uncertainty in its velocity.',
            solutionSteps: [
              'Step 1: De-Broglie wavelength λ = 1.227 / sqrt(100) = 1.227 / 10 = 0.1227 nm = 1.227 * 10^(-10) m.',
              'Step 2: Given position uncertainty Δx = 0.1 nm = 10^(-10) m.',
              'Step 3: Δp >= ℏ / (2 Δx) = (1.054 * 10^(-34)) / (2 * 10^(-10)) = 5.27 * 10^(-25) kg·m/s.',
              'Step 4: Electron mass m = 9.1 * 10^(-31) kg.',
              'Step 5: Velocity uncertainty Δv = Δp / m = (5.27 * 10^(-25)) / (9.1 * 10^(-31)) = 5.79 * 10^5 m/s (~579 km/s).'
            ],
            finalAnswer: 'λ = 0.1227 nm; Velocity uncertainty Δv = 5.79 * 10^5 m/s.'
          },
          engineeringApplication: {
            title: 'Transmission Electron Microscope (TEM)',
            description: 'Optical microscopes are limited by visible light wavelength (~500 nm). Accelerating electrons at 200 kV gives de Broglie wavelength λ ≈ 0.0025 nm, magnifying semiconductor chips up to 10,000,000x to image individual silicon atoms.',
            impact: 'Essential for defect inspection in modern 3nm semiconductor manufacturing.'
          },
          commonMistakes: [
            {
              mistake: 'Using h instead of ℏ/2 in the modern Heisenberg inequality.',
              correction: 'Standard quantum lower bound is Δx Δp >= ℏ/2 = h / (4π).',
              why: 'Standard deviations of wave packets satisfy Robertson-Schrödinger relation with ℏ/2.'
            }
          ],
          quickRevision: [
            'De Broglie: λ = h/p = h/sqrt(2mE).',
            'Electron accelerated by V: λ = 1.227 / sqrt(V) nm.',
            'Heisenberg: Δx Δp >= ℏ/2 and ΔE Δt >= ℏ/2.',
            'Proof of non-existence of electron in nucleus using uncertainty principle.'
          ],
          examFocus: {
            questionTypes: ['State de Broglie hypothesis and derive λ = h/sqrt(2mqV) (5-7 Marks)', 'Prove non-existence of electrons inside nucleus using Heisenberg uncertainty (7 Marks)', 'Numerical on electron wavelength and position/velocity uncertainty (5 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['De-Broglie Hypothesis', 'Heisenberg Uncertainty Principle'],
            tip: 'The 7-mark question proving electrons cannot reside in nucleus by assuming nucleus radius R = 10^(-14) m is an exam staple.'
          },
          visualType: 'matter-wave',
          visualCaption: 'Wave-Particle Wavepacket & Heisenberg Measurement Localization',
          visualExplanation: 'Visualizes localized quantum wave packet: narrowing spatial envelope Δx broadens spatial frequency/momentum spectrum Δk.',
          estimatedMinutes: 25
        },
        {
          id: 'phy-u4-t2',
          topicNumber: '4.2',
          title: 'Wave Function, Schrödinger Equation & Particle in a Box',
          syllabusText: 'Wave function and its characteristics, Schrödinger’s equation (time-dependent and independent), Particle in a box, Energy Eigen values and Eigen functions, Potential barrier and Tunneling.',
          unitId: 'phy-u4',
          subjectId: 'physics-1',
          subjectCode: '100104',
          quickDefinition: 'The wave function ψ(x, t) describes the quantum state of a particle, with |ψ|^2 representing probability density (Born interpretation). Schrödinger’s equation governs ψ. For a particle confined in a 1D box of width L, boundary conditions enforce discrete quantized energy levels E_n = n^2 h^2 / (8 m L^2).',
          whyItMatters: 'Explains quantum dot displays (QLED TVs), energy band gaps in semiconductors, radioactive alpha decay, and Flash memory operation via quantum tunneling.',
          coreConcept: [
            {
              heading: 'Wave Function Characteristics & Born Interpretation',
              paragraphs: [
                'Max Born Interpretation: The quantity P(x) = |ψ(x)|^2 = ψ* ψ represents the probability density of finding the particle at position x.',
                'Conditions for well-behaved wave function: (1) ψ must be continuous and single-valued everywhere, (2) ∂ψ/∂x must be continuous, (3) ψ must be square-integrable (normalizable: ∫_{-∞}^∞ |ψ|^2 dx = 1).'
              ]
            },
            {
              heading: 'Schrödinger Wave Equations',
              paragraphs: [
                'Time-Dependent (1D): iℏ (∂ψ/∂t) = - (ℏ^2 / 2m) (∂^2ψ/∂x^2) + V(x) ψ.',
                'Time-Independent (Stationary States ψ(x, t) = ψ(x) e^(-iEt/ℏ)):',
                'd^2ψ/dx^2 + (2m / ℏ^2) [E - V(x)] ψ = 0.'
              ]
            },
            {
              heading: 'Particle in a 1D Infinite Potential Well (Box of Width L)',
              paragraphs: [
                'Potential: V(x) = 0 for 0 < x < L, and V(x) = ∞ elsewhere.',
                'Inside box: d^2ψ/dx^2 + k^2 ψ = 0 where k = sqrt(2mE) / ℏ.',
                'Boundary conditions ψ(0) = 0 and ψ(L) = 0 require k L = n π ==> k_n = n π / L (n = 1, 2, 3, ...).',
                'Energy Eigenvalues: E_n = n^2 π^2 ℏ^2 / (2 m L^2) = n^2 h^2 / (8 m L^2). (Energy is QUANTIZED).',
                'Normalized Eigenfunctions: ψ_n(x) = sqrt(2 / L) * sin(n π x / L).',
                'Zero-point energy: E_1 = h^2 / (8 m L^2) ≠ 0 (particle can never be at absolute rest).'
              ]
            },
            {
              heading: 'Potential Barrier & Quantum Tunneling',
              paragraphs: [
                'When a particle with energy E < V_0 encounters a finite potential barrier of width a and height V_0, classical mechanics predicts 100% reflection.',
                'Quantum mechanics proves the wave function decays exponentially inside the barrier (ψ ∝ e^(-κ x)) but emerges with non-zero amplitude on the other side.',
                'Transmission Coefficient: T ≈ exp(-2 κ a) where κ = sqrt(2m(V_0 - E)) / ℏ. This is Quantum Tunneling.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Time-Independent Schrödinger Equation',
              latex: '-\\frac{\\hbar^2}{2m} \\frac{d^2\\psi(x)}{dx^2} + V(x)\\psi(x) = E\\psi(x)',
              explanation: 'Energy eigenvalue equation in Hamiltonian form Ĥ ψ = E ψ.'
            },
            {
              title: '1D Box Quantized Energy Eigenvalues',
              latex: 'E_n = \\frac{n^2 h^2}{8 m L^2} = \\frac{n^2 \\pi^2 \\hbar^2}{2 m L^2} \\quad (n = 1, 2, 3, \\dots)',
              explanation: 'Discrete energy levels where n is the principal quantum number.'
            },
            {
              title: '1D Box Normalized Wavefunctions',
              latex: '\\psi_n(x) = \\sqrt{\\frac{2}{L}} \\sin\\left( \\frac{n\\pi x}{L} \\right) \\quad (0 \\le x \\le L)',
              explanation: 'Normalized spatial probability wavefunctions.'
            },
            {
              title: 'Quantum Tunneling Transmission Probability',
              latex: 'T \\approx e^{-2\\kappa a} \\quad \\text{where } \\kappa = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar}',
              explanation: 'Exponential tunneling probability through potential barrier of height V_0 and width a.'
            }
          ],
          example: {
            problem: 'An electron is trapped in an infinite 1D potential well of width L = 0.1 nm (1 Å). Calculate (i) the ground state energy E_1 in eV, (ii) the first excited state energy E_2, and (iii) the probability of finding the electron in the middle half of the box (L/4 to 3L/4) in the ground state.',
            solutionSteps: [
              'Step 1: Electron mass m = 9.1 * 10^(-31) kg; h = 6.626 * 10^(-34) J·s; L = 10^(-10) m.',
              'Step 2: Ground state energy E_1 = h^2 / (8 m L^2) = (6.626 * 10^(-34))^2 / (8 * 9.1 * 10^(-31) * (10^(-10))^2) = 6.026 * 10^(-18) J.',
              'Step 3: In eV: E_1 = (6.026 * 10^(-18)) / (1.6 * 10^(-19)) = 37.66 eV.',
              'Step 4: First excited state E_2 = 2^2 * E_1 = 4 * 37.66 = 150.64 eV.',
              'Step 5: Probability in ground state: P = ∫_{L/4}^{3L/4} (2/L) sin^2(π x / L) dx = [x/L - (sin(2πx/L))/(2π)]_{L/4}^{3L/4} = 1/2 + 1/π ≈ 0.5 + 0.318 = 0.818 (81.8%).'
            ],
            finalAnswer: '(i) E_1 = 37.66 eV, (ii) E_2 = 150.64 eV, (iii) Probability = 81.8%.'
          },
          engineeringApplication: {
            title: 'Flash Memory (NAND Flash SSDs) & Tunnel Diodes',
            description: 'Solid State Drives (SSDs) write data bits by tunneling electrons through a 10 nm silicon dioxide insulating barrier into a floating gate under high electric field, retaining data for 10+ years without power.',
            impact: 'Enables high-capacity, shock-proof storage in all modern laptops and smartphones.'
          },
          commonMistakes: [
            {
              mistake: 'Allowing n = 0 in particle in a box energy eigenvalues.',
              correction: 'n must start from 1: n = 1, 2, 3... (n = 0 yields ψ = 0 everywhere, meaning NO particle exists).',
              why: 'Zero wavefunction violates the normalization condition ∫ |ψ|^2 dx = 1.'
            }
          ],
          quickRevision: [
            '|ψ|^2 is probability density; ∫ |ψ|^2 dx = 1.',
            'Schrödinger equation: - (ℏ^2/2m) d^2ψ/dx^2 + Vψ = Eψ.',
            'Box energy: E_n = n^2 h^2 / (8 m L^2).',
            'Box wavefunctions: ψ_n = sqrt(2/L) sin(n π x / L).',
            'Tunneling: particle penetrates barrier V_0 > E with T ∝ exp(-2κa).'
          ],
          examFocus: {
            questionTypes: ['Derive time-independent Schrödinger equation and solve for particle in 1D box (8-10 Marks)', 'Derive energy eigenvalues and normalize wavefunctions (8 Marks)', 'Explain quantum tunneling and tunnel diode concept (5-7 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Particle in a Box Quantization Derivation', 'Born Probability Postulate'],
            tip: 'Draw the first 3 wavefunctions ψ_1, ψ_2, ψ_3 alongside their corresponding probability densities |ψ_1|^2, |ψ_2|^2, |ψ_3|^2.'
          },
          visualType: 'particle-in-box',
          visualCaption: 'Particle in 1D Infinite Box: Quantized Energy Levels & Wavefunctions',
          visualExplanation: 'Diagram illustrating standing wave probability densities |ψ_n(x)|² for ground state (n=1), first excited (n=2), and second excited (n=3) states.',
          estimatedMinutes: 35
        }
      ]
    },
    {
      id: 'phy-u5',
      unitNumber: 5,
      title: 'Semiconductors & Nano-materials',
      hours: 10,
      mappedCOs: ['CO4', 'CO5'],
      learningObjectives: [
        'Compare band structures of metals, insulators, and semiconductors.',
        'Distinguish intrinsic/extrinsic semiconductors, drift/diffusion currents, and Fermi level.',
        'Explain operating principles of photodiode, LED, solar cells, and Hall Effect.',
        'Understand nanoscience, quantum confinement, and classification into 0D, 1D, 2D nanomaterials.'
      ],
      topics: [
        {
          id: 'phy-u5-t1',
          topicNumber: '5.1',
          title: 'Band Theory, Intrinsic & Extrinsic Semiconductors and Fermi Level',
          syllabusText: 'Introduction, Types of materials (metal, semiconductor and insulator), Intrinsic and extrinsic semiconductors, P-type and N-type semiconductors, Diffusion, Drift and Fermi level.',
          unitId: 'phy-u5',
          subjectId: 'physics-1',
          subjectCode: '100104',
          quickDefinition: 'Energy bands arise from splitting of atomic orbitals in crystals. Insulators have large band gap E_g > 3 eV, semiconductors have narrow gap E_g ≈ 1 eV, and metals have overlapping bands. Doping creates N-type (donor) and P-type (acceptor) semiconductors, shifting the Fermi level E_F.',
          whyItMatters: 'Foundational physics behind every microchip, microprocessor transistor, memory cell, and power inverter in the world.',
          coreConcept: [
            {
              heading: 'Band Structure Classification',
              paragraphs: [
                '1. Metals: Conduction band overlaps valence band or is partially filled (E_g = 0). Extremely high conductivity (10^7 S/m).',
                '2. Insulators: Completely filled valence band separated from empty conduction band by wide forbidden gap E_g > 3 eV (e.g. Diamond E_g = 5.5 eV).',
                '3. Semiconductors: Narrow forbidden gap E_g ≈ 1.1 eV (Silicon) or 0.67 eV (Germanium). Thermally excited electrons jump into conduction band at room temperature.'
              ]
            },
            {
              heading: 'Intrinsic vs Extrinsic Semiconductors & Fermi Level',
              paragraphs: [
                'Intrinsic: Pure semiconductor (n = p = n_i). Fermi level E_F lies exactly at mid-gap: E_F = (E_c + E_v)/2.',
                'N-type: Doped with pentavalent donors (P, As, Sb). Electrons are majority carriers (n ≈ N_d >> p). Donor level E_d lies just below conduction band; E_F shifts upwards near E_c.',
                'P-type: Doped with trivalent acceptors (B, Ga, In). Holes are majority carriers (p ≈ N_a >> n). Acceptor level E_a lies just above valence band; E_F shifts downwards near E_v.'
              ]
            },
            {
              heading: 'Carrier Transport: Drift vs Diffusion Current',
              paragraphs: [
                'Drift Current: Movement of charge carriers under the influence of an applied electric field E. Current density J_drift = (n q μ_n + p q μ_p) E = σ E.',
                'Diffusion Current: Movement of carriers from regions of high concentration to low concentration due to random thermal motion. Current density J_diff = q D_n (dn/dx) - q D_p (dp/dx).',
                'Einstein Relation: D_n / μ_n = D_p / μ_p = k T / q = V_T (Thermal voltage ≈ 26 mV at 300 K).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Intrinsic Carrier Concentration & Mass Action Law',
              latex: 'n \\cdot p = n_i^2 = N_c N_v e^{-\\frac{E_g}{kT}}',
              explanation: 'Product of electron and hole concentrations is invariant for a given semiconductor at temperature T.'
            },
            {
              title: 'Total Semiconductor Current Density',
              latex: 'J_{\\text{total}} = (n q \\mu_n + p q \\mu_p) E + q D_n \\frac{dn}{dx} - q D_p \\frac{dp}{dx}',
              explanation: 'Combines field-driven drift and concentration-driven diffusion currents.'
            },
            {
              title: 'Einstein Diffusion Relation',
              latex: '\\frac{D}{\\mu} = \\frac{kT}{q} = V_T \\approx 26 \\text{ mV at } 300\\text{ K}',
              explanation: 'Links diffusivity D with carrier mobility μ.'
            }
          ],
          example: {
            problem: 'A silicon sample is doped with 10^17 arsenic atoms/cm^3. If intrinsic carrier concentration n_i = 1.5 * 10^10 cm^(-3), calculate (i) electron concentration n, (ii) hole concentration p, and (iii) the shift in Fermi level relative to intrinsic Fermi level E_i at T = 300 K.',
            solutionSteps: [
              'Step 1: Arsenic is a pentavalent donor ==> N_d = 10^17 cm^(-3).',
              'Step 2: Since N_d >> n_i, majority electron concentration n ≈ N_d = 10^17 cm^(-3).',
              'Step 3: By Law of Mass Action: p = n_i^2 / n = (1.5 * 10^10)^2 / 10^17 = (2.25 * 10^20) / 10^17 = 2.25 * 10^3 holes/cm^3.',
              'Step 4: Fermi level shift: E_F - E_i = kT * ln(N_d / n_i) = 0.0259 eV * ln(10^17 / (1.5 * 10^10)) = 0.0259 * ln(6.67 * 10^6) = 0.0259 * 15.71 = 0.407 eV above mid-gap.'
            ],
            finalAnswer: 'n = 10^17 cm^(-3), p = 2250 cm^(-3), E_F shifts 0.407 eV towards conduction band.'
          },
          engineeringApplication: {
            title: 'Thermoelectric Energy Harvesters (Seebeck Generators)',
            description: 'P-type and N-type semiconductor legs connected electrically in series and thermally in parallel generate electricity directly from automotive exhaust waste heat.',
            impact: 'Reclaims electrical power to improve vehicle fuel efficiency.'
          },
          commonMistakes: [
            {
              mistake: 'Thinking N-type semiconductor has a net negative electrical charge.',
              correction: 'N-type and P-type semiconductors are electrically NEUTRAL overall.',
              why: 'Every mobile conduction electron is balanced by a fixed positive donor ion in the crystal lattice.'
            }
          ],
          quickRevision: [
            'Insulator E_g > 3 eV; Semiconductor E_g ≈ 1 eV; Metal E_g = 0.',
            'Law of Mass Action: n * p = n_i^2.',
            'Intrinsic: E_F is at middle of band gap.',
            'N-type: E_F rises near E_c; P-type: E_F drops near E_v.',
            'Einstein relation: D/μ = kT/q.'
          ],
          examFocus: {
            questionTypes: ['Distinguish conductors, semiconductors and insulators using energy band diagrams (5 Marks)', 'Derive carrier concentration and Fermi level expression for intrinsic semiconductor (8 Marks)', 'Numerical on finding hole/electron density and Fermi level shift (5 Marks)'],
            likelyMarks: '8 Marks',
            keyTheorems: ['Law of Mass Action', 'Fermi-Dirac Distribution Law'],
            tip: 'Always state the temperature assumption (T = 300 K where kT/q ≈ 0.026 V) in numerical problems.'
          },
          visualType: 'energy-band-gap',
          visualCaption: 'Energy Band Gap Comparison: Metal, Semiconductor & Insulator',
          visualExplanation: 'Diagram comparing valence and conduction band alignments, highlighting overlapping bands in metals vs wide forbidden gap in insulators.',
          estimatedMinutes: 30
        },
        {
          id: 'phy-u5-t2',
          topicNumber: '5.2',
          title: 'Optoelectronic Devices (Photodiode, LED, Solar Cell) & Hall Effect',
          syllabusText: 'Photodiode, P-N junction transistor, LED, Hall effect, Solar cell and its characteristics.',
          unitId: 'phy-u5',
          subjectId: 'physics-1',
          subjectCode: '100104',
          quickDefinition: 'Optoelectronic devices interconvert optical photons and electrical carriers: LEDs emit light under forward bias via radiative recombination, Photodiodes detect light under reverse bias via photogeneration, and Solar Cells generate power under photovoltaic effect. Hall Effect measures transverse voltage V_H to determine carrier type and density.',
          whyItMatters: 'Powers renewable solar green energy, smartphone LED displays, fiber-optic receivers, and brushless DC motor magnetic position sensors.',
          coreConcept: [
            {
              heading: 'Light Emitting Diode (LED) & Photodiode',
              paragraphs: [
                'LED: Forward-biased direct bandgap p-n junction (GaAsP, GaN). Injected electrons and holes recombine radiatively at junction, emitting photons hν = E_g (λ = 1240 / E_g nm).',
                'Photodiode: Operates under REVERSE BIAS. Photons with energy hν >= E_g create electron-hole pairs in the depletion region, swept by internal electric field to generate a reverse photocurrent I_p proportional to light intensity.'
              ]
            },
            {
              heading: 'Solar Cell & I-V Characteristics',
              paragraphs: [
                'Unbiased p-n junction with large surface area. Photovoltaic effect generates electron-hole pairs near junction. Built-in electric field separates them, generating open-circuit voltage V_oc and short-circuit current I_sc.',
                'Fill Factor (FF) = (V_m * I_m) / (V_oc * I_sc).',
                'Efficiency η = (V_m * I_m) / P_in = (FF * V_oc * I_sc) / P_in.'
              ]
            },
            {
              heading: 'Hall Effect Principle & Applications',
              paragraphs: [
                'When a current-carrying semiconductor strip (current I along x) is placed in a perpendicular magnetic field B along z, the Lorentz force F = q (v x B) deflects carriers along y, creating a transverse Hall electric field E_H and Hall voltage V_H.',
                'Hall Coefficient: R_H = 1 / (n q) (for N-type, R_H < 0) and R_H = 1 / (p q) (for P-type, R_H > 0).',
                'Hall Voltage: V_H = (R_H * I * B) / w (where w is sample thickness).',
                'Applications: (1) Determines type of semiconductor (N-type or P-type), (2) Calculates carrier concentration n = 1/(q R_H), (3) Measures carrier mobility μ = σ |R_H|, (4) Measures magnetic field B (Hall probe).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Hall Voltage & Hall Coefficient',
              latex: 'V_H = \\frac{R_H I B}{w}, \\quad R_H = \\frac{1}{n q} \\text{ (or } \\frac{1}{p q}\\text{)}',
              explanation: 'Transverse voltage generated across semiconductor strip of thickness w.'
            },
            {
              title: 'Hall Mobility',
              latex: '\\mu_H = \\sigma |R_H| = \\frac{R_H}{\\rho}',
              explanation: 'Product of electrical conductivity and Hall coefficient.'
            },
            {
              title: 'Solar Cell Efficiency & Fill Factor',
              latex: '\\eta = \\frac{P_{\\text{max}}}{P_{\\text{in}}} = \\frac{V_m I_m}{P_{\\text{in}}} = \\frac{\\text{FF} \\cdot V_{\\text{oc}} I_{\\text{sc}}}{P_{\\text{in}}}',
              explanation: 'Ratio of maximum usable electrical power output to incident solar power.'
            }
          ],
          example: {
            problem: 'A flat strip of n-type semiconductor of width 1 cm and thickness 1 mm carries a current of 10 mA in a perpendicular magnetic field B = 0.5 Tesla. If the measured Hall voltage is 2.5 mV, calculate (i) the Hall coefficient R_H, and (ii) the electron concentration n.',
            solutionSteps: [
              'Step 1: Current I = 10 mA = 10^(-2) A; B = 0.5 T; Thickness w = 1 mm = 10^(-3) m; V_H = 2.5 mV = 2.5 * 10^(-3) V.',
              'Step 2: Formula V_H = (R_H * I * B) / w ==> R_H = (V_H * w) / (I * B).',
              'Step 3: R_H = (2.5 * 10^(-3) * 10^(-3)) / (10^(-2) * 0.5) = (2.5 * 10^(-6)) / (5 * 10^(-3)) = 5 * 10^(-4) m^3/C.',
              'Step 4: Electron concentration n = 1 / (q * R_H) = 1 / (1.6 * 10^(-19) * 5 * 10^(-4)) = 1 / (8 * 10^(-23)) = 1.25 * 10^22 m^(-3) = 1.25 * 10^16 cm^(-3).'
            ],
            finalAnswer: '(i) R_H = 5 * 10^(-4) m^3/C, (ii) n = 1.25 * 10^16 cm^(-3).'
          },
          engineeringApplication: {
            title: 'Electric Vehicle BLDC Motor Rotor Angle Hall Sensors',
            description: 'Brushless DC electric motors in Tesla and EV drivetrains use integrated Hall effect IC sensors to detect rotor magnetic pole positions every microsecond, enabling optimal electronic commutation switching.',
            impact: 'Provides 95%+ motor energy efficiency and smooth acceleration.'
          },
          commonMistakes: [
            {
              mistake: 'Using sample width instead of sample THICKNESS w in Hall voltage formula.',
              correction: 'V_H = (R_H I B) / w where w is the dimension PARALLEL to the magnetic field B (thickness).',
              why: 'Width cancels out during integration of transverse electric field.'
            }
          ],
          quickRevision: [
            'LED: Forward bias, direct bandgap, hν = E_g.',
            'Photodiode: Reverse bias, detects light.',
            'Solar cell: 4th quadrant I-V curve, FF = (V_m I_m)/(V_oc I_sc).',
            'Hall Effect: V_H = R_H I B / w.',
            'Sign of R_H identifies N-type (negative) vs P-type (positive).'
          ],
          examFocus: {
            questionTypes: ['State and derive expression for Hall voltage and Hall coefficient with applications (8 Marks)', 'Explain construction, working, and I-V characteristics of Solar Cell (7 Marks)', 'Numerical on calculating Hall coefficient and carrier density (5 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Hall Effect in Semiconductors'],
            tip: 'Draw the 3D block showing coordinate axes: Current along x, Magnetic field along z, and Hall voltage V_H across y.'
          },
          visualType: 'hall-effect',
          visualCaption: 'Hall Effect Carrier Deflection & Transverse Electric Field Setup',
          visualExplanation: '3D diagram showing electron drift under Lorentz force (q v x B) producing transverse Hall voltage V_H across slab sides.',
          estimatedMinutes: 30
        },
        {
          id: 'phy-u5-t3',
          topicNumber: '5.3',
          title: 'Nanomaterials: Properties, Quantum Confinement & 0D/1D/2D Classification',
          syllabusText: 'Introduction to nanoscience& nanotechnology, the significance of nanoscale, Unique Properties: Comparison of bulk and nanomaterials, large surface-to-volume ratio, change in band gap, and optical/electrical/mechanical properties at the nanoscale. Classification of Nanostructured Materials: 0D (Quantum Dot), 1D (Nanowire).',
          unitId: 'phy-u5',
          subjectId: 'physics-1',
          subjectCode: '100104',
          quickDefinition: 'Nanomaterials have at least one dimension between 1 and 100 nm. Quantum confinement restricts carrier motion, converting continuous energy bands into discrete energy states and increasing the effective band gap (E_g(nano) > E_g(bulk)).',
          whyItMatters: 'Enables quantum dot displays with 100% color gamut, carbon nanotube transistors, targeted nanoparticle cancer drug delivery, and high-efficiency battery electrodes.',
          coreConcept: [
            {
              heading: 'Why Nanoscale is Unique (Two Primary Drivers)',
              paragraphs: [
                '1. Surface-to-Volume Ratio: As particle radius r decreases, the ratio Surface Area / Volume = (4π r^2) / (4/3 π r^3) = 3 / r increases inversely with size. A massive percentage of atoms reside on the surface with uncoordinated dangling bonds, dramatically boosting catalytic and chemical reactivity.',
                '2. Quantum Confinement Effect: When crystal size drops below the electron-hole De Broglie wavelength (Bohr exciton radius ~1-10 nm), carriers feel quantum box boundaries. The energy bandgap expands: E_g(nano) = E_g(bulk) + h^2 / (8 m* R^2).'
              ]
            },
            {
              heading: 'Classification of Nanostructured Materials by Confinement Dimensions',
              paragraphs: [
                '• 0D (Quantum Dots, Nanoparticles): All 3 dimensions confined below 100 nm (0 degrees of free motion). Discrete atomic-like density of states (e.g. CdSe quantum dots).',
                '• 1D (Nanowires, Nanotubes, Nanorods): 2 dimensions confined, 1 dimension free (electrons move along wire axis). Step-like 1D density of states (e.g. Carbon Nanotubes, Silicon Nanowires).',
                '• 2D (Nanosheets, Quantum Wells, Graphene): 1 dimension confined, 2 dimensions free (electrons move in 2D plane) (e.g. Graphene, MoS_2 single layers).',
                '• 3D (Bulk Nanomaterials): Polycrystalline bulk containing nanoscale grain boundaries.'
              ]
            },
            {
              heading: 'Property Changes at Nanoscale',
              paragraphs: [
                '• Optical: Bulk gold is shiny yellow, but 20 nm gold nanoparticles appear ruby red due to Surface Plasmon Resonance (SPR).',
                '• Electrical: Bandgap widens; insulators can become conductors, and semiconductors can change emission colors simply by tuning quantum dot particle size.',
                '• Mechanical: Superplasticity, ultra-high tensile strength (Carbon nanotubes are 100x stronger than structural steel at 1/6th weight).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Surface-to-Volume Ratio for Sphere',
              latex: '\\frac{\\text{Surface Area}}{\\text{Volume}} = \\frac{4\\pi R^2}{\\frac{4}{3}\\pi R^3} = \\frac{3}{R}',
              explanation: 'Shows surface atom percentage escalates rapidly as radius R approaches nanometer scale.'
            },
            {
              title: 'Brus Equation for Quantum Dot Bandgap Shift',
              latex: 'E_g(\\text{nano}) = E_g(\\text{bulk}) + \\frac{h^2}{8 R^2} \\left( \\frac{1}{m_e^*} + \\frac{1}{m_h^*} \\right) - \\frac{1.8 q^2}{4\\pi \\varepsilon R}',
              explanation: 'Relates quantum dot emission color (band gap) directly to nanoparticle radius R.'
            }
          ],
          example: {
            problem: 'Compare the surface-to-volume ratio of a macroscopic sphere of radius R_1 = 1 cm with a nanoparticle of radius R_2 = 10 nm.',
            solutionSteps: [
              'Step 1: For bulk sphere R_1 = 1 cm = 10^(-2) m:',
              '  (S/V)_bulk = 3 / 10^(-2) = 300 m^(-1).',
              'Step 2: For nanoparticle R_2 = 10 nm = 10^(-8) m:',
              '  (S/V)_nano = 3 / 10^(-8) = 3 * 10^8 m^(-1).',
              'Step 3: Ratio (S/V)_nano / (S/V)_bulk = (3 * 10^8) / 300 = 10^6 (One Million Times Higher!).',
              'Step 4: The surface atom density is 1,000,000 times larger in the nanoparticle.'
            ],
            finalAnswer: 'Nanoparticle surface-to-volume ratio is 1,000,000 times higher than the bulk sphere.'
          },
          engineeringApplication: {
            title: 'Samsung QLED TV Quantum Dot Displays',
            description: 'Televisions embed 2 nm (blue-emitting) to 6 nm (red-emitting) CdSe/ZnS core-shell quantum dots excited by blue LED backlights, achieving pure 100% Rec. 2020 color accuracy without color filter light loss.',
            impact: 'Delivers vivid cinematic HDR brightness with 30% reduced electrical power.'
          },
          commonMistakes: [
            {
              mistake: 'Confusing 0D and 2D nanomaterial definitions.',
              correction: '0D has ZERO degrees of freedom (all 3 dimensions confined). 2D has TWO degrees of free motion (1 dimension confined).',
              why: 'Dimension number refers to the number of UNCONFINED free electron motion directions.'
            }
          ],
          quickRevision: [
            'Nanoscale: 1 to 100 nm.',
            'Surface to volume ratio = 3/R.',
            'Quantum confinement: E_g increases as size decreases.',
            '0D: Quantum dots (all 3 axes confined).',
            '1D: Nanowires / Carbon Nanotubes (2 axes confined).',
            '2D: Graphene / Nanosheets (1 axis confined).'
          ],
          examFocus: {
            questionTypes: ['Explain quantum confinement effect and surface-to-volume ratio in nanomaterials (7-8 Marks)', 'Classify nanomaterials into 0D, 1D, 2D with examples (5-7 Marks)', 'Explain optical and electrical property changes at nanoscale (5 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['Quantum Size Effect & Brus Formula'],
            tip: 'Include a clean diagram contrasting continuous bulk density of states vs discrete atomic-like spikes for 0D quantum dots.'
          },
          visualType: 'quantum-dot-confinement',
          visualCaption: 'Quantum Dot Confinement: Size-Tunable Bandgap & Color Emission',
          visualExplanation: 'Diagram illustrating how shrinking quantum dot radius from 6 nm to 2 nm widens the band gap, shifting emission from Red to Green to Blue.',
          estimatedMinutes: 25
        }
      ]
    }
  ]
};
