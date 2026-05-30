import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';


type PatternProblem = {
    type: 'number' | 'flow';
    question: string;
    display: string[];
    rule: string;
    answer: number;
};

const PatternsT2 = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [problem, setProblem] = useState<PatternProblem | null>(null);
    const [options, setOptions] = useState<number[]>([]);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const shuffleNumbers = (values: number[]) => {
        return [...values].sort(() => Math.random() - 0.5);
    };

    const buildOptions = (answer: number, hints: number[]) => {
        const distractors = new Set<number>();
        distractors.add(answer);

        hints.forEach(value => {
            if (value > 0 && value !== answer) {
                distractors.add(value);
            }
        });

        while (distractors.size < 4) {
            const offset = (Math.floor(Math.random() * 6) + 1) * (Math.random() < 0.5 ? -1 : 1);
            const value = answer + offset;
            if (value > 0 && value !== answer) {
                distractors.add(value);
            }
        }

        return shuffleNumbers(Array.from(distractors).slice(0, 4));
    };

    const generateNumberPattern = (): PatternProblem => {
        const isRatioPattern = Math.random() < 0.35;

        if (isRatioPattern) {
            const start = Math.floor(Math.random() * 4) + 2;
            const ratio = Math.floor(Math.random() * 3) + 2;
            const sequence = Array.from({ length: 4 }, (_, index) => start * Math.pow(ratio, index));
            const answer = start * Math.pow(ratio, 4);

            setOptions(buildOptions(answer, [answer / ratio, answer + ratio, answer - ratio, answer + start]));

            return {
                type: 'number',
                question: 'What comes next?',
                display: sequence.map(String),
                rule: `Multiply by ${ratio} each time`,
                answer,
            };
        }

        const start = Math.floor(Math.random() * 20) + 1;
        const difference = Math.floor(Math.random() * 9) + 2;
        const sequence = Array.from({ length: 4 }, (_, index) => start + difference * index);
        const answer = start + difference * 4;

        setOptions(buildOptions(answer, [answer + difference, answer - difference, answer + 1, answer - 1]));

        return {
            type: 'number',
            question: 'What comes next?',
            display: sequence.map(String),
            rule: `Add ${difference} each time`,
            answer,
        };
    };

    const generateFlowProblem = (): PatternProblem => {
        const input = Math.floor(Math.random() * 12) + 2;
        const multiplier = Math.floor(Math.random() * 5) + 2;
        const add = Math.floor(Math.random() * 9) + 1;
        const answer = input * multiplier + add;

        setOptions(buildOptions(answer, [input * multiplier, answer + multiplier, answer - add, answer + add]));

        return {
            type: 'flow',
            question: 'Use the flow diagram rule. What is the output?',
            display: [input.toString(), `×${multiplier} + ${add}`, '?'],
            rule: `${input} × ${multiplier} + ${add} = ${answer}`,
            answer,
        };
    };

    const generateProblem = () => {
        const newProblem = Math.random() < 0.65 ? generateNumberPattern() : generateFlowProblem();
        setProblem(newProblem);
        setSelectedOption(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleCheck = (val: number) => {
        if (selectedOption !== null || problem === null) return;

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
                title: "Find the Rule",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">A pattern follows a <strong>rule</strong>. Look at how each number changes.</p>
                        <div className="bg-slate-50 p-6 rounded-xl inline-block">
                            <div className="flex justify-center gap-3 text-3xl font-mono font-bold mb-3 text-indigo-600">
                                <span>4</span>
                                <span>9</span>
                                <span>14</span>
                                <span>19</span>
                            </div>
                            <p className="text-slate-500">Each term increases by <strong>5</strong>, so the rule is <strong>add 5</strong>.</p>
                        </div>
                    </div>
                )
            },
            {
                title: "Extend the Pattern",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Once you know the rule, use it to find the next term.</p>
                        <div className="grid grid-cols-5 gap-2 max-w-xl mx-auto text-center">
                            {['3', '6', '12', '24', '?'].map((term, index) => (
                                <div
                                    key={term}
                                    className={cn(
                                        "p-4 rounded-xl text-2xl font-mono font-bold",
                                        index === 4 ? "bg-indigo-600 text-white" : "bg-indigo-50 text-indigo-900"
                                    )}
                                >
                                    {term}
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-500">The rule is <strong>multiply by 2</strong>, so the next term is <strong>48</strong>.</p>
                    </div>
                )
            },
            {
                title: "Flow Diagrams",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">A flow diagram uses an input, applies a rule, and gives an output.</p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                            <div className="bg-emerald-50 text-emerald-900 p-5 rounded-xl text-2xl font-bold">7</div>
                            <div className="text-slate-400 font-bold">→</div>
                            <div className="bg-slate-50 text-slate-800 p-5 rounded-xl text-2xl font-bold">×3 + 1</div>
                            <div className="text-slate-400 font-bold">→</div>
                            <div className="bg-amber-50 text-amber-900 p-5 rounded-xl text-2xl font-bold">22</div>
                        </div>
                        <p className="text-slate-500">Work in order: <strong>7 × 3 = 21</strong>, then <strong>21 + 1 = 22</strong>.</p>
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
            title="Patterns"
            subtitle="Find the rule and extend the sequence"
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
                        <p className="text-slate-500 text-lg">{problem?.question}</p>

                        {problem?.type === 'flow' ? (
                            <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-2xl md:text-4xl font-bold text-slate-800">
                                <span className="bg-emerald-50 text-emerald-900 px-6 py-4 rounded-xl">{problem.display[0]}</span>
                                <span className="text-slate-300">→</span>
                                <span className="bg-slate-50 px-6 py-4 rounded-xl">{problem.display[1]}</span>
                                <span className="text-slate-300">→</span>
                                <span className="bg-indigo-50 text-indigo-600 px-6 py-4 rounded-xl">{problem.display[2]}</span>
                            </div>
                        ) : (
                            <div className="text-3xl md:text-5xl font-mono font-bold tracking-wide text-slate-800 overflow-x-auto pb-4 flex justify-center gap-3">
                                {problem?.display.map((term, index) => (
                                    <span key={`${term}-${index}`} className="inline-block bg-slate-50 px-4 py-3 rounded-xl">
                                        {term},
                                    </span>
                                ))}
                                <span className="inline-block bg-indigo-50 text-indigo-600 px-4 py-3 rounded-xl">?</span>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {options.map((opt, idx) => {
                                let variant: 'outline' | 'success' | 'danger' = 'outline';
                                if (selectedOption !== null && problem !== null) {
                                    if (opt === problem.answer) variant = 'success';
                                    else if (opt === selectedOption) variant = 'danger';
                                }

                                return (
                                    <Button
                                        key={`${opt}-${idx}`}
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
                            correctMessage={`Correct! ${problem?.rule ?? 'You found the rule.'}`}
                            incorrectMessage={`Not quite. ${problem?.rule ?? 'Check the rule and try again.'}`}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default PatternsT2;
