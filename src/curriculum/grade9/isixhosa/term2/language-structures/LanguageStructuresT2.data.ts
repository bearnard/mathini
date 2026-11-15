import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 9 Term 2, Language Structures. Every isiXhosa line is listed in audit/xhosa-g9-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Connectors: joining ideas',
      rule: 'Connectors (linking words) join ideas and show how sentences relate. Kodwa (but) shows contrast, kuba (because) gives a reason, kwaye (and) adds, okanye (or) gives a choice, ngoko (so, therefore) gives a result.',
      workedTitle: 'One connector for each job',
      examples: [
        { xh: 'Ndifuna ukudlala kodwa ndiyafunda.', en: 'I want to play but I am studying. (contrast)' },
        { xh: 'Andiyi esikolweni kuba ndigulile.', en: 'I am not going to school because I am sick. (reason)' },
        { xh: 'Ndiyafunda kwaye ndiyabhala.', en: 'I am reading and I am writing. (addition)' },
        { xh: 'Ndigulile, ngoko andiyi esikolweni.', en: 'I am sick, so I am not going to school. (result)' },
      ],
      mistake: 'Do not mix up kuba and kodwa. Kuba means because (a reason); kodwa means but (a contrast).',
    },
    {
      title: 'Passive voice',
      rule: 'The passive voice is used when the action matters more than who does it. Add -w- before the final vowel of the verb (ukufunda becomes ukufundwa; the one-syllable verb tya becomes tyiwa). The doer comes last, with nga-: ngabantwana (by the children).',
      wordParts: { word: 'ifundwa', en: 'is read', parts: [{ t: 'i', label: 'it' }, { t: 'fund', label: 'read' }, { t: 'w', label: 'passive' }, { t: 'a', label: 'ending' }] },
      workedTitle: 'Active to passive',
      examples: [
        { xh: 'Umfundi ufunda incwadi.', en: 'The learner reads the book. (active)' },
        { xh: 'Incwadi ifundwa ngumfundi.', en: 'The book is read by the learner. (passive)' },
        { xh: 'Abantwana bayatya isonka.', en: 'The children eat the bread. (active)' },
        { xh: 'Isonka sityiwa ngabantwana.', en: 'The bread is eaten by the children. (passive)' },
      ],
      mistake: 'The subject of a passive sentence receives the action. Write Incwadi ifundwa, and the verb marker matches incwadi, not the doer.',
    },
    {
      title: 'Pronouns and pronoun agreement',
      rule: 'A pronoun replaces a noun so you need not repeat it. The pronouns are mna (I), wena (you), yena (he, she), thina (we), nina (you, plural), bona (they). A pronoun must refer clearly and correctly to its noun, and the verb marker must agree.',
      workedTitle: 'Replace the noun with a pronoun',
      examples: [
        { xh: 'UThando ufunda. Yena uyathanda ukufunda.', en: 'Thando reads. She likes to read.' },
        { xh: 'Abafundi bafunda. Bona bayathanda ukubhala.', en: 'The learners read. They like to write.' },
        { xh: 'Thina siyafunda.', en: 'We are reading.' },
      ],
      mistake: 'The pronoun and the verb marker must match. Write Thina siyafunda, not Thina uyafunda.',
    },
    {
      title: 'Question tags',
      rule: 'A question tag is a short question added to the end of a statement. It invites the listener to confirm or agree. In isiXhosa, andithi? and akunjalo? (isn’t it so?) are used as tags. Answer ewe (yes) or hayi (no).',
      workedTitle: 'A statement and its tag',
      examples: [
        { xh: 'Ufunda eGrade 9, andithi?', en: 'You are in Grade 9, aren’t you?' },
        { xh: 'Imfundo ibalulekile, akunjalo?', en: 'Education is important, isn’t it?' },
        { xh: 'Ewe, kunjalo.', en: 'Yes, that is so.' },
      ],
      mistake: 'A tag is not a punctuation mark or a noun. It is a short question that ends a statement.',
    },
    {
      title: 'Subject-verb concord',
      rule: 'In isiXhosa the subject and the verb must agree in form and class. Every noun class has its own subject marker on the verb. Do not give a plural subject a singular verb marker.',
      workedTitle: 'Matching markers across classes',
      examples: [
        { xh: 'Umfundi uyafunda. Abafundi bayafunda.', en: 'The learner reads. The learners read.' },
        { xh: 'Inja iyabhonga. Izinja ziyabhonga.', en: 'The dog barks. The dogs bark.' },
        { xh: 'Ilanga liyakhanya. Amalanga ayakhanya.', en: 'The sun shines. The suns (days) shine.' },
      ],
      mistake: 'Words cannot be mixed in any order or with any marker. Write Izinja ziyabhonga, not Izinja iyabhonga.',
    },
  ],
  checks: [
    { q: 'Which connector shows contrast: kodwa, kuba, kwaye?', a: 'kodwa (but)' },
    { q: 'Which connector gives a reason: kuba, kwaye, kodwa?', a: 'kuba (because)' },
    { q: 'Make passive: Umfundi ufunda incwadi.', a: 'Incwadi ifundwa ngumfundi.' },
    { q: 'Add a question tag: Ufunda eGrade 9, ___?', a: 'andithi? (or akunjalo?)' },
  ],
};

export default lesson;
