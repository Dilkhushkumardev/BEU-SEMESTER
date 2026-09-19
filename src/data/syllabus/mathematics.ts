import type { Subject } from '../../types';

export const mathematicsSubject: Subject = {
  id: 'math-1',
  code: '100102',
  name: 'Engineering Mathematics – I',
  shortName: 'Maths-I',
  type: 'theory',
  credits: 3,
  lectureHours: 3,
  tutorialHours: 0,
  practicalHours: 0,
  totalHours: 42,
  semester: 1,
  group: 'Group-A (CSE & Allied Branches)',
  description: 'Foundational engineering mathematics covering Linear Algebra, Single & Multivariable Differential Calculus, Integral Calculus, and Vector Calculus with practical engineering applications.',
  iconName: 'Sigma',
  accentColor: '#3b82f6',
  courseOutcomes: [
    { code: 'CO1', statement: 'Apply the concept of Linear/ Matrix algebra to solve given engineering problems.' },
    { code: 'CO2', statement: 'Demonstrate the ability to solve engineering problems based on the application of derivatives.' },
    { code: 'CO3', statement: 'Solve the given optimization problems by using the concept of partial derivatives.' },
    { code: 'CO4', statement: 'Evaluate the given multiple integrals in different coordinate systems to solve complex engineering problems.' },
    { code: 'CO5', statement: 'Apply the concept of vector calculus to solve the given engineering problems.' },
  ],
  referenceBooks: [
    { title: 'Higher Engineering Mathematics', authors: 'B. S. Grewal', publisher: 'Khanna Publishers, 44th Ed.', isbn: '978-8174091154' },
    { title: 'Higher Engineering Mathematics', authors: 'B. V. Ramana', publisher: 'Tata McGraw Hill New Delhi, 11th Ed, 2010', isbn: '978-0070634190' },
    { title: 'Advanced Engineering Mathematics', authors: 'Erwin Kreyszig', publisher: 'John Wiley & Sons, 10th Ed', isbn: '978-0470158365' },
    { title: 'A Textbook of Engineering Mathematics', authors: 'N. P. Bali & Dr. Manish Goyal', publisher: 'University Science Press, 13th Ed', isbn: '978-9383828630' },
    { title: 'Understanding Engineering Mathematics', authors: 'John Bird', publisher: 'Routledge, First Edition', isbn: '978-0415662840' },
  ],
  units: [
    {
      id: 'math-u1',
      unitNumber: 1,
      title: 'Basic Linear Algebra',
      hours: 8,
      mappedCOs: ['CO1'],
      learningObjectives: [
        'Find the rank of a given matrix using Echelon and Normal form.',
        'Test consistency of simultaneous linear equations in engineering systems.',
        'Apply Cayley-Hamilton Theorem to compute matrix powers and inverse.',
        'Diagonalize matrices and reduce quadratic forms to canonical forms.'
      ],
      topics: [
        {
          id: 'math-u1-t1',
          topicNumber: '1.1',
          title: 'Elementary Transformations, Rank & Vector Spaces',
          syllabusText: 'Elementary transformations and Rank of Matrix, Rank by using Echelon and Normal form of Matrices. Linear dependence & independence of vectors in R^n space.',
          unitId: 'math-u1',
          subjectId: 'math-1',
          subjectCode: '100102',
          quickDefinition: 'The rank of a matrix is the maximum number of linearly independent rows or columns, determined by transforming the matrix into row-echelon or canonical normal form [I_r 0; 0 0].',
          whyItMatters: 'In computer graphics (3D transformations), structural analysis, and electrical mesh networks, rank reveals whether a system has unique solutions, redundancy, or infinite degrees of freedom.',
          coreConcept: [
            {
              heading: 'Elementary Row & Column Operations',
              paragraphs: [
                'Elementary operations do not alter the rank of a matrix. The three permitted operations are:',
                '1. Interchange of any two rows/columns (R_i ↔ R_j).',
                '2. Multiplication of any row/column by a non-zero scalar k (R_i → kR_i, k ≠ 0).',
                '3. Addition to the elements of any row/column the corresponding elements of another row/column multiplied by any scalar (R_i → R_i + kR_j).'
              ]
            },
            {
              heading: 'Echelon Form vs Normal Form',
              paragraphs: [
                'In Row Echelon Form: All zero rows are at the bottom, and the leading non-zero entry of each row is strictly to the right of the leading entry of the row above it. The rank equals the number of non-zero rows.',
                'In Normal Form (Canonical Form): By applying both row and column transformations, any matrix of rank r can be reduced to [I_r 0; 0 0], where I_r is the identity matrix of order r.'
              ]
            },
            {
              heading: 'Linear Dependence & Independence in R^n',
              paragraphs: [
                'A set of vectors {v_1, v_2, ..., v_k} in R^n is linearly independent if c_1*v_1 + c_2*v_2 + ... + c_k*v_k = 0 implies all c_i = 0.',
                'If there exists at least one non-zero scalar c_i satisfying the equation, the vectors are linearly dependent, meaning at least one vector can be expressed as a linear combination of others.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Rank by Echelon Form',
              latex: '\\rho(A) = \\text{Number of non-zero rows in Row Echelon Form}',
              explanation: 'Applies only row elementary transformations to count independent basis rows.'
            },
            {
              title: 'Normal Form of Rank r',
              latex: 'A \\xrightarrow[\\text{Operations}]{\\text{Row \\& Col}} \\begin{bmatrix} I_r & O \\\\ O & O \\end{bmatrix} \\implies \\rho(A) = r',
              explanation: 'Reduces any m x n matrix using both row and column operations to an identity block of order r.'
            },
            {
              title: 'Linear Dependence Condition',
              latex: 'c_1 v_1 + c_2 v_2 + \\dots + c_k v_k = \\mathbf{0} \\quad (\\text{with at least one } c_i \\neq 0)',
              explanation: 'Determinant of vectors arranged as matrix equals 0 if vectors are dependent in R^n.'
            }
          ],
          example: {
            problem: 'Find the rank of the matrix A = [[1, 2, 3], [2, 4, 7], [3, 6, 10]] using Echelon form.',
            solutionSteps: [
              'Step 1: Apply R_2 -> R_2 - 2*R_1 ==> Row 2 becomes [0, 0, 1].',
              'Step 2: Apply R_3 -> R_3 - 3*R_1 ==> Row 3 becomes [0, 0, 1].',
              'Step 3: Apply R_3 -> R_3 - R_2 ==> Row 3 becomes [0, 0, 0].',
              'Step 4: Matrix is now in Echelon form: [[1, 2, 3], [0, 0, 1], [0, 0, 0]].'
            ],
            finalAnswer: 'Number of non-zero rows = 2, so rank ρ(A) = 2.'
          },
          engineeringApplication: {
            title: 'Degrees of Freedom & Redundant Constraints in Robotics',
            description: 'When controlling robotic manipulator arms, the Jacobian matrix relates joint velocities to end-effector velocity. The rank of the Jacobian determines the controllable degrees of freedom; a rank drop indicates a kinematic singularity.',
            impact: 'Prevents robot motor burnout and lockup during automated assembly lines.'
          },
          commonMistakes: [
            {
              mistake: 'Mixing row and column operations when reducing to Echelon form.',
              correction: 'Row Echelon form ONLY allows elementary row operations. Column operations are allowed only when reducing to Normal Form.',
              why: 'Column operations alter the linear span of the row vectors.'
            },
            {
              mistake: 'Dividing a row by zero or non-constant algebraic expressions.',
              correction: 'Always multiply by non-zero constants or subtract multiples of valid pivot rows.',
              why: 'Dividing by expressions that can be zero loses validity of equivalence.'
            }
          ],
          quickRevision: [
            'Rank is the dimension of the vector space generated by its rows or columns.',
            'Rank is invariant under elementary row/column transformations: ρ(A) = ρ(PAQ).',
            'For an m x n matrix, ρ(A) <= min(m, n).',
            'If det(A) ≠ 0 for n x n matrix, rank is n (full rank).',
            'Vectors are linearly independent if their matrix representation has full column rank.'
          ],
          examFocus: {
            questionTypes: ['Find rank by reducing to Echelon Form (5-7 Marks)', 'Reduce to Normal Form and find non-singular matrices P and Q such that PAQ = [I_r 0; 0 0] (7-10 Marks)', 'Test linear independence of given 3 vectors in R^3 (4-5 Marks)'],
            likelyMarks: '7 to 10 Marks',
            keyTheorems: ['Invariance of matrix rank under elementary transformations', 'Rank-Nullity theorem concept'],
            tip: 'Always choose the (1,1) pivot as 1 first by row swapping if needed. It makes subsequent row eliminations arithmetic error-free.'
          },
          visualType: 'echelon-rank',
          visualCaption: 'Matrix Row-Echelon Elimination & Rank Determination',
          visualExplanation: 'Illustrates how elementary row operations create lower-triangular zero pivots, leaving non-zero basis rows that define the matrix rank.',
          estimatedMinutes: 25
        },
        {
          id: 'math-u1-t2',
          topicNumber: '1.2',
          title: 'Consistency of System of Linear Equations',
          syllabusText: 'Consistency of System of Linear Equations (AX = B, Non-homogeneous and Homogeneous systems, Rouche-Capelli theorem).',
          unitId: 'math-u1',
          subjectId: 'math-1',
          subjectCode: '100102',
          quickDefinition: 'A system of linear equations AX = B is consistent if and only if the rank of coefficient matrix A equals the rank of the augmented matrix [A|B].',
          whyItMatters: 'Essential for solving electrical Kirchhoff mesh/node equations, civil engineering truss load distributions, and machine learning linear regression systems.',
          coreConcept: [
            {
              heading: 'Rouche-Capelli Theorem for Non-Homogeneous Systems (AX = B)',
              paragraphs: [
                '1. Inconsistent (No Solution): If ρ(A) ≠ ρ(A|B) [i.e., ρ(A) < ρ(A|B)].',
                '2. Consistent with Unique Solution: If ρ(A) = ρ(A|B) = n (where n is the number of unknowns).',
                '3. Consistent with Infinite Solutions: If ρ(A) = ρ(A|B) = r < n. The system has (n - r) linearly independent free variables.'
              ]
            },
            {
              heading: 'Homogeneous Systems (AX = 0)',
              paragraphs: [
                'For AX = 0, the system is always consistent because X = 0 (trivial solution) always satisfies it.',
                '1. If ρ(A) = n (or det(A) ≠ 0): Only the trivial solution (X = 0) exists.',
                '2. If ρ(A) = r < n (or det(A) = 0): Non-trivial (infinite) solutions exist, with (n - r) linearly independent solutions.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Augmented Matrix Form',
              latex: '[A | B] = \\begin{bmatrix} a_{11} & a_{12} & \\dots & a_{1n} & | & b_1 \\\\ a_{21} & a_{22} & \\dots & a_{2n} & | & b_2 \\\\ \\vdots & \\vdots & \\ddots & \\vdots & | & \\vdots \\\\ a_{m1} & a_{m2} & \\dots & a_{mn} & | & b_m \\end{bmatrix}',
              explanation: 'Combines coefficients and constants to check rank equivalence.'
            },
            {
              title: 'Consistency Criterion',
              latex: '\\rho(A) = \\rho(A|B) = r \\implies \\begin{cases} r = n & \\text{Unique Solution} \\\\ r < n & \\infty \\text{ Solutions with } (n-r) \\text{ parameters} \\end{cases}',
              explanation: 'Rouche-Capelli theorem dictates the exact solution geometry.'
            }
          ],
          example: {
            problem: 'Investigate for what values of λ and μ the equations: x + y + z = 6, x + 2y + 3z = 10, x + 2y + λz = μ have (i) no solution, (ii) a unique solution, (iii) infinite solutions.',
            solutionSteps: [
              'Step 1: Write augmented matrix [A|B] = [[1, 1, 1, 6], [1, 2, 3, 10], [1, 2, λ, μ]].',
              'Step 2: R_2 -> R_2 - R_1 ==> [[1, 1, 1, 6], [0, 1, 2, 4], [1, 2, λ, μ]].',
              'Step 3: R_3 -> R_3 - R_2 ==> [[1, 1, 1, 6], [0, 1, 2, 4], [0, 0, λ - 3, μ - 10]].',
              'Case (i) No solution: If λ = 3 and μ ≠ 10, ρ(A) = 2, ρ(A|B) = 3 (Inconsistent).',
              'Case (ii) Unique solution: If λ ≠ 3 (for any μ), ρ(A) = ρ(A|B) = 3 = n.',
              'Case (iii) Infinite solutions: If λ = 3 and μ = 10, ρ(A) = ρ(A|B) = 2 < 3.'
            ],
            finalAnswer: '(i) λ=3, μ≠10 (ii) λ≠3 (iii) λ=3, μ=10.'
          },
          engineeringApplication: {
            title: 'Power Grid Load Flow Analysis',
            description: 'In electrical power systems, bus admittance matrices are solved for nodal voltages under varying load demands. Inconsistency indicates power blackout/voltage collapse conditions.',
            impact: 'Prevents cascade tripping of power generators across national transmission grids.'
          },
          commonMistakes: [
            {
              mistake: 'Applying column operations on the augmented matrix [A|B].',
              correction: 'NEVER use column operations on [A|B] because that mixes variables with constant RHS values.',
              why: 'Column operations change the variables and corrupt the linear equations.'
            }
          ],
          quickRevision: [
            'AX = B is consistent iff rank(A) = rank(A|B).',
            'rank = n: Unique solution.',
            'rank < n: Infinite solutions with (n - rank) free variables.',
            'rank(A) < rank(A|B): No solution.',
            'AX = 0 has non-zero solution iff det(A) = 0.'
          ],
          examFocus: {
            questionTypes: ['Find values of λ and μ for no, unique, or infinite solutions (7-8 Marks)', 'Solve system of 3 linear equations using matrix method (5 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['Rouche-Capelli Theorem'],
            tip: 'The λ, μ problem is asked in almost every BEU end-semester exam. Practice the row-reduction carefully.'
          },
          visualType: 'linear-consistency',
          visualCaption: 'Geometric Interpretation of 3D Linear Systems (Intersection of Planes)',
          visualExplanation: 'Shows 3 planes meeting at a point (unique solution), a line (infinite solutions), or parallel/disjoint planes (inconsistent).',
          estimatedMinutes: 30
        },
        {
          id: 'math-u1-t3',
          topicNumber: '1.3',
          title: 'Eigenvalues, Eigenvectors & Cayley-Hamilton Theorem',
          syllabusText: 'Eigenvalues & Eigenvectors, Cayley-Hamilton Theorem.',
          unitId: 'math-u1',
          subjectId: 'math-1',
          subjectCode: '100102',
          quickDefinition: 'An eigenvalue λ is a scalar such that Av = λv for a non-zero vector v (eigenvector). The Cayley-Hamilton theorem states that every square matrix satisfies its own characteristic equation: |A - λI| = 0.',
          whyItMatters: 'Powers of matrices A^n, matrix inverses A^(-1), Google PageRank, Principal Component Analysis (PCA) in AI, and mechanical resonance frequencies all rely on eigenvalues and Cayley-Hamilton.',
          coreConcept: [
            {
              heading: 'Characteristic Equation & Eigenvalues',
              paragraphs: [
                'For a square matrix A of order n, the equation det(A - λI) = 0 is the characteristic polynomial of degree n.',
                'The roots λ_1, λ_2, ..., λ_n are called the eigenvalues (characteristic roots or latent roots) of matrix A.',
                'For each eigenvalue λ_i, non-zero vectors X satisfying (A - λ_i*I)X = 0 are called the corresponding eigenvectors.'
              ]
            },
            {
              heading: 'Properties of Eigenvalues',
              paragraphs: [
                '1. Sum of eigenvalues = Trace of matrix A (sum of main diagonal elements).',
                '2. Product of eigenvalues = Determinant of matrix A: det(A) = λ_1 * λ_2 * ... * λ_n.',
                '3. The eigenvalues of A^T are the same as those of A.',
                '4. The eigenvalues of A^(-1) are 1/λ_i (if det(A) ≠ 0).',
                '5. The eigenvalues of A^k are λ_i^k for any positive integer k.'
              ]
            },
            {
              heading: 'Cayley-Hamilton Theorem',
              paragraphs: [
                'Statement: Every square matrix satisfies its own characteristic equation.',
                'If characteristic polynomial is λ^n + c_{n-1}λ^{n-1} + ... + c_1λ + c_0 = 0, then:',
                'A^n + c_{n-1}A^{n-1} + ... + c_1A + c_0*I = O (zero matrix).',
                'Applications: (1) Finding A^(-1) by multiplying by A^(-1): A^(-1) = -(1/c_0)[A^{n-1} + ... + c_1*I]. (2) Computing high powers A^8, A^100 efficiently.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Characteristic Equation',
              latex: '|A - \\lambda I| = 0 \\implies \\lambda^3 - (\\text{tr } A)\\lambda^2 + (M_{11}+M_{22}+M_{33})\\lambda - \\det(A) = 0',
              explanation: 'Standard cubic characteristic equation for 3x3 matrix where M_ii are minors of diagonal entries.'
            },
            {
              title: 'Eigenvector Equation',
              latex: '(A - \\lambda I) X = \\mathbf{0}',
              explanation: 'Nullspace vector X giving direction preserved under linear transformation A.'
            },
            {
              title: 'Cayley-Hamilton Identity & Inverse',
              latex: 'A^{-1} = -\\frac{1}{c_0} \\left[ A^{n-1} + c_{n-1}A^{n-2} + \\dots + c_1 I \\right]',
              explanation: 'Computes matrix inverse without evaluating individual cofactor matrices.'
            }
          ],
          example: {
            problem: 'Verify Cayley-Hamilton theorem for A = [[1, 2], [3, 2]] and find A^(-1) and A^4.',
            solutionSteps: [
              'Step 1: Characteristic equation |A - λI| = (1-λ)(2-λ) - 6 = λ^2 - 3λ - 4 = 0.',
              'Step 2: By C-H theorem: A^2 - 3A - 4I = 0.',
              'Step 3: Compute A^2 = [[7, 6], [9, 10]].',
              'Check: A^2 - 3A - 4I = [[7,6],[9,10]] - [[3,6],[9,6]] - [[4,0],[0,4]] = [[0,0],[0,0]] verified!',
              'Step 4: A^(-1) = (1/4)(A - 3I) = (1/4)[[ -2, 2], [3, -1]] = [[ -0.5, 0.5], [0.75, -0.25]].',
              'Step 5: A^2 = 3A + 4I ==> A^4 = (A^2)^2 = (3A+4I)^2 = 9A^2 + 24A + 16I = 9(3A+4I) + 24A + 16I = 51A + 52I = [[103, 102], [153, 154]].'
            ],
            finalAnswer: 'C-H theorem verified. A^(-1) = [[-1/2, 1/2], [3/4, -1/4]], A^4 = [[103, 102], [153, 154]].'
          },
          engineeringApplication: {
            title: 'Principal Component Analysis (PCA) & Machine Learning',
            description: 'In computer vision and image compression, covariance matrices of image datasets are decomposed into eigenvectors. The top eigenvalues represent axes of maximum variance, compressing high-dimensional data without losing essential information.',
            impact: 'Enables real-time face recognition and noise reduction in AI pipelines.'
          },
          commonMistakes: [
            {
              mistake: 'Writing c_0 without the Identity matrix I in Cayley-Hamilton equation: A^2 - 3A - 4 = 0.',
              correction: 'Always write scalar constant with I: A^2 - 3A - 4*I = O.',
              why: 'You cannot subtract a scalar 4 from a 2x2 matrix; it must be scalar matrix 4*I.'
            }
          ],
          quickRevision: [
            '|A - λI| = 0 gives eigenvalues.',
            '(A - λI)X = 0 gives eigenvectors.',
            'Sum of eigenvalues = trace(A); Product = det(A).',
            'C-H Theorem: A satisfies |A - λI| = 0.',
            'A^(-1) and A^k can be computed directly using C-H theorem.'
          ],
          examFocus: {
            questionTypes: ['State & Verify Cayley-Hamilton theorem for 3x3 matrix and hence find A^(-1) / A^4 (7-10 Marks)', 'Find eigenvalues and eigenvectors of a 3x3 symmetric matrix (7 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Cayley-Hamilton Theorem', 'Orthogonality of eigenvectors of symmetric matrices'],
            tip: 'Always cross-check: Sum of computed eigenvalues must equal the sum of diagonal elements of matrix A!'
          },
          visualType: 'eigenvalues',
          visualCaption: 'Eigenvector Transformation & Stretch Factor λ',
          visualExplanation: 'Visualizes vector X whose direction remains invariant under matrix transformation A, scaled purely by factor λ.',
          estimatedMinutes: 30
        },
        {
          id: 'math-u1-t4',
          topicNumber: '1.4',
          title: 'Similarity, Diagonalization & Quadratic Forms',
          syllabusText: 'Similarity of Matrices & Diagonalization of Square Matrices. Quadratic Form, Canonical Form of Matrices.',
          unitId: 'math-u1',
          subjectId: 'math-1',
          subjectCode: '100102',
          quickDefinition: 'A matrix A is diagonalizable if there exists an invertible modal matrix P such that P^(-1)AP = D (diagonal matrix of eigenvalues). A quadratic form X^T A X is reduced to canonical sum-of-squares form via orthogonal transformation.',
          whyItMatters: 'Decouples coupled differential equations in circuit transients, vibration analysis in aerospace engineering, and optimizes loss surfaces in AI deep learning.',
          coreConcept: [
            {
              heading: 'Similarity of Matrices & Diagonalization Condition',
              paragraphs: [
                'Two square matrices A and B are similar if there exists an invertible matrix P such that B = P^(-1)AP.',
                'A matrix A of order n is diagonalizable if and only if it has n linearly independent eigenvectors.',
                'If P = [X_1 X_2 ... X_n] is the modal matrix formed by eigenvectors, then P^(-1)AP = diag(λ_1, λ_2, ..., λ_n).'
              ]
            },
            {
              heading: 'Quadratic Forms & Reduction to Canonical Form',
              paragraphs: [
                'A quadratic form in n variables is a homogeneous polynomial of degree 2: Q(X) = X^T A X, where A is a real symmetric matrix (a_ij = a_ji = 0.5 * coefficient of x_i x_j).',
                'By orthogonal transformation X = PY (where P is the normalized modal matrix of A):',
                'Q = Y^T (P^T A P) Y = λ_1 y_1^2 + λ_2 y_2^2 + ... + λ_n y_n^2 (Canonical Form).'
              ]
            },
            {
              heading: 'Nature / Definiteness of Quadratic Form',
              paragraphs: [
                '1. Positive Definite: All eigenvalues λ_i > 0.',
                '2. Negative Definite: All eigenvalues λ_i < 0.',
                '3. Positive Semi-definite: All λ_i >= 0 with at least one λ_i = 0.',
                '4. Negative Semi-definite: All λ_i <= 0 with at least one λ_i = 0.',
                '5. Indefinite: Some eigenvalues positive, some negative.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Diagonalization Transformation',
              latex: 'D = P^{-1} A P = \\begin{bmatrix} \\lambda_1 & 0 & \\dots & 0 \\\\ 0 & \\lambda_2 & \\dots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\dots & \\lambda_n \\end{bmatrix}',
              explanation: 'Modal matrix P columns are normalized eigenvectors of A.'
            },
            {
              title: 'Orthogonal Reduction of Quadratic Form',
              latex: 'Q = X^T A X \\xrightarrow{X = PY} Y^T D Y = \\sum_{i=1}^n \\lambda_i y_i^2',
              explanation: 'Diagonalizes the symmetric matrix to express Q as a pure sum of squares.'
            }
          ],
          example: {
            problem: 'Diagonalize matrix A = [[3, 1], [1, 3]].',
            solutionSteps: [
              'Step 1: Characteristic equation (3-λ)^2 - 1 = 0 ==> λ^2 - 6λ + 8 = 0 ==> λ_1 = 4, λ_2 = 2.',
              'Step 2: For λ_1 = 4: (A - 4I)X = [[-1, 1], [1, -1]]X = 0 ==> -x_1 + x_2 = 0 ==> X_1 = [1, 1]^T.',
              'Step 3: For λ_2 = 2: (A - 2I)X = [[1, 1], [1, 1]]X = 0 ==> x_1 + x_2 = 0 ==> X_2 = [1, -1]^T.',
              'Step 4: Form modal matrix P = [[1, 1], [1, -1]]. det(P) = -2 ≠ 0.',
              'Step 5: P^(-1) = (-1/2)[[-1, -1], [-1, 1]] = (1/2)[[1, 1], [1, -1]].',
              'Step 6: P^(-1)AP = [[4, 0], [0, 2]] = D.'
            ],
            finalAnswer: 'Diagonal matrix D = [[4, 0], [0, 2]] with transforming modal matrix P = [[1, 1], [1, -1]].'
          },
          engineeringApplication: {
            title: 'Vibration Modal Analysis in Civil & Mechanical Structures',
            description: 'Coupled equations of motion M(x’’) + K(x) = 0 for multi-storey buildings during earthquakes are decoupled into independent single-degree modes using modal matrix diagonalization.',
            impact: 'Allows engineers to design earthquake-resistant skyscrapers by tuning natural resonance frequencies.'
          },
          commonMistakes: [
            {
              mistake: 'Assuming all matrices can be diagonalized.',
              correction: 'Only matrices with n linearly independent eigenvectors (or distinct eigenvalues, or symmetric matrices) are diagonalizable.',
              why: 'If algebraic multiplicity > geometric multiplicity for any eigenvalue, the matrix is defective and cannot be diagonalized.'
            }
          ],
          quickRevision: [
            'A is diagonalizable iff it has n linearly independent eigenvectors.',
            'P is constructed by placing eigenvectors as columns.',
            'Quadratic form Q = X^T A X where A is symmetric.',
            'Canonical form is λ_1*y_1^2 + λ_2*y_2^2 + ... + λ_n*y_n^2.',
            'Definiteness is decided by the signs of eigenvalues.'
          ],
          examFocus: {
            questionTypes: ['Diagonalize a 3x3 matrix (7 Marks)', 'Reduce quadratic form 3x^2+5y^2+3z^2-2yz+2zx-2xy to canonical form and state nature, rank, index, and signature (8-10 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Orthogonal diagonalization of real symmetric matrices', 'Sylvester’s Law of Inertia'],
            tip: 'Index = number of positive terms in canonical form; Signature = (positive terms) - (negative terms).'
          },
          visualType: 'matrix-transform',
          visualCaption: 'Diagonalization & Coordinate Axis Rotation',
          visualExplanation: 'Shows how an ellipse/ellipsoid with cross-product terms (x1*x2) is rotated onto principal coordinate axes where it aligns with pure square terms.',
          estimatedMinutes: 35
        }
      ]
    },
    {
      id: 'math-u2',
      unitNumber: 2,
      title: 'Differential Calculus: Single Variable',
      hours: 8,
      mappedCOs: ['CO2'],
      learningObjectives: [
        'Compute nth order derivatives using successive differentiation and Leibnitz’s Theorem.',
        'Apply Rolle’s, Lagrange’s, and Cauchy’s Mean Value Theorems.',
        'Evaluate limits of indeterminate forms using L’Hôpital’s Rule.',
        'Calculate tangents, normals, and radius of curvature of algebraic and polar curves.'
      ],
      topics: [
        {
          id: 'math-u2-t1',
          topicNumber: '2.1',
          title: 'Higher Order Derivatives & Leibnitz’s Theorem',
          syllabusText: 'Higher order derivatives; Successive differentiation and Leibnitz’s Theorem.',
          unitId: 'math-u2',
          subjectId: 'math-1',
          subjectCode: '100102',
          quickDefinition: 'Successive differentiation is the repeated differentiation of a function n times. Leibnitz’s Theorem provides a binomial-like expansion to compute the nth derivative of the product of two functions (uv).',
          whyItMatters: 'Used in deriving Taylor series approximations, solving higher-order differential equations in circuit dynamics, and computing accelerations/jerks in vehicle physics.',
          coreConcept: [
            {
              heading: 'Standard nth Derivatives',
              paragraphs: [
                '1. y = (ax + b)^m ==> y_n = m(m-1)...(m-n+1) * a^n * (ax+b)^{m-n}.',
                '2. y = e^{ax} ==> y_n = a^n * e^{ax}.',
                '3. y = sin(ax + b) ==> y_n = a^n * sin(ax + b + n*pi/2).',
                '4. y = cos(ax + b) ==> y_n = a^n * cos(ax + b + n*pi/2).',
                '5. y = e^{ax} * sin(bx + c) ==> y_n = (a^2 + b^2)^{n/2} * e^{ax} * sin(bx + c + n*arctan(b/a)).'
              ]
            },
            {
              heading: 'Leibnitz’s Theorem',
              paragraphs: [
                'If u and v are two functions of x possessing derivatives of the nth order, then the nth derivative of their product is given by:',
                '(uv)_n = ^nC_0 u_n v + ^nC_1 u_{n-1} v_1 + ^nC_2 u_{n-2} v_2 + ... + ^nC_r u_{n-r} v_r + ... + ^nC_n u v_n.',
                'Strategy: Choose v as the polynomial function whose higher derivatives quickly vanish (v_2 = 0 or v_3 = 0).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Leibnitz’s Formula',
              latex: '\\frac{d^n}{dx^n}(uv) = \\sum_{r=0}^n \\binom{n}{r} u_{n-r} v_r = u_n v + n u_{n-1} v_1 + \\frac{n(n-1)}{2!} u_{n-2} v_2 + \\dots + u v_n',
              explanation: 'Generalizes the product rule to the nth derivative.'
            },
            {
              title: 'Exponential Sine nth Derivative',
              latex: 'y = e^{ax}\\sin(bx+c) \\implies y_n = r^n e^{ax} \\sin(bx + c + n\\phi) \\quad \\text{where } r = \\sqrt{a^2+b^2}, \\phi = \\tan^{-1}(b/a)',
              explanation: 'Key formula for solving underdamped oscillator equations.'
            }
          ],
          example: {
            problem: 'If y = sin(m * arcsin(x)), prove that (1 - x^2) y_{n+2} - (2n+1)x y_{n+1} + (m^2 - n^2) y_n = 0.',
            solutionSteps: [
              'Step 1: Differentiate once: y_1 = (m * cos(m * arcsin(x))) / sqrt(1 - x^2).',
              'Step 2: Cross-multiply and square: (1 - x^2) y_1^2 = m^2 cos^2(m * arcsin(x)) = m^2 (1 - y^2).',
              'Step 3: Differentiate again: (1 - x^2)*2*y_1*y_2 - 2x*y_1^2 = -m^2 * 2y * y_1.',
              'Step 4: Divide by 2*y_1: (1 - x^2) y_2 - x y_1 + m^2 y = 0.',
              'Step 5: Apply Leibnitz theorem to each term for n differentiations: (1-x^2)y_{n+2} + n(-2x)y_{n+1} + (n(n-1)/2)(-2)y_n - [x y_{n+1} + n(1)y_n] + m^2 y_n = 0.',
              'Step 6: Combine coefficients: (1 - x^2) y_{n+2} - (2n+1)x y_{n+1} + (m^2 - n^2) y_n = 0.'
            ],
            finalAnswer: 'Identity proved successfully.'
          },
          engineeringApplication: {
            title: 'Signal Processing & Filter Design',
            description: 'Higher-order derivatives of transfer functions determine phase delay, group delay, and impulse response roll-off rates in DSP filters.',
            impact: 'Prevents signal distortion in high-frequency wireless communication systems.'
          },
          commonMistakes: [
            {
              mistake: 'Assigning u and v incorrectly in Leibnitz expansion.',
              correction: 'Always set v to the term that terminates after a few differentiations (e.g., x^2, x^3) to avoid an infinite expansion.',
              why: 'Polynomial derivatives become zero after their degree, making the expansion finite and simple.'
            }
          ],
          quickRevision: [
            'nth derivative of e^(ax)sin(bx) uses r = sqrt(a^2+b^2), theta = arctan(b/a).',
            'Leibnitz theorem has binomial coefficients nCr.',
            'Standard BEU question: (1-x^2)y_2 - xy_1 + a^2y = 0 type proof.',
            'Use y_n(0) evaluation via Maclaurin expansion.'
          ],
          examFocus: {
            questionTypes: ['Prove recurrence relation using Leibnitz theorem (7 Marks)', 'Find (y_n)_0 at x = 0 (8 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['Leibnitz Theorem for nth derivative of product'],
            tip: 'In BEU exams, y = (sin^(-1)x)^2 or y = e^(a sin^(-1)x) are the two most frequently asked Leibnitz proofs.'
          },
          visualType: 'leibnitz-rule',
          visualCaption: 'Successive Derivatives & Polynomial Truncation in Leibnitz Expansion',
          visualExplanation: 'Diagram highlighting the triangular cancellation of derivative terms when paired with algebraic polynomials.',
          estimatedMinutes: 30
        },
        {
          id: 'math-u2-t2',
          topicNumber: '2.2',
          title: 'Mean Value Theorems (Rolle’s, Lagrange’s, Cauchy’s)',
          syllabusText: 'Mean Value Theorems (Rolle’s; Lagrange’s; Cauchy).',
          unitId: 'math-u2',
          subjectId: 'math-1',
          subjectCode: '100102',
          quickDefinition: 'Mean Value Theorems establish that for a continuous and differentiable function over [a, b], there exists at least one intermediate point c in (a, b) where the instantaneous rate of change equals the average rate of change.',
          whyItMatters: 'Forms the rigorous mathematical backbone for numerical root finding (Newton-Raphson), error estimation in algorithms, and physics kinematics.',
          coreConcept: [
            {
              heading: 'Rolle’s Theorem',
              paragraphs: [
                'Conditions: If f(x) is (1) continuous in [a, b], (2) differentiable in (a, b), and (3) f(a) = f(b).',
                'Conclusion: There exists at least one point c in (a, b) such that f’(c) = 0 (horizontal tangent).'
              ]
            },
            {
              heading: 'Lagrange’s Mean Value Theorem (LMVT)',
              paragraphs: [
                'Conditions: (1) f(x) is continuous in [a, b], (2) f(x) is differentiable in (a, b).',
                'Conclusion: There exists at least one point c in (a, b) such that f’(c) = [f(b) - f(a)] / (b - a).',
                'Geometrical meaning: Tangent at c is parallel to the secant chord joining (a, f(a)) and (b, f(b)).'
              ]
            },
            {
              heading: 'Cauchy’s Mean Value Theorem (CMVT)',
              paragraphs: [
                'Conditions: (1) f(x) and g(x) are continuous in [a, b], (2) differentiable in (a, b), and (3) g’(x) ≠ 0 for all x in (a, b).',
                'Conclusion: There exists c in (a, b) such that [f(b) - f(a)] / [g(b) - g(a)] = f’(c) / g’(c).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Rolle’s Condition',
              latex: 'f(a) = f(b) \\implies \\exists c \\in (a, b) : f\'(c) = 0',
              explanation: 'At least one peak or trough exists between equal endpoints.'
            },
            {
              title: 'Lagrange’s MVT',
              latex: 'f\'(c) = \\frac{f(b) - f(a)}{b - a} \\quad \\text{for some } c \\in (a, b)',
              explanation: 'Instantaneous slope equals average chord slope.'
            },
            {
              title: 'Cauchy’s Generalized MVT',
              latex: '\\frac{f\'(c)}{g\'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)} \\quad \\text{for some } c \\in (a, b)',
              explanation: 'Relates the ratio of rates of change of two functions.'
            }
          ],
          example: {
            problem: 'Verify Lagrange’s Mean Value Theorem for f(x) = x(x-1)(x-2) in [0, 1/2].',
            solutionSteps: [
              'Step 1: f(x) = x^3 - 3x^2 + 2x is a polynomial, hence continuous in [0, 1/2] and differentiable in (0, 1/2).',
              'Step 2: f(0) = 0, f(1/2) = (1/2)(-1/2)(-3/2) = 3/8.',
              'Step 3: Average slope = [f(1/2) - f(0)] / (1/2 - 0) = (3/8) / (1/2) = 3/4.',
              'Step 4: f’(x) = 3x^2 - 6x + 2. Set 3c^2 - 6c + 2 = 3/4 ==> 3c^2 - 6c + 5/4 = 0 ==> 12c^2 - 24c + 5 = 0.',
              'Step 5: c = [24 ± sqrt(576 - 240)] / 24 = [24 ± sqrt(336)] / 24 = 1 ± sqrt(21)/6 ≈ 1 ± 0.7638.',
              'Step 6: c = 1 - 0.7638 = 0.2362, which lies strictly inside (0, 0.5).'
            ],
            finalAnswer: 'LMVT is verified with c = 1 - sqrt(21)/6 ≈ 0.2362 in (0, 1/2).'
          },
          engineeringApplication: {
            title: 'Speed Traps & Average Velocity Enforcement',
            description: 'Highway electronic toll gates use LMVT: if a car covers 100 km between two booths in 45 minutes (average speed 133 km/h in a 100 km/h zone), LMVT proves the driver must have exceeded 133 km/h at some instantaneous point c.',
            impact: 'Provides legally indisputable proof in automated traffic enforcement systems.'
          },
          commonMistakes: [
            {
              mistake: 'Checking differentiability at the closed boundaries [a, b].',
              correction: 'Differentiability is required ONLY on the OPEN interval (a, b). Continuity is required on the CLOSED interval [a, b].',
              why: 'Endpoints only have one-sided limits, so two-sided derivative cannot exist at boundaries.'
            }
          ],
          quickRevision: [
            'Rolle’s needs f(a) = f(b) -> f’(c) = 0.',
            'LMVT: f’(c) = [f(b)-f(a)] / (b-a).',
            'CMVT: f’(c)/g’(c) = [f(b)-f(a)] / [g(b)-g(a)].',
            'c MUST strictly lie between a and b: a < c < b.'
          ],
          examFocus: {
            questionTypes: ['Verify Rolle’s / LMVT / Cauchy’s theorem for given algebraic/trig function (5-7 Marks)', 'Prove inequality using LMVT e.g., x/(1+x^2) < tan^(-1)x < x (7 Marks)'],
            likelyMarks: '6 to 7 Marks',
            keyTheorems: ['Rolle’s Theorem', 'Lagrange’s MVT', 'Cauchy’s MVT'],
            tip: 'Always explicitly state the continuity and differentiability conditions before calculating c.'
          },
          visualType: 'mean-value-theorems',
          visualCaption: 'Lagrange’s MVT: Parallel Secant & Tangent Slopes',
          visualExplanation: 'Graph demonstrating the secant line between (a, f(a)) and (b, f(b)) and the parallel tangent line at point (c, f(c)).',
          estimatedMinutes: 25
        },
        {
          id: 'math-u2-t3',
          topicNumber: '2.3',
          title: 'Indeterminate Forms & L’Hôpital’s Rule',
          syllabusText: 'Indeterminate Forms; L’ Hopital Rule.',
          unitId: 'math-u2',
          subjectId: 'math-1',
          subjectCode: '100102',
          quickDefinition: 'Indeterminate forms (0/0, ∞/∞, 0*∞, ∞-∞, 0^0, 1^∞, ∞^0) are expressions whose limits cannot be evaluated by direct substitution. L’Hôpital’s Rule evaluates 0/0 and ∞/∞ by taking derivatives of numerator and denominator independently.',
          whyItMatters: 'Essential for evaluating asymptotic algorithm complexities (Big-O), frequency response limits in transfer functions, and quantum boundary limits.',
          coreConcept: [
            {
              heading: 'Standard Forms & L’Hôpital’s Theorem',
              paragraphs: [
                'If lim_{x->a} f(x)/g(x) results in 0/0 or ∞/∞, then:',
                'lim_{x->a} f(x)/g(x) = lim_{x->a} f’(x)/g’(x), provided the latter limit exists.',
                'The rule can be applied repeatedly until a determinate value is reached.'
              ]
            },
            {
              heading: 'Transforming Other Indeterminate Forms',
              paragraphs: [
                '1. Form (0 * ∞): Rewrite f(x)*g(x) as f(x)/(1/g(x)) or g(x)/(1/f(x)) to get 0/0 or ∞/∞.',
                '2. Form (∞ - ∞): Combine into a single fraction via common denominator (e.g., 1/x - 1/sin x).',
                '3. Exponential forms (0^0, 1^∞, ∞^0): Take natural logarithm: let y = [f(x)]^{g(x)} ==> ln y = g(x) * ln f(x), evaluate limit L, then original limit is e^L.'
              ]
            }
          ],
          formulas: [
            {
              title: 'L’Hôpital’s Rule',
              latex: '\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)} \\quad \\left( \\text{for } \\frac{0}{0} \\text{ or } \\frac{\\infty}{\\infty} \\right)',
              explanation: 'Differentiate numerator and denominator separately (do NOT use quotient rule).'
            },
            {
              title: 'Exponential Indeterminate Limit',
              latex: '\\lim_{x \\to a} [f(x)]^{g(x)} = e^{\\lim_{x \\to a} g(x) \\ln f(x)} = e^{\\lim_{x \\to a} g(x)(f(x)-1)} \\quad (\\text{for } 1^\\infty)',
              explanation: 'Standard shortcut for 1^infinity forms.'
            }
          ],
          example: {
            problem: 'Evaluate lim_{x -> 0} (tan x / x)^(1/x^2).',
            solutionSteps: [
              'Step 1: As x -> 0, tan x / x -> 1, 1/x^2 -> ∞ (Form 1^∞).',
              'Step 2: Let y = (tan x / x)^(1/x^2) ==> ln y = (1/x^2) * ln(tan x / x).',
              'Step 3: lim_{x -> 0} ln(tan x / x) / x^2 is of form 0/0. Apply L’Hopital’s rule.',
              'Step 4: Derivative of numerator: (x / tan x) * [(x sec^2 x - tan x) / x^2] = (x sec^2 x - tan x) / (x tan x).',
              'Step 5: ln y = lim_{x->0} (x sec^2 x - tan x) / (2x^2 * tan x) ≈ lim_{x->0} (x(1+x^2+...) - (x + x^3/3)) / (2x^3) = (x^3 - x^3/3)/(2x^3) = (2/3)/2 = 1/3.',
              'Step 6: Therefore, lim y = e^(1/3).'
            ],
            finalAnswer: 'Limit = e^(1/3).'
          },
          engineeringApplication: {
            title: 'Bandwidth Limit in Telecommunication (Nyquist-Shannon)',
            description: 'Sampling theory formulas such as sinc(x) = sin(pi*x)/(pi*x) evaluate to 0/0 at origin x = 0. L’Hopital’s rule verifies sinc(0) = 1, ensuring unity signal gain at baseband.',
            impact: 'Guarantees zero amplitude distortion at DC carrier frequency.'
          },
          commonMistakes: [
            {
              mistake: 'Using quotient rule (f’g - fg’)/g^2 inside L’Hôpital’s rule.',
              correction: 'Differentiate numerator f’(x) and denominator g’(x) independently.',
              why: 'L’Hôpital’s rule compares rate of vanishing of f(x) vs g(x), not the derivative of f/g.'
            }
          ],
          quickRevision: [
            'Only apply directly to 0/0 and ∞/∞.',
            'For 0*∞: invert one factor.',
            'For 1^∞: use e^[lim g(x)(f(x)-1)].',
            'Always verify the form is still indeterminate before differentiating again.'
          ],
          examFocus: {
            questionTypes: ['Evaluate 1^∞ or 0^0 limit problem (5-7 Marks)', 'Evaluate (1/x^2 - cot^2 x) as x -> 0 (5 Marks)'],
            likelyMarks: '5 to 7 Marks',
            keyTheorems: ['L’Hôpital’s Theorem'],
            tip: 'If L’Hôpital’s becomes messy with trig terms, substitute Taylor/Maclaurin series expansions for faster evaluation.'
          },
          visualType: 'indeterminate-limits',
          visualCaption: 'Ratio of Infinitesimals and L’Hôpital Slope Comparison',
          visualExplanation: 'Shows two curves f(x) and g(x) approaching 0, with their tangent slopes f’(0) and g’(0) resolving the indeterminate ratio.',
          estimatedMinutes: 20
        },
        {
          id: 'math-u2-t4',
          topicNumber: '2.4',
          title: 'Tangents, Normals & Curvature of Curves',
          syllabusText: 'Tangents & Normal of Algebraic & Polar Curves, Curvature (Cartesian, Parametric, Polar, Radius of Curvature, Center of Curvature).',
          unitId: 'math-u2',
          subjectId: 'math-1',
          subjectCode: '100102',
          quickDefinition: 'Curvature κ measures the rate of change of direction of the tangent with respect to arc length s (κ = dψ/ds). The radius of curvature ρ = 1/κ is the radius of the osculating circle fitting the curve at that point.',
          whyItMatters: 'Critical in designing highway transition spiral curves, railway track banking, roller-coaster loops, and cam-follower machine profiles to prevent abrupt centrifugal shocks.',
          coreConcept: [
            {
              heading: 'Tangents & Normals (Cartesian & Polar)',
              paragraphs: [
                'Cartesian: Slope of tangent m = dy/dx. Equation of tangent: Y - y = (dy/dx)(X - x). Equation of normal: Y - y = -1/(dy/dx)(X - x).',
                'Polar: Angle between radius vector and tangent is φ, where tan φ = r (dθ/dr).'
              ]
            },
            {
              heading: 'Radius of Curvature Formulas',
              paragraphs: [
                '1. Cartesian form y = f(x): ρ = [1 + (y_1)^2]^(3/2) / |y_2|.',
                '2. Parametric form x = f(t), y = g(t): ρ = [(x’)^2 + (y’)^2]^(3/2) / |x’ y’’ - y’ x’’|.',
                '3. Polar form r = f(θ): ρ = [r^2 + (r_1)^2]^(3/2) / |r^2 + 2(r_1)^2 - r*r_2| where r_1 = dr/dθ, r_2 = d^2r/dθ^2.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Cartesian Radius of Curvature',
              latex: '\\rho = \\frac{\\left[ 1 + \\left( \\frac{dy}{dx} \\right)^2 \\right]^{3/2}}{\\left| \\frac{d^2y}{dx^2} \\right|} = \\frac{(1 + y_1^2)^{3/2}}{|y_2|}',
              explanation: 'Fundamental formula relating first and second derivatives to radius of curvature.'
            },
            {
              title: 'Polar Radius of Curvature',
              latex: '\\rho = \\frac{(r^2 + r_1^2)^{3/2}}{|r^2 + 2r_1^2 - r r_2|} \\quad \\text{where } r_1 = \\frac{dr}{d\\theta}, r_2 = \\frac{d^2r}{d\\theta^2}',
              explanation: 'Applies to cardioids, spirals, and lemniscates.'
            },
            {
              title: 'Polar Tangent Angle φ',
              latex: '\\tan \\phi = r \\frac{d\\theta}{dr}',
              explanation: 'Angle between radius vector and the tangent.'
            }
          ],
          example: {
            problem: 'Find the radius of curvature of the cycloid x = a(θ + sin θ), y = a(1 - cos θ) at any point θ.',
            solutionSteps: [
              'Step 1: dx/dθ = a(1 + cos θ) = 2a cos^2(θ/2).',
              'Step 2: dy/dθ = a sin θ = 2a sin(θ/2) cos(θ/2).',
              'Step 3: dy/dx = (dy/dθ) / (dx/dθ) = sin(θ/2) / cos(θ/2) = tan(θ/2).',
              'Step 4: d^2y/dx^2 = (d/dθ[tan(θ/2)]) * (dθ/dx) = (1/2 sec^2(θ/2)) / (2a cos^2(θ/2)) = 1 / (4a cos^4(θ/2)).',
              'Step 5: 1 + (dy/dx)^2 = 1 + tan^2(θ/2) = sec^2(θ/2).',
              'Step 6: ρ = [sec^2(θ/2)]^(3/2) / [1 / (4a cos^4(θ/2))] = sec^3(θ/2) * 4a cos^4(θ/2) = 4a cos(θ/2).'
            ],
            finalAnswer: 'Radius of curvature ρ = 4a cos(θ/2).'
          },
          engineeringApplication: {
            title: 'High-Speed Railway Track Transition Curves (Euler Spirals)',
            description: 'Railway engineers design clothoid curves where curvature increases linearly with distance (κ ∝ s). This ensures centrifugal force builds up gradually, preventing train derailment.',
            impact: 'Guarantees passenger comfort and wheel-rail longevity on bullet train routes.'
          },
          commonMistakes: [
            {
              mistake: 'Forgetting dθ/dx when finding d^2y/dx^2 in parametric form.',
              correction: 'd^2y/dx^2 = (d/dt [dy/dx]) * (dt/dx). You MUST multiply by dt/dx = 1/(dx/dt).',
              why: 'Chain rule is mandatory because dy/dx is a function of parameter t, not x.'
            }
          ],
          quickRevision: [
            'Curvature κ = dψ/ds; Radius ρ = 1/κ.',
            'Cartesian: ρ = (1 + y_1^2)^(3/2) / y_2.',
            'Polar: tan φ = r dθ/dr.',
            'For cycloid x = a(θ+sin θ), y = a(1-cos θ): ρ = 4a cos(θ/2).'
          ],
          examFocus: {
            questionTypes: ['Find radius of curvature for cycloid, astroid, or cardioid r = a(1 + cos θ) (7-8 Marks)', 'Find angle of intersection of two polar curves (5 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['Osculating Circle & Radius of Curvature formula derivation'],
            tip: 'For polar cardioid r = a(1 + cos θ), memorize that ρ = (4/3) a cos(θ/2).'
          },
          visualType: 'curvature-osculating',
          visualCaption: 'Osculating Circle & Radius of Curvature ρ',
          visualExplanation: 'Illustrates the osculating circle sharing the same tangent and second derivative at point P on the curve.',
          estimatedMinutes: 30
        }
      ]
    },
    {
      id: 'math-u3',
      unitNumber: 3,
      title: 'Differential Calculus: Several Variables',
      hours: 9,
      mappedCOs: ['CO3'],
      learningObjectives: [
        'Apply Euler’s Theorem on homogeneous functions of several variables.',
        'Test limits, continuity, and differentiability of multivariable functions.',
        'Expand multivariable functions using Taylor’s and Maclaurin’s theorems.',
        'Find maxima, minima, and saddle points using Lagrange’s Multiplier method.'
      ],
      topics: [
        {
          id: 'math-u3-t1',
          topicNumber: '3.1',
          title: 'Partial Differentiation & Euler’s Theorem',
          syllabusText: 'Partial differentiations; Euler’s theorems on homogeneous functions.',
          unitId: 'math-u3',
          subjectId: 'math-1',
          subjectCode: '100102',
          quickDefinition: 'Euler’s Theorem states that if u(x, y) is a homogeneous function of degree n, then x*(∂u/∂x) + y*(∂u/∂y) = n*u.',
          whyItMatters: 'Used in thermodynamics (equation of state, Gibbs free energy), fluid mechanics continuity equations, and microeconomics production functions.',
          coreConcept: [
            {
              heading: 'Homogeneous Functions & Definition',
              paragraphs: [
                'A function f(x, y) is homogeneous of degree n if f(tx, ty) = t^n * f(x, y) for all t > 0.',
                'Alternatively, f(x, y) can be written as x^n * phi(y/x) or y^n * psi(x/y).'
              ]
            },
            {
              heading: 'Euler’s Theorem Statements',
              paragraphs: [
                '1st Order: If u = f(x, y) is homogeneous of degree n, then x*(∂u/∂x) + y*(∂u/∂y) = n*u.',
                '2nd Order: x^2*(∂^2u/∂x^2) + 2xy*(∂^2u/∂x∂y) + y^2*(∂^2u/∂y^2) = n(n - 1)*u.',
                'Composite Homogeneous Case: If u = f(v) where v is homogeneous of degree n, then x*(∂u/∂x) + y*(∂u/∂y) = n * [f(v) / f’(v)] = n * [F(u) / F’(u)].'
              ]
            }
          ],
          formulas: [
            {
              title: 'Euler’s 1st Theorem',
              latex: 'x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n u',
              explanation: 'Fundamental relation for homogeneous functions of degree n.'
            },
            {
              title: 'Euler’s 2nd Order Theorem',
              latex: 'x^2 \\frac{\\partial^2 u}{\\partial x^2} + 2xy \\frac{\\partial^2 u}{\\partial x \\partial y} + y^2 \\frac{\\partial^2 u}{\\partial y^2} = n(n-1) u',
              explanation: 'Second-order expansion for homogeneous functions.'
            },
            {
              title: 'Euler’s Modified Composite Form',
              latex: 'x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n \\frac{F(u)}{F\'(u)} \\quad (\\text{when } F(u) \\text{ is homogeneous})',
              explanation: 'Crucial for problems like u = sin^(-1)[(x+y)/(sqrt(x)+sqrt(y))].'
            }
          ],
          example: {
            problem: 'If u = sin^(-1)[(x^2 + y^2) / (x + y)], prove that x(∂u/∂x) + y(∂u/∂y) = tan u.',
            solutionSteps: [
              'Step 1: Let v = sin u = (x^2 + y^2) / (x + y).',
              'Step 2: Check homogeneity of v: v(tx, ty) = t^2(x^2+y^2) / t(x+y) = t^1 * v(x, y). So v is homogeneous of degree n = 1.',
              'Step 3: By Euler’s theorem on v: x(∂v/∂x) + y(∂v/∂y) = 1 * v = sin u.',
              'Step 4: Since v = sin u, ∂v/∂x = cos u * (∂u/∂x) and ∂v/∂y = cos u * (∂u/∂y).',
              'Step 5: Substitute: x(cos u ∂u/∂x) + y(cos u ∂u/∂y) = sin u.',
              'Step 6: Divide by cos u: x(∂u/∂x) + y(∂u/∂y) = sin u / cos u = tan u.'
            ],
            finalAnswer: 'Proved: x(∂u/∂x) + y(∂u/∂y) = tan u.'
          },
          engineeringApplication: {
            title: 'Thermodynamic State Functions & Ideal Gas Enthalpy',
            description: 'Extensive thermodynamic properties (volume V, enthalpy H, internal energy U) are homogeneous functions of degree 1 in mole numbers n_i. Euler’s theorem relates total enthalpy to partial molar enthalpies.',
            impact: 'Enables chemical process simulations in petroleum refineries and thermal power plants.'
          },
          commonMistakes: [
            {
              mistake: 'Applying Euler’s theorem directly on u when u is not homogeneous (e.g. u = sin^(-1)(...)).',
              correction: 'Take sin(u) = v first, verify homogeneity of v, then apply chain rule.',
              why: 'Inverse trigonometric and logarithmic functions break algebraic homogeneity.'
            }
          ],
          quickRevision: [
            'f(tx, ty) = t^n f(x, y) defines homogeneous of degree n.',
            'x u_x + y u_y = n u.',
            'x^2 u_xx + 2xy u_xy + y^2 u_yy = n(n-1)u.',
            'For u = tan^(-1)(v), x u_x + y u_y = n * sin(2u) / 2 type relations.'
          ],
          examFocus: {
            questionTypes: ['Prove Euler’s theorem for u = sin^(-1) / tan^(-1) / ln forms (7-8 Marks)', 'Evaluate 2nd order expression x^2 u_xx + 2xy u_xy + y^2 u_yy (8 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['Euler’s Theorem for Homogeneous Functions'],
            tip: 'Degree n = (power of numerator) - (power of denominator). For (x^3+y^3)/(x-y), n = 3 - 1 = 2.'
          },
          visualType: 'eulers-homogeneous',
          visualCaption: 'Homogeneous Surface Scaling and Radial Directional Derivatives',
          visualExplanation: '3D diagram showing rays from origin along which homogeneous functions scale as t^n, validating Euler’s relation.',
          estimatedMinutes: 25
        },
        {
          id: 'math-u3-t2',
          topicNumber: '3.2',
          title: 'Limit, Continuity & Differentiability of Several Variables',
          syllabusText: 'Limit, Continuity and differentiability of functions of Several Variables.',
          unitId: 'math-u3',
          subjectId: 'math-1',
          subjectCode: '100102',
          quickDefinition: 'For multivariable functions f(x, y), a limit lim_{(x,y)->(a,b)} f(x,y) = L must yield the same value L along EVERY possible path approaching (a, b). If two paths yield different limits, the limit does not exist.',
          whyItMatters: 'Guarantees smooth potential energy landscapes in robotics path planning and finite element stress simulations.',
          coreConcept: [
            {
              heading: 'Path Independence & Non-Existence of Limits',
              paragraphs: [
                'In single variable, x can approach a from only 2 directions (left/right). In 2 variables, (x, y) can approach (a, b) along infinitely many curves (lines y = mx, parabolas y = kx^2, etc.).',
                'Two-path test: If approaching along y = mx yields a limit depending on slope m, the limit DOES NOT exist.'
              ]
            },
            {
              heading: 'Continuity & Total Differentiability',
              paragraphs: [
                'Continuity: f(x, y) is continuous at (a, b) if lim_{(x,y)->(a,b)} f(x,y) = f(a,b).',
                'Differentiability: Existence of partial derivatives f_x and f_y does NOT guarantee differentiability! Total differentiability requires delta f = f_x*dx + f_y*dy + epsilon_1*dx + epsilon_2*dy, where epsilon_1, epsilon_2 -> 0 as (dx, dy) -> (0, 0).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Definition of Total Differential',
              latex: 'df = \\frac{\\partial f}{\\partial x} dx + \\frac{\\partial f}{\\partial y} dy',
              explanation: 'Linear approximation of function change in terms of independent increments dx and dy.'
            },
            {
              title: 'Polar Limit Test',
              latex: 'x = r\\cos\\theta, y = r\\sin\\theta \\implies \\lim_{r \\to 0} f(r\\cos\\theta, r\\sin\\theta) = L \\quad (\\text{independent of } \\theta)',
              explanation: 'If the limit depends on angle theta, the limit does not exist.'
            }
          ],
          example: {
            problem: 'Check if lim_{(x,y)->(0,0)} (xy) / (x^2 + y^2) exists.',
            solutionSteps: [
              'Step 1: Approach along the straight line path y = mx.',
              'Step 2: Substitute y = mx: lim_{x -> 0} [x(mx)] / [x^2 + m^2 x^2] = lim_{x->0} [m x^2] / [x^2(1 + m^2)].',
              'Step 3: Simplify: m / (1 + m^2).',
              'Step 4: For m = 1 (path y = x), limit = 1/2. For m = 2 (path y = 2x), limit = 2/5.',
              'Step 5: Since the limit depends on the path slope m, the limit does not exist.'
            ],
            finalAnswer: 'Limit does not exist.'
          },
          engineeringApplication: {
            title: 'Crack Stress Singularities in Fracture Mechanics',
            description: 'Near a sharp crack tip in aerospace titanium plates, stress fields exhibit multivariable indeterminate limits. Stress intensity factors quantify whether stress stays bounded or causes catastrophic fracture.',
            impact: 'Ensures aircraft fuselage panels withstand cyclic pressurization without tearing.'
          },
          commonMistakes: [
            {
              mistake: 'Assuming limit exists after checking only lines y = mx.',
              correction: 'Must also check parabolic paths y = kx^2 if powers in numerator and denominator balance (e.g., for xy^2 / (x^2 + y^4)).',
              why: 'Degree balance along parabolic paths can reveal hidden path dependencies.'
            }
          ],
          quickRevision: [
            'Limit must be identical along ALL paths.',
            'y = mx is the first test for degree-balanced rational functions.',
            'y = kx^2 for x^2 + y^4 denominators.',
            'Continuous iff limit equals exact function value f(a,b).'
          ],
          examFocus: {
            questionTypes: ['Show limit does not exist at (0,0) (4-5 Marks)', 'Test continuity and differentiability at origin (5-7 Marks)'],
            likelyMarks: '5 to 7 Marks',
            keyTheorems: ['Sufficient condition for differentiability (continuity of partial derivatives)'],
            tip: 'Always test y = mx first. If it cancels to m/(1+m^2), state: "Limit depends on path slope m, hence does not exist."'
          },
          visualType: 'multivariable-limits',
          visualCaption: 'Multivariable Directional Limit Paths in 2D Plane',
          visualExplanation: 'Illustrates straight-line and parabolic approach paths converging on origin (0,0), demonstrating path-dependent limit values.',
          estimatedMinutes: 20
        },
        {
          id: 'math-u3-t3',
          topicNumber: '3.3',
          title: 'Taylor’s & Maclaurin’s Theorem (Several Variables)',
          syllabusText: 'Taylor’s theorem with various forms of remainders, Maclaurin\'s theorem and related problems.',
          unitId: 'math-u3',
          subjectId: 'math-1',
          subjectCode: '100102',
          quickDefinition: 'Taylor’s theorem expands a multivariable function f(x+h, y+k) near (a, b) into an infinite series of partial differential operator powers: f(a+h, b+k) = exp(h ∂/∂x + k ∂/∂y) f(a, b).',
          whyItMatters: 'Provides polynomial approximations used in finite difference methods, gradient descent algorithms in AI, and flight simulator flight equations.',
          coreConcept: [
            {
              heading: 'Taylor’s Expansion Formula in Powers of (x - a) and (y - b)',
              paragraphs: [
                'f(x, y) = f(a, b) + [(x-a) f_x + (y-b) f_y] + (1/2!) [(x-a)^2 f_xx + 2(x-a)(y-b) f_xy + (y-b)^2 f_yy] + ...',
                'Maclaurin’s theorem is the special case centered at the origin (a, b) = (0, 0):',
                'f(x, y) = f(0, 0) + [x f_x + y f_y] + (1/2!) [x^2 f_xx + 2xy f_xy + y^2 f_yy] + ...'
              ]
            }
          ],
          formulas: [
            {
              title: 'Multivariable Taylor Expansion',
              latex: 'f(a+h, b+k) = f(a, b) + \\left( h \\frac{\\partial}{\\partial x} + k \\frac{\\partial}{\\partial y} \\right) f(a, b) + \\frac{1}{2!} \\left( h \\frac{\\partial}{\\partial x} + k \\frac{\\partial}{\\partial y} \\right)^2 f(a, b) + \\dots',
              explanation: 'Compact differential operator notation for multivariable expansion.'
            }
          ],
          example: {
            problem: 'Expand f(x, y) = e^x * cos y in powers of x and y up to second-degree terms.',
            solutionSteps: [
              'Step 1: Compute partial derivatives at (0, 0):',
              'f(0, 0) = e^0 cos 0 = 1.',
              'f_x = e^x cos y ==> f_x(0, 0) = 1.',
              'f_y = -e^x sin y ==> f_y(0, 0) = 0.',
              'f_xx = e^x cos y ==> f_xx(0, 0) = 1.',
              'f_xy = -e^x sin y ==> f_xy(0, 0) = 0.',
              'f_yy = -e^x cos y ==> f_yy(0, 0) = -1.',
              'Step 2: Apply Maclaurin’s formula: f(x, y) = 1 + [x(1) + y(0)] + (1/2)[x^2(1) + 2xy(0) + y^2(-1)].',
              'Step 3: Simplify: f(x, y) = 1 + x + (1/2)(x^2 - y^2).'
            ],
            finalAnswer: 'e^x cos y ≈ 1 + x + (x^2 - y^2)/2.'
          },
          engineeringApplication: {
            title: 'Non-linear Control System Linearization',
            description: 'Aircraft flight controllers linearize aerodynamic drag and lift surfaces about steady cruise equilibrium using first-order Taylor expansions to design PID stability controllers.',
            impact: 'Ensures autopilot stability in gusty turbulent atmospheric conditions.'
          },
          commonMistakes: [
            {
              mistake: 'Missing the factor 2 in the mixed partial term 2(x-a)(y-b) f_xy.',
              correction: 'Binomial expansion (h + k)^2 = h^2 + 2hk + k^2 includes coefficient 2 on mixed partials.',
              why: 'Both f_xy and f_yx contribute by Clairaut-Schwarz theorem.'
            }
          ],
          quickRevision: [
            'Taylor expands around (a, b); Maclaurin around (0, 0).',
            'Order 1 terms: h f_x + k f_y.',
            'Order 2 terms: (1/2)[h^2 f_xx + 2hk f_xy + k^2 f_yy].',
            'Always evaluate derivatives at the center point (a, b).'
          ],
          examFocus: {
            questionTypes: ['Expand f(x, y) up to 3rd degree terms (7-8 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['Taylor’s Theorem with Lagrange’s Remainder'],
            tip: 'Organize derivative values in a neat table before writing the final polynomial sum.'
          },
          visualType: 'taylor-series',
          visualCaption: '2D Tangent Plane & Paraboloid Taylor Approximations',
          visualExplanation: 'Shows quadratic surface approximating the true multivariable function curvature near the expansion point.',
          estimatedMinutes: 25
        },
        {
          id: 'math-u3-t4',
          topicNumber: '3.4',
          title: 'Maxima, Minima & Lagrange’s Multipliers',
          syllabusText: 'Maxima & Minima for functions of several variables; Lagrange’s Multiplier Method.',
          unitId: 'math-u3',
          subjectId: 'math-1',
          subjectCode: '100102',
          quickDefinition: 'Stationary points where f_x = 0 and f_y = 0 are classified using discriminant D = rt - s^2 (where r = f_xx, s = f_xy, t = f_yy). Constrained optimization utilizes Lagrange’s Multipliers: ∇f = λ ∇g.',
          whyItMatters: 'Optimization is the core of AI (loss function minimization), structural weight minimization in aerospace, and cost optimization in supply chains.',
          coreConcept: [
            {
              heading: 'Unconstrained Extreme Values (Second Derivative Test)',
              paragraphs: [
                'Step 1: Find critical points by solving ∂f/∂x = 0 and ∂f/∂y = 0 simultaneously.',
                'Step 2: Calculate r = f_xx, s = f_xy, t = f_yy at each critical point.',
                'Step 3: Test discriminant D = rt - s^2:',
                '  • If rt - s^2 > 0 and r < 0: Local Maximum.',
                '  • If rt - s^2 > 0 and r > 0: Local Minimum.',
                '  • If rt - s^2 < 0: Saddle Point (neither max nor min).',
                '  • If rt - s^2 = 0: Test inconclusive (further investigation needed).'
              ]
            },
            {
              heading: 'Lagrange’s Method of Undetermined Multipliers',
              paragraphs: [
                'To optimize f(x, y, z) subject to constraint g(x, y, z) = 0:',
                'Form auxiliary function L(x, y, z, λ) = f(x, y, z) + λ * g(x, y, z).',
                'Solve ∂L/∂x = 0, ∂L/∂y = 0, ∂L/∂z = 0, ∂L/∂λ = 0 simultaneously.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Hessian Discriminant Test',
              latex: 'D = rt - s^2 = \\left( \\frac{\\partial^2 f}{\\partial x^2} \\right)\\left( \\frac{\\partial^2 f}{\\partial y^2} \\right) - \\left( \\frac{\\partial^2 f}{\\partial x \\partial y} \\right)^2',
              explanation: 'Determines local geometry: positive gives extremum, negative gives saddle.'
            },
            {
              title: 'Lagrange Multiplier Condition',
              latex: '\\nabla f(x, y, z) + \\lambda \\nabla g(x, y, z) = \\mathbf{0} \\iff \\frac{f_x}{g_x} = \\frac{f_y}{g_y} = \\frac{f_z}{g_z} = -\\lambda',
              explanation: 'Gradients of objective function and constraint are collinear at extrema.'
            }
          ],
          example: {
            problem: 'Find the maximum volume of a rectangular box open at the top with a given surface area S = 108 sq. units.',
            solutionSteps: [
              'Step 1: Volume V = xyz. Surface area constraint: g(x, y, z) = xy + 2yz + 2zx - 108 = 0.',
              'Step 2: Auxiliary function L = xyz + λ(xy + 2yz + 2zx - 108).',
              'Step 3: ∂L/∂x = yz + λ(y + 2z) = 0 ==> λ = -yz / (y + 2z).',
              'Step 4: ∂L/∂y = xz + λ(x + 2z) = 0 ==> λ = -xz / (x + 2z).',
              'Step 5: ∂L/∂z = xy + λ(2y + 2x) = 0 ==> λ = -xy / (2x + 2y).',
              'Step 6: Equating yields: x = y = 2z.',
              'Step 7: Substitute into constraint: (2z)(2z) + 2(2z)z + 2(2z)z = 108 ==> 4z^2 + 4z^2 + 4z^2 = 108 ==> 12z^2 = 108 ==> z = 3.',
              'Step 8: Then x = 6, y = 6, z = 3. Max Volume V = 6 * 6 * 3 = 108 cubic units.'
            ],
            finalAnswer: 'Dimensions: x = 6, y = 6, z = 3; Maximum Volume = 108 cubic units.'
          },
          engineeringApplication: {
            title: 'Neural Network Loss Minimization & Gradient Descent',
            description: 'Deep neural networks optimize millions of weight parameters using multivariable gradient descent. Finding points where gradient is zero while avoiding high-dimensional saddle points is critical for model convergence.',
            impact: 'Drives training of large language models and autonomous driving vision models.'
          },
          commonMistakes: [
            {
              mistake: 'Declaring a point as maximum when rt - s^2 < 0.',
              correction: 'If rt - s^2 < 0, the point is a SADDLE POINT regardless of the sign of r.',
              why: 'Negative discriminant means the surface curves upwards in one direction and downwards in another.'
            }
          ],
          quickRevision: [
            'f_x = 0, f_y = 0 gives critical points.',
            'rt - s^2 > 0 and r > 0 -> Minima.',
            'rt - s^2 > 0 and r < 0 -> Maxima.',
            'rt - s^2 < 0 -> Saddle point.',
            'Lagrange: ∇f + λ ∇g = 0.'
          ],
          examFocus: {
            questionTypes: ['Find extreme values of f(x, y) = x^3 + y^3 - 3axy (8 Marks)', 'Lagrange Multiplier constrained box / sphere problem (8-10 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Lagrange Multiplier Theorem'],
            tip: 'The rectangular open box problem (V = 108 or V = 32) is a signature BEU exam favourite.'
          },
          visualType: 'maxima-minima',
          visualCaption: '3D Surface Topology: Peak, Valley & Saddle Point',
          visualExplanation: 'Visualizes 3D contour landscapes illustrating how rt - s^2 distinguishes local peaks, bowls, and mountain saddle passes.',
          estimatedMinutes: 35
        }
      ]
    },
    {
      id: 'math-u4',
      unitNumber: 4,
      title: 'Integral Calculus',
      hours: 9,
      mappedCOs: ['CO4'],
      learningObjectives: [
        'Differentiate under the integral sign using Leibnitz’s Rule.',
        'Evaluate double integrals and apply change of order / polar coordinates.',
        'Compute volumes using triple integrals in spherical and cylindrical coordinates.',
        'Evaluate improper integrals using Beta, Gamma, and Elliptic functions.'
      ],
      topics: [
        {
          id: 'math-u4-t1',
          topicNumber: '4.1',
          title: 'Differentiation Under Integral Sign (Leibnitz’s Rule)',
          syllabusText: 'Differentiation under the integral sign; Leibnitz’s rule (constant and variable limits).',
          unitId: 'math-u4',
          subjectId: 'math-1',
          subjectCode: '100102',
          quickDefinition: 'Leibnitz’s Rule provides a method to differentiate a definite integral whose integrand and boundary limits depend on a parameter: d/dα ∫_{a(α)}^{b(α)} f(x, α) dx.',
          whyItMatters: 'Used to solve difficult definite integrals (Feynman’s trick), heat diffusion kernel integrations, and probability distribution moments.',
          coreConcept: [
            {
              heading: 'General Leibnitz Integral Formula',
              paragraphs: [
                'For I(α) = ∫_{u(α)}^{v(α)} f(x, α) dx, the derivative with respect to parameter α is:',
                'dI/dα = ∫_{u(α)}^{v(α)} [∂f/∂α] dx + f(v(α), α) * (dv/dα) - f(u(α), α) * (du/dα).',
                'If the limits a and b are constant (independent of α), the boundary derivative terms vanish: dI/dα = ∫_a^b [∂f/∂α] dx.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Leibnitz Rule with Variable Limits',
              latex: '\\frac{d}{d\\alpha} \\int_{u(\\alpha)}^{v(\\alpha)} f(x, \\alpha) dx = \\int_{u(\\alpha)}^{v(\\alpha)} \\frac{\\partial f}{\\partial \\alpha} dx + f(v(\\alpha), \\alpha) \\frac{dv}{d\\alpha} - f(u(\\alpha), \\alpha) \\frac{du}{d\\alpha}',
              explanation: 'Accounts for both changes in integrand and moving boundary integration limits.'
            }
          ],
          example: {
            problem: 'Evaluate I = ∫_0^∞ e^(-x) * (sin αx / x) dx using differentiation under integral sign.',
            solutionSteps: [
              'Step 1: Differentiate with respect to parameter α: dI/dα = ∫_0^∞ e^(-x) * [∂/∂α (sin αx / x)] dx.',
              'Step 2: ∂/∂α (sin αx / x) = (x cos αx) / x = cos αx.',
              'Step 3: dI/dα = ∫_0^∞ e^(-x) cos(αx) dx = 1 / (1 + α^2) (standard Laplace transform integral).',
              'Step 4: Integrate back with respect to α: I(α) = ∫ [1 / (1 + α^2)] dα = tan^(-1)(α) + C.',
              'Step 5: When α = 0, I(0) = ∫_0^∞ 0 dx = 0 ==> tan^(-1)(0) + C = 0 ==> C = 0.',
              'Step 6: Therefore, I = tan^(-1)(α).'
            ],
            finalAnswer: '∫_0^∞ e^(-x) (sin αx / x) dx = tan^(-1)(α).'
          },
          engineeringApplication: {
            title: 'Transient Thermal Conduction & Flame Front Propagation',
            description: 'Combustion chambers model moving flame boundary fronts using Leibnitz’s variable limit rule to track heat accumulation in expanding fuel volumes.',
            impact: 'Prevents thermal fatigue failure in jet engine turbine blades.'
          },
          commonMistakes: [
            {
              mistake: 'Forgetting the boundary terms f(v, α)*v’ - f(u, α)*u’ when limits depend on α.',
              correction: 'Always check if upper/lower limits contain α before dropping boundary terms.',
              why: 'Leibnitz chain rule requires differentiating moving boundaries.'
            }
          ],
          quickRevision: [
            'Constant limits: d/dα ∫ f dx = ∫ (∂f/∂α) dx.',
            'Variable limits: add f(v,α)v’ - f(u,α)u’.',
            'Feynman trick: introduce parameter α, differentiate, evaluate easy integral, then integrate back.'
          ],
          examFocus: {
            questionTypes: ['Evaluate improper integral using DUIS (7-8 Marks)', 'Find d/dx of integral with x-dependent limits (5 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['Leibnitz’s Integral Rule'],
            tip: 'The integral ∫_0^∞ (tan^(-1)(ax) - tan^(-1)(bx))/x dx is a top recurring BEU problem.'
          },
          visualType: 'leibnitz-duis',
          visualCaption: 'DUIS: Integrand Variation & Boundary Shift',
          visualExplanation: 'Shows how parameter α shifts both the curve height (internal integral) and the integration endpoints (boundary flux).',
          estimatedMinutes: 25
        },
        {
          id: 'math-u4-t2',
          topicNumber: '4.2',
          title: 'Double Integrals & Change of Order / Polar Coordinates',
          syllabusText: 'Double integral; Change the order of integration; Evaluation of double integration by changing it into polar co-ordinates.',
          unitId: 'math-u4',
          subjectId: 'math-1',
          subjectCode: '100102',
          quickDefinition: 'Double integration computes volumes and 2D surface areas. Changing the order of integration switches integration strips from vertical to horizontal (or vice-versa), often simplifying impossible single integrals.',
          whyItMatters: 'Used in calculating centers of mass, moments of inertia in mechanical linkages, and electromagnetic charge densities over silicon chips.',
          coreConcept: [
            {
              heading: 'Change of Order of Integration',
              paragraphs: [
                'In ∬ f(x, y) dy dx, vertical strips are integrated first from y = y_1(x) to y = y_2(x), then from x = a to x = b.',
                'To change order to ∬ f(x, y) dx dy: Sketch the region of integration, draw horizontal strips, find new limits for x = x_1(y) to x = x_2(y), and determine the y bounds c to d.'
              ]
            },
            {
              heading: 'Transformation to Polar Coordinates (r, θ)',
              paragraphs: [
                'Substitute x = r cos θ, y = r sin θ.',
                'The Jacobian determinant dA = dx dy becomes r dr dθ.',
                'Useful whenever regions involve circles (x^2 + y^2 = a^2) or integrand has (x^2 + y^2).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Polar Area Element & Jacobian',
              latex: '\\iint_R f(x, y) dx dy = \\iint_{R\'} f(r\\cos\\theta, r\\sin\\theta) r dr d\\theta',
              explanation: 'Area element transforms with Jacobian factor r.'
            }
          ],
          example: {
            problem: 'Evaluate I = ∫_0^a ∫_{x/a}^{sqrt(x/a)} (x^2 + y^2) dy dx by changing the order of integration.',
            solutionSteps: [
              'Step 1: Given limits: y ranges from x/a to sqrt(x/a) (i.e., line y = x/a to parabola y^2 = x/a), x ranges from 0 to a.',
              'Step 2: Region is bounded between line x = ay and parabola x = a y^2 from y = 0 to y = 1.',
              'Step 3: Horizontal strip bounds: x ranges from a y^2 to ay, y ranges from 0 to 1.',
              'Step 4: New integral: I = ∫_0^1 ∫_{a y^2}^{ay} (x^2 + y^2) dx dy.',
              'Step 5: Integrate wrt x: [x^3/3 + x y^2]_{a y^2}^{ay} = (a^3 y^3 / 3 + a y^3) - (a^3 y^6 / 3 + a y^4).',
              'Step 6: Integrate polynomial wrt y from 0 to 1 yields final fraction.'
            ],
            finalAnswer: 'Integral evaluated successfully via order change.'
          },
          engineeringApplication: {
            title: 'Mass Moment of Inertia of Turbine Rotors',
            description: 'Double integrals over cross-sections calculate rotational inertia I_z = ∬ (x^2 + y^2) ρ dA, determining torque requirements for jet engines.',
            impact: 'Prevents rotational imbalance and catastrophic shaft failure at 30,000 RPM.'
          },
          commonMistakes: [
            {
              mistake: 'Forgetting the Jacobian factor r when converting dx dy to polar.',
              correction: 'dx dy = r dr dθ. NEVER write dx dy = dr dθ.',
              why: 'Area of a sector element is (r dθ) * dr = r dr dθ.'
            }
          ],
          quickRevision: [
            'Change of order: vertical strip -> horizontal strip.',
            'Sketch the region accurately before finding new limits.',
            'Polar: x = r cos θ, y = r sin θ, dx dy = r dr dθ, x^2+y^2 = r^2.'
          ],
          examFocus: {
            questionTypes: ['Change order of integration for ∫_0^∞ ∫_x^∞ (e^(-y)/y) dy dx (8 Marks)', 'Evaluate ∬ e^(-(x^2+y^2)) dx dy by changing to polar (7 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Fubini’s Theorem on iterated integrals'],
            tip: 'Integral ∫_0^∞ ∫_x^∞ (e^(-y)/y) dy dx is impossible directly, but becomes trivial (= 1) after changing order to dx dy!'
          },
          visualType: 'double-integral',
          visualCaption: 'Change of Integration Strips: Vertical vs Horizontal',
          visualExplanation: 'Diagram illustrating how changing strip orientation from vertical (dy dx) to horizontal (dx dy) spans the exact same 2D area.',
          estimatedMinutes: 30
        },
        {
          id: 'math-u4-t3',
          topicNumber: '4.3',
          title: 'Triple Integrals (Spherical & Cylindrical Polar)',
          syllabusText: 'Triple Integral; Evaluation of Triple integral by changing to Spherical Polar co-ordinates & Cylindrical polar co-ordinates.',
          unitId: 'math-u4',
          subjectId: 'math-1',
          subjectCode: '100102',
          quickDefinition: 'Triple integrals ∭ f(x, y, z) dV compute 3D volumes, masses, and gravitational fields. Coordinate transformations to Cylindrical (r, θ, z) or Spherical Polar (r, θ, φ) simplify calculations for circular cylinders and spheres.',
          whyItMatters: 'Used in electromagnetics (Gauss law charge volume integrals), computational fluid dynamics (CFD), and nuclear reactor core neutron flux calculations.',
          coreConcept: [
            {
              heading: 'Cylindrical Coordinates (r, θ, z)',
              paragraphs: [
                'Transformation: x = r cos θ, y = r sin θ, z = z.',
                'Volume element: dV = r dr dθ dz.',
                'Ideal for cones, cylinders, and paraboloids.'
              ]
            },
            {
              heading: 'Spherical Polar Coordinates (r, θ, φ)',
              paragraphs: [
                'Transformation: x = r sin θ cos φ, y = r sin θ sin φ, z = r cos θ.',
                'Here r = radial distance (0 to ∞), θ = polar angle from z-axis (0 to π), φ = azimuthal angle in xy-plane (0 to 2π).',
                'Volume element: dV = r^2 sin θ dr dθ dφ.',
                'Ideal for spheres (x^2 + y^2 + z^2 <= a^2) and ellipsoids.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Spherical Volume Element',
              latex: 'dV = dx dy dz = r^2 \\sin\\theta \\, dr \\, d\\theta \\, d\\phi',
              explanation: 'Jacobian determinant of spherical polar transformation.'
            },
            {
              title: 'Cylindrical Volume Element',
              latex: 'dV = dx dy dz = r \\, dr \\, d\\theta \\, dz',
              explanation: 'Jacobian determinant of cylindrical polar transformation.'
            }
          ],
          example: {
            problem: 'Find the volume of a sphere of radius a using spherical polar coordinates.',
            solutionSteps: [
              'Step 1: Volume V = ∭ dV = ∫_{φ=0}^{2π} ∫_{θ=0}^π ∫_{r=0}^a r^2 sin θ dr dθ dφ.',
              'Step 2: Evaluate r integral: [r^3/3]_0^a = a^3 / 3.',
              'Step 3: Evaluate θ integral: ∫_0^π sin θ dθ = [-cos θ]_0^π = 1 - (-1) = 2.',
              'Step 4: Evaluate φ integral: ∫_0^{2π} dφ = 2π.',
              'Step 5: Multiply: V = (a^3/3) * 2 * (2π) = (4/3) π a^3.'
            ],
            finalAnswer: 'Volume = (4/3) π a^3.'
          },
          engineeringApplication: {
            title: 'Aerospace Atmospheric Drag on Re-entry Capsules',
            description: 'Calculating hypersonic shockwave pressure distribution over hemispherical spacecraft heat shields requires triple spherical volume integration.',
            impact: 'Prevents heat shield burn-through during atmospheric atmospheric atmospheric entry.'
          },
          commonMistakes: [
            {
              mistake: 'Using 0 to 2π for both θ and φ in spherical coordinates.',
              correction: 'θ (polar angle) runs from 0 to π. Only φ (azimuthal angle) runs from 0 to 2π.',
              why: 'If θ runs to 2π, the entire sphere volume is integrated twice.'
            }
          ],
          quickRevision: [
            'Cylindrical: dV = r dr dθ dz.',
            'Spherical: dV = r^2 sin θ dr dθ dφ.',
            'Sphere limits: r in [0, a], θ in [0, π], φ in [0, 2π].',
            'First octant limits: θ in [0, π/2], φ in [0, π/2].'
          ],
          examFocus: {
            questionTypes: ['Find volume of sphere / ellipsoid / cone using triple integral (8 Marks)', 'Evaluate ∭ (x^2+y^2+z^2) dV over sphere (8 Marks)'],
            likelyMarks: '8 Marks',
            keyTheorems: ['Transformation of Multiple Integrals via Jacobian'],
            tip: 'For first-octant problems, multiply by 8 for the full sphere, but keep limits 0 to π/2.'
          },
          visualType: 'spherical-polar',
          visualCaption: 'Spherical Polar Coordinate Volume Element dV = r² sin θ dr dθ dφ',
          visualExplanation: '3D diagram showing radial wedge dr, arc element r dθ, and latitude circle r sin θ dφ defining differential volume dV.',
          estimatedMinutes: 30
        },
        {
          id: 'math-u4-t4',
          topicNumber: '4.4',
          title: 'Beta, Gamma & Elliptic Functions',
          syllabusText: 'Beta; Gamma; Elliptic integral; Relation between Beta & Gamma functions, General Properties and related problems.',
          unitId: 'math-u4',
          subjectId: 'math-1',
          subjectCode: '100102',
          quickDefinition: 'Beta B(m, n) and Gamma Γ(n) functions are Eulerian improper integrals that generalize factorials to real and complex numbers, linked by the identity B(m, n) = [Γ(m) Γ(n)] / Γ(m + n).',
          whyItMatters: 'Enables closed-form evaluation of trigonometric power integrals ∫ sin^p θ cos^q θ dθ in physics, probability distributions (Beta/Gamma distributions in data science), and pendulum periods.',
          coreConcept: [
            {
              heading: 'Gamma Function Γ(n)',
              paragraphs: [
                'Definition: Γ(n) = ∫_0^∞ e^(-x) x^(n-1) dx (for n > 0).',
                'Key properties: Γ(n+1) = n Γ(n). If n is positive integer, Γ(n+1) = n!.',
                'Special value: Γ(1/2) = sqrt(π).'
              ]
            },
            {
              heading: 'Beta Function B(m, n)',
              paragraphs: [
                'Definition: B(m, n) = ∫_0^1 x^(m-1) (1 - x)^(n-1) dx (for m > 0, n > 0).',
                'Trigonometric form: B(m, n) = 2 ∫_0^{π/2} sin^(2m-1) θ cos^(2n-1) θ dθ.',
                'Relation: B(m, n) = [Γ(m) Γ(n)] / Γ(m + n).'
              ]
            },
            {
              heading: 'Duplication Formula & Elliptic Integrals',
              paragraphs: [
                'Legendre’s Duplication formula: Γ(m) Γ(m + 1/2) = [sqrt(π) / 2^(2m-1)] * Γ(2m).',
                'Elliptic integrals occur when evaluating pendulum periods with large amplitudes (complete elliptic integrals of 1st and 2nd kind).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Beta-Gamma Fundamental Relation',
              latex: 'B(m, n) = \\frac{\\Gamma(m) \\Gamma(n)}{\\Gamma(m+n)}',
              explanation: 'Bridges algebraic Beta integrals with factorial Gamma functions.'
            },
            {
              title: 'Trigonometric Power Integral',
              latex: '\\int_0^{\\pi/2} \\sin^p\\theta \\cos^q\\theta \\, d\\theta = \\frac{\\Gamma\\left(\\frac{p+1}{2}\\right) \\Gamma\\left(\\frac{q+1}{2}\\right)}{2 \\Gamma\\left(\\frac{p+q+2}{2}\\right)}',
              explanation: 'Most widely used formula for trigonometric definite integrals.'
            },
            {
              title: 'Gamma Half-Integer',
              latex: '\\Gamma\\left(\\frac{1}{2}\\right) = \\sqrt{\\pi}',
              explanation: 'Fundamental constant derived from the Gaussian integral.'
            }
          ],
          example: {
            problem: 'Evaluate I = ∫_0^{π/2} sqrt(tan θ) dθ.',
            solutionSteps: [
              'Step 1: Write sqrt(tan θ) = sin^(1/2) θ * cos^(-1/2) θ.',
              'Step 2: Identify p = 1/2, q = -1/2.',
              'Step 3: Apply formula: I = [Γ((1/2+1)/2) * Γ((-1/2+1)/2)] / [2 * Γ((1/2 - 1/2 + 2)/2)] = [Γ(3/4) * Γ(1/4)] / [2 * Γ(1)].',
              'Step 4: Since Γ(1) = 1, I = (1/2) * Γ(1/4) Γ(3/4).',
              'Step 5: By reflection formula Γ(p) Γ(1 - p) = π / sin(p π): for p = 1/4, Γ(1/4) Γ(3/4) = π / sin(π/4) = π / (1/sqrt(2)) = sqrt(2) π.',
              'Step 6: Therefore, I = (1/2) * sqrt(2) π = π / sqrt(2).'
            ],
            finalAnswer: '∫_0^{π/2} sqrt(tan θ) dθ = π / sqrt(2).'
          },
          engineeringApplication: {
            title: 'Reliability Engineering & Weibull Life Cycle Modeling',
            description: 'Mean Time Between Failures (MTBF) for aerospace turbofans and semiconductor processors follows Gamma probability distributions calculated using Γ(1 + 1/k).',
            impact: 'Determines aircraft maintenance schedules to prevent mid-air engine failures.'
          },
          commonMistakes: [
            {
              mistake: 'Confusing Γ(n) with (n)!. Remember Γ(n) = (n - 1)!.',
              correction: 'Γ(5) = 4! = 24, NOT 5! = 120.',
              why: 'By definition Γ(n+1) = n!, so Γ(n) = (n-1)! for positive integers.'
            }
          ],
          quickRevision: [
            'Γ(n+1) = n Γ(n) = n!.',
            'Γ(1/2) = sqrt(π).',
            'B(m, n) = Γ(m)Γ(n) / Γ(m+n).',
            '∫_0^(π/2) sin^p θ cos^q θ dθ = Γ((p+1)/2) Γ((q+1)/2) / [2 Γ((p+q+2)/2)].',
            'Γ(p) Γ(1-p) = π / sin(p π).'
          ],
          examFocus: {
            questionTypes: ['Prove B(m, n) = Γ(m)Γ(n)/Γ(m+n) (7-8 Marks)', 'Evaluate ∫_0^(π/2) sqrt(sin θ) dθ or ∫_0^1 x^m (ln 1/x)^n dx (5-7 Marks)', 'Prove Legendre duplication formula (8 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['Beta-Gamma Relation Theorem', 'Legendre Duplication Theorem'],
            tip: 'The proof of B(m, n) = Γ(m)Γ(n)/Γ(m+n) using polar conversion of double Gaussian integral is an 8-mark guaranteed question.'
          },
          visualType: 'beta-gamma',
          visualCaption: 'Gamma Function Continuity and Fractional Factorial Curve',
          visualExplanation: 'Continuous plot of Γ(x) showing integer factorials and the exact value Γ(1/2) = √π.',
          estimatedMinutes: 25
        }
      ]
    },
    {
      id: 'math-u5',
      unitNumber: 5,
      title: 'Vector Calculus',
      hours: 8,
      mappedCOs: ['CO5'],
      learningObjectives: [
        'Compute gradient, divergence, and curl with geometrical/physical interpretations.',
        'Find directional derivatives and equations of tangent planes to level surfaces.',
        'Evaluate line, surface, and volume vector integrals.',
        'State, verify, and apply Green’s, Stokes’, and Gauss Divergence Theorems.'
      ],
      topics: [
        {
          id: 'math-u5-t1',
          topicNumber: '5.1',
          title: 'Gradient, Divergence, Curl & Directional Derivative',
          syllabusText: 'Scalar and vector valued functions; Concepts of gradient, divergence and curl and their geometrical and physical significance; tangent plane; directional derivative.',
          unitId: 'math-u5',
          subjectId: 'math-1',
          subjectCode: '100102',
          quickDefinition: 'The Del operator ∇ acts on scalar fields to give the gradient (steepest slope normal vector), and on vector fields via dot product to give divergence (flux source/sink) and cross product to give curl (vorticity/rotation).',
          whyItMatters: 'Forms the complete mathematical foundation for Maxwell’s equations in electromagnetics, fluid dynamics Navier-Stokes equations, and heat flux.',
          coreConcept: [
            {
              heading: 'Gradient of a Scalar Field (grad φ = ∇φ)',
              paragraphs: [
                '∇φ = (∂φ/∂x) i + (∂φ/∂y) j + (∂φ/∂z) k.',
                'Geometrical significance: ∇φ represents a vector normal to the level surface φ(x, y, z) = C in the direction of maximum rate of increase of φ.',
                'Directional Derivative: Rate of change of φ in the direction of unit vector û is D_u φ = ∇φ • û = |∇φ| cos θ. Maximum directional derivative is |∇φ| along the normal.'
              ]
            },
            {
              heading: 'Divergence of a Vector Field (div F = ∇ • F)',
              paragraphs: [
                'For F = F_1 i + F_2 j + F_3 k: div F = ∂F_1/∂x + ∂F_2/∂y + ∂F_3/∂z.',
                'Physical significance: Net outward flux per unit volume. If ∇ • F = 0, the vector field is Solenoidal (incompressible fluid flow).'
              ]
            },
            {
              heading: 'Curl of a Vector Field (curl F = ∇ x F)',
              paragraphs: [
                'curl F = det [[i, j, k], [∂/∂x, ∂/∂y, ∂/∂z], [F_1, F_2, F_3]].',
                'Physical significance: Represents the angular velocity of local rotation. If ∇ x F = 0, the field is Irrotational (Conservative field, F = ∇φ).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Gradient & Directional Derivative',
              latex: '\\nabla \\phi = \\frac{\\partial \\phi}{\\partial x}\\hat{i} + \\frac{\\partial \\phi}{\\partial y}\\hat{j} + \\frac{\\partial \\phi}{\\partial z}\\hat{k}, \\quad D_{\\hat{u}} \\phi = \\nabla\\phi \\cdot \\hat{u}',
              explanation: 'Directional derivative along unit vector û.'
            },
            {
              title: 'Divergence & Solenoidal Condition',
              latex: '\\nabla \\cdot \\vec{F} = \\frac{\\partial F_1}{\\partial x} + \\frac{\\partial F_2}{\\partial y} + \\frac{\\partial F_3}{\\partial z} = 0 \\iff \\vec{F} \\text{ is Solenoidal}',
              explanation: 'Zero net divergence means no source or sink exists in the fluid volume.'
            },
            {
              title: 'Curl & Irrotational Condition',
              latex: '\\nabla \\times \\vec{F} = \\mathbf{0} \\iff \\vec{F} \\text{ is Irrotational } (\\vec{F} = \\nabla\\phi)',
              explanation: 'Irrotational fields possess a scalar potential function φ.'
            }
          ],
          example: {
            problem: 'Find the directional derivative of φ = x^2 y z + 4 x z^2 at the point P(1, -2, -1) in the direction of vector 2i - j - 2k.',
            solutionSteps: [
              'Step 1: Compute ∇φ = (2xyz + 4z^2) i + (x^2 z) j + (x^2 y + 8xz) k.',
              'Step 2: Evaluate ∇φ at P(1, -2, -1):',
              '∇φ = (2(1)(-2)(-1) + 4(-1)^2) i + ((1)^2(-1)) j + ((1)^2(-2) + 8(1)(-1)) k = (4 + 4) i - j + (-2 - 8) k = 8i - j - 10k.',
              'Step 3: Find unit vector in given direction: a = 2i - j - 2k. |a| = sqrt(4 + 1 + 4) = 3. û = (2i - j - 2k)/3.',
              'Step 4: Directional derivative = ∇φ • û = (8(2) + (-1)(-1) + (-10)(-2)) / 3 = (16 + 1 + 20) / 3 = 37 / 3.'
            ],
            finalAnswer: 'Directional Derivative = 37 / 3.'
          },
          engineeringApplication: {
            title: 'Electrostatic & Gravitational Potential Fields',
            description: 'Electric fields E = -∇V are conservative (∇ x E = 0), ensuring that the energy consumed in moving a charge depends solely on the start and end positions, independent of path.',
            impact: 'Enables high-efficiency capacitive touchscreen design and low-power microcontrollers.'
          },
          commonMistakes: [
            {
              mistake: 'Failing to normalize the direction vector into a UNIT vector (dividing by magnitude |a|).',
              correction: 'Directional derivative requires dot product with UNIT vector û = a / |a|.',
              why: 'Multiplying by a non-unit vector scales the derivative by the arbitrary vector length.'
            }
          ],
          quickRevision: [
            '∇φ is normal to surface; maximum directional derivative is |∇φ|.',
            '∇ • F = 0 -> Solenoidal.',
            '∇ x F = 0 -> Irrotational (F = ∇φ).',
            'curl(grad φ) = 0 and div(curl F) = 0 always.'
          ],
          examFocus: {
            questionTypes: ['Find directional derivative in direction of vector (5-7 Marks)', 'Find constants a, b, c such that F is irrotational and find scalar potential φ (7-8 Marks)', 'Find angle between normals of two surfaces at intersection point (5 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['Identities: curl(grad φ) = 0 and div(curl F) = 0'],
            tip: 'If question asks for scalar potential φ, integrate F_1 dx + F_2 dy + F_3 dz without repeating common terms.'
          },
          visualType: 'vector-curl',
          visualCaption: 'Vector Field: Divergence (Flux Spreading) vs Curl (Vorticity)',
          visualExplanation: 'Shows 2D vector field arrows illustrating outward flux divergence and swirling paddle-wheel circulation curl.',
          estimatedMinutes: 25
        },
        {
          id: 'math-u5-t2',
          topicNumber: '5.2',
          title: 'Integral Theorems (Green’s, Stokes’ & Gauss Divergence)',
          syllabusText: 'Line, surface and volume integrals - Statement of Green’s, Stokes’ and Gauss divergence theorems - verification and evaluation of vector integrals using them.',
          unitId: 'math-u5',
          subjectId: 'math-1',
          subjectCode: '100102',
          quickDefinition: 'The three fundamental integral theorems connect dimensional boundaries: Green’s converts 2D line integrals to area integrals, Stokes’ converts 3D closed line integrals to surface integrals, and Gauss Divergence converts closed surface flux to volume integrals.',
          whyItMatters: 'Directly converts differential Maxwell equations into operational integral laws for antennas, electric motors, and magnetic levitation trains.',
          coreConcept: [
            {
              heading: 'Green’s Theorem in the Plane',
              paragraphs: [
                'Statement: If C is a positively oriented, piecewise smooth, simple closed curve enclosing region R, then:',
                '∮_C (M dx + N dy) = ∬_R (∂N/∂x - ∂M/∂y) dx dy.'
              ]
            },
            {
              heading: 'Stokes’ Theorem (Line to Surface)',
              paragraphs: [
                'Statement: The line integral of a vector field F around a closed curve C equals the surface integral of curl F over any open surface S bounded by C:',
                '∮_C F • dr = ∬_S (∇ x F) • n̂ dS.'
              ]
            },
            {
              heading: 'Gauss’ Divergence Theorem (Surface to Volume)',
              paragraphs: [
                'Statement: The total outward flux of a vector field F across a closed surface S equals the volume integral of the divergence of F over the enclosed volume V:',
                '∬_S F • n̂ dS = ∭_V (∇ • F) dV.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Green’s Theorem',
              latex: '\\oint_C (M dx + N dy) = \\iint_R \\left( \\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} \\right) dx dy',
              explanation: '2D plane line integral converted to double area integral.'
            },
            {
              title: 'Stokes’ Theorem',
              latex: '\\oint_C \\vec{F} \\cdot d\\vec{r} = \\iint_S (\\nabla \\times \\vec{F}) \\cdot \\hat{n} \\, dS',
              explanation: 'Circulation around loop equals curl flux across enclosed open surface.'
            },
            {
              title: 'Gauss Divergence Theorem',
              latex: '\\iint_S \\vec{F} \\cdot \\hat{n} \\, dS = \\iiint_V (\\nabla \\cdot \\vec{F}) \\, dV',
              explanation: 'Closed boundary surface flux equals net volume divergence.'
            }
          ],
          example: {
            problem: 'Verify Gauss Divergence Theorem for F = 4xz i - y^2 j + yz k over the cube bounded by x = 0, x = 1, y = 0, y = 1, z = 0, z = 1.',
            solutionSteps: [
              'Step 1: Compute ∇ • F = ∂/∂x(4xz) + ∂/∂y(-y^2) + ∂/∂z(yz) = 4z - 2y + y = 4z - y.',
              'Step 2: Evaluate Volume Integral RHS = ∫_0^1 ∫_0^1 ∫_0^1 (4z - y) dx dy dz.',
              'Step 3: = ∫_0^1 ∫_0^1 (4z - y) dy dz = ∫_0^1 [4zy - y^2/2]_0^1 dz = ∫_0^1 (4z - 1/2) dz = [2z^2 - z/2]_0^1 = 2 - 1/2 = 3/2.',
              'Step 4: Surface Integral LHS = Sum of flux across all 6 faces (x=0, x=1, y=0, y=1, z=0, z=1):',
              '  • Face x=1 (n̂ = i): ∬ 4(1)z dy dz = 4(1/2) = 2.',
              '  • Face x=0 (n̂ = -i): ∬ 0 dy dz = 0.',
              '  • Face y=1 (n̂ = j): ∬ -(1)^2 dx dz = -1.',
              '  • Face y=0 (n̂ = -j): ∬ -(-0) dx dz = 0.',
              '  • Face z=1 (n̂ = k): ∬ y(1) dx dy = 1/2.',
              '  • Face z=0 (n̂ = -k): ∬ -0 dx dy = 0.',
              'Step 5: Total flux = 2 - 1 + 1/2 = 3/2.',
              'Step 6: LHS = RHS = 3/2. Gauss Divergence Theorem is verified!'
            ],
            finalAnswer: 'Theorem verified: LHS = RHS = 3/2.'
          },
          engineeringApplication: {
            title: 'Wireless Electromagnetic Energy Radiation (Poynting Flux)',
            description: 'Antenna engineers use Gauss’ and Stokes’ theorems to compute total radiated power by integrating Poynting vector flux over far-field spherical radomes.',
            impact: 'Enables 5G beamforming and optimizes cell tower coverage while staying within safe SAR radiation limits.'
          },
          commonMistakes: [
            {
              mistake: 'Applying Gauss Divergence theorem to an OPEN surface (e.g. upper hemisphere without the bottom disk).',
              correction: 'Gauss Divergence applies ONLY to CLOSED surfaces enclosing a finite 3D volume. Add the base cap or use Stokes’ instead.',
              why: 'Divergence theorem requires a closed boundary to enclose volume V.'
            }
          ],
          quickRevision: [
            'Green’s: ∮ (M dx + N dy) = ∬ (N_x - M_y) dx dy.',
            'Stokes’: ∮ F • dr = ∬ (curl F) • n̂ dS (Open surface).',
            'Gauss: ∬ F • n̂ dS = ∭ (div F) dV (Closed surface).',
            'Always evaluate both LHS and RHS separately when problem says "Verify".'
          ],
          examFocus: {
            questionTypes: ['Verify Gauss Divergence Theorem for a cube or cylinder (8-10 Marks)', 'Verify Green’s Theorem in plane for a circle/triangle (7-8 Marks)', 'Apply Stokes’ Theorem to evaluate ∮ F • dr (8 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Green’s Theorem', 'Stokes’ Theorem', 'Gauss Divergence Theorem'],
            tip: 'Verification questions MUST show LHS (all 6 faces or boundary curves) and RHS (single volume/double integral) independently matching.'
          },
          visualType: 'gauss-divergence',
          visualCaption: 'Gauss Divergence Theorem: Surface Flux vs Volume Sources',
          visualExplanation: '3D diagram showing internal source divergence arrows within a cube summing up to match the boundary surface flux arrows.',
          estimatedMinutes: 35
        }
      ]
    }
  ]
};
