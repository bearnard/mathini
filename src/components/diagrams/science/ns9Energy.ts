/**
 * Grade 9 Natural Sciences, Terms 3 and 4 (forces, safety with electricity, electricity generation and the national grid, cost of electrical power,
 * the atmosphere). Every number in a lesson, picture or bank key comes from these functions; ns9Energy.test.ts pins the values. No React here.
 * Money is in rand with a decimal comma. The unit price of electricity is ALWAYS given in a question, never assumed (CAPS: it changes from time to time).
 */

// ---------------------------------------------------------------- forces: mass and weight
/** g on Earth in N/kg, rounded from 9,8 as in the lessons. */
export const G_EARTH = 10;
/** Weight in newtons from mass in kg and g in N/kg. 60 kg on Earth -> 600 N. */
export const weight = (massKg: number, g: number = G_EARTH): number => Math.round(massKg * g * 1e6) / 1e6;
/** The Moon's g is about one sixth of the Earth's. */
export const moonG = (gEarth: number = G_EARTH): number => Math.round((gEarth / 6) * 100) / 100;
/** Mass from weight and g. 600 N on Earth -> 60 kg. */
export const massFromWeight = (weightN: number, g: number = G_EARTH): number => Math.round((weightN / g) * 1e6) / 1e6;
/** The resultant of forces along one line (right positive, left negative): two forces of 5 N and 3 N in opposite directions give 2 N. */
export const resultant = (forces: readonly number[]): number => forces.reduce((a, b) => a + b, 0);

// ---------------------------------------------------------------- safety: parallel circuits and overload
/** In a parallel circuit the total current is the sum of the currents through the branches. */
export const totalCurrent = (branches: readonly number[]): number => Math.round(branches.reduce((a, b) => a + b, 0) * 1e6) / 1e6;
/** A circuit breaker or fuse of the given rating trips when the total current is more than the rating. */
export const overloaded = (branches: readonly number[], ratingA: number): boolean => totalCurrent(branches) > ratingA;
/** How many amps over the rating. */
export const amountOver = (branches: readonly number[], ratingA: number): number => Math.max(0, totalCurrent(branches) - ratingA);

// ---------------------------------------------------------------- the national grid
/** The share of the energy delivered after a percentage is lost as heat in lines and transformers (15%: 100 MWh sent -> 85 MWh). */
export const delivered = (sentMWh: number, lossPercent = 15): number => Math.round(sentMWh * (1 - lossPercent / 100) * 1e6) / 1e6;
export const lost = (sentMWh: number, lossPercent = 15): number => Math.round(sentMWh * (lossPercent / 100) * 1e6) / 1e6;
/** Energy that must be sent into the grid so that `deliveredMWh` arrives, with 15% lost: delivered / 0,85. */
export const mustSend = (deliveredMWh: number, lossPercent = 15): number => Math.round((deliveredMWh / (1 - lossPercent / 100)) * 1e6) / 1e6;

// ---------------------------------------------------------------- cost of electrical power
/** 1 kW = 1 000 W. */
export const kW = (watts: number): number => watts / 1000;
/** Energy in kWh = power in kW x time in hours. A 2 000 W kettle used for 0,5 h -> 1 kWh. */
export const kWh = (watts: number, hours: number): number => Math.round(kW(watts) * hours * 1e6) / 1e6;
/** Cost in rand = kWh x price per kWh (the price is given). */
export const cost = (watts: number, hours: number, pricePerKWh: number): number => Math.round(kWh(watts, hours) * pricePerKWh * 100) / 100;
/** Hours a prepaid amount lasts for one appliance: amount / price gives kWh, kWh / kW gives hours. */
export const hoursPrepaid = (amountRand: number, pricePerKWh: number, watts: number): number => Math.round((amountRand / pricePerKWh / kW(watts)) * 1e6) / 1e6;
/** Saving in rand over `hours` when a lamp of `oldW` watts is replaced by one of `newW` watts. */
export const lampSaving = (oldW: number, newW: number, hours: number, pricePerKWh: number): number => Math.round((kWh(oldW, hours) - kWh(newW, hours)) * pricePerKWh * 100) / 100;
/** One watt is one joule per second: the energy in joules used by an appliance of `watts` in `seconds`. */
export const joules = (watts: number, seconds: number): number => watts * seconds;
/** Rand written with a decimal comma and two decimals when needed: 2,5 -> "R2,50", 150 -> "R150,00" is written "R150". */
export const rand = (n: number): string => {
  const whole = Number.isInteger(n);
  const text = whole ? String(n) : n.toFixed(2).replace('.', ',');
  return `R${text.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`;
};

// ---------------------------------------------------------------- the atmosphere
export const AIR: readonly { gas: string; percent: number }[] = [
  { gas: 'Nitrogen', percent: 78 },
  { gas: 'Oxygen', percent: 21 },
  { gas: 'Carbon dioxide and other gases, including water vapour', percent: 1 },
];
export const airTotal = (): number => AIR.reduce((a, g) => a + g.percent, 0);
/** Temperature in the troposphere at a height: it falls about 1 °C for every 100 m in still air. */
export const tempAtHeight = (surfaceC: number, heightM: number): number => Math.round((surfaceC - heightM / 100) * 100) / 100;
/** The height at which the temperature has fallen to `targetC`. */
export const heightForTemp = (surfaceC: number, targetC: number): number => Math.round((surfaceC - targetC) * 100);
/** Layers of the atmosphere with the heights (km) given in the CAPS: troposphere to about 10 km, stratosphere about 10 to 50 km, mesosphere above it to about 80 km, thermosphere above 80 km. */
export const LAYERS: readonly { name: string; fromKm: number; toKm: number }[] = [
  { name: 'Troposphere', fromKm: 0, toKm: 10 },
  { name: 'Stratosphere', fromKm: 10, toKm: 50 },
  { name: 'Mesosphere', fromKm: 50, toKm: 80 },
  { name: 'Thermosphere', fromKm: 80, toKm: 350 },
];
export const thickness = (name: string): number => { const l = LAYERS.find((x) => x.name === name); return l ? l.toKm - l.fromKm : NaN; };
/** Length on a scale drawing: `km` of height at `kmPerCm` km to the centimetre. */
export const drawnCm = (km: number, kmPerCm: number): number => Math.round((km / kmPerCm) * 1e6) / 1e6;
