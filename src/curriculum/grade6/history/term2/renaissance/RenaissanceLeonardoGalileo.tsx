import HisTopic from '../../_shared/HisTopic';
import type { HisItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { TimelineBars } from '../../../../../components/diagrams/history/History6Pictures';
import { FlowSteps } from '../../../../../components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as h from '../../../../../components/diagrams/history/history6';

// CAPS Grade 6 History Term 2: the Renaissance in Europe, with Leonardo da Vinci and Galileo as examples of new ways of looking at the world.
// Dates from history6.ts. Facts to confirm: docs/notes/g6-history-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What was the Renaissance?',
    content: slide(
      <>
        <Rule>Renaissance means &quot;rebirth&quot;. It was a time in Europe, after the Middle Ages, when people became very interested in learning, art and science. They asked questions, looked closely at the world and tried to find out for themselves.</Rule>
        <FlowSteps
          aria="How the Renaissance changed thinking. People ask questions, they observe and test ideas, they make new art, inventions and discoveries, and new ideas spread."
          steps={[
            { label: 'People ask questions' },
            { label: 'They observe and test' },
            { label: 'New art, inventions, discoveries' },
            { label: 'New ideas spread' },
          ]}
        />
        <Worked
          title="What changed"
          steps={[
            <>Before: many people accepted old ideas without testing them.</>,
            <>During the Renaissance: more people observed the world, tested ideas and wrote down what they found.</>,
            <>The printing press (about {h.PRINTING_PRESS_ABOUT}) helped new ideas to spread quickly.</>,
          ]}
        />
        <Mistake>Thinking that the Renaissance happened all over the world at the same time. This was a change in Europe; other parts of the world, such as Africa and Asia, had their own learning and achievements.</Mistake>
      </>,
    ),
  },
  {
    title: 'Leonardo da Vinci',
    content: slide(
      <>
        <Rule>Leonardo da Vinci was born in {h.LEONARDO.born} and died in {h.LEONARDO.died}, so he lived for {h.age(h.LEONARDO)} years. He was a painter, an inventor and a scientist, and he came from Italy. He painted the famous Mona Lisa.</Rule>
        <TimelineBars spans={[h.LEONARDO_SPAN, h.GALILEO_SPAN]} min={1400} max={1700} />
        <Worked
          title="What Leonardo did"
          steps={[
            <>He painted, including the Mona Lisa.</>,
            <>He studied the human body, birds and water by looking closely, and drew what he saw.</>,
            <>He drew plans for machines, such as a flying machine, in his notebooks.</>,
            <>Leonardo lived {h.LEONARDO.died} − {h.LEONARDO.born} = <strong>{h.age(h.LEONARDO)} years</strong>.</>,
          ]}
        />
        <Mistake>Thinking that Leonardo was only a painter. He was also a scientist and an inventor, and that is why he is a good example of the Renaissance.</Mistake>
      </>,
    ),
  },
  {
    title: 'Galileo and the telescope',
    content: slide(
      <>
        <Rule>Galileo was born in {h.GALILEO.born} and died in {h.GALILEO.died}, so he lived for {h.age(h.GALILEO)} years. He was an Italian scientist who used a telescope to look at the sky. He saw that the Moon has mountains and that Jupiter has moons.</Rule>
        <InfoTable
          cols={[{ title: 'Galileo saw', w: 44 }, { title: 'What it showed', w: 56 }]}
          rows={[
            ['Mountains on the Moon', 'The Moon is a world, not\na smooth ball'],
            ['Moons around Jupiter', 'Not everything moves\naround the Earth'],
            ['Many more stars', 'The sky holds much more\nthan people knew'],
          ]}
          aria="A table of what Galileo saw with his telescope. Mountains on the Moon showed that the Moon is a world and not a smooth ball. Moons around Jupiter showed that not everything moves around the Earth. Many more stars showed that the sky holds much more than people knew."
        />
        <Worked
          title="Why Galileo was important"
          steps={[
            <>He used observation and tests, not only old books, to find out about the world.</>,
            <>He supported the idea that the Earth moves around the sun.</>,
            <>Some Church leaders disagreed with him and limited his freedom. Today he is remembered as a great scientist.</>,
          ]}
        />
        <Mistake>Thinking that Galileo invented the telescope. He improved it and was one of the first to use it to study the sky.</Mistake>
      </>,
    ),
  },
  {
    title: 'Leonardo and Galileo compared',
    content: slide(
      <>
        <Rule>Leonardo and Galileo lived at different times, but both looked closely at the world, asked questions and trusted what they observed. Leonardo lived first; Galileo was born {h.GALILEO.born - h.LEONARDO.born} years after him.</Rule>
        <InfoTable
          cols={[{ title: '', w: 24 }, { title: 'Leonardo', w: 38 }, { title: 'Galileo', w: 38 }]}
          rows={[
            ['Lived', `${h.LEONARDO.born} to ${h.LEONARDO.died}`, `${h.GALILEO.born} to ${h.GALILEO.died}`],
            ['Known for', 'Art, inventions', 'The telescope, science'],
            ['Way of working', 'Looked closely\nand drew', 'Observed and tested'],
          ]}
          aria="A table comparing two Renaissance people. Leonardo lived from 1452 to 1519 and is known for art and inventions; he looked closely and drew. Galileo lived from 1564 to 1642 and is known for the telescope and science; he observed and tested."
        />
        <Worked
          title="What they have in common"
          steps={[
            <>Both were curious and asked &quot;why?&quot;.</>,
            <>Both learned from careful observation.</>,
            <>Their work helped later people, including sailors who needed better maps and instruments.</>,
          ]}
        />
        <Mistake>Thinking that Leonardo and Galileo lived at the same time. About {h.GALILEO.born - h.LEONARDO.born} years separate their births.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>What does the word Renaissance mean?</>,
            <>Name two things Leonardo da Vinci was.</>,
            <>What did Galileo use to look at the sky?</>,
            <>Who lived first, Leonardo or Galileo?</>,
          ]}
          answers={[
            <><strong>Rebirth</strong>.</>,
            <>Any two of: a <strong>painter</strong>, an <strong>inventor</strong>, a <strong>scientist</strong>.</>,
            <>A <strong>telescope</strong>.</>,
            <><strong>Leonardo</strong> (born {h.LEONARDO.born}; Galileo was born {h.GALILEO.born}).</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from the lesson's helper; the bank test recomputes every key independently).
export const bank: HisItem[] = [
  { prompt: "The word Renaissance comes from French. What does it mean in English?", options: ["Rebirth","Voyage","Kingdom","Harvest"], answer: "Rebirth", explanation: "Renaissance means rebirth: a new interest in learning, art and science." },
  { prompt: "In which continent did the Renaissance take place?", options: ["Africa","Europe","Australia","Antarctica"], answer: "Europe", explanation: "The Renaissance was a change in thinking in Europe." },
  { prompt: "Which Italian painted the famous Mona Lisa?", options: ["Galileo","Marco Polo","Leonardo da Vinci","Kublai Khan"], answer: "Leonardo da Vinci", explanation: "Leonardo da Vinci painted the Mona Lisa." },
  { prompt: "Leonardo da Vinci was born in 1452 and died in 1519. How many years did he live?", options: ["57 years","77 years","67 months","67 years"], answer: "67 years", explanation: "1519 − 1452 = 67 years." },
  { prompt: "Galileo was born in 1564 and died in 1642. How many years did he live?", options: ["78 years","68 years","88 years","78 months"], answer: "78 years", explanation: "1642 − 1564 = 78 years." },
  { prompt: "Which instrument did Galileo use to study the sky?", options: ["A compass","A telescope","A printing press","A clock"], answer: "A telescope", explanation: "Galileo used a telescope to look at the Moon, Jupiter and the stars." },
  { prompt: "What did Galileo see on the Moon?", options: ["Oceans","Forests","Mountains","Cities"], answer: "Mountains", explanation: "Through his telescope Galileo saw mountains on the Moon." },
  { prompt: "What did Galileo find around the planet Jupiter?", options: ["Rings of gold","Many cities","A second sun","Moons"], answer: "Moons", explanation: "Galileo saw moons moving around Jupiter, so not everything moves around the Earth." },
  { prompt: "Which of these was Leonardo da Vinci?", options: ["A painter, inventor and scientist","A sailor and trader only","A king of Spain","A soldier and farmer"], answer: "A painter, inventor and scientist", explanation: "Leonardo painted, invented and studied nature as a scientist." },
  { prompt: "Who was born first?", options: ["Galileo","Leonardo da Vinci","They were born in the same year","Neither one was born yet"], answer: "Leonardo da Vinci", explanation: "Leonardo was born in 1452; Galileo in 1564." },
  { prompt: "How did Renaissance scientists find out about the world?", options: ["By guessing only","By never asking questions","By observing and testing","By copying old books only"], answer: "By observing and testing", explanation: "They looked closely, tested ideas and wrote down what they found." },
  { prompt: "Which invention helped new ideas to spread in Europe from about 1450?", options: ["The telephone","The aeroplane","The television","The printing press"], answer: "The printing press", explanation: "Printed books could be made faster than copying by hand." },
  { prompt: "Which idea did Galileo support?", options: ["That the Earth moves around the sun","That the sun moves around the Earth","That the Moon is made of light","That stars are small lamps"], answer: "That the Earth moves around the sun", explanation: "Galileo supported the idea that the Earth moves around the sun." },
  { prompt: "What did Leonardo and Galileo have in common?", options: ["They lived in the same year","They looked closely and asked questions","They sailed to Africa together","They ruled the same country"], answer: "They looked closely and asked questions", explanation: "Both were curious and learned from careful observation." },
];

const RenaissanceLeonardoGalileo = () => (
  <HisTopic
    title="The Renaissance: Leonardo da Vinci and Galileo"
    subtitle="A time of new ideas in Europe, and two people who looked closely at the world"
    learnSteps={learnSteps}
    task="gr6-renaissance-t2"
    bank={bank}
  />
);

export default RenaissanceLeonardoGalileo;
