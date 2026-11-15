import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { MixedMedia } from '../../../../../components/diagrams/lifeskills/LifeSkillsPictures';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'South African cultural art and respect',
    content: slide(
      <>
        <Rule>
          One purpose of South African cultural art is to express heritage, ideas and stories. To show respect, find out what the symbols and traditions mean.
        </Rule>
        <Worked
          title="Look at a cultural artwork respectfully"
          steps={[
            <>Observe: look closely, notice the patterns and the colour choices.</>,
            <>Ask: what do the symbols mean, and which tradition do they come from? Finding out the meaning shows respect.</>,
            <>Learn the context and value the tradition. Do not mock it.</>,
            <>The artwork expresses heritage, ideas and stories: it shares identity and lived experience.</>,
          ]}
        />
        <Mistake>Judging a cultural artwork only by whether you like it. Respect starts with finding out what its symbols and traditions mean.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mixed media and texture',
    content: slide(
      <>
        <Rule>
          Mixed media means using more than one material in one artwork, such as paint, collage paper and fabric. Artists layer rough and smooth materials to create texture and visual interest.
        </Rule>
        <MixedMedia />
        <Worked
          title="Plan a mixed-media artwork"
          steps={[
            <>Choose different materials: paint, collage paper and fabric.</>,
            <>Layer them in one artwork, as in the picture.</>,
            <>Put rough paper next to smooth paint: this creates texture and visual interest.</>,
            <>Arrange the layers with balance and a focus point.</>,
          ]}
        />
        <Mistake>Using one material and calling it mixed media. Mixed media needs more than one material in the same artwork.</Mistake>
      </>,
    ),
  },
  {
    title: 'Choral verse and group performance',
    content: slide(
      <>
        <Rule>
          Choral verse is a group speaking lines together with rhythm and expression. A group performance sounds strong when you listen to each other and keep good timing.
        </Rule>
        <Worked
          title="Perform a verse as a group"
          steps={[
            <>Choose a short poem and divide the lines.</>,
            <>Speak together with clear diction and a shared rhythm.</>,
            <>Listen to each other and keep good timing, so nobody rushes ahead.</>,
            <>Add expression: change your voice to show the feeling of each line.</>,
          ]}
        />
        <Mistake>Speaking as loudly and as fast as you can. Ensemble work depends on shared rhythm, listening and coordination.</Mistake>
      </>,
    ),
  },
  {
    title: 'Movement and rehearsal',
    content: slide(
      <>
        <Rule>
          Movement can show mood, rhythm and important ideas in a song or spoken piece. We rehearse to improve confidence, timing and expression.
        </Rule>
        <Worked
          title="Add movement and rehearse"
          steps={[
            <>Choose a movement for an important idea, for example open arms for “welcome”.</>,
            <>Match the movement to the mood and the rhythm of the piece.</>,
            <>Rehearse again and again: practise and improve together.</>,
            <>Each rehearsal builds confidence, timing and expression.</>,
          ]}
        />
        <Mistake>Skipping rehearsal because you know the words. Rehearsal improves timing and confidence for the whole group.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Why do people make South African cultural art, and how do you show respect when you look at it?</li>
            <li>What does mixed media mean? Why layer rough and smooth materials?</li>
            <li>Describe choral verse, and say how a group makes its performance work well together.</li>
            <li>How can movement add meaning? Why rehearse?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>To express heritage, ideas and stories. Finding out what the symbols and traditions mean.</li>
            <li>Using more than one material in one artwork (paint, collage paper and fabric). To create texture and visual interest.</li>
            <li>A group speaking lines together with rhythm and expression. Listening to each other and keeping good timing.</li>
            <li>It can show mood, rhythm and important ideas. To improve confidence, timing and expression.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is one purpose of South African cultural art?',
    options: [
      'To express heritage, ideas, and stories',
      'To copy another person’s work exactly every time',
      'To remove all meaning from an artwork',
      'To avoid learning about communities',
    ],
    answer: 'To express heritage, ideas, and stories',
    explanation: 'Cultural art often shares traditions, values, identity, and lived experience.',
  },
  {
    prompt: 'Which action shows respect when learning about cultural artworks?',
    options: [
      'Finding out what the symbols and traditions mean',
      'Mocking the style because it is different',
      'Pretending all cultures are exactly the same',
      'Ignoring the history behind the art',
    ],
    answer: 'Finding out what the symbols and traditions mean',
    explanation: 'Respect includes learning the context and treating cultural forms with care.',
  },
  {
    prompt: 'What does mixed media mean?',
    options: [
      'Using more than one material in one artwork',
      'Painting with only one colour',
      'Making art without any planning',
      'Singing while no materials are used',
    ],
    answer: 'Using more than one material in one artwork',
    explanation: 'Mixed media combines different materials like paint, collage, pencil, or fabric.',
  },
  {
    prompt: 'Which set shows mixed media materials?',
    options: [
      'Paint, collage paper, and fabric',
      'Only one pencil and nothing else',
      'Silence, stillness, and shadows',
      'Whistles, scorecards, and cones',
    ],
    answer: 'Paint, collage paper, and fabric',
    explanation: 'These are different art materials that can be combined in one artwork.',
  },
  {
    prompt: 'Why might an artist layer rough and smooth materials together?',
    options: [
      'To create texture and visual interest',
      'To make the artwork impossible to see',
      'To remove all colour from the page',
      'To stop people from thinking about meaning',
    ],
    answer: 'To create texture and visual interest',
    explanation: 'Different materials can add texture and help the artwork feel more expressive.',
  },
  {
    prompt: 'What is choral verse?',
    options: [
      'A group speaking lines together with rhythm and expression',
      'A race where learners pass a baton',
      'A drawing made only with chalk',
      'A private speech spoken by one person only',
    ],
    answer: 'A group speaking lines together with rhythm and expression',
    explanation: 'Choral verse is a spoken group performance that relies on timing and clear voice work.',
  },
  {
    prompt: 'What helps a group performance sound strong?',
    options: ['Listening to each other and keeping good timing', 'Everyone singing at a different speed', 'Ignoring the conductor or the leader', 'Turning away from the audience throughout'],
    answer: 'Listening to each other and keeping good timing',
    explanation: 'Ensemble work depends on shared rhythm, listening, and coordination.',
  },
  {
    prompt: 'Why do learners rehearse before a Creative Arts performance?',
    options: [
      'To improve confidence, timing, and expression',
      'To avoid learning the piece',
      'To make the performance shorter than planned',
      'To forget the words and movements',
    ],
    answer: 'To improve confidence, timing, and expression',
    explanation: 'Rehearsal gives the group a chance to practise and improve together.',
  },
  {
    prompt: 'How can movement add meaning to a song or spoken piece?',
    options: [
      'It can show mood, rhythm, and important ideas',
      'It should always be unrelated to the performance',
      'It only matters if learners stay frozen',
      'It removes the need to practise',
    ],
    answer: 'It can show mood, rhythm, and important ideas',
    explanation: 'Movement supports the message of a performance and helps the audience understand it.',
  },
];

const CreativeArtsT3 = () => (
  <CapsSubjectTopic
    title="Creative Arts"
    subtitle="Creating cultural artworks and rehearsing expressive group performance"
    learnSteps={learnSteps}
    task="creative-arts-t3"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default CreativeArtsT3;
