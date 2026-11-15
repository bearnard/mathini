// Small tested helpers for the Afrikaans lessons. Every Afrikaans form shown in a lesson comes from this file (see afrikaansHelpers.test.ts),
// and the lesson test checks that the practice bank can be answered from the slides.

// ---- Plurals (meervoude) -------------------------------------------------------------------------------------------------------------
export type PluralRule = 'e' | 'double-e' | 's' | 'special';
export const PLURALS = [
  { sg: 'hond', pl: 'honde' },
  { sg: 'boek', pl: 'boeke' },
  { sg: 'huis', pl: 'huise' },
  { sg: 'kat', pl: 'katte' },
  { sg: 'kop', pl: 'koppe' },
  { sg: 'blom', pl: 'blomme' },
  { sg: 'tafel', pl: 'tafels' },
  { sg: 'appel', pl: 'appels' },
  { sg: 'kind', pl: 'kinders' },
  { sg: 'dag', pl: 'dae' },
] as const;

/** Which spelling rule turns the singular into the plural. */
export function pluralRule(sg: string, pl: string): PluralRule {
  if (pl === sg + 's') return 's';
  if (pl === sg + sg[sg.length - 1] + 'e') return 'double-e';
  if (pl === sg + 'e') return 'e';
  return 'special';
}

// ---- Degrees of comparison (trappe van vergelyking) ---------------------------------------------------------------------------------
export const DEGREES = [
  { base: 'mooi', comp: 'mooier', sup: 'mooiste' },
  { base: 'groot', comp: 'groter', sup: 'grootste' },
  { base: 'klein', comp: 'kleiner', sup: 'kleinste' },
  { base: 'vinnig', comp: 'vinniger', sup: 'vinnigste' },
  { base: 'warm', comp: 'warmer', sup: 'warmste' },
  { base: 'goed', comp: 'beter', sup: 'beste' },
] as const;

export type DegreeKind = 'regular' | 'spelling' | 'irregular';
/** regular: add -er and -ste. spelling: the same, but a double vowel loses a letter before -er (groot, groter). irregular: new words. */
export function degreeKind(d: { base: string; comp: string; sup: string }): DegreeKind {
  if (d.comp === d.base + 'er' && d.sup === d.base + 'ste') return 'regular';
  const shortened = d.base.replace(/([aeiou])\1(?=[^aeiou]+$)/, '$1');
  if (d.comp === shortened + 'er' && d.sup === d.base + 'ste') return 'spelling';
  return 'irregular';
}

// ---- Tenses: present, past (het + ge-) and future (sal) ------------------------------------------------------------------------------
export const VERBS = [
  { inf: 'speel', pp: 'gespeel' },
  { inf: 'skop', pp: 'geskop' },
  { inf: 'loop', pp: 'geloop' },
  { inf: 'lees', pp: 'gelees' },
  { inf: 'sien', pp: 'gesien' },
  { inf: 'eet', pp: 'geëet' },
  { inf: 'werk', pp: 'gewerk' },
  { inf: 'skryf', pp: 'geskryf' },
  { inf: 'maak', pp: 'gemaak' },
  { inf: 'gaan', pp: 'gegaan' },
  { inf: 'slaap', pp: 'geslaap' },
] as const;

export const participle = (inf: string): string => {
  const v = VERBS.find((x) => x.inf === inf);
  if (!v) throw new Error(`no participle for ${inf}`);
  return v.pp;
};

const join = (parts: string[]) => parts.filter(Boolean).join(' ');
/** Present: the verb stays in second place. Afrikaans verbs do not change with the person (ek speel, hy speel, ons speel). */
export const presentWords = (subject: string, middle: string, verb: string): string[] => [subject, verb, ...middle.split(' ').filter(Boolean)];
/** Past: het in second place, the ge- verb goes to the end. */
export const pastWords = (subject: string, middle: string, verb: string): string[] => [subject, 'het', ...middle.split(' ').filter(Boolean), participle(verb)];
/** Future: sal in second place, the plain verb goes to the end. */
export const futureWords = (subject: string, middle: string, verb: string): string[] => [subject, 'sal', ...middle.split(' ').filter(Boolean), verb];

export const sentence = (words: string[]): string => {
  const s = join(words);
  return s.charAt(0).toUpperCase() + s.slice(1) + '.';
};

/** Index of the verb word in a word list (for highlighting). */
export const verbIndex = (words: string[], verb: string): number => words.findIndex((w) => w === verb || w === participle(verb));

// ---- Word positions for the word-order picture ---------------------------------------------------------------------------------------
export interface Box { word: string; x: number; w: number }
/** Boxes laid out left to right, each as wide as its word needs, with a fixed gap. */
export function layoutBoxes(words: string[], charW = 9, pad = 18, gap = 8, left = 8): { boxes: Box[]; width: number } {
  let x = left;
  const boxes = words.map((word) => {
    const w = Math.round(word.length * charW + pad);
    const b = { word, x, w };
    x += w + gap;
    return b;
  });
  return { boxes, width: x - gap + left };
}
