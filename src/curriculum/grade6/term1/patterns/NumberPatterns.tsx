import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

const NumberPatterns = () => {
    const [sequence, setSequence] = useState<number[]>([]);
    const [rule, setRule] = useState<string>("");
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    const generateProblem = () => {
        // Generate different pattern types
        const types = ['add', 'subtract', 'multiply', 'square', 'mixed'];
        const type = types[Math.floor(Math.random() * types.length)];

        let seq: number[] = [];
        let ruleText = "";

        const start = Math.floor(Math.random() * 20) + 1;

        if (type === 'add') {
            const diff = Math.floor(Math.random() * 10) + 2;
            seq = [start, start + diff, start + diff * 2, start + diff * 3, start + diff * 4];
            ruleText = `Add ${diff} each time`;
        } else if (type === 'subtract') {
            const diff = Math.floor(Math.random() * 5) + 2;
            const actualStart = start + diff * 5;
            seq = [actualStart, actualStart - diff, actualStart - diff * 2, actualStart - diff * 3, actualStart - diff * 4];
            ruleText = `Subtract ${diff} each time`;
        } else if (type === 'multiply') {
            const factor = Math.floor(Math.random() * 3) + 2;
            seq = [start, start * factor, start * factor * factor, start * factor * factor * factor];
            ruleText = `Multiply by ${factor} each time`;
        } else if (type === 'square') {
            seq = [1, 4, 9, 16, 25];
            ruleText = "Square numbers (1², 2², 3², ...)";
        } else {
            // Mixed: like 2, 5, 11, 23 (double and add 1)
            seq = [start];
            for (let i = 0; i < 4; i++) {
                seq.push(seq[seq.length - 1] * 2 + 1);
            }
            ruleText = "Double and add 1";
        }

        setSequence(seq);
        setRule(ruleText);
        setUserAnswer("");
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const getNextNumber = () => {
        const len = sequence.length;
        if (rule.includes("Add")) {
            const diff = parseInt(rule.match(/\d+/)?.[0] || "0");
            return sequence[len - 1] + diff;
        } else if (rule.includes("Subtract")) {
            const diff = parseInt(rule.match(/\d+/)?.[0] || "0");
            return sequence[len - 1] - diff;
        } else if (rule.includes("Multiply")) {
            const factor = parseInt(rule.match(/\d+/)?.[0] || "1");
            return sequence[len - 1] * factor;
        } else if (rule.includes("Square")) {
            return (len + 1) * (len + 1);
        } else if (rule.includes("Double")) {
            return sequence[len - 1] * 2 + 1;
        }
        return 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!userAnswer) return;

        const val = parseInt(userAnswer);
        const correctNext = getNextNumber();

        if (val === correctNext) {
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
                <h2 className="text-2xl font-bold text-slate-800">Number Patterns</h2>
                <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm">
                    Streak: {streak} 🔥
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-8">
                <p className="text-slate-500 mb-6 text-lg text-center">What comes next in the pattern?</p>

                <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
                    {sequence.map((num, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-indigo-100 rounded-xl border-2 border-indigo-200 text-2xl md:text-3xl font-bold text-indigo-600">
                                {num}
                            </div>
                            {idx < sequence.length - 1 && (
                                <div className="text-slate-300 text-2xl">→</div>
                            )}
                        </div>
                    ))}

                    <div className="flex items-center gap-3">
                        <div className="text-slate-300 text-2xl">→</div>
                        <form onSubmit={handleSubmit} className="relative">
                            <input
                                type="number"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                disabled={isCorrect !== null}
                                className={`w-16 h-16 md:w-20 md:h-20 text-center text-2xl md:text-3xl font-bold border-2 rounded-xl outline-none transition-all ${isCorrect === true ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                                        isCorrect === false ? 'border-red-500 bg-red-50 text-red-700' :
                                            'border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
                                    }`}
                                placeholder="?"
                                autoFocus
                            />
                            {isCorrect === null && (
                                <button type="submit" className="hidden">Check</button>
                            )}
                        </form>
                    </div>
                </div>

                <div className="text-center text-sm text-slate-400">
                    Hint: Look for what changes from one number to the next
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
                                The rule is: <strong>{rule}</strong>
                                {!isCorrect && ` → Next number is ${getNextNumber()}`}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={generateProblem}
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-md transition-colors flex items-center gap-2"
                    >
                        Next Pattern <RefreshCw className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default NumberPatterns;
