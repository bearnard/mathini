// Choosing today's review: which scheduled questions are due, in a mixed-topic order. Pure.

export interface DueRow {
  qkey: string;
  task: string;
  subject: string;
  section: string;
  due_day: number;
}

export const REVIEW_SESSION_SIZE = 10;

/**
 * Part of the WHERE of every "which review cards are due" query on review_items: a card whose question is RETIRED in D1 is not due (it can never be
 * shown). The review endpoint and the progress page both use it, so the home card, the review screen and /progress count the same cards.
 */
export const NOT_RETIRED_QUESTION_SQL = "NOT EXISTS (SELECT 1 FROM questions q WHERE q.id = review_items.qkey AND q.status = 'retired')";
/** Candidates sent to the client; it keeps the first SESSION_SIZE it can render (multiple choice only in v1). */
export const REVIEW_CANDIDATES = 30;

/**
 * Due rows only (due_day <= today), most overdue first within a topic, then interleaved round-robin
 * across topics (tasks) so a session mixes topics instead of one topic's backlog. Stable and deterministic.
 */
export function pickDue(rows: DueRow[], today: number, limit: number = REVIEW_CANDIDATES): DueRow[] {
  const due = rows.filter((r) => r.due_day <= today).sort((a, b) => a.due_day - b.due_day || (a.qkey < b.qkey ? -1 : 1));
  const byTask = new Map<string, DueRow[]>();
  for (const r of due) {
    const list = byTask.get(r.task);
    if (list) list.push(r);
    else byTask.set(r.task, [r]);
  }
  // topics ordered by their most overdue question
  const queues = [...byTask.values()];
  const out: DueRow[] = [];
  for (let i = 0; out.length < limit; i++) {
    let added = false;
    for (const q of queues) {
      if (i < q.length && out.length < limit) {
        out.push(q[i]);
        added = true;
      }
    }
    if (!added) break;
  }
  return out;
}
