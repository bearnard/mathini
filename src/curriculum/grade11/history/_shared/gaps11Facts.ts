/**
 * Dates and names for the Grade 11 History gap lessons (Afrikaner nationalism, Australia and the Stolen Generations).
 * Lessons draw their dates from here; g11HisGaps.test.ts asserts each one independently against the standard record.
 */
export const AFRIKANER = {
  warStart: 1899,
  warEnd: 1902,
  union: 1910,
  npFounded: 1914,
  dieBurger: 1915,
  broederbond: 1918,
  sanlam: 1918,
  randRevolt: 1922,
  civilisedLabour: 1924,
  afrikaansOfficial: 1925,
  fak: 1929,
  carnegieReport: 1932,
  bible: 1933,
  volkskas: 1934,
  nativeRepresentation: 1936,
  dieTransvaler: 1937,
  centenary: 1938,
  reddingsdaadbond: 1939,
  election: 1948,
  landAct: 1913,
} as const;

export const AUSTRALIA = {
  firstFleet: 1788,
  federation: 1901,
  waAboriginesAct: 1905,
  removalsFrom: 1910,
  removalsTo: 1970,
  nevilleFrom: 1915,
  nevilleTo: 1940,
  cookFrom: 1927,
  cookTo: 1939,
  canberraConference: 1937,
  whiteAustraliaEnded: 1973,
  mabo: 1992,
  bringingThemHome: 1997,
  sorryDay: 1998,
  apology: { day: 13, month: 'February', year: 2008 },
  childMigrantApologyAustralia: 2009,
  childMigrantApologyBritain: 2010,
} as const;

export const spanYears = (a: number, b: number) => b - a;
