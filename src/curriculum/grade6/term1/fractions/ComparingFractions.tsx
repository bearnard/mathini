import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';
import { Scale } from 'lucide-react';

const ComparingFractions = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [fracA, setFracA] = useState<[number, number]>([1, 2]);
    const [fracB, setFracB] = useState<[number, number]>([1, 3]);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [selectedOp, setSelectedOp] = useState<string | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const generateProblem = () => {
        const fractions = [
            [1, 2], [1, 3], [1, 4], [1, 5], [1, 6],
            [2, 3], [2, 5], [3, 4], [3, 5], [4, 5], [5, 6]
        ];

        const a = fractions[Math.floor(Math.random() * fractions.length)];
        let b = fractions[Math.floor(Math.random() * fractions.length)];

        if (Math.random() < 0.2) {
            b = [...a];
        }

        setFracA(a as [number, number]);
        setFracB(b as [number, number]);
        setIsCorrect(null);
        setSelectedOp(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleCheck = (op: string) => {
        if (selectedOp !== null) return;

        setSelectedOp(op);

        const leftVal = fracA[0] * fracB[1];
        const rightVal = fracB[0] * fracA[1];

        let correctOp = '';
        if (leftVal < rightVal) correctOp = '<';
        else if (leftVal > rightVal) correctOp = '>';
        else correctOp = '=';

        if (op === correctOp) {
            setIsCorrect(true);
            setStreak(s => s + 1);
            triggerConfetti();
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    const renderFractionCircle = (num: number, den: number, color: string) => {
        const radius = 40;
        const center = 50;
        const slices = [];

        for (let i = 0; i < den; i++) {
            const startAngle = (i / den) * 2 * Math.PI - Math.PI / 2;
            const endAngle = ((i + 1) / den) * 2 * Math.PI - Math.PI / 2;

            const x1 = center + radius * Math.cos(startAngle);
            const y1 = center + radius * Math.sin(startAngle);
            const x2 = center + radius * Math.cos(endAngle);
            const y2 = center + radius * Math.sin(endAngle);

            const largeArcFlag = 0;

            const d = [
                `M ${center} ${center}`,
                `L ${x1} ${y1}`,
                `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                'Z'
            ].join(' ');

            slices.push(
                <path
                    key={i}
                    d={d}
                    fill={i < num ? color : '#f1f5f9'}
                    stroke="#cbd5e1"
                    strokeWidth={1}
                />
            );
        }

        return (
            <svg width="100" height="100" className="mx-auto">
                {slices}
            </svg>
        );
    };

    const LearnContent = () => {
        const steps = [
            {
                title: "Comparing Fractions",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">We can compare fractions to see which is bigger, smaller, or if they're equal.</p>
                        <div className="flex justify-center gap-8">
                            <div>
                                {renderFractionCircle(1, 2, '#6366f1')}
                                <p className="text-2xl font-bold text-indigo-600 mt-2">1/2</p>
                            </div>
                            <div>
                                {renderFractionCircle(1, 4, '#10b981')}
                                <p className="text-2xl font-bold text-emerald-600 mt-2">1/4</p>
                            </div>
                        </div>
                        <p className="text-slate-500">Which slice is bigger?</p>
                    </div>
                )
            },
            {
                title: "Same Numerator",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">When the tops (numerators) are the same, the one with the smaller bottom (denominator) is bigger!</p>
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 inline-block">
                            <div className="flex items-center gap-4 text-3xl font-bold">
                                <span className="text-indigo-600">1/3</span>
                                <span className="text-emerald-600">&gt;</span>
                                <span className="text-indigo-600">1/4</span>
                            </div>
                            <p className="text-sm text-slate-500 mt-4">Thirds are bigger than quarters!</p>
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
            title="Comparing Fractions"
            subtitle="Compare fractions to find which is bigger or smaller"
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

                        <div className="grid grid-cols-3 gap-4 md:gap-8 items-center mb-8">
                            <div>
                                {renderFractionCircle(fracA[0], fracA[1], '#6366f1')}
                                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mt-4">
                                    <span>{fracA[0]}</span>
                                    <span className="text-slate-300 mx-1">/</span>
                                    <span>{fracA[1]}</span>
                                </div>
                            </div>

                            <div className="w-16 h-16 flex items-center justify-center bg-slate-100 rounded-xl border-2 border-slate-200 text-3xl font-bold text-slate-400">
                                {selectedOp || "?"}
                            </div>

                            <div>
                                {renderFractionCircle(fracB[0], fracB[1], '#10b981')}
                                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mt-4">
                                    <span>{fracB[0]}</span>
                                    <span className="text-slate-300 mx-1">/</span>
                                    <span>{fracB[1]}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center gap-4">
                            {['<', '=', '>'].map((op) => (
                                <Button
                                    key={op}
                                    onClick={() => handleCheck(op)}
                                    disabled={selectedOp !== null}
                                    variant={selectedOp !== null ? 'secondary' : 'outline'}
                                    className="w-20 h-20 text-4xl font-bold"
                                >
                                    {op}
                                </Button>
                            ))}
                        </div>
                    </Card>

                    <div className="h-24">
                        <Feedback
                            isCorrect={isCorrect}
                            correctMessage={`Correct! ${fracA[0]}/${fracA[1]} ${fracA[0] * fracB[1] < fracB[0] * fracA[1] ? '<' :
                                fracA[0] * fracB[1] > fracB[0] * fracA[1] ? '>' : '='
                                } ${fracB[0]}/${fracB[1]}`}
                            incorrectMessage={`Not quite. ${fracA[0]}/${fracA[1]} ${fracA[0] * fracB[1] < fracB[0] * fracA[1] ? '<' :
                                fracA[0] * fracB[1] > fracB[0] * fracA[1] ? '>' : '='
                                } ${fracB[0]}/${fracB[1]}`}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default ComparingFractions;
