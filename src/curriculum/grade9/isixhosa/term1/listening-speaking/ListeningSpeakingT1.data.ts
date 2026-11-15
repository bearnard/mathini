import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 9 Term 1, Listening & Speaking. Every isiXhosa line is listed in audit/xhosa-g9-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Structure of a short speech',
      rule: 'A short speech has an introduction, a body and a conclusion. Introduction: greet, say who you are and the topic. Body: your main points, in order. Conclusion: sum up and thank the listeners. This structure helps listeners follow and remember.',
      workedTitle: 'A speech in three parts',
      examples: [
        { xh: 'Molweni nonke. NdinguLitha. Namhlanje ndiza kuthetha ngemfundo.', en: 'Hello everyone. I am Litha. Today I will speak about education. (introduction)' },
        { xh: 'Okokuqala, imfundo ibalulekile. Okwesibini, ndifunda rhoqo.', en: 'Firstly, education is important. Secondly, I study often. (body)' },
        { xh: 'Ekugqibeleni, ndiyabulela. Enkosi ngokumamela.', en: 'Finally, I am thankful. Thank you for listening. (conclusion)' },
      ],
      mistake: 'A speech is not a joke, a story and a song in any order. Without a clear introduction, body and conclusion, listeners get lost.',
    },
    {
      title: 'Delivery: fluency and eye contact',
      rule: 'A fluent speaker talks smoothly, without long pauses, with a natural rhythm and clear pronunciation. Fluency is not speed. Look at your audience: eye contact builds trust and keeps them listening. Practise aloud beforehand.',
      workedTitle: 'Practise a greeting with your eyes up',
      examples: [
        { xh: 'Molweni, bahlobo.', en: 'Hello, friends. (look at the audience and smile)' },
        { xh: 'Ndiyathanda ukufunda.', en: 'I like to read. (say it slowly and clearly)' },
        { xh: 'Enkosi ngokumamela.', en: 'Thank you for listening. (look up and pause)' },
      ],
      mistake: 'Do not rush so that words run together, and do not whisper. Do not read only from the page; eye contact is not rude, it shows confidence.',
    },
    {
      title: 'Listening: main ideas, notes and clarifying',
      rule: 'Your first goal when listening is to find the main ideas, not to write every word. Take notes of key words. If you do not understand a question, ask the speaker to repeat or explain. Do not guess or stay silent.',
      workedTitle: 'Listen, note the key words, ask',
      examples: [
        { xh: 'Imfundo ibalulekile. Ndifunda kuba ndifuna ukuphumelela.', en: 'Education is important. I study because I want to succeed. (Notes: imfundo, ibalulekile, ukuphumelela)' },
        { xh: 'Nceda uphinde.', en: 'Please repeat.' },
        { xh: 'Andiqondi. Ndiyaqonda.', en: 'I do not understand. I understand.' },
      ],
      mistake: 'Do not try to write down every word: you fall behind and miss the message. Write the key words only.',
    },
    {
      title: 'Interviews and critical discussion',
      rule: 'An open question invites a detailed answer, so it suits an interview about daily life. A closed question only gets a short fact. In a discussion, listen, think, then respond with care, giving a reason. Do not interrupt or dismiss others.',
      workedTitle: 'Open and closed questions, and a polite reply',
      examples: [
        { xh: 'Wenza ntoni emva kwesikolo?', en: 'What do you do after school? (open: best for an interview about daily life)' },
        { xh: 'Ngubani igama lakho?', en: 'What is your name? (closed: one short answer)' },
        { xh: 'Ndiyavuma, kodwa ndicinga ukuba imfundo ibalulekile.', en: 'I agree, but I think education is important. (a considered reply)' },
      ],
      mistake: 'Do not interrupt at once or say strong things without evidence. Listen first, then answer with a reason.',
    },
  ],
  checks: [
    { q: 'What are the three parts of a short speech?', a: 'An introduction, a body and a conclusion.' },
    { q: 'Which is the best question for an interview about daily life: Ngubani igama lakho? or Wenza ntoni emva kwesikolo?', a: 'Wenza ntoni emva kwesikolo? (it is open and invites a full answer)' },
    { q: 'You do not understand a question in an interview. What do you do?', a: 'Ask the speaker to repeat or explain, for example Nceda uphinde.' },
    { q: 'What is your first goal when listening to a speech?', a: 'To identify the main ideas and take notes of key words.' },
  ],
};

export default lesson;
