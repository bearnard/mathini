import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps = [
  {
    title: "Condensing literature notes effectively",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Final literature revision works best when long notes are reduced to compact theme lists, character snapshots and quotation banks. Short revision sets are easier to revisit repeatedly and help you see patterns across the text. Condensing is not oversimplifying if the key ideas stay accurate."}</p>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"The Tempest\" — William Shakespeare"}
        text={"We are such stuff as dreams are made on, and our little life is rounded with a sleep."}
        annotations={[
          { start: 12, end: 39, device: "metaphor", note: "Human life is compared to dream material, stressing its fragility and unreality." },
          { start: 64, end: 84, device: "symbolism", note: "Sleep symbolises death and the closing of human life." },
          { start: 49, end: 60, device: "diction", note: "The modest phrase reduces human importance and makes the reflection feel humbling." },
        ]}
      />
    ),
  },
  {
    title: "Linking quotations to arguments",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"A quotation is only useful if you know what it proves. In final revision, pair each quotation with the theme, character issue or dramatic effect it supports. This turns memory into usable evidence rather than isolated lines."}</p>
      </div>
    ),
  },
  {
    title: "Revising unseen responses as well as prescribed work",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Learners sometimes focus only on prescribed texts and neglect unseen poetry or unseen extracts. Yet final exams still reward the skill of interpreting unfamiliar writing through tone, imagery and structure. Keep practising first-reading strategies alongside content recall."}</p>
      </div>
    ),
  },
  {
    title: "Moving from recall to interpretation",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"High marks require more than remembering what happened. Use your revision to practise explaining why details matter, how writers shape meaning and what larger idea a quotation or image supports. Interpretation turns memory into marks."}</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What is the best reason to condense literature notes before finals?",
    options: ['To forget the important ideas', 'To make revision more focused and repeatable', 'To remove all of the quotations', 'To study the titles and nothing else'],
    answer: 'To make revision more focused and repeatable',
    explanation: "Compact notes are easier to revisit often and help you retain key patterns.",
  },
  {
    prompt: "Why should quotations be paired with themes or characters during revision?",
    options: ["So they become usable evidence in an answer", "So they look longer on the page", "So you can avoid reading the text", "So you can ignore context"],
    answer: "So they become usable evidence in an answer",
    explanation: "Linking quotations to ideas helps you apply them quickly in essays and contextual answers.",
  },
  {
    prompt: "What is a danger of revising only prescribed content?",
    options: ["You may neglect unseen-interpretation skills", "You will improve too much", "You will not need quotations", "You will write faster automatically"],
    answer: "You may neglect unseen-interpretation skills",
    explanation: "Final exams also assess how well you interpret unseen material.",
  },
  {
    prompt: "Which action shows interpretation rather than simple recall?",
    options: ['Naming a character and nothing else at all', 'Explaining how a quote supports the theme of isolation', 'Listing the page numbers of the scenes', 'Copying the title of a chapter from the book'],
    answer: 'Explaining how a quote supports the theme of isolation',
    explanation: "Interpretation explains meaning and significance, not just factual memory.",
  },
  {
    prompt: "What is the value of short revision sets?",
    options: ["They make repeated review easier", "They replace full understanding", "They prevent comparison", "They remove the need for evidence"],
    answer: "They make repeated review easier",
    explanation: "Short sets help with fast, repeated revision close to the exam.",
  },
  {
    prompt: "An unseen response should rely mainly on...",
    options: ["Memorised essay paragraphs from another text", "Close reading of the unfamiliar text itself", "General opinions with no evidence", "Only the title page"],
    answer: "Close reading of the unfamiliar text itself",
    explanation: "Unseen responses must be grounded in the given text and its details.",
  },
  {
    prompt: "Which revision pair is most useful?",
    options: ["Character + theme evidence", "Theme + unrelated map", "Quotation + no explanation", "Title + blank page"],
    answer: "Character + theme evidence",
    explanation: "Combining character and theme evidence prepares you for analytical responses.",
  },
  {
    prompt: "What turns a memorised line into strong exam material?",
    options: ["Knowing how to explain its relevance", "Writing it in capital letters", "Reciting it without context", "Using it in every answer regardless of topic"],
    answer: "Knowing how to explain its relevance",
    explanation: "A quotation becomes strong evidence when you can explain what it proves.",
  },
];

const LiteratureConsolidation = () => (
  <CapsSubjectTopic
    title="Literature Consolidation"
    subtitle="Consolidating literary arguments, quotation recall and unseen interpretation before finals"
    learnSteps={learnSteps}
    task="gr12-literature-consolidation-t4"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default LiteratureConsolidation;
