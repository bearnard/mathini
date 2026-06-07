
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const regionalTradeData = [
  { year: '2019', exports: 220, imports: 180 },
  { year: '2020', exports: 205, imports: 165 },
  { year: '2021', exports: 238, imports: 190 },
  { year: '2022', exports: 255, imports: 208 },
  { year: '2023', exports: 262, imports: 214 },
];

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/econ/term3/south-africa-africa/diagram.webp", alt: "South Africa in Africa: SADC and NEPAD" },
    title: "South Africa's Role in Africa",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          South Africa is one of Africa&apos;s most industrialised economies and often acts as a regional trade, finance and transport hub.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-800">Trade and investment</p>
            <p className="mt-1 text-slate-600">South African banks, retailers and telecom firms operate widely across the continent.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">Infrastructure link</p>
            <p className="mt-1 text-slate-600">Ports, roads and rail help neighbouring landlocked countries reach global markets.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'SADC — Southern African Development Community',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          SADC promotes regional integration, trade, infrastructure coordination and peace-building across Southern Africa.
        </p>
        <DataChart
          data={regionalTradeData}
          series={[
            { key: 'exports', label: 'SA exports to Africa (R bn)', color: '#6366f1' },
            { key: 'imports', label: 'SA imports from Africa (R bn)', color: '#10b981' },
          ]}
          xKey="year"
          type="line"
          yLabel="R billion"
        />
        <p className="text-sm text-slate-500">Regional integration matters because trade volumes with neighbouring economies are large and growing.</p>
      </div>
    ),
  },
  {
    title: "NEPAD — New Partnership for Africa's Development",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          NEPAD is an African-led development framework built around accountability, better governance and shared development priorities.
        </p>
        <div className="rounded-xl bg-slate-50 p-4 text-left">
          <p className="font-semibold text-slate-800">Key features</p>
          <p className="mt-1 text-slate-600">African ownership, infrastructure investment, agricultural development and the African Peer Review Mechanism.</p>
        </div>
      </div>
    ),
  },
  {
    title: "African Union and BRICS — SA's Broader Partnerships",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Beyond SADC and NEPAD, South Africa also works through the AU and BRICS to expand trade, attract investment and influence development debates.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-orange-50 p-4">
            <p className="font-semibold text-orange-800">African Union</p>
            <p className="mt-1 text-slate-600">Promotes continental integration, peace and the African Continental Free Trade Area.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <p className="font-semibold text-purple-800">BRICS</p>
            <p className="mt-1 text-slate-600">Offers alternative development finance through the New Development Bank and a larger diplomatic platform.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: 'SADC was formally established in:',
    options: ['1980', '1992', '2001', '2010'],
    answer: '1992',
    explanation: 'SADC (Southern African Development Community) was established in 1992 in Windhoek, Namibia, replacing the earlier SADCC.',
  },
  {
    prompt: 'SADC\'s Free Trade Area, launched in 2008, aims to:',
    options: ['Impose uniform tariffs on non-SADC imports', 'Allow goods to trade freely among member states with reduced tariffs', 'Create a single SADC currency', 'Ban imports from outside Africa'],
    answer: 'Allow goods to trade freely among member states with reduced tariffs',
    explanation: 'The SADC Free Trade Area reduces intra-regional tariffs to promote trade and economic integration among member countries.',
  },
  {
    prompt: 'NEPAD was adopted by the African Union in:',
    options: ['1992', '1994', '2001', '2010'],
    answer: '2001',
    explanation: 'NEPAD (New Partnership for Africa\'s Development) was launched in 2001 by African leaders including Thabo Mbeki of South Africa.',
  },
  {
    prompt: 'The key principle that distinguishes NEPAD from earlier development frameworks is:',
    options: ['Heavy reliance on Western donor funding', 'African ownership — "African solutions to African problems"', 'Imposed governance standards from the IMF', 'Exclusion of South Africa from leadership'],
    answer: 'African ownership — "African solutions to African problems"',
    explanation: 'NEPAD\'s defining feature is that African leaders take ownership of the continent\'s development agenda rather than depending on external prescriptions.',
  },
  {
    prompt: 'The APRM (African Peer Review Mechanism) under NEPAD is used to:',
    options: ['Set interest rates across African countries', 'Allow African countries to voluntarily review each other\'s governance and policies', 'Coordinate military operations', 'Distribute World Bank loans to member states'],
    answer: "Allow African countries to voluntarily review each other's governance and policies",
    explanation: 'The APRM is a voluntary accountability tool where member countries accept peer review of their political and economic governance by other African nations.',
  },
  {
    prompt: 'South Africa joined BRICS in:',
    options: ['2001', '2006', '2010', '2015'],
    answer: '2010',
    explanation: 'South Africa joined the BRICS grouping (Brazil, Russia, India, China) in 2010 at the Sanya summit in China.',
  },
  {
    prompt: "South Africa's dominance in SADC (over 50% of the group's GDP) can cause challenges because:",
    options: ["It means SA's exports are too cheap for neighbours", 'Smaller SADC members may become economically dependent on SA, limiting balanced regional development', "SA's rand becomes the SADC reserve currency", 'Other SADC members must adopt SA trade laws'],
    answer: 'Smaller SADC members may become economically dependent on SA, limiting balanced regional development',
    explanation: "SA's economic dominance can create unequal relationships within SADC, where smaller economies depend heavily on SA trade and investment.",
  },
  {
    prompt: 'The African Continental Free Trade Area (AfCFTA), launched in 2021, is an initiative of the:',
    options: ['SADC', 'NEPAD Secretariat', 'African Union (AU)', 'World Trade Organisation'],
    answer: 'African Union (AU)',
    explanation: 'The AfCFTA is a flagship AU project aimed at creating a single continental market covering 55 countries and 1.3 billion people.',
  },
  {
    prompt: "SA's ports (Durban, Cape Town) benefit neighbouring landlocked countries by:",
    options: ['Providing them with SA currency', 'Giving them access to global shipping routes and trade', 'Supplying free electricity', 'Allowing their citizens to work in SA without visas'],
    answer: 'Giving them access to global shipping routes and trade',
    explanation: "Landlocked countries like Zimbabwe, Zambia and Botswana depend on SA's port infrastructure to export goods and import supplies.",
  },
  {
    prompt: 'Regional economic integration benefits developing African countries primarily through:',
    options: ['Reduced political sovereignty', 'Access to larger combined markets, economies of scale and shared infrastructure investment', 'More foreign debt obligations', 'Dependence on IMF conditionality'],
    answer: 'Access to larger combined markets, economies of scale and shared infrastructure investment',
    explanation: 'Integration expands market size, reduces trade costs, and allows pooling of resources for infrastructure — key development benefits for smaller African economies.',
  },
];

const SouthAfricaAfrica = () => (
  <CapsSubjectTopic
    title="South Africa in Africa: SADC and NEPAD"
    subtitle="Regional integration, development partnerships and SA's continental role"
    learnSteps={learnSteps}
    task="gr11-south-africa-africa-t3"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default SouthAfricaAfrica;
