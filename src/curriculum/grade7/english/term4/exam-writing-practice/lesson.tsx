import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FlowSteps, TimeBar } from '../../../../../components/diagrams/english/lessonPictures';
import { beAgrees, examTime, totalMinutes } from '../../../../../components/diagrams/english/lessonHelpers';

// Numbers and corrections in the slides come from these tested helpers (lessonHelpers.test.ts).
export const minutes = { total: totalMinutes(examTime), plan: examTime[0].minutes, write: examTime[1].minutes, edit: examTime[2].minutes };
export const fixedBe = beAgrees(true, 'past');

export const outline = [
  { title: 'Introduction', note: 'Say what you will write about' },
  { title: 'Body', note: 'Each paragraph: one idea with support' },
  { title: 'Conclusion', note: 'Finish with a clear closing thought' },
];

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Read the question and choose the text type',
    content: slide(
      <>
        <Rule>First read the question and underline the text type, the audience and the topic. Essays, such as narrative or descriptive essays, tell or describe. Transactional texts, such as a formal letter, are practical communication.</Rule>
        <Worked
          title="“Write a letter to the principal asking for a school garden.”"
          steps={[
            <>Text type: a letter to a principal is a <strong>formal letter</strong>, so it is a transactional text.</>,
            <>Audience: the principal, so the tone must be polite.</>,
            <>Purpose: to ask for a garden. Every paragraph must support the request.</>,
          ]}
        />
        <Mistake>Starting to write before reading the instructions. You may choose the wrong format and lose marks even if your language is good.</Mistake>
      </>,
    ),
  },
  {
    title: 'Plan with a brief outline',
    content: slide(
      <>
        <Rule>A short plan saves time. Make a brief outline of the introduction, the body and the conclusion. In the body, each paragraph develops one clear idea with support.</Rule>
        <FlowSteps steps={outline} aria="Three boxes from top to bottom: Introduction, say what you will write about; Body, each paragraph has one idea with support; Conclusion, finish with a clear closing thought." />
        <Worked
          title="Plan the school garden letter"
          steps={[
            <>Introduction: say you are writing to ask for a garden.</>,
            <>Body: paragraph 1, learners can grow food; paragraph 2, there is unused space. Link the paragraphs with words such as “First” and “Also”.</>,
            <>Conclusion: thank the principal and ask for a reply.</>,
          ]}
        />
        <Mistake>Writing the final copy at once with no plan, or changing the topic every line. Paragraphs that jump around confuse the reader.</Mistake>
      </>,
    ),
  },
  {
    title: 'Manage your time',
    content: slide(
      <>
        <Rule>Timing helps you finish planning, drafting and editing. Without it you may skip the conclusion or run out of time to check your work.</Rule>
        <TimeBar shares={examTime} />
        <Worked
          title={`One way to share ${minutes.total} minutes`}
          steps={[
            <>Plan for {minutes.plan} minutes: read, choose and outline.</>,
            <>Write for {minutes.write} minutes, keeping to your outline.</>,
            <>Edit for {minutes.edit} minutes. {minutes.plan} + {minutes.write} + {minutes.edit} = {minutes.total}, so every part fits.</>,
          ]}
        />
        <Mistake>Spending all the time on the title page or on the first paragraph. Then there is no time for a conclusion or for proofreading.</Mistake>
      </>,
    ),
  },
  {
    title: 'Choose the right tone',
    content: slide(
      <>
        <Rule>Formal tone is polite and professional. Use it for a formal letter. Informal slang and commands do not suit an audience such as a principal.</Rule>
        <Worked
          title="Which sentence suits a letter to a principal?"
          steps={[
            <>“Hey, just fix this quickly for me please!” is casual and bossy.</>,
            <>“I would appreciate your response on this matter.” is polite and clear.</>,
            <>Choose the second: it is formal in tone.</>,
          ]}
        />
        <Mistake>Using slang or “Yo” and “whatever” because the topic is familiar. The audience decides the tone, not your mood.</Mistake>
      </>,
    ),
  },
  {
    title: 'Edit before you finish',
    content: slide(
      <>
        <Rule>An editing checklist catches errors before you hand in your work. Check punctuation, agreement, the format requirements and whether each paragraph supports the task.</Rule>
        <Worked
          title="Edit: The learners was excited about the garden"
          steps={[
            <>Agreement: “learners” is plural, so the verb must be “{fixedBe}”, not “was”.</>,
            <>Punctuation: the sentence has no full stop. Add one.</>,
            <>Result: <strong>The learners {fixedBe} excited about the garden.</strong></>,
          ]}
        />
        <Mistake>Forgetting punctuation and agreement errors. Many marks are lost on basic language errors, so leave time at the end to proofread.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>You are given a writing topic in an exam. What should you do before writing a word?</>,
          <>Is a formal letter an essay or a transactional text?</>,
          <>Which is the formal sentence: “Hey, fix this!” or “I would appreciate your response.”?</>,
          <>Correct: The learners was excited.</>,
        ]}
        answers={[
          <>Read the question and plan the key points.</>,
          <>Transactional.</>,
          <>“I would appreciate your response.”</>,
          <>The learners {fixedBe} excited.</>,
        ]}
      />,
    ),
  },
];

