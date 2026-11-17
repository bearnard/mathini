// Facts used by the Grade 6 Life Skills (Personal and Social Well-being) lessons, in ONE place. g6LifeSkillsPsw.test.ts asserts them and the lessons are built from them.
// Sources: DBE CAPS Life Skills Grades 4-6 (the list of national days is the CAPS list); each date is a standard, widely documented date.
// Anything that has no fixed date or that is uncertain is NOT here (see docs/notes/g6-life-skills-doubts.md).

export interface NationalDay { name: string; day: number; month: string; what: string }

/** The national days that the CAPS lists (Children's Day has no fixed public-holiday date, so it is not here). */
export const NATIONAL_DAYS: readonly NationalDay[] = [
  { name: 'Human Rights Day', day: 21, month: 'March', what: 'We remember the Sharpeville shootings of 1960 and celebrate our human rights.' },
  { name: 'Freedom Day', day: 27, month: 'April', what: 'We remember the first democratic election of 1994.' },
  { name: 'Africa Day', day: 25, month: 'May', what: 'We celebrate the unity of the people and countries of Africa.' },
  { name: 'Mandela Day', day: 18, month: 'July', what: 'The birthday of Nelson Mandela: we give 67 minutes to help others.' },
  { name: "Women's Day", day: 9, month: 'August', what: 'We remember the women who marched to the Union Buildings in 1956.' },
  { name: 'Heritage Day', day: 24, month: 'September', what: 'We celebrate the cultures, languages and traditions of all our people.' },
  { name: 'Reconciliation Day', day: 16, month: 'December', what: 'We work to bring the people of our country together.' },
];

export const SYMBOLS = {
  /** The flag was first flown on 27 April 1994; it has six colours (black, gold, green, white, chilli red and blue). */
  flag: { adopted: { day: 27, month: 'April', year: 1994 }, colours: 6 },
  /** The national anthem joins Nkosi Sikelel' iAfrika and Die Stem van Suid-Afrika (from 1997) and is sung in five languages. */
  anthem: { languages: 5, joinedYear: 1997 },
  /** The coat of arms was introduced on 27 April 2000. Its motto, !ke e: /xarra //ke, is in the language of the /Xam and means "Diverse people unite". */
  coatOfArms: { year: 2000, motto: '!ke e: /xarra //ke', meaning: 'Diverse people unite' },
} as const;

/** Mandela Day: 67 minutes, one for each year of Nelson Mandela's public service. */
export const MANDELA_MINUTES = 67;

/** The emergency and help numbers a child may need (the first-aid and bullying lessons use them). */
export const HELP_NUMBERS = {
  childline: { number: '116', note: 'free; a helpline for children' },
  ambulance: { number: '10177', note: 'ambulance, from a landline or a cell phone' },
  police: { number: '10111', note: 'police' },
  cellphoneEmergency: { number: '112', note: 'works from a cell phone' },
  poisons: { number: '0861 555 777', note: 'Poisons Information Helpline' },
} as const;
