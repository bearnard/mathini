import type { SubjectConfig } from '../caps/types';
import accGr10Term1 from './tasks/acc-gr10-term1.json';
import accGr10Term2 from './tasks/acc-gr10-term2.json';
import accGr10Term3 from './tasks/acc-gr10-term3.json';
import accGr10Term4 from './tasks/acc-gr10-term4.json';
import accGr11Term1 from './tasks/acc-gr11-term1.json';
import accGr11Term2 from './tasks/acc-gr11-term2.json';
import accGr11Term3 from './tasks/acc-gr11-term3.json';
import accGr11Term4 from './tasks/acc-gr11-term4.json';
import accGr12Term1 from './tasks/acc-gr12-term1.json';
import accGr12Term2 from './tasks/acc-gr12-term2.json';
import accGr12Term3 from './tasks/acc-gr12-term3.json';
import accGr12Term4 from './tasks/acc-gr12-term4.json';

export const acc: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are an Accounting teacher (CAPS, FET Phase, South Africa) creating Grade ${grade} multiple-choice practice for ${age}-year-old learners. ` +
      `Generate {count} varied, age-appropriate items. Each item must have: a clear, simply-worded question about Grade ${grade} accounting concepts from the given CAPS topic, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short, friendly explanation. ` +
      'Focus on South African accounting terminology, calculations, financial reporting, internal control, ethics and interpretation where relevant. Use realistic rand amounts when helpful. Do not repeat items.'
    );
  },
  tasks: {
    ...accGr10Term1.tasks,
    ...accGr10Term2.tasks,
    ...accGr10Term3.tasks,
    ...accGr10Term4.tasks,
    ...accGr11Term1.tasks,
    ...accGr11Term2.tasks,
    ...accGr11Term3.tasks,
    ...accGr11Term4.tasks,
    ...accGr12Term1.tasks,
    ...accGr12Term2.tasks,
    ...accGr12Term3.tasks,
    ...accGr12Term4.tasks,
  },
};
