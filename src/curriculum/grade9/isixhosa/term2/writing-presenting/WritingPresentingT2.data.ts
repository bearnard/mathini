import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 9 Term 2, Writing & Presenting. Every isiXhosa line is listed in audit/xhosa-g9-teacher-notes.md for a first-language check.
// Formats are explained in English with short isiXhosa examples; a teacher should supply full isiXhosa model texts.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Transactional writing, register and formal email',
      rule: 'Transactional writing does business or achieves a practical purpose: emails, requests, complaints, enquiries. Register is the level of formality that suits the audience. A formal email has a greeting, a clear subject, a purposeful body and a polite closing. A complaint is clear, polite and specific.',
      workedTitle: 'A polite formal request',
      examples: [
        { xh: 'Isihloko: Isicelo seencwadi', en: 'Subject: Request for books' },
        { xh: 'Mhlekazi, ndicela iincwadi ezintlanu. Ndiyabulela.', en: 'Sir, I request five books. Thank you. (greeting, body, closing)' },
        { xh: 'Nceda undinike incwadi.', en: 'Please give me a book. (polite, formal)' },
        { xh: 'Ndinike incwadi!', en: 'Give me a book! (too blunt for a formal text)' },
      ],
      mistake: 'Do not use slang, or be rude and vague in a formal text. State the problem and the outcome you want.',
    },
    {
      title: 'Reports',
      rule: 'A report informs readers, so use objective, clear language that focuses on facts, not emotion or opinion. Its structure: a title, introduction, findings, conclusion and recommendations, each under a heading.',
      workedTitle: 'Headings and a factual sentence',
      examples: [
        { xh: 'Isihloko: Ingxelo yesikolo', en: 'Title: Report on the school' },
        { xh: 'Isingeniso. Iziphumo. Isiphelo. Iingcebiso.', en: 'Introduction. Findings. Conclusion. Recommendations.' },
        { xh: 'Isikolo sinabafundi abaninzi.', en: 'The school has many learners. (a fact)' },
      ],
      mistake: 'A report is not a poem or a riddle, and it is not written with strong feeling. Keep to facts and use headings.',
    },
    {
      title: 'Reviews',
      rule: 'In a review you describe the product or service, give your own opinion and back it with reasons. Be honest and specific. Compliments only, exaggeration or a few vague words do not make a good review.',
      workedTitle: 'Opinion with a reason',
      examples: [
        { xh: 'Ndiyayithanda le ncwadi kuba ibali limnandi.', en: 'I like this book because the story is nice. (opinion + reason)' },
        { xh: 'Kodwa isiphelo asimnandi.', en: 'But the ending is not nice. (an honest criticism)' },
      ],
      mistake: 'Do not write only compliments or hide what you did not like. Always give a reason for your opinion.',
    },
    {
      title: 'Dialogue in writing',
      rule: 'Dialogue brings characters and scenes to life through speech. Put each speaker’s words in quotation marks and start a new line when the speaker changes, so readers know who is speaking. It reveals character and moves the story on.',
      workedTitle: 'Each speaker on a new line',
      examples: [
        { xh: 'UThando uthi, “Molo, Sipho.”', en: 'Thando says, “Hello, Sipho.”' },
        { xh: 'USipho uthi, “Molo, Thando. Uphila njani?”', en: 'Sipho says, “Hello, Thando. How are you?”' },
        { xh: 'UThando uphendula, “Ndiphilile, enkosi.”', en: 'Thando answers, “I am well, thank you.”' },
      ],
      mistake: 'Do not put two speakers on one line without a break. Readers will not know who is speaking.',
    },
  ],
  checks: [
    { q: 'What should a formal email include?', a: 'A greeting, a clear subject, a purposeful body and a polite closing.' },
    { q: 'What does register mean?', a: 'The level of formality that suits the audience.' },
    { q: 'List the usual parts of a report.', a: 'A title, introduction, findings, conclusion and recommendations.' },
    { q: 'What does a review typically include?', a: 'A description, personal opinion and supporting reasons.' },
  ],
};

export default lesson;
