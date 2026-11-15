import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 11 Term 2, Reading & Viewing. Every isiXhosa line is listed in audit/xhosa-g11-12-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Social themes in prose',
      rule: 'A social theme is a real community issue that a story is about, such as poverty, inequality, tradition versus modern life, or education. Name the theme, then point to the part of the story that shows it.',
      workedTitle: 'Name the theme in a sentence',
      examples: [
        { xh: 'Ibali lixoxa ngobuhlwempu.', en: 'The story speaks about poverty.' },
        { xh: 'Umbhali uxoxa ngemfundo.', en: 'The writer talks about education.' },
        { xh: 'Ibali libonisa isithethe nobomi bale mihla.', en: 'The story shows tradition and modern life.' },
      ],
      mistake: 'A theme is not the setting or the number of chapters. It is the central message about life that the story develops.',
      vocab: [
        { word: 'Ibali', phonetic: "[i'baːli]", meaning: 'Story' },
        { word: 'Ubuhlwempu', meaning: 'Poverty' },
        { word: 'Imfundo', meaning: 'Education' },
      ],
    },
    {
      title: 'Perspective: who tells the story?',
      rule: 'Perspective is the point of view of the narrator. A first-person narrator says "I" and knows only his or her own thoughts. A third-person omniscient narrator knows the thoughts of all characters. The narrator shapes what we see.',
      workedTitle: 'First person and third person',
      examples: [
        { xh: 'Ndahamba ndodwa.', en: 'I walked alone. (first person)' },
        { xh: 'Wahamba yedwa.', en: 'He/she walked alone. (third person)' },
        { xh: 'Ngubani oxoxa ibali?', en: 'Who is telling the story?' },
      ],
      mistake: 'Do not confuse the writer with the narrator. Ask whose voice is heard and whose voice is left out.',
    },
    {
      title: 'Media texts: bias and reliability',
      rule: 'Ask who made the text, why, and what evidence it gives. A reliable text names credible sources and uses neutral words. A biased text uses emotional words and shows only one side.',
      workedTitle: 'Questions and signals',
      examples: [
        { xh: 'Ngubani obhale oku?', en: 'Who wrote this?' },
        { xh: 'Ngaba umbhali ucaphula umthombo othembekileyo?', en: 'Does the writer quote a trustworthy source?' },
        { xh: 'Iingxelo zibonisa ukuba abafundi baninzi.', en: 'Reports show that the learners are many. (neutral, evidence-based)' },
        { xh: 'Esi sisombululo sibi kakhulu!', en: 'This solution is very bad! (emotional opinion, not evidence)' },
      ],
      mistake: 'A confident tone does not make a text reliable. Check the evidence and the sources, not the font or the length.',
    },
    {
      title: 'Visual literacy and comparing viewpoints',
      rule: 'Designers choose colour, layout and font size on purpose. Colour has connotations: red can show danger, green nature. Big or bold letters show importance. To compare two sources, give the viewpoint of A with evidence, then B, then say how they agree or differ.',
      workedTitle: 'Read the design, then compare',
      examples: [
        { xh: 'Umbala obomvu ubonisa ingozi.', en: 'The red colour shows danger.' },
        { xh: 'Umbala oluhlaza ubonisa indalo.', en: 'The green colour shows nature.' },
        { xh: 'Oonobumba abakhulu babonisa into ebalulekileyo.', en: 'Big letters show something important.' },
        { xh: 'Bobabini bavumelana ngokuba imfundo ibalulekile, kodwa bahluke ngesisombululo.', en: 'Both agree that education is important, but they differ on the solution.' },
      ],
      mistake: 'Do not decide which source is right before you have read both. Record what each says first, then justify your own reading with evidence.',
    },
  ],
  checks: [
    { q: 'Say in isiXhosa: "The story speaks about poverty."', a: 'Ibali lixoxa ngobuhlwempu.' },
    { q: 'Which narrator knows the thoughts of ALL characters?', a: 'The third-person omniscient narrator. (A first-person narrator says "I", e.g. Ndahamba ndodwa.)' },
    { q: 'Give one question that tests whether a media text is reliable.', a: 'Are the sources credible? (e.g. Ngaba umbhali ucaphula umthombo othembekileyo?)' },
    { q: 'What should you do FIRST when comparing two sources, and what might the colour red show?', a: 'Identify the viewpoint and evidence in Source A. Red can show danger (umbala obomvu ubonisa ingozi).' },
  ],
};

export default lesson;
