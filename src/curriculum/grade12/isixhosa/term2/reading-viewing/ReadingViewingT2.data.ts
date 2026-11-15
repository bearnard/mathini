import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 12 Term 2, Reading & Viewing. Every isiXhosa line is listed in audit/xhosa-g11-12-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Themes in a novel or drama',
      rule: 'A theme is a central idea developed through the text, such as justice, poverty, family or perseverance. Major themes recur; minor themes add depth. Track how a theme grows as the conflict rises and resolves.',
      workedTitle: 'Name the theme',
      examples: [
        { xh: 'Ubulungisa ngumxholo oyintloko kule drama.', en: 'Justice is the main idea of this drama.' },
        { xh: 'Ibali lixoxa ngobuhlwempu nosapho.', en: 'The story speaks about poverty and family.' },
        { xh: 'Ukunyamezela kubalulekile.', en: 'Perseverance is important.' },
      ],
      mistake: 'A theme is not the setting, the number of chapters or the cover. It is an idea the whole text develops.',
      vocab: [
        { word: 'Ibali', phonetic: "[i'baːli]", meaning: 'Story' },
        { word: 'Ubulungisa', meaning: 'Justice' },
      ],
    },
    {
      title: 'Character perspective and motivation',
      rule: 'Motivation explains why a character acts. Perspective is the character\'s viewpoint, and it affects how we judge the action. Ask: what does the character want, and what pressure shapes the choice? Dialogue reveals both.',
      workedTitle: 'Dialogue shows perspective',
      examples: [
        { xh: 'Andinakuthula xa ubulungisa bunyathelwa.', en: 'I cannot be silent when justice is trampled. (moral urgency)' },
        { xh: 'Ufuna ntoni?', en: 'What does he/she want? (motivation question)' },
        { xh: 'Wenza oko ngenxa yobuhlwempu.', en: 'He/she did that because of poverty. (motive)' },
      ],
      mistake: 'Motivation is not how many lines a character speaks or what the character wears. It is the reason behind the decision.',
    },
    {
      title: 'Media texts: layout and connotation',
      rule: 'A headline gives the main idea at once. A photograph adds emotion or proof, and its caption guides how you read it. Connotation is the implied meaning beyond the literal one, for example a leader called a lion suggests courage.',
      workedTitle: 'Headline, caption and connotation',
      examples: [
        { xh: 'Imfundo ngeyabo bonke', en: 'Education is for everyone (a headline)' },
        { xh: 'Abafundi bafunda ethala leencwadi.', en: 'Learners study at the library. (a caption)' },
        { xh: 'Inkokeli yingonyama.', en: 'The leader is a lion. (connotation: courage and power)' },
        { xh: 'Ingonyama yinyamakazi.', en: 'A lion is a wild animal. (literal meaning)' },
      ],
      mistake: 'A caption is not the headline. The headline gives the main idea; the caption connects the photo to the story and directs interpretation.',
    },
    {
      title: 'Critical literacy: comparing viewpoints',
      rule: 'Critical readers find each writer\'s stance first: does the writer support, criticise or complicate the issue? Support the comparison with direct evidence from both texts. Notice whose voice is emphasised or missing, and watch for bias.',
      workedTitle: 'Compare stance and notice bias',
      examples: [
        { xh: 'Umbhali wokuqala uyayixhasa le nto; owesibini uyayigxeka.', en: 'The first writer supports this; the second criticises it.' },
        { xh: 'Ngokutsho kombhali, imfundo iyabiza.', en: 'According to the writer, education is expensive. (evidence)' },
        { xh: 'Umbhali uthetha kuphela ngecala elinye.', en: 'The writer speaks about only one side. (bias)' },
      ],
      mistake: 'Do not call a text biased just because you disagree. Bias shows in one-sided evidence or loaded words, so point to them.',
    },
  ],
  checks: [
    { q: 'What is character motivation? Give an isiXhosa question that asks for it.', a: 'The reason a character acts. Ufuna ntoni? (What does he/she want?)' },
    { q: 'Which part of a newspaper article gives the main idea immediately, and what does a caption do?', a: 'The headline. A caption guides how the reader understands the photo.' },
    { q: 'Why does "Inkokeli yingonyama" show connotation?', a: 'It does not mean the leader is an animal. It suggests courage and power.' },
    { q: 'What do you look for first when comparing two writers?', a: 'Each writer\'s stance on the issue (supports, criticises or complicates), with evidence.' },
  ],
};

export default lesson;
