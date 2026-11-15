import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import DotStrip, { STRIP_COLORS } from '../../../../components/diagrams/maths/DotStrip';
import { BarGraph } from '../../../../components/diagrams/maths/PatternDiagrams';
import { stats } from '../../../../components/diagrams/maths/mathsHelpers';

// One small data set for all four measures. Every number below is computed, not typed.
const STRIP_DATA = [1, 2, 2, 3, 5, 6, 9];
const STRIP = stats(STRIP_DATA);

const learnSteps: LearnStep[] = [
    {
        title: 'Mean and Mode',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Data is information. We can use numbers to describe a data set.</p>
                <div className="bg-slate-50 p-6 rounded-xl inline-block space-y-3">
                    <p className="font-mono text-3xl font-bold text-indigo-600">4, 6, 6, 9, 10</p>
                    <p className="text-slate-500"><strong>Mean:</strong> (4 + 6 + 6 + 9 + 10) ÷ 5 = <strong>7</strong></p>
                    <p className="text-slate-500"><strong>Mode:</strong> <strong>6</strong>, because it appears most often.</p>
                </div>
            </div>
        )
    },
    {
        title: 'Median and Range',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">For the median, first put the numbers in order.</p>
                <div className="bg-emerald-50 p-6 rounded-xl inline-block space-y-3">
                    <p className="font-mono text-3xl font-bold text-emerald-700">3, 5, <span className="text-indigo-600">8</span>, 8, 16</p>
                    <p className="text-slate-500"><strong>Median:</strong> the middle value is <strong>8</strong>.</p>
                    <p className="text-slate-500"><strong>Range:</strong> 16 − 3 = <strong>13</strong>.</p>
                    <p className="text-slate-500 text-sm">With an even number of values, the median is halfway between the two middle values.</p>
                </div>
            </div>
        )
    },
    {
        title: 'All four on one strip',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Each dot is one value: <strong>{STRIP.sorted.join(', ')}</strong>.</p>
                <DotStrip data={STRIP_DATA} />
                <div className="flex flex-wrap justify-center gap-2 text-sm font-bold">
                    <span className="rounded-lg px-3 py-1.5" style={{ background: STRIP_COLORS.mode + '33', color: '#92400e' }}>Mode = {STRIP.modes.join(' and ')}</span>
                    <span className="rounded-lg px-3 py-1.5" style={{ background: STRIP_COLORS.median + '33', color: '#065f46' }}>Median = {STRIP.median}</span>
                    <span className="rounded-lg px-3 py-1.5" style={{ background: STRIP_COLORS.mean + '33', color: '#9f1239' }}>Mean = {STRIP.mean}</span>
                    <span className="rounded-lg px-3 py-1.5" style={{ background: STRIP_COLORS.range + '33', color: '#075985' }}>Range = {STRIP.range}</span>
                </div>
                <p className="text-slate-500 text-sm">Mode: the tallest stack. Median: the middle dot. Mean: where the strip would balance. Range: the span from the smallest to the largest ({STRIP.max} − {STRIP.min}).</p>
            </div>
        )
    },
    {
        title: 'Reading Graphs',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Bar graphs help us compare values quickly. The height of each bar shows the value for that group.</p>
                <BarGraph title="Fruit in the basket" yLabel="Number of fruits" step={2} items={[{ label: 'Apples', value: 8 }, { label: 'Bananas', value: 5 }, { label: 'Oranges', value: 7 }]} />
                <p className="text-slate-500 text-sm">Apples have the highest value: 8.</p>
            </div>
        )
    }
];

export const bank: CapsItem[] = [
    {
        prompt: 'What is the mode of 3, 5, 5, 7, 9?',
        options: ['3', '5', '7', '9'],
        answer: '5',
        explanation: '5 appears twice, more than any other value, so it is the mode.'
    },
    {
        prompt: 'What is the mean of 2, 4, 6, 8?',
        options: ['4', '5', '6', '8'],
        answer: '5',
        explanation: '(2 + 4 + 6 + 8) ÷ 4 = 20 ÷ 4 = 5.'
    },
    {
        prompt: 'What is the median of 1, 3, 5, 7, 9?',
        options: ['3', '5', '7', '9'],
        answer: '5',
        explanation: 'The data is already in order. The middle value (3rd of 5) is 5.'
    },
    {
        prompt: 'What is the range of 3, 7, 9, 2, 5?',
        options: ['5', '6', '7', '9'],
        answer: '7',
        explanation: 'Range = largest − smallest = 9 − 2 = 7.'
    },
    {
        prompt: 'In a bar graph, what does the height of each bar show?',
        options: ['The name of the category shown', 'The value or frequency for that category', 'The total of all of the data', 'The mode of the data set'],
        answer: 'The value or frequency for that category',
        explanation: 'The height (or length) of a bar represents the value or frequency for that category.'
    },
    {
        prompt: 'What is the mean of 10, 20, 30?',
        options: ['15', '20', '25', '30'],
        answer: '20',
        explanation: '(10 + 20 + 30) ÷ 3 = 60 ÷ 3 = 20.'
    },
    {
        prompt: 'A data set is 4, 6, 6, 8, 6. What is the mode?',
        options: ['4', '6', '8', '30'],
        answer: '6',
        explanation: '6 appears three times, more than any other value, so it is the mode.'
    }
];

const DataHandling = () => (
    <CapsSubjectTopic
        title="Data Handling"
        subtitle="Mean, mode, median and reading graphs"
        learnSteps={learnSteps}
        task="gr6-data-handling-t4"
        bank={bank}
        apiPath="/api/caps/grade6"
    />
);

export default DataHandling;
