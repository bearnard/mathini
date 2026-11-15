
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import type { EconomicsItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

type RawEconomicsItem = {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const learnSteps: LearnStep[] = [
  {
    title: 'Growth versus development',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Important distinction</p>
          <p className="mt-2 text-slate-700">
            Growth is an increase in real output, while development also includes poverty reduction, better
            health, stronger education and wider opportunity.
          </p>
        </div>
        <DataChart
          data={[
            { measure: 'GDP growth', score: 4 },
            { measure: 'Education access', score: 7 },
            { measure: 'Health outcomes', score: 6 },
            { measure: 'Poverty reduction', score: 5 },
          ]}
          series={[{ key: 'score', label: 'Development lens', color: '#6366f1' }]}
          xKey="measure"
          type="bar"
        />
      </div>
    ),
  },
  {
    title: 'Structural change and industrialisation',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Industrial policy shifts labour and capital toward more productive sectors such as manufacturing,
          agro-processing and modern services.
        </p>
        <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600">Reliable electricity, logistics and skills are essential for industrial policy to succeed.</div>
      </div>
    ),
  },
  {
    title: 'Beneficiation and regional development',
    content: (
      <div className="space-y-6">
        <DataChart
          data={[
            { stage: 'Raw export', jobs: 2 },
            { stage: 'Processing', jobs: 5 },
            { stage: 'Manufacturing', jobs: 8 },
          ]}
          series={[{ key: 'jobs', label: 'Jobs per value chain stage', color: '#10b981' }]}
          xKey="stage"
          type="bar"
        />
        <p className="text-sm leading-7 text-slate-600">Beneficiation adds value before export, which can support employment, skills and foreign-exchange earnings.</p>
      </div>
    ),
  },
  {
    title: 'Development goals in SA',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Evaluation point</p>
          <p className="mt-2 text-slate-700">
            Industrial policy works best when it improves both efficiency and inclusion. If it protects weak
            firms forever, it may raise costs without delivering broad development.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Development, growth and SEZs",
    content: (
      <div className="space-y-4">
        <GapRule>{"Growth only counts extra output (real GDP). Development also asks whether people are healthier, better educated and better off. Special zones such as Coega give firms incentives so investment flows to chosen regions."}</GapRule>
        <GapWorked title={"Compare the terms"} steps={["Growth: an increase in real GDP.", "Development: better health, education and living standards as well.", "A zone like Coega offers incentives to draw investment to a targeted area."]} />
        <GapMistake>{"Treating growth and development as the same thing."}</GapMistake>
      </div>
    ),
  },
];

const items: RawEconomicsItem[] = [
  {
    "id": "gd-1",
    "question": "Economic development is broader than economic growth because it includes ...",
    "options": ['higher inflation rates and faster price increases', 'changes in living standards and welfare', 'larger imports from abroad', 'a stronger exchange rate'],
    "answer": 1,
    "explanation": "Development includes welfare improvements such as health, education and reduced poverty."
  },
  {
    "id": "gd-2",
    "question": "Economic growth refers mainly to an increase in ...",
    "options": [
      "real output",
      "population size",
      "tax rates",
      "imports only"
    ],
    "answer": 0,
    "explanation": "Growth is an increase in the economy’s real output of goods and services."
  },
  {
    "id": "gd-3",
    "question": "Industrial policy aims mainly to ...",
    "options": ['discourage production in key sectors of the economy', 'support productive sectors and structural change', 'remove trade with other countries', 'reduce education levels of workers'],
    "answer": 1,
    "explanation": "Industrial policy supports sectors that can drive output, jobs and competitiveness."
  },
  {
    "id": "gd-4",
    "question": "Beneficiation means ...",
    "options": [
      "exporting raw minerals without any processing",
      "adding value to raw materials before export",
      "removing value-added tax",
      "lowering all wages"
    ],
    "answer": 1,
    "explanation": "Beneficiation increases the value of raw resources through processing or manufacturing."
  },
  {
    "id": "gd-5",
    "question": "A Special Economic Zone is used mainly to ...",
    "options": [
      "ban foreign investment in targeted areas",
      "attract investment into targeted areas",
      "set the repo rate",
      "replace all local businesses"
    ],
    "answer": 1,
    "explanation": "SEZs offer incentives and infrastructure to attract investment and jobs."
  },
  {
    "id": "gd-6",
    "question": "Inclusive growth means growth that ...",
    "options": [
      "benefits mainly large corporations and their owners",
      "widens participation and opportunity",
      "ignores inequality",
      "happens without employment"
    ],
    "answer": 1,
    "explanation": "Inclusive growth aims to spread opportunities and benefits more broadly across society."
  },
  {
    "id": "gd-7",
    "question": "Which outcome is most directly linked to development rather than growth alone?",
    "options": [
      "Higher GDP with worse health outcomes",
      "Improved education and lower poverty",
      "More monopoly power in key markets",
      "A higher customs tariff only"
    ],
    "answer": 1,
    "explanation": "Development focuses on broader social improvements such as education and poverty reduction."
  },
  {
    "id": "gd-8",
    "question": "Labour-intensive industrial strategies are valued because they can ...",
    "options": [
      "use fewer workers per rand invested",
      "create more jobs",
      "eliminate all imports",
      "raise inequality automatically"
    ],
    "answer": 1,
    "explanation": "Labour-intensive production tends to create more employment opportunities."
  }
];

    const bank: EconomicsItem[] = items.map((item) => ({
      prompt: item.question,
      options: item.options,
      answer: item.options[item.answer],
      explanation: item.explanation,
    }));

    const GrowthDevelopmentIndustrialPolicy = () => (
      <CapsSubjectTopic
        title="Growth, Development and Industrial Policy"
        subtitle="Broadening growth through industrialisation and structural change"
        learnSteps={learnSteps}
        task="gr12-growth-development-industrial-policy-t3"
        bank={bank}
        apiPath="/api/caps/econ"
        grade={12}
      />
    );

    export default GrowthDevelopmentIndustrialPolicy;
