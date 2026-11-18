/**
 * Grade 6 History (CAPS Term 1 Mapungubwe, Term 2 European explorers): the dates and durations used in the lessons, pictures and bank keys. One list
 * feeds the lesson, the timeline picture and the tests; history6.test.ts pins every value and checks the ordering. CAPS gives exact dates for Mapungubwe
 * (1220 to 1300) and for Dias at Mossel Bay (1488); every other date is approximate ("about") and is listed for a teacher in docs/notes/g6-history-doubts.md.
 * No React here.
 */
export interface Span {
  name: string;
  from: number;
  to: number;
  /** true when the CAPS gives the date; false when it is a textbook approximation ("about"). */
  exact: boolean;
}

// ---------------------------------------------------------------- Term 1: the Limpopo Valley and Mapungubwe
export const SCHRODA: Span = { name: 'Schroda', from: 900, to: 1000, exact: false };
export const K2: Span = { name: 'K2', from: 1000, to: 1220, exact: false };
export const MAPUNGUBWE: Span = { name: 'Mapungubwe', from: 1220, to: 1300, exact: true };
export const LIMPOPO_PERIOD: Span = { name: 'Limpopo Valley societies', from: 900, to: 1300, exact: true };
export const SPANS: readonly Span[] = [SCHRODA, K2, MAPUNGUBWE];

export const years = (s: Span): number => s.to - s.from;
/** The span that came next. */
export const after = (s: Span): Span | undefined => SPANS.find((x) => x.from === s.to);
/** Years between two years. */
export const yearsBetween = (a: number, b: number): number => Math.abs(b - a);
/** "about 900 to 1000" or "1220 to 1300": exact dates are written plainly, others with "about". */
export const spanText = (s: Span): string => `${s.exact ? '' : 'about '}AD ${s.from} to ${s.to}`;
/** The span that covers a year, if any. */
export const spanAt = (year: number): Span | undefined => SPANS.find((s) => year >= s.from && year < s.to);

/** Sort items by year, oldest first (for ordering questions). */
export const inOrder = <T extends { year: number }>(items: readonly T[]): T[] => [...items].sort((a, b) => a.year - b.year);

// ---------------------------------------------------------------- Term 1: Great Zimbabwe and Marco Polo
/** Great Zimbabwe as the centre of trade in southern Africa after Mapungubwe: about AD 1300 to 1450 (textbook dates; the site was settled earlier and the reasons for its decline are debated). */
export const GREAT_ZIMBABWE: Span = { name: 'Great Zimbabwe', from: 1300, to: 1450, exact: false };
export const MARCO_POLO_JOURNEY: Span = { name: 'Marco Polo in Asia', from: 1271, to: 1295, exact: true };
export const MARCO_POLO_LIFE = { born: 1254, died: 1324 } as const;
/** Mapungubwe and Marco Polo's travels overlapped: the years both were going on. */
export const overlap = (a: Span, b: Span): number => Math.max(0, Math.min(a.to, b.to) - Math.max(a.from, b.from));

// ---------------------------------------------------------------- Term 2: the Renaissance and the sea route
export const LEONARDO = { born: 1452, died: 1519 } as const;
export const GALILEO = { born: 1564, died: 1642 } as const;
export const DIAS_MOSSEL_BAY = 1488;
export const DA_GAMA_VOYAGE: Span = { name: 'Da Gama to India', from: 1497, to: 1498, exact: false };
export const VOC_FOUNDED = 1602;
/** Years from Dias at Mossel Bay to Da Gama setting out for India (1488 to 1497). */
export const DIAS_TO_DA_GAMA = 1497 - DIAS_MOSSEL_BAY;
/** Gutenberg's printing press in Europe: about 1450 (textbook rounding). */
export const PRINTING_PRESS_ABOUT = 1450;
export const LEONARDO_SPAN: Span = { name: 'Leonardo da Vinci', from: LEONARDO.born, to: LEONARDO.died, exact: true };
export const GALILEO_SPAN: Span = { name: 'Galileo', from: GALILEO.born, to: GALILEO.died, exact: true };
export const age = (p: { born: number; died: number }): number => p.died - p.born;

// ---------------------------------------------------------------- Term 3: democracy, symbols and people
export const FLAG_FIRST_FLOWN = 1994;
export const COAT_OF_ARMS_YEAR = 2000;
export const ANTHEM_COMBINED = 1997;
export const FATIMA_MEER = { born: 1928, died: 2010 } as const;
export const LANGA_CONCOURT_JUDGE = 1994;
export const LANGA_CHIEF_JUSTICE = { from: 2005, to: 2009 } as const;
export const CHILDRENS_CHARTER = 1992;
/** Years Pius Langa served as Chief Justice (2005 to 2009). */
export const langaChiefJusticeYears = (): number => LANGA_CHIEF_JUSTICE.to - LANGA_CHIEF_JUSTICE.from;
/** Years from the Children's Charter (1992) to the first democratic election (1994). */
export const CHARTER_TO_ELECTION = 1994 - CHILDRENS_CHARTER;
/** Years from the first flag (1994) to the new coat of arms (2000). */
export const FLAG_TO_ARMS = COAT_OF_ARMS_YEAR - FLAG_FIRST_FLOWN;
