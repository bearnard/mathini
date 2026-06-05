import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps = [
  {
    title: "Planning a literary essay",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"A literary essay answers a broad question about the whole text. Start by decoding the key words in the prompt, deciding on your main argument, and grouping evidence into clear paragraph ideas before you write. Planning prevents repetition and keeps your line of argument visible from introduction to conclusion."}</p>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"My Last Duchess\" — Robert Browning"}
        text={"That's my last Duchess painted on the wall, looking as if she were alive. I call that piece a wonder, now."}
        annotations={[
          { start: 7, end: 22, device: "diction", note: "The possessive wording reveals power and control before the speaker explains anything else." },
          { start: 52, end: 72, device: "imagery", note: "The line makes the portrait feel vividly lifelike and unsettling." },
          { start: 74, end: 100, device: "tone", note: "The proud, self-satisfied tone helps readers evaluate the speaker critically." },
          { start: 23, end: 42, device: "irony", note: "The image of preserved beauty contrasts with the darker truth behind the Duchess’s fate." },
        ]}
      />
    ),
  },
  {
    title: "Writing a thesis and analytic paragraphs",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Your introduction should present a clear thesis, not simply restate the topic. Each body paragraph should make one claim, support it with evidence, and explain how the detail proves the argument. This PEEL-style structure helps examiners follow your reasoning easily."}</p>
      </div>
    ),
  },
  {
    title: "Handling contextual questions",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"A contextual response begins with the extract, but strong answers also connect that extract to the rest of the text. Quote or refer to the provided lines accurately, then explain tone, character, setting or conflict in relation to the larger themes. CAPS rewards detail that stays rooted in the extract."}</p>
      </div>
    ),
  },
  {
    title: "Choosing precise exam language",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Verbs such as analyse, discuss, evaluate and comment on do not mean exactly the same thing. Analyse asks how meaning is built, discuss requires balanced coverage, and evaluate needs judgement supported by evidence. Reading the command verb carefully helps you answer the question set, not the answer you wish had been asked."}</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What is the main job of a thesis statement in a literary essay?",
    options: ["To list every event in the plot", "To present the main argument you will prove", "To define every literary term in the essay", "To copy the question exactly"],
    answer: "To present the main argument you will prove",
    explanation: "A thesis gives the controlling argument that the rest of the essay must support.",
  },
  {
    prompt: "Which paragraph topic sentence is strongest?",
    options: ["This paragraph is about many things", "The character's silence reveals both fear and resistance", "I am now writing my second paragraph", "The extract is interesting to read"],
    answer: "The character's silence reveals both fear and resistance",
    explanation: "A strong topic sentence makes a clear analytical claim that can be supported with evidence.",
  },
  {
    prompt: "In a contextual question, you should first focus on...",
    options: ["The extract provided in the question", "Your favourite chapter", "A summary of the whole novel", "The biography of the author"],
    answer: "The extract provided in the question",
    explanation: "Contextual responses begin with close analysis of the given extract before linking outward.",
  },
  {
    prompt: "Which command asks for a judgement supported by reasons?",
    options: ["Name", "Evaluate", "List", "Underline"],
    answer: "Evaluate",
    explanation: "Evaluate requires you to make a reasoned judgement backed by evidence.",
  },
  {
    prompt: "Why should each paragraph in a literature essay focus on one central idea?",
    options: ["To make the essay longer", "To keep the argument organised and convincing", "Because quotations are not allowed", "To avoid writing a conclusion"],
    answer: "To keep the argument organised and convincing",
    explanation: "One clear idea per paragraph makes your line of reasoning easier to follow.",
  },
  {
    prompt: "Which sentence best links evidence to analysis?",
    options: ["The quotation is there.", "This phrase suggests the character feels trapped, which strengthens the theme of control.", "I have finished my quotation.", "The line comes from Act 2."],
    answer: "This phrase suggests the character feels trapped, which strengthens the theme of control.",
    explanation: "Analysis explains what the quoted words reveal and why they matter to the argument.",
  },
  {
    prompt: "What is the difference between a literary essay and a contextual response?",
    options: ["A literary essay uses the whole text while a contextual response starts from a set extract", "A contextual response never uses evidence", "A literary essay is shorter than one sentence", "There is no difference"],
    answer: "A literary essay uses the whole text while a contextual response starts from a set extract",
    explanation: "Essays address a broader whole-text question, while contextual responses are anchored in a specific extract.",
  },
  {
    prompt: "Which answer would likely earn more credit?",
    options: ["A paragraph with plot summary only", "A paragraph that makes a claim, quotes briefly and explains the effect", "A paragraph with no references to the text", "A paragraph written as bullet points only"],
    answer: "A paragraph that makes a claim, quotes briefly and explains the effect",
    explanation: "Examiners reward analytical paragraphs that combine argument, evidence and explanation.",
  },
];

const LiteraryEssayContextualSkills = () => (
  <CapsSubjectTopic
    title="Literary Essay and Contextual Skills"
    subtitle="Writing analytical literature responses with structure, textual support and control"
    learnSteps={learnSteps}
    task="gr12-literary-essay-contextual-skills-t1"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default LiteraryEssayContextualSkills;
