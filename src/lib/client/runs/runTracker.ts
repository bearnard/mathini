// ADR 0005 part 1, client side: one object that follows one run (a practice session, a quiz, a term mock test, an exam practice or a
// spaced-review session) from its first answer to its results screen. Pure: every dependency is injected, so it is unit-tested.
//
// Guarantees:
//   - It never throws and never blocks practice. If the server says no (anonymous, old database, offline), answers are posted without a run.
//   - Answers carry the run id only if the server accepted the start. Posts of one run are awaited before the run is finished.
//   - The totals shown in the app come from the learner's own screen; the totals STORED come from the server counting the attempts.
//   - Anonymous learners: nothing is sent. A summary is kept on the device only (localRuns.ts), for a later, consented upload.

export const RUN_KINDS = ['practice', 'review', 'quiz', 'mock_test', 'exam_practice'] as const;
export type RunKind = (typeof RUN_KINDS)[number];

export interface RunScope {
  kind: RunKind;
  /** Grade of the content. */
  grade: number;
  subject: string;
  /** A task slug, a term test id or an exam-practice id. */
  scopeKey: string;
  scopeLabel: string;
  /** How many questions the run holds. 0 when not known in advance. */
  nItems: number;
  /** When the first answer was given, if it was before the run could be started (screens that post their answers at the end). */
  startedAt?: number;
}

export interface RunResult {
  id: string;
  status: 'open' | 'finished' | 'abandoned';
  nItems: number;
  nAnswered: number;
  nCorrect: number;
  scorePct: number | null;
  durationMs: number | null;
}

export interface LocalRunSummary {
  kind: RunKind;
  grade: number;
  subject: string;
  scopeKey: string;
  scopeLabel: string;
  nItems: number;
  answered: number;
  correct: number;
  at: number;
  durationMs: number;
}

export interface RunTrackerDeps {
  signedIn: () => boolean;
  /** Asks the server to start a run. Resolves true when it was accepted. */
  start: (body: RunScope & { id: string; clientVersion?: string }) => Promise<boolean>;
  /** Asks the server to finish a run. Resolves the server's result, or null when it failed. */
  finish: (id: string) => Promise<RunResult | null>;
  newId: () => string;
  now: () => number;
  clientVersion?: string;
  /** Anonymous learners: keep a summary on the device. */
  saveLocal?: (s: LocalRunSummary) => void;
}

export interface RunTracker {
  /** Starts the run if none is active (idempotent while one is). */
  begin(scope: RunScope): void;
  /** Resolves the run id once the server accepted the start, or null (no run). Safe to call before and after begin(). */
  runId(): Promise<string | null>;
  /** Registers a promise (an answer being posted) that finish() must wait for. */
  track(p: Promise<unknown>): void;
  /** Counts an answer for the on-device summary (anonymous learners). */
  note(correct: boolean): void;
  /** Ends the run: waits for the answers, asks the server to finish it. Resolves the server's result, or null. Idempotent. */
  finish(): Promise<RunResult | null>;
  /** Forgets the active run without finishing it ("Practice again"). The server abandons it after 2 hours. */
  reset(): void;
  active(): boolean;
}

interface State {
  scope: RunScope;
  id: string | null; // null for anonymous
  start: Promise<string | null>;
  pending: Promise<unknown>[];
  startedAt: number;
  answered: number;
  correct: number;
}

export function createRunTracker(deps: RunTrackerDeps): RunTracker {
  let st: State | null = null;

  return {
    begin(scope) {
      try {
        if (st) return;
        const startedAt = scope.startedAt && scope.startedAt <= deps.now() ? scope.startedAt : deps.now();
        if (!deps.signedIn()) {
          st = { scope, id: null, start: Promise.resolve(null), pending: [], startedAt, answered: 0, correct: 0 };
          return;
        }
        const id = deps.newId();
        const start = deps
          .start({ ...scope, startedAt, id, clientVersion: deps.clientVersion })
          .then((ok) => (ok ? id : null))
          .catch(() => null);
        st = { scope, id, start, pending: [], startedAt, answered: 0, correct: 0 };
      } catch {
        st = null;
      }
    },
    runId() {
      return st ? st.start : Promise.resolve(null);
    },
    track(p) {
      if (st) st.pending.push(p.catch(() => undefined));
    },
    note(correct) {
      if (!st) return;
      st.answered++;
      if (correct) st.correct++;
    },
    async finish() {
      const cur = st;
      st = null;
      if (!cur) return null;
      try {
        const id = await cur.start;
        await Promise.allSettled(cur.pending);
        if (!id) {
          if (!deps.signedIn() && cur.answered > 0) {
            deps.saveLocal?.({
              kind: cur.scope.kind, grade: cur.scope.grade, subject: cur.scope.subject, scopeKey: cur.scope.scopeKey, scopeLabel: cur.scope.scopeLabel,
              nItems: cur.scope.nItems, answered: cur.answered, correct: cur.correct, at: deps.now(), durationMs: Math.max(0, deps.now() - cur.startedAt),
            });
          }
          return null;
        }
        return await deps.finish(id);
      } catch {
        return null;
      }
    },
    reset() {
      st = null;
    },
    active: () => st !== null,
  };
}
