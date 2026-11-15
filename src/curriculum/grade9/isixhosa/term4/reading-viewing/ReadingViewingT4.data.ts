import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 9 Term 4, Reading & Viewing (revision). Every isiXhosa line is listed in audit/xhosa-g9-teacher-notes.md for a first-language check.
// Literature and visual texts are described in English: a teacher should supply an isiXhosa text for each.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Revising literature: themes, characters and quotes',
      rule: 'When you revise literature, review the themes, characters and key quotes from each text. For poetry, focus on poetic devices, tone and imagery and how they work together. For drama, remember character growth, how conflict is settled and the key scenes.',
      workedTitle: 'A revision card for the story of Sipho',
      examples: [
        { xh: 'Umxholo: ukuncedana.', en: 'Theme: helping one another.' },
        { xh: 'USipho akanayo incwadi.', en: 'Conflict: Sipho has no book.' },
        { xh: 'UThando uyamnceda.', en: 'Key quote: Thando helps him. (settles the conflict)' },
      ],
      mistake: 'Do not memorise the plot only. Link each theme and character to a quote.',
    },
    {
      title: 'Writing a summary',
      rule: 'A summary of a text should be brief, accurate and cover the main ideas, in your own words. Leave out examples and small details. Skim for the main ideas, then write fewer words than the original.',
      workedTitle: 'Text and summary',
      examples: [
        { xh: 'USipho akanayo incwadi. UThando uyamnceda. USipho uyavuya.', en: 'The text: Sipho has no book. Thando helps him. Sipho is happy.' },
        { xh: 'UThando uncedile uSipho.', en: 'Summary: Thando helped Sipho. (the main idea only)' },
      ],
      mistake: 'A summary is not a copy of the text, and it must not leave out the key facts.',
    },
    {
      title: 'Visual comprehension and annotation',
      rule: 'Visual comprehension means understanding colour, composition and symbols and the meaning they carry. Annotation during revision reading helps you mark key ideas and make a reference for later study: underline key words and write short notes in the margin.',
      workedTitle: 'Annotate a poster (English description; teacher to supply an isiXhosa poster)',
      examples: [
        { xh: 'Imibala', en: 'Colours: what feeling does each colour give?' },
        { xh: 'Umfanekiso', en: 'Composition: the largest picture shows what matters most.' },
        { xh: 'Isibhengezo', en: 'Poster: teacher to supply an isiXhosa poster; annotate its colour, layout and symbols.' },
      ],
      mistake: 'Do not annotate every word. Mark only the key ideas, or the page becomes useless.',
    },
    {
      title: 'Exam reading strategy',
      rule: 'A reading strategy for exam practice is to skim first, then read carefully, then summarise. Exam-style questions about texts typically ask you to interpret meaning, analyse language and give evidence from the text.',
      workedTitle: 'Three questions on the story of Sipho',
      examples: [
        { xh: 'Kutheni uSipho uyavuya?', en: 'Why is Sipho happy? (interpret meaning)' },
        { xh: 'USipho uyavuya.', en: 'Evidence: the words uyavuya (is happy) show the tone.' },
        { xh: 'Ibali lithetha ngani?', en: 'What is the story about? (the theme)' },
      ],
      mistake: 'Do not answer from memory of a similar story. Use evidence from the text in front of you.',
    },
  ],
  checks: [
    { q: 'What should you review when you revise literature?', a: 'Themes, characters and key quotes from each text.' },
    { q: 'What should a summary of a text be?', a: 'Brief, accurate and covering the main ideas.' },
    { q: 'What does annotation help you do?', a: 'Mark key ideas and make a reference for later study.' },
    { q: 'What is a good reading strategy for exam practice?', a: 'Skim first, then read carefully, then summarise.' },
  ],
};

export default lesson;
