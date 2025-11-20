import { useState } from 'react';
import { RefreshCw, Grid } from 'lucide-react';

const PrimeNumbers = () => {
    const [mode, setMode] = useState<'identify' | 'sieve'>('identify');

    // Identify Mode State
    const [targetNumber, setTargetNumber] = useState<number>(0);
    const [userIsPrime, setUserIsPrime] = useState<boolean | null>(null); // User's guess
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Sieve Mode State
    const [sieveGrid] = useState<number[]>(Array.from({ length: 100 }, (_, i) => i + 1));
    const [crossedOut, setCrossedOut] = useState<Set<number>>(new Set([1])); // 1 is not prime
    const [circled, setCircled] = useState<Set<number>>(new Set());
    const [currentPrime, setCurrentPrime] = useState<number | null>(null);

    // --- IDENTIFY MODE LOGIC ---
    const generateIdentifyProblem = () => {
        // Generate number between 2 and 100
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
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    // --- SIEVE MODE LOGIC ---
    const handleSieveClick = (num: number) => {
        if (currentPrime === null) {
            // Start with 2
            if (num === 2) {
                setCurrentPrime(2);
                setCircled(prev => new Set(prev).add(2));
            } else {
                alert("Start with the smallest prime number: 2");
            }
            return;
        }

        // If we clicked the current prime again, maybe nothing?
        // If we clicked a multiple of current prime, cross it out
        if (num > currentPrime && num % currentPrime === 0) {
            setCrossedOut(prev => new Set(prev).add(num));
        } else if (num === currentPrime) {
            // User is done with this prime?
            // Find next uncrossed number
            let next = currentPrime + 1;
            while (crossedOut.has(next) || circled.has(next)) {
                next++;
            }
            if (next > 100) {
                alert("Done! All numbers left are prime.");
                return;
            }
            // Check if user crossed out all multiples
            // For simplicity, let's just auto-advance if they click the prime again?
            // Or maybe a button "Next Prime"?
        } else if (!crossedOut.has(num) && !circled.has(num)) {
            // Clicking a new potential prime
            // Check if it is actually the next prime
            let next = currentPrime + 1;
            while (crossedOut.has(next) || circled.has(next)) {
                next++;
            }

            if (num === next) {
                setCurrentPrime(num);
                setCircled(prev => new Set(prev).add(num));
            } else {
                // It's a number that should have been crossed out or it's not the next prime
                if (num % currentPrime === 0) {
                    setCrossedOut(prev => new Set(prev).add(num)); // Good, it's a multiple
                } else {
                    // It's not a multiple of current prime, but maybe user missed crossing out previous multiples?
                    // Or user skipped ahead.
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

    // Initialize identify
    useState(() => {
        generateIdentifyProblem();
    });

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="flex justify-center gap-4 mb-8">
                <button
                    onClick={() => setMode('identify')}
                    className={`px-6 py-2 rounded-full font-bold transition-all ${mode === 'identify' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
                >
                    Identify Primes
                </button>
                <button
                    onClick={() => setMode('sieve')}
                    className={`px-6 py-2 rounded-full font-bold transition-all ${mode === 'sieve' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
                >
                    Sieve of Eratosthenes
                </button>
            </div>

            {mode === 'identify' ? (
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-slate-800">Is it Prime?</h2>
                        <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm">
                            Streak: {streak} 🔥
                        </div>
                    </div>

                    <div className="text-8xl font-mono font-bold text-slate-800 mb-12">
                        {targetNumber}
                    </div>

                    <div className="flex justify-center gap-6 mb-8">
                        <button
                            onClick={() => handleIdentifySubmit(true)}
                            disabled={isCorrect !== null}
                            className={`w-32 py-4 rounded-xl text-xl font-bold border-2 transition-all ${isCorrect !== null && userIsPrime === true
                                ? (isCorrect ? 'bg-emerald-100 border-emerald-500 text-emerald-700' : 'bg-red-100 border-red-500 text-red-700')
                                : 'bg-white border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300'
                                }`}
                        >
                            Prime
                        </button>
                        <button
                            onClick={() => handleIdentifySubmit(false)}
                            disabled={isCorrect !== null}
                            className={`w-32 py-4 rounded-xl text-xl font-bold border-2 transition-all ${isCorrect !== null && userIsPrime === false
                                ? (isCorrect ? 'bg-emerald-100 border-emerald-500 text-emerald-700' : 'bg-red-100 border-red-500 text-red-700')
                                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                                }`}
                        >
                            Composite
                        </button>
                    </div>

                    {isCorrect !== null && (
                        <div className={`p-6 rounded-xl animate-in fade-in slide-in-from-bottom-4 ${isCorrect ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'}`}>
                            <p className={`font-bold text-lg mb-4 ${isCorrect ? 'text-emerald-800' : 'text-red-800'}`}>
                                {isCorrect ? "Correct!" : "Incorrect."}
                            </p>
                            <p className="text-slate-600 mb-4">
                                {checkPrime(targetNumber)
                                    ? `${targetNumber} has only two factors: 1 and itself.`
                                    : `${targetNumber} has more than two factors.`}
                            </p>
                            <button
                                onClick={generateIdentifyProblem}
                                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-md transition-colors flex items-center gap-2 mx-auto"
                            >
                                Next Number <RefreshCw className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                            <Grid className="w-6 h-6" /> Sieve of Eratosthenes
                        </h2>
                        <button onClick={resetSieve} className="text-sm text-indigo-600 font-bold hover:underline">Reset</button>
                    </div>

                    <p className="text-slate-500 mb-6">
                        Find primes by eliminating multiples. <br />
                        1. Start by clicking <strong>2</strong> (the first prime). <br />
                        2. Click all multiples of 2 to cross them out. <br />
                        3. Click the next uncrossed number (3) to circle it. <br />
                        4. Repeat!
                    </p>

                    <div className="grid grid-cols-10 gap-2 max-w-md mx-auto">
                        {sieveGrid.map(num => {
                            const isCrossed = crossedOut.has(num);
                            const isCircled = circled.has(num);
                            const isCurrent = currentPrime === num;

                            return (
                                <button
                                    key={num}
                                    onClick={() => handleSieveClick(num)}
                                    className={`aspect-square flex items-center justify-center rounded-lg font-bold text-sm transition-all ${isCircled
                                        ? 'bg-emerald-500 text-white shadow-md scale-105 ring-2 ring-emerald-200'
                                        : isCrossed
                                            ? 'bg-slate-100 text-slate-300 decoration-slate-400 line-through'
                                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-indigo-50 hover:border-indigo-300'
                                        } ${isCurrent ? 'ring-4 ring-indigo-400' : ''}`}
                                >
                                    {num}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PrimeNumbers;
