import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Compare, Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { EarthLayers, PlateMotions } from '../../../../../components/diagrams/science/SciencePictures10';
import { LAYERS, thickestLayer, thickness } from '../../../../../components/diagrams/science/science9bHelpers';

// The layer thicknesses come from a tested helper (science9b.test.ts), using standard values in km.
const nb = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const mantleKm = nb(thickness('mantle'));
const outerKm = nb(thickness('outer core'));
const crustKm = thickness('crust');
const centreKm = nb(LAYERS[LAYERS.length - 1].to);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'The layers of the Earth',
    content: slide(
      <>
        <Rule>
          The Earth has layers: the crust, the mantle and the core. The mantle is the thickest layer, between the crust and the core. The lithosphere is the crust together with the rigid top of the mantle.
        </Rule>
        <EarthLayers />
        <Worked
          title="Compare the layers (standard values)"
          steps={[<>The crust is very thin: about {crustKm} km on average.</>, <>The mantle is about {mantleKm} km thick: the thickest layer.</>, <>The outer core, about {outerKm} km thick, is liquid, and the inner core in the middle is solid. The centre is about {centreKm} km down. The {thickestLayer()} is the thickest layer.</>]}
        />
        <Mistake>Thinking the core is the thickest layer because it is at the centre. The mantle is thicker than the outer core, and thicker than the inner core&apos;s radius.</Mistake>
      </>,
    ),
  },
  {
    title: 'Minerals and rocks',
    content: slide(
      <>
        <Rule>
          A mineral is a natural solid with a crystal structure. Rocks are made of minerals. Igneous rocks form when molten rock cools; sedimentary rocks form from compressed sediment; metamorphic rocks form under heat and pressure.
        </Rule>
        <Terms
          rows={[
            ['Mineral', 'a naturally occurring crystalline solid substance'],
            ['Igneous', 'molten rock (magma or lava) cools and solidifies: granite, basalt'],
            ['Sedimentary', 'sediment is compressed and cemented: sandstone'],
            ['Metamorphic', 'rock changed by heat and pressure: marble'],
          ]}
        />
        <Worked
          title="Name the rock type"
          steps={[<>Basalt formed when lava cooled: igneous.</>, <>Sandstone formed from compressed sand: sedimentary.</>, <>Marble formed when rock was changed by heat and pressure: metamorphic.</>]}
        />
        <Mistake>Thinking minerals and rocks are the same thing. A rock is made of one or more minerals.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tectonic plates',
    content: slide(
      <>
        <Rule>
          Tectonic plates are large sections of the crust (the lithosphere) that slowly move. The movement of tectonic plates causes earthquakes and volcanoes.
        </Rule>
        <PlateMotions />
        <Worked
          title="Plates and their effects"
          steps={[<>Plates can diverge (move apart), converge (collide) or slide past each other.</>, <>When plates suddenly shift, they release energy: an earthquake.</>, <>At some boundaries rock melts and rises to form volcanoes.</>]}
        />
        <Mistake>Thinking the plates move fast enough to see. They move slowly, a few centimetres a year, but over millions of years this builds mountains and oceans.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mining',
    content: slide(
      <>
        <Rule>
          Mining is taking minerals and fuels out of the ground. It can cause pollution, loss of habitat and dirty water.
        </Rule>
        <Compare
          left={{ title: 'Benefits', tone: 'emerald', rows: ['jobs', 'minerals and fuels we use every day', 'money for the economy'] }}
          right={{ title: 'Environmental costs', tone: 'amber', rows: ['pollution of air and land', 'loss of habitat', 'dirty water'] }}
        />
        <Worked
          title="Weigh up a new mine"
          steps={[<>List the benefits: jobs and income.</>, <>List the costs: pollution, loss of habitat and dirty water.</>, <>Mining has significant environmental costs despite its economic benefits, so careful planning and clean-up matter.</>]}
        />
        <Mistake>Looking only at the jobs a mine creates. The environmental impact is part of the full picture.</Mistake>
      </>,
    ),
  },
  {
    title: 'Fossil fuels and renewable resources',
    content: slide(
      <>
        <Rule>
          Fossil fuels are non-renewable fuels that came from ancient life. They are non-renewable because they take millions of years to form and we use them faster. Solar energy is renewable.
        </Rule>
        <Terms
          rows={[
            ['Fossil fuels', 'coal, oil and natural gas, formed from ancient organisms and burned for energy'],
            ['Non-renewable', 'they take millions of years to form, and we use them much faster'],
            ['Renewable', 'solar, wind, water and biofuel: naturally replaced; the Sun continuously provides solar energy'],
          ]}
        />
        <Worked
          title="Renewable or not?"
          steps={[<>Coal formed over millions of years from ancient plants: non-renewable.</>, <>Sunlight is provided by the Sun all the time: solar energy is renewable.</>, <>We burn fuels far faster than nature makes them, so they will run out.</>]}
        />
        <Mistake>Calling a fuel renewable because there is a lot of it. Renewable means it is naturally replaced as fast as we use it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a mineral? Which of the crust, mantle and core is the thickest layer?</>,
          <>How do igneous rocks form? What are tectonic plates? What causes earthquakes?</>,
          <>What is mining? Name one way mining harms the environment.</>,
          <>What are fossil fuels? Why can we run out of them? Name a renewable resource.</>,
        ]}
        answers={[
          <>A natural solid with a crystal structure. The mantle.</>,
          <>When molten rock cools. Large sections of the crust that slowly move. Movement of tectonic plates.</>,
          <>Taking minerals and fuels out of the ground. It can cause pollution, loss of habitat and dirty water.</>,
          <>Non-renewable fuels that came from ancient life. They take millions of years to form and we use them faster. Solar energy.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a mineral?',
    options: ['A type of rock that is made of several minerals', 'A natural solid with a crystal structure', 'A fuel made from the remains of old plants', 'A shiny metal that can be dug from the ground only'],
    answer: 'A natural solid with a crystal structure',
    explanation: 'Minerals are naturally occurring, crystalline solid substances.',
  },
  {
    prompt: 'Which layer of Earth is thickest?',
    options: ['Crust', 'Mantle', 'Inner core', 'Lithosphere'],
    answer: 'Mantle',
    explanation: 'The mantle is the thickest layer, between the crust and core.',
  },
  {
    prompt: 'How do igneous rocks form?',
    options: ['From sediment', 'From compressed layers', 'When molten rock cools', 'From heat and pressure'],
    answer: 'When molten rock cools',
    explanation: 'Igneous rocks form when magma or lava solidifies.',
  },
  {
    prompt: 'What are tectonic plates?',
    options: ['Layers of rock that lie flat under the soil', 'Large sections of the crust that slowly move', 'Minerals that form crystals in the rocks of the crust', 'Fossils that are found in the layers of rock'],
    answer: 'Large sections of the crust that slowly move',
    explanation: 'Tectonic plates are large sections of the lithosphere that move slowly.',
  },
  {
    prompt: 'What causes earthquakes?',
    options: ['Ocean waves', 'Wind', 'Movement of tectonic plates', 'Temperature changes'],
    answer: 'Movement of tectonic plates',
    explanation: 'Earthquakes occur when tectonic plates suddenly shift and release energy.',
  },
  {
    prompt: 'What is mining?',
    options: ['Finding water from deep below the ground', 'Taking minerals and fuels out of the ground', 'Planting crops on soil that is rich in minerals', 'Building roads across the hills and valleys'],
    answer: 'Taking minerals and fuels out of the ground',
    explanation: 'Mining is the industrial process of removing valuable materials from the Earth.',
  },
  {
    prompt: 'What are fossil fuels?',
    options: ['Coal only, because oil and gas are made in a lab', 'Non-renewable fuels that came from ancient life', 'Fuels that renew themselves in a few years', 'Minerals that are mined and used to make metals'],
    answer: 'Non-renewable fuels that came from ancient life',
    explanation: 'Fossil fuels include coal, oil, and gas formed from ancient life.',
  },
  {
    prompt: 'Why are fossil fuels non-renewable?',
    options: ['They refill themselves within a few years of being used', 'They are in endless supply, so they can never run out', 'They take millions of years to form and we use them faster', 'They are renewable, so they come back each year'],
    answer: 'They take millions of years to form and we use them faster',
    explanation: 'Fossil fuels form over geological time scales much slower than we consume them.',
  },
  {
    prompt: 'Which is a renewable resource?',
    options: ['Coal', 'Oil', 'Natural gas', 'Solar energy'],
    answer: 'Solar energy',
    explanation: 'Solar energy is renewable; the sun continuously provides it.',
  },
  {
    prompt: 'What is an environmental impact of mining?',
    options: ['It has no effect, because mines are far from towns', 'It brings only good effects, such as jobs and wealth', 'It can cause pollution, loss of habitat and dirty water', 'It is always good, since the land is replanted later'],
    answer: 'It can cause pollution, loss of habitat and dirty water',
    explanation: 'Mining has significant environmental costs despite its economic benefits.',
  },
];

const LithosphereEarthResources = () => (
  <CapsSubjectTopic
    title="Lithosphere and Earth Resources"
    subtitle="Rocks, plate tectonics, and sustainable resource use"
    learnSteps={learnSteps}
    task="gr9-lithosphere-earth-resources-t4"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default LithosphereEarthResources;
