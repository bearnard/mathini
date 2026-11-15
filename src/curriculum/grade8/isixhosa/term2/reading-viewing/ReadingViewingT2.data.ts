import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 8 Term 2, Reading & Viewing. Every isiXhosa line is listed in audit/xhosa-g8-teacher-notes.md for a first-language check.
// Folktales and media texts are described in English: a teacher should supply an isiXhosa example for each.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Folklore and theme',
      rule: 'An intsomi (folktale) is a traditional story that often teaches a cultural lesson. The theme is the central message or idea of the story, not its first word or its title.',
      workedTitle: 'Find the theme (teacher to supply an isiXhosa folktale)',
      examples: [
        { xh: 'Intsomi', en: 'Folktale: ask what lesson the story teaches.' },
        { xh: 'Ibali', en: 'Story: a greedy character loses everything. Theme: greed brings loss.' },
      ],
      mistake: 'Do not confuse the theme with the plot. The plot is what happens; the theme is the message behind it.',
    },
    {
      title: 'Character and evidence',
      rule: 'We find out what a character is like from their actions and their words. Name the quality, then give the evidence from the text.',
      workedTitle: 'What is Sipho like?',
      examples: [
        { xh: 'USipho wabona umhlobo wakhe ekhala.', en: 'Sipho saw his friend crying.' },
        { xh: 'Wamnika isonka sakhe.', en: 'He gave him his bread.' },
        { xh: 'Unobubele.', en: 'He is kind. (the evidence is his action: he shared his bread)' },
      ],
      mistake: 'Do not guess what a character is like. Point to what they do or say in the text.',
    },
    {
      title: 'Conflict and inference',
      rule: 'Conflict is the main problem or struggle in a story. To make an inference, use clues in the text to work out what is not stated, and do not invent new details.',
      workedTitle: 'Use the clue',
      examples: [
        { xh: 'Imvula iyana. USipho uhlala ekhaya.', en: 'It is raining. Sipho stays at home.' },
        { xh: 'Kutheni uSipho ehlala ekhaya?', en: 'Why does Sipho stay at home?' },
        { xh: 'Ngoba imvula iyana.', en: 'Because it is raining. (the clue is in the first sentence)' },
      ],
      mistake: 'An inference must be backed by the text. Do not add details such as “he is sick” if nothing says so.',
    },
    {
      title: 'Media texts and comprehension answers',
      rule: 'Media texts such as adverts and news items are read to find their purpose and audience. A strong answer states the point and adds supporting detail from the text.',
      workedTitle: 'Answer plus evidence (teacher to supply an isiXhosa media text)',
      examples: [
        { xh: 'Isibhengezo', en: 'Advert: the purpose is to persuade; the audience is the people who might buy.' },
        { xh: 'Ingxelo', en: 'Report: the purpose is to inform with facts.' },
        { xh: 'Ngoba imvula iyana.', en: 'Answer with evidence: “Sipho stays at home because it is raining.”' },
      ],
      mistake: 'A bare yes or no, or a copy of the question, is not a full answer. Give the answer and the evidence.',
    },
  ],
  checks: [
    { q: 'What is the theme of a story?', a: 'The central message or idea.' },
    { q: 'Where do you find evidence about a character?', a: 'In their actions and dialogue in the text.' },
    { q: 'What is conflict in prose?', a: 'The main problem or struggle.' },
    { q: 'Why are media texts read?', a: 'To understand their purpose and audience.' },
  ],
};

export default lesson;
