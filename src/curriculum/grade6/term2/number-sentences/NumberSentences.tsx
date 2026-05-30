import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';


type Problem = {
    story: string;
    equation: string;
    answer: number;
    options: number[];
    correctMessage: string;
    incorrectMessage: string;
};

const NumberSentences = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [problem, setProblem] = useState<Problem | null>(null);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const shuffleOptions = (values: number[]) => {
        return [...values].sort(() => Math.random() - 0.5);
    };

    const buildOptions = (answer: number) => {
        const distractors = new Set<number>();
        distractors.add(answer);

        const candidates = [
            answer + 1,
            answer - 1,
            answer + 2,
            answer - 2,
            answer * 2,
            Math.max(1, answer + 3),
        ];

        for (const candidate of candidates) {
            if (distractors.size >= 4) break;
            if (candidate > 0 && candidate !== answer) {
                distractors.add(candidate);
            }
        }

        while (distractors.size < 4) {
            const candidate = Math.floor(Math.random() * 12) + 1;
            if (candidate !== answer) {
                distractors.add(candidate);
            }
        }

        return shuffleOptions(Array.from(distractors));
    };

    const generateProblem = () => {
        const type = Math.floor(Math.random() * 4);
        let nextProblem: Problem;

        if (type === 0) {
            const answer = Math.floor(Math.random() * 10) + 2;
            const addend = Math.floor(Math.random() * 12) + 3;
            const total = answer + addend;
            nextProblem = {
                story: `Lerato has ${addend} stickers. She gets some more and now has ${total} stickers. How many did she get?`,
                equation: `${addend} + □ = ${total}`,
                answer,
                options: buildOptions(answer),
                correctMessage: `Correct! ${addend} + ${answer} = ${total}, so both sides balance.`,
                incorrectMessage: `Not quite. Find the number that makes ${addend} + □ equal ${total}.`,
            };
        } else if (type === 1) {
            const answer = Math.floor(Math.random() * 8) + 2;
            const groupSize = Math.floor(Math.random() * 5) + 2;
            const total = answer * groupSize;
            nextProblem = {
                story: `${answer} equal bags would hold ${total} oranges altogether if each bag has the same number. How many oranges are in each bag?`,
                equation: `${answer} × □ = ${total}`,
                answer: groupSize,
                options: buildOptions(groupSize),
                correctMessage: `Well done! ${answer} × ${groupSize} = ${total}.`,
                incorrectMessage: `Try sharing ${total} into ${answer} equal groups to keep the sentence balanced.`,
            };
        } else if (type === 2) {
            const answer = Math.floor(Math.random() * 15) + 5;
            const difference = Math.floor(Math.random() * 9) + 2;
            const start = answer + difference;
            nextProblem = {
                story: `A taxi has ${start} passengers. Some get off, and ${difference} passengers are left. How many got off?`,
                equation: `${start} - □ = ${difference}`,
                answer,
                options: buildOptions(answer),
                correctMessage: `Yes! ${start} - ${answer} = ${difference}.`,
                incorrectMessage: `Not yet. The missing number must make the two sides of the equals sign the same.`,
            };
        } else {
            const answer = Math.floor(Math.random() * 10) + 4;
            const double = answer * 2;
            nextProblem = {
                story: `Thabo thinks of a number. When he doubles it, the answer is ${double}. What number did he think of?`,
                equation: `□ + □ = ${double}`,
                answer,
                options: buildOptions(answer),
                correctMessage: `Great! ${answer} + ${answer} = ${double}.`,
                incorrectMessage: `Almost. Both boxes stand for the same unknown number.`,
            };
        }

        setProblem(nextProblem);
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
                title: "Number Sentences",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">A <strong>number sentence</strong> uses numbers, signs and an equals sign to show a maths idea.</p>
                        <div className="bg-slate-50 p-6 rounded-xl inline-block space-y-3">
                            <p className="text-4xl font-mono font-bold text-indigo-600">7 + □ = 12</p>
                            <p className="text-slate-500">The box is an <strong>unknown</strong> number.</p>
                        </div>
                    </div>
                )
            },
            {
                title: "The Equals Sign Balances",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">The equals sign means <strong>both sides have the same value</strong>.</p>
                        <div className="grid grid-cols-3 gap-2 items-center max-w-lg mx-auto">
                            <div className="bg-emerald-50 p-5 rounded-xl text-2xl font-mono font-bold text-emerald-700">8 + 4</div>
                            <div className="text-3xl font-bold text-slate-400">=</div>
                            <div className="bg-amber-50 p-5 rounded-xl text-2xl font-mono font-bold text-amber-700">12</div>
                        </div>
                        <p className="text-slate-500 text-sm mt-4">If one side is 12, the other side must also be 12.</p>
                    </div>
                )
            },
            {
                title: "From Words to Equations",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Look for the important numbers and the action in the word problem.</p>
                        <div className="bg-indigo-50 p-6 rounded-xl max-w-xl mx-auto space-y-4">
                            <p className="text-slate-700">Naledi has 9 marbles. She gets some more and now has 15.</p>
                            <p className="text-3xl font-mono font-bold text-indigo-700">9 + □ = 15</p>
                            <p className="text-slate-500">The unknown is the number of marbles she got.</p>
                        </div>
                    </div>
                )
            },
            {
                title: "Solve the Unknown",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Choose the number that makes the sentence true.</p>
                        <div className="bg-slate-50 p-6 rounded-xl inline-block space-y-3">
                            <p className="text-4xl font-mono font-bold text-slate-800">3 × □ = 18</p>
                            <p className="text-slate-500">Because <strong>3 × 6 = 18</strong>, the unknown is <strong>6</strong>.</p>
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
            title="Number Sentences"
            subtitle="Turn word problems into equations"
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
                        <p className="text-slate-500 text-lg">Which number makes this number sentence true?</p>

                        <div className="bg-slate-50 p-6 rounded-xl space-y-4">
                            <p className="text-slate-600 max-w-2xl mx-auto">{problem?.story}</p>
                            <p className="text-4xl md:text-6xl font-mono font-bold tracking-wider text-indigo-700 overflow-x-auto pb-2">
                                {problem?.equation}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {(problem?.options ?? []).map((opt, idx) => {
                                let variant: 'default' | 'outline' | 'success' | 'danger' = 'outline';
                                if (selectedOption !== null && problem !== null) {
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

export default NumberSentences;
