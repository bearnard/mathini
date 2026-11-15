/** Exam time plan: one ninth planning, two thirds writing, two ninths editing (45 minutes gives 5, 30 and 10). */
export const writingTimePlan = (total: number) => {
  const plan = Math.round(total / 9);
  const edit = Math.round((total * 2) / 9);
  return { total, plan, write: total - plan - edit, edit };
};
