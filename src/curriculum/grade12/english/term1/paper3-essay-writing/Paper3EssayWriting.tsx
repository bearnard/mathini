import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';

const learnSteps = [
  {
    title: "Knowing the major essay types",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Paper 3 usually offers a range of essay genres, including narrative, descriptive, reflective, discursive and argumentative writing. You must identify what each task demands before you start because the same topic can be handled badly if the wrong genre is chosen. Argumentative essays need a firm stance, while discursive essays weigh different views more evenly."}</p>
      </div>
    ),
  },
  {
    title: "Planning before drafting",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Use a quick mind map or bullet plan to gather examples, images or arguments before writing. This helps you choose a focused angle instead of drifting through unrelated ideas. CAPS writing marks reward relevance, organisation and development, all of which improve when planning happens first."}</p>
      </div>
    ),
  },
  {
    title: "Building introductions and body paragraphs",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"An effective introduction sets the tone and direction of the essay immediately. Body paragraphs must develop the idea logically, using transitions and enough detail to keep the writing convincing. Paragraphs that repeat the same point weaken both content and structure marks."}</p>
      </div>
    ),
  },
  {
    title: "Revising for style and control",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"After drafting, check whether your language fits the purpose and audience of the task. Remove vague wording, strengthen verbs, and correct grammar or punctuation errors that interrupt fluency. The final reading should improve clarity, not just fix spelling."}</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Which essay type usually requires the writer to take a clear position and defend it?",
    options: ["Descriptive", "Reflective", "Argumentative", "Narrative"],
    answer: "Argumentative",
    explanation: "An argumentative essay asks the writer to adopt and defend a clear viewpoint.",
  },
  {
    prompt: "What is the main goal of a discursive essay?",
    options: ["To tell a story with suspense", "To explore different viewpoints in a balanced way", "To describe a setting only", "To present dialogue between two people"],
    answer: "To explore different viewpoints in a balanced way",
    explanation: "A discursive essay considers several perspectives before reaching a view or leaving the issue open.",
  },
  {
    prompt: "Why is a brief essay plan useful before drafting?",
    options: ["It wastes time in the exam", "It helps organise ideas and maintain focus", "It replaces the need for paragraphs", "It is only for poetry questions"],
    answer: "It helps organise ideas and maintain focus",
    explanation: "Planning helps you choose relevant points and structure them logically.",
  },
  {
    prompt: "Which opening best suits a reflective essay?",
    options: ["Firstly, the government must ban phones immediately.", "The rain that morning sounded like a warning I only understood later.", "Our school newsletter has three sections.", "Dear Sir or Madam"],
    answer: "The rain that morning sounded like a warning I only understood later.",
    explanation: "Reflective essays often use a thoughtful, personal tone that signals insight rather than argument.",
  },
  {
    prompt: "What should each body paragraph do?",
    options: ["Introduce a new main point and develop it", "Repeat the title word for word", "List unrelated ideas quickly", "Avoid examples completely"],
    answer: "Introduce a new main point and develop it",
    explanation: "Each paragraph should advance one main idea with supporting detail.",
  },
  {
    prompt: "Which feature belongs most clearly to descriptive writing?",
    options: ["A formal salutation", "Sensory detail and vivid imagery", "A counter-argument section", "Stage directions"],
    answer: "Sensory detail and vivid imagery",
    explanation: "Descriptive essays rely on sensory language to create a clear picture or mood.",
  },
  {
    prompt: "What is the best final step after drafting an essay?",
    options: ["Hand it in without rereading", "Check content, coherence, grammar and punctuation", "Remove all paragraph breaks", "Add a different topic"],
    answer: "Check content, coherence, grammar and punctuation",
    explanation: "Editing after drafting helps improve both technical accuracy and overall clarity.",
  },
  {
    prompt: "If a prompt asks you to discuss both sides of a social issue, which essay type is usually most suitable?",
    options: ["Discursive", "Narrative", "Descriptive", "Friendly letter"],
    answer: "Discursive",
    explanation: "A discursive essay is designed for weighing contrasting viewpoints.",
  },
];

const Paper3EssayWriting = () => (
  <CapsSubjectTopic
    title="Paper 3 Essay Writing"
    subtitle="Selecting the right essay type and shaping ideas for Paper 3 success"
    learnSteps={learnSteps}
    task="gr12-paper3-essay-writing-t1"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default Paper3EssayWriting;
