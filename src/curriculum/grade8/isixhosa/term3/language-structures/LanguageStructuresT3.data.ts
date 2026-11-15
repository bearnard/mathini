import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 8 Term 3, Language Structures. Every isiXhosa line is listed in audit/xhosa-g8-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Adverbs: how, when and where',
      rule: 'An adverb describes how, when or where an action happens. It describes the verb and does not change its form for the noun.',
      workedTitle: 'How, when, where',
      examples: [
        { xh: 'Ufunda kakuhle.', en: 'He or she studies well. (how)' },
        { xh: 'Ubaleka ngokukhawuleza.', en: 'He or she runs quickly. (how)' },
        { xh: 'Ndifunda namhlanje.', en: 'I am studying today. (when)' },
        { xh: 'Ndihlala apha.', en: 'I live here. (where)' },
      ],
      mistake: 'Do not mix up the adverb kakuhle (well, describes a verb) with the adjective -hle (nice, describes a noun).',
    },
    {
      title: 'Prepositions: the locative e-',
      rule: 'To say in, at or to a place, change the noun: ikhaya becomes ekhaya, and many nouns take e- at the front and -ini at the end. For a person, use ku-.',
      workedTitle: 'Place nouns and people',
      examples: [
        { xh: 'Ndihlala ekhaya.', en: 'I live at home.' },
        { xh: 'Ndiya esikolweni.', en: 'I am going to school. (isikolo → esikolweni)' },
        { xh: 'Incwadi isetafileni.', en: 'The book is on the table. (itafile → etafileni)' },
        { xh: 'Ndiya kuThando.', en: 'I am going to Thando. (ku- before a person)' },
      ],
      mistake: 'Do not use ku- for places. Use ku- for people and names, and e- for places.',
    },
    {
      title: 'Clauses: groups of words with a verb',
      rule: 'A clause is a group of words with a verb. A sentence can have two clauses joined by a word such as xa (when) or kuba (because).',
      workedTitle: 'Count the verbs, find the clauses',
      examples: [
        { xh: 'Xa imvula iyana, ndihlala ekhaya.', en: 'When it rains, I stay at home. (two verbs, two clauses)' },
        { xh: 'Ndifunda kuba ndifuna ukuphumelela.', en: 'I study because I want to succeed.' },
        { xh: 'Ndifunda, emva koko ndibhale umsebenzi.', en: 'I study, and then I write my work.' },
      ],
      mistake: 'A phrase without a verb, such as emva kwesikolo, is not a clause. Look for the verb.',
    },
    {
      title: 'Punctuation and editing',
      rule: 'Use a comma between clauses and a capital letter at the start. To edit, first find errors in meaning and form, then fix them, then read again.',
      workedTitle: 'Find the error, fix it',
      examples: [
        { xh: 'ufunda kakuhle → Ufunda kakuhle.', en: 'Add a capital letter and a full stop.' },
        { xh: 'Ndifunda izolo → Ndifundile izolo.', en: 'Fix the tense to match izolo.' },
        { xh: 'Abafundi uyafunda → Abafundi bayafunda.', en: 'Fix the concord.' },
      ],
      mistake: 'Do not fix only the punctuation. Check the tense and the concord as well.',
    },
    {
      title: 'Building vocabulary',
      rule: 'Words come in families that share a stem. Learn the family, and use nearby words as clues for new words. A wider vocabulary lets you say things more exactly.',
      workedTitle: 'The family of the stem -fund-',
      examples: [
        { xh: 'ukufunda', en: 'to read, to study' },
        { xh: 'umfundi', en: 'learner' },
        { xh: 'ukufundisa', en: 'to teach' },
        { xh: 'Utitshala ufundisa abafundi.', en: 'The teacher teaches the learners.' },
      ],
      mistake: 'Do not use the same simple word every time. Choose the word that fits the meaning best.',
    },
  ],
  checks: [
    { q: 'What does an adverb describe?', a: 'How, when or where an action happens.' },
    { q: 'Say “I live at home.”', a: 'Ndihlala ekhaya.' },
    { q: 'How many clauses are in: Xa imvula iyana, ndihlala ekhaya?', a: 'Two (iyana and ndihlala are the two verbs).' },
    { q: 'Correct it: Ndifunda izolo.', a: 'Ndifundile izolo. (the past tense matches izolo)' },
  ],
};

export default lesson;
