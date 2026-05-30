import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';


type Statistic = 'mean' | 'mode' | 'median' | 'range';

type ProblemStats = {
    mean: number;
    mode: number;
    median: number;
    range: number;
};

const DataHandling = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [dataSet, setDataSet] = useState<number[]>([]);
    const [questionType, setQuestionType] = useState<Statistic>('mean');
    const [options, setOptions] = useState<number[]>([]);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const computeStats = (values: number[]): ProblemStats => {
        const sorted = [...values].sort((a, b) => a - b);
        const sum = values.reduce((total, value) => total + value, 0);
        const counts = new Map<number, number>();

        values.forEach(value => {
            counts.set(value, (counts.get(value) ?? 0) + 1);
        });

        let modeValue = values[0];
        let highestCount = 0;
        counts.forEach((count, value) => {
            if (count > highestCount) {
                highestCount = count;
                modeValue = value;
            }
        });

        const middleIndex = Math.floor(sorted.length / 2);
        const medianValue = sorted.length % 2 === 1
            ? sorted[middleIndex]
            : (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;

        return {
            mean: sum / values.length,
            mode: modeValue,
            median: medianValue,
            range: sorted[sorted.length - 1] - sorted[0]
        };
    };

    const formatAnswer = (value: number) => {
        return Number.isInteger(value) ? value.toString() : value.toFixed(1);
    };

    const getQuestionText = (statistic: Statistic) => {
        const labels: Record<Statistic, string> = {
            mean: 'mean (average)',
            mode: 'mode',
            median: 'median',
            range: 'range'
        };

        return `What is the ${labels[statistic]} of this data set?`;
    };

    const getHintText = (statistic: Statistic) => {
        const hints: Record<Statistic, string> = {
            mean: 'Add all the values, then divide by how many values there are.',
            mode: 'Find the value that appears most often.',
            median: 'Order the data first, then find the middle value.',
            range: 'Subtract the smallest value from the largest value.'
        };

        return hints[statistic];
    };

    const generateDataSet = () => {
        while (true) {
            const modeValue = Math.floor(Math.random() * 13) + 4;
            const values = new Set<number>([modeValue]);

            while (values.size < 4) {
                const nextValue = Math.floor(Math.random() * 19) + 2;
                if (nextValue !== modeValue) {
                    values.add(nextValue);
                }
            }

            const uniqueValues = Array.from(values);
            const newDataSet = [modeValue, modeValue, ...uniqueValues.slice(1)];
            const stats = computeStats(newDataSet);

            if (Number.isInteger(stats.mean)) {
                return newDataSet.sort(() => Math.random() - 0.5);
            }
        }
    };

    const generateOptions = (correctValue: number, stats: ProblemStats) => {
        const choices = new Set<number>([correctValue]);
        const statValues = Object.values(stats);

        statValues.forEach(value => {
            if (choices.size < 4) {
                choices.add(value);
            }
        });

        while (choices.size < 4) {
            const offset = Math.floor(Math.random() * 9) - 4;
            const distractor = correctValue + (offset === 0 ? 5 : offset);

            if (distractor >= 0) {
                choices.add(distractor);
            }
        }

        return Array.from(choices).sort((a, b) => a - b);
    };

    const generateProblem = () => {
        const newDataSet = generateDataSet();
        const stats = computeStats(newDataSet);
        const statisticTypes: Statistic[] = ['mean', 'mode', 'median', 'range'];
        const newQuestionType = statisticTypes[Math.floor(Math.random() * statisticTypes.length)];
        const correctValue = stats[newQuestionType];

        setDataSet(newDataSet);
        setQuestionType(newQuestionType);
        setOptions(generateOptions(correctValue, stats));
        setSelectedOption(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleCheck = (val: number) => {
        if (selectedOption !== null) return;

        setSelectedOption(val);

        const stats = computeStats(dataSet);
        const correctValue = stats[questionType];

        if (val === correctValue) {
            setIsCorrect(true);
            setStreak(s => s + 1);
            triggerConfetti();
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    const stats = dataSet.length > 0 ? computeStats(dataSet) : null;
    const correctValue = stats ? stats[questionType] : 0;

    const LearnContent = () => {
        const steps = [
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
                        </div>
                    </div>
                )
            },
            {
                title: 'Reading Graphs',
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Bar graphs and pictographs help us compare values quickly.</p>
                        <div className="bg-slate-50 p-6 rounded-xl max-w-md mx-auto space-y-4">
                            {[
                                { label: 'Apples', value: 8, colour: 'bg-red-400' },
                                { label: 'Bananas', value: 5, colour: 'bg-amber-400' },
                                { label: 'Oranges', value: 7, colour: 'bg-orange-400' }
                            ].map(item => (
                                <div key={item.label} className="grid grid-cols-[5rem_1fr_2rem] items-center gap-3 text-sm">
                                    <span className="font-semibold text-slate-600 text-right">{item.label}</span>
                                    <div className="h-6 bg-white rounded-full overflow-hidden">
                                        <div className={cn('h-full rounded-full', item.colour)} style={{ width: `${item.value * 10}%` }} />
                                    </div>
                                    <span className="font-bold text-slate-700">{item.value}</span>
                                </div>
                            ))}
                            <p className="text-slate-500 text-sm">Apples have the highest value: 8.</p>
                        </div>
                    </div>
                )
            }
        ];

        return (
            <Card className="p-8 space-y-8">
                <h2 className="text-2xl font-bold text-slate-800">{steps[learnStep].title}</h2>
                {steps[learnStep].content}

                <div className="flex justify-between pt-8 border-t border-slate-100">
                    <Button
                        variant="secondary"
                        disabled={learnStep === 0}
                        onClick={() => setLearnStep(prev => prev - 1)}
                    >
                        Previous
                    </Button>
                    <div className="flex gap-1 items-center">
                        {steps.map((_, i) => (
                            <div key={i} className={cn('w-2 h-2 rounded-full transition-colors', i === learnStep ? 'bg-indigo-600' : 'bg-slate-200')} />
                        ))}
                    </div>
                    <Button
                        onClick={() => {
                            if (learnStep < steps.length - 1) {
                                setLearnStep(prev => prev + 1);
                            } else {
                                setMode('practice');
                            }
                        }}
                    >
                        {learnStep === steps.length - 1 ? 'Start Practice' : 'Next'}
                    </Button>
                </div>
            </Card>
        );
    };

    return (
        <TopicContainer
            title="Data Handling"
            subtitle="Mean, mode, median and reading graphs"
            onModeChange={setMode}
        >
            {mode === 'learn' ? (
                <LearnContent />
            ) : (
                <div className="space-y-8">
                    <div className="flex justify-end">
                        <Streak count={streak} />
                    </div>

                    <Card className="p-8 text-center space-y-8">
                        <div className="space-y-3">
                            <p className="text-slate-500 text-lg">{getQuestionText(questionType)}</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {dataSet.map((value, idx) => (
                                    <span key={`${value}-${idx}`} className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-700 font-bold text-2xl flex items-center justify-center">
                                        {value}
                                    </span>
                                ))}
                            </div>
                            <p className="text-slate-400 text-sm">{getHintText(questionType)}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {options.map((opt, idx) => {
                                let variant: 'default' | 'outline' | 'success' | 'danger' = 'outline';
                                if (selectedOption !== null) {
                                    if (opt === correctValue) variant = 'success';
                                    else if (opt === selectedOption) variant = 'danger';
                                }

                                return (
                                    <Button
                                        key={idx}
                                        onClick={() => handleCheck(opt)}
                                        disabled={selectedOption !== null}
                                        variant={variant}
                                        className="text-lg md:text-xl py-6"
                                    >
                                        {formatAnswer(opt)}
                                    </Button>
                                );
                            })}
                        </div>
                    </Card>

                    <div className="h-24">
                        <Feedback
                            isCorrect={isCorrect}
                            correctMessage={`Correct! The ${questionType} is ${formatAnswer(correctValue)}.`}
                            incorrectMessage={`Not quite. The ${questionType} is ${formatAnswer(correctValue)}.`}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default DataHandling;
