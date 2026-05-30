import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';


type Fraction = {
    numerator: number;
    denominator: number;
};

type Problem = {
    prompt: string;
    expression?: string;
    displayFraction?: Fraction;
    answer: Fraction;
    options: Fraction[];
    correctMessage: string;
    incorrectMessage: string;
};

const gcd = (a: number, b: number): number => {
    let x = Math.abs(a);
    let y = Math.abs(b);

    while (y !== 0) {
        const remainder = x % y;
        x = y;
        y = remainder;
    }

    return x || 1;
};

const simplifyFraction = (fraction: Fraction): Fraction => {
    const divisor = gcd(fraction.numerator, fraction.denominator);
    return {
        numerator: fraction.numerator / divisor,
        denominator: fraction.denominator / divisor,
    };
};

const fractionKey = (fraction: Fraction): string => `${fraction.numerator}/${fraction.denominator}`;

const fractionsEqual = (first: Fraction, second: Fraction): boolean => {
    const a = simplifyFraction(first);
    const b = simplifyFraction(second);
    return a.numerator === b.numerator && a.denominator === b.denominator;
};

const shuffleOptions = (values: Fraction[]): Fraction[] => {
    return [...values].sort(() => Math.random() - 0.5);
};

const FractionDisplay = ({ fraction, className = '' }: { fraction: Fraction; className?: string }) => (
    <span className={cn('inline-flex flex-col items-center justify-center align-middle font-mono font-bold leading-none', className)}>
        <span className="px-2 pb-1">{fraction.numerator}</span>
        <span className="w-full border-t-2 border-current" />
        <span className="px-2 pt-1">{fraction.denominator}</span>
    </span>
);

const CommonFractions = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [problem, setProblem] = useState<Problem | null>(null);
    const [selectedOption, setSelectedOption] = useState<Fraction | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const buildOptions = (answer: Fraction, candidates: Fraction[]) => {
        const options = new Map<string, Fraction>();
        options.set(fractionKey(answer), answer);

        for (const candidate of candidates) {
            if (options.size >= 4) break;
            const simplified = simplifyFraction(candidate);
            if (!fractionsEqual(simplified, answer)) {
                options.set(fractionKey(simplified), simplified);
            }
        }

        let denominator = Math.max(2, answer.denominator);
        while (options.size < 4) {
            const numerator = Math.max(1, answer.numerator + options.size - 1);
            const candidate = simplifyFraction({ numerator, denominator });
            if (!fractionsEqual(candidate, answer)) {
                options.set(fractionKey(candidate), candidate);
            }
            denominator += 1;
        }

        return shuffleOptions(Array.from(options.values()));
    };

    const generateEquivalentProblem = (): Problem => {
        const denominator = Math.floor(Math.random() * 6) + 4;
        const numerator = Math.floor(Math.random() * (denominator - 2)) + 1;
        const base = simplifyFraction({ numerator, denominator });
        const multiplier = Math.floor(Math.random() * 3) + 2;
        const answer = {
            numerator: base.numerator * multiplier,
            denominator: base.denominator * multiplier,
        };
        const candidates = [
            { numerator: answer.numerator + 1, denominator: answer.denominator },
            { numerator: answer.numerator, denominator: answer.denominator + 1 },
            { numerator: base.numerator + multiplier, denominator: base.denominator * multiplier },
            { numerator: Math.max(1, answer.numerator - 1), denominator: answer.denominator },
            { numerator: base.numerator, denominator: base.denominator + multiplier },
        ];

        const options = new Map<string, Fraction>();
        options.set(fractionKey(answer), answer);
        for (const candidate of candidates) {
            if (options.size >= 4) break;
            if (!fractionsEqual(candidate, base)) {
                options.set(fractionKey(candidate), candidate);
            }
        }

        return {
            prompt: 'Which fraction is equivalent to this fraction?',
            displayFraction: base,
            answer,
            options: shuffleOptions(Array.from(options.values())),
            correctMessage: `Correct! Multiplying the top and bottom by ${multiplier} makes an equivalent fraction.`,
            incorrectMessage: 'Not quite. Equivalent fractions must have the same value, with the top and bottom changed by the same factor.',
        };
    };

    const generateSimplifyProblem = (): Problem => {
        const simpleDenominator = Math.floor(Math.random() * 7) + 3;
        const simpleNumerator = Math.floor(Math.random() * (simpleDenominator - 1)) + 1;
        const simplified = simplifyFraction({ numerator: simpleNumerator, denominator: simpleDenominator });
        const multiplier = Math.floor(Math.random() * 5) + 2;
        const displayFraction = {
            numerator: simplified.numerator * multiplier,
            denominator: simplified.denominator * multiplier,
        };
        const candidates = [
            { numerator: simplified.numerator + 1, denominator: simplified.denominator },
            { numerator: simplified.numerator, denominator: simplified.denominator + 1 },
            { numerator: Math.max(1, simplified.numerator - 1), denominator: simplified.denominator },
            { numerator: Math.max(1, displayFraction.numerator - multiplier), denominator: displayFraction.denominator },
            { numerator: simplified.denominator - simplified.numerator, denominator: simplified.denominator },
        ];

        return {
            prompt: 'Simplify this fraction to lowest terms.',
            displayFraction,
            answer: simplified,
            options: buildOptions(simplified, candidates),
            correctMessage: `Yes! The HCF is ${multiplier}, so divide the numerator and denominator by ${multiplier}.`,
            incorrectMessage: 'Try again. Use the HCF to divide the numerator and denominator by the same number.',
        };
    };

    const generateSameDenominatorProblem = (): Problem => {
        const denominator = Math.floor(Math.random() * 7) + 5;
        const isAddition = Math.random() < 0.5;
        let firstNumerator = Math.floor(Math.random() * (denominator - 2)) + 1;
        let secondNumerator = Math.floor(Math.random() * (denominator - firstNumerator - 1)) + 1;

        if (!isAddition) {
            firstNumerator = Math.floor(Math.random() * (denominator - 2)) + 2;
            secondNumerator = Math.floor(Math.random() * (firstNumerator - 1)) + 1;
        }

        const resultNumerator = isAddition
            ? firstNumerator + secondNumerator
            : firstNumerator - secondNumerator;
        const answer = simplifyFraction({ numerator: resultNumerator, denominator });
        const firstFraction = { numerator: firstNumerator, denominator };
        const secondFraction = { numerator: secondNumerator, denominator };
        const candidates = [
            { numerator: resultNumerator + 1, denominator },
            { numerator: Math.max(1, resultNumerator - 1), denominator },
            { numerator: resultNumerator, denominator: denominator + denominator },
            { numerator: firstNumerator + secondNumerator, denominator },
            { numerator: Math.abs(firstNumerator - secondNumerator), denominator },
        ];

        return {
            prompt: `Work out this ${isAddition ? 'addition' : 'subtraction'} problem. The denominators stay the same.`,
            expression: `${fractionKey(firstFraction)} ${isAddition ? '+' : '-'} ${fractionKey(secondFraction)}`,
            answer,
            options: buildOptions(answer, candidates),
            correctMessage: 'Great work! With the same denominator, combine only the numerators and then simplify if possible.',
            incorrectMessage: 'Not yet. Keep the denominator the same, combine the numerators, then reduce the answer.',
        };
    };

    const generateProblem = () => {
        const type = Math.floor(Math.random() * 3);
        const nextProblem = type === 0
            ? generateEquivalentProblem()
            : type === 1
                ? generateSimplifyProblem()
                : generateSameDenominatorProblem();

        setProblem(nextProblem);
        setSelectedOption(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleCheck = (val: Fraction) => {
        if (selectedOption !== null || problem === null) return;

        setSelectedOption(val);

        if (fractionKey(val) === fractionKey(problem.answer)) {
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
                title: "Equivalent Fractions",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Equivalent fractions name the <strong>same part</strong> of a whole.</p>
                        <div className="bg-slate-50 p-6 rounded-xl inline-flex items-center gap-4 text-indigo-700">
                            <FractionDisplay fraction={{ numerator: 1, denominator: 2 }} className="text-4xl" />
                            <span className="text-3xl font-bold text-slate-400">=</span>
                            <FractionDisplay fraction={{ numerator: 2, denominator: 4 }} className="text-4xl" />
                            <span className="text-3xl font-bold text-slate-400">=</span>
                            <FractionDisplay fraction={{ numerator: 4, denominator: 8 }} className="text-4xl" />
                        </div>
                        <p className="text-slate-500 text-sm">Multiply or divide the numerator and denominator by the same number.</p>
                    </div>
                )
            },
            {
                title: "Simplify with the HCF",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">To simplify to lowest terms, divide by the <strong>highest common factor</strong> (HCF).</p>
                        <div className="grid grid-cols-3 gap-2 items-center max-w-lg mx-auto">
                            <div className="bg-amber-50 p-5 rounded-xl text-amber-700">
                                <FractionDisplay fraction={{ numerator: 12, denominator: 18 }} className="text-4xl" />
                            </div>
                            <div className="text-sm font-bold text-slate-500">÷ 6 top and bottom</div>
                            <div className="bg-emerald-50 p-5 rounded-xl text-emerald-700">
                                <FractionDisplay fraction={{ numerator: 2, denominator: 3 }} className="text-4xl" />
                            </div>
                        </div>
                        <p className="text-slate-500 text-sm">The HCF of 12 and 18 is 6, so the lowest terms are two thirds.</p>
                    </div>
                )
            },
            {
                title: "Same Denominators",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">When denominators are the same, add or subtract the <strong>numerators only</strong>.</p>
                        <div className="bg-indigo-50 p-6 rounded-xl inline-flex items-center gap-4 text-indigo-700">
                            <FractionDisplay fraction={{ numerator: 3, denominator: 8 }} className="text-4xl" />
                            <span className="text-3xl font-bold text-slate-400">+</span>
                            <FractionDisplay fraction={{ numerator: 2, denominator: 8 }} className="text-4xl" />
                            <span className="text-3xl font-bold text-slate-400">=</span>
                            <FractionDisplay fraction={{ numerator: 5, denominator: 8 }} className="text-4xl" />
                        </div>
                        <p className="text-slate-500 text-sm">The denominator stays as eighths because the pieces are the same size.</p>
                    </div>
                )
            },
            {
                title: "Always Check Your Answer",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">After adding or subtracting, simplify the answer if you can.</p>
                        <div className="bg-slate-50 p-6 rounded-xl inline-flex items-center gap-4 text-slate-800">
                            <FractionDisplay fraction={{ numerator: 2, denominator: 6 }} className="text-4xl" />
                            <span className="text-3xl font-bold text-slate-400">+</span>
                            <FractionDisplay fraction={{ numerator: 1, denominator: 6 }} className="text-4xl" />
                            <span className="text-3xl font-bold text-slate-400">=</span>
                            <FractionDisplay fraction={{ numerator: 3, denominator: 6 }} className="text-4xl" />
                            <span className="text-3xl font-bold text-slate-400">=</span>
                            <FractionDisplay fraction={{ numerator: 1, denominator: 2 }} className="text-4xl text-emerald-700" />
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
            title="Common Fractions"
            subtitle="Equivalent fractions, simplifying, adding & subtracting"
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
                        <p className="text-slate-500 text-lg">{problem?.prompt}</p>

                        <div className="bg-slate-50 p-6 rounded-xl min-h-36 flex items-center justify-center">
                            {problem?.expression ? (
                                <div className="flex items-center justify-center gap-4 text-indigo-700 flex-wrap">
                                    {problem.expression.split(' ').map((part, idx) => {
                                        const fractionParts = part.split('/');
                                        if (fractionParts.length === 2) {
                                            return (
                                                <FractionDisplay
                                                    key={idx}
                                                    fraction={{ numerator: Number(fractionParts[0]), denominator: Number(fractionParts[1]) }}
                                                    className="text-5xl md:text-6xl"
                                                />
                                            );
                                        }

                                        return <span key={idx} className="text-4xl md:text-5xl font-bold text-slate-400">{part}</span>;
                                    })}
                                </div>
                            ) : problem?.displayFraction ? (
                                <FractionDisplay fraction={problem.displayFraction} className="text-6xl text-indigo-700" />
                            ) : null}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {(problem?.options ?? []).map((opt, idx) => {
                                let variant: 'default' | 'outline' | 'success' | 'danger' = 'outline';
                                if (selectedOption !== null && problem !== null) {
                                    if (fractionKey(opt) === fractionKey(problem.answer)) variant = 'success';
                                    else if (fractionKey(opt) === fractionKey(selectedOption)) variant = 'danger';
                                }

                                return (
                                    <Button
                                        key={idx}
                                        onClick={() => handleCheck(opt)}
                                        disabled={selectedOption !== null}
                                        variant={variant}
                                        className="text-lg md:text-xl py-6"
                                    >
                                        <FractionDisplay fraction={opt} className="text-2xl" />
                                    </Button>
                                );
                            })}
                        </div>
                    </Card>

                    <div className="h-24">
                        <Feedback
                            isCorrect={isCorrect}
                            correctMessage={problem?.correctMessage ?? "Correct!"}
                            incorrectMessage={problem?.incorrectMessage ?? "Try again."}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default CommonFractions;
