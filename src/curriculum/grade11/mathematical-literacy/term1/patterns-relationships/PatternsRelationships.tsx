import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { MLItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/ml/term1/patterns-relationships/diagram.webp", alt: "Patterns, Relationships and Representations" }, title: 'What are patterns and relationships?', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">A <strong>pattern</strong> is a rule or sequence that repeats or changes in a predictable way. A <strong>relationship</strong> describes how one quantity depends on or changes with another.</p><div className="bg-indigo-50 p-6 rounded-xl inline-block text-left space-y-3"><p className="font-bold text-indigo-800 mb-2">Example:</p><p className="text-slate-700">A data bundle costs R5 per GB. The cost <em>depends on</em> how many GB you buy — that is a relationship.</p><Formula block>{String.raw`\text{Cost} = 5 \times \text{GB}`}</Formula><div className="mt-3 overflow-x-auto"><table className="text-sm border-collapse w-full"><thead><tr className="bg-indigo-100"><th className="border border-indigo-200 px-3 py-1">GB</th><th className="border border-indigo-200 px-3 py-1">1</th><th className="border border-indigo-200 px-3 py-1">2</th><th className="border border-indigo-200 px-3 py-1">3</th><th className="border border-indigo-200 px-3 py-1">4</th></tr></thead><tbody><tr><td className="border border-indigo-200 px-3 py-1 font-medium">Cost (R)</td><td className="border border-indigo-200 px-3 py-1">5</td><td className="border border-indigo-200 px-3 py-1">10</td><td className="border border-indigo-200 px-3 py-1">15</td><td className="border border-indigo-200 px-3 py-1">20</td></tr></tbody></table></div></div></div>) },
  { title: 'Three representations: tables, graphs and formulae', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">The same relationship can be shown in three ways:</p><div className="grid gap-3 md:grid-cols-3 text-left"><div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Table</strong><p className="text-slate-600 text-sm mt-1">Shows specific values in rows and columns. Easy to read exact amounts.</p></div><div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Graph</strong><p className="text-slate-600 text-sm mt-1">Shows the trend visually. Easy to see whether values increase, decrease or stay constant.</p></div><div className="rounded-xl bg-yellow-50 p-4 space-y-2"><strong className="text-yellow-700">Formula</strong><p className="text-slate-600 text-sm mt-1">A rule written in symbols lets you calculate any value quickly.</p><Formula block>{String.raw`y = 5x`}</Formula></div></div><p className="text-sm text-slate-500">In ML you must be able to move between all three representations.</p></div>) },
  { title: 'Describing and comparing trends', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">A <strong>trend</strong> tells you the general direction of change in a graph or table.</p><div className="grid gap-3 md:grid-cols-3 text-left"><div className="rounded-xl bg-red-50 p-4"><strong className="text-red-700">Increasing</strong><p className="text-slate-600 text-sm">Values go up as the input increases. E.g. cost rises with more items.</p></div><div className="rounded-xl bg-slate-100 p-4"><strong className="text-slate-700">Decreasing</strong><p className="text-slate-600 text-sm">Values fall as the input increases. E.g. battery life decreases with use.</p></div><div className="rounded-xl bg-purple-50 p-4"><strong className="text-purple-700">Constant</strong><p className="text-slate-600 text-sm">Values stay the same regardless of input. E.g. a fixed monthly subscription fee.</p></div></div><div className="rounded-xl border border-slate-200 bg-white p-4 text-left"><p className="text-sm text-slate-500 mb-3">A linear pattern has a constant difference, while a quadratic pattern grows more quickly as the input increases.</p><DataChart type="line" xKey="term" data={[{ term: 1, linear: 3, quadratic: 1 },{ term: 2, linear: 6, quadratic: 4 },{ term: 3, linear: 9, quadratic: 9 },{ term: 4, linear: 12, quadratic: 16 },{ term: 5, linear: 15, quadratic: 25 }]} series={[{ key: 'linear', label: 'Linear pattern', color: '#6366f1' },{ key: 'quadratic', label: 'Quadratic pattern', color: '#f59e0b' }]} yLabel="Output" height={220} /></div></div>) },
  { title: 'Selecting the most useful representation', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Different representations suit different purposes:</p><div className="bg-slate-50 p-6 rounded-xl text-left space-y-3"><p className="text-slate-700">✅ Use a <strong>table</strong> when you need exact values at specific inputs.</p><p className="text-slate-700">✅ Use a <strong>graph</strong> when you want to see the overall trend or compare two options visually.</p><p className="text-slate-700">✅ Use a <strong>formula</strong> when you need to calculate for many different inputs quickly.</p><Formula block>{String.raw`y = 50 + 3n`}</Formula></div><p className="text-sm text-slate-500">In examinations you may be given one representation and asked to convert it or answer questions using it.</p></div>) },
];

const bank: MLItem[] = [
  {
    prompt: 'A table shows: Input 1 → 3, Input 2 → 6, Input 3 → 9. Which formula matches this pattern?',
    options: ['Output = Input + 2', 'Output = 3 × Input', 'Output = Input²', 'Output = Input + 3'],
    answer: 'Output = 3 × Input',
    explanation: 'Each output is exactly 3 times the input: 1×3=3, 2×3=6, 3×3=9.',
  },
  {
    prompt: 'A graph of electricity usage rises steeply over time. This trend is best described as:',
    options: ['Constant', 'Decreasing', 'Increasing', 'Random'],
    answer: 'Increasing',
    explanation: 'A steep upward slope on a graph represents an increasing trend.',
  },
  {
    prompt: 'Which representation is BEST for quickly calculating the cost for any number of items?',
    options: ['A bar graph', 'A pie chart', 'A formula', 'A frequency table'],
    answer: 'A formula',
    explanation: 'A formula allows you to substitute any input value and calculate the output directly.',
  },
  {
    prompt: 'Two cell phone packages are plotted on the same graph. They appear to cross at 100 minutes. What does this crossing point mean?',
    options: ['Both packages are free at that point', 'Both packages cost the same at 100 minutes', 'Package A is always cheaper', 'The graph has an error'],
    answer: 'Both packages cost the same at 100 minutes',
    explanation: 'The intersection point shows where the two options have equal cost — it is the decision point.',
  },
  {
    prompt: 'The formula for a taxi trip is: Cost = R8 + R2 × km. What is the cost for a 5 km trip?',
    options: ['R10', 'R16', 'R18', 'R13'],
    answer: 'R18',
    explanation: 'Cost = R8 + R2 × 5 = R8 + R10 = R18.',
  },
  {
    prompt: 'A table shows petrol costs: 10 L → R195, 20 L → R390, 30 L → R585. What is the cost per litre?',
    options: ['R15,50', 'R19,50', 'R20,00', 'R18,00'],
    answer: 'R19,50',
    explanation: 'R195 ÷ 10 = R19,50 per litre. The relationship is directly proportional.',
  },
  {
    prompt: 'A line graph of a bank balance shows a flat (horizontal) line for 3 months. What does this indicate?',
    options: ['The balance is increasing rapidly', 'The balance did not change', 'The bank account was closed', 'The data is missing'],
    answer: 'The balance did not change',
    explanation: 'A horizontal (flat) line on a graph shows a constant value — no change over time.',
  },
  {
    prompt: 'Which representation would make it EASIEST to see whether sales increased over 12 months?',
    options: ['A formula', 'A table of 12 values', 'A line graph', 'A list of percentages'],
    answer: 'A line graph',
    explanation: 'A line graph displays trends visually, making it easy to see the direction of change over time.',
  },
  {
    prompt: 'Using the formula Cost = 50 + 3n (where n = number of people), what is the cost for 20 people?',
    options: ['R60', 'R110', 'R100', 'R150'],
    answer: 'R110',
    explanation: 'Cost = 50 + 3 × 20 = 50 + 60 = R110.',
  },
  {
    prompt: 'A table shows decreasing values as the input increases. What kind of trend is this?',
    options: ['Constant', 'Increasing', 'Decreasing', 'Exponential'],
    answer: 'Decreasing',
    explanation: 'When output values get smaller as input increases, the relationship shows a decreasing trend.',
  },
];

const PatternsRelationships = () => (
  <CapsSubjectTopic
    title="Patterns, Relationships and Representations"
    subtitle="Interpreting tables, graphs and formulae in real-life contexts"
    learnSteps={learnSteps}
    task="gr11-ml-patterns-t1"
    bank={bank}
    apiPath="/api/caps/ml"
  />
);

export default PatternsRelationships;
