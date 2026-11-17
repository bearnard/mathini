'use client';

import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '../../../life-sciences/_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { GridArea, MapRoute, ScaleBar } from '../../../../../components/diagrams/geography/MapworkPictures';
import * as m from '../../../../../components/diagrams/geography/mapwork';

// CAPS Geography Grade 12 (mapwork skills, applied in Paper 2): scale, measuring distance (straight and curved) and calculating area on a 1:50 000 map.
// Every number comes from mapwork.ts (mapwork.test.ts); the questions carry no picture, so each map is described in numbers.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;
const c = (n: number) => String(n).replace('.', ',');
const sp = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

const pieces = [3, 2.4, 1.6];
const total = m.routeCm(pieces);
const find = { cm: 4, ground: 1600 };
const check = { a: m.groundMetres(9, 50000), b: m.mapCmFor(3000, 50000), c: m.mapRectKm2(5, 3, 50000) };

export const learnSteps: LearnStep[] = [
  {
    title: 'Three ways to write a scale',
    content: slide(
      <>
        <Rule>The scale tells you how much smaller the map is than the ground. A word scale says &quot;1 cm represents 500 m&quot;. A ratio scale says 1:50 000, which means 1 cm on the map is 50 000 cm on the ground. A line scale is a bar marked in ground distances.</Rule>
        <ScaleBar denominator={50000} cm={4} />
        <Worked
          title="Changing 1:50 000 into ground distance"
          steps={[
            <>1 cm on the map is 50 000 cm on the ground.</>,
            <>50 000 cm ÷ 100 = <strong>500 m</strong>, so 1 cm stands for 500 m, or 0,5 km.</>,
            <>On the line scale each centimetre adds 0,5 km, so 4 cm on the map is <strong>2 km</strong> on the ground.</>,
          ]}
        />
        <Mistake>Dividing by 1 000 only. To change cm to metres you divide by 100, and to change cm to kilometres you divide by 100 000.</Mistake>
      </>,
    ),
  },
  {
    title: 'Measuring distance, straight or curved',
    content: slide(
      <>
        <Rule>Measure the map distance in centimetres with a ruler. For a curved route, lay a piece of string or the edge of a paper strip along it, or add up short straight pieces. Then multiply by the scale to get the ground distance.</Rule>
        <MapRoute pieces={pieces} denominator={50000} />
        <Worked
          title="A curved road on a 1:50 000 map"
          steps={[
            <>The road is measured in three pieces: {pieces.map(c).join(' cm + ')} cm = <strong>{c(total)} cm</strong>.</>,
            <>{c(total)} cm × 50 000 = {sp(total * 50000)} cm, and ÷ 100 gives <strong>{m.metresText(m.groundMetres(total, 50000))}</strong> on the ground.</>,
            <>Always write the unit: m or km.</>,
          ]}
        />
        <Mistake>Measuring a curved road with a straight line from end to end. That gives the shortest distance, not the length of the road.</Mistake>
      </>,
    ),
  },
  {
    title: 'Finding the scale, and large and small scales',
    content: slide(
      <>
        <Rule>If you know a map distance and the ground distance, you can find the scale: change the ground distance to centimetres and divide it by the map distance. The scale with the smaller number after the colon is the larger scale and shows more detail.</Rule>
        <ScaleBar denominator={10000} cm={4} />
        <Worked
          title="Working out the scale and comparing scales"
          steps={[
            <>Two points are {find.cm} cm apart on a map and {m.metresText(find.ground)} apart on the ground.</>,
            <>{sp(find.ground)} m = {sp(find.ground * 100)} cm. {sp(find.ground * 100)} ÷ {find.cm} = {sp(m.scaleDenominator(find.cm, find.ground))}, so the scale is <strong>1:{sp(m.scaleDenominator(find.cm, find.ground))}</strong>.</>,
            <>1:10 000 is a larger scale than 1:50 000. It is {m.scaleRatio(10000, 50000)} times the scale, so 1 km is 10 cm on the 1:10 000 map and only 2 cm on the 1:50 000 map.</>,
          ]}
        />
        <Mistake>Thinking that 1:250 000 is a larger scale because the number is bigger. A bigger number after the colon means a smaller scale and less detail.</Mistake>
      </>,
    ),
  },
  {
    title: 'Calculating area',
    content: slide(
      <>
        <Rule>Change the map lengths to ground lengths first, then multiply length by breadth. On a 1:50 000 map the grid squares are 2 cm by 2 cm, so each square is 1 km by 1 km, which is 1 km². One square kilometre is 100 hectares.</Rule>
        <GridArea cols={6} rows={4} shadeCols={4} shadeRows={3} />
        <Worked
          title="A rectangular farm on a 1:50 000 map"
          steps={[
            <>The farm covers 4 squares across and 3 squares down: 4 km by 3 km.</>,
            <>Area = 4 km × 3 km = <strong>{m.areaKm2(4, 3)} km²</strong>.</>,
            <>In hectares: {m.areaKm2(4, 3)} × 100 = <strong>{m.hectares(m.areaKm2(4, 3))} ha</strong>.</>,
            <>Measured with a ruler, a farm of 5 cm by 3 cm is 2,5 km by 1,5 km = {c(m.mapRectKm2(5, 3, 50000))} km².</>,
          ]}
        />
        <Mistake>Multiplying the map lengths by the scale once for the area. The scale changes each length, so convert both lengths and then multiply.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>On a 1:50 000 map, a road measures 9 cm. How long is it on the ground?</>,
            <>A river is 3 km long. How many cm is that on a 1:50 000 map?</>,
            <>A farm is 5 cm by 3 cm on a 1:50 000 map. What is its area?</>,
            <>Which is the larger scale: 1:10 000 or 1:50 000?</>,
          ]}
          answers={[
            <>9 × 500 m = <strong>{m.metresText(check.a)}</strong>.</>,
            <>3 000 m ÷ 500 m per cm = <strong>{c(check.b)} cm</strong>.</>,
            <>2,5 km × 1,5 km = <strong>{c(check.c)} km²</strong>.</>,
            <><strong>1:10 000</strong>, because its number after the colon is smaller.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from mapwork.ts; skillsA.test.ts recomputes every key independently).
export const bank: CapsItem[] = [
  { prompt: "On a map at 1:50 000, two farms are 7,2 cm apart. What is the ground distance between them?", options: ["3,6 km","360 m","36 km","0,36 km"], answer: "3,6 km", explanation: "7,2 cm × 50 000 = 360 000 cm. 360 000 ÷ 100 = 3 600 m = 3,6 km." },
  { prompt: "At the scale 1:50 000, how many metres on the ground does 1 cm on the map represent?", options: ["50 m","500 m","5 km","50 000 m"], answer: "500 m", explanation: "1 cm × 50 000 = 50 000 cm, and 50 000 ÷ 100 = 500 m." },
  { prompt: "Two towns are 8 cm apart on a map at 1:250 000. How far apart are they on the ground?", options: ["2 km","200 km","20 km","25 km"], answer: "20 km", explanation: "8 cm × 250 000 = 2 000 000 cm. 2 000 000 ÷ 100 000 = 20 km." },
  { prompt: "A road measures 3,4 cm on a map at 1:10 000. What is its length on the ground?", options: ["34 m","3,4 km","3 400 m","340 m"], answer: "340 m", explanation: "3,4 cm × 10 000 = 34 000 cm = 340 m." },
  { prompt: "A river is 5,5 km long on the ground. What is its length on a map at 1:50 000?", options: ["11 cm","5,5 cm","110 cm","1,1 cm"], answer: "11 cm", explanation: "5,5 km = 550 000 cm. 550 000 ÷ 50 000 = 11 cm." },
  { prompt: "Two points are 4 cm apart on a map and 2 km apart on the ground. What is the scale of the map?", options: ["1:5 000","1:50 000","1:500 000","1:20 000"], answer: "1:50 000", explanation: "2 km = 200 000 cm. 200 000 ÷ 4 = 50 000, so the scale is 1:50 000." },
  { prompt: "A map distance of 5 cm stands for 1 km on the ground. Which scale is this?", options: ["1:2 000","1:200 000","1:20 000","1:5 000"], answer: "1:20 000", explanation: "1 km = 100 000 cm. 100 000 ÷ 5 = 20 000, so the scale is 1:20 000." },
  { prompt: "Which of these is the largest scale?", options: ["1:50 000","1:250 000","1:1 000 000","1:10 000"], answer: "1:10 000", explanation: "The smaller the number after the colon, the larger the scale and the more detail it shows." },
  { prompt: "A route is measured in three straight pieces of 3,5 cm, 2 cm and 1,5 cm on a map at 1:50 000. How long is the route on the ground?", options: ["3,5 km","35 km","350 m","7 km"], answer: "3,5 km", explanation: "The pieces add up to 7 cm. 7 cm × 500 m = 3 500 m = 3,5 km." },
  { prompt: "A farm is a rectangle 6 cm by 4 cm on a map at 1:50 000. What is its area on the ground?", options: ["24 km²","6 km²","600 km²","12 km²"], answer: "6 km²", explanation: "6 cm = 3 km and 4 cm = 2 km. 3 km × 2 km = 6 km²." },
  { prompt: "A farm is 2,5 km long and 1,2 km wide. What is its area in hectares?", options: ["30 ha","3 000 ha","300 ha","3 ha"], answer: "300 ha", explanation: "2,5 × 1,2 = 3 km². 1 km² = 100 ha, so 3 km² = 300 ha." },
  { prompt: "Each grid square on a 1:50 000 map measures 2 cm by 2 cm. What ground area does one square cover?", options: ["2 km²","0,5 km²","4 km²","1 km²"], answer: "1 km²", explanation: "2 cm stands for 1 km, so a square is 1 km by 1 km = 1 km²." },
  { prompt: "A town covers 18 whole grid squares on a map at 1:50 000. What is the area of the town?", options: ["18 km²","36 km²","9 km²","1,8 km²"], answer: "18 km²", explanation: "Each square is 1 km², so 18 squares are 18 km²." },
  { prompt: "On a map at 1:10 000, how many centimetres stand for 1 km on the ground?", options: ["2 cm","10 cm","20 cm","100 cm"], answer: "10 cm", explanation: "1 km = 100 000 cm. 100 000 ÷ 10 000 = 10 cm." },
];

const MapScaleDistanceAreaT1 = () => (
  <CapsSubjectTopic
    title="Map Scale, Distance and Area"
    subtitle="Scale, measuring distance and calculating area on a 1:50 000 map"
    learnSteps={learnSteps}
    task="gr12-map-scale-distance-area-t1"
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default MapScaleDistanceAreaT1;
