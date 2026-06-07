import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/cat/term2/pat-phase2-june-exam-preparation/diagram.webp", alt: "PAT Phase 2 and June Exam Preparation" },
    title: "What PAT phase 2 involves",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"PAT phase 2 usually focuses on processing the information that was collected earlier. Learners refine spreadsheets, databases, documents and other outputs so that the investigation begins to answer the original question. Accuracy, evidence and clear organisation matter because moderation checks whether the work is both authentic and purposeful."</p>
      </div>
    ),
  },
  {
    title: "Balancing PAT and exam preparation",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Term 2 is busy because learners must keep the PAT moving while also preparing for the June practical and theory papers. Effective planning means setting milestones, backing up work and revising content areas that are often tested, such as systems theory, networks, spreadsheet logic and database design."</p>
      </div>
    ),
  },
  {
    title: "Preparing for the practical exam",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"The practical paper rewards method as well as the final answer. Learners should practise reading instructions carefully, saving in the correct folder, checking formulas, previewing print layouts and reviewing output against the question. Small errors such as incorrect file names or missed criteria can cost marks even when the general idea is correct."</p>
      </div>
    ),
  },
  {
    title: "Preparing for the theory exam",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Theory revision should combine content recall with application to scenarios. Instead of memorising isolated facts, learn how to explain a concept, compare two options and justify a recommendation. CAT theory questions often ask for reasons, advantages, disadvantages and social implications rather than pure definitions."</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: "What is a key focus of PAT phase 2?",
    options: ["Processing and refining collected information", "Writing the final NSC exam only", "Buying new hardware for the lab", "Installing a new operating system"],
    answer: 0,
    explanation: "PAT phase 2 is about using the collected information to create meaningful processed outputs.",
  },
  {
    prompt: "Why should learners back up PAT files regularly during term 2?",
    options: ["Because PAT work cannot be marked", "Because losing files would delay both PAT progress and exam preparation", "Because backups improve internet speed", "Because exam papers are written online only"],
    answer: 1,
    explanation: "Regular backups protect important work during a very demanding term.",
  },
  {
    prompt: "Which habit best supports the practical exam?",
    options: ["Ignoring file names and saving anywhere", "Checking instructions, file paths and output before moving on", "Using one font size for all answers", "Skipping formula verification"],
    answer: 1,
    explanation: "Careful checking helps prevent avoidable errors in practical tasks.",
  },
  {
    prompt: "How is theory revision most effective in CAT?",
    options: ["Memorising random keyboard shortcuts only", "Practising how concepts apply in real scenarios", "Studying only one topic area", "Avoiding explanation questions"],
    answer: 1,
    explanation: "Theory questions usually require application, explanation and evaluation in realistic contexts.",
  },
  {
    prompt: "Why is milestone planning useful in term 2?",
    options: ["It helps learners manage PAT deadlines and exam revision time", "It automatically marks the PAT", "It converts all files to HTML", "It removes the need for practical practice"],
    answer: 0,
    explanation: "Milestones help learners spread work across the term instead of leaving everything too late.",
  },
  {
    prompt: "Which topic is likely to appear in both PAT work and June preparation?",
    options: ["Spreadsheet logic and data handling", "Choosing a ringtone", "Changing monitor wallpaper", "Replacing desk screws"],
    answer: 0,
    explanation: "Spreadsheet logic appears in practical work and is also revised for examinations.",
  },
  {
    prompt: "What is the best response if a practical answer looks correct but the output layout is poor?",
    options: ["Leave it because layout never matters", "Improve the layout because presentation can affect marks", "Delete the file and restart immediately", "Ignore the print preview"],
    answer: 1,
    explanation: "Practical CAT tasks assess both correctness and the quality of the final output.",
  },
  {
    prompt: "Why do CAT theory questions often ask for advantages and disadvantages?",
    options: ["To test balanced judgement and understanding of trade-offs", "Because definitions are never used", "Because only short answers are allowed", "To avoid practical knowledge completely"],
    answer: 0,
    explanation: "Advantages and disadvantages show that you understand both the benefits and limitations of a technology choice.",
  },
];

const bank: CATItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const PATPhase2JuneExamPreparation = () => (
  <CapsSubjectTopic
    title="PAT Phase 2 and June Exam Preparation"
    subtitle="Refining PAT outputs while preparing for the mid-year practical and theory papers"
    learnSteps={learnSteps}
    task="gr12-pat-phase2-june-exam-preparation-t2"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={12}
  />
);

export default PATPhase2JuneExamPreparation;
