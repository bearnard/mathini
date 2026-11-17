'use client';

import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '../../../life-sciences/_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { AerialTypes } from '../../../../../components/diagrams/geography/MapworkPictures';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as m from '../../../../../components/diagrams/geography/mapwork';

// CAPS Geography Grade 12: interpreting vertical aerial photographs (tone, texture, shadow), orthophoto maps (used with 1:50 000 maps and photos),
// comparing an orthophoto map with a topographic map, and orienting a photograph with another map. Numbers come from mapwork.ts.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;
const sp = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const c = (n: number) => String(n).replace('.', ',');

const photo = { cm: 5, ground: 500 };
const check = { ground: m.groundMetres(8, 10000), scaleCm: m.mapCmFor(1000, 10000) };

export const learnSteps: LearnStep[] = [
  {
    title: 'Vertical and oblique aerial photographs',
    content: slide(
      <>
        <Rule>An aerial photograph is taken from an aircraft or a drone. In a vertical photograph the camera points straight down, so you see a plan of the ground. In an oblique photograph the camera is tilted, so you see the horizon and the sides of hills and buildings, as in a landscape view.</Rule>
        <AerialTypes />
        <Worked
          title="Which type for which job?"
          steps={[
            <>A <strong>vertical</strong> photograph is used for mapping and for measuring distance and area, because all features are seen from above.</>,
            <>An <strong>oblique</strong> photograph shows the height and shape of features and is easier for a beginner to read, but its scale changes from the front to the back.</>,
            <>If you can see the horizon, the photograph is oblique.</>,
          ]}
        />
        <Mistake>Using an oblique photograph to measure distances. The scale gets smaller towards the horizon, so measurements are not reliable.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reading a vertical photograph: tone, texture, shadow and pattern',
    content: slide(
      <>
        <Rule>To identify features on a vertical photograph, look at four clues: tone (how light or dark), texture (smooth or rough), shadow, and pattern or shape. Use several clues together and check with the map.</Rule>
        <InfoTable
          cols={[{ title: 'Clue', w: 20 }, { title: 'What to look for', w: 80 }]}
          rows={[
            ['Tone', 'Dark: deep water, tar, dense trees\nLight: dry bare ground, sand, roofs'],
            ['Texture', 'Smooth: grass, ploughed fields\nRough: forest, rocky slopes'],
            ['Shadow', 'Long shadows show tall features and\ntheir shape (trees, buildings, hills)'],
            ['Pattern', 'Straight lines and blocks: made by\npeople. Irregular shapes: natural'],
          ]}
          aria="A table of clues for reading a vertical aerial photograph. Tone: dark shows deep water, tar and dense trees; light shows dry bare ground, sand and roofs. Texture: smooth shows grass and ploughed fields; rough shows forest and rocky slopes. Shadow: long shadows show tall features and their shape. Pattern: straight lines and blocks are made by people, irregular shapes are natural."
        />
        <Worked
          title="Identifying a feature"
          steps={[
            <>A dark, smooth area with an irregular edge: probably a dam or deep water.</>,
            <>A rough, dark-green texture with long shadows: dense trees or a forest.</>,
            <>Straight lines meeting at right angles, with light roofs: a built-up area made by people.</>,
          ]}
        />
        <Mistake>Using tone alone. Dry fields and wet fields have different tones, so always use texture, shadow and pattern as well.</Mistake>
      </>,
    ),
  },
  {
    title: 'Orthophoto maps and their scale',
    content: slide(
      <>
        <Rule>An orthophoto map is an aerial photograph that has been corrected so that it has the same scale all over, like a map. Orthophoto maps are used with 1:50 000 topographic maps. They are made at the larger scale of 1:10 000, so they show more detail. Measure distance on one in the same way as on a map.</Rule>
        <InfoTable
          cols={[{ title: 'Map', w: 34 }, { title: 'Scale', w: 24 }, { title: '1 km on the map', w: 42 }]}
          rows={[
            ['Topographic map', '1:50 000', `${c(m.mapCmFor(1000, 50000))} cm`],
            ['Orthophoto map', '1:10 000', `${c(m.mapCmFor(1000, 10000))} cm`],
          ]}
          aria="A table comparing two maps. The topographic map at 1:50 000 shows 1 km as 2 cm. The orthophoto map at 1:10 000 shows 1 km as 10 cm."
        />
        <Worked
          title="Using the scale"
          steps={[
            <>1:10 000 means 1 cm on the orthophoto map is 10 000 cm = 100 m on the ground.</>,
            <>Two houses 6 cm apart are 6 × 100 m = <strong>{m.metresText(m.groundMetres(6, 10000))}</strong> apart.</>,
            <>The same 500 m is 1 cm on a 1:50 000 map but <strong>{c(m.mapCmFor(500, 10000))} cm</strong> on the orthophoto map.</>,
            <>If you do not know the scale of a photograph, measure a distance on it and on the ground: {photo.cm} cm for {photo.ground} m is 1:{sp(m.scaleDenominator(photo.cm, photo.ground))}.</>,
          ]}
        />
        <Mistake>Thinking that 1:10 000 is the smaller scale because 10 000 is smaller than 50 000. The smaller number after the colon is the larger scale.</Mistake>
      </>,
    ),
  },
  {
    title: 'Comparing and orienting photographs and maps',
    content: slide(
      <>
        <Rule>To use a photograph with a map, first orient it: find two or more features that are on both, such as a road junction or a dam, and turn the photograph until they match. An orthophoto map shows the real appearance of the land, while a topographic map uses symbols and names.</Rule>
        <InfoTable
          cols={[{ title: 'Topographic map', w: 50 }, { title: 'Orthophoto map', w: 50 }]}
          rows={[
            ['Symbols and names for\nfeatures', 'The real picture of the ground,\nwith its actual shapes'],
            ['Smaller scale: 1:50 000', 'Larger scale: 1:10 000, more detail'],
            ['Shows only chosen features', 'Shows everything the camera saw'],
          ]}
          aria="A table comparing two kinds of map. The topographic map uses symbols and names for features, has the smaller scale of 1:50 000 and shows only chosen features. The orthophoto map shows the real picture of the ground with its actual shapes, has the larger scale of 1:10 000 with more detail, and shows everything the camera saw."
        />
        <Worked
          title="Orienting a photograph"
          steps={[
            <>Find a feature on both, such as a dam, and a second one, such as a road junction.</>,
            <>Turn the photograph until the line between the two features points the same way on both.</>,
            <>Check the shadows and north: on the photograph north may not be at the top, so use the features, not the edge.</>,
          ]}
        />
        <Mistake>Assuming north is at the top of an aerial photograph. Always match features before you decide which way is north.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>How can you tell an oblique photograph from a vertical one?</>,
            <>On a 1:10 000 orthophoto map two bridges are 8 cm apart. How far apart are they on the ground?</>,
            <>How many centimetres show 1 km on a 1:10 000 map?</>,
            <>Which clue tells you the height of a tree on a photograph?</>,
          ]}
          answers={[
            <>An oblique photograph shows the <strong>horizon</strong>.</>,
            <>8 × 100 m = <strong>{m.metresText(check.ground)}</strong>.</>,
            <><strong>{c(check.scaleCm)} cm</strong>.</>,
            <>Its <strong>shadow</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from mapwork.ts; skillsA.test.ts recomputes every key independently).
export const bank: CapsItem[] = [
  { prompt: "An aerial photograph is taken with the camera pointing straight down. What is it called?", options: ["A vertical aerial photograph","An oblique aerial photograph","A cross-section","A synoptic chart"], answer: "A vertical aerial photograph", explanation: "When the camera points straight down the photograph is a vertical aerial photograph." },
  { prompt: "Which type of aerial photograph shows the horizon?", options: ["A vertical aerial photograph","An oblique aerial photograph","An orthophoto map","A topographic map"], answer: "An oblique aerial photograph", explanation: "The camera is tilted for an oblique photograph, so the horizon can be seen." },
  { prompt: "Which of these is best for measuring distances accurately?", options: ["An oblique aerial photograph","A photograph of a hill taken from the ground","An orthophoto map","A hand-drawn sketch"], answer: "An orthophoto map", explanation: "An orthophoto map has the same scale all over, so distances can be measured like on a map." },
  { prompt: "On a black-and-white vertical photograph, which feature usually has a dark tone?", options: ["Dry bare sand","A white concrete roof","A dry gravel road","Deep water"], answer: "Deep water", explanation: "Deep water absorbs light and looks dark. Dry sand and light roofs look light." },
  { prompt: "A smooth, even texture on a vertical photograph most likely shows", options: ["A grassland or ploughed field","Dense forest","A rocky mountain slope","A busy city centre"], answer: "A grassland or ploughed field", explanation: "Grass and ploughed fields have a smooth texture. Forests and rocks look rough." },
  { prompt: "Shadows on an aerial photograph help to identify", options: ["The magnetic declination","The height and shape of features","The age of the photograph","The scale of the map"], answer: "The height and shape of features", explanation: "A long shadow shows a tall feature, and its outline shows the shape of the feature." },
  { prompt: "Straight lines and regular blocks on an aerial photograph usually show", options: ["A natural river","A natural forest","Features made by people","A rocky outcrop"], answer: "Features made by people", explanation: "People build in straight lines and blocks. Natural features have irregular shapes." },
  { prompt: "What is an orthophoto map?", options: ["A hand-drawn sketch of the whole landscape area","A map made of contour lines and spot heights","A photograph of a hill taken from the ground","A corrected aerial photograph with one scale all over"], answer: "A corrected aerial photograph with one scale all over", explanation: "An orthophoto map is a corrected aerial photograph, so it can be used like a map." },
  { prompt: "An orthophoto map at 1:10 000 is used with a topographic map at 1:50 000. Which has the larger scale?", options: ["The orthophoto map","The topographic map","They have the same scale","Neither, because one is a photograph"], answer: "The orthophoto map", explanation: "The smaller number after the colon is the larger scale, so 1:10 000 is larger than 1:50 000." },
  { prompt: "On a 1:10 000 orthophoto map two houses are 6 cm apart. What is the ground distance between them?", options: ["60 m","600 m","6 km","6 000 m"], answer: "600 m", explanation: "6 cm × 10 000 = 60 000 cm = 600 m." },
  { prompt: "A road that is 500 m long measures 1 cm on a 1:50 000 map. How long does it measure on a 1:10 000 orthophoto map?", options: ["1 cm","10 cm","5 cm","50 cm"], answer: "5 cm", explanation: "500 m = 50 000 cm. 50 000 ÷ 10 000 = 5 cm." },
  { prompt: "On an aerial photograph, 4 cm stand for 400 m on the ground. What is the scale?", options: ["1:1 000","1:100 000","1:40 000","1:10 000"], answer: "1:10 000", explanation: "400 m = 40 000 cm. 40 000 ÷ 4 = 10 000, so the scale is 1:10 000." },
  { prompt: "Compared with a topographic map, an orthophoto map shows", options: ["The real look of the land and its shapes","Symbols and names for every feature","The boundaries of each farm and ward","The roads and rivers drawn as lines"], answer: "The real look of the land and its shapes", explanation: "An orthophoto map is a photograph, so it shows the land as it really looks." },
  { prompt: "How do you orient an aerial photograph with a topographic map?", options: ["Turn the photograph until it is dark at the top","Match two or more features that appear on both","Measure the declination on the photograph","Place north at the bottom of the photograph"], answer: "Match two or more features that appear on both", explanation: "Find features such as a dam and a road junction on both, and turn the photograph until they line up." },
];

const AerialOrthophotoT1 = () => (
  <CapsSubjectTopic
    title="Aerial Photographs and Orthophoto Maps"
    subtitle="Vertical and oblique photographs, tone, texture and shadow, and orthophoto maps"
    learnSteps={learnSteps}
    task="gr12-aerial-orthophoto-t1"
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default AerialOrthophotoT1;
