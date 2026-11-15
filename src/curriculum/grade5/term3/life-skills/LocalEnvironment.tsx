import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { FlowDiagram } from '../../../../components/diagrams/science/SciencePictures4';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Litter and the three Rs',
    content: slide(
      <>
        <Rule>
          Littering is dropping rubbish on the ground instead of putting it in a bin. We can reduce waste, reuse things and recycle materials such as paper, glass, cans and plastic.
        </Rule>
        <FlowDiagram id="three-rs" title="The three Rs" desc="Three steps in order: reduce, reuse, recycle." nodes={[{ id: 'a', label: 'reduce', x: 28, y: 50, color: '#fcd34d' }, { id: 'b', label: 'reuse', x: 80, y: 50, color: '#86efac' }, { id: 'c', label: 'recycle', x: 132, y: 50, color: '#7dd3fc' }]} edges={[{ from: 'a', to: 'b', label: '' }, { from: 'b', to: 'c', label: '' }]} />
        <Worked
          title="Use the three Rs"
          steps={[
            <>Reduce: carry your own water bottle instead of buying plastic ones.</>,
            <>Reuse: use an empty jar to store things.</>,
            <>Recycle: put cans, paper and glass in the recycling bin.</>,
            <>Never drop rubbish: dropping a chip packet in the street is littering, so put it in a bin.</>,
          ]}
        />
        <Mistake>Thinking littering does no harm. Litter spoils places, blocks drains and can harm animals.</Mistake>
      </>,
    ),
  },
  {
    title: 'Air and water pollution',
    content: slide(
      <>
        <Rule>
          Smoke from factories and cars pollutes the air. Pouring oil or chemicals down a drain pollutes water and harms fish, and it makes water unsafe to use.
        </Rule>
        <Worked
          title="Find the cause"
          steps={[
            <>A factory chimney and a busy road send smoke into the air.</>,
            <>That is air pollution and it is harmful to breathe.</>,
            <>Oil poured down a drain flows into a river.</>,
            <>The river is polluted and the fish and plants in it are harmed.</>,
          ]}
        />
        <Mistake>Thinking cycling or planting flowers pollutes the air. Smoke from factories and vehicles does.</Mistake>
      </>,
    ),
  },
  {
    title: 'Trees and soil',
    content: slide(
      <>
        <Rule>
          When too many trees are cut down (deforestation), animals lose their homes and the air gets less clean. Soil erosion is when wind or water washes or blows away the top layer of soil, which plants need to grow. Planting trees and grass helps to hold the soil.
        </Rule>
        <Worked
          title="Protect the land"
          steps={[
            <>Trees are cut down and the land is left bare.</>,
            <>Animals lose their homes and there are fewer trees to clean the air.</>,
            <>Rain washes the bare topsoil away: this is soil erosion.</>,
            <>Planting trees and grass holds the soil and gives animals homes.</>,
          ]}
        />
        <Mistake>Thinking soil erosion is making compost. Erosion is soil being washed or blown away.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What do we call dropping rubbish on the ground instead of in a bin?</li>
            <li>What are the three Rs?</li>
            <li>Name two things that cause air pollution.</li>
            <li>What do we call wind or water washing away the top layer of soil?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Littering.</li>
            <li>Reduce, reuse, recycle.</li>
            <li>Smoke from factories and from cars.</li>
            <li>Soil erosion.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which action is littering?',
    options: ['Dropping a chip packet in the street', 'Putting a bottle in the recycling bin', 'Planting a tree', 'Sweeping the yard'],
    answer: 'Dropping a chip packet in the street',
    explanation: 'Litter should go in a bin.',
  },
  {
    prompt: 'Reusing a glass jar to store beans is an example of…',
    options: ['reuse', 'pollution', 'erosion', 'deforestation'],
    answer: 'reuse',
    explanation: 'The jar is used again instead of thrown away.',
  },
  {
    prompt: 'Oil poured down a drain is harmful because…',
    options: ['it pollutes water and harms fish', 'it makes plants grow', 'it cleans the river', 'it makes rain'],
    answer: 'it pollutes water and harms fish',
    explanation: 'Oil contaminates water.',
  },
  {
    prompt: 'Cutting down too many trees can cause…',
    options: ['animals to lose their homes', 'more fish', 'cleaner air', 'better soil'],
    answer: 'animals to lose their homes',
    explanation: 'Trees are homes for many animals.',
  },
  {
    prompt: 'Planting grass on bare soil helps to stop…',
    options: ['soil erosion', 'rainfall', 'recycling', 'mining'],
    answer: 'soil erosion',
    explanation: 'Roots hold the soil.',
  },
];

const LocalEnvironment = () => (
  <CapsSubjectTopic
    title="Local Environmental Problems"
    subtitle="Litter, pollution, trees and soil"
    learnSteps={learnSteps}
    task="gr5-life-skills-environment"
    bank={bank}
    apiPath="/api/caps/lsk"
    grade={5}
  />
);

export default LocalEnvironment;
