/**
 * Population density of the South African provinces, computed, never typed.
 *
 * OFFICIAL SOURCE: Statistics South Africa, "Census 2022: Provinces at a glance", Report No.
 * 03-01-43, ISBN 978-0-621-51559-6, Pretoria, 2023.
 * https://census.statssa.gov.za/assets/documents/2022/Provinces_at_a_Glance.pdf
 *  - population: the "Person indicators per municipality" table of each province, row for the
 *    province, column CENSUS 2022 > Total population.
 *  - land area: "Table 1.1: Geographical land area per province (2011-2018)", column "Area in
 *    square kilometers 2018" (the provincial areas are unchanged since 2011).
 * Cross-check: the nine populations add up to 62 027 503, the national count Stats SA published.
 */

export interface Province {
  id: string;
  name: string;
  /** Census 2022 total population. */
  population: number;
  /** Land area in square kilometres. */
  area: number;
}

export const PROVINCES: readonly Province[] = [
  { id: 'western-cape', name: 'Western Cape', population: 7_433_020, area: 129_462 },
  { id: 'eastern-cape', name: 'Eastern Cape', population: 7_230_204, area: 168_966 },
  { id: 'northern-cape', name: 'Northern Cape', population: 1_355_945, area: 372_889 },
  { id: 'free-state', name: 'Free State', population: 2_964_412, area: 129_825 },
  { id: 'kwazulu-natal', name: 'KwaZulu-Natal', population: 12_423_907, area: 94_361 },
  { id: 'north-west', name: 'North West', population: 3_804_548, area: 104_882 },
  { id: 'gauteng', name: 'Gauteng', population: 15_099_422, area: 18_178 },
  { id: 'mpumalanga', name: 'Mpumalanga', population: 5_143_324, area: 76_495 },
  { id: 'limpopo', name: 'Limpopo', population: 6_572_721, area: 125_754 },
];

/** People per square kilometre. */
export const density = (population: number, area: number): number => population / area;

/** For display: "about 830" (nearest 10 from 100 up), "about 52" (nearest 1 below). */
export const roundDensity = (d: number): number => (d >= 100 ? Math.round(d / 10) * 10 : Math.round(d));

export const provinceDensity = (name: string): number => {
  const p = PROVINCES.find((x) => x.name === name);
  if (!p) throw new Error(`unknown province ${name}`);
  return roundDensity(density(p.population, p.area));
};

/** Rows for the Term 4 density chart, in the order given. */
export const densityRows = (names: readonly string[]): { province: string; density: number }[] =>
  names.map((n) => ({ province: n, density: provinceDensity(n) }));
