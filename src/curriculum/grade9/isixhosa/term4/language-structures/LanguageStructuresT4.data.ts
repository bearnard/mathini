import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 9 Term 4, Language Structures (revision). Every isiXhosa line is listed in audit/xhosa-g9-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Keeping one tense',
      rule: 'Within a paragraph, keep to the same tense unless the meaning needs a change. Present: ndifunda. Past: ndifundile. Future: ndiza kufunda. A time word such as izolo or ngomso tells you which tense to use.',
      workedTitle: 'A consistent paragraph and a needed change',
      examples: [
        { xh: 'Izolo ndiye evenkileni. Ndithengile isonka. Ndibuyile ekhaya.', en: 'Yesterday I went to the shop. I bought bread. I came home. (all past)' },
        { xh: 'Izolo ndifundile, ngomso ndiza kufunda.', en: 'Yesterday I read, tomorrow I will read. (the meaning needs a change)' },
        { xh: 'Izolo ndiye evenkileni. Ndiza kuthenga isonka.', en: 'Yesterday I went to the shop. I will buy bread. (a wrong shift: the story is in the past)' },
      ],
      mistake: 'Do not slip into another tense for no reason. If the time word is izolo, every verb stays in the past.',
    },
    {
      title: 'Subject-verb agreement',
      rule: 'The subject and the verb must match in number, singular or plural, and in noun class. A singular subject takes a singular marker and a plural subject takes a plural marker. Check this when you proofread.',
      workedTitle: 'Singular and plural',
      examples: [
        { xh: 'Umntwana uyadlala.', en: 'The child plays.' },
        { xh: 'Abantwana bayadlala.', en: 'The children play.' },
        { xh: 'Incwadi ihle. Iincwadi zihle.', en: 'The book is nice. The books are nice.' },
      ],
      mistake: 'Do not write Abantwana uyadlala. A plural subject needs a plural marker: ba- for abantwana, zi- for iincwadi.',
    },
    {
      title: 'Common sentence errors',
      rule: 'A run-on sentence runs two independent clauses together without correct links. A sentence fragment is incomplete: it has no subject or main verb, or it is only a dependent clause. Fix a run-on with commas and a conjunction, a fragment by completing the idea.',
      workedTitle: 'Fix the error',
      examples: [
        { xh: 'Ndiyafunda ndiyabhala ndiyacula', en: 'I read I write I sing (run-on: no commas or conjunction)' },
        { xh: 'Ndiyafunda, ndiyabhala, kwaye ndiyacula.', en: 'I read, I write, and I sing. (corrected)' },
        { xh: 'Kuba ndifuna ukuphumelela.', en: 'Because I want to succeed. (fragment)' },
        { xh: 'Ndiyafunda kuba ndifuna ukuphumelela.', en: 'I study because I want to succeed. (corrected)' },
      ],
      mistake: 'Do not use a full stop in the middle of an idea, and do not run several ideas together with no punctuation.',
    },
    {
      title: 'Word order, punctuation and self-correction',
      rule: 'Word order in isiXhosa matters because it affects meaning and sentence structure. Punctuation clarifies meaning and separates ideas. When you correct your own writing, look for tense errors, agreement problems and punctuation mistakes.',
      workedTitle: 'Order changes the meaning',
      examples: [
        { xh: 'UThando umnceda uSipho.', en: 'Thando helps Sipho.' },
        { xh: 'USipho umnceda uThando.', en: 'Sipho helps Thando. (same words, new order, new meaning)' },
        { xh: 'Ufunda phi?', en: 'Where do you study? (end a question with ?)' },
      ],
      mistake: 'Do not move words around freely. The order tells the reader who does the action.',
    },
  ],
  checks: [
    { q: 'Why should the verbs in one paragraph keep the same tense?', a: 'So the reader can follow when things happen; change tense only when the meaning needs it.' },
    { q: 'Correct this: Abantwana uyadlala.', a: 'Abantwana bayadlala. (plural subject, plural marker)' },
    { q: 'What is a sentence fragment? Give an example from this lesson.', a: 'An incomplete sentence, for example Kuba ndifuna ukuphumelela.' },
    { q: 'List three things to look for when you correct your own grammar.', a: 'Tense errors, agreement problems and punctuation mistakes.' },
  ],
};

export default lesson;
