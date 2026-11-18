/**
 * Facts and numbers for the Grade 9 EMS lessons on the functions of a business, the business plan with its SWOT analysis, and the financial plan.
 * Every function, plan section, SWOT class and rand amount that a slide, picture or question shows comes from here (ems9-plan.test.ts and g9EmsPlan.test.ts
 * recompute the numbers independently). Amounts are whole rands, so no decimal comma is needed.
 */

// ---------- the nine functions of a business ----------

export interface BusinessFunction {
  name: string;
  role: string;
}

export const FUNCTIONS: readonly BusinessFunction[] = [
  { name: 'Administration', role: 'keeps records, files documents and handles letters and messages' },
  { name: 'Purchasing', role: 'buys goods, materials and equipment from suppliers at the right quality, quantity, price and time' },
  { name: 'Marketing', role: 'finds customers and promotes and sells the products' },
  { name: 'Finances', role: 'manages the money: budgets, payments, records and capital' },
  { name: 'Public relations', role: 'builds and protects a good image of the business with the public' },
  { name: 'Human resources', role: 'recruits, trains, pays and looks after the workers' },
  { name: 'Production', role: 'makes the product or provides the service' },
  { name: 'General management', role: 'plans, organises, leads and controls all the other functions' },
  { name: 'Risk management', role: 'finds risks such as theft, fire and accidents and reduces them' },
];

export const functionNamed = (name: string): BusinessFunction | undefined => FUNCTIONS.find((f) => f.name === name);

// ---------- the business plan ----------

/** The parts of a business plan in the order of the CAPS format. */
export const PLAN_SECTIONS = [
  'Front cover',
  'Table of contents',
  'Description of the product or service',
  'Goals of the business',
  'The business owner',
  'Production plan',
  'Marketing plan',
  'Management plan',
  'SWOT analysis',
  'Conclusion',
] as const;

export const sectionNumber = (name: string): number => PLAN_SECTIONS.indexOf(name as (typeof PLAN_SECTIONS)[number]) + 1;

// ---------- SWOT ----------

export type Swot = 'Strength' | 'Weakness' | 'Opportunity' | 'Threat';

/** Strengths and weaknesses are inside the business; opportunities and threats are outside it. Strengths and opportunities help; weaknesses and threats harm. */
export const swotClass = (inside: boolean, helps: boolean): Swot => (inside ? (helps ? 'Strength' : 'Weakness') : helps ? 'Opportunity' : 'Threat');

export const SWOT_MEANING: Record<Swot, string> = {
  Strength: 'inside the business and helpful',
  Weakness: 'inside the business and harmful',
  Opportunity: 'outside the business and helpful',
  Threat: 'outside the business and harmful',
};

// ---------- the financial plan: whole rands ----------

export interface Costs {
  fixed: number;
  variablePerUnit: number;
}

export const totalVariable = (c: Costs, units: number): number => c.variablePerUnit * units;
export const totalCost = (c: Costs, units: number): number => c.fixed + totalVariable(c, units);
export const sales = (price: number, units: number): number => price * units;
export const profitAt = (c: Costs, price: number, units: number): number => sales(price, units) - totalCost(c, units);

/** The number of units where sales equal total costs, rounded up to a whole unit: fixed costs / (selling price - variable cost per unit). */
export const breakEvenUnits = (c: Costs, price: number): number => Math.ceil(c.fixed / (price - c.variablePerUnit));

/** The mark-up in rand and as a percentage of the cost price. */
export const markUpRand = (cost: number, price: number): number => price - cost;
export const markUpPercent = (cost: number, price: number): number => (markUpRand(cost, price) / cost) * 100;
/** The selling price when a mark-up percentage on cost price is added. */
export const sellingPrice = (cost: number, markUpPct: number): number => cost + (cost * markUpPct) / 100;
/** Profit as a percentage of sales. */
export const profitPercent = (profit: number, salesAmount: number): number => (profit / salesAmount) * 100;

/** The candle stall used in the worked examples. */
export const STALL: Costs & { price: number } = { fixed: 1800, variablePerUnit: 18, price: 30 };
