import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 7 Term 1, Reading & Viewing. Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.
// Notices, adverts and poems below are described in English: a teacher should supply an isiXhosa example for each.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Find the main idea and the key details',
      rule: 'The main idea is the most important message of a text. Find the details with question words: ngubani? (who), phi? (where), nini? (when), kutheni? (why).',
      workedTitle: 'Read the story, then ask who, where and what',
      examples: [
        { xh: 'Litha ufunda eGrade 7. Emva kwesikolo uya evenkileni. Uthenga isonka.', en: 'Litha is in Grade 7. After school he goes to the shop. He buys bread.' },
        { xh: 'Litha uya phi emva kwesikolo?', en: 'Where does Litha go after school? (Answer: evenkileni, to the shop)' },
        { xh: 'Uthenga ntoni?', en: 'What does he buy? (Answer: isonka, bread)' },
      ],
      mistake: 'The main idea is not the first hard word or the longest sentence. It is the message the whole text is about.',
    },
    {
      title: 'Put events in order',
      rule: 'Sequencing means putting events in the correct order. Look for time words: kuqala (first), emva koko (then), ekugqibeleni (finally).',
      workedTitle: 'Sequence a day',
      examples: [
        { xh: 'Kuqala Litha uyaphaphama.', en: 'First Litha wakes up.' },
        { xh: 'Emva koko uya esikolweni.', en: 'Then he goes to school.' },
        { xh: 'Ekugqibeleni ubuyela ekhaya.', en: 'Finally he returns home.' },
      ],
      mistake: 'Do not order events by how long the sentences are. Follow the time words and the story.',
    },
    {
      title: 'Notices and advertisements',
      rule: 'An isaziso (notice) gives facts such as a time or a place. An isibhengezo (advert or poster) tries to make you buy or do something.',
      workedTitle: 'What detail does each text give? (English examples; a teacher supplies isiXhosa texts)',
      examples: [
        { xh: 'Isaziso', en: 'Notice: “Library closes at 14:00.” Detail: the closing time.' },
        { xh: 'Isibhengezo', en: 'Advert: “50% off school bags this Friday!” It wants you to buy.' },
        { xh: 'Umfanekiso', en: 'Picture: a red circle with a cigarette crossed out means No smoking.' },
      ],
      mistake: 'A family tree, a dictionary page or a class register is not an advert. An advert always invites you to buy or do something.',
    },
    {
      title: 'Poems and visual literacy',
      rule: 'In an umbongo (poem), look for the mood and the key images. Visual literacy means you can read meaning from pictures, signs and layout.',
      workedTitle: 'Reading a poem and a sign',
      examples: [
        { xh: 'Umbongo', en: 'Poem: ask what feeling the words give and which pictures they paint.' },
        { xh: 'Umfanekiso', en: 'Picture: study the colours, the size of items and where they are placed.' },
        { xh: 'Akuvumelekanga ukutshaya.', en: 'Smoking is not allowed. (a no-smoking sign)' },
      ],
      mistake: 'Do not read only the last line of a poem or ignore repeated words. Repetition often shows what the poet feels most strongly.',
      vocab: [
        { word: 'Ibali', phonetic: "[i'baːli]", meaning: 'Story' },
        { word: 'Isaziso', phonetic: "[isa'ziːso]", meaning: 'Notice' },
        { word: 'Isibhengezo', phonetic: "[isi.bhɛŋ'gɛːzo]", meaning: 'Advertisement / poster' },
        { word: 'Umbongo', phonetic: "[um'bɔŋgɔ]", meaning: 'Poem' },
      ],
    },
  ],
  checks: [
    { q: 'What is the main idea of a text?', a: 'The most important message of the whole text.' },
    { q: 'Order these: ubuyela ekhaya (returns home), uyaphaphama (wakes up), uya esikolweni (goes to school).', a: 'uyaphaphama, uya esikolweni, ubuyela ekhaya' },
    { q: 'A poster says “50% off school bags this Friday!” Is it a notice or an advert?', a: 'An advert (isibhengezo): it invites you to buy.' },
    { q: 'What do you look for when you read a short poem?', a: 'The mood and the key images.' },
  ],
};

export default lesson;
