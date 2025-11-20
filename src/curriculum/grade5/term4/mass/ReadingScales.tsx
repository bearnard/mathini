import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';
import { Scale } from 'lucide-react';

const ReadingScales = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [weight, setWeight] = useState<number>(0);
    const [scaleType, setScaleType] = useState<'analogue' | 'digital'>('analogue');
    const [maxScale, setMaxScale] = useState<number>(1000);
    const [userAnswer, setUserAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const generateProblem = () => {
        const type = Math.random() > 0.3 ? 'analogue' : 'digital';
        setScaleType(type);

        const maxes = [1000, 2000, 5000];
        const max = maxes[Math.floor(Math.random() * maxes.length)];
        setMaxScale(max);

        let step = 10;
        if (max === 1000) step = 10;
        if (max === 2000) step = 20;
        if (max === 5000) step = 50;

        const steps = Math.floor(max / step);
        const randomStep = Math.floor(Math.random() * steps);
        const w = randomStep * step;

        setWeight(w);
        setUserAnswer("");
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!userAnswer) return;

        const val = parseFloat(userAnswer);

        if (Math.abs(val - weight) < 1) {
            setIsCorrect(true);
            setStreak(s => s + 1);
            triggerConfetti();
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    const renderAnalogueScale = (currentWeight: number, max: number, size: number = 300) => {
        const radius = size * 0.4;
        const center = size / 2;
        const degreesPerGram = 360 / max;
        const rotation = -90 + (currentWeight * degreesPerGram);

        const ticks = [];
        const majorStep = max / 10;
        const minorStep = majorStep / 5;

        for (let i = 0; i < max; i += minorStep) {
            const isMajor = i % majorStep === 0;
            const tickRot = -90 + (i * degreesPerGram);
            const length = isMajor ? size * 0.05 : size * 0.025;
            const width = isMajor ? 3 : 1;

            ticks.push(
                <g key={i} transform={`rotate(${tickRot}, ${center}, ${center})`}>
                    <line
                        x1={center + radius - length}
                        y1={center}
                        x2={center + radius}
                        y2={center}
                        stroke="#475569"
                        strokeWidth={width}
                    />
                    {isMajor && (
                        <text
                            x={center + radius - (size * 0.12)}
                            y={center + (size * 0.015)}
                            transform={`rotate(${-tickRot}, ${center + radius - (size * 0.12)}, ${center + (size * 0.015)})`}
                            textAnchor="middle"
                            className="font-bold fill-slate-600"
                            style={{ fontSize: size * 0.035 }}
                        >
                            {i === 0 ? (max / 1000) + 'kg' : i}
                        </text>
                    )}
                </g>
            );
        }

        return (
            <div className="relative mx-auto" style={{ width: size, height: size }}>
                <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                    <circle cx={center} cy={center} r={radius + (size * 0.03)} fill="#f8fafc" stroke="#cbd5e1" strokeWidth="4" />
                    <circle cx={center} cy={center} r={radius} fill="white" stroke="#e2e8f0" strokeWidth="1" />
                    {ticks}
                    <g transform={`rotate(${rotation}, ${center}, ${center})`}>
                        <line x1={center} y1={center} x2={center + radius - 10} y2={center} stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                        <circle cx={center} cy={center} r={size * 0.02} fill="#ef4444" />
                    </g>
                </svg>
                <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-slate-400">
                    Max: {max / 1000}kg
                </div>
            </div>
        );
    };

    const LearnContent = () => {
        const steps = [
            {
                title: "Reading Scales",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Scales help us measure how heavy things are.</p>
                        <div className="flex justify-center gap-8">
                            <div className="flex flex-col items-center gap-2">
                                {renderAnalogueScale(500, 1000, 200)}
                                <p className="text-sm font-bold text-slate-500">Analogue Scale</p>
                            </div>
                        </div>
                        <p className="text-slate-500">The red needle points to the weight.</p>
                    </div>
                )
            },
            {
                title: "Reading the Ticks",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Look closely at the lines (ticks) between the numbers.</p>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <p className="mb-4 text-slate-700">If there are <strong>4 small lines</strong> between 0 and 100:</p>
                            <div className="flex justify-center gap-1 mb-2">
                                <div className="w-1 h-8 bg-slate-800"></div>
                                <div className="w-16 h-8 border-b-2 border-slate-300 flex justify-between items-end px-1">
                                    <div className="w-px h-4 bg-slate-400"></div>
                                    <div className="w-px h-4 bg-slate-400"></div>
                                    <div className="w-px h-4 bg-slate-400"></div>
                                    <div className="w-px h-4 bg-slate-400"></div>
                                </div>
                                <div className="w-1 h-8 bg-slate-800"></div>
                            </div>
                            <div className="flex justify-between w-24 mx-auto text-xs font-bold text-slate-600">
                                <span>0</span>
                                <span>100</span>
                            </div>
                            <p className="mt-4 text-indigo-600 font-bold">Each small line counts as 20!</p>
                            <p className="text-xs text-slate-400">(0, 20, 40, 60, 80, 100)</p>
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
            title="Reading Scales"
            subtitle="Read analogue and digital scales accurately"
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
                            <p className="text-lg">How much does this weigh in <strong>grams</strong>?</p>
                        </div>

                        <div className="mb-8 flex justify-center">
                            {scaleType === 'analogue' ? renderAnalogueScale(weight, maxScale) : (
                                <div className="w-64 h-32 bg-slate-800 rounded-xl border-4 border-slate-300 flex items-center justify-center shadow-inner relative">
                                    <div className="font-mono text-5xl text-green-500 font-bold tracking-widest drop-shadow-md">
                                        {weight} <span className="text-2xl">g</span>
                                    </div>
                                    <div className="absolute top-2 right-3 text-[10px] text-slate-500 uppercase tracking-wider">Digital Scale</div>
                                </div>
                            )}
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
                            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xl">g</span>
                            {isCorrect === null && (
                                <Button type="submit" className="hidden">Check</Button>
                            )}
                        </form>
                    </Card>

                    <div className="h-24">
                        <Feedback
                            isCorrect={isCorrect}
                            correctMessage={`Correct! The scale shows ${weight} g.`}
                            incorrectMessage={`Not quite. The scale shows ${weight} g.`}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default ReadingScales;
