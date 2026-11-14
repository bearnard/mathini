import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'The ENSO cycle',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>ENSO</strong> (El Niño–Southern Oscillation) is a recurring climate pattern in the tropical Pacific Ocean that causes major shifts in global weather.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left space-y-3">
          <p className="text-slate-700"><strong>Normal conditions:</strong> strong SE trade winds push warm surface water west toward Indonesia and Australia. Cold water upwells off South America.</p>
          <p className="text-slate-700"><strong>ENSO disruption:</strong> changes in trade wind strength shift this warm water pool, altering rainfall patterns worldwide.</p>
          <p className="text-slate-500 text-sm">ENSO events occur every 2–7 years and can last 9–12 months.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'El Niño — warm phase',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          During <strong>El Niño</strong>, trade winds weaken or reverse, allowing warm water to spread across the central and eastern Pacific.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Pacific effects</strong>
            <p className="text-slate-600">Eastern Pacific warms; Peru and Ecuador get heavy flooding. Australia and Indonesia experience drought.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Southern Africa effects</strong>
            <p className="text-slate-600">Below-normal rainfall, drought, crop failures, and reduced river flows. Water shortages and food insecurity increase.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">The 2015–2016 El Niño caused severe drought across southern Africa, affecting food security for millions.</p>
      </div>
    ),
  },
  {
    title: 'La Niña — cool phase',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>La Niña</strong> is the opposite phase: trade winds strengthen, pushing even more warm water west while the eastern Pacific cools.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Pacific effects</strong>
            <p className="text-slate-600">Cooler eastern Pacific; western Pacific (Australia, Indonesia) receives very heavy rainfall.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Southern Africa effects</strong>
            <p className="text-slate-600">Above-normal rainfall, potential flooding, good agricultural seasons — but risk of flooding and infrastructure damage.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">La Niña events are associated with good crop yields in most of southern Africa but can also bring devastating floods.</p>
      </div>
    ),
  },
  {
    title: 'Impact on Africa: food security and water',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          ENSO is one of the most important drivers of year-to-year rainfall variability across Africa, with major consequences for agriculture and water resources.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left space-y-2">
          <p><strong className="text-red-600">El Niño risks:</strong> crop failure, cattle losses, dam levels drop, wildfires increase, food prices rise.</p>
          <p><strong className="text-blue-600">La Niña risks:</strong> flooding of farmland, displacement of communities, water-borne diseases.</p>
          <p className="text-slate-500 text-sm mt-2">South Africa's early warning systems use ENSO forecasts to prepare farmers and water managers months in advance.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Ocean Data — Niño 3.4 SST Index',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">The Niño 3.4 sea-surface temperature anomaly is used to track El Niño and La Niña conditions in the tropical Pacific.</p>
        <DataChart
          data={[
                        { month: 'Jan', index: -0.4 },
                        { month: 'Feb', index: -0.2 },
                        { month: 'Mar', index: -0.1 },
                        { month: 'Apr', index: 0.1 },
                        { month: 'May', index: 0.4 },
                        { month: 'Jun', index: 0.8 },
                        { month: 'Jul', index: 1.0 },
                        { month: 'Aug', index: 1.3 },
                        { month: 'Sep', index: 1.6 },
                        { month: 'Oct', index: 1.8 },
                        { month: 'Nov', index: 2.0 },
                        { month: 'Dec', index: 2.1 },
                      ]}
          xKey="month"
          series={[
                        { key: 'index', label: 'Niño 3.4 anomaly (°C)', type: 'line', color: '#ef4444' },
                      ]}
          type="line"
          yLabel="°C anomaly"
          height={240}
        />

        <p className="text-sm text-slate-500">Positive anomalies indicate El Niño conditions, while sustained negative anomalies point to La Niña.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does ENSO stand for?',
    options: ['Eastern-Northern Sea Oscillation', 'El Niño–Southern Oscillation', 'Equatorial North–South Ocean', 'Energy–Nature–Surface Output'],
    answer: 'El Niño–Southern Oscillation',
    explanation: 'ENSO describes the coupled ocean–atmosphere climate pattern in the tropical Pacific that drives El Niño and La Niña events.',
  },
  {
    prompt: 'During normal conditions in the Pacific, which direction do the SE trade winds push warm surface water?',
    options: ['East, toward South America and Chile', 'West, toward Australia and Indonesia', 'North, toward the Arctic and Greenland', 'South, toward Antarctica and the polar seas'],
    answer: 'West, toward Australia and Indonesia',
    explanation: 'Strong SE trade winds normally pile warm water in the western Pacific, allowing cold upwelling on the eastern side.',
  },
  {
    prompt: 'What happens to trade winds during an El Niño event?',
    options: ['They strengthen significantly', 'They weaken or reverse direction', 'They shift to the north', 'They disappear completely'],
    answer: 'They weaken or reverse direction',
    explanation: 'Weakened trade winds allow warm water to spread eastward, disrupting normal Pacific weather and causing global climate anomalies.',
  },
  {
    prompt: 'What is the typical effect of El Niño on southern Africa\'s rainfall?',
    options: [
      'Above-normal rainfall and flooding',
      'No change from normal',
      'Below-normal rainfall and drought conditions',
      'Increased snowfall',
    ],
    answer: 'Below-normal rainfall and drought conditions',
    explanation: 'El Niño disrupts the moisture-carrying winds to southern Africa, resulting in below-average rainfall and drought.',
  },
  {
    prompt: 'La Niña is associated with which conditions in southern Africa?',
    options: [
      'Severe drought and water shortages',
      'Above-normal rainfall and potential flooding',
      'Cooler than normal sea temperatures',
      'Reduced tropical cyclone activity',
    ],
    answer: 'Above-normal rainfall and potential flooding',
    explanation: 'La Niña strengthens moisture transport to southern Africa, leading to above-average rainfall and flood risk.',
  },
  {
    prompt: 'In which ocean does the ENSO cycle primarily take place?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
    answer: 'Pacific Ocean',
    explanation: 'ENSO is driven by interactions between the tropical Pacific Ocean and the overlying atmosphere.',
  },
  {
    prompt: 'How often do El Niño events typically occur?',
    options: ['Every year', 'Every 2–7 years', 'Every 20 years', 'Every 50 years'],
    answer: 'Every 2–7 years',
    explanation: 'El Niño events are irregular, recurring every 2–7 years, with varying intensity and duration.',
  },
  {
    prompt: 'Which country or region benefits from heavy rainfall during La Niña in the Pacific?',
    options: ['Peru and Ecuador', 'Australia and Indonesia', 'South Africa', 'Northern Europe'],
    answer: 'Australia and Indonesia',
    explanation: 'La Niña pushes more warm water toward the western Pacific, bringing above-normal rainfall to Australia and Indonesia.',
  },
  {
    prompt: 'A major El Niño event in 2015–2016 had which effect on southern Africa?',
    options: ['Record flooding in all of the provinces', 'The wettest rainy season on record', 'Severe drought, hitting food security for millions', 'No significant effect on southern Africa'],
    answer: 'Severe drought, hitting food security for millions',
    explanation: 'The 2015–2016 El Niño was one of the strongest on record and caused widespread drought across southern Africa.',
  },
  {
    prompt: 'How do ENSO forecasts benefit farmers in South Africa?',
    options: ['They predict the exact rainfall for each single farm', 'They allow early planning for drought or flood, helping food security', 'They remove the need for any kind of irrigation', 'They allow farmers to control the rainfall directly'],
    answer: 'They allow early planning for drought or flood, helping food security',
    explanation: 'Seasonal ENSO forecasts help farmers and water managers prepare months in advance for likely drought or flood conditions.',
  },
];

const ElNinoLaNinaT1 = () => (
  <CapsSubjectTopic
    title="El Niño and La Niña"
    subtitle="The ENSO cycle and its impact on Africa's climate"
    learnSteps={learnSteps}
    task="gr11-el-nino-la-nina-t1"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default ElNinoLaNinaT1;
