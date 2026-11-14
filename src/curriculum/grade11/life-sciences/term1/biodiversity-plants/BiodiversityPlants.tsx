import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { LSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'The Four Plant Divisions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The plant kingdom is divided into four major groups based on structural complexity and reproduction:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">1. Bryophytes</strong>
            <p className="text-slate-600">Mosses and liverworts. No vascular tissue, no roots. Reproduce by spores. Restricted to moist habitats.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">2. Pteridophytes</strong>
            <p className="text-slate-600">Ferns and horsetails. Have vascular tissue (xylem and phloem) but no seeds. Reproduce by spores.</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4">
            <strong className="text-lime-700">3. Gymnosperms</strong>
            <p className="text-slate-600">Conifers and cycads. Have vascular tissue and seeds not enclosed in fruit. Seeds held in cones.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">4. Angiosperms</strong>
            <p className="text-slate-600">Flowering plants. Seeds enclosed in fruit. Include monocots (grasses, lilies) and dicots (roses, beans).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Evolutionary Trends in Plants',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Plant evolution shows increasing structural complexity and independence from water for reproduction:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left space-y-3">
          <p className="text-slate-700">
            <strong>Bryophytes → Pteridophytes:</strong> Development of vascular tissue (xylem and phloem) enables water and food transport over longer distances.
          </p>
          <p className="text-slate-700">
            <strong>Pteridophytes → Gymnosperms:</strong> Seeds replace spores — better survival rate, dormancy capability, and dispersal over long distances.
          </p>
          <p className="text-slate-700">
            <strong>Gymnosperms → Angiosperms:</strong> Seeds enclosed in fruit; flowers attract pollinators; successful colonisation of almost all habitats.
          </p>
        </div>
        <p className="text-sm text-slate-500">Key trend: decreasing dependence on water for fertilisation.</p>
      </div>
    ),
  },
  {
    title: 'Spores vs Seeds',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The shift from <strong>spore</strong> to <strong>seed</strong> reproduction was a major evolutionary advance:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Spores (Bryophytes and Pteridophytes)</strong>
            <p className="text-slate-600">Single-celled. Require liquid water for fertilisation. No food reserve. Limited survival under harsh conditions.</p>
          </div>
          <div className="rounded-xl bg-green-100 p-4">
            <strong className="text-green-700">Seeds (Gymnosperms and Angiosperms)</strong>
            <p className="text-slate-600">Contain embryo, food store (cotyledons/endosperm), and a protective seed coat. Independent of water for fertilisation. Much higher survival rate.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Key Structural Features for Identification',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Identify any plant group by checking these four features:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="p-3 border border-slate-200">Group</th>
                <th className="p-3 border border-slate-200">Vascular tissue</th>
                <th className="p-3 border border-slate-200">Seeds</th>
                <th className="p-3 border border-slate-200">Flowers / Fruit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-slate-200">Bryophytes</td>
                <td className="p-3 border border-slate-200">✗</td>
                <td className="p-3 border border-slate-200">✗</td>
                <td className="p-3 border border-slate-200">✗</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200">Pteridophytes</td>
                <td className="p-3 border border-slate-200">✓</td>
                <td className="p-3 border border-slate-200">✗</td>
                <td className="p-3 border border-slate-200">✗</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200">Gymnosperms</td>
                <td className="p-3 border border-slate-200">✓</td>
                <td className="p-3 border border-slate-200">✓ (naked)</td>
                <td className="p-3 border border-slate-200">✗</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200">Angiosperms</td>
                <td className="p-3 border border-slate-200">✓</td>
                <td className="p-3 border border-slate-200">✓ (enclosed)</td>
                <td className="p-3 border border-slate-200">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
];

const bank: LSItem[] = [
  {
    prompt: 'Which plant group has vascular tissue but reproduces by spores rather than seeds?',
    options: ['Bryophytes', 'Pteridophytes', 'Gymnosperms', 'Angiosperms'],
    answer: 'Pteridophytes',
    explanation: 'Pteridophytes (ferns) have xylem and phloem for water and nutrient transport, but still reproduce via spores — they do not produce seeds.',
  },
  {
    prompt: 'What is the main reproductive advantage seeds have over spores?',
    options: ['Seeds are smaller and lighter than spores are', 'Seeds hold an embryo with a food store and a protective coat', 'Seeds need more water than spores in order to germinate', 'Seeds are dispersed by wind and by nothing else'],
    answer: 'Seeds hold an embryo with a food store and a protective coat',
    explanation: 'A seed nourishes and protects the developing plant embryo, giving it a far higher survival rate than a single-celled spore with no food reserve.',
  },
  {
    prompt: 'In which plant group are seeds enclosed inside a fruit?',
    options: ['Bryophytes', 'Pteridophytes', 'Gymnosperms', 'Angiosperms'],
    answer: 'Angiosperms',
    explanation: '"Angiosperm" means "enclosed seed." The fruit develops from the ovary wall and aids in seed dispersal.',
  },
  {
    prompt: 'Mosses and liverworts belong to which plant division?',
    options: ['Pteridophytes', 'Gymnosperms', 'Bryophytes', 'Angiosperms'],
    answer: 'Bryophytes',
    explanation: 'Bryophytes are non-vascular, rootless plants including mosses and liverworts, typically found in damp environments.',
  },
  {
    prompt: 'Which of the following is NOT a feature of gymnosperms?',
    options: ['Vascular tissue present', 'Seeds borne in cones', 'Flowers and enclosed fruit', 'Needle-like or scale-like leaves in many species'],
    answer: 'Flowers and enclosed fruit',
    explanation: 'Gymnosperms (conifers, cycads) bear naked seeds in cones but do not produce flowers or fruit — those are exclusive to angiosperms.',
  },
  {
    prompt: 'What key evolutionary trend is observed when moving from bryophytes to angiosperms?',
    options: ['Increasing dependence on water for fertilisation', 'Decreasing structural complexity', 'Increasing structural complexity and independence from water', 'Reduction in vascular tissue'],
    answer: 'Increasing structural complexity and independence from water',
    explanation: 'Plant evolution moved from simple, water-dependent mosses to complex, terrestrial, seed-bearing flowering plants with diverse dispersal mechanisms.',
  },
  {
    prompt: 'Which two vascular tissues are present from pteridophytes onwards?',
    options: ['Xylem and phloem', 'Xylem only', 'Phloem only', 'Stomata and guard cells'],
    answer: 'Xylem and phloem',
    explanation: 'Xylem carries water and minerals upward; phloem transports sugars. Both tissues appear in pteridophytes and are retained in all more complex plant groups.',
  },
  {
    prompt: 'A pine tree is an example of which plant group?',
    options: ['Bryophyte', 'Pteridophyte', 'Gymnosperm', 'Angiosperm'],
    answer: 'Gymnosperm',
    explanation: 'Pine trees are conifers — a major group of gymnosperms — bearing seeds in woody cones rather than enclosed in fruit.',
  },
  {
    prompt: 'Why are bryophytes restricted to moist habitats?',
    options: ['They need very bright direct sunlight to grow', 'They need liquid water for sperm to swim to the egg', 'They can only take in nutrients that are dissolved in water', 'They cannot tolerate any change in temperature'],
    answer: 'They need liquid water for sperm to swim to the egg',
    explanation: 'Bryophytes produce flagellate sperm that must swim through a film of water to reach the egg, so they are entirely dependent on moist conditions for sexual reproduction.',
  },
];

const BiodiversityPlants = () => (
  <CapsSubjectTopic
    title="Biodiversity of Plants"
    subtitle="Plant divisions, evolutionary trends, and reproductive adaptations"
    learnSteps={learnSteps}
    task="gr11-biodiversity-plants-t1"
    bank={bank}
    apiPath="/api/caps/ls"
  />
);

export default BiodiversityPlants;
