import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';

const learnSteps = [
  {
    title: "Strengthening cohesion between sentences and paragraphs",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Advanced writing is not just correct sentence-level grammar; it also flows smoothly from idea to idea. Use transitions, pronoun reference and logical paragraph order so that the reader never has to guess how one point connects to the next. Cohesion creates the sense that the piece has been deliberately crafted."}</p>
      </div>
    ),
  },
  {
    title: "Controlling tone and register",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"A strong Grade 12 writer changes tone when moving between a reflective essay, an article, a speech or a formal letter. Register problems happen when slang enters a formal text or when a speech sounds stiff and lifeless. Always ask whether your wording suits the audience and purpose."}</p>
      </div>
    ),
  },
  {
    title: "Editing common examination traps",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Common Paper 3 errors include sentence fragments, comma splices, tense shifts, vague pronouns and unnecessary repetition. Learn to spot these patterns quickly during proofreading. The best editing passes focus on one issue at a time instead of hoping to notice everything at once."}</p>
      </div>
    ),
  },
  {
    title: "Revising for concision and effect",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Good revision often means cutting weak filler and replacing it with precise verbs or sharper examples. Concise writing sounds more confident because every sentence earns its place. Aim for clarity first, then style."}</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What does cohesion in writing refer to?",
    options: ['Spelling accuracy and nothing else', 'The smooth link between ideas across a text', 'The length of each of the paragraphs', 'Whether the title has been underlined'],
    answer: 'The smooth link between ideas across a text',
    explanation: "Cohesion is about how sentences and paragraphs connect logically and clearly.",
  },
  {
    prompt: "Which problem is shown in the sentence \"The team won the match, they celebrated loudly\"?",
    options: ["Subject-verb agreement", "Comma splice", "Rhyme scheme", "Allusion"],
    answer: "Comma splice",
    explanation: "Two independent clauses have been joined incorrectly with only a comma.",
  },
  {
    prompt: "Why is register control important?",
    options: ["Because all texts need the same tone", "Because language must suit audience and purpose", "Because punctuation is never assessed", "Because editing removes meaning"],
    answer: "Because language must suit audience and purpose",
    explanation: "Register shapes whether the writing feels appropriate for the task and reader.",
  },
  {
    prompt: "Which revision would make a paragraph more concise?",
    options: ["Adding extra repetition", "Replacing vague phrases with precise verbs", "Removing all punctuation", "Changing every sentence to a question"],
    answer: "Replacing vague phrases with precise verbs",
    explanation: "Precise verbs and tighter phrasing improve clarity without unnecessary length.",
  },
  {
    prompt: "A pronoun-reference problem happens when...",
    options: ['A noun is described in a clear way', 'It is unclear what a pronoun refers to', 'A speech begins with a greeting', 'A poem is divided into stanzas'],
    answer: 'It is unclear what a pronoun refers to',
    explanation: "Pronoun-reference errors confuse the reader because the antecedent is unclear.",
  },
  {
    prompt: "Which text would usually allow the most conversational direct address?",
    options: ["Formal letter to a department", "Speech to fellow learners", "Literary essay", "Summary response"],
    answer: "Speech to fellow learners",
    explanation: "A speech often uses direct address to engage listeners naturally.",
  },
  {
    prompt: "What is a useful proofreading method?",
    options: ['Check everything at the same time in one pass', 'Read for one type of error at a time', 'Skip the final reread of the work', 'Look only at the first paragraph of the text'],
    answer: 'Read for one type of error at a time',
    explanation: "Targeted proofreading helps you catch more errors than an unfocused scan.",
  },
  {
    prompt: "Which sentence sounds most appropriately formal?",
    options: ['Your rule is super unfair, you know.', 'I respectfully request that the policy be reviewed.', 'This thing is bad vibes, to be honest.', 'Guys, please fix it now, thanks.'],
    answer: 'I respectfully request that the policy be reviewed.',
    explanation: "This sentence uses measured, formal wording appropriate for formal writing.",
  },
];

const AdvancedWritingEditing = () => (
  <CapsSubjectTopic
    title="Advanced Writing and Editing"
    subtitle="Polishing writing through coherence, precision and exam-aware editing"
    learnSteps={learnSteps}
    task="gr12-advanced-writing-editing-t3"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default AdvancedWritingEditing;
