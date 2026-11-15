// Data shape for the rewritten isiXhosa lessons (lesson-standard.md). Lesson content lives in `<Topic>.data.ts` files so a test can
// check the structure and a script can list every isiXhosa sentence for the teacher check. No React here.

/** One isiXhosa example with its English gloss. */
export interface XhExample {
  xh: string;
  en: string;
}

/** A word split into labelled parts (at most 6), e.g. ndi + ya + fund + a. */
export interface XhWordParts {
  word: string; // the whole word, shown above the chips
  en: string;
  parts: { t: string; label: string }[];
}

export interface XhSlide {
  title: string;
  /** The idea in one or two sentences (English, with isiXhosa terms where useful). */
  rule: string;
  /** Optional word-building picture. */
  wordParts?: XhWordParts;
  workedTitle?: string;
  /** The worked example: isiXhosa lines with glosses (the steps). */
  examples: XhExample[];
  /** The most common mistake, in one or two sentences. */
  mistake?: string;
  /** Optional pronunciation chips shown at the bottom of the slide. */
  vocab?: { word: string; phonetic?: string; meaning: string }[];
}

export interface XhCheck {
  q: string;
  a: string;
}

export interface XhLesson {
  slides: XhSlide[]; // 3-5 teaching slides; the builder adds the final "Check yourself"
  checks: XhCheck[]; // 3-4
}

/** Every isiXhosa string in a lesson (examples and word parts), for the teacher-check list. */
export function xhosaStrings(l: XhLesson): string[] {
  const out: string[] = [];
  for (const s of l.slides) {
    for (const e of s.examples) out.push(e.xh);
    if (s.wordParts) out.push(s.wordParts.word);
    for (const v of s.vocab ?? []) out.push(v.word);
  }
  return out;
}

export const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
