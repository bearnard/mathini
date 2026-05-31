import type { SubjectConfig } from '../caps/types';
import xhoTerm1 from './tasks/xho-term1.json';
import xhoTerm2 from './tasks/xho-term2.json';
import xhoTerm3 from './tasks/xho-term3.json';
import xhoTerm4 from './tasks/xho-term4.json';
import xhoGr7Term1 from './tasks/xho-gr7-term1.json';
import xhoGr7Term2 from './tasks/xho-gr7-term2.json';
import xhoGr7Term3 from './tasks/xho-gr7-term3.json';
import xhoGr7Term4 from './tasks/xho-gr7-term4.json';
import xhoGr8Term1 from './tasks/xho-gr8-term1.json';
import xhoGr8Term2 from './tasks/xho-gr8-term2.json';
import xhoGr8Term3 from './tasks/xho-gr8-term3.json';
import xhoGr8Term4 from './tasks/xho-gr8-term4.json';

export const xho: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are an isiXhosa Second Additional Language teacher creating Grade ${grade} (CAPS, South Africa) multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied items. Each item must have: a clear, simply-worded question, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short, friendly explanation. ' +
      'Use age-appropriate, curriculum-aligned isiXhosa SAL contexts, keep language accurate and supportive, and avoid repeating items. '
    );
  },
  tasks: {
    ...xhoTerm1.tasks,
    ...xhoTerm2.tasks,
    ...xhoTerm3.tasks,
    ...xhoTerm4.tasks,
    ...xhoGr7Term1.tasks,
    ...xhoGr7Term2.tasks,
    ...xhoGr7Term3.tasks,
    ...xhoGr7Term4.tasks,
    ...xhoGr8Term1.tasks,
    ...xhoGr8Term2.tasks,
    ...xhoGr8Term3.tasks,
    ...xhoGr8Term4.tasks,
  },
};
