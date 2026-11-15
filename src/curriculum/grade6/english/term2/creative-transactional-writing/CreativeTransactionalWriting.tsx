import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { FlowDiagram } from '../../../../../components/diagrams/science/SciencePictures4';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Creative and transactional writing',
    content: slide(
      <>
        <Rule>
          Creative writing lets you imagine and express ideas; a poem often uses imagery and feelings to create an effect. Transactional writing is practical: its main purpose is to communicate clearly for a specific purpose.
        </Rule>
        <Worked
          title="Match the text to the job"
          steps={[
            <>A poem about the rain: creative, because it uses images and feelings.</>,
            <>A note asking your teacher for a book: transactional, because it has a clear audience and purpose.</>,
            <>A play script: creative, with imagined people and events.</>,
          ]}
        />
        <Mistake>Using long imaginative language in a practical message. Transactional writing must be clear for its purpose.</Mistake>
      </>,
    ),
  },
  {
    title: 'The writing process and redrafting',
    content: slide(
      <>
        <Rule>
          Planning ideas comes first. After the first draft, read it again and improve it. Redrafting helps you improve content and language.
        </Rule>
        <FlowDiagram
          id="cw"
          title="From plan to redraft"
          desc="Four steps: plan, draft, revise, redraft."
          nodes={[
            { id: 'p', label: 'plan', x: 22, y: 50, color: '#7dd3fc' },
            { id: 'd', label: 'draft', x: 58, y: 50, color: '#fcd34d' },
            { id: 'r', label: 'revise', x: 96, y: 50, color: '#86efac' },
            { id: 'g', label: 'redraft', x: 136, y: 50, color: '#fda4af' },
          ]}
          edges={[
            { from: 'p', to: 'd', label: '' },
            { from: 'd', to: 'r', label: '' },
            { from: 'r', to: 'g', label: '' },
          ]}
        />
        <Worked
          title="Improve a first draft"
          steps={[
            <>Plan: collect ideas and put them in order.</>,
            <>Draft: write the first version.</>,
            <>Read it again: improve the meaning and detail (revise).</>,
            <>Redraft: fix the language and present it neatly. Now both content and language are better.</>,
          ]}
        />
        <Mistake>Handing in the first draft. Writers read their work again and improve it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Scripts and dialogue',
    content: slide(
      <>
        <Rule>A play script shows speaker names and stage directions, so we know who is speaking and what happens on stage. In dialogue each speaker takes a clear turn.</Rule>
        <Worked
          title="Set out a short script"
          steps={[
            <>Write the speaker’s name, then what they say: <strong>Thandi:</strong> Where is my book?</>,
            <>Add a stage direction in brackets so we know the action: (Thandi looks under the desk.)</>,
            <>Give the next speaker a new line and their own name: <strong>Sipho:</strong> It is on the shelf.</>,
          ]}
        />
        <Mistake>Writing all the speakers’ words in one block. Each speaker takes a separate turn so the dialogue is easy to follow.</Mistake>
      </>,
    ),
  },
  {
    title: 'Audience, register and coherence',
    content: slide(
      <>
        <Rule>
          Ask: who will read this, and why am I writing it? Your audience decides your register (formal or informal). Coherence means ideas link together clearly, from one idea to the next.
        </Rule>
        <Worked
          title="Open a note to your teacher"
          steps={[
            <>Audience: a teacher. Purpose: ask or tell something. Register: polite and formal.</>,
            <>The best opening is “Dear Ms Naidoo,” (a polite opening that matches the audience).</>,
            <>Keep each idea in order so the message stays focused and makes sense: that is coherence.</>,
          ]}
        />
        <Mistake>Using the same informal language for everyone. A friend can get “Hi Zinzi!” but a teacher needs a polite opening.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Why do we write a formal letter or an email to someone? Which text type uses imagery and feelings?</>,
          <>What do you do first in the writing process, and after the first draft? Why redraft?</>,
          <>What belongs in a play script, and how is dialogue organised?</>,
          <>Which greeting suits a short note to your principal, and what is coherence?</>,
        ]}
        answers={[
          <>To communicate clearly for a specific purpose. A poem.</>,
          <>Plan your ideas. Read it again and improve it. Redrafting helps you improve content and language.</>,
          <>Speaker names and stage directions. Each speaker takes a clear turn.</>,
          <>“Dear Mr Dlamini,”. Coherence means ideas link together clearly.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is the main purpose of transactional writing?',
    options: ['To communicate clearly for a specific purpose', 'To hide the meaning of the writing', 'To copy random sentences only', 'To avoid thinking about the reader'],
    answer: 'To communicate clearly for a specific purpose',
    explanation: 'Transactional writing is practical writing aimed at a clear audience and purpose.',
  },
  {
    prompt: 'Which step usually comes first in the writing process?',
    options: ['Planning ideas', 'Publishing immediately', 'Memorising the whole draft', 'Ignoring the topic'],
    answer: 'Planning ideas',
    explanation: 'Planning helps you choose ideas and organise them before drafting.',
  },
  {
    prompt: 'What should a writer do after finishing a first draft?',
    options: ['Read it again and improve it', 'Throw it away at once', 'Change the topic completely', 'Stop checking the work'],
    answer: 'Read it again and improve it',
    explanation: 'Revision and redrafting help make the writing clearer and stronger.',
  },
  {
    prompt: 'Which feature belongs in a play script?',
    options: ['Speaker names and stage directions', 'A list of fractions with their answers', 'A weather graph for the week', 'A table of results from a science test'],
    answer: 'Speaker names and stage directions',
    explanation: 'A script shows who is speaking and what happens on stage.',
  },
  {
    prompt: 'Which message opening best suits a note to your teacher?',
    options: ['Dear Ms Naidoo,', 'Hey bestie!', 'Yo!', 'Guess what!'],
    answer: 'Dear Ms Naidoo,',
    explanation: 'A polite opening matches the audience and keeps the register appropriate.',
  },
  {
    prompt: 'How is dialogue usually organised on the page?',
    options: ['Each speaker takes a clear turn', 'All speakers write in one long paragraph', 'No one is named at all', 'Only the last speaker gets punctuation'],
    answer: 'Each speaker takes a clear turn',
    explanation: 'Dialogue is easier to follow when each speaker has a separate turn.',
  },
  {
    prompt: 'What does paragraph coherence mean?',
    options: ['Ideas link together clearly', 'Every sentence is about a different topic', 'The paragraph has no punctuation', 'Only long words are used'],
    answer: 'Ideas link together clearly',
    explanation: 'Coherence means the writing stays focused and makes sense from one idea to the next.',
  },
  {
    prompt: 'Which text type is most likely to use imagery and feelings to create an effect?',
    options: ['Poem', 'Timetable', 'Invoice', 'Map key'],
    answer: 'Poem',
    explanation: 'Poems often use images, rhythm, and emotion to express ideas.',
  },
  {
    prompt: 'Why is redrafting important?',
    options: ['It helps you improve content and language', 'It means you never need to plan', 'It removes the need for punctuation', 'It makes every text informal'],
    answer: 'It helps you improve content and language',
    explanation: 'Redrafting gives you a chance to refine ideas, structure, and correctness.',
  },
];

const CreativeTransactionalWriting = () => (
  <CapsSubjectTopic
    title="Creative & Transactional Writing"
    subtitle="Using the writing process for poems, dialogues, scripts, and messages"
    learnSteps={learnSteps}
    task="creative-transactional-writing"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default CreativeTransactionalWriting;
