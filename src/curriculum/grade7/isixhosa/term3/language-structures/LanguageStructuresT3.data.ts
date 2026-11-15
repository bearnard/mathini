import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 7 Term 3. Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Connectors for cause and contrast',
      rule: 'Kuba (because) gives a reason. Kodwa (but) shows contrast. Put a comma before the connector.',
      workedTitle: 'Reason and contrast',
      examples: [
        { xh: 'Ndafunda kuba ndifuna amanqaku aphezulu.', en: 'I studied because I want high marks.' },
        { xh: 'Ndiyafuna ukudlala, kodwa imvula iyanetha.', en: 'I want to play, but it is raining.' },
      ],
      mistake: 'Using kodwa for a reason. Kodwa contrasts two ideas; kuba explains why.',
    },
    {
      title: 'Connectors for adding, results and time',
      rule: 'Kwaye (and) adds an idea. Ngoko (so) gives a result. Xa (when, if) links a condition or a time.',
      workedTitle: 'Adding, result and time',
      examples: [
        { xh: 'Ndiyafunda, kwaye ndifuna ukuphumelela.', en: 'I study, and I want to pass.' },
        { xh: 'Imvula iyanetha, ngoko sihlala ekhaya.', en: 'It is raining, so we stay at home.' },
        { xh: 'Xa imvula inetha, sihlala ekhaya.', en: 'When it rains, we stay at home.' },
      ],
      mistake: 'Writing two sentences with no link. Choose a connector so that the ideas flow.',
    },
    {
      title: 'Past and future tense with time words',
      rule: 'Match the verb to the time word. Izolo goes with the past; ngomso with the future (za + ku-).',
      workedTitle: 'Same words, different time',
      examples: [
        { xh: 'Sabhala uvavanyo izolo.', en: 'We wrote the test yesterday.' },
        { xh: 'Baza kuthetha ngomso.', en: 'They will speak tomorrow.' },
        { xh: 'Namhlanje siyafunda.', en: 'Today we are studying.' },
      ],
      mistake: 'Mixing the time word and the verb: Izolo baza kuthetha is wrong because izolo is past and baza ku- is future.',
    },
    {
      title: 'Concords and punctuation',
      rule: 'The verb agrees with the noun: abantwana takes ba-. Use a comma between two linked clauses and a full stop at the end.',
      workedTitle: 'Agreement and commas',
      examples: [
        { xh: 'Abantwana bayacula.', en: 'The children are singing.' },
        { xh: 'Umntwana uyacula.', en: 'The child is singing.' },
        { xh: 'Ndiyafunda, ngoko ndiya kuphumelela.', en: 'I study, so I will pass.' },
      ],
      mistake: 'Using u- with a plural noun. Abantwana uyacula is wrong; write Abantwana bayacula.',
      vocab: [
        { word: 'Kwaye', meaning: 'And' },
        { word: 'Kodwa', meaning: 'But' },
        { word: 'Ngoko', meaning: 'So / therefore' },
        { word: 'Xa', meaning: 'When / if' },
      ],
    },
  ],
  checks: [
    { q: 'Complete: Ndafunda ___ ndifuna amanqaku aphezulu. (kuba or kodwa)', a: 'kuba (it gives the reason)' },
    { q: 'Which connector shows contrast: kodwa or kwaye?', a: 'kodwa (but)' },
    { q: 'Complete: Ndiyafunda, ___ ndifuna ukuphumelela. (kwaye or kuba)', a: 'kwaye (and adds an idea)' },
    { q: 'Say “The children are singing.”', a: 'Abantwana bayacula.' },
  ],
};

export default lesson;
