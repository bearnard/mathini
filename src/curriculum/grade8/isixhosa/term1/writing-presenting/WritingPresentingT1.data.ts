import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 8 Term 1, Writing & Presenting. Every isiXhosa line is listed in audit/xhosa-g8-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'A narrative paragraph: events in order',
      rule: 'A narrative tells what happened. Put the events in order and join them with time words: izolo (yesterday), emva koko (then). Use the past tense.',
      workedTitle: 'Three events in order',
      examples: [
        { xh: 'Izolo ndiye evenkileni.', en: 'Yesterday I went to the shop.' },
        { xh: 'Ndithengile isonka.', en: 'I bought bread.' },
        { xh: 'Emva koko ndibuyile ekhaya.', en: 'Then I came back home.' },
      ],
      mistake: 'Do not jump between events or tenses. Keep the order, and keep the past tense for the whole paragraph.',
    },
    {
      title: 'Descriptive writing: details and adjectives',
      rule: 'Descriptive writing paints a picture with specific details: what you see, hear, smell and feel. Use adjectives that agree with the noun.',
      workedTitle: 'Describe a place',
      examples: [
        { xh: 'Indlu yethu inkulu.', en: 'Our house is big.' },
        { xh: 'Ikhaya lethu lihle kakhulu.', en: 'Our home is very nice.' },
        { xh: 'Ndiva umculo omnandi.', en: 'I hear nice music.' },
      ],
      mistake: 'Do not write a list of unconnected words. Choose clear details and write full sentences about one topic.',
    },
    {
      title: 'A friendly letter',
      rule: 'A friendly letter has a date, a greeting, a message and a closing with your name. The tone is warm and informal.',
      workedTitle: 'The parts of a friendly letter',
      examples: [
        { xh: 'Mhlobo wam,', en: 'My friend, (greeting)' },
        { xh: 'Ndiyathemba ukuba uphilile.', en: 'I hope you are well. (opening line)' },
        { xh: 'Umhlobo wakho, Litha', en: 'Your friend, Litha (closing and name)' },
      ],
      mistake: 'Do not forget the greeting and the sign-off, and do not use heavy formal language with a friend.',
    },
    {
      title: 'Dialogue, drafting and redrafting',
      rule: 'In a dialogue, start a new line for each speaker and show who speaks. Draft your ideas first, then redraft to fix clarity and language errors before you present.',
      workedTitle: 'Speaker turns on separate lines',
      examples: [
        { xh: 'UAyanda: Molo, unjani?', en: 'Ayanda: Hello, how are you?' },
        { xh: 'ULitha: Ndiphilile, enkosi.', en: 'Litha: I am well, thank you.' },
      ],
      mistake: 'Do not write a dialogue as one long line. And do not skip redrafting: the first draft is only to shape ideas.',
    },
  ],
  checks: [
    { q: 'What should a narrative paragraph include?', a: 'A sequence of events (in order, with time words).' },
    { q: 'Name two parts of a friendly letter.', a: 'Any two of: greeting, message, sign-off / closing, date.' },
    { q: 'How do you show speaker turns in a dialogue?', a: 'Put each speaker on a new line with their name, e.g. UAyanda: ...' },
    { q: 'Why do writers draft before the final copy?', a: 'To shape ideas before the final writing; redrafting then fixes clarity and errors.' },
  ],
};

export default lesson;
