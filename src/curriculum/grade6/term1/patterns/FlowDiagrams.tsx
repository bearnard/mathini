import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';
import { ArrowRight } from 'lucide-react';

interface FlowRule {
    operation: string;
    value: number;
    display: string;
}

const FlowDiagrams = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [rule, setRule] = useState<FlowRule>({ operation: '+', value: 5, display: '+ 5' });
    const [inputs, setInputs] = useState<number[]>([]);
    const [outputs, setOutputs] = useState<number[]>([]);
    const [missingIndex, setMissingIndex] = useState<number>(0);
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const generateProblem = () => {
        const operations = [
            { op: '+', min: 2, max: 20 },
            { op: '-', min: 2, max: 10 },
            { op: '×', min: 2, max: 10 },
        ];

        const chosen = operations[Math.floor(Math.random() * operations.length)];
        const val = Math.floor(Math.random() * (chosen.max - chosen.min + 1)) + chosen.min;

        const newRule: FlowRule = {
            operation: chosen.op,
            value: val,
            display: `${chosen.op} ${val}`
        };

        setRule(newRule);

        const numPairs = 4;
        const ins: number[] = [];
        const outs: number[] = [];

        for (let i = 0; i < numPairs; i++) {
            const input = Math.floor(Math.random() * 20) + 1;
            ins.push(input);

            let output = 0;
            if (newRule.operation === '+') output = input + newRule.value;
            else if (newRule.operation === '-') output = input - newRule.value;
            else if (newRule.operation === '×') output = input * newRule.value;

            outs.push(output);
        }

        setInputs(ins);
        setOutputs(outs);
        setMissingIndex(Math.floor(Math.random() * numPairs));
        setUserAnswer("");
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!userAnswer) return;

        const val = parseInt(userAnswer);
        const correctOutput = outputs[missingIndex];

        if (val === correctOutput) {
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
                title: "What is a Flow Diagram?",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">A flow diagram shows how numbers change when you apply a rule to them.</p>
                        <div className="flex justify-center items-center gap-4 bg-slate-50 p-8 rounded-xl">
                            <div className="flex flex-col items-center">
                                <span className="text-sm font-bold text-slate-400 mb-2">Input</span>
                                <div className="w-16 h-16 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-center text-2xl font-bold text-slate-700">5</div>
                            </div>
                            <ArrowRight className="text-slate-300" />
                            <div className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold text-xl shadow-lg">
                                + 3
                            </div>
                            <ArrowRight className="text-slate-300" />
                            <div className="flex flex-col items-center">
                                <span className="text-sm font-bold text-slate-400 mb-2">Output</span>
                                <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-200 rounded-xl flex items-center justify-center text-2xl font-bold text-emerald-700">8</div>
                            </div>
                        </div>
                        <p className="text-slate-500">5 goes in, add 3, and 8 comes out!</p>
                    </div>
                )
            },
            {
                title: "The Rule Machine",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Think of it as a machine. The rule is what the machine does to every number.</p>
                        <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
                            <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200">
                                <span className="font-bold text-slate-600">Input: 2</span>
                                <span className="text-indigo-600 font-bold">× 2</span>
                                <span className="font-bold text-emerald-600">Output: 4</span>
                            </div>
                            <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200">
                                <span className="font-bold text-slate-600">Input: 5</span>
                                <span className="text-indigo-600 font-bold">× 2</span>
                                <span className="font-bold text-emerald-600">Output: 10</span>
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
            title="Flow Diagrams"
            subtitle="Understand input and output rules"
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
                        <p className="text-slate-500 text-lg">Find the missing output</p>

                        {/* Flow Machine Visual */}
                        <div className="flex justify-center items-center gap-4 mb-8">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Input</div>
                            <ArrowRight className="text-slate-300" />
                            <div className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-2xl shadow-lg transform hover:scale-105 transition-transform">
                                {rule.display}
                            </div>
                            <ArrowRight className="text-slate-300" />
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Output</div>
                        </div>

                        <div className="max-w-md mx-auto bg-slate-50 rounded-xl p-6">
                            <div className="grid grid-cols-3 gap-4 mb-4 border-b border-slate-200 pb-2">
                                <div className="text-center font-bold text-slate-600">Input</div>
                                <div></div>
                                <div className="text-center font-bold text-slate-600">Output</div>
                            </div>

                            {inputs.map((input, idx) => (
                                <div key={idx} className="grid grid-cols-3 gap-4 mb-3 items-center">
                                    <div className="text-center p-3 bg-white border border-slate-200 rounded-lg font-bold text-xl text-slate-700 shadow-sm">
                                        {input}
                                    </div>
                                    <ArrowRight className="mx-auto text-slate-300 w-5 h-5" />
                                    {idx === missingIndex ? (
                                        <form onSubmit={handleSubmit} className="relative">
                                            <input
                                                type="number"
                                                value={userAnswer}
                                                onChange={(e) => setUserAnswer(e.target.value)}
                                                disabled={isCorrect !== null}
                                                className={cn(
                                                    "w-full text-center text-xl font-bold p-3 border-2 rounded-lg outline-none transition-all shadow-sm",
                                                    isCorrect === true ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                                                        isCorrect === false ? 'border-red-500 bg-red-50 text-red-700' :
                                                            'border-indigo-300 bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
                                                )}
                                                placeholder="?"
                                                autoFocus
                                            />
                                            {isCorrect === null && (
                                                <Button type="submit" className="hidden">Check</Button>
                                            )}
                                        </form>
                                    ) : (
                                        <div className="text-center p-3 bg-emerald-100 border border-emerald-200 rounded-lg font-bold text-xl text-emerald-700 shadow-sm">
                                            {outputs[idx]}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Card>

                    <div className="h-24">
                        <Feedback
                            isCorrect={isCorrect}
                            correctMessage={`Correct! ${inputs[missingIndex]} ${rule.display} = ${outputs[missingIndex]}`}
                            incorrectMessage={`Not quite. ${inputs[missingIndex]} ${rule.display} = ${outputs[missingIndex]}`}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default FlowDiagrams;
