import type { Subject, LabCourse, Topic, FormulaItem, LabExperiment, SearchResult } from '../types';
import { mathematicsSubject } from './syllabus/mathematics';
import { physicsSubject } from './syllabus/physics';
import { electricalSubject } from './syllabus/electrical';
import { aiSubject } from './syllabus/ai';
import { computerFundamentalsSubject } from './syllabus/computerFundamentals';
import { constitutionSubject } from './syllabus/constitution';
import { humanValuesSubject } from './syllabus/humanValues';
import { physicsLabExperiments } from './syllabus/physicsLab';
import { electricalLabExperiments } from './syllabus/electricalLab';
import { ppsLabExperiments } from './syllabus/ppsLab';
import { formulaBank } from './formulas';

// All 7 Theory Courses
export const allSubjects: Subject[] = [
  mathematicsSubject,
  physicsSubject,
  electricalSubject,
  aiSubject,
  computerFundamentalsSubject,
  constitutionSubject,
  humanValuesSubject,
];

// All 3 Practical Lab Courses
export const physicsLabCourse: LabCourse = {
  id: 'physics-lab-1',
  code: '100104P',
  name: 'Engineering Physics Laboratory',
  shortName: 'Physics Lab',
  credits: 1,
  description: 'Optics, Lasers, Quantum mechanics, and solid-state physical experiments verifying wave phenomena and semiconductor characteristics.',
  iconName: 'Atom',
  accentColor: '#3b82f6',
  experiments: physicsLabExperiments,
};

export const electricalLabCourse: LabCourse = {
  id: 'electrical-lab-1',
  code: '100111P',
  name: 'Basic Electrical & Electronics Laboratory',
  shortName: 'BEEE Lab',
  credits: 1,
  description: 'Hands-on wiring, DC/AC circuit verification, Thevenin/Norton theorems, transformer tests, MCB wiring, and CRO waveform measurement.',
  iconName: 'Zap',
  accentColor: '#f59e0b',
  experiments: electricalLabExperiments,
};

export const ppsLabCourse: LabCourse = {
  id: 'pps-lab-1',
  code: '100112P',
  name: 'Programming for Problem Solving (C/C++) Lab',
  shortName: 'PPS Lab',
  credits: 1.5,
  description: 'Complete C and C++ programming practice covering branching, loops, arrays, pointers, structures, file handling, and OOP classes.',
  iconName: 'Code2',
  accentColor: '#10b981',
  experiments: ppsLabExperiments,
};

export const allLabCourses: LabCourse[] = [
  physicsLabCourse,
  electricalLabCourse,
  ppsLabCourse,
];

// All Formulas
export const allFormulas: FormulaItem[] = formulaBank;

// Helper: Get Subject by ID
export function getSubjectById(id: string): Subject | undefined {
  return allSubjects.find((s) => s.id === id || s.code === id);
}

// Helper: Get Unit by Subject ID and Unit ID
export function getUnitById(subjectId: string, unitId: string) {
  const subject = getSubjectById(subjectId);
  if (!subject) return undefined;
  return subject.units.find((u) => u.id === unitId || String(u.unitNumber) === unitId);
}

// Helper: Get Topic by Subject ID and Topic ID
export function getTopicById(subjectId: string, topicId: string): Topic | undefined {
  const subject = getSubjectById(subjectId);
  if (!subject) return undefined;
  for (const unit of subject.units) {
    const topic = unit.topics.find((t) => t.id === topicId);
    if (topic) return topic;
  }
  return undefined;
}

// Helper: Find Topic globally by Topic ID alone
export function findTopicGlobal(topicId: string): { topic: Topic; subject: Subject; unitId: string } | undefined {
  for (const subject of allSubjects) {
    for (const unit of subject.units) {
      const topic = unit.topics.find((t) => t.id === topicId);
      if (topic) return { topic, subject, unitId: unit.id };
    }
  }
  return undefined;
}

// Helper: Get Lab Course by ID
export function getLabCourseById(id: string): LabCourse | undefined {
  return allLabCourses.find((l) => l.id === id || l.code === id);
}

// Helper: Get Lab Experiment by Lab Course ID and Experiment ID
export function getLabExperimentById(labCourseId: string, experimentId: string): LabExperiment | undefined {
  const lab = getLabCourseById(labCourseId);
  if (!lab) return undefined;
  return lab.experiments.find((e) => e.id === experimentId || String(e.experimentNumber) === experimentId);
}

// Helper: Find Lab Experiment globally
export function findLabExperimentGlobal(experimentId: string): { experiment: LabExperiment; labCourse: LabCourse } | undefined {
  for (const labCourse of allLabCourses) {
    const experiment = labCourse.experiments.find((e) => e.id === experimentId);
    if (experiment) return { experiment, labCourse };
  }
  return undefined;
}

// Helper: Get All Topics Flat
export function getAllTopics(): Array<{ topic: Topic; subject: Subject; unitTitle: string; unitNumber: number }> {
  const list: Array<{ topic: Topic; subject: Subject; unitTitle: string; unitNumber: number }> = [];
  for (const subject of allSubjects) {
    for (const unit of subject.units) {
      for (const topic of unit.topics) {
        list.push({
          topic,
          subject,
          unitTitle: unit.title,
          unitNumber: unit.unitNumber,
        });
      }
    }
  }
  return list;
}

// Helper: Get All Lab Experiments Flat
export function getAllLabExperiments(): Array<{ experiment: LabExperiment; labCourse: LabCourse }> {
  const list: Array<{ experiment: LabExperiment; labCourse: LabCourse }> = [];
  for (const labCourse of allLabCourses) {
    for (const experiment of labCourse.experiments) {
      list.push({ experiment, labCourse });
    }
  }
  return list;
}

// Search across entire repository
export function performGlobalSearch(query: string): SearchResult[] {
  if (!query || query.trim().length === 0) return [];
  const q = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  // 1. Search Subjects
  for (const subject of allSubjects) {
    if (
      subject.name.toLowerCase().includes(q) ||
      subject.code.toLowerCase().includes(q) ||
      subject.description.toLowerCase().includes(q)
    ) {
      results.push({
        id: subject.id,
        type: 'subject',
        title: subject.name,
        subtitle: `Course Code: ${subject.code} • ${subject.credits} Credits • ${subject.lectureHours} Hours`,
        highlightText: subject.description,
        url: `/subject/${subject.id}`,
      });
    }

    // 2. Search Units
    for (const unit of subject.units) {
      if (
        unit.title.toLowerCase().includes(q) ||
        `unit ${unit.unitNumber}`.includes(q)
      ) {
        results.push({
          id: `${subject.id}-${unit.id}`,
          type: 'unit',
          title: `Unit ${unit.unitNumber}: ${unit.title}`,
          subtitle: `${subject.name} (${subject.code})`,
          highlightText: unit.learningObjectives?.join(', '),
          url: `/subject/${subject.id}`,
        });
      }

      // 3. Search Topics
      for (const topic of unit.topics) {
        let matched = false;
        let snippet = '';

        if (topic.title.toLowerCase().includes(q) || topic.topicNumber.toLowerCase().includes(q)) {
          matched = true;
          snippet = topic.quickDefinition.slice(0, 160) + '...';
        } else if (topic.quickDefinition.toLowerCase().includes(q)) {
          matched = true;
          snippet = topic.quickDefinition.slice(0, 160) + '...';
        } else if (topic.coreConcept?.some((c) => c.paragraphs.some((p) => p.toLowerCase().includes(q)))) {
          matched = true;
          snippet = topic.quickDefinition.slice(0, 160) + '...';
        } else if (topic.examFocus?.questionTypes?.some((eq) => eq.toLowerCase().includes(q))) {
          matched = true;
          snippet = 'Exam focus: ' + topic.examFocus.questionTypes.find((eq) => eq.toLowerCase().includes(q));
        }

        if (matched) {
          results.push({
            id: topic.id,
            type: 'topic',
            title: `${topic.topicNumber} ${topic.title}`,
            subtitle: `${subject.name} • Unit ${unit.unitNumber}`,
            highlightText: snippet,
            url: `/subject/${subject.id}/topic/${topic.id}`,
          });
        }
      }
    }
  }

  // 4. Search Lab Experiments
  for (const lab of allLabCourses) {
    if (lab.name.toLowerCase().includes(q) || lab.code.toLowerCase().includes(q)) {
      results.push({
        id: lab.id,
        type: 'lab',
        title: lab.name,
        subtitle: `Course Code: ${lab.code} • ${lab.experiments.length} Experiments`,
        highlightText: lab.description,
        url: `/labs`,
      });
    }

    for (const exp of lab.experiments) {
      if (
        exp.title.toLowerCase().includes(q) ||
        exp.objective?.toLowerCase().includes(q) ||
        exp.theory?.toLowerCase().includes(q) ||
        `experiment ${exp.experimentNumber}`.includes(q)
      ) {
        results.push({
          id: exp.id,
          type: 'lab',
          title: `LE-${exp.experimentNumber}: ${exp.title}`,
          subtitle: `${lab.name} (${lab.code})`,
          highlightText: exp.objective,
          url: `/labs/${lab.id}/${exp.id}`,
        });
      }
    }
  }

  // 5. Search Formulas
  for (const formula of allFormulas) {
    if (
      formula.title.toLowerCase().includes(q) ||
      formula.latex.toLowerCase().includes(q) ||
      formula.explanation.toLowerCase().includes(q)
    ) {
      results.push({
        id: formula.id,
        type: 'formula',
        title: formula.title,
        subtitle: `${formula.subjectName} • ${formula.unitTitle}`,
        highlightText: formula.explanation,
        url: `/formulas`,
      });
    }
  }

  return results.slice(0, 30);
}
