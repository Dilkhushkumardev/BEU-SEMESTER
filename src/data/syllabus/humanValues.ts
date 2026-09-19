import type { Subject } from '../../types';

export const humanValuesSubject: Subject = {
  id: 'uhv-1',
  code: '100109',
  name: 'Universal Human Values',
  shortName: 'UHV',
  type: 'theory',
  credits: 2,
  lectureHours: 2,
  tutorialHours: 0,
  practicalHours: 0,
  totalHours: 28,
  semester: 1,
  group: 'Group-A (CSE & Allied Branches)',
  description: 'Foundational value education course on Self-Exploration, Right Understanding, Co-existence of Self and Body, Harmony in Human Relationships & Society, Harmony in Nature (the Four Orders), and Professional Ethics for Engineers.',
  iconName: 'HeartHandshake',
  accentColor: '#ec4899',
  courseOutcomes: [
    { code: 'CO1', statement: 'Explain Self-Exploration and Right Understanding for achieving Happiness and Prosperity.' },
    { code: 'CO2', statement: 'Explain Right Understanding, Relationship and Physical Facility and analyze the co-existence of Self and Body.' },
    { code: 'CO3', statement: 'Identify values in human relationships and explain Harmony in the Society.' },
    { code: 'CO4', statement: 'Explain Harmony in Nature, mutual fulfilment among the four orders and co-existence in Existence.' },
    { code: 'CO5', statement: 'Explain human values and ethical conduct with reference to Professional Ethics and Universal Human Order.' },
  ],
  referenceBooks: [
    { title: 'A Foundation Course in Human Values and Professional Ethics', authors: 'R. R. Gaur, R. Sangal, G. P. Bagaria', publisher: 'Excel Books, New Delhi, 2010', isbn: '978-8174467812' },
    { title: 'Human Values and Professional Ethics', authors: 'Smriti Srivastava', publisher: 'S. Chand & Company', isbn: '978-9383746903' },
    { title: 'Small Is Beautiful: A Study of Economics as If People Mattered', authors: 'E. F. Schumacher', publisher: 'Harper Perennial', isbn: '978-0061997761' },
  ],
  units: [
    {
      id: 'uhv-u1',
      unitNumber: 1,
      title: 'Self-Exploration, Happiness and Prosperity',
      hours: 5,
      mappedCOs: ['CO1'],
      learningObjectives: [
        'Understand the process of Self-Exploration as the method for Value Education.',
        'Distinguish between Continuous Happiness (Sukha) and Physical Facility (Suvidha).',
        'Analyze the role of Right Understanding in resolving contradictions and achieving prosperity.'
      ],
      topics: [
        {
          id: 'uhv-u1-t1',
          topicNumber: '1.1',
          title: 'Self-Exploration, Continuous Happiness & Right Understanding',
          syllabusText: 'Self-Exploration; Continuous Happiness and Prosperity; Right Understanding.',
          unitId: 'uhv-u1',
          subjectId: 'uhv-1',
          subjectCode: '100109',
          quickDefinition: 'Self-Exploration is a process of observing within, identifying one’s innate desires (what is naturally acceptable to me?), and verifying proposals on the basis of Natural Acceptance and Experiential Validation. Continuous Happiness is being in harmony at all four levels of living: Individual, Family, Society, and Nature.',
          whyItMatters: 'Equips engineering students with emotional intelligence, mental resilience, and clarity of purpose, preventing burn-out and unethical shortcuts in career building.',
          coreConcept: [
            {
              heading: 'The Process of Self-Exploration',
              paragraphs: [
                'Whatever is stated in value education is a PROPOSAL, not a dogma or assumed belief.',
                'Verification occurs through two steps:',
                '1. Verification on the basis of Natural Acceptance: Innate human intuition that does not depend on time, place, culture, or conditioning (e.g. relationship is naturally acceptable, opposition is not).',
                '2. Experiential Validation (Living accordingly):',
                '   • Behavior with Human Beings leads to Mutual Happiness (Ubhay-Tripti).',
                '   • Work with Rest of Nature leads to Mutual Prosperity (Ubhay-Samridhi).'
              ]
            },
            {
              heading: 'Happiness (Sukha) vs Physical Facilities (Suvidha)',
              paragraphs: [
                '• Happiness (Sukha): State of harmony, fulfillment, and peace in the Self (‘I’). Qualitative, continuous.',
                '• Physical Facility (Suvidha): Material goods required for the nurturing, protection, and right utilization of the Body. Quantitative, limited in quantity (e.g. food, clothing, shelter).',
                '• Current Misunderstanding: Confusing happiness with accumulation of endless physical facilities (Physical Facility = Happiness). This leads to exploitation of human beings and degradation of nature.',
                '• Right Priority: (1) Right Understanding in the Self -> (2) Right Relationship with Humans -> (3) Physical Facilities with Nature.'
              ]
            }
          ],
          formulas: [
            {
              title: 'The Triad of Human Aspiration',
              latex: '\\text{Human Fulfillment} = \\text{Right Understanding} + \\text{Right Relationship (Mutual Happiness)} + \\text{Physical Facilities (Mutual Prosperity)}',
              explanation: 'Harmonious hierarchy of fundamental human needs.'
            }
          ],
          example: {
            problem: 'Contrast the need for Food vs the need for Respect between two human beings.',
            solutionSteps: [
              'Food is a physical need of the Body: It is quantitative (you can measure 200g of food), limited in quantity (eating 10 meals continuously causes discomfort), and satisfies physical hunger.',
              'Respect is a psychological need of the Self (‘I’): It is qualitative, continuous (you want respect all the time, 24/7), and cannot be substituted by material money or gifts without true feeling.'
            ],
            finalAnswer: 'Food is a limited physical need of Body; Respect is a continuous psychological need of Self.'
          },
          engineeringApplication: {
            title: 'Human-Centered Sustainable Technology Design',
            description: 'Engineers applying Right Understanding evaluate technology not merely for maximum corporate profit, but for ecological sustainability and genuine enhancement of human well-being.',
            impact: 'Prevents addictive dark-pattern algorithms and predatory digital designs.'
          },
          commonMistakes: [
            {
              mistake: 'Equating Prosperity with Wealth.',
              correction: 'Wealth is the physical quantity of material goods. Prosperity is the FEELING of having more than required physical facilities. A billionaire can feel deprived and unprosperous if driven by endless greed.',
              why: 'Prosperity is an internal feeling requiring both correct assessment of need and surplus generation.'
            }
          ],
          quickRevision: [
            'Self-exploration: verify proposals on Natural Acceptance & Living.',
            'Happiness is state of harmony; Prosperity is feeling of more than required physical facility.',
            'Priority: Right Understanding -> Relationship -> Physical Facility.',
            'Human needs: Qualitative (Self) vs Quantitative (Body).'
          ],
          examFocus: {
            questionTypes: ['Explain the process of Self-Exploration with diagram (8 Marks)', 'Differentiate between Happiness (Sukha) and Physical Facility (Suvidha) (7-8 Marks)', 'Explain the concept of Prosperity and differentiate Prosperity from Wealth (6-7 Marks)'],
            likelyMarks: '8 Marks',
            keyTheorems: ['Process of Self-Exploration and Proposal Verification Model'],
            tip: 'Draw the Proposal verification diagram showing Proposal -> Natural Acceptance -> Experiential Validation (Mutual Happiness + Mutual Prosperity).'
          },
          visualType: 'self-exploration',
          visualCaption: 'Process of Self-Exploration: Natural Acceptance & Experiential Validation',
          visualExplanation: 'Flowchart diagram illustrating how proposals are verified through inner Natural Acceptance and lived experiential validation with human society and nature.',
          estimatedMinutes: 25
        }
      ]
    },
    {
      id: 'uhv-u2',
      unitNumber: 2,
      title: 'Harmony in the Human Being (Co-existence of Self and Body)',
      hours: 5,
      mappedCOs: ['CO2'],
      learningObjectives: [
        'Understand human being as the co-existence of the sentient ‘Self’ (I) and material ‘Body’.',
        'Distinguish needs, activities, and response mechanisms of Self vs Body.',
        'Explain Sanyam (Self-regulation) in the Self and Svasthya (Health) in the Body.'
      ],
      topics: [
        {
          id: 'uhv-u2-t1',
          topicNumber: '2.1',
          title: 'Co-existence of Self (‘I’) and Body, Sanyam & Svasthya',
          syllabusText: 'Right Understanding, Relationship and Physical Facility; Happiness and Prosperity; Human being as a co-existence of the sentient ‘Self’ and the material ‘Body’.',
          unitId: 'uhv-u2',
          subjectId: 'uhv-1',
          subjectCode: '100109',
          quickDefinition: 'A Human Being is a harmonious co-existence of the conscious sentient Self (‘I’) and the material Body. Sanyama (Self-regulation) is the feeling of responsibility in the Self for nurturing, protecting, and rightly utilizing the Body, which naturally results in Svasthya (physical health and vitality).',
          whyItMatters: 'Enables engineers to maintain work-life balance, conquer digital screen addiction, manage stress, and ensure holistic mental and physical health.',
          coreConcept: [
            {
              heading: 'Self (‘I’) vs Material Body Comparison',
              paragraphs: [
                '• Needs: Needs of Self are Qualitative & Continuous (Happiness, Trust, Respect, Love). Needs of Body are Quantitative & Temporary (Food, Clothing, Shelter, Medicine).',
                '• Activities: Activities of Self are Knowing, Assuming, Recognizing, Fulfilling (Desiring, Thinking, Expecting - Continuous). Activities of Body are Eating, Walking, Breathing (Physico-chemical - Temporary).',
                '• Type: Self is Conscious / Sentient (Chetana); Body is Material / Physico-chemical (Jada).',
                '• Role: Self is the Seer (Drashta), Doer (Karta), and Enjoyer (Bhokta). Body is merely an instrument of the Self.'
              ]
            },
            {
              heading: 'Sanyam (Self-Regulation) and Svasthya (Health)',
              paragraphs: [
                '• Sanyama: The feeling of responsibility in the Self (‘I’) to keep the Body healthy through proper nurturing (diet/nutrition), protection (posture, exercise, rest), and right utilization (using body for noble work).',
                '• Svasthya: State of the Body where all physiological systems act in internal coordination and harmony according to the directions of the Self.',
                'Sanyam in the Self is the fundamental basis for Svasthya in the Body.'
              ]
            }
          ],
          formulas: [],
          example: {
            problem: 'Analyze who is feeling hungry: the Self or the Body? Who is enjoying the taste?',
            solutionSteps: [
              'Step 1: The sensation of an empty stomach is a physiological signal generated in the physical Body (lack of nutritional fuel).',
              'Step 2: The Self (‘I’) perceives this signal via the nervous system and decides to eat.',
              'Step 3: The tongue/palate physical receptors make contact with food, but the EXPERIENCE and ENJOYMENT of taste happens purely in the conscious Self (‘I’). The tongue itself is an unconscious organ.',
              'Step 4: Thus, nutrition is for the Body, but awareness and happiness of eating resides in the Self.'
            ],
            finalAnswer: 'Physical food nurtures the Body; perception, decision, and taste appreciation belong to the Self.'
          },
          engineeringApplication: {
            title: 'Ergonomic Workplace Design & Digital Well-being Apps',
            description: 'Software and hardware companies design ergonomic standing desks, blue-light filter displays, and screen-time limiters supporting software developers’ Sanyam to preserve spinal health and prevent digital eye strain.',
            impact: 'Prevents occupational RSI (Repetitive Strain Injury) and musculoskeletal disorders.'
          },
          commonMistakes: [
            {
              mistake: 'Treating the human being as only a biological physical body.',
              correction: 'A human being is a co-existence of conscious Self (‘I’) and material Body.',
              why: 'Physical facilities can satisfy the body but cannot satisfy the self’s continuous desire for respect, trust, and happiness.'
            }
          ],
          quickRevision: [
            'Human Being = Self (‘I’) + Body.',
            'Self needs: Qualitative (Respect, Trust, Happiness).',
            'Body needs: Quantitative (Food, Clothes).',
            'Self is Seer (Drashta), Doer (Karta), Enjoyer (Bhokta).',
            'Sanyam in Self leads to Svasthya in Body.'
          ],
          examFocus: {
            questionTypes: ['Distinguish between the needs, activities, and nature of Self (‘I’) and Body with table (8 Marks)', 'Explain Sanyam and Svasthya and how Sanyam is the basis of Svasthya (7-8 Marks)', 'Explain "I am the Seer, Doer, and Enjoyer" with examples (6-7 Marks)'],
            likelyMarks: '8 Marks',
            keyTheorems: ['Co-existence Model of Self and Body (Jeev-Chetana)'],
            tip: 'Construct the standard 3-column table comparing Needs, In Time, In Quantity, and Activities for Self vs Body.'
          },
          visualType: 'self-body-harmony',
          visualCaption: 'Co-existence of Self (‘I’) and Body: Information Flow & Sanyam',
          visualExplanation: 'Diagram illustrating conscious Self (‘I’) interacting with physical sensory organs, maintaining Sanyam to achieve physiological Svasthya in the Body.',
          estimatedMinutes: 25
        }
      ]
    },
    {
      id: 'uhv-u3',
      unitNumber: 3,
      title: 'Harmony in Human Relationships and Society',
      hours: 5,
      mappedCOs: ['CO3'],
      learningObjectives: [
        'Understand foundational values in human relationships (Trust, Respect, Affection, Care, Guidance, Reverence, Glory, Gratitude, Love).',
        'Distinguish between Intention (Competence) and Action in Trust (Vishwas).',
        'Analyze the comprehensive human goal in society (Right Understanding, Prosperity, Fearlessness/Trust, Co-existence).'
      ],
      topics: [
        {
          id: 'uhv-u3-t1',
          topicNumber: '3.1',
          title: 'Values in Relationships (Trust & Respect) & Societal Harmony',
          syllabusText: 'Values in human-human relationship; Harmony in the Society; Comprehensive human goal.',
          unitId: 'uhv-u3',
          subjectId: 'uhv-1',
          subjectCode: '100109',
          quickDefinition: 'Relationship is naturally between the Self of one human and the Self of another. Trust (Vishwas) is the foundational value, defined as being assured that the other person naturally wants my happiness (Right Intention vs Competence). Respect (Samman) is Right Evaluation of the other without differentiation. Societal harmony achieves the Comprehensive Human Goal: Samadhan, Samridhi, Abhay, Sah-astitva.',
          whyItMatters: 'Essential for cross-functional engineering teamwork, conflict resolution in multinational tech companies, and ethical leadership.',
          coreConcept: [
            {
              heading: 'The Nine Established Values (Nyaya) in Relationships',
              paragraphs: [
                '1. Trust (Vishwas - Foundational Value): Assurance on intention.',
                '2. Respect (Samman): Right evaluation (neither over-evaluating, under-evaluating, nor otherwise-evaluating). Current differentiation occurs on body (gender, race), physical facility (wealth), or beliefs (religion).',
                '3. Affection (Sneha): Feeling of being related to the other.',
                '4. Care (Vatsalya): Feeling of nurturing and protecting the body of the relative.',
                '5. Guidance (Mamata): Feeling of ensuring right understanding in the relative.',
                '6. Reverence (Shraddha): Feeling of acceptance for excellence in the other.',
                '7. Glory (Gaurav): Feeling for those who made efforts for excellence.',
                '8. Gratitude (Kritagyata): Feeling of acceptance for those who contributed to my development.',
                '9. Love (Prema - Complete Value): Feeling of relatedness to ALL human beings (Universal Brotherhood).'
              ]
            },
            {
              heading: 'Trust: Distinguishing Intention vs Competence',
              paragraphs: [
                '• Intention: What one naturally aspires for (everyone’s natural intention is to make themselves and others happy).',
                '• Competence: The ability to actualize one’s intention (often lacking due to lack of right understanding).',
                'Mistake: We judge ourselves by our intention (giving ourselves benefit of doubt) but judge others by their current lack of competence (doubting their intention, causing anger and relationship breakdown).'
              ]
            },
            {
              heading: 'Comprehensive Human Goal in Society (Sarvabhaum Samajik Lakshya)',
              paragraphs: [
                '1. Right Understanding (Samadhan) in every Individual.',
                '2. Prosperity (Samridhi) in every Family.',
                '3. Fearlessness / Trust (Abhay) in Society.',
                '4. Co-existence (Sah-astitva) in Nature.',
                'Realized through 5 Universal Systems: Education-Sanskar, Health-Sanyam, Production-Work, Justice-Suraksha, Exchange-Storage.'
              ]
            }
          ],
          formulas: [],
          example: {
            problem: 'When a team member misses an engineering project deadline, how does an engineer with Right Understanding respond using Intention vs Competence analysis?',
            solutionSteps: [
              'Step 1: Unconscious reaction: Assume bad intention ("He deliberately delayed the project to sabotage me") -> generates anger, hostility, and team breakdown.',
              'Step 2: Conscious response: Trust intention ("His intention was to complete the project on time, but his competence or technical skillset was lacking, or an unexpected obstacle occurred").',
              'Step 3: Action: Support the colleague to improve their technical competence while keeping relationship harmonious.'
            ],
            finalAnswer: 'Trust the colleague’s intention, identify and bridge the competence gap with empathy.'
          },
          engineeringApplication: {
            title: 'Agile Software Engineering Collaborative Teamwork',
            description: 'High-performing engineering teams deploy blameless post-mortems after system outages, assuming positive intent among engineers while systematically fixing code test coverage and CI/CD deployment pipelines.',
            impact: 'Fosters high-trust psychological safety and innovative rapid product iteration.'
          },
          commonMistakes: [
            {
              mistake: 'Confusing Respect with Differentiation based on wealth, caste, or power.',
              correction: 'True Respect (Samman) is RIGHT EVALUATION of human worth. Differentiating based on clothes, cars, or job titles is Disrespect (Asamman).',
              why: 'All human beings share identical fundamental aspirations for happiness.'
            }
          ],
          quickRevision: [
            'Foundational value = Trust (Vishwas); Complete value = Love (Prema).',
            'Trust: separate Intention (always good) from Competence (can be lacking).',
            'Respect = Right evaluation (avoid over/under/otherwise evaluation).',
            'Comprehensive Human Goal: Samadhan (Individual) -> Samridhi (Family) -> Abhay (Society) -> Sah-astitva (Nature).'
          ],
          examFocus: {
            questionTypes: ['Explain Trust (Vishwas) and differentiate between Intention and Competence with examples (8 Marks)', 'Explain Respect (Samman) and discuss common basis of differentiation in society (7-8 Marks)', 'Explain the Comprehensive Human Goal (Samadhan, Samridhi, Abhay, Sah-astitva) (7-8 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Intention vs Competence Model of Trust', 'Comprehensive Human Goal Framework'],
            tip: 'List the 9 relationship values in order starting from Trust and concluding with Love.'
          },
          visualType: 'relationship-values',
          visualCaption: 'The 9 Relationship Values & Comprehensive Societal Goal',
          visualExplanation: 'Diagram connecting foundational Trust (Vishwas) through Respect, Care, and Gratitude to universal Love (Prema) and societal Abhay (Fearlessness).',
          estimatedMinutes: 25
        }
      ]
    },
    {
      id: 'uhv-u4',
      unitNumber: 4,
      title: 'Harmony in Nature and Existence',
      hours: 6,
      mappedCOs: ['CO4'],
      learningObjectives: [
        'Understand the Four Orders of Nature (Material, Pranic, Animal, Human).',
        'Analyze mutual fulfillment and cyclical nature (Aavartansheelta) among the four orders.',
        'Explain Existence as Co-existence (Sah-astitva) of Units immersed in all-pervasive Space (Shunya).'
      ],
      topics: [
        {
          id: 'uhv-u4-t1',
          topicNumber: '4.1',
          title: 'The Four Orders of Nature & Existence as Co-existence in Space',
          syllabusText: 'Harmony in the Nature; Interconnectedness and mutual fulfilment among the four orders of nature; Existence as Co-existence of mutually interacting units in all-pervasive space; Holistic perception of harmony at all levels of existence.',
          unitId: 'uhv-u4',
          subjectId: 'uhv-1',
          subjectCode: '100109',
          quickDefinition: 'Nature comprises Four Orders: Physical/Material (soil, water, minerals), Plant/Bio/Pranic (flora, trees), Animal (fauna), and Human Order. The first three orders are mutually enriching and cyclical. Humans currently disrupt this harmony due to lack of right understanding. Existence is the Co-existence of active, energized, self-organized Units immersed in all-pervasive, transparent, inactive Space (Shunya).',
          whyItMatters: 'Forms the foundational philosophy for circular economy, renewable energy, zero-waste engineering, and climate change reversal.',
          coreConcept: [
            {
              heading: 'The Four Orders of Nature & Mutual Fulfillment',
              paragraphs: [
                '1. Material Order (Padartha Avastha): Soil, air, water, metals. Activity: Composition/Decomposition. Natural characteristic: Existence (Padartha).',
                '2. Plant / Pranic Order (Prana Avastha): Plants, trees, herbs, algae. Activity: Composition/Decomposition + Respiration/Growth. Innate property: Growth (Prana).',
                '3. Animal Order (Jeeva Avastha): Animals, birds. Activity: Body activities + Desire to live in the Self. Innate property: Will to live (Jeevan-Asha).',
                '4. Human Order (Gyana Avastha): Human beings. Activity: Knowing, assuming, recognizing, fulfilling. Innate property: Will to live with continuous happiness (Gyana).',
                'Cyclic Harmony: Material feeds Plants, Plants feed Animals, Animal/Plant decay enriches Material soil. Only Human Order currently exploits without enriching.'
              ]
            },
            {
              heading: 'Existence as Co-existence (Sah-Astitva) in Space',
              paragraphs: [
                'Existence = Units (Ikaian) immersed in Space (Shunya).',
                '• Units: Limited in size, active, energized, self-organized, interacting (Material units and Conscious units).',
                '• Space (Shunya): Unlimited, all-pervasive, transparent, motionless, providing room for units to exist and interact in inherent equilibrium.',
                'Everything in existence is in harmonious co-existence; understanding this eliminates fear and exploitation.'
              ]
            }
          ],
          formulas: [],
          example: {
            problem: 'Show how the forest ecosystem operates as a self-balancing cyclical system (Aavartansheelta) without human intervention.',
            solutionSteps: [
              'Step 1: Trees in the Pranic order draw water and minerals from the Material soil and carbon dioxide from the air.',
              'Step 2: Photosynthesis produces oxygen and fruits, feeding the Animal order (deer, birds, insects).',
              'Step 3: Animal waste and fallen leaves decompose through microorganisms back into rich humus, replenishing the Material soil.',
              'Step 4: The system produces zero pollution and 100% cyclical reuse (Mutual Fulfillment).'
            ],
            finalAnswer: 'The forest exemplifies inherent natural cyclicality and mutual enrichment among the orders.'
          },
          engineeringApplication: {
            title: 'Industrial Circular Economy & Zero-Emission Manufacturing',
            description: 'Chemical and manufacturing plants apply natural cyclicality (Aavartansheelta) by designing closed-loop production where the waste output of one process becomes the raw feedstock input for another.',
            impact: 'Eliminates toxic industrial effluents and preserves non-renewable mineral reserves.'
          },
          commonMistakes: [
            {
              mistake: 'Assuming Nature is inherently violent and based purely on "survival of the fittest".',
              correction: 'At systemic ecological scale, Nature is characterized by MUTUAL ENRICHMENT and interdependence among orders, not pure conflict.',
              why: 'Predator-prey relationships regulate population stability, preserving overarching forest equilibrium.'
            }
          ],
          quickRevision: [
            'Four orders: Material, Pranic (Plants), Animal, Human.',
            'First 3 orders are mutually fulfilling and cyclical (Aavartansheel).',
            'Humans need Right Understanding to become mutually enriching.',
            'Existence = Units (energized, limited) immersed in Space (unlimited, pervasive).',
            'Existence is Co-existence (Sah-astitva).'
          ],
          examFocus: {
            questionTypes: ['Explain the Four Orders in Nature with characteristics, activities, and mutual fulfillment (8 Marks)', 'Explain "Existence is Co-existence of Units in Space" (7-8 Marks)', 'Explain the concept of Cyclicality (Aavartansheelta) and Self-regulation in nature (6-7 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Theory of Four Orders and Cyclical Mutual Fulfillment', 'Sah-Astitvavaad (Co-existential Philosophy)'],
            tip: 'Draw the 4-quadrant diagram of the Four Orders showing arrows of mutual enrichment linking Material, Plant, Animal, and Human orders.'
          },
          visualType: 'four-orders-nature',
          visualCaption: 'The Four Orders of Nature: Cyclical Interconnectedness & Mutual Fulfillment',
          visualExplanation: 'Circular diagram showing Material, Pranic (Flora), Animal (Fauna), and Human orders linked by cyclical exchange arrows in all-pervasive Space.',
          estimatedMinutes: 25
        }
      ]
    },
    {
      id: 'uhv-u5',
      unitNumber: 5,
      title: 'Professional Ethics and Universal Human Order',
      hours: 7,
      mappedCOs: ['CO5'],
      learningObjectives: [
        'Understand natural acceptance of human values and Definitiveness of Ethical Human Conduct.',
        'Explore basis for Humanistic Education, Constitution, and Universal Human Order (Sarvabhauma Vyavastha).',
        'Analyze competence in professional ethics and transition strategies at individual and societal levels.'
      ],
      topics: [
        {
          id: 'uhv-u5-t1',
          topicNumber: '5.1',
          title: 'Professional Ethics, Ethical Human Conduct & Universal Human Order',
          syllabusText: 'Natural acceptance of human values; Definitiveness of Ethical Human Conduct; Basis for Humanistic Education, Humanistic Constitution and Humanistic Universal Order; Competence in professional ethics; Strategy for transition from the present state to Universal Human Order: a. At the level of individual, b. At the level of society.',
          unitId: 'uhv-u5',
          subjectId: 'uhv-1',
          subjectCode: '100109',
          quickDefinition: 'Professional Ethics is the application of universal human values in professional work. Definitiveness of Ethical Human Conduct is characterized by Value-based living (Mulya), Policy-based living (Niti), and Character-based living (Charitra). The ultimate goal is transition from current exploitation to Universal Human Order (Undivided Human Society - Akhanda Samaja).',
          whyItMatters: 'Prevents engineering catastrophes (like Boeing 737 Max sensor overrides, Therac-25 radiation bugs, and dieselgate emission cheat devices) caused by unbridled corporate greed.',
          coreConcept: [
            {
              heading: 'Definitiveness of Ethical Human Conduct (3 Facets)',
              paragraphs: [
                '1. Values (Mulya): Inner clarity on human values at all 4 levels of living.',
                '2. Policy (Niti): Plans for right utilization and enrichment of self, body, wealth, and nature.',
                '3. Character (Charitra): (a) Chastity in marital relationship (Sva-Nari/Sva-Purusha), (b) Right acquisition of wealth through legitimate labor (Sva-Dhana), (c) Humane behavior and kindness towards all (Dayapoorna Vyavahara).'
              ]
            },
            {
              heading: 'Competence in Professional Ethics',
              paragraphs: [
                '• Clarity of values: Understanding that profession is a means for universal human welfare, not exploitation.',
                '• Ability to identify eco-friendly and people-friendly technologies: Designing solar/cyclical tech rather than polluting obsolescence.',
                '• Developing mutually fulfilling production systems and professional integrity.'
              ]
            },
            {
              heading: 'Two-Level Transition Strategy to Universal Human Order',
              paragraphs: [
                '• Individual Level: Developing Right Understanding through Value Education, self-exploration, living in harmony with family, and self-restraint (Sanyam).',
                '• Societal Level: Transition from consumerist profit-driven models to cyclical eco-friendly production, humanistic education policies, and undivided societal institutions (Akhanda Samaja to Sarvabhauma Vyavastha).'
              ]
            }
          ],
          formulas: [],
          example: {
            problem: 'Case Study: An automotive software engineer is ordered by company executives to install an ECU software cheat code that turns off emission catalytic scrubbers during normal road driving to boost acceleration. How should an ethical engineer respond?',
            solutionSteps: [
              'Step 1: Analyze ethical violation: The cheat software violates Character (Sva-Dhana - dishonest profit) and Article 51A(g) environmental protection, releasing toxic NO_x causing public respiratory diseases.',
              'Step 2: Professional Competence: Refuse to author the illegal override code, document the engineering environmental hazards in formal technical memos, and escalate to internal safety audit committees or statutory regulatory bodies.',
              'Step 3: An ethical engineer prioritizes human health and public safety over short-term company profit or personal career fear.'
            ],
            finalAnswer: 'Refuse unethical software tampering and uphold public safety and environmental integrity.'
          },
          engineeringApplication: {
            title: 'AI Algorithmic Safety & Whistleblower Protections in Tech',
            description: 'Engineers designing autonomous weapons, social media feeds, and financial credit models enforce strict ethical AI safety guidelines to ensure algorithms do not amplify discrimination, mental harm, or unconstrained lethal force.',
            impact: 'Guarantees AI technologies serve universal human flourishing.'
          },
          commonMistakes: [
            {
              mistake: 'Viewing professional ethics as mere legal compliance or regulatory paperwork.',
              correction: 'Ethics is NOT just following laws out of fear of punishment. It is INTRINSIC HARMONIOUS CONDUCT arising from inner Right Understanding.',
              why: 'Laws often lag decades behind new technological developments (like AI and bio-engineering).'
            }
          ],
          quickRevision: [
            'Ethical conduct = Values (Mulya) + Policy (Niti) + Character (Charitra).',
            'Character: Sva-Nari/Purusha, Sva-Dhana (honest wealth), Dayapoorna Vyavahara (compassion).',
            'Competence: Eco-friendly and people-friendly engineering design.',
            'Vision: Akhanda Samaja (Undivided Society) -> Sarvabhauma Vyavastha (Universal Order).'
          ],
          examFocus: {
            questionTypes: ['Explain Definitiveness of Ethical Human Conduct (Values, Policy, Character) (8 Marks)', 'Discuss Competence in Professional Ethics for Engineers (7-8 Marks)', 'Explain the strategy for transition from present state to Universal Human Order at individual and societal levels (8 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Universal Human Order Framework (Akhand Samaja / Sarvabhaum Vyavastha)'],
            tip: 'Mention the three components of Character (Charitra): Sva-Dhana, Sva-Nari/Purusha, and Dayapoorna Vyavahara.'
          },
          visualType: 'professional-ethics',
          visualCaption: 'Definitiveness of Ethical Conduct & Universal Human Order Transition',
          visualExplanation: 'Diagram connecting inner Values (Mulya), Policies (Niti), and Character (Charitra) outward into Undivided Society (Akhanda Samaja) and Universal Order.',
          estimatedMinutes: 25
        }
      ]
    }
  ]
};
