import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import SwotMatrix from '@/components/subjects/SwotMatrix';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const learnSteps: LearnStep[] = [
  {
    title: 'Read the command words carefully',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">State / List</strong><p className="text-slate-600 mt-1">Give short direct points.</p></div>
          <div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Explain</strong><p className="text-slate-600 mt-1">Develop the point so the meaning is clear.</p></div>
          <div className="rounded-xl bg-purple-50 p-4"><strong className="text-purple-700">Discuss</strong><p className="text-slate-600 mt-1">Give fuller detail, analysis and application.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Evaluate</strong><p className="text-slate-600 mt-1">Weigh strengths and weaknesses before judging.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Use mark allocation as a guide',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Exam tip</p>
          <p className="text-slate-600 mt-1">A two-mark question usually needs two clear points. Larger mark allocations require development, explanation and sometimes judgement.</p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">2 marks</strong><p className="text-slate-600 mt-1">Two short facts or reasons.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">4-6 marks</strong><p className="text-slate-600 mt-1">Several explained points with some application.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">8+ marks</strong><p className="text-slate-600 mt-1">Structured discussion, examples and balanced judgement.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Manage exam time actively',
    content: (
      <div className="space-y-6">
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Allocate rough time to each section before you begin.</li>
          <li>Move on if you are stuck and return later.</li>
          <li>Keep checking the clock instead of guessing your pace.</li>
        </ul>
        <SwotMatrix
          title="SWOT Analysis: Exam Preparation Strategy"
          strengths={['Knows content well', 'Past papers available', 'Clear study timetable']}
          weaknesses={['Slow writing speed', 'Stress in long questions', 'Weak revision of command words']}
          opportunities={['Timed practice', 'Teacher feedback', 'Peer revision']}
          threats={['A harder-than-expected paper', 'Load-shedding while revising', 'A noisy exam venue']}
        />
      </div>
    ),
  },
  {
    title: 'Finish with a final check',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Final-check checklist</p>
          <p className="text-slate-600 mt-1">Check numbering, incomplete answers, multiple-choice selections and whether the response matches the command word.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Reading the question",
    content: (
      <div className="space-y-4">
        <GapRule>{"Before answering, underline the action verb and the key topic clues."}</GapRule>
        <GapWorked title={"Read first"} steps={["Question: Discuss the impact of load-shedding on a bakery.", "Action verb: discuss. Topic clues: impact, load-shedding, bakery.", "Answer exactly that, with examples from the bakery."]} />
        <GapMistake>{"Answering a different question from the one asked."}</GapMistake>
      </div>
    ),
  },
];

const items: BusinessStudiesItem[] = [
  {
    "id": "exam-action-verbs-time-management-1",
    "question": "Which action verb usually requires a short direct answer rather than a long explanation?",
    "options": [
      "Evaluate",
      "Discuss",
      "State",
      "Analyse deeply"
    ],
    "answer": 2,
    "explanation": "State usually requires a brief direct response."
  },
  {
    "id": "exam-action-verbs-time-management-2",
    "question": "If a question asks you to discuss a topic, you should:",
    "options": [
      "Give fuller detail and explanation",
      "Write a one-word answer for each point",
      "Ignore the scenario",
      "Answer with a drawing only"
    ],
    "answer": 0,
    "explanation": "Discuss requires developed explanation, not a one-word response."
  },
  {
    "id": "exam-action-verbs-time-management-3",
    "question": "Why should learners look at the mark allocation before answering?",
    "options": [
      "It shows how much detail is needed",
      "It changes the topic that the question asks about",
      "It removes the need to think",
      "It is only for the teacher"
    ],
    "answer": 0,
    "explanation": "The mark allocation helps you judge the expected depth and number of points."
  },
  {
    "id": "exam-action-verbs-time-management-4",
    "question": "A good time-management strategy during the exam is to:",
    "options": [
      "Spend too long on the first difficult question",
      "Move on and return later if stuck",
      "Ignore the clock",
      "Leave large sections blank"
    ],
    "answer": 1,
    "explanation": "Moving on protects the rest of the paper and lets you return later with a clearer mind."
  },
  {
    "id": "exam-action-verbs-time-management-5",
    "question": "What should a learner underline or identify before answering?",
    "options": ['The page number of the question paper', 'The action verb and key topic clues', 'The date printed on the paper', 'The school logo on the cover'],
    "answer": 1,
    "explanation": "Spotting the command word and topic focus helps shape the correct answer."
  },
  {
    "id": "exam-action-verbs-time-management-6",
    "question": "The purpose of a final answer check is to:",
    "options": ['Change answers without reading the questions again from the start', 'Catch numbering mistakes and incomplete responses', 'Add unrelated theory to fill space', 'Avoid reading the instructions again'],
    "answer": 1,
    "explanation": "A final check can recover marks by finding easy-to-fix mistakes."
  },
  {
    "id": "exam-action-verbs-time-management-7",
    "question": "If a two-mark question asks for reasons, the learner should usually provide:",
    "options": [
      "One vague sentence",
      "Two clear reasons",
      "A full essay",
      "No answer"
    ],
    "answer": 1,
    "explanation": "Two-mark questions generally expect two clear points or reasons."
  },
  {
    "id": "exam-action-verbs-time-management-8",
    "question": "Which statement about exam technique is TRUE?",
    "options": ['Content knowledge alone is enough to earn full marks in a paper', 'Good technique helps learners earn marks they already know', 'Timing matters very little in exams', 'Command words can be left out'],
    "answer": 1,
    "explanation": "Strong exam technique helps learners present their knowledge in the form the examiner expects."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const ExamActionVerbsTimeManagement = () => (
  <CapsSubjectTopic
    title="Exam Action Verbs and Time Management"
    subtitle="Command words, mark allocation and smart NSC exam timing"
    learnSteps={learnSteps}
    task="gr12-exam-action-verbs-time-management-t4"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={12}
  />
);

export default ExamActionVerbsTimeManagement;
