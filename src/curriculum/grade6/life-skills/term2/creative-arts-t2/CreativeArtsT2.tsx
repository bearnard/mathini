import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { BeatRhythm, PatternRow } from '../../../../../components/diagrams/lifeskills/LifeSkillsPictures';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Texture and pattern',
    content: slide(
      <>
        <Rule>Texture describes how a surface feels or looks: rough, smooth, bumpy or soft. A pattern is a design that repeats.</Rule>
        <PatternRow />
        <Worked
          title="Find the pattern"
          steps={[
            <>Look for one unit: here a circle, a square and a triangle.</>,
            <>See it repeat: the same three shapes come again, and again.</>,
            <>A design that repeats is a pattern. Patterns can repeat shapes, colours, lines or sounds.</>,
            <>Texture is different: feel a tree bark (rough) and a leaf (smooth) and describe how each surface feels or looks.</>,
          ]}
        />
        <Mistake>Calling any design a pattern. A pattern must repeat in an organised way; texture is about how a surface feels or looks.</Mistake>
      </>,
    ),
  },
  {
    title: 'Printmaking and collage',
    content: slide(
      <>
        <Rule>
          Printmaking uses a stamp, block or other surface to repeat an image, such as pressing a painted shape onto paper again and again. A collage is an artwork made by joining different pieces.
        </Rule>
        <Worked
          title="Make a print and a collage"
          steps={[
            <>Paint a shape on a sponge or block.</>,
            <>Press it onto paper again and again: the repeated image is a print, and the repeat makes a pattern.</>,
            <>For a collage, join different pieces (paper, fabric or other materials) into one composition.</>,
          ]}
        />
        <Mistake>Thinking a print is a single drawing. Printmaking repeats the same image with a stamp or block; a collage joins different pieces.</Mistake>
      </>,
    ),
  },
  {
    title: 'Puppetry: story, voice and movement',
    content: slide(
      <>
        <Rule>
          A clear puppet story has a beginning, middle and end. Show that two puppets are different characters by using different voices and movements.
        </Rule>
        <Worked
          title="Plan a puppet show"
          steps={[
            <>Beginning: a tortoise and a hare meet.</>,
            <>Middle: they have a race and something goes wrong.</>,
            <>End: the story finishes. A clear sequence helps the audience understand what happens.</>,
            <>Give the tortoise a slow, deep voice and slow movements, and the hare a quick, high voice and fast movements.</>,
          ]}
        />
        <Mistake>Using the same voice and movement for every puppet. Different voices and movements help the audience recognise different characters.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rhythm patterns, rehearsal and presentation',
    content: slide(
      <>
        <Rule>
          A rhythm pattern is a repeated sequence of beats or sounds. Rehearsal helps the performance become smoother. This term you make prints and tell a story with puppets, then present and reflect.
        </Rule>
        <BeatRhythm />
        <Worked
          title="Prepare to present"
          steps={[
            <>Choose a rhythm pattern to accompany your puppet show. Clap the picture’s pattern (long, short, short, long, long) and then repeat it: a repeated sequence of beats or sounds.</>,
            <>Rehearse it several times to practise and improve your timing and confidence.</>,
            <>Present your artwork or story clearly.</>,
            <>Reflect: notice what worked and what can improve.</>,
          ]}
        />
        <Mistake>Presenting without rehearsal. Rehearsal gives you a chance to practise and improve timing and confidence.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does texture describe? What is a pattern?</>,
          <>Which activity is printmaking? What is a collage?</>,
          <>Which order tells a clear puppet story? How can you show two puppets are different characters?</>,
          <>What is a rhythm pattern? Why rehearse? What does Creative Arts combine this term?</>,
        ]}
        answers={[
          <>How a surface feels or looks. A design that repeats.</>,
          <>Pressing a painted shape onto paper again and again. An artwork made by joining different pieces.</>,
          <>Beginning, middle and end. Use different voices and movements.</>,
          <>A repeated sequence of beats or sounds. It helps the performance become smoother. Making prints and telling a story with puppets.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What does texture describe in an artwork?',
    options: ['How a surface feels or looks', 'How many pages a book has', 'How loudly someone sings', 'How fast a runner moves'],
    answer: 'How a surface feels or looks',
    explanation: 'Texture is the rough, smooth, bumpy, or soft look and feel of a surface.',
  },
  {
    prompt: 'What is a pattern?',
    options: ['A design that repeats', 'A colour mixed with water only', 'A single line with no change', 'A story told once and forgotten'],
    answer: 'A design that repeats',
    explanation: 'Patterns repeat shapes, colours, lines, or sounds in an organised way.',
  },
  {
    prompt: 'Which activity is an example of printmaking?',
    options: ['Pressing a painted shape onto paper again and again', 'Drawing with an eraser and nothing else', 'Reading a story silently to yourself', 'Cutting the grass on the field at school'],
    answer: 'Pressing a painted shape onto paper again and again',
    explanation: 'Printmaking uses a stamp, block, or other surface to repeat an image.',
  },
  {
    prompt: 'What is a collage?',
    options: ['An artwork made by joining different pieces', 'A dance that is done without any music', 'A ball game that is played outdoors', 'A poem that has only one word in it'],
    answer: 'An artwork made by joining different pieces',
    explanation: 'Collage combines papers, fabrics, or other materials into one composition.',
  },
  {
    prompt: 'Which order helps tell a clear story in a puppet show?',
    options: ['Beginning, middle, and end', 'End, middle, and beginning only', 'Only one long ending', 'Random actions with no sequence'],
    answer: 'Beginning, middle, and end',
    explanation: 'A clear sequence helps the audience understand what happens in the story.',
  },
  {
    prompt: 'What is a rhythm pattern?',
    options: ['A repeated sequence of beats or sounds', 'A type of paintbrush for art', 'A shape that is cut from cardboard', 'A way to sharpen a pencil neatly'],
    answer: 'A repeated sequence of beats or sounds',
    explanation: 'Rhythm patterns organise beats so that listeners can hear repetition.',
  },
  {
    prompt: 'How can a performer show that two puppets are different characters?',
    options: ['Use different voices and movements', 'Keep every voice exactly the same', 'Hide both puppets behind the table', 'Stop the story after one line'],
    answer: 'Use different voices and movements',
    explanation: 'Changes in voice and movement help the audience recognise different characters.',
  },
  {
    prompt: 'Why is rehearsal important before a presentation?',
    options: ['It helps the performance become smoother', 'It removes the need for any planning', 'It makes the audience leave early', 'It means you cannot improve anything'],
    answer: 'It helps the performance become smoother',
    explanation: 'Rehearsal gives learners a chance to practise and improve timing and confidence.',
  },
  {
    prompt: 'Which choice best fits Creative Arts in this term?',
    options: ['Making prints and telling a story with puppets', 'Memorising the multiplication tables', 'Writing a science test about magnets', 'Training for a relay race and nothing else'],
    answer: 'Making prints and telling a story with puppets',
    explanation: 'This term combines visual art techniques with storytelling and performance.',
  },
];

const CreativeArtsT2 = () => (
  <CapsSubjectTopic
    title="Creative Arts"
    subtitle="Texture, pattern, printmaking, storytelling, puppetry, and rhythm"
    learnSteps={learnSteps}
    task="creative-arts-t2"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default CreativeArtsT2;
