import type { Subject } from '../../types';

export const computerFundamentalsSubject: Subject = {
  id: 'cf-1',
  code: '100108',
  name: 'Computer Fundamentals & Emerging Technologies',
  shortName: 'CFET',
  type: 'theory',
  credits: 3,
  lectureHours: 3,
  tutorialHours: 0,
  practicalHours: 0,
  totalHours: 42,
  semester: 1,
  group: 'Group-A (CSE & Allied Branches)',
  description: 'In-depth study of Computer Architecture & Von Neumann model, binary data representation & 2’s complement arithmetic, Operating System concepts & memory management, Computer Networking & TCP/IP protocols, and Emerging Technologies (IoT, Cybersecurity, Blockchain, AI/ML, Data Science).',
  iconName: 'Cpu',
  accentColor: '#10b981',
  courseOutcomes: [
    { code: 'CO1', statement: 'Analyze the structure and interaction of computer system components.' },
    { code: 'CO2', statement: 'Apply number system conversions and data representation techniques to solve computational problems.' },
    { code: 'CO3', statement: 'Differentiate types of operating systems based on their functions and suitability for various applications.' },
    { code: 'CO4', statement: 'Analyse computer network components, topologies, and data communication processes.' },
    { code: 'CO5', statement: 'Identify appropriate emerging technologies to address the given engineering problems.' },
  ],
  referenceBooks: [
    { title: 'Computer Fundamentals', authors: 'P. K. Sinha and Priti Sinha', publisher: 'BPB Publications, 6th Edition', isbn: '978-8176567527' },
    { title: 'Introduction to Computers', authors: 'Peter Norton', publisher: 'McGraw Hill, 7th Edition', isbn: '978-0070636774' },
    { title: 'Data Representation and Computer Logic', authors: 'Charles M. Gilmore', publisher: 'McGraw Hill', isbn: '978-0070245754' },
    { title: 'Operating System Concepts', authors: 'Abraham Silberschatz, Peter B. Galvin and Greg Gagne', publisher: 'Wiley, 10th Edition', isbn: '978-1119456339' },
    { title: 'Data Communications and Networking', authors: 'Behrouz A. Forouzan', publisher: 'McGraw Hill, 5th Edition', isbn: '978-0073376226' },
    { title: 'IoT for Beginners: Architecture, Principles and Applications', authors: 'Amita Kapoor, Vinay Chopra', publisher: 'BPB Publications, 1st Edition', isbn: '978-9355510063' },
    { title: 'Fundamentals of Cyber Security', authors: 'Mayank Bhushan, Rajkumar Singh Rathore, Aatif Jamshed', publisher: 'BPB Publications, 1st Edition', isbn: '978-9386551559' },
    { title: 'Artificial Intelligence: A Guide for Thinking Humans', authors: 'Melanie Mitchell', publisher: 'Farrar, Straus and Giroux, 1st Edition', isbn: '978-0374257835' },
  ],
  units: [
    {
      id: 'cf-u1',
      unitNumber: 1,
      title: 'Fundamentals of Computer Systems',
      hours: 8,
      mappedCOs: ['CO1'],
      learningObjectives: [
        'Classify computers and explain functional units (Input, ALU, CU, Memory, Output).',
        'Analyze Von Neumann architecture, CPU organization, registers, and instruction cycle.',
        'Understand memory hierarchy (Registers, Cache L1/L2/L3, RAM, SSD/HDD) and cache locality.',
        'Distinguish machine language, assembly language, high-level languages, compilers, and interpreters.'
      ],
      topics: [
        {
          id: 'cf-u1-t1',
          topicNumber: '1.1',
          title: 'Computer Organization, CPU Structure & Von Neumann Architecture',
          syllabusText: 'Classification of computers, Functional units; Central Processing Unit (CPU) organization and working; Motherboard and its components; The Von-Neumann architecture.',
          unitId: 'cf-u1',
          subjectId: 'cf-1',
          subjectCode: '100108',
          quickDefinition: 'The Von Neumann architecture stores both program instructions and data in the same unified primary memory, executed sequentially by the Central Processing Unit (CPU) via the Fetch-Decode-Execute cycle.',
          whyItMatters: 'Every modern computer, smartphone processor (Apple Silicon, Snapdragon, Intel Core), and server adheres to stored-program Von Neumann principles.',
          coreConcept: [
            {
              heading: 'The Five Functional Units',
              paragraphs: [
                '1. Input Unit: Keyboard, mouse, scanner converting external data into binary.',
                '2. Central Processing Unit (CPU): The brain of the computer, containing ALU and Control Unit.',
                '   • Arithmetic Logic Unit (ALU): Executes integer/logic arithmetic (+, -, AND, OR).',
                '   • Control Unit (CU): Decodes instructions and generates timing signals.',
                '3. Memory Unit: Primary storage (RAM/ROM) holding instructions and active variables.',
                '4. Output Unit: Monitor, printer displaying processed information.',
                '5. System Bus: Interconnect consisting of Data Bus (bidirectional), Address Bus (unidirectional from CPU), and Control Bus.'
              ]
            },
            {
              heading: 'Von Neumann Architecture & Bottleneck',
              paragraphs: [
                'Components: Unified Memory, CPU (Control Unit, ALU, Registers), and Input/Output interfaces.',
                'The Instruction Cycle: (1) Fetch instruction from PC address into Instruction Register (IR), (2) Decode opcode, (3) Fetch operands, (4) Execute ALU operation, (5) Store result and increment Program Counter (PC).',
                'Von Neumann Bottleneck: Throughput is limited because CPU and memory share a single bus, creating a speed mismatch (CPU is 100x faster than DRAM bus).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Memory Address Capacity',
              latex: '\\text{Addressable Locations} = 2^k \\quad (\\text{where } k = \\text{width of address bus in bits})',
              explanation: 'A 32-bit address bus addresses 2^32 bytes = 4 GB RAM; 64-bit bus addresses 16 Exabytes.'
            }
          ],
          example: {
            problem: 'A computer has a 36-bit address bus and a 64-bit data bus. Calculate (i) Maximum addressable memory capacity in Gigabytes, and (ii) Maximum bytes transferred per bus cycle.',
            solutionSteps: [
              'Step 1: Addressable memory = 2^(36) bytes.',
              'Step 2: 2^(36) = 2^6 * 2^(30) = 64 * 1 GB = 64 Gigabytes (GB).',
              'Step 3: Data bus width = 64 bits = 64 / 8 = 8 bytes transferred per cycle.'
            ],
            finalAnswer: '(i) 64 GB addressable RAM, (ii) 8 bytes per bus cycle.'
          },
          engineeringApplication: {
            title: 'Modern Superscalar Multicore Processors (x86 & ARM64)',
            description: 'Modern CPUs deploy branch prediction, pipelining, and out-of-order execution engines to fetch and execute multiple instructions per clock cycle to mitigate Von Neumann memory latency.',
            impact: 'Enables high-performance computing for AI, simulations, and real-time graphics rendering.'
          },
          commonMistakes: [
            {
              mistake: 'Confusing Harvard Architecture with Von Neumann Architecture.',
              correction: 'Von Neumann uses UNIFIED memory for both code and data with a single bus. Harvard uses SEPARATE physical memories and buses for instructions and data (used inside DSPs and microcontrollers).',
              why: 'Unified storage enables self-modifying code but creates bus contention.'
            }
          ],
          quickRevision: [
            'Von Neumann: Stored-program concept (unified memory).',
            'Functional units: Input, ALU, CU, Memory, Output.',
            'Buses: Address bus (unidirectional), Data bus (bidirectional), Control bus.',
            'Instruction cycle: Fetch -> Decode -> Execute -> Store.'
          ],
          examFocus: {
            questionTypes: ['Explain Von Neumann Architecture with neat block diagram and explain Von Neumann bottleneck (8 Marks)', 'Explain functional units of a computer system and system bus (7 Marks)'],
            likelyMarks: '8 Marks',
            keyTheorems: ['Stored Program Concept (John von Neumann, 1945)'],
            tip: 'Draw the complete block diagram showing CPU (ALU, CU, Registers), Memory, and I/O connected by Data, Address, and Control buses.'
          },
          visualType: 'cpu-von-neumann',
          visualCaption: 'Von Neumann Computer Architecture: CPU, Buses & Unified Memory',
          visualExplanation: 'Diagram illustrating Control Unit, ALU, Registers, System Bus tripartite lines, and unified RAM memory block.',
          estimatedMinutes: 25
        },
        {
          id: 'cf-u1-t2',
          topicNumber: '1.2',
          title: 'Memory Hierarchy, Cache Memory, CPU Registers & Language Translators',
          syllabusText: 'Memory: Architecture, Memory Representation, Memory Hierarchy; CPU Registers, Impact of Cache Memory on System Performance; Machine language, assembly language, high-level programming languages Compiler, Interpreter.',
          unitId: 'cf-u1',
          subjectId: 'cf-1',
          subjectCode: '100108',
          quickDefinition: 'Memory hierarchy organizes storage by speed and cost: CPU Registers (<1 ns) -> L1/L2/L3 SRAM Cache (1-10 ns) -> DRAM Main Memory (50-100 ns) -> NVMe SSD / HDD (Microseconds to Milliseconds). Language translators convert human code to machine binary: Compilers translate entire programs at once, while Interpreters execute line-by-line.',
          whyItMatters: 'Memory hierarchy exploitation via Cache Locality (Temporal & Spatial) is the single biggest factor determining software execution speed.',
          coreConcept: [
            {
              heading: 'The Memory Hierarchy Pyramid',
              paragraphs: [
                '• Level 0: Internal CPU Registers (PC, MAR, MBR/MDR, IR, Accumulator). Fastest (<0.5 ns), smallest capacity (<1 KB), highest cost.',
                '• Level 1/2/3: SRAM Cache Memory. On-chip, buffers frequently accessed data based on Principle of Locality (Temporal: recently accessed data likely accessed again; Spatial: nearby memory locations likely accessed next).',
                '• Level 4: Main Memory (DRAM). Volatile working RAM storage.',
                '• Level 5: Secondary Storage (NVMe SSD, HDD). Non-volatile, massive capacity, slow access.'
              ]
            },
            {
              heading: 'Cache Hit Ratio & Average Memory Access Time (AMAT)',
              paragraphs: [
                'Hit Ratio (h): Fraction of memory accesses found in cache (typically 90%–98%).',
                'Miss Ratio (1 - h): Fraction requiring main memory access.',
                'AMAT = T_cache + (1 - h) * T_memory.'
              ]
            },
            {
              heading: 'Generations of Programming Languages & Translators',
              paragraphs: [
                '• Machine Language (1GL): 0s and 1s directly executed by hardware (fastest, machine dependent).',
                '• Assembly Language (2GL): Mnemonics (MOV, ADD, JMP). Translated by Assembler into machine code.',
                '• High-Level Language (3GL/4GL): English-like syntax (C, C++, Python, Java).',
                '• Compiler: Translates entire source code into object/machine code at once (C, C++, Rust). Fast runtime, generates standalone executable.',
                '• Interpreter: Translates and executes source code line-by-line (Python, JavaScript). Slower execution, easy interactive debugging.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Average Memory Access Time (AMAT)',
              latex: '\\text{AMAT} = T_{\\text{hit}} + (1 - h) \\cdot T_{\\text{miss}}',
              explanation: 'Effective average memory latency experienced by CPU.'
            }
          ],
          example: {
            problem: 'A computer has a cache access time of 2 ns and main memory access time of 50 ns. If the cache hit ratio is 95%, calculate the Average Memory Access Time (AMAT).',
            solutionSteps: [
              'Step 1: Cache access time T_cache = 2 ns; Main memory penalty T_mem = 50 ns; Hit ratio h = 0.95.',
              'Step 2: Miss ratio = 1 - 0.95 = 0.05 (5%).',
              'Step 3: AMAT = T_cache + (1 - h) * T_mem = 2 + (0.05 * 50) = 2 + 2.5 = 4.5 ns.',
              'Step 4: Notice AMAT is 4.5 ns compared to 50 ns without cache (over 11x speedup!).'
            ],
            finalAnswer: 'AMAT = 4.5 ns (11.1x speedup compared to direct RAM access).'
          },
          engineeringApplication: {
            title: 'Matrix Multiplication Cache-Blocking Optimization in AI',
            description: 'Deep learning libraries (cuBLAS, PyTorch) tile large matrices into small sub-blocks that fit entirely inside L1/L2 SRAM cache, preventing DRAM memory bus thrashing.',
            impact: 'Accelerates GPU matrix tensor operations by up to 50x.'
          },
          commonMistakes: [
            {
              mistake: 'Stating that RAM is faster than Cache memory.',
              correction: 'Cache memory (SRAM) is 10x to 50x FASTER than RAM (DRAM).',
              why: 'SRAM uses 6-transistor flip-flops with no refresh cycle; DRAM uses single capacitor-transistor cells that require periodic recharging.'
            }
          ],
          quickRevision: [
            'Memory hierarchy: Registers -> Cache (SRAM) -> RAM (DRAM) -> SSD/HDD.',
            'Locality: Temporal (same location again) and Spatial (nearby locations).',
            'AMAT = T_c + (1-h) * T_m.',
            'Compiler: translates full program; Interpreter: line-by-line.',
            'Assembler: translates assembly mnemonics to machine binary.'
          ],
          examFocus: {
            questionTypes: ['Explain Memory Hierarchy with neat pyramid diagram and compare SRAM vs DRAM (8 Marks)', 'Derive AMAT and solve cache hit ratio numerical (5-7 Marks)', 'Differentiate between Compiler, Interpreter, and Assembler (5 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Principle of Locality of Reference (Denning, 1968)'],
            tip: 'Draw the memory hierarchy pyramid showing increasing capacity/access time downwards and increasing cost/speed upwards.'
          },
          visualType: 'memory-hierarchy',
          visualCaption: 'Computer Memory Hierarchy Pyramid & Access Latency Scaling',
          visualExplanation: 'Pyramid diagram showing Registers, L1/L2/L3 Cache, Main Memory, and Secondary Storage with comparative speed, cost, and capacity trends.',
          estimatedMinutes: 30
        }
      ]
    },
    {
      id: 'cf-u2',
      unitNumber: 2,
      title: 'Data Representation',
      hours: 8,
      mappedCOs: ['CO2'],
      learningObjectives: [
        'Convert numbers between Decimal, Binary, Octal, and Hexadecimal systems.',
        'Perform binary arithmetic (addition, subtraction) and handle overflows.',
        'Represent signed integers using Sign-Magnitude, 1’s Complement, and 2’s Complement.',
        'Understand character encoding standards (ASCII, Unicode UTF-8/UTF-16).'
      ],
      topics: [
        {
          id: 'cf-u2-t1',
          topicNumber: '2.1',
          title: 'Number System Conversions & Binary Arithmetic',
          syllabusText: 'Data Representation & Number Systems; Conversion between decimal and binary systems; Conversion among binary, octal, and hexadecimal systems; Binary arithmetic (addition, subtraction).',
          unitId: 'cf-u2',
          subjectId: 'cf-1',
          subjectCode: '100108',
          quickDefinition: 'Positional number systems express values using base r: N = Σ d_i * r^i. Binary arithmetic executes addition (0+0=0, 0+1=1, 1+0=1, 1+1=0 with carry 1) and subtraction via borrow or complement methods.',
          whyItMatters: 'Digital hardware operates purely in binary; octal and hexadecimal provide concise human-readable representations for memory addresses and machine codes.',
          coreConcept: [
            {
              heading: 'Standard Base Conversions',
              paragraphs: [
                '• Decimal to Binary/Octal/Hex: Successive division by target base r (collect remainders bottom-up for integer part); successive multiplication by r for fractional part.',
                '• Binary to Hexadecimal: Group binary bits into sets of 4 from binary point (e.g. 1011 0101_2 = B5_{16}).',
                '• Binary to Octal: Group binary bits into sets of 3 from binary point (e.g. 110 101_2 = 65_8).'
              ]
            },
            {
              heading: 'Binary Addition & Subtraction Rules',
              paragraphs: [
                '• Addition: 0+0 = 0; 0+1 = 1; 1+0 = 1; 1+1 = 10_2 (Sum 0, Carry 1); 1+1+1 = 11_2 (Sum 1, Carry 1).',
                '• Subtraction with borrow: 0-0=0; 1-0=1; 1-1=0; 0-1 = 1 (with Borrow 1 from next higher bit).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Positional Polynomial Expansion',
              latex: 'N_r = \\sum_{i=-m}^{n-1} d_i \\cdot r^i = d_{n-1} r^{n-1} + \\dots + d_0 r^0 + d_{-1} r^{-1} + \\dots + d_{-m} r^{-m}',
              explanation: 'General expansion of any real number in radix base r.'
            }
          ],
          example: {
            problem: 'Convert (43.625)_{10} into equivalent (i) Binary, (ii) Octal, and (iii) Hexadecimal.',
            solutionSteps: [
              'Step 1: Integer part 43 to Binary:',
              '  43 / 2 = 21 (rem 1), 21 / 2 = 10 (rem 1), 10 / 2 = 5 (rem 0), 5 / 2 = 2 (rem 1), 2 / 2 = 1 (rem 0), 1 / 2 = 0 (rem 1) ==> (101011)_2.',
              'Step 2: Fractional part 0.625 to Binary:',
              '  0.625 * 2 = 1.25 (1), 0.25 * 2 = 0.5 (0), 0.5 * 2 = 1.0 (1) ==> (0.101)_2.',
              '  Combine: (43.625)_{10} = (101011.101)_2.',
              'Step 3: Convert to Octal (Group in 3s):',
              '  (101 011 . 101)_2 = (53.5)_8.',
              'Step 4: Convert to Hexadecimal (Group in 4s):',
              '  (0010 1011 . 1010)_2 = (2B.A)_{16}.'
            ],
            finalAnswer: '(43.625)_{10} = (101011.101)_2 = (53.5)_8 = (2B.A)_{16}.'
          },
          engineeringApplication: {
            title: 'RGB Hex Web Color Codes & Memory Address Dumps',
            description: 'Web designers and software debuggers express 24-bit RGB colors (#FF5733) and memory addresses (0x7FFEED) in hexadecimal because each 2 hex digits represent exactly 1 byte (8 bits).',
            impact: 'Standardizes color rendering across billions of web browsers and monitors.'
          },
          commonMistakes: [
            {
              mistake: 'Padding zeros on the wrong side of fractional binary digits.',
              correction: 'For integer part, pad zeros on the LEFT (e.g. 10 -> 0010). For fractional part, pad zeros on the RIGHT (e.g. .1 -> .1000).',
              why: 'Padding right on fractional bits does not alter value (.1000 = 0.5).'
            }
          ],
          quickRevision: [
            'Radix: Binary (2), Octal (8), Decimal (10), Hex (16).',
            'Octal grouping = 3 bits; Hex grouping = 4 bits.',
            'Binary addition: 1+1 = 0 with carry 1.',
            'Decimal fraction conversion uses repeated multiplication.'
          ],
          examFocus: {
            questionTypes: ['Convert decimal number with fraction to binary, octal, hex (5-7 Marks)', 'Perform binary arithmetic addition and subtraction (4-5 Marks)'],
            likelyMarks: '5 to 7 Marks',
            keyTheorems: ['Radix Conversion Polynomial Theorem'],
            tip: 'Double-check conversion by expanding back to decimal: e.g. 2B.A_{16} = 2*16 + 11*1 + 10/16 = 32 + 11 + 0.625 = 43.625.'
          },
          visualType: 'number-conversions',
          visualCaption: 'Radix Grouping: Binary Bits to Octal (3-bit) and Hexadecimal (4-bit)',
          visualExplanation: 'Diagram illustrating how 8-bit and 12-bit binary strings partition into 3-bit octal clusters and 4-bit hexadecimal nibbles.',
          estimatedMinutes: 20
        },
        {
          id: 'cf-u2-t2',
          topicNumber: '2.2',
          title: 'Signed Numbers (1’s & 2’s Complement) & Character Encodings (ASCII, Unicode)',
          syllabusText: 'Signed number representation (1’s complement); Signed number representation (2’s complement); American Standard Code for Information Interchange (ASCII), Unicode Data representation in memory.',
          unitId: 'cf-u2',
          subjectId: 'cf-1',
          subjectCode: '100108',
          quickDefinition: 'In 2’s complement representation, negative numbers are formed by inverting bits (1’s complement) and adding 1: -A = ~A + 1. It allows ALUs to perform subtraction using pure addition hardware without separate subtraction logic, with a unique representation for zero. ASCII uses 7 bits (128 characters), while Unicode (UTF-8/16) encodes over 149,000 global characters.',
          whyItMatters: 'Every modern CPU executes integer subtraction, comparison, and character text processing using 2’s complement and UTF-8 encoding.',
          coreConcept: [
            {
              heading: 'Signed Integer Representations (n-bit system)',
              paragraphs: [
                '1. Sign-Magnitude: MSB is sign bit (0 = positive, 1 = negative); remaining n-1 bits represent magnitude. Suffers from dual zeros (+0: 0000, -0: 1000) and complex hardware.',
                '2. 1’s Complement: Negative number obtained by inverting all bits (0->1, 1->0). Also has dual zeros (+0: 0000, -0: 1111) and requires end-around carry addition.',
                '3. 2’s Complement: Invert all bits and add 1 (2’s comp = 1’s comp + 1). Range for n bits: -2^(n-1) to +(2^(n-1) - 1). Has a SINGLE ZERO (0000) and discards end carry.'
              ]
            },
            {
              heading: 'Subtraction Using 2’s Complement',
              paragraphs: [
                'To compute A - B: Add A to the 2’s complement of B: A + (-B).',
                '• Case 1: If an end carry is generated, discard the carry; the result is positive and in true binary form.',
                '• Case 2: If NO end carry is generated, the result is negative and in 2’s complement form (take 2’s complement and attach minus sign to find true magnitude).'
              ]
            },
            {
              heading: 'Character Encodings: ASCII vs Unicode',
              paragraphs: [
                '• ASCII (7-bit): 128 characters (0–127). \'A\' = 65 (01000001), \'a\' = 97, \'0\' = 48, space = 32.',
                '• Unicode: Universal standard encoding all world languages, mathematical symbols, and emojis. UTF-8 is a variable-length encoding (1 to 4 bytes) that is 100% backward-compatible with 7-bit ASCII.'
              ]
            }
          ],
          formulas: [
            {
              title: '2’s Complement Definition',
              latex: '[N]_{2\'s} = 2^n - N = [N]_{1\'s} + 1',
              explanation: 'Mathematical 2’s complement of an n-bit positive integer N.'
            },
            {
              title: 'n-bit 2’s Complement Range',
              latex: '-2^{n-1} \\le X \\le 2^{n-1} - 1',
              explanation: 'For 8-bit byte: range is -128 to +127.'
            }
          ],
          example: {
            problem: 'Perform subtraction (28)_{10} - (15)_{10} using 8-bit 2’s complement arithmetic.',
            solutionSteps: [
              'Step 1: Convert numbers to 8-bit binary:',
              '  +28 = (00011100)_2.',
              '  +15 = (00001111)_2.',
              'Step 2: Find 2’s complement of 15 (i.e. -15):',
              '  1’s complement of 00001111 = 11110000.',
              '  2’s complement = 11110000 + 1 = (11110001)_2.',
              'Step 3: Add (+28) + (-15):',
              '    00011100  (+28)',
              '  + 11110001  (-15)',
              '  = (1) 00001101.',
              'Step 4: End carry (1) is generated, so discard it. Result is positive: 00001101_2 = +13 in decimal!'
            ],
            finalAnswer: 'Result = (00001101)_2 = +13 in decimal (Correct).'
          },
          engineeringApplication: {
            title: 'Internationalized Web Text & Database Storage (UTF-8)',
            description: 'Over 98% of all websites globally use UTF-8 encoding. It saves storage bandwidth by encoding English ASCII in 1 byte while seamlessly representing Hindi/Devanagari (3 bytes) and emojis (4 bytes) in the same string.',
            impact: 'Enables global software localization and multilingual digital communication.'
          },
          commonMistakes: [
            {
              mistake: 'Adding the end carry back to the result in 2’s complement.',
              correction: 'In 2’s complement, the end carry is DISCARDED (ignored). Adding end carry back is done ONLY in 1’s complement (end-around carry).',
              why: 'The 2^n modulo arithmetic automatically cancels the carry in 2’s complement.'
            }
          ],
          quickRevision: [
            '2’s complement = 1’s complement + 1.',
            '8-bit range: -128 to +127 (single zero 00000000).',
            'Subtraction: A - B = A + (2’s comp of B).',
            'Discard end carry -> positive result; No carry -> negative (take 2’s comp).',
            'ASCII = 7 bits (128 chars); UTF-8 = 1 to 4 bytes variable length.'
          ],
          examFocus: {
            questionTypes: ['Subtract two decimal numbers using 8-bit 2’s complement (e.g. 35 - 50 or 50 - 35) (7 Marks)', 'Differentiate between 1’s and 2’s complement representations (5 Marks)', 'Explain ASCII and Unicode encoding schemes (5 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['2’s Complement Arithmetic Duality'],
            tip: 'If result has NO end carry (e.g. 15 - 28), state: "No carry indicates negative result. Taking 2’s complement of 11110011 gives -(00001101) = -13."'
          },
          visualType: 'twos-complement',
          visualCaption: '2’s Complement Number Circle (8-bit signed range: -128 to +127)',
          visualExplanation: 'Circular clock diagram showing continuous transition from positive integers (0000 to 0111) to negative integers (1000 to 1111) without dual zero discontinuity.',
          estimatedMinutes: 25
        }
      ]
    },
    {
      id: 'cf-u3',
      unitNumber: 3,
      title: 'Computer Software and Operating Systems',
      hours: 9,
      mappedCOs: ['CO3'],
      learningObjectives: [
        'Classify System Software and Application Software.',
        'Explain objectives and core functions of Operating Systems (Process, Memory, File management).',
        'Compare OS types (Batch, Time-sharing, Distributed, Real-Time OS).',
        'Contrast CLI vs GUI and understand file systems (NTFS, ext4, APFS).'
      ],
      topics: [
        {
          id: 'cf-u3-t1',
          topicNumber: '3.1',
          title: 'Software Types, Operating System Objectives & OS Classifications',
          syllabusText: 'Introduction to Software, Types of Software; System Software; Application Software; Operating System (OS), Objectives of Operating System; Types of OS (Batch, Time-sharing, Distributed, Real-time).',
          unitId: 'cf-u3',
          subjectId: 'cf-1',
          subjectCode: '100108',
          quickDefinition: 'Software is categorized into System Software (OS, device drivers, compilers managing hardware) and Application Software (word processors, browsers solving user tasks). An Operating System acts as an intermediary resource manager between hardware and user programs.',
          whyItMatters: 'Every digital device relies on operating systems (Windows, Linux, Android, iOS, VxWorks) to abstract complex silicon hardware into user-friendly APIs.',
          coreConcept: [
            {
              heading: 'Classification of Software',
              paragraphs: [
                '• System Software: Manages computer hardware resources and provides a platform for applications (Operating System, Device Drivers, BIOS/UEFI, Compilers, Linkers/Loaders).',
                '• Application Software: Tailored for end-user tasks (General purpose: MS Office, Chrome, Photoshop; Specific purpose: Payroll system, Railway reservation).'
              ]
            },
            {
              heading: 'Types of Operating Systems',
              paragraphs: [
                '1. Batch OS: Jobs with similar needs grouped in batches; executed sequentially without user interaction (e.g. early IBM mainframes). CPU idle time high.',
                '2. Time-Sharing / Multitasking OS: CPU time shared among multiple users using rapid Round-Robin time slicing (quantum ~10-50 ms), giving illusion of simultaneous execution (e.g. Unix, Linux).',
                '3. Distributed OS: Manages a collection of independent networked computers, presenting them as a single unified system (e.g. Apache Hadoop, Amoeba).',
                '4. Real-Time OS (RTOS): Strictly guarantees task completion within rigid time deadlines.',
                '   • Hard RTOS: Missing deadline causes total catastrophic system failure (e.g. Pacemaker, Airbag deployment, Missile flight controller).',
                '   • Soft RTOS: Missing deadline causes performance degradation but not fatal failure (e.g. Video streaming, PlayStation gaming).'
              ]
            }
          ],
          formulas: [
            {
              title: 'CPU Utilization in Multiprogramming',
              latex: '\\text{CPU Utilization} = 1 - p^n',
              explanation: 'Probability that CPU is busy where p is fraction of time a process waits for I/O and n is degree of multiprogramming.'
            }
          ],
          example: {
            problem: 'If 4 processes in memory each spend 70% of their time waiting for I/O (p = 0.7), calculate the CPU utilization.',
            solutionSteps: [
              'Step 1: Given n = 4 processes, I/O wait probability p = 0.7.',
              'Step 2: Probability that all 4 processes are waiting simultaneously = p^n = (0.7)^4 = 0.2401.',
              'Step 3: CPU Utilization = 1 - p^n = 1 - 0.2401 = 0.7599 (75.99%).',
              'Step 4: Notice that with 1 process, CPU utilization was only 1 - 0.7 = 30%. Multiprogramming boosts utilization to ~76%.'
            ],
            finalAnswer: 'CPU Utilization = 75.99%.'
          },
          engineeringApplication: {
            title: 'Hard Real-Time OS in Aircraft Fly-By-Wire Avionics',
            description: 'Commercial aircraft flight computers execute VxWorks or PikeOS hard RTOS to read pitch/yaw gyros and adjust wing ailerons every 5 milliseconds with deterministic microsecond jitter guarantees.',
            impact: 'Ensures aerodynamic flight stability and prevents loss of aircraft control.'
          },
          commonMistakes: [
            {
              mistake: 'Confusing Multitasking with Multiprocessing.',
              correction: 'Multitasking shares a SINGLE CPU core via rapid time-slicing. Multiprocessing utilizes MULTIPLE physical CPU cores executing instructions simultaneously in true hardware parallelism.',
              why: 'Multitasking is concurrent; multiprocessing is parallel.'
            }
          ],
          quickRevision: [
            'System software: OS, drivers, compilers; Application: user tools.',
            'Batch: no interactive user; Time-sharing: round-robin CPU slicing.',
            'Hard RTOS: absolute deadline (Airbags); Soft RTOS: degraded quality (streaming).',
            'Distributed OS: multiple networked systems acting as one.'
          ],
          examFocus: {
            questionTypes: ['Explain types of Operating Systems (Batch, Time-sharing, Distributed, Real-time) with pros/cons (8 Marks)', 'Differentiate between System Software and Application Software with examples (5 Marks)', 'Differentiate between Hard and Soft Real-Time Systems (4-5 Marks)'],
            likelyMarks: '8 Marks',
            keyTheorems: ['Multiprogramming CPU Utilization Model'],
            tip: 'Provide real-world examples for each OS type (e.g. RTOS: VxWorks/FreeRTOS in satellite controls).'
          },
          visualType: 'os-types',
          visualCaption: 'Operating System Classification: Batch, Time-Sharing, Distributed & RTOS',
          visualExplanation: 'Comparison diagram illustrating time-sliced CPU scheduling, hard real-time deadline guarantees, and networked distributed cluster execution.',
          estimatedMinutes: 25
        },
        {
          id: 'cf-u3-t2',
          topicNumber: '3.2',
          title: 'OS Functions: Process Management, Memory Management & File Systems',
          syllabusText: 'Functions of OS (Process, Memory Management); User Interface (Command Line Interface Vs Graphical User Interface); File system basics examples: Windows, Linux, macOS.',
          unitId: 'cf-u3',
          subjectId: 'cf-1',
          subjectCode: '100108',
          quickDefinition: 'Operating System manages core resources: Process Management (scheduling, states: New, Ready, Running, Waiting, Terminated), Memory Management (paging, virtual memory), User Interfaces (CLI vs GUI), and File Systems (organizing files via NTFS, ext4, APFS).',
          whyItMatters: 'Enables computers to multitask hundreds of applications smoothly without crashing, memory conflicts, or file corruption.',
          coreConcept: [
            {
              heading: 'Process Management & 5-State Model',
              paragraphs: [
                'A process is a program in execution represented by a Process Control Block (PCB: PID, PC, Registers, Memory limits).',
                '5-State Life Cycle: (1) New -> (2) Ready (in ready queue) -> (3) Running (executing on CPU) -> (4) Waiting/Blocked (waiting for I/O) -> (5) Terminated.',
                'CPU Scheduling: FCFS (First-Come First-Served), SJF (Shortest Job First), Round Robin (time quantum).'
              ]
            },
            {
              heading: 'Memory Management & Virtual Memory Paging',
              paragraphs: [
                'Paging: Divides physical memory into fixed-size Frames and logical process address space into equal-size Pages (typically 4 KB). Page Table maps Logical Page Number to Physical Frame Number.',
                'Virtual Memory: Allows execution of processes larger than physical RAM by storing inactive pages on swap disk space (Demand Paging), using Page Fault interrupts to fetch needed pages.'
              ]
            },
            {
              heading: 'User Interfaces & File Systems',
              paragraphs: [
                '• CLI vs GUI: CLI (Linux Bash, Windows PowerShell) uses low memory and supports shell scripting automation. GUI (Windows Explorer, macOS Finder) uses icons, mouse/touch, and windows for intuitive user interaction.',
                '• File Systems: Windows uses NTFS (journaling, ACL permissions), Linux uses ext4 (inode-based, robust recovery), macOS uses APFS (copy-on-write, encryption, snapshots).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Logical to Physical Address Translation',
              latex: '\\text{Physical Address} = (\\text{Frame Number} \\times \\text{Page Size}) + \\text{Offset}',
              explanation: 'Hardware MMU translation using Page Table.'
            }
          ],
          example: {
            problem: 'A computer system uses 4 KB page size (offset = 12 bits). If logical address has Page Number = 5 and Offset = 300, and Page Table maps Page 5 to Physical Frame 12, calculate the Physical Address.',
            solutionSteps: [
              'Step 1: Page size = 4 KB = 4096 bytes.',
              'Step 2: Frame Number = 12, Offset = 300.',
              'Step 3: Physical Address = (Frame Number * Page Size) + Offset.',
              '  Physical Address = (12 * 4096) + 300 = 49152 + 300 = 49452 in decimal.',
              'Step 4: In hex: Page 5 -> Frame 0xC, Offset 0x12C ==> Physical Address = 0xC12C.'
            ],
            finalAnswer: 'Physical Address = 49,452 (or 0xC12C in hex).'
          },
          engineeringApplication: {
            title: 'Cloud Container Isolation (Docker / Kubernetes)',
            description: 'Linux OS kernel cgroups (control groups) and namespaces isolate CPU, memory paging, and ext4 file system mounts, allowing thousands of microservice containers to run securely on a single AWS EC2 server.',
            impact: 'Powers global cloud software deployment.'
          },
          commonMistakes: [
            {
              mistake: 'Confusing internal and external fragmentation.',
              correction: 'Paging suffers from INTERNAL fragmentation (unused space inside the last page frame). Segmentation suffers from EXTERNAL fragmentation (unusable memory holes between segments).',
              why: 'Fixed frame allocation leaves unused trailing bytes in the final page.'
            }
          ],
          quickRevision: [
            'Process 5 states: New, Ready, Running, Waiting, Terminated.',
            'PCB stores PID, Program Counter, register states.',
            'Paging maps logical pages to physical frames via Page Table.',
            'Virtual memory allows running programs larger than physical RAM.',
            'File systems: NTFS (Windows), ext4 (Linux), APFS (macOS).'
          ],
          examFocus: {
            questionTypes: ['Explain major functions of Operating System (Process, Memory, File, I/O management) (8 Marks)', 'Explain Process Life Cycle 5-State model with diagram (7 Marks)', 'Explain Paging and Virtual Memory with address translation diagram (8 Marks)', 'Compare CLI vs GUI (4-5 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Process State Transition Model', 'Paging Address Translation Model'],
            tip: 'Draw the 5-state process transition diagram with labeled transition arrows (Admitted, Scheduler Dispatch, I/O Wait, I/O Completion, Exit).'
          },
          visualType: 'process-states',
          visualCaption: 'Process 5-State Life Cycle & Memory Paging Address Translation',
          visualExplanation: 'Diagram illustrating Process state machine (New -> Ready -> Running -> Waiting -> Terminated) and MMU Page Table mapping logical pages to physical RAM frames.',
          estimatedMinutes: 30
        }
      ]
    },
    {
      id: 'cf-u4',
      unitNumber: 4,
      title: 'Computer Networks and Internet Basics',
      hours: 9,
      mappedCOs: ['CO4'],
      learningObjectives: [
        'Understand networking importance, transmission media (Twisted pair, Coaxial, Fiber, Wireless).',
        'Classify network types (LAN, MAN, WAN) and topologies (Star, Bus, Ring, Mesh).',
        'Explain functions of network devices (Hub, Switch, Router, Modem, Gateway).',
        'Understand IP addressing (IPv4/IPv6) and core Internet protocols (TCP, UDP, HTTP, FTP, DNS, Client-Server architecture).'
      ],
      topics: [
        {
          id: 'cf-u4-t1',
          topicNumber: '4.1',
          title: 'Network Topologies, Transmission Media & Network Devices',
          syllabusText: 'Introduction to Computer Networks; Importance of Networking; Data Transmission Media, Data Transmission across Media; Data Transmission in a Network; Network Types: Local Area Network (LAN), Wide Area Network (WAN), Metropolitan Area Network (MAN); Network Topologies (Star, Bus, Ring, Mesh), Communication Protocol; Network Devices (Hub, Switch, Router, Modem, Gateway), Wireless Networking.',
          unitId: 'cf-u4',
          subjectId: 'cf-1',
          subjectCode: '100108',
          quickDefinition: 'Computer networks interconnect autonomous devices to share data and resources. Topologies define physical geometric layout: Star (central switch, most popular), Mesh (full redundant links), Bus (shared backbone), and Ring (token passing). Transmission media includes Guided (Twisted Pair, Coax, Fiber Optic) and Unguided (Radio, Microwave, Satellite).',
          whyItMatters: 'Forms the global communication infrastructure connecting 5+ billion smartphone and computer users across the World Wide Web.',
          coreConcept: [
            {
              heading: 'Network Scale Classification & Topologies',
              paragraphs: [
                '• Scale: LAN (Local Area Network: room/building, high speed 1 Gbps), MAN (Metropolitan: city-wide cable TV, 50 km), WAN (Wide Area Network: country/global Internet).',
                '• Star Topology: All nodes connect to a central Switch/Hub. High reliability; if one cable breaks, only that node fails. Central switch is single point of failure.',
                '• Mesh Topology: Every node connects directly to every other node. Number of duplex links L = n(n - 1) / 2. Highly fault-tolerant, extremely expensive.',
                '• Bus Topology: Single shared coaxial cable with terminators. Vulnerable to cable cut; collisions occur under CSMA/CD.',
                '• Ring Topology: Nodes form closed circular loop; tokens circulate unidirectionally.'
              ]
            },
            {
              heading: 'Network Devices & Functions',
              paragraphs: [
                '• Hub: Layer 1 (Physical). Dumb multiport repeater; broadcasts incoming packet to ALL ports (high collisions).',
                '• Switch: Layer 2 (Data Link). Intelligent device; maintains MAC Address Table to forward frames ONLY to the destination port.',
                '• Router: Layer 3 (Network). Connects different networks/subnets; routes packets using IP Routing Tables (OSPF, BGP).',
                '• Modem: Modulates digital data to analog for telephone/cable lines, and demodulates back.',
                '• Gateway: Connects networks with completely different protocol architectures (protocol converter).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Full Mesh Topology Links Formula',
              latex: 'L = \\frac{n(n - 1)}{2} \\quad (\\text{where } n = \\text{number of nodes})',
              explanation: 'Calculates physical duplex cables required for complete mesh interconnection.'
            }
          ],
          example: {
            problem: 'A company wants to connect 10 computers in a Full Mesh topology. (i) How many physical cable links are required? (ii) How many I/O ports does each computer need?',
            solutionSteps: [
              'Step 1: Number of nodes n = 10.',
              'Step 2: Total cable links L = n(n - 1) / 2 = (10 * 9) / 2 = 90 / 2 = 45 cables.',
              'Step 3: Each computer connects to all remaining (n - 1) computers ==> (10 - 1) = 9 I/O ports per device.'
            ],
            finalAnswer: '(i) 45 physical cable links, (ii) 9 I/O ports per computer.'
          },
          engineeringApplication: {
            title: 'Enterprise Data Center Leaf-Spine Switch Topologies',
            description: 'Google and AWS cloud data centers organize thousands of server racks using non-blocking Leaf-Spine Layer 3 Clos network architectures, delivering 400 Gbps cross-sectional server-to-server bandwidth.',
            impact: 'Enables massive distributed parallel AI model training.'
          },
          commonMistakes: [
            {
              mistake: 'Confusing a Hub with a Switch.',
              correction: 'A Hub BROADCASTS data to all ports (Layer 1). A Switch UNICASTS data specifically to the destination MAC port (Layer 2).',
              why: 'Switches eliminate collision domains, providing dedicated bandwidth per port.'
            }
          ],
          quickRevision: [
            'Mesh links = n(n-1)/2.',
            'Star: central switch (standard office LAN).',
            'Twisted pair (UTP/STP), Coaxial, Fiber optic (highest bandwidth).',
            'Hub (Layer 1 broadcast), Switch (Layer 2 MAC unicast), Router (Layer 3 IP routing).',
            'Gateway: protocol converter across dissimilar networks.'
          ],
          examFocus: {
            questionTypes: ['Compare Network Topologies (Star, Bus, Ring, Mesh) with diagrams and pros/cons (8 Marks)', 'Explain functions of Hub, Switch, Router, Modem, Gateway (7-8 Marks)', 'Differentiate between LAN, MAN, and WAN (5 Marks)'],
            likelyMarks: '8 Marks',
            keyTheorems: ['Network Graph Topologies'],
            tip: 'Draw neat network topology diagrams showing node layout and central switch/backbone connections.'
          },
          visualType: 'network-topologies',
          visualCaption: 'Network Topologies: Star, Mesh, Bus, and Ring Geometric Layouts',
          visualExplanation: 'Diagram illustrating Star layout around central switch, interconnected Full Mesh, linear Bus with terminators, and token Ring.',
          estimatedMinutes: 30
        },
        {
          id: 'cf-u4-t2',
          topicNumber: '4.2',
          title: 'Internet Protocols (TCP/IP, UDP, HTTP, FTP, DNS) & Client-Server Model',
          syllabusText: 'Introduction to Internet: Internet Protocol (IP) Address; Transmission Control Protocol (TCP), User Datagram Protocol (UDP), Hypertext Transfer Protocol (HTTP), File Transfer Protocol (FTP), Domain Name System (DNS), Uniform Resource Locator (URL), Client-Server Architecture.',
          unitId: 'cf-u4',
          subjectId: 'cf-1',
          subjectCode: '100108',
          quickDefinition: 'The Internet is a packet-switched network operating on the TCP/IP protocol suite. IPv4 (32-bit dotted-decimal) and IPv6 (128-bit hex) provide universal addressing. TCP provides reliable connection-oriented delivery (3-way handshake), while UDP provides low-latency connectionless datagrams. DNS resolves human domain names into IP addresses.',
          whyItMatters: 'Underpins web browsing (HTTP/HTTPS), video streaming (UDP/RTP), file transfer (FTP/SFTP), and email protocols (SMTP/IMAP).',
          coreConcept: [
            {
              heading: 'IP Addressing (IPv4 vs IPv6)',
              paragraphs: [
                '• IPv4: 32-bit binary address written as 4 octets in dotted-decimal (e.g. 192.168.1.1). Total ~4.3 billion addresses (exhausted, extended by NAT). Classes A, B, C, D (Multicast), E (Reserved).',
                '• IPv6: 128-bit address written in 8 hexadecimal groups separated by colons (e.g. 2001:0db8:85a3::8a2e:0370:7334). Provides 2^128 (3.4 x 10^38) unique addresses.'
              ]
            },
            {
              heading: 'Transport Layer Protocols: TCP vs UDP',
              paragraphs: [
                '• TCP (Transmission Control Protocol): Connection-oriented, establishes connection via 3-Way Handshake (SYN -> SYN-ACK -> ACK). Guarantees reliable, in-order, error-checked delivery with flow control (sliding window) and congestion control. Slower (used for HTTP, FTP, SMTP, SSH).',
                '• UDP (User Datagram Protocol): Connectionless, lightweight, unreliable best-effort delivery with zero handshake overhead. Ideal for time-sensitive real-time traffic where occasional packet loss is tolerable (VoIP calls, Zoom, Online gaming, DNS queries, live video).'
              ]
            },
            {
              heading: 'Application Layer Protocols & Client-Server Architecture',
              paragraphs: [
                '• HTTP/HTTPS (Port 80/443): Request-response protocol for web browsing.',
                '• DNS (Domain Name System, Port 53): Translates domain names (e.g. www.google.com) to machine IP addresses (142.250.190.46) via recursive resolver hierarchy (Root, TLD, Authoritative servers).',
                '• Client-Server Model: Central Server (listening on well-known port) serves multiple requesting Clients.'
              ]
            }
          ],
          formulas: [
            {
              title: 'TCP 3-Way Handshake Sequence',
              latex: '\\text{Client} \\xrightarrow{\\text{SYN (seq}=x)} \\text{Server} \\xrightarrow{\\text{SYN-ACK (seq}=y, \\text{ack}=x+1)} \\text{Client} \\xrightarrow{\\text{ACK (ack}=y+1)} \\text{Server}',
              explanation: 'Establishes synchronized bidirectional reliable socket connection.'
            }
          ],
          example: {
            problem: 'Trace the step-by-step resolution process when a user types "https://www.beu.ac.in" in a web browser.',
            solutionSteps: [
              'Step 1: Browser checks local cache and OS DNS cache for IP of www.beu.ac.in.',
              'Step 2: If not found, OS queries local ISP Recursive DNS Resolver.',
              'Step 3: Recursive resolver queries Root DNS Server (.) -> directed to .in TLD Server.',
              'Step 4: .in TLD server points to BEU Authoritative Name Server -> returns IP address (e.g. 103.x.x.x).',
              'Step 5: Browser initiates TCP 3-Way Handshake with server IP on port 443 (HTTPS).',
              'Step 6: TLS cryptographic handshake establishes encrypted session.',
              'Step 7: Browser sends HTTP GET request; server returns HTML/CSS/JS web page.'
            ],
            finalAnswer: 'DNS resolution completes -> TCP connection established -> Web page loaded over HTTPS.'
          },
          engineeringApplication: {
            title: 'Content Delivery Networks (CDN) & Anycast DNS Routing',
            description: 'Cloudflare and Akamai deploy Anycast BGP DNS routing, directing user web traffic to the geographically closest edge server among 300+ global data centers in < 10 milliseconds.',
            impact: 'Accelerates web loading speeds and mitigates multi-terabit DDoS attacks.'
          },
          commonMistakes: [
            {
              mistake: 'Assuming UDP is always inferior to TCP because it is "unreliable".',
              correction: 'UDP is DELIBERATELY chosen for live streaming and gaming because retransmitting late video frames causes audio stutter and lag.',
              why: 'Speed and low latency are more critical than 100% packet integrity for live media.'
            }
          ],
          quickRevision: [
            'IPv4 = 32 bits (4 bytes); IPv6 = 128 bits (16 bytes).',
            'TCP: connection oriented, reliable, 3-way handshake (SYN, SYN-ACK, ACK).',
            'UDP: connectionless, fast, lightweight (video streaming, gaming, DNS).',
            'DNS: maps hostname to IP address (Port 53).',
            'HTTP (80), HTTPS (443), FTP (20/21), SSH (22).'
          ],
          examFocus: {
            questionTypes: ['Differentiate between TCP and UDP with header structure and use cases (8 Marks)', 'Explain DNS resolution process step-by-step with diagram (7-8 Marks)', 'Compare IPv4 and IPv6 addressing schemes (5-6 Marks)', 'Explain Client-Server Architecture (5 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['TCP/IP 4-Layer Architecture (Link, Internet, Transport, Application)'],
            tip: 'Draw the TCP 3-way handshake diagram with arrows and sequence/acknowledgment numbers.'
          },
          visualType: 'tcp-handshake',
          visualCaption: 'TCP 3-Way Handshake Connection & DNS Resolution Flow',
          visualExplanation: 'Sequence flow diagram illustrating client SYN, server SYN-ACK, client ACK connection setup alongside hierarchical DNS query resolution.',
          estimatedMinutes: 30
        }
      ]
    },
    {
      id: 'cf-u5',
      unitNumber: 5,
      title: 'Emerging Technologies',
      hours: 8,
      mappedCOs: ['CO5'],
      learningObjectives: [
        'Explain Internet of Things (IoT) concept, 4-layer architecture, and Smart Home/City applications.',
        'Understand Cybersecurity basics, CIA Triad (Confidentiality, Integrity, Availability), threats, and firewalls.',
        'Explain Blockchain distributed ledgers, cryptographic hashing (SHA-256), and decentralization.',
        'Understand Data Science life cycle stages and data-driven engineering decision making.'
      ],
      topics: [
        {
          id: 'cf-u5-t1',
          topicNumber: '5.1',
          title: 'Internet of Things (IoT) & Cyber Security (CIA Triad & Threats)',
          syllabusText: 'Internet of Things (IoT): Concept and architecture, Applications (Smart homes, Smart cities); Cyber Security: Basic security Terminologies, CIA Triad, Types of cyber threats and countermeasures.',
          unitId: 'cf-u5',
          subjectId: 'cf-1',
          subjectCode: '100108',
          quickDefinition: 'IoT connects billions of everyday physical objects embedded with sensors, actuators, and software to the internet. Cybersecurity protects systems and networks from digital attacks, anchored by the CIA Triad: Confidentiality (encryption), Integrity (hashing/signatures), and Availability (redundancy/DDoS protection).',
          whyItMatters: 'Powers smart energy grids, autonomous connected vehicles, smart hospitals, and protects critical infrastructure from state-sponsored cyber warfare.',
          coreConcept: [
            {
              heading: 'IoT 4-Layer Architecture',
              paragraphs: [
                '1. Sensing / Perception Layer: Physical sensors (temperature, pressure, RFID, cameras) and actuators gathering environmental data.',
                '2. Network / Connectivity Layer: Transmits sensor data via Wi-Fi, Bluetooth BLE, Zigbee, LoRaWAN, Cellular 5G, or MQTT protocols.',
                '3. Data Processing / Middleware Layer: Cloud and Edge computing servers running analytics, filtering noise, and storing time-series data.',
                '4. Application Layer: End-user smart services (Smart Home automation, Smart agriculture irrigation, Smart city traffic monitoring).'
              ]
            },
            {
              heading: 'Cybersecurity Fundamentals & The CIA Triad',
              paragraphs: [
                '• Confidentiality: Ensuring sensitive data is accessible ONLY to authorized users (implemented via AES-256 encryption, access controls, multi-factor authentication MFA).',
                '• Integrity: Ensuring data is accurate, authentic, and has NOT been modified in transit (implemented via SHA-256 cryptographic hashes, digital signatures).',
                '• Availability: Ensuring systems and data are reliably accessible to authorized users when needed (implemented via server redundancy, cloud backups, anti-DDoS firewalls).'
              ]
            },
            {
              heading: 'Common Cyber Threats & Countermeasures',
              paragraphs: [
                '• Malware: Viruses, Worms, Trojan Horses, Ransomware (encrypts files for ransom, countered by offline backups and endpoint EDR).',
                '• Phishing: Deceptive emails stealing credentials (countered by email SPF/DKIM filters and user training).',
                '• Man-in-the-Middle (MitM): Intercepting communications (countered by HTTPS/TLS encryption).',
                '• Denial of Service (DoS/DDoS): Overwhelming servers with botnet traffic (countered by CDN rate limiting and scrubbers).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Symmetric vs Asymmetric Encryption Key Complexity',
              latex: '\\text{Symmetric: } C = E_K(P), \\quad P = D_K(C); \\quad \\text{Asymmetric: } C = E_{K_{\\text{pub}}}(P), \\quad P = D_{K_{\\text{priv}}}(C)',
              explanation: 'Fundamental cryptographic secrecy transformations.'
            }
          ],
          example: {
            problem: 'A bank’s customer database was hacked. Hacker A modified customer account balances (e.g. changing $100 to $10,000), while Hacker B launched a DDoS attack taking the mobile banking app offline for 8 hours. Identify which pillar of the CIA triad was violated in each incident.',
            solutionSteps: [
              'Incident 1 (Altering account balances): Violates INTEGRITY because financial transaction data was illegally modified.',
              'Incident 2 (DDoS attack taking app offline): Violates AVAILABILITY because legitimate banking customers were denied service.'
            ],
            finalAnswer: 'Incident 1: Integrity violation; Incident 2: Availability violation.'
          },
          engineeringApplication: {
            title: 'Smart City Intelligent Traffic Light Management',
            description: 'IoT inductive loop sensors and AI cameras deployed across city intersections stream real-time vehicle queue counts via 5G to central traffic control, dynamically tuning green light durations to reduce rush-hour bottlenecks.',
            impact: 'Reduces urban vehicular commute times by 20% and slashes carbon emissions.'
          },
          commonMistakes: [
            {
              mistake: 'Believing encryption solves all cybersecurity problems.',
              correction: 'Encryption protects CONFIDENTIALITY. It does not prevent DDoS attacks (Availability) or ransomware deletion (Integrity/Availability).',
              why: 'Complete security requires defense-in-depth across all three CIA pillars.'
            }
          ],
          quickRevision: [
            'IoT layers: Sensing -> Network -> Processing -> Application.',
            'IoT protocols: MQTT, CoAP, Zigbee, LoRaWAN.',
            'CIA Triad: Confidentiality, Integrity, Availability.',
            'Threats: Malware, Phishing, Ransomware, Man-in-the-Middle, DDoS.',
            'Defenses: Firewalls, MFA, AES encryption, Hash verification.'
          ],
          examFocus: {
            questionTypes: ['Explain IoT Architecture with 4 layers and Smart City applications (8 Marks)', 'Explain CIA Triad in detail with real-world threat examples (7-8 Marks)', 'Explain common cyber threats (Malware, Phishing, DDoS) and countermeasures (7 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['CIA Security Model'],
            tip: 'Draw the 3-sided CIA Triad triangle and the 4-layer vertical IoT stack diagram.'
          },
          visualType: 'iot-cia-triad',
          visualCaption: 'IoT 4-Layer Architecture Stack & Cybersecurity CIA Triad',
          visualExplanation: 'Diagram illustrating IoT sensors feeding cloud applications across network layers alongside the Confidentiality-Integrity-Availability security triangle.',
          estimatedMinutes: 25
        },
        {
          id: 'cf-u5-t2',
          topicNumber: '5.2',
          title: 'Blockchain, Data Science & Emerging AI Paradigms',
          syllabusText: 'Blockchain: Concept of distributed ledger, Blocks, hashing, decentralization; Data Science: Data Lifecycle, Role of data in decision making.',
          unitId: 'cf-u5',
          subjectId: 'cf-1',
          subjectCode: '100108',
          quickDefinition: 'Blockchain is an immutable, decentralized distributed ledger where transactions are bundled into cryptographically linked blocks using SHA-256 hashes and consensus mechanisms (Proof of Work/Stake). Data Science is an interdisciplinary field extracting actionable insights from structured/unstructured data across the Data Lifecycle.',
          whyItMatters: 'Eliminates untrusted intermediaries in global financial settlements (Bitcoin, Ethereum), digital land records, pharmaceutical supply chains, and enterprise analytics.',
          coreConcept: [
            {
              heading: 'Blockchain Architecture & Core Pillars',
              paragraphs: [
                '• Block Structure: Contains Block Header (Block Number, Nonce, Timestamp, Previous Block Hash, Merkle Root) and Transaction Data.',
                '• Cryptographic Linkage: Each block stores the exact SHA-256 hash of the PREVIOUS block. Modifying any past transaction alters its hash, breaking the entire cryptographic chain forward (Tamper-evident immutability).',
                '• Decentralization & P2P Network: Every node maintains an identical copy of the distributed ledger; no central bank or authority controls it.',
                '• Consensus Mechanisms: Proof of Work (PoW, solving cryptographic puzzles) and Proof of Stake (PoS, validator staking) ensure honest global consensus.'
              ]
            },
            {
              heading: 'The Data Science Lifecycle (6 Key Stages)',
              paragraphs: [
                '1. Data Collection / Ingestion: Gathering raw data from APIs, SQL databases, IoT sensors, logs.',
                '2. Data Cleaning / Preprocessing: Handling missing null values, deduplicating, removing outliers, normalizing.',
                '3. Exploratory Data Analysis (EDA): Visualizing distributions, correlations, and feature engineering.',
                '4. Model Building / Machine Learning: Training predictive ML/DL algorithms (Regression, Random Forests, Neural Nets).',
                '5. Model Evaluation: Evaluating Precision, Recall, F1-Score, ROC-AUC.',
                '6. Deployment & Monitoring: Deploying models via REST APIs and tracking data drift over time.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Cryptographic Hash Link Invariant',
              latex: '\\text{Hash}(\\text{Block}_k) = \\text{SHA-256}\\Big( \\text{Data}_k \\mathbin{\\Vert} \\text{Timestamp} \\mathbin{\\Vert} \\text{Nonce} \\mathbin{\\Vert} \\text{Hash}(\\text{Block}_{k-1}) \\Big)',
              explanation: 'Cryptographic chain locking each block to its preceding ancestor.'
            }
          ],
          example: {
            problem: 'Explain why tampering with a transaction in Block #50 in a blockchain containing 100 blocks is mathematically detected instantly by all network nodes.',
            solutionSteps: [
              'Step 1: Modifying transaction data in Block #50 changes the SHA-256 output of Block #50.',
              'Step 2: Since Block #51 stores the original "Previous Hash" of Block #50, the stored pointer now mismatches the newly computed hash.',
              'Step 3: This invalidates Block #51, which in turn invalidates Block #52, #53... all the way to Block #100.',
              'Step 4: Other peer nodes compare their unaltered chain with the attacker’s tampered chain and reject the counterfeit block via majority consensus.'
            ],
            finalAnswer: 'Tampering breaks cryptographic hash linkage and is rejected by distributed consensus.'
          },
          engineeringApplication: {
            title: 'Pharmaceutical Supply Chain Counterfeit Drug Tracking',
            description: 'Drug manufacturers record medicine batch production, cold-chain temperature logs, and shipping handovers on permissioned blockchain ledgers. Patients scan QR codes to verify genuine factory origin.',
            impact: 'Prevents counterfeit medications from entering hospital supply chains.'
          },
          commonMistakes: [
            {
              mistake: 'Assuming Blockchain and Cryptocurrency are identical terms.',
              correction: 'Blockchain is the underlying DISTRIBUTED LEDGER TECHNOLOGY. Cryptocurrency (Bitcoin, Ether) is merely one specific financial application built on top of blockchain.',
              why: 'Blockchain has hundreds of non-financial applications (voting, land registry, supply chains).'
            }
          ],
          quickRevision: [
            'Blockchain: Decentralized, Distributed, Immutable, Consensus-driven.',
            'Block contains: Data, Nonce, Timestamp, Previous Hash.',
            'SHA-256 produces fixed 256-bit (64 hex char) digital fingerprint.',
            'Data Science Lifecycle: Collect -> Clean -> Explore (EDA) -> Model -> Evaluate -> Deploy.'
          ],
          examFocus: {
            questionTypes: ['Explain Blockchain architecture, components of a block, and hashing mechanism (8 Marks)', 'Explain the stages of the Data Science Lifecycle with flowchart (7-8 Marks)', 'Explain consensus mechanisms (Proof of Work vs Proof of Stake) (5-6 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Merkle Tree Hash Verification', 'Data Science Crisp-DM Lifecycle'],
            tip: 'Draw a chain of 3 linked blocks showing the "Previous Hash" pointer chaining block k to block k-1.'
          },
          visualType: 'blockchain-data-science',
          visualCaption: 'Blockchain Hash-Linked Blocks & Data Science Lifecycle Stages',
          visualExplanation: 'Diagram showing cryptographic SHA-256 block chain linkages alongside the circular 6-stage Data Science development cycle.',
          estimatedMinutes: 30
        }
      ]
    }
  ]
};
