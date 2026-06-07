import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';

const learnSteps = [
  {
    image: { src: "/curriculum/grade12/eng/term2/formal-persuasive-writing/diagram.webp", alt: "Formal and Persuasive Writing" },
    title: "Sustaining a line of argument",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Persuasive writing must develop a clear position from introduction to conclusion. Each paragraph should extend the argument with reasons, examples or counter-argument rather than repeating the same claim. Logical progression is one of the clearest differences between average and strong Paper 3 writing."}</p>
      </div>
    ),
  },
  {
    title: "Matching register to audience and purpose",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"A speech to learners, a formal letter to a principal and a magazine article for the public do not sound the same. Register includes word choice, sentence pattern and level of formality. CAPS tasks reward writers who recognise audience expectations instead of using one tone for every text."}</p>
      </div>
    ),
  },
  {
    title: "Remembering transactional format features",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Transactional writing has visible conventions: subject lines, salutations, sign-offs, headings or by-lines depending on the genre. Missing a basic format feature can immediately reduce marks because it shows weak control of the text type. Build quick checklists for common forms such as formal letters, speeches and reviews."}</p>
      </div>
    ),
  },
  {
    title: "Using persuasion responsibly",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Persuasion works through logic, emotional appeal, credible examples and carefully chosen language. Loaded wording can be effective, but it should still fit the audience and remain controlled. The goal is to influence clearly, not to sound exaggerated without evidence."}</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Which text type most clearly needs a formal salutation and sign-off?",
    options: ["Review", "Formal letter", "Narrative essay", "Poem"],
    answer: "Formal letter",
    explanation: "A formal letter normally includes a salutation and a formal sign-off.",
  },
  {
    prompt: "What is one sign of a strong argumentative essay?",
    options: ["It avoids any clear viewpoint", "It maintains a consistent thesis throughout", "It changes topic in each paragraph", "It uses slang for every audience"],
    answer: "It maintains a consistent thesis throughout",
    explanation: "A strong argumentative essay keeps the thesis consistent and develops it logically.",
  },
  {
    prompt: "Why does register matter in transactional writing?",
    options: ["Because every text should sound the same", "Because tone and wording must fit purpose and audience", "Because punctuation is never marked", "Because only headings count"],
    answer: "Because tone and wording must fit purpose and audience",
    explanation: "Different audiences and purposes require different levels of formality and language choice.",
  },
  {
    prompt: "Which feature is most appropriate in a speech?",
    options: ["A direct address to the audience", "A bibliography", "Line numbers", "Footnotes only"],
    answer: "A direct address to the audience",
    explanation: "Speeches often address the audience directly to create engagement and clarity.",
  },
  {
    prompt: "What is the main purpose of a review?",
    options: ["To retell the whole plot only", "To evaluate a text or performance for readers", "To submit a job application", "To summarise grammar rules"],
    answer: "To evaluate a text or performance for readers",
    explanation: "A review judges quality and gives readers reasons for that judgement.",
  },
  {
    prompt: "If a task asks you to discuss a controversial issue for a broad public audience, which tone is usually best?",
    options: ["Aggressive and insulting", "Clear, respectful and persuasive", "Childish and informal", "Completely unrelated"],
    answer: "Clear, respectful and persuasive",
    explanation: "Persuasive public writing is most effective when it is firm but controlled.",
  },
  {
    prompt: "Which mistake would cost marks in a formal letter?",
    options: ["Using paragraphs", "Leaving out the purpose of the letter", "Writing full sentences", "Using a clear conclusion"],
    answer: "Leaving out the purpose of the letter",
    explanation: "A formal letter should state its purpose clearly and follow expected conventions.",
  },
  {
    prompt: "What strengthens a persuasive paragraph most?",
    options: ["An unsupported opinion only", "A reason supported by an example or explanation", "A random quotation from a poem", "A greeting line"],
    answer: "A reason supported by an example or explanation",
    explanation: "Persuasion becomes convincing when claims are supported with reasons and evidence.",
  },
];

const FormalPersuasiveWriting = () => (
  <CapsSubjectTopic
    title="Formal and Persuasive Writing"
    subtitle="Sustaining argument and adapting tone for speeches, letters, articles and reviews"
    learnSteps={learnSteps}
    task="gr12-formal-persuasive-writing-t2"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default FormalPersuasiveWriting;
