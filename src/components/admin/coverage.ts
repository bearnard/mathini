// Wording about which answers are recorded. Grade 6 Natural Sciences, Geography, History and Afrikaans only
// started recording answers when the topic shells were changed to do so, so the dashboard says WHEN
// from the data (the earliest recorded answer), instead of a fixed claim that goes stale.

import { longDate } from './format';

export const SHELL_SUBJECTS_TEXT = 'Grade 6 Natural Sciences, Geography, History and Afrikaans';

/** `since` = SAST date (YYYY-MM-DD) of the first recorded answer for those subjects, or null if there is none yet. */
export function shellRecordingNote(since: string | null | undefined): string {
  return since
    ? `Answers in ${SHELL_SUBJECTS_TEXT} are recorded only since ${longDate(since)}; earlier practice appears under Practice runs.`
    : `Answers in ${SHELL_SUBJECTS_TEXT} are not recorded yet, so use Practice runs for those.`;
}
