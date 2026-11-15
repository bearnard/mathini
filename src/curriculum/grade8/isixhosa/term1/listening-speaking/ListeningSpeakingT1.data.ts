import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 8 Term 1, Listening & Speaking. Every isiXhosa line is listed in audit/xhosa-g8-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Introduce yourself in full sentences',
      rule: 'A good introduction gives your name, your grade and where you live, in full sentences. Greet first, and ask the other person back.',
      workedTitle: 'A short introduction',
      examples: [
        { xh: 'Molo! Igama lam nguAyanda.', en: 'Hello! My name is Ayanda.' },
        { xh: 'NdinguAyanda, ndifunda eGrade 8.', en: 'I am Ayanda, I am in Grade 8.' },
        { xh: 'Ndihlala eGqeberha.', en: 'I live in Gqeberha.' },
        { xh: 'Igama lakho ngubani?', en: 'What is your name?' },
      ],
      mistake: 'Do not answer with silence or one word. Give a full sentence such as NdinguAyanda, ndifunda eGrade 8.',
    },
    {
      title: 'Question words for daily life',
      rule: 'Question words tell you what kind of answer is needed: ntoni (what), phi (where), nini (when), kutheni (why), ngubani (who). Answer with the kind of detail asked for.',
      workedTitle: 'Ask about the day, then answer',
      examples: [
        { xh: 'Wenza ntoni emva kwesikolo?', en: 'What do you do after school?' },
        { xh: 'Emva kwesikolo ndidlala ibhola.', en: 'After school I play football.' },
        { xh: 'Uhlala phi?', en: 'Where do you live?' },
        { xh: 'Kutheni ufunda?', en: 'Why do you study?' },
      ],
      mistake: 'Match the answer to the question word. Phi (where) needs a place, not a reason or a time.',
    },
    {
      title: 'Listening for key details',
      rule: 'Before and while you listen, ask who, where, when and what. Note names, places and actions. If you miss one detail, keep listening and use the rest of the message for clues.',
      workedTitle: 'Listen to the passage, then answer',
      examples: [
        { xh: 'USipho uhlala eMdantsane. Uvuka ekuseni. Uya esikolweni ngebhasi.', en: 'Sipho lives in Mdantsane. He wakes up early in the morning. He goes to school by bus.' },
        { xh: 'USipho uhlala phi?', en: 'Where does Sipho live? (eMdantsane)' },
        { xh: 'Uya esikolweni njani?', en: 'How does he go to school? (ngebhasi)' },
      ],
      mistake: 'Do not guess without listening or stop following the passage after one missed word. The rest of the message helps you.',
    },
    {
      title: 'Polite requests and prepared reading',
      rule: 'Use polite words in class: nceda (please) and enkosi (thank you). Never give orders. When you read aloud, read clearly at a steady pace and pause at full stops.',
      workedTitle: 'Polite phrases for class',
      examples: [
        { xh: 'Nceda uphinde loo mbuzo.', en: 'Please repeat that question.' },
        { xh: 'Ndicela undincede.', en: 'Please help me.' },
        { xh: 'Uxolo.', en: 'Excuse me / sorry.' },
        { xh: 'Enkosi kakhulu.', en: 'Thank you very much.' },
      ],
      mistake: 'Commands such as Phendula ngoku! sound rude. Add nceda or ndicela, and listen before you reply.',
    },
  ],
  checks: [
    { q: 'Say “My name is Ayanda” in isiXhosa.', a: 'Igama lam nguAyanda. (or NdinguAyanda)' },
    { q: 'Which question word asks for a place?', a: 'phi (where)' },
    { q: 'Say “Please repeat that question.”', a: 'Nceda uphinde loo mbuzo.' },
    { q: 'Name two things to listen for in a passage.', a: 'Any two of: names, places, actions, times (key details).' },
  ],
};

export default lesson;
