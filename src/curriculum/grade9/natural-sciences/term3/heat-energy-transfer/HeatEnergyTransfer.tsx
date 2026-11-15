import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { HeatTransfer } from '../../../../../components/diagrams/science/SciencePictures';
import { EnergyProfile, HotColdParticles } from '../../../../../components/diagrams/science/SciencePictures10';
import { heatChange, reactionKind } from '../../../../../components/diagrams/science/science9bHelpers';

// Whether a reaction releases or absorbs heat comes from a tested helper (science9b.test.ts).
const kindDown = reactionKind(100, 40);
const kindUp = reactionKind(40, 100);
const released = heatChange(100, 40);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Heat and temperature',
    content: slide(
      <>
        <Rule>
          Heat is energy moving from hot to cold. Temperature shows how fast the particles move: the hotter an object, the faster its particles move on average.
        </Rule>
        <HotColdParticles />
        <Worked
          title="Compare a cup of boiling water with a bath of warm water"
          steps={[<>The boiling water has the higher temperature: its particles move faster.</>, <>The bath holds far more water, so it holds more heat energy in total.</>, <>When the two touch, heat flows from the hotter to the colder one until their temperatures are equal.</>]}
        />
        <Mistake>Saying heat and temperature are the same thing. Heat is energy that is transferred because of a temperature difference; temperature tells you how fast the particles move.</Mistake>
      </>,
    ),
  },
  {
    title: 'Conduction, convection and radiation',
    content: slide(
      <>
        <Rule>
          Conduction is heat moving through a solid from particle to particle. Convection is heat carried by moving fluids, such as hot air rising in a room. Radiation is heat travelling as waves without needing a medium.
        </Rule>
        <HeatTransfer />
        <Worked
          title="Name the way heat travels"
          steps={[<>A metal spoon heats up in a fire: conduction, without the material moving.</>, <>Hot air rises in a room and cold air sinks: convection, in a moving fluid (air or water).</>, <>The Sun&apos;s heat reaches Earth as electromagnetic waves, through space, with no medium: radiation.</>]}
        />
        <Mistake>Saying that radiation needs air to carry it. Heat from the Sun crosses empty space.</Mistake>
      </>,
    ),
  },
  {
    title: 'Insulators and saving energy',
    content: slide(
      <>
        <Rule>
          An insulator is something that slows down heat transfer. Good insulators include wool, plastic, wood, foam and trapped air; metals such as copper, iron and aluminium conduct heat well.
        </Rule>
        <Terms
          rows={[
            ['Insulators', 'wool, plastic, wood, foam, air gaps: slow down heat transfer'],
            ['Conductors', 'metals such as copper, iron and aluminium: let heat through easily'],
            ['In buildings', 'insulation keeps heat in during winter and out in summer, so it saves energy'],
          ]}
        />
        <Worked
          title="Choose the material"
          steps={[<>A jersey made of wool is a good insulator, so it keeps your body heat in.</>, <>A pot handle made of wood or plastic slows the heat from the pot.</>, <>Insulation in the roof reduces heat transfer through walls and roofs, so a building needs less heating and cooling.</>]}
        />
        <Mistake>Thinking an insulator makes things cold. It only slows heat transfer, so it keeps heat in during winter and out in summer.</Mistake>
      </>,
    ),
  },
  {
    title: 'Heat in chemical reactions',
    content: slide(
      <>
        <Rule>
          An exothermic reaction releases heat. An endothermic reaction absorbs heat from its surroundings. Combustion is exothermic.
        </Rule>
        <EnergyProfile />
        <Worked
          title="Release or absorb?"
          steps={[<>Burning (combustion) gives out a lot of heat: {kindDown}. The products have {released} units less energy in this example.</>, <>Neutralisation also releases heat: {kindDown}.</>, <>An instant cold pack gets cold because it absorbs heat from your skin: {kindUp}.</>]}
        />
        <Mistake>Thinking that an exothermic reaction always starts by itself. Many need a spark or heat to get going, as a fire does, but once they are going they release heat.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is conduction? Which is an example of convection? How does heat from the Sun reach Earth?</li>
            <li>What is an insulator? Which is a good insulator? Why do we use insulation in buildings?</li>
            <li>What does an exothermic reaction do? Is combustion exothermic or endothermic?</li>
            <li>What does temperature measure? What is the difference between heat and temperature?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Heat moving through a solid from particle to particle. Hot air rising in a room. Radiation.</li>
            <li>Something that slows down heat transfer. Wool. To keep heat in during winter and out in summer.</li>
            <li>Releases heat. Exothermic.</li>
            <li>How fast particles move. Heat is energy moving from hot to cold; temperature shows how fast particles move.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is conduction?',
    options: ['Heat moving through a gas or a liquid as it flows', 'Heat moving through a solid from particle to particle', 'Heat moving through space as waves of energy', 'Heat being measured with a thermometer in a liquid'],
    answer: 'Heat moving through a solid from particle to particle',
    explanation: 'Conduction is heat transfer through a solid without the material moving.',
  },
  {
    prompt: 'Which is an example of convection?',
    options: ['A heated spoon', 'Hot air rising in a room', 'Sunlight warming you', 'A hot plate warming a pot'],
    answer: 'Hot air rising in a room',
    explanation: 'Convection is heat transfer by moving fluids (air or water).',
  },
  {
    prompt: 'How does heat from the sun reach Earth?',
    options: ['Conduction', 'Convection', 'Radiation', 'None of the above'],
    answer: 'Radiation',
    explanation: 'Heat from the sun travels as electromagnetic waves without needing a medium.',
  },
  {
    prompt: 'What is an insulator?',
    options: ['Something that speeds up heat', 'Something that slows down heat transfer', 'A type of metal', 'A heat source'],
    answer: 'Something that slows down heat transfer',
    explanation: 'Insulators prevent or slow heat transfer.',
  },
  {
    prompt: 'Which is a good insulator?',
    options: ['Copper wire', 'Wool', 'An iron nail', 'Aluminum'],
    answer: 'Wool',
    explanation: 'Wool is a good insulator; metals conduct heat well.',
  },
  {
    prompt: 'What does an exothermic reaction do?',
    options: ['Absorbs heat', 'Releases heat', 'Creates light only', 'Changes colour'],
    answer: 'Releases heat',
    explanation: 'Exothermic reactions release energy as heat.',
  },
  {
    prompt: 'Is combustion exothermic or endothermic?',
    options: ['Endothermic', 'Exothermic', 'Neither', 'Depends on the fuel'],
    answer: 'Exothermic',
    explanation: 'Combustion (burning) is exothermic and releases a lot of heat.',
  },
  {
    prompt: 'Why do we use insulation in buildings?',
    options: ['To let heat escape in winter so the house feels cooler', 'To keep heat in during winter and out in summer', 'To change the colour of the walls of the building', 'To make the walls of the house look neater'],
    answer: 'To keep heat in during winter and out in summer',
    explanation: 'Insulation saves energy by reducing heat transfer through walls and roofs.',
  },
  {
    prompt: 'What does temperature measure?',
    options: ['Total heat energy', 'How fast particles move', 'The insulation of a material', 'The type of material'],
    answer: 'How fast particles move',
    explanation: 'Temperature is a measure of particle motion; higher temperature = faster motion.',
  },
  {
    prompt: 'What is the difference between heat and temperature?',
    options: ['Heat is the same as temperature, but it is measured in a different unit', 'Heat is energy moving from hot to cold; temperature shows how fast particles move', 'Heat is how cold a thing is, while temperature is how hot a thing is', 'Temperature is the total energy, while heat is how fast particles move'],
    answer: 'Heat is energy moving from hot to cold; temperature shows how fast particles move',
    explanation: 'Heat is energy that is transferred because of a temperature difference. Temperature measures how fast the particles move, which is how energetic they are.',
  },
];

const HeatEnergyTransfer = () => (
  <CapsSubjectTopic
    title="Heat and Energy Transfer"
    subtitle="How energy moves and transforms in our world"
    learnSteps={learnSteps}
    task="gr9-heat-energy-transfer-t3"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default HeatEnergyTransfer;
