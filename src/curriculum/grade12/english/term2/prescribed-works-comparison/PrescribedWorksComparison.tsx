import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps = [
  {
    title: "Comparing instead of describing separately",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"A strong comparison does more than discuss Text A and then Text B in isolation. It identifies a point of similarity or contrast and keeps both texts in view within the same response. Comparative thinking shows deeper understanding because it explains relationships between ideas, not just facts about separate works."}</p>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"The Merchant of Venice\" — William Shakespeare"}
        text={"How far that little candle throws his beams! So shines a good deed in a naughty world."}
        annotations={[
          { start: 13, end: 26, device: "symbolism", note: "The candle symbolises a small act of goodness that still gives light." },
          { start: 27, end: 43, device: "personification", note: "The candle is given lively agency, as if it actively sends light outward." },
          { start: 57, end: 85, device: "tone", note: "The contrast creates a hopeful tone despite a flawed setting." },
          { start: 48, end: 54, device: "imagery", note: "Light imagery turns moral action into something visible and memorable." },
        ]}
      />
    ),
  },
  {
    title: "Tracking themes across genres",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Themes such as power, identity, betrayal or belonging can appear in a novel, a drama and a poem in different ways. In drama, stage action and dialogue shape the theme; in prose, narration and character development carry it; in poetry, imagery and diction may intensify it. CAPS comparison rewards learners who notice how genre changes the presentation of a theme."}</p>
      </div>
    ),
  },
  {
    title: "Comparing characters and conflict",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"When comparing characters, look at motivation, choices, growth and the pressures around them. Ask what kind of conflict each character faces and how that conflict reveals values or weaknesses. A comparison becomes stronger when it moves from simple description to explanation of effect and significance."}</p>
      </div>
    ),
  },
  {
    title: "Using evidence economically",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Comparative answers need short, precise references from both texts. Pairing one relevant quotation from each text is usually stronger than copying too much from only one source. Balance is important: if one text dominates your answer, the comparison weakens."}</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What makes a comparative paragraph effective?",
    options: ["It discusses only one text in detail", "It keeps both texts linked through one clear point of comparison", "It avoids evidence from the texts", "It replaces analysis with summary"],
    answer: "It keeps both texts linked through one clear point of comparison",
    explanation: "A strong comparative paragraph develops one idea across both texts rather than separating them completely.",
  },
  {
    prompt: "Which statement best compares theme across genres?",
    options: ["Themes can appear only in novels", "The same theme may be presented differently in drama, prose and poetry", "Poetry has no theme because it is shorter", "Drama uses theme but novels do not"],
    answer: "The same theme may be presented differently in drama, prose and poetry",
    explanation: "Themes can cross genres, but the techniques used to express them differ.",
  },
  {
    prompt: "When comparing characters, which focus is most useful?",
    options: ["Hair colour and age only", "Motivation, conflict and development", "Only how many pages they appear on", "The author's birthplace"],
    answer: "Motivation, conflict and development",
    explanation: "Character comparison should examine what drives each character and how they change or reveal meaning.",
  },
  {
    prompt: "Why should evidence in a comparison be balanced?",
    options: ["Because one text should always be ignored", "Because both texts must support the comparison fairly", "Because quotations are not allowed", "Because comparison means writing less"],
    answer: "Because both texts must support the comparison fairly",
    explanation: "Balanced evidence shows that the comparison is genuinely based on both texts.",
  },
  {
    prompt: "Which is the best comparative signal word?",
    options: ["However", "Meanwhile", "Because", "Although not"],
    answer: "However",
    explanation: "Words like \"however\" help signal contrast clearly in comparative writing.",
  },
  {
    prompt: "If two texts both explore betrayal but one uses irony while the other uses dialogue, what are you comparing as well as theme?",
    options: ["Page numbers", "Techniques", "Font size", "Word count only"],
    answer: "Techniques",
    explanation: "You are comparing not only the theme but also the different techniques used to present it.",
  },
  {
    prompt: "What is the danger of writing about Text A for 90% of your answer?",
    options: ["It improves balance", "It weakens the actual comparison", "It guarantees full marks", "It removes the need for a conclusion"],
    answer: "It weakens the actual comparison",
    explanation: "Comparison requires meaningful attention to both texts.",
  },
  {
    prompt: "Which response sounds most analytical?",
    options: ["Both texts are nice to read.", "Both texts portray isolation, but the poem uses compressed imagery while the novel develops it through character experience.", "There are two texts.", "Text A is longer than Text B."],
    answer: "Both texts portray isolation, but the poem uses compressed imagery while the novel develops it through character experience.",
    explanation: "This response compares a theme and explains how each genre presents it differently.",
  },
];

const PrescribedWorksComparison = () => (
  <CapsSubjectTopic
    title="Prescribed Works Comparison"
    subtitle="Extending literature study through comparison, interpretation and thematic links"
    learnSteps={learnSteps}
    task="gr12-prescribed-works-comparison-t2"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default PrescribedWorksComparison;
