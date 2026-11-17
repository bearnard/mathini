// Dates and numbers used by the Grade 9 History additions (World War II in the Pacific, the Universal Declaration of Human Rights, racism and the oral history
// project), in ONE place. g9HistoryAdditions.test.ts asserts them and the lessons build their sentences from them, so a timeline and a sentence cannot disagree.
// Sources: DBE CAPS Social Sciences Grades 7-9 (Grade 9 History) for the content; each date is a standard, widely documented date. Contested figures are NOT here
// (see docs/notes/g9-history-doubts.md).

export const PACIFIC = {
  /** Japan occupied Manchuria in 1931 and began full-scale war against China in July 1937. */
  manchuria: { year: 1931 },
  chinaWar: { month: 'July', year: 1937 },
  /** The Japanese army's attack on the city of Nanjing, December 1937: a well-known example of atrocities against civilians. */
  nanjing: { month: 'December', year: 1937 },
  /** The attack on Pearl Harbor, Hawaii: 7 December 1941. The United States declared war on Japan the next day. */
  pearlHarbor: { day: 7, month: 'December', year: 1941 },
  usDeclares: { day: 8, month: 'December', year: 1941 },
  /** Executive Order 9066, 19 February 1942, led to the forced removal of Japanese Americans from the West Coast. */
  eo9066: { day: 19, month: 'February', year: 1942 },
  /** The United States government apologised and paid compensation to the survivors in 1988 (the Civil Liberties Act). */
  apology: { year: 1988 },
  /** More than this many people of Japanese descent were held in camps (about two thirds were American citizens). */
  internedMoreThan: 100000,
  /** Allied soldiers captured in the Philippines and at Singapore in the first months of 1942. */
  capture: { year: 1942 },
} as const;

export const UDHR = {
  /** Adopted by the General Assembly of the United Nations on 10 December 1948 (now Human Rights Day). */
  adopted: { day: 10, month: 'December', year: 1948 },
  articles: 30,
  /** The vote: 48 states for, none against, 8 abstentions (South Africa was one of the 8). */
  votes: { for: 48, against: 0, abstained: 8 },
  /** The commission that wrote the draft was chaired by Eleanor Roosevelt. */
  chair: 'Eleanor Roosevelt',
} as const;

export const PROJECT = {
  /** The CAPS written research and oral history project: numbers from the CAPS. */
  researchWords: 300,
  illustrations: 2,
  questions: 10,
  storyWords: 600,
} as const;

/** "7 December 1941" */
export const dateText = (d: { day?: number; month?: string; year: number }): string => [d.day, d.month, d.year].filter((x) => x !== undefined).join(' ');
