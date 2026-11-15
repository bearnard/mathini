
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
    options: ['Charge the same tariffs on imports from outside SADC', 'Let goods trade freely among members with lower tariffs', 'Create a single currency for all SADC members', 'Ban all imports that come from outside Africa'],
    answer: 'Let goods trade freely among members with lower tariffs',
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
    options: ['Heavy reliance on funding from Western donors', 'African ownership: "African solutions to African problems"', 'Governance standards imposed by the IMF', 'The exclusion of South Africa from leadership'],
    answer: 'African ownership: "African solutions to African problems"',
    explanation: 'NEPAD\'s defining feature is that African leaders take ownership of the continent\'s development agenda rather than depending on external prescriptions.',
  },
  {
    prompt: 'The APRM (African Peer Review Mechanism) under NEPAD is used to:',
    options: ['Set the interest rates for all African countries', "Let African states voluntarily review each other's governance", 'Coordinate military operations across the continent', 'Hand out World Bank loans to the member states'],
    answer: "Let African states voluntarily review each other's governance",
    explanation: 'The APRM is a voluntary accountability tool where member countries accept peer review of their political and economic governance by other African nations.',
  },
  {
    prompt: 'South Africa joined BRICS in:',
    options: ['2001', '2006', '2010', '2015'],
    answer: '2010',
    explanation: 'South Africa joined the BRICS grouping (Brazil, Russia, India, China) after being invited in December 2010; it attended its first summit as a full member in Sanya, China, in 2011.',
  },
  {
    prompt: "South Africa's dominance in SADC (over 50% of the group's GDP) can cause challenges because:",
    options: ["SA's exports become too cheap for its neighbours", 'Smaller members may come to depend on SA, limiting balanced growth', 'The rand becomes the reserve currency of SADC', 'Other members must adopt the trade laws of SA'],
    answer: 'Smaller members may come to depend on SA, limiting balanced growth',
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
    options: ['A loss of political sovereignty for members', 'Bigger markets, economies of scale and shared infrastructure', 'More foreign debt for the member countries', 'Reliance on the conditions that the IMF sets'],
    answer: 'Bigger markets, economies of scale and shared infrastructure',
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
