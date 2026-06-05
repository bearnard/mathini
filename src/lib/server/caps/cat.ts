import type { SubjectConfig } from '../caps/types';
import catGr10Term1 from './tasks/cat-gr10-term1.json';
import catGr10Term2 from './tasks/cat-gr10-term2.json';
import catGr10Term3 from './tasks/cat-gr10-term3.json';
import catGr10Term4 from './tasks/cat-gr10-term4.json';
import catGr11Term1 from './tasks/cat-gr11-term1.json';
import catGr11Term2 from './tasks/cat-gr11-term2.json';
import catGr11Term3 from './tasks/cat-gr11-term3.json';
import catGr11Term4 from './tasks/cat-gr11-term4.json';
import catGr12Term1 from './tasks/cat-gr12-term1.json';
import catGr12Term2 from './tasks/cat-gr12-term2.json';
import catGr12Term3 from './tasks/cat-gr12-term3.json';
import catGr12Term4 from './tasks/cat-gr12-term4.json';

export const cat: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are a Computer Applications Technology teacher (CAPS, FET Phase, South Africa) creating Grade ${grade} multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied, age-appropriate items. Each item must have: a clear, simply-worded question about CAPS CAT concepts for the requested grade, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short, friendly explanation. ' +
      'Focus on systems technologies, hardware and software, digital communication, networks, internet and web design, solution development, information management, spreadsheets, databases, documents, security and social implications. Keep language accurate and South African. Do not repeat items.'
    );
  },
  tasks: {
    ...catGr10Term1.tasks,
    ...catGr10Term2.tasks,
    ...catGr10Term3.tasks,
    ...catGr10Term4.tasks,
    ...catGr11Term1.tasks,
    ...catGr11Term2.tasks,
    ...catGr11Term3.tasks,
    ...catGr11Term4.tasks,
    ...catGr12Term1.tasks,
    ...catGr12Term2.tasks,
    ...catGr12Term3.tasks,
    ...catGr12Term4.tasks,
  },
};
