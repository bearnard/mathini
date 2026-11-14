import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps = [
  {
    title: "Understanding the Grade 12 paper system",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Grade 12 English HL is organised around Paper 1 (language in context), Paper 2 (literature) and Paper 3 (writing). From the first term, you should know which skills belong to each paper so that your revision is focused instead of general. Strong learners shift confidently between comprehension, literature analysis and process writing."}</p>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"Twelfth Night\" — William Shakespeare"}
        text={"Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon 'em."}
        annotations={[
          { start: 17, end: 26, device: "diction", note: "The repeated keyword keeps attention fixed on ambition, status, and public identity." },
          { start: 37, end: 47, device: "tone", note: "The confident phrasing gives the line an oracular, memorable tone." },
          { start: 97, end: 112, device: "irony", note: "The last option suggests greatness can arrive as a burden rather than a reward." },
        ]}
      />
    ),
  },
  {
    title: "Working with prescribed texts",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Your school will study prescribed texts chosen for the current DBE cycle, usually a drama, a novel and poetry. Even when the exact title changes, the same skills stay central: understanding plot, character, theme, tone, imagery and how writers use language to shape meaning. CAPS expects close reading, not vague personal opinion."}</p>
      </div>
    ),
  },
  {
    title: "Using quotation evidence effectively",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"A literature answer must be supported by brief, relevant evidence from the text. Do not dump long quotations: select the key phrase, introduce it smoothly and explain how it proves your point about theme, character or mood. Evidence without explanation earns less credit than learners expect."}</p>
      </div>
    ),
  },
  {
    title: "Building exam-ready terminology",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"You should be able to use terms such as theme, conflict, characterization, diction, tone, irony and symbolism accurately. Examiners reward precise literary language because it shows control of the text. Make short revision cards that pair each term with an example from your prescribed works."}</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "In Grade 12 English HL, which paper focuses mainly on prescribed literature?",
    options: ["Paper 1", "Paper 2", "Paper 3", "The oral mark only"],
    answer: "Paper 2",
    explanation: "Paper 2 assesses literature, including contextual and essay responses on prescribed texts.",
  },
  {
    prompt: "What does a prescribed text refer to?",
    options: ["Any book you choose for leisure reading", "A text selected for formal CAPS study and assessment", "Only a poem set by your teacher for homework", "A text used only for oral presentations"],
    answer: "A text selected for formal CAPS study and assessment",
    explanation: "A prescribed text is formally selected for teaching and assessment in the CAPS programme.",
  },
  {
    prompt: "Which response shows the best use of quotation evidence?",
    options: ["Retelling the whole scene in detail", "Giving a brief quotation and explaining its significance", "Listing three quotations with no explanation", "Writing only your opinion about the character"],
    answer: "Giving a brief quotation and explaining its significance",
    explanation: "The best evidence is short, relevant and followed by explanation that links it to the argument.",
  },
  {
    prompt: "Which literary term names the central idea that runs through a text?",
    options: ["Setting", "Theme", "Narrator", "Stanza"],
    answer: "Theme",
    explanation: "Theme is the underlying idea or message developed across the text.",
  },
  {
    prompt: "Why is plot summary alone not enough in a literature answer?",
    options: ["Because examiners dislike full sentences", "Because it replaces analysis with retelling", "Because quotations are never needed", "Because only the introduction counts"],
    answer: "Because it replaces analysis with retelling",
    explanation: "Plot summary retells events, while literature answers must analyse how meaning is created.",
  },
  {
    prompt: "What is the purpose of a quotation bank in Grade 12 revision?",
    options: ["To memorise every page of the text word for word", "To collect useful evidence for themes, characters and essays", "To replace reading the prescribed text", "To prepare only for Paper 1"],
    answer: "To collect useful evidence for themes, characters and essays",
    explanation: "A quotation bank helps you recall short pieces of evidence linked to key ideas and characters.",
  },
  {
    prompt: "Which term best describes the writer's choice of words?",
    options: ["Diction", "Conflict", "Structure", "Genre"],
    answer: "Diction",
    explanation: "Diction refers to the specific words and phrasing a writer selects.",
  },
  {
    prompt: "When preparing for the literature paper, what is the strongest starting habit?",
    options: ['Waiting for the final term to revise', 'Keeping notes on topics, quotes and themes up to date', 'Studying only the unseen poetry', 'Ignoring the exam terms until the prelims'],
    answer: 'Keeping notes on topics, quotes and themes up to date',
    explanation: "Consistent note-making from Term 1 gives you better recall and deeper understanding by exam time.",
  },
];

const PrescribedTextsOrientation = () => (
  <CapsSubjectTopic
    title="Prescribed Texts and Exam Orientation"
    subtitle="Launching Paper 2 with strong literary vocabulary, evidence habits and exam awareness"
    learnSteps={learnSteps}
    task="gr12-prescribed-texts-orientation-t1"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default PrescribedTextsOrientation;
