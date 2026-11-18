/**
 * Grade 10 Accounting gap lessons: VAT, internal control, cost concepts and budgets. Money is in whole cents and every operation is exact integer arithmetic
 * (a helper throws instead of rounding). acc10.test.ts and g10AccGaps.test.ts recompute everything independently (BigInt).
 */
export const exact = (num: number, den: number): number => {
  if (!Number.isInteger(num) || !Number.isInteger(den) || den === 0) throw new Error(`not integers: ${num}/${den}`);
  if (num % den !== 0) throw new Error(`not exact: ${num}/${den}`);
  return num / den;
};
export const VAT_RATE = 15;
export const vatOn = (excl: number): number => exact(excl * VAT_RATE, 100);
export const inclOf = (excl: number): number => excl + vatOn(excl);
export const exclOf = (incl: number): number => exact(incl * 100, 100 + VAT_RATE);
export const vatIn = (incl: number): number => incl - exclOf(incl);

/** A month of a vendor: VAT-able sales and purchases excluding VAT. Output VAT less input VAT is paid to (or refunded by) SARS. */
export const netVat = (salesExcl: number, purchasesExcl: number): number => vatOn(salesExcl) - vatOn(purchasesExcl);
export const MONTH1 = { sales: 8000000, purchases: 5000000 } as const; // R80 000 and R50 000
export const MONTH2 = { sales: 2000000, purchases: 4000000 } as const; // R20 000 and R40 000

// ---------- internal control ----------
export const STOCK = { system: 200, counted: 188, cost: 4500 } as const; // units and rand cents each
export const stockShortage = () => STOCK.system - STOCK.counted;
export const stockLoss = () => stockShortage() * STOCK.cost;
export const CASH = { tillRoll: 1240000, counted: 1225000 } as const;
export const cashShortage = () => CASH.tillRoll - CASH.counted;

// ---------- cost concepts ----------
export const COST = { directMaterials: 4000000, directLabour: 2500000, indirectMaterials: 300000, indirectLabour: 500000, factoryRent: 700000 } as const;
export const primeCost = () => COST.directMaterials + COST.directLabour;
export const factoryOverheads = () => COST.indirectMaterials + COST.indirectLabour + COST.factoryRent;
export const manufacturingCost = () => primeCost() + factoryOverheads();

// ---------- cash budget ----------
export const BUDGET = { opening: 500000, cashSales: 900000, debtors: 300000, payments: 1050000 } as const;
export const budgetReceipts = () => BUDGET.cashSales + BUDGET.debtors;
export const budgetClosing = () => BUDGET.opening + budgetReceipts() - BUDGET.payments;
