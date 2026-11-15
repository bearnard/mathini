import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 8 Term 1, Reading & Viewing. Every isiXhosa line is listed in audit/xhosa-g8-teacher-notes.md for a first-language check.
// Adverts, poems and visual texts are described in English: a teacher should supply an isiXhosa example for each.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Advertisements and visual literacy',
      rule: 'An isibhengezo (advertisement) wants to persuade you to buy or do something. Visual literacy means reading meaning from images, layout and symbols, not only words.',
      workedTitle: 'What does each text want from you? (teacher to supply an isiXhosa example)',
      examples: [
        { xh: 'Thenga namhlanje!', en: 'Buy today! A slogan that persuades.' },
        { xh: 'Tyhala', en: 'Push: a door sign that gives an instruction.' },
        { xh: 'Tsala', en: 'Pull: a door sign that gives an instruction.' },
      ],
      mistake: 'Do not read only the words. The picture, the colours and the size of the letters also carry the message.',
    },
    {
      title: 'Main idea and supporting details',
      rule: 'The main idea is what the whole text is mostly about. Supporting details are the evidence that backs it up. Ask: who, where, when, what?',
      workedTitle: 'Read the short text, then ask the questions',
      examples: [
        { xh: 'UThando uthanda iincwadi. Uya ethala leencwadi. Ufunda ibali elihle.', en: 'Thando likes books. She goes to the library. She reads a nice story.' },
        { xh: 'UThando uya phi?', en: 'Where does Thando go? (ethala leencwadi, to the library)' },
        { xh: 'Uthanda ntoni uThando?', en: 'What does Thando like? (iincwadi, books: this is the main idea)' },
      ],
      mistake: 'The main idea is not the first sentence by default or the hardest word. It is the message of the whole text.',
    },
    {
      title: 'Sequencing events in a story',
      rule: 'Sequence questions ask you to order events. Follow the time words: kuqala (first), emva koko (then), ekugqibeleni (finally).',
      workedTitle: 'Put the story in order',
      examples: [
        { xh: 'Kuqala uThando uyangena ethala leencwadi.', en: 'First Thando goes into the library.' },
        { xh: 'Emva koko ukhetha ibali.', en: 'Then she chooses a story.' },
        { xh: 'Ekugqibeleni uyalifunda.', en: 'Finally she reads it.' },
      ],
      mistake: 'Do not order events by the length of the sentences. Use the time words and what happens.',
    },
    {
      title: 'Poems and words in context',
      rule: 'In an umbongo (poem), look for mood (the feeling it creates), key images and repeated words, which often stress an idea. For a hard word, use the nearby sentences as clues.',
      workedTitle: 'Reading a poem closely (teacher to supply an isiXhosa poem)',
      examples: [
        { xh: 'Umbongo', en: 'Poem: ask what feeling the words give and which pictures they paint.' },
        { xh: 'Ilanga liphumile.', en: 'The sun has come out. (a bright, happy image)' },
        { xh: 'Imvula iyana.', en: 'It is raining. (the nearby words show if the mood is gloomy or calm)' },
      ],
      mistake: 'Do not skip repeated words or translate every line first. Use context clues and give evidence from the text.',
    },
  ],
  checks: [
    { q: 'What is the main purpose of an advertisement?', a: 'To persuade the audience to buy or do something.' },
    { q: 'Order: ekugqibeleni uyalifunda, kuqala uyangena, emva koko ukhetha.', a: 'kuqala uyangena, emva koko ukhetha, ekugqibeleni uyalifunda' },
    { q: 'A poem repeats one word many times. What does this often do?', a: 'It emphasises an idea or a mood.' },
    { q: 'What is a supporting detail?', a: 'Evidence from the text that backs up the main idea.' },
  ],
};

export default lesson;
