import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 7 Term 2. Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Shopping: asking for things and prices',
      rule: 'Ask politely with Ndicela (I request) or Ndingathenga ... nceda? (May I buy ... please?). Ask the price with Malini?',
      workedTitle: 'At the shop',
      examples: [
        { xh: 'Ndingathenga amasi, nceda?', en: 'May I buy amasi, please?' },
        { xh: 'Malini le nto?', en: 'How much is this?' },
        { xh: 'Ndicela isonka.', en: 'Please may I have bread.' },
      ],
      mistake: 'Do not demand: Nika amasi! (Give me amasi!) sounds rude. Add nceda or start with ndicela.',
    },
    {
      title: 'Directions',
      rule: 'Jika means turn. Ngasekunene is to the right and ngasekhohlo to the left. Qhubeka ngqo means go straight on. Note each step in order.',
      workedTitle: 'Giving and following directions',
      examples: [
        { xh: 'Jika ngasekunene.', en: 'Turn right.' },
        { xh: 'Jika ngasekhohlo.', en: 'Turn left.' },
        { xh: 'Qhubeka ngqo.', en: 'Go straight on.' },
        { xh: 'Isikhululo sikufuphi nevenkile.', en: 'The station is near the shop.' },
      ],
      mistake: 'Mixing up left and right. Listen for ekunene (right) and ekhohlo (left) and write each step down in order.',
    },
    {
      title: 'Transport and asking for help',
      rule: 'Ask for help with Nceda (please). Use the place name after iya (goes to) to talk about transport.',
      workedTitle: 'At the taxi rank or bus stop',
      examples: [
        { xh: 'Ibhasi iya eKapa.', en: 'The bus goes to Cape Town.' },
        { xh: 'Nceda undibonise indlela.', en: 'Please show me the way.' },
        { xh: 'Isikhululo sikuphi?', en: 'Where is the station?' },
      ],
      mistake: 'Do not skip the greeting and the polite word. A request without nceda can sound like an order.',
    },
    {
      title: 'A service encounter',
      rule: 'Close with thanks. Say Enkosi ngoncedo lwakho (thank you for your help); the answer is Wamkelekile (you are welcome).',
      workedTitle: 'A short role play',
      examples: [
        { xh: 'A: Molo. Nceda undibonise indlela.', en: 'A: Hello. Please show me the way.' },
        { xh: 'B: Jika ngasekunene.', en: 'B: Turn right.' },
        { xh: 'A: Enkosi ngoncedo lwakho.', en: 'A: Thank you for your help.' },
        { xh: 'B: Wamkelekile.', en: 'B: You are welcome.' },
      ],
      mistake: 'Walking away without thanks. Always end a service encounter with Enkosi.',
      vocab: [
        { word: 'Ndicela', meaning: 'Please / I request' },
        { word: 'Indlela', meaning: 'Way / direction' },
        { word: 'Ekhohlo', meaning: 'Left' },
        { word: 'Ekunene', meaning: 'Right' },
      ],
    },
  ],
  checks: [
    { q: 'What does “Malini le nto?” ask?', a: 'The price: how much is this?' },
    { q: 'Someone says “Jika ngasekunene.” Which way do you turn?', a: 'Right.' },
    { q: 'Say “Please show me the way.”', a: 'Nceda undibonise indlela.' },
    { q: 'How do you thank someone for their help?', a: 'Enkosi ngoncedo lwakho.' },
  ],
};

export default lesson;
