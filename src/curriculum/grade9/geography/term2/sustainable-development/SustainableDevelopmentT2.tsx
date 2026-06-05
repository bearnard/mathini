import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../geography/_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'What is sustainable development?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Sustainable development</strong> is development that meets current needs without harming the environment or future generations' ability to meet their own needs.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Core principle:</p>
          <p className="text-slate-600">Balance economic growth, social wellbeing, and environmental protection.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'The three pillars of sustainability',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Sustainable development rests on three interconnected pillars:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Environmental</strong>
            <p className="text-slate-600">Protecting ecosystems, managing resources responsibly, and reducing pollution.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Social</strong>
            <p className="text-slate-600">Ensuring fair access to education, healthcare, and opportunities for all.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Economic</strong>
            <p className="text-slate-600">Building stable, inclusive economies that don't rely on exploitation.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Challenges to sustainable development',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Many factors hinder the pursuit of sustainable development globally:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Immediate needs</strong>
            <p className="text-slate-600">Poor communities prioritize survival over long-term sustainability.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Profit motives</strong>
            <p className="text-slate-600">Companies prioritize profits over environmental and social responsibility.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Global demand</strong>
            <p className="text-slate-600">Consumer demand for cheap goods drives unsustainable production.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Governance</strong>
            <p className="text-slate-600">Weak environmental laws and enforcement enable exploitation.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Pathways to sustainable development',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Achieving sustainability requires action at all levels:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Individual:</strong>
            <p className="text-slate-600">Conscious consumption, reducing waste, supporting ethical businesses.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Community:</strong>
            <p className="text-slate-600">Local conservation projects, education, shared resources.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Government:</strong>
            <p className="text-slate-600">Sustainable policies, renewable energy, environmental protection laws.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Sustainability Data — Carbon Emissions per Person',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Sustainable development tries to improve quality of life while reducing environmental harm. Carbon emissions per person are one way to compare environmental pressure.</p>
        <DataChart
          data={[
                        { country: 'Germany', co2: 7.7 },
                        { country: 'South Africa', co2: 6.9 },
                        { country: 'Brazil', co2: 2.3 },
                        { country: 'Nigeria', co2: 0.7 },
                      ]}
          xKey="country"
          series={[
                        { key: 'co2', label: 'CO₂ per person (tonnes)', type: 'bar', color: '#ef4444' },
                      ]}
          yLabel="Tonnes"
          height={220}
        />

        <p className="text-sm text-slate-500">Countries must balance energy use, jobs, and growth with the need to cut pollution and protect resources.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is sustainable development?',
    options: ['Only environmental protection', 'Development that meets current needs without harming future generations or the environment', 'Only economic growth', 'Only social services'],
    answer: 'Development that meets current needs without harming future generations or the environment',
    explanation: 'Sustainability balances social, economic, and environmental needs.',
  },
  {
    prompt: 'How many pillars does sustainable development have?',
    options: ['Two', 'Three: environmental, social, and economic', 'Four', 'Five'],
    answer: 'Three: environmental, social, and economic',
    explanation: 'These three pillars are equally important and interconnected.',
  },
  {
    prompt: 'What does the environmental pillar of sustainability focus on?',
    options: ['Money only', 'Protecting ecosystems, managing resources responsibly, and reducing pollution', 'Social welfare', 'Technology only'],
    answer: 'Protecting ecosystems, managing resources responsibly, and reducing pollution',
    explanation: 'Environmental sustainability ensures natural resources are conserved for future generations.',
  },
  {
    prompt: 'Why might poor communities struggle with sustainable practices?',
    options: ['They don\'t care about the environment', 'Immediate survival needs often take priority over long-term sustainability', 'They are lazy', 'They have good resources'],
    answer: 'Immediate survival needs often take priority over long-term sustainability',
    explanation: 'People facing poverty must meet basic needs first, limiting capacity for conservation.',
  },
  {
    prompt: 'What is a major barrier to corporate sustainable practices?',
    options: ['Lack of technology', 'Profit motives often prioritize short-term gains over sustainability', 'Government support', 'No consumer interest'],
    answer: 'Profit motives often prioritize short-term gains over sustainability',
    explanation: 'Companies may resist costly sustainable practices if they cut into profits.',
  },
  {
    prompt: 'How can renewable energy contribute to sustainable development?',
    options: ['It can\'t', 'It reduces emissions, conserves resources, and ensures long-term energy security', 'It\'s too expensive', 'It creates pollution'],
    answer: 'It reduces emissions, conserves resources, and ensures long-term energy security',
    explanation: 'Renewable energy is critical for environmental and economic sustainability.',
  },
  {
    prompt: 'What is an example of individual action toward sustainability?',
    options: ['Ignoring the problem', 'Conscious consumption, reducing waste, and supporting ethical businesses', 'Only government action', 'Nothing individuals can do'],
    answer: 'Conscious consumption, reducing waste, and supporting ethical businesses',
    explanation: 'Individual choices collectively impact environmental and social sustainability.',
  },
  {
    prompt: 'Which is an example of unsustainable practice?',
    options: ['Renewable energy use', 'Protecting forests', 'Overfishing that depletes fish stocks', 'Recycling programmes'],
    answer: 'Overfishing that depletes fish stocks',
    explanation: 'Unsustainable fishing removes resources faster than they can regenerate.',
  },
  {
    prompt: 'How does education support sustainable development?',
    options: ['It doesn\'t', 'It builds awareness, skills, and capacity for informed decision-making about sustainability', 'Only in schools', 'Only for girls'],
    answer: 'It builds awareness, skills, and capacity for informed decision-making about sustainability',
    explanation: 'Educated populations understand and support sustainable practices.',
  },
  {
    prompt: 'What would be needed to achieve global sustainable development?',
    options: ['Action by governments only', 'Coordinated action at individual, community, national, and global levels', 'Only technology', 'Impossible'],
    answer: 'Coordinated action at individual, community, national, and global levels',
    explanation: 'Sustainability requires systemic change across all sectors of society.',
  },
];

const SustainableDevelopmentT2 = () => (
  <CapsSubjectTopic
    title="Sustainable Development"
    subtitle="Balancing growth, society, and environment"
    learnSteps={learnSteps}
    task="gr9-sustainable-development-t2"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default SustainableDevelopmentT2;
