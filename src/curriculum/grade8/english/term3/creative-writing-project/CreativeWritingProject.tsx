import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PlanBar, StepFlow } from '../../../../../components/diagrams/english/Grade8Pictures';
import { PROJECT_PLAN, totalDays } from '../../../../../components/diagrams/english/grade8';

// The days in the plan are added by a tested helper (grade8.test.ts).
const days = totalDays(PROJECT_PLAN);
const dayOf = (name: string) => PROJECT_PLAN.find((t) => t.name === name)?.days ?? 0;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Plan and research first',
    content: slide(
      <>
        <Rule>A creative writing project moves through stages. Planning and research come first, because they give the writing direction and purpose.</Rule>
        <StepFlow
          items={[
            { label: 'Plan and research', note: 'topic, purpose, audience' },
            { label: 'Draft', note: 'write a first version' },
            { label: 'Peer review', note: 'get feedback' },
            { label: 'Redraft, edit, present', note: 'improve, check, share' },
          ]}
          aria="Four stages in order: plan and research, draft, peer review, then redraft, edit and present."
        />
        <Worked
          title="Plan a story about a lost dog"
          steps={[
            <>Topic and purpose: a short story that shows how a community helps a lost dog.</>,
            <>Audience: Grade 6 learners.</>,
            <>Research: ask a neighbour about lost-pet notices and note the details a story could use.</>,
          ]}
        />
        <Mistake>Starting to draft with no plan. Without a purpose and notes the writing wanders and is hard to revise.</Mistake>
      </>,
    ),
  },
  {
    title: 'Audience and timeline',
    content: slide(
      <>
        <Rule>Audience awareness shapes tone, detail and language choices. A project timeline manages the tasks so you meet the deadline.</Rule>
        <PlanBar tasks={PROJECT_PLAN} aria={`One bar of ${days} school days split into six stages: plan ${dayOf('Plan')} days, draft ${dayOf('Draft')}, peer review ${dayOf('Peer review')}, redraft ${dayOf('Redraft')}, edit ${dayOf('Edit')} and present ${dayOf('Present')}.`} />
        <Worked
          title="Same news, two audiences"
          steps={[
            <>For Grade 1: &ldquo;Our dog Bobo ran away. We looked and looked!&rdquo; Short words, a friendly tone.</>,
            <>For the school newsletter: &ldquo;A lost dog sparked a search across the neighbourhood.&rdquo; More formal, more detail.</>,
            <>The timeline: {PROJECT_PLAN.map((t) => `${t.name} ${t.days}`).join(' + ')} = {days} school days.</>,
          ]}
        />
        <Mistake>Ignoring the audience, or the timeline. Unrelated content and a rushed last day both lower the quality of the project.</Mistake>
      </>,
    ),
  },
  {
    title: 'Draft, peer review and redraft',
    content: slide(
      <>
        <Rule>Peer review gets helpful feedback before you finalise. Redrafting is rewriting after feedback to improve the quality.</Rule>
        <StepFlow
          items={[
            { label: 'Draft', note: 'The dog was sad.' },
            { label: 'Peer comment', note: 'Show how you know.' },
            { label: 'Redraft', note: 'rewrite using the comment' },
          ]}
          aria="Three boxes in order: a draft sentence, a peer comment asking to show how we know, and a redraft that uses the comment."
        />
        <Worked
          title="Improve one sentence"
          steps={[
            <>Draft: &ldquo;The dog was sad.&rdquo;</>,
            <>A peer reads it and writes: &ldquo;Show how you know.&rdquo;</>,
            <>Redraft: &ldquo;The dog lay by the gate, head low, and would not touch her food.&rdquo; The change comes from the feedback.</>,
          ]}
        />
        <Mistake>Copying the same draft with no changes, or deleting everything. Redrafting means keeping what works and improving the rest.</Mistake>
      </>,
    ),
  },
  {
    title: 'Introduce, edit and reflect',
    content: slide(
      <>
        <Rule>A strong introduction engages the reader and states the focus clearly. Before submission, edit for language, structure and accuracy. Reflection explains how feedback changed your work.</Rule>
        <Worked
          title="Weak and strong"
          steps={[
            <>Weak introduction: &ldquo;This is my project.&rdquo; It has no hook and no focus.</>,
            <>Stronger: &ldquo;When Bobo vanished on a Monday, a whole street became a search party. This story shows how neighbours care.&rdquo; It hooks the reader and states the focus.</>,
            <>Edit: check spelling, punctuation, paragraphs and facts. Reflect: &ldquo;After my partner asked me to show feelings, I rewrote the opening scene.&rdquo;</>,
          ]}
        />
        <Mistake>Writing &ldquo;No changes were needed&rdquo; as your reflection. Reflection is evidence of how feedback changed the final draft, so skipping proofreading or planning notes removes that evidence.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Before you write any scenes for your story project, which stage must you finish?</>,
          <>What is redrafting?</>,
          <>Why do writers think about their audience?</>,
          <>Our plan has {PROJECT_PLAN.length} stages. How many school days does it need in total?</>,
        ]}
        answers={[
          <>Planning and research.</>,
          <>Rewriting after feedback to improve the quality.</>,
          <>The audience shapes tone, detail and language choices.</>,
          <>{PROJECT_PLAN.map((t) => t.days).join(' + ')} = {days} school days.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which stage comes first in a creative writing project?',
    options: ['planning and research', 'final presentation', 'peer review after final marks', 'publishing without drafting'],
    answer: 'planning and research',
    explanation: 'Planning gives direction and purpose before drafting begins.',
  },
  {
    prompt: 'Why is audience awareness important in project writing?',
    options: ['It shapes tone, detail and language choices.', 'It removes the need for structure.', 'It allows unrelated content.', 'It replaces revision.'],
    answer: 'It shapes tone, detail and language choices.',
    explanation: 'Writers choose content and style based on who will read the text.',
  },
  {
    prompt: 'Peer review is mainly used to...',
    options: ['get helpful feedback before finalising', 'avoid editing the work completely', 'check the handwriting style and nothing else', 'replace the original writer of the text'],
    answer: 'get helpful feedback before finalising',
    explanation: 'Peer comments help improve clarity and effectiveness.',
  },
  {
    prompt: 'What is redrafting?',
    options: ['rewriting after feedback to improve quality', 'copying the same draft with no changes', 'adding random pictures only', 'deleting all paragraphs'],
    answer: 'rewriting after feedback to improve quality',
    explanation: 'Redrafting applies revision decisions to strengthen the writing.',
  },
  {
    prompt: 'A strong project introduction should...',
    options: ['engage the reader and state focus clearly', 'list unrelated statistics only', 'repeat the title many times', 'avoid any clear purpose'],
    answer: 'engage the reader and state focus clearly',
    explanation: 'Introductions set direction and create interest.',
  },
  {
    prompt: 'Which evidence best shows reflection in a project?',
    options: ['explaining how feedback changed the final draft', 'stating that no changes were needed', 'removing all of the planning notes', 'submitting the title page and nothing else'],
    answer: 'explaining how feedback changed the final draft',
    explanation: 'Reflection comments on decisions and growth during writing.',
  },
  {
    prompt: 'What should happen before final submission?',
    options: ['editing for language, structure and accuracy', 'skipping the proofreading of the work', 'changing the topic for no good reason', 'taking out the paragraphing of the text'],
    answer: 'editing for language, structure and accuracy',
    explanation: 'Final editing checks quality and correctness.',
  },
  {
    prompt: 'Why use a project timeline?',
    options: ['to manage tasks and meet deadlines', 'to avoid planning entirely', 'to limit creativity to one sentence', 'to replace audience analysis'],
    answer: 'to manage tasks and meet deadlines',
    explanation: 'Timelines support steady progress through each writing stage.',
  },
];

const CreativeWritingProject = () => (
  <CapsSubjectTopic
    title="Creative Writing Project"
    subtitle="Research, process writing, peer review and reflective presentation"
    learnSteps={learnSteps}
    task="gr8-creative-writing-project-t3"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default CreativeWritingProject;
