/**
 * Facts for the Grade 12 Life Sciences Term 4 lesson on the Cradle of Humankind (CAPS: main fossil sites in South Africa, evidence and evolutionary
 * trends, scientists). One list feeds the lesson, its table and the tests. Ages are the APPROXIMATE ones that standard South African textbooks give,
 * in millions of years ("about"): they are listed in docs/notes/g12-life-sciences-doubts.md for a teacher to confirm. No more precision than that.
 */
export interface FossilSite {
  site: string;
  fossil: string;
  scientist: string;
  /** Approximate age in millions of years, or null when no age is stated. */
  mya: number | null;
}

export const SITES: readonly FossilSite[] = [
  { site: 'Taung', fossil: 'Australopithecus africanus (the Taung Child)', scientist: 'Raymond Dart (1924)', mya: 2.5 },
  { site: 'Sterkfontein', fossil: '"Mrs Ples" (Australopithecus africanus)', scientist: 'Robert Broom (1947)', mya: 2.1 },
  { site: 'Sterkfontein', fossil: '"Little Foot" (Australopithecus)', scientist: 'Ron Clarke', mya: 3.67 },
  { site: 'Kromdraai', fossil: 'Paranthropus robustus', scientist: 'Robert Broom (1938)', mya: null },
  { site: 'Swartkrans', fossil: 'Paranthropus robustus and early Homo', scientist: 'C.K. Brain', mya: null },
  { site: 'Malapa', fossil: 'Australopithecus sediba', scientist: 'Lee Berger (2008)', mya: 2 },
];

/** Millions of years written with a decimal comma: 2.5 -> "2,5 million years", 2 -> "2 million years". */
export const myaText = (mya: number): string => `${String(mya).replace('.', ',')} million years`;

/** Sites with an age, oldest first. */
export const byAge = (): FossilSite[] => SITES.filter((s) => s.mya !== null).sort((a, b) => (b.mya as number) - (a.mya as number));

/** Approximate brain sizes in cm³ for the trend picture (standard textbook values, "about"). */
export const BRAIN_CM3: readonly { name: string; cm3: number }[] = [
  { name: 'Australopithecus africanus', cm3: 450 },
  { name: 'Homo erectus', cm3: 900 },
  { name: 'Homo sapiens', cm3: 1350 },
];
/** How many times bigger the second brain is than the first, to one decimal place as a number. */
export const brainRatio = (small: number, big: number): number => Math.round((big / small) * 10) / 10;
