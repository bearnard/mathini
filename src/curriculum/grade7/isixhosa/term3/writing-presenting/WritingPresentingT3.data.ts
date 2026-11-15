import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 7 Term 3. Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'An invitation',
      rule: 'An isimemo (invitation) must show the date (umhla), the time (ixesha) and the venue (indawo). Begin with a warm line.',
      workedTitle: 'The parts of an invitation',
      examples: [
        { xh: 'Umenywa ngokufudumeleyo kumsitho wesikolo.', en: 'You are warmly invited to the school function.' },
        { xh: 'Umhla:', en: 'Date:' },
        { xh: 'Ixesha:', en: 'Time:' },
        { xh: 'Indawo:', en: 'Venue:' },
      ],
      mistake: 'Leaving out the date, time or venue. The guest then cannot come.',
    },
    {
      title: 'A recount in time order',
      rule: 'A recount tells what happened, in the order it happened, in the past tense. Use kuqala, emva koko and ekugqibeleni.',
      workedTitle: 'Recount a visit',
      examples: [
        { xh: 'Izolo siye ekhaya likamakhulu.', en: 'Yesterday we went to grandmother’s home.' },
        { xh: 'Emva koko sidlalile phandle.', en: 'Then we played outside.' },
        { xh: 'Ekugqibeleni sabuyela ekhaya.', en: 'At the end we returned home.' },
      ],
      mistake: 'Jumping around in time. Keep the events in the order they happened.',
    },
    {
      title: 'Directions and a short report',
      rule: 'Directions use clear verbs: hamba tye (walk straight), jika (turn). A short report gives facts and relevant details.',
      workedTitle: 'Clear directions',
      examples: [
        { xh: 'Hamba tye, uze ujike ngasekhohlo.', en: 'Walk straight, then turn left.' },
        { xh: 'Ingxelo', en: 'Report: facts and relevant details only.' },
      ],
      mistake: 'Writing an opinion in a report. A report states facts.',
    },
    {
      title: 'A cultural paragraph and peer feedback',
      rule: 'Write a paragraph about one custom. Then ask a classmate for feedback: it helps you improve clarity before you hand in.',
      workedTitle: 'A paragraph about customs',
      examples: [
        { xh: 'Kwikhaya lethu sigcina amasiko ngentlonipho.', en: 'In our home we keep our customs with respect.' },
        { xh: 'Umhlathi', en: 'Paragraph: one topic, connected sentences.' },
      ],
      mistake: 'Skipping feedback. A second reader finds mistakes you cannot see.',
      vocab: [
        { word: 'Isimemo', meaning: 'Invitation' },
        { word: 'Ileta', meaning: 'Letter' },
        { word: 'Ingxelo', meaning: 'Report' },
        { word: 'Umhlathi', meaning: 'Paragraph' },
      ],
    },
  ],
  checks: [
    { q: 'Which three details are essential in an invitation?', a: 'Date, time and venue.' },
    { q: 'In what order is a recount written?', a: 'In time order of the events.' },
    { q: 'Say “Walk straight, then turn left.”', a: 'Hamba tye, uze ujike ngasekhohlo.' },
    { q: 'Why ask a classmate for peer feedback?', a: 'To improve clarity before the final submission.' },
  ],
};

export default lesson;
