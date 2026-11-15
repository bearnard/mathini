import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 6. Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Write an invitation',
      rule: 'A formal invitation must show the date (umhla), the time (ixesha) and the venue (indawo). Open with a warm line.',
      workedTitle: 'An invitation',
      examples: [
        { xh: 'Umenywa ngokufudumeleyo kumnyhadala wenkcubeko.', en: 'You are warmly invited to our cultural day celebration.' },
        { xh: 'Umhla:', en: 'Date:' },
        { xh: 'Ixesha:', en: 'Time:' },
        { xh: 'Indawo:', en: 'Venue:' },
      ],
      mistake: 'Leaving out the date, the time or the venue. Guests then cannot come.',
    },
    {
      title: 'Write directions',
      rule: 'Directions are steps in logical order. Use landmarks and clear words: hamba tye (go straight), jika (turn).',
      workedTitle: 'Directions in order',
      examples: [
        { xh: 'Hamba tye.', en: 'Go straight.' },
        { xh: 'Jika ngasekunene.', en: 'Turn right.' },
        { xh: 'Ivenkile ikufuphi nesikolo.', en: 'The shop is near the school.' },
      ],
      mistake: 'Giving the steps in the wrong order. Check each step one by one.',
    },
    {
      title: 'Write a short recount',
      rule: 'A recount describes events that happened, in the order they happened. Link the events with a word such as emva koko (then).',
      workedTitle: 'A recount in order',
      examples: [
        { xh: 'Izolo siye kwidolophu.', en: 'Yesterday we went to town.' },
        { xh: 'Emva koko sathenga isonka.', en: 'Then we bought bread.' },
      ],
      mistake: 'Jumping around in time. Keep the events in the order they happened.',
    },
    {
      title: 'Plan, connect and edit',
      rule: 'Plan before you draft so that you stay on topic. In a picture paragraph all the sentences describe the same scene. Edit spelling and punctuation.',
      workedTitle: 'A picture paragraph',
      examples: [
        { xh: 'Abantwana badlala ebaleni.', en: 'The children play in the field.' },
        { xh: 'Ilanga liyakhanya.', en: 'The sun is shining.' },
      ],
      mistake: 'Adding a sentence that has nothing to do with the picture.',
      vocab: [
        { word: 'Isimemo', meaning: 'Invitation' },
        { word: 'Indlela', meaning: 'Way / direction' },
        { word: 'Umhla', meaning: 'Date' },
        { word: 'Indawo', meaning: 'Place / venue' },
      ],
    },
  ],
  checks: [
    { q: 'Which three details must a formal invitation show?', a: 'Date, time and venue.' },
    { q: 'Say “Turn right.”', a: 'Jika ngasekunene.' },
    { q: 'Which linking word shows sequence: emva koko or kodwa?', a: 'emva koko (then)' },
    { q: 'What should you check when you edit?', a: 'Spelling and punctuation.' },
  ],
};

export default lesson;
