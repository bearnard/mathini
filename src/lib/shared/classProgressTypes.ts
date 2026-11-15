// The shape of GET /api/teacher/classes/[id]/progress (ADR 0005 section 4, ADR 0003 section 6): the teacher's view of one class.
// Learners appear by NICKNAME only. Every number is computed by the server; the page only formats it. Percentages are 0 to 100 with at most one
// decimal; null means "no data yet", never zero. The page must stay encouraging: no ranking of learners, no "worst" labels.
import type { MasteryLevel } from './progressTypes';

export interface ClassTopicProgress {
  task: string;
  label: string;
  /** Learners in the class who have practised this topic at least once. */
  practised: number;
  /** Mean accuracy (recency-weighted, last 20 attempts) over the learners who practised it. null when nobody has. */
  avgAccuracyPct: number | null;
  /** How many learners are at each level. Sums to memberCount. */
  levels: Record<MasteryLevel, number>;
}

export interface BehindOnReviews {
  nickname: string;
  /** Review cards due today or earlier. */
  dueCount: number;
  /** Days the oldest due card has been waiting (0 = due today). */
  overdueDays: number;
}

export interface ScoreBucket { label: string; from: number; to: number; count: number }

export interface MockDistribution {
  /** The latest finished practice test or exam practice of each learner, in the class's subject(s). */
  buckets: ScoreBucket[];
  scored: number;
  notTaken: number;
  averagePct: number | null;
}

export interface ImprovementSince {
  /** YYYY-MM-DD, South Africa time. */
  since: string;
  /** Mean change, in percentage points, over learner-and-topic pairs with enough history on both sides. null when there is none. */
  avgChangePoints: number | null;
  /** Learners compared, and how many moved up or down by 5 points or more (the rest are steady). */
  learnersCompared: number;
  improved: number;
  declined: number;
  steady: number;
}

export interface ClassLearner {
  /** The learner's id, so the teacher can open their page. Never shown. */
  studentId: string;
  nickname: string;
  /** Topics practised (in the class's view). */
  topicsPractised: number;
  /** Mean accuracy over the topics practised. null when none. */
  avgAccuracyPct: number | null;
  dueCount: number;
  /** Mean change since the chosen date, in points. null when there is not enough history. */
  changePoints: number | null;
  /** The last day they practised, YYYY-MM-DD (South Africa time), or null. */
  lastPractisedDay: string | null;
}

export interface ClassProgress {
  generatedAt: string;
  classId: string;
  className: string;
  grade: number;
  memberCount: number;
  /** The exam the class is working towards, if the teacher set one. */
  exam: { title: string; examDate: string; daysLeft: number } | null;
  /** Weakest first (lowest class accuracy first); topics nobody has practised last. */
  topics: ClassTopicProgress[];
  /** Learners with review cards that have waited 2 or more days, longest first. */
  behindOnReviews: BehindOnReviews[];
  mockDistribution: MockDistribution;
  improvement: ImprovementSince;
  /** Learners who have not practised anything in the last 7 days (or never), longest away first. For a friendly nudge, never a league table. */
  notPractisedLast7: { nickname: string; lastPractisedDay: string | null }[];
  /** Alphabetical by nickname. */
  learners: ClassLearner[];
}
