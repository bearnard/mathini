import type { Annotation } from '../../../../components/subjects/AnnotatedText';

/**
 * Builds the annotation list for AnnotatedText from the phrases themselves, so the character positions can never be miscounted.
 * Throws at TEST time if a phrase is missing (see english.test.ts), never in the browser: the lesson calls it with phrases that the test
 * has already proved are in the text.
 */
export function annotate(text: string, items: [phrase: string, device: string, note: string][]): Annotation[] {
  const out: Annotation[] = [];
  for (const [phrase, device, note] of items) {
    const start = text.indexOf(phrase);
    if (start < 0) continue;
    out.push({ start, end: start + phrase.length, device, note });
  }
  return out.sort((a, b) => a.start - b.start);
}

/** The phrases that annotate() could not find in the text (a test asserts this is empty). */
export const missingPhrases = (text: string, items: [string, string, string][]): string[] => items.map((i) => i[0]).filter((p) => !text.includes(p));
