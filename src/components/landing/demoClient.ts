// Logic for the landing page's "Try it now" demo, kept apart from the markup so it can be tested. The demo RECORDS NOTHING: the only network call it
// makes is the read-only GET /api/demo (a guard test checks that no file in this folder mentions the practice, run, review, session or events APIs).
export interface DemoQuestion {
  id: string;
  subject: string;
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
}
export interface DemoPayload {
  grade: number;
  source: 'd1' | 'static' | 'mixed';
  questions: DemoQuestion[];
}

export const DEMO_GRADE_CHOICES = [5, 6, 7, 8, 9, 10, 11, 12] as const;
export const DEMO_QUESTION_COUNT = 3;

/** Is this what /api/demo should have sent: three well-formed questions whose key is one of the options? The client never trusts a half answer. */
export function isDemoPayload(v: unknown): v is DemoPayload {
  if (!v || typeof v !== 'object') return false;
  const d = v as Partial<DemoPayload>;
  if (!Array.isArray(d.questions) || d.questions.length !== DEMO_QUESTION_COUNT) return false;
  return d.questions.every(
    (q) =>
      !!q && typeof q.prompt === 'string' && q.prompt !== '' && typeof q.answer === 'string' && typeof q.explanation === 'string' &&
      Array.isArray(q.options) && q.options.length >= 2 && q.options.every((o) => typeof o === 'string') && q.options.includes(q.answer),
  );
}

/** The only request the demo makes. Resolves the three questions, or null on any problem (network, status, shape). Never throws. */
export async function fetchDemo(grade: number, signal?: AbortSignal): Promise<DemoQuestion[] | null> {
  try {
    const res = await fetch(`/api/demo?grade=${grade}`, { signal });
    if (!res.ok) return null;
    const body: unknown = await res.json();
    return isDemoPayload(body) ? body.questions : null;
  } catch {
    return null;
  }
}

/** The line after an answer: celebrate a right one, and make a wrong one a step forward, never a verdict. The answer is shown after WRONG_PREFIX (it may hold maths). */
export const RIGHT_LINE = 'Correct. Well done!';
export const WRONG_PREFIX = 'Not quite. The answer is ';

/** The closing line for a score out of 3. */
export function resultLine(score: number, total: number): string {
  if (score >= total) return 'Brilliant, every one right!';
  if (score === 0) return 'Every question teaches you something. Let us try again together.';
  if (score * 2 >= total) return 'Nice work! A little practice makes it even better.';
  return 'A good start. Practice is how it gets easier.';
}

/** Text for the segmented bar: "2 out of 3". */
export const barLabel = (score: number, total: number): string => `${score} out of ${total} correct`;

/** Where "Start practising free" goes: the app's sign-up screen. */
export const SIGNUP_HREF = '/app?start=register';
