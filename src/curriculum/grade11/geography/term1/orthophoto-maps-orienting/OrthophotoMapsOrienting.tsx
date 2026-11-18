import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import * as g from '../../../../../components/diagrams/geo11/geo11';
import { AtlasGrid, CoreRings, PairBars, RainBars, RostowSteps, SustainCircles, WeekGraph } from '../../../../../components/diagrams/geo11/Geo11Pictures';

// Every number comes from geo11.ts (tested in geo11.test.ts and g11GeoGaps.test.ts). All data are imaginary teaching data.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What an orthophoto map is',
    content: slide(
      <>
        <Rule>An orthophoto map is an aerial photograph that has been corrected so that every part has the same scale, like a map. Orthophoto maps are used together with 1:50 000 topographic maps and with aerial photographs. The 1:10 000 orthophoto map shows a small area in great detail.</Rule>
        <PairBars title="1 km on each map (cm)" aLabel="1:50 000" a={g.oneKmCm(g.TOPO)} bLabel="1:10 000" b={g.oneKmCm(g.ORTHO)} unit="cm" verdict="the orthophoto map is the larger scale" />
        <Worked
          title="Compare the two scales"
          steps={[
            `1:${g.sp(g.TOPO)} means 1 cm is ${g.sp(g.TOPO / 100)} m on the ground, so 1 km is ${g.oneKmCm(g.TOPO)} cm.`,
            `1:${g.sp(g.ORTHO)} means 1 cm is ${g.sp(g.ORTHO / 100)} m, so 1 km is ${g.oneKmCm(g.ORTHO)} cm.`,
            'The orthophoto map shows the same ground five times larger, so it shows more detail.',
          ]}
        />
        <Mistake>Thinking that 1:10 000 is the smaller scale because 10 000 is a smaller number. It is the larger scale.</Mistake>
      </>,
    ),
  },
  {
    title: 'Measuring on an orthophoto map',
    content: slide(
      <>
        <Rule>Because an orthophoto map has one scale, you measure on it in the same way as on a topographic map. Measure the length on the map in centimetres and multiply by the scale denominator to get ground centimetres. Change to metres by dividing by 100. Multiply the ground length by the ground breadth to find the area.</Rule>
        <FactCards
          cards={[
            { title: 'Length', line1: 'map cm × 10 000', line2: 'gives ground cm' },
            { title: 'Metres', line1: 'ground cm ÷ 100', line2: 'gives metres' },
            { title: 'Area', line1: 'length × breadth', line2: 'in metres' },
            { title: 'Hectares', line1: '10 000 square metres', line2: 'make a hectare' },
          ]}
          aria="Measuring on a 1:10 000 map. Length: map centimetres times 10 000 gives ground centimetres. Metres: divide ground centimetres by 100. Area: length times breadth in metres. A hectare is 10 000 square metres."
        />
        <Worked
          title="Measure a field"
          steps={[
            `A field is ${g.FIELD.lengthCm} cm by ${g.FIELD.breadthCm} cm on the 1:10 000 orthophoto map.`,
            `Ground length = ${g.FIELD.lengthCm} × 100 m = ${g.fieldGround().length} m. Ground breadth = ${g.FIELD.breadthCm} × 100 m = ${g.fieldGround().breadth} m.`,
            `Area = ${g.fieldGround().length} × ${g.fieldGround().breadth} = ${g.sp(g.fieldGround().length * g.fieldGround().breadth)} m², which is ${g.fieldHectares()} ha.`,
          ]}
        />
        <Mistake>Using 1:50 000 for an orthophoto map. Read the scale in the map's margin first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Using the orthophoto map with a 1:50 000 map',
    content: slide(
      <>
        <Rule>An orthophoto map and a 1:50 000 map cover the same ground at two scales. A road that is 7 cm long on the orthophoto map is much shorter on the topographic map. The topographic map shows contours, symbols and names, and the orthophoto map shows the real appearance of the ground, so use both and match features on them.</Rule>
        <PairBars title="The same road in cm" aLabel="1:10 000" a={g.roadOnOrtho} bLabel="1:50 000" b={g.roadOnTopo()} unit="cm" verdict="same road, smaller on the topographic map" />
        <Worked
          title="Move between the maps"
          steps={[
            `The road is ${g.roadOnOrtho} cm on the orthophoto map, so it is ${g.roadOnOrtho} × 100 = ${g.roadGround()} m long.`,
            `On the 1:50 000 map 1 cm is 500 m, so it measures ${g.roadGround()} ÷ 500 = ${g.dec(g.roadOnTopo())} cm.`,
            'The road is the same length on the ground. Only the scale of the map changed.',
          ]}
        />
        <Mistake>Expecting the same length on both maps. The larger the scale, the longer a feature measures.</Mistake>
      </>,
    ),
  },
  {
    title: 'Orienting a photograph or orthophoto map',
    content: slide(
      <>
        <Rule>To orient an aerial photograph or orthophoto map with another map, find two or more features that appear on both, such as a dam and a road junction, and turn the photograph until they line up. North is not always at the top of a photograph, so match features instead of the edges.</Rule>
        <FactCards
          cards={[
            { title: 'Step 1', line1: 'find a dam, junction or', line2: 'bridge on both' },
            { title: 'Step 2', line1: 'find a second feature', line2: 'on both' },
            { title: 'Step 3', line1: 'turn the photograph until', line2: 'the two lines agree' },
            { title: 'Step 4', line1: 'then read the north', line2: 'arrow from the map' },
          ]}
          aria="Orienting a photograph with a map. Step 1: find a dam, junction or bridge on both. Step 2: find a second feature on both. Step 3: turn the photograph until the line between them agrees. Step 4: read the north arrow from the map."
        />
        <Worked
          title="Orient a photograph"
          steps={[
            'A dam and a railway bridge appear on the photograph and on the 1:50 000 map.',
            'On the map the bridge is east of the dam. Turn the photograph until the bridge is east of the dam.',
            'The map north arrow now gives the north direction for the photograph.',
          ]}
        />
        <Mistake>Using the edge of the photograph as north. The photograph may have been taken from any direction.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>An orthophoto map is at 1:10 000. How long is 1 km on it?</>,
          <>A road is {g.roadOnOrtho} cm on this map. How long is it on the ground?</>,
          <>How long is that road on a 1:50 000 map?</>,
          <>What do you match to orient a photograph with a map?</>,
        ]}
        answers={[
          <>{g.oneKmCm(g.ORTHO)} cm.</>,
          <>{g.roadGround()} m.</>,
          <>{g.dec(g.roadOnTopo())} cm.</>,
          <>Two or more features that appear on both.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is an orthophoto map?",
    options: ["A map made only of contour lines", "A hand-drawn sketch map", "A corrected aerial photograph with one scale", "A weather chart"],
    answer: "A corrected aerial photograph with one scale",
    explanation: "The photograph is corrected so that the scale is the same everywhere.",
  },
  {
    prompt: "An orthophoto map is used together with which other map?",
    options: ["A 1:50 000 topographic map", "A world atlas", "A synoptic chart", "A population pyramid"],
    answer: "A 1:50 000 topographic map",
    explanation: "CAPS pairs orthophoto maps with 1:50 000 maps.",
  },
  {
    prompt: "Which of 1:10 000 and 1:50 000 is the larger scale?",
    options: ["1:50 000", "They are equal", "It depends on the colour", "1:10 000"],
    answer: "1:10 000",
    explanation: "The smaller denominator is the larger scale.",
  },
  {
    prompt: "How many centimetres show 1 km on a 1:10 000 map?",
    options: ["2 cm", "10 cm", "20 cm", "1 cm"],
    answer: "10 cm",
    explanation: "100 000 cm ÷ 10 000 = 10.",
  },
  {
    prompt: "How many centimetres show 1 km on a 1:50 000 map?",
    options: ["10 cm", "2 cm", "5 cm", "20 cm"],
    answer: "2 cm",
    explanation: "100 000 cm ÷ 50 000 = 2.",
  },
  {
    prompt: "A road is 7 cm long on a 1:10 000 orthophoto map. How long is it on the ground?",
    options: ["70 m", "7 km", "7 000 m", "700 m"],
    answer: "700 m",
    explanation: "7 × 10 000 = 70 000 cm = 700 m.",
  },
  {
    prompt: "The same road is 700 m long. How long does it measure on a 1:50 000 map?",
    options: ["1,4 cm", "7 cm", "14 cm", "0,14 cm"],
    answer: "1,4 cm",
    explanation: "70 000 ÷ 50 000 = 1,4.",
  },
  {
    prompt: "A field is 3 cm by 2 cm on a 1:10 000 orthophoto map. What are its ground dimensions?",
    options: ["30 m by 20 m", "3 km by 2 km", "300 m by 200 m", "600 m by 400 m"],
    answer: "300 m by 200 m",
    explanation: "3 × 100 m and 2 × 100 m.",
  },
  {
    prompt: "What is the area of the field that is 300 m by 200 m?",
    options: ["60 ha", "0,6 ha", "600 ha", "6 ha"],
    answer: "6 ha",
    explanation: "300 × 200 = 60 000 m² and 10 000 m² make 1 ha.",
  },
  {
    prompt: "How many square metres make one hectare?",
    options: ["100", "10 000", "1 000", "1 000 000"],
    answer: "10 000",
    explanation: "A hectare is 100 m by 100 m.",
  },
  {
    prompt: "Which map shows the real appearance of the ground?",
    options: ["The orthophoto map", "The topographic map", "The atlas index", "The weather map"],
    answer: "The orthophoto map",
    explanation: "It is made from a photograph.",
  },
  {
    prompt: "What is the first step in orienting a photograph with a map?",
    options: ["Draw a north arrow at the top", "Measure the declination", "Find a feature that is on both", "Colour the map"],
    answer: "Find a feature that is on both",
    explanation: "Match features that appear on both.",
  },
  {
    prompt: "Why is the edge of a photograph not a good guide to north?",
    options: ["North is always at the bottom edge", "Photographs never show north at all", "It may have been taken from any direction", "The edge of a photo is always curved"],
    answer: "It may have been taken from any direction",
    explanation: "Use features, then read north from the map.",
  },
  {
    prompt: "A dam and a bridge appear on the photograph and the map. What does a geographer do with them?",
    options: ["Turns the photograph until they match", "Cuts them out of the photograph", "Colours them in on the map", "Measures their height in metres"],
    answer: "Turns the photograph until they match",
    explanation: "Two features that match give the orientation.",
  },
];

const OrthophotoMapsOrienting = () => (
  <CapsSubjectTopic
    title="Orthophoto Maps: Scale, Measurement and Orientation"
    subtitle="Orthophoto maps with 1:50 000 maps, measuring distance and area, and orienting photographs"
    learnSteps={learnSteps}
    task="gr11-orthophoto-maps-orienting-t1"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default OrthophotoMapsOrienting;
