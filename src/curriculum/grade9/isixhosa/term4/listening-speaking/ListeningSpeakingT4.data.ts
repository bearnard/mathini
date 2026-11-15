import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 9 Term 4, Listening & Speaking (revision). Every isiXhosa line is listed in audit/xhosa-g9-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Revising key speaking skills',
      rule: 'Revisiting the key speaking skills builds confidence and consistency before the final assessment. Revise the structure of a speech (introduction, body, conclusion), clear delivery and eye contact. Practise each skill again, aloud.',
      workedTitle: 'A speech outline to practise',
      examples: [
        { xh: 'Molweni nonke. NdinguLitha.', en: 'Hello everyone. I am Litha. (introduction)' },
        { xh: 'Okokuqala… okwesibini…', en: 'Firstly… secondly… (body)' },
        { xh: 'Enkosi ngokumamela.', en: 'Thank you for listening. (conclusion)' },
      ],
      mistake: 'Do not leave all your revision to the last night. Short, repeated practice builds confidence.',
    },
    {
      title: 'Fluency: how it grows and how to judge it',
      rule: 'Fluency in speaking develops through repeated practice and exposure to natural speech. To evaluate your fluency, consider your pace, your pronunciation and your confidence, with few long pauses. Fluent is smooth, not just fast.',
      workedTitle: 'Practise a sentence three ways',
      examples: [
        { xh: 'Ndiyathanda ukufunda.', en: 'I like to read. (say it slowly, then smoothly)' },
        { xh: 'Ndiyathanda ukufunda kakhulu.', en: 'I like to read very much. (add a word, keep the rhythm)' },
        { xh: 'Thetha ngokucotha.', en: 'Speak slowly. (a reminder about pace)' },
      ],
      mistake: 'Fluency does not mean speaking as fast as you can. Words must stay clear.',
    },
    {
      title: 'Oral feedback and self-assessment',
      rule: 'Useful oral feedback names specific strengths and areas for improvement, not just “good” or “bad”. In self-assessment, reflect on what went well and what needs work. Asking for clarification shows a wish to improve and learn.',
      workedTitle: 'Feedback phrases',
      examples: [
        { xh: 'Wathetha kakuhle.', en: 'You spoke well. (a strength)' },
        { xh: 'Zama ukujonga abaphulaphuli.', en: 'Try to look at the listeners. (an area to improve)' },
        { xh: 'Nceda uphinde.', en: 'Please repeat. (asking for clarification)' },
      ],
      mistake: 'Vague feedback does not help. Name one thing that worked and one thing to improve.',
    },
    {
      title: 'Listening practice',
      rule: 'When practising listening, focus on key words: they give you the meaning even when you miss some words. A good revision strategy is to listen to different speakers and topics often. Note the key words, then retell in your own words.',
      workedTitle: 'Listen for key words',
      examples: [
        { xh: 'Ngomso siza kuya ekhaya lomhlobo wam. Siza kuhamba ngebhasi.', en: 'Tomorrow we will go to my friend’s home. We will travel by bus.' },
        { xh: 'Ngomso, ekhaya, ibhasi.', en: 'Key words: tomorrow, home, bus.' },
        { xh: 'Ndiyaqonda.', en: 'I understand. (say it when you have followed)' },
      ],
      mistake: 'Do not stop listening because you missed one word. Hold on to the key words and keep going.',
    },
  ],
  checks: [
    { q: 'How does revising key speaking skills help you?', a: 'It builds confidence and consistency before the final assessment.' },
    { q: 'How does fluency develop?', a: 'Through repeated practice and exposure to natural speech.' },
    { q: 'What should oral feedback focus on?', a: 'Specific strengths and areas for improvement.' },
    { q: 'What helps you get the meaning when you miss some words?', a: 'Focusing on key words.' },
  ],
};

export default lesson;
