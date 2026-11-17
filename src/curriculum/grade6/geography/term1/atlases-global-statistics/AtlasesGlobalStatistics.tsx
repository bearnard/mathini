import GeoTopic from '../../_shared/GeoTopic';
import type { GeoItem, LearnStep } from '../../_shared/types';

import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CardList, ValueBars } from '../../../../../components/diagrams/g6nst/G6Nst';
import { AtlasPages } from '../../../../../components/diagrams/g6geo/G6Geo';
import { CONTENTS, INDEX, PEAKS, higherBy, pagesIn, sectionOfPage } from '../../../../../components/diagrams/g6geo/g6geoHelpers';

// Every number below comes from g6geoHelpers.ts (tested in g6geoHelpers.test.ts and g6GeoAtlasConifer.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const m = (n: number) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} m`;
const africa = CONTENTS.find((s) => s.name === 'Africa')!;
const durban = INDEX.find((e) => e.place === 'Durban')!;
const [everest, k2, kang] = PEAKS;

export const learnSteps: LearnStep[] = [
  {
    title: 'What an atlas shows',
    content: slide(
      <>
        <Rule>An atlas is a book of maps. Different maps give different kinds of information: where places are, what the land looks like, and facts such as climate or population.</Rule>
        <CardList
          cards={[
            { title: 'Physical maps', line1: 'mountains, rivers,', line2: 'deserts and oceans' },
            { title: 'Political maps', line1: 'countries, borders,', line2: 'provinces and cities' },
            { title: 'Theme maps', line1: 'one topic: climate,', line2: 'population or roads' },
          ]}
          aria="Three kinds of maps in an atlas. Physical maps show mountains, rivers, deserts and oceans. Political maps show countries, borders, provinces and cities. Theme maps show one topic, such as climate, population or roads."
        />
        <Worked
          title="Choose the right map"
          steps={[
            'To find the longest river in Africa, use a physical map.',
            'To see which province Durban is in, use a political map.',
            'To compare how many people live in each province, use a population theme map.',
          ]}
        />
        <Mistake>Using one map for every question. Look at the title and key of a map first, to see what it shows.</Mistake>
      </>,
    ),
  },
  {
    title: 'The contents page and the index',
    content: slide(
      <>
        <Rule>The contents page lists the sections of an atlas with their page numbers. The index lists places in alphabetical order, with the page and the block on the map where each place is found.</Rule>
        <AtlasPages contents={CONTENTS} index={INDEX} />
        <Worked
          title="Find places in the sample atlas"
          steps={[
            `The section on ${africa.name} is on pages ${africa.from} to ${africa.to}, which is ${africa.to} − ${africa.from} + 1 = ${pagesIn(africa)} pages.`,
            `To find ${durban.place}, look it up in the index: page ${durban.page}, block ${durban.ref}.`,
            `Page ${durban.page} is in the section called ${sectionOfPage(durban.page)}.`,
          ]}
        />
        <Mistake>Looking for a place in the contents page. The contents page gives sections. Use the index for a place.</Mistake>
      </>,
    ),
  },
  {
    title: 'Your own province, and places in the news',
    content: slide(
      <>
        <Rule>A map of your own province can show towns and cities, roads, rivers, the shape of the land and borders. We can also find places in the news on a map and follow events all year.</Rule>
        <CardList
          cards={[
            { title: 'On a province map', line1: 'towns, roads, rivers,', line2: 'borders and relief' },
            { title: 'Places in the news', line1: 'find the place in the', line2: 'index, then on the map' },
            { title: 'Keep a record', line1: 'mark each place and', line2: 'write its country' },
          ]}
          aria="What an atlas helps you to find. A map of your own province shows towns, roads, rivers, borders and the shape of the land. For a place in the news, find it in the index and then on the map. Keep a record by marking each place and writing its country."
        />
        <Worked
          title="A place in the news"
          steps={[
            'Hear the name of a place in the news.',
            'Look it up in the atlas index to get the page and the block.',
            'Find it on the map and write down its country and which ocean or continent is near it.',
          ]}
        />
        <Mistake>Guessing where a place is. Always check it in the index and on the map.</Mistake>
      </>,
    ),
  },
  {
    title: 'The world\'s highest mountains',
    content: slide(
      <>
        <Rule>Global statistics are facts and numbers about the whole world. The three highest mountains are Mount Everest, K2 and Kangchenjunga, all in Asia.</Rule>
        <ValueBars items={PEAKS.map((p) => ({ label: p.name, value: p.metres }))} title="Height above sea level" unit="m" color="#818cf8" aria="Bars of the heights of the world's three highest mountains, rounded to the nearest metre. Mount Everest 8849 metres, K2 8611 metres, Kangchenjunga 8586 metres." />
        <Worked
          title="Compare the heights"
          steps={[
            `Mount Everest is the highest at ${m(everest.metres)}.`,
            `It is ${m(everest.metres)} − ${m(k2.metres)} = ${m(higherBy(everest, k2))} higher than K2.`,
            `K2 is ${m(k2.metres)} − ${m(kang.metres)} = ${m(higherBy(k2, kang))} higher than Kangchenjunga.`,
          ]}
        />
        <Mistake>Thinking the numbers never change. Measurements are made more exactly over time, so books may give slightly different figures. Use the atlas you have.</Mistake>
      </>,
    ),
  },
  {
    title: 'More world lists',
    content: slide(
      <>
        <Rule>An atlas has lists of the biggest and the longest things in the world. Use the same atlas to find the three biggest oceans, the largest countries and the biggest deserts and forests.</Rule>
        <CardList
          cards={[
            { title: 'Oceans', line1: 'biggest is the Pacific,', line2: 'then Atlantic, then Indian' },
            { title: 'Countries (area)', line1: 'largest is Russia,', line2: 'then Canada' },
            { title: 'Deserts and forests', line1: 'Sahara: the biggest hot', line2: 'desert; Amazon: rainforest' },
          ]}
          aria="Some world lists. For oceans, the Pacific is the biggest, then the Atlantic, then the Indian Ocean. For countries by area, Russia is the largest, then Canada. The Sahara is the biggest hot desert and the Amazon is the biggest rainforest."
        />
        <Worked
          title="Remember the note"
          steps={[
            'All the oceans join up to make one world ocean. The names are for different parts of it.',
            'For the longest river, the Nile in Africa and the Amazon in South America are the two longest. Which is first depends on how they are measured.',
            'Check the figures in your atlas, because sources can differ.',
          ]}
        />
        <Mistake>Thinking that the oceans are separate. They are joined, but we give each part a name.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Where in an atlas do you look to find the page for a place?</>,
          <>A section is on pages 6 and 7. How many pages is that?</>,
          <>Which is the highest mountain in the world?</>,
          <>Which is the biggest ocean?</>,
        ]}
        answers={[
          <>In the index.</>,
          <>7 − 6 + 1 = {pagesIn({ name: '', from: 6, to: 7 })} pages.</>,
          <>Mount Everest.</>,
          <>The Pacific Ocean.</>,
        ]}
      />,
    ),
  },
];

export const bank: GeoItem[] = [
  {
    prompt: "What is an atlas?",
    options: ["A book of stories", "A kind of globe", "A book of maps", "A list of rivers only"],
    answer: "A book of maps",
    explanation: "An atlas is a book of maps that gives different kinds of information about places.",
  },
  {
    prompt: "Which kind of map shows mountains, rivers and deserts?",
    options: ["A physical map", "A political map", "A road map", "A population map"],
    answer: "A physical map",
    explanation: "Physical maps show the land: mountains, rivers, deserts and oceans.",
  },
  {
    prompt: "Which kind of map shows borders between countries and provinces?",
    options: ["A physical map", "A rainfall map", "A relief map", "A political map"],
    answer: "A political map",
    explanation: "Political maps show countries, borders, provinces and cities.",
  },
  {
    prompt: "Which part of an atlas gives the page and block for a named place?",
    options: ["In the contents page", "In the index", "On the front cover", "In the map key"],
    answer: "In the index",
    explanation: "The index lists places in alphabetical order with the page and block where each is found.",
  },
  {
    prompt: "What does the contents page of an atlas list?",
    options: ["Every town in alphabetical order", "The sections with their page numbers", "The heights of all mountains", "The names of all the map makers"],
    answer: "The sections with their page numbers",
    explanation: "The contents page shows how the atlas is organised, with a page number for each section.",
  },
  {
    prompt: "A section of an atlas runs from page 10 to page 18. How many pages is that?",
    options: ["8 pages", "10 pages", "18 pages", "9 pages"],
    answer: "9 pages",
    explanation: "18 − 10 + 1 = 9 pages. We add 1 because both the first and the last page count.",
  },
  {
    prompt: "The contents page of a sample atlas says that pages 10 to 18 make up one section. The index says that Durban is on page 14 and that Cape Town is on page 17. What does this tell us?",
    options: ["Both places are in the same section of the atlas", "Both places are on the same page of the atlas", "Neither place is shown in the atlas at all", "The two places are very close to each other"],
    answer: "Both places are in the same section of the atlas",
    explanation: "Pages 14 and 17 both lie between page 10 and page 18, so both places are in that one section.",
  },
  {
    prompt: "Which of these places comes first in an alphabetical index?",
    options: ["Cape Town", "Durban", "Bloemfontein", "Polokwane"],
    answer: "Bloemfontein",
    explanation: "An index is in alphabetical order, and B comes before C, D and P.",
  },
  {
    prompt: "Which mountain is the highest of all in the world?",
    options: ["K2", "Kilimanjaro", "Mont Blanc", "Mount Everest"],
    answer: "Mount Everest",
    explanation: "Mount Everest, in Asia, is the highest mountain in the world, then K2 and Kangchenjunga.",
  },
  {
    prompt: "Mount Everest is 8 849 m high and K2 is 8 611 m high. How much higher is Mount Everest?",
    options: ["262 m", "238 m", "17 460 m", "8 849 m"],
    answer: "238 m",
    explanation: "8 849 − 8 611 = 238 m.",
  },
  {
    prompt: "Which of these is the biggest ocean?",
    options: ["The Pacific Ocean", "The Atlantic Ocean", "The Indian Ocean", "The Arctic Ocean"],
    answer: "The Pacific Ocean",
    explanation: "The Pacific is the biggest ocean, followed by the Atlantic and then the Indian Ocean.",
  },
  {
    prompt: "Which country is the largest in the world by area?",
    options: ["Canada", "South Africa", "Russia", "Brazil"],
    answer: "Russia",
    explanation: "Russia is the largest country by area, followed by Canada.",
  },
];

const AtlasesGlobalStatistics = () => (
  <GeoTopic
    title="Atlases and Global Statistics"
    subtitle="Using an atlas, and some facts about the whole world"
    learnSteps={learnSteps}
    task="gr6-atlases-global-statistics-t1"
    bank={bank}
  />
);

export default AtlasesGlobalStatistics;
