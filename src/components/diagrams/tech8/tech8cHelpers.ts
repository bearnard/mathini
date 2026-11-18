import { r3 } from '../round';

/** Rules and numbers for the Grade 8 Technology Term 3 lessons: gear systems and mechanical advantage, bicycle gears and systems diagrams, mining technology, impact and bias.
 * Tested in tech8cHelpers.test.ts. Gears: the driver turns the driven gear; the ratio is found from the numbers of teeth (or the diameters). */

// ---------- gears ----------

/** Velocity ratio (output speed ÷ input speed) of a driver and a driven gear: driver teeth ÷ driven teeth. */
export const velocityRatio = (driverTeeth: number, drivenTeeth: number): number => r3(driverTeeth / drivenTeeth);
/** Mechanical advantage (output force ÷ input force) of a gear pair, ignoring friction: driven teeth ÷ driver teeth. */
export const gearMA = (driverTeeth: number, drivenTeeth: number): number => r3(drivenTeeth / driverTeeth);
export const outputSpeed = (inputRpm: number, driverTeeth: number, drivenTeeth: number): number => r3((inputRpm * driverTeeth) / drivenTeeth);
export const outputForce = (inputForce: number, driverTeeth: number, drivenTeeth: number): number => r3((inputForce * drivenTeeth) / driverTeeth);
/** The same ratio from diameters (the teeth are the same size, so teeth are proportional to diameter). */
export const maFromDiameters = (driverMm: number, drivenMm: number): number => r3(drivenMm / driverMm);
/** Force multiplication and speed multiplication trade off: MA × VR = 1 for an ideal gear pair. */
export const tradeOff = (driver: number, driven: number): number => r3((driven / driver) * (driver / driven));
export const effectOf = (driverTeeth: number, drivenTeeth: number): 'force increases and speed decreases' | 'speed increases and force decreases' | 'no change in force or speed' =>
  drivenTeeth > driverTeeth ? 'force increases and speed decreases' : drivenTeeth < driverTeeth ? 'speed increases and force decreases' : 'no change in force or speed';
/** Direction of the nth gear in a train of meshing spur gears (1 = driver): each mesh reverses the direction. An idler does not change the ratio. */
export const directionOfGear = (n: number): 'same as the driver' | 'opposite to the driver' => (n % 2 === 1 ? 'same as the driver' : 'opposite to the driver');
/** An idler gear only reverses the direction back; the ratio depends on the driver and the driven gear only. */
export const trainRatio = (driverTeeth: number, drivenTeeth: number, _idlerTeeth: number): number => r3(drivenTeeth / driverTeeth);
export const BEVEL_TURN = 90; // degrees: bevel gears turn the axis of rotation through 90°
/** Design targets from the CAPS: force three times bigger; output speed four times bigger. */
export const designMA3 = { driver: 10, driven: 30 } as const;
export const designSpeed4 = { driver: 40, driven: 10 } as const;

// ---------- bicycle ----------

/** Wheel turns per pedal turn: chain wheel teeth ÷ cog teeth. */
export const wheelTurnsPerPedalTurn = (chainWheel: number, cog: number): number => r3(chainWheel / cog);
export const bicycleGear = (chainWheel: number, cog: number): 'high gear (speed)' | 'low gear (force, for hills)' | 'equal' => (chainWheel / cog > 1 ? 'high gear (speed)' : chainWheel / cog < 1 ? 'low gear (force, for hills)' : 'equal');
export const BICYCLE_TERMS = [
  { term: 'driver (master)', meaning: 'the gear that is turned by the pedals: the chain wheel' },
  { term: 'driven (slave)', meaning: 'the gear that is turned by the chain: the cog on the rear wheel' },
  { term: 'chain wheel', meaning: 'the large front gear attached to the pedals' },
  { term: 'cog', meaning: 'a small gear on the rear wheel' },
] as const;
export const SYSTEM_PARTS = ['input', 'process', 'output'] as const;

// ---------- mining, indigenous technology and bias ----------

export const MINING_ISSUES = {
  acidMineDrainage: 'water that runs through mine rock and waste can become acidic and carry dissolved metals into rivers',
  dust: 'dust from mine dumps blows onto nearby homes and harms health',
  ironAge: 'before the modern era people in South Africa smelted iron in furnaces using charcoal and air blown in through clay pipes',
  genderBias: 'bias is an unfair preference; in the past mining careers were mostly closed to women',
} as const;
export const MINERALS = [
  { mineral: 'gold', where: 'Gauteng and the Free State' },
  { mineral: 'coal', where: 'Mpumalanga and KwaZulu-Natal' },
  { mineral: 'platinum', where: 'Limpopo and North West' },
  { mineral: 'iron and copper', where: 'the Northern Cape and Limpopo' },
] as const;
export const whereMined = (mineral: string): string => MINERALS.find((m) => m.mineral === mineral)!.where;
