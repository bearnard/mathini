import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

const Comparing = () => {
    const [numA, setNumA] = useState<number>(0);
    const [numB, setNumB] = useState<number>(0);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    const generateProblem = () => {
        // Generate two numbers up to 6 digits
        const base = Math.floor(Math.random() * 900000) + 100000;

        // To make it tricky, often make them very similar
        const type = Math.random();
        let a = base;
        let b = base;

        if (type < 0.4) {
            // Identical (Equal)
            b = a;
        } else if (type < 0.7) {
            // Very close (off by 1, 10, 100)
            const diff = Math.pow(10, Math.floor(Math.random() * 4));
            b = Math.random() < 0.5 ? a + diff : a - diff;
        } else {
            // Randomly different
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
                <h2 className="text-2xl font-bold text-slate-800">Compare Numbers</h2>
                <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm">
                    Streak: {streak} 🔥
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center mb-8">
                <p className="text-slate-500 mb-8 text-lg">Which sign makes the statement true?</p>

                <div className="flex items-center justify-center gap-4 md:gap-8 mb-12">
                    <div className="flex-1 text-3xl md:text-5xl font-mono font-bold text-slate-800 text-right">
                        {formatNumber(numA)}
                    </div>

                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-slate-100 rounded-xl border-2 border-slate-200 text-4xl font-bold text-slate-400">
                        {isCorrect === null ? "?" : (
                            numA < numB ? "<" : numA > numB ? ">" : "="
                        )}
                    </div>

                    <div className="flex-1 text-3xl md:text-5xl font-mono font-bold text-slate-800 text-left">
                        {formatNumber(numB)}
                    </div>
                </div>

                <div className="flex justify-center gap-4">
                    {['<', '=', '>'].map((op) => (
                        <button
                            key={op}
                            onClick={() => handleCheck(op as any)}
                            disabled={isCorrect !== null}
                            className={`w-20 h-20 rounded-xl text-4xl font-bold border-b-4 active:border-b-0 active:translate-y-1 transition-all ${isCorrect !== null
                                    ? 'bg-slate-100 text-slate-400 border-slate-200'
                                    : 'bg-white border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300 shadow-sm'
                                }`}
                        >
                            {op}
                        </button>
                    ))}
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
                                {isCorrect ? "Correct!" : "Oops!"}
                            </h3>
                            <p className={`${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
                                {numA} is <strong>{numA < numB ? "less than" : numA > numB ? "greater than" : "equal to"}</strong> {numB}.
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={generateProblem}
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-md transition-colors flex items-center gap-2"
                    >
                        Next Pair <RefreshCw className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Comparing;
