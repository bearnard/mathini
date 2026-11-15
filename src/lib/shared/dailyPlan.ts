// ADR 0003 section 6 and ADR 0005: the daily plan that counts down to an exam. PURE (no clock, no database).
//
// Today's plan is built from what is due and what is weakest, spread over the days left, so the plan changes as the learner improves:
//   1. review cards that are due (they are quick and they fade fastest);
//   2. the weakest topics of the scope that are not yet mastered, a share of them each day (untried topics count as the weakest);
//   3. a practice test when the exam is within 14 days and none was taken in the last 7 days.
// Never more than 4 steps, never a comparison with other learners, and the wording stays encouraging.
import type { DailyPlan, MasteryLevel, PlanStep } from './progressTypes';

export const MAX_STEPS = 4;
export const MAX_TOPICS_PER_DAY = 3;
export const MOCK_WITHIN_DAYS = 14;
export const MOCK_EVERY_DAYS = 7;
const DAY_MS = 86_400_000;

export interface PlanTopic { task: string; label: string; level: MasteryLevel; accuracyPct: number | null }

/** Whole days from today to the exam date, both as SAST day numbers. 0 on the day, negative after it. */
export const daysUntil = (examDay: number, todayDay: number): number => examDay - todayDay;

/** 'YYYY-MM-DD' to a day number (days since 1970-01-01), or null if it is not a real calendar date. */
export function dayNumberOf(date: string): number | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  if (!m) return null;
  const [y, mo, d] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const t = Date.UTC(y, mo - 1, d);
  const back = new Date(t);
  if (back.getUTCFullYear() !== y || back.getUTCMonth() !== mo - 1 || back.getUTCDate() !== d) return null;
  return Math.round(t / DAY_MS);
}

export const countdownText = (daysLeft: number): string =>
  daysLeft === 0 ? 'Your exam is today' : daysLeft === 1 ? '1 day to your exam' : `${daysLeft} days to your exam`;

export function dailyPlan(args: {
  daysLeft: number;
  topics: readonly PlanTopic[];
  dueCount: number;
  /** Days since the learner last finished a practice test or exam practice for this scope's subject, or null if never. */
  daysSinceMock: number | null;
  appHref: string;
}): DailyPlan | null {
  const { daysLeft } = args;
  if (daysLeft < 0) return null; // the exam has passed
  const steps: PlanStep[] = [];

  if (args.dueCount > 0) {
    steps.push({ kind: 'review', title: args.dueCount === 1 ? 'Do your review card' : `Do your ${args.dueCount} review cards`, detail: 'Quick, and they fade fastest.', href: args.appHref });
  }

  const needsWork = args.topics
    .filter((t) => t.level !== 'mastered')
    .map((t) => ({ ...t, sortKey: t.level === 'not_started' || t.accuracyPct === null ? -1 : t.accuracyPct }))
    .sort((a, b) => a.sortKey - b.sortKey || a.label.localeCompare(b.label));

  if (daysLeft === 0) {
    steps.push({ kind: 'rest', title: 'Good luck today', detail: 'Stay calm. Read each question twice.', href: null });
    return { daysLeft, headline: countdownText(daysLeft), steps: steps.slice(0, MAX_STEPS) };
  }

  const mockDue = daysLeft <= MOCK_WITHIN_DAYS && (args.daysSinceMock === null || args.daysSinceMock >= MOCK_EVERY_DAYS);
  // The last day before the exam is for calm revision: no new test.
  const mockToday = mockDue && daysLeft >= 2;
  const studyDays = Math.max(1, daysLeft - (mockDue ? 1 : 0));
  const perDay = Math.min(MAX_TOPICS_PER_DAY, Math.ceil(needsWork.length / studyDays));
  const room = MAX_STEPS - steps.length - (mockToday ? 1 : 0);
  for (const t of needsWork.slice(0, Math.max(0, Math.min(perDay, room)))) {
    steps.push({
      kind: 'topic',
      title: `Practise ${t.label}`,
      detail: t.level === 'not_started' ? 'You have not started this one yet.' : `You are at ${Math.round(t.accuracyPct ?? 0)}% here. A little practice helps most.`,
      href: args.appHref,
    });
  }
  if (mockToday) steps.push({ kind: 'mock', title: 'Take a practice test', detail: 'It shows what to practise next.', href: args.appHref });

  if (steps.length === 0) {
    const weakest = [...args.topics].filter((t) => t.accuracyPct !== null).sort((a, b) => (a.accuracyPct as number) - (b.accuracyPct as number))[0];
    steps.push(weakest
      ? { kind: 'topic', title: `Keep sharp: ${weakest.label}`, detail: 'Everything is going well. A short go keeps it fresh.', href: args.appHref }
      : { kind: 'rest', title: 'Nothing is due today', detail: 'Come back tomorrow.', href: null });
  }
  return { daysLeft, headline: countdownText(daysLeft), steps: steps.slice(0, MAX_STEPS) };
}
