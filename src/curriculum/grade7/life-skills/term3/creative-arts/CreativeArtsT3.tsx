import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { MixedLayers, SectionBar } from '../../../../../components/diagrams/lo/CaPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const dance = [
  { label: 'Move A', units: 8 },
  { label: 'Move B', units: 8 },
  { label: 'Link', units: 4 },
  { label: 'Move A', units: 8 },
];

export const learnSteps: LearnStep[] = [
  {
    title: 'Heritage: research with respect',
    content: slide(
      <>
        <Rule>Research heritage before you create, so cultural themes are shown accurately and respectfully. Use cultural symbols with understanding of their meaning.</Rule>
        <StepFlow steps={['Find out what the symbol means.', 'Ask who uses it and when.', 'Use it in a way that fits its meaning.', 'Say where you learned about it.']} aria="Four steps in order: find out what the symbol means, ask who uses it and when, use it in a way that fits its meaning, say where you learned about it." />
        <Worked
          title="You want a traditional pattern on your poster"
          steps={[<>Ask your teacher or a community member, or use a library book.</>, <>Find out what the pattern means and when it is used.</>, <>Use it in a way that fits that meaning.</>, <>Write down where you learned about it.</>]}
        />
        <Mistake>Copying a symbol only because it looks nice. Without its meaning you can misrepresent a culture or repeat a stereotype.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mixed media',
    content: slide(
      <>
        <Rule>Mixed media means combining different materials in one piece, such as paint, paper and fabric.</Rule>
        <MixedLayers layers={['Cardboard base', 'Paint', 'Torn paper', 'Fabric']} aria="Four layers stacked from bottom to top: a cardboard base, paint, torn paper and fabric." />
        <Worked
          title="A heritage collage"
          steps={[<>Start with a cardboard base.</>, <>Paint the background colours.</>, <>Glue on torn paper shapes.</>, <>Add a piece of fabric, then step back: do all the materials support your theme?</>]}
        />
        <Mistake>Calling a painting with two colours mixed media. You need different materials. Do not add materials that do not help your message either.</Mistake>
      </>,
    ),
  },
  {
    title: 'Scene building and choreography',
    content: slide(
      <>
        <Rule>A scene needs a clear setting and a purpose for the action so the audience can follow the story. Choreography is planning and organising movement sequences.</Rule>
        <SectionBar parts={dance} unit="counts" aria="An example dance plan as a bar: move A for 8 counts, move B for 8 counts, a link for 4 counts, then move A again for 8 counts." />
        <Worked
          title="Build a market scene"
          steps={[<>Setting: a fruit stall at a market.</>, <>Characters: a seller and a customer.</>, <>Purpose: the customer wants to buy before the stall closes.</>, <>Now every action has a reason, and the audience can follow.</>]}
        />
        <Mistake>Moving around the stage with no setting or reason. In choreography, order your movement ideas into a plan instead of making them up on the spot.</Mistake>
      </>,
    ),
  },
  {
    title: 'Polish your work and evaluate it',
    content: slide(
      <>
        <Rule>Process evidence shows how your ideas developed, such as a rehearsal plan and draft sketches. Polish a group piece by rehearsing transitions and timing again and again.</Rule>
        <StepFlow steps={['Keep draft sketches and a rehearsal plan.', 'Rehearse transitions and timing.', 'Ask: did my choices communicate the message?', 'Improve it and rehearse again.']} aria="Four steps in order: keep draft sketches and a rehearsal plan, rehearse transitions and timing, ask whether your choices communicated the message, improve and rehearse again." />
        <Worked
          title="Evaluate your own piece"
          steps={[<>Write the message you wanted to send.</>, <>Ask: “Did my choices communicate the intended message?”</>, <>Name one choice that worked and one you will change.</>]}
        />
        <Mistake>Keeping only the final piece, or judging it by “I liked it”. Keep your drafts, and judge whether the message came across.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What does mixed media mean?" answer="Combining different materials in one piece, for example paint, paper and fabric." />
        <Check question="Why research heritage before making art, and how should you use a cultural symbol?" answer="To represent cultural themes accurately and respectfully. Use symbols with respect and understanding of their meaning." />
        <Check question="What is choreography, and what does a scene need?" answer="Choreography is planning and organising movement sequences. A scene needs a clear setting and a purpose for the action." />
        <Check question="Give one example of process evidence and one useful self-evaluation question." answer="A rehearsal plan or draft sketches. “Did my choices communicate the intended message?”" />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does mixed media mean in visual art?',
    options: [
      'Combining different materials in one piece',
      'Using one pencil for the whole year',
      'Only drawing from memory',
      'Avoiding colour and texture',
    ],
    answer: 'Combining different materials in one piece',
    explanation: 'Mixed media can include paint, paper, fabric, and other materials.',
  },
  {
    prompt: 'Why research heritage before creating artwork or performance?',
    options: [
      'To represent cultural themes accurately and respectfully',
      'To copy work without understanding context',
      'To avoid planning any creative decisions',
      'To remove meaning from the final piece',
    ],
    answer: 'To represent cultural themes accurately and respectfully',
    explanation: 'Research supports informed and respectful artistic interpretation.',
  },
  {
    prompt: 'Which element is important in scene building?',
    options: [
      'A clear setting and purpose for action',
      'Random actions with no context',
      'No beginning or ending',
      'Ignoring all audience understanding',
    ],
    answer: 'A clear setting and purpose for action',
    explanation: 'Scene structure helps audiences follow the narrative.',
  },
  {
    prompt: 'What is choreography?',
    options: ['Planning and organising movement sequences', 'Painting with one colour and nothing else', 'Memorising lists of spelling words', 'Recording the scores of sports matches'],
    answer: 'Planning and organising movement sequences',
    explanation: 'Choreography arranges movement ideas into a coherent performance.',
  },
  {
    prompt: 'How should learners use cultural symbols in class projects?',
    options: [
      'With respect and understanding of meaning',
      'As decoration without any context',
      'To mock cultural practices',
      'Only if they are copied exactly from the internet',
    ],
    answer: 'With respect and understanding of meaning',
    explanation: 'Respectful cultural use avoids stereotypes and misrepresentation.',
  },
  {
    prompt: 'Which item is process evidence?',
    options: ['A rehearsal plan and draft sketches', 'Only the final mark', 'A random unrelated photo', 'A blank page with no notes'],
    answer: 'A rehearsal plan and draft sketches',
    explanation: 'Process evidence shows how ideas developed over time.',
  },
  {
    prompt: 'What makes a useful self-evaluation question?',
    options: ['Did my choices communicate the intended message?', 'Did I finish before everyone else did?', 'Did I avoid all of the feedback given?', 'Did I copy the work without any changes?'],
    answer: 'Did my choices communicate the intended message?',
    explanation: 'Evaluation should focus on effectiveness and communication.',
  },
  {
    prompt: 'How can performers polish a group piece?',
    options: [
      'Rehearse transitions and timing repeatedly',
      'Change roles during the final show unexpectedly',
      'Skip all run-throughs before assessment',
      'Ignore balance and spacing on stage',
    ],
    answer: 'Rehearse transitions and timing repeatedly',
    explanation: 'Focused rehearsal improves confidence, flow, and clarity.',
  },
];

const CreativeArtsT3 = () => (
  <CapsSubjectTopic
    title="Creative Arts"
    subtitle="South African heritage, mixed media, scene building, and choreography"
    learnSteps={learnSteps}
    task="gr7-creative-arts-t3"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default CreativeArtsT3;
