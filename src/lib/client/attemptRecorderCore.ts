// Core of useAttemptRecorder, with its dependencies injected so it can be unit-tested.
// It never throws: recording an answer must never break practice.

import { makeQkey } from '../shared/qkey';
import type { RunResult, RunScope, RunTracker } from './runs/runTracker';

export interface AttemptBody {
  task: string;
  subject: string;
  section: string;
  isCorrect: boolean;
  streak: number;
  itemId?: number;
  /** Stable question identity (see lib/shared/qkey). Sent when the prompt is known. */
  qkey?: string;
  /** Multiple-choice only: the option the learner tapped (item analysis). */
  chosen?: string;
  /** The run (ADR 0005) this answer belongs to, when the server accepted the run's start. */
  runId?: string;
}

export interface AttemptResponse {
  newBadges?: string[];
}

export interface RecorderDeps {
  /** Is a learner signed in? Answers from anonymous visitors are not stored. */
  signedIn: () => boolean;
  /** Sends one attempt. Resolves with the parsed response, or null when the request failed. */
  post: (body: AttemptBody) => Promise<AttemptResponse | null>;
  /** Called with badges earned by this answer (only when there are any). */
  onBadges: (badges: string[]) => void;
  /** Called after a successful post (refresh XP shown in the header). */
  onRecorded: () => void;
  /** ADR 0005: follow the session as a run. Without it the recorder behaves exactly as before. */
  run?: { tracker: RunTracker; scope: () => RunScope };
}

export interface AttemptRecorder {
  record(isCorrect: boolean, section?: string, itemId?: number, prompt?: string, chosen?: string): void;
  /** Start a fresh streak (e.g. "Practice again"). */
  resetStreak(): void;
  streak(): number;
  /** Ends the run (results screen). Resolves the server's result, or null. No-op without a run tracker. */
  finishRun(): Promise<RunResult | null>;
}

export function createAttemptRecorder(task: string, subject: string, deps: RecorderDeps): AttemptRecorder {
  let streak = 0;
  return {
    record(isCorrect, section, itemId, prompt, chosen) {
      try {
        // The streak counts for everyone; only signed-in learners are recorded.
        streak = isCorrect ? streak + 1 : 0;
        if (deps.run) {
          deps.run.tracker.begin(deps.run.scope());
          deps.run.tracker.note(isCorrect);
        }
        if (!deps.signedIn()) return;
        const body: AttemptBody = { task, subject, section: section || 'general', isCorrect, streak };
        if (typeof itemId === 'number' && Number.isInteger(itemId) && itemId > 0) body.itemId = itemId;
        if (typeof prompt === 'string' && prompt.trim()) body.qkey = makeQkey(task, prompt);
        if (typeof chosen === 'string' && chosen) body.chosen = chosen.slice(0, 200);
        const run = deps.run;
        const posted = run ? run.tracker.runId().then((id) => deps.post(id ? { ...body, runId: id } : body)) : deps.post(body);
        run?.tracker.track(posted);
        void posted
          .then((data) => {
            if (!data) return;
            if (data.newBadges?.length) deps.onBadges(data.newBadges);
            deps.onRecorded();
          })
          .catch(() => {});
      } catch {
        /* never break practice */
      }
    },
    resetStreak() {
      streak = 0;
      deps.run?.tracker.reset();
    },
    streak: () => streak,
    finishRun: () => (deps.run ? deps.run.tracker.finish() : Promise.resolve(null)),
  };
}
