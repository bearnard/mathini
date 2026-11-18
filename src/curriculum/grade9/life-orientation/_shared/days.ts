/** National and international days in the Grade 9 CAPS list. Dates are asserted in lo9Gaps.test.ts. */
export const DAYS = [
  { name: 'Human Rights Day', day: 21, month: 'March', meaning: 'remembers Sharpeville in 1960 and celebrates the rights in the Constitution' },
  { name: 'Freedom Day', day: 27, month: 'April', meaning: 'marks the first democratic election in 1994' },
  { name: "Workers' Day", day: 1, month: 'May', meaning: 'honours the rights and contribution of workers' },
  { name: 'Africa Day', day: 25, month: 'May', meaning: 'celebrates African unity' },
  { name: 'Youth Day', day: 16, month: 'June', meaning: 'remembers the 1976 Soweto uprising and young people' },
  { name: 'World Refugee Day', day: 20, month: 'June', meaning: 'honours refugees and their courage' },
  { name: 'Nelson Mandela Day', day: 18, month: 'July', meaning: 'invites everyone to give 67 minutes to help others' },
  { name: "Women's Day", day: 9, month: 'August', meaning: 'remembers the women who marched to the Union Buildings in 1956' },
  { name: 'Heritage Day', day: 24, month: 'September', meaning: 'celebrates the many cultures of South Africa' },
  { name: 'Reconciliation Day', day: 16, month: 'December', meaning: 'promotes reconciliation and national unity' },
] as const;
export const dayDate = (name: string) => {
  const d = DAYS.find((x) => x.name === name);
  if (!d) throw new Error(name);
  return `${d.day} ${d.month}`;
};
