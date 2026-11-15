import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 8 Term 1, Language Structures. Every isiXhosa line is listed in audit/xhosa-g8-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Nouns and their classes',
      rule: 'An isibizo (noun) starts with a prefix that shows its class. Singular and plural nouns have different prefixes, so learn them in pairs.',
      workedTitle: 'Singular and plural pairs',
      examples: [
        { xh: 'umfundi → abafundi', en: 'learner → learners' },
        { xh: 'umntwana → abantwana', en: 'child → children' },
        { xh: 'isikolo → izikolo', en: 'school → schools' },
        { xh: 'incwadi → iincwadi', en: 'book → books' },
        { xh: 'ibhola → amabhola', en: 'ball → balls' },
        { xh: 'inja → izinja', en: 'dog → dogs' },
      ],
      mistake: 'Do not add -s as in English. The prefix changes: write abafundi, not umfundis.',
      vocab: [
        { word: 'Isibizo', phonetic: "[isi'biːzo]", meaning: 'Noun' },
        { word: 'Isichazi', phonetic: "[isi'ʧazi]", meaning: 'Adjective / describing word' },
      ],
    },
    {
      title: 'Subject concord: the verb agrees with the noun',
      rule: 'The marker at the start of the verb must match the class of the subject noun: umfundi → u-, abafundi → ba-, inja → i-, izinja → zi-.',
      wordParts: { word: 'Bayafunda', en: 'They are reading', parts: [{ t: 'ba', label: 'they (class 2)' }, { t: 'ya', label: 'now' }, { t: 'fund', label: 'read' }, { t: 'a', label: 'ending' }] },
      workedTitle: 'One noun, the matching marker',
      examples: [
        { xh: 'Umfundi uyafunda.', en: 'The learner is reading.' },
        { xh: 'Abafundi bayafunda.', en: 'The learners are reading.' },
        { xh: 'Inja iyabaleka.', en: 'The dog is running.' },
        { xh: 'Izinja ziyabaleka.', en: 'The dogs are running.' },
      ],
      mistake: 'Do not take the marker from English or from another noun. Abafundi uyafunda is wrong; write Abafundi bayafunda.',
    },
    {
      title: 'Adjectives agree with the noun',
      rule: 'An isichazi (adjective) takes a prefix that matches the noun. The stem stays the same: -hle (nice, beautiful) and -khulu (big).',
      workedTitle: 'The stem -hle and -khulu with different nouns',
      examples: [
        { xh: 'umntwana omhle', en: 'a beautiful child' },
        { xh: 'abantwana abahle', en: 'beautiful children' },
        { xh: 'incwadi entle', en: 'a nice book' },
        { xh: 'iincwadi ezintle', en: 'nice books' },
        { xh: 'isikolo esikhulu', en: 'a big school' },
        { xh: 'Umntwana umhle.', en: 'The child is beautiful.' },
      ],
      mistake: 'Each class needs its own prefix. Do not write abantwana omhle; write abantwana abahle.',
    },
    {
      title: 'Simple tenses and time words',
      rule: 'Present: ndifunda. Recent past: the ending changes to -ile (ndifundile). Future: za + ku- (ndiza kufunda). Time words such as ngoku, izolo and ngomso help you check.',
      workedTitle: 'The same verb in three tenses',
      examples: [
        { xh: 'Sibhala umsebenzi ngoku.', en: 'We are writing the work now.' },
        { xh: 'Sibhalile umsebenzi izolo.', en: 'We wrote the work yesterday.' },
        { xh: 'Siza kubhala umsebenzi ngomso.', en: 'We will write the work tomorrow.' },
      ],
      mistake: 'The time word and the tense must match. Do not write Ngomso sifundile; write Ngomso siza kufunda.',
    },
    {
      title: 'Punctuation and spelling',
      rule: 'A question ends with ?, a statement with a full stop and an exclamation with !. Start with a capital letter. Copy spelling carefully: the word is incwadi, and uvavanyo is a test.',
      workedTitle: 'Punctuate and spell',
      examples: [
        { xh: 'Uhlala phi?', en: 'Where do you live? (question mark)' },
        { xh: 'Ndihlala eGqeberha.', en: 'I live in Gqeberha. (full stop)' },
        { xh: 'incwadi', en: 'book (not incwaddi)' },
        { xh: 'uvavanyo', en: 'test' },
      ],
      mistake: 'Doubled or swapped letters change the spelling. Write incwadi, not incwaddi, and always end a question with ?.',
    },
  ],
  checks: [
    { q: 'Choose the correct sentence: Abafundi uyafunda or Abafundi bayafunda?', a: 'Abafundi bayafunda. (abafundi is class 2, so the marker is ba-)' },
    { q: 'Give the plural of isikolo.', a: 'izikolo' },
    { q: 'Make the adjective agree: iincwadi ___ (-hle).', a: 'iincwadi ezintle' },
    { q: 'Change to the past: Sibhala umsebenzi ngoku. Which time word fits it?', a: 'Sibhalile umsebenzi. (izolo)' },
  ],
};

export default lesson;
