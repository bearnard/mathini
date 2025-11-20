import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';
import { ArrowRight } from 'lucide-react';

const NumberPatterns = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [sequence, setSequence] = useState<number[]>([]);
    const [rule, setRule] = useState<string>("");
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const generateProblem = () => {
        const types = ['add', 'subtract', 'multiply', 'square', 'mixed'];
        const type = types[Math.floor(Math.random() * types.length)];

        let seq: number[] = [];
        let ruleText = "";

        const start = Math.floor(Math.random() * 20) + 1;

        if (type === 'add') {
            const diff = Math.floor(Math.random() * 10) + 2;
            seq = [start, start + diff, start + diff * 2, start + diff * 3, start + diff * 4];
            ruleText = `Add ${diff} each time`;
        } else if (type === 'subtract') {
            const diff = Math.floor(Math.random() * 5) + 2;
            const actualStart = start + diff * 5;
            seq = [actualStart, actualStart - diff, actualStart - diff * 2, actualStart - diff * 3, actualStart - diff * 4];
            ruleText = `Subtract ${diff} each time`;
        } else if (type === 'multiply') {
            const factor = Math.floor(Math.random() * 3) + 2;
            seq = [start, start * factor, start * factor * factor, start * factor * factor * factor];
            ruleText = `Multiply by ${factor} each time`;
        } else if (type === 'square') {
            seq = [1, 4, 9, 16, 25];
            ruleText = "Square numbers (1², 2², 3², ...)";
        } else {
            seq = [start];
            for (let i = 0; i < 4; i++) {
                seq.push(seq[seq.length - 1] * 2 + 1);
            }
            ruleText = "Double and add 1";
        }

        setSequence(seq);
        setRule(ruleText);
        setUserAnswer("");
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const getNextNumber = () => {
        const len = sequence.length;
        if (rule.includes("Add")) {
            const diff = parseInt(rule.match(/\d+/)?.[0] || "0");
            return sequence[len - 1] + diff;
        } else if (rule.includes("Subtract")) {
            const diff = parseInt(rule.match(/\d+/)?.[0] || "0");
            return sequence[len - 1] - diff;
        } else if (rule.includes("Multiply")) {
            const factor = parseInt(rule.match(/\d+/)?.[0] || "1");
            return sequence[len - 1] * factor;
        } else if (rule.includes("Square")) {
            return (len + 1) * (len + 1);
        } else if (rule.includes("Double")) {
            return sequence[len - 1] * 2 + 1;
        }
        return 0;
    };

    const handleSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!userAnswer) return;

        const val = parseInt(userAnswer);
        const correctNext = getNextNumber();

        if (val === correctNext) {
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
                title: "What is a Number Pattern?",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">A number pattern is a list of numbers that follow a <strong>rule</strong>.</p>
                        <div className="flex justify-center gap-4 items-center bg-indigo-50 p-6 rounded-xl">
                            <div className="text-3xl font-bold text-indigo-600">2</div>
                            <ArrowRight className="text-slate-300" />
                            <div className="text-3xl font-bold text-indigo-600">4</div>
                            <ArrowRight className="text-slate-300" />
                            <div className="text-3xl font-bold text-indigo-600">6</div>
                            <ArrowRight className="text-slate-300" />
                            <div className="text-3xl font-bold text-indigo-600">8</div>
                        </div>
                        <p className="text-slate-500">Can you guess the rule? It's <strong>Add 2</strong>!</p>
                    </div>
                )
            },
            {
                title: "Finding the Rule",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">To find the rule, look at how to get from one number to the next.</p>
                        <div className="flex justify-center gap-8 items-center">
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-bold text-slate-700">5</span>
                                <span className="text-sm text-emerald-500 font-bold mt-2">+5</span>
                            </div>
                            <ArrowRight className="text-slate-300" />
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-bold text-slate-700">10</span>
                                <span className="text-sm text-emerald-500 font-bold mt-2">+5</span>
                            </div>
                            <ArrowRight className="text-slate-300" />
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-bold text-slate-700">15</span>
                                <span className="text-sm text-emerald-500 font-bold mt-2">+5</span>
                            </div>
                        </div>
                        <p className="text-slate-500">Sometimes you add, subtract, or multiply.</p>
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
            title="Number Patterns"
            subtitle="Discover the rules behind number sequences"
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
                        <p className="text-slate-500 text-lg">What comes next?</p>

                        <div className="flex flex-wrap justify-center items-center gap-3">
                            {sequence.map((num, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-indigo-100 rounded-xl border-2 border-indigo-200 text-2xl md:text-3xl font-bold text-indigo-600 shadow-sm">
                                        {num}
                                    </div>
                                    {idx < sequence.length - 1 && (
                                        <ArrowRight className="text-slate-300 w-6 h-6" />
                                    )}
                                </div>
                            ))}

                            <div className="flex items-center gap-3">
                                <ArrowRight className="text-slate-300 w-6 h-6" />
                                <form onSubmit={handleSubmit} className="relative">
                                    <input
                                        type="number"
                                        value={userAnswer}
                                        onChange={(e) => setUserAnswer(e.target.value)}
                                        disabled={isCorrect !== null}
                                        className={cn(
                                            "w-16 h-16 md:w-20 md:h-20 text-center text-2xl md:text-3xl font-bold border-2 rounded-xl outline-none transition-all shadow-sm",
                                            isCorrect === true ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                                                isCorrect === false ? 'border-red-500 bg-red-50 text-red-700' :
                                                    'border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
                                        )}
                                        placeholder="?"
                                        autoFocus
                                    />
                                    {isCorrect === null && (
                                        <Button type="submit" className="hidden">Check</Button>
                                    )}
                                </form>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl inline-block">
                            <p className="text-sm text-slate-500 font-medium">
                                💡 Hint: Look for what changes from one number to the next
                            </p>
                        </div>
                    </Card>

                    <div className="h-24">
                        <Feedback
                            isCorrect={isCorrect}
                            correctMessage={`Correct! The rule is: ${rule}`}
                            incorrectMessage={`Not quite. The rule is: ${rule}. The next number is ${getNextNumber()}.`}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default NumberPatterns;
