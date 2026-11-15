// PracticeRunner and CapsSubjectTopic collect a whole practice session's answers and post them when it ends. This is that step with runs:
// start the run (backdated to the first answer), post every answer with the run id, wait for them, then finish the run. Pure, so it is unit-tested.
import type { RunResult, RunScope, RunTracker } from './runTracker';

export interface PracticeResult {
  section?: string;
  correct: boolean;
  qkey?: string;
  chosen?: string;
}

export interface SubmitDeps {
  tracker: RunTracker;
  /** Posts one answer. null for anonymous learners: nothing is sent, only the on-device summary is kept. */
  post: ((body: Record<string, unknown>) => Promise<{ newBadges?: string[] } | null>) | null;
}

export async function submitPracticeRun(
  deps: SubmitDeps,
  opts: { scope: RunScope; task: string; subject: string; results: PracticeResult[] },
): Promise<{ newBadges: string[]; run: RunResult | null }> {
  const { tracker, post } = deps;
  tracker.begin(opts.scope);
  const id = await tracker.runId();
  const settled = opts.results.map((r) => {
    tracker.note(r.correct);
    if (!post) return Promise.resolve<{ newBadges?: string[] } | null>(null);
    const body: Record<string, unknown> = { task: opts.task, subject: opts.subject, section: r.section, isCorrect: r.correct, qkey: r.qkey, chosen: r.chosen, streak: 0 };
    if (id) body.runId = id;
    const p = post(body).catch(() => null);
    tracker.track(p);
    return p;
  });
  const answers = await Promise.all(settled);
  const run = await tracker.finish();
  const newBadges = [...new Set(answers.flatMap((a) => a?.newBadges ?? []))];
  return { newBadges, run };
}
