import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

const ComparingFractions = () => {
    const [fracA, setFracA] = useState<[number, number]>([1, 2]);
    const [fracB, setFracB] = useState<[number, number]>([1, 3]);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [selectedOp, setSelectedOp] = useState<string | null>(null);
    const [streak, setStreak] = useState(0);

    const generateProblem = () => {
        // Generate two different fractions
        const fractions = [
            [1, 2], [1, 3], [1, 4], [1, 5], [1, 6],
            [2, 3], [2, 5], [3, 4], [3, 5], [4, 5], [5, 6]
        ];

        const a = fractions[Math.floor(Math.random() * fractions.length)];
        let b = fractions[Math.floor(Math.random() * fractions.length)];

        // Ensure they're different (or sometimes equal for practice)
        if (Math.random() < 0.2) {
            // Make them equal sometimes
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

        // Compare: fracA[0]/fracA[1] vs fracB[0]/fracB[1]
        // Cross multiply: fracA[0] * fracB[1] vs fracB[0] * fracA[1]
        const leftVal = fracA[0] * fracB[1];
        const rightVal = fracB[0] * fracA[1];

        let correctOp = '';
        if (leftVal < rightVal) correctOp = '<';
        else if (leftVal > rightVal) correctOp = '>';
        else correctOp = '=';

        if (op === correctOp) {
            setIsCorrect(true);
            setStreak(s => s + 1);
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    // SVG Fraction Circle (Pie Chart)
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

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Comparing Fractions</h2>
                <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm">
                    Streak: {streak} 🔥
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center mb-8">
                <p className="text-slate-500 mb-8 text-lg">Which sign makes the statement true?</p>

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
                        <button
                            key={op}
                            onClick={() => handleCheck(op)}
                            disabled={selectedOp !== null}
                            className={`w-20 h-20 rounded-xl text-4xl font-bold border-2 transition-all ${selectedOp !== null
                                    ? 'bg-slate-100 text-slate-400 border-slate-200'
                                    : 'bg-white border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300 shadow-sm'
                                }`}
                        >
                            {op}
                        </button>
                    ))}
                </div>
            </div>

            {selectedOp !== null && (
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
                                {fracA[0]}/{fracA[1]} {
                                    fracA[0] * fracB[1] < fracB[0] * fracA[1] ? '<' :
                                        fracA[0] * fracB[1] > fracB[0] * fracA[1] ? '>' : '='
                                } {fracB[0]}/{fracB[1]}
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

export default ComparingFractions;
