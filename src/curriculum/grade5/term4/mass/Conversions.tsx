import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, RefreshCw, ArrowRight } from 'lucide-react';

const Conversions = () => {
    const [grams, setGrams] = useState<number>(0);
    const [direction, setDirection] = useState<'g-to-kg' | 'kg-to-g'>('g-to-kg');
    const [userAnswer, setUserAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    const generateProblem = () => {
        // Random direction
        const dir = Math.random() > 0.5 ? 'g-to-kg' : 'kg-to-g';
        setDirection(dir);

        // Generate grams (multiples of 100g, 250g, 500g, or 1000g for easier conversions initially)
        // We want nice numbers like 2500g, 1500g, 500g, 3000g
        const bases = [100, 200, 250, 500];
        const base = bases[Math.floor(Math.random() * bases.length)];
        const multiplier = Math.floor(Math.random() * 50) + 1; // 1 to 50
        const g = base * multiplier;

        setGrams(g);
        setUserAnswer("");
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!userAnswer) return;

        const val = parseFloat(userAnswer.replace(/,/g, '.')); // Allow comma as decimal separator

        let correct = false;
        if (direction === 'g-to-kg') {
            // User inputs kg. Correct is grams / 1000
            if (Math.abs(val - (grams / 1000)) < 0.001) correct = true;
        } else {
            // User inputs grams. Correct is kg * 1000 (but input is kg, so we display kg)
            // Wait, if direction is kg-to-g, we DISPLAY kg (grams/1000) and ask for grams.
            // So user input should be equal to grams.
            if (Math.abs(val - grams) < 0.1) correct = true;
        }

        if (correct) {
            setIsCorrect(true);
            setStreak(s => s + 1);
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Unit Converter</h2>
                <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm">
                    Streak: {streak} 🔥
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center mb-8">
                <p className="text-slate-500 mb-8 text-lg">Convert the measurement</p>

                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="text-4xl font-bold text-slate-800">
                        {direction === 'g-to-kg' ? `${grams} g` : `${grams / 1000} kg`}
                    </div>
                    <ArrowRight className="text-slate-300 w-8 h-8" />
                    <div className="w-48">
                        <form onSubmit={handleSubmit} className="relative">
                            <input
                                type="text"
                                inputMode="decimal"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                disabled={isCorrect !== null}
                                className={`w-full text-center text-3xl font-bold p-3 border-2 rounded-xl outline-none transition-all ${isCorrect === true ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                                        isCorrect === false ? 'border-red-500 bg-red-50 text-red-700' :
                                            'border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
                                    }`}
                                placeholder="?"
                                autoFocus
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                                {direction === 'g-to-kg' ? 'kg' : 'g'}
                            </span>
                        </form>
                    </div>
                </div>

                <div className="text-sm text-slate-400">
                    Hint: 1 kg = 1 000 g
                </div>
            </div>

            {isCorrect !== null && (
                <div className={`p-6 rounded-xl flex items-center justify-between animate-in fade-in slide-in-from-bottom-4 ${isCorrect ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'}`}>
                    <div className="flex items-center gap-4">
                        {isCorrect ? (
                            <div className="bg-emerald-100 p-2 rounded-full">
                                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                            </div>
                        ) : (
                            <div className="bg-red-100 p-2 rounded-full">
                                <XCircle className="w-8 h-8 text-red-600" />
                            </div>
                        )}
                        <div>
                            <h3 className={`font-bold text-lg ${isCorrect ? 'text-emerald-800' : 'text-red-800'}`}>
                                {isCorrect ? "Correct!" : "Not quite."}
                            </h3>
                            <p className={`${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
                                {direction === 'g-to-kg'
                                    ? `${grams} g = ${grams / 1000} kg`
                                    : `${grams / 1000} kg = ${grams} g`
                                }
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={generateProblem}
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-md transition-colors flex items-center gap-2"
                    >
                        Next <RefreshCw className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Conversions;
