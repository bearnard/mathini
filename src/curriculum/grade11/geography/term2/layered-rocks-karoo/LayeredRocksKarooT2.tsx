import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/geo/term2/layered-rocks-karoo/diagram.webp", alt: "Layered Rocks and Karoo Landscapes" },
    title: 'Sedimentary rock formation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Sedimentary rocks</strong> form from accumulated sediments (sand, silt, organic material) that are compacted and cemented over millions of years.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">1. Weathering &amp; erosion</strong>
            <p className="text-slate-600 text-sm">Parent rock breaks down; particles are transported by water, wind, or ice.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">2. Deposition</strong>
            <p className="text-slate-600 text-sm">Sediments settle in layers (strata) in seas, lakes, or river floodplains.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">3. Lithification</strong>
            <p className="text-slate-600 text-sm">Compaction and cementation convert loose sediment into solid rock. Can take millions of years.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">Sedimentary rocks include shale, sandstone, mudstone, limestone, and conglomerate.</p>
      </div>
    ),
  },
  {
    title: 'The Karoo Supergroup',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>Karoo Supergroup</strong> is a vast sequence of sedimentary rock layers covering about two-thirds of South Africa, deposited over 100 million years during the late Palaeozoic and Mesozoic eras.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-2">
          <p><strong>Rock types:</strong> mainly shale, mudstone, and sandstone, with coal seams (Ecca Group) and dolerite intrusions.</p>
          <p><strong>Fossil wealth:</strong> the Karoo contains world-famous Permian reptile and therapsid fossils.</p>
          <p><strong>Landscape:</strong> flat plains, koppies (dolerite-capped hills), and the Great Escarpment are characteristic Karoo features.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Cuestas and hogbacks',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          When rock strata are tilted and eroded, they form asymmetric landforms. The angle of tilt determines the landform type.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Cuesta</strong>
            <p className="text-slate-600">Gently tilted strata (less than 35°). Has a long, gentle dip slope and a short, steep scarp face. Also called a homoclinal ridge.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Hogback</strong>
            <p className="text-slate-600">Steeply tilted strata (more than 35°). Both sides are equally steep — resembles a pig's back. Often forms a narrow, sharp ridge.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">Both form when a resistant rock layer is exposed by differential erosion of softer surrounding rock.</p>
      </div>
    ),
  },
  {
    title: 'Reading layered rocks on maps',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Topographic maps reveal the structure of layered rocks through contour patterns, elevation changes, and feature shapes.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-2">
          <p><strong>Horizontal strata:</strong> produce flat-topped mesas or plateaus with cliffed edges visible as closely packed contours.</p>
          <p><strong>Tilted strata:</strong> cuestas appear as asymmetric ridges; the steep scarp shows tight contours, the dip slope shows widely spaced contours.</p>
          <p><strong>Dolerite intrusions:</strong> appear as circular or elongated hills (koppies) rising above flat Karoo plains.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Geology Data — Ages of Major Karoo Layers',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Layered rocks can be studied as a timeline. Older layers were deposited first, while younger layers formed later above them.</p>
        <DataChart
          data={[
                        { layer: 'Dwyka Group', age: 300 },
                        { layer: 'Ecca Group', age: 260 },
                        { layer: 'Beaufort Group', age: 250 },
                        { layer: 'Stormberg Group', age: 200 },
                        { layer: 'Drakensberg lava', age: 183 },
                      ]}
          xKey="layer"
          series={[
                        { key: 'age', label: 'Approximate age (million years)', type: 'bar', color: '#a855f7' },
                      ]}
          yLabel="Million years"
          height={240}
        />

        <p className="text-sm text-slate-500">Reading rock ages helps geographers and geologists connect landscapes with long-term Earth history.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What process converts loose sediments into sedimentary rock?',
    options: ['Crystallisation', 'Lithification (compaction and cementation)', 'Metamorphism', 'Exfoliation'],
    answer: 'Lithification (compaction and cementation)',
    explanation: 'Lithification involves the compaction of sediments under pressure and the cementation of particles by minerals to form solid rock.',
  },
  {
    prompt: 'The Karoo Supergroup covers approximately what fraction of South Africa?',
    options: ['One quarter', 'One third', 'Two thirds', 'All of it'],
    answer: 'Two thirds',
    explanation: 'The Karoo Supergroup is one of the world\'s largest sedimentary basins, covering about two-thirds of South Africa\'s land area.',
  },
  {
    prompt: 'What is the dominant rock type in the Karoo Supergroup?',
    options: ['Granite and basalt', 'Quartzite and marble', 'Shale, mudstone, and sandstone', 'Limestone and chalk'],
    answer: 'Shale, mudstone, and sandstone',
    explanation: 'The Karoo Supergroup is predominantly made up of shale, mudstone, and sandstone, with some coal seams in the Ecca Group.',
  },
  {
    prompt: 'How does a cuesta differ from a hogback?',
    options: [
      'A cuesta has vertical strata; a hogback has horizontal strata',
      'A cuesta has gently tilted strata with an asymmetric profile; a hogback has steeply tilted strata with equal sides',
      'They are identical landforms',
      'A cuesta is made of igneous rock; a hogback is sedimentary',
    ],
    answer: 'A cuesta has gently tilted strata with an asymmetric profile; a hogback has steeply tilted strata with equal sides',
    explanation: 'Cuestas (tilt < 35°) have one gentle slope and one steep face; hogbacks (tilt > 35°) have equally steep sides.',
  },
  {
    prompt: 'Horizontal rock strata that are eroded to leave flat-topped hills are called:',
    options: ['Hogbacks', 'Cuestas', 'Mesas or plateaus', 'Inselbergs'],
    answer: 'Mesas or plateaus',
    explanation: 'When horizontal resistant rock caps a hill, differential erosion of softer rock below leaves a flat-topped mesa or plateau.',
  },
  {
    prompt: 'What are rock layers called in geology?',
    options: ['Folds', 'Strata', 'Intrusions', 'Veins'],
    answer: 'Strata',
    explanation: 'Individual layers of sedimentary rock are called strata (singular: stratum). They record the history of deposition.',
  },
  {
    prompt: 'The Ecca Group within the Karoo Supergroup is economically significant because it contains:',
    options: ['Gold and diamonds', 'Coal seams', 'Petroleum reserves', 'Iron ore'],
    answer: 'Coal seams',
    explanation: 'The Ecca Group\'s coal seams supply most of South Africa\'s coal, which fuels power stations and the steel industry.',
  },
  {
    prompt: 'On a topographic map, a cuesta would be identified by:',
    options: [
      'Equally close contours on both sides of a ridge',
      'Closely spaced contours on one side and widely spaced contours on the other',
      'Circular isolated contours on a plain',
      'A V-shape pointing upstream',
    ],
    answer: 'Closely spaced contours on one side and widely spaced contours on the other',
    explanation: 'The steep scarp of a cuesta shows as tightly packed contours; the gentle dip slope shows as widely spaced contours.',
  },
  {
    prompt: 'Dolerite koppies in the Karoo form because:',
    options: [
      'Dolerite is softer than the surrounding shale',
      'Dolerite is more resistant than the surrounding sedimentary rock and remains as isolated hills',
      'They are formed by river erosion',
      'They are ancient volcanoes',
    ],
    answer: 'Dolerite is more resistant than the surrounding sedimentary rock and remains as isolated hills',
    explanation: 'When softer shale erodes away, the harder dolerite sills and dykes remain as koppies (isolated hills) on the Karoo plains.',
  },
  {
    prompt: 'What makes the Karoo Supergroup internationally important to palaeontologists?',
    options: [
      'It contains the world\'s oldest gold deposits',
      'It preserves world-famous Permian reptile and therapsid fossils',
      'It has active volcanoes',
      'It contains the oldest known dinosaur eggs',
    ],
    answer: 'It preserves world-famous Permian reptile and therapsid fossils',
    explanation: 'The Karoo\'s fine-grained shale and mudstone preserved an exceptional fossil record of early land vertebrates from the Permian period.',
  },
];

const LayeredRocksKarooT2 = () => (
  <CapsSubjectTopic
    title="Layered Rocks and Karoo Landscapes"
    subtitle="Sedimentary rock formation, the Karoo Supergroup, cuestas and hogbacks"
    learnSteps={learnSteps}
    task="gr11-layered-rocks-karoo-t2"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default LayeredRocksKarooT2;
