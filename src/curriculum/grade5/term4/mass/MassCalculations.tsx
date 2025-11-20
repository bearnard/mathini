import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';
import { Calculator } from 'lucide-react';

interface Problem {
    question: string;
    answer: number;
    unit: string;
}

const MassCalculations = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [problem, setProblem] = useState<Problem | null>(null);
    const [userAnswer, setUserAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const generateProblem = () => {
        const types = ['add', 'sub', 'mul', 'div'];
        const type = types[Math.floor(Math.random() * types.length)];

        let q = "";
        let a = 0;
        let u = "g";

        const names = ["Thabo", "Sarah", "The baker", "Mom", "The truck"];
        const name = names[Math.floor(Math.random() * names.length)];

        if (type === 'add') {
            const w1 = Math.floor(Math.random() * 500) + 100;
            const w2 = Math.floor(Math.random() * 500) + 100;
            q = `${name} bought ${w1}g of flour and ${w2}g of sugar. What is the total mass of the ingredients?`;
            a = w1 + w2;
            u = "g";
        } else if (type === 'sub') {
            const total = Math.floor(Math.random() * 800) + 200;
            const used = Math.floor(Math.random() * (total - 100)) + 50;
            q = `${name} had ${total}g of butter. They used ${used}g for a cake. How much butter is left?`;
            a = total - used;
            u = "g";
        } else if (type === 'mul') {
            const count = Math.floor(Math.random() * 8) + 2;
            const weight = Math.floor(Math.random() * 10) + 1;
            q = `A brick weighs ${weight}kg. What is the mass of ${count} bricks?`;
            a = count * weight;
            u = "kg";
        } else if (type === 'div') {
            const count = Math.floor(Math.random() * 4) + 2;
            const total = count * (Math.floor(Math.random() * 20) + 5);
            q = `${count} identical bags of rice weigh ${total}kg together. How much does one bag weigh?`;
            a = total / count;
            u = "kg";
        }

        setProblem({ question: q, answer: a, unit: u });
        setUserAnswer("");
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!userAnswer || !problem) return;

        const val = parseFloat(userAnswer);

        if (Math.abs(val - problem.answer) < 0.1) {
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
                title: "Solving Mass Problems",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">We can add, subtract, multiply, and divide mass just like normal numbers.</p>
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 inline-block">
                            <p className="text-indigo-800 font-medium">Always check the units!</p>
                            <p className="text-sm text-indigo-600 mt-2">Make sure you are adding grams to grams, or kg to kg.</p>
                        </div>
                    </div>
                )
            },
            {
                title: "Example: Total Mass",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">"A bag of apples is 2kg. A bag of oranges is 3kg. What is the total?"</p>
                        <div className="flex items-center justify-center gap-4 text-2xl font-bold text-slate-700">
                            <div className="bg-red-100 px-4 py-2 rounded-lg text-red-800">2 kg</div>
                            <div>+</div>
                            <div className="bg-orange-100 px-4 py-2 rounded-lg text-orange-800">3 kg</div>
                            <div>=</div>
                            <div className="bg-emerald-100 px-4 py-2 rounded-lg text-emerald-800">5 kg</div>
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
            title="Mass Word Problems"
            subtitle="Solve real-world mass problems"
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
                        <div className="flex items-center justify-center gap-2 text-slate-500 mb-4">
                            <Calculator className="w-5 h-5" />
                            <p className="text-lg">Solve the problem</p>
                        </div>

                        <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100 shadow-sm">
                            <p className="text-xl md:text-2xl text-indigo-900 font-medium leading-relaxed">
                                {problem?.question}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="max-w-xs mx-auto relative">
                            <input
                                type="number"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                disabled={isCorrect !== null}
                                className={cn(
                                    "w-full text-center text-3xl font-bold p-4 border-2 rounded-xl outline-none transition-all shadow-sm",
                                    isCorrect === true ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                                        isCorrect === false ? 'border-red-500 bg-red-50 text-red-700' :
                                            'border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
                                )}
                                placeholder="?"
                                autoFocus
                            />
                            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xl">
                                {problem?.unit}
                            </span>
                            {isCorrect === null && (
                                <Button type="submit" className="hidden">Check</Button>
                            )}
                        </form>
                    </Card>

                    <div className="h-24">
                        <Feedback
                            isCorrect={isCorrect}
                            correctMessage={`Correct! The answer is ${problem?.answer} ${problem?.unit}.`}
                            incorrectMessage={`Not quite. The answer is ${problem?.answer} ${problem?.unit}.`}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default MassCalculations;
