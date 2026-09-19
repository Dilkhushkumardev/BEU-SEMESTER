import type { Subject } from '../../types';

export const constitutionSubject: Subject = {
  id: 'constitution-1',
  code: '100110',
  name: 'Essence of Indian Constitution',
  shortName: 'Constitution',
  type: 'theory',
  credits: 0,
  lectureHours: 3,
  tutorialHours: 0,
  practicalHours: 0,
  totalHours: 42,
  semester: 1,
  group: 'Group-A (CSE & Allied Branches)',
  description: 'Comprehensive study of the Constitution of India, Preamble, Fundamental Rights (Part-III), Fundamental Duties, Directive Principles of State Policy (Part-IV), State Governance under Part-VI, and Key Constitutional Amendments.',
  iconName: 'Scale',
  accentColor: '#f97316',
  courseOutcomes: [
    { code: 'CO1', statement: 'List salient features and characteristics of the constitution of India.' },
    { code: 'CO2', statement: 'Follow fundamental rights and duties as responsible citizen and engineer of the country.' },
    { code: 'CO3', statement: 'Explain the relevance of Directive Principles of State Policy and Identify their relationship with Fundamental Rights.' },
    { code: 'CO4', statement: 'Explain the system of governance under Part-VI.' },
    { code: 'CO5', statement: 'Analyze major constitutional amendments in the constitution.' },
  ],
  referenceBooks: [
    { title: 'Introduction to the Constitution of India', authors: 'Dr. D. D. Basu', publisher: 'LexisNexis, 26th Edition', isbn: '978-9390529124' },
    { title: 'Indian Polity', authors: 'M. Laxmikanth', publisher: 'McGraw Hill Education, 7th Edition', isbn: '978-9355325082' },
    { title: 'The Constitution of India', authors: 'P. M. Bakshi', publisher: 'Universal Law Publishing', isbn: '978-9388548236' },
  ],
  units: [
    {
      id: 'const-u1',
      unitNumber: 1,
      title: 'Constitution and Preamble',
      hours: 8,
      mappedCOs: ['CO1'],
      learningObjectives: [
        'Understand meaning, necessity, and historical perspective of the Constitution of India.',
        'Enlist salient features and characteristics (Lengthiest written, Federal with unitary bias, Parliamentary form).',
        'Analyze the philosophy and keywords of the Preamble (Sovereign, Socialist, Secular, Democratic, Republic, Justice, Liberty, Equality, Fraternity).'
      ],
      topics: [
        {
          id: 'const-u1-t1',
          topicNumber: '1.1',
          title: 'Historical Background, Salient Features & The Preamble',
          syllabusText: 'Meaning of the constitution of India; Historical perspective of the Constitution of India; Salient features and characteristics of the Constitution of India; Preamble to the Constitution of India.',
          unitId: 'const-u1',
          subjectId: 'constitution-1',
          subjectCode: '100110',
          quickDefinition: 'The Constitution of India is the supreme law of the land, drafted by the Constituent Assembly under Dr. B. R. Ambedkar and adopted on 26th November 1949 (effective 26th January 1950). The Preamble serves as the soul and introductory key declaring India to be a "Sovereign, Socialist, Secular, Democratic Republic".',
          whyItMatters: 'Guarantees the rule of law, democracy, civil liberties, and constitutional ethics for engineers designing public systems, digital policies, and national infrastructure.',
          coreConcept: [
            {
              heading: 'Historical Perspective & Drafting',
              paragraphs: [
                'Influenced by Government of India Act 1935, British parliamentary system, US Bill of Rights (Fundamental Rights), Irish Directive Principles, and Australian concurrent list.',
                'Drafted by Constituent Assembly over 2 years, 11 months, and 18 days under Drafting Committee Chairman Dr. B. R. Ambedkar.'
              ]
            },
            {
              heading: 'Salient Features of the Indian Constitution',
              paragraphs: [
                '1. Longest Written Constitution: Detailed administrative provisions to balance diverse states and languages.',
                '2. Blend of Rigidity and Flexibility: Some articles amendable by simple majority, others require special majority (Article 368).',
                '3. Federal System with Unitary Bias: Described as "Quasi-Federal" (K.C. Wheare) - single integrated judiciary, single citizenship, emergency provisions.',
                '4. Parliamentary Form of Government: Executive responsible to the Legislature.',
                '5. Independent Judiciary with Judicial Review (Basic Structure Doctrine - Kesavananda Bharati case, 1973).'
              ]
            },
            {
              heading: 'Philosophy of the Preamble & Key Terms',
              paragraphs: [
                '• Sovereign: Complete external and internal independence (free from foreign control).',
                '• Socialist & Secular: Added by 42nd Amendment (1976). Equal respect for all religions; democratic socialism.',
                '• Democratic Republic: Power vested in people; Head of State (President) is elected, not hereditary.',
                '• Four Objectives: Justice (Social, Economic, Political), Liberty (Thought, Expression, Belief, Faith, Worship), Equality (Status and Opportunity), Fraternity (Assuring dignity of individual and unity/integrity of the Nation).'
              ]
            }
          ],
          formulas: [],
          example: {
            problem: 'Is the Preamble considered an integral part of the Indian Constitution? Can it be amended under Article 368?',
            solutionSteps: [
              'Step 1: In the Berubari Union case (1960), the Supreme Court originally held that the Preamble was NOT part of the Constitution.',
              'Step 2: In the landmark Kesavananda Bharati case (1973), the 13-judge constitutional bench OVERRULED the earlier verdict, ruling that the Preamble IS an integral part of the Constitution.',
              'Step 3: The court ruled that the Preamble CAN be amended under Article 368, provided the Basic Structure is not destroyed.',
              'Step 4: It was amended once by the 42nd Constitutional Amendment Act 1976 (adding "Socialist", "Secular", and "Integrity").'
            ],
            finalAnswer: 'Preamble is an integral part and amendable subject to the Basic Structure Doctrine.'
          },
          engineeringApplication: {
            title: 'Constitutional Data Privacy & Digital Public Infrastructure',
            description: 'In the Justice K.S. Puttaswamy judgment (2017), the Supreme Court derived the Fundamental Right to Privacy under Article 21, mandating end-to-end encryption, algorithmic transparency, and ethical cybersecurity protocols in Aadhaar and UPI platforms.',
            impact: 'Protects citizen digital privacy against unauthorized state surveillance and data breaches.'
          },
          commonMistakes: [
            {
              mistake: 'Assuming "Socialist" and "Secular" were present in the original 1950 Preamble.',
              correction: '"Socialist", "Secular", and "Integrity" were added by the 42nd Constitutional Amendment Act in 1976.',
              why: 'Original 1949 preamble had "Sovereign Democratic Republic".'
            }
          ],
          quickRevision: [
            'Adopted 26 Nov 1949; Enacted 26 Jan 1950.',
            'Drafting Chairman: Dr. B. R. Ambedkar.',
            'Preamble keywords: Sovereign, Socialist, Secular, Democratic, Republic.',
            'Preamble is part of Constitution (Kesavananda Bharati, 1973).',
            '42nd Amendment 1976 added Socialist, Secular, Integrity.'
          ],
          examFocus: {
            questionTypes: ['Discuss the salient features of the Indian Constitution (8 Marks)', 'Explain the significance and key terms of the Preamble (7-8 Marks)', 'Discuss whether Preamble is part of Constitution and its amendability (7 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Basic Structure Doctrine (Kesavananda Bharati v. State of Kerala, 1973)'],
            tip: 'Quote the exact opening phrase: "WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a..." in your answer.'
          },
          visualType: 'constitution-preamble',
          visualCaption: 'Preamble Pillars: Core Ideals & Constitutional Objectives',
          visualExplanation: 'Diagram illustrating the 5 Core Nature Pillars (Sovereign, Socialist, Secular, Democratic, Republic) and 4 Objective Pillars (Justice, Liberty, Equality, Fraternity).',
          estimatedMinutes: 25
        }
      ]
    },
    {
      id: 'const-u2',
      unitNumber: 2,
      title: 'Fundamental Rights and Duties',
      hours: 8,
      mappedCOs: ['CO2'],
      learningObjectives: [
        'Enlist the 6 Fundamental Rights under Part-III (Articles 12 to 35).',
        'Understand constitutional remedies and the 5 prerogative Writs (Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto).',
        'Analyze Fundamental Duties under Article 51A and their significance for engineering professionals.'
      ],
      topics: [
        {
          id: 'const-u2-t1',
          topicNumber: '2.1',
          title: 'Fundamental Rights (Part-III) & Writs under Article 32',
          syllabusText: 'Fundamental Rights under Part-III; Enlist the fundamental rights; Constitutional remedies.',
          unitId: 'const-u2',
          subjectId: 'constitution-1',
          subjectCode: '100110',
          quickDefinition: 'Fundamental Rights (Articles 12-35 in Part-III) are justiciable civil liberties guaranteed to every citizen against state encroachment. Dr. Ambedkar called Article 32 (Right to Constitutional Remedies via Writs) the "Heart and Soul of the Constitution".',
          whyItMatters: 'Guarantees equality before law, freedom of speech/expression, and personal liberty essential for individual dignity and innovation.',
          coreConcept: [
            {
              heading: 'The Six Fundamental Rights (Part-III)',
              paragraphs: [
                '1. Right to Equality (Articles 14–18): Equality before law (Art 14), prohibition of discrimination (Art 15), equality of opportunity in public employment (Art 16), abolition of untouchability (Art 17), abolition of titles (Art 18).',
                '2. Right to Freedom (Articles 19–22): Six freedoms of speech, assembly, association, movement, residence, and profession (Art 19); protection in respect of conviction (Art 20); Protection of Life & Personal Liberty (Art 21 - includes right to privacy, clean environment, education Art 21A); protection against arrest (Art 22).',
                '3. Right against Exploitation (Articles 23–24): Prohibition of human trafficking and forced labor (Art 23); prohibition of child labor below 14 years in hazardous industries (Art 24).',
                '4. Right to Freedom of Religion (Articles 25–28): Freedom of conscience and profession (Art 25), manage religious affairs (Art 26).',
                '5. Cultural and Educational Rights (Articles 29–30): Protection of minority language/culture (Art 29), right of minorities to establish educational institutions (Art 30).',
                '6. Right to Constitutional Remedies (Article 32): Right to move Supreme Court for enforcement of fundamental rights.'
              ]
            },
            {
              heading: 'The 5 Prerogative Constitutional Writs (Articles 32 & 226)',
              paragraphs: [
                '• Habeas Corpus ("To have the body"): Orders authority to produce an illegally detained person before the court.',
                '• Mandamus ("We command"): Directs a public official or statutory body to perform a mandatory public duty.',
                '• Prohibition: Higher court stops a lower court/tribunal from exceeding its jurisdictional limits.',
                '• Certiorari ("To be certified"): Higher court quashes an illegal order passed by a lower court/tribunal.',
                '• Quo-Warranto ("By what authority"): Inquires into the legal legality of a person holding a public office.'
              ]
            }
          ],
          formulas: [],
          example: {
            problem: 'A software engineer is arrested without being informed of grounds and kept in police custody for 48 hours without being produced before a magistrate. Which Fundamental Rights are violated, and which writ applies?',
            solutionSteps: [
              'Step 1: Article 22(1) mandates right to be informed of grounds of arrest and consult a lawyer.',
              'Step 2: Article 22(2) mandates production before the nearest judicial magistrate within 24 hours of arrest (excluding travel time).',
              'Step 3: Article 21 (Protection of Personal Liberty) is directly violated.',
              'Step 4: The appropriate remedy is a Writ of HABEAS CORPUS filed under Article 32 (Supreme Court) or Article 226 (High Court) to secure immediate release from unlawful detention.'
            ],
            finalAnswer: 'Violation of Articles 21 and 22; Writ of Habeas Corpus applies.'
          },
          engineeringApplication: {
            title: 'Freedom of Speech & Software Code as Free Expression (Art 19(1)(a))',
            description: 'In Shreya Singhal v. Union of India (2015), the Supreme Court struck down Section 66A of the IT Act as unconstitutional, upholding software programmers’ and internet users’ fundamental freedom of digital expression under Article 19(1)(a).',
            impact: 'Protects open-source developers and online technology bloggers from arbitrary arrests.'
          },
          commonMistakes: [
            {
              mistake: 'Listing Right to Property as a Fundamental Right.',
              correction: 'Right to Property was REMOVED as a Fundamental Right by the 44th Amendment in 1978 and is now a Constitutional Legal Right under Article 300A.',
              why: 'There are only 6 Fundamental Rights today.'
            }
          ],
          quickRevision: [
            'Part-III, Articles 12 to 35: Justiciable rights.',
            'Art 14: Equality; Art 19: 6 Freedoms; Art 21: Life & Personal Liberty.',
            'Art 21A: Free education for children 6–14 years (86th Amendment).',
            'Art 32: Heart & soul of constitution (5 Writs).',
            'Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto.'
          ],
          examFocus: {
            questionTypes: ['Explain 6 Fundamental Rights in Indian Constitution (8 Marks)', 'Explain Article 32 and the 5 Types of Writs with use cases (8 Marks)', 'Explain Right to Life and Personal Liberty under Article 21 and its expanding scope (7-8 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Doctrine of Judicial Review', 'Puttaswamy Privacy Judgment (2017)'],
            tip: 'Memorize the Latin translation of each writ (e.g. Habeas Corpus = To have the body) for quick marks.'
          },
          visualType: 'fundamental-rights',
          visualCaption: 'The 6 Fundamental Rights & 5 Constitutional Prerogative Writs',
          visualExplanation: 'Diagram illustrating Part-III rights categories feeding into Article 32 constitutional protective shield with 5 judicial writ arrows.',
          estimatedMinutes: 30
        },
        {
          id: 'const-u2-t2',
          topicNumber: '2.2',
          title: 'Fundamental Duties (Article 51A) & Engineering Significance',
          syllabusText: 'Fundamental duties and their significance; Identify fundamental duties in general and with engineering field.',
          unitId: 'const-u2',
          subjectId: 'constitution-1',
          subjectCode: '100110',
          quickDefinition: 'Fundamental Duties (Article 51A, Part-IV-A) were added by the 42nd Amendment (1976) upon recommendation of the Swaran Singh Committee. They enumerate 11 moral civic obligations for Indian citizens, including developing a scientific temper and protecting the environment.',
          whyItMatters: 'Guides engineers to prioritize sustainable green designs, ethical technology deployment, public safety, and national intellectual property creation.',
          coreConcept: [
            {
              heading: 'Origin & The 11 Fundamental Duties (Article 51A)',
              paragraphs: [
                'Inspired by the Constitution of the USSR. Originally 10 duties; the 11th duty (duty of parent to provide education for children aged 6–14) was added by the 86th Amendment (2002).',
                'Key Duties:',
                '• (a) Abide by the Constitution, National Flag, and National Anthem.',
                '• (b) Cherish noble ideals of national freedom struggle.',
                '• (c) Uphold sovereignty, unity, and integrity of India.',
                '• (e) Promote harmony and common brotherhood; renounce derogatory practices towards women.',
                '• (g) Protect and improve natural environment (forests, lakes, rivers, wildlife).',
                '• (h) DEVELOP THE SCIENTIFIC TEMPER, humanism, and spirit of inquiry and reform.',
                '• (i) Safeguard public property and abjure violence.',
                '• (j) Strive towards excellence in all spheres of individual and collective activity.'
              ]
            },
            {
              heading: 'Direct Relevance of Article 51A to Engineers',
              paragraphs: [
                '1. Article 51A(h) - Scientific Temper: Direct mandate for engineers to eliminate superstition through empirical science, evidence-based reasoning, and technology innovations.',
                '2. Article 51A(g) - Environmental Protection: Designing energy-efficient hardware, zero-emission transportation, renewable solar setups, and non-toxic electronic waste recycling.',
                '3. Article 51A(j) - Striving for Excellence: Engineering high-reliability aerospace, medical equipment, and cybersecurity systems that make India globally competitive.'
              ]
            }
          ],
          formulas: [],
          example: {
            problem: 'Which specific Fundamental Duty directly obligates software engineers to develop open scientific algorithms and combat digital misinformation?',
            solutionSteps: [
              'Step 1: Article 51A(h) explicitly mandates every citizen to "develop the scientific temper, humanism, and the spirit of inquiry and reform".',
              'Step 2: For computer engineers, this translates to building transparent, unbiased AI algorithms, promoting digital literacy, and countering fake news/superstition online.'
            ],
            finalAnswer: 'Article 51A(h) — Developing the Scientific Temper.'
          },
          engineeringApplication: {
            title: 'Electronic Waste (E-Waste) Management & Green Computing',
            description: 'Fulfilling Article 51A(g) environmental duties, hardware engineers design modular laptops and smartphones using lead-free solder and recyclable bioplastics to eliminate toxic landfill pollution.',
            impact: 'Prevents heavy metal poisoning of groundwater supplies.'
          },
          commonMistakes: [
            {
              mistake: 'Assuming Fundamental Duties are directly legally enforceable by courts like Fundamental Rights.',
              correction: 'Fundamental Duties are NON-JUSTICIABLE directly, though Parliament has enacted specific statutes enforcing them (e.g. Environmental Protection Act, Prevention of Insults to National Honour Act).',
              why: 'They serve as moral codes and aids to constitutional interpretation.'
            }
          ],
          quickRevision: [
            'Part-IV-A, Article 51A; added by 42nd Amendment (1976).',
            'Swaran Singh Committee recommended 8; Parliament enacted 10; 11th added in 2002.',
            'Art 51A(h): Scientific temper (core duty for engineers).',
            'Art 51A(g): Environmental protection.',
            'Art 51A(j): Striving for excellence.'
          ],
          examFocus: {
            questionTypes: ['Enlist the Fundamental Duties under Article 51A and explain their significance (7-8 Marks)', 'Discuss the importance of Fundamental Duties with special reference to engineering professionals (7 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['Swaran Singh Committee Recommendations (1976)'],
            tip: 'Always emphasize Article 51A(h) (Scientific Temper) and Article 51A(g) (Environment) when answering from an engineering perspective.'
          },
          visualType: 'fundamental-duties',
          visualCaption: 'Fundamental Duties (Article 51A) for Engineers & Citizens',
          visualExplanation: 'Diagram mapping civic responsibilities to engineering pillars: Scientific Temper, Environmental Protection, Integrity, and Excellence.',
          estimatedMinutes: 20
        }
      ]
    },
    {
      id: 'const-u3',
      unitNumber: 3,
      title: 'Directive Principles of State Policy',
      hours: 8,
      mappedCOs: ['CO3'],
      learningObjectives: [
        'Understand origin, nature, and classification of DPSP (Socialistic, Gandhian, Liberal-Intellectual).',
        'Analyze key DPSP articles (Art 39, 40, 44 Uniform Civil Code, 45, 48A Environment, 50 Judiciary Separation).',
        'Examine conflict and harmonious balance between Fundamental Rights and Directive Principles.'
      ],
      topics: [
        {
          id: 'const-u3-t1',
          topicNumber: '3.1',
          title: 'Directive Principles (Part-IV) & Relationship with Fundamental Rights',
          syllabusText: 'Relevance of Directive Principles of State Policy under part-IV; Different articles of State policies under part-IV; Identify situations where directive principles prevail over fundamental rights.',
          unitId: 'const-u3',
          subjectId: 'constitution-1',
          subjectCode: '100110',
          quickDefinition: 'Directive Principles of State Policy (DPSP, Part-IV, Articles 36–51) borrowed from the Irish Constitution are constitutional guidelines for the State to establish a Socio-Economic Welfare State. Though non-justiciable (Article 37), they are fundamental in the governance of the country.',
          whyItMatters: 'Drives national policies on equal pay for equal work, free legal aid, environmental conservation, village panchayats, and maternity benefits.',
          coreConcept: [
            {
              heading: 'Threefold Classification of DPSPs',
              paragraphs: [
                '1. Socialistic Principles: Equal distribution of wealth (Art 39b/c), Equal pay for equal work for men and women (Art 39d), Right to work and public assistance (Art 41), Living wage for workers (Art 43).',
                '2. Gandhian Principles: Organization of Village Panchayats (Art 40), Promotion of cottage industries (Art 43), Promotion of educational/economic interests of SCs/STs (Art 46), Prohibition of intoxicating drinks (Art 47).',
                '3. Liberal-Intellectual Principles: Uniform Civil Code (Art 44), Early childhood care & education (Art 45), Protection of environment, forests and wildlife (Art 48A), Separation of Judiciary from Executive (Art 50), Promotion of international peace and security (Art 51).'
              ]
            },
            {
              heading: 'Harmonious Construction: FR vs DPSP Conflict',
              paragraphs: [
                '• Champakam Dorairajan case (1951): Supreme Court held Fundamental Rights prevail over DPSP in case of conflict.',
                '• 25th Amendment (1971): Inserted Article 31C stating laws giving effect to DPSP Articles 39(b) and 39(c) cannot be declared void on grounds of violating Article 14 or 19.',
                '• Minerva Mills case (1980): Landmark verdict established that the Indian Constitution is founded on the bedrock of the BALANCE between Part-III (FR) and Part-IV (DPSP). Neither is subordinate; they are two wheels of the same constitutional chariot.'
              ]
            }
          ],
          formulas: [],
          example: {
            problem: 'Under what specific constitutional circumstances can a law implementing a Directive Principle prevail over Fundamental Rights under Articles 14 and 19?',
            solutionSteps: [
              'Step 1: Under Article 31C (upheld in Kesavananda Bharati case), if Parliament enacts a law to implement Article 39(b) [distribution of material resources of community] or Article 39(c) [prevention of concentration of wealth],',
              'Step 2: Such a law CANNOT be challenged or declared unconstitutional on grounds of violating Article 14 (Equality before law) or Article 19 (6 Freedoms).',
              'Step 3: This represents the only constitutional exception where DPSP explicitly prevails over Fundamental Rights.'
            ],
            finalAnswer: 'Article 31C protects laws implementing DPSP Articles 39(b) and 39(c) against Articles 14 and 19.'
          },
          engineeringApplication: {
            title: 'Renewable Energy Policy & Carbon Emission Norms (Art 48A)',
            description: 'Government mandates for national solar power expansion (National Solar Mission) and electric vehicle subsidies (FAME scheme) are direct executive implementations of Article 48A to safeguard the environment.',
            impact: 'Drives transition to net-zero national carbon emissions.'
          },
          commonMistakes: [
            {
              mistake: 'Assuming citizens can file a writ petition in court to force government to implement a DPSP.',
              correction: 'DPSPs are NON-JUSTICIABLE under Article 37 (cannot be directly enforced by courts).',
              why: 'They are political and legislative mandates guided by resource availability, not absolute individual claims.'
            }
          ],
          quickRevision: [
            'Part-IV, Articles 36 to 51 (Irish origin).',
            'Non-justiciable (Art 37) but fundamental in governance.',
            'Aim: Establish a Social and Economic Welfare State.',
            'Art 40: Panchayats; Art 44: Uniform Civil Code; Art 48A: Environment; Art 50: Separate judiciary.',
            'Minerva Mills (1980): Balance between FR and DPSP is part of Basic Structure.'
          ],
          examFocus: {
            questionTypes: ['Classify Directive Principles of State Policy into Socialistic, Gandhian, and Liberal with relevant Articles (8 Marks)', 'Discuss the relationship and conflict between Fundamental Rights and DPSP with landmark judgments (8 Marks)', 'Explain the significance of Article 44 (UCC) and Article 48A (Environment) (5-7 Marks)'],
            likelyMarks: '8 Marks',
            keyTheorems: ['Harmonious Construction Doctrine (Minerva Mills case, 1980)'],
            tip: 'Quote the landmark cases in chronological order: Champakam Dorairajan (1951) -> Kesavananda Bharati (1973) -> Minerva Mills (1980).'
          },
          visualType: 'dpsp-structure',
          visualCaption: 'Classification of DPSP (Part-IV): Socialistic, Gandhian & Liberal-Intellectual',
          visualExplanation: 'Diagram illustrating the 3 ideological branches of Directive Principles and the Minerva Mills scale balancing Fundamental Rights with DPSP.',
          estimatedMinutes: 25
        }
      ]
    },
    {
      id: 'const-u4',
      unitNumber: 4,
      title: 'State Governance (Part-VI)',
      hours: 9,
      mappedCOs: ['CO4'],
      learningObjectives: [
        'Understand the structure of State Governance under Part-VI of the Constitution.',
        'Analyze powers and functions of Governor, Chief Minister, and Council of Ministers.',
        'Compare State Legislative Assembly (Vidhan Sabha) and State Legislative Council (Vidhan Parishad).'
      ],
      topics: [
        {
          id: 'const-u4-t1',
          topicNumber: '4.1',
          title: 'State Governance under Part-VI & State Legislature (Assembly vs Council)',
          syllabusText: 'Governance under part-VI; State Legislature, Legislative Assembly & Legislative Council; Differentiate between the Legislative Assembly and Legislative Council.',
          unitId: 'const-u4',
          subjectId: 'constitution-1',
          subjectCode: '100110',
          quickDefinition: 'Part-VI (Articles 152–237) establishes state governance in India. The Governor is the constitutional nominal executive head, while the Chief Minister and Council of Ministers hold real executive authority. The State Legislature can be Unicameral or Bicameral (consisting of Legislative Assembly [Vidhan Sabha] and Legislative Council [Vidhan Parishad]).',
          whyItMatters: 'Governs state administration in Bihar (which has a bicameral legislature) including state universities, state engineering colleges, and regional infrastructure projects.',
          coreConcept: [
            {
              heading: 'State Executive: Governor & Chief Minister',
              paragraphs: [
                '• Governor (Art 153–162): Appointed by the President of India for 5-year term. Acts on aid and advice of Council of Ministers (Art 163), except in discretionary matters. Holds ordinance-making power (Art 213) when state legislature is not in session.',
                '• Chief Minister (Art 164): Appointed by Governor; must command majority in Legislative Assembly. Real head of state government (De facto executive).'
              ]
            },
            {
              heading: 'Legislative Assembly (Vidhan Sabha) vs Legislative Council (Vidhan Parishad)',
              paragraphs: [
                '• Legislative Assembly (Lower House / Popular House): Directly elected by voters based on adult suffrage. Term: 5 years (subject to dissolution). Strength: 60 to 500 members (Bihar has 243 seats). Has decisive power over Money Bills.',
                '• Legislative Council (Upper House / Permanent House): Indirectly elected and nominated (1/3 by MLAs, 1/3 by local bodies, 1/12 by teachers, 1/12 by graduates, 1/6 nominated by Governor for literature/science/art/social service). Term: Permanent body, 1/3 members retire every 2 years (individual tenure 6 years). Max strength = 1/3 of Assembly; min 40. Only 6 Indian states have a Council: Bihar, Uttar Pradesh, Maharashtra, Karnataka, Andhra Pradesh, Telangana.'
              ]
            }
          ],
          formulas: [],
          example: {
            problem: 'Compare the legislative powers of the Legislative Assembly and Legislative Council regarding Money Bills.',
            solutionSteps: [
              'Step 1: A Money Bill can ONLY be introduced in the Legislative Assembly, NOT in the Legislative Council.',
              'Step 2: It requires the prior recommendation of the Governor.',
              'Step 3: After being passed by the Assembly, it is sent to the Council, which has ONLY 14 DAYS to return it with or without recommendations.',
              'Step 4: The Assembly may accept or reject any recommendation. If the Council fails to return it within 14 days, the bill is deemed passed by both houses in the form passed by the Assembly.'
            ],
            finalAnswer: 'The Legislative Assembly has supreme overriding power over Money Bills; Council has only 14 days advisory power.'
          },
          engineeringApplication: {
            title: 'State Engineering University Acts (Bihar Engineering University Act)',
            description: 'State governments enact statutory university laws through the State Legislative Assembly (such as the Bihar Engineering University Act 2021) to regulate technical education curricula, examination standards, and engineering college affiliations.',
            impact: 'Standardizes B.Tech engineering curriculum and degrees across all engineering colleges in Bihar.'
          },
          commonMistakes: [
            {
              mistake: 'Assuming every Indian state has a Legislative Council.',
              correction: 'Most Indian states are UNICAMERAL (only Legislative Assembly). Only 6 states currently have a Bicameral legislature with a Legislative Council (including Bihar).',
              why: 'Article 169 empowers Parliament to create or abolish a Legislative Council if the State Assembly passes a special resolution.'
            }
          ],
          quickRevision: [
            'Part-VI (Articles 152–237): The States.',
            'Governor: Nominal head (Art 153); Chief Minister: Real head.',
            'Governor ordinance power: Article 213.',
            'Legislative Assembly (Vidhan Sabha): Directly elected, 5-year term, controls Money bills.',
            'Legislative Council (Vidhan Parishad): Permanent body, 6-year term, 1/3 retire every 2 years.',
            'Bihar has a bicameral legislature (Assembly: 243 seats, Council: 75 seats).'
          ],
          examFocus: {
            questionTypes: ['Differentiate between State Legislative Assembly (Vidhan Sabha) and Legislative Council (Vidhan Parishad) (8 Marks)', 'Explain powers and functions of the Governor under Part-VI of Indian Constitution (7-8 Marks)', 'Explain how a bill becomes law in the State Legislature (7 Marks)'],
            likelyMarks: '8 Marks',
            keyTheorems: ['Bicameral State Legislative Structure (Articles 168–212)'],
            tip: 'Create a neat 6-point comparison table between Vidhan Sabha and Vidhan Parishad (Tenure, Direct/Indirect election, Age limit 25 vs 30, Money bill power, Dissolution).'
          },
          visualType: 'state-governance',
          visualCaption: 'State Governance Structure under Part-VI: Executive & Bicameral Legislature',
          visualExplanation: 'Organizational chart illustrating Governor and Chief Minister overseeing State Legislative Assembly (Vidhan Sabha) and Legislative Council (Vidhan Parishad).',
          estimatedMinutes: 25
        }
      ]
    },
    {
      id: 'const-u5',
      unitNumber: 5,
      title: 'Constitutional Amendments',
      hours: 9,
      mappedCOs: ['CO5'],
      learningObjectives: [
        'Understand amendment powers and procedures under Article 368 (Simple majority, Special majority, Special majority with state ratification).',
        'Analyze landmark constitutional amendments: 42nd (Mini Constitution), 44th, 74th (Municipalities), 76th, 86th (Right to Education), and 91st (Cabinet size limit).'
      ],
      topics: [
        {
          id: 'const-u5-t1',
          topicNumber: '5.1',
          title: 'Amendment Procedures (Article 368) & Landmark Amendments (42nd, 44th, 86th, 91st)',
          syllabusText: 'Amendment of Constitutional Powers and Procedure; Major Constitutional Amendment procedure - 42nd, 44th, 74th, 76th, 86th and 91st.',
          unitId: 'const-u5',
          subjectId: 'constitution-1',
          subjectCode: '100110',
          quickDefinition: 'Article 368 in Part-XX governs the procedure to amend the Constitution. Amendments require either a Special Majority of Parliament (majority of total membership + 2/3 of members present and voting) or Special Majority with ratification by at least half of the State Legislatures (for federal provisions), bounded by the Basic Structure Doctrine.',
          whyItMatters: 'Demonstrates how the Indian Constitution adapts to changing social, technological, and democratic requirements while preserving its core foundational ideals.',
          coreConcept: [
            {
              heading: 'Three Types of Amendment Procedures',
              paragraphs: [
                '1. By Simple Majority (Outside Article 368): Creation of new states (Art 3), citizenship rules, quorum in Parliament.',
                '2. By Special Majority under Article 368: Majority of total membership of each house (>50%) AND 2/3 majority of members present and voting. Used for Fundamental Rights, DPSP, and most provisions.',
                '3. By Special Majority and State Ratification: Special majority in Parliament PLUS ratification by simple majority of at least 50% of state legislatures. Required for federal matters (Election of President, distribution of legislative powers between Center and States, Supreme Court/High Court jurisdiction, Article 368 itself).'
              ]
            },
            {
              heading: 'Key Landmark Constitutional Amendments',
              paragraphs: [
                '• 42nd Amendment Act (1976 - "Mini Constitution"): Added "Socialist, Secular, Integrity" to Preamble; added Part IV-A (Fundamental Duties, Art 51A); added Art 39A, 43A, 48A; shifted 5 subjects (Education, Forests) from State to Concurrent List; extended term of Lok Sabha/Assemblies to 6 years (later reversed).',
                '• 44th Amendment Act (1978): Restored democratic safeguards; removed Right to Property from Fundamental Rights (made legal right Art 300A); replaced "Internal Disturbance" with "Armed Rebellion" for National Emergency (Art 352); mandated Articles 20 and 21 CANNOT be suspended during emergency.',
                '• 74th Amendment Act (1992): Constitutionalized Urban Local Bodies (Municipalities / Nagar Palikas); added Part IX-A and 12th Schedule with 18 functional items.',
                '• 76th Amendment Act (1994): Placed Tamil Nadu’s 69% reservation law under the 9th Schedule to protect it from judicial review.',
                '• 86th Amendment Act (2002): Made elementary education a Fundamental Right by inserting Article 21A (Free and compulsory education for children aged 6–14); added 11th Fundamental Duty under Art 51A(k).',
                '• 91st Amendment Act (2003): Capped the size of Council of Ministers (including PM/CM) to MAXIMUM 15% of the total strength of Lok Sabha or State Legislative Assembly (minimum 12 ministers in states); strengthened Anti-Defection Law.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Special Majority Requirement under Article 368',
              latex: '\\text{Votes Required} \\ge \\left( \\frac{\\text{Total Membership}}{2} + 1 \\right) \\quad \\land \\quad \\text{Votes Required} \\ge \\frac{2}{3} (\\text{Members Present \\& Voting})',
              explanation: 'Dual threshold required in both Lok Sabha and Rajya Sabha separately.'
            }
          ],
          example: {
            problem: 'In a Lok Sabha with 540 total members, 360 members are present and voting on a Constitutional Amendment Bill under Article 368. 250 members vote in favor. Does the bill pass?',
            solutionSteps: [
              'Step 1: Check Condition 1 (Majority of total membership): 540 / 2 = 270. Required = 271 votes.',
              'Step 2: Check Condition 2 (2/3 of present and voting): (2/3) * 360 = 240 votes.',
              'Step 3: Actual votes in favor = 250.',
              'Step 4: Although 250 > 240 (Condition 2 satisfied), 250 is LESS than 271 (Condition 1 failed).',
              'Step 5: The bill FAILS to pass because it did not secure the majority of the total membership.'
            ],
            finalAnswer: 'The Amendment Bill fails to pass (lacks majority of total membership).'
          },
          engineeringApplication: {
            title: 'Right to Education (86th Amendment) and STEM Accessibility',
            description: 'The 86th Amendment’s insertion of Article 21A provided constitutional backing for establishing government model schools, computer laboratories, and technical scholarship pipelines for rural students across Bihar and India.',
            impact: 'Democratized foundational STEM education access for millions of aspiring engineers.'
          },
          commonMistakes: [
            {
              mistake: 'Assuming a joint sitting of Parliament can be summoned to pass a Constitutional Amendment Bill in case of deadlock.',
              correction: 'There is NO PROVISION for a Joint Sitting under Article 368. Both Lok Sabha and Rajya Sabha MUST pass the amendment bill SEPARATELY with special majority.',
              why: 'Guarantees Rajya Sabha equal veto power over constitutional changes.'
            }
          ],
          quickRevision: [
            'Article 368 (Part-XX): Amendment procedure.',
            'No joint sitting for amendment bills.',
            '42nd Amendment (1976): Mini-constitution, added Preamble words, Part IV-A (Duties).',
            '44th Amendment (1978): Removed property from FR, protected Art 20 & 21 in emergency.',
            '74th Amendment (1992): Municipalities (12th Schedule).',
            '86th Amendment (2002): Art 21A Right to Education (6-14 years).',
            '91st Amendment (2003): Council of Ministers capped at 15% of House.'
          ],
          examFocus: {
            questionTypes: ['Explain the procedure for amending the Indian Constitution under Article 368 (8 Marks)', 'Explain the significance and changes introduced by the 42nd and 44th Constitutional Amendments (8-10 Marks)', 'Write short notes on: 86th Amendment (RTE) and 91st Amendment (Council of Ministers ceiling) (7-8 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Basic Structure Limitation on Amending Power (Kesavananda Bharati, 1973)'],
            tip: 'Always mention that while Parliament can amend any part of the Constitution under Article 368, it CANNOT alter or destroy the Basic Structure of the Constitution.'
          },
          visualType: 'constitutional-amendments',
          visualCaption: 'Article 368 Amendment Workflows & Landmark Constitutional Amendments Timeline',
          visualExplanation: 'Flowchart diagram illustrating Special Majority and State Ratification paths alongside a historical timeline of key amendments (42nd, 44th, 74th, 86th, 91st).',
          estimatedMinutes: 30
        }
      ]
    }
  ]
};
