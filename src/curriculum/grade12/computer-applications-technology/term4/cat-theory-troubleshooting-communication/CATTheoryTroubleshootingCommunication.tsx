import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: "Troubleshooting with logic",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Troubleshooting in CAT is about identifying the most likely cause of a problem and recommending a sensible solution. Learners should work from symptoms to causes: checking connections, storage space, software settings, permissions or malware risk before assuming complex failure. Logical troubleshooting is a valuable exam and real-world skill."</p>
      </div>
    ),
  },
  {
    title: "Choosing the right communication method",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Different situations call for different communication methods. Formal instructions may need e-mail, quick collaboration may suit messaging or shared documents and public information may need a website or social platform. Grade 12 theory questions often test whether you can choose and justify the most suitable option for the context."</p>
      </div>
    ),
  },
  {
    title: "Using case studies effectively",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Case studies combine multiple CAT topics in one scenario. To answer well, identify the issue, select the relevant concept and then apply it directly to the facts given. This may include social implications, security, network access, file management or application choices. The best answers are specific to the case, not generic definitions."</p>
      </div>
    ),
  },
  {
    title: "Final NSC exam consolidation",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Final exam consolidation means revisiting the whole Grade 12 CAT syllabus in a connected way. Instead of studying topics in isolation, learners should practise mixed questions that combine systems, applications, networks, information management and digital citizenship. This builds the flexible thinking needed in the NSC papers."</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: "A learner cannot open a document because they only have read permission. What is the most likely issue?",
    options: ["A network cable is unplugged", "Their access rights do not allow editing", "The monitor is too dim", "The document needs more pictures"],
    answer: 1,
    explanation: "Read permission allows viewing but not editing, so the issue is access rights.",
  },
  {
    prompt: "Which communication method is generally best for sending a formal meeting agenda?",
    options: ["A properly written e-mail", "A random comment on social media", "A game chat message", "A wallpaper notification"],
    answer: 0,
    explanation: "Formal communication is usually best handled through e-mail.",
  },
  {
    prompt: "What is the first step when answering a CAT case-study question?",
    options: ["Identify what the scenario is actually asking", "Rewrite the whole case study", "Ignore the facts and guess", "Choose the longest option"],
    answer: 0,
    explanation: "Understanding the exact issue in the scenario is the first step to selecting the right concept.",
  },
  {
    prompt: "Which action is an example of troubleshooting?",
    options: ["Checking whether a printer is connected before reinstalling software", "Changing all headings to bold", "Adding more animations to slides", "Sorting a table alphabetically for no reason"],
    answer: 0,
    explanation: "Troubleshooting begins with likely simple causes before more drastic solutions.",
  },
  {
    prompt: "Why are mixed revision questions useful before the NSC exam?",
    options: ["They help learners apply several CAT concepts together", "They reduce the need to study", "They only test memory of definitions", "They remove all practical skills"],
    answer: 0,
    explanation: "The final exams often mix topics, so learners need practice linking concepts.",
  },
  {
    prompt: "Which factor matters most when choosing a communication tool?",
    options: ["Whether it matches the audience and purpose", "Whether the icon is colourful", "Whether the keyboard is mechanical", "Whether the screen is glossy"],
    answer: 0,
    explanation: "Audience and purpose are central when deciding how to communicate.",
  },
  {
    prompt: "A case study mentions slow performance, frequent pop-ups and unknown downloads. What is the most likely cause?",
    options: ["Malware infection", "A well-designed template", "Correct file permissions", "High-quality fibre internet"],
    answer: 0,
    explanation: "Those symptoms strongly suggest malware or unsafe downloads.",
  },
  {
    prompt: "What makes a CAT theory answer strong?",
    options: ["It applies the concept directly to the scenario and justifies the answer", "It gives a memorised definition only", "It avoids all examples", "It repeats the question without adding meaning"],
    answer: 0,
    explanation: "Strong CAT answers show understanding by linking the concept clearly to the given scenario.",
  },
];

const bank: CATItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const CATTheoryTroubleshootingCommunication = () => (
  <CapsSubjectTopic
    title="CAT Theory, Troubleshooting and Communication Choices"
    subtitle="Exam-style consolidation of theory concepts, case studies and decision-making"
    learnSteps={learnSteps}
    task="gr12-cat-theory-troubleshooting-communication-t4"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={12}
  />
);

export default CATTheoryTroubleshootingCommunication;
