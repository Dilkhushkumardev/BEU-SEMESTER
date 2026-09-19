import type { Subject } from '../../types';

export const aiSubject: Subject = {
  id: 'ai-1',
  code: '100105',
  name: 'Introduction to AI',
  shortName: 'AI',
  type: 'theory',
  credits: 3,
  lectureHours: 3,
  tutorialHours: 0,
  practicalHours: 0,
  totalHours: 42,
  semester: 1,
  group: 'Group-A (CSE & Allied Branches)',
  description: 'Foundational Artificial Intelligence covering Intelligent Agents & PEAS, State-Space & Heuristic Search (A*, Minimax, Alpha-Beta), Knowledge Representation & First-Order Logic, Probabilistic Reasoning (Bayesian Networks & Fuzzy Logic), and Machine Learning Paradigms.',
  iconName: 'Bot',
  accentColor: '#8b5cf6',
  courseOutcomes: [
    { code: 'CO1', statement: 'Explain the foundational concepts of Artificial Intelligence, including its inception, intelligent agents, and types of task environments.' },
    { code: 'CO2', statement: 'Trace uninformed, informed, local, and adversarial search strategies for solving AI problems.' },
    { code: 'CO3', statement: 'Perform manual logical inference using propositional and predicate logic by considering the methods of knowledge representation.' },
    { code: 'CO4', statement: 'Apply probabilistic reasoning and basic fuzzy-logic concepts to handle uncertainty in AI systems.' },
    { code: 'CO5', statement: 'Analyze the foundational machine learning paradigms underlying the design and implementation of AI-based systems.' },
  ],
  referenceBooks: [
    { title: 'Artificial Intelligence: A Modern Approach', authors: 'Stuart Russell, Peter Norvig', publisher: 'Pearson, 4th Ed., 2020', isbn: '978-0134610993' },
    { title: 'AI for Everyone', authors: 'Saptarsi Goswami, Amit Kumar Das, Amlan Chakrabarti', publisher: 'Pearson Education', isbn: '978-9361591754' },
    { title: 'Introduction to Artificial Intelligence and Expert Systems', authors: 'Dan W. Patterson', publisher: 'PHI Learning, 2015', isbn: '978-8120307775' },
    { title: 'Artificial Intelligence', authors: 'Elaine Rich, Kevin Knight, Shivashankar B. Nair', publisher: 'McGraw-Hill, 3rd Ed., 2017', isbn: '978-1259029420' },
    { title: 'Machine Learning Essentials', authors: 'Dhairya Parikh', publisher: 'Vibrant Publishers', isbn: '978-1636513775' },
  ],
  units: [
    {
      id: 'ai-u1',
      unitNumber: 1,
      title: 'Introduction to Artificial Intelligence',
      hours: 8,
      mappedCOs: ['CO1'],
      learningObjectives: [
        'Understand definition, history, and foundational philosophies of AI.',
        'Define intelligent agents using the PEAS framework (Performance, Environment, Actuators, Sensors).',
        'Classify task environments into observable, deterministic, episodic, static, discrete, and multi-agent.',
        'Compare architectures of simple reflex, model-based, goal-based, utility-based, and learning agents.'
      ],
      topics: [
        {
          id: 'ai-u1-t1',
          topicNumber: '1.1',
          title: 'Foundations of AI & Intelligent Agents (PEAS Framework)',
          syllabusText: 'What is AI? History and evolution of AI; Foundations of AI: philosophy, mathematics, and cognitive-science influences; Intelligent agents: agent–environment interaction, PEAS (Performance measure, Environment, Actuators, and Sensors) description.',
          unitId: 'ai-u1',
          subjectId: 'ai-1',
          subjectCode: '100105',
          quickDefinition: 'Artificial Intelligence is the study of creating rational agents that perceive their environment through sensors and take actions through actuators to maximize their performance measure. The PEAS framework formally specifies Performance measure, Environment, Actuators, and Sensors.',
          whyItMatters: 'Provides the formal engineering framework to specify autonomous systems like self-driving cars, warehouse robotics, medical diagnostic assistants, and automated trading bots.',
          coreConcept: [
            {
              heading: 'Definition & Four Approaches to AI',
              paragraphs: [
                '1. Thinking Humanly: Cognitive modeling (replicating human mental steps).',
                '2. Thinking Rationally: Laws of Thought (Aristotelian syllogisms, logic systems).',
                '3. Acting Humanly: The Turing Test approach (Natural language processing, knowledge, automated reasoning, vision).',
                '4. Acting Rationally (The Modern Agent Approach): Rational agent aims to achieve the best outcome, or best expected outcome under uncertainty.'
              ]
            },
            {
              heading: 'The PEAS Framework (Example: Automated Taxi Driver)',
              paragraphs: [
                '• Performance Measure: Safety, destination arrival speed, passenger comfort, compliance with traffic laws, fuel efficiency, maximum profits.',
                '• Environment: City streets, highways, pedestrians, weather conditions, other vehicles, police officers, construction zones.',
                '• Actuators: Steering wheel, accelerator pedal, brakes, turn indicators, horn, digital display.',
                '• Sensors: LiDAR, cameras, radar, ultrasonic sonar, GPS, speedometer, accelerometer, engine diagnostic sensors.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Agent Function & Architecture',
              latex: 'f: P^* \\to A \\quad \\text{where } P^* \\text{ is percept history and } A \\text{ is action space}',
              explanation: 'Mathematical mapping from sequence of percepts to chosen rational action.'
            }
          ],
          example: {
            problem: 'Specify the PEAS framework for an Automated Medical Diagnosis System.',
            solutionSteps: [
              'Performance: Healthy patient, minimized treatment cost and duration, zero false negatives (no missed critical diseases).',
              'Environment: Patient symptoms, medical history, clinical test laboratory data, hospital staff.',
              'Actuators: Recommended treatment plan, prescription generation, test orders, surgery referral notifications.',
              'Sensors: Keyboard input for symptom entry, direct electronic medical record (EMR) interface, digital lab test feeds.'
            ],
            finalAnswer: 'PEAS profile fully specified with high clinical diagnostic safety focus.'
          },
          engineeringApplication: {
            title: 'Autonomous Mining Haul Trucks in Open-Cast Mines',
            description: 'Heavy 400-ton autonomous haul trucks operate 24/7 in harsh dusty mining environments using PEAS specifications with GPS and LiDAR sensors to transport ore without human drivers.',
            impact: 'Eliminates human driver fatigue accidents and boosts mining productivity by 30%.'
          },
          commonMistakes: [
            {
              mistake: 'Confusing Performance Measure with Agent Goal.',
              correction: 'Performance measure is the EXTERNAL standard by which success is evaluated, not the internal heuristic of the agent.',
              why: 'If the designer sets an incorrect performance measure (e.g. cleaning vacuum dirt fast), the agent may repeatedly dump and clean dirt in an infinite loop.'
            }
          ],
          quickRevision: [
            'Rational agent acts to maximize expected performance.',
            'Agent = Architecture + Program.',
            'PEAS = Performance, Environment, Actuators, Sensors.',
            'Turing test tests whether computer can fool a human interrogator.'
          ],
          examFocus: {
            questionTypes: ['Define AI and explain the four approaches (5-7 Marks)', 'Explain PEAS framework with detailed examples for Autonomous Car or Medical Diagnosis (7-8 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['Rational Agent Paradigm (Russell & Norvig)'],
            tip: 'Always provide a neat 4-row PEAS table for the specified system.'
          },
          visualType: 'peas-agent',
          visualCaption: 'Intelligent Agent: Sensor Perception, Decision Engine & Actuator Action',
          visualExplanation: 'Diagram illustrating agent-environment feedback loop: sensors gathering percepts, internal reasoning architecture, and actuators altering the environment.',
          estimatedMinutes: 25
        },
        {
          id: 'ai-u1-t2',
          topicNumber: '1.2',
          title: 'Task Environments & Agent Architectures',
          syllabusText: 'Types of environments (observable, deterministic, episodic, static, discrete, single/multi-agent); Types of agents: simple reflex, model-based, goal-based, utility-based, learning agents; Overview of AI application domains across engineering disciplines.',
          unitId: 'ai-u1',
          subjectId: 'ai-1',
          subjectCode: '100105',
          quickDefinition: 'Task environments are categorized along 6 orthogonal dimensions (e.g. Fully vs Partially Observable, Deterministic vs Stochastic, Discrete vs Continuous). Agent architectures range from Simple Reflex (condition-action rules) to Learning Agents that continuously improve performance.',
          whyItMatters: 'The environment properties dictate which AI algorithm can be applied (e.g., Chess is deterministic & discrete; Self-driving is partially observable, stochastic, and continuous).',
          coreConcept: [
            {
              heading: 'The 6 Environment Dimensions',
              paragraphs: [
                '1. Fully vs Partially Observable: Full state visible via sensors (Chess) vs noisy/hidden state (Poker, Driving).',
                '2. Deterministic vs Stochastic: Next state determined solely by current state and action (Tic-tac-toe) vs random probabilities (Backgammon, Driving).',
                '3. Episodic vs Sequential: Current decision does not affect future episodes (Spam filter) vs current action impacts all future states (Chess).',
                '4. Static vs Dynamic: Environment unchanged while agent deliberates (Crossword puzzle) vs changing dynamically (Taxi driving).',
                '5. Discrete vs Continuous: Finite distinct states and time steps (Chess) vs continuous real-valued coordinates and velocities (Robotics).',
                '6. Single-Agent vs Multi-Agent: Agent operating alone (Solitaire) vs competing/cooperating with others (Chess, Football).'
              ]
            },
            {
              heading: 'The 5 Agent Architectures',
              paragraphs: [
                '1. Simple Reflex Agent: Condition-action rules: "IF car-in-front-brakes THEN brake". Ignores percept history.',
                '2. Model-Based Reflex Agent: Maintains internal state tracking unobserved parts of the world ("How the world evolves").',
                '3. Goal-Based Agent: Evaluates actions based on whether they achieve a desired goal state (uses search and planning).',
                '4. Utility-Based Agent: Maps states to real numbers (Utility Function U(s)) to trade off conflicting goals (e.g. speed vs safety).',
                '5. Learning Agent: Divided into Learning Element (improves behavior), Performance Element (selects actions), Critic (provides feedback against external standard), and Problem Generator (suggests exploratory actions).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Expected Utility Decision Rule',
              latex: '\\text{Action}^* = \\arg\\max_a \\sum_{s\'} P(s\' \\mid s, a) U(s\')',
              explanation: 'Rational agent selects action that maximizes expected future utility.'
            }
          ],
          example: {
            problem: 'Classify the task environment for (i) Chess with clock, and (ii) Autonomous self-driving car.',
            solutionSteps: [
              'Chess with clock: Fully Observable, Deterministic, Sequential, Semi-dynamic (clock runs), Discrete, Multi-Agent (Competitive).',
              'Self-driving car: Partially Observable, Stochastic, Sequential, Dynamic, Continuous, Multi-Agent (Mixed competitive/cooperative).'
            ],
            finalAnswer: 'Both environments classified across all 6 standard dimensions.'
          },
          engineeringApplication: {
            title: 'High-Frequency Stock Market Trading Agents',
            description: 'Utility-based multi-agent algorithms execute thousands of trades per second in continuous, stochastic, and dynamic financial markets, balancing maximum profit against risk exposure.',
            impact: 'Executes liquidity provisioning across global electronic stock exchanges.'
          },
          commonMistakes: [
            {
              mistake: 'Labeling an environment as continuous just because the agent uses floating point numbers.',
              correction: 'Continuous refers to continuous time, continuous spatial coordinates, and continuous action actuators (steering angle).',
              why: 'Chess board is discrete (64 squares) even if written on computer memory.'
            }
          ],
          quickRevision: [
            'Hardest environment: Partially observable, stochastic, sequential, dynamic, continuous, multi-agent.',
            'Simple reflex: condition-action rules.',
            'Model-based: maintains internal world state.',
            'Goal-based: searches for goal; Utility-based: maximizes happiness/trade-offs.',
            'Learning agent: critic, learning element, performance element, problem generator.'
          ],
          examFocus: {
            questionTypes: ['Classify different environments with examples (7-8 Marks)', 'Explain the 5 types of intelligent agent architectures with block diagrams (8-10 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Agent Architecture Hierarchy'],
            tip: 'Draw the 4 distinct block diagrams for Simple Reflex, Model-based, Goal-based, and Learning agents.'
          },
          visualType: 'agent-architectures',
          visualCaption: 'Hierarchy of Agent Architectures: Reflex, Goal, Utility & Learning Agent',
          visualExplanation: 'Diagram illustrating how internal state, goal evaluation, utility scoring, and learning critic blocks augment basic reflex mechanisms.',
          estimatedMinutes: 30
        }
      ]
    },
    {
      id: 'ai-u2',
      unitNumber: 2,
      title: 'Problem Solving by Search',
      hours: 9,
      mappedCOs: ['CO2'],
      learningObjectives: [
        'Formulate problems in state-space (Initial state, Actions, Transition model, Goal test, Path cost).',
        'Trace Uninformed Search algorithms (BFS, DFS, Uniform Cost Search, Iterative Deepening) and compare time/space complexities.',
        'Implement Informed Heuristic Search (Greedy Best-First, A* Search) and prove A* optimality with admissible heuristics.',
        'Trace Adversarial Game Playing Search (Minimax Algorithm and Alpha-Beta Pruning).'
      ],
      topics: [
        {
          id: 'ai-u2-t1',
          topicNumber: '2.1',
          title: 'Uninformed Search: BFS, DFS, Uniform Cost Search & IDDFS',
          syllabusText: 'Problem formulation and state-space representation; Uninformed search: BFS, DFS, Uniform Cost Search, Depth-Limited and Iterative Deepening Search.',
          unitId: 'ai-u2',
          subjectId: 'ai-1',
          subjectCode: '100105',
          quickDefinition: 'Uninformed (blind) search explores state-space graphs with zero domain knowledge beyond problem definition. BFS (Breadth-First) expands shallowest nodes using FIFO queue (complete, optimal for unit costs, high O(b^d) memory). DFS uses LIFO stack (low O(bm) memory, incomplete in infinite spaces). Iterative Deepening (IDDFS) combines BFS completeness and optimality with DFS linear memory.',
          whyItMatters: 'Forms the core search engine inside GPS routing, maze solvers, VLSI circuit routing, and automated theorem provers.',
          coreConcept: [
            {
              heading: 'Problem Formulation (5 Components)',
              paragraphs: [
                '1. Initial State: Starting state s_0 (e.g. In(Arad)).',
                '2. Actions: Set of possible actions Actions(s).',
                '3. Transition Model: Result(s, a) yielding successor state.',
                '4. Goal Test: Determines if state satisfies goal (e.g. In(Bucharest)).',
                '5. Path Cost: Sum of step costs c(s, a, s’).'
              ]
            },
            {
              heading: 'Comparison of Uninformed Search Strategies',
              paragraphs: [
                '• BFS (Breadth-First Search): Expands frontier via FIFO queue. Complete? Yes (if b is finite). Time: O(b^d). Space: O(b^d) (Memory bottleneck!). Optimal? Yes for uniform step costs.',
                '• DFS (Depth-First Search): Expands frontier via LIFO stack. Complete? No (can loop in infinite paths). Time: O(b^m). Space: O(b*m) (Linear space!). Optimal? No.',
                '• Uniform Cost Search (Dijkstra): Expands lowest cumulative path cost g(n) via Priority Queue. Complete? Yes (if step cost >= ε > 0). Optimal? Yes for general non-negative costs.',
                '• Iterative Deepening Search (IDDFS): Runs Depth-Limited Search for depth limit = 0, 1, 2, ..., d. Complete? Yes. Time: O(b^d). Space: O(b*d). Optimal? Yes for uniform costs. Preferred uninformed search!'
              ]
            }
          ],
          formulas: [
            {
              title: 'Uniform Cost Search Evaluation Function',
              latex: 'f(n) = g(n) = \\sum \\text{step costs from start to node } n',
              explanation: 'Expands node with lowest cumulative path cost.'
            },
            {
              title: 'IDDFS Total Node Generation Count',
              latex: 'N(\\text{IDDFS}) = (d)b + (d-1)b^2 + (d-2)b^3 + \\dots + (1)b^d = O(b^d)',
              explanation: 'Overhead of regenerating shallow nodes is minor (~11% for b=10).'
            }
          ],
          example: {
            problem: 'Compare the memory required for BFS vs DFS for a search tree with branching factor b = 10, solution depth d = 5, and maximum tree depth m = 10, assuming 1 KB per node.',
            solutionSteps: [
              'Step 1: BFS Space = O(b^d) = 10^5 nodes = 100,000 nodes.',
              '  BFS Memory = 100,000 * 1 KB = 100 MB.',
              'Step 2: DFS Space = O(b * m) = 10 * 10 = 100 nodes.',
              '  DFS Memory = 100 * 1 KB = 100 KB.',
              'Step 3: DFS requires 1,000 times less memory than BFS!'
            ],
            finalAnswer: 'BFS requires ~100 MB RAM; DFS requires only 100 KB RAM.'
          },
          engineeringApplication: {
            title: 'Robotic Warehouse Automated Path Routing',
            description: 'Amazon warehouse Kiva robots use Uniform Cost Search on 2D grid floor graphs with turn-cost penalties to navigate thousands of mobile shelving units simultaneously without collisions.',
            impact: 'Delivers packages with 99.9% inventory sorting accuracy.'
          },
          commonMistakes: [
            {
              mistake: 'Applying goal test when generating a child node in Uniform Cost Search.',
              correction: 'In Uniform Cost Search, goal test MUST be applied ONLY WHEN EXPANDING a node from the priority queue, NOT when generating it.',
              why: 'A cheaper path to the goal node might be discovered later through another branch.'
            }
          ],
          quickRevision: [
            'BFS: FIFO, complete, optimal (unit cost), O(b^d) exponential memory.',
            'DFS: LIFO, incomplete, non-optimal, O(bm) linear memory.',
            'Uniform Cost: Priority queue on g(n), optimal for positive costs.',
            'IDDFS: Combines BFS optimality with DFS O(bd) memory.'
          ],
          examFocus: {
            questionTypes: ['Compare search algorithms on Completeness, Time, Space, and Optimality (8 Marks)', 'Trace BFS and DFS on a given graph showing Open and Closed lists (7 Marks)', 'Explain Iterative Deepening Search with complexity derivation (7 Marks)'],
            likelyMarks: '8 Marks',
            keyTheorems: ['Completeness and Optimality Theorems of UCS and IDDFS'],
            tip: 'Construct the standard 4x4 complexity table (Columns: Complete, Time, Space, Optimal; Rows: BFS, DFS, UCS, IDDFS).'
          },
          visualType: 'search-trees',
          visualCaption: 'Uninformed Search Graph Traversal: BFS (Level-order) vs DFS (Branch-deep)',
          visualExplanation: 'Comparison diagram illustrating BFS horizontal layer expansion vs DFS deep-branch diving on a binary search tree.',
          estimatedMinutes: 30
        },
        {
          id: 'ai-u2-t2',
          topicNumber: '2.2',
          title: 'Informed Heuristic Search & The A* Algorithm',
          syllabusText: 'Informed (heuristic) search: Greedy Best-First Search, A* algorithm; Heuristic function design and admissibility/consistency.',
          unitId: 'ai-u2',
          subjectId: 'ai-1',
          subjectCode: '100105',
          quickDefinition: 'Informed search uses domain heuristic knowledge h(n) estimating remaining distance to goal. Greedy Best-First Search expands lowest h(n). A* Search evaluates f(n) = g(n) + h(n) (actual past cost + estimated future cost). A* is mathematically guaranteed to be Complete and Optimal if h(n) is Admissible (never overestimates) and Consistent (satisfies triangle inequality).',
          whyItMatters: 'A* is the industry standard algorithm powering Google Maps navigation, video game NPC pathfinding (Unity, Unreal Engine), and Mars Rover terrain route planning.',
          coreConcept: [
            {
              heading: 'Evaluation Functions',
              paragraphs: [
                '• Greedy Best-First Search: f(n) = h(n). Fast but incomplete and non-optimal (can get trapped in dead-end loops).',
                '• A* Search: f(n) = g(n) + h(n), where g(n) is the exact cost from start to node n, and h(n) is the estimated cost from n to goal.',
                'A* balances shortest path already traveled with promise of future progress.'
              ]
            },
            {
              heading: 'Conditions for A* Optimality',
              paragraphs: [
                '1. Admissibility: An admissible heuristic NEVER overestimates the true cost to reach the goal: 0 <= h(n) <= h*(n) (where h*(n) is true optimal cost). Required for Tree-Search optimality (e.g. Straight-line Euclidean distance).',
                '2. Consistency (Monotonicity): For every node n and successor n’ generated by action a: h(n) <= c(n, a, n’) + h(n’) (Triangle inequality). Ensures f(n) never decreases along any path. Required for Graph-Search optimality without re-opening closed nodes.',
                'Theorem: Every consistent heuristic is admissible.'
              ]
            },
            {
              heading: 'Designing Heuristics (e.g. 8-Puzzle Problem)',
              paragraphs: [
                '• h_1 (Misplaced Tiles): Number of tiles in wrong positions. Admissible because each misplaced tile must move at least once.',
                '• h_2 (Manhattan Distance): Sum of horizontal and vertical distances of tiles from their target positions: h_2 = Σ (|x_i - x_goal| + |y_i - y_goal|). Admissible.',
                'Dominance: Since h_2(n) >= h_1(n) for all n, h_2 is more informed (DOMINATES h_1) and will expand fewer nodes to reach the optimal solution.'
              ]
            }
          ],
          formulas: [
            {
              title: 'A* Evaluation Function',
              latex: 'f(n) = g(n) + h(n)',
              explanation: 'Total estimated cost of optimal solution through node n.'
            },
            {
              title: 'Admissibility Condition',
              latex: '0 \\le h(n) \\le h^*(n) \\quad \\forall n',
              explanation: 'Heuristic must be optimistic (underestimate true cost).'
            },
            {
              title: 'Consistency (Monotonicity) Condition',
              latex: 'h(n) \\le c(n, a, n\') + h(n\')',
              explanation: 'Estimated cost to goal from n cannot exceed step cost plus estimate from successor n’.'
            }
          ],
          example: {
            problem: 'Trace A* search on a map from Start S to Goal G: S->A (cost 2, h(A)=5), S->B (cost 5, h(B)=2), A->G (cost 6, h(G)=0), B->G (cost 2, h(G)=0).',
            solutionSteps: [
              'Step 1: Start node S: g(S) = 0, h(S) = 6 ==> f(S) = 6. Expand S.',
              'Step 2: Generate successors A and B:',
              '  • Node A: g(A) = 2, h(A) = 5 ==> f(A) = 2 + 5 = 7.',
              '  • Node B: g(B) = 5, h(B) = 2 ==> f(B) = 5 + 2 = 7.',
              'Step 3: Priority queue has A (f=7) and B (f=7). Pick A (tie-break).',
              'Step 4: Expand A: generates G with g(G) = 2 + 6 = 8, h(G) = 0 ==> f(G) = 8. Priority queue now: B (f=7), G (f=8).',
              'Step 5: Pick lowest f: Node B (f=7). Expand B: generates G with g(G) = 5 + 2 = 7, h(G) = 0 ==> f(G) = 7.',
              'Step 6: Pick lowest f: Node G (f=7). Goal reached!',
              'Optimal Path: S -> B -> G with total cost = 7 (Path S->A->G has cost 8).'
            ],
            finalAnswer: 'Optimal Path: S -> B -> G with minimum cost = 7.'
          },
          engineeringApplication: {
            title: 'Google Maps GPS Turn-by-Turn Navigation',
            description: 'Google Maps executes bidirectional A* with contraction hierarchies over continental road network graphs with 50+ million intersections, computing sub-second optimal routes accounting for live traffic delays.',
            impact: 'Saves billions of commuter transit hours and fuel liters globally.'
          },
          commonMistakes: [
            {
              mistake: 'Using an inadmissible heuristic that overestimates cost.',
              correction: 'If h(n) > h*(n), A* may return a sub-optimal solution because the optimal path looks falsely expensive.',
              why: 'A* requires optimism to guarantee exploration of the truly optimal path.'
            }
          ],
          quickRevision: [
            'A*: f(n) = g(n) + h(n).',
            'Admissible: h(n) <= h*(n) (never overestimates).',
            'Consistent: h(n) <= c(n, n’) + h(n’) (triangle inequality).',
            'Consistency guarantees Graph Search optimality without reopening closed nodes.',
            'Higher heuristic h_2 >= h_1 dominates and explores fewer nodes.'
          ],
          examFocus: {
            questionTypes: ['Explain A* algorithm with step-by-step example and prove admissibility / optimality (8-10 Marks)', 'Solve 8-Puzzle problem using Manhattan distance heuristic (8 Marks)', 'Differentiate between Informed and Uninformed search (5 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Proof of A* Optimality with Admissible / Consistent Heuristics'],
            tip: 'The proof that A* is optimal (showing that any sub-optimal goal node G_2 will have f(G_2) > f(n) for an unexpanded ancestor n of optimal goal G_1) is an 8-mark guaranteed question.'
          },
          visualType: 'a-star-search',
          visualCaption: 'A* Search: Cost Contour Expansion f(n) = g(n) + h(n)',
          visualExplanation: 'Graph visualization showing search frontier guided towards target goal by heuristic potential lines, avoiding wasted backward exploration.',
          estimatedMinutes: 35
        },
        {
          id: 'ai-u2-t3',
          topicNumber: '2.3',
          title: 'Adversarial Search: Minimax & Alpha-Beta Pruning',
          syllabusText: 'Adversarial search: Minimax algorithm, Alpha-Beta pruning; Local search algorithms: Hill Climbing, Simulated Annealing (concept); Constraint Satisfaction Problems (CSP): concept, backtracking (overview).',
          unitId: 'ai-u2',
          subjectId: 'ai-1',
          subjectCode: '100105',
          quickDefinition: 'In two-player zero-sum deterministic games (Chess, Tic-tac-toe), Minimax computes optimal moves assuming opponent plays optimally. MAX maximizes payoff, while MIN minimizes it. Alpha-Beta Pruning eliminates branches that cannot influence the final decision, doubling the reachable search depth from O(b^d) to O(b^(d/2)).',
          whyItMatters: 'Formed the foundation for IBM Deep Blue defeating world chess champion Garry Kasparov, and modern autonomous defense strategy games.',
          coreConcept: [
            {
              heading: 'Minimax Algorithm',
              paragraphs: [
                'Terminal states have utility values (e.g. +1 Win, 0 Draw, -1 Loss).',
                'Minimax Decision Rule:',
                '• At MAX node: Minimax(s) = max_{a} Minimax(Result(s, a)).',
                '• At MIN node: Minimax(s) = min_{a} Minimax(Result(s, a)).',
                'Time complexity: O(b^d); Space complexity: O(bd) (depth-first search traversal).'
              ]
            },
            {
              heading: 'Alpha-Beta Pruning (Pruning Condition)',
              paragraphs: [
                'Maintains two bound values during depth-first tree traversal:',
                '• α (Alpha): The highest (best) value MAX is guaranteed so far along the path (initialized to -∞).',
                '• β (Beta): The lowest (best) value MIN is guaranteed so far along the path (initialized to +∞).',
                'Pruning Rule: If at any node α >= β, PRUNE (stop searching) the remaining children of that node!',
                'With perfect move ordering, effective branching factor drops from b to √b, allowing game engines to look ahead twice as deep in the same time.'
              ]
            },
            {
              heading: 'Local Search & CSP Overview',
              paragraphs: [
                '• Hill Climbing: Greedy local search that moves to the neighbor with the highest value. Suffers from local maxima, ridges, and plateaus.',
                '• Simulated Annealing: Escapes local maxima by allowing occasional downhill moves with probability P = exp(ΔE / T), where temperature T gradually cools.',
                '• CSP (Constraint Satisfaction Problem): Defined by Variables X, Domains D, and Constraints C (e.g. Sudoku, Map Coloring). Solved via Backtracking Search with MRV (Minimum Remaining Values) heuristic.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Minimax Value Definition',
              latex: '\\text{Minimax}(s) = \\begin{cases} \\text{Utility}(s) & \\text{if Terminal}(s) \\\\ \\max_{a} \\text{Minimax}(\\text{Result}(s, a)) & \\text{if Player}(s) = \\text{MAX} \\\\ \\min_{a} \\text{Minimax}(\\text{Result}(s, a)) & \\text{if Player}(s) = \\text{MIN} \\end{cases}',
              explanation: 'Recursive minimax value for two-player zero-sum game.'
            },
            {
              title: 'Alpha-Beta Pruning Invariant',
              latex: '\\text{Prune branch if } \\alpha \\ge \\beta',
              explanation: 'Triggers when current branch offers worse value than an existing guaranteed alternative.'
            },
            {
              title: 'Simulated Annealing Acceptance Probability',
              latex: 'P = e^{\\frac{\\Delta E}{T}} \\quad (\\text{for bad move } \\Delta E < 0)',
              explanation: 'Metropolis criterion for stochastic downhill exploration.'
            }
          ],
          example: {
            problem: 'Trace Minimax with Alpha-Beta pruning on a 2-ply game tree where MAX has children MIN_1 (leaves: 3, 5) and MIN_2 (leaves: 2, 9).',
            solutionSteps: [
              'Step 1: Start at root MAX with α = -∞, β = +∞.',
              'Step 2: Traverse to MIN_1 (α = -∞, β = +∞).',
              '  • Evaluate left leaf = 3 ==> MIN_1 updates β = min(+∞, 3) = 3.',
              '  • Evaluate right leaf = 5 ==> MIN_1 updates β = min(3, 5) = 3.',
              '  • MIN_1 returns 3 to root.',
              'Step 3: Root MAX updates α = max(-∞, 3) = 3. Current α = 3, β = +∞.',
              'Step 4: Traverse to MIN_2 with inherited α = 3, β = +∞.',
              '  • Evaluate left leaf = 2 ==> MIN_2 updates β = min(+∞, 2) = 2.',
              '  • Check pruning condition: α >= β ==> 3 >= 2 is TRUE! PRUNE right leaf (value 9)!',
              '  • MIN_2 returns 2 to root.',
              'Step 5: Root MAX chooses max(3, 2) = 3.',
              'Final Minimax Value = 3; Leaf node with value 9 is pruned.'
            ],
            finalAnswer: 'Minimax Root Value = 3; Node with value 9 was pruned (Alpha Cutoff).'
          },
          engineeringApplication: {
            title: 'Automated Cyber Defense & Penetration Testing',
            description: 'Automated cybersecurity agents model network defense as an adversarial minimax game between Red Team (Attacker) and Blue Team (Defensive firewall/patch agent) to find optimal firewall routing policies.',
            impact: 'Thwarts zero-day network exploits in critical national infrastructure.'
          },
          commonMistakes: [
            {
              mistake: 'Failing to inherit α and β values down the tree.',
              correction: 'Child nodes MUST INHERIT the parent’s current α and β values when created.',
              why: 'Alpha and beta represent constraints established by earlier branches in the tree.'
            }
          ],
          quickRevision: [
            'Minimax: MAX picks maximum, MIN picks minimum.',
            'Alpha (α): best value for MAX; Beta (β): best value for MIN.',
            'Pruning condition: α >= β.',
            'Alpha-beta preserves exact minimax value (no loss in decision quality).',
            'Simulated annealing escapes local maxima using temperature T.'
          ],
          examFocus: {
            questionTypes: ['Apply Alpha-Beta pruning to a given 3-level game tree and indicate pruned branches (8-10 Marks)', 'Explain Minimax algorithm with game tree example (7 Marks)', 'Explain Hill Climbing problems (local maxima, ridges) and Simulated Annealing (7 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Alpha-Beta Pruning Efficiency Bound (O(b^(d/2)))'],
            tip: 'Always write the [α, β] interval at each node while tracing the tree in the exam.'
          },
          visualType: 'minimax-alpha-beta',
          visualCaption: 'Minimax Game Tree & Alpha-Beta Branch Pruning Cutoffs',
          visualExplanation: 'Tree diagram showing alternating MAX (triangles up) and MIN (triangles down) levels with red scissor cutoffs pruning redundant subtrees.',
          estimatedMinutes: 35
        }
      ]
    },
    {
      id: 'ai-u3',
      unitNumber: 3,
      title: 'Knowledge Representation and Reasoning',
      hours: 8,
      mappedCOs: ['CO3'],
      learningObjectives: [
        'Represent facts using Propositional Logic and First-Order Predicate Logic (FOL).',
        'Perform logical inference using Resolution Refutation in propositional and first-order logic.',
        'Trace Forward Chaining and Backward Chaining inference in Horn clause knowledge bases.',
        'Understand structured knowledge representations (Semantic Networks, Frames, and Production Systems).'
      ],
      topics: [
        {
          id: 'ai-u3-t1',
          topicNumber: '3.1',
          title: 'Propositional & First-Order Logic (Syntax, Semantics & Resolution)',
          syllabusText: 'Knowledge representation issues; propositional logic — syntax and semantics; Inference in propositional logic: resolution; First-order predicate logic — syntax, quantifiers (concept); Inference in first-order logic: forward chaining, backward chaining, resolution (concept).',
          unitId: 'ai-u3',
          subjectId: 'ai-1',
          subjectCode: '100105',
          quickDefinition: 'Propositional logic represents facts as atomic boolean variables (P, Q), while First-Order Logic (FOL) adds Objects, Predicates (King(x)), Functions, and Quantifiers (∀ Universal, ∃ Existential). Resolution is a complete refutation inference rule that resolves two complementary literals (A ∨ B) ∧ (¬A ∨ C) into the resolvent (B ∨ C).',
          whyItMatters: 'Powers automated legal contract analysis, medical diagnostic expert systems, database query optimizers (SQL), and formal software verification.',
          coreConcept: [
            {
              heading: 'Propositional Logic vs First-Order Logic',
              paragraphs: [
                '• Propositional Logic: Connectives ∧ (AND), ∨ (OR), ¬ (NOT), ⇒ (Implication), ⇔ (Biconditional). Cannot express "All humans are mortal".',
                '• First-Order Logic (FOL): Expresses general rules using Universal Quantifier ∀x (for all x) and Existential Quantifier ∃x (there exists x).',
                'Example: "All engineering students study AI" ==> ∀x (EngStudent(x) ⇒ Studies(x, AI)).'
              ]
            },
            {
              heading: 'Resolution Refutation Procedure (Proof by Contradiction)',
              paragraphs: [
                'To prove Knowledge Base KB ⊨ α:',
                'Step 1: Negate the goal (add ¬α to KB).',
                'Step 2: Convert all sentences to Conjunctive Normal Form (CNF - product of sums of literals).',
                'Step 3: Repeatedly apply Resolution Rule: (l_1 ∨ ... ∨ l_k ∨ P) with (m_1 ∨ ... ∨ m_n ∨ ¬P) produces (l_1 ∨ ... ∨ l_k ∨ m_1 ∨ ... ∨ m_n).',
                'Step 4: If empty clause □ (contradiction) is derived, then α is PROVED true!'
              ]
            },
            {
              heading: 'Forward vs Backward Chaining (Horn Clauses)',
              paragraphs: [
                '• Forward Chaining (Data-driven): Starts from known facts, fires rules whose premises are satisfied, adds conclusions to KB until goal is reached.',
                '• Backward Chaining (Goal-driven): Starts from goal, finds rules that conclude the goal, recursively checks if premises can be proved from known facts (used by PROLOG).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Resolution Rule',
              latex: '\\frac{A \\lor B, \\quad \\neg B \\lor C}{A \\lor C}',
              explanation: 'Cancels out complementary literals B and ¬B to infer resolvent.'
            },
            {
              title: 'Quantifier Duality (De Morgan’s for FOL)',
              latex: '\\neg \\forall x \\, P(x) \\equiv \\exists x \\, \\neg P(x), \\quad \\neg \\exists x \\, P(x) \\equiv \\forall x \\, \\neg P(x)',
              explanation: 'Duality between universal and existential quantifiers.'
            }
          ],
          example: {
            problem: 'Prove Q using Resolution given KB: (1) P ⇒ Q, (2) P.',
            solutionSteps: [
              'Step 1: Negate goal: add ¬Q to KB.',
              'Step 2: Convert KB to CNF: (1) P ⇒ Q becomes ¬P ∨ Q; (2) P; (3) ¬Q.',
              'Step 3: Resolve (1) ¬P ∨ Q with (3) ¬Q ==> yields resolvent ¬P.',
              'Step 4: Resolve ¬P with (2) P ==> yields Empty Clause □ (Contradiction).',
              'Step 5: Contradiction proves that Q must be true!'
            ],
            finalAnswer: 'Q is proved by Resolution Refutation.'
          },
          engineeringApplication: {
            title: 'Aerospace Flight-Control Software Formal Verification',
            description: 'Automated theorem provers use First-Order Logic resolution to mathematically prove that fly-by-wire software never enters an illegal actuator lockup state under any combination of flight sensor readings.',
            impact: 'Prevents software crashes in commercial passenger aircraft (Boeing/Airbus).'
          },
          commonMistakes: [
            {
              mistake: 'Using implication ⇒ with existential quantifier ∃.',
              correction: 'Existential quantifier ∃x almost always pairs with AND (∧): ∃x (Student(x) ∧ Smart(x)). Universal ∀x pairs with ⇒: ∀x (Student(x) ⇒ Smart(x)).',
              why: '∃x (Student(x) ⇒ Smart(x)) is trivially true if there exists anything in the universe that is NOT a student (e.g. a rock).'
            }
          ],
          quickRevision: [
            'Propositional: boolean facts; FOL: objects, predicates, quantifiers.',
            'Resolution refutation: add ¬Goal, find empty clause □.',
            'Forward chaining: data -> goal (data driven).',
            'Backward chaining: goal -> premises (goal driven, Prolog).',
            'CNF: conjunction of disjunctions (AND of ORs).'
          ],
          examFocus: {
            questionTypes: ['Convert English statements to First-Order Predicate Logic (5-7 Marks)', 'Prove a theorem using Resolution Refutation in Propositional/FOL (8 Marks)', 'Compare Forward Chaining and Backward Chaining with example (6-7 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Resolution Soundness and Completeness Theorem (Robinson, 1965)'],
            tip: 'When converting to CNF, follow the 8 standard steps: Eliminate ⇔, Eliminate ⇒, Move ¬ inward, Standardize variables, Skolemize, Drop ∀, Distribute ∨ over ∧.'
          },
          visualType: 'resolution-tree',
          visualCaption: 'Resolution Refutation Tree & Empty Clause Contradiction',
          visualExplanation: 'Binary resolution tree showing clauses pairing up, canceling complementary literals, and converging on the empty clause contradiction box □.',
          estimatedMinutes: 30
        },
        {
          id: 'ai-u3-t2',
          topicNumber: '3.2',
          title: 'Structured Knowledge: Semantic Networks, Frames & Production Systems',
          syllabusText: 'Structured knowledge representation: semantic networks, frames; Rule-based (production) systems.',
          unitId: 'ai-u3',
          subjectId: 'ai-1',
          subjectCode: '100105',
          quickDefinition: 'Structured Knowledge representations organize concepts hierarchically. Semantic Networks use directed graphs with IS-A and HAS-A edges supporting property inheritance. Frames represent concepts as slot-and-filler structures with default values. Production Systems execute IF-THEN rules via an inference engine.',
          whyItMatters: 'Powers Google Knowledge Graph, biomedical ontologies (SNOMED-CT), and rule-based business logic engines.',
          coreConcept: [
            {
              heading: 'Semantic Networks',
              paragraphs: [
                'Knowledge represented as a directed graph: Nodes represent objects, concepts, or situations; Edges represent semantic relationships.',
                'Key Relationships: IS-A (class-subclass taxonomy e.g. "Robin IS-A Bird"), HAS-A (part-whole composition e.g. "Bird HAS-A Wings"), INSTANCE-OF.',
                'Property Inheritance: Subclasses automatically inherit attributes of superclasses (e.g. Robin inherits CanFly from Bird), reducing memory redundancy.'
              ]
            },
            {
              heading: 'Frames (Slot and Filler Representation)',
              paragraphs: [
                'Proposed by Marvin Minsky. A Frame is a record-like data structure describing a stereotypical concept.',
                'Slots represent attributes; Fillers represent values (or pointers to other frames).',
                'Features: Default values, procedural attachments (demons: IF-NEEDED, IF-ADDED, IF-REMOVED triggered during attribute access).'
              ]
            },
            {
              heading: 'Rule-Based (Production) Systems',
              paragraphs: [
                'Consists of 3 core components:',
                '1. Working Memory (Global Database): Current state facts.',
                '2. Production Rules (Knowledge Base): Set of IF (condition/antecedent) THEN (action/consequent) rules.',
                '3. Inference Engine / Match-Resolve-Act Cycle: Matches rules against working memory, resolves conflicts among multiple triggered rules (Conflict Resolution via Priority, Recency, Specificity), and executes action.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Production Rule Architecture',
              latex: '\\text{RULE}_k: \\quad \\text{IF } (C_1 \\land C_2 \\land \\dots \\land C_m) \\implies \\text{THEN } \\text{Action}(A_1, A_2, \\dots)',
              explanation: 'Condition-Action pair executed in working memory.'
            }
          ],
          example: {
            problem: 'Construct a Frame representation for a "B.Tech Student".',
            solutionSteps: [
              'Frame Name: BTech_Student',
              '  • Superclass (IS-A): University_Student',
              '  • Degree: B.Tech (Default)',
              '  • Duration: 4 Years',
              '  • Semester: Range [1..8]',
              '  • Branch: String (e.g. CSE)',
              '  • Passed_12th: Boolean (Default: True)',
              '  • IF-NEEDED Demon: Calculate_GPA() procedure.'
            ],
            finalAnswer: 'Frame constructed with slots, inheritance links, defaults, and demons.'
          },
          engineeringApplication: {
            title: 'Google Knowledge Graph & Siri Semantic Search',
            description: 'Search engines use massive semantic networks (billions of entity nodes and hundreds of billions of relation edges) to understand that "Eiffel Tower" is located in "Paris" and designed by "Gustave Eiffel", answering questions directly in search summary cards.',
            impact: 'Powers natural language voice assistants and semantic search.'
          },
          commonMistakes: [
            {
              mistake: 'Failing to handle exceptions in semantic network inheritance (e.g. Penguins cannot fly).',
              correction: 'Exceptions must explicitly override inherited values at the local subclass node (e.g. Penguin node has CanFly: False).',
              why: 'Local node properties take precedence over distant inherited ancestor properties.'
            }
          ],
          quickRevision: [
            'Semantic net: directed graph with IS-A and HAS-A edges.',
            'Frames: slot and filler structures with default values and demons.',
            'Production system: Working memory + Rules + Inference engine (Match-Resolve-Act cycle).',
            'Conflict resolution strategies: Rule priority, specificity, recency.'
          ],
          examFocus: {
            questionTypes: ['Explain Semantic Networks with inheritance example (6-7 Marks)', 'Describe Frame representation with slots, fillers, and procedural attachments (7 Marks)', 'Explain architecture and working of Rule-based Production System (7-8 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['Minsky’s Frame Theory'],
            tip: 'Draw a clear directed network graph showing 3 hierarchical levels (Animal -> Bird -> Robin) with labeled IS-A arrows.'
          },
          visualType: 'semantic-network',
          visualCaption: 'Semantic Network Graph: Concept Nodes, Relation Edges & Inheritance',
          visualExplanation: 'Graph diagram showing hierarchical entity nodes connected by IS-A, HAS-A, and INSTANCE-OF arrows with inherited properties.',
          estimatedMinutes: 25
        }
      ]
    },
    {
      id: 'ai-u4',
      unitNumber: 4,
      title: 'Reasoning Under Uncertainty',
      hours: 7,
      mappedCOs: ['CO4'],
      learningObjectives: [
        'Identify sources of uncertainty and review conditional probability.',
        'Apply Bayes’ Theorem to probabilistic reasoning and medical diagnostics.',
        'Construct Bayesian Networks and calculate joint probability distributions.',
        'Understand Fuzzy Logic principles, membership functions, and fuzzy set operations.'
      ],
      topics: [
        {
          id: 'ai-u4-t1',
          topicNumber: '4.1',
          title: 'Probabilistic Reasoning, Bayes’ Theorem & Bayesian Networks',
          syllabusText: 'Sources of uncertainty; review of basic probability theory; Bayes\' theorem and its application to AI reasoning; Bayesian networks: representation and manual inference (overview); Certainty factors and rule-based uncertainty (overview).',
          unitId: 'ai-u4',
          subjectId: 'ai-1',
          subjectCode: '100105',
          quickDefinition: 'Uncertainty arises from incomplete or noisy observations. Bayes’ Theorem computes posterior probability P(Hypothesis | Evidence) from prior knowledge P(H) and likelihood P(E | H). Bayesian Networks represent conditional dependencies as Directed Acyclic Graphs (DAG) with Conditional Probability Tables (CPT).',
          whyItMatters: 'Used in email spam filters (Naive Bayes), robotics Kalman filters, medical disease probability estimation, and autonomous vehicle tracking.',
          coreConcept: [
            {
              heading: 'Bayes’ Rule in AI Reasoning',
              paragraphs: [
                'P(H | E) = [P(E | H) * P(H)] / P(E) = [P(E | H) * P(H)] / [P(E | H) P(H) + P(E | ¬H) P(¬H)].',
                '• P(H): Prior probability of hypothesis before seeing evidence.',
                '• P(E | H): Likelihood of observing evidence E given hypothesis H.',
                '• P(H | E): Posterior probability updated after observing evidence.'
              ]
            },
            {
              heading: 'Bayesian Belief Networks (BBN)',
              paragraphs: [
                'A Bayesian Network is a Directed Acyclic Graph (DAG) where nodes represent random variables and directed edges represent direct probabilistic dependencies.',
                'Each node X_i has a Conditional Probability Table (CPT) specifying P(X_i | Parents(X_i)).',
                'Full Joint Distribution Chain Rule: P(X_1, X_2, ..., X_n) = ∏_{i=1}^n P(X_i | Parents(X_i)).',
                'Provides exponential space savings: compact representation requires only O(n * 2^k) parameters instead of O(2^n) for full table.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Bayes’ Theorem',
              latex: 'P(H \\mid E) = \\frac{P(E \\mid H) \\cdot P(H)}{P(E)} = \\frac{P(E \\mid H) P(H)}{\\sum_{i} P(E \\mid H_i) P(H_i)}',
              explanation: 'Fundamental formula updating belief in hypothesis given new evidence.'
            },
            {
              title: 'Bayesian Network Joint Probability',
              latex: 'P(x_1, x_2, \\dots, x_n) = \\prod_{i=1}^n P(x_i \\mid \\text{Parents}(X_i))',
              explanation: 'Factorization of joint probability across network topology.'
            }
          ],
          example: {
            problem: 'A rare disease affects 1% of a population (P(D)=0.01). A medical test has 95% sensitivity (P(+|D)=0.95) and 5% false positive rate (P(+|¬D)=0.05). If a patient tests positive, what is the probability that they actually have the disease?',
            solutionSteps: [
              'Step 1: Given P(D) = 0.01 ==> P(¬D) = 0.99; P(+|D) = 0.95; P(+|¬D) = 0.05.',
              'Step 2: Total probability of positive test: P(+) = P(+|D) P(D) + P(+|¬D) P(¬D).',
              '  P(+) = (0.95 * 0.01) + (0.05 * 0.99) = 0.0095 + 0.0495 = 0.0590.',
              'Step 3: Apply Bayes’ Rule: P(D | +) = [P(+|D) * P(D)] / P(+).',
              '  P(D | +) = 0.0095 / 0.0590 ≈ 0.161 (16.1%).'
            ],
            finalAnswer: 'Probability is 16.1% (even with 95% test accuracy, rare base rate keeps posterior low).'
          },
          engineeringApplication: {
            title: 'Spam Detection in Email Servers (Naive Bayes Classifier)',
            description: 'Email filters compute P(Spam | Words) using product of likelihoods P(word_i | Spam) for tokenized words ("lottery", "urgent", "wire"), filtering billions of spam emails daily.',
            impact: 'Blocks 99.9% of phishing attacks and malicious attachments.'
          },
          commonMistakes: [
            {
              mistake: 'Confusing P(A|B) with P(B|A) (The Base Rate Fallacy).',
              correction: 'P(Disease | Positive Test) is NOT equal to P(Positive Test | Disease).',
              why: 'Base rate P(Disease) strongly dominates rare events.'
            }
          ],
          quickRevision: [
            'Bayes rule: P(H|E) = P(E|H)P(H) / P(E).',
            'Bayesian net: DAG + CPTs at each node.',
            'Joint probability: P(x_1..x_n) = ∏ P(x_i | parents(x_i)).',
            'Certainty factors: measure change in belief (MB - MD).'
          ],
          examFocus: {
            questionTypes: ['State Bayes’ Theorem and solve medical diagnosis numerical (7-8 Marks)', 'Explain Bayesian Networks with Alarm-Burglary-Earthquake example (8 Marks)', 'Compute joint probability from a given Bayesian Network DAG (5-7 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Bayes’ Rule', 'Conditional Independence in Bayesian Networks'],
            tip: 'The classic Burglary-Earthquake-Alarm-JohnCalls-MaryCalls network is the benchmark example for BEU exams.'
          },
          visualType: 'bayesian-network',
          visualCaption: 'Bayesian Belief Network DAG & Conditional Probability Tables',
          visualExplanation: 'Graph showing causal parent-child nodes (Burglary & Earthquake -> Alarm -> JohnCalls & MaryCalls) and associated probability tables.',
          estimatedMinutes: 25
        },
        {
          id: 'ai-u4-t2',
          topicNumber: '4.2',
          title: 'Fuzzy Logic & Fuzzy Sets',
          syllabusText: 'Introduction to fuzzy logic and fuzzy sets; Fuzzy membership functions, fuzzy set operations (union, intersection, complement).',
          unitId: 'ai-u4',
          subjectId: 'ai-1',
          subjectCode: '100105',
          quickDefinition: 'Classical crisp logic allows only binary truth values {0, 1}. Fuzzy Logic (invented by Lotfi Zadeh) introduces continuous degrees of truth in the interval [0, 1] through Membership Functions μ_A(x), capturing linguistic vagueness like "Warm", "High Speed", and "Slightly Heavy".',
          whyItMatters: 'Used in automatic washing machines, ABS braking systems, air conditioner temperature inverters, and elevator group controllers.',
          coreConcept: [
            {
              heading: 'Crisp Sets vs Fuzzy Sets',
              paragraphs: [
                '• Crisp Set: Element x either belongs (μ = 1) or does not belong (μ = 0). Characteristic function χ_A(x) ∈ {0, 1}.',
                '• Fuzzy Set: A fuzzy set A in universe X is characterized by a continuous membership function μ_A(x) ∈ [0, 1].',
                'Common membership function shapes: Triangular, Trapezoidal, Gaussian, Sigmoidal.'
              ]
            },
            {
              heading: 'Standard Fuzzy Set Operations (Zadeh’s Operators)',
              paragraphs: [
                '1. Fuzzy Union (OR): μ_{A ∪ B}(x) = max(μ_A(x), μ_B(x)).',
                '2. Fuzzy Intersection (AND): μ_{A ∩ B}(x) = min(μ_A(x), μ_B(x)).',
                '3. Fuzzy Complement (NOT): μ_{A’}(x) = 1 - μ_A(x).',
                'Note: In fuzzy logic, Law of Excluded Middle does NOT strictly hold: A ∪ A’ ≠ X and A ∩ A’ ≠ ∅.'
              ]
            },
            {
              heading: 'Fuzzy Inference System (FIS) Architecture',
              paragraphs: [
                '1. Fuzzification: Converts crisp input numbers into fuzzy membership values.',
                '2. Rule Base: IF-THEN linguistic rules (e.g. IF Temperature is HIGH and Humidity is HIGH THEN Fan_Speed is FAST).',
                '3. Inference Engine: Evaluates rules using Mamdani or Sugeno fuzzy implication methods.',
                '4. Defuzzification: Converts fuzzy output set back into a crisp actionable number using Centroid method (Center of Gravity).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Zadeh’s Fuzzy Operations',
              latex: '\\mu_{A \\cup B}(x) = \\max(\\mu_A(x), \\mu_B(x)), \\quad \\mu_{A \\cap B}(x) = \\min(\\mu_A(x), \\mu_B(x)), \\quad \\mu_{\\bar{A}}(x) = 1 - \\mu_A(x)',
              explanation: 'Standard fuzzy max, min, and complement operators.'
            },
            {
              title: 'Centroid Defuzzification (Center of Gravity)',
              latex: 'z^* = \\frac{\\int z \\, \\mu_C(z) \\, dz}{\\int \\mu_C(z) \\, dz} \\approx \\frac{\\sum z_i \\mu_C(z_i)}{\\sum \\mu_C(z_i)}',
              explanation: 'Converts aggregate fuzzy region into single crisp control output.'
            }
          ],
          example: {
            problem: 'Let two fuzzy sets on temperature universe X be Hot = { (25, 0.2), (30, 0.6), (35, 0.9) } and Humid = { (25, 0.5), (30, 0.4), (35, 0.8) }. Find (i) Hot ∪ Humid, (ii) Hot ∩ Humid, and (iii) Complement of Hot.',
            solutionSteps: [
              'Step 1: Fuzzy Union (Max):',
              '  x = 25: max(0.2, 0.5) = 0.5',
              '  x = 30: max(0.6, 0.4) = 0.6',
              '  x = 35: max(0.9, 0.8) = 0.9',
              '  Hot ∪ Humid = { (25, 0.5), (30, 0.6), (35, 0.9) }.',
              'Step 2: Fuzzy Intersection (Min):',
              '  x = 25: min(0.2, 0.5) = 0.2',
              '  x = 30: min(0.6, 0.4) = 0.4',
              '  x = 35: min(0.9, 0.8) = 0.8',
              '  Hot ∩ Humid = { (25, 0.2), (30, 0.4), (35, 0.8) }.',
              'Step 3: Complement of Hot (1 - μ):',
              '  Hot’ = { (25, 0.8), (30, 0.4), (35, 0.1) }.'
            ],
            finalAnswer: 'All three standard fuzzy operations evaluated successfully.'
          },
          engineeringApplication: {
            title: 'Automatic Washing Machine Load & Water Control',
            description: 'Fuzzy logic microcontrollers estimate clothing dirtiness (optical sensor opacity) and load weight to smoothly adjust wash time and water temperature using fuzzy rules rather than rigid discrete timer steps.',
            impact: 'Reduces water consumption by 25% and electricity usage by 20%.'
          },
          commonMistakes: [
            {
              mistake: 'Assuming fuzzy logic represents probability.',
              correction: 'Fuzzy logic represents DEGREE OF TRUTH (vagueness), whereas probability represents LIKELIHOOD OF OCCURRENCE of a crisp event.',
              why: 'A glass that is 0.5 full is fuzzy; a coin with 0.5 chance of landing heads is probabilistic.'
            }
          ],
          quickRevision: [
            'Crisp set: μ ∈ {0, 1}; Fuzzy set: μ ∈ [0, 1].',
            'Union = MAX; Intersection = MIN; Complement = 1 - μ.',
            'Fuzzy controller: Fuzzifier -> Rule Base / Engine -> Defuzzifier.',
            'Centroid method: Center of Gravity of output area.'
          ],
          examFocus: {
            questionTypes: ['Differentiate between Crisp Sets and Fuzzy Sets with membership curves (5-6 Marks)', 'Explain Fuzzy Set operations (Union, Intersection, Complement) with numericals (7 Marks)', 'Explain Fuzzy Inference System (Mamdani Model) with block diagram (8 Marks)'],
            likelyMarks: '7 to 8 Marks',
            keyTheorems: ['Zadeh’s Fuzzy Set Theory'],
            tip: 'Draw triangular and trapezoidal membership function graphs showing overlapping linguistic labels (Low, Medium, High).'
          },
          visualType: 'fuzzy-logic',
          visualCaption: 'Fuzzy Membership Curves (Triangular/Trapezoidal) & Defuzzification',
          visualExplanation: 'Diagram illustrating continuous overlapping membership curves μ(x) for Low, Medium, and High temperature with Center of Gravity defuzzification line.',
          estimatedMinutes: 25
        }
      ]
    },
    {
      id: 'ai-u5',
      unitNumber: 5,
      title: 'Machine Learning & AI Applications',
      hours: 10,
      mappedCOs: ['CO5', 'CO6'],
      learningObjectives: [
        'Differentiate Supervised, Unsupervised, and Reinforcement Learning paradigms.',
        'Understand Regression, Classification (k-NN, Decision Trees), and Clustering (k-Means).',
        'Explain Artificial Neural Networks, Perceptron architecture, and activation functions.',
        'Overview NLP, Computer Vision, Expert Systems, Robotics, Ethics, and Sustainable Development Goals.'
      ],
      topics: [
        {
          id: 'ai-u5-t1',
          topicNumber: '5.1',
          title: 'Machine Learning Paradigms, Supervised, Unsupervised & RL',
          syllabusText: 'Machine learning paradigms: supervised, unsupervised, reinforcement learning (concept); Overview of regression and classification concepts (linear regression, k-NN, decision trees); Overview of clustering concept (k-means).',
          unitId: 'ai-u5',
          subjectId: 'ai-1',
          subjectCode: '100105',
          quickDefinition: 'Machine Learning enables systems to learn patterns from data without explicit rules: Supervised Learning maps inputs to labeled outputs (Regression & Classification), Unsupervised Learning discovers hidden groupings in unlabeled data (k-Means Clustering), and Reinforcement Learning learns optimal action policies through reward-penalty feedback.',
          whyItMatters: 'Powers modern AI applications from ChatGPT, Netflix recommendation feeds, credit card fraud detection, to Boston Dynamics robots.',
          coreConcept: [
            {
              heading: 'The Three Main ML Paradigms',
              paragraphs: [
                '1. Supervised Learning: Trained on labeled dataset {(x_1, y_1), ..., (x_n, y_n)}. Task is either Regression (predict continuous value e.g. house price) or Classification (predict discrete category e.g. spam/ham). Algorithms: Linear Regression, Logistic Regression, k-Nearest Neighbors (k-NN), Decision Trees, Support Vector Machines (SVM).',
                '2. Unsupervised Learning: Trained on unlabeled data {x_1, ..., x_n}. Discovers hidden intrinsic patterns, clusters, or latent dimensions. Algorithms: k-Means Clustering, Hierarchical Clustering, Principal Component Analysis (PCA).',
                '3. Reinforcement Learning (RL): Agent learns by trial and error in an environment, receiving reward r_t or penalty to maximize cumulative expected return. Framework: Markov Decision Process (MDP), Q-Learning, Policy Gradients.'
              ]
            },
            {
              heading: 'Key Algorithms Overview',
              paragraphs: [
                '• k-NN (k-Nearest Neighbors): Lazy instance-based classifier. Assigns majority label among the k closest training points measured via Euclidean distance d = sqrt[Σ (x_i - y_i)^2].',
                '• Decision Trees: Recursive splitting based on Information Gain / Entropy H(S) = -Σ p_i log_2(p_i) or Gini Impurity.',
                '• k-Means Clustering: Iteratively assigns points to nearest centroid μ_k and recalculates centroids until cluster assignments stabilize.'
              ]
            }
          ],
          formulas: [
            {
              title: 'Linear Regression Hypothesis & Mean Squared Error',
              latex: 'h_\\theta(x) = \\theta_0 + \\theta_1 x_1 + \\dots + \\theta_d x_d, \\quad J(\\theta) = \\frac{1}{2m} \\sum_{i=1}^m (h_\\theta(x^{(i)}) - y^{(i)})^2',
              explanation: 'Linear model prediction and cost function minimized via gradient descent.'
            },
            {
              title: 'Shannon Entropy for Decision Tree Splits',
              latex: 'H(S) = -\\sum_{i=1}^c p_i \\log_2(p_i), \\quad \\text{Gain}(S, A) = H(S) - \\sum_{v \\in \\text{Values}(A)} \\frac{|S_v|}{|S|} H(S_v)',
              explanation: 'Measures impurity reduction to select optimal decision tree test attributes.'
            },
            {
              title: 'k-Means Centroid Update',
              latex: '\\mu_k = \\frac{1}{|C_k|} \\sum_{x_i \\in C_k} x_i',
              explanation: 'Calculates mean position of all data points belonging to cluster k.'
            }
          ],
          example: {
            problem: 'A 2-class dataset has 4 Positive examples and 4 Negative examples. Calculate the initial Entropy H(S). If an attribute splits it into pure subsets (4 Pos in branch 1, 4 Neg in branch 2), calculate the Information Gain.',
            solutionSteps: [
              'Step 1: Total instances = 8; p_+ = 4/8 = 0.5, p_- = 4/8 = 0.5.',
              'Step 2: Initial Entropy H(S) = -[0.5 * log_2(0.5) + 0.5 * log_2(0.5)] = -[0.5(-1) + 0.5(-1)] = 1.0 bit (maximum impurity).',
              'Step 3: After split into pure subsets: H(S_1) = 0 and H(S_2) = 0.',
              'Step 4: Information Gain = H(S) - [(4/8)*0 + (4/8)*0] = 1.0 - 0 = 1.0 bit.'
            ],
            finalAnswer: 'Initial Entropy = 1.0; Information Gain = 1.0 bit.'
          },
          engineeringApplication: {
            title: 'Predictive Maintenance of Industrial Wind Turbines',
            description: 'Vibration and acoustic sensor data from wind turbine gearboxes are classified using Random Forest and k-NN algorithms to detect bearing micro-fractures 3 weeks before physical failure.',
            impact: 'Prevents catastrophic gearbox fires and eliminates expensive offshore downtime.'
          },
          commonMistakes: [
            {
              mistake: 'Choosing an even number for k in binary k-NN classification.',
              correction: 'Always choose an ODD number for k (e.g. k = 3, 5, 7) in binary classification.',
              why: 'Odd k eliminates the possibility of 50-50 voting ties.'
            }
          ],
          quickRevision: [
            'Supervised: labeled data (Regression, Classification).',
            'Unsupervised: unlabeled data (k-means clustering, PCA).',
            'Reinforcement Learning: rewards/penalties, policy optimization.',
            'k-NN: instance based, Euclidean distance.',
            'Entropy H(S) = -Σ p_i log_2 p_i; k-means updates centroid means.'
          ],
          examFocus: {
            questionTypes: ['Compare Supervised, Unsupervised, and Reinforcement Learning with examples (7-8 Marks)', 'Explain k-Means clustering algorithm step-by-step with flowchart (7-8 Marks)', 'Explain Decision Tree construction and compute Entropy / Information Gain (8 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Information Gain Maximization Theorem'],
            tip: 'Draw the 3-column paradigm comparison table (Dataset, Goal, Feedback, Algorithms, Example).'
          },
          visualType: 'ml-paradigms',
          visualCaption: 'ML Paradigms: Supervised (Labels), Unsupervised (Clusters) & RL (Rewards)',
          visualExplanation: 'Visual diagram contrasting labeled classification boundaries, unlabeled centroid clustering, and agent reward feedback cycles.',
          estimatedMinutes: 30
        },
        {
          id: 'ai-u5-t2',
          topicNumber: '5.2',
          title: 'Neural Networks, Perceptrons, NLP, Computer Vision & Ethics in AI',
          syllabusText: 'Introduction to artificial neural networks: perceptron, basic architecture (concept); Overview of Natural Language Processing (NLP): concept and applications; Overview of Computer Vision: concept and applications; Expert systems: architecture and applications; Robotics and AI: overview of intelligent robotic systems; Ethics, bias, and responsible AI; societal impact; AI and Sustainable Development Goals (SDGs).',
          unitId: 'ai-u5',
          subjectId: 'ai-1',
          subjectCode: '100105',
          quickDefinition: 'An Artificial Neural Network (ANN) consists of interconnected layers of artificial neurons modeled after biological brains. The single-layer Perceptron computes y = f(w^T x + b). Multi-layer networks with non-linear activations (ReLU, Sigmoid) enable deep learning breakthroughs across NLP (Transformers, LLMs) and Computer Vision (CNNs).',
          whyItMatters: 'Powers modern generative AI (ChatGPT, Gemini), self-driving vision perception, automated disease detection from medical X-rays, and robotic surgery.',
          coreConcept: [
            {
              heading: 'The Rosenblatt Perceptron Model',
              paragraphs: [
                'Inputs x_1, x_2, ..., x_n with associated synaptic weights w_1, w_2, ..., w_n and bias b.',
                'Net Input: z = Σ (w_i * x_i) + b = w^T x + b.',
                'Activation Function f(z): Maps net input to output y.',
                '• Step function: y = 1 if z >= 0, else 0.',
                '• Sigmoid: σ(z) = 1 / (1 + e^(-z)) (outputs smooth probabilities [0, 1]).',
                '• ReLU (Rectified Linear Unit): f(z) = max(0, z) (standard in deep learning).',
                'Limitation: A single-layer perceptron can ONLY learn Linearly Separable functions (AND, OR) and CANNOT learn the non-linear XOR function (Minsky & Papert, 1969), requiring Multi-Layer Perceptrons (MLP) trained via Backpropagation.'
              ]
            },
            {
              heading: 'AI Applications: NLP, Computer Vision & Expert Systems',
              paragraphs: [
                '• Natural Language Processing (NLP): Tokenization, POS tagging, Named Entity Recognition (NER), Sentiment Analysis, Machine Translation, and Large Language Models (LLMs) using Transformer self-attention mechanisms.',
                '• Computer Vision: Image classification, object detection (YOLO), semantic segmentation, and facial recognition using Convolutional Neural Networks (CNNs).',
                '• Expert Systems: Knowledge base + Inference engine solving specialized tasks (e.g. MYCIN for bacterial infection diagnosis, DENDRAL for chemical spectroscopy).'
              ]
            },
            {
              heading: 'Ethics, Bias & Sustainable Development Goals (SDGs)',
              paragraphs: [
                '• Algorithmic Bias & Fairness: Training data reflecting historical human biases causes discriminatory predictions in hiring, loan approvals, and facial recognition.',
                '• Explainability (XAI): Deep black-box models require transparent decision rationale in healthcare and criminal justice.',
                '• AI and SDGs: Accelerates climate change modeling (SDG 13), precision agriculture food security (SDG 2), and clean energy grid optimization (SDG 7).'
              ]
            }
          ],
          formulas: [
            {
              title: 'Perceptron Output Equation',
              latex: 'y = f\\left( \\sum_{i=1}^n w_i x_i + b \\right) = f(\\mathbf{w}^T \\mathbf{x} + b)',
              explanation: 'Linear combination of inputs passed through non-linear activation function f.'
            },
            {
              title: 'Sigmoid Activation Function',
              latex: '\\sigma(z) = \\frac{1}{1 + e^{-z}}, \\quad \\frac{d\\sigma}{dz} = \\sigma(z)(1 - \\sigma(z))',
              explanation: 'Differentiable S-shaped probability mapping.'
            },
            {
              title: 'Perceptron Learning Weight Update Rule',
              latex: 'w_i \\leftarrow w_i + \\eta (y - \\hat{y}) x_i',
              explanation: 'Updates weight by error scaled by learning rate η.'
            }
          ],
          example: {
            problem: 'A single perceptron has weights w_1 = 0.5, w_2 = -0.6, and bias b = 0.1 with step activation function (f(z)=1 if z>=0 else 0). For input vector x = [2, 1], compute the net input z and output y.',
            solutionSteps: [
              'Step 1: Compute net input z = w_1 x_1 + w_2 x_2 + b.',
              'Step 2: z = (0.5 * 2) + (-0.6 * 1) + 0.1 = 1.0 - 0.6 + 0.1 = 0.5.',
              'Step 3: Since z = 0.5 >= 0, step activation function outputs 1.',
              'Step 4: Output y = 1.'
            ],
            finalAnswer: 'Net input z = 0.5; Output y = 1.'
          },
          engineeringApplication: {
            title: 'Autonomous Tesla Autopilot Real-Time Vision Perception',
            description: 'Tesla Full Self-Driving (FSD) processes 36 fps video feeds from 8 cameras using deep Convolutional Neural Networks, detecting pedestrians, traffic cones, and drivable space in < 15 milliseconds.',
            impact: 'Enables 360-degree real-time vehicular obstacle avoidance.'
          },
          commonMistakes: [
            {
              mistake: 'Claiming a single-layer perceptron can solve the XOR problem.',
              correction: 'A single perceptron CANNOT solve XOR because XOR is non-linearly separable (requires at least 1 hidden layer).',
              why: 'A single decision hyperplane cannot separate (0,0) and (1,1) from (0,1) and (1,0).'
            }
          ],
          quickRevision: [
            'Perceptron: y = f(w^T x + b).',
            'XOR requires Multi-Layer Perceptron (MLP) with backpropagation.',
            'Activations: Sigmoid, Tanh, ReLU.',
            'NLP: Tokenization, Sentiment, Transformers, LLMs.',
            'Computer Vision: CNNs, Object detection, Segmentation.',
            'AI Ethics: Fairness, bias mitigation, privacy, transparency (XAI).'
          ],
          examFocus: {
            questionTypes: ['Explain biological neuron vs Artificial Neuron / Perceptron model with mathematical equation (7-8 Marks)', 'Explain why single layer perceptron cannot solve XOR problem (5-6 Marks)', 'Write short notes on: NLP, Computer Vision, AI Ethics and SDGs (7-8 Marks)'],
            likelyMarks: '8 to 10 Marks',
            keyTheorems: ['Perceptron Convergence Theorem', 'Universal Approximation Theorem'],
            tip: 'Draw the 2D Cartesian plane showing why AND/OR can be separated by a single straight line but XOR requires two lines.'
          },
          visualType: 'neural-perceptron',
          visualCaption: 'Artificial Neural Network Architecture & Single Perceptron Model',
          visualExplanation: 'Diagram illustrating weighted input summation Σ w_i x_i + b passed into activation function f(z), alongside a multi-layer deep neural network (Input, Hidden, Output).',
          estimatedMinutes: 30
        }
      ]
    }
  ]
};
