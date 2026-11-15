import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 7 Term 4 (revision). Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Talk about feelings',
      rule: 'Share a feeling in a complete sentence. Use ndiziva (I feel) or a describing word such as ndonwabile (I am happy) and ndidiniwe (I am tired).',
      workedTitle: 'Sharing a feeling',
      examples: [
        { xh: 'Namhlanje ndiziva ndonwabile.', en: 'Today I feel happy.' },
        { xh: 'Ndidiniwe.', en: 'I am tired.' },
        { xh: 'Ndifuna ukuphumla.', en: 'I want to rest.' },
      ],
      mistake: 'One-word answers such as Ndonwabile with no context. Use a full sentence.',
    },
    {
      title: 'Health and healthy habits',
      rule: 'Impilo means health. Talk about healthy habits with the infinitive: ukutya (to eat), ukuphumla (to rest).',
      workedTitle: 'Healthy habits',
      examples: [
        { xh: 'Kufuneka sitye ukutya okunempilo.', en: 'We must eat healthy food.' },
        { xh: 'Kufuneka siphumle.', en: 'We must rest.' },
      ],
      mistake: 'Saying that sweets and fast food are a healthy habit because they taste good.',
    },
    {
      title: 'Future plans and a short talk',
      rule: 'Use za + ku- for a plan. In a prepared talk, first introduce your topic, then give two or three points, then thank your listeners.',
      workedTitle: 'Plans and a talk opening',
      examples: [
        { xh: 'Ndiza kufunda nzima kulo nyaka uzayo.', en: 'I will study hard next year.' },
        { xh: 'Namhlanje ndiza kuthetha ngempilo.', en: 'Today I will talk about health.' },
      ],
      mistake: 'Starting a talk in the middle. Always introduce the topic first.',
    },
    {
      title: 'Discussion and delivery',
      rule: 'Disagree politely and listen first. Speak at a steady pace so that listeners can follow the message.',
      workedTitle: 'Polite discussion',
      examples: [
        { xh: 'Ndiyavuma, kwaye ndinoluvo olongezelelweyo.', en: 'I agree, and I have an extra opinion.' },
        { xh: 'Andivumi.', en: 'I do not agree.' },
      ],
      mistake: 'Speaking too fast. Listeners lose the message if the pace is rushed.',
      vocab: [
        { word: 'Impilo', meaning: 'Health' },
        { word: 'Uvuyo', meaning: 'Joy' },
        { word: 'Usizi', meaning: 'Sadness' },
        { word: 'Phumla', meaning: 'Rest' },
      ],
    },
  ],
  checks: [
    { q: 'Say “Today I feel happy.”', a: 'Namhlanje ndiziva ndonwabile.' },
    { q: 'What does impilo mean?', a: 'Health.' },
    { q: 'What do you do first in a short prepared talk?', a: 'Introduce your topic.' },
    { q: 'Why does pace matter in a talk?', a: 'It helps listeners understand the message.' },
  ],
};

export default lesson;
