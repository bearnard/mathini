/**
 * Dates and numbers for the Grade 11 History Topic 5 lessons (resistance to apartheid, 1948 to 1964).
 * Lessons draw their facts from here; g11HisResistance.test.ts asserts each one independently against the standard record.
 */
export const RESISTANCE = {
  nationalParty: 1948,
  youthLeague: 1944,
  programmeOfAction: 1949,
  groupAreas: 1950,
  suppressionCommunism: 1950,
  defiance: { day: 26, month: 'June', year: 1952 },
  charter: { day: 26, month: 'June', year: 1955 },
  womenMarch: { day: 9, month: 'August', year: 1956 },
  womenMarchers: 20000,
  treasonArrests: 1956,
  treasonAcquittal: 1961,
  treasonAccused: 156,
  pacFounded: 1959,
} as const;

export const ARMED = {
  sharpeville: { day: 21, month: 'March', year: 1960 },
  killed: 69,
  emergency: { day: 30, month: 'March', year: 1960 },
  ban: { day: 8, month: 'April', year: 1960 },
  mk: { day: 16, month: 'December', year: 1961 },
  sabotageAct: 1962,
  liliesleaf: { day: 11, month: 'July', year: 1963 },
  trialStart: 1963,
  speech: { day: 20, month: 'April', year: 1964 },
  verdict: { day: 12, month: 'June', year: 1964 },
  sentenced: 8,
} as const;

export const when = (d: { day: number; month: string; year: number }) => `${d.day} ${d.month} ${d.year}`;
