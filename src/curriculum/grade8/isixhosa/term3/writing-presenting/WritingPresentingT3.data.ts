import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 8 Term 3, Writing & Presenting. Every isiXhosa line is listed in audit/xhosa-g8-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'A descriptive essay',
      rule: 'A descriptive essay uses clear sensory detail: what you see, hear and smell. Give each paragraph one main point, and keep to one topic.',
      workedTitle: 'Use the senses',
      examples: [
        { xh: 'Ndibona ikhaya elihle.', en: 'I see a beautiful home. (sight)' },
        { xh: 'Ndiva umculo omnandi.', en: 'I hear nice music. (hearing)' },
        { xh: 'Ndiva ivumba lesonka.', en: 'I smell the bread. (smell)' },
      ],
      mistake: 'Do not write random words or ignore paragraphs. Choose specific details and group them under one point.',
    },
    {
      title: 'Narrative writing',
      rule: 'A narrative has a setting (where and when), events in order, and an ending. Link the events with time words.',
      workedTitle: 'Setting, events, ending',
      examples: [
        { xh: 'Ngolunye usuku…', en: 'One day… (setting)' },
        { xh: 'Emva koko…', en: 'Then… (events)' },
        { xh: 'Ekugqibeleni…', en: 'Finally… (ending)' },
      ],
      mistake: 'A narrative is not a list of bullet points and needs more than a title. Include the setting, the events and the ending.',
    },
    {
      title: 'A formal letter',
      rule: 'A formal letter has the sender’s address, the date, a formal greeting, a subject line, the body and a formal closing. The tone is polite and the language is suitable for the reader.',
      workedTitle: 'Formal greeting and closing',
      examples: [
        { xh: 'Mhlekazi,', en: 'Dear Sir, (greeting)' },
        { xh: 'Nkosazana,', en: 'Dear Madam / Miss, (greeting)' },
        { xh: 'Ndicela ukuthetha nawe.', en: 'I would like to speak with you. (body)' },
        { xh: 'Ozithobileyo,', en: 'Yours sincerely, (closing)' },
      ],
      mistake: 'Do not use slang, emojis or a casual closing such as “See you later!”. Close with Yours sincerely.',
    },
    {
      title: 'Project writing and presenting',
      rule: 'A project needs a plan, organised evidence and a conclusion. Draft, redraft and check the language before you present. When you present, highlight your key points.',
      workedTitle: 'Parts of a project',
      examples: [
        { xh: 'Isihloko: Isikolo sam', en: 'Title: My school' },
        { xh: 'Intshayelelo', en: 'Introduction' },
        { xh: 'Isiphelo', en: 'Conclusion' },
      ],
      mistake: 'Do not copy without checking, skip your introduction or avoid a conclusion. Revise to improve content and accuracy.',
    },
  ],
  checks: [
    { q: 'What makes a descriptive essay strong?', a: 'Clear sensory detail.' },
    { q: 'What three parts should a narrative include?', a: 'Setting, events and an ending.' },
    { q: 'What is a useful closing for a formal letter?', a: 'Yours sincerely (in isiXhosa: Ozithobileyo).' },
    { q: 'What does each paragraph develop?', a: 'One clear point.' },
  ],
};

export default lesson;
