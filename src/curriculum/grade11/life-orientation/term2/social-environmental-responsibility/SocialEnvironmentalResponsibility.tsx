import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Environmental Justice and Sustainability',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Environmental justice</strong> means that no community — especially marginalised or low-income communities — should bear a disproportionate share of environmental harms.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Environmental justice</strong>
            <p className="text-slate-600 text-sm">Fair distribution of environmental benefits (clean water, green spaces) and burdens (pollution, waste sites) across all communities.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Sustainability</strong>
            <p className="text-slate-600 text-sm">Meeting the needs of the present without compromising the ability of future generations to meet their own needs. (Brundtland Commission, 1987)</p>
          </div>
        </div>
        <p className="text-slate-600 text-sm">South Africa faces challenges including water scarcity, informal settlement waste management, and climate vulnerability — all linked to environmental justice.</p>
      </div>
    ),
  },
  {
    title: 'Social Justice and Accountability',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Social justice</strong> means that all people have equal rights and opportunities, free from discrimination. <strong>Accountability</strong> ensures that individuals and institutions answer for their actions.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-3 text-left">
          <p className="font-bold text-slate-800">Levels of accountability:</p>
          <div className="grid gap-2 md:grid-cols-3 text-slate-600 text-sm">
            <div>
              <p className="font-medium">Individual</p>
              <p>Taking personal responsibility for actions that harm others or the environment.</p>
            </div>
            <div>
              <p className="font-medium">Institutional</p>
              <p>Organisations and businesses being held responsible for their environmental and social impact.</p>
            </div>
            <div>
              <p className="font-medium">Government</p>
              <p>State bodies enforcing laws, protecting rights, and being answerable to citizens.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Evaluating Environmental and Social Challenges',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          To evaluate a challenge, you need to analyse its <strong>causes</strong>, <strong>effects</strong>, and the groups most affected.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2 text-left">
          <p className="font-bold text-slate-800">Analysis framework:</p>
          <ol className="list-decimal list-inside text-slate-600 text-sm space-y-1">
            <li><strong>Identify the issue</strong> — what is the environmental or social problem?</li>
            <li><strong>Causes</strong> — what human activities or systemic failures created this problem?</li>
            <li><strong>Who is affected?</strong> — which groups bear the greatest burden?</li>
            <li><strong>Effects</strong> — short-term and long-term impacts on people and the environment.</li>
            <li><strong>Rights implications</strong> — which constitutional rights are at stake (e.g., right to a clean environment — Section 24)?</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    title: 'Proposing Ethical Responses',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          An <strong>ethical response</strong> is one that is fair, rights-based, and considers the impact on all members of the community — including the most vulnerable.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Individual actions</strong>
            <p className="text-slate-600 text-sm">Reduce waste, use public transport, conserve water, participate in community clean-ups, buy sustainably.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Collective and civic actions</strong>
            <p className="text-slate-600 text-sm">Petitions, community campaigns, advocacy to government, supporting environmental NGOs, raising awareness.</p>
          </div>
        </div>
        <p className="text-slate-600 text-sm">Section 24 of the South African Constitution guarantees <strong>the right to an environment not harmful to health or wellbeing</strong>.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does "environmental justice" mean?',
    options: [
      'Only wealthy communities should have access to green spaces',
      'Fair distribution of environmental benefits and burdens across all communities',
      'Punishing individuals for polluting',
      'Protecting only endangered animal species',
    ],
    answer: 'Fair distribution of environmental benefits and burdens across all communities',
    explanation: 'Environmental justice ensures no community bears a disproportionate share of environmental harm, particularly marginalised groups.',
  },
  {
    prompt: 'The Brundtland Commission definition of sustainability means:',
    options: [
      'Using all available resources now for economic growth',
      'Meeting present needs without compromising future generations\' ability to meet their own needs',
      'Only protecting nature and ignoring human needs',
      'Sustainability is a concern only for wealthy nations',
    ],
    answer: 'Meeting present needs without compromising future generations\' ability to meet their own needs',
    explanation: 'The 1987 Brundtland Commission defined sustainable development in terms of intergenerational responsibility.',
  },
  {
    prompt: 'Which section of the South African Constitution guarantees the right to a clean environment?',
    options: ['Section 9', 'Section 24', 'Section 36', 'Section 14'],
    answer: 'Section 24',
    explanation: 'Section 24 of the Constitution gives everyone the right to an environment not harmful to health or wellbeing.',
  },
  {
    prompt: 'What is "social justice"?',
    options: [
      'Enforcing harsh legal penalties',
      'All people having equal rights and opportunities free from discrimination',
      'Benefiting only the majority group in society',
      'Social justice only applies to economic issues',
    ],
    answer: 'All people having equal rights and opportunities free from discrimination',
    explanation: 'Social justice means ensuring equitable access to rights, resources, and opportunities for all people.',
  },
  {
    prompt: 'A township community lives next to a factory that dumps waste illegally. Which concept best describes this situation?',
    options: ['Sustainability', 'Environmental justice violation', 'Carbon footprint', 'Biodiversity loss'],
    answer: 'Environmental justice violation',
    explanation: 'Placing environmental burdens (like industrial waste) disproportionately on marginalised communities violates environmental justice principles.',
  },
  {
    prompt: 'At which level is accountability demonstrated when a business reports its carbon emissions publicly?',
    options: ['Individual', 'Institutional', 'Government', 'Environmental'],
    answer: 'Institutional',
    explanation: 'Institutional accountability involves organisations and businesses being transparent and answerable for their environmental and social impact.',
  },
  {
    prompt: 'Which of the following is an example of an ethical individual response to environmental challenges?',
    options: [
      'Ignoring water restrictions during drought conditions',
      'Reducing personal waste and conserving water at home',
      'Expecting only the government to solve environmental problems',
      'Buying the cheapest goods regardless of environmental cost',
    ],
    answer: 'Reducing personal waste and conserving water at home',
    explanation: 'Individual responsibility is a key part of an ethical response to environmental challenges alongside collective and civic action.',
  },
  {
    prompt: 'When analysing a social or environmental challenge, why is it important to ask "who is most affected?"',
    options: [
      'It is not important — challenges affect everyone equally',
      'To ensure that the most vulnerable and marginalised groups receive appropriate attention and support',
      'To decide who is to blame',
      'It is only relevant for legal cases',
    ],
    answer: 'To ensure that the most vulnerable and marginalised groups receive appropriate attention and support',
    explanation: 'Identifying who bears the greatest burden ensures responses are fair, rights-based, and prioritise justice.',
  },
  {
    prompt: 'Which of the following is a collective civic action to address an environmental problem?',
    options: [
      'Recycling your own household waste',
      'Organising a community campaign and petitioning local government to address illegal dumping',
      'Planting a tree in your garden',
      'Turning off lights when leaving a room',
    ],
    answer: 'Organising a community campaign and petitioning local government to address illegal dumping',
    explanation: 'Collective civic action amplifies the impact of individual efforts and holds authorities accountable.',
  },
  {
    prompt: 'South Africa\'s water scarcity is an example of an environmental challenge linked to:',
    options: [
      'Environmental justice, climate vulnerability, and resource distribution',
      'Only climate change',
      'Only population growth',
      'Government incompetence alone',
    ],
    answer: 'Environmental justice, climate vulnerability, and resource distribution',
    explanation: 'Water scarcity in South Africa intersects with climate change, inequality, and unjust distribution of water resources.',
  },
];

const SocialEnvironmentalResponsibility = () => (
  <CapsSubjectTopic
    title="Social and Environmental Responsibility"
    subtitle="Environmental justice, sustainability, accountability and ethical civic responses"
    learnSteps={learnSteps}
    task="gr11-social-environmental-responsibility-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default SocialEnvironmentalResponsibility;
