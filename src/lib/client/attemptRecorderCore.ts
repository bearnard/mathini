// Core of useAttemptRecorder, with its dependencies injected so it can be unit-tested.
// It never throws: recording an answer must never break practice.

export interface AttemptBody {
  task: string;
  subject: string;
  section: string;
  isCorrect: boolean;
  streak: number;
  itemId?: number;
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
}

export interface AttemptRecorder {
  record(isCorrect: boolean, section?: string, itemId?: number): void;
  /** Start a fresh streak (e.g. "Practice again"). */
  resetStreak(): void;
  streak(): number;
}

export function createAttemptRecorder(task: string, subject: string, deps: RecorderDeps): AttemptRecorder {
  let streak = 0;
  return {
    record(isCorrect, section, itemId) {
      try {
        // The streak counts for everyone; only signed-in learners are recorded.
        streak = isCorrect ? streak + 1 : 0;
        if (!deps.signedIn()) return;
        const body: AttemptBody = { task, subject, section: section || 'general', isCorrect, streak };
        if (typeof itemId === 'number' && Number.isInteger(itemId) && itemId > 0) body.itemId = itemId;
        void deps
          .post(body)
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
    },
    streak: () => streak,
  };
}
