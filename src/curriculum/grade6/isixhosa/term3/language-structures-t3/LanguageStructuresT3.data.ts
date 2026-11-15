import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 6. Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Future tense',
      rule: 'The future tense says what will happen. Put za and ku- before the verb: Siza kuya means We will go.',
      wordParts: { word: 'Siza kuya', en: 'We will go', parts: [{ t: 'si', label: 'we' }, { t: 'za', label: 'will' }, { t: 'ku', label: 'to' }, { t: 'ya', label: 'go' }] },
      workedTitle: 'Tomorrow it will happen',
      examples: [
        { xh: 'Siza kuya eKapa ngomso.', en: 'We will go to Cape Town tomorrow.' },
        { xh: 'Ndiza kufunda ngomso.', en: 'I will study tomorrow.' },
      ],
      mistake: 'Leaving out za when you talk about tomorrow. Say Ndiza kufunda ngomso for I will study tomorrow.',
    },
    {
      title: 'Conjunctions and connectors',
      rule: 'A conjunction joins words or ideas: kwaye (and), kodwa (but), kuba (because). A connector shows order: emva koko means then.',
      workedTitle: 'Joining ideas',
      examples: [
        { xh: 'Ndiyafunda kwaye ndiyabhala.', en: 'I study and I write.' },
        { xh: 'Ndiyafunda kuba ndifuna ukuphumelela.', en: 'I study because I want to pass.' },
        { xh: 'Siyafunda, emva koko siyadlala.', en: 'We study, then we play.' },
      ],
      mistake: 'Writing short sentences with no link. A conjunction makes writing smoother.',
    },
    {
      title: 'Question words',
      rule: 'Question words ask for specific information. Kutheni asks for a reason; phi asks where; nini asks when.',
      workedTitle: 'Asking for a reason, a place, a time',
      examples: [
        { xh: 'Kutheni ufunda?', en: 'Why are you studying?' },
        { xh: 'Uhlala phi?', en: 'Where do you live?' },
        { xh: 'Ufika nini?', en: 'When do you arrive?' },
      ],
      mistake: 'Using phi when you want a reason. Phi is for place; kutheni is for why.',
    },
    {
      title: 'Noun classes and agreement',
      rule: 'Nouns belong to groups called noun classes. The verb must agree with the noun: umfundi takes u-, abafundi takes ba-.',
      workedTitle: 'Noun and verb agree',
      examples: [
        { xh: 'Umfundi uyafunda.', en: 'The learner is studying.' },
        { xh: 'Abafundi bayafunda.', en: 'The learners are studying.' },
        { xh: 'incwadi → iincwadi', en: 'book → books' },
      ],
      mistake: 'Using the singular marker with a plural noun. Match the verb to the noun.',
      vocab: [
        { word: 'Kwaye', meaning: 'And' },
        { word: 'Kodwa', meaning: 'But' },
        { word: 'Kuba', meaning: 'Because' },
        { word: 'Kutheni?', meaning: 'Why?' },
      ],
    },
  ],
  checks: [
    { q: 'Say “I will study tomorrow.”', a: 'Ndiza kufunda ngomso.' },
    { q: 'Which word means because: kuba or kodwa?', a: 'kuba' },
    { q: 'You want to know the reason for something. Which question word do you use?', a: 'Kutheni (why).' },
    { q: 'Complete: Abafundi ___ (bayafunda or uyafunda).', a: 'bayafunda' },
  ],
};

export default lesson;
