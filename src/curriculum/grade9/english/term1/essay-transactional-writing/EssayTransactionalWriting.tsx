import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understand essay types and purpose',
    image: {
      src: '/curriculum/grade9/english/term1/essay-transactional-writing/image1.jpg',
      alt: 'learner planning a narrative essay with characters, setting and conflict',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Essays can be narrative (telling a story), descriptive (painting a picture), reflective (exploring feelings), 
          or argumentative (presenting a viewpoint). Choose the right form for your purpose and audience.
        </p>
      </div>
    ),
  },
  {
    title: 'Craft transactional writing for specific contexts',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Transactional writing (letters, emails, posters) must fit its purpose and audience. Use process writing: 
          plan, draft, review and revise to ensure clarity and impact.
        </p>
      </div>
    ),
  },
  {
    title: 'Use planning and editing to strengthen writing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Strong essays and transactional pieces follow a clear structure and maintain focus. Planning helps organize 
          ideas, and careful editing improves sentence flow, grammar, and overall persuasiveness.
        </p>
      </div>
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
