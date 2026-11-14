// A retired question is hidden in the browser by the key of its wording (task-independent, so the few places that
// do not know the task, like the shared item preparers, can still filter). Same normalisation as the qkey.
import { makeQkey } from './qkey';

export const promptKey = (prompt: string): string => makeQkey('', prompt);
