// Dates and numbers used by the Grade 12 History end-of-the-Cold-War and new-world-order lessons (CAPS Topic 6), in ONE place. newWorldOrder.test.ts asserts them and
// the lessons build their timelines from them. Each is a standard, widely documented date.

export const END_OF_COLD_WAR = {
  /** Mikhail Gorbachev became General Secretary of the Soviet Communist Party in March 1985. */
  gorbachev: { month: 'March', year: 1985 },
  /** The last Soviet troops left Afghanistan on 15 February 1989. */
  afghanistan: { day: 15, month: 'February', year: 1989 },
  /** The Gdansk shipyard strike of August 1980 led to the founding of the free trade union Solidarity (leader Lech Walesa) in 1980. */
  solidarity: { month: 'August', year: 1980 },
  /** The semi-free Polish elections of 4 June 1989, won by Solidarity candidates in the seats they could contest. */
  polishElection: { day: 4, month: 'June', year: 1989 },
  /** The Berlin Wall opened on 9 November 1989; Germany was reunified on 3 October 1990. */
  wallFell: { day: 9, month: 'November', year: 1989 },
  reunification: { day: 3, month: 'October', year: 1990 },
  /** The failed hardline coup against Gorbachev: 19 to 21 August 1991. */
  coup: { from: 19, to: 21, month: 'August', year: 1991 },
  /** Gorbachev resigned on 25 December 1991; the Soviet Union ceased to exist the next day. */
  gorbachevResigned: { day: 25, month: 'December', year: 1991 },
  sovietEnd: { day: 26, month: 'December', year: 1991 },
  /** South Africa: the New York Accords 22 December 1988, Namibian independence 21 March 1990, De Klerk's speech 2 February 1990, Mandela's release 11 February 1990. */
  newYorkAccords: { day: 22, month: 'December', year: 1988 },
  namibia: { day: 21, month: 'March', year: 1990 },
  deKlerkSpeech: { day: 2, month: 'February', year: 1990 },
  mandelaReleased: { day: 11, month: 'February', year: 1990 },
  /** The first democratic election in South Africa: 27 April 1994. */
  election: { day: 27, month: 'April', year: 1994 },
} as const;

export const NEW_ORDER = {
  /** The Bretton Woods conference of July 1944 created the IMF and the World Bank. */
  brettonWoods: { month: 'July', year: 1944 },
  /** The World Trade Organization began on 1 January 1995, replacing the GATT. */
  wto: { day: 1, month: 'January', year: 1995 },
  /** The Earth Summit in Rio de Janeiro: June 1992. */
  rio: { month: 'June', year: 1992 },
  /** Large protests during the WTO meeting in Seattle: 30 November 1999. */
  seattle: { day: 30, month: 'November', year: 1999 },
  /** The attacks of 11 September 2001 on the United States. */
  nineEleven: { day: 11, month: 'September', year: 2001 },
  /** The Truth and Reconciliation Commission was set up by the 1995 Act. */
  trc: { year: 1995 },
  /** BRICS: the first leaders' summit was held in 2009; South Africa joined in 2010. */
  bricsSummit: { year: 2009 },
  saJoinsBrics: { year: 2010 },
} as const;

/** "9 November 1989" */
export const dateText = (d: { day?: number; month?: string; year: number }): string => [d.day, d.month, d.year].filter((x) => x !== undefined).join(' ');
