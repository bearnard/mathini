import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../geography/_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'What is land-use interpretation?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Land-use interpretation</strong> means analyzing and identifying how land is being used in a particular area (residential, agricultural, industrial, etc.).
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Purpose:</p>
          <p className="text-slate-600">To understand human activity, settlement patterns, and resource allocation in a region.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Common land-use categories',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Different types of land-use can be identified on maps and orthophotos:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Urban/Residential</strong>
            <p className="text-slate-600">Buildings, roads, settlements.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Agricultural</strong>
            <p className="text-slate-600">Croplands, pastures, farmland.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Vegetation/Natural</strong>
            <p className="text-slate-600">Forests, grassland, protected areas.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Water bodies</strong>
            <p className="text-slate-600">Rivers, dams, wetlands, lakes.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Industrial</strong>
            <p className="text-slate-600">Factories, mining areas, power stations.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Recreational</strong>
            <p className="text-slate-600">Parks, sports fields, nature reserves.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Identifying land-use on maps and orthophotos',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          You can identify land-use by analyzing visual features, symbols, and patterns:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">On topographic maps:</strong>
            <p className="text-slate-600">Use the legend; different colours/patterns show different land uses.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">On orthophotos:</strong>
            <p className="text-slate-600">Look at actual appearance: grey for buildings, green for vegetation, blue for water.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Analyzing land-use patterns and changes',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          By examining land-use, geographers can understand urbanization, development, and environmental issues:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key questions:</p>
          <p className="text-slate-600">Where is development occurring? Why? How has land-use changed over time? What are the impacts?</p>
        </div>
        <p className="text-sm text-slate-600 mt-4">Land-use interpretation helps with urban planning, environmental management, and studying human geography.</p>
      </div>
    ),
  },
  {
    title: 'Land-use Data — South Africa by Main Use',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Land-use interpretation becomes easier when learners know the main categories of land use across the country.</p>
        <DataChart
          data={[
                        { landUse: 'Grazing', share: 69 },
                        { landUse: 'Arable farming', share: 12 },
                        { landUse: 'Conservation', share: 9 },
                        { landUse: 'Urban and industry', share: 5 },
                        { landUse: 'Forestry', share: 5 },
                      ]}
          xKey="landUse"
          series={[
                        { key: 'share', label: 'Share of land (%)', type: 'bar', color: '#84cc16' },
                      ]}
          yLabel="Percent"
          height={220}
        />

        <p className="text-sm text-slate-500">Large grazing areas and smaller urban areas create different map patterns on topographic maps and aerial images.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is land-use interpretation?',
    options: ['Drawing maps by hand', 'Analyzing and identifying how land is being used in an area', 'Measuring altitude', 'Counting buildings'],
    answer: 'Analyzing and identifying how land is being used in an area',
    explanation: 'Land-use interpretation involves classifying areas as residential, agricultural, industrial, etc.',
  },
  {
    prompt: 'Which colour typically represents residential or urban areas on a topographic map?',
    options: ['Green', 'Blue', 'Red or pink', 'Yellow'],
    answer: 'Red or pink',
    explanation: 'Residential areas are conventionally shown in red or pink on many topographic maps.',
  },
  {
    prompt: 'What do bright green areas on a land-use map usually indicate?',
    options: ['Urban settlement', 'Agricultural land or natural vegetation', 'Water bodies', 'Industrial zones'],
    answer: 'Agricultural land or natural vegetation',
    explanation: 'Green represents vegetation coverage, including farmland and forests.',
  },
  {
    prompt: 'How would industrial areas typically appear on an orthophoto?',
    options: ['As circular green areas', 'As lines and roads', 'As grey areas with larger buildings and infrastructure', 'As blue lines'],
    answer: 'As grey areas with larger buildings and infrastructure',
    explanation: 'Industrial zones appear as grey structures with factories, warehouses, and transport links.',
  },
  {
    prompt: 'Why is understanding land-use important for urban planning?',
    options: ['It shows only historical information', 'It helps identify where development is occurring and plan future growth sustainably', 'It measures rainfall', 'It determines weather patterns'],
    answer: 'It helps identify where development is occurring and plan future growth sustainably',
    explanation: 'Land-use analysis guides decisions about housing, infrastructure, industry, and conservation.',
  },
  {
    prompt: 'What land-use category would include parks and sports fields?',
    options: ['Agricultural', 'Recreational', 'Industrial', 'Residential'],
    answer: 'Recreational',
    explanation: 'Parks and sports facilities are recreational land-use categories.',
  },
  {
    prompt: 'How can you tell the difference between a forest and farmland on an orthophoto?',
    options: ['They are identical', 'Forests appear more uniform and darker; farmland may show field patterns and lighter areas', 'Only by using a legend', 'They are the same colour'],
    answer: 'Forests appear more uniform and darker; farmland may show field patterns and lighter areas',
    explanation: 'Orthophotos reveal visual differences: forests are dense and uniform, farms show field boundaries and patterns.',
  },
  {
    prompt: 'Which land-use category includes mining operations?',
    options: ['Agricultural', 'Residential', 'Industrial', 'Recreational'],
    answer: 'Industrial',
    explanation: 'Mining and extraction activities fall under industrial land-use.',
  },
  {
    prompt: 'What would rapid expansion of grey areas on an orthophoto suggest?',
    options: ['Deforestation only', 'Urbanization and urban growth', 'Increased agriculture', 'More recreational spaces'],
    answer: 'Urbanization and urban growth',
    explanation: 'Expanding grey areas indicate urban sprawl and increasing settlement.',
  },
  {
    prompt: 'How does land-use interpretation help with studying environmental issues?',
    options: ['It only measures height', 'It identifies where human activity is impacting the environment and where protection is needed', 'It shows only roads', 'It measures temperature'],
    answer: 'It identifies where human activity is impacting the environment and where protection is needed',
    explanation: 'Understanding land-use reveals environmental pressures and guides conservation efforts.',
  },
];

const LandUseInterpretationT1 = () => (
  <CapsSubjectTopic
    title="Land-Use Interpretation"
    subtitle="Analyzing how land is used and developed"
    learnSteps={learnSteps}
    task="gr9-land-use-interpretation-t1"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default LandUseInterpretationT1;
