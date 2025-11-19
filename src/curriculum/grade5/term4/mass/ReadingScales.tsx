import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

const ReadingScales = () => {
    const [weight, setWeight] = useState<number>(0);
    const [scaleType, setScaleType] = useState<'analogue' | 'digital'>('analogue');
    const [maxScale, setMaxScale] = useState<number>(1000); // 1kg, 2kg, 5kg
    const [userAnswer, setUserAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    const generateProblem = () => {
        // Random scale type
        const type = Math.random() > 0.3 ? 'analogue' : 'digital'; // More analogue practice
        setScaleType(type);

        // Random max scale for analogue: 1kg (1000g), 2kg (2000g), 5kg (5000g)
        const maxes = [1000, 2000, 5000];
        const max = maxes[Math.floor(Math.random() * maxes.length)];
        setMaxScale(max);

        // Generate weight
        // For analogue, we want it to land on nice ticks mostly
        // 1kg scale usually has 10g, 20g, 50g or 100g ticks.
        // Let's assume 10 major ticks, each with 4 minor ticks?
        // Let's stick to multiples of 10g, 50g, 100g depending on scale.

        let step = 10;
        if (max === 1000) step = 10; // 10g steps
        if (max === 2000) step = 20; // 20g steps
        if (max === 5000) step = 50; // 50g steps

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!userAnswer) return;

        const val = parseFloat(userAnswer);

        // Allow small margin of error? No, reading scales should be exact for these generated values.
        if (Math.abs(val - weight) < 1) {
            setIsCorrect(true);
            setStreak(s => s + 1);
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    // --- SVG RENDERER FOR ANALOGUE SCALE ---
    const renderAnalogueScale = () => {
        // Draw a circle
        // Draw ticks
        // Draw needle
        const radius = 120;
        const center = 150;

        // Calculate rotation
        // 0g is at -90deg (12 o'clock) or usually scales start at top? 
        // Kitchen scales usually start at top (0) and go clockwise.
        // 0 = -90deg? No, standard SVG 0 is 3 o'clock.
        // So top is -90deg.
        // Full circle = maxScale.
        const degreesPerGram = 360 / maxScale;
        const rotation = -90 + (weight * degreesPerGram);

        // Ticks
        const ticks = [];
        const majorStep = maxScale / 10; // 10 numbers on the dial
        const minorStep = majorStep / 5; // 4 small ticks between numbers

        for (let i = 0; i < maxScale; i += minorStep) {
            const isMajor = i % majorStep === 0;
            const tickRot = -90 + (i * degreesPerGram);
            const length = isMajor ? 15 : 8;
            const width = isMajor ? 3 : 1;

            // Convert polar to cartesian for tick start/end
            // Actually, easier to rotate a line element
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
                            x={center + radius - 35}
                            y={center + 5}
                            transform={`rotate(${-tickRot}, ${center + radius - 35}, ${center + 5})`}
                            textAnchor="middle"
                            className="text-[10px] font-bold fill-slate-600"
                        >
                            {i === 0 ? (maxScale / 1000) + 'kg' : i}
                        </text>
                    )}
                </g>
            );
        }

        return (
            <div className="relative w-[300px] h-[300px] mx-auto">
                <svg width="300" height="300" viewBox="0 0 300 300">
                    {/* Outer Rim */}
                    <circle cx={center} cy={center} r={radius + 10} fill="#f8fafc" stroke="#cbd5e1" strokeWidth="4" />
                    <circle cx={center} cy={center} r={radius} fill="white" stroke="#e2e8f0" strokeWidth="1" />

                    {/* Ticks */}
                    {ticks}

                    {/* Needle */}
                    <g transform={`rotate(${rotation}, ${center}, ${center})`}>
                        <line x1={center} y1={center} x2={center + radius - 10} y2={center} stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                        <circle cx={center} cy={center} r="6" fill="#ef4444" />
                    </g>
                </svg>
                <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-slate-400">
                    Max: {maxScale / 1000}kg
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Reading Scales</h2>
                <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm">
                    Streak: {streak} 🔥
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center mb-8">
                <p className="text-slate-500 mb-6 text-lg">How much does this weigh in <strong>grams</strong>?</p>

                <div className="mb-8">
                    {scaleType === 'analogue' ? renderAnalogueScale() : (
                        <div className="w-64 h-32 mx-auto bg-slate-800 rounded-xl border-4 border-slate-300 flex items-center justify-center shadow-inner relative">
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
                        className={`w-full text-center text-3xl font-bold p-3 border-2 rounded-xl outline-none transition-all ${isCorrect === true ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                                isCorrect === false ? 'border-red-500 bg-red-50 text-red-700' :
                                    'border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
                            }`}
                        placeholder="?"
                        autoFocus
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">g</span>

                    {isCorrect === null && (
                        <button type="submit" className="hidden">Check</button>
                    )}
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
                                {isCorrect ? "Correct!" : "Check again."}
                            </h3>
                            <p className={`${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
                                The scale shows <strong>{weight} g</strong>.
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={generateProblem}
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-md transition-colors flex items-center gap-2"
                    >
                        Next Scale <RefreshCw className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ReadingScales;
