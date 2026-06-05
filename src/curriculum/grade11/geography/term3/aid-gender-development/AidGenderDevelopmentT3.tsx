import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'Types of aid',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Aid</strong> is assistance given from one party to another to promote development or respond to crises. It takes several different forms.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Bilateral aid</strong>
            <p className="text-slate-600 text-sm">Given directly from one government to another. Often linked to political or economic interests.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Multilateral aid</strong>
            <p className="text-slate-600 text-sm">Channelled through international organisations like the World Bank, IMF, or United Nations agencies.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">NGO (non-governmental) aid</strong>
            <p className="text-slate-600 text-sm">Provided by charities and civil society organisations (e.g., Oxfam, MSF). Often community-focused and needs-driven.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Emergency vs development aid</strong>
            <p className="text-slate-600 text-sm"><strong>Emergency:</strong> short-term relief (food, shelter after disaster). <strong>Development:</strong> long-term investment (schools, clinics, infrastructure).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Problems with aid',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          While aid can save lives and support development, it also carries significant risks and criticisms.
        </p>
        <div className="bg-red-50 p-5 rounded-xl text-left space-y-2">
          <p><strong className="text-red-700">Aid dependency:</strong> countries may rely on aid rather than building self-sufficient economies and tax systems.</p>
          <p><strong className="text-red-700">Tied aid:</strong> aid that must be spent on goods or services from the donor country, reducing its local economic impact.</p>
          <p><strong className="text-red-700">Conditionality:</strong> donors attach conditions (e.g., economic policy reforms) that may not match local needs.</p>
          <p><strong className="text-red-700">Corruption:</strong> aid funds may be misappropriated by governments, reaching intended beneficiaries poorly.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Gender equality as a development driver',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Gender inequality is both a consequence and a cause of underdevelopment. Empowering women accelerates development across all sectors.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Gender Development Index (GDI)</strong>
            <p className="text-slate-600 text-sm">Measures the HDI separately for males and females to reveal gender inequality in development.</p>
          </div>
          <div className="rounded-xl bg-pink-50 p-4">
            <strong className="text-pink-700">Women and food security</strong>
            <p className="text-slate-600 text-sm">Women produce 60–80% of food in sub-Saharan Africa, yet often lack land rights, credit, and inputs. Empowering women directly improves food security.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">Research shows that educating girls is one of the highest-return investments in development — reducing fertility rates, improving child health, and increasing household income.</p>
      </div>
    ),
  },
  {
    title: 'Sustainable Development Goals (SDGs)',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>17 Sustainable Development Goals</strong> were adopted by the United Nations in 2015 as a universal call to action to end poverty, protect the planet, and ensure prosperity by 2030.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-2">
          <p><strong>SDG 1:</strong> No poverty — end extreme poverty for all people everywhere.</p>
          <p><strong>SDG 2:</strong> Zero hunger — sustainable agriculture and food security.</p>
          <p><strong>SDG 5:</strong> Gender equality — achieve equality and empower all women and girls.</p>
          <p><strong>SDG 13:</strong> Climate action — combat climate change and its impacts.</p>
          <p className="text-slate-500 text-sm">The SDGs replaced the Millennium Development Goals (MDGs) in 2015 and are more comprehensive and universal in scope.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Development Data — Aid and Gender Indicators',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Development can be compared with more than one dataset. Aid flows show where outside support is concentrated, while gender inequality data highlights unequal opportunities and outcomes.</p>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-2 rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-700">Aid per person</p>
            <DataChart
              data={[
                            { country: 'Malawi', aid: 76 },
                            { country: 'Mozambique', aid: 68 },
                            { country: 'Zambia', aid: 52 },
                            { country: 'Ethiopia', aid: 35 },
                          ]}
              xKey="country"
              series={[
                            { key: 'aid', label: 'Aid per person (US$)', type: 'bar', color: '#0ea5e9' },
                          ]}
              yLabel="US$"
              height={220}
            />
          </div>

          <div className="space-y-2 rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-700">Gender inequality index</p>
            <DataChart
              data={[
                            { country: 'Norway', gii: 0.04 },
                            { country: 'South Africa', gii: 0.41 },
                            { country: 'Kenya', gii: 0.49 },
                            { country: 'Nigeria', gii: 0.62 },
                          ]}
              xKey="country"
              series={[
                            { key: 'gii', label: 'Gender inequality index', type: 'bar', color: '#ec4899' },
                          ]}
              yLabel="Index"
              height={220}
            />
          </div>
        </div>

        <p className="text-sm text-slate-500">Higher aid does not automatically guarantee development, and lower gender inequality usually supports stronger human development outcomes.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Bilateral aid is best described as:',
    options: [
      'Aid given through the United Nations',
      'Aid provided directly from one government to another',
      'Aid given by non-governmental organisations',
      'Emergency aid for natural disasters only',
    ],
    answer: 'Aid provided directly from one government to another',
    explanation: 'Bilateral aid flows directly between two governments. It is often shaped by the donor country\'s political and economic interests.',
  },
  {
    prompt: 'Which of the following is an example of a multilateral aid organisation?',
    options: ['Oxfam', 'Médecins Sans Frontières (MSF)', 'The World Bank', 'USAID'],
    answer: 'The World Bank',
    explanation: 'The World Bank is a multilateral institution funded by member nations that provides loans and grants for development to lower-income countries.',
  },
  {
    prompt: 'What is "tied aid"?',
    options: [
      'Aid given with no conditions attached',
      'Aid that must be spent on goods or services from the donor country',
      'Aid provided during conflict situations',
      'Aid channelled through NGOs',
    ],
    answer: 'Aid must be spent on goods or services from the donor country',
    explanation: 'Tied aid reduces its development impact because the recipient must buy from the donor, often at higher cost than local alternatives.',
  },
  {
    prompt: 'Aid dependency is problematic because:',
    options: [
      'It always leads to economic growth',
      'It may prevent countries from developing self-sufficient economies and strong domestic institutions',
      'It reduces corruption in government',
      'It strengthens local currencies',
    ],
    answer: 'It may prevent countries from developing self-sufficient economies and strong domestic institutions',
    explanation: 'Long-term reliance on aid can undermine local entrepreneurship, government accountability, and the development of tax systems.',
  },
  {
    prompt: 'The Gender Development Index (GDI) measures:',
    options: [
      'The number of women in parliament',
      'Differences in HDI scores between males and females',
      'Access to contraception',
      'The gender pay gap in developed countries',
    ],
    answer: 'Differences in HDI scores between males and females',
    explanation: 'The GDI reveals gender inequalities in health, education, and income by calculating separate HDI values for men and women.',
  },
  {
    prompt: 'Approximately what fraction of food in sub-Saharan Africa is produced by women?',
    options: ['10–20%', '30–40%', '60–80%', '90–100%'],
    answer: '60–80%',
    explanation: 'Women are the primary food producers in sub-Saharan Africa, yet they often face barriers to land rights, credit, and agricultural inputs.',
  },
  {
    prompt: 'How many Sustainable Development Goals (SDGs) did the UN adopt in 2015?',
    options: ['8', '12', '17', '21'],
    answer: '17',
    explanation: 'The 17 SDGs were adopted in September 2015 as part of the 2030 Agenda for Sustainable Development, replacing the MDGs.',
  },
  {
    prompt: 'Which SDG specifically focuses on gender equality?',
    options: ['SDG 1', 'SDG 5', 'SDG 10', 'SDG 13'],
    answer: 'SDG 5',
    explanation: 'SDG 5 is "Gender Equality" — achieve gender equality and empower all women and girls. It addresses discrimination, violence, and access to resources.',
  },
  {
    prompt: 'Why is educating girls considered one of the highest-return investments in development?',
    options: [
      'It reduces military spending',
      'Educated women have fewer children, earn more, and invest more in their families, multiplying development benefits',
      'It increases tourism revenues',
      'It reduces the need for foreign aid',
    ],
    answer: 'Educated women have fewer children, earn more, and invest more in their families, multiplying development benefits',
    explanation: 'Girls\' education lowers fertility rates, improves child health and nutrition, increases household income, and boosts economic productivity.',
  },
  {
    prompt: 'The SDGs replaced which earlier framework in 2015?',
    options: ['Kyoto Protocol commitments', 'Millennium Development Goals (MDGs)', 'Paris Agreement targets', 'BRICS development plan'],
    answer: 'Millennium Development Goals (MDGs)',
    explanation: 'The MDGs ran from 2000 to 2015 and focused on 8 goals. The SDGs expanded this to 17 goals with a broader, more universal agenda to 2030.',
  },
];

const AidGenderDevelopmentT3 = () => (
  <CapsSubjectTopic
    title="Aid, Gender and Development"
    subtitle="Types of aid, gender equality as a development driver and the SDGs"
    learnSteps={learnSteps}
    task="gr11-aid-gender-development-t3"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default AidGenderDevelopmentT3;
