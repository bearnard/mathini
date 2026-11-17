'use client';

import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '../../../life-sciences/_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ContourHill, GradientTriangle, ProfileChart } from '../../../../../components/diagrams/geography/MapworkPictures';
import * as m from '../../../../../components/diagrams/geography/mapwork';

// CAPS Geography Grade 12 (topographic maps): contours and landforms, gradient, cross-sections with vertical exaggeration, intervisibility.
// Numbers come from mapwork.ts (mapwork.test.ts); skillsB.test.ts recomputes every bank key with plain arithmetic. Maps are described in numbers.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;
const sp = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const c = (n: number) => String(n).replace('.', ',');

const gradA = { v: 100, h: m.groundMetres(2, 50000) };
const ve = { horizontal: 50000, metresPerCm: 20 };
const blocked = [1000, 1020, 1100, 1030, 1000];
const clear = [1000, 940, 900, 960, 1000];
const check = { g: m.gradientRatio(50, 1000), ve: m.verticalExaggeration(50000, m.verticalDenominator(10)), cm: m.sectionCm(1060, 1000, 20) };

export const learnSteps: LearnStep[] = [
  {
    title: 'Contour lines and landforms',
    content: slide(
      <>
        <Rule>A contour line joins points of equal height above sea level. The contour interval is the height difference between neighbouring contours. Contours that are close together show a steep slope, and contours that are far apart show a gentle slope. Closed rings with the height rising inwards show a hill.</Rule>
        <ContourHill baseM={1000} interval={20} rings={4} />
        <Worked
          title="Reading heights from contours"
          steps={[
            <>The rings are at 1 000 m, 1 020 m, 1 040 m and 1 060 m, so the contour interval is <strong>{m.contourInterval(1000, 1060, 3)} m</strong>.</>,
            <>A point on the third contour above the 1 000 m contour is 1 000 + 3 × 20 = <strong>{sp(m.heightAbove(1000, 20, 3))} m</strong>.</>,
            <>The left side has the lines close together, so it is steeper. The right side has them far apart, so it is gentler.</>,
            <>Where contours cross a river, they bend into a V that points upstream, uphill.</>,
          ]}
        />
        <Mistake>Reading contours that are close together as a gentle slope. Close lines mean the land rises a lot over a short distance, so the slope is steep.</Mistake>
      </>,
    ),
  },
  {
    title: 'Gradient',
    content: slide(
      <>
        <Rule>Gradient shows how steep a slope is. Gradient = vertical interval ÷ horizontal distance, with both in metres, and is written as 1:x, where x is the horizontal distance for each 1 m of rise. The smaller the x, the steeper the slope.</Rule>
        <GradientTriangle verticalM={gradA.v} horizontalM={gradA.h} />
        <Worked
          title="Gradient between two points"
          steps={[
            <>A is at 1 200 m and B at 1 300 m, so the vertical interval is <strong>{gradA.v} m</strong>.</>,
            <>They are 2 cm apart on a 1:50 000 map: 2 cm × 500 m = <strong>{sp(gradA.h)} m</strong> horizontally.</>,
            <>Gradient = {gradA.v} : {sp(gradA.h)} = 1:{c(m.gradientRatio(gradA.v, gradA.h))}. For every {m.gradientRatio(gradA.v, gradA.h)} m along, the land rises 1 m.</>,
            <>A gradient of 1:10 is steeper than 1:25, because the land rises 1 m in only 10 m.</>,
          ]}
        />
        <Mistake>Mixing units. Change the map distance to metres on the ground first, then divide by the height difference in metres.</Mistake>
      </>,
    ),
  },
  {
    title: 'Cross-sections and vertical exaggeration',
    content: slide(
      <>
        <Rule>A cross-section is a side view of the land along a line A–B. Lay a paper strip along the line, mark each contour crossing and its height, then plot the heights above a base line. The vertical scale is made larger than the horizontal scale to show the relief clearly. This is the vertical exaggeration.</Rule>
        <ProfileChart heights={[1000, 1040, 1100, 1060, 1020]} verticalNote="vertical scale 1 cm = 20 m" />
        <Worked
          title="Plotting and exaggerating"
          steps={[
            <>Base line 1 000 m, and 1 cm on the section stands for {ve.metresPerCm} m. A point at 1 100 m is {m.sectionCm(1100, 1000, 20)} cm above the base line.</>,
            <>1 cm = {ve.metresPerCm} m is the vertical scale 1:{sp(m.verticalDenominator(ve.metresPerCm))}. The horizontal scale is 1:{sp(ve.horizontal)}.</>,
            <>Vertical exaggeration = horizontal scale ÷ vertical scale = {sp(ve.horizontal)} ÷ {sp(m.verticalDenominator(ve.metresPerCm))} = <strong>{m.verticalExaggeration(ve.horizontal, m.verticalDenominator(ve.metresPerCm))} times</strong>.</>,
            <>We exaggerate so that changes in height can be seen clearly. The slopes then look steeper than they are.</>,
          ]}
        />
        <Mistake>Dividing the other way round. The exaggeration is the larger denominator ÷ the smaller one, so it is a number bigger than 1.</Mistake>
      </>,
    ),
  },
  {
    title: 'Intervisibility',
    content: slide(
      <>
        <Rule>Two points are intervisible if you can see one from the other. Draw a straight line of sight from A to B on the cross-section. If every point between them lies below that line, they are intervisible. If a hill or ridge reaches or rises above the line, it blocks the view.</Rule>
        <ProfileChart heights={blocked} sight />
        <Worked
          title="Is B visible from A?"
          steps={[
            <>A and B are both {sp(blocked[0])} m high, so the line of sight is level at {sp(blocked[0])} m.</>,
            <>The points between them are {blocked.slice(1, -1).map(sp).join(' m, ')} m, and each is above the line, so the view is blocked.</>,
            <>On another line of heights, {clear.map(sp).join(' m, ')} m, the points in between are all below the line. A and B are <strong>{m.intervisible(clear) ? 'intervisible' : 'not intervisible'}</strong>.</>,
          ]}
        />
        <Mistake>Thinking that two points at the same height can always see each other. A ridge between them can still block the view.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>The height difference is 50 m over 1 000 m. What is the gradient?</>,
            <>The horizontal scale is 1:50 000 and the vertical scale is 1 cm = 10 m. What is the vertical exaggeration?</>,
            <>On a section where 1 cm = 20 m and the base line is 1 000 m, how high above the line is a point of 1 060 m?</>,
            <>Contours are close together. Is the slope steep or gentle?</>,
          ]}
          answers={[
            <><strong>1:{c(check.g)}</strong>, because 1 000 ÷ 50 = {c(check.g)}.</>,
            <>50 000 ÷ 1 000 = <strong>{check.ve} times</strong>.</>,
            <>(1 060 − 1 000) ÷ 20 = <strong>{check.cm} cm</strong>.</>,
            <><strong>Steep</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from mapwork.ts; skillsA.test.ts recomputes every key independently).
export const bank: CapsItem[] = [
  { prompt: "Contour lines are close together on part of a topographic map. What does this show?", options: ["A steep slope","A gentle slope","A flat plateau","A deep lake"], answer: "A steep slope", explanation: "Close contours mean a large height change over a short distance: a steep slope." },
  { prompt: "The contour interval is 20 m. A point lies on the third contour line above the 1 000 m contour. What is its height?", options: ["1 020 m","1 060 m","1 080 m","1 003 m"], answer: "1 060 m", explanation: "Three contours above 1 000 m: 1 000 + 3 × 20 = 1 060 m." },
  { prompt: "Closed contour rings with the heights increasing towards the middle show what landform?", options: ["A valley","A cliff","A hill","A plateau"], answer: "A hill", explanation: "Rings that rise towards the centre show a hill." },
  { prompt: "Contour lines cross a river valley and bend into a V. In which direction does the point of the V point?", options: ["Downstream, downhill","Along the river bank","Towards true north","Upstream, uphill"], answer: "Upstream, uphill", explanation: "Contours bend upstream where they cross a river, so the V points uphill." },
  { prompt: "The height difference between two points is 100 m and the horizontal distance is 2 500 m. What is the gradient?", options: ["1:25","1:250","1:2,5","1:2 500"], answer: "1:25", explanation: "2 500 ÷ 100 = 25, so the gradient is 1:25." },
  { prompt: "Point A is at 1 200 m and point B at 1 300 m. They are 2 cm apart on a map at 1:50 000. What is the gradient from A to B?", options: ["1:50","1:10","1:100","1:5"], answer: "1:10", explanation: "2 cm × 500 m = 1 000 m horizontally and 100 m vertically. 1 000 ÷ 100 = 10, so 1:10." },
  { prompt: "Which of these gradients is the steepest?", options: ["1:25","1:50","1:10","1:100"], answer: "1:10", explanation: "The smaller the number after the colon, the steeper the slope." },
  { prompt: "A slope has a gradient of 1:20. How much does the land rise over 20 m of horizontal distance?", options: ["20 m","2 m","0,5 m","1 m"], answer: "1 m", explanation: "A gradient of 1:20 means 1 m of rise for every 20 m of horizontal distance." },
  { prompt: "The horizontal scale of a cross-section is 1:50 000 and the vertical scale is 1 cm = 20 m. What is the vertical exaggeration?", options: ["25 times","2,5 times","250 times","20 times"], answer: "25 times", explanation: "1 cm = 20 m is 1:2 000. 50 000 ÷ 2 000 = 25 times." },
  { prompt: "A cross-section has a horizontal scale of 1:50 000 and a vertical scale of 1 cm = 10 m. What is the vertical exaggeration?", options: ["5 times","50 times","500 times","10 times"], answer: "50 times", explanation: "1 cm = 10 m is 1:1 000. 50 000 ÷ 1 000 = 50 times." },
  { prompt: "Why is the vertical scale of a cross-section made larger than the horizontal scale?", options: ["To make the horizontal distance longer","To correct for the magnetic declination","So that changes in height can be seen clearly","To show the scale of the whole map"], answer: "So that changes in height can be seen clearly", explanation: "Exaggerating the vertical scale makes the relief easy to see." },
  { prompt: "On a cross-section 1 cm stands for 20 m and the base line is 1 000 m. How far above the base line is a point at 1 100 m drawn?", options: ["2,5 cm","11 cm","10 cm","5 cm"], answer: "5 cm", explanation: "(1 100 − 1 000) ÷ 20 = 5 cm." },
  { prompt: "The heights from A to B at equal steps are 1 000 m, 1 020 m, 1 100 m, 1 030 m and 1 000 m. Can A and B see each other?", options: ["No, because the 1 100 m point is above the line of sight","Yes, because A and B are the same height","Yes, because the land rises and falls evenly","No, because B is lower than the 1 020 m point"], answer: "No, because the 1 100 m point is above the line of sight", explanation: "The line of sight is level at 1 000 m. The points of 1 020 m, 1 100 m and 1 030 m are above it, so the view is blocked." },
  { prompt: "The heights from A to B at equal steps are 1 000 m, 940 m, 900 m, 960 m and 1 000 m. Are A and B intervisible?", options: ["No, because the land goes up and down all the way between them","Yes, because every height between them is below the line of sight","No, because B is not higher than A on the line of sight","No, because A is higher than the land in between them"], answer: "Yes, because every height between them is below the line of sight", explanation: "The line of sight is level at 1 000 m and every point in between is lower, so nothing blocks the view." },
];

const ContoursGradientSectionsT1 = () => (
  <CapsSubjectTopic
    title="Contours, Gradient, Cross-sections and Intervisibility"
    subtitle="Reading relief on a topographic map and drawing a cross-section"
    learnSteps={learnSteps}
    task="gr12-contours-gradient-sections-t1"
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default ContoursGradientSectionsT1;
