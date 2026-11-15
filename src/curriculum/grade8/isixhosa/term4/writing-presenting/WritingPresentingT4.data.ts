import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 8 Term 4, Writing & Presenting (revision). Every isiXhosa line is listed in audit/xhosa-g8-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Summary writing',
      rule: 'First find the key ideas in the source. Select what is essential, then write it in your own words, briefly. Do not copy whole sentences or add facts.',
      workedTitle: 'Key idea first',
      examples: [
        { xh: 'UThando uya ethala leencwadi ngeCawa. Uthanda ukufunda amabali.', en: 'Thando goes to the library on Sunday. She likes reading stories.' },
        { xh: 'UThando uthanda ukufunda.', en: 'Summary: Thando likes reading.' },
      ],
      mistake: 'A summary is not a copy of the source. Do not include every example or add your own stories.',
    },
    {
      title: 'Reports and reviews',
      rule: 'A report is clear, factual and well organised. A review includes a judgment and reasons for it. Both need sections or paragraphs in a sensible order.',
      workedTitle: 'Words for the parts',
      examples: [
        { xh: 'Ingxelo', en: 'Report' },
        { xh: 'Intshayelelo', en: 'Introduction' },
        { xh: 'Isiphelo', en: 'Conclusion' },
        { xh: 'Ndicinga ukuba ibali lihle kuba…', en: 'I think the story is good because… (judgment plus reason)' },
      ],
      mistake: 'Do not give an opinion without reasons, or write a report as an imagined story.',
    },
    {
      title: 'Exam writing and proofreading',
      rule: 'Read the instructions, plan briefly, then draft. Edit and proofread after you finish the full draft: check grammar, spelling and punctuation, then clarity and sequence.',
      workedTitle: 'Proofreading checks',
      examples: [
        { xh: 'Ndifunda izolo → Ndifundile izolo.', en: 'Tense fixed.' },
        { xh: 'Abafundi uyabhala → Abafundi bayabhala.', en: 'Concord fixed.' },
        { xh: 'Uhlala phi → Uhlala phi?', en: 'Punctuation fixed.' },
      ],
      mistake: 'Do not start writing before you read the question, or change topic midway. Proofread at the end.',
    },
  ],
  checks: [
    { q: 'What is the first step in summary writing?', a: 'Find the key ideas in the source.' },
    { q: 'What makes a review stronger?', a: 'A judgment and reasons for it.' },
    { q: 'What does proofreading mainly check?', a: 'Grammar, spelling and punctuation.' },
    { q: 'When should final editing happen?', a: 'After completing the full draft.' },
  ],
};

export default lesson;
