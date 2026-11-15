import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { StableModel } from '../../../../../components/diagrams/lifeskills/LifeSkillsPictures';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Plan and build a 3D model',
    content: slide(
      <>
        <Rule>
          Before you build a 3D model, make a simple design plan or sketch first. A design plan helps you organise ideas, materials and steps. Useful materials are cardboard, glue and recycled boxes.
        </Rule>
        <Worked
          title="Start a model house"
          steps={[
            <>Sketch your idea and note the height, width and shape.</>,
            <>List the materials: cardboard, glue and recycled boxes.</>,
            <>Decide how to join the parts: glue, tape or tabs.</>,
            <>Check your work against the plan and improve weak parts.</>,
          ]}
        />
        <Mistake>Starting to glue before you have a plan. A simple sketch saves time and materials.</Mistake>
      </>,
    ),
  },
  {
    title: 'Stability, form and texture',
    content: slide(
      <>
        <Rule>
          A model stays stable when its structure is balanced and sits on a firm base. Texture describes how a surface feels, such as rough or smooth.
        </Rule>
        <StableModel />
        <Worked
          title="Read the picture and test your model"
          steps={[
            <>Left model: a wide base with the parts centred above it. It is stable.</>,
            <>Right model: a narrow base with a heavy block to one side. It will topple.</>,
            <>Test yours: does it stand? If not, widen the base or balance the parts.</>,
            <>Texture: add rough or smooth surfaces to make your model more interesting.</>,
          ]}
        />
        <Mistake>Making the top big and heavy on a narrow base. A firm, wide base with balanced parts keeps a model standing.</Mistake>
      </>,
    ),
  },
  {
    title: 'Dance-drama and rehearsal',
    content: slide(
      <>
        <Rule>
          Dance-drama integration means using movement and acting together to tell a story. Rehearsal improves timing, confidence and teamwork.
        </Rule>
        <Worked
          title="Prepare a dance-drama"
          steps={[
            <>Choose a story, for example a market day.</>,
            <>Use movement (space, timing, levels) and drama (facial expression, character) together to tell it.</>,
            <>Rehearse with your group: practise together and fix the timing.</>,
            <>Each rehearsal improves timing, confidence and teamwork.</>,
          ]}
        />
        <Mistake>Doing the dance and the acting separately. Integration means movement and acting work together to tell one story.</Mistake>
      </>,
    ),
  },
  {
    title: 'Feedback, portfolio and final performance',
    content: slide(
      <>
        <Rule>
          Helpful peer feedback is kind, specific and gives a clear suggestion for improvement. A Creative Arts portfolio can hold sketches, photos of work and feedback notes. In a final integrated performance the most important thing is communicating the idea clearly with confident teamwork.
        </Rule>
        <Worked
          title="Give feedback and collect evidence"
          steps={[
            <>Peer feedback: “Speak a little louder and hold the final pose longer.” It is kind, specific and gives a suggestion.</>,
            <>“It was bad” is not helpful because it is not specific.</>,
            <>Add your sketches, photos of your work and the feedback notes to your portfolio: evidence of planning, making, presenting and reflecting.</>,
            <>In the final performance, communicate the idea clearly and work confidently as a team.</>,
          ]}
        />
        <Mistake>Giving feedback such as “it was bad”. Helpful feedback is kind and specific and says how to improve.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What should you do before you start building a 3D model, and which materials suit the job?</>,
          <>What keeps a model standing up, and what do we mean by the texture of a surface?</>,
          <>What do we mean by combining dance with drama in one performance, and why does a group rehearse?</>,
          <>Give an example of helpful peer feedback. What can go in a portfolio? What matters most in a final performance?</>,
        ]}
        answers={[
          <>Make a simple design plan or sketch. Cardboard, glue and recycled boxes.</>,
          <>A balanced structure with a firm base. How a surface feels, such as rough or smooth.</>,
          <>Using movement and acting together to tell a story. It improves timing, confidence and teamwork.</>,
          <>“Speak a little louder and hold the final pose longer.” Sketches, photos of work and feedback notes. Communicating the idea clearly with confident teamwork.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is a good first step before building a 3D model?',
    options: [
      'Make a simple design plan or sketch',
      'Throw random materials together',
      'Ignore the purpose of the task',
      'Paint before deciding what to build',
    ],
    answer: 'Make a simple design plan or sketch',
    explanation: 'A design plan helps learners organise ideas, materials, and steps before they start building.',
  },
  {
    prompt: 'Which materials are useful for a simple 3D construction task?',
    options: ['Cardboard, glue and recycled boxes', 'Water and sunlight and nothing else', 'Loose sand with nothing to hold it', 'Air with no way to join it up'],
    answer: 'Cardboard, glue and recycled boxes',
    explanation: 'Cardboard and recycled materials are practical for building stable school art models.',
  },
  {
    prompt: 'What helps a sculpture or model stay stable?',
    options: [
      'A balanced structure with a firm base',
      'One tiny point holding all the weight',
      'Parts hanging loosely with no support',
      'Ignoring whether it falls over',
    ],
    answer: 'A balanced structure with a firm base',
    explanation: 'Stable artworks usually need a base and carefully balanced parts.',
  },
  {
    prompt: 'What does texture describe in art?',
    options: ['How a surface feels, such as rough or smooth', 'How quickly a runner finishes a race', 'How long a speech lasts in minutes', 'How many learners are absent today'],
    answer: 'How a surface feels, such as rough or smooth',
    explanation: 'Texture is an art element that describes the quality of a surface.',
  },
  {
    prompt: 'What does dance-drama integration mean?',
    options: ['Using movement and acting together to tell a story', 'Only standing still on the stage', 'Building a model without any performance', 'Reading marks aloud without any expression'],
    answer: 'Using movement and acting together to tell a story',
    explanation: 'Dance-drama combines body movement, expression, and performance to communicate meaning.',
  },
  {
    prompt: 'Why is rehearsal important before a final presentation?',
    options: [
      'It improves timing, confidence, and teamwork',
      'It guarantees mistakes will be hidden forever',
      'It means learners do not need a plan',
      'It replaces all feedback from others',
    ],
    answer: 'It improves timing, confidence, and teamwork',
    explanation: 'Rehearsal gives learners time to practise, refine ideas, and work together more smoothly.',
  },
  {
    prompt: 'Which example is helpful peer feedback?',
    options: [
      'Speak a little louder and hold the final pose longer',
      'Your work is bad and should be thrown away',
      'Do not change anything because practice never helps',
      'Ignore the audience completely',
    ],
    answer: 'Speak a little louder and hold the final pose longer',
    explanation: 'Helpful peer feedback is kind, specific, and gives a clear suggestion for improvement.',
  },
  {
    prompt: 'What could go into a Creative Arts portfolio?',
    options: ['Sketches, photos of work and feedback notes', 'A lunch menu from home and nothing else', 'A sports score that has no art with it', 'A blank page from a book of the term'],
    answer: 'Sketches, photos of work and feedback notes',
    explanation: 'A portfolio collects evidence of planning, making, presenting, and reflecting.',
  },
  {
    prompt: 'What is most important in a final integrated performance?',
    options: [
      'Communicating the idea clearly with confident teamwork',
      'Seeing who can move the fastest only',
      'Using the most expensive material possible',
      'Finishing without listening to anyone else',
    ],
    answer: 'Communicating the idea clearly with confident teamwork',
    explanation: 'A strong presentation shares meaning clearly and shows that performers have prepared together.',
  },
];

const CreativeArtsT4 = () => (
  <CapsSubjectTopic
    title="Creative Arts"
    subtitle="Planning, making, and presenting 3D and performance work"
    learnSteps={learnSteps}
    task="creative-arts-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default CreativeArtsT4;
