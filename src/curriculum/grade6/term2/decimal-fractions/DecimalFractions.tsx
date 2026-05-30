import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';


type Problem = {
    question: string;
    options: string[];
    answer: string;
    correctMessage: string;
    incorrectMessage: string;
};

const DecimalFractions = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [problem, setProblem] = useState<Problem>(() => createProblem());
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    function formatHundredths(value: number) {
        return (value / 100).toFixed(2).replace(/\.?0+$/, '');
    }

    function shuffle<T>(items: T[]) {
        return [...items].sort(() => Math.random() - 0.5);
    }

    function decimalOptions(answer: number) {
        const distractors = new Set<number>();
        distractors.add(answer);

        const offsets = [-30, -20, -10, -5, -1, 1, 5, 10, 20, 30];
        while (distractors.size < 4) {
            const offset = offsets[Math.floor(Math.random() * offsets.length)];
            const value = Math.max(0, Math.min(200, answer + offset));
            if (value !== answer) {
                distractors.add(value);
            }
        }

        return shuffle(Array.from(distractors).map(formatHundredths));
    }

    function fractionOptions(numerator: number, denominator: 10 | 100) {
        const correct = `${numerator}/${denominator}`;
        const distractors = new Set<string>();
        distractors.add(correct);

        while (distractors.size < 4) {
            const newDenominator = Math.random() < 0.5 ? 10 : 100;
            const maxNumerator = newDenominator === 10 ? 9 : 99;
            const newNumerator = Math.floor(Math.random() * maxNumerator) + 1;
            if (newNumerator * denominator !== numerator * newDenominator) {
                distractors.add(`${newNumerator}/${newDenominator}`);
            }
        }

        return shuffle(Array.from(distractors));
    }

    function createProblem(): Problem {
        const problemType = Math.floor(Math.random() * 4);

        if (problemType === 0) {
            const denominator = Math.random() < 0.5 ? 10 : 100;
            const numerator = Math.floor(Math.random() * (denominator === 10 ? 9 : 99)) + 1;
            const answerValue = denominator === 10 ? numerator * 10 : numerator;
            const answer = formatHundredths(answerValue);

            return {
                question: `What is ${numerator}/${denominator} as a decimal?`,
                options: decimalOptions(answerValue),
                answer,
                correctMessage: `Correct! ${numerator}/${denominator} is ${answer}.`,
                incorrectMessage: `Not quite. ${numerator}/${denominator} is ${answer}.`
            };
        }

        if (problemType === 1) {
            const denominator = Math.random() < 0.5 ? 10 : 100;
            let numerator = Math.floor(Math.random() * (denominator === 10 ? 9 : 99)) + 1;
            while (denominator === 100 && numerator % 10 === 0) {
                numerator = Math.floor(Math.random() * 99) + 1;
            }
            const answerValue = denominator === 10 ? numerator * 10 : numerator;
            const answer = `${numerator}/${denominator}`;
            const decimal = formatHundredths(answerValue);

            return {
                question: `Which fraction is equal to ${decimal}?`,
                options: fractionOptions(numerator, denominator),
                answer,
                correctMessage: `Correct! ${decimal} means ${answer}.`,
                incorrectMessage: `Not quite. ${decimal} means ${answer}.`
            };
        }

        if (problemType === 2) {
            const tenths = Math.floor(Math.random() * 9) + 1;
            let hundredths = Math.floor(Math.random() * 9) + 1;
            while (hundredths === tenths) {
                hundredths = Math.floor(Math.random() * 9) + 1;
            }
            let whole = Math.floor(Math.random() * 8) + 1;
            while (whole === tenths || whole === hundredths) {
                whole = Math.floor(Math.random() * 8) + 1;
            }
            const targetTenths = Math.random() < 0.5;
            const targetDigit = targetTenths ? tenths : hundredths;
            const answer = targetTenths ? 'tenths' : 'hundredths';
            const decimal = `${whole}.${tenths}${hundredths}`;

            return {
                question: `In ${decimal}, what is the place value of the ${targetDigit}?`,
                options: shuffle(['ones', 'tenths', 'hundredths', 'thousands']),
                answer,
                correctMessage: `Correct! The ${targetDigit} is in the ${answer} place.`,
                incorrectMessage: `Not quite. The ${targetDigit} is in the ${answer} place.`
            };
        }

        const isAddition = Math.random() < 0.5;
        const first = Math.floor(Math.random() * 90) + 10;
        const second = Math.floor(Math.random() * 90) + 10;
        const larger = Math.max(first, second);
        const smaller = Math.min(first, second);
        const answerValue = isAddition ? first + second : larger - smaller;
        const firstDisplay = formatHundredths(isAddition ? first : larger);
        const secondDisplay = formatHundredths(isAddition ? second : smaller);
        const symbol = isAddition ? '+' : '−';
        const answer = formatHundredths(answerValue);

        return {
            question: `Calculate ${firstDisplay} ${symbol} ${secondDisplay}.`,
            options: decimalOptions(answerValue),
            answer,
            correctMessage: `Correct! ${firstDisplay} ${symbol} ${secondDisplay} = ${answer}.`,
            incorrectMessage: `Not quite. ${firstDisplay} ${symbol} ${secondDisplay} = ${answer}.`
        };
    }

    const generateProblem = () => {
        setProblem(createProblem());
        setSelectedOption(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleCheck = (val: string) => {
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

    const LearnContent = () => {
        const steps = [
            {
                title: "Tenths and Hundredths",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Digits after the decimal comma or point show parts smaller than one whole.</p>
                        <div className="bg-slate-50 p-6 rounded-xl inline-block">
                            <div className="flex justify-center gap-1 text-4xl font-mono font-bold mb-2">
                                <span className="text-slate-400">2</span>
                                <span className="text-slate-500">.</span>
                                <span className="text-indigo-600">4</span>
                                <span className="text-emerald-600">7</span>
                            </div>
                            <p className="text-slate-500">The 4 is in the <strong>tenths</strong> place.</p>
                            <p className="text-slate-500">The 7 is in the <strong>hundredths</strong> place.</p>
                        </div>
                    </div>
                )
            },
            {
                title: "Fractions to Decimals",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Tenths and hundredths can be written as decimal fractions.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                            <div className="bg-indigo-50 p-5 rounded-xl">
                                <p className="text-3xl font-bold text-indigo-700">3/10 = 0.3</p>
                                <p className="text-sm text-slate-500 mt-2">Three tenths</p>
                            </div>
                            <div className="bg-emerald-50 p-5 rounded-xl">
                                <p className="text-3xl font-bold text-emerald-700">7/100 = 0.07</p>
                                <p className="text-sm text-slate-500 mt-2">Seven hundredths</p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: "Adding and Subtracting",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Line up the decimal points, then add or subtract each place value.</p>
                        <div className="bg-slate-50 p-6 rounded-xl inline-block font-mono text-3xl font-bold text-slate-800">
                            <div className="text-right">0.45</div>
                            <div className="text-right text-indigo-600">+ 0.30</div>
                            <div className="border-t-2 border-slate-300 mt-2 pt-2 text-right text-emerald-600">0.75</div>
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
                            <div key={i} className={cn("w-2 h-2 rounded-full transition-colors", i === learnStep ? "bg-indigo-600" : "bg-slate-200")} />
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
                        {learnStep === steps.length - 1 ? "Start Practice" : "Next"}
                    </Button>
                </div>
            </Card>
        );
    };

    return (
        <TopicContainer
            title="Decimal Fractions"
            subtitle="Tenths, hundredths, and converting fractions"
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
                        <p className="text-slate-500 text-lg">{problem.question}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {problem.options.map((opt, idx) => {
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
                                        {opt}
                                    </Button>
                                );
                            })}
                        </div>
                    </Card>

                    <div className="h-24">
                        <Feedback
                            isCorrect={isCorrect}
                            correctMessage={problem.correctMessage}
                            incorrectMessage={problem.incorrectMessage}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default DecimalFractions;
