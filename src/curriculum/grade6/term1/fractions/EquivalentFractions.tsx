import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

const EquivalentFractions = () => {
    const [targetNum, setTargetNum] = useState<number>(1);
    const [targetDen, setTargetDen] = useState<number>(2);
    const [userNum, setUserNum] = useState<string>("");
    const [userDen, setUserDen] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    const generateProblem = () => {
        // Generate simple fractions: 1/2, 1/3, 1/4, 2/3, 3/4, 2/5, 3/5, 4/5
        const fractions = [
            [1, 2], [1, 3], [1, 4], [2, 3], [3, 4],
            [2, 5], [3, 5], [4, 5], [1, 6], [5, 6]
        ];

        const [num, den] = fractions[Math.floor(Math.random() * fractions.length)];

        setTargetNum(num);
        setTargetDen(den);
        setUserNum("");
        setUserDen("");
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!userNum || !userDen) return;

        const uNum = parseInt(userNum);
        const uDen = parseInt(userDen);

        // Check if equivalent: targetNum/targetDen = uNum/uDen
        // Cross multiply: targetNum * uDen = uNum * targetDen
        if (targetNum * uDen === uNum * targetDen && uNum > 0 && uDen > 0) {
            setIsCorrect(true);
            setStreak(s => s + 1);
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    // SVG Fraction Bar
    const renderFractionBar = (num: number, den: number, color: string) => {
        const parts = [];
        for (let i = 0; i < den; i++) {
            parts.push(
                <rect
                    key={i}
                    x={i * (300 / den)}
                    y={0}
                    width={300 / den - 2}
                    height={50}
                    fill={i < num ? color : '#f1f5f9'}
                    stroke="#cbd5e1"
                    strokeWidth={2}
                />
            );
        }
        return (
            <svg width="300" height="50" className="mx-auto">
                {parts}
            </svg>
        );
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Equivalent Fractions</h2>
                <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm">
                    Streak: {streak} 🔥
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-8">
                <p className="text-slate-500 mb-6 text-lg text-center">Find an equivalent fraction</p>

                <div className="mb-8">
                    <div className="text-center mb-4">
                        <div className="inline-flex items-center gap-2 text-5xl font-bold text-indigo-600">
                            <span>{targetNum}</span>
                            <span className="text-slate-300">/</span>
                            <span>{targetDen}</span>
                        </div>
                    </div>

                    {renderFractionBar(targetNum, targetDen, '#6366f1')}
                </div>

                <div className="flex items-center justify-center gap-4 mb-8">
                    <span className="text-3xl text-slate-400">=</span>

                    <form onSubmit={handleSubmit} className="flex items-center gap-2">
                        <input
                            type="number"
                            min="1"
                            max="20"
                            value={userNum}
                            onChange={(e) => setUserNum(e.target.value)}
                            disabled={isCorrect !== null}
                            className={`w-20 text-center text-3xl font-bold p-2 border-2 rounded-lg outline-none transition-all ${isCorrect === true ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                                    isCorrect === false ? 'border-red-500 bg-red-50 text-red-700' :
                                        'border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                                }`}
                            placeholder="?"
                            autoFocus
                        />
                        <span className="text-3xl text-slate-300 font-bold">/</span>
                        <input
                            type="number"
                            min="1"
                            max="20"
                            value={userDen}
                            onChange={(e) => setUserDen(e.target.value)}
                            disabled={isCorrect !== null}
                            className={`w-20 text-center text-3xl font-bold p-2 border-2 rounded-lg outline-none transition-all ${isCorrect === true ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                                    isCorrect === false ? 'border-red-500 bg-red-50 text-red-700' :
                                        'border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                                }`}
                            placeholder="?"
                        />
                        {isCorrect === null && (
                            <button type="submit" className="hidden">Check</button>
                        )}
                    </form>
                </div>

                {userNum && userDen && parseInt(userNum) > 0 && parseInt(userDen) > 0 && isCorrect === null && (
                    <div className="mb-4">
                        {renderFractionBar(parseInt(userNum), parseInt(userDen), '#10b981')}
                    </div>
                )}

                <p className="text-center text-sm text-slate-400">
                    Hint: Multiply or divide both the numerator and denominator by the same number
                </p>
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
                                {isCorrect ? "Correct!" : "Try again."}
                            </h3>
                            <p className={`${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
                                {isCorrect
                                    ? `${targetNum}/${targetDen} = ${userNum}/${userDen}`
                                    : `Those fractions are not equivalent. Try multiplying ${targetNum}/${targetDen} by 2, 3, or 4.`}
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

export default EquivalentFractions;
