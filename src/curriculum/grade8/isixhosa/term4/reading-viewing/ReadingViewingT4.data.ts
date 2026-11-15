import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 8 Term 4, Reading & Viewing (revision). Every isiXhosa line is listed in audit/xhosa-g8-teacher-notes.md for a first-language check.
// Longer texts are described in English: a teacher should supply an isiXhosa example for each genre.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Match your strategy to the genre',
      rule: 'Each text type needs its own questions. Story: character, events, message. Poem: mood, imagery, message. Media text: purpose and audience. Drama: who speaks and the conflict.',
      workedTitle: 'Four genres, four focus points',
      examples: [
        { xh: 'Ibali', en: 'Story: ask who, what happens, what the message is.' },
        { xh: 'Umbongo', en: 'Poem: ask about mood and images.' },
        { xh: 'Isibhengezo', en: 'Advert: ask about purpose and audience.' },
        { xh: 'Umdlalo', en: 'Play: ask who is speaking and what the conflict is.' },
      ],
      mistake: 'Do not use one strategy for every text. Adapt it to the genre.',
    },
    {
      title: 'Summarising: keep the main points',
      rule: 'A good summary keeps the main points only. Leave out repeated details, minor examples and quotations. Use your own words and keep it short.',
      workedTitle: 'From a text to a summary',
      examples: [
        { xh: 'UThando uthanda iincwadi. Uya ethala leencwadi ngeCawa. Ufunda amabali amaninzi.', en: 'Thando likes books. She goes to the library on Sunday. She reads many stories.' },
        { xh: 'UThando uthanda ukufunda.', en: 'Summary: Thando likes reading.' },
      ],
      mistake: 'Do not copy every detail or example into a summary. Choose what is essential.',
    },
    {
      title: 'Evidence and comparing texts',
      rule: 'Evidence retrieval means finding the exact supporting detail in the text. If two texts disagree, compare their evidence with care and do not ignore one of them.',
      workedTitle: 'Answer, then prove it',
      examples: [
        { xh: 'Imvula iyana. USipho uhlala ekhaya.', en: 'It is raining. Sipho stays at home.' },
        { xh: 'Ngoba imvula iyana.', en: 'Answer with evidence: because it is raining.' },
        { xh: 'Ilanga liphumile.', en: 'A second text says the sun is out: compare when each was written before you decide.' },
      ],
      mistake: 'A guess or a bare opinion is not evidence. Quote or point to the line in the text.',
    },
  ],
  checks: [
    { q: 'What does a good summary keep?', a: 'The main points only.' },
    { q: 'What should you focus on when you revise poems?', a: 'Mood, imagery and message.' },
    { q: 'What do you identify in a media text?', a: 'Its purpose and audience.' },
    { q: 'What does evidence retrieval mean?', a: 'Finding the exact supporting details in the text.' },
  ],
};

export default lesson;
