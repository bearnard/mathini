/**
 * Grade 11 Geography gap lessons: droughts and desertification, frameworks for development, aerial photographs and orthophoto maps, atlases and fieldwork.
 * All data are imaginary teaching data. Every number a lesson shows comes from here, and geo11.test.ts and g11GeoGaps.test.ts recompute them independently.
 */
const r2 = (n: number) => Math.round(n * 100) / 100;
export const dec = (n: number) => String(n).replace('.', ',');
export const sp = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

// ---------- droughts ----------
/** Imaginary town of Kopano: long-term mean rainfall 500 mm and a five-year record. */
export const MEAN_RAIN = 500;
export const RECORD = [
  { year: 'Year 1', mm: 520 },
  { year: 'Year 2', mm: 470 },
  { year: 'Year 3', mm: 330 },
  { year: 'Year 4', mm: 300 },
  { year: 'Year 5', mm: 480 },
] as const;
/** In these lessons a year counts as a drought year when rainfall is below 75% of the long-term mean. */
export const DROUGHT_LIMIT = 75;
export const percentOfMean = (mm: number, mean = MEAN_RAIN) => r2((mm / mean) * 100);
export const deficit = (mm: number, mean = MEAN_RAIN) => mean - mm;
export const isDroughtYear = (mm: number, mean = MEAN_RAIN) => percentOfMean(mm, mean) < DROUGHT_LIMIT;
export const droughtYears = () => RECORD.filter((r) => isDroughtYear(r.mm));
export const totalDeficit = () => droughtYears().reduce((a, r) => a + deficit(r.mm), 0);

/** Maize yield in tons per hectare: normal year against a drought year, rain-fed against irrigated. */
export const YIELD = { rainfedNormal: 3, rainfedDrought: 1.2, irrigatedNormal: 3, irrigatedDrought: 2.7 } as const;
export const lossPercent = (normal: number, drought: number) => r2(((normal - drought) / normal) * 100);

// ---------- desertification: overgrazing ----------
export const FARM = { hectares: 400, hectaresPerAnimal: 8, animals: 80 } as const;
export const carryingCapacity = (hectares = FARM.hectares, haPerAnimal = FARM.hectaresPerAnimal) => hectares / haPerAnimal;
export const overstocked = (animals = FARM.animals) => animals - carryingCapacity();
export const overstockPercent = (animals = FARM.animals) => r2((overstocked(animals) / carryingCapacity()) * 100);

// ---------- frameworks for development ----------
/** Imaginary country trade figures in billions of rand: exports less imports. */
export const TRADE = { exports: 84, imports: 96 } as const;
export const tradeBalance = (e = TRADE.exports, i = TRADE.imports) => e - i;
/** Rule of 70: years for a population to double = 70 ÷ growth rate in percent. */
export const doublingYears = (ratePercent: number) => r2(70 / ratePercent);
export const perCapitaGrowthApprox = (gdpGrowth: number, popGrowth: number) => r2(gdpGrowth - popGrowth);
/** Investment as a share of GDP, used to describe Rostow's take-off. */
export const investmentShare = (investment: number, gdp: number) => r2((investment / gdp) * 100);
export const TAKE_OFF = { investment: 12, gdp: 100 } as const;

export const ROSTOW = [
  { stage: 'Traditional society', clue: 'most people farm for their own needs' },
  { stage: 'Preconditions for take-off', clue: 'trade, banks and transport grow' },
  { stage: 'Take-off', clue: 'investment rises and leading industries grow fast' },
  { stage: 'Drive to maturity', clue: 'many industries and new technology' },
  { stage: 'Age of high mass consumption', clue: 'most people buy goods and services beyond basic needs' },
] as const;

/** A community savings group: members and a monthly contribution. */
export const GROUP = { members: 20, monthly: 50 } as const;
export const groupPerMonth = () => GROUP.members * GROUP.monthly;
export const groupPerYear = () => groupPerMonth() * 12;

// ---------- aerial photographs and orthophoto maps ----------
import { groundMetres, mapCmFor, scaleDenominator, hectares, areaKm2 } from '../geography/mapwork';
export const ORTHO = 10000;
export const TOPO = 50000;
/** A field that measures 3 cm by 2 cm on a 1:10 000 orthophoto map. */
export const FIELD = { lengthCm: 3, breadthCm: 2 } as const;
export const fieldGround = () => ({ length: groundMetres(FIELD.lengthCm, ORTHO), breadth: groundMetres(FIELD.breadthCm, ORTHO) });
export const fieldHectares = () => hectares(areaKm2(fieldGround().length / 1000, fieldGround().breadth / 1000));
/** One kilometre on each map. */
export const oneKmCm = (denominator: number) => mapCmFor(1000, denominator);
/** A photograph where 5 cm show 750 m of ground. */
export const PHOTO = { cm: 5, ground: 750 } as const;
export const photoScale = () => scaleDenominator(PHOTO.cm, PHOTO.ground);
/** A road joining two features, 7 cm on the 1:10 000 orthophoto map. */
export const roadOnOrtho = 7;
export const roadGround = () => groundMetres(roadOnOrtho, ORTHO);
export const roadOnTopo = () => mapCmFor(roadGround(), TOPO);

// ---------- atlases ----------
export const COLS = ['A', 'B', 'C', 'D', 'E', 'F'] as const;
export const gridRef = (col: number, row: number) => `${COLS[col - 1]}${row}`;
/** Atlas index entries, imaginary page grid with six columns and five rows. */
export const INDEX = [
  { place: 'Durban', ref: gridRef(4, 3) },
  { place: 'Bloemfontein', ref: gridRef(3, 2) },
  { place: 'Cape Town', ref: gridRef(1, 5) },
] as const;
/** Equal-area against true-direction: Africa and Greenland, in millions of km². */
export const AREA = { africa: 30.4, greenland: 2.17 } as const;
export const areaRatio = () => r2(AREA.africa / AREA.greenland);

// ---------- fieldwork ----------
export const WEEK = [
  { day: 'Mon', max: 24, min: 11, rain: 0 },
  { day: 'Tue', max: 26, min: 12, rain: 0 },
  { day: 'Wed', max: 23, min: 13, rain: 6 },
  { day: 'Thu', max: 20, min: 12, rain: 14 },
  { day: 'Fri', max: 23, min: 10, rain: 4 },
  { day: 'Sat', max: 25, min: 9, rain: 0 },
  { day: 'Sun', max: 27, min: 10, rain: 0 },
] as const;
export const weekRain = () => WEEK.reduce((a, d) => a + d.rain, 0);
export const meanMax = () => r2(WEEK.reduce((a, d) => a + d.max, 0) / WEEK.length);
export const hottest = () => WEEK.reduce((a, d) => (d.max > a.max ? d : a));
export const dailyRange = (d: { max: number; min: number }) => d.max - d.min;
export const rainyDays = () => WEEK.filter((d) => d.rain > 0).length;
