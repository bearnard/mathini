import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';
import { Grid } from 'lucide-react';

const PrimeNumbers = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');
    const [subMode, setSubMode] = useState<'identify' | 'sieve'>('identify');

    // Identify Mode State
    const [targetNumber, setTargetNumber] = useState<number>(0);
    const [userIsPrime, setUserIsPrime] = useState<boolean | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Sieve Mode State
    const [sieveGrid] = useState<number[]>(Array.from({ length: 100 }, (_, i) => i + 1));
    const [crossedOut, setCrossedOut] = useState<Set<number>>(new Set([1]));
    const [circled, setCircled] = useState<Set<number>>(new Set());
    const [currentPrime, setCurrentPrime] = useState<number | null>(null);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    // --- IDENTIFY MODE LOGIC ---
    const generateIdentifyProblem = () => {
        const num = Math.floor(Math.random() * 99) + 2;
        setTargetNumber(num);
        setUserIsPrime(null);
        setIsCorrect(null);
    };

    const checkPrime = (n: number) => {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    };

    const handleIdentifySubmit = (guessPrime: boolean) => {
        if (isCorrect !== null) return;

        const actualPrime = checkPrime(targetNumber);
        setUserIsPrime(guessPrime);

        if (guessPrime === actualPrime) {
            setIsCorrect(true);
            setStreak(s => s + 1);
            triggerConfetti();
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    // --- SIEVE MODE LOGIC ---
    const handleSieveClick = (num: number) => {
        if (currentPrime === null) {
            if (num === 2) {
                setCurrentPrime(2);
                setCircled(prev => new Set(prev).add(2));
            } else {
                alert("Start with the smallest prime number: 2");
            }
            return;
        }

        if (num > currentPrime && num % currentPrime === 0) {
            setCrossedOut(prev => new Set(prev).add(num));
        } else if (num === currentPrime) {
            let next = currentPrime + 1;
            while (crossedOut.has(next) || circled.has(next)) {
                next++;
            }
            if (next > 100) {
                triggerConfetti();
                alert("Done! All numbers left are prime.");
                return;
            }
        } else if (!crossedOut.has(num) && !circled.has(num)) {
            let next = currentPrime + 1;
            while (crossedOut.has(next) || circled.has(next)) {
                next++;
            }

            if (num === next) {
                setCurrentPrime(num);
                setCircled(prev => new Set(prev).add(num));
            } else {
                if (num % currentPrime === 0) {
                    setCrossedOut(prev => new Set(prev).add(num));
                } else {
                    alert(`Try to find the next smallest number that isn't crossed out.`);
                }
            }
        }
    };

    const resetSieve = () => {
        setCrossedOut(new Set([1]));
        setCircled(new Set());
        setCurrentPrime(null);
    };

    useEffect(() => {
        generateIdentifyProblem();
    }, []);

    const LearnContent = () => {
        const steps = [
            {
                title: "What is a Prime Number?",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">A prime number has exactly <strong>two factors</strong>: 1 and itself.</p>
                        <div className="flex justify-center gap-8">
                            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                                <div className="text-4xl font-bold text-emerald-600 mb-2">5</div>
                                <p className="text-sm text-emerald-700">Factors: 1, 5</p>
                                <p className="text-xs text-emerald-500 font-bold mt-2">PRIME</p>
                            </div>
                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <div className="text-4xl font-bold text-red-600 mb-2">6</div>
                                <p className="text-sm text-red-700">Factors: 1, 2, 3, 6</p>
                                <p className="text-xs text-red-500 font-bold mt-2">COMPOSITE</p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: "Composite Numbers",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Composite numbers have <strong>more than two</strong> factors.</p>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 max-w-sm mx-auto">
                            <div className="text-4xl font-bold text-slate-700 mb-4">12</div>
                            <div className="grid grid-cols-3 gap-2 text-sm font-mono text-slate-500">
                                <div>1 × 12</div>
                                <div>2 × 6</div>
                                <div>3 × 4</div>
                            </div>
                            <p className="mt-4 text-slate-600">12 can be divided by many numbers!</p>
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
            title="Prime Numbers"
            subtitle="Discover the building blocks of math"
            onModeChange={setMode}
        >
            {mode === 'learn' ? (
                <LearnContent />
            ) : (
                <div className="space-y-8">
                    <div className="flex justify-center gap-4 mb-8">
                        <Button
                            variant={subMode === 'identify' ? 'primary' : 'secondary'}
                            onClick={() => setSubMode('identify')}
                        >
                            Identify Primes
                        </Button>
                        <Button
                            variant={subMode === 'sieve' ? 'primary' : 'secondary'}
                            onClick={() => setSubMode('sieve')}
                        >
                            Sieve of Eratosthenes
                        </Button>
                    </div>

                    {subMode === 'identify' ? (
                        <>
                            <div className="flex justify-end">
                                <Streak count={streak} />
                            </div>
                            <Card className="p-8 text-center space-y-8">
                                <h2 className="text-2xl font-bold text-slate-800">Is it Prime?</h2>
                                <div className="text-8xl font-mono font-bold text-slate-800 py-8">
                                    {targetNumber}
                                </div>

                                <div className="flex justify-center gap-6">
                                    <Button
                                        onClick={() => handleIdentifySubmit(true)}
                                        disabled={isCorrect !== null}
                                        variant={isCorrect !== null && userIsPrime === true ? (isCorrect ? 'success' : 'danger') : 'outline'}
                                        className="w-32 py-6 text-xl"
                                    >
                                        Prime
                                    </Button>
                                    <Button
                                        onClick={() => handleIdentifySubmit(false)}
                                        disabled={isCorrect !== null}
                                        variant={isCorrect !== null && userIsPrime === false ? (isCorrect ? 'success' : 'danger') : 'outline'}
                                        className="w-32 py-6 text-xl"
                                    >
                                        Composite
                                    </Button>
                                </div>
                            </Card>

                            <div className="h-24">
                                <Feedback
                                    isCorrect={isCorrect}
                                    correctMessage={`Correct! ${targetNumber} has only two factors: 1 and itself.`}
                                    incorrectMessage={`Not quite. ${targetNumber} has more than two factors.`}
                                    onNext={generateIdentifyProblem}
                                />
                            </div>
                        </>
                    ) : (
                        <Card className="p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                    <Grid className="w-5 h-5" /> Find Primes
                                </h2>
                                <Button variant="ghost" size="sm" onClick={resetSieve}>Reset</Button>
                            </div>

                            <div className="bg-indigo-50 p-4 rounded-lg mb-6 text-sm text-indigo-800">
                                <p>1. Click <strong>2</strong> (first prime).</p>
                                <p>2. Click multiples of 2 to cross them out.</p>
                                <p>3. Click the next uncrossed number to circle it.</p>
                            </div>

                            <div className="grid grid-cols-10 gap-2 max-w-md mx-auto">
                                {sieveGrid.map(num => {
                                    const isCrossed = crossedOut.has(num);
                                    const isCircled = circled.has(num);
                                    const isCurrent = currentPrime === num;

                                    return (
                                        <button
                                            key={num}
                                            onClick={() => handleSieveClick(num)}
                                            className={cn(
                                                "aspect-square flex items-center justify-center rounded-lg font-bold text-sm transition-all",
                                                isCircled ? 'bg-emerald-500 text-white shadow-md scale-105 ring-2 ring-emerald-200' :
                                                    isCrossed ? 'bg-slate-100 text-slate-300 decoration-slate-400 line-through' :
                                                        'bg-white border border-slate-200 text-slate-700 hover:bg-indigo-50 hover:border-indigo-300',
                                                isCurrent && 'ring-4 ring-indigo-400'
                                            )}
                                        >
                                            {num}
                                        </button>
                                    );
                                })}
                            </div>
                        </Card>
                    )}
                </div>
            )}
        </TopicContainer>
    );
};

export default PrimeNumbers;
