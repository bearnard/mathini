import type { SubjectConfig } from '../caps/types';
// The grade-6 instruction sets were authored under subject codes WITHOUT a
// grade prefix (eng-term*, lsk-term*, xho-term*) but were never wired into a
// SubjectConfig — grade 6 ships under the single `/api/caps/grade6` code, so it
// spans English, Life Skills, isiXhosa and Mathematics here.
import mathGr6Term1 from './tasks/math-gr6-term1.json';
import mathGr6Term2 from './tasks/math-gr6-term2.json';
import mathGr6Term3 from './tasks/math-gr6-term3.json';
import mathGr6Term4 from './tasks/math-gr6-term4.json';
import engTerm1 from './tasks/eng-term1.json';
import engTerm2 from './tasks/eng-term2.json';
import engTerm3 from './tasks/eng-term3.json';
import engTerm4 from './tasks/eng-term4.json';
import lskTerm1 from './tasks/lsk-term1.json';
import lskTerm2 from './tasks/lsk-term2.json';
import lskTerm3 from './tasks/lsk-term3.json';
import lskTerm4 from './tasks/lsk-term4.json';
import xhoTerm1 from './tasks/xho-term1.json';
import xhoTerm2 from './tasks/xho-term2.json';
import xhoTerm3 from './tasks/xho-term3.json';
import xhoTerm4 from './tasks/xho-term4.json';
import afrGr6 from './tasks/afr-gr6.json';
import engGr6TextTypes from './tasks/eng-gr6-text-types.json';

const ISIXHOSA_DIRECTIVE =
  ' Write every question, all four options and the explanation in isiXhosa.';

/** Appends the isiXhosa language directive to each instruction. */
function inIsixhosa(tasks: Record<string, string>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(tasks).map(([k, v]) => [k, v + ISIXHOSA_DIRECTIVE]),
  );
}

// Grade 6 is the legacy pool that originally shipped under /api/caps/grade6 and
// the cron top-up generator. It spans several subjects under one code, so the
// preamble stays general and each task instruction carries the topic scope (and
// isiXhosa tasks carry the language they must be written in).
export const grade6: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are a South African Grade ${grade} teacher (CAPS, Intermediate Phase) creating multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied, age-appropriate items. Each item must have: a clear question, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short friendly explanation. ' +
      'Use familiar South African contexts (local places, names, food, nature). Follow the exact topic scope given for each item, including the language it must be written in. Do not repeat items. ' +
      'Number format (South Africa, as in the Grade 6 lessons): write decimals and money with a decimal COMMA (3,5 km; R18,50), separate thousands with a space (1 000), and write times with a colon (14:30). Never use a decimal point in a number or a time.'
    );
  },
  tasks: {
    ...mathGr6Term1.tasks,
    ...mathGr6Term2.tasks,
    ...mathGr6Term3.tasks,
    ...mathGr6Term4.tasks,
    ...engTerm1.tasks,
    ...engTerm2.tasks,
    ...engTerm3.tasks,
    ...engTerm4.tasks,
    ...lskTerm1.tasks,
    ...lskTerm2.tasks,
    ...lskTerm3.tasks,
    ...lskTerm4.tasks,
    ...inIsixhosa(xhoTerm1.tasks),
    ...inIsixhosa(xhoTerm2.tasks),
    ...inIsixhosa(xhoTerm3.tasks),
    ...inIsixhosa(xhoTerm4.tasks),
    // Grade 6 Afrikaans: scope written from each lesson and bank (the 16 slugs had none, so they were generated from the bare slug).
    ...afrGr6.tasks,
    // Grade 6 English text types (Wave A): ids start with eng6- so they are never taken for Maths (the gr6- prefix).
    ...engGr6TextTypes.tasks,
  },
};
