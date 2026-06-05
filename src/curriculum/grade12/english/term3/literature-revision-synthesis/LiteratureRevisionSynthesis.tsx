import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps = [
  {
    title: "Synthesising theme across the whole text",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"By Term 3, you should move beyond isolated scenes and think about how a theme develops across the entire prescribed work. Trace where the theme appears, how it changes, and which characters or images strengthen it. Synthesis means drawing separate pieces of evidence into one coherent interpretation."}</p>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"Hamlet\" — William Shakespeare"}
        text={"This above all: to thine own self be true, and it must follow, as the night the day, thou canst not then be false to any man."}
        annotations={[
          { start: 16, end: 41, device: "tone", note: "The advice sounds firm and reflective, giving the line a moral tone." },
          { start: 63, end: 83, device: "imagery", note: "The natural sequence makes the lesson feel orderly and inevitable." },
          { start: 108, end: 124, device: "diction", note: "The closing word choice sharpens the ethical focus of the speech." },
        ]}
      />
    ),
  },
  {
    title: "Choosing high-value quotations",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Not all quotations are equally useful in revision. Focus on short lines that reveal character, conflict, tone or theme clearly and that can be adapted to several questions. Flexible quotations are especially valuable in the prelim period because they support more than one possible essay angle."}</p>
      </div>
    ),
  },
  {
    title: "Planning under prelim conditions",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Prelims demand mature planning: read the question carefully, choose the strongest evidence fast, and map paragraphs in the order that best proves the argument. A good five-minute plan can save many marks by preventing repetition and weak structure. Planning is part of answering, not time lost before answering."}</p>
      </div>
    ),
  },
  {
    title: "Refining context-plus-whole-text responses",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Contextual answers at this stage should connect the extract to larger patterns in the text almost automatically. Ask what the extract reveals about recurring themes, relationships or dramatic tension beyond the given lines. This broader linkage is often what separates competent answers from excellent ones."}</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What does synthesis mean in literature revision?",
    options: ["Memorising page numbers only", "Bringing different pieces of evidence together into one argument", "Copying notes without understanding", "Avoiding comparison between ideas"],
    answer: "Bringing different pieces of evidence together into one argument",
    explanation: "Synthesis means combining evidence and insight into a coherent interpretation.",
  },
  {
    prompt: "Which quotation is most useful for revision?",
    options: ["A short, flexible quotation linked to major themes", "The longest paragraph in the novel", "A line you do not understand", "A quotation with no relevance to character or theme"],
    answer: "A short, flexible quotation linked to major themes",
    explanation: "Short quotations that connect to major issues can be used in multiple answers.",
  },
  {
    prompt: "Why is a quick essay plan valuable in prelims?",
    options: ["It wastes time and reduces marks", "It helps organise argument and evidence efficiently", "It replaces writing the essay", "It matters only in Paper 1"],
    answer: "It helps organise argument and evidence efficiently",
    explanation: "Planning helps you structure the answer and choose evidence before drafting.",
  },
  {
    prompt: "What raises a contextual answer to a higher level?",
    options: ["Ignoring the extract completely", "Linking the extract to whole-text themes and patterns", "Retelling the scene with no analysis", "Writing one-word answers"],
    answer: "Linking the extract to whole-text themes and patterns",
    explanation: "High-level answers move from the extract to larger meaning in the text.",
  },
  {
    prompt: "Which is the strongest theme-based note?",
    options: ["Power \u2014 Act 1 only", "Power: revealed through dialogue, control and ironic reversals across the text", "Power is a word", "Theme unknown"],
    answer: "Power: revealed through dialogue, control and ironic reversals across the text",
    explanation: "A strong note identifies how the theme is developed, not just its name.",
  },
  {
    prompt: "What should you prioritise when choosing evidence quickly?",
    options: ["Relevance to the question", "Length of the quotation", "Whether the line is difficult to spell", "Its page layout"],
    answer: "Relevance to the question",
    explanation: "Relevant evidence matters more than impressive but unrelated detail.",
  },
  {
    prompt: "Why are prelims a good test of NSC readiness?",
    options: ["They require exam-style depth and timing", "They remove all literature questions", "They use only oral tasks", "They are easier than classwork"],
    answer: "They require exam-style depth and timing",
    explanation: "Prelims simulate the depth and pressure of final-exam demands.",
  },
  {
    prompt: "Which answer sounds most synthetic?",
    options: ["This scene is in the text.", "The extract crystallises the theme of betrayal already foreshadowed earlier and intensified in the ending.", "I like this quotation.", "The character speaks here."],
    answer: "The extract crystallises the theme of betrayal already foreshadowed earlier and intensified in the ending.",
    explanation: "This answer connects the extract to broader development across the text.",
  },
];

const LiteratureRevisionSynthesis = () => (
  <CapsSubjectTopic
    title="Literature Revision and Synthesis"
    subtitle="Deepening literature revision for trial-exam precision and whole-text insight"
    learnSteps={learnSteps}
    task="gr12-literature-revision-synthesis-t3"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default LiteratureRevisionSynthesis;
