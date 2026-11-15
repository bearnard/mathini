import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 12 Term 4, Reading & Viewing. Every isiXhosa line is listed in audit/xhosa-g11-12-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Summary writing: five rules',
      rule: 'One: state only main points. Two: use your own words. Three: number the points. Four: stay within the word limit. Five: add no examples or opinions. Summary points are short and clear.',
      workedTitle: 'Passage and one summary point',
      examples: [
        { xh: 'USipho uhamba umgama omde ukuya esikolweni. Uvuka ngentsimbi yesihlanu.', en: 'Sipho walks a long way to school. He wakes at five o\'clock.' },
        { xh: '1. USipho uzimisele ngemfundo.', en: '1. Sipho is determined about education. (numbered, own words; the main idea, which the long walk and early waking show)' },
        { xh: 'Isishwankathelo', en: 'Summary' },
      ],
      mistake: 'Do not rewrite the whole passage, copy it, or add your own opinion. Numbering follows the instructions and shows your points clearly.',
      vocab: [
        { word: 'Isishwankathelo', phonetic: "[isiʃwaŋka'tʰeːlɔ]", meaning: 'Summary' },
        { word: 'Ingcinga', phonetic: "[iŋ'ciŋga]", meaning: 'Idea / thought' },
      ],
    },
    {
      title: 'Comprehension: explicit and implicit',
      rule: 'An explicit question is answered with information stated in the text. An implicit question needs an inference from clues. The mark allocation tells you how much detail to give: more marks usually mean more detail or more than one point.',
      workedTitle: 'Two kinds of question',
      examples: [
        { xh: 'USipho uvuka nini?', en: 'When does Sipho wake? (explicit: he wakes at five)' },
        { xh: 'Kutheni uvuka ekuseni kakhulu?', en: 'Why does he wake early? (implicit: infer from the long walk)' },
        { xh: 'Uhamba umgama omde.', en: 'He walks a long way. (the clue)' },
      ],
      mistake: 'Do not invent an answer beyond the text or give your opinion. Find the line, or find the clue, and base your answer on it.',
    },
    {
      title: 'Visual texts: cartoons, adverts, infographics',
      rule: 'Cartoons: look at the caption, facial expression, symbolism and irony. Adverts: find the target audience, the persuasive appeal and the layout. Infographics: read the labels, the legend, the comparison and the trend.',
      workedTitle: 'Features in isiXhosa',
      examples: [
        { xh: 'Ubuso bonwabile.', en: 'The face is happy. (cartoon: facial expression)' },
        { xh: 'Funda, uphumelele!', en: 'Study and succeed! (advert: appeal to learners)' },
        { xh: 'Isibhengezo sikhuthaza abafundi.', en: 'The advert encourages learners. (target audience)' },
      ],
      mistake: 'Page thickness, binding colour or the ISBN do not matter. The target audience is the group the text wants to influence.',
      vocab: [
        { word: 'Isibhengezo', phonetic: "[isi.bhɛŋ'gɛːzo]", meaning: 'Advert / poster' },
        { word: 'Umbongo', phonetic: "[um'bɔŋgɔ]", meaning: 'Poem' },
      ],
    },
    {
      title: 'Literature: P-E-E and time',
      rule: 'P-E-E means Point, Evidence, Explanation. Make your point, quote the text as evidence, then explain how it supports the point. Budget your time so you can finish every section, and answer the question that was asked.',
      workedTitle: 'One P-E-E answer',
      examples: [
        { xh: 'Point: Umlinganiswa ufuna ubulungisa.', en: 'Point: The character wants justice.' },
        { xh: 'Evidence: "Andinakuthula xa ubulungisa bunyathelwa."', en: 'Evidence: "I cannot be silent when justice is trampled."' },
        { xh: 'Explanation: Oku kubonisa ukuba akanakuvuma ukungabikho kobulungisa.', en: 'Explanation: This shows he/she cannot accept injustice.' },
      ],
      mistake: 'A quotation alone is not an answer. Always add the explanation, and do not spend all your time on one question.',
    },
  ],
  checks: [
    { q: 'Name two of the five summary rules.', a: 'For example: state only main points; use your own words; number the points; stay within the word limit; add no examples or opinions.' },
    { q: 'Explicit or implicit: "USipho uvuka nini?" and "Kutheni uvuka ekuseni kakhulu?"', a: 'The first is explicit (stated); the second is implicit (inferred from clues).' },
    { q: 'What is a target audience, and which cartoon feature shows attitude?', a: 'The group the text is meant to influence. Facial expression shows attitude (e.g. Ubuso bonwabile).' },
    { q: 'What does P-E-E stand for?', a: 'Point, Evidence, Explanation.' },
  ],
};

export default lesson;
