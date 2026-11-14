import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';

const learnSteps = [
  {
    title: "Revising all three papers together",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Mid-year preparation should not treat Paper 1, Paper 2 and Paper 3 as unrelated subjects. Build a weekly plan that rotates comprehension and summary practice, literature revision and timed writing. This integrated approach mirrors the real exam period, where you must switch between different skill sets quickly."}</p>
      </div>
    ),
  },
  {
    title: "Using timed practice meaningfully",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Timed work helps you feel the pace of the exam and reveals where you lose marks through over-writing or hesitation. Practice whole sections under realistic conditions, then review what slowed you down. Speed matters, but controlled answering matters more than rushing into avoidable errors."}</p>
      </div>
    ),
  },
  {
    title: "Revising literature for recall and depth",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Do not revise literature only by rereading the text. Combine short quotation review, character maps, theme tables and past-style questions so that memory and analysis develop together. The best revision makes you ready for both essay and contextual responses."}</p>
      </div>
    ),
  },
  {
    title: "Managing stress and exam routine",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Good exam preparation includes sleep, organised notes, and a clear plan for the day of assessment. Know what materials you need, which sections to begin with, and how long each part should take. Calm routines improve thinking under pressure."}</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What is the best reason to do timed practice before mid-year exams?",
    options: ['To make your handwriting untidy', 'To learn pacing and spot time-management problems', 'To avoid studying the content', 'To take the place of all your revision notes'],
    answer: 'To learn pacing and spot time-management problems',
    explanation: "Timed practice helps you see whether you can complete tasks accurately within exam limits.",
  },
  {
    prompt: "Which revision method best supports Paper 2?",
    options: ['Memorising chapter numbers and nothing else', 'Using themes, quotations and character links', 'Ignoring the contextual questions', 'Studying summary technique and nothing else'],
    answer: 'Using themes, quotations and character links',
    explanation: "Paper 2 revision works best when learners connect themes, evidence and character analysis.",
  },
  {
    prompt: "Why should your revision plan rotate across all papers?",
    options: ['One paper decides the whole mark on its own', 'Grade 12 HL tests different skills across three papers', 'Paper 3 is never written in the final exam', 'Literature cannot be revised at any stage'],
    answer: 'Grade 12 HL tests different skills across three papers',
    explanation: "A rotating plan keeps all paper demands active instead of neglecting one area.",
  },
  {
    prompt: "What is a common danger in summary practice?",
    options: ["Finishing too early with strong ideas", "Spending too long and copying wording from the text", "Using your own words", "Reading the instructions"],
    answer: "Spending too long and copying wording from the text",
    explanation: "Learners often lose marks by copying or by taking too long over summary questions.",
  },
  {
    prompt: "Which is the strongest literature-revision tool before exams?",
    options: ["A theme-and-quotation chart", "A blank page with no notes", "Only the cover of the book", "A dictionary definition of poetry"],
    answer: "A theme-and-quotation chart",
    explanation: "Theme-and-quotation charts support quick recall and help organise literary evidence.",
  },
  {
    prompt: "What should you do after a timed writing task?",
    options: ["Ignore it and move on immediately", "Review structure, timing and language errors", "Throw it away unread", "Rewrite the question only"],
    answer: "Review structure, timing and language errors",
    explanation: "Reviewing the task shows where marks were lost and what to improve next time.",
  },
  {
    prompt: "Which habit supports calmer exam performance?",
    options: ["Studying random topics late at night only", "Using organised notes and a clear routine", "Skipping all breaks and sleep", "Changing your method every hour"],
    answer: "Using organised notes and a clear routine",
    explanation: "Organisation and routine reduce panic and support clearer thinking.",
  },
  {
    prompt: "Why are oral tasks still relevant in Term 2?",
    options: ["They continue as part of SBA requirements", "They replace the exam papers", "They remove the need for literature study", "They are not assessed at all"],
    answer: "They continue as part of SBA requirements",
    explanation: "Oral work continues alongside written assessments as part of the SBA programme.",
  },
];

const MidyearExamPreparation = () => (
  <CapsSubjectTopic
    title="Mid-Year Exam Preparation"
    subtitle="Getting ready for the first major Grade 12 exam cycle across all papers"
    learnSteps={learnSteps}
    task="gr12-midyear-exam-preparation-t2"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default MidyearExamPreparation;
