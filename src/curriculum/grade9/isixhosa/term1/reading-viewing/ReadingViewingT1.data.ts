import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 9 Term 1, Reading & Viewing. Every isiXhosa line is listed in audit/xhosa-g9-teacher-notes.md for a first-language check.
// Poems and posters are described in English: a teacher should supply an isiXhosa example for each.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Theme and supporting evidence',
      rule: 'The theme (umxholo) is the main message or big idea of a story. To find it, look for patterns and ideas that repeat. Prove your theme with specific evidence: a quotation or description from the text, not what you wish the story said.',
      workedTitle: 'A short story, its theme and its evidence',
      examples: [
        { xh: 'USipho akanayo incwadi. UThando uyamnceda. USipho uyavuya.', en: 'Sipho does not have a book. Thando helps him. Sipho is happy.' },
        { xh: 'Umxholo: ukuncedana.', en: 'Theme: helping one another.' },
        { xh: 'UThando uyamnceda.', en: 'Evidence (a quotation): Thando helps him.' },
      ],
      mistake: 'The theme is not the title, the place or the names of the people. Do not pick a theme from the title alone.',
    },
    {
      title: 'Conflict, setting and tone',
      rule: 'Conflict (ingxaki) is a struggle between forces: it drives the plot. Setting is the place and time: it gives context and atmosphere. Tone is the author’s attitude to the subject, shown by word choice. A solution (isisombululo) ends the conflict.',
      workedTitle: 'Conflict, setting and tone in the same story',
      examples: [
        { xh: 'USipho akanayo incwadi.', en: 'Conflict (the problem): Sipho has no book.' },
        { xh: 'USipho ufunda esikolweni ekuseni.', en: 'Setting: Sipho studies at school in the morning.' },
        { xh: 'USipho uyavuya.', en: 'Tone: warm and happy, shown by the word uyavuya (is happy).' },
      ],
      mistake: 'Tone is not how loudly characters speak or the size of the print. It is the attitude the words create.',
    },
    {
      title: 'Poetry and imagery',
      rule: 'Poetry (umbongo) often uses imagery to create vivid pictures in the reader’s mind. A simile compares with “like” (njenge-). A metaphor says one thing is another. Ask: which picture does this line paint, and what feeling does it give?',
      workedTitle: 'A simile and a metaphor',
      examples: [
        { xh: 'Ubuso bakhe bukhanya njengelanga.', en: 'Her face shines like the sun. (simile)' },
        { xh: 'Wena uyilanga lam.', en: 'You are my sun. (metaphor)' },
        { xh: 'Umbongo', en: 'Poem: teacher to supply an isiXhosa poem. Find the images and name the mood.' },
      ],
      mistake: 'Imagery is not there to hide the meaning or to list facts. Do not read the image literally: the sun here means joy.',
    },
    {
      title: 'Visual texts: posters and images',
      rule: 'When you view a poster or an image, first notice the colours, the size of items, the layout and the main picture. These design choices create the first impression and carry meaning. Then read the words.',
      workedTitle: 'Reading a poster (English description; teacher to supply an isiXhosa poster)',
      examples: [
        { xh: 'Umfanekiso', en: 'Picture: the largest item shows what matters most.' },
        { xh: 'Imibala', en: 'Colours: red often warns, green often means safe or go.' },
        { xh: 'Isibhengezo', en: 'Poster: teacher to supply an isiXhosa poster; list its colours, layout and main image.' },
      ],
      mistake: 'Do not start by counting words or asking who owns the poster. Start with colours, size, layout and the main image.',
    },
  ],
  checks: [
    { q: 'What is the theme of a story?', a: 'The main message or big idea (umxholo).' },
    { q: 'What do you use as supporting evidence for a theme?', a: 'Specific quotes or descriptions from the text, for example UThando uyamnceda.' },
    { q: 'What is the conflict in the story about Sipho?', a: 'Sipho does not have a book (USipho akanayo incwadi).' },
    { q: 'Name the first things to notice in a visual text.', a: 'Colours, size, layout and the main image.' },
  ],
};

export default lesson;
