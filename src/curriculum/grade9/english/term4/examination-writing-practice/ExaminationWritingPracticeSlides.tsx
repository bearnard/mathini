import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { BoxStack, TimeBar } from '../../../../../components/diagrams/english/g9Pictures';
import { AGREEMENT, LETTER_PARTS, TOPIC, closingFor, essayTime, minutesBySection } from '../../../../../components/diagrams/english/examWriting';
import { TENSE_CHECKS, keepsTense, tokensText } from '../../../../../components/diagrams/english/tense';

// Minutes and letter details come from examWriting.ts (tested in examWriting.test.ts). The
// numbers are an example to practise with, not a CAPS rule.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const essay = essayTime(45, 7, 8);
const sections = { marks: [30, 50, 20], minutes: minutesBySection(120, [30, 50, 20]) };

export const learnSteps: LearnStep[] = [
  {
    title: 'Plan first, for 5 to 10 minutes',
    content: slide(
      <>
        <Rule>In an exam essay the first step is to plan your main points and structure. Spend about 5 to 10 minutes on it, not none and not half the exam.</Rule>
        <TimeBar time={essay} />
        <Worked
          title="A 45-minute essay"
          steps={[
            <>Plan: {essay.plan} minutes. List three main points and the order of your paragraphs.</>,
            <>Write: {essay.write} minutes, following the plan.</>,
            <>Edit: {essay.edit} minutes. {essay.plan} + {essay.write} + {essay.edit} = <strong>{essay.plan + essay.write + essay.edit}</strong>.</>,
          ]}
        />
        <Mistake>Starting to write at once to “save time”. Without a plan an essay rambles and can miss the question, which costs more than the minutes saved.</Mistake>
      </>,
    ),
  },
  {
    title: 'Stay on the topic',
    content: slide(
      <>
        <Rule>Read the task, underline the key words, and let every paragraph answer it. Your opening sentence should show the examiner you are answering this task.</Rule>
        <Worked
          title="Check a sentence against the task"
          steps={[
            <>Task: “{TOPIC.task}”</>,
            <>Focused opening: “{TOPIC.focused}” It names recycling and says why it matters.</>,
            <>Off topic: “{TOPIC.drifting}” It mentions recycling only to drift away.</>,
          ]}
        />
        <Mistake>Writing about anything you like. A well-written essay on the wrong topic still answers a question nobody asked.</Mistake>
      </>,
    ),
  },
  {
    title: 'Formal letter layout',
    content: slide(
      <>
        <Rule>A formal letter has a set layout: the sender’s address, the date and the recipient’s address at the top, then a greeting, the body and a closing. Format recall shows you know the convention.</Rule>
        <BoxStack items={LETTER_PARTS} aria="A formal letter from top to bottom: sender's address, date, recipient's address, greeting, body, closing and name." />
        <Worked
          title="Match the closing to the greeting"
          steps={[
            <>“Dear Ms Naidoo,” names a person, so close with <strong>{closingFor('Dear Ms Naidoo')}</strong>.</>,
            <>“Dear Sir/Madam,” names nobody, so close with <strong>{closingFor('Dear Sir/Madam')}</strong>.</>,
          ]}
        />
        <Mistake>Opening a formal letter with an informal greeting such as “Hey there”, or leaving out the addresses and date.</Mistake>
      </>,
    ),
  },
  {
    title: 'Share your time by the marks',
    content: slide(
      <>
        <Rule>Give each exam section time according to its marks. If you run late in one section, move on, because unanswered sections lose marks you could have earned.</Rule>
        <Worked
          title="A 120-minute paper with sections of 30, 50 and 20 marks"
          steps={[
            <>Total marks: {sections.marks.join(' + ')} = {sections.marks.reduce((a, b) => a + b, 0)}.</>,
            <>Each mark gets 120 ÷ 100 = 1,2 minutes.</>,
            <>Section times: <strong>{sections.minutes.join(', ')} minutes</strong>, which add up to {sections.minutes.reduce((a, b) => a + b, 0)}.</>,
          ]}
        />
        <Mistake>Spending all your time on the first section, or keeping no track of time at all.</Mistake>
      </>,
    ),
  },
  {
    title: 'Edit: big errors first',
    content: slide(
      <>
        <Rule>Edit in order of importance: major errors (spelling, grammar, sense) before minor ones (style). Two common errors are mixed tenses and subject-verb disagreement. Reading under your breath helps you hear them.</Rule>
        <Worked
          title="Fix two errors"
          steps={[
            <>“{tokensText(TENSE_CHECKS.lebo.wrong)}” mixes past and present (one tense kept? {keepsTense(TENSE_CHECKS.lebo.wrong) ? 'yes' : 'no'}).</>,
            <>Make both verbs past: <strong>“{tokensText(TENSE_CHECKS.lebo.right)}”</strong></>,
            <>“{AGREEMENT.wrong}” The plural subject “learners” needs “were”: <strong>“{AGREEMENT.right}”</strong></>,
          ]}
        />
        <Mistake>Skipping proofreading, or polishing style while a spelling or grammar error is still in the sentence.</Mistake>
      <div className="space-y-2">
  <p className="text-slate-600">{"A good opening sentence repeats the key words of the task in your own words, so the examiner can see at once what you will write about."}</p>
</div>
</>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What do you do first in an exam essay, and for how long?</>,
          <>Name three things at the top of a formal letter.</>,
          <>Correct the closing: “Dear Sir/Madam, … Yours sincerely”.</>,
          <>Which errors do you fix first when editing?</>,
        ]}
        answers={[
          <>Plan your main points and structure, for about 5 to 10 minutes.</>,
          <>The sender’s address, the date and the recipient’s address.</>,
          <>With no name, close with “{closingFor('Dear Sir/Madam')}”.</>,
          <>Major errors (spelling, grammar, sense) before minor style points.</>,
        ]}
      />,
    ),
  },
];

