import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';


const learnSteps: LearnStep[] = [
  {
    title: "The role of government in development",
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Governments are the primary drivers of development through policy, investment, and regulation. In South Africa, the <strong>National Development Plan (NDP) 2030</strong> guides this vision.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">NDP 2030 goals</strong>
            <p className="text-slate-600 text-sm">Eliminate poverty, reduce inequality, create 11 million jobs, achieve universal access to quality education and healthcare by 2030.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Government tools</strong>
            <p className="text-slate-600 text-sm">Taxation, public spending, infrastructure investment (roads, water, energy), social grants, Special Economic Zones.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Foreign Direct Investment (FDI)',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>FDI</strong> is investment made by a company or individual in one country into business interests in another country — typically establishing business operations or acquiring assets.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Benefits of FDI</strong>
            <p className="text-slate-600 text-sm">Creates jobs, transfers technology and management skills, generates tax revenue, improves infrastructure, and boosts export earnings.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Concerns about FDI</strong>
            <p className="text-slate-600 text-sm">Profits may be repatriated to foreign investors; local industries can be undercut; natural resources may be exploited without adequate local benefit.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">South Africa competes with other African nations for FDI by offering a stable legal system, infrastructure, and the REIPPPP in renewable energy.</p>
      </div>
    ),
  },
  {
    title: 'Public-Private Partnerships (PPPs)',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>PPP</strong> is an arrangement where government and private sector jointly fund, build, or manage a project — combining public accountability with private efficiency.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-2">
          <p><strong>How it works:</strong> Government provides the regulatory framework or land; private sector provides capital and management. Revenue is shared or government pays for the service.</p>
          <p><strong>South African examples:</strong> Gautrain (rapid rail), the N4 and N1 toll-road concessions, some hospital services, renewable energy plants under REIPPPP.</p>
          <p><strong>Advantages:</strong> delivers infrastructure faster with less government debt; transfers risk to the private sector; improves efficiency.</p>
          <p><strong>Concerns:</strong> public loses some control; profits accrue to private investors; service delivery may suffer if profit motive dominates.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Regional bodies: SADC, AU and BRICS',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Regional and international bodies play an increasingly important role in coordinating development across Africa and beyond.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">SADC</strong>
            <p className="text-slate-600 text-sm">Southern African Development Community — 16 member states. Promotes economic integration, trade, and regional peace.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">African Union (AU)</strong>
            <p className="text-slate-600 text-sm">55 member states. Promotes continental unity, peace, security, and the Agenda 2063 development framework.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">BRICS</strong>
            <p className="text-slate-600 text-sm">Started with Brazil, Russia, India, China and South Africa and has since added more members. Forum for cooperation among major emerging economies; the New Development Bank provides development finance.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Economic Data — Government Spending by Sector',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">The state influences development through spending decisions. This chart shows the approximate share of spending directed to major sectors in South Africa.</p>
        <DataChart
          data={[
                        { sector: 'Education', share: 21 },
                        { sector: 'Social protection', share: 19 },
                        { sector: 'Health', share: 15 },
                        { sector: 'Public order', share: 10 },
                        { sector: 'Transport', share: 6 },
                      ]}
          xKey="sector"
          series={[
                        { key: 'share', label: 'Budget share (%)', type: 'bar', color: '#3b82f6' },
                      ]}
          yLabel="Percent"
          height={240}
        />

        <p className="text-sm text-slate-500">Spending patterns show how the state tries to balance social needs, economic growth, and public services.</p>
      </div>
    ),
  },
  {
    title: "Africa's development plan, zones and private power",
    content: (
      <div className="space-y-4">
        <GapRule>{"The AU's blueprint known as Agenda 2063 looks fifty years ahead. A special economic zone offers firms incentives such as tax relief inside a fenced-off area. Under REIPPPP, private firms build wind and solar plants and sell the power to the state."}</GapRule>
        <GapWorked title={"Match the tool"} steps={["Agenda 2063: the long-term vision.", "SEZ: a designated area with incentives, such as Coega.", "REIPPPP: government buys electricity from independent private producers."]} />
        <GapMistake>{"Thinking an SEZ covers a whole country."}</GapMistake>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is South Africa\'s National Development Plan (NDP) 2030?',
    options: ['A short-term stimulus package for the economy', 'A long-term plan to end poverty and cut inequality by 2030', 'A plan to privatise all state-owned companies', 'A plan for education at universities only'],
    answer: 'A long-term plan to end poverty and cut inequality by 2030',
    explanation: 'The NDP sets targets for poverty elimination, job creation (11 million jobs), and improving access to education, healthcare, and basic services by 2030.',
  },
  {
    prompt: 'Foreign Direct Investment (FDI) is BEST described as:',
    options: ['Loans that a government takes from the World Bank', 'Money given as aid to the poorer developing countries', 'Investment by a foreign firm into business in another country', 'Trade deals that are made between two nations'],
    answer: 'Investment by a foreign firm into business in another country',
    explanation: 'FDI involves establishing or acquiring business interests (factories, mines, retail outlets) in a foreign country, not just purchasing shares.',
  },
  {
    prompt: 'A key benefit of FDI for a developing country is:',
    options: ['The donor country takes most of the profit made', 'It creates jobs and passes on technology and skills', 'It removes the need for any taxation in the country', 'It guarantees that wealth is shared out equally'],
    answer: 'It creates jobs and passes on technology and skills',
    explanation: 'FDI brings capital, technology, expertise, and employment — although the extent of these benefits depends on government policy and investment terms.',
  },
  {
    prompt: 'What is a Public-Private Partnership (PPP)?',
    options: ['A joint venture between two privately owned companies', 'Government and private firms jointly fund, build or run a project', 'A non-profit group that works on development projects', 'A trade agreement that is made within the BRICS group'],
    answer: 'Government and private firms jointly fund, build or run a project',
    explanation: 'PPPs combine government oversight with private sector capital and efficiency to deliver public infrastructure and services.',
  },
  {
    prompt: 'The Gautrain is an example of which type of arrangement?',
    options: ['Bilateral aid from another government', 'A Public-Private Partnership (PPP)', 'Foreign Direct Investment (FDI) by a foreign firm', 'A project run by SADC member states'],
    answer: 'A Public-Private Partnership (PPP)',
    explanation: 'The Gautrain rapid rail system was built and is operated under a PPP between the Gauteng provincial government and the Bombela Consortium.',
  },
  {
    prompt: 'SADC stands for:',
    options: ['South African Development Corporation', 'Southern African Development Community', 'Sub-Saharan African Development Commission', 'Southern Africa Democratic Cooperation'],
    answer: 'Southern African Development Community',
    explanation: 'SADC is a regional economic community of 16 southern African member states promoting economic integration and development.',
  },
  {
    prompt: 'BRICS is a grouping of which countries?',
    options: [
      'Bangladesh, Russia, India, China, South Africa',
      'Brazil, Russia, India, China, South Africa',
      'Britain, Romania, India, Canada, Saudi Arabia',
      'Brazil, Russia, Iran, China, Sudan',
    ],
    answer: 'Brazil, Russia, India, China, South Africa',
    explanation: 'BRICS is a forum for the five major emerging market economies: Brazil, Russia, India, China, and South Africa (which joined in 2010).',
  },
  {
    prompt: 'The African Union\'s Agenda 2063 is a framework for:',
    options: ['Military cooperation between African countries', 'Change and development across Africa over fifty years', 'The resettlement of people between countries', 'Adaptation to climate change and nothing more'],
    answer: 'Change and development across Africa over fifty years',
    explanation: 'Agenda 2063 is the AU\'s 50-year development vision, aiming to transform Africa into a prosperous, integrated, and peaceful continent.',
  },
  {
    prompt: 'What is a Special Economic Zone (SEZ)?',
    options: ['An area that is protected as a nature reserve', 'A defined area with tax breaks and fewer rules to attract investment', 'A region that receives emergency aid after a disaster', 'An area set aside for subsistence farming'],
    answer: 'A defined area with tax breaks and fewer rules to attract investment',
    explanation: 'SEZs offer fiscal and regulatory incentives to attract domestic and foreign investors, aiming to create jobs and stimulate industrial development.',
  },
  {
    prompt: 'Which South African programme has attracted significant private and foreign investment into renewable energy?',
    options: ['The NDP 2030, the National Development Plan of the country', 'REIPPPP (Renewable Energy Independent Power Producer Procurement Programme)', 'The BRICS New Development Bank for infrastructure', 'The SADC Energy Protocol for the region'],
    answer: 'REIPPPP (Renewable Energy Independent Power Producer Procurement Programme)',
    explanation: 'REIPPPP has procured over 6 000 MW of renewable energy from private investors since 2011, making it one of Africa\'s most successful energy investment programmes.',
  },
];

const StateBusinessRolesT3 = () => (
  <CapsSubjectTopic
    title="Roles of State and Business in Development"
    subtitle="Government policy, FDI, Public-Private Partnerships and regional bodies"
    learnSteps={learnSteps}
    task="gr11-state-business-roles-t3"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default StateBusinessRolesT3;
