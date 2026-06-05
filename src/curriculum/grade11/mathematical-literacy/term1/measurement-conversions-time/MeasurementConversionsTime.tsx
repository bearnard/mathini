import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { MLItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';
import MeasurementConverter from '@/components/subjects/MeasurementConverter';

const learnSteps: LearnStep[] = [
  { title: 'Metric unit conversions', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">The metric system uses a base-10 structure. Knowing the conversion factors allows you to move between units.</p><div className="grid gap-3 md:grid-cols-3 text-left"><div className="rounded-xl bg-blue-50 p-4 space-y-2"><strong className="text-blue-700">Length</strong><Formula block>{String.raw`10\text{ mm} = 1\text{ cm}`}</Formula><Formula block>{String.raw`100\text{ cm} = 1\text{ m}`}</Formula><Formula block>{String.raw`1000\text{ m} = 1\text{ km}`}</Formula></div><div className="rounded-xl bg-green-50 p-4 space-y-2"><strong className="text-green-700">Mass</strong><Formula block>{String.raw`1000\text{ mg} = 1\text{ g}`}</Formula><Formula block>{String.raw`1000\text{ g} = 1\text{ kg}`}</Formula><Formula block>{String.raw`1000\text{ kg} = 1\text{ t}`}</Formula></div><div className="rounded-xl bg-yellow-50 p-4 space-y-2"><strong className="text-yellow-700">Capacity</strong><Formula block>{String.raw`1000\text{ ml} = 1\ell`}</Formula><Formula block>{String.raw`1000\ell = 1\text{k}\ell`}</Formula></div></div><p className="text-sm text-slate-500">To convert to a smaller unit, <strong>multiply</strong>. To a larger unit, <strong>divide</strong>.</p></div>) },
  {
    title: 'Unit Converter',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">
          Convert between related units to check your calculations and build confidence with practical measurement problems.
        </p>
        <MeasurementConverter defaultTab="length" />
      </div>
    ),
  },
  { title: 'Compound conversions and speed', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">A <strong>compound conversion</strong> combines more than one unit, such as km/h to m/s.</p><div className="bg-indigo-50 p-6 rounded-xl text-left space-y-3"><p className="font-bold text-indigo-800">Converting km/h → m/s:</p><Formula block>{String.raw`v_{m/s} = \frac{v_{km/h}}{3.6}`}</Formula><p className="text-slate-700">Multiply by 1 000 to convert km to m, then divide by 3 600 to convert hours to seconds.</p><Formula block>{String.raw`90 \div 3.6 = 25\text{ m/s}`}</Formula></div></div>) },
  { title: 'Time: 12-hour and 24-hour clocks', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">South African timetables often use the <strong>24-hour clock</strong>. You must be able to convert and calculate elapsed time.</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-slate-100 p-4 space-y-2"><strong className="text-slate-700">12-hour → 24-hour</strong><p className="text-slate-600 text-sm">Add 12 to any PM time after noon. Midnight = 00:00 and noon = 12:00.</p><Formula block>{String.raw`3{:}45\text{ PM} = 15{:}45`}</Formula></div><div className="rounded-xl bg-slate-100 p-4 space-y-2"><strong className="text-slate-700">Elapsed time</strong><p className="text-slate-600 text-sm">Subtract start time from end time. Borrow 60 min if needed.</p><Formula block>{String.raw`14{:}20 - 09{:}50 = 4\text{ h }30\text{ min}`}</Formula></div></div></div>) },
  { title: 'Solving multi-step measurement problems', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Many real-life problems require <strong>more than one step</strong>. Always identify the units needed in the final answer first.</p><div className="bg-green-50 p-6 rounded-xl text-left space-y-3"><p className="font-bold text-green-800">Strategy:</p><p className="text-slate-700">1. Identify what you need to find and its unit.</p><p className="text-slate-700">2. Write down the given information with units.</p><p className="text-slate-700">3. Convert all values to the same unit before calculating.</p><p className="text-slate-700">4. Check that your answer is reasonable.</p><Formula block>{String.raw`\text{Answer} = \text{calculation after converting to one unit}`}</Formula></div></div>) },
];

const bank: MLItem[] = [
  {
    prompt: 'Convert 3,5 km to metres.',
    options: ['350 m', '3 500 m', '35 m', '0,0035 m'],
    answer: '3 500 m',
    explanation: '1 km = 1 000 m, so 3,5 × 1 000 = 3 500 m.',
  },
  {
    prompt: 'A bag of flour has a mass of 2,4 kg. Express this in grams.',
    options: ['240 g', '24 g', '2 400 g', '0,24 g'],
    answer: '2 400 g',
    explanation: '1 kg = 1 000 g, so 2,4 × 1 000 = 2 400 g.',
  },
  {
    prompt: 'A juice bottle holds 750 ml. How many litres is this?',
    options: ['7,5 ℓ', '0,75 ℓ', '75 ℓ', '0,075 ℓ'],
    answer: '0,75 ℓ',
    explanation: '1 ℓ = 1 000 ml, so 750 ÷ 1 000 = 0,75 ℓ.',
  },
  {
    prompt: 'A car travels at 120 km/h. What is this speed in m/s?',
    options: ['33,3 m/s', '43,2 m/s', '12 m/s', '0,033 m/s'],
    answer: '33,3 m/s',
    explanation: '120 km/h ÷ 3,6 = 33,33... m/s ≈ 33,3 m/s.',
  },
  {
    prompt: 'A bus departs at 07:45 and arrives at 11:10. How long is the journey?',
    options: ['3 h 25 min', '3 h 35 min', '4 h 25 min', '2 h 35 min'],
    answer: '3 h 25 min',
    explanation: '11:10 − 07:45 = 3 h 25 min (borrow 60 min: 10+60=70, 70−45=25 min; then 11−1−7=3 h).',
  },
  {
    prompt: 'Convert 3:30 PM to 24-hour clock notation.',
    options: ['3:30', '13:30', '15:30', '03:30'],
    answer: '15:30',
    explanation: 'PM times after noon: add 12 to the hour. 3 + 12 = 15, so 3:30 PM = 15:30.',
  },
  {
    prompt: 'A recipe requires 1,5 kg of sugar. How many 250 g packets are needed?',
    options: ['4 packets', '5 packets', '6 packets', '3 packets'],
    answer: '6 packets',
    explanation: '1,5 kg = 1 500 g. 1 500 ÷ 250 = 6 packets.',
  },
  {
    prompt: 'A swimming pool holds 45 kℓ of water. How many litres is this?',
    options: ['45 ℓ', '4 500 ℓ', '45 000 ℓ', '450 ℓ'],
    answer: '45 000 ℓ',
    explanation: '1 kℓ = 1 000 ℓ, so 45 × 1 000 = 45 000 ℓ.',
  },
  {
    prompt: 'A train leaves Cape Town at 06:20 and the journey takes 2 hours 45 minutes. When does it arrive?',
    options: ['08:45', '09:05', '09:15', '08:55'],
    answer: '09:05',
    explanation: '06:20 + 2 h 45 min = 08:65 = 09:05 (60 min = 1 h, so 65 min = 1 h 5 min).',
  },
  {
    prompt: 'Which conversion is CORRECT?',
    options: ['5 cm = 500 mm', '5 cm = 0,5 m', '5 cm = 0,05 m', '5 cm = 50 m'],
    answer: '5 cm = 0,05 m',
    explanation: '100 cm = 1 m, so 5 cm = 5 ÷ 100 = 0,05 m.',
  },
];

const MeasurementConversionsTime = () => (
  <CapsSubjectTopic
    title="Measurement: Conversions and Time"
    subtitle="Unit conversions, elapsed time and multi-step measurement problems"
    learnSteps={learnSteps}
    task="gr11-ml-conversions-time-t1"
    bank={bank}
    apiPath="/api/caps/ml"
  />
);

export default MeasurementConversionsTime;
