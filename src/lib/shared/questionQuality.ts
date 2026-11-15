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
  | 'equal_numeric_options'
  | 'length_tell_strong'
  | 'filler_distractor'
  | 'key_in_prompt'
  | 'explanation_missing'
  | 'explanation_scratchpad'
  | 'explanation_other_option'
  | 'explanation_contradicts_key'
  | 'mistake_key_is_correct'
  | 'near_duplicate'
  | 'length_tell'
  | 'list_count_tell'
  | 'absolutes_cue'
  | 'key_echo_in_prompt'
  | 'off_topic_numeric'
  | 'place_boilerplate'
  | 'misconception_frame'
  | 'decimal_point'
  | 'all_none_of_the_above'
  | 'explanation_skips_key'
  | 'latex_control_char'
  | 'latex_doubled_backslash'
  | 'latex_parse';

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

export type DecimalPolicy = 'reject' | 'warn';

export interface QualityContext {
  /** Prompts already in the same task, for the near-duplicate check. */
  existingPrompts?: readonly string[];
  /** False for subjects that are not about calculation (so a numeric word problem is flagged). Default true. */
  numericOk?: boolean;
  /**
   * South African CAPS writes decimals with a COMMA (3,5 km; R18,50) and times with a colon (14:30). Set for maths-type tasks only (see
   * caps/formatPolicy.ts): 'reject' where the whole grade is already converted (Grade 6), 'warn' where it is not yet. Unset = not checked
   * (IT/CAT code, versions, IP addresses, other subjects).
   */
  decimalComma?: DecimalPolicy;
  /**
   * Optional KaTeX check, injected on the insert path only (this module stays dependency-free). Called with the source of each
   * `$...$` run in the prompt, options and answer; return an error message when it does not parse, else null.
   */
  validateMath?: (latex: string) => string | null;
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
  decimal_point: 25,
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
    // Self-correction tells found in the AI-generated G7-12 numeric audit (keys that were only "the closest option").
    String.raw`(^|[.!?]\s+)actually[,:]?\s+[^.]*[=≈]`,
    String.raw`\bno,? wait\b`,
    String.raw`\bclosest (given |listed |available )?(option|answer|choice)`,
    String.raw`\bclosest (is|one is)\b`,
    String.raw`\bnone (is |are )?(exact|exactly)\b`,
    String.raw`\blet (us|.s) (check|verify|reconsider|reassess|see)\b`,
    String.raw`\breconsider (the |my )?(logic|setup|question|interpretation)`,
    String.raw`\binvalid set\b`,
    String.raw`\bbased on (the )?(answer )?(choices|options)\b`,
    String.raw`\bmatches? the (given |listed )?(option|choice)s? (so|best)`,
    String.raw`\bwhich is not (among|one of) the (given |listed )?(options|choices)`,
  ].join('|'),
  'i',
);

/** A digit, a full stop, a digit: "3.5", "R18.50", "14.30". Spaces and sentence ends ("R5. 3 more") do not match. */
export const DECIMAL_POINT_RE = /(?<=\d)\.(?=\d)/;

/** The decimal-point numbers in a text, e.g. ["3.5", "R18.50"], for the message. */
export function decimalPointsIn(text: string): string[] {
  return [...text.matchAll(/\d+(?:\.\d+)+/g)].map((m) => m[0]);
}

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


// ---- Equal numeric options (two options with the same value are both correct) ------------------------------------------------------
type Dim = 'num' | 'cur' | 'len' | 'area' | 'vol' | 'mass' | 'time';
const UNIT_TABLE: Record<string, [Dim, number]> = {
  mm: ['len', 0.001], cm: ['len', 0.01], dm: ['len', 0.1], m: ['len', 1], km: ['len', 1000],
  'mm2': ['area', 1e-6], 'cm2': ['area', 1e-4], 'dm2': ['area', 1e-2], 'm2': ['area', 1], 'km2': ['area', 1e6], ha: ['area', 1e4],
  'mm3': ['vol', 1e-9], 'cm3': ['vol', 1e-6], 'dm3': ['vol', 1e-3], 'm3': ['vol', 1],
  ml: ['vol', 1e-6], 'mℓ': ['vol', 1e-6], l: ['vol', 1e-3], 'ℓ': ['vol', 1e-3], kl: ['vol', 1], 'kℓ': ['vol', 1],
  mg: ['mass', 1e-6], g: ['mass', 1e-3], kg: ['mass', 1], t: ['mass', 1000],
  s: ['time', 1], sec: ['time', 1], min: ['time', 60], h: ['time', 3600], hr: ['time', 3600],
};
const UNIT_RE = /\s*(mm|cm|dm|km|ml|mℓ|kl|kℓ|mg|kg|ha|sec|min|hr|m|l|ℓ|g|t|s|h)(?:\s*\^?\s*\{?([23²³])\}?)?\s*$/i;

/** A small safe arithmetic evaluator: numbers, + - * / ^, brackets, sqrt(), a trailing %. Returns null on anything else. */
function evalArithmetic(src: string): number | null {
  let i = 0;
  const peek = () => src[i];
  const ws = () => { while (src[i] === ' ') i++; };
  function expr(): number | null {
    let v = term(); if (v === null) return null;
    for (;;) { ws(); const c = peek(); if (c !== '+' && c !== '-') return v; i++; const r = term(); if (r === null) return null; v = c === '+' ? v + r : v - r; }
  }
  function term(): number | null {
    let v = unary(); if (v === null) return null;
    for (;;) { ws(); const c = peek(); if (c !== '*' && c !== '/') return v; i++; const r = unary(); if (r === null || (c === '/' && r === 0)) return null; v = c === '*' ? v * r : v / r; }
  }
  function unary(): number | null {
    ws(); if (peek() === '-') { i++; const v = unary(); return v === null ? null : -v; }
    if (peek() === '+') { i++; return unary(); }
    return power();
  }
  function power(): number | null {
    const b = atom(); if (b === null) return null;
    ws(); if (peek() === '^') { i++; const e = unary(); if (e === null || Math.abs(e) > 64) return null; const r = Math.pow(b, e); return Number.isFinite(r) ? r : null; }
    return b;
  }
  function atom(): number | null {
    ws();
    if (src.startsWith('sqrt(', i)) { i += 5; const v = expr(); ws(); if (v === null || peek() !== ')' || v < 0) return null; i++; return Math.sqrt(v); }
    if (peek() === '(') { i++; const v = expr(); ws(); if (v === null || peek() !== ')') return null; i++; return pct(v); }
    const m = /^\d+(?:\.\d+)?/.exec(src.slice(i)); if (!m) return null;
    i += m[0].length; return pct(parseFloat(m[0]));
  }
  function pct(v: number): number { ws(); if (peek() === '%') { i++; return v / 100; } return v; }
  const v = expr(); ws();
  return v !== null && i === src.length && Number.isFinite(v) ? v : null;
}

/** The value of an option when it is a number, fraction, simple arithmetic or a quantity with a unit: { dim, v } with v in SI-ish base units. */
export function optionQuantity(option: string): { dim: Dim; v: number } | null {
  let s = option.replace(/ /g, ' ').replace(/\\\$/g, '');
  s = s.replace(/\$/g, '').replace(//g, '$');
  s = s.replace(/\\left|\\right|\\,|\;|\\!|\\ /g, ' ').replace(/\\(?:text|mathrm|mbox)\{([^{}]*)\}/g, ' $1 ');
  s = s.replace(/−|–/g, '-').replace(/\\times|\\cdot|×/g, '*').replace(/\\div|÷/g, '/').replace(/\\%/g, '%').replace(/°|\\circ|\\degree/g, '');
  let currency = false;
  if (/^\s*[R€£]\s*(?=-?\d)/.test(s)) { currency = true; s = s.replace(/^\s*[R€£]\s*/, ''); }
  // A statement such as "49 + 27 = 76" counts as its result, but only when it is consistent ("3^2 = 8" is a false statement, not a value).
  if (s.includes('=')) {
    const parts = s.split('=').map((x) => x.trim());
    if (parts.some((x) => !x || /[a-zA-Z]/.test(x.replace(/\\(?:d?frac|sqrt|text|mathrm)|sqrt|(?:mm|cm|dm|km|ml|kg|mg|[mglsth])\s*[23²³]?\s*$/gi, '')))) return null;
    const vals = parts.map((x) => optionQuantity(x));
    if (vals.some((x) => !x)) return null;
    const first = vals[0]!;
    if (vals.some((x) => x!.dim !== first.dim || Math.abs(x!.v - first.v) > 1e-9 * Math.max(1, Math.abs(first.v)))) return null;
    return first;
  }
  if (/[a-zA-Z]/.test(s.replace(/\\(?:d?frac|sqrt)|sqrt/g, '').replace(UNIT_RE, ''))) return null;
  s = s.trim();
  let dim: Dim = currency ? 'cur' : 'num', factor = 1;
  const um = UNIT_RE.exec(s);
  if (um && dim === 'num') {
    const key = um[1].toLowerCase().replace('ℓ', 'ℓ') + (um[2] ? (um[2] === '²' ? '2' : um[2] === '³' ? '3' : um[2]) : '');
    const unit = UNIT_TABLE[key] ?? UNIT_TABLE[key.toLowerCase()];
    if (!unit) return null;
    [dim, factor] = unit; s = s.slice(0, um.index);
  }
  s = s.replace(/(\d+)\s*\\d?frac\{(\d+)\}\{(\d+)\}/g, '($1+$2/$3)');
  for (let k = 0; k < 4; k++) s = s.replace(/\\d?frac\{([^{}]*)\}\{([^{}]*)\}/g, '(($1)/($2))').replace(/\\sqrt\{([^{}]*)\}/g, 'sqrt($1)');
  s = s.replace(/\^\{([^{}]*)\}/g, '^($1)').replace(/²/g, '^2').replace(/³/g, '^3').replace(/\\/g, '');
  if (/^\s*\d+\s*-\s*\d+\s*$/.test(s) && !/\d\s-\s\d/.test(s)) return null;                 // 15-35 is a range, not a subtraction
  s = s.replace(/(?<=\d) (?=\d{3}(?!\d))/g, '');                                            // thousands space: 1 000
  s = s.replace(/(?<![\d.,])[1-9]\d{0,2}(?:,\d{3})+(?![\d,])/g, (m) => m.replace(/,/g, ''));    // thousands comma: 4,180 / 7,000,000 (never 0,375)
  s = s.replace(/(?<=\d),(?=\d)/g, '.');                              // decimal comma: 3,5
  s = s.replace(/(\d)\s+(\d)/g, '$1 $2');
  if (/\d\s+\d/.test(s) || !/\d/.test(s) || !/^[0-9.+\-*\/^()%\s]|sqrt\(/.test(s)) return null;
  const v = evalArithmetic(s.trim());
  return v === null ? null : { dim, v: v * factor };
}

/** Pairs of options that have the same numeric value (equivalent fractions, 2.1 and 2.10, 10 dm and 100 cm, 64 and 2^6). With keyIndex, only pairs that include the key. */
export function equalNumericOptions(options: readonly string[], keyIndex?: number): [number, number][] {
  const q = options.map(optionQuantity);
  const out: [number, number][] = [];
  for (let i = 0; i < q.length; i++) for (let j = i + 1; j < q.length; j++) {
    if (keyIndex !== undefined && keyIndex >= 0 && i !== keyIndex && j !== keyIndex) continue;
    const a = q[i], b = q[j];
    if (!a || !b || a.dim !== b.dim) continue;
    if (Math.abs(a.v - b.v) <= 1e-9 * Math.max(1, Math.abs(a.v), Math.abs(b.v))) out.push([i, j]);
  }
  return out;
}

/** Prompts where equal values are the point of the question ("which is NOT equivalent", "simplify", a time signature): no equal-value rule. */
const EQUAL_VALUE_OK_RE = /\b(not|except|false|incorrect|odd one|simplif\w*|factor\w*|lowest terms|simplest form|reduce|time signature|beats?)\b/i;

// ---- "What is the mistake?" prompts whose keyed option is itself correct -------------------------------------------------------------
const MISTAKE_PROMPT_RE = /\b(mistake|error|misconception|misunderstand\w*|what is wrong|incorrect|wrongly|common error)\b/i;
/** A keyed option that itself says nothing is wrong ("They are correct") is consistent with such an explanation. */
const KEY_SAYS_NO_MISTAKE_RE = /\b(correct|no (mistake|error)|nothing|not a mistake|right)\b/i;
/** Explanations that admit nothing was wrong: used only when the PROMPT asks for a mistake. Deliberately narrow (see tests). */
const NO_MISTAKE_RE = new RegExp(
  [
    String.raw`\bno (mistake|error)\b`,
    String.raw`\bnot (really )?(a|an) (mistake|error)\b`,
    String.raw`\b(is|are|was) (actually|in fact) (correct|right|true)\b`,
    String.raw`\bit is (actually )?correct to\b`,
    String.raw`\bshows? correct (thinking|understanding)\b`,
    String.raw`\breflects? correct understanding\b`,
    String.raw`\bthis is (actually )?correct\b`,
    String.raw`\bso it is (actually )?(correct|right)\b`,
    String.raw`\bthe (final )?(value|answer|result) is (actually )?correct\b`,
    String.raw`\bno mistake in (the )?final\b`,
  ].join('|'),
  'i',
);

/** Checks one question. Pure. */
// C0 control characters except newline. A single-backslash \t, \f, \r or \b in model JSON decodes to one of these, so \times, \text,
// \frac, \right, \beta lose their backslash and the learner sees "imes", "ext", "rac".
const CONTROL_CHAR_RE = /[\x00-\x09\x0b-\x1f]/;
/** The `\$` escape (a literal dollar, see MathText) is hidden first so currency never opens a maths run. */
const ESCAPED_DOLLAR_RE = /\\\$/g;
const MATH_RUN_RE = /\$[^$]+\$/g;
/** `\\` followed by a letter inside a maths run: KaTeX reads a line break then plain letters ("\\times" shows as "times"). */
const DOUBLED_BACKSLASH_RE = /\\\\[A-Za-z]/;

/** The `$...$` runs of a learner-visible string, as MathText would split them. */
export function mathRunsIn(text: string): string[] {
  return (text.replace(ESCAPED_DOLLAR_RE, '\uE000').match(MATH_RUN_RE) ?? []).map((m) => m.slice(1, -1));
}

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

  // Broken LaTeX / escapes in anything rendered as maths (prompt, options, answer). Raw values: trim() would hide a leading TAB.
  const visible: string[] = [q.prompt, ...(Array.isArray(q.options) ? q.options : []), q.answer].filter((v): v is string => typeof v === 'string');
  if (visible.some((v) => CONTROL_CHAR_RE.test(v))) {
    add('latex_control_char', 'reject', 'a control character (tab, form feed, ...) sits in the prompt, options or answer: a single-backslash LaTeX command was eaten');
  }
  const runs = visible.flatMap(mathRunsIn);
  if (runs.some((r) => DOUBLED_BACKSLASH_RE.test(r))) {
    add('latex_doubled_backslash', 'reject', 'doubled backslash inside $...$: KaTeX shows a line break then plain letters');
  } else if (ctx.validateMath && !visible.some((v) => CONTROL_CHAR_RE.test(v))) {
    for (const r of runs) {
      const err = ctx.validateMath(r);
      if (err) { add('latex_parse', 'reject', `a $...$ run does not parse: ${err}`); break; }
    }
  }

  const keyIndex = options.indexOf(answer);
  if (keyIndex < 0) add('key_not_in_options', 'reject', 'the answer is not one of the options');
  if (new Set(options).size !== options.length) add('duplicate_options', 'reject', 'two options are identical');
  else {
    const eq = EQUAL_VALUE_OK_RE.test(prompt) ? [] : equalNumericOptions(options, keyIndex);
    if (eq.length) add('equal_numeric_options', 'reject', `two options have the same value ("${options[eq[0][0]]}" and "${options[eq[0][1]]}"): both are correct`);
  }

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
    if (MISTAKE_PROMPT_RE.test(prompt) && NO_MISTAKE_RE.test(expl) && !KEY_SAYS_NO_MISTAKE_RE.test(answer)) add('mistake_key_is_correct', 'reject', 'the prompt asks for a mistake but the explanation says the keyed option is correct');
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
  if (ctx.decimalComma) {
    const found = [prompt, ...options, answer, expl].flatMap(decimalPointsIn);
    if (found.length) {
      const shown = [...new Set(found)].slice(0, 3).join(', ');
      add('decimal_point', ctx.decimalComma, `decimal point in ${shown}: write decimals and money with a comma (3,5 km; R18,50) and times with a colon (14:30)`);
    }
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
