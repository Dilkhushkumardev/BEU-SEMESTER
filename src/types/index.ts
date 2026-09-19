export interface CourseOutcome {
  code: string; // e.g. "CO1"
  statement: string;
}

export interface FormulaReference {
  title: string;
  latex: string;
  explanation: string;
  variables?: { symbol: string; meaning: string }[];
}

export interface SolvedExample {
  problem: string;
  solutionSteps: string[];
  finalAnswer: string;
}

export interface EngineeringApplication {
  title: string;
  description: string;
  impact: string;
}

export interface CommonMistake {
  mistake: string;
  correction: string;
  why: string;
}

export interface ExamFocus {
  questionTypes: string[];
  likelyMarks: string;
  keyTheorems: string[];
  tip: string;
}

export interface ConceptSection {
  heading: string;
  paragraphs: string[];
  bulletPoints?: string[];
}

export interface Topic {
  id: string;
  topicNumber: string; // e.g. "1.1"
  title: string;
  syllabusText: string;
  unitId: string;
  subjectId: string;
  subjectCode: string;
  quickDefinition: string;
  whyItMatters: string;
  coreConcept: ConceptSection[];
  formulas: FormulaReference[];
  example: SolvedExample;
  engineeringApplication: EngineeringApplication;
  commonMistakes: CommonMistake[];
  quickRevision: string[];
  examFocus: ExamFocus;
  visualType?: string;
  visualCaption?: string;
  visualExplanation?: string;
  estimatedMinutes: number;
}

export interface Unit {
  id: string;
  unitNumber: number;
  title: string;
  hours: number;
  mappedCOs: string[];
  learningObjectives: string[];
  topics: Topic[];
}

export interface ReferenceBook {
  title: string;
  authors: string;
  publisher: string;
  isbn?: string;
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  shortName: string;
  type: 'theory' | 'lab';
  credits: number;
  lectureHours: number;
  tutorialHours: number;
  practicalHours: number;
  totalHours: number;
  semester: number;
  group: string;
  description: string;
  iconName: string;
  accentColor: string;
  courseOutcomes: CourseOutcome[];
  referenceBooks: ReferenceBook[];
  units: Unit[];
}

export interface VivaQuestion {
  question: string;
  answer: string;
}

export interface LabObservationTable {
  headers: string[];
  sampleRows: (string | number)[][];
}

export interface LabExperiment {
  id: string;
  experimentNumber: number;
  code: string; // e.g. "LE-1"
  title: string;
  subjectId: string;
  subjectCode: string;
  mappedCOs: string[];
  lso: string; // Lab Session Outcome statement
  objective: string;
  apparatus: string[];
  theory: string;
  procedure: string[];
  formulas?: FormulaReference[];
  codeSnippet?: {
    language: string;
    code: string;
    explanation: string;
  };
  observationTable?: LabObservationTable;
  result: string;
  precautions: string[];
  vivaQuestions: VivaQuestion[];
}

export interface LabCourse {
  id: string;
  code: string;
  name: string;
  shortName: string;
  credits: number;
  description: string;
  iconName: string;
  accentColor: string;
  experiments: LabExperiment[];
}

export interface FormulaItem {
  id: string;
  title: string;
  subjectId: string;
  subjectName: string;
  unitNumber: number;
  unitTitle: string;
  latex: string;
  explanation: string;
  variables?: { symbol: string; meaning: string }[];
  category: 'Mathematics' | 'Physics' | 'Electrical' | 'Computer Science';
  tags: string[];
}

export interface SearchResult {
  id: string;
  title: string;
  type: 'subject' | 'unit' | 'topic' | 'formula' | 'lab';
  subtitle: string;
  url: string;
  badge?: string;
  highlightText?: string;
}

export type TopicStatus = 'not_started' | 'in_progress' | 'completed';
