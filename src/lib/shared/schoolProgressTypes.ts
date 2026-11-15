// The shape of GET /api/school/progress (ADR 0003 section 6): the school admin's view of one school. School-level numbers only: classes, counts and
// averages. Learners are never named here; the drill-down into one class (a ClassProgress) names them by NICKNAME only. Percentages are 0 to 100 with
// at most one decimal; null means "no data yet", never zero.
export interface SchoolClassSummary {
  classId: string;
  name: string;
  grade: number;
  /** The class's teacher, so the school admin can tell classes apart. */
  teacherEmail: string;
  members: number;
  /** Learners who practised at least once in the last 7 days. */
  practisedLast7: number;
  /** Mean accuracy over the topics practised, averaged across the learners who practised. null when nobody has. */
  avgAccuracyPct: number | null;
  /** Mean of each learner's latest practice-test score, in the class's subject(s). null when none. */
  mockAveragePct: number | null;
  mockScored: number;
  /** The exam the teacher set for the class that is nearest and has not passed. */
  exam: { title: string; examDate: string; daysLeft: number } | null;
}

export interface SchoolProgress {
  generatedAt: string;
  schoolId: string;
  schoolName: string;
  classes: SchoolClassSummary[];
  totals: {
    classes: number;
    learners: number;
    practisedLast7: number;
    avgAccuracyPct: number | null;
    mockAveragePct: number | null;
  };
}
