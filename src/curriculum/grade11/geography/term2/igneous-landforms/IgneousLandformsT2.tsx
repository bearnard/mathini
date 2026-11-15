import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Intrusive vs extrusive igneous rock',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Igneous rocks</strong> form when magma (molten rock) cools and solidifies. The cooling rate determines crystal size and rock texture.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Intrusive (plutonic)</strong>
            <p className="text-slate-600">Magma cools <em>slowly underground</em> → large crystals. Examples: granite, dolerite. Forms large underground masses.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Extrusive (volcanic)</strong>
            <p className="text-slate-600">Lava cools <em>rapidly on the surface</em> → small or no crystals. Examples: basalt, rhyolite. Forms surface flows and volcanic cones.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Types of intrusive bodies',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Magma intruding into existing rock creates several distinct intrusive structures depending on how it forces its way in.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Sill</strong>
            <p className="text-slate-600 text-sm">Magma injected <em>horizontally</em> between existing rock layers (concordant). Forms a tabular body parallel to strata.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Dyke</strong>
            <p className="text-slate-600 text-sm">Magma injected <em>vertically</em> or at an angle, cutting across strata (discordant). Forms a wall-like body.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Laccolith</strong>
            <p className="text-slate-600 text-sm">A dome-shaped intrusion that pushes overlying strata upward. Smaller than a batholith.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Batholith</strong>
            <p className="text-slate-600 text-sm">A massive, irregular igneous intrusion that underlies large areas. Example: Cape Granite Suite.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Dolerite domes, koppies and inselbergs',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Massive igneous landforms develop at the surface through <strong>exhumation</strong> — when softer surrounding rock is eroded away to expose the harder igneous body.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-2">
          <p><strong>Dolerite koppies (Karoo):</strong> isolated hills where a dolerite sill protected the rock below from erosion.</p>
          <p><strong>Bornhardts / inselbergs:</strong> large dome-shaped granite hills that rise abruptly from flat plains. Common in hot semi-arid Africa (e.g., Matopo Hills, Zimbabwe).</p>
          <p><strong>Exfoliation:</strong> as overlying rock is removed, confining pressure is released — the granite expands and sheets of rock peel off, producing the dome shape.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'South African examples',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South Africa has excellent examples of massive igneous landforms formed by both intrusion and exhumation.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Cape Granite Suite</strong>
            <p className="text-slate-600 text-sm">Batholithic granites that underlie the Cape Peninsula and show on its lower slopes and coast. Table Mountain and Lion's Head are mostly sandstone resting on this granite.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Pilanesberg (North West)</strong>
            <p className="text-slate-600 text-sm">An ancient alkaline ring complex formed by volcanic intrusion ~1.3 billion years ago; concentric rings of different igneous rocks.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Karoo dolerite koppies</strong>
            <p className="text-slate-600 text-sm">Scattered flat-topped hills across the Karoo plateau where dolerite sills protected the sedimentary rock beneath.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Drakensberg basalts</strong>
            <p className="text-slate-600 text-sm">The uppermost layer of the Drakensberg is Jurassic basalt from ancient Gondwana-breakup lava flows.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Why do intrusive igneous rocks have larger crystals than extrusive igneous rocks?',
    options: [
      'They contain more minerals',
      'They cool slowly underground, giving crystals more time to grow',
      'They are under greater pressure at the surface',
      'They contain more water',
    ],
    answer: 'They cool slowly underground, giving crystals more time to grow',
    explanation: 'Slow cooling underground allows mineral crystals in intrusive rocks (e.g., granite) to grow large. Rapid surface cooling gives extrusive rocks small or glassy textures.',
  },
  {
    prompt: 'A dyke is classified as a discordant intrusion because it:',
    options: ['It runs parallel to the existing rock layers', 'It cuts across the rock layers, at an angle or vertically', 'It forms at the surface from flowing lava', 'It forms only in sedimentary rocks, not in igneous'],
    answer: 'It cuts across the rock layers, at an angle or vertically',
    explanation: 'Discordant intrusions (like dykes) cross-cut the surrounding rock layers; concordant intrusions (like sills) run parallel to them.',
  },
  {
    prompt: 'A sill differs from a dyke because a sill:',
    options: ['It is always larger in volume than a dyke', 'It cuts vertically across the rock layers', 'It is injected horizontally, parallel to the rock layers', 'It forms only from basaltic magma and nothing else'],
    answer: 'It is injected horizontally, parallel to the rock layers',
    explanation: 'A sill is a concordant intrusion where magma forces its way between existing layers, running parallel to the rock strata.',
  },
  {
    prompt: 'What is a batholith?',
    options: ['A thin horizontal sheet of intruded rock', 'A vertical wall of igneous rock cutting the strata', 'A very large, irregular igneous intrusion below a wide area', 'A small dome-shaped intrusion in the strata'],
    answer: 'A very large, irregular igneous intrusion below a wide area',
    explanation: 'Batholiths are the largest intrusive bodies; they underlie large mountain ranges and are exposed by millions of years of erosion.',
  },
  {
    prompt: 'The Cape Granite Suite forms part of which major South African landscape?',
    options: ['The Drakensberg escarpment in the east', 'The Cape Fold Mountains and the Cape Peninsula', 'The flat Karoo plains of the interior', 'The Highveld plateau around Johannesburg'],
    answer: 'The Cape Fold Mountains and the Cape Peninsula',
    explanation: 'The Cape Granite Suite is a series of batholithic granites forming prominent features like the Cape Peninsula mountains and parts of the Swartberg.',
  },
  {
    prompt: 'How do dolerite koppies form on the Karoo plains?',
    options: ['Dolerite volcanoes erupted through the Karoo rocks', 'Softer rock erodes, leaving harder dolerite sills as isolated hills', 'Rivers deposit dolerite in rounded heaps', 'Wind carves the koppies out of solid rock'],
    answer: 'Softer rock erodes, leaving harder dolerite sills as isolated hills',
    explanation: 'Dolerite sills are more resistant than the surrounding shale. When softer rock erodes, the dolerite remains as koppies.',
  },
  {
    prompt: 'What process causes the dome shape of a granite bornhardt (inselberg)?',
    options: ['Folding of the sedimentary rock above it', 'Exfoliation: sheets peel off as pressure is released', 'Wind abrasion that polishes the granite', 'Chemical dissolution of the granite by acid rain'],
    answer: 'Exfoliation: sheets peel off as pressure is released',
    explanation: 'As erosion removes overlying rock, confining pressure is released. The granite expands and concentric sheets peel off, rounding the dome.',
  },
  {
    prompt: 'Pilanesberg in North West Province is an example of which type of igneous feature?',
    options: ['A simple granite batholith with no ring', 'An ancient alkaline volcanic ring complex', 'A dolerite sill on a high plateau', 'A basalt lava plateau that is flat on top'],
    answer: 'An ancient alkaline volcanic ring complex',
    explanation: 'Pilanesberg is a ~1.3 billion year old alkaline ring complex — concentric rings of different igneous rocks formed by volcanic intrusion.',
  },
  {
    prompt: 'The top layer of the Drakensberg is composed of:',
    options: ['Granite that cooled deep underground', 'Sandstone laid down by ancient rivers', 'Jurassic basalt from ancient lava flows', 'Marble formed from heated limestone'],
    answer: 'Jurassic basalt from ancient lava flows',
    explanation: 'The summit of the Drakensberg is capped by Jurassic basalt erupted during the break-up of Gondwana, overlying the Cave Sandstone.',
  },
  {
    prompt: 'Which rock type forms from magma cooling rapidly at the surface, producing very fine crystals?',
    options: ['Granite', 'Basalt', 'Dolerite', 'Marble'],
    answer: 'Basalt',
    explanation: 'Basalt is an extrusive igneous rock that cools quickly from lava, giving it a fine-grained or glassy texture.',
  },
];

const IgneousLandformsT2 = () => (
  <CapsSubjectTopic
    title="Massive Igneous Landforms"
    subtitle="Intrusive bodies, dolerite koppies, inselbergs and South African examples"
    learnSteps={learnSteps}
    task="gr11-igneous-landforms-t2"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default IgneousLandformsT2;
