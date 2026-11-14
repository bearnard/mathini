// Deterministic question-quality checks (ADR 0003 section 1a, from the 2026-11 question audit).
//
// ONE pure module, no dependencies, same code everywhere:
//   - insert time: cron top-up, the seed script and gemini.ts reject failing rows (they are never stored);
//   - the stored score: scripts/backfill-quality.ts and the cron write quality_score / quality_flags;
//   - the bank tests (every curated bank is run through it);
//   - later, the proposal checks of ADR 0003 section 4.
//
// Severity:
//   reject = the question is defective. Never stored, never served (score 0).
//   warn   = a weakness, not a defect. Served, but only after clean rows (score 1-79).
// Score: 0 if any reject; else 100 minus the warn weights (floor 1). Clean = SCORE_CLEAN or more.
//
// Every rule was hand-checked against the audit sample; questionQuality.test.ts pins the true positives AND the
// false positives that were cleared by hand, so a rule cannot quietly get broader.

import { normalisePrompt } from './qkey';

export const SCORE_CLEAN = 80;

export type ReasonCode =
  | 'bad_shape'
  | 'key_not_in_options'
  | 'duplicate_options'
  | 'length_tell_strong'
  | 'filler_distractor'
  | 'key_in_prompt'
  | 'explanation_missing'
  | 'explanation_scratchpad'
  | 'explanation_other_option'
  | 'explanation_contradicts_key'
  | 'near_duplicate'
  | 'length_tell'
  | 'list_count_tell'
  | 'absolutes_cue'
  | 'key_echo_in_prompt'
  | 'off_topic_numeric'
  | 'place_boilerplate'
  | 'misconception_frame'
  | 'all_none_of_the_above'
  | 'explanation_skips_key';

export interface Reason {
  code: ReasonCode;
  severity: 'reject' | 'warn';
  detail: string;
}

export interface QuestionLike {
  prompt: string;
  options: readonly string[];
  answer: string;
  explanation?: string | null;
}

export interface QualityContext {
  /** Prompts already in the same task, for the near-duplicate check. */
  existingPrompts?: readonly string[];
  /** False for subjects that are not about calculation (so a numeric word problem is flagged). Default true. */
  numericOk?: boolean;
}

export interface QualityResult {
  /** No reject-level reason. */
  ok: boolean;
  /** 0 = rejected, 1-79 = warn-level, 80-100 = clean. */
  score: number;
  reasons: Reason[];
}

/** Score cost of each warn-level reason. Heavy enough that one warning moves a row below SCORE_CLEAN, except the mild ones. */
export const WARN_WEIGHTS: Record<string, number> = {
  length_tell: 25,
  list_count_tell: 20,
  absolutes_cue: 20,
  key_echo_in_prompt: 25,
  off_topic_numeric: 25,
  place_boilerplate: 10,
  misconception_frame: 15,
  all_none_of_the_above: 25,
  explanation_skips_key: 25,
};

/** Key >= this many times the next longest option AND this many characters longer = a strong length tell (reject). */
export const STRONG_RATIO = 1.4;
export const STRONG_MIN_DIFF = 10;
export const NEAR_DUPLICATE_OVERLAP = 0.8;
export const MIN_EXPLANATION_CHARS = 15;

// Filler / absurd words and phrases that are almost never a plausible distractor. Deliberately narrow: words such as
// dance, TV, sleep, banana, spell and pizza were tested in the audit and are legitimate in arts, PE and grammar contexts.
export const FILLER_TERMS: readonly string[] = [
  'magic', 'magical', 'magician', 'unicorn', 'unicorns', 'teleport', 'teleporting', 'teleportation', 'witch', 'witches', 'potion', 'potions',
  'wand', 'superhero', 'superheroes', 'superpower', 'superpowers', 'crystal ball', 'time machine', 'flying carpet', 'minecraft', 'pokemon',
  'santa', 'easter bunny', 'candy', 'lollipop', 'lollipops', 'bubblegum', 'zombie', 'zombies', 'monster', 'monsters', 'jelly', 'kitten', 'puppy',
  'giggle', 'giggling', 'tickle', 'tickling', 'whoever gives me', 'paid in toys', 'toss a coin', 'flip a coin', 'flipping a coin', 'at random',
  'randomly', 'guess randomly', 'for no reason', 'does not matter at all', 'nothing at all', 'just for fun', 'because it is fun',
  'because it looks cool', 'magic words', 'magic spell', 'magic spells',
];

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const FILLER_RES = FILLER_TERMS.map((t) => ({ t, re: new RegExp(`\\b${escape(t)}\\b`) }));
const ABSOLUTE_RE = /\b(always|never|only|completely|entirely|every|none|nobody|no one|impossible|all)\b/i;
const ALL_NONE_RE = /\b(all of the above|none of the above|all of these|none of these|both a and b|both of the above|a and b|b and c|a and c|all the above|neither of the above)\b/i;
const MISCONCEPTION_RE = /\b(misconception|misunderstanding|a student (says|thinks|believes)|students? (think|believe)|common (mistake|error)|which (idea|statement) is (a )?(misconception|incorrect|false))\b/i;
const PLACE_RE = /\b(soweto|limpopo|mpumalanga|durban|pretoria|cape town|johannesburg|eastern cape|western cape|kwazulu|bloemfontein|polokwane|east london|mokopane|thohoyandou)\b/i;
const NUMERIC_PROBLEM_RE = /\b(how many|how much|calculate|what is the (total|average|mean|ratio|area|volume|perimeter|distance|cost|difference|sum)|find the)\b/i;
const NEGATIVE_PROMPT_RE = /\b(not|mistake|misconception|misunderstanding|incorrect|wrong|false|error|except|myth|flaw)\b/i;

// The generator's scratchpad leaking into the learner-facing explanation ("Wait! Recheck...", "let us change the options...").
const SCRATCHPAD_RE = new RegExp(
  [
    String.raw`\bwait[!.]`,
    String.raw`\bwait[,:–— -]+\s*(this|that|no|what|the|actually|correct|let|check|there|it|if|a |recheck|recalc|so|[0-9$])`,
    String.raw`\bhmm`,
    String.raw`let me (re)?(check|calculate|recalculate|think)`,
    String.raw`\boops\b`,
    String.raw`on second thought`,
    String.raw`(let.?s|i should|we should|need to|must) re-?(check|calculate)`,
    String.raw`\brechecking\b`,
    String.raw`recalculat`,
    String.raw`this choice (is|was|does)`,
    String.raw`correct choice would`,
    String.raw`(doesn.t|does not|don.t) match (any|the|an?) (option|choice|answer|question)`,
    String.raw`(this|that) (doesn.t|does not) match`,
    String.raw`not (among|in) the (options|choices)`,
    String.raw`answer key`,
    String.raw`options? (is|are) (off|wrong|incorrect)`,
    String.raw`let.?s (change|fix|revise|rephrase)`,
    String.raw`let us (change|fix|revise|rephrase|recheck|re-check|recalculate)`,
    String.raw`this must be wrong`,
    String.raw`this was a mistake`,
    String.raw`but (the |this )?(options|answer|choice)\b`,
    String.raw`none of the (choices|options) (is|are) correct`,
    String.raw`so one option seems`,
    String.raw`\bcorrection[,:!– -]+(actually|the|it|total|wait|let)`,
    String.raw`wait.{0,3}that.s wrong`,
  ].join('|'),
  'i',
);

/** Lower-case alphanumerics and single spaces. */
export function simplify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}

const STOP = new Set('the a an of to in is are what which who how why does do did this that these those for on and or it be as by with from at'.split(' '));
function wordSet(prompt: string): Set<string> {
  return new Set((prompt.toLowerCase().match(/[a-z0-9']+/g) ?? []).filter((w) => !STOP.has(w)));
}

/** True when two prompts are the same question: identical once normalised, or >= NEAR_DUPLICATE_OVERLAP word overlap. */
export function isNearDuplicate(a: string, b: string): boolean {
  if (normalisePrompt(a) === normalisePrompt(b)) return true;
  const sa = wordSet(a), sb = wordSet(b);
  if (sa.size < 4 || sb.size < 4) return false;
  // Same wording with different numbers is a different question (templated maths problems), not a duplicate.
  const na = [...sa].filter((w) => /\d/.test(w)).sort().join(','), nb = [...sb].filter((w) => /\d/.test(w)).sort().join(',');
  if (na !== nb) return false;
  let inter = 0;
  for (const w of sa) if (sb.has(w)) inter++;
  return inter / (sa.size + sb.size - inter) >= NEAR_DUPLICATE_OVERLAP;
}

function listCount(option: string): number {
  const parts = option.split(/,|;|\band\b/).filter((p) => p.trim());
  return parts.length >= 2 ? parts.length : 1;
}

/** Numeric value of an option like "R240", "12.5 cm", "$7$" or "480", else null. */
export function optionNumber(option: string): number | null {
  const m = option.replace(/\u00a0/g, ' ').match(/^\s*[A-Za-z$€£R]{0,2}\s*(-?(?:\d{1,3}(?:[ ,]\d{3})+|\d+)(?:\.\d+)?)\s*[%A-Za-z°²³/ ]{0,8}\s*$/);
  if (!m) return null;
  const n = parseFloat(m[1].replace(/[ ,]/g, ''));
  return Number.isFinite(n) ? n : null;
}

/** Checks one question. Pure. */
export function checkQuestion(q: QuestionLike, ctx: QualityContext = {}): QualityResult {
  const reasons: Reason[] = [];
  const add = (code: ReasonCode, severity: 'reject' | 'warn', detail: string) => reasons.push({ code, severity, detail });

  const prompt = typeof q.prompt === 'string' ? q.prompt : '';
  const options = Array.isArray(q.options) ? q.options.filter((o): o is string => typeof o === 'string').map((o) => o.trim()) : [];
  const answer = typeof q.answer === 'string' ? q.answer.trim() : '';
  const expl = (q.explanation ?? '').toString();

  if (!prompt.trim() || options.length < 2 || !answer) {
    add('bad_shape', 'reject', 'missing prompt, options or answer');
    return { ok: false, score: 0, reasons };
  }

  const keyIndex = options.indexOf(answer);
  if (keyIndex < 0) add('key_not_in_options', 'reject', 'the answer is not one of the options');
  if (new Set(options).size !== options.length) add('duplicate_options', 'reject', 'two options are identical');

  // length tell
  if (keyIndex >= 0 && options.length >= 3) {
    const lens = options.map((o) => o.length);
    const others = lens.filter((_, i) => i !== keyIndex);
    const maxOther = Math.max(...others);
    if (lens[keyIndex] > maxOther) {
      if (lens[keyIndex] >= STRONG_RATIO * maxOther && lens[keyIndex] - maxOther >= STRONG_MIN_DIFF) {
        add('length_tell_strong', 'reject', `the answer (${lens[keyIndex]} chars) is much longer than every other option (longest ${maxOther})`);
      } else {
        add('length_tell', 'warn', 'the answer is the longest option');
      }
    }
  }

  // list-count tell
  if (keyIndex >= 0) {
    const counts = options.map(listCount);
    if (counts.filter((c) => c >= 2).length >= 3) {
      const a = counts[keyIndex];
      const others = counts.filter((_, i) => i !== keyIndex);
      if (a > Math.max(...others) || (new Set(others).size === 1 && a !== others[0])) {
        add('list_count_tell', 'warn', 'the answer has a different number of listed items from the other options');
      }
    }
  }

  // context the filler check ignores: a word that is in the prompt, answer or explanation is on-topic
  const context = `${prompt} ${answer} ${expl}`.toLowerCase();
  const fillers = new Set<string>();
  for (const o of options) {
    if (o === answer) continue;
    const ol = o.toLowerCase();
    for (const { t, re } of FILLER_RES) if (re.test(ol) && !re.test(context)) fillers.add(t);
  }
  if (fillers.size) add('filler_distractor', 'reject', `implausible distractor wording: ${[...fillers].join(', ')}`);

  // absolutes cue: two or more wrong options use always/never/only/all while the answer uses none
  if (keyIndex >= 0 && !ABSOLUTE_RE.test(answer) && options.filter((o, i) => i !== keyIndex && ABSOLUTE_RE.test(o)).length >= 2) {
    add('absolutes_cue', 'warn', 'wrong options use absolutes (always/never/only/all) but the answer does not');
  }

  // all / none of the above
  if (options.some((o) => ALL_NONE_RE.test(o))) add('all_none_of_the_above', 'warn', 'uses "all/none of the above"');

  // answer repeated in the prompt
  const pa = simplify(answer), pp = simplify(prompt);
  if (pa.length >= 6 && !/^[0-9 ]+$/.test(pa) && pp.includes(pa)) {
    if (pa.length >= 10 && pa.split(' ').length >= 2) add('key_in_prompt', 'reject', 'the answer appears word for word in the question');
    else if (pa.split(' ').length >= 2 || pa.length >= 8) add('key_echo_in_prompt', 'warn', 'the answer wording is repeated in the question');
  }

  // explanation sanity
  if (expl.trim().length < MIN_EXPLANATION_CHARS) {
    add('explanation_missing', 'reject', 'the explanation is missing or too short');
  } else {
    if (SCRATCHPAD_RE.test(expl)) add('explanation_scratchpad', 'reject', 'the explanation shows the generator working things out ("wait", "recheck", "this does not match")');

    if (keyIndex >= 0) {
      // numeric landing: the explanation's final result is a DIFFERENT option's value than the key
      const keyValue = optionNumber(answer);
      const otherValues = options.filter((_, i) => i !== keyIndex).map(optionNumber).filter((v): v is number => v !== null);
      if (keyValue !== null && otherValues.length >= 2) {
        const flat = expl.replace(/,/g, '');
        const numbers = (flat.match(/-?\d[\d ]*(?:\.\d+)?/g) ?? []).map((x) => parseFloat(x.replace(/ /g, ''))).filter(Number.isFinite);
        const tail = flat.includes('=') ? flat.slice(flat.lastIndexOf('=') + 1) : '';
        const afterEq = tail.match(/-?\d+(?:\.\d+)?/);
        if (numbers.length >= 3 && afterEq) {
          const landing = parseFloat(afterEq[0]);
          // it must be where the explanation ENDS (the last number), not a step followed by more working
          if (landing === numbers[numbers.length - 1] && landing !== keyValue && !numbers.includes(keyValue) && otherValues.includes(landing)) {
            add('explanation_other_option', 'reject', `the explanation works out ${landing}, which is a different option from the answer`);
          }
        }
      }

      // the explanation says the answer is wrong ("... NOT 5^10"). Not for prompts that ask for a mistake or a "not".
      const na = simplify(answer);
      const ne = simplify(expl);
      if (na.length >= 3 && !NEGATIVE_PROMPT_RE.test(prompt)) {
        const negated = new RegExp(`\\b(not|isn t|is not|never)\\s+(the\\s+|a\\s+|an\\s+)?${escape(na)}\\b`).test(ne);
        const calledWrong = new RegExp(`${escape(na)}\\b[^.]{0,20}\\b(is incorrect|is wrong|is not correct|is false)\\b`).test(ne);
        if (negated || calledWrong) add('explanation_contradicts_key', 'reject', 'the explanation says the answer is wrong');
      }

      // warn: explanation names a wrong option but never the answer
      if (na.length >= 3 && !ne.includes(na)) {
        const names = options.some((o, i) => i !== keyIndex && simplify(o).length >= 8 && ne.includes(simplify(o)));
        if (names) add('explanation_skips_key', 'warn', 'the explanation mentions a wrong option but not the answer');
      }
    }
  }

  // topic drift
  if (ctx.numericOk === false && /\d/.test(prompt) && NUMERIC_PROBLEM_RE.test(prompt)) {
    add('off_topic_numeric', 'warn', 'a numeric word problem in a subject that is not about calculation');
  }
  if (PLACE_RE.test(prompt)) add('place_boilerplate', 'warn', 'wrapped in a South African place name (invented-premise risk)');
  if (MISCONCEPTION_RE.test(prompt)) add('misconception_frame', 'warn', 'uses the "a student says / which is the misconception" frame');

  // near duplicate within the task
  if (ctx.existingPrompts?.length) {
    const hit = ctx.existingPrompts.find((p) => p !== prompt && isNearDuplicate(prompt, p));
    if (hit) add('near_duplicate', 'reject', 'almost the same question already exists in this task');
    else if (ctx.existingPrompts.includes(prompt)) add('near_duplicate', 'reject', 'the same question already exists in this task');
  }

  const rejected = reasons.some((r) => r.severity === 'reject');
  const cost = reasons.filter((r) => r.severity === 'warn').reduce((n, r) => n + (WARN_WEIGHTS[r.code] ?? 10), 0);
  return { ok: !rejected, score: rejected ? 0 : Math.max(1, 100 - cost), reasons };
}

export interface BatchResult {
  /** Share of the batch whose answer is the strictly longest option. */
  longestShare: number;
  /** True when the model plainly ignored the length rule (more than half the keys are the longest): regenerate. */
  regenerate: boolean;
}

/** Batch-level signal: chance level for four options is about 25%; over half means the length rule was ignored. */
export function checkBatch(items: readonly QuestionLike[]): BatchResult {
  const measured = items.filter((q) => Array.isArray(q.options) && q.options.length >= 3 && q.options.includes(q.answer));
  if (measured.length < 4) return { longestShare: 0, regenerate: false };
  const longest = measured.filter((q) => {
    const lens = q.options.map((o) => o.trim().length);
    const k = q.options.indexOf(q.answer);
    return lens[k] > Math.max(...lens.filter((_, i) => i !== k));
  }).length;
  const share = longest / measured.length;
  return { longestShare: share, regenerate: share > 0.5 };
}

/** The flags column value: reason codes, rejects first. */
export function flagsOf(result: QualityResult): string[] {
  return [...result.reasons].sort((a, b) => (a.severity === b.severity ? 0 : a.severity === 'reject' ? -1 : 1)).map((r) => r.code);
}

/** Maths-like subject codes (registry codes) where numeric word problems are on topic. */
export const NUMERIC_SUBJECTS: ReadonlySet<string> = new Set(['math', 'ml', 'ps', 'acc', 'econ', 'cat', 'it', 'ems', 'tech', 'ns', 'nst', 'bus', 'ls']);

/**
 * Accepts or rejects a generated batch against the validator. Returns the items to store (with their score and
 * flag codes) and the rejects with their reasons, so callers can log them. Within the batch, later near-duplicates
 * are rejected too.
 */
export function acceptItems<T extends QuestionLike>(
  items: readonly T[],
  ctx: QualityContext = {},
): { accepted: (T & { quality_score: number; quality_flags: string[] })[]; rejected: { item: T; reasons: Reason[] }[] } {
  const accepted: (T & { quality_score: number; quality_flags: string[] })[] = [];
  const rejected: { item: T; reasons: Reason[] }[] = [];
  const seen: string[] = [...(ctx.existingPrompts ?? [])];
  for (const item of items) {
    const result = checkQuestion(item, { ...ctx, existingPrompts: seen });
    if (!result.ok) {
      rejected.push({ item, reasons: result.reasons });
      continue;
    }
    accepted.push({ ...item, quality_score: result.score, quality_flags: flagsOf(result) });
    seen.push(item.prompt);
  }
  return { accepted, rejected };
}
