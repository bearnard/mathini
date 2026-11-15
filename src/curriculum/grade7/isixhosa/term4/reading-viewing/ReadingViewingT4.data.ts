import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 7 Term 4 (revision). Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.// Passages and notices are described in English: a teacher supplies isiXhosa examples.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Steps in a comprehension task',
      rule: 'Read the passage carefully first. Then read each question, find the answer in the text and answer in full, clear sentences when needed.',
      workedTitle: 'A safe routine',
      examples: [
        { xh: 'Ibali', en: 'Story: read it once for the whole picture.' },
        { xh: 'Umbuzo', en: 'Question: underline what it asks for.' },
        { xh: 'Impendulo', en: 'Answer: use the text, in a clear sentence.' },
      ],
      mistake: 'Answering from memory without going back to the text.',
    },
    {
      title: 'Summaries',
      rule: 'An isishwankathelo (summary) keeps the main points only. Leave out small details and examples.',
      workedTitle: 'Main points only',
      examples: [
        { xh: 'Isishwankathelo', en: 'Summary: short, only the main points.' },
        { xh: 'Ingcinga', en: 'Idea / thought: each main point is one idea.' },
      ],
      mistake: 'Copying whole sentences. A summary uses fewer words than the text.',
    },
    {
      title: 'Notices and matching tasks',
      rule: 'From a notice you extract details such as time and venue. In a matching task, connect each statement to the correct detail.',
      workedTitle: 'Extract the details (example in English)',
      examples: [
        { xh: 'Isaziso', en: 'Notice: “Meeting at 13:30 in Hall B.” Time: 13:30. Venue: Hall B.' },
        { xh: 'Isibhengezo', en: 'Advert / poster: read the big words and symbols first.' },
      ],
      mistake: 'Matching by looking at the first word only. Check each detail before you match.',
    },
    {
      title: 'Main idea, headings and story message',
      rule: 'To pick the best heading, find the main idea of the paragraph. The message of a story is the lesson it teaches.',
      workedTitle: 'Heading and message',
      examples: [
        { xh: 'Umxholo', en: 'Main idea: the one thing the paragraph is about.' },
        { xh: 'Isifundo', en: 'Lesson: what can we learn from the story?' },
      ],
      mistake: 'Choosing a heading that names only one small detail instead of the whole paragraph.',
      vocab: [
        { word: 'Ibali', meaning: 'Story' },
        { word: 'Umbongo', meaning: 'Poem' },
        { word: 'Isibhengezo', meaning: 'Advert / poster' },
        { word: 'Isishwankathelo', meaning: 'Summary' },
      ],
    },
  ],
  checks: [
    { q: 'Before you answer a comprehension task, what must you do first?', a: 'Read the passage carefully.' },
    { q: 'What does a good summary include?', a: 'The main points only.' },
    { q: 'A notice says “Sports day on Friday at 09:00 on the field”. What details can you take from it?', a: 'The day, the time and the place.' },
    { q: 'What does choosing the best heading test?', a: 'Main idea understanding.' },
  ],
};

export default lesson;
