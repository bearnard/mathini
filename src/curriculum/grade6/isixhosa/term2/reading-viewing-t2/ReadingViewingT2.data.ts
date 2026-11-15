import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 6. Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.// Menu, timetable and notice texts are described in English: a teacher supplies isiXhosa examples.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Find the main idea',
      rule: 'The main idea tells you what a text is mostly about. Read the whole short text first, then say its main idea in one sentence.',
      workedTitle: 'Words that help you read',
      examples: [
        { xh: 'Ibali', en: 'Story: ask what it is mostly about.' },
        { xh: 'Isaziso', en: 'Notice: it gives a fact such as a time or a place.' },
        { xh: 'Isibhengezo', en: 'Advert: its purpose is to persuade people to buy or use something.' },
      ],
      mistake: 'The main idea is not one small detail from the middle. It covers the whole text.',
    },
    {
      title: 'Choose the right text for the job',
      rule: 'Different everyday texts answer different questions. Use a menu for prices, a timetable for times and a notice for events.',
      workedTitle: 'Which text should I use?',
      examples: [
        { xh: 'Imenyu', en: 'Menu: find the cost of food (ixabiso, price).' },
        { xh: 'Ixesha', en: 'Time: a timetable shows when the school bus leaves.' },
        { xh: 'Isaziso', en: 'Notice: “Concert at 18:00 in the school hall” tells you the time and the place.' },
      ],
      mistake: 'Using a menu to find a time or a timetable to find a price. Match the text to the question.',
    },
    {
      title: 'Instructions and scanning',
      rule: 'For instructions, find step 1 and start there. To find a name, a time or a price fast, scan: let your eyes run over the text.',
      workedTitle: 'Following instructions',
      examples: [
        { xh: 'Inyathelo 1', en: 'Step 1: always start here.' },
        { xh: 'Inyathelo 2', en: 'Step 2: do this after step 1.' },
        { xh: 'Imiyalelo', en: 'Instructions: they tell you what to do in order.' },
      ],
      mistake: 'Starting in the middle of the instructions. Begin at step 1.',
    },
    {
      title: 'Re-read when unsure',
      rule: 'If the meaning of a sentence is not clear, read it again. Compare two meals or two items by their price or another detail.',
      workedTitle: 'Compare two meals',
      examples: [
        { xh: 'Ixabiso', en: 'Price: compare the price of each meal.' },
        { xh: 'Phinda ufunde', en: 'Read again: confirm that you understand.' },
      ],
      mistake: 'Guessing instead of re-reading. A second reading often removes the confusion.',
      vocab: [
        { word: 'Imenyu', meaning: 'Menu' },
        { word: 'Imiyalelo', meaning: 'Instructions' },
        { word: 'Isibhengezo', meaning: 'Advert / announcement' },
        { word: 'Ixesha', meaning: 'Time / schedule' },
      ],
    },
  ],
  checks: [
    { q: 'Why do readers look for the main idea of a story?', a: 'What the story is mostly about.' },
    { q: 'You want to know how much a pie costs. Which text do you read?', a: 'A menu.' },
    { q: 'A notice says “Sports day at 09:00 on the field”. Where must you go?', a: 'The field.' },
    { q: 'What do you do first when you read instructions?', a: 'Find step 1 and start there.' },
  ],
};

export default lesson;
