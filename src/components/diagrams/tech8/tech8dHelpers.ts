import { r3 } from '../round';

/** Rules and numbers for the Grade 8 Technology Term 4 lessons: electrochemical and solar cells, generating electricity and the national grid, resistors, Ohm's law (qualitative) and logic gates.
 * Ohm's law is qualitative in Grade 8 (no calculations), as the CAPS says. Tested in tech8dHelpers.test.ts. */

// ---------- cells and batteries ----------

export const CELL_VOLTS = 1.5; // a typical dry cell
/** Identical cells in series add their voltages. */
export const seriesVolts = (cells: number, volts = CELL_VOLTS): number => r3(cells * volts);
/** Identical cells in parallel keep the voltage of one cell but can supply current for longer. */
export const parallelVolts = (_cells: number, volts = CELL_VOLTS): number => volts;
/** If one cell lasts h hours, n identical cells in parallel last about n times as long (same load). */
export const parallelLifetime = (cells: number, hours: number): number => r3(cells * hours);
export const SOURCES = [
  { name: 'electrochemical cell', energy: 'chemical energy to electrical energy' },
  { name: 'fruit, vegetable or salt-water battery', energy: 'chemical energy to electrical energy (a small voltage)' },
  { name: 'photovoltaic (solar) cell', energy: 'light energy to electrical energy' },
  { name: 'generator', energy: 'movement (kinetic energy) to electrical energy' },
] as const;
export const SOLAR = { advantages: ['uses a renewable source: sunlight', 'no fuel is burned while making electricity'], disadvantages: ['works only when the sun shines', 'the panels cost a lot to buy'] } as const;
export const SERIES_PARALLEL = { series: 'higher voltage', parallel: 'longer life at the same voltage' } as const;

// ---------- generating electricity and the grid ----------

export const POWER_STATIONS = [
  { type: 'thermal', how: 'heat boils water to make steam that turns a turbine', sources: ['coal', 'gas', 'nuclear', 'sun'] },
  { type: 'hydroelectric', how: 'falling water turns a turbine (pumped storage pumps water back uphill)', sources: ['water'] },
  { type: 'wind', how: 'moving air turns the blades of a turbine', sources: ['wind'] },
] as const;
export const GRID_STAGES = ['power station', 'step-up transformer', 'transmission lines', 'step-down transformer', 'homes and industry'] as const;
/** Step-up raises the voltage (fewer turns on the primary coil), step-down lowers it. */
export const transformerType = (primaryTurns: number, secondaryTurns: number): 'step-up' | 'step-down' | 'neither' => (secondaryTurns > primaryTurns ? 'step-up' : secondaryTurns < primaryTurns ? 'step-down' : 'neither');
export const CURRENT_TYPE = 'alternating current (AC), because its voltage can be changed by a transformer';
export const IMPACT_ISSUES = {
  rural: 'many rural and informal households use wood, paraffin or candles for heating, lighting and cooking',
  illegal: 'illegal connections are unsafe and unfair, and they overload the supply',
  equitable: 'industry needs reliable power for job creation and schools need power for lighting and computing',
} as const;

// ---------- Ohm's law (qualitative), resistors and logic ----------

/** Qualitative Ohm's law: more voltage gives more current if the resistance does not change; more resistance gives less current at the same voltage. */
export const currentChange = (cause: 'more cells in series' | 'more resistance in series' | 'more resistors in parallel'): 'increases' | 'decreases' =>
  cause === 'more cells in series' ? 'increases' : cause === 'more resistance in series' ? 'decreases' : 'increases';
export const AND = (a: boolean, b: boolean): boolean => a && b;
export const OR = (a: boolean, b: boolean): boolean => a || b;
export const truthTable = (gate: 'AND' | 'OR'): { a: 0 | 1; b: 0 | 1; out: 0 | 1 }[] => {
  const rows: { a: 0 | 1; b: 0 | 1; out: 0 | 1 }[] = [];
  for (const a of [0, 1] as const) for (const b of [0, 1] as const) rows.push({ a, b, out: (gate === 'AND' ? AND(!!a, !!b) : OR(!!a, !!b)) ? 1 : 0 });
  return rows;
};
/** Wiring: switches in series make an AND condition; switches in parallel make an OR condition. */
export const wiringFor = (gate: 'AND' | 'OR'): 'series' | 'parallel' => (gate === 'AND' ? 'series' : 'parallel');
export const panicButtonGate = 'OR'; // any one of the panic buttons must trigger the alarm
export const SYMBOLS = ['cell', 'battery', 'switch', 'lamp', 'resistor', 'buzzer', 'motor'] as const;
export const DEVICE_ROLES = { input: ['electrochemical cell', 'generator', 'solar panel'], output: ['resistor', 'lamp', 'heater', 'buzzer', 'motor'], control: ['switch'] } as const;
export const roleOf = (device: string): 'input' | 'output' | 'control' | 'unknown' =>
  (Object.keys(DEVICE_ROLES) as ('input' | 'output' | 'control')[]).find((r) => (DEVICE_ROLES[r] as readonly string[]).includes(device)) ?? 'unknown';
