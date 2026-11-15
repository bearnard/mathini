import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 8 Term 2, Language Structures. Every isiXhosa line is listed in audit/xhosa-g8-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Pronouns and concord',
      rule: 'An isimelabizo (pronoun) stands for a noun: mna (I), wena (you), yena (he, she), thina (we), nina (you all), bona (they). The verb marker must agree: ndi-, u-, u-, si-, ni-, ba-.',
      wordParts: { word: 'Bayabhala', en: 'They are writing', parts: [{ t: 'ba', label: 'they' }, { t: 'ya', label: 'now' }, { t: 'bhal', label: 'write' }, { t: 'a', label: 'ending' }] },
      workedTitle: 'Pronoun + matching verb marker',
      examples: [
        { xh: 'Mna ndifunda.', en: 'I am studying.' },
        { xh: 'Thina sifunda.', en: 'We are studying.' },
        { xh: 'Bona bafunda.', en: 'They are studying.' },
        { xh: 'Abafundi bayabhala uvavanyo.', en: 'The learners are writing the test.' },
      ],
      mistake: 'A pronoun does not replace the verb marker, and the marker must fit the subject. Abafundi uyabhala is wrong; write Abafundi bayabhala.',
    },
    {
      title: 'Question forms',
      rule: 'A statement becomes a question with a question mark and a rising voice, or with ingaba at the start. Or use a question word: ntoni (what), phi (where), nini (when), kutheni (why).',
      workedTitle: 'Three ways to ask',
      examples: [
        { xh: 'Uyafunda namhlanje?', en: 'Are you studying today?' },
        { xh: 'Ingaba uyafunda namhlanje?', en: 'Are you studying today? (with ingaba)' },
        { xh: 'Ufunda ntoni?', en: 'What are you studying?' },
        { xh: 'Kutheni ufunda?', en: 'Why are you studying?' },
      ],
      mistake: 'A question written with a full stop reads as a statement. Always end a question with ?.',
    },
    {
      title: 'Conjunctions link ideas',
      rule: 'A conjunction joins two ideas: kuba (because), kodwa (but), okanye (or), kwaye (and), xa (when). Choose one that fits the meaning.',
      workedTitle: 'Link two ideas',
      examples: [
        { xh: 'Ndifunda kuba ndifuna impumelelo.', en: 'I study because I want success.' },
        { xh: 'Ndifuna ukudlala kodwa ndifunda.', en: 'I want to play but I am studying.' },
        { xh: 'Ndiyafunda kwaye ndiyabhala.', en: 'I am studying and I am writing.' },
        { xh: 'Ndiza kudlala xa ndigqibile.', en: 'I will play when I have finished.' },
      ],
      mistake: 'Do not pile conjunctions together, as in kuba kodwa. One conjunction that fits the meaning is enough.',
    },
    {
      title: 'Direct and indirect speech',
      rule: 'Direct speech gives the exact words in quotation marks. Indirect speech reports what was said, without quotation marks, and the pronoun changes: ndi- becomes u- or ba-.',
      workedTitle: 'Change direct speech to indirect speech',
      examples: [
        { xh: 'USipho uthi, “Ndiyafunda.”', en: 'Sipho says, “I am studying.” (direct)' },
        { xh: 'USipho uthi uyafunda.', en: 'Sipho says he is studying. (indirect)' },
        { xh: 'UThando uthi, “Siyadlala.”', en: 'Thando says, “We are playing.” (direct)' },
        { xh: 'UThando uthi bayadlala.', en: 'Thando says they are playing. (indirect)' },
      ],
      mistake: 'Do not keep the speaker’s ndi- in indirect speech. Check pronouns and keep the tense the same.',
    },
  ],
  checks: [
    { q: 'Which word is a pronoun: bona, isikolo or baleka?', a: 'bona (they)' },
    { q: 'Make a question: Uyafunda namhlanje.', a: 'Uyafunda namhlanje? (or Ingaba uyafunda namhlanje?)' },
    { q: 'Join with kuba: Ndifunda. Ndifuna impumelelo.', a: 'Ndifunda kuba ndifuna impumelelo.' },
    { q: 'Change to indirect speech: USipho uthi, “Ndiyafunda.”', a: 'USipho uthi uyafunda. (no quotation marks; ndi- becomes u-)' },
  ],
};

export default lesson;
