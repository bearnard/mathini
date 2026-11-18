import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import { formatRand } from '../../../../../components/diagrams/maths/mathsHelpers';
import * as b from '../../../../../components/diagrams/business10/bus10';

// Numbers come from bus10.ts (tested in bus10.test.ts and g10BsGaps.test.ts). All data are imaginary teaching data; Acts are named only as areas of law.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'What is self-management?',
    content: slide(
      <>
        <Rule>Self-management is the ability to manage your own time, goals, behaviour and feelings. In business it helps a person to be reliable, to meet deadlines and to work well with others. It includes time management, setting goals, keeping a balanced lifestyle, a professional image, self-knowledge, confidence and managing stress.</Rule>
        <FactCards
          cards={[
            { title: 'Time', line1: 'plan the day and', line2: 'meet deadlines' },
            { title: 'Goals', line1: 'know what you', line2: 'want to achieve' },
            { title: 'Image', line1: 'neat work and', line2: 'professional conduct' },
            { title: 'Balance', line1: 'work and rest', line2: 'in proportion' },
          ]}
          aria="Parts of self-management. Time: plan the day and meet deadlines. Goals: know what you want to achieve. Image: neat work and professional conduct. Balance: work and rest in proportion."
        />
        <Worked
          title="Why it matters at work"
          steps={[
            'A worker who plans her tasks hands in reports on time.',
            'A manager who sets clear goals knows when the team has succeeded.',
            'Both build trust with colleagues and customers.',
          ]}
        />
        <Mistake>Thinking that self-management means working non-stop. A balanced lifestyle that includes rest makes a person more productive.</Mistake>
      </>,
    ),
  },
  {
    title: 'Time management and goals',
    content: slide(
      <>
        <Rule>Plan your time by listing the tasks, deciding which are urgent and important, and giving each a time. A goal should be specific, measurable, achievable, realistic and have a time limit (SMART). Success has a personal meaning, and it includes more than money, for example health, family and learning.</Rule>
        <InfoTable
          cols={[{ title: 'Activity', w: 64 }, { title: 'Hours', w: 36 }]}
          rows={[...b.DAY.map(([a, h]) => [a, String(h)]), ['Free time', String(b.freeHours())]]}
          aria={`A time budget for 24 hours: ${b.DAY.map(([a, h]) => `${a} ${h}`).join(', ')}. Free time is ${b.freeHours()} hours.`}
        />
        <Worked
          title="Work out the free time"
          steps={[
            `Hours used = ${b.DAY.map(([, h]) => h).join(' + ')} = ${b.DAY.reduce((a, [, h]) => a + h, 0)}.`,
            `Free time = 24 − ${b.DAY.reduce((a, [, h]) => a + h, 0)} = ${b.freeHours()} hours.`,
            'A SMART goal: "I will read 20 pages of my business book every day for 30 days."',
          ]}
        />
        <Mistake>Setting a goal such as "I want to do better". A goal must be specific and measurable, with a time limit.</Mistake>
      </>,
    ),
  },
  {
    title: 'Professional image and self-knowledge',
    content: slide(
      <>
        <Rule>A professional image is shown by neat work and presentations, suitable dress, punctuality, polite communication and honesty. Resources such as a style guide, a template or a mentor can help. Self-knowledge means knowing your own strengths, weaknesses, talents and interests, and a personal analysis helps you to choose work and to improve.</Rule>
        <InfoTable
          cols={[{ title: 'Item', w: 36 }, { title: 'Example', w: 64 }]}
          rows={[
            ['Neat work', 'a tidy report with no spelling errors'],
            ['Punctuality', 'arriving before the meeting starts'],
            ['Strength', 'good with people, clear speaker'],
            ['Weakness', 'poor at keeping records'],
          ]}
          aria="A table of image and self-knowledge. Neat work: a tidy report with no spelling errors. Punctuality: arriving before the meeting starts. Strength: good with people and a clear speaker. Weakness: poor at keeping records."
        />
        <Worked
          title="Do a personal analysis"
          steps={[
            'List your strengths (what you do well), weaknesses (what you find hard), talents and interests.',
            'Match them to work: a person who is good with numbers and likes order may suit bookkeeping.',
            'Make a plan for the weakness, for example a course on record keeping.',
          ]}
        />
        <Mistake>Hiding weaknesses from yourself. Knowing them is the first step to improving them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Confidence, stress and adaptability',
    content: slide(
      <>
        <Rule>Self-confidence is belief in your own ability, and it grows when you prepare and succeed at small tasks. Stress is the body&rsquo;s response to pressure; a little can help, but too much harms health and work. Ways to manage stress include planning, sleeping well, exercise, talking to someone and taking breaks. Adaptability is the ability to change plans when conditions change.</Rule>
        <FactCards
          cards={[
            { title: 'Confidence', line1: 'prepare and build', line2: 'on small successes' },
            { title: 'Stress', line1: 'plan, rest, exercise', line2: 'and talk to someone' },
            { title: 'Adapt', line1: 'change the plan when', line2: 'conditions change' },
            { title: 'Help', line1: 'ask a mentor or', line2: 'a trusted adult' },
          ]}
          aria="Confidence, stress and adaptability. Confidence: prepare and build on small successes. Stress: plan, rest, exercise and talk to someone. Adapt: change the plan when conditions change. Help: ask a mentor or a trusted adult."
        />
        <Worked
          title="Respond to pressure"
          steps={[
            'A shop owner has three deadlines in one week and feels very stressed.',
            'She lists the tasks, does the most urgent first, and asks a colleague to help with one.',
            'When a supplier is late she adapts by ordering from a second supplier.',
          ]}
        />
        <Mistake>Ignoring stress until it becomes a crisis. Early planning, rest and asking for help prevent most problems.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is self-management?</>,
          <>What does SMART stand for in goal setting?</>,
          <>Name two ways to manage stress.</>,
          <>A day has 24 hours: sleep 8, school 7, travel 1 and meals 2. How many hours are left?</>,
        ]}
        answers={[
          <>Managing your own time, goals, behaviour and feelings.</>,
          <>Specific, measurable, achievable, realistic and time-bound.</>,
          <>For example planning, exercise or sleep.</>,
          <>24 − (8 + 7 + 1 + 2) = {24 - (8 + 7 + 1 + 2)} hours.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is self-management?",
    options: ["Managing other people's money", "Managing a branch of a bank", "Managing your own time and goals", "Managing the staff of a factory"],
    answer: "Managing your own time and goals",
    explanation: "It helps a person to be reliable.",
  },
  {
    prompt: "Which of these is part of self-management?",
    options: ["Time management", "Taxation", "Advertising", "Auditing"],
    answer: "Time management",
    explanation: "Planning your time helps you to meet deadlines.",
  },
  {
    prompt: "A day has 24 hours: sleep 8, school 7, travel 1 and meals 2. How many hours are left?",
    options: ["8 hours", "18 hours", "3 hours", "6 hours"],
    answer: "6 hours",
    explanation: "24 - (8 + 7 + 1 + 2) = 6.",
  },
  {
    prompt: "In a time budget, sleep 8, school 7, travel 1, meals 2 and study 3 are listed. How many hours are free?",
    options: ["6 hours", "3 hours", "21 hours", "0 hours"],
    answer: "3 hours",
    explanation: "Hours used are 8 + 7 + 1 + 2 + 3 = 21, so 24 - 21 = 3 free hours.",
  },
  {
    prompt: "What does the S stand for in a SMART goal?",
    options: ["Simple", "Specific", "Silent", "Secret"],
    answer: "Specific",
    explanation: "A goal must be specific.",
  },
  {
    prompt: "Which of these is a SMART goal?",
    options: ["I want to do better some day", "I hope to be rich one day", "I will try to study some day", "I will read 20 pages a day for 30 days"],
    answer: "I will read 20 pages a day for 30 days",
    explanation: "It is specific, measurable and has a time limit.",
  },
  {
    prompt: "What does a balanced lifestyle include?",
    options: ["Both work and rest", "Work only", "Rest only", "Sport only"],
    answer: "Both work and rest",
    explanation: "Balance makes a person more productive.",
  },
  {
    prompt: "Which of these shows a professional image?",
    options: ["Arriving late for meetings", "Untidy and careless reports", "Neat work and punctuality", "Rude replies to customers"],
    answer: "Neat work and punctuality",
    explanation: "Image is shown in conduct and presentation.",
  },
  {
    prompt: "What is self-knowledge?",
    options: ["Knowing a competitor's price list", "Knowing the current tax rate", "Knowing the name of a bank", "Knowing your strengths and weaknesses"],
    answer: "Knowing your strengths and weaknesses",
    explanation: "A personal analysis helps you to improve.",
  },
  {
    prompt: "A person is good with numbers and likes order. Which work might suit them?",
    options: ["Stunt flying", "Bookkeeping", "Deep-sea diving", "Circus acting"],
    answer: "Bookkeeping",
    explanation: "Match strengths and interests to work.",
  },
  {
    prompt: "What is stress?",
    options: ["The body's response to pressure", "A kind of tax on income", "A kind of loan from a bank", "A shop's profit in a year"],
    answer: "The body's response to pressure",
    explanation: "Too much stress harms health.",
  },
  {
    prompt: "Which is a healthy way to manage stress?",
    options: ["Skip all of your sleep", "Avoid speaking to everybody", "Plan, exercise and sleep well", "Ignore all of the tasks"],
    answer: "Plan, exercise and sleep well",
    explanation: "Talking to someone also helps.",
  },
  {
    prompt: "A supplier is late, so a shop orders from a second supplier. Which quality is shown?",
    options: ["Rigidity", "Fear", "Adaptability", "Delay"],
    answer: "Adaptability",
    explanation: "Adaptability means changing the plan.",
  },
  {
    prompt: "How is self-confidence built?",
    options: ["By preparing and winning small tasks", "By avoiding every challenge you meet", "By blaming other people for it", "By never trying anything that is new"],
    answer: "By preparing and winning small tasks",
    explanation: "Small successes build belief in your ability.",
  },
];

const SelfManagement = () => (
  <CapsSubjectTopic
    title="Self-Management"
    subtitle="Time management and goals, professional image, self-knowledge, confidence, stress and adaptability"
    learnSteps={learnSteps}
    task="gr10-self-management-t4"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={10}
  />
);

export default SelfManagement;
