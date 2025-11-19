import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, RefreshCw, ArrowRight } from 'lucide-react';

const Rounding = () => {
    const [number, setNumber] = useState<number>(0);
    const [roundTo, setRoundTo] = useState<number>(10); // 5, 10, 100, 1000
    const [userAnswer, setUserAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);


    const generateProblem = () => {
        // Pick rounding precision
        const precisions = [5, 10, 100, 1000];
        const precision = precisions[Math.floor(Math.random() * precisions.length)];
        setRoundTo(precision);

        // Generate number
        // Ensure it's not already a multiple of the precision (too easy)
        let newNum = 0;
        do {
            const max = precision * 100; // Scale range based on precision
            const min = precision * 2;
            newNum = Math.floor(Math.random() * (max - min)) + min;
        } while (newNum % precision === 0);

        setNumber(newNum);
        setUserAnswer("");
        setIsCorrect(null);

    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    const formatNumber = (num: number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Rounding Master</h2>
                <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm">
                    Streak: {streak} 🔥
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center mb-8">
                <p className="text-slate-500 mb-2 text-lg">Round this number to the nearest</p>
                <div className="inline-block bg-indigo-100 text-indigo-800 font-bold px-4 py-1 rounded-full text-xl mb-8">
                    {roundTo}
                </div>

                <div className="text-6xl font-mono font-bold tracking-wider mb-8 text-slate-800">
                    {formatNumber(number)}
                </div>

                <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9\s]*"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            disabled={isCorrect !== null}
                            className={`w-full text-center text-3xl font-bold p-4 border-2 rounded-xl outline-none transition-all ${isCorrect === true ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                                isCorrect === false ? 'border-red-500 bg-red-50 text-red-700' :
                                    'border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
                                }`}
                            placeholder="Type answer..."
                            autoFocus
                        />
                        {isCorrect === null && (
                            <button
                                type="submit"
                                className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 transition-colors"
                            >
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        )}
                    </div>
                </form>
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
                                {isCorrect ? "Spot on!" : "Not quite right."}
                            </h3>
                            {!isCorrect && (
                                <p className="text-red-600">
                                    The correct answer is <strong>{formatNumber(roundTo === 5 ? Math.round(number / 5) * 5 : Math.round(number / roundTo) * roundTo)}</strong>.
                                </p>
                            )}
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

export default Rounding;
