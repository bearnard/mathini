import { useState, useEffect, useRef } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';
import BadgeUnlockModal from '../../../../components/gamification/BadgeUnlockModal';
import { useAttemptRecorder } from '../../../../lib/client/useAttemptRecorder';
import { useExerciseChallenge, type IssuedChallenge } from '../../../../lib/client/useExerciseChallenge';
import { useStudent } from '../../../../lib/client/StudentContext';
import { seededRandom } from '../../../../lib/shared/seededRandom';
import { roundingProblem } from '../../../../lib/shared/g5Exercises';

import { ArrowRight, Target } from 'lucide-react';

const Rounding = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');
    const { recordAttempt, pendingBadges, clearBadges } = useAttemptRecorder('gr5-whole-numbers-t4', 'math');
    // The problem comes from a signed seed the server issued (so the server can mark the answer); with no seed it is a local, uncounted one.
    const { student } = useStudent();
    const { ready, take } = useExerciseChallenge('rounding', !!student);
    const challengeRef = useRef<IssuedChallenge | null>(null);

    // Practice State
    const [number, setNumber] = useState<number>(0);
    const [roundTo, setRoundTo] = useState<number>(10);
    const [userAnswer, setUserAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const generateProblem = () => {
        const t = take();
        challengeRef.current = t.challenge;
        const p = roundingProblem(seededRandom(t.seed));
        setRoundTo(p.roundTo);
        setNumber(p.number);
        setUserAnswer("");
        setIsCorrect(null);
    };

    useEffect(() => {
        if (ready) generateProblem();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready]);

    const handleSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!userAnswer) return;

        const val = parseInt(userAnswer.replace(/\s/g, ''));

        let correctVal = 0;
        if (roundTo === 5) {
            correctVal = Math.round(number / 5) * 5;
        } else {
            correctVal = Math.round(number / roundTo) * roundTo;
        }

        if (val === correctVal) {
            setIsCorrect(true);
            setStreak(s => s + 1);
            triggerConfetti();
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
        recordAttempt(val === correctVal, 'rounding', undefined, undefined, undefined, challengeRef.current ? { challenge: challengeRef.current, answer: userAnswer } : undefined);
    };

    const formatNumber = (num: number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    const LearnContent = () => {
        const steps = [
            {
                title: "Rounding Off",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Rounding makes numbers simpler but keeps them close to the original value.</p>
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 inline-block">
                            <p className="text-indigo-900 font-medium mb-2">Is 37 closer to 30 or 40?</p>
                            <div className="relative h-2 bg-slate-300 rounded-full w-64 mx-auto mt-8 mb-4">
                                <div className="absolute left-0 -top-2 w-4 h-4 bg-slate-400 rounded-full"></div>
                                <div className="absolute right-0 -top-2 w-4 h-4 bg-slate-400 rounded-full"></div>
                                <div className="absolute left-[70%] -top-3 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-sm z-10"></div>

                                <div className="absolute left-0 top-4 text-xs font-bold text-slate-500">30</div>
                                <div className="absolute right-0 top-4 text-xs font-bold text-slate-500">40</div>
                                <div className="absolute left-[70%] -top-10 text-sm font-bold text-indigo-600">37</div>
                            </div>
                            <p className="text-sm text-indigo-700 mt-6">It's closer to 40!</p>
                        </div>
                    </div>
                )
            },
            {
                title: "The Rounding Rule",
                content: (
                    <div className="space-y-6 text-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                            <Card className="p-4 bg-red-50 border-red-100">
                                <h3 className="font-bold text-red-800 mb-2">0, 1, 2, 3, 4</h3>
                                <p className="text-red-600">Round DOWN</p>
                                <p className="text-xs text-red-400 mt-1">(Stay the same)</p>
                            </Card>
                            <Card className="p-4 bg-emerald-50 border-emerald-100">
                                <h3 className="font-bold text-emerald-800 mb-2">5, 6, 7, 8, 9</h3>
                                <p className="text-emerald-600">Round UP</p>
                                <p className="text-xs text-emerald-400 mt-1">(Add one)</p>
                            </Card>
                        </div>
                        <p className="text-slate-500 text-sm">Look at the digit to the <strong>right</strong> of the place you are rounding to.</p>
                    </div>
                )
            },
            {
                title: "Rounding to the Nearest 5",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Multiples of 5 end in 0 or 5. To round to the nearest 5, find the two multiples of 5 on either side and pick the closer one.</p>
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 inline-block text-left space-y-1">
                            <p className="text-indigo-900 font-medium">Round 47 to the nearest 5:</p>
                            <p className="text-sm text-indigo-700">The multiples of 5 on either side are 45 and 50.</p>
                            <p className="text-sm text-indigo-700">47 is 2 away from 45 and 3 away from 50.</p>
                            <p className="text-sm text-indigo-700 font-bold">47 is closer to 45, so 47 rounds to 45.</p>
                        </div>
                        <p className="text-slate-500 text-sm">Ones digit 1 or 2: round down. Ones digit 3 or 4: round up to the next 5. 6 or 7: round down. 8 or 9: round up.</p>
                    </div>
                )
            }
        ];

        return (
            <Card className="p-5 sm:p-8 space-y-8">
                <h2 className="text-2xl font-bold text-slate-800">{steps[learnStep].title}</h2>
                {steps[learnStep].content}

                <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-3 pt-6 sm:pt-8 border-t border-slate-100">
                    <Button
                        variant="secondary"
                        disabled={learnStep === 0}
                        onClick={() => setLearnStep(prev => prev - 1)}
                    >
                        Previous
                    </Button>
                    <div className="flex gap-1 items-center justify-center order-last basis-full sm:order-none sm:basis-auto">
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
            title="Rounding Master"
            subtitle="Round numbers to the nearest 5, 10, 100, or 1000"
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
                            <Target className="w-5 h-5" />
                            <p className="text-lg">Round to the nearest</p>
                            <span className="bg-indigo-100 text-indigo-800 font-bold px-3 py-1 rounded-full text-sm">
                                {roundTo}
                            </span>
                        </div>

                        <div className="text-5xl md:text-6xl font-mono font-bold tracking-wider mb-8 text-slate-800">
                            {formatNumber(number)}
                        </div>

                        <form onSubmit={handleSubmit} className="max-w-xs mx-auto relative">
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9\s]*"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                disabled={isCorrect !== null}
                                className={cn(
                                    "w-full text-center text-3xl font-bold p-4 border-2 rounded-xl outline-none transition-all shadow-sm",
                                    isCorrect === true ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                                        isCorrect === false ? 'border-red-500 bg-red-50 text-red-700' :
                                            'border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
                                )}
                                placeholder="Type answer..."
                                autoFocus
                            />
                            {isCorrect === null && (
                                <Button
                                    type="submit"
                                    className="absolute right-2 top-2 bottom-2 px-4"
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            )}
                        </form>
                    </Card>

                    <div className="h-24">
                        <Feedback
                            isCorrect={isCorrect}
                            correctMessage={`Spot on! ${formatNumber(number)} rounded to the nearest ${roundTo} is ${formatNumber(roundTo === 5 ? Math.round(number / 5) * 5 : Math.round(number / roundTo) * roundTo)}.`}
                            incorrectMessage={`Not quite. The correct answer is ${formatNumber(roundTo === 5 ? Math.round(number / 5) * 5 : Math.round(number / roundTo) * roundTo)}.`}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
            <BadgeUnlockModal badges={pendingBadges} onDismiss={clearBadges} />
        </TopicContainer>
    );
};

export default Rounding;
