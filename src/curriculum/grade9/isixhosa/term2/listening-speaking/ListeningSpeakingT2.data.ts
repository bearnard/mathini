import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 9 Term 2, Listening & Speaking. Every isiXhosa line is listed in audit/xhosa-g9-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Preparing a talk',
      rule: 'A prepared talk is practised beforehand and timed to fit the time you are given. Plan the parts, practise aloud, and use notes with key words. Do not make it up on the spot, and do not read it word for word from a page.',
      workedTitle: 'Key-word notes for a one-minute talk',
      examples: [
        { xh: 'Isihloko: Isikolo sam.', en: 'Topic: My school. (a note card heading)' },
        { xh: 'Isikolo sikhulu. Abafundi bayafunda.', en: 'The school is big. The learners study. (key points to say in your own words)' },
        { xh: 'Enkosi ngokumamela.', en: 'Thank you for listening. (end on time)' },
      ],
      mistake: 'Do not read word for word and do not skip planning. You will lose eye contact and run over time.',
    },
    {
      title: 'Summarising spoken information',
      rule: 'When you summarise what you hear, focus on the main ideas and key details, not every word or your own opinion. A good summary is brief, accurate and in your own words. It is never a word-for-word copy and never longer than the original.',
      workedTitle: 'From speech to summary',
      examples: [
        { xh: 'Namhlanje sifunda ngemfundo. Imfundo iyasinceda.', en: 'Today we learn about education. Education helps us. (the speech)' },
        { xh: 'Imfundo iyasinceda.', en: 'Education helps us. (summary: the main idea)' },
        { xh: 'Imfundo, ukuncedana.', en: 'Notes: education, helping. (key words only)' },
      ],
      mistake: 'Do not add your own opinion or leave out the key facts. A summary reports what the speaker said.',
    },
    {
      title: 'Formal and informal language',
      rule: 'In a formal interview, use polite, standard, professional language. With classmates, informal conversation and colloquial expressions are fine, but stay respectful. Open-ended questions invite full replies; avoid leading questions and yes-or-no questions only.',
      workedTitle: 'Same message, two registers',
      examples: [
        { xh: 'Molweni, Mhlekazi. Ndiyabulela ngethuba.', en: 'Hello, sir. Thank you for the opportunity. (formal)' },
        { xh: 'Molo, mhlobo wam. Uphila njani?', en: 'Hi, my friend. How are you? (informal)' },
        { xh: 'Uthanda ntoni ngesikolo?', en: 'What do you like about school? (open question)' },
        { xh: 'Kutheni uthanda isikolo?', en: 'Why do you like school? (open question)' },
      ],
      mistake: 'Slang or a careless tone in a formal interview shows disrespect to the panel. Match your language to the situation.',
    },
    {
      title: 'Role play and group discussion',
      rule: 'Role play lets you practise real-world language in a safe setting. In a group discussion, listen actively, take notes and plan your reply. Do not interrupt, and do not ignore the speakers who disagree with you.',
      workedTitle: 'A shop role play and a group reply',
      examples: [
        { xh: 'Molo. Ndingakunceda?', en: 'Hello. Can I help you? (shopkeeper)' },
        { xh: 'Ndifuna isonka, nceda.', en: 'I want bread, please. (customer)' },
        { xh: 'Ndiyabulela. Hamba kakuhle.', en: 'Thank you. (customer) Go well. (shopkeeper, to the customer who is leaving)' },
        { xh: 'Ndiyavuma, kodwa ndicinga ukuba…', en: 'I agree, but I think that… (group reply)' },
      ],
      mistake: 'Role play is not wasted time or acting games. Treat it as real communication.',
    },
  ],
  checks: [
    { q: 'A prepared talk should be what: practised and timed, or made up on the spot?', a: 'Practised beforehand and timed to fit.' },
    { q: 'What should a good summary be?', a: 'Brief, accurate and in your own words.' },
    { q: 'What language suits a formal interview?', a: 'Polite, standard and professional language.' },
    { q: 'Name one good open-ended question about school.', a: 'For example Kutheni uthanda isikolo? (it invites a full reply)' },
  ],
};

export default lesson;
