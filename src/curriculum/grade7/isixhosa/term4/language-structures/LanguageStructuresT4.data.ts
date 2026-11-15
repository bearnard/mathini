import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 7 Term 4 (revision). Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Revise the three tenses',
      rule: 'Present: ndi-/si- + verb. Past: change -a to -ile. Future: za + ku- before the verb. Use the time word to check.',
      workedTitle: 'One verb in three tenses',
      examples: [
        { xh: 'Sifunda isiXhosa yonke imihla.', en: 'We learn isiXhosa every day. (present)' },
        { xh: 'Sifundile isiXhosa izolo.', en: 'We learned isiXhosa yesterday. (past)' },
        { xh: 'Ndiza kubhala uvavanyo ngomso.', en: 'I will write the test tomorrow. (future)' },
      ],
      mistake: 'Mixing tenses in one sentence. Check that the verb and the time word (izolo, namhlanje, ngomso) agree.',
    },
    {
      title: 'Pronouns and subject concords',
      rule: 'Each pronoun goes with one verb marker: mna ndi-, wena u-, yena u-, thina si-, nina ni-, bona ba-.',
      workedTitle: 'Pronoun and marker together',
      examples: [
        { xh: 'Mna ndiyafunda.', en: 'I am studying.' },
        { xh: 'Thina siyafunda.', en: 'We are studying.' },
        { xh: 'Bona bayadlala ebaleni.', en: 'They play in the field.' },
        { xh: 'Umfundi uyafunda.', en: 'The learner is studying.' },
      ],
      mistake: 'Using the wrong marker for the pronoun, for example Bona uyadlala. Write Bona bayadlala.',
    },
    {
      title: 'Question forms',
      rule: 'Put the question word where it fits and end with a question mark. Nina (you, more than one) goes with ni-.',
      workedTitle: 'Questions for one and for many',
      examples: [
        { xh: 'Nihlala phi nina?', en: 'Where do you (all) live?' },
        { xh: 'Uhlala phi?', en: 'Where do you live?' },
        { xh: 'Ufika nini?', en: 'When do you arrive?' },
      ],
      mistake: 'Forgetting the question mark, or using u- when you ask more than one person.',
    },
    {
      title: 'Spelling and proofreading',
      rule: 'Proofreading means reading your work slowly to find and fix language errors: spelling, concords, punctuation.',
      workedTitle: 'Correct forms to check against',
      examples: [
        { xh: 'isikolo', en: 'school (spelled correctly)' },
        { xh: 'Abafundi bayafunda.', en: 'The learners are studying. (correct concord)' },
      ],
      mistake: 'Reading your work once, quickly. Read it again, one line at a time, for each kind of error.',
      vocab: [
        { word: 'Isibizo', meaning: 'Noun' },
        { word: 'Isimelabizo', meaning: 'Pronoun' },
        { word: 'Ixesha', meaning: 'Tense / time' },
        { word: 'Isiphumlisi', meaning: 'Punctuation mark' },
      ],
    },
  ],
  checks: [
    { q: 'Put in the future: Ndibhala uvavanyo.', a: 'Ndiza kubhala uvavanyo.' },
    { q: 'Complete: Bona ___ yadlala ebaleni (bayadlala or uyadlala).', a: 'bayadlala' },
    { q: 'Ask a group where they live (use nina).', a: 'Nihlala phi nina?' },
    { q: 'Why do we proofread a text before handing it in?', a: 'To find and fix language errors.' },
  ],
};

export default lesson;
