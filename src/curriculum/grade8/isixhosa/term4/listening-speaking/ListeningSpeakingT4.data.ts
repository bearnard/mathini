import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 8 Term 4, Listening & Speaking (revision). Every isiXhosa line is listed in audit/xhosa-g8-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Listening quizzes: recall the key details',
      rule: 'A listening quiz tests whether you can recall key details: names, places and actions. Make short notes while you listen. If the text is replayed, check and refine your first answers.',
      workedTitle: 'Listen, note, answer',
      examples: [
        { xh: 'UThando uhlala eMdantsane. Ufunda eGrade 8. Uthanda ibhola.', en: 'Thando lives in Mdantsane. She is in Grade 8. She likes football.' },
        { xh: 'UThando uhlala phi?', en: 'Where does Thando live? (eMdantsane)' },
        { xh: 'Uthanda ntoni?', en: 'What does she like? (ibhola)' },
      ],
      mistake: 'Do not erase your notes or start a new topic. Use the replay to check and improve what you wrote.',
    },
    {
      title: 'Prepared responses and fluency',
      rule: 'A prepared response is structured and relevant: state your point, then support it. Fluency comes from practice, pacing and clear speech, not from rushing.',
      workedTitle: 'Point and support',
      examples: [
        { xh: 'Ndicinga ukuba ukufunda kubalulekile.', en: 'I think that reading is important. (point)' },
        { xh: 'Kuba kusinceda.', en: 'Because it helps us. (support)' },
        { xh: 'Enkosi ngokumamela.', en: 'Thank you for listening. (ending)' },
      ],
      mistake: 'Do not memorise words without meaning or answer off the topic. Keep the answer clear and relevant.',
    },
    {
      title: 'Exam-style speaking and group respect',
      rule: 'In an oral exam, pause briefly to plan before you answer. In a group, take turns and build on other ideas politely.',
      workedTitle: 'Useful phrases',
      examples: [
        { xh: 'Nceda uphinde umbuzo.', en: 'Please repeat the question.' },
        { xh: 'Ndiyavumelana nawe, kwaye ndifuna ukongeza.', en: 'I agree with you, and I want to add something.' },
        { xh: 'Uxolo, ndicinga ngenye indlela.', en: 'Sorry, I think differently.' },
      ],
      mistake: 'Do not answer before you have heard the whole question, interrupt the speaker or stay silent. Plan, then speak.',
    },
  ],
  checks: [
    { q: 'What do listening quizzes usually test?', a: 'Recall of key details from what you hear.' },
    { q: 'How should a strong final oral answer be built?', a: 'State the point clearly and briefly support it.' },
    { q: 'Say “Please repeat the question.”', a: 'Nceda uphinde umbuzo.' },
    { q: 'What should you do when a listening text is replayed?', a: 'Check and refine your first answers.' },
  ],
};

export default lesson;
