import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 9 Term 1, Writing & Presenting. Every isiXhosa line is listed in audit/xhosa-g9-teacher-notes.md for a first-language check.
// Essay structure is explained in English with short isiXhosa examples; a teacher should supply full isiXhosa model essays.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Plan first, then structure the essay',
      rule: 'Before you write, brainstorm ideas and make an outline. A good essay has an introduction (isingeniso), body paragraphs and a conclusion (isiphelo). Planning saves time and improves the final copy.',
      workedTitle: 'An outline for an essay on my school',
      examples: [
        { xh: 'Isihloko: Isikolo sam.', en: 'Title: My school.' },
        { xh: 'Isingeniso: Ndifunda esikolweni esikhulu.', en: 'Introduction: I study at a big school.' },
        { xh: 'Isiphelo: Ndiyasithanda isikolo sam.', en: 'Conclusion: I love my school.' },
      ],
      mistake: 'Do not start the final copy straight away, and do not write one long sentence that says everything. Brainstorm, outline, then write.',
    },
    {
      title: 'Paragraph unity and the topic sentence',
      rule: 'Paragraph unity means all sentences stay on one main idea. The topic sentence introduces that idea, usually at the start. A paragraph does not have to be long, and it must not mix many topics.',
      workedTitle: 'One idea in one paragraph',
      examples: [
        { xh: 'Ndithanda ukufunda.', en: 'I like to read. (topic sentence)' },
        { xh: 'Ndifunda iincwadi ezinkulu.', en: 'I read big books. (supports the idea)' },
        { xh: 'Ndifunda ebusuku.', en: 'I read at night. (supports the idea)' },
      ],
      mistake: 'Do not slip in a line about football when the paragraph is about reading. It breaks the unity.',
    },
    {
      title: 'Descriptive and narrative writing',
      rule: 'Good descriptive writing uses sensory details (what you see, hear, feel) and vivid language, with verbs and nouns, not only adjectives. In narrative writing, supporting details develop the plot and help readers follow the events in order.',
      workedTitle: 'Sensory details and a story opening',
      examples: [
        { xh: 'Ilanga liyatshisa. Umoya uyabanda.', en: 'The sun is hot. The wind is cold. (feel)' },
        { xh: 'Ndiva iintaka zicula.', en: 'I hear birds singing. (hear)' },
        { xh: 'Ngenye imini, ndiya esikolweni.', en: 'One day, I go to school. (a narrative opening in the present tense)' },
      ],
      mistake: 'Do not add details that confuse or have no link to the story. Every detail must help the reader see or follow.',
    },
    {
      title: 'Friendly letter and tone',
      rule: 'A friendly letter has a greeting, a body, a closing and a signature. Tone must match your audience and purpose: warm for a friend, never angry or random. Personal reflection is also written in a warm, honest tone.',
      workedTitle: 'Parts of a friendly letter',
      examples: [
        { xh: 'Mhlobo wam othandekayo,', en: 'My dear friend, (greeting)' },
        { xh: 'Ndiyaphila. Ndiyakukhumbula.', en: 'I am well. I miss you. (body)' },
        { xh: 'Umhlobo wakho, Litha', en: 'Your friend, Litha (closing and signature)' },
      ],
      mistake: 'Do not leave out the greeting, closing or signature. Do not use a tone that shows no link to the reader.',
    },
  ],
  checks: [
    { q: 'What does a good essay typically have?', a: 'An introduction, body paragraphs and a conclusion.' },
    { q: 'What does paragraph unity mean?', a: 'All sentences in a paragraph stay on one main idea.' },
    { q: 'What should you do first when planning an essay?', a: 'Brainstorm ideas and create an outline.' },
    { q: 'List the parts of a friendly letter.', a: 'A greeting, body, closing and signature.' },
  ],
};

export default lesson;
