import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 8 Term 2, Listening & Speaking. Every isiXhosa line is listed in audit/xhosa-g8-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'An oral presentation: opening, body, closing',
      rule: 'Start with a greeting and a clear opening statement of your topic. Give your main points in order. End with a closing line and thank the audience.',
      workedTitle: 'Opening and closing lines',
      examples: [
        { xh: 'Molweni nonke. Igama lam nguLitha.', en: 'Hello everyone. My name is Litha.' },
        { xh: 'Namhlanje ndiza kuthetha ngebhola.', en: 'Today I will talk about football.' },
        { xh: 'Enkosi ngokumamela.', en: 'Thank you for listening.' },
      ],
      mistake: 'Do not start without a greeting or a topic, and do not rush. Speak at a steady pace.',
    },
    {
      title: 'Interviews: polite and complete answers',
      rule: 'In an interview, the interviewer asks short polite questions and the speaker answers in full sentences that are relevant to the question.',
      workedTitle: 'A short interview',
      examples: [
        { xh: 'Uhlala phi?', en: 'Where do you live?' },
        { xh: 'Uthanda ntoni?', en: 'What do you like?' },
        { xh: 'Ndiyathanda ukudlala ibhola.', en: 'I like playing football.' },
        { xh: 'Enkosi ngexesha lakho.', en: 'Thank you for your time.' },
      ],
      mistake: 'Do not answer with one random word, or change the question. Answer what was asked, politely and completely.',
    },
    {
      title: 'Everyday transactions',
      rule: 'Transaction language is used when you buy something or ask for a service. Greet, ask politely, ask the price, and say thank you.',
      workedTitle: 'At the shop',
      examples: [
        { xh: 'Molo, ndicela isonka.', en: 'Hello, I would like bread.' },
        { xh: 'Kubiza malini?', en: 'How much does it cost?' },
        { xh: 'Nceda undincede ngale nto.', en: 'Please help me with this thing.' },
        { xh: 'Enkosi, hlala kakuhle.', en: 'Thank you, stay well.' },
      ],
      mistake: 'Do not give orders such as Yenza ngoku! Use nceda or ndicela.',
    },
    {
      title: 'Listening for detail and summarising',
      rule: 'When you listen, note names, places and actions. To summarise a spoken text, keep only the main points and leave out extra examples and your own opinions.',
      workedTitle: 'Listen, note, summarise',
      examples: [
        { xh: 'USipho uya evenkileni. Uthenga isonka namaqanda. Emva koko ubuyela ekhaya.', en: 'Sipho goes to the shop. He buys bread and eggs. Then he goes back home.' },
        { xh: 'USipho uya phi?', en: 'Where does Sipho go? (evenkileni)' },
        { xh: 'USipho uthenga isonka namaqanda evenkileni.', en: 'Summary: Sipho buys bread and eggs at the shop.' },
      ],
      mistake: 'A summary is not a word-for-word copy. Pick the most important ideas only and add no new facts.',
    },
  ],
  checks: [
    { q: 'What does a good oral presentation start with?', a: 'A greeting and a clear opening statement of the topic.' },
    { q: 'Say “How much does it cost?” in isiXhosa.', a: 'Kubiza malini?' },
    { q: 'Say “Thank you for listening.”', a: 'Enkosi ngokumamela.' },
    { q: 'What should a summary of a spoken text keep?', a: 'Only the main points.' },
  ],
};

export default lesson;
