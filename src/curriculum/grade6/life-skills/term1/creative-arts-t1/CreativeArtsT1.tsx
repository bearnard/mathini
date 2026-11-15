import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { BeatRhythm, LinesAndShapes } from '../../../../../components/diagrams/lifeskills/LifeSkillsPictures';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Lines, shapes and colour',
    content: slide(
      <>
        <Rule>
          A line is a mark that can be straight, curved or zigzag. A shape is a flat enclosed form, such as a triangle. Colour can create mood and contrast. A 2D artwork is a flat artwork made on a surface.
        </Rule>
        <LinesAndShapes />
        <Worked
          title="Describe a collage"
          steps={[
            <>A collage of paper pieces on a page is a 2D artwork: it is flat, made on a surface.</>,
            <>Look for lines: a zigzag border and curved lines for waves.</>,
            <>Look for shapes: triangles for roofs, circles for the sun.</>,
            <>Look at colour: bright yellow and blue give contrast and a happy mood.</>,
          ]}
        />
        <Mistake>Calling a shape a line. A line is a mark; a shape is an enclosed form such as a circle, square or triangle.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rhythm and a steady beat',
    content: slide(
      <>
        <Rule>
          Rhythm is a pattern of sounds and beats, made of long and short sounds. A steady beat is an even pulse that stays regular, and it helps musicians and dancers stay together.
        </Rule>
        <BeatRhythm />
        <Worked
          title="Read the picture"
          steps={[
            <>The top row is the steady beat: 4 even pulses, always the same distance apart.</>,
            <>The bottom row is the rhythm: one long sound (1 beat), two short sounds (½ beat each), then two long sounds.</>,
            <>Add them: 1 + ½ + ½ + 1 + 1 = 4 beats, the same four beats as the steady beat.</>,
            <>Keep the beat steady while the rhythm changes.</>,
          ]}
        />
        <Mistake>Mixing up beat and rhythm. The beat stays even; the rhythm is the pattern of long and short sounds on top of it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Body percussion, drama games and movement',
    content: slide(
      <>
        <Rule>
          Body percussion uses the body to make musical sounds, such as clapping and stamping a pattern. A drama game is a short acting activity that uses imagination. A movement phrase is a short sequence of planned movements.
        </Rule>
        <Worked
          title="Build a short performance"
          steps={[
            <>Body percussion: clap, clap, stamp. Repeat it to a steady beat.</>,
            <>Drama game: pretend to be a market seller. It is a short activity that uses imagination.</>,
            <>Movement phrase: step, turn, bend. Plan the order and repeat it the same way each time.</>,
          ]}
        />
        <Mistake>Thinking a movement phrase is random dancing. It is planned: the actions link together in a clear order.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is a line? Which is a shape? What is a drawing on flat paper called?</li>
            <li>Why would an artist paint a stormy sky in dark greys and blues?</li>
            <li>What is rhythm, and what is a steady beat?</li>
            <li>What is body percussion, a drama game and a movement phrase?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A mark that can be straight, curved or zigzag. A triangle. A flat artwork made on a surface.</li>
            <li>Dark, cool colours set a gloomy mood.</li>
            <li>A pattern of sounds and beats. An even pulse that stays regular.</li>
            <li>Clapping and stamping a pattern. A short acting activity that uses imagination. A short sequence of planned movements.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is a line in visual art?',
    options: [
      'A mark that can be straight, curved, or zigzag',
      'Only a colour mixed with white',
      'A block of clay used for sculpture',
      'A sound made by a drum',
    ],
    answer: 'A mark that can be straight, curved, or zigzag',
    explanation: 'Artists use different kinds of lines to guide the eye and create patterns.',
  },
  {
    prompt: 'Which is a shape?',
    options: ['Triangle', 'Whistle', 'Melody', 'Stamping'],
    answer: 'Triangle',
    explanation: 'Shapes are flat enclosed forms such as circles, squares, and triangles.',
  },
  {
    prompt: 'How can colour help an artwork?',
    options: [
      'It can create mood and contrast',
      'It makes every artwork silent',
      'It removes all shapes from the page',
      'It is only used in sculpture',
    ],
    answer: 'It can create mood and contrast',
    explanation: 'Colour can make artwork feel bright, calm, exciting, or balanced.',
  },
  {
    prompt: 'What is a 2D artwork?',
    options: [
      'A flat artwork made on a surface',
      'A dance performed on stage',
      'A game played with a ball',
      'A song with no beat',
    ],
    answer: 'A flat artwork made on a surface',
    explanation: '2D means two-dimensional, so the artwork is flat like a drawing or collage.',
  },
  {
    prompt: 'What is rhythm in music?',
    options: [
      'A pattern of sounds and beats',
      'A colour painted in a circle',
      'A type of art paper only',
      'A rule for lining up quietly',
    ],
    answer: 'A pattern of sounds and beats',
    explanation: 'Rhythm organises long and short sounds into a pattern.',
  },
  {
    prompt: 'What is a steady beat?',
    options: [
      'An even pulse that stays regular',
      'A random sound that changes wildly',
      'A shape drawn with charcoal',
      'A rule for mixing paint',
    ],
    answer: 'An even pulse that stays regular',
    explanation: 'A steady beat helps musicians and dancers stay together.',
  },
  {
    prompt: 'Which activity uses body percussion?',
    options: ['Clapping and stamping a pattern', 'Painting a landscape quietly', 'Reading a map with a ruler', 'Throwing beanbags at cones'],
    answer: 'Clapping and stamping a pattern',
    explanation: 'Body percussion uses the body itself to make musical sounds.',
  },
  {
    prompt: 'What is a drama game?',
    options: [
      'A short acting activity that uses imagination',
      'A written test about grammar rules',
      'A maths puzzle with fractions',
      'A PE relay race around the field',
    ],
    answer: 'A short acting activity that uses imagination',
    explanation: 'Drama games help learners explore ideas, feelings, and characters in playful ways.',
  },
  {
    prompt: 'What is a movement phrase?',
    options: [
      'A short sequence of planned movements',
      'A colour chart for mixing paint',
      'A single loud drum beat only',
      'A poster that explains school rules',
    ],
    answer: 'A short sequence of planned movements',
    explanation: 'A movement phrase links actions together in a clear order.',
  },
];

const CreativeArtsT1 = () => (
  <CapsSubjectTopic
    title="Creative Arts"
    subtitle="Exploring visual art, rhythm, body percussion, and drama"
    learnSteps={learnSteps}
    task="creative-arts-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default CreativeArtsT1;
