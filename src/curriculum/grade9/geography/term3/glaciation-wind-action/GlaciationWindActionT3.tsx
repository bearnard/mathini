import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../geography/_shared/types';
import ClimateGraph from '@/components/subjects/ClimateGraph';


const learnSteps: LearnStep[] = [
  {
    title: 'What is glaciation?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Glaciation</strong> is the process of ice formation, flow, and erosion by glaciers. Glaciers are large, slow-moving masses of ice.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key point:</p>
          <p className="text-slate-600">Glaciers are powerful agents of erosion; they carve distinct U-shaped valleys and transport huge boulders.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Glacial landscapes and erosional forms',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Glaciers create distinctive landscape features through erosion and deposition:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">U-shaped valleys</strong>
            <p className="text-slate-600">Deep, wide valleys carved by moving ice (unlike V-shaped river valleys).</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4">
            <strong className="text-cyan-700">Hanging valleys</strong>
            <p className="text-slate-600">Side valleys that drop steeply into the main glacial valley.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Cirques</strong>
            <p className="text-slate-600">Bowl-shaped depressions where glaciers originate.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Wind action and desert erosion',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Wind is a major erosive agent, especially in arid and semi-arid regions.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Wind erosion</strong>
            <p className="text-slate-600">Wind removes fine particles (sand and silt) from surfaces.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Sand dunes</strong>
            <p className="text-slate-600">Sand accumulations shaped by wind direction and patterns.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Desert features</strong>
            <p className="text-slate-600">Deflation basins, yardangs (wind-sculpted ridges), and ventifacts (wind-faceted rocks).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Glaciated and arid landscapes in Africa',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          While Africa is primarily tropical/subtropical, glacial and wind-eroded landscapes exist:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">High mountains:</strong>
            <p className="text-slate-600">Kilimanjaro and Rwenzori have small glaciers and glacial features.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Arid regions:</strong>
            <p className="text-slate-600">The Kalahari and Sahara show wind erosion and sand dune landscapes.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Climate Data — McMurdo, Antarctica',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">This Antarctic climate graph shows extremely low temperatures and very low precipitation. Cold conditions allow snow and ice to remain for long periods, shaping glacial landscapes.</p>
        <div className="mx-auto max-w-3xl">
          <ClimateGraph
            station="McMurdo, Antarctica"
            data={[
                      { month: 'Jan', rainfall: 18, temp: -3 },
                      { month: 'Feb', rainfall: 16, temp: -6 },
                      { month: 'Mar', rainfall: 14, temp: -12 },
                      { month: 'Apr', rainfall: 12, temp: -17 },
                      { month: 'May', rainfall: 10, temp: -21 },
                      { month: 'Jun', rainfall: 8, temp: -25 },
                      { month: 'Jul', rainfall: 8, temp: -26 },
                      { month: 'Aug', rainfall: 8, temp: -24 },
                      { month: 'Sep', rainfall: 9, temp: -19 },
                      { month: 'Oct', rainfall: 12, temp: -12 },
                      { month: 'Nov', rainfall: 14, temp: -6 },
                      { month: 'Dec', rainfall: 16, temp: -2 },
                    ]}
          />
        </div>

        <p className="text-sm text-slate-500">Very cold, dry polar climates help preserve glaciers, ice sheets, and freeze-thaw processes that shape the land.</p>
      <div className="space-y-2">
  <p className="text-slate-600">{"In dry areas, strong wind lifts loose sand and dust and carries it away (deflation). Over time this leaves a hollow in the ground where the fine material has been blown out."}</p>
</div>
</div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a glacier?',
    options: ['A frozen lake that stays solid all year', 'A large, slow-moving mass of ice', 'A waterfall that freezes in winter', 'A type of rock formed by cold weather'],
    answer: 'A large, slow-moving mass of ice',
    explanation: 'Glaciers form from compacted snow and flow very slowly downhill.',
  },
  {
    prompt: 'What shape valley does a glacier carve?',
    options: ['V-shaped', 'U-shaped', 'Square', 'Circular'],
    answer: 'U-shaped',
    explanation: 'Glacial valleys are broad and deep with steep sides, unlike narrow V-shaped river valleys.',
  },
  {
    prompt: 'What is glaciation?',
    options: ['Erosion caused by freezing and thawing only', 'The forming, flowing and eroding action of glaciers', 'Erosion caused by the wind alone', 'Erosion caused by the flow of rivers'],
    answer: 'The forming, flowing and eroding action of glaciers',
    explanation: 'Glaciation is a powerful geomorphological process that shapes landscapes over millennia.',
  },
  {
    prompt: 'What is a cirque?',
    options: ['The flat floor of a wide river valley', 'A bowl-shaped hollow where a glacier begins', 'A rocky feature along a coast shaped by waves', 'A sand dune that is shaped by the wind'],
    answer: 'A bowl-shaped hollow where a glacier begins',
    explanation: 'Cirques are amphitheatre-like features carved by glacial erosion at mountain headwaters.',
  },
  {
    prompt: 'What is a hanging valley?',
    options: ['A lake that fills a hollow high in the mountains', 'A side valley that drops steeply into a main glacial valley', 'A flat plateau high above a river valley', 'A ridge that runs between two river valleys'],
    answer: 'A side valley that drops steeply into a main glacial valley',
    explanation: 'Hanging valleys form where smaller glaciers joined a main glacier at different levels.',
  },
  {
    prompt: 'How does wind cause erosion?',
    options: ['It does not, since air is too light to wear rock', 'By carrying fine sand and silt that wears surfaces away', 'It happens in deserts only, where there is sand', 'It happens only in water, by waves and currents'],
    answer: 'By carrying fine sand and silt that wears surfaces away',
    explanation: 'Wind erosion is significant in arid regions with sparse vegetation.',
  },
  {
    prompt: 'What is a deflation basin?',
    options: ['A sand dune that is built up and moved by the wind', 'A hollow where wind has removed fine material, leaving bare rock', 'A feature that is carved out by a moving glacier', 'A river delta where sediment is dropped by water'],
    answer: 'A hollow where wind has removed fine material, leaving bare rock',
    explanation: 'Deflation creates hollows in desert areas.',
  },
  {
    prompt: 'What are yardangs?',
    options: ['A kind of sand dune with a curved crest', 'Ridges sculpted by wind that run along the prevailing wind', 'Hollows cut into rock by ice from glaciers', 'Rock towers shaped by running water in a river'],
    answer: 'Ridges sculpted by wind that run along the prevailing wind',
    explanation: 'Yardangs show the direction and power of wind erosion.',
  },
  {
    prompt: 'Where in Africa would you find glacial features?',
    options: ['The hot desert lowlands of the Sahara', 'High mountains, such as Kilimanjaro and the Rwenzori', 'The warm waters of the Indian Ocean', 'There are no glacial features anywhere in Africa'],
    answer: 'High mountains, such as Kilimanjaro and the Rwenzori',
    explanation: 'High altitude mountains in East Africa maintain small glaciers and show glacial erosion features.',
  },
  {
    prompt: 'What landscape feature is common in the Kalahari?',
    options: ['Glacial valleys cut by moving ice', 'Sand dunes and other features shaped by the wind', 'Fjords, which are flooded glacial valleys', 'Coastal cliffs that are cut by waves'],
    answer: 'Sand dunes and other features shaped by the wind',
    explanation: 'The Kalahari is arid and shows extensive wind erosion and dune landscapes.',
  },
];

const GlaciationWindActionT3 = () => (
  <CapsSubjectTopic
    title="Glaciation and Wind Action"
    subtitle="Erosion in cold and arid environments"
    learnSteps={learnSteps}
    task="gr9-glaciation-wind-action-t3"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default GlaciationWindActionT3;
