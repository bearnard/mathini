import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';

const learnSteps = [
  {
    title: "Recognising different paper demands quickly",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Final revision must prepare you to switch confidently between the demands of Paper 1, Paper 2 and Paper 3. Each paper rewards a different kind of thinking: close reading, literary analysis or crafted writing. Knowing this prevents you from carrying the wrong habits from one paper into another."}</p>
      </div>
    ),
  },
  {
    title: "Managing exam time deliberately",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Time management is a skill, not luck. Before the exam, decide roughly how long each section or response should take and how you will monitor yourself if a question becomes difficult. Leaving time for a final check can recover easy marks that rushed learners often lose."}</p>
      </div>
    ),
  },
  {
    title: "Using final revision selectively",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"In Term 4, revision should be targeted rather than endless. Focus on recurring weak areas, high-value quotation sets, summary routines and text-type checklists instead of rereading everything without purpose. Strategic revision builds confidence because it produces visible progress."}</p>
      </div>
    ),
  },
  {
    title: "Staying adaptable under pressure",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Even with careful preparation, the exact wording of questions may surprise you. Adaptability means reading the question closely, choosing a suitable angle quickly and trusting the skills you have practised all year. Calm adjustments often matter more than perfect prediction."}</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Why is it important to recognise paper demands quickly in the NSC exam?",
    options: ["Because every paper tests exactly the same skill", "Because each paper needs a different approach and time plan", "Because only Paper 3 counts", "Because reading the instructions is optional"],
    answer: "Because each paper needs a different approach and time plan",
    explanation: "Different papers test different skills, so your strategy must change accordingly.",
  },
  {
    prompt: "What is a strong time-management habit in exams?",
    options: ["Staying too long on one difficult question", "Allocating rough time blocks before you begin", "Ignoring the clock completely", "Writing the longest answer first every time"],
    answer: "Allocating rough time blocks before you begin",
    explanation: "Planning time blocks helps you control pacing across the paper.",
  },
  {
    prompt: "What does strategic revision mean in Term 4?",
    options: ["Rereading everything equally without a plan", "Targeting weak areas and high-value skills", "Studying only one paper", "Avoiding past-style practice"],
    answer: "Targeting weak areas and high-value skills",
    explanation: "Strategic revision focuses attention where it will improve performance most.",
  },
  {
    prompt: "If a question is phrased differently from what you expected, what should you do first?",
    options: ["Panic and skip the paper", "Read carefully and adapt your prepared skills to the task", "Write the answer you memorised anyway", "Stop using evidence"],
    answer: "Read carefully and adapt your prepared skills to the task",
    explanation: "Careful reading and flexible thinking help you respond to the actual question set.",
  },
  {
    prompt: "Which paper most directly tests essay and transactional writing?",
    options: ["Paper 1", "Paper 2", "Paper 3", "Only the oral mark"],
    answer: "Paper 3",
    explanation: "Paper 3 assesses extended writing and transactional forms.",
  },
  {
    prompt: "Why is a final checking minute valuable?",
    options: ["It lets you add unrelated ideas", "It helps you catch language and format errors", "It removes the need to plan", "It changes a summary into an essay"],
    answer: "It helps you catch language and format errors",
    explanation: "A final check can recover marks through correction of avoidable mistakes.",
  },
  {
    prompt: "What is the danger of non-selective revision?",
    options: ["It wastes energy on low-priority work", "It always improves speed", "It guarantees perfect recall", "It replaces note-making"],
    answer: "It wastes energy on low-priority work",
    explanation: "Revision without priorities can exhaust you while leaving key gaps untouched.",
  },
  {
    prompt: "Which statement shows adaptability?",
    options: ["I will answer every question the same way.", "I can adjust my approach once I understand the instruction and text.", "I do not need to read the question carefully.", "I will ignore unfamiliar wording."],
    answer: "I can adjust my approach once I understand the instruction and text.",
    explanation: "Adaptability means using your skills flexibly to meet the actual task.",
  },
];

const FinalNscPaperStrategy = () => (
  <CapsSubjectTopic
    title="Final NSC Paper Strategy"
    subtitle="Switching strategically between all three papers in the final NSC revision period"
    learnSteps={learnSteps}
    task="gr12-final-nsc-paper-strategy-t4"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default FinalNscPaperStrategy;
