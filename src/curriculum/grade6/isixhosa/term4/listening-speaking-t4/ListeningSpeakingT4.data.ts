import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 6. Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Talk about feelings and health',
      rule: 'Say how you feel in a full sentence. Impilo means health: talk about healthy habits.',
      workedTitle: 'Feelings',
      examples: [
        { xh: 'Ndonwabile namhlanje.', en: 'I am happy today.' },
        { xh: 'Ndidiniwe.', en: 'I am tired.' },
        { xh: 'Impilo entle', en: 'Good health' },
      ],
      mistake: 'A one-word answer with no context. Use a full sentence.',
    },
    {
      title: 'Revision dialogues',
      rule: 'In a dialogue wait for your turn before you speak. If you do not understand, ask politely for the sentence again.',
      workedTitle: 'A short dialogue',
      examples: [
        { xh: 'A: Uhlala phi?', en: 'A: Where do you live?' },
        { xh: 'B: Ndihlala eGqeberha.', en: 'B: I live in Gqeberha.' },
        { xh: 'Nceda uphinde.', en: 'Please repeat.' },
      ],
      mistake: 'Speaking while your partner is still talking.',
    },
    {
      title: 'A short prepared talk',
      rule: 'Start with a clear opening, use key points in a clear order, and end by thanking your listeners.',
      workedTitle: 'Opening and ending',
      examples: [
        { xh: 'Namhlanje ndiza kuthetha ngempilo entle.', en: 'Today I will talk about good health.' },
        { xh: 'Enkosi ngokumamela.', en: 'Thank you for listening.' },
      ],
      mistake: 'Starting without saying what you will talk about.',
    },
    {
      title: 'Celebrations in the community',
      rule: 'A celebration is an umnyhadala. Talk about who comes, where it is and what people do.',
      workedTitle: 'Talking about a celebration',
      examples: [
        { xh: 'Kukho umnyhadala ekuhlaleni.', en: 'There is a celebration in the community.' },
        { xh: 'Sonwabile kakhulu.', en: 'We are very happy.' },
      ],
      mistake: 'Naming the event but not saying anything about it. Add two or three details.',
      vocab: [
        { word: 'Impilo', meaning: 'Health' },
        { word: 'Uvuyo', meaning: 'Joy' },
        { word: 'Umnyhadala', meaning: 'Celebration / event' },
        { word: 'Phumla', meaning: 'Rest' },
      ],
    },
  ],
  checks: [
    { q: 'Say “I am happy today.”', a: 'Ndonwabile namhlanje.' },
    { q: 'What do you say if you did not hear a sentence?', a: 'Nceda uphinde.' },
    { q: 'How do you end a short oral talk?', a: 'Enkosi ngokumamela.' },
    { q: 'What does umnyhadala mean?', a: 'Celebration / event.' },
  ],
};

export default lesson;
