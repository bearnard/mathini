import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { writingTimePlan } from '../../../examTime';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const plan = writingTimePlan(45);

const learnSteps: LearnStep[] = [
  {
    title: 'Plan first and manage your time',
    content: slide(
      <>
        <Rule>
          Before you write under exam conditions, plan your ideas and structure quickly. Time management gives you time to plan, write and edit.
        </Rule>
        <Worked
          title={`Split ${plan.total} minutes`}
          steps={[
            <>Plan: {plan.plan} minutes to list ideas and put them in order.</>,
            <>Write: {plan.write} minutes to write the piece from your plan.</>,
            <>Edit: {plan.edit} minutes to check your work.</>,
            <>{plan.plan} + {plan.write} + {plan.edit} = {plan.total} minutes, so nothing is left out.</>,
          ]}
        />
        <Mistake>Using all the time to write and none to plan or edit. A quick plan keeps you on topic and the editing time catches mistakes.</Mistake>
      </>,
    ),
  },
  {
    title: 'Know the task and the audience',
    content: slide(
      <>
        <Rule>
          Transactional writing has a practical purpose, such as requesting or informing: a formal letter to the principal is an example. If the task names an audience, choose the tone and format that suit the reader.
        </Rule>
        <Worked
          title="Choose the tone and format"
          steps={[
            <>Task: ask the principal for permission to hold a clean-up day.</>,
            <>Text type: a formal letter to the principal (transactional, because it requests something).</>,
            <>Tone: polite and formal. Format: greeting, body, sign-off.</>,
            <>A message to a friend would use a friendly tone and format instead.</>,
          ]}
        />
        <Mistake>Writing to the principal in the same way as to a friend. The audience decides the word choice, tone and structure.</Mistake>
      </>,
    ),
  },
  {
    title: 'Structure: introduction and paragraphs',
    content: slide(
      <>
        <Rule>
          A strong introduction introduces the topic clearly. Each paragraph focuses on one main idea, which makes the writing easier to follow.
        </Rule>
        <Worked
          title="Structure an essay on a clean-up day"
          steps={[
            <>Introduction: say what the piece is about (a clean-up day at school).</>,
            <>Paragraph 1: one idea, why it is needed.</>,
            <>Paragraph 2: one idea, how it will work.</>,
            <>Each paragraph keeps to its one idea, so the reader can follow your organisation.</>,
          ]}
        />
        <Mistake>Putting many ideas into one long paragraph. One focus per paragraph improves organisation and clarity.</Mistake>
      </>,
    ),
  },
  {
    title: 'Edit and stay calm',
    content: slide(
      <>
        <Rule>
          An editing checklist helps you spot and fix mistakes before handing in. If you feel under pressure, follow your plan and tick off your checklist.
        </Rule>
        <Worked
          title="Edit one sentence"
          steps={[
            <>Checklist: spelling, punctuation, grammar, meaning.</>,
            <>Read: “After school we cleaned the yard” has missing punctuation.</>,
            <>Fix it: “After school, we cleaned the yard.”</>,
            <>Tick it off the checklist and move on. A calm routine produces a complete response.</>,
          ]}
        />
        <Mistake>Handing in without reading it again. Sentences with missing punctuation are the first thing to check.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is the best first step in an exam writing task, and why does time management matter?</li>
            <li>Which text is transactional, and what must you remember about the audience?</li>
            <li>How should an essay begin, and why should one paragraph stick to a single point?</li>
            <li>What is an editing checklist for, and what is the safest strategy under pressure?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Plan your ideas and structure quickly. It gives you time to plan, write and edit.</li>
            <li>A formal letter to the principal. Choose the tone and format that suit the reader.</li>
            <li>Introduce the topic clearly. It makes the writing easier to follow.</li>
            <li>To spot and fix mistakes before handing in. Follow your plan and tick off your checklist.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is the best first step before writing under exam conditions?',
    options: ['Plan your ideas and structure quickly', 'Write the conclusion first without reading the task', 'Use every minute on one sentence', 'Skip the question and choose your own topic'],
    answer: 'Plan your ideas and structure quickly',
    explanation: 'A quick plan helps you stay on topic and organise your writing clearly.',
  },
  {
    prompt: 'Why is time management important in an exam writing task?',
    options: ['It gives you time to plan, write, and edit', 'It lets you ignore the instructions', 'It means you never need paragraphs', 'It allows you to leave the task unfinished'],
    answer: 'It gives you time to plan, write, and edit',
    explanation: 'Good time management helps you complete all parts of the task carefully.',
  },
  {
    prompt: 'Which text is a transactional piece of writing?',
    options: ['A formal letter to the principal', 'A stanza from a poem', 'A list of rhyming words', 'A chapter from a novel'],
    answer: 'A formal letter to the principal',
    explanation: 'Transactional texts are written for a practical purpose, such as requesting or informing.',
  },
  {
    prompt: 'What should a strong introduction do?',
    options: ['Introduce the topic clearly', 'Repeat the title three times', 'Add unrelated jokes', 'List every idea in random order'],
    answer: 'Introduce the topic clearly',
    explanation: 'The introduction shows the reader what the piece will be about.',
  },
  {
    prompt: 'Why should each paragraph focus on one main idea?',
    options: ['It makes the writing easier to follow', 'It makes the writing longer without meaning', 'It prevents any detail from being used', 'It removes the need for punctuation'],
    answer: 'It makes the writing easier to follow',
    explanation: 'One clear focus per paragraph improves organisation and clarity.',
  },
  {
    prompt: 'What is the purpose of an editing checklist?',
    options: ['To spot and fix mistakes before handing in', 'To add a new topic at the end', 'To avoid reading your work again', 'To copy another learner’s answer'],
    answer: 'To spot and fix mistakes before handing in',
    explanation: 'Editing helps improve accuracy in spelling, punctuation, grammar, and meaning.',
  },
  {
    prompt: 'If the task asks you to write to a specific audience, what must you remember?',
    options: ['Choose the tone and format that suit the reader', 'Use any style that you feel like using', 'Ignore who will be reading your writing', 'Write one-word answers to every part'],
    answer: 'Choose the tone and format that suit the reader',
    explanation: 'Audience affects word choice, tone, and the structure of the writing.',
  },
  {
    prompt: 'Which sentence would be best to check during editing?',
    options: ['A sentence with missing punctuation', 'A sentence that is already perfect', 'A title written exactly as given', 'A blank line between paragraphs'],
    answer: 'A sentence with missing punctuation',
    explanation: 'Editing is for noticing and correcting errors that affect meaning and accuracy.',
  },
  {
    prompt: 'What is the safest strategy if you feel under pressure in a writing exam?',
    options: ['Follow your plan and tick off your checklist', 'Rush so fast that you cannot reread', 'Change the topic of the essay halfway through', 'Leave out the ending to save some time'],
    answer: 'Follow your plan and tick off your checklist',
    explanation: 'A calm routine helps you manage pressure and produce a complete response.',
  },
];

const ExamWritingPractice = () => (
  <CapsSubjectTopic
    title="Exam-Oriented Writing Practice"
    subtitle="Planning, format recall, editing, and time management"
    learnSteps={learnSteps}
    task="exam-writing-practice"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default ExamWritingPractice;
