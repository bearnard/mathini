import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/english/WritingPictures';
import { ESSAY_TYPES, PROCESS } from '../../../../../components/diagrams/english/writing';

// The essay types and the process stages come from writing.ts (writing.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Four essay types',
    content: slide(
      <>
        <Rule>Choose the essay type that fits your purpose. Each type does a different job.</Rule>
        <div className="grid grid-cols-1 gap-2 text-left sm:grid-cols-2">
          {ESSAY_TYPES.map((t) => (
            <div key={t.type} className="rounded-xl p-3" style={{ background: t.color }}>
              <p className="font-extrabold text-slate-900">{t.type}</p>
              <p className="text-sm font-semibold text-slate-800">{t.purpose}</p>
            </div>
          ))}
        </div>
        <Worked
          title="Match each title to a type"
          steps={ESSAY_TYPES.map((t) => (
            <>“{t.prompt}”: <strong>{t.type.toLowerCase()}</strong>.</>
          ))}
        />
        <Mistake>Sharing a personal experience in a factual report. A narrative essay tells your story with characters, setting and plot.</Mistake>
      </>,
    ),
  },
  {
    title: 'Process writing',
    content: slide(
      <>
        <Rule>Good writers plan, draft, review and revise. Each stage improves the one before it.</Rule>
        <StepFlow steps={PROCESS.map((s) => ({ label: s.label, color: s.color }))} aria="Four boxes in a row: Plan, Draft, Review, Revise." />
        <Worked
          title="Plan an argumentative essay on cellphones in class"
          steps={[
            <>Viewpoint: phones should be allowed for learning.</>,
            <>Two or three reasons, each with an example.</>,
            <>Draft the paragraphs, review them, then revise.</>,
          ]}
        />
        <Mistake>Writing once and handing it in, or skipping editing. You will miss gaps and errors that a review would catch.</Mistake>
      </>,
    ),
  },
  {
    title: 'Transactional writing: poster copy',
    content: slide(
      <>
        <Rule>Transactional writing fits a purpose and an audience. A poster for a school event needs a clear heading, key details and a call to action.</Rule>
        <div className="mx-auto max-w-xs rounded-xl border-4 border-indigo-500 bg-white p-4 text-center text-slate-800">
          <p className="text-xl font-extrabold text-indigo-700">GRADE 9 FUN RUN</p>
          <p className="font-semibold">Friday, 15:00, school field</p>
          <p className="mt-1 font-bold text-rose-600">Sign up at the office today!</p>
        </div>
        <Worked
          title="Check the invented poster"
          steps={[
            <>Heading: “Grade 9 Fun Run”.</>,
            <>Key details: day, time and venue.</>,
            <>Call to action: “Sign up at the office today!”</>,
          ]}
        />
        <Mistake>A clever slogan with no date or venue. Readers cannot act on it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Audience and purpose',
    content: slide(
      <>
        <Rule>Different audiences need a different tone, format and detail. Ask who will read it and why you are writing.</Rule>
        <Worked
          title="The library will open on Saturdays."
          steps={[
            <>To the principal (email): “I would like to request that the library open on Saturdays.” Formal.</>,
            <>To a friend (message): “The library is open on Saturdays now!” Casual.</>,
            <>On a notice board: a heading, the times and an invitation to visit.</>,
          ]}
        />
        <Mistake>Believing one style fits all readers. The same news changes tone and format for each audience.</Mistake>
      </>,
    ),
  },
  {
    title: 'Revise: read aloud',
    content: slide(
      <>
        <Rule>Read your draft aloud and check that the ideas flow logically. Your ear catches gaps and awkward phrasing.</Rule>
        <Worked
          title="Draft: “I like soccer. Because it is fun. And I play it.”"
          steps={[
            <>Read aloud: the second and third sentences sound broken.</>,
            <>Join the ideas with the right link.</>,
            <>Revised: <strong>I like soccer because it is fun, and I play it every week.</strong></>,
          ]}
        />
        <Mistake>Reading your first draft once and handing it in, or checking only the spelling. Review for flow as well.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="Which essay type suits sharing a personal experience as a story?" answer="A narrative essay." />
        <Check question="What is the purpose of an argumentative essay?" answer="To present a viewpoint and support it with evidence." />
        <Check question="What should a school event poster include?" answer="A clear heading, key dates and a call to action." />
        <Check question="Name the four stages of process writing." answer="Plan, draft, review and revise." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which essay type is best for sharing a personal experience?',
    options: ['narrative essay', 'factual report only', 'dictionary entry', 'instruction manual'],
    answer: 'narrative essay',
    explanation: 'Narrative essays tell stories with characters, setting, and plot.',
  },
  {
    prompt: 'What is the main purpose of a descriptive essay?',
    options: ['to create a vivid picture through sensory details', 'to prove a point by using evidence and facts', 'to list the prices of items in a shop', 'to tell a story that follows a plot in order'],
    answer: 'to create a vivid picture through sensory details',
    explanation: 'Descriptive essays use rich language to help readers visualize scenes or subjects.',
  },
  {
    prompt: 'A reflective essay typically...',
    options: ["explores the writer's thoughts and feelings about an experience", 'tells a story of events with no thoughts about them', 'gives step-by-step instructions on how to do something', 'presents facts about a topic in an impersonal tone'],
    answer: "explores the writer's thoughts and feelings about an experience",
    explanation: 'Reflective essays show the writer\'s perspective and emotional response to events.',
  },
  {
    prompt: 'Which is a key stage in process writing?',
    options: ['plan, draft, review, and revise', 'write once without checking', 'copy from others', 'skip editing'],
    answer: 'plan, draft, review, and revise',
    explanation: 'Process writing involves multiple stages to refine ideas and improve quality.',
  },
  {
    prompt: 'What should a poster for a school event include?',
    options: ['a clear heading, key dates and a call to action', 'a picture and a very long paragraph of text', 'a clever slogan but no date or venue', 'the names of all the school staff members'],
    answer: 'a clear heading, key dates and a call to action',
    explanation: 'Effective posters communicate quickly and motivate action from the reader.',
  },
  {
    prompt: 'Why is audience awareness important in transactional writing?',
    options: ['Different audiences need a different tone, format and detail.', 'All audiences read in the same way, so one style fits all.', 'Audience matters in speeches and not in written texts.', 'Only young children need a writer to think of them.'],
    answer: 'Different audiences need a different tone, format and detail.',
    explanation: 'Purpose and audience shape all choices in transactional writing.',
  },
  {
    prompt: 'An argumentative essay aims to...',
    options: ['present a viewpoint and support it with evidence', 'tell a made-up story that has a clear plot', 'list facts about a topic without taking a side', 'describe a scene using the five senses'],
    answer: 'present a viewpoint and support it with evidence',
    explanation: 'Argumentative essays state a position and justify it with reasons and examples.',
  },
  {
    prompt: 'Which revision technique best improves essay clarity?',
    options: ['reading aloud and checking that ideas flow logically', 'reading your first draft once and handing it in', 'checking only the spelling in your final copy', 'replacing long words with simple words in every line'],
    answer: 'reading aloud and checking that ideas flow logically',
    explanation: 'Careful review helps identify gaps in logic and awkward phrasing.',
  },
];

const EssayTransactionalWriting = () => (
  <CapsSubjectTopic
    title="Essay and Transactional Writing"
    subtitle="Narrative, descriptive, reflective and argumentative essays; audience and purpose"
    learnSteps={learnSteps}
    task="gr9-essay-transactional-writing-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default EssayTransactionalWriting;
