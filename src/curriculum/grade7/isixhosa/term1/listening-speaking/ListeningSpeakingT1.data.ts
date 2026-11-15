import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 7 Term 1, Listening & Speaking. Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Greet people and ask how they are',
      rule: 'Use Molo for one person and Molweni for more than one. Ask Unjani? to one person; answer with Ndiphilile (I am well) and ask back with Wena unjani?',
      workedTitle: 'A short greeting',
      examples: [
        { xh: 'Molo, titshala.', en: 'Hello, teacher.' },
        { xh: 'Molweni, bantwana.', en: 'Hello, children (more than one).' },
        { xh: 'Unjani namhlanje?', en: 'How are you today?' },
        { xh: 'Ndiphilile, enkosi. Wena unjani?', en: 'I am well, thank you. And you?' },
      ],
      mistake: 'Molo is for one person. Say Molweni to a group, such as your class.',
    },
    {
      title: 'Introduce yourself',
      rule: 'Start with Ndingu- and your name, then say where you stay and what you do. Use complete sentences, not single words.',
      wordParts: { word: 'NdinguLitha', en: 'I am Litha', parts: [{ t: 'ndi', label: 'I' }, { t: 'ngu', label: 'am' }, { t: 'Litha', label: 'name' }] },
      workedTitle: 'Introduction in four sentences',
      examples: [
        { xh: 'NdinguLitha.', en: 'I am Litha.' },
        { xh: 'Ndihlala eGqeberha.', en: 'I live in Gqeberha.' },
        { xh: 'Ndifunda eGrade 7.', en: 'I am in Grade 7.' },
        { xh: 'Ndineminyaka elishumi elinesibini.', en: 'I am twelve years old.' },
      ],
      mistake: 'A reply such as Andazi ukuba ndingubani (I do not know who I am) does not introduce you. Give your name, place and grade.',
    },
    {
      title: 'Ask for information and for help',
      rule: 'Question words: phi? (where), ngubani? (who), yintoni? (what). Say Nceda (please) when you ask for help, and listen before you answer.',
      workedTitle: 'Questions you can use at school',
      examples: [
        { xh: 'Ikuphi ilayibrari?', en: 'Where is the library?' },
        { xh: 'Yeyiphi into othanda ukuyenza emva kwesikolo?', en: 'What do you like to do after school?' },
        { xh: 'Ndithanda ukudlala ibhola.', en: 'I like to play football.' },
        { xh: 'Nceda undincede.', en: 'Please help me.' },
      ],
      mistake: 'Do not give an order such as Ndenzele ngoku! (Do it for me now!). A polite request starts with Nceda.',
    },
    {
      title: 'Take turns and speak clearly',
      rule: 'In a dialogue, listen first and then respond. Speak clearly at a steady pace: not too fast, not in a whisper.',
      workedTitle: 'A dialogue with turns',
      examples: [
        { xh: 'A: Molo, unjani?', en: 'A: Hello, how are you?' },
        { xh: 'B: Ndiphilile, enkosi. Igama lakho ngubani?', en: 'B: I am well, thank you. What is your name?' },
        { xh: 'A: Igama lam nguLwazi.', en: 'A: My name is Lwazi.' },
      ],
      mistake: 'Speaking at the same time as your partner, or interrupting every line, makes the dialogue impossible to follow.',
      vocab: [
        { word: 'Ivenkile', meaning: 'Shop' },
        { word: 'Isikolo', phonetic: "[isi'kɔlɔ]", meaning: 'School' },
        { word: 'Enkosi', phonetic: "[ɛŋ'kɔsi]", meaning: 'Thank you' },
        { word: 'Uxolo', phonetic: "[u'xɔlɔ]", meaning: 'Sorry / Excuse me' },
      ],
    },
  ],
  checks: [
    { q: 'You greet your whole class. Molo or Molweni?', a: 'Molweni (more than one person)' },
    { q: 'Complete the introduction: Ndingu... (add your name) and say where you live.', a: 'For example: NdinguLitha. Ndihlala eGqeberha.' },
    { q: 'How do you ask where the library is?', a: 'Ikuphi ilayibrari?' },
    { q: 'Which word makes a request polite: Nceda or Ngoku?', a: 'Nceda (please)' },
  ],
};

export default lesson;
