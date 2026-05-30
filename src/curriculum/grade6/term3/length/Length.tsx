import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';


type LengthUnit = 'mm' | 'cm' | 'm' | 'km';

type Problem = {
    question: string;
    answer: number;
    fromUnit: LengthUnit;
    toUnit: LengthUnit;
};

type ConversionTemplate = {
    fromUnit: LengthUnit;
    toUnit: LengthUnit;
    min: number;
    max: number;
} & ({ multiplier: number } | { divisor: number });

const Length = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [problem, setProblem] = useState<Problem>({
        question: 'How many cm in 1 m?',
        answer: 100,
        fromUnit: 'm',
        toUnit: 'cm'
    });
    const [options, setOptions] = useState<number[]>([]);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const shuffleOptions = (values: number[]) => {
        return values.sort(() => Math.random() - 0.5);
    };

    const generateProblem = () => {
        const templates: ConversionTemplate[] = [
            { fromUnit: 'm', toUnit: 'cm', multiplier: 100, min: 1, max: 9 },
            { fromUnit: 'cm', toUnit: 'mm', multiplier: 10, min: 2, max: 30 },
            { fromUnit: 'km', toUnit: 'm', multiplier: 1000, min: 1, max: 6 },
            { fromUnit: 'cm', toUnit: 'm', divisor: 100, min: 1, max: 9 },
            { fromUnit: 'mm', toUnit: 'cm', divisor: 10, min: 2, max: 30 },
            { fromUnit: 'm', toUnit: 'km', divisor: 1000, min: 1, max: 6 }
        ];

        const template = templates[Math.floor(Math.random() * templates.length)];
        const base = Math.floor(Math.random() * (template.max - template.min + 1)) + template.min;
        const amount = 'multiplier' in template ? base : base * template.divisor;
        const answer = 'multiplier' in template ? amount * template.multiplier : base;
        const newProblem = {
            question: `How many ${template.toUnit} in ${amount} ${template.fromUnit}?`,
            answer,
            fromUnit: template.fromUnit,
            toUnit: template.toUnit
        };

        const distractors = new Set<number>();
        distractors.add(answer);

        const commonMistakes = [
            answer * 10,
            Math.max(1, Math.floor(answer / 10)),
            answer + base,
            Math.max(1, answer - base),
            amount
        ];

        commonMistakes.forEach(value => {
            if (value !== answer && value > 0) {
                distractors.add(value);
            }
        });

        while (distractors.size < 4) {
            const offset = Math.floor(Math.random() * 9) + 1;
            distractors.add(answer + offset * base);
        }

        setProblem(newProblem);
        setOptions(shuffleOptions(Array.from(distractors).slice(0, 4)));
        setSelectedOption(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleCheck = (val: number) => {
        if (selectedOption !== null) return;

        setSelectedOption(val);

        if (val === problem.answer) {
            setIsCorrect(true);
            setStreak(s => s + 1);
            triggerConfetti();
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    const formatAnswer = (value: number) => {
        return `${value.toLocaleString('en-ZA')} ${problem.toUnit}`;
    };

    const LearnContent = () => {
        const steps = [
            {
                title: 'Meet the Units',
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Length tells us how long, wide, tall or far something is.</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div className="bg-indigo-50 p-4 rounded-xl">
                                <div className="text-2xl font-bold text-indigo-700">mm</div>
                                <p className="text-sm text-slate-500">tiny lengths</p>
                            </div>
                            <div className="bg-emerald-50 p-4 rounded-xl">
                                <div className="text-2xl font-bold text-emerald-700">cm</div>
                                <p className="text-sm text-slate-500">rulers and books</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-xl">
                                <div className="text-2xl font-bold text-amber-700">m</div>
                                <p className="text-sm text-slate-500">rooms and people</p>
                            </div>
                            <div className="bg-rose-50 p-4 rounded-xl">
                                <div className="text-2xl font-bold text-rose-700">km</div>
                                <p className="text-sm text-slate-500">long distances</p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: 'Conversion Facts',
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Use these facts to change from one unit to another.</p>
                        <div className="bg-slate-50 p-6 rounded-xl inline-block space-y-3 text-left">
                            <p className="text-slate-700"><strong>1 cm = 10 mm</strong></p>
                            <p className="text-slate-700"><strong>1 m = 100 cm</strong></p>
                            <p className="text-slate-700"><strong>1 km = 1 000 m</strong></p>
                        </div>
                        <p className="text-slate-500">To change to a smaller unit, multiply. To change to a larger unit, divide.</p>
                    </div>
                )
            },
            {
                title: 'Choose Sensible Units',
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Good measuring starts by choosing a unit that makes sense.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
                            <div className="bg-white border border-slate-200 p-4 rounded-xl">
                                <p className="font-bold text-slate-800">Pencil tip</p>
                                <p className="text-indigo-600">millimetres</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-4 rounded-xl">
                                <p className="font-bold text-slate-800">Classroom door</p>
                                <p className="text-indigo-600">metres</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-4 rounded-xl">
                                <p className="font-bold text-slate-800">Trip to town</p>
                                <p className="text-indigo-600">kilometres</p>
                            </div>
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
            title="Length"
            subtitle="Units, conversions and measuring"
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
                        <p className="text-slate-500 text-lg">Convert the length.</p>

                        <div className="bg-indigo-50 rounded-2xl p-6 inline-block">
                            <p className="text-2xl md:text-4xl font-bold text-slate-800">{problem.question}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {options.map((opt, idx) => {
                                let variant: 'default' | 'outline' | 'success' | 'danger' = 'outline';
                                if (selectedOption !== null) {
                                    if (opt === problem.answer) variant = 'success';
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
                            correctMessage={`Correct! ${problem.question} The answer is ${formatAnswer(problem.answer)}.`}
                            incorrectMessage={`Not quite. Remember: 1 ${problem.fromUnit} can be changed into ${problem.toUnit} using the conversion facts.`}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default Length;
