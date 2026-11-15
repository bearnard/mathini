import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 8 Term 4, Language Structures (revision). Every isiXhosa line is listed in audit/xhosa-g8-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Revise the tenses and the negative',
      rule: 'Present: sifunda. Recent past: sifundile. Future: siza kufunda. For a negative present, start with a- and end with -i: asifundi. A time word shows which tense is needed.',
      workedTitle: 'One verb in four forms',
      examples: [
        { xh: 'Sifunda izolo → Sifundile izolo.', en: 'Fix the tense: we studied yesterday.' },
        { xh: 'Siza kufunda ngomso.', en: 'We will study tomorrow.' },
        { xh: 'Asifundi namhlanje.', en: 'We are not studying today.' },
        { xh: 'Akafundi namhlanje.', en: 'He or she is not studying today.' },
      ],
      mistake: 'Ngomso (tomorrow) needs the future, not the present or past. Do not write Sifunde ngomso.',
    },
    {
      title: 'Concord and possessives',
      rule: 'The verb marker agrees with the subject: abantwana → ba-. A possessive also agrees with the noun it follows: incwadi yam, isikolo sam, abantwana bam.',
      workedTitle: 'Subject concord and possessive concord',
      examples: [
        { xh: 'Abantwana bayadlala.', en: 'The children are playing.' },
        { xh: 'Umntwana uyadlala.', en: 'The child is playing.' },
        { xh: 'incwadi yam', en: 'my book' },
        { xh: 'iincwadi zam', en: 'my books' },
        { xh: 'isikolo sam', en: 'my school' },
        { xh: 'ibhola lam', en: 'my ball' },
      ],
      mistake: 'Do not use one possessive for every noun. Write incwadi yam but isikolo sam.',
    },
    {
      title: 'Punctuation and spelling',
      rule: 'Check capital letters, full stops, question marks and commas. Copy spelling carefully, and write time words as one word.',
      workedTitle: 'Punctuate and spell',
      examples: [
        { xh: 'Ndicela uncede, enkosi.', en: 'Please help me, thank you. (comma before enkosi)' },
        { xh: 'Uhlala phi?', en: 'Where do you live? (question mark)' },
        { xh: 'namhlanje', en: 'today (one word)' },
        { xh: 'uvavanyo', en: 'test (not uvavannyo)' },
      ],
      mistake: 'Do not double letters or split words, and do not end a question with a full stop.',
    },
    {
      title: 'Proofreading and choosing the best form',
      rule: 'In final revision, check agreement, tense and punctuation in that order. In a multiple-choice grammar item, read all options and choose the best form for the context.',
      workedTitle: 'Find the error, fix it',
      examples: [
        { xh: 'Abantwana uyadlala → Abantwana bayadlala.', en: 'Fix the concord.' },
        { xh: 'Ndifunda izolo → Ndifundile izolo.', en: 'Fix the tense.' },
        { xh: 'Uhlala phi → Uhlala phi?', en: 'Add the question mark.' },
      ],
      mistake: 'Do not memorise one isolated rule or skip the options. Meaning and context decide the correct form.',
    },
  ],
  checks: [
    { q: 'Say “We will study tomorrow.”', a: 'Siza kufunda ngomso.' },
    { q: 'Choose the correct concord: Abantwana (bayadlala or uyadlala)?', a: 'Abantwana bayadlala.' },
    { q: 'Which spelling is correct: uvavanyo or uvavannyo?', a: 'uvavanyo' },
    { q: 'What should you check first when correcting a sentence?', a: 'Agreement (concord), tense and punctuation.' },
  ],
};

export default lesson;
