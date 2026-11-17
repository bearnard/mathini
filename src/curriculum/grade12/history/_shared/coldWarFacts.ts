// Dates and numbers used by the Grade 12 History Cold War lessons, in ONE place. The lessons build their timelines and sentences from these values and
// coldwar.test.ts asserts them, so a picture and a sentence cannot disagree. Sources: DBE CAPS FET History Grade 12 (Topic 1, Topic 2 Angola) for the
// content; each date is a standard, widely documented date. Anything contested is NOT in this file (see docs/notes/g12-history-doubts.md).

export const ORIGINS = {
  /** Victory in Europe: Germany's surrender took effect on 8 May 1945. */
  veDay: { day: 8, month: 'May', year: 1945 },
  /** Churchill's "iron curtain" speech at Fulton, Missouri. */
  ironCurtainSpeech: { day: 5, month: 'March', year: 1946 },
  /** President Truman asks Congress to help Greece and Turkey: the Truman Doctrine. */
  trumanDoctrine: { day: 12, month: 'March', year: 1947 },
  /** Secretary of State Marshall's speech at Harvard that launched the Marshall Plan (the aid itself began in 1948). */
  marshallSpeech: { day: 5, month: 'June', year: 1947 },
  /** The Berlin Blockade began on 24 June 1948 and was lifted on 12 May 1949. */
  blockadeStart: { day: 24, month: 'June', year: 1948 },
  blockadeEnd: { day: 12, month: 'May', year: 1949 },
  /** NATO was founded on 4 April 1949; the Warsaw Pact was signed on 14 May 1955. */
  nato: { day: 4, month: 'April', year: 1949 },
  warsawPact: { day: 14, month: 'May', year: 1955 },
  /** Construction of the Berlin Wall began on 13 August 1961; the Wall fell on 9 November 1989. */
  wallBuilt: { day: 13, month: 'August', year: 1961 },
  wallFell: { day: 9, month: 'November', year: 1989 },
  /** The Cuban Missile Crisis lasted 13 days, from 16 to 28 October 1962. */
  cubaStart: { day: 16, month: 'October', year: 1962 },
  cubaEnd: { day: 28, month: 'October', year: 1962 },
} as const;

export const CHINA = {
  /** Mao Zedong proclaimed the People's Republic of China on 1 October 1949. */
  prc: { day: 1, month: 'October', year: 1949 },
  /** China's first atomic bomb test: 16 October 1964. */
  atomicBomb: { day: 16, month: 'October', year: 1964 },
  /** The Sino-Indian border war: October to November 1962. */
  indiaWar: { year: 1962 },
  /** The Cultural Revolution: launched 1966, ended 1976. */
  culturalRevolution: { from: 1966, to: 1976 },
  /** The People's Republic took the China seat at the United Nations on 25 October 1971. */
  unSeat: { day: 25, month: 'October', year: 1971 },
  /** President Nixon's visit to China: 21 to 28 February 1972. */
  nixonVisit: { from: '21 February 1972', to: '28 February 1972' },
  /** The USA and the People's Republic established full diplomatic relations on 1 January 1979. */
  diplomaticRelations: { day: 1, month: 'January', year: 1979 },
  /** Mao Zedong died on 9 September 1976. */
  maoDied: { day: 9, month: 'September', year: 1976 },
  /** Deng Xiaoping's economic reforms began in December 1978; the first Special Economic Zones were set up from 1980. */
  reforms: { year: 1978 },
  specialEconomicZones: { year: 1980 },
} as const;

export const VIETNAM = {
  /** The French were defeated at Dien Bien Phu on 7 May 1954; the Geneva Accords divided Vietnam at the 17th parallel in July 1954. */
  dienBienPhu: { day: 7, month: 'May', year: 1954 },
  genevaAccords: { month: 'July', year: 1954 },
  parallel: 17,
  /** The National Liberation Front (Viet Cong) was formed in December 1960. */
  nlf: { month: 'December', year: 1960 },
  /** Gulf of Tonkin Resolution, 7 August 1964; first US Marines landed at Da Nang on 8 March 1965. */
  tonkinResolution: { day: 7, month: 'August', year: 1964 },
  marinesLanded: { day: 8, month: 'March', year: 1965 },
  /** The Tet Offensive began at the end of January 1968. */
  tet: { month: 'January', year: 1968 },
  /** The My Lai massacre: 16 March 1968. */
  myLai: { day: 16, month: 'March', year: 1968 },
  /** Kent State shootings: 4 May 1970, four students killed. */
  kentState: { day: 4, month: 'May', year: 1970, killed: 4 },
  /** The Paris Peace Accords were signed on 27 January 1973. */
  parisAccords: { day: 27, month: 'January', year: 1973 },
  /** Saigon fell on 30 April 1975; Vietnam was formally reunified in July 1976. */
  saigonFell: { day: 30, month: 'April', year: 1975 },
  reunified: { month: 'July', year: 1976 },
  /** The Vietnam Veterans Memorial in Washington was dedicated on 13 November 1982. */
  memorial: { day: 13, month: 'November', year: 1982 },
} as const;

export const ANGOLA = {
  /** The Carnation Revolution in Portugal: 25 April 1974. */
  carnation: { day: 25, month: 'April', year: 1974 },
  /** Angola became independent on 11 November 1975. */
  independence: { day: 11, month: 'November', year: 1975 },
  /** Movements: MPLA (Agostinho Neto), FNLA (Holden Roberto), UNITA (Jonas Savimbi, founded 1966). */
  unitaFounded: 1966,
  /** The battle of Cuito Cuanavale: 1987-1988 (a contested episode; the lesson presents the competing accounts). */
  cuito: { from: 1987, to: 1988 },
  /** The New York (tripartite) accords between Angola, Cuba and South Africa: 22 December 1988. */
  newYorkAccords: { day: 22, month: 'December', year: 1988 },
  /** Namibia's independence: 21 March 1990. */
  namibia: { day: 21, month: 'March', year: 1990 },
  /** Bicesse Accords (May 1991); Savimbi killed in February 2002; peace in April 2002. */
  bicesse: { month: 'May', year: 1991 },
  savimbiKilled: { month: 'February', year: 2002 },
  peace: { month: 'April', year: 2002 },
} as const;

/** "8 May 1945" */
export const dateText = (d: { day?: number; month?: string; year: number }): string => [d.day, d.month, d.year].filter((x) => x !== undefined).join(' ');
