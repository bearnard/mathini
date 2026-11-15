import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 12 Term 2, Listening & Speaking. Every isiXhosa line is listed in audit/xhosa-g11-12-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Interviews: open, closed and probing questions',
      rule: 'Plan your questions and keep a respectful, formal register. A closed question gets a short fact or a yes/no. An open question (why, how, what do you think) invites a full answer. A probing follow-up asks for an example or more detail.',
      workedTitle: 'Three kinds of question',
      examples: [
        { xh: 'Ngaba usebenza apha?', en: 'Do you work here? (closed)' },
        { xh: 'Kutheni ukhethe lo msebenzi?', en: 'Why did you choose this job? (open)' },
        { xh: 'Uthini ngemfundo?', en: 'What do you say about education? (open)' },
        { xh: 'Ungandinika umzekelo?', en: 'Can you give me an example? (probing)' },
      ],
      mistake: 'A probing question is not a new topic. It goes back to the first answer and asks for evidence or detail.',
      vocab: [
        { word: 'Udliwano-ndlebe', phonetic: "[udli'wanɔ ndlɛbɛ]", meaning: 'Interview' },
        { word: 'Phulaphula', phonetic: "[pʰula'pʰula]", meaning: 'Listen' },
      ],
    },
    {
      title: 'Oral presentations: signposting',
      rule: 'A presentation needs a clear beginning, an organised body and a purposeful ending. Signposting words tell listeners where you are. Use visual aids only when they support your message, and finish with a short summary.',
      workedTitle: 'Open, signpost, close',
      examples: [
        { xh: 'Molweni nonke. Ndiza kuthetha ngemfundo.', en: 'Hello everyone. I will speak about education. (opening)' },
        { xh: 'Kuqala, ...', en: 'Firstly, ...' },
        { xh: 'Ukongeza koko, ...', en: 'In addition, ...' },
        { xh: 'Ekugqibeleni, ...', en: 'Finally, ...' },
        { xh: 'Ndiyabulela ngokuphulaphula.', en: 'Thank you for listening. (closing)' },
      ],
      mistake: 'Fillers such as "you know what I mean?" or "I forgot my next point" are not signposts. A signpost shows the structure.',
      vocab: [
        { word: 'Intetho', phonetic: "[in'tɛːtʰɔ]", meaning: 'Speech' },
      ],
    },
    {
      title: 'Listening for attitude and bias',
      rule: 'Tone and word choice show attitude: praise, doubt, anger, excitement. Strongly emotional (loaded) words can push you toward one side and may show bias. A fact can be checked; an opinion is a personal judgement.',
      workedTitle: 'Fact or opinion?',
      examples: [
        { xh: 'Kukho iindwendwe ezintathu.', en: 'There are three guests. (fact: you can count them)' },
        { xh: 'Esi sisombululo sibi kakhulu.', en: 'This solution is very bad. (opinion)' },
        { xh: 'Uthetha ngovuyo.', en: 'He/she speaks with joy. (tone: excitement)' },
        { xh: 'Uthetha ngomsindo.', en: 'He/she speaks with anger. (tone: annoyance)' },
      ],
      mistake: 'Words like "worst" or "very bad" are judgements, not facts. Do not treat them as verifiable information.',
    },
    {
      title: 'Formal oral responses',
      rule: 'Answer in complete sentences, avoid slang, and refer to the spoken text. Careful phrases such as "it seems that" and "the speaker says that" show control and precision.',
      workedTitle: 'Formal and informal',
      examples: [
        { xh: 'Kubonakala ukuba lo mntu unexhala ngemfundo.', en: 'It seems that this person is worried about education. (formal)' },
        { xh: 'Lo mntu uthi imfundo ibalulekile.', en: 'This person says that education is important. (refers to the text)' },
        { xh: 'Molweni, mhlekazi.', en: 'Hello, sir. (formal greeting)' },
        { xh: 'Ndicela ukubuza umbuzo.', en: 'May I ask a question? (formal request)' },
      ],
      mistake: 'Slang and one-word answers lose marks in a formal task. Give a full sentence and point to what was said.',
    },
  ],
  checks: [
    { q: 'Which is an open question: "Ngaba usebenza apha?" or "Kutheni ukhethe lo msebenzi?"', a: 'Kutheni ukhethe lo msebenzi? (Why did you choose this job?) The other is closed.' },
    { q: 'Give two isiXhosa signposts for a presentation.', a: 'For example: Kuqala (firstly), Ukongeza koko (in addition), Ekugqibeleni (finally).' },
    { q: 'Fact or opinion: "Kukho iindwendwe ezintathu" and "Esi sisombululo sibi kakhulu"?', a: 'The first is a fact; the second is an opinion. Strong emotional words like this may show bias.' },
    { q: 'Why give formal oral answers in complete sentences?', a: 'They are clearer, more precise and sound more academic. Example: Kubonakala ukuba lo mntu unexhala ngemfundo.' },
  ],
};

export default lesson;
