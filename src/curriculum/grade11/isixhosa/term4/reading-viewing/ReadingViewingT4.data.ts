import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 11 Term 4, Reading & Viewing. Every isiXhosa line is listed in audit/xhosa-g11-12-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Literature: theme, character, quotation',
      rule: 'Find the theme from what characters do and say. A dynamic character changes; a static character stays the same. When you quote, keep it short, fit it into your sentence, and always explain what it shows.',
      workedTitle: 'Dynamic character and a quotation',
      examples: [
        { xh: 'Wayeyoyika, ngoku unesibindi.', en: 'He/she used to be afraid, now has courage. (dynamic)' },
        { xh: 'Uhlala enjalo.', en: 'He/she stays the same. (static)' },
        { xh: 'Umbhali uthi: "Andinakuthula xa ubulungisa bunyathelwa."', en: 'The writer says: "I cannot be silent when justice is trampled."' },
        { xh: 'Oku kubonisa ukuba umlinganiswa ufuna ubulungisa.', en: 'This shows that the character wants justice. (explanation)' },
      ],
      mistake: 'A quotation without explanation earns little. Use plot events, dialogue and actions as evidence, not the author\'s biography or the cover.',
      vocab: [
        { word: 'Umlinganiswa', meaning: 'Character' },
        { word: 'Ubulungisa', meaning: 'Justice' },
      ],
    },
    {
      title: 'Comprehension: literal and inferential',
      rule: 'A literal question is answered directly from the text. An inferential question needs reading between the lines. Use clues in the text to infer attitude or meaning, and use context to work out an unknown word.',
      workedTitle: 'Read, then ask two kinds of question',
      examples: [
        { xh: 'USipho uhamba umgama omde ukuya esikolweni. Uvuka ngentsimbi yesihlanu. Akaze afike emva kwexesha.', en: 'Sipho walks a long way to school. He wakes at five o\'clock. He never arrives late.' },
        { xh: 'USipho uvuka nini?', en: 'When does Sipho wake? (literal: at five o\'clock)' },
        { xh: 'Ngoko uzimisele ngemfundo.', en: 'So he is determined about education. (inference from the clues)' },
      ],
      mistake: 'Do not leave an unknown word blank. Use the sentence around it to guess the meaning, and do not translate it word for word.',
    },
    {
      title: 'Visual texts: purpose, audience, caption',
      rule: 'For an advert or cartoon, identify the purpose first, then the audience. Look at colour connotations, facial expression and the tagline. The tagline works with the picture to give one message.',
      workedTitle: 'Analyse an advert',
      examples: [
        { xh: 'Funda, uphumelele!', en: 'Study and succeed! (tagline)' },
        { xh: 'Isibhengezo sikhuthaza abafundi.', en: 'The advert encourages learners. (purpose and audience)' },
        { xh: 'Ubuso bukhathazekile.', en: 'The face is worried. (facial expression)' },
      ],
      mistake: 'Do not start by counting colours or measuring the picture. Start with purpose: what is the text trying to achieve?',
      vocab: [
        { word: 'Isibhengezo', phonetic: "[isi.bhɛŋ'gɛːzo]", meaning: 'Advert / poster' },
        { word: 'Umbongo', phonetic: "[um'bɔŋgɔ]", meaning: 'Poem' },
      ],
    },
    {
      title: 'Summary writing: exam technique',
      rule: 'Underline the main points, write rough notes in your own words, then write the summary with the number of points asked for. Proofread concord, tense and spelling. Never copy sentences word for word, add detail or change the meaning.',
      workedTitle: 'From passage to summary point',
      examples: [
        { xh: 'USipho uzimisele ngemfundo.', en: 'Sipho is determined about education. (one summary point: the main idea, which the long walk and early waking show)' },
        { xh: 'Isishwankathelo', en: 'Summary (a short version in your own words)' },
        { xh: 'Ingcinga ephambili', en: 'The main idea' },
      ],
      mistake: 'Marks go per relevant point. Extra points earn nothing and can add errors, and copying earns no credit.',
      vocab: [
        { word: 'Isishwankathelo', phonetic: "[isiʃwaŋka'tʰeːlɔ]", meaning: 'Summary' },
        { word: 'Ingcinga', phonetic: "[iŋ'ciŋga]", meaning: 'Idea / thought' },
      ],
    },
  ],
  checks: [
    { q: 'What does a dynamic character do? Which example shows one: "Wayeyoyika, ngoku unesibindi" or "Uhlala enjalo"?', a: 'A dynamic character changes. "Wayeyoyika, ngoku unesibindi" (afraid, now has courage).' },
    { q: 'Literal or inferential: "USipho uvuka ngentsimbi yesihlanu" and "Ngoko uzimisele ngemfundo"?', a: 'The first is literal (stated). The second is inferential (read between the lines).' },
    { q: 'What do you identify FIRST when analysing an advert?', a: 'Its purpose: what it is trying to achieve.' },
    { q: 'Why must you keep to the required number of points in a summary?', a: 'Marks are given per relevant point; extra points earn nothing and may add mistakes.' },
  ],
};

export default lesson;
