import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 7 Term 4 (revision). Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'A personal recount',
      rule: 'A personal recount describes an event you experienced, in time order. End with what you learned.',
      workedTitle: 'Recount and reflect',
      examples: [
        { xh: 'Izolo siye epikinikini.', en: 'Yesterday we went on a picnic.' },
        { xh: 'Kuqala sidlalile, emva koko sidlile.', en: 'First we played, then we ate.' },
        { xh: 'Ndifunde lukhulu kolu suku.', en: 'I learned a lot on this day.' },
      ],
      mistake: 'Describing an event you only heard about. A personal recount is about what you experienced.',
    },
    {
      title: 'A short review',
      rule: 'A review gives an opinion and a reason. Use kuba to link them.',
      workedTitle: 'Opinion plus reason',
      examples: [
        { xh: 'Le ncwadi inomdla kuba abalinganiswa bacacile.', en: 'This book is interesting because the characters are clear.' },
        { xh: 'Uphononongo', en: 'Review: opinion, reason, then a short recommendation.' },
      ],
      mistake: 'Retelling the whole story. A review gives your opinion with a reason.',
    },
    {
      title: 'A school message',
      rule: 'A message needs a clear purpose and the key detail. Be polite and short.',
      workedTitle: 'A polite message',
      examples: [
        { xh: 'Nceda uzise incwadi yam ngomso, enkosi.', en: 'Please bring my book tomorrow, thank you.' },
        { xh: 'Umyalezo', en: 'Message: purpose, key detail, thanks.' },
      ],
      mistake: 'A long message in which the purpose is hard to find.',
    },
    {
      title: 'Plan, edit and finish',
      rule: 'A simple outline of main points helps you plan a paragraph. Before you hand in, correct spelling errors.',
      workedTitle: 'Plan then edit',
      examples: [
        { xh: 'Umhlathi', en: 'Paragraph: one topic, connected sentences.' },
        { xh: 'Ndifunde lukhulu kolu suku.', en: 'I learned a lot on this day. (a reflective ending)' },
      ],
      mistake: 'Handing in a first draft. Plan first and edit before you submit.',
      vocab: [
        { word: 'Umhlathi', meaning: 'Paragraph' },
        { word: 'Umyalezo', meaning: 'Message' },
        { word: 'Uphononongo', meaning: 'Review' },
        { word: 'Isishwankathelo', meaning: 'Summary' },
      ],
    },
  ],
  checks: [
    { q: 'What does a personal recount describe?', a: 'An event you experienced.' },
    { q: 'Link with kuba: Le ncwadi inomdla. Abalinganiswa bacacile.', a: 'Le ncwadi inomdla kuba abalinganiswa bacacile.' },
    { q: 'What should a school message include?', a: 'A clear purpose and the key detail.' },
    { q: 'Which edit helps most before you submit?', a: 'Correcting spelling errors.' },
  ],
};

export default lesson;
