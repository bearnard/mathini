import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';

const learnSteps = [
  {
    title: "Completing the oral portfolio carefully",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"By Term 3, oral SBA tasks should be completed to a polished standard rather than rushed at the end. Review the rubric so that content, organisation, language use and delivery all receive attention. Oral work contributes to the school-based assessment and should be treated as seriously as written papers."}</p>
      </div>
    ),
  },
  {
    title: "Delivering prepared and unprepared speeches",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Prepared speaking allows deeper planning, while unprepared speaking tests quick organisation and confidence. In both cases, clarity, pace, eye contact and purposeful structure matter more than memorising every word. Learners sound stronger when they speak from organised points rather than from a script."}</p>
      </div>
    ),
  },
  {
    title: "Listening as an assessed skill",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Listening tasks require disciplined attention to key details, attitude and instruction words. Note-taking should be selective: capture the main point, supporting facts and signal words without trying to transcribe everything. Good listening practice improves performance in both oral work and language papers."}</p>
      </div>
    ),
  },
  {
    title: "Planning strategically for trials",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Trial preparation should combine content revision with paper strategy. Decide how you will pace each paper, what revision materials you will use, and which weak areas need extra practice first. Strategy matters because trials are often the clearest rehearsal for the final NSC examinations."}</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Why should oral SBA tasks be completed carefully before trials?",
    options: ["Because they still contribute to the year mark", "Because they replace Paper 2", "Because they are optional in Grade 12", "Because timing no longer matters"],
    answer: "Because they still contribute to the year mark",
    explanation: "Oral tasks remain part of the SBA mark and need serious preparation.",
  },
  {
    prompt: "What usually strengthens a prepared oral presentation most?",
    options: ['Reading every word in a flat voice', 'Clear structure, eye contact and a controlled pace', 'Speaking as fast as you possibly can', 'Ignoring the audience in the room'],
    answer: 'Clear structure, eye contact and a controlled pace',
    explanation: "Effective delivery depends on structure, audience connection and controlled pacing.",
  },
  {
    prompt: "What is a good note-taking approach in a listening task?",
    options: ['Write down every single word that you hear', 'Capture the key points, details and signal words', 'Ignore the instructions of the task', 'Copy the title and nothing else'],
    answer: 'Capture the key points, details and signal words',
    explanation: "Selective notes help you retain important information without losing focus.",
  },
  {
    prompt: "Which skill matters in an unprepared speech?",
    options: ["Quick organisation of ideas", "Perfect memorisation of a script", "Writing a literary essay", "Drawing diagrams"],
    answer: "Quick organisation of ideas",
    explanation: "Unprepared speaking depends on organising thoughts quickly and speaking coherently.",
  },
  {
    prompt: "Why are trial exams important?",
    options: ['They are a realistic rehearsal for the final exam', 'They remove all of the time pressure', 'They assess oral work and nothing else', 'They do not need any revision'],
    answer: 'They are a realistic rehearsal for the final exam',
    explanation: "Trials give learners a strong indication of their readiness for the NSC exams.",
  },
  {
    prompt: "Which delivery feature can weaken an oral presentation?",
    options: ['Speaking at an appropriate pace', 'Monotone speaking with little engagement', 'Using clear transitions', 'Giving relevant examples'],
    answer: 'Monotone speaking with little engagement',
    explanation: "A monotone presentation reduces impact and listener engagement.",
  },
  {
    prompt: "What should a trial-preparation plan include?",
    options: ['Your favourite topics and nothing else', 'Revision targets, paper strategy and timing', 'No rest and no routine at all', 'Practice at guessing the answers'],
    answer: 'Revision targets, paper strategy and timing',
    explanation: "A useful plan combines content review with practical exam management.",
  },
  {
    prompt: "Which listening question is inferential?",
    options: ["What date was announced?", "Why does the speaker sound frustrated?", "How many speakers were there?", "What was the heading?"],
    answer: "Why does the speaker sound frustrated?",
    explanation: "Inferential listening asks you to interpret attitude or implied meaning from clues.",
  },
];

const OralTrialPreparation = () => (
  <CapsSubjectTopic
    title="Oral Completion and Trial Preparation"
    subtitle="Finishing oral requirements and sharpening speaking and exam routines for trials"
    learnSteps={learnSteps}
    task="gr12-oral-trial-preparation-t3"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default OralTrialPreparation;
