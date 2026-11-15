/**
 * Dated events for the Grade 7 Cape frontiers and Grade 8 World War I lessons. The dates are the
 * ones in the topics' own timelines and question banks. The pictures place each event by its
 * date, so the spacing is proportional to time and the order cannot be wrong.
 */

export interface DatedEvent { year: number; label: string; detail: string }

/** Grade 7, Term 4: the Cape frontiers, 1795 to 1836. */
export const CAPE_EVENTS: DatedEvent[] = [
  { year: 1795, label: 'Britain occupies the Cape', detail: 'Britain seized the Cape Colony during the wars with revolutionary France' },
  { year: 1811, label: 'Fourth Frontier War', detail: '1811 to 1812: British-led forces drove many Xhosa out of the Zuurveld, across the Fish River to the east' },
  { year: 1819, label: 'Nxele attacks Grahamstown', detail: 'Xhosa forces led by Maqana Nxele resisted colonial expansion' },
  { year: 1820, label: 'British settlers arrive', detail: 'thousands of settlers placed in the eastern Cape' },
  { year: 1834, label: 'Slavery abolished', detail: 'legally abolished at the Cape; freed people still faced inequality' },
  { year: 1836, label: 'Great Trek begins', detail: 'many Boers moved inland from the Cape Colony' },
];

/** Grade 8, Term 4: World War I and after, 1914 to 1919. Fractions of a year place events within it. */
export const WW1_EVENTS: DatedEvent[] = [
  { year: 1914.49, label: 'Archduke assassinated', detail: '28 June 1914, Sarajevo' },
  { year: 1914.6, label: 'War spreads', detail: 'August 1914: alliances draw in many countries' },
  { year: 1916.5, label: 'Delville Wood', detail: 'July 1916: South African troops fight in France' },
  { year: 1917.14, label: 'SS Mendi sinks', detail: '21 February 1917: over 600 Black South Africans died' },
  { year: 1918.86, label: 'Armistice', detail: '11 November 1918: fighting stops' },
  { year: 1919.49, label: 'Treaty of Versailles', detail: '1919: harsh terms on Germany' },
];

/** The x position of each event on a strip from x0 to x1, proportional to its date. */
export const positions = (events: DatedEvent[], x0: number, x1: number): number[] => {
  const lo = events[0].year;
  const hi = events[events.length - 1].year;
  return events.map((e) => x0 + ((e.year - lo) / (hi - lo)) * (x1 - x0));
};

/** True when every event is dated after the one before it. */
export const inOrder = (events: DatedEvent[]): boolean => events.every((e, i) => i === 0 || e.year > events[i - 1].year);

/** Whole years between two events. */
export const yearsBetween = (a: DatedEvent, b: DatedEvent): number => Math.floor(b.year) - Math.floor(a.year);
