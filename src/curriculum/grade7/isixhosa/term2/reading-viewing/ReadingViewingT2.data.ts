import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 7 Term 2. Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.// Timetables, news and folk-story texts are described in English: a teacher supplies an isiXhosa example of each.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Timetables, signs and scanning',
      rule: 'A timetable helps you find times and schedules. To find one detail fast, scan: let your eyes run over the text for a number or a key word.',
      workedTitle: 'Reading a timetable and a sign',
      examples: [
        { xh: 'Ixesha', en: 'Time / schedule: look in the correct row and column for the time.' },
        { xh: 'Umqondiso', en: 'Sign / symbol: “No entry” means do not go in.' },
        { xh: 'Imiyalelo', en: 'Instructions: they tell you what to do, step by step.' },
      ],
      mistake: 'Reading every word to find one time wastes time. Scan for the number or key word you need.',
    },
    {
      title: 'Folk stories (iintsomi)',
      rule: 'An intsomi (folk story) is told again and again and usually teaches a moral, or isifundo. Look for the characters, the problem and the lesson.',
      workedTitle: 'Reading a folk story',
      examples: [
        { xh: 'Intsomi', en: 'Folk story: told by elders, often with animals as characters.' },
        { xh: 'Isifundo', en: 'Lesson or moral: what the story teaches.' },
        { xh: 'Abalinganiswa', en: 'Characters: the people or animals in the story.' },
      ],
      mistake: 'The moral is not a detail from the middle of the story. It is the lesson at the end.',
    },
    {
      title: 'News and fact versus fiction',
      rule: 'A news snippet (iindaba) gives brief facts about a real event. Fact versus fiction means you separate true information from made-up details.',
      workedTitle: 'Fact or fiction?',
      examples: [
        { xh: 'Iindaba', en: 'News: brief information about a real event.' },
        { xh: 'Inyani', en: 'Truth / fact: it can be checked.' },
        { xh: 'Intsomi', en: 'Folk story: made-up characters and events.' },
      ],
      mistake: 'A story that sounds exciting is not automatically true. Ask whether it can be checked.',
    },
    {
      title: 'Compare two texts',
      rule: 'Comparing means finding similarities and differences. Ask what each text is mostly about and who wrote it, and for what purpose.',
      workedTitle: 'Compare a folk story and a news snippet',
      examples: [
        { xh: 'Intsomi', en: 'Purpose: to entertain and teach a lesson. Made up.' },
        { xh: 'Iindaba', en: 'Purpose: to inform. Real event, checked facts.' },
      ],
      mistake: 'Only listing differences. A comparison also names what the texts share, such as characters or a place.',
      vocab: [
        { word: 'Imenyu', meaning: 'Menu' },
        { word: 'Imiyalelo', meaning: 'Instructions' },
        { word: 'Isibhengezo', meaning: 'Advert / notice' },
        { word: 'Umqondiso', meaning: 'Sign / symbol' },
      ],
    },
  ],
  checks: [
    { q: 'What does a timetable help you find?', a: 'Times and schedules.' },
    { q: 'What does an intsomi (folk story) usually teach at the end?', a: 'A moral or lesson (isifundo).' },
    { q: 'Which reading action finds one detail fast: scanning or reading every word?', a: 'Scanning.' },
    { q: 'What do you look for when you compare two texts?', a: 'Similarities and differences.' },
  ],
};

export default lesson;
