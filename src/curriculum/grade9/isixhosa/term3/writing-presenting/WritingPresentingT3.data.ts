import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 9 Term 3, Writing & Presenting. Every isiXhosa line is listed in audit/xhosa-g9-teacher-notes.md for a first-language check.
// Formats are explained in English with short isiXhosa examples; a teacher should supply full isiXhosa model texts.
const lesson: XhLesson = {
  slides: [
    {
      title: 'The discursive paragraph',
      rule: 'A discursive paragraph presents a topic, weighs several views and reaches a conclusion. The best evidence is specific, relevant and from reliable sources. Linking words show which view you are giving.',
      workedTitle: 'Two views and a conclusion',
      examples: [
        { xh: 'Iifowuni zinceda abafundi.', en: 'Phones help learners. (one view)' },
        { xh: 'Kodwa ziphazamisa isifundo.', en: 'But they disturb the lesson. (another view)' },
        { xh: 'Ngoko ke, kufuneka sizisebenzise kakuhle.', en: 'Therefore, we must use them well. (conclusion)' },
      ],
      mistake: 'Do not give only one view with no evidence. A discursive paragraph weighs more than one side.',
    },
    {
      title: 'The formal letter',
      rule: 'A formal letter includes the sender’s address and the receiver’s address, the date, a formal greeting, the body, a closing and a signature. Use a polite, formal register and state your purpose in the first line.',
      workedTitle: 'Parts of a formal letter',
      examples: [
        { xh: 'Umhla:', en: 'Date: (written under the addresses)' },
        { xh: 'Mhlekazi,', en: 'Sir, (formal greeting)' },
        { xh: 'Ndicela ukwazi ngamathuba.', en: 'I would like to know about opportunities. (purpose in the first line)' },
        { xh: 'Ndiyabulela.', en: 'Thank you. (closing; teacher to supply the isiXhosa formal sign-off)' },
      ],
      mistake: 'Do not write a formal letter like a message to a friend. Include the addresses, date and a formal greeting.',
    },
    {
      title: 'Articles and switching styles',
      rule: 'Published articles inform, entertain or persuade a specific audience. When you switch between writing styles, match your tone and vocabulary to the new context and audience: reflective for a diary, formal for a letter.',
      workedTitle: 'Same topic, two styles',
      examples: [
        { xh: 'Isihloko: Imfundo yethu', en: 'Title: Our education (an article headline)' },
        { xh: 'Ndiyayithanda imfundo.', en: 'I love education. (reflective, personal)' },
        { xh: 'Ndicela ukwazi ngemfundo.', en: 'I would like to know about education. (formal)' },
      ],
      mistake: 'Do not keep one tone for every audience. The audience and purpose decide the style.',
    },
    {
      title: 'Project writing and presentation',
      rule: 'An academic project should show research, original thinking, organisation and effort. A presentation should communicate information or ideas well to an audience: arrange content logically, use visuals well and invite questions.',
      workedTitle: 'Presenting a project',
      examples: [
        { xh: 'Molweni nonke. Namhlanje ndiza kuthetha ngeprojekthi yam.', en: 'Hello everyone. Today I will speak about my project.' },
        { xh: 'Umfanekiso', en: 'Picture: a clear visual supports each main point.' },
        { xh: 'Imibuzo?', en: 'Questions? (invite them at the end)' },
      ],
      mistake: 'Do not copy from a source without thinking or crowd a slide with text. Show your own thinking and organise it.',
    },
  ],
  checks: [
    { q: 'What does a discursive paragraph do?', a: 'Presents a topic, weighs several views and reaches a conclusion.' },
    { q: 'List the parts of a formal letter.', a: 'Addresses, date, formal greeting, body, closing and signature.' },
    { q: 'Why is an article written?', a: 'To inform, entertain or persuade a specific audience.' },
    { q: 'What should a project presentation do?', a: 'Arrange content logically, use visuals well and invite questions.' },
  ],
};

export default lesson;
