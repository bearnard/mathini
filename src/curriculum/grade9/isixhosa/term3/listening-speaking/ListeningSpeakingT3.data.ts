import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 9 Term 3, Listening & Speaking. Every isiXhosa line is listed in audit/xhosa-g9-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Debate: claim, evidence, reasoning',
      rule: 'A debate is a formal discussion where two sides present arguments and counter-arguments. A strong argument has a clear claim, supporting evidence and logical reasoning. Say the claim first, give the evidence, then explain why it proves the claim.',
      workedTitle: 'Claim, evidence, reasoning',
      examples: [
        { xh: 'Imfundo ibalulekile.', en: 'Education is important. (claim)' },
        { xh: 'Abafundi abafundayo baphumelela.', en: 'Learners who study succeed. (evidence)' },
        { xh: 'Ngoko ke, imfundo iyasinceda.', en: 'Therefore, education helps us. (reasoning)' },
      ],
      mistake: 'Strong feeling is not an argument. Without evidence and reasoning, a claim does not persuade.',
    },
    {
      title: 'Preparing and answering opposing views',
      rule: 'Prepare for a debate by researching, planning your points and expecting counter-arguments. When you respond to an opposing view, acknowledge the point first, then refute it politely with evidence. Do not attack the speaker.',
      workedTitle: 'Acknowledge, then refute',
      examples: [
        { xh: 'Ndiyavuma ukuba imali ibalulekile, kodwa imfundo ibalulekile ngakumbi.', en: 'I agree that money is important, but education is more important. (acknowledge, then refute)' },
        { xh: 'Kuba imfundo ivula amathuba.', en: 'Because education opens opportunities. (the reason, as evidence)' },
        { xh: 'Ndiyabulela.', en: 'Thank you. (stay polite)' },
      ],
      mistake: 'Do not ignore the other side or shout. A polite reply with evidence is stronger.',
    },
    {
      title: 'Oral response to literature',
      rule: 'An oral response to a literary text shows understanding through examples and your interpretation. A quotation from the text supports your interpretation with direct evidence. Say the point, quote, then explain.',
      workedTitle: 'Point, quote, explain',
      examples: [
        { xh: 'Ibali lithetha ngokuncedana.', en: 'The story is about helping one another. (point)' },
        { xh: 'UThando uyamnceda.', en: 'Thando helps him. (the quotation)' },
        { xh: 'Oku kubonisa ubuhlobo.', en: 'This shows friendship. (explanation)' },
      ],
      mistake: 'Do not retell the whole story. Give a point and prove it with a quotation.',
    },
    {
      title: 'Panel discussion',
      rule: 'A panel discussion differs from a debate: several experts discuss a topic from different views, and they do not have to defeat each other. Listening to the other speakers helps you build on ideas, find common ground and ask good questions.',
      workedTitle: 'Useful phrases for a panel',
      examples: [
        { xh: 'Ndiyavuma kwaye ndifuna ukongeza.', en: 'I agree and I want to add. (build on an idea)' },
        { xh: 'Ndiyavuma, kodwa ndicinga ukuba…', en: 'I agree, but I think that… (a different view)' },
        { xh: 'Nceda uphinde.', en: 'Please repeat. (a good question starts with listening)' },
      ],
      mistake: 'A panel is not a contest with winners. Do not wait only for your turn; listen to the others.',
    },
  ],
  checks: [
    { q: 'What does a strong argument include?', a: 'A clear claim, supporting evidence and logical reasoning.' },
    { q: 'How should you respond to an opposing view in a debate?', a: 'Acknowledge the point, then refute it politely with evidence.' },
    { q: 'What does a quotation do in an oral response?', a: 'It supports your interpretation with direct evidence.' },
    { q: 'How does a panel discussion differ from a debate?', a: 'Several experts discuss a topic from different views; it is not a contest between two sides.' },
  ],
};

export default lesson;
