'use client';

import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '../../../life-sciences/_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { LatLongGrid } from '../../../../../components/diagrams/geography/MapworkPictures';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as m from '../../../../../components/diagrams/geography/mapwork';

// CAPS Geography Grade 12 (using atlases): examining thematic maps, comparing information from different maps, the atlas index, and locating places with
// latitude and longitude in degrees and minutes. No real place names are used in the calculations. Numbers come from mapwork.ts.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;
const c = (n: number) => String(n).replace('.', ',');

const place = { latD: 26, latM: 30, lonD: 28, lonM: 15 };
const check = { lat: m.dm(25, 45), lon: m.dm(29, 20) };

export const learnSteps: LearnStep[] = [
  {
    title: 'Thematic maps and isolines',
    content: slide(
      <>
        <Rule>A thematic map shows one theme, such as rainfall, temperature, vegetation or population. A general map in an atlas, such as a physical or political map, shows many features. Thematic maps often use isolines, which join places that have the same value. Always read the title, the key and the scale first.</Rule>
        <InfoTable
          cols={[{ title: 'Isoline', w: 26 }, { title: 'Joins places with equal', w: 40 }, { title: 'Map', w: 34 }]}
          rows={[
            ['Isohyet', 'Rainfall', 'Rainfall map'],
            ['Isotherm', 'Temperature', 'Temperature map'],
            ['Isobar', 'Air pressure', 'Weather map'],
            ['Contour', 'Height', 'Physical map'],
          ]}
          aria="A table of isolines. An isohyet joins places with equal rainfall, on a rainfall map. An isotherm joins places with equal temperature, on a temperature map. An isobar joins places with equal air pressure, on a weather map. A contour joins places with equal height, on a physical map."
        />
        <Worked
          title="Reading isolines"
          steps={[
            <>Isolines that are <strong>close together</strong> show that the value changes quickly over a short distance. Isolines far apart show a slow change.</>,
            <>On a rainfall map the isohyets show how many millimetres a year each place receives. Read the key to find which value each line stands for.</>,
            <>An isotherm joins places with equal temperature, an isobar joins places with equal air pressure, and a contour joins places of equal height.</>,
            <>An atlas has many thematic maps, such as world climate and vegetation regions and seasonal temperature and rainfall maps of South Africa.</>,
          ]}
        />
        <Mistake>Reading an isoline as a boundary. It joins points of equal value, so every point on one isotherm has the same temperature.</Mistake>
      </>,
    ),
  },
  {
    title: 'The atlas index and degrees and minutes',
    content: slide(
      <>
        <Rule>The atlas index lists places in alphabetical order with the page and a grid reference. A grid reference can be a letter and number, or a latitude and longitude. There are 60 minutes (60&apos;) in 1 degree. Latitude is measured north or south of the equator, and longitude east or west of Greenwich.</Rule>
        <LatLongGrid latDeg={place.latD} latMin={place.latM} lonDeg={place.lonD} lonMin={place.lonM} />
        <Worked
          title="Locating a point"
          steps={[
            <>The point is at {place.latD}°{place.latM}&apos;S and {place.lonD}°{place.lonM}&apos;E. It is south of the equator and east of Greenwich, so it is in the southern and eastern hemispheres.</>,
            <>As decimal degrees, {place.latM}&apos; is {place.latM} ÷ 60 = {c(m.dm(0, place.latM))}°, so the latitude is <strong>{c(m.dm(place.latD, place.latM))}°S</strong>.</>,
            <>{place.lonM}&apos; ÷ 60 = {c(m.dm(0, place.lonM))}°, so the longitude is <strong>{c(m.dm(place.lonD, place.lonM))}°E</strong>.</>,
            <>To find a place from the index: look up its name, turn to the page, then follow the latitude and longitude, or the letter and number, to the square.</>,
          ]}
        />
        <Mistake>Writing 30 minutes as 0,30°. Divide the minutes by 60: 30&apos; is 0,5°.</Mistake>
      </>,
    ),
  },
  {
    title: 'Comparing maps and cross-referencing patterns',
    content: slide(
      <>
        <Rule>To compare thematic maps, look at the same area on each map and look for matching patterns. This is cross-referencing. A link between two patterns suggests that one affects the other, but you must check with another map or facts before you decide.</Rule>
        <InfoTable
          cols={[{ title: 'Rainfall map', w: 30 }, { title: 'Vegetation map', w: 40 }, { title: 'Link', w: 30 }]}
          rows={[
            ['High rainfall', 'Forest, dense\nvegetation', 'Water is not\nlimiting'],
            ['Moderate', 'Grassland,\nsavanna', 'Seasonal\nrain'],
            ['Low rainfall', 'Semi-desert,\ndesert', 'Water is\nlimiting'],
          ]}
          aria="A table comparing a rainfall map with a vegetation map. High rainfall goes with forest and dense vegetation, because water is not limiting. Moderate rainfall goes with grassland and savanna, because the rain is seasonal. Low rainfall goes with semi-desert and desert, because water is limiting."
        />
        <Worked
          title="Cross-referencing two maps"
          steps={[
            <>Find the area on the rainfall map: the isohyets show where rainfall is high or low.</>,
            <>Find the same area on the vegetation map and compare the pattern: more rain, denser vegetation.</>,
            <>Check a third map, such as the temperature map, because temperature also affects vegetation.</>,
          ]}
        />
        <Mistake>Comparing two different areas on the two maps. Always use the same area, on maps of the same scale.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>What does an isotherm join?</>,
            <>Write 25°45&apos;S as decimal degrees.</>,
            <>Write 29°20&apos;E as decimal degrees, to two decimal places.</>,
            <>Isohyets are close together. What does this show?</>,
          ]}
          answers={[
            <>Places with the <strong>same temperature</strong>.</>,
            <>45 ÷ 60 = 0,75, so <strong>{c(check.lat)}°S</strong>.</>,
            <>20 ÷ 60 = 0,33, so <strong>{c(Math.round(check.lon * 100) / 100)}°E</strong>.</>,
            <>That rainfall <strong>changes quickly</strong> over a short distance.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from mapwork.ts; skillsA.test.ts recomputes every key independently).
export const bank: CapsItem[] = [
  { prompt: "What is a thematic map?", options: ["A map that shows one theme, such as rainfall","A map that shows every feature of a country","A map drawn from an aerial photograph","A map with no key or title"], answer: "A map that shows one theme, such as rainfall", explanation: "A thematic map shows one topic, for example rainfall, temperature or vegetation." },
  { prompt: "What does an isohyet join?", options: ["Places with the same temperature","Places with the same rainfall","Places with the same height","Places with the same air pressure"], answer: "Places with the same rainfall", explanation: "An isohyet joins places that receive the same rainfall." },
  { prompt: "What does an isotherm join?", options: ["Places with the same rainfall","Places with the same height","Places with the same temperature","Places with the same air pressure"], answer: "Places with the same temperature", explanation: "An isotherm joins places with equal temperature." },
  { prompt: "What does an isobar join?", options: ["Places with the same temperature","Places with the same rainfall","Places with the same height","Places with the same air pressure"], answer: "Places with the same air pressure", explanation: "An isobar joins places with equal air pressure and is used on weather maps." },
  { prompt: "On a rainfall map the isohyets are very close together in one area. What does this show?", options: ["Rainfall changes quickly over a short distance","Rainfall changes slowly over a long distance","There is no rainfall in the area","The area is at sea level"], answer: "Rainfall changes quickly over a short distance", explanation: "Isolines that are close together show a rapid change in the value." },
  { prompt: "What does the atlas index give for a place?", options: ["The height above sea level","The page and a grid reference","The population of the place","The climate of the place"], answer: "The page and a grid reference", explanation: "The index gives the page and the grid reference or latitude and longitude of the place." },
  { prompt: "How many minutes are there in 1 degree of latitude or longitude?", options: ["100","30","60","360"], answer: "60", explanation: "There are 60 minutes in 1 degree." },
  { prompt: "What is 25°45'S written in decimal degrees?", options: ["25,45°S","25,4°S","25,075°S","25,75°S"], answer: "25,75°S", explanation: "45 ÷ 60 = 0,75, so 25°45' = 25,75°." },
  { prompt: "What is 28°15'E written in decimal degrees?", options: ["28,25°E","28,15°E","28,5°E","28,015°E"], answer: "28,25°E", explanation: "15 ÷ 60 = 0,25, so 28°15' = 28,25°." },
  { prompt: "A point lies at 26°S and 28°E. In which hemispheres is it?", options: ["Northern and eastern","Southern and eastern","Southern and western","Northern and western"], answer: "Southern and eastern", explanation: "South latitude means the southern hemisphere, and east longitude means the eastern hemisphere." },
  { prompt: "Latitude is measured from which line?", options: ["The Greenwich meridian","The Tropic of Capricorn","The equator","The International Date Line"], answer: "The equator", explanation: "Latitude is measured north or south from the equator. Longitude is measured from Greenwich." },
  { prompt: "What does cross-referencing two thematic maps mean?", options: ["Copying one map on top of the other with a pencil","Measuring the scale of both maps with a ruler","Drawing a cross-section between two points on a map","Comparing the same area on two maps to find a link"], answer: "Comparing the same area on two maps to find a link", explanation: "You compare the same area on the two maps and look for matching patterns." },
  { prompt: "Compared with areas of low rainfall, areas of high rainfall usually have", options: ["Denser vegetation","Sparser vegetation","Only desert","No vegetation"], answer: "Denser vegetation", explanation: "More water allows denser vegetation, such as forest. Low rainfall areas have semi-desert or desert." },
  { prompt: "Which should you read first on a thematic map?", options: ["The names of the oceans","The title, the key and the scale","The latitude of the equator","The page number of the atlas"], answer: "The title, the key and the scale", explanation: "The title, key and scale tell you the theme, what the colours or lines mean, and how to measure." },
];

const AtlasesThematicMapsT3 = () => (
  <CapsSubjectTopic
    title="Using Atlases and Thematic Maps"
    subtitle="Isolines, the atlas index, degrees and minutes, and comparing maps"
    learnSteps={learnSteps}
    task="gr12-atlases-thematic-maps-t3"
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default AtlasesThematicMapsT3;
