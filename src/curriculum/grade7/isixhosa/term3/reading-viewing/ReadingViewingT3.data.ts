import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 7 Term 3. Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.// Poems, folktale and poster texts are described in English: a teacher supplies an isiXhosa example of each.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Poems: mood and message',
      rule: 'In an umbongo (poem), the mood (imvakalelo) is the feeling the poem creates. The theme (umxholo) is what the poem is about.',
      workedTitle: 'Reading a poem',
      examples: [
        { xh: 'Imvakalelo', en: 'Feeling: is the poem happy, sad, calm or angry?' },
        { xh: 'Umxholo', en: 'Theme: what is the poem really about?' },
        { xh: 'Umbongo', en: 'Poem: look at repeated words and the pictures they paint.' },
      ],
      mistake: 'Mood is not the number of lines. It is the feeling the words and images create.',
    },
    {
      title: 'Folktales: characters and lesson',
      rule: 'An intsomi (folktale) has characters (abalinganiswa), a problem and a lesson. Ask: what lesson does the story teach?',
      workedTitle: 'Questions for a folktale',
      examples: [
        { xh: 'Abalinganiswa', en: 'Characters: who is in the story?' },
        { xh: 'Isifundo', en: 'Lesson: what does the story teach?' },
        { xh: 'Intsomi', en: 'Folktale: often has a hare, a hyena or a clever child.' },
      ],
      mistake: 'Retelling the whole story when you were asked for the lesson. Give the one-sentence lesson.',
    },
    {
      title: 'Posters and picture sequences',
      rule: 'A poster gives a message quickly and clearly. Look at its symbols and context. In a picture sequence, order the images to show events.',
      workedTitle: 'Reading images',
      examples: [
        { xh: 'Isibhengezo', en: 'Poster: read the big words and the symbols first.' },
        { xh: 'Umfanekiso', en: 'Picture: what is shown, and where?' },
        { xh: 'Okokuqala, okwesibini, okokugqibela', en: 'First, second, last: order the pictures.' },
      ],
      mistake: 'Putting pictures in order by colour instead of by the events they show.',
    },
    {
      title: 'Short factual texts and reading strategy',
      rule: 'Key details in a factual text are names, places, numbers and dates. Read the question first, then scan the text for the answer.',
      workedTitle: 'Find the key details',
      examples: [
        { xh: 'Amagama', en: 'Names: who?' },
        { xh: 'Iindawo', en: 'Places: where?' },
        { xh: 'Amanani nemihla', en: 'Numbers and dates: how many, when?' },
      ],
      mistake: 'Reading the whole text before you look at the question. Read the question first and scan.',
      vocab: [
        { word: 'Intsomi', meaning: 'Folktale' },
        { word: 'Umbongo', meaning: 'Poem' },
        { word: 'Abalinganiswa', meaning: 'Characters' },
        { word: 'Imvakalelo', meaning: 'Feeling / emotion' },
      ],
    },
  ],
  checks: [
    { q: 'In poetry, what does mood mean?', a: 'The feeling that the poem creates.' },
    { q: 'Which question checks the message of a folktale?', a: 'What lesson does the story teach?' },
    { q: 'Name two key details in a factual text.', a: 'For example names, places, numbers or dates.' },
    { q: 'What do you do first in a comprehension task?', a: 'Read the question first, then scan the text.' },
  ],
};

export default lesson;
