import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 6. Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'A personal paragraph',
      rule: 'Begin with a clear topic sentence. Support it with a relevant example linked to the topic, and keep your ideas in logical order.',
      workedTitle: 'Topic sentence and support',
      examples: [
        { xh: 'Ndithanda isikolo sam.', en: 'I like my school. (topic sentence)' },
        { xh: 'Ndifunda kunye nabahlobo bam.', en: 'I learn together with my friends. (support)' },
      ],
      mistake: 'Starting with a detail instead of the topic. Say the topic first.',
    },
    {
      title: 'A short message',
      rule: 'Say who the message is for and what it is about. Use a polite and respectful tone with a teacher.',
      workedTitle: 'A polite message',
      examples: [
        { xh: 'Nceda uzise incwadi yam ngomso, enkosi.', en: 'Please bring my book tomorrow, thank you.' },
        { xh: 'Enkosi kakhulu.', en: 'Thank you very much.' },
      ],
      mistake: 'A message with no name or purpose. The reader must know who and why.',
    },
    {
      title: 'A simple review',
      rule: 'A review gives an opinion and a reason. Use kuba (because) to join them.',
      workedTitle: 'Opinion plus reason',
      examples: [
        { xh: 'Ndithanda ibali kuba linomdla.', en: 'I like the story because it is interesting.' },
        { xh: 'Uphononongo', en: 'Review: opinion + reason.' },
      ],
      mistake: 'A review with only an opinion and no reason.',
    },
    {
      title: 'Picture writing and editing',
      rule: 'In picture writing look carefully at the people, the place and the action first. Before you present, edit spelling and punctuation.',
      workedTitle: 'Describe a picture',
      examples: [
        { xh: 'Abantwana badlala ebaleni.', en: 'The children play in the field.' },
        { xh: 'Ilanga liyakhanya.', en: 'The sun is shining.' },
      ],
      mistake: 'Writing about things that are not in the picture.',
      vocab: [
        { word: 'Umhlathi', meaning: 'Paragraph' },
        { word: 'Umyalezo', meaning: 'Message' },
        { word: 'Uphononongo', meaning: 'Review' },
        { word: 'Isishwankathelo', meaning: 'Summary' },
      ],
    },
  ],
  checks: [
    { q: 'What should a personal paragraph begin with?', a: 'A clear topic sentence.' },
    { q: 'Which tone is best for a school message to a teacher?', a: 'Polite and respectful.' },
    { q: 'What does a simple review include?', a: 'An opinion and a reason.' },
    { q: 'What do you look at first in picture writing?', a: 'The people, the place and the action.' },
  ],
};

export default lesson;
