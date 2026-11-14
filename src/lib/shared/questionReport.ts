// Shared (client + server) definition of a question report: the fixed reasons and the note limit.
export const REPORT_REASONS = ['wrong_answer', 'confusing', 'typo', 'not_in_syllabus', 'other'] as const;
export type ReportReason = (typeof REPORT_REASONS)[number];

/** What the learner sees for each reason (short, child-friendly). */
export const REPORT_REASON_LABELS: Record<ReportReason, string> = {
  wrong_answer: 'The answer is wrong',
  confusing: 'I do not understand the question',
  typo: 'There is a spelling or typing mistake',
  not_in_syllabus: 'We have not learned this at school',
  other: 'Something else',
};

export const REPORT_NOTE_MAX = 200;
export const REPORT_SNAPSHOT_MAX = 300;

export function isReportReason(v: unknown): v is ReportReason {
  return typeof v === 'string' && (REPORT_REASONS as readonly string[]).includes(v);
}
