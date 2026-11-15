import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 9 Term 4, Writing & Presenting (revision). Every isiXhosa line is listed in audit/xhosa-g9-teacher-notes.md for a first-language check.
// Formats are explained in English with short isiXhosa examples; a teacher should supply full isiXhosa model texts.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Writing under exam conditions',
      rule: 'Writing under exam conditions requires planning first, clear organisation and managing your time. Give planning, writing and checking each a share of the time. An exam essay has an introduction with a thesis, body paragraphs and a conclusion.',
      workedTitle: 'A thesis and the essay parts',
      examples: [
        { xh: 'Imfundo ibalulekile.', en: 'Education is important. (thesis: the one idea the essay proves)' },
        { xh: 'Isingeniso. Iziqendu. Isiphelo.', en: 'Introduction. Paragraphs. Conclusion.' },
      ],
      mistake: 'Do not start writing at once. Spend a few minutes on a plan, or the essay loses its order.',
    },
    {
      title: 'Reports and reviews in exams',
      rule: 'A report in an exam is organised with clear headings, in objective, factual language. A review as an exam task requires a description, a judgment and reasons for it. Revise the format of each before the exam.',
      workedTitle: 'Headings and a reasoned judgment',
      examples: [
        { xh: 'Isihloko. Isingeniso. Iziphumo. Isiphelo. Iingcebiso.', en: 'Title. Introduction. Findings. Conclusion. Recommendations.' },
        { xh: 'Ndiyayithanda le ncwadi kuba ibali limnandi.', en: 'I like this book because the story is nice. (judgment and reason)' },
      ],
      mistake: 'Do not use emotional language in a report, or give a judgment without a reason in a review.',
    },
    {
      title: 'Summarising a passage',
      rule: 'Summarising a passage in an exam means capturing the main ideas in fewer words, clearly. Find the main idea of each paragraph, write them in your own words and leave out examples.',
      workedTitle: 'From passage to summary',
      examples: [
        { xh: 'Namhlanje sifunda ngemfundo. Imfundo iyasinceda. Siyayithanda.', en: 'Today we learn about education. Education helps us. We love it.' },
        { xh: 'Imfundo iyasinceda.', en: 'Summary: education helps us. (the main idea)' },
      ],
      mistake: 'Do not copy sentences from the passage, and do not write a summary as long as the text.',
    },
    {
      title: 'Proofreading and transactional writing',
      rule: 'Proofreading means checking spelling, grammar, punctuation and sense errors. Reviewing your own essay before submission helps you catch errors, improve phrasing and check completeness. For transactional writing, focus on format conventions, suitable register and a clear message.',
      workedTitle: 'Proofreading corrections',
      examples: [
        { xh: 'Ndi funda → Ndifunda', en: 'Join the marker to the verb. (spelling)' },
        { xh: 'Izolo ndifunda → Izolo ndifundile', en: 'Match the tense to the time word. (grammar)' },
        { xh: 'Nceda undinike incwadi.', en: 'Please give me a book. (a polite, clear message)' },
      ],
      mistake: 'Do not hand in the first draft unread. Check for spelling, grammar, punctuation and sense.',
    },
  ],
  checks: [
    { q: 'What does writing under exam conditions require?', a: 'Planning first, clear organisation and managing your time.' },
    { q: 'What does a review as an exam task require?', a: 'A description, a judgment and reasons for it.' },
    { q: 'What does summarising a passage mean?', a: 'Capturing the main ideas in fewer words, clearly.' },
    { q: 'What does proofreading mean?', a: 'Checking spelling, grammar, punctuation and sense errors.' },
  ],
};

export default lesson;
