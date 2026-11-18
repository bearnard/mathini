import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import * as g from '../../../../../components/diagrams/geo11/geo11';
import { AtlasGrid, CoreRings, PairBars, RainBars, RostowSteps, SustainCircles, WeekGraph } from '../../../../../components/diagrams/geo11/Geo11Pictures';

// Every number comes from geo11.ts (tested in geo11.test.ts and g11GeoGaps.test.ts). All data are imaginary teaching data.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

import { AerialTypes } from '../../../../../components/diagrams/geography/MapworkPictures';

export const learnSteps: LearnStep[] = [
  {
    title: 'Photographs of landscapes: vertical and oblique',
    content: slide(
      <>
        <Rule>An aerial photograph is taken from an aircraft or drone. A vertical photograph looks straight down and shows the layout of features in plan. An oblique photograph is taken at an angle, so it shows the horizon and the height of hills and buildings, like a landscape photograph.</Rule>
        <AerialTypes />
        <Worked
          title="Choose the right type"
          steps={[
            'To see the shape of a mesa, with its flat top and steep sides, use an oblique photograph.',
            'To see the pattern of fields and roads from above, use a vertical photograph.',
            'The horizon is visible: the photograph is oblique.',
          ]}
        />
        <Mistake>Measuring a distance on an oblique photograph. Objects far away look smaller, so the scale is not the same all over the picture.</Mistake>
      </>,
    ),
  },
  {
    title: 'Identifying landforms and features',
    content: slide(
      <>
        <Rule>To identify a landform on a photograph, look at its shape, its slopes and its surroundings. A mesa and a butte have a flat top and steep sides, a cuesta has a gentle slope on one side and a steep slope on the other, a river valley has a winding line of trees and darker green, and a built-up area has straight lines and regular blocks.</Rule>
        <FactCards
          cards={[
            { title: 'Mesa, butte', line1: 'flat top, steep', line2: 'sides all round' },
            { title: 'Cuesta', line1: 'gentle slope on one', line2: 'side, steep on the other' },
            { title: 'River valley', line1: 'winding line of', line2: 'trees and darker green' },
            { title: 'Town', line1: 'straight roads and', line2: 'regular blocks' },
          ]}
          aria="Clues for identifying features. Mesa and butte: flat top and steep sides all round. Cuesta: gentle slope on one side and steep on the other. River valley: a winding line of trees and darker green. Town: straight roads and regular blocks."
        />
        <Worked
          title="Read a photograph"
          steps={[
            'A flat-topped hill with a steep edge all round, standing alone: a butte.',
            'A dark, winding line through dry land: a river with trees along its banks.',
            'Straight lines meeting at right angles: roads in a town.',
          ]}
        />
        <Mistake>Naming a feature from one clue only. Use the shape, the slopes and the surroundings together.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tone, texture and shadow',
    content: slide(
      <>
        <Rule>Tone is how light or dark an area is, texture is how smooth or rough it looks, and shadow shows the height and shape of things. Dark and smooth often means water, light and smooth is bare ground or a roof, and dark and rough is dense trees. Long shadows show tall features such as trees, buildings and steep cliffs.</Rule>
        <FactCards
          cards={[
            { title: 'Dark, smooth', line1: 'deep water or', line2: 'new tar' },
            { title: 'Light, smooth', line1: 'bare ground,', line2: 'sand or roofs' },
            { title: 'Dark, rough', line1: 'dense trees', line2: 'or forest' },
            { title: 'Long shadow', line1: 'something tall,', line2: 'such as a cliff' },
          ]}
          aria="Reading tone, texture and shadow. Dark and smooth: deep water or new tar. Light and smooth: bare ground, sand or roofs. Dark and rough: dense trees or forest. Long shadow: something tall, such as a cliff."
        />
        <Worked
          title="Use all three clues"
          steps={[
            'A dark, smooth patch with a curved edge beside a wall: a dam.',
            'A rough, dark-green patch with long shadows: a plantation of tall trees.',
            'A light patch with a long, sharp shadow along one edge: a steep scarp or a tall building.',
          ]}
        />
        <Mistake>Trusting tone alone. A dark patch may be water, trees or a burnt field, so check the texture and shadow.</Mistake>
      </>,
    ),
  },
  {
    title: 'Measuring on a vertical photograph',
    content: slide(
      <>
        <Rule>A vertical photograph has a scale, and you can use it like a map. If a distance is known on the ground and on the photograph, the scale is the ground distance divided by the photograph distance. Ground distance is then the photograph measurement multiplied by the scale.</Rule>
        <PairBars title="Photograph scale" aLabel="photo (cm)" a={g.PHOTO.cm} bLabel="ground (hundred m)" b={g.PHOTO.ground / 100} unit="units" verdict={`scale 1:${g.sp(g.photoScale())}`} />
        <Worked
          title="Find the scale"
          steps={[
            `${g.PHOTO.cm} cm on the photograph stands for ${g.PHOTO.ground} m, which is ${g.sp(g.PHOTO.ground * 100)} cm.`,
            `${g.sp(g.PHOTO.ground * 100)} ÷ ${g.PHOTO.cm} = ${g.sp(g.photoScale())}, so the scale is 1:${g.sp(g.photoScale())}.`,
            `A field 4 cm long on this photograph is 4 × ${g.sp(g.photoScale())} cm = 600 m.`,
          ]}
        />
        <Mistake>Forgetting to change metres to centimetres before dividing. Both distances must be in the same unit.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How can you tell an oblique photograph from a vertical one?</>,
          <>A flat-topped hill has steep sides all round. What landform is it?</>,
          <>What do long shadows show?</>,
          <>{g.PHOTO.cm} cm on a photograph stand for {g.PHOTO.ground} m. What is the scale?</>,
        ]}
        answers={[
          <>An oblique photograph shows the horizon.</>,
          <>A butte or mesa.</>,
          <>The height of features.</>,
          <>1:{g.sp(g.photoScale())}.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "A camera points straight down from an aircraft. What type of photograph is produced?",
    options: ["An oblique photograph", "A cross-section", "A vertical photograph", "A thematic map"],
    answer: "A vertical photograph",
    explanation: "A vertical photograph looks straight down.",
  },
  {
    prompt: "How can you tell that a photograph is oblique?",
    options: ["The horizon is visible", "It shows a plan of the ground", "It has a uniform scale", "It has contour lines"],
    answer: "The horizon is visible",
    explanation: "The tilted camera shows the horizon.",
  },
  {
    prompt: "Which type of photograph is better for seeing the height of a hill?",
    options: ["A vertical photograph", "A topographic map", "An atlas", "An oblique photograph"],
    answer: "An oblique photograph",
    explanation: "The angle shows the sides of hills.",
  },
  {
    prompt: "Why can distances not be measured reliably on an oblique photograph?",
    options: ["It has no features", "Distant objects look smaller", "It is always black and white", "It is always too small"],
    answer: "Distant objects look smaller",
    explanation: "The scale is not the same all over.",
  },
  {
    prompt: "A flat-topped hill stands alone with steep sides all round. What landform is it?",
    options: ["A cuesta", "A butte", "A river valley", "A dune"],
    answer: "A butte",
    explanation: "A butte is a small flat-topped hill with steep sides.",
  },
  {
    prompt: "A ridge has a gentle slope on one side and a steep slope on the other. What landform is it?",
    options: ["A butte", "A delta", "A mesa", "A cuesta"],
    answer: "A cuesta",
    explanation: "Tilted layers form a cuesta.",
  },
  {
    prompt: "What does a winding dark line through dry land most likely show?",
    options: ["A river lined with trees", "A tarred road in a town", "A railway line to a port", "A fence around a farm"],
    answer: "A river lined with trees",
    explanation: "Trees along a river appear darker.",
  },
  {
    prompt: "Straight lines meeting at right angles on a photograph most likely show",
    options: ["A natural river", "A rocky ridge", "Roads in a built-up area", "A dune field"],
    answer: "Roads in a built-up area",
    explanation: "Regular straight lines are made by people.",
  },
  {
    prompt: "What does tone describe on a photograph?",
    options: ["How rough it looks", "How long its shadow is", "How big it is", "How light or dark an area is"],
    answer: "How light or dark an area is",
    explanation: "Tone is lightness or darkness.",
  },
  {
    prompt: "What does texture describe on a photograph?",
    options: ["How light or dark it is", "How smooth or rough it looks", "How tall its shadow is", "How old the picture is"],
    answer: "How smooth or rough it looks",
    explanation: "Texture is smoothness or roughness.",
  },
  {
    prompt: "A dark, smooth patch with a curved edge most likely shows",
    options: ["A dam or deep water", "A forest", "A field of sand", "A new roof"],
    answer: "A dam or deep water",
    explanation: "Water absorbs light and looks dark and smooth.",
  },
  {
    prompt: "What do long shadows on a photograph show?",
    options: ["The depth of water", "The age of the picture", "The height of features", "The scale"],
    answer: "The height of features",
    explanation: "Tall features cast long shadows.",
  },
  {
    prompt: "5 cm on a photograph stand for 750 m on the ground. What is the scale?",
    options: ["1:150", "1:1 500", "1:15 000", "1:750 000"],
    answer: "1:15 000",
    explanation: "75 000 cm ÷ 5 = 15 000.",
  },
  {
    prompt: "On a photograph with a scale of 1:15 000, a field measures 4 cm. How long is the field on the ground?",
    options: ["600 m", "60 m", "6 km", "4 km"],
    answer: "600 m",
    explanation: "4 × 15 000 = 60 000 cm = 600 m.",
  },
];

const AerialPhotographsLandforms = () => (
  <CapsSubjectTopic
    title="Aerial Photographs and Landforms"
    subtitle="Vertical and oblique photographs, identifying features, tone, texture and shadow"
    learnSteps={learnSteps}
    task="gr11-aerial-photographs-landforms-t1"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default AerialPhotographsLandforms;
