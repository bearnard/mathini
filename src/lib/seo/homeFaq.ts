// The home page FAQ: shown on the page and published as FAQPage structured data from this one list. Every answer states only what is built.
import { SEO_GRADES } from './curriculumIndex';
import type { Faq } from './adultPages';

const subjects = SEO_GRADES.reduce((n, g) => n + g.subjects.length, 0);

export const HOME_FAQ: Faq[] = [
  { q: 'Is PrepPals free?', a: 'Yes. Practising is free for learners, with no ads.' },
  { q: 'Which grades and subjects are covered?', a: `Grades 5 to 12, across ${subjects} grade-and-subject combinations, from Mathematics and the sciences to languages, commerce, creative arts and life skills. Every topic has its own page, so you can see exactly what is covered.` },
  { q: 'Is it aligned with CAPS?', a: 'Yes. Practice is organised by the CAPS grade, subject, term and topic, so what you practise matches what is taught in class.' },
  { q: 'Do I need an account, and what does it cost?', a: 'To keep your progress you make a free account with a nickname. You get a login code and choose a PIN, and you use them to sign back in. Learners do not need an email address.' },
  { q: 'How do parents follow progress?', a: 'A parent signs in with their email address, links their child with the child’s login code and PIN, and then sees how ready their child is, which topics need work, and gets an optional weekly summary. Parents can also give or withdraw consent and reset a forgotten PIN.' },
  { q: 'How do teachers use it?', a: 'A teacher signs in, applies with their SACE registration number and school, and once we have checked the details can create classes with a join code, set an exam scope and date, and see how the class is doing by nickname.' },
  { q: 'Is my child’s information safe?', a: 'We keep it private. We do not use advertising or third-party analytics and we never sell or share it. A parent sees only the children they linked, and a class teacher sees only a nickname and progress for learners who joined their class. The privacy page explains everything we collect, and a parent or teacher can delete their own account at any time.' },
  { q: 'Does it work on a phone?', a: 'Yes. PrepPals runs in your phone’s browser, so there is nothing to install, and every page is built to work on a small screen.' },
  { q: 'What if a question or an answer is wrong?', a: 'Learners can report a question they think is wrong, and we check it. Questions go through automated quality checks, and lessons are fact-checked.' },
];
