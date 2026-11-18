import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import * as g from '../../../../../components/diagrams/geo11/geo11';
import { AtlasGrid, CoreRings, PairBars, RainBars, RostowSteps, SustainCircles, WeekGraph } from '../../../../../components/diagrams/geo11/Geo11Pictures';

// Every number comes from geo11.ts (tested in geo11.test.ts and g11GeoGaps.test.ts). All data are imaginary teaching data.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

import { LatLongGrid } from '../../../../../components/diagrams/geography/MapworkPictures';

export const learnSteps: LearnStep[] = [
  {
    title: 'Kinds of maps in an atlas',
    content: slide(
      <>
        <Rule>An atlas is a book of maps. It holds physical maps, which show landforms and heights, political maps, which show countries and towns, and thematic maps, which show one subject such as climate, vegetation, rainfall or population. Thematic maps in a South African atlas include seasonal temperature and rainfall maps and the world climate and vegetation regions.</Rule>
        <FactCards
          cards={[
            { title: 'Physical', line1: 'mountains, rivers', line2: 'and heights' },
            { title: 'Political', line1: 'countries, borders', line2: 'and cities' },
            { title: 'Thematic', line1: 'one subject, such as', line2: 'rainfall or climate' },
            { title: 'Index', line1: 'a list of places with', line2: 'page and grid block' },
          ]}
          aria="Parts of an atlas. Physical maps show mountains, rivers and heights. Political maps show countries, borders and cities. Thematic maps show one subject, such as rainfall or climate. The index lists places with a page and a grid block."
        />
        <Worked
          title="Choose the map"
          steps={[
            'To find which provinces get most rain in summer, use a thematic rainfall map.',
            'To find the highest mountain in a country, use a physical map.',
            'To find the capital of a neighbouring country, use a political map.',
          ]}
        />
        <Mistake>Using a political map to answer a question about climate. Pick the map whose subject matches the question.</Mistake>
      </>,
    ),
  },
  {
    title: 'Comparing thematic maps',
    content: slide(
      <>
        <Rule>To compare two thematic maps, read the title and key of each first, then look at the same place on both. Patterns that match, such as high rainfall and dense vegetation, suggest a link, but a match shows a relationship and does not prove the cause. Cross-reference means checking one map against another to confirm a pattern.</Rule>
        <FactCards
          cards={[
            { title: 'Read', line1: 'title, key and', line2: 'scale first' },
            { title: 'Locate', line1: 'the same place', line2: 'on both maps' },
            { title: 'Compare', line1: 'do the patterns', line2: 'match?' },
            { title: 'Explain', line1: 'suggest a reason', line2: 'for the link' },
          ]}
          aria="Comparing thematic maps. Read the title, key and scale first. Locate the same place on both maps. Compare whether the patterns match. Explain by suggesting a reason for the link."
        />
        <Worked
          title="Cross-reference two maps"
          steps={[
            'The rainfall map shows more than 800 mm in the east and less than 200 mm in the west.',
            'The vegetation map shows forest and grassland in the east and desert and semi-desert in the west.',
            'The two patterns match: more rain supports denser vegetation.',
          ]}
        />
        <Mistake>Saying that one map proves the other. A matching pattern is evidence of a link, and you should give the reason for it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Map projections',
    content: slide(
      <>
        <Rule>A map projection is a way of drawing the curved Earth on a flat page, and every projection distorts something. An equal-area projection keeps the sizes of areas correct but changes shapes, and is used for maps that compare sizes, such as population or land use. A true-direction projection keeps directions correct, as the Mercator does, and is used for navigation, but it enlarges areas near the poles.</Rule>
        <PairBars title="Africa against Greenland (million km²)" aLabel="Africa" a={g.AREA.africa} bLabel="Greenland" b={g.AREA.greenland} unit="million km²" verdict={`Africa is about ${g.dec(Math.round(g.areaRatio()))} times larger`} />
        <Worked
          title="Choose the projection"
          steps={[
            `A Mercator map makes Greenland look as large as Africa, but Africa is ${g.AREA.africa} million km² and Greenland ${g.dec(g.AREA.greenland)}, about ${g.dec(Math.round(g.areaRatio()))} times smaller.`,
            'To compare the size of countries, use an equal-area projection.',
            'To plot a ship’s course with a compass bearing, use a true-direction projection.',
          ]}
        />
        <Mistake>Thinking that a flat map can be perfect. Every projection gives up something, so choose the one that suits the task.</Mistake>
      </>,
    ),
  },
  {
    title: 'The index and grid references',
    content: slide(
      <>
        <Rule>The atlas index lists places in alphabetical order with a page number and a grid reference. An alphanumeric reference gives the column letter first and the row number second, so D3 is column D and row 3. A geographic reference gives latitude and longitude in degrees and minutes, with 60 minutes in a degree.</Rule>
        <AtlasGrid col={4} row={3} place="Durban" />
        <LatLongGrid latDeg={29} latMin={50} lonDeg={31} lonMin={0} />
        <Worked
          title="Find a place"
          steps={[
            `The index gives ${g.INDEX[0].place} as ${g.INDEX[0].ref}: go across to column D, then down to row 3.`,
            `${g.INDEX[2].place} is ${g.INDEX[2].ref}: column A and row 5.`,
            '29°50′ S is 29 + 50 ÷ 60 = 29,83° S.',
          ]}
        />
        <Mistake>Reading the number first. The letter gives the column and the number gives the row, in that order.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which kind of map shows one subject, such as rainfall?</>,
          <>Which kind of projection keeps sizes correct?</>,
          <>An index gives {g.INDEX[1].place} as {g.INDEX[1].ref}. Which column and row is this?</>,
          <>How many minutes are in a degree?</>,
        ]}
        answers={[
          <>A thematic map.</>,
          <>An equal-area projection.</>,
          <>Column {g.INDEX[1].ref[0]}, row {g.INDEX[1].ref[1]}.</>,
          <>60 minutes.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which kind of atlas map shows a single subject such as rainfall?",
    options: ["A physical map", "A political map", "A thematic map", "A street plan"],
    answer: "A thematic map",
    explanation: "Thematic maps show one theme.",
  },
  {
    prompt: "Which atlas map would show the countries of Africa and their borders?",
    options: ["A political map", "A thematic climate map", "A synoptic chart", "A population pyramid"],
    answer: "A political map",
    explanation: "Political maps show countries and borders.",
  },
  {
    prompt: "Which atlas map would you use to find the highest mountain in a country?",
    options: ["A political map", "A map of road routes", "A trade map", "A physical map"],
    answer: "A physical map",
    explanation: "Physical maps show landforms and heights.",
  },
  {
    prompt: "What should you read first on a thematic map?",
    options: ["The page number", "The title and the key", "The photograph", "The index"],
    answer: "The title and the key",
    explanation: "They tell you what the map shows.",
  },
  {
    prompt: "A rainfall map and a vegetation map match in one region. What does the match suggest?",
    options: ["Proof that one causes the other", "There may be a link between the two", "That the maps are wrong", "That the region has no climate"],
    answer: "There may be a link between the two",
    explanation: "A match suggests a link and needs a reason.",
  },
  {
    prompt: "What is meant by cross-referencing two maps?",
    options: ["Drawing both on one sheet", "Copying a scale", "Measuring the distance between pages", "Checking a pattern on one against the other"],
    answer: "Checking a pattern on one against the other",
    explanation: "It means confirming a pattern with a second source.",
  },
  {
    prompt: "What is a map projection?",
    options: ["A way to draw the Earth flat", "A kind of aerial photograph", "A weather forecast for a week", "A list of places and pages"],
    answer: "A way to draw the Earth flat",
    explanation: "Every projection changes something.",
  },
  {
    prompt: "What does an equal-area projection keep correct?",
    options: ["The shapes of all places", "The compass directions", "The sizes of areas", "The heights of mountains"],
    answer: "The sizes of areas",
    explanation: "Equal-area maps keep area sizes right.",
  },
  {
    prompt: "Which projection is used for navigation because it keeps directions correct?",
    options: ["An equal-area projection of the world", "A thematic map of rainfall", "A relief map of mountains", "A true-direction type, such as Mercator"],
    answer: "A true-direction type, such as Mercator",
    explanation: "The Mercator is suited to compass navigation.",
  },
  {
    prompt: "What is the main limitation of a Mercator map?",
    options: ["It shows no directions at all", "It enlarges areas near the poles", "It has no scale on it", "It shows only the oceans"],
    answer: "It enlarges areas near the poles",
    explanation: "Greenland looks as large as Africa.",
  },
  {
    prompt: "Africa has 30,4 million km² and Greenland 2,17 million km². About how many times larger is Africa?",
    options: ["About 14 times", "About 2 times", "About 30 times", "About 5 times"],
    answer: "About 14 times",
    explanation: "30,4 ÷ 2,17 is about 14.",
  },
  {
    prompt: "The atlas index gives Durban as D3. Which column and row is this?",
    options: ["Column 3, row D", "Column D, row 4", "Column D, row 3", "Column C, row 3"],
    answer: "Column D, row 3",
    explanation: "The letter gives the column and the number gives the row.",
  },
  {
    prompt: "How many minutes are there in one degree?",
    options: ["100", "30", "60", "360"],
    answer: "60",
    explanation: "A degree is divided into 60 minutes.",
  },
  {
    prompt: "What is 29°50′ S as a decimal?",
    options: ["29,83° S", "29,50° S", "29,5° S", "30,50° S"],
    answer: "29,83° S",
    explanation: "29 + 50 ÷ 60 = 29,83.",
  },
];

const UsingAtlases = () => (
  <CapsSubjectTopic
    title="Using Atlases"
    subtitle="Kinds of maps, comparing thematic maps, projections, the index and grid references"
    learnSteps={learnSteps}
    task="gr11-using-atlases-t3"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default UsingAtlases;
