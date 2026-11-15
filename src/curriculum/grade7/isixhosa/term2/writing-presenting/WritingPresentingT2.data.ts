import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 7 Term 2. Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'A diary entry',
      rule: 'A diary entry (idayari) has the date and your personal reflection: what happened and how you felt. Write in the first person.',
      workedTitle: 'A short diary entry',
      examples: [
        { xh: 'Namhlanje ndiye esikolweni.', en: 'Today I went to school.' },
        { xh: 'Ndidlale ibhola nabahlobo bam.', en: 'I played football with my friends.' },
        { xh: 'Ndonwabile kakhulu.', en: 'I am very happy.' },
      ],
      mistake: 'A diary entry without a date or without your own feelings is only a list of events.',
    },
    {
      title: 'A short report',
      rule: 'A short report gives clear facts in a logical order: what happened, where and when. Leave out opinions.',
      workedTitle: 'Facts in order',
      examples: [
        { xh: 'Isikolo sethu sinabafundi abangamashumi amane.', en: 'Our school has forty learners.' },
        { xh: 'Sidlale ibhola ngoLwesihlanu.', en: 'We played football on Friday.' },
      ],
      mistake: 'Putting feelings or jokes in a report. A report states facts.',
    },
    {
      title: 'Instructions and messages',
      rule: 'Instructions use order words: okokuqala (first), okwesibini (second), okokugqibela (last). A message to a teacher is respectful and clear.',
      workedTitle: 'Order words and a polite message',
      examples: [
        { xh: 'Okokuqala, thatha incwadi yakho.', en: 'First, take your book.' },
        { xh: 'Okwesibini, vula ikhasi lokuqala.', en: 'Second, open the first page.' },
        { xh: 'Nceda uzise incwadi yam ngomso, enkosi.', en: 'Please bring my book tomorrow, thank you.' },
      ],
      mistake: 'Writing the steps in the wrong order, or using a rude tone in a message to a teacher.',
    },
    {
      title: 'Dialogue and presenting',
      rule: 'Each speaker gets a new line and the correct punctuation. Before you present, check your grammar and spelling.',
      workedTitle: 'A dialogue with speaker turns',
      examples: [
        { xh: 'Litha: Molo, titshala.', en: 'Litha: Hello, teacher.' },
        { xh: 'Titshala: Molo, Litha. Unjani?', en: 'Teacher: Hello, Litha. How are you?' },
        { xh: 'Litha: Ndiphilile, enkosi.', en: 'Litha: I am well, thank you.' },
      ],
      mistake: 'Skipping the edit. A dialogue with no punctuation or no speaker names is hard to read aloud.',
      vocab: [
        { word: 'Idayari', meaning: 'Diary' },
        { word: 'Uluhlu', meaning: 'List' },
        { word: 'Imiyalelo', meaning: 'Instructions' },
        { word: 'Umyalezo', meaning: 'Message' },
      ],
    },
  ],
  checks: [
    { q: 'What two things must a diary entry have?', a: 'The date and your personal reflection.' },
    { q: 'Which word starts the first step of instructions?', a: 'Okokuqala' },
    { q: 'Put in order: okwesibini, okokuqala, okokugqibela.', a: 'okokuqala, okwesibini, okokugqibela' },
    { q: 'What should a message to a teacher sound like?', a: 'Respectful and clear.' },
  ],
};

export default lesson;
