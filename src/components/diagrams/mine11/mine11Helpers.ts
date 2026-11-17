/** Numbers and equations for the Grade 11 Physical Sciences mining and mineral processing lesson. Tested in mine11Helpers.test.ts. */

/** The most abundant elements in the Earth's crust, percent by mass (rounded textbook values). */
export const CRUST = [
  { symbol: 'O', name: 'oxygen', percent: 46 },
  { symbol: 'Si', name: 'silicon', percent: 28 },
  { symbol: 'Al', name: 'aluminium', percent: 8 },
  { symbol: 'Fe', name: 'iron', percent: 5 },
] as const;
export const crustShare = (symbols: readonly string[]): number => CRUST.filter((e) => symbols.includes(e.symbol)).reduce((a, e) => a + e.percent, 0);
export const mostAbundant = (): string => CRUST.reduce((a, b) => (b.percent > a.percent ? b : a)).name;
/** The rest of the crust, from all the other elements together. */
export const otherElements = (): number => 100 - crustShare(CRUST.map((e) => e.symbol));

/** Equations used in the lesson. Square brackets hold a complex ion. */
export const EQUATIONS = {
  ironOre: '2Fe2O3 + 3C → 4Fe + 3CO2',
  ironOre2: 'Fe2O3 + 3CO → 2Fe + 3CO2',
  mercury: '2HgO → 2Hg + O2',
  copper: '2CuO + C → 2Cu + CO2',
  goldLeach: '4Au + 8NaCN + O2 + 2H2O → 4Na[Au(CN)2] + 4NaOH',
  goldZinc: '2Na[Au(CN)2] + Zn → Na2[Zn(CN)4] + 2Au',
} as const;

/** Count the atoms on one side of an equation, with () and [] groups and coefficients. */
export function atomsOf(side: string): Record<string, number> {
  const out: Record<string, number> = {};
  const parse = (f: string, mult: number): void => {
    let i = 0;
    const stack: [Record<string, number>, number][] = [];
    let cur: Record<string, number> = {};
    while (i < f.length) {
      const ch = f[i];
      if (ch === '(' || ch === '[') {
        stack.push([cur, 0]);
        cur = {};
        i++;
      } else if (ch === ')' || ch === ']') {
        i++;
        let n = '';
        while (i < f.length && /\d/.test(f[i])) n += f[i++];
        const k = n ? Number(n) : 1;
        const [prev] = stack.pop()!;
        for (const [el, c] of Object.entries(cur)) prev[el] = (prev[el] ?? 0) + c * k;
        cur = prev;
      } else {
        const m = /^([A-Z][a-z]?)(\d*)/.exec(f.slice(i))!;
        cur[m[1]] = (cur[m[1]] ?? 0) + (m[2] ? Number(m[2]) : 1);
        i += m[0].length;
      }
    }
    for (const [el, c] of Object.entries(cur)) out[el] = (out[el] ?? 0) + c * mult;
  };
  for (const term of side.split('+').map((t) => t.trim()).filter(Boolean)) {
    const m = /^(\d*)(.+)$/.exec(term)!;
    parse(m[2], m[1] ? Number(m[1]) : 1);
  }
  return out;
}
export const balanced = (eq: string): boolean => {
  const [l, r] = eq.split('→');
  const a = atomsOf(l), b = atomsOf(r);
  const els = new Set([...Object.keys(a), ...Object.keys(b)]);
  return [...els].every((e) => (a[e] ?? 0) === (b[e] ?? 0));
};
