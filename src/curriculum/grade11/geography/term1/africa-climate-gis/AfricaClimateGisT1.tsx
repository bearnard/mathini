import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import ClimateGraph from '@/components/subjects/ClimateGraph';


const learnSteps: LearnStep[] = [
  {
    title: "Africa's climate zones",
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Africa straddles the equator and contains six major climate zones, each shaped by latitude, ocean currents, and topography.
        </p>
        <div className="grid gap-2 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-3">
            <strong className="text-green-700">Equatorial</strong>
            <p className="text-slate-600 text-sm">Congo Basin; hot and wet year-round; no dry season; dense rainforest.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-3">
            <strong className="text-yellow-700">Tropical wet-dry</strong>
            <p className="text-slate-600 text-sm">Sub-Saharan Africa; distinct wet and dry seasons driven by the ITCZ migration.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-3">
            <strong className="text-orange-700">Desert (hot arid)</strong>
            <p className="text-slate-600 text-sm">Sahara, Namib; very little rainfall; extreme heat by day, cold at night.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-3">
            <strong className="text-red-700">Semi-arid (Sahel)</strong>
            <p className="text-slate-600 text-sm">Transitional zone south of Sahara; unreliable rainfall; drought risk.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-3">
            <strong className="text-blue-700">Mediterranean</strong>
            <p className="text-slate-600 text-sm">North Africa coast and SA Western Cape; hot dry summers, cool wet winters.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-3">
            <strong className="text-teal-700">Subtropical</strong>
            <p className="text-slate-600 text-sm">Eastern South Africa; summer rainfall, moderate temperatures, bushveld.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Desertification in the Sahel',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Desertification</strong> is the process by which fertile land becomes desert-like due to drought, deforestation, and overuse.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left space-y-2">
          <p><strong className="text-amber-700">Causes:</strong> overgrazing, deforestation, overcultivation, reduced rainfall, population pressure.</p>
          <p><strong className="text-amber-700">Effects:</strong> loss of topsoil, reduced food production, displacement of communities, food insecurity.</p>
          <p><strong className="text-amber-700">Region:</strong> The Sahel — the semi-arid belt south of the Sahara (from Senegal to Sudan) — is most severely affected.</p>
        </div>
        <p className="text-sm text-slate-500">The Great Green Wall initiative aims to restore 100 million hectares of land across the Sahel by 2030.</p>
      </div>
    ),
  },
  {
    title: 'The Namib Desert and the Benguela Current',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>Benguela Current</strong> is a cold ocean current flowing northward along Africa's south-west coast, playing a key role in creating the Namib Desert.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Cold current effect</strong>
            <p className="text-slate-600">Cold water chills the air above it, making it stable and suppressing convection — preventing rainfall over the coast.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Coastal fog</strong>
            <p className="text-slate-600">Moisture-laden marine air is chilled by the cold current, producing fog — the Namib Desert's primary moisture source.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'GIS and remote sensing in climate monitoring',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>GIS</strong> (Geographic Information System) and <strong>remote sensing</strong> are powerful tools for monitoring climate and environmental change in Africa.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-2">
          <p><strong>Remote sensing:</strong> satellites capture images and data about vegetation cover, land surface temperature, and rainfall patterns without direct contact.</p>
          <p><strong>GIS layers:</strong> multiple datasets (rainfall, temperature, land cover, soil type) are overlaid to analyse spatial patterns and changes over time.</p>
          <p><strong>Applications:</strong> tracking desertification, monitoring drought, predicting crop yields, planning water resource management.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Climate Data — Cairo vs Nairobi',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">These two African stations show strong climatic contrast. Cairo is hot and dry for most of the year, while Nairobi is cooler and much wetter because of altitude and seasonal rainfall.</p>
        <div className="grid gap-4 lg:grid-cols-2">
          <ClimateGraph
            station="Cairo"
            data={[
                      { month: 'Jan', rainfall: 5, temp: 14 },
                      { month: 'Feb', rainfall: 4, temp: 15 },
                      { month: 'Mar', rainfall: 4, temp: 18 },
                      { month: 'Apr', rainfall: 2, temp: 23 },
                      { month: 'May', rainfall: 1, temp: 28 },
                      { month: 'Jun', rainfall: 0, temp: 31 },
                      { month: 'Jul', rainfall: 0, temp: 32 },
                      { month: 'Aug', rainfall: 0, temp: 32 },
                      { month: 'Sep', rainfall: 0, temp: 29 },
                      { month: 'Oct', rainfall: 1, temp: 26 },
                      { month: 'Nov', rainfall: 4, temp: 20 },
                      { month: 'Dec', rainfall: 6, temp: 15 },
                    ]}
          />

          <ClimateGraph
            station="Nairobi"
            data={[
                      { month: 'Jan', rainfall: 38, temp: 24 },
                      { month: 'Feb', rainfall: 64, temp: 25 },
                      { month: 'Mar', rainfall: 79, temp: 24 },
                      { month: 'Apr', rainfall: 211, temp: 23 },
                      { month: 'May', rainfall: 158, temp: 22 },
                      { month: 'Jun', rainfall: 46, temp: 21 },
                      { month: 'Jul', rainfall: 15, temp: 21 },
                      { month: 'Aug', rainfall: 23, temp: 21 },
                      { month: 'Sep', rainfall: 26, temp: 22 },
                      { month: 'Oct', rainfall: 53, temp: 23 },
                      { month: 'Nov', rainfall: 109, temp: 22 },
                      { month: 'Dec', rainfall: 86, temp: 23 },
                    ]}
          />
        </div>

        <p className="text-sm text-slate-500">Using climate data with maps and GIS layers helps geographers explain vegetation, river flow, farming, and settlement patterns.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which climate zone covers the Congo Basin in central Africa?',
    options: ['Tropical wet-dry', 'Mediterranean', 'Equatorial', 'Semi-arid'],
    answer: 'Equatorial',
    explanation: 'The Congo Basin has an equatorial climate — hot and wet year-round with no dry season, supporting dense tropical rainforest.',
  },
  {
    prompt: 'What is desertification?',
    options: ['The natural spread of deserts caused by plate movement', 'Fertile land turning desert-like through human activity and climate', 'Sand dunes that move into the edges of nearby towns', 'Heavy rain that turns the soil of a region acidic'],
    answer: 'Fertile land turning desert-like through human activity and climate',
    explanation: 'Desertification results from overgrazing, deforestation, drought, and overcultivation, leading to land degradation.',
  },
  {
    prompt: 'Which region of Africa is most severely affected by desertification?',
    options: ['The Congo Basin in central Africa', 'The East African highlands near the equator', 'The Sahel belt south of the Sahara', 'The Western Cape at the southern tip'],
    answer: 'The Sahel belt south of the Sahara',
    explanation: 'The Sahel is a semi-arid transitional zone that is highly vulnerable to desertification due to population pressure and variable rainfall.',
  },
  {
    prompt: 'Where does the Mediterranean climate occur in southern Africa?',
    options: ['KwaZulu-Natal coastline', 'Limpopo Province', 'South-western Western Cape', 'Mpumalanga escarpment'],
    answer: 'South-western Western Cape',
    explanation: 'The south-western Western Cape (including Cape Town) has a Mediterranean climate with hot dry summers and cool wet winters.',
  },
  {
    prompt: 'The Benguela Current contributes to which of the following?',
    options: [
      'Heavy summer rainfall along the west coast of Africa',
      'The formation of the Namib Desert by stabilizing coastal air',
      'Warm sea temperatures off Mozambique',
      'Tropical cyclones in the South Atlantic',
    ],
    answer: 'The formation of the Namib Desert by stabilizing coastal air',
    explanation: 'The cold Benguela Current chills the overlying air, creating a temperature inversion that suppresses rainfall along the Namibian coast.',
  },
  {
    prompt: 'What is the primary function of a GIS?',
    options: ['To take aerial photographs from planes that fly over', 'To capture, store, analyse and show geographic data in layers', 'To measure the height of mountains from satellites', 'To forecast the daily weather for a given region'],
    answer: 'To capture, store, analyse and show geographic data in layers',
    explanation: 'A GIS integrates multiple spatial datasets (maps, satellite images, statistics) to analyse patterns and solve geographic problems.',
  },
  {
    prompt: 'What does remote sensing involve?',
    options: ['Collecting soil samples by hand in remote areas', 'Gathering data about Earth from satellites or aircraft without contact', 'Setting up weather stations in the middle of deserts', 'Interviewing local farmers about the changes in climate'],
    answer: 'Gathering data about Earth from satellites or aircraft without contact',
    explanation: 'Remote sensing uses sensors on satellites or planes to capture electromagnetic radiation reflected from Earth\'s surface.',
  },
  {
    prompt: 'What drives the seasonal wet and dry seasons in sub-Saharan Africa\'s tropical climate?',
    options: ['A reversal of the trade winds in each season', 'The yearly shift of the ITCZ, following the overhead Sun', 'Changes in the strength of the ocean currents', 'Volcanic activity that changes the air above Africa'],
    answer: 'The yearly shift of the ITCZ, following the overhead Sun',
    explanation: 'As the ITCZ migrates north and south with the sun, it brings the wet season to different parts of Africa at different times of year.',
  },
  {
    prompt: 'Which of the following is the BEST way to monitor desertification over a large area over time?',
    options: ['Interviewing local herders about the land', 'Satellite remote sensing and GIS to track changes in plant cover', 'Measuring the yearly rainfall at one weather station', 'Counting the trees by hand across the whole region'],
    answer: 'Satellite remote sensing and GIS to track changes in plant cover',
    explanation: 'Satellite imagery allows repeated, consistent monitoring of large areas, making it ideal for tracking land degradation over time.',
  },
  {
    prompt: 'The Namib Desert receives very little rainfall yet supports life. Its primary moisture source is:',
    options: ['Underground springs that feed the dunes', 'A yearly monsoon that brings steady rain', 'Coastal fog made by the cold Benguela Current', 'Convective thunderstorms that build over the dunes'],
    answer: 'Coastal fog made by the cold Benguela Current',
    explanation: 'Marine air moving over the cold Benguela Current forms thick fog that rolls inland, providing moisture for desert-adapted plants and animals.',
  },
];

const AfricaClimateGisT1 = () => (
  <CapsSubjectTopic
    title="Africa's Climate and GIS"
    subtitle="Climate zones, desertification, the Benguela Current and remote sensing"
    learnSteps={learnSteps}
    task="gr11-africa-climate-gis-t1"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default AfricaClimateGisT1;
