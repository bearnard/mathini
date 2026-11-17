'use client';

import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '../../../life-sciences/_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { BearingRose, DeclinationDiagram } from '../../../../../components/diagrams/geography/MapworkPictures';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as m from '../../../../../components/diagrams/geography/mapwork';

// CAPS Geography Grade 12 (topographic maps): direction (16 compass points), true and magnetic bearing, magnetic north, true north and magnetic declination.
// South Africa: magnetic north lies WEST of true north, so a magnetic bearing is the true bearing PLUS the declination. Numbers come from mapwork.ts.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;

const trueB = 65;
const decl = m.dm(19, 0);
const baseDecl = m.dm(24, 10);
const nowDecl = m.declinationOnYear(baseDecl, 2006, 6, 2026);
const trueBearing2 = 120;
const magB = m.addDeclination(trueBearing2, nowDecl);
const check = { back: m.backBearing(300), mag: m.magneticFromTrue(210, 18), now: m.declinationOnYear(m.dm(23, 45), 2010, 6, 2020) };

export const learnSteps: LearnStep[] = [
  {
    title: 'Compass points and true bearings',
    content: slide(
      <>
        <Rule>A true bearing is an angle measured clockwise from true north, from 000° to 360°, and written with three digits. The 16 compass points are 22,5° apart. North is 000°, east 090°, south 180° and west 270°.</Rule>
        <BearingRose bearing={m.pointBearing('SE')} label="The arrow points south-east." />
        <Worked
          title="From a compass point to a bearing"
          steps={[
            <>North-east (NE) is half way between north and east: <strong>{m.bearingText(m.pointBearing('NE'))}</strong>.</>,
            <>South-west (SW) is half way between south and west: <strong>{m.bearingText(m.pointBearing('SW'))}</strong>.</>,
            <>East-north-east (ENE) lies between NE and E: 67,5°. The 16-point names are NNE, ENE, ESE, SSE, SSW, WSW, WNW and NNW.</>,
          ]}
        />
        <Mistake>Measuring a bearing anticlockwise, or from east. A bearing is always clockwise from north, so west is 270°, not 90°.</Mistake>
      </>,
    ),
  },
  {
    title: 'Bearing from A to B and the back bearing',
    content: slide(
      <>
        <Rule>The bearing from A to B is measured at A. To get the bearing back from B to A, add or subtract 180° so that the answer stays between 000° and 360°. The two bearings point in opposite directions.</Rule>
        <BearingRose bearing={trueB} label="The bearing from A to B." />
        <Worked
          title="Back bearing"
          steps={[
            <>The bearing from A to B is {m.bearingText(trueB)}.</>,
            <>Back bearing = {trueB}° + 180° = <strong>{m.bearingText(m.backBearing(trueB))}</strong>.</>,
            <>If the bearing is 250°, the back bearing is 250° − 180° = <strong>{m.bearingText(m.backBearing(250))}</strong>.</>,
            <>A point 1 km east and 1 km north of A has a bearing of {m.bearingText(m.bearingFromOffsets(1000, 1000))} from A.</>,
          ]}
        />
        <Mistake>Adding 180° to a bearing bigger than 180° and leaving the answer above 360°. Subtract 180° instead.</Mistake>
      </>,
    ),
  },
  {
    title: 'True north, magnetic north and declination',
    content: slide(
      <>
        <Rule>A compass points to magnetic north, which is not at true north. The angle between them is the magnetic declination. In South Africa magnetic north lies west of true north, so a magnetic bearing is larger than the true bearing: magnetic bearing = true bearing + declination.</Rule>
        <DeclinationDiagram declination={decl} trueBearing={trueB} magneticBearing={m.magneticFromTrue(trueB, decl)} />
        <Worked
          title="True bearing to magnetic bearing"
          steps={[
            <>Declination {m.dmText(decl)} W, true bearing {m.bearingText(trueB)}.</>,
            <>Magnetic bearing = {trueB}° + {decl}° = <strong>{m.bearingText(m.magneticFromTrue(trueB, decl))}</strong>.</>,
            <>To go back to a true bearing from a magnetic one, subtract: {m.bearingText(m.magneticFromTrue(trueB, decl))} − {decl}° = {m.bearingText(trueB)}.</>,
          ]}
        />
        <Mistake>Subtracting the declination to go from true to magnetic. When the declination is west, the magnetic bearing is larger.</Mistake>
      </>,
    ),
  },
  {
    title: 'The declination today',
    content: slide(
      <>
        <Rule>The map prints the declination for the year it was made and the mean annual change. Find the number of years, multiply by the yearly change in minutes, add to the printed declination and carry minutes into degrees: 60 minutes is 1 degree.</Rule>
        <InfoTable
          cols={[{ title: 'Step', w: 30 }, { title: 'Working', w: 70 }]}
          rows={[
            ['Map says', "24°10' W in 2006,\nincreasing 6' W a year"],
            ['Years', '2026 − 2006 = 20 years'],
            ['Change', "20 × 6' = 120' = 2°"],
            ['Declination', "24°10' + 2° = 26°10' W"],
          ]}
          aria="A table showing the steps. The map says 24 degrees 10 minutes west in 2006, increasing by 6 minutes west a year. The number of years is 2026 minus 2006, which is 20 years. The change is 20 times 6 minutes, which is 120 minutes or 2 degrees. The declination in 2026 is 24 degrees 10 minutes plus 2 degrees, which is 26 degrees 10 minutes west."
        />
        <Worked
          title="Then the magnetic bearing"
          steps={[
            <>The declination in 2026 is <strong>{m.dmText(nowDecl)} W</strong>.</>,
            <>A tower has a true bearing of {m.bearingText(trueBearing2)}. Magnetic bearing = {trueBearing2}° + {m.dmText(nowDecl)} = <strong>{m.dmText(magB)}</strong>.</>,
            <>If the minutes pass 60, carry 1° for each 60': for example 50' + 20' = 70' = 1°10'.</>,
          ]}
        />
        <Mistake>Using the printed declination without correcting it for the years since the map was made. The exam asks for the declination in the present year.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>What is the back bearing of 300°?</>,
            <>The declination is 18° W. Find the magnetic bearing for a true bearing of 210°.</>,
            <>A map gives 23°45&apos; W in 2010, increasing by 6&apos; a year. What is the declination in 2020?</>,
            <>On which side of true north does magnetic north lie in South Africa?</>,
          ]}
          answers={[
            <>300° − 180° = <strong>{m.bearingText(check.back)}</strong>.</>,
            <>210° + 18° = <strong>{m.bearingText(check.mag)}</strong>.</>,
            <>10 years × 6&apos; = 60&apos; = 1°, so 23°45&apos; + 1° = <strong>{m.dmText(check.now)} W</strong>.</>,
            <>On the <strong>west</strong> side of true north.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from mapwork.ts; skillsA.test.ts recomputes every key independently).
export const bank: CapsItem[] = [
  { prompt: "What is the true bearing of south-west (SW)?", options: ["225°","135°","315°","205°"], answer: "225°", explanation: "South is 180° and west is 270°. South-west is half way between them: 225°." },
  { prompt: "Which compass point has a true bearing of 135°?", options: ["SW","SE","NE","ESE"], answer: "SE", explanation: "East is 090° and south is 180°. South-east is half way between them: 135°." },
  { prompt: "The bearing from A to B is 065°. What is the bearing from B back to A?", options: ["115°","295°","245°","025°"], answer: "245°", explanation: "Add 180°: 065° + 180° = 245°." },
  { prompt: "The bearing from P to Q is 250°. What is the back bearing from Q to P?", options: ["160°","340°","110°","070°"], answer: "070°", explanation: "Subtract 180° from a bearing bigger than 180°: 250° − 180° = 070°." },
  { prompt: "Town Q is 2 km east and 2 km north of town P. What is the true bearing of Q from P?", options: ["045°","135°","225°","315°"], answer: "045°", explanation: "Equal distances east and north give a direction half way between north and east: 045°." },
  { prompt: "Hill H is 3 km west and 3 km south of a picnic site. What is the true bearing of H from the site?", options: ["045°","225°","135°","315°"], answer: "225°", explanation: "West and south in equal amounts is south-west: 225°." },
  { prompt: "The magnetic declination is 19° W. A tower has a true bearing of 065°. What is its magnetic bearing?", options: ["046°","065°","084°","019°"], answer: "084°", explanation: "Magnetic north is west of true north, so the magnetic bearing is larger: 065° + 19° = 084°." },
  { prompt: "The magnetic declination is 22° W and a compass reads a magnetic bearing of 140°. What is the true bearing?", options: ["162°","140°","022°","118°"], answer: "118°", explanation: "Subtract the west declination: 140° − 22° = 118°." },
  { prompt: "In South Africa, where does magnetic north lie in relation to true north?", options: ["West of true north","East of true north","At the same place as true north","Directly below true north"], answer: "West of true north", explanation: "South African maps show magnetic north to the west of true north, so the declination is west." },
  { prompt: "A map gives a magnetic declination of 24°10' W in 2006 and says it increases by 6' W each year. What is the declination in 2026?", options: ["24°16' W","26°10' W","25°10' W","26°30' W"], answer: "26°10' W", explanation: "2026 − 2006 = 20 years. 20 × 6' = 120' = 2°. 24°10' + 2° = 26°10' W." },
  { prompt: "A map gives a declination of 22°40' W in 2015 and says it increases by 8' W each year. What is the declination in 2025?", options: ["23°20' W","22°48' W","24°00' W","24°10' W"], answer: "24°00' W", explanation: "10 years × 8' = 80'. 22°40' + 80' = 22°120' = 24°00'. Carry 60' as 1° each time." },
  { prompt: "The declination in a year is 26°10' W. A tower has a true bearing of 090°. What is its magnetic bearing?", options: ["063°50'","090°","116°","116°10'"], answer: "116°10'", explanation: "True bearing + west declination: 090° + 26°10' = 116°10'." },
  { prompt: "Hill K is due west of hill J. What is the true bearing of K from J?", options: ["270°","180°","090°","360°"], answer: "270°", explanation: "West is 270° measured clockwise from north." },
  { prompt: "How are bearings measured?", options: ["Anticlockwise from north","Clockwise from north","Clockwise from east","Anticlockwise from south"], answer: "Clockwise from north", explanation: "A bearing is the angle clockwise from north, written with three digits." },
];

const BearingsDeclinationT1 = () => (
  <CapsSubjectTopic
    title="Direction, Bearings and Magnetic Declination"
    subtitle="Compass points, true and magnetic bearings, and the declination today"
    learnSteps={learnSteps}
    task="gr12-bearings-declination-t1"
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default BearingsDeclinationT1;
