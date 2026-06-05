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
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a glacier?',
    options: ['A frozen lake', 'A large, slow-moving mass of ice', 'A waterfall', 'A type of rock'],
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
    options: ['Freeze-thaw only', 'The process of ice formation, flow, and erosion by glaciers', 'Wind erosion only', 'River action'],
    answer: 'The process of ice formation, flow, and erosion by glaciers',
    explanation: 'Glaciation is a powerful geomorphological process that shapes landscapes over millennia.',
  },
  {
    prompt: 'What is a cirque?',
    options: ['A valley floor', 'A bowl-shaped depression where a glacier originates', 'A coastal feature', 'A sand dune'],
    answer: 'A bowl-shaped depression where a glacier originates',
    explanation: 'Cirques are amphitheatre-like features carved by glacial erosion at mountain headwaters.',
  },
  {
    prompt: 'What is a hanging valley?',
    options: ['A type of lake', 'A side valley that drops steeply into a main glacial valley', 'A plateau', 'A ridge'],
    answer: 'A side valley that drops steeply into a main glacial valley',
    explanation: 'Hanging valleys form where smaller glaciers joined a main glacier at different levels.',
  },
  {
    prompt: 'How does wind cause erosion?',
    options: ['It doesn\'t', 'By carrying fine particles (sand and silt) and wearing away surfaces', 'Only in deserts', 'Only in water'],
    answer: 'By carrying fine particles (sand and silt) and wearing away surfaces',
    explanation: 'Wind erosion is significant in arid regions with sparse vegetation.',
  },
  {
    prompt: 'What is a deflation basin?',
    options: ['A sand dune', 'An area where wind has removed all fine material, exposing underlying rock', 'A glacier feature', 'A river delta'],
    answer: 'An area where wind has removed all fine material, exposing underlying rock',
    explanation: 'Deflation creates hollows in desert areas.',
  },
  {
    prompt: 'What are yardangs?',
    options: ['A type of sand dune', 'Wind-sculpted ridges running in the direction of prevailing winds', 'Glacial features', 'Rock formations'],
    answer: 'Wind-sculpted ridges running in the direction of prevailing winds',
    explanation: 'Yardangs show the direction and power of wind erosion.',
  },
  {
    prompt: 'Where in Africa would you find glacial features?',
    options: ['Desert lowlands', 'High mountains like Kilimanjaro and Rwenzori', 'Only in the oceans', 'Nowhere in Africa'],
    answer: 'High mountains like Kilimanjaro and Rwenzori',
    explanation: 'High altitude mountains in East Africa maintain small glaciers and show glacial erosion features.',
  },
  {
    prompt: 'What landscape feature is common in the Kalahari?',
    options: ['Glacial valleys', 'Sand dunes and wind-eroded features', 'Fjords', 'No features'],
    answer: 'Sand dunes and wind-eroded features',
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
