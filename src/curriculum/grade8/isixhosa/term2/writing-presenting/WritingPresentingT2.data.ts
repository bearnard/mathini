import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 8 Term 2, Writing & Presenting. Every isiXhosa line is listed in audit/xhosa-g8-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'An email: subject, greeting, message, closing',
      rule: 'An email has a subject line, a greeting, a clear message and a closing with your name. Keep the message short and match the tone to the reader.',
      workedTitle: 'The parts of an email',
      examples: [
        { xh: 'Isihloko: Umdlalo webhola', en: 'Subject: The football match' },
        { xh: 'Molo Thandi,', en: 'Hello Thandi, (greeting)' },
        { xh: 'Ndicela ukwazi ixesha lomdlalo.', en: 'I would like to know the time of the match. (message)' },
        { xh: 'Umhlobo wakho, Litha', en: 'Your friend, Litha (closing)' },
      ],
      mistake: 'Do not leave out the subject line or the greeting, and do not fill the email with symbols instead of words.',
    },
    {
      title: 'A review gives an opinion with reasons',
      rule: 'A review says what you think and why. State your judgment first, then give a reason with kuba (because).',
      workedTitle: 'Opinion plus reason',
      examples: [
        { xh: 'Ndiyalithanda eli bali kuba limnandi.', en: 'I like this story because it is interesting.' },
        { xh: 'Andilithandi eli bali kuba lide kakhulu.', en: 'I do not like this story because it is very long.' },
      ],
      mistake: 'An opinion without a reason is weak. Always say why, and refer to the text you are reviewing.',
    },
    {
      title: 'A report gives facts in order',
      rule: 'An ingxelo (report) presents factual information clearly. Use a heading, short paragraphs and a logical order. Leave out opinions and made-up details.',
      workedTitle: 'A factual sentence',
      examples: [
        { xh: 'Ingxelo: Umdlalo webhola', en: 'Report: The football match (heading)' },
        { xh: 'Abafundi badlalile ibhola ngoMgqibelo.', en: 'The learners played football on Saturday. (fact)' },
      ],
      mistake: 'A report is not a story. Do not add imagined events, and do not jump between points.',
    },
    {
      title: 'Process writing, paragraphs and tone',
      rule: 'Process writing goes: plan, draft, edit (after drafting), proofread, present. A paragraph has a topic sentence and supporting detail. Tone must match audience and purpose.',
      workedTitle: 'Informal and formal greetings, and a topic sentence',
      examples: [
        { xh: 'Molo mhlobo wam!', en: 'Hello my friend! (informal, for classmates)' },
        { xh: 'Mhlekazi,', en: 'Sir, (formal greeting)' },
        { xh: 'Ndithanda ukudlala ibhola.', en: 'I like playing football. (topic sentence)' },
        { xh: 'Ndidlala nabahlobo bam.', en: 'I play with my friends. (supporting detail)' },
      ],
      mistake: 'Do not edit before you have a draft, and do not use slang for a formal reader. Check sequence and clarity when revising.',
    },
  ],
  checks: [
    { q: 'What should an email include?', a: 'A subject line, a greeting, a clear message and a closing.' },
    { q: 'What does a review mainly give?', a: 'An opinion backed up by reasons.' },
    { q: 'Say “I like this story because it is interesting.”', a: 'Ndiyalithanda eli bali kuba limnandi.' },
    { q: 'In process writing, when does editing come?', a: 'After drafting.' },
  ],
};

export default lesson;
