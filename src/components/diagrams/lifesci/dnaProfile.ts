/**
 * DNA profiles (CAPS Grade 12, Term 2: paternity testing and DNA fingerprinting in forensics). A profile is a list of band positions on a gel, numbered
 * from the top (1 = the biggest fragments, which travel the least from the wells) downwards. Every profile in a lesson, picture or question comes from
 * these functions; dnaProfile.test.ts pins the values. No React here.
 */
export type Profile = readonly number[];

const uniq = (p: Profile): number[] => [...new Set(p)].sort((a, b) => a - b);

/** Bands of the child that the mother does not have: they must have come from the father. */
export const paternalBands = (mother: Profile, child: Profile): number[] => uniq(child).filter((b) => !mother.includes(b));

/** Every band of the child must come from the mother or from the father. True when the man could be the father (all paternal bands are his). */
export const couldBeFather = (mother: Profile, child: Profile, man: Profile): boolean => paternalBands(mother, child).every((b) => man.includes(b));

/** The paternal bands that the man does NOT have (empty when he cannot be excluded). */
export const missingFromMan = (mother: Profile, child: Profile, man: Profile): number[] => paternalBands(mother, child).filter((b) => !man.includes(b));

/** Two profiles are a match when they have exactly the same bands. */
export const matches = (a: Profile, b: Profile): boolean => {
  const x = uniq(a);
  const y = uniq(b);
  return x.length === y.length && x.every((v, i) => v === y[i]);
};

/** The names of the suspects whose profile matches the sample from the scene. */
export const suspectsMatching = (sample: Profile, suspects: Record<string, Profile>): string[] => Object.keys(suspects).filter((s) => matches(sample, suspects[s]));

/** Bands the two profiles share, and the number of bands only in the first. */
export const sharedBands = (a: Profile, b: Profile): number[] => uniq(a).filter((v) => b.includes(v));

/** How many bands of the child came from the father alone, from the mother alone and from both (shared). */
export const origin = (mother: Profile, child: Profile, father: Profile): { mother: number; father: number; both: number } => {
  let m = 0;
  let f = 0;
  let both = 0;
  for (const b of uniq(child)) {
    const inM = mother.includes(b);
    const inF = father.includes(b);
    if (inM && inF) both += 1;
    else if (inM) m += 1;
    else if (inF) f += 1;
  }
  return { mother: m, father: f, both };
};
