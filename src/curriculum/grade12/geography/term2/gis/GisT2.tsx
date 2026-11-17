'use client';

import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '../../../life-sciences/_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { BufferDiagram, GisLayers, RasterGrid } from '../../../../../components/diagrams/geography/MapworkPictures';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as m from '../../../../../components/diagrams/geography/mapwork';

// CAPS Geography Grade 12 (GIS): remote sensing, spatial and spectral resolution, spatial and attribute data, raster and vector data, data manipulation
// (integration, buffering, querying, statistical analysis), applications by government and the private sector, paper GIS. Numbers come from mapwork.ts.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;
const sp = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const c = (n: number) => String(n).replace('.', ',');

const cells = { count: 12, size: 30 };
const buf = { d: 100, length: 3000 };
const nearRiver = ['Farm A', 'Farm B', 'Farm C'];
const gentle = ['Farm B', 'Farm C', 'Farm D'];
const check = { ha: m.cellsHa(25, 20), buffer: m.bufferAreaHa(2000, 50) };

export const learnSteps: LearnStep[] = [
  {
    title: 'What a GIS is, and remote sensing',
    content: slide(
      <>
        <Rule>A Geographical Information System (GIS) is a computer system that captures, stores, analyses and displays spatial data, which is information linked to a place on Earth. Much of the data comes from remote sensing: collecting information about the Earth from a distance, with sensors on satellites, aircraft or drones.</Rule>
        <GisLayers layers={['Roads', 'Rivers', 'Settlements', 'Land use']} />
        <Worked
          title="Layers and resolution"
          steps={[
            <>A GIS keeps each kind of information in its own layer: roads, rivers, settlements, land use. The layers line up over the same area, so they can be combined.</>,
            <>Spatial resolution is the size of the ground area that one pixel covers. A 30 m resolution means each pixel covers <strong>30 m by 30 m</strong>. A smaller pixel shows more detail.</>,
            <>Spectral resolution is how many bands of light the sensor records, which helps to tell features such as water, crops and bare soil apart.</>,
          ]}
        />
        <Mistake>Thinking that a GIS is only a map on a screen. A GIS links the map to a database, so you can analyse the data and not only look at it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Spatial and attribute data, vector and raster',
    content: slide(
      <>
        <Rule>Spatial data says where a feature is. Attribute data says what it is like, such as the name or the population, and is kept in a table linked to the feature. Vector data stores features as points, lines and polygons. Raster data stores the area as a grid of cells.</Rule>
        <InfoTable
          cols={[{ title: 'Type', w: 24 }, { title: 'Shown as', w: 28 }, { title: 'Example', w: 48 }]}
          rows={[
            ['Point', 'A dot', 'A borehole or a school'],
            ['Line', 'A line', 'A river or a railway line'],
            ['Polygon', 'A closed area', 'A farm or a dam boundary'],
            ['Raster', 'Grid of cells', 'A satellite image'],
          ]}
          aria="A table of data types. Point, shown as a dot, for example a borehole or a school. Line, shown as a line, for example a river or a railway line. Polygon, shown as a closed area, for example a farm or a dam boundary. Raster, shown as a grid of cells, for example a satellite image."
        />
        <RasterGrid cols={6} rows={4} shaded={cells.count} cellM={cells.size} />
        <Worked
          title="Area from raster cells"
          steps={[
            <>One cell is {cells.size} m × {cells.size} m = <strong>{sp(m.cellAreaM2(cells.size))} m²</strong>.</>,
            <>{cells.count} shaded cells cover {cells.count} × {sp(m.cellAreaM2(cells.size))} = {sp(cells.count * m.cellAreaM2(cells.size))} m².</>,
            <>1 ha = 10 000 m², so the area is <strong>{c(m.cellsHa(cells.count, cells.size))} ha</strong>.</>,
          ]}
        />
        <Mistake>Giving the cell size as its area. A 30 m cell is 30 m on each side, so its area is 30 × 30 = 900 m².</Mistake>
      </>,
    ),
  },
  {
    title: 'Data manipulation: buffering, querying and overlay',
    content: slide(
      <>
        <Rule>A GIS can combine layers and ask questions of them. Integration puts layers together. Buffering draws a zone of a set distance around a feature. Querying selects the features that meet one or more conditions. Statistical analysis counts, totals and compares.</Rule>
        <BufferDiagram bufferM={buf.d} lengthM={buf.length} />
        <Worked
          title="Buffer and query"
          steps={[
            <>A {buf.d} m buffer on both sides of a {sp(buf.length)} m river is {m.bufferWidth(buf.d)} m wide. Area = {m.bufferWidth(buf.d)} × {sp(buf.length)} = {sp(m.bufferWidth(buf.d) * buf.length)} m² = <strong>{c(m.bufferAreaHa(buf.length, buf.d))} ha</strong>.</>,
            <>Query: farms near the river are {nearRiver.join(', ')}. Farms on gentle slopes are {gentle.join(', ')}.</>,
            <>Farms that meet <strong>both</strong> conditions are {m.both(nearRiver, gentle).join(' and ')}. Farms that meet <strong>either</strong> are {m.either(nearRiver, gentle).join(', ')}.</>,
          ]}
        />
        <Mistake>Using the buffer distance as the width of the whole zone. A buffer of 100 m on both sides gives a zone 200 m wide.</Mistake>
      </>,
    ),
  },
  {
    title: 'Using GIS, data standards and a paper GIS',
    content: slide(
      <>
        <Rule>Government uses GIS to plan roads, clinics and services, to manage floods and fires, and to run the census. Private companies use it to choose shop sites and to farm precisely. Data must follow standards, be shared carefully and be kept secure. A paper GIS puts each layer on its own sheet of tracing paper.</Rule>
        <GisLayers layers={['Base map', 'Rivers on tracing paper', 'Farms on tracing paper']} />
        <Worked
          title="Building a paper GIS"
          steps={[
            <>Trace one kind of feature from a map or aerial photograph on each sheet of tracing paper.</>,
            <>Mark the same corner points on every sheet so that the layers fit exactly over one another.</>,
            <>Place the sheets over each other to see where features overlap, for example farms that lie in a river buffer.</>,
          ]}
        />
        <Mistake>Forgetting to mark matching corner points. Without them the layers do not line up, and the overlay gives wrong answers.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>Each raster cell is 20 m by 20 m. What is the area of 25 cells in hectares?</>,
            <>A 50 m buffer is made on both sides of a 2 000 m road. What is the area of the buffer in hectares?</>,
            <>Is a river a point, a line or a polygon in a vector GIS?</>,
            <>What does a query do?</>,
          ]}
          answers={[
            <>25 × 400 m² = 10 000 m² = <strong>{c(check.ha)} ha</strong>.</>,
            <>2 × 50 m × 2 000 m = 200 000 m² = <strong>{c(check.buffer)} ha</strong>.</>,
            <>A <strong>line</strong>.</>,
            <>It <strong>selects features that meet conditions</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from mapwork.ts; skillsA.test.ts recomputes every key independently).
export const bank: CapsItem[] = [
  { prompt: "What is a Geographical Information System (GIS)?", options: ["A system that stores, analyses and displays spatial data","A satellite that photographs the Earth every day from space","A map printed on tracing paper and kept in an atlas","A list of town names with their grid references"], answer: "A system that stores, analyses and displays spatial data", explanation: "A GIS is a computer system for working with spatial data, which is data linked to places." },
  { prompt: "What is remote sensing?", options: ["Measuring a river by walking along its bank with a tape","Collecting information about the Earth from a distance","Drawing a map of the whole area from memory","Storing the data of a map on sheets of tracing paper"], answer: "Collecting information about the Earth from a distance", explanation: "Sensors on satellites, aircraft or drones record information without touching the ground." },
  { prompt: "A satellite image has a spatial resolution of 30 m. What does each pixel cover?", options: ["30 km by 30 km of ground","30 cm by 30 cm of ground","30 m by 30 m of ground","30 m² of ground in total"], answer: "30 m by 30 m of ground", explanation: "Spatial resolution is the size of the ground area covered by one pixel." },
  { prompt: "Which type of data stores an area as a grid of cells?", options: ["Vector data","Attribute data","Spectral data","Raster data"], answer: "Raster data", explanation: "Raster data is a grid of cells, as in a satellite image. Vector data uses points, lines and polygons." },
  { prompt: "In a vector GIS, a river is stored as a", options: ["Line","Point","Polygon","Grid cell"], answer: "Line", explanation: "A river is a long, thin feature, so it is stored as a line." },
  { prompt: "Which vector type best shows the boundary of a farm?", options: ["Point","Polygon","Line","Grid cell"], answer: "Polygon", explanation: "A closed area, such as a farm, is stored as a polygon." },
  { prompt: "The population of each town is kept in a table linked to the towns on the map. What kind of data is this?", options: ["Spatial data","Raster data","Attribute data","Remote sensing data"], answer: "Attribute data", explanation: "Attribute data describes what a feature is like. Spatial data says where it is." },
  { prompt: "Each cell of a raster is 30 m by 30 m. What is the ground area of one cell?", options: ["60 m²","90 m²","9 000 m²","900 m²"], answer: "900 m²", explanation: "30 m × 30 m = 900 m²." },
  { prompt: "A feature covers 40 raster cells that are each 30 m by 30 m. What is its area in hectares?", options: ["3,6 ha","36 ha","0,36 ha","1 200 ha"], answer: "3,6 ha", explanation: "40 × 900 m² = 36 000 m². 36 000 ÷ 10 000 = 3,6 ha." },
  { prompt: "A buffer of 100 m is made on both sides of a river that is 3 000 m long. What is the area of the buffer in hectares?", options: ["30 ha","60 ha","600 ha","6 ha"], answer: "60 ha", explanation: "The buffer is 200 m wide: 200 m × 3 000 m = 600 000 m² = 60 ha." },
  { prompt: "What is buffering in a GIS?", options: ["Joining two layers into one","Selecting features with a given attribute","Drawing a zone of a set distance around a feature","Changing the scale of a map"], answer: "Drawing a zone of a set distance around a feature", explanation: "A buffer is a zone of a chosen distance around a point, line or polygon." },
  { prompt: "A GIS is asked to show the farms that are within 500 m of a river and on a slope gentler than 1:20. What is this operation called?", options: ["Remote sensing","Capturing data","Changing the scale","Querying the data"], answer: "Querying the data", explanation: "A query selects the features that meet the given conditions." },
  { prompt: "Farms near a river are A, B and C. Farms on a gentle slope are B, C and D. Which farms meet both conditions?", options: ["B and C","A and D","A, B, C and D","B only"], answer: "B and C", explanation: "Only the farms in both lists meet both conditions: B and C." },
  { prompt: "In a paper GIS, each layer is drawn on", options: ["The same sheet as every other layer","A separate sheet of tracing paper","A photograph of the area","A satellite image"], answer: "A separate sheet of tracing paper", explanation: "Each kind of feature goes on its own sheet of tracing paper, and the sheets are laid over each other." },
  { prompt: "Which of these is an application of GIS by a government?", options: ["Choosing the colours for a topographic map","Measuring a bearing with a compass","Planning where to build clinics and roads","Drawing a cross-section by hand"], answer: "Planning where to build clinics and roads", explanation: "Governments use GIS for planning services, managing disasters and the census." },
];

const GisT2 = () => (
  <CapsSubjectTopic
    title="Geographical Information Systems (GIS)"
    subtitle="Remote sensing, spatial and attribute data, raster and vector, buffering and querying"
    learnSteps={learnSteps}
    task="gr12-gis-t2"
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default GisT2;
