import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 7 Term 2. Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Negatives: saying what does not happen',
      rule: 'Start with a- and the subject marker, and change the last letter of the verb from -a to -i. Andiyi means I do not go.',
      wordParts: { word: 'Andiyi', en: 'I do not go', parts: [{ t: 'a', label: 'not' }, { t: 'ndi', label: 'I' }, { t: 'y', label: 'go' }, { t: 'i', label: 'ending' }] },
      workedTitle: 'Positive and negative side by side',
      examples: [
        { xh: 'Ndiya evenkileni namhlanje.', en: 'I go to the shop today.' },
        { xh: 'Andiyi evenkileni namhlanje.', en: 'I do not go to the shop today.' },
        { xh: 'Andifundi incwadi.', en: 'I do not read the book.' },
        { xh: 'Asiculi.', en: 'We do not sing.' },
      ],
      mistake: 'Do not add a- but keep the old ending. Andifunda is wrong; write Andifundi.',
    },
    {
      title: 'Questions and question words',
      rule: 'A statement becomes a question with a rising voice and a question mark. Question words ask for specific information: ngubani (who), phi (where), nini (when), kutheni (why).',
      workedTitle: 'Questions you can build',
      examples: [
        { xh: 'Uyaya esikolweni namhlanje?', en: 'Are you going to school today?' },
        { xh: 'Uhlala phi umhlobo wakho?', en: 'Where does your friend live?' },
        { xh: 'Ufika nini?', en: 'When do you arrive?' },
        { xh: 'Kutheni ungafuni?', en: 'Why do you not want to?' },
      ],
      mistake: 'Keep the verb and the noun in the order of a statement and put the question word near the end: Uhlala phi umhlobo wakho?',
    },
    {
      title: 'Subject concords and pronouns',
      rule: 'The verb must agree with the noun that does the action. Singular umfundi takes u-, plural abafundi takes ba-.',
      workedTitle: 'The noun decides the concord',
      examples: [
        { xh: 'Umfundi uyafunda.', en: 'The learner is reading.' },
        { xh: 'Abafundi bayafunda.', en: 'The learners are reading.' },
        { xh: 'Yena uyacula kakuhle.', en: 'He or she sings well.' },
        { xh: 'Bona bayacula kakuhle.', en: 'They sing well.' },
      ],
      mistake: 'Do not use the singular marker with a plural noun. Abafundi uyafunda is wrong.',
    },
    {
      title: 'Adjectives agree with the noun',
      rule: 'An adjective takes a prefix that matches the noun. Indlu (house) takes en-, so a big house is indlu enkulu.',
      workedTitle: 'Noun + matching adjective',
      examples: [
        { xh: 'indlu enkulu', en: 'a big house' },
        { xh: 'incwadi entsha', en: 'a new book' },
        { xh: 'abantwana abancinane', en: 'small children' },
      ],
      mistake: 'Do not use one adjective form for every noun. Learn the prefix with each noun.',
      vocab: [
        { word: 'Umbuzo', meaning: 'Question' },
        { word: 'Ngubani?', meaning: 'Who?' },
        { word: 'Phi?', meaning: 'Where?' },
        { word: 'Nini?', meaning: 'When?' },
        { word: 'Kutheni?', meaning: 'Why?' },
      ],
    },
  ],
  checks: [
    { q: 'Make negative: Ndifunda incwadi.', a: 'Andifundi incwadi.' },
    { q: 'Which question word asks about place: phi or nini?', a: 'phi (where)' },
    { q: 'Complete: Abafundi ___ yafunda (bayafunda or uyafunda).', a: 'bayafunda (ba- agrees with abafundi)' },
    { q: 'Say “a big house” (indlu + adjective).', a: 'indlu enkulu' },
  ],
};

export default lesson;
