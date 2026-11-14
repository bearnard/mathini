import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';

const learnSteps = [
  {
    title: "Reading comprehension actively",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"In Paper 1 comprehension, read the questions carefully and return to the passage with a purpose. Distinguish between literal answers, inferences and language-analysis questions so that you do not respond at the wrong level. Good readers underline clue words and watch for shifts in tone or viewpoint."}</p>
      </div>
    ),
  },
  {
    title: "Applying summary rules",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"A CAPS summary usually requires seven key points in continuous prose and in your own words, unless the instructions say otherwise. Avoid direct quotation, repetition and unnecessary examples from the passage. Count words honestly and focus on the central ideas, not attractive but minor details."}</p>
      </div>
    ),
  },
  {
    title: "Interpreting visual literacy",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Visual texts such as advertisements, cartoons and posters communicate through layout, image choice, slogans and target audience cues. Ask who the text is aimed at, what effect the picture creates, and how words and visuals work together. Visual literacy questions often test bias, message and persuasive technique."}</p>
      </div>
    ),
  },
  {
    title: "Editing with purpose",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Language editing is not random proofreading: you must notice agreement, tense consistency, punctuation, modifiers and word choice quickly. Work sentence by sentence and ask whether the structure is grammatically correct and appropriate for meaning. Regular editing practice builds accuracy for both Paper 1 and Paper 3."}</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What is usually required in a CAPS summary?",
    options: ["Seven main points in your own words", "A paragraph copied directly from the passage", "Only one sentence about the title", "A list of quotations"],
    answer: "Seven main points in your own words",
    explanation: "A CAPS summary typically expects key points expressed in your own words and within the word limit.",
  },
  {
    prompt: "An inference question asks you to...",
    options: ["Copy the first sentence of the passage", "Work out meaning from clues in the text", "Count the number of paragraphs", "Name the font used in the heading"],
    answer: "Work out meaning from clues in the text",
    explanation: "Inference requires you to draw a logical conclusion from evidence in the text.",
  },
  {
    prompt: "Why are direct quotations usually penalised in summary writing?",
    options: ["Because summaries must show selection and paraphrasing skills", "Because quotations are always incorrect in English", "Because the examiner cannot read them", "Because summaries do not use full stops"],
    answer: "Because summaries must show selection and paraphrasing skills",
    explanation: "Summary tasks test whether you can condense ideas in your own words.",
  },
  {
    prompt: "What should you identify first in an advertisement question?",
    options: ['The rhyme scheme that the poet used', 'The target audience and persuasive purpose', 'The length of the exam in minutes', 'The narrator of the novel you studied'],
    answer: 'The target audience and persuasive purpose',
    explanation: "Advertisements are designed to persuade a specific audience for a specific purpose.",
  },
  {
    prompt: "Which editing issue appears in the sentence \"The learners was excited\"?",
    options: ["Tense shift", "Subject-verb agreement error", "Punctuation error only", "Spelling error only"],
    answer: "Subject-verb agreement error",
    explanation: "The plural subject \"learners\" needs the verb \"were\", not \"was\".",
  },
  {
    prompt: "What is the best approach to a long comprehension passage?",
    options: ["Answer from memory without checking the text", "Read questions, then return to the passage for evidence", "Skip all inferential questions", "Focus only on the introduction"],
    answer: "Read questions, then return to the passage for evidence",
    explanation: "Purposeful rereading helps you locate evidence and avoid careless answers.",
  },
  {
    prompt: "If a cartoon uses exaggerated facial expressions, it is mainly helping to show...",
    options: ["Only the date of publication", "Emotion, satire or attitude", "The page number", "A summary word count"],
    answer: "Emotion, satire or attitude",
    explanation: "Exaggeration in cartoons often reveals attitude, ridicule or emotional emphasis.",
  },
  {
    prompt: "Why is oral preparation relevant to Paper 1 routines in Term 1?",
    options: ['Listening and speaking build language awareness and response skills', 'Paper 1 has no reading component in it at all', 'Oral tasks replace the essays in the paper entirely', 'Visual literacy is removed from the paper in Grade 12'],
    answer: 'Listening and speaking build language awareness and response skills',
    explanation: "Listening and speaking practice sharpen vocabulary, interpretation and confidence across language tasks.",
  },
];

const Paper1LanguagePractice = () => (
  <CapsSubjectTopic
    title="Paper 1 Language Practice"
    subtitle="Reading strategically, summarising accurately and editing with exam discipline"
    learnSteps={learnSteps}
    task="gr12-paper1-language-practice-t1"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default Paper1LanguagePractice;
