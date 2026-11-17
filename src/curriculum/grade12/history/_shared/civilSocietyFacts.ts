// Dates and numbers used by the Grade 12 History civil-society lessons (CAPS Topic 3), in ONE place. civilSociety.test.ts asserts them and the lessons build
// their timelines from them. Each is a standard, widely documented date.

export const CIVIL_RIGHTS = {
  /** Brown v. Board of Education: the US Supreme Court ruled that segregated public schools were unconstitutional, 17 May 1954. */
  brown: { day: 17, month: 'May', year: 1954 },
  /** Rosa Parks was arrested on 1 December 1955; the Montgomery bus boycott began on 5 December 1955 and ended on 20 December 1956. */
  parksArrest: { day: 1, month: 'December', year: 1955 },
  boycottStart: { day: 5, month: 'December', year: 1955 },
  boycottEnd: { day: 20, month: 'December', year: 1956 },
  /** The Southern Christian Leadership Conference, with Martin Luther King as president, was founded in 1957. */
  sclc: { year: 1957 },
  /** The Little Rock Nine entered Central High School in September 1957. */
  littleRock: { month: 'September', year: 1957 },
  littleRockStudents: 9,
  /** The Greensboro sit-ins began on 1 February 1960. */
  greensboro: { day: 1, month: 'February', year: 1960 },
  /** The Birmingham campaign: spring 1963. */
  birmingham: { month: 'April', year: 1963 },
  /** The March on Washington, ending at the Lincoln Memorial, 28 August 1963. */
  marchOnWashington: { day: 28, month: 'August', year: 1963 },
  /** The Civil Rights Act: 2 July 1964. The Nobel Peace Prize to King: 1964. */
  civilRightsAct: { day: 2, month: 'July', year: 1964 },
  nobel: { year: 1964 },
  /** Selma: Bloody Sunday on 7 March 1965; the march to Montgomery ended on 25 March 1965. */
  bloodySunday: { day: 7, month: 'March', year: 1965 },
  selmaEnd: { day: 25, month: 'March', year: 1965 },
  /** The Voting Rights Act: 6 August 1965. */
  votingRightsAct: { day: 6, month: 'August', year: 1965 },
  /** Martin Luther King was assassinated in Memphis on 4 April 1968. */
  kingKilled: { day: 4, month: 'April', year: 1968 },
} as const;

export const BLACK_POWER = {
  /** Stokely Carmichael used the slogan "Black Power" in June 1966. */
  slogan: { month: 'June', year: 1966 },
  /** The Black Panther Party was founded in Oakland, California, in October 1966 by Huey Newton and Bobby Seale. */
  panthers: { month: 'October', year: 1966 },
  /** The Watts uprising in Los Angeles: August 1965. */
  watts: { month: 'August', year: 1965 },
  /** Malcolm X was assassinated in New York on 21 February 1965; he left the Nation of Islam in 1964. */
  malcolmKilled: { day: 21, month: 'February', year: 1965 },
  malcolmLeftNoi: { year: 1964 },
} as const;

export const WOMEN_AND_PEACE = {
  /** Betty Friedan's The Feminine Mystique: 1963. The National Organization for Women: 1966. */
  feminineMystique: { year: 1963 },
  now: { year: 1966 },
  /** The Federation of South African Women (FEDSAW) was founded in April 1954. */
  fedsaw: { month: 'April', year: 1954 },
  /** The women's march against passes to the Union Buildings in Pretoria: 9 August 1956 (about 20 000 women). */
  womensMarch: { day: 9, month: 'August', year: 1956, women: 20000 },
  /** The Black Sash was founded in 1955. */
  blackSash: { year: 1955 },
  /** The Campaign for Nuclear Disarmament (CND) was founded in Britain in 1958. */
  cnd: { year: 1958 },
  /** The Moratorium to End the War in Vietnam: 15 October 1969. */
  moratorium: { day: 15, month: 'October', year: 1969 },
} as const;

/** "1 December 1955" */
export const dateText = (d: { day?: number; month?: string; year: number }): string => [d.day, d.month, d.year].filter((x) => x !== undefined).join(' ');
