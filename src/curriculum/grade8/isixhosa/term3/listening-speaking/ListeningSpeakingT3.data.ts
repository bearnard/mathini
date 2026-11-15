import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 8 Term 3, Listening & Speaking. Every isiXhosa line is listed in audit/xhosa-g8-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'A prepared speech',
      rule: 'A prepared speech has an organised introduction, body and ending. Practise, and use words that mark the order of your points.',
      workedTitle: 'Introduction, body and ending',
      examples: [
        { xh: 'Namhlanje ndiza kuthetha ngokufunda.', en: 'Today I will talk about reading. (introduction)' },
        { xh: 'Okokuqala… Okwesibini…', en: 'Firstly… Secondly… (body)' },
        { xh: 'Okokugqibela…', en: 'Lastly… (body)' },
        { xh: 'Ngamafutshane, ukufunda kubalulekile.', en: 'In short, reading is important. (ending)' },
      ],
      mistake: 'Do not give points in any order, repeat one line, or end without a final idea. Finish with the main message.',
    },
    {
      title: 'Discussion: agree and disagree politely',
      rule: 'In a discussion, listen and then respond to what was said. Give your opinion with a reason, and disagree politely.',
      workedTitle: 'Polite discussion phrases',
      examples: [
        { xh: 'Ndiyavumelana nawe.', en: 'I agree with you.' },
        { xh: 'Andivumelani nawe.', en: 'I do not agree with you.' },
        { xh: 'Ndicinga ukuba ukufunda kubalulekile.', en: 'I think that reading is important.' },
        { xh: 'Uxolo, ndicinga ngenye indlela.', en: 'Sorry, I think differently.' },
      ],
      mistake: 'Do not interrupt or mock. Wait for your turn, and say why you disagree.',
    },
    {
      title: 'Role play',
      rule: 'A role play copies a real situation. Stay in your role, use polite language, and if your partner disagrees, answer with reasons.',
      workedTitle: 'A shop role play',
      examples: [
        { xh: 'Molo, ndingakunceda?', en: 'Hello, may I help you?' },
        { xh: 'Ewe, ndifuna ukuthenga incwadi.', en: 'Yes, I want to buy a book.' },
        { xh: 'Ndiyakuva, kodwa ndicinga ukuba…', en: 'I hear you, but I think that…' },
      ],
      mistake: 'Do not stop the task when you disagree, and do not repeat one sentence louder. Reply politely with a reason.',
    },
    {
      title: 'Oral response to literature',
      rule: 'When you respond orally to a story or poem, refer to details from the text: the character, the events and the message. Say what you think and why.',
      workedTitle: 'Speaking about a story',
      examples: [
        { xh: 'Umlinganiswa omkhulu nguSipho.', en: 'The main character is Sipho.' },
        { xh: 'Umxholo webali kukuncedana.', en: 'The theme of the story is helping each other.' },
      ],
      mistake: 'Do not invent a different story. Name a detail from the text to support what you say.',
    },
  ],
  checks: [
    { q: 'What three parts does a prepared speech need?', a: 'An introduction, a body and an ending.' },
    { q: 'Say “I agree with you.”', a: 'Ndiyavumelana nawe.' },
    { q: 'Give a good opening for a prepared talk.', a: 'Namhlanje ndiza kuthetha ngo…' },
    { q: 'What should a strong oral conclusion do?', a: 'Summarise the main message.' },
  ],
};

export default lesson;
