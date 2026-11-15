import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 7 Term 1, Language Structures. Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Present tense: the action is happening now',
      rule: 'Join the subject marker and the verb: ndi- (I), u- (you, he, she), si- (we), ba- (they). Add -ya- when the verb ends the sentence.',
      wordParts: { word: 'Ndiyafunda', en: 'I am reading', parts: [{ t: 'ndi', label: 'I' }, { t: 'ya', label: 'now' }, { t: 'fund', label: 'read' }, { t: 'a', label: 'ending' }] },
      workedTitle: 'Present tense with ndi-, u-, si-, ba-',
      examples: [
        { xh: 'Ndiyafunda.', en: 'I am reading.' },
        { xh: 'Ndifunda incwadi namhlanje.', en: 'I read a book today.' },
        { xh: 'Siyacula.', en: 'We are singing.' },
        { xh: 'Bayasebenza.', en: 'They are working.' },
      ],
      mistake: 'A time word must agree with the tense. Izolo (yesterday) cannot go with the present tense: write Ndifundile izolo, not Ndifunda izolo.',
    },
    {
      title: 'Past tense: the action is finished',
      rule: 'For something that has just happened, change the ending -a to -ile. For long ago, put a- after the subject marker.',
      wordParts: { word: 'Ndifundile', en: 'I read / I have read', parts: [{ t: 'ndi', label: 'I' }, { t: 'fund', label: 'read' }, { t: 'ile', label: 'finished' }] },
      workedTitle: 'Recent past (-ile) and long ago (a-)',
      examples: [
        { xh: 'Ndifundile incwadi izolo.', en: 'I read a book yesterday.' },
        { xh: 'Sidlalile ibhola izolo.', en: 'We played football yesterday.' },
        { xh: 'Siye evenkileni izolo.', en: 'We went to the shop yesterday. (ukuya changes to -ye)' },
        { xh: 'Safunda kudala.', en: 'We read long ago.' },
      ],
      mistake: 'Do not keep the present ending for finished actions. Ndifunda means I read (now); Ndifundile means I read (it is done).',
    },
    {
      title: 'Future tense: the action will happen',
      rule: 'Put za and ku- before the verb: subject marker + za + ku + verb. Ngomso (tomorrow) is a clue that the future tense is needed.',
      wordParts: { word: 'Ndiza kufunda', en: 'I will read', parts: [{ t: 'ndi', label: 'I' }, { t: 'za', label: 'will' }, { t: 'ku', label: 'to' }, { t: 'fund', label: 'read' }, { t: 'a', label: 'ending' }] },
      workedTitle: 'Future tense with za + ku-',
      examples: [
        { xh: 'Ndiza kufunda ngomso.', en: 'I will read tomorrow.' },
        { xh: 'Uza kudlala ibhola ngomso.', en: 'He or she will play football tomorrow.' },
        { xh: 'Siza kuya evenkileni ngomso.', en: 'We will go to the shop tomorrow.' },
      ],
      mistake: 'Do not drop ku-. Write Ndiza kufunda, not Ndiza funda.',
    },
    {
      title: 'Plurals and possessives',
      rule: 'Many nouns change their first letters in the plural: incwadi becomes iincwadi. To show who owns something, put ka- before a name.',
      workedTitle: 'Singular to plural, and ka- for a name',
      examples: [
        { xh: 'incwadi → iincwadi', en: 'book → books' },
        { xh: 'isikolo → izikolo', en: 'school → schools' },
        { xh: 'umfundi → abafundi', en: 'learner → learners' },
        { xh: 'incwadi kaLuvo', en: "Luvo's book" },
      ],
      mistake: 'Na- means with or and, ka- means of. Incwadi noLuvo is a book and Luvo, not Luvo’s book.',
    },
    {
      title: 'Pronouns, agreement and punctuation',
      rule: 'The pronoun and the verb must agree: yena (he, she) goes with u-, thina (we) with si-. End a question with ? and a statement with a full stop.',
      workedTitle: 'Pronoun + verb that agree',
      examples: [
        { xh: 'Mna ndiyacula.', en: 'I am singing.' },
        { xh: 'Yena uyacula kakuhle.', en: 'He or she sings well.' },
        { xh: 'Thina siyacula.', en: 'We are singing.' },
        { xh: 'Ufunda phi?', en: 'Where do you study?' },
      ],
      mistake: 'A pronoun does not replace the verb marker. Write Yena uyacula, not Yena icula.',
      vocab: [
        { word: 'Isibizo', phonetic: "[isi'biːzo]", meaning: 'Noun' },
        { word: 'Isimelabizo', phonetic: "[isi.mɛla'biːzo]", meaning: 'Pronoun' },
        { word: 'Ixesha', phonetic: "[i'kʰeʃa]", meaning: 'Tense / time' },
        { word: 'Isivakalisi', phonetic: "[isi.vaka'liːsi]", meaning: 'Sentence' },
      ],
    },
  ],
  checks: [
    { q: 'Change to the past tense: Ndifunda incwadi.', a: 'Ndifundile incwadi. (-a becomes -ile)' },
    { q: 'Say “They will play football tomorrow.” (Hint: ba + za + ku.)', a: 'Baza kudlala ibhola ngomso.' },
    { q: 'Give the plural of incwadi.', a: 'iincwadi' },
    { q: 'Which is Luvo’s book: incwadi kaLuvo or incwadi noLuvo?', a: 'incwadi kaLuvo (ka- shows who owns it; na- means “with”)' },
  ],
};

export default lesson;
