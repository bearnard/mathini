import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 9 Term 3, Reading & Viewing. Every isiXhosa line is listed in audit/xhosa-g9-teacher-notes.md for a first-language check.
// Longer drama, poetry and short-story texts are described in English: a teacher should supply an isiXhosa text for each.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Drama: dialogue, action and tone',
      rule: 'Drama (umdlalo) is presented through dialogue and action on stage or screen, not narration. Tone is created by word choice, the pace of dialogue, stage directions and lighting. Stage directions go in brackets.',
      workedTitle: 'A short scene',
      examples: [
        { xh: 'USIPHO: (uyoyika) Andizukuphumelela.', en: 'SIPHO: (afraid) I will not succeed. (the bracket is a stage direction)' },
        { xh: 'UTHANDO: Funda kunye nam.', en: 'THANDO: Study together with me.' },
        { xh: 'Umdlalo', en: 'Drama: teacher to supply an isiXhosa play; find the dialogue and stage directions.' },
      ],
      mistake: 'Drama is not a story told by a narrator. Learn about the people from what they say and do.',
    },
    {
      title: 'Character motivation',
      rule: 'Character motivation is the reason a character acts or speaks in a given way. It may come from desires, fears, values, past experiences or outside events. Ask why, then find the proof in the text.',
      workedTitle: 'Why does each person act this way?',
      examples: [
        { xh: 'USipho uyoyika uvavanyo.', en: 'Sipho is afraid of the test. (a fear)' },
        { xh: 'UThando ufuna ukunceda.', en: 'Thando wants to help. (a desire and a value)' },
        { xh: 'Kuba uvavanyo lusondele.', en: 'Because the test is near. (an outside event)' },
      ],
      mistake: 'Motivation is not what the character looks like or whether you like them. It is the reason for the action.',
    },
    {
      title: 'Poetic devices and context clues',
      rule: 'Poetic devices like metaphor and simile create vivid images and express emotion in few words. When a poem has a word you do not know, read the words around it. These context clues also point to the poet’s intended meaning.',
      workedTitle: 'Devices and a clue',
      examples: [
        { xh: 'Ubuso bakhe bukhanya njengelanga.', en: 'Her face shines like the sun. (simile)' },
        { xh: 'Wena uyilanga lam.', en: 'You are my sun. (metaphor)' },
        { xh: 'Ndidiniwe, ndifuna ukulala.', en: 'I am tired, I want to sleep. (ndidiniwe is the clue to the meaning of ukulala)' },
      ],
      mistake: 'Do not read a metaphor literally. Wena uyilanga lam does not mean the person is really the sun. It says she is very important to the speaker.',
    },
    {
      title: 'Message and quoting from the text',
      rule: 'A short story seldom states its message outright. It is implied and shown through plot and theme. When you quote to support analysis, choose relevant quotes and explain why they matter. A quote without an explanation proves nothing.',
      workedTitle: 'A message with a quotation and an explanation',
      examples: [
        { xh: 'Umyalezo: ukuncedana kubalulekile.', en: 'Message: helping one another is important. (implied, not stated)' },
        { xh: 'UThando uyamnceda.', en: 'Quotation: Thando helps him.' },
        { xh: 'USipho uyavuya emva koko.', en: 'Quotation: Sipho is happy afterwards. (explain: help brings joy)' },
      ],
      mistake: 'Do not choose a quote at random, and do not leave it unexplained. Say why it supports your point.',
    },
  ],
  checks: [
    { q: 'How does drama differ from narrative prose?', a: 'It is presented through dialogue and action on stage or screen.' },
    { q: 'What is character motivation?', a: 'The reason a character acts or speaks in a given way.' },
    { q: 'What are metaphor and simile used for?', a: 'To create vivid images and express emotion in few words.' },
    { q: 'What should you do when you quote from a text?', a: 'Choose relevant quotes and explain why they matter.' },
  ],
};

export default lesson;
