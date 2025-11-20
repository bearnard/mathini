import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';
import { ArrowRight, Scale } from 'lucide-react';

const Conversions = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [grams, setGrams] = useState<number>(0);
    const [direction, setDirection] = useState<'g-to-kg' | 'kg-to-g'>('g-to-kg');
    const [userAnswer, setUserAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const generateProblem = () => {
        const dir = Math.random() > 0.5 ? 'g-to-kg' : 'kg-to-g';
        setDirection(dir);

        const bases = [100, 200, 250, 500];
        const base = bases[Math.floor(Math.random() * bases.length)];
        const multiplier = Math.floor(Math.random() * 50) + 1;
        const g = base * multiplier;

        setGrams(g);
        setUserAnswer("");
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!userAnswer) return;

        const val = parseFloat(userAnswer.replace(/,/g, '.'));

        let correct = false;
        if (direction === 'g-to-kg') {
            if (Math.abs(val - (grams / 1000)) < 0.001) correct = true;
        } else {
            if (Math.abs(val - grams) < 0.1) correct = true;
        }

        if (correct) {
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
                title: "Grams and Kilograms",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">We measure mass in <strong>grams (g)</strong> and <strong>kilograms (kg)</strong>.</p>
                        <div className="flex justify-center gap-8 items-end">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-2xl">📎</div>
                                <p className="text-sm font-bold text-slate-500">Paperclip</p>
                                <p className="text-xs text-slate-400">Approx 1g</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-24 h-24 bg-indigo-100 rounded-xl flex items-center justify-center text-4xl">🍍</div>
                                <p className="text-sm font-bold text-slate-500">Pineapple</p>
                                <p className="text-xs text-slate-400">Approx 1kg</p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: "The Golden Rule",
                content: (
                    <div className="space-y-6 text-center">
                        <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 inline-block">
                            <h3 className="text-2xl font-bold text-amber-800 mb-2">1 kg = 1 000 g</h3>
                            <p className="text-amber-700">Kilo means "thousand"</p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto text-left">
                            <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200">
                                <span>To change <strong>kg</strong> to <strong>g</strong>:</span>
                                <span className="font-bold text-indigo-600">× 1 000</span>
                            </div>
                            <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200">
                                <span>To change <strong>g</strong> to <strong>kg</strong>:</span>
                                <span className="font-bold text-indigo-600">÷ 1 000</span>
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
            title="Unit Converter"
            subtitle="Master converting between grams and kilograms"
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
                            <p className="text-lg">Convert the measurement</p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                            <div className="bg-slate-100 px-8 py-6 rounded-2xl">
                                <div className="text-4xl font-bold text-slate-800">
                                    {direction === 'g-to-kg' ? `${grams} g` : `${grams / 1000} kg`}
                                </div>
                            </div>

                            <ArrowRight className="text-slate-300 w-8 h-8 rotate-90 md:rotate-0" />

                            <div className="w-full max-w-xs">
                                <form onSubmit={handleSubmit} className="relative">
                                    <input
                                        type="text"
                                        inputMode="decimal"
                                        value={userAnswer}
                                        onChange={(e) => setUserAnswer(e.target.value)}
                                        disabled={isCorrect !== null}
                                        className={cn(
                                            "w-full text-center text-3xl font-bold p-6 border-2 rounded-2xl outline-none transition-all shadow-sm",
                                            isCorrect === true ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                                                isCorrect === false ? 'border-red-500 bg-red-50 text-red-700' :
                                                    'border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
                                        )}
                                        placeholder="?"
                                        autoFocus
                                    />
                                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xl">
                                        {direction === 'g-to-kg' ? 'kg' : 'g'}
                                    </span>
                                    {isCorrect === null && (
                                        <Button type="submit" className="hidden">Check</Button>
                                    )}
                                </form>
                            </div>
                        </div>

                        <div className="bg-indigo-50 inline-block px-4 py-2 rounded-lg">
                            <p className="text-sm text-indigo-600 font-medium">
                                💡 Hint: 1 kg = 1 000 g
                            </p>
                        </div>
                    </Card>

                    <div className="h-24">
                        <Feedback
                            isCorrect={isCorrect}
                            correctMessage={`Correct! ${direction === 'g-to-kg' ? `${grams} g = ${grams / 1000} kg` : `${grams / 1000} kg = ${grams} g`}`}
                            incorrectMessage={`Not quite. ${direction === 'g-to-kg' ? `${grams} g = ${grams / 1000} kg` : `${grams / 1000} kg = ${grams} g`}`}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default Conversions;
