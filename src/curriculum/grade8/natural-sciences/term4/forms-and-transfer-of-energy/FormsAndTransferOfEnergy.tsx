import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { HeatTransfer } from '../../../../../components/diagrams/science/SciencePictures';
import { BlackWhiteSurfaces, EnergyChain } from '../../../../../components/diagrams/science/SciencePictures5';
import { conserved, wastedEnergy } from '../../../../../components/diagrams/science/lifeTechHelpers';

// The torch example comes from tested helpers (lifeTech.test.ts).
const input = 10;
const light = 2;
const heat = wastedEnergy(input, light);
const total = conserved(input, [light, heat]) ? input : NaN;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Forms of energy',
    content: slide(
      <>
        <Rule>
          Energy appears in different forms: heat, light, sound, chemical, electrical and mechanical.
        </Rule>
        <Terms
          rows={[
            ['Heat', 'the energy of the moving particles in a hot object'],
            ['Light and sound', 'energy that travels as waves and that we see or hear'],
            ['Chemical', 'energy stored in food, fuel and batteries'],
            ['Electrical', 'energy carried by an electric current'],
            ['Mechanical', 'energy of movement or position'],
          ]}
        />
        <Worked
          title="Name the form"
          steps={[<>Energy stored in a battery is chemical energy.</>, <>A fan spinning has mechanical energy.</>, <>A speaker playing music gives out sound energy.</>]}
        />
        <Mistake>Saying a battery stores electrical energy. A battery stores chemical energy, and converts it to electrical energy when it is connected in a circuit.</Mistake>
      </>,
    ),
  },
  {
    title: 'Energy changes and conservation',
    content: slide(
      <>
        <Rule>
          Energy changes from one form to another along an energy chain. Energy cannot be made or destroyed, only changed or moved. This is conservation of energy.
        </Rule>
        <EnergyChain
          id="torch"
          steps={[{ label: 'chemical', color: '#fbbf24' }, { label: 'electrical', color: '#7dd3fc' }, { label: 'light', color: '#fde047' }]}
          aside="some energy also becomes heat"
        />
        <Worked
          title={`A torch battery gives ${input} J of chemical energy`}
          steps={[
            <>The chain is: chemical to electrical to light.</>,
            <>Say {light} J leaves as light. The rest, {input} − {light} = {heat} J, warms the bulb and the air.</>,
            <>{light} J + {heat} J = {total} J: the total energy is the same as before.</>,
          ]}
        />
        <Mistake>Saying that the energy that becomes heat is lost or destroyed. It still exists. It has spread into the surroundings, where it is no longer useful.</Mistake>
      </>,
    ),
  },
  {
    title: 'How heat travels',
    content: slide(
      <>
        <Rule>
          Heat is transferred by <strong>conduction</strong>, <strong>convection</strong> and <strong>radiation</strong>.
        </Rule>
        <HeatTransfer />
        <Worked
          title="Name the way heat travels"
          steps={[
            <>Heat reaches your hand through a metal spoon in hot soup: conduction. Direct particle collisions pass the heat along in a solid.</>,
            <>In liquids and gases, warmer, less dense fluid rises and cooler fluid sinks, so the movement of particles carries heat: convection.</>,
            <>The Sun warms Earth through radiation. Electromagnetic waves carry the energy and need no medium.</>,
          ]}
        />
        <Mistake>Thinking radiation needs air. The energy of the Sun crosses empty space to reach Earth.</Mistake>
      </>,
    ),
  },
  {
    title: 'Insulators and surface colour',
    content: slide(
      <>
        <Rule>
          A good thermal insulator, such as plastic foam, traps air and reduces heat transfer. A black surface absorbs more radiant energy than a white surface, so it usually heats up faster in sunlight.
        </Rule>
        <BlackWhiteSurfaces />
        <Worked
          title="Choose the surface"
          steps={[
            <>A black car roof absorbs more radiant energy from the Sun, so it gets hot faster than a white roof.</>,
            <>A white house wall reflects more of the sunlight, so the house stays cooler.</>,
            <>A plastic foam cup is a good insulator: the trapped air slows heat transfer.</>,
          ]}
        />
        <Mistake>Thinking black surfaces make heat. They absorb more of the radiant energy that is already arriving.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Give an example of chemical energy. Which sequence shows the energy transfer in a torch?</li>
            <li>How is heat mostly transferred through a metal spoon? Through liquids and gases by the movement of particles?</li>
            <li>How does the Sun warm Earth? What does conservation of energy mean?</li>
            <li>Name a good thermal insulator. Why does a black surface heat up faster in sunlight?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Energy stored in a battery. Chemical to electrical to light.</li>
            <li>Conduction. Convection.</li>
            <li>Radiation. Energy cannot be made or destroyed, only changed or moved.</li>
            <li>Plastic foam. It absorbs more radiant energy.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which option is an example of chemical energy?',
    options: ['Energy stored in a battery', 'Sound from a speaker', 'Light from the Sun', 'Heat from a stove plate'],
    answer: 'Energy stored in a battery',
    explanation: 'Batteries store energy chemically before converting it to electrical energy.',
  },
  {
    prompt: 'How is heat mostly transferred through a metal spoon in hot soup?',
    options: ['Conduction', 'Convection', 'Radiation only', 'Evaporation'],
    answer: 'Conduction',
    explanation: 'Conduction transfers heat through direct particle collisions in solids.',
  },
  {
    prompt: 'Which process mainly transfers heat in liquids and gases by movement of particles?',
    options: ['Convection', 'Conduction', 'Reflection', 'Diffusion'],
    answer: 'Convection',
    explanation: 'Convection involves warmer, less dense fluid rising and cooler fluid sinking.',
  },
  {
    prompt: 'The Sun warms Earth mainly through...',
    options: ['Radiation', 'Conduction through space', 'Convection in vacuum', 'Direct contact transfer'],
    answer: 'Radiation',
    explanation: 'Radiation transfers energy by electromagnetic waves and does not need a medium.',
  },
  {
    prompt: 'Which sequence shows an energy transfer in a torch?',
    options: ['Chemical to electrical to light', 'Light to chemical to sound', 'Mechanical to nuclear to light', 'Heat to gravitational to chemical'],
    answer: 'Chemical to electrical to light',
    explanation: 'A torch battery converts chemical energy to electrical, then to light.',
  },
  {
    prompt: 'What does conservation of energy mean?',
    options: ['Energy cannot be made or destroyed, only changed or moved', 'Energy is always lost completely in any process', 'Only electrical energy can be conserved', 'Conserved energy never changes from one form'],
    answer: 'Energy cannot be made or destroyed, only changed or moved',
    explanation: 'Total energy remains constant, though forms can change.',
  },
  {
    prompt: 'Which material is generally a good thermal insulator?',
    options: ['Plastic foam', 'Copper', 'Aluminium', 'Steel'],
    answer: 'Plastic foam',
    explanation: 'Foam traps air and reduces heat transfer.',
  },
  {
    prompt: 'Why does a black surface usually heat up faster in sunlight than a white surface?',
    options: ['It absorbs more radiant energy', 'It creates more gravity', 'It blocks all conduction', 'It has no particles'],
    answer: 'It absorbs more radiant energy',
    explanation: 'Dark surfaces absorb more radiation and usually warm faster.',
  },
];

const FormsAndTransferOfEnergy = () => (
  <CapsSubjectTopic
    title="Forms and Transfer of Energy"
    subtitle="Energy forms, transfers, and conservation in everyday systems"
    learnSteps={learnSteps}
    task="gr8-forms-and-transfer-of-energy-t4"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default FormsAndTransferOfEnergy;
