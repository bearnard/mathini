import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Compare } from '../../../../../components/diagrams/science/ScienceBlocks';
import { FloodPlain, PlateBoundary } from '../../../../../components/diagrams/geography/GeoPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Plates, earthquakes and volcanoes',
    content: slide(
      <>
        <Rule>
          Most major earthquakes and volcanoes happen where tectonic plates interact. The movement of tectonic plates causes them. Volcanic zones are areas where volcanoes are common.
        </Rule>
        <PlateBoundary />
        <Worked
          title="Which map shows earthquake-prone areas?"
          steps={[
            <>Earthquakes line up with plate boundaries, so a tectonic plate map is the best map to show where they are common.</>,
            <>Where one plate slides under another, rock melts and can rise to form volcanoes. Places with many volcanoes are called volcanic zones.</>,
            <>The movement along the boundary also causes earthquakes.</>,
          ]}
        />
        <Mistake>Thinking volcanoes and earthquakes happen anywhere at random. They cluster along plate boundaries.</Mistake>
      </>,
    ),
  },
  {
    title: 'Floods',
    content: slide(
      <>
        <Rule>
          A river that bursts its banks after days of rain causes a flood. Flooding can happen when rain raises river levels beyond the channel capacity. Rainfall, drainage and land use shape floods.
        </Rule>
        <FloodPlain />
        <Worked
          title="Follow a flood"
          steps={[<>Heavy rain falls on the land and runs into the river.</>, <>The river rises until the water is higher than the channel can hold.</>, <>The water spreads across the flat floodplain, flooding houses built on it. Blocked drains make flooding worse.</>]}
        />
        <Mistake>Thinking floods only happen next to the sea. Rivers flood far inland after heavy rain.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reducing disaster risk',
    content: slide(
      <>
        <Rule>
          Disaster risk reduction aims to reduce damage and protect lives before hazards strike. Preparedness and planning reduce vulnerability and losses.
        </Rule>
        <Compare
          left={{ title: 'Prepare', tone: 'sky', rows: ['a warning siren helps communities act early and safely: preparedness', 'an emergency kit with a torch with batteries, because power can be cut after a hazard event'] }}
          right={{ title: 'Plan', tone: 'emerald', rows: ['keep drainage clear and avoid building on floodplains', 'good planning and maintenance reduce flood exposure'] }}
        />
        <Worked
          title="Get a family ready for an earthquake"
          steps={[<>Pack an emergency kit with a torch and spare batteries for when the lights go out.</>, <>Agree where to meet and how you will hear a warning. Knowing the siren and the meeting place is preparedness.</>, <>Do this before the hazard, not after.</>]}
        />
        <Mistake>Thinking disaster risk reduction is only rescue after a disaster. Most of the work is done before the hazard arrives.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the main reason earthquakes and volcanoes happen? What do we call an area with many volcanoes?</>,
          <>Which hazard happens when a river bursts its banks after a storm? Which map shows where earthquakes are most likely around the world?</>,
          <>What is the aim of disaster risk reduction? A siren that alerts a town to a coming flood is an example of what?</>,
          <>Which item in a kit helps most when the power goes off? What can a town do to lessen the damage floods cause?</>,
        ]}
        answers={[
          <>Movement of tectonic plates. A volcanic zone.</>,
          <>Floods. A tectonic plate map.</>,
          <>Reduce damage and protect lives before hazards strike. Preparedness.</>,
          <>A torch with batteries. Keep drainage clear and avoid building on floodplains.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What causes most earthquakes and volcanoes?',
    options: ['Movement of tectonic plates', 'Moon phases', 'Daily wind patterns', 'Ocean tides only'],
    answer: 'Movement of tectonic plates',
    explanation: 'Most major earthquakes and volcanoes occur where tectonic plates interact.',
  },
  {
    prompt: 'Why are some places called volcanic zones?',
    options: [
      'They are areas where volcanoes are common',
      'They are always below sea level',
      'They never receive rainfall',
      'They have no settlement',
    ],
    answer: 'They are areas where volcanoes are common',
    explanation: 'Volcanic zones are regions with higher volcanic activity.',
  },
  {
    prompt: 'Which hazard is most directly linked to overflowing rivers after heavy rain?',
    options: ['Floods', 'Earthquakes', 'Drought', 'Volcanic ashfall'],
    answer: 'Floods',
    explanation: 'Flooding can happen when rain raises river levels beyond channel capacity.',
  },
  {
    prompt: 'What does disaster risk reduction aim to do?',
    options: ['Reduce damage and protect lives before hazards strike', 'Stop all natural processes from happening', 'Raise the cost of building and nothing more', 'Move every town up into the mountains'],
    answer: 'Reduce damage and protect lives before hazards strike',
    explanation: 'Preparedness and planning reduce vulnerability and losses.',
  },
  {
    prompt: 'Which item is most useful in an earthquake emergency kit?',
    options: ['Torch with batteries', 'Decorative posters', 'Glass ornaments', 'Extra shoes only'],
    answer: 'Torch with batteries',
    explanation: 'A torch helps when power cuts happen after a hazard event.',
  },
  {
    prompt: 'How can settlements reduce flood impact?',
    options: ['Keep drainage clear and avoid building on floodplains', 'Remove all of the plants from riverbanks', 'Build only at sea level near the coast', 'Ignore the weather warnings that are given'],
    answer: 'Keep drainage clear and avoid building on floodplains',
    explanation: 'Good planning and maintenance reduce flood exposure.',
  },
  {
    prompt: 'Which map would best show global earthquake-prone areas?',
    options: ['Tectonic plate map', 'Population age graph', 'Language map', 'Tourist brochure'],
    answer: 'Tectonic plate map',
    explanation: 'Earthquake patterns often align with plate boundaries.',
  },
  {
    prompt: 'A warning system is an example of:',
    options: ['Preparedness', 'Hazard creation', 'Soil erosion only', 'Plate formation'],
    answer: 'Preparedness',
    explanation: 'Warning systems help communities act early and safely.',
  },
];

const NaturalHazardsVolcanoesEarthquakesAndFloods = () => (
  <CapsSubjectTopic
    title="Natural Hazards: Volcanoes, Earthquakes and Floods"
    subtitle="Earth structure, hazard zones, and disaster reduction"
    learnSteps={learnSteps}
    task="gr7-natural-hazards-volcanoes-earthquakes-and-floods-t2"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default NaturalHazardsVolcanoesEarthquakesAndFloods;
