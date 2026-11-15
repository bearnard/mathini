// LOCAL COPY of the shape of GET /api/progress (ADR 0005, part 3). bron's backend will export the real type; until it is merged
// to main, the "My progress" page is coded against this one. Align the two before merging, then delete this file and import
// bron's. Every number below is computed by the SERVER: the page only formats them (decimal comma, arrows, words).
//
// Percentages are 0 to 100 and may have one decimal. `null` means "no data yet", never zero. Dates are ISO 8601 strings.
// Lists arrive already in the order the page shows them (topics weakest first, tests newest first).

export const MASTERY_LEVELS = ['not_started', 'learning', 'getting_there', 'mastered'] as const;
/** ADR 0005 section 2: Not started, Learning (<50%), Getting there (50-79%), Mastered (>=80% across >=10 attempts on >=2 days). */
export type MasteryLevel = (typeof MASTERY_LEVELS)[number];

export interface TopicProgress {
  /** The task slug, for keys. */
  task: string;
  label: string;
  level: MasteryLevel;
  /** Accuracy on the last 20 attempts, weighted toward recent ones. null when not started. */
  accuracyPct: number | null;
  attempts: number;
  /** Last-20 accuracy after each of the latest runs, oldest first, at most 6 points. Empty when there is no history yet. */
  trend: number[];
  /** Latest 10 attempts minus first 10, in percentage points. null until there are 20 attempts. */
  changePoints: number | null;
  /** Where "Practise this" goes. */
  practiseHref: string;
}

export interface SubjectProgress {
  subject: string;
  label: string;
  /** Mean topic mastery for the subject. null when nothing is started. */
  masteryPct: number | null;
  level: MasteryLevel;
  /** Weakest first. */
  topics: TopicProgress[];
}

export interface ExamReadiness {
  scopeKey: string;
  /** For example "Grade 6 Natural Sciences, Terms 3 and 4 exam". */
  label: string;
  /** Mastery averaged over the topics in the scope, the latest mock and how much has been practised, combined by the server. null when there is nothing to go on. */
  readinessPct: number | null;
  masteryPct: number | null;
  /** Share of the scope's topics practised at least once. */
  practisedPct: number | null;
  topicsTotal: number;
  topicsPractised: number;
  latestMock: { scorePct: number; finishedAt: string } | null;
}

export interface TestResult {
  runId: string;
  kind: 'quiz' | 'mock_test' | 'exam_practice';
  scopeKey: string;
  scopeLabel: string;
  scorePct: number;
  nCorrect: number;
  nItems: number;
  finishedAt: string;
  /** Score minus the previous finished run on the same scope_key, in percentage points. null for the first attempt. */
  changeSinceLast: number | null;
}

/** One test taken more than once: its scores in date order, newest last. */
export interface TestSeries {
  scopeKey: string;
  scopeLabel: string;
  points: { finishedAt: string; scorePct: number }[];
}

export interface RetentionProgress {
  /** Review cards answered correctly when due, in the last 7 days. */
  weekCorrect: number;
  weekAnswered: number;
  weekPct: number | null;
  /** Cards remembered three times, so retired. */
  retiredCount: number;
  dueCount: number;
}

export interface ConsistencyProgress {
  daysPractisedLast14: number;
  streakDays: number;
}

export interface NextBestStep {
  /** Due reviews first, then the weakest topic in the exam scope, then an untried topic. */
  kind: 'review' | 'weak_topic' | 'new_topic' | 'all_caught_up';
  title: string;
  reason: string;
  /** null when there is nothing to do right now. */
  href: string | null;
  cta: string;
}

export interface ProgressResponse {
  generatedAt: string;
  grade: number;
  /** The learner's first name or nickname, for the greeting. */
  displayName: string | null;
  exam: ExamReadiness | null;
  subjects: SubjectProgress[];
  /** Newest first. */
  tests: TestResult[];
  /** Tests taken more than once, for the line charts. */
  testSeries: TestSeries[];
  retention: RetentionProgress;
  consistency: ConsistencyProgress;
  nextStep: NextBestStep;
}
