import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';
import { Scale } from 'lucide-react';

const Comparing = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [numA, setNumA] = useState<number>(0);
    const [numB, setNumB] = useState<number>(0);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const generateProblem = () => {
        const base = Math.floor(Math.random() * 900000) + 100000;
        const type = Math.random();
        let a = base;
        let b = base;

        if (type < 0.4) {
            b = a;
        } else if (type < 0.7) {
            const diff = Math.pow(10, Math.floor(Math.random() * 4));
            b = Math.random() < 0.5 ? a + diff : a - diff;
        } else {
            b = Math.floor(Math.random() * 900000) + 100000;
        }

        setNumA(a);
        setNumB(b);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleCheck = (operator: '<' | '>' | '=') => {
        if (isCorrect !== null) return;

        let correctOp = '';
        if (numA < numB) correctOp = '<';
        else if (numA > numB) correctOp = '>';
        else correctOp = '=';

        if (operator === correctOp) {
            setIsCorrect(true);
            setStreak(s => s + 1);
            triggerConfetti();
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    const formatNumber = (num: number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    const LearnContent = () => {
        const steps = [
            {
                title: "Comparing Numbers",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">We use three signs to compare numbers:</p>
                        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex flex-col items-center">
                                <span className="text-4xl font-bold text-indigo-600 mb-2">&lt;</span>
                                <span className="text-sm font-bold text-indigo-800">Less Than</span>
                                <span className="text-xs text-indigo-500">Smaller</span>
                            </div>
                            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex flex-col items-center">
                                <span className="text-4xl font-bold text-indigo-600 mb-2">=</span>
                                <span className="text-sm font-bold text-indigo-800">Equal To</span>
                                <span className="text-xs text-indigo-500">Same</span>
                            </div>
                            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex flex-col items-center">
                                <span className="text-4xl font-bold text-indigo-600 mb-2">&gt;</span>
                                <span className="text-sm font-bold text-indigo-800">Greater Than</span>
                                <span className="text-xs text-indigo-500">Bigger</span>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: "The Hungry Crocodile",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Imagine the sign is a hungry crocodile's mouth.</p>
                        <div className="flex items-center justify-center gap-8 text-3xl font-bold text-slate-700">
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">5</div>
                            <div className="text-emerald-600 text-5xl">&lt;</div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">10</div>
                        </div>
                        <p className="text-emerald-600 font-medium">It always wants to eat the BIGGER number!</p>
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
            title="Compare Numbers"
            subtitle="Master the art of comparing large numbers"
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
                            <Scale className="w-5 h-5" />
                            <p className="text-lg">Which sign makes the statement true?</p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
                            <div className="flex-1 text-3xl md:text-4xl font-mono font-bold text-slate-800 md:text-right">
                                {formatNumber(numA)}
                            </div>

                            <div className="w-20 h-20 flex items-center justify-center bg-slate-100 rounded-2xl border-2 border-slate-200 text-5xl font-bold text-slate-400 shadow-inner">
                                {isCorrect === null ? "?" : (
                                    numA < numB ? "<" : numA > numB ? ">" : "="
                                )}
                            </div>

                            <div className="flex-1 text-3xl md:text-4xl font-mono font-bold text-slate-800 md:text-left">
                                {formatNumber(numB)}
                            </div>
                        </div>

                        <div className="flex justify-center gap-4">
                            {['<', '=', '>'].map((op) => (
                                <Button
                                    key={op}
                                    onClick={() => handleCheck(op as any)}
                                    disabled={isCorrect !== null}
                                    variant={isCorrect !== null ? 'secondary' : 'outline'}
                                    className="w-24 h-20 text-4xl font-bold"
                                >
                                    {op}
                                </Button>
                            ))}
                        </div>
                    </Card>

                    <div className="h-24">
                        <Feedback
                            isCorrect={isCorrect}
                            correctMessage={`Correct! ${formatNumber(numA)} is ${numA < numB ? "less than" : numA > numB ? "greater than" : "equal to"} ${formatNumber(numB)}.`}
                            incorrectMessage={`Oops! ${formatNumber(numA)} is ${numA < numB ? "less than" : numA > numB ? "greater than" : "equal to"} ${formatNumber(numB)}.`}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default Comparing;
