// The generator quality rules (ADR 0003 section 1a), from the 2026-11 question audit. Every generator prompt ends with
// this block. registry.ts adds it to every subject preamble, and the cron top-up adds it to its own prompt, so the seed
// script and the weekly cron both follow it. The rules mirror what src/lib/shared/questionQuality.ts REJECTS:
// anything the model still gets wrong is caught there and never stored.

export const QUALITY_RULES = [
  'QUALITY RULES (every item must follow all of these):',
  '1. LENGTH: write all four options to be about the same length. The correct option must NOT be the longest. At least one wrong option must be longer than the correct answer. Never put a long explanatory sentence as the right answer next to short fragments.',
  '2. DISTRACTORS: every wrong option must be something a learner at this grade could plausibly believe, based on a real misconception. Never use filler such as "randomly", "not needed", "never decide", "nothing at all", jokes, magic, sweets or animals. Do not pad wrong options with absolutes (always, never, only, all) unless the correct answer also uses one.',
  '3. ONE RIGHT ANSWER: exactly one option is correct. If two options could both be argued, rewrite the question. Never ask "which is a type of X" when several options are types of X.',
  '4. NO SCRATCHPAD: work out the answer BEFORE writing the item. The explanation must state the correct answer and why, in one or two sentences. Never write "wait", "recheck", "let me recalculate" or "this does not match the options", and never change the options inside the explanation. If your arithmetic does not match an option, rewrite the question.',
  '5. STAY ON TOPIC: every item must test the named CAPS topic itself. No arithmetic word problems in a non-maths subject unless the topic is about calculation. Do not state facts about real places, institutions or statistics you cannot be certain of (never invent facts about specific towns, clinics, schools or services).',
  '6. FORMAT: ask a direct question. Do not use the "a student says ... what is the misconception" frame. Do not repeat the same concept in different wording within one batch.',
  '7. NUMBERS: check every calculation. The numbers in the explanation must lead to the keyed option.',
].join('\n');

/** Appends the quality rules to a prompt or preamble. */
export function withQualityRules(text: string): string {
  return text.includes('QUALITY RULES') ? text : `${text}\n\n${QUALITY_RULES}`;
}
