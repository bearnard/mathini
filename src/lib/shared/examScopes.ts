// The exam scopes the progress page knows about (ADR 0005 section 3, part 4 of the build plan: the Grade 6 Natural Sciences Terms 3 and 4 scope first).
// DATA only. Teacher-set scopes (ADR 0003 Phase 3) will come from the database later and use the same shape.
// The task list must equal EXAM_GROUPS in curriculum/grade6/natural-sciences/exam/Terms34ExamPractice.tsx (a test checks it).

export interface ExamScope {
  scopeKey: string;
  grade: number;
  /** attempts.subject code of the topics. */
  subject: string;
  label: string;
  /** The task slugs the exam covers. */
  tasks: readonly string[];
  /** Runs (mock tests and exam practice) whose latest score counts as "the latest mock". */
  mockScopeKeys: readonly string[];
}

export const EXAM_SCOPES: readonly ExamScope[] = [
  {
    scopeKey: 'nst-terms34-exam',
    grade: 6,
    subject: 'nst',
    label: 'Grade 6 Natural Sciences, Terms 3 and 4 exam',
    tasks: [
      'electric-circuits',
      'conductors-insulators',
      'circuit-diagrams',
      'mains-electricity',
      'systems-solve-problems',
      'solar-system',
      'earth-moon-movement',
      'day-night-seasons',
      'space-exploration',
    ],
    mockScopeKeys: ['nst-terms34-exam', 'nst-term3-mock', 'nst-term4-mock'],
  },
];

/** The exam scope for a grade (the first one), or null. */
export const examScopeForGrade = (grade: number): ExamScope | null => EXAM_SCOPES.find((s) => s.grade === grade) ?? null;
