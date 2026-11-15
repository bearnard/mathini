import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 6. Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Pronouns and concords',
      rule: 'A pronoun stands for a person: mna (I), wena (you), yena (he or she), thina (we), nina (you all), bona (they). The verb marker agrees with it.',
      workedTitle: 'Pronoun and verb',
      examples: [
        { xh: 'Thina siyadlala.', en: 'We are playing.' },
        { xh: 'Umfundi uyafunda.', en: 'The learner is studying.' },
        { xh: 'Bona bayacula.', en: 'They are singing.' },
      ],
      mistake: 'Using the wrong marker for the pronoun, for example Thina uyadlala. Write Thina siyadlala.',
    },
    {
      title: 'Present, past and future',
      rule: 'Present: the action is now. Past: -ile, or the a- past. Future: za + ku-. Use the time word to check.',
      workedTitle: 'Three tenses',
      examples: [
        { xh: 'Ndiyadlala ngoku.', en: 'I am playing now. (present)' },
        { xh: 'Baculile emsithweni izolo.', en: 'They sang at the ceremony yesterday. (past)' },
        { xh: 'Ndiza kufunda ngomso.', en: 'I will study tomorrow. (future)' },
      ],
      mistake: 'Mixing the tense and the time word, such as Izolo ndiza kufunda.',
    },
    {
      title: 'Punctuation and capital letters',
      rule: 'Begin a sentence with a capital letter and end it with the right mark: a full stop for a statement and a question mark for a question.',
      workedTitle: 'Capital letter and end mark',
      examples: [
        { xh: 'USipho uya esikolweni.', en: 'Sipho goes to school.' },
        { xh: 'Uhlala phi?', en: 'Where do you live?' },
      ],
      mistake: 'Forgetting the question mark at the end of a question.',
    },
    {
      title: 'Spelling and proofreading',
      rule: 'Proofread by reading each sentence and fixing one kind of error at a time. Spelling revision gives you accuracy in the year-end assessment.',
      workedTitle: 'Correct spelling',
      examples: [
        { xh: 'isikolo', en: 'school (spelled correctly)' },
        { xh: 'incwadi', en: 'book (spelled correctly)' },
      ],
      mistake: 'Reading the whole text once and hoping to catch every error. Check one error type at a time.',
      vocab: [
        { word: 'Isibizo', meaning: 'Noun' },
        { word: 'Isimelabizo', meaning: 'Pronoun' },
        { word: 'Ixesha', meaning: 'Tense / time' },
        { word: 'Isiphumlisi', meaning: 'Punctuation mark' },
      ],
    },
  ],
  checks: [
    { q: 'Which word is a pronoun: thina or isikolo?', a: 'thina (we)' },
    { q: 'Put in the future: Ndifunda ngoku.', a: 'Ndiza kufunda ngomso.' },
    { q: 'Which mark ends a question?', a: '?' },
    { q: 'What is the best proofreading strategy?', a: 'Read each sentence and fix one error at a time.' },
  ],
};

export default lesson;
