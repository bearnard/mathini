import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';

const learnSteps = [
  {
    title: "Recalling formats under pressure",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"In the final exam, you should not still be guessing the structure of a review, speech, article or formal letter. Build quick format checklists that you can recall within seconds so that marks are not lost before the content is even judged. Format recall saves time and reduces panic."}</p>
      </div>
    ),
  },
  {
    title: "Using a proofreading checklist",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"A reliable checklist might include purpose, paragraph order, tense, punctuation, agreement, register and missing format features. Working through the same checklist each time makes proofreading efficient and prevents random checking. Consistency matters most when you are tired in the exam."}</p>
      </div>
    ),
  },
  {
    title: "Checking tone and audience carefully",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"A technically correct answer can still lose marks if the tone feels wrong for the audience. Read a few lines aloud in your head and ask whether the wording sounds formal, persuasive, reflective or informative enough for the task. Tone is part of communication, not an optional extra."}</p>
      </div>
    ),
  },
  {
    title: "Protecting clarity in the final draft",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The strongest final drafts are clear, organised and controlled. Avoid over-complicating sentences just to sound impressive, and make sure every paragraph contributes to the purpose of the text. Clear communication usually scores better than forced complexity."}</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Why is format recall important in the final exam?",
    options: ["Because format is never marked", "Because basic text-type conventions can earn or lose easy marks", "Because only poetry matters", "Because it replaces planning"],
    answer: "Because basic text-type conventions can earn or lose easy marks",
    explanation: "Remembering format features quickly prevents avoidable mark loss in Paper 3.",
  },
  {
    prompt: "What is the best use of a proofreading checklist?",
    options: ["To check the same issue repeatedly and ignore others", "To review structure, language and format systematically", "To avoid rereading your work", "To replace drafting entirely"],
    answer: "To review structure, language and format systematically",
    explanation: "A checklist helps you review writing in an organised, reliable way.",
  },
  {
    prompt: "Which question helps you test tone?",
    options: ["Did I number the pages?", "Does this language suit the audience and purpose?", "Did I use the longest word?", "Is the title underlined?"],
    answer: "Does this language suit the audience and purpose?",
    explanation: "Tone should always be judged against the intended audience and purpose.",
  },
  {
    prompt: "What usually makes a final draft stronger?",
    options: ["Adding complicated words with unclear meaning", "Clear paragraphs and precise language", "Changing the topic halfway through", "Removing all punctuation"],
    answer: "Clear paragraphs and precise language",
    explanation: "Clear organisation and precise wording strengthen the overall quality of the writing.",
  },
  {
    prompt: "Which text type would most likely require an evaluative tone?",
    options: ["Review", "Summary", "Unseen poem", "Contextual extract"],
    answer: "Review",
    explanation: "A review evaluates quality and gives a judgement supported by reasons.",
  },
  {
    prompt: "What should you check after writing a formal letter?",
    options: ["Whether the salutation and sign-off are appropriate", "Whether it has stanza breaks", "Whether it includes stage directions", "Whether the plot twist is surprising"],
    answer: "Whether the salutation and sign-off are appropriate",
    explanation: "Formal letters require correct conventions such as salutations and sign-offs.",
  },
  {
    prompt: "Why can over-complicated sentences be risky in exams?",
    options: ["They often reduce clarity and increase error", "They always improve marks", "They are required in summaries", "They remove the need for proofreading"],
    answer: "They often reduce clarity and increase error",
    explanation: "Complexity without control often creates errors and makes meaning less clear.",
  },
  {
    prompt: "Which proofreading habit is most effective near the end of an exam?",
    options: ["Rushing without reading anything back", "Checking high-value issues such as format, tense and punctuation", "Rewriting the whole essay from memory", "Adding a new topic sentence to every paragraph"],
    answer: "Checking high-value issues such as format, tense and punctuation",
    explanation: "A focused final check should target the issues most likely to cost marks quickly.",
  },
];

const WritingRecallProofreading = () => (
  <CapsSubjectTopic
    title="Writing Recall and Proofreading"
    subtitle="Entering the final exam with confident text-type recall and disciplined proofreading"
    learnSteps={learnSteps}
    task="gr12-writing-recall-proofreading-t4"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default WritingRecallProofreading;
