import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 7 Term 1, Writing & Presenting. Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'A friendly letter has a greeting and a closing',
      rule: 'Begin with a greeting, write in short paragraphs, and finish with a closing line and your name.',
      workedTitle: 'The parts of a friendly letter',
      examples: [
        { xh: 'Mhlobo wam othandekayo,', en: 'My dear friend, (greeting)' },
        { xh: 'Ndiyathemba ukuba uphilile. Ndifunda eGrade 7.', en: 'I hope you are well. I am in Grade 7. (body)' },
        { xh: 'Ozithobayo,', en: 'Yours sincerely, (closing)' },
        { xh: 'Litha', en: 'Litha (your name)' },
      ],
      mistake: 'A heading such as INJONGO YEBALI or a numbered list is not a letter opening. A friendly letter starts with a warm greeting.',
    },
    {
      title: 'Write a personal paragraph',
      rule: 'A paragraph has connected sentences about one topic. Link ideas with kwaye (and), kodwa (but) and kuba (because).',
      workedTitle: 'A paragraph about me',
      examples: [
        { xh: 'Igama lam nguLitha.', en: 'My name is Litha.' },
        { xh: 'Ndihlala eGqeberha kwaye ndifunda eGrade 7.', en: 'I live in Gqeberha and I am in Grade 7.' },
        { xh: 'Ndithanda ukudlala ibhola kuba ndinabahlobo apho.', en: 'I like to play football because I have friends there.' },
      ],
      mistake: 'Unrelated words put together, or a heading with nothing under it, is not a paragraph. Keep to one topic.',
    },
    {
      title: 'Write a dialogue',
      rule: 'Each new speaker starts on a new line, after the speaker’s name. Use the right punctuation: a question ends with ?, a statement with a full stop.',
      workedTitle: 'A dialogue with punctuation',
      examples: [
        { xh: 'Lwazi: Molo, Litha!', en: 'Lwazi: Hello, Litha!' },
        { xh: 'Litha: Molo, Lwazi. Unjani?', en: 'Litha: Hello, Lwazi. How are you?' },
        { xh: 'Lwazi: Ndiphilile, enkosi.', en: 'Lwazi: I am well, thank you.' },
      ],
      mistake: 'Do not write a dialogue as one long paragraph. A new speaker means a new line.',
    },
    {
      title: 'Captions, editing and presenting',
      rule: 'A caption is short and matches the picture. Edit your first draft for spelling and punctuation, then read it aloud clearly with eye contact.',
      workedTitle: 'Short captions',
      examples: [
        { xh: 'Isikolo sethu', en: 'Our school (caption for a school photo)' },
        { xh: 'Ikhaya lam', en: 'My home (caption for a photo of home)' },
      ],
      mistake: 'A caption longer than the story, or one that has nothing to do with the picture, does not work.',
      vocab: [
        { word: 'Igama', phonetic: "[i'gama]", meaning: 'Name' },
        { word: 'Ikhaya', phonetic: "[i'kʰaja]", meaning: 'Home' },
        { word: 'Isikolo', phonetic: "[isi'kɔlɔ]", meaning: 'School' },
        { word: 'Umhlobo', phonetic: "[um'ɬɔbɔ]", meaning: 'Friend' },
      ],
    },
  ],
  checks: [
    { q: 'Which greeting suits a friendly letter: Mhlobo wam othandekayo, or INJONGO YEBALI?', a: 'Mhlobo wam othandekayo,' },
    { q: 'Join the ideas with kuba: Ndithanda ibhola. Ndinabahlobo apho.', a: 'Ndithanda ibhola kuba ndinabahlobo apho.' },
    { q: 'In a dialogue, where does a new speaker start?', a: 'On a new line.' },
    { q: 'Which punctuation mark ends a question?', a: '?' },
  ],
};

export default lesson;
