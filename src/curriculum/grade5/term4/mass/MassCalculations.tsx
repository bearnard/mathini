import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

interface Problem {
    question: string;
    answer: number;
    unit: string;
}

const MassCalculations = () => {
    const [problem, setProblem] = useState<Problem | null>(null);
    const [userAnswer, setUserAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    const generateProblem = () => {
        const types = ['add', 'sub', 'mul', 'div'];
        const type = types[Math.floor(Math.random() * types.length)];

        let q = "";
        let a = 0;
        let u = "g"; // or kg

        const names = ["Thabo", "Sarah", "The baker", "Mom", "The truck"];
        const name = names[Math.floor(Math.random() * names.length)];

        if (type === 'add') {
            const w1 = Math.floor(Math.random() * 500) + 100;
            const w2 = Math.floor(Math.random() * 500) + 100;
            q = `${name} bought ${w1}g of flour and ${w2}g of sugar. What is the total mass of the ingredients?`;
            a = w1 + w2;
            u = "g";
        } else if (type === 'sub') {
            const total = Math.floor(Math.random() * 800) + 200;
            const used = Math.floor(Math.random() * (total - 100)) + 50;
            q = `${name} had ${total}g of butter. They used ${used}g for a cake. How much butter is left?`;
            a = total - used;
            u = "g";
        } else if (type === 'mul') {
            const count = Math.floor(Math.random() * 8) + 2;
            const weight = Math.floor(Math.random() * 10) + 1; // kg
            q = `A brick weighs ${weight}kg. What is the mass of ${count} bricks?`;
            a = count * weight;
            u = "kg";
        } else if (type === 'div') {
            const count = Math.floor(Math.random() * 4) + 2;
            const total = count * (Math.floor(Math.random() * 20) + 5); // Ensure divisibility
            q = `${count} identical bags of rice weigh ${total}kg together. How much does one bag weigh?`;
            a = total / count;
            u = "kg";
        }

        setProblem({ question: q, answer: a, unit: u });
        setUserAnswer("");
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!userAnswer || !problem) return;

        const val = parseFloat(userAnswer);

        if (Math.abs(val - problem.answer) < 0.1) {
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
                <h2 className="text-2xl font-bold text-slate-800">Mass Word Problems</h2>
                <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm">
                    Streak: {streak} 🔥
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-8">
                <div className="bg-indigo-50 p-6 rounded-xl mb-8 border border-indigo-100">
                    <p className="text-xl text-indigo-900 font-medium leading-relaxed">
                        {problem?.question}
                    </p>
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
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                        {problem?.unit}
                    </span>

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
                                {isCorrect ? "Correct!" : "Not quite."}
                            </h3>
                            <p className={`${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
                                The answer is <strong>{problem?.answer} {problem?.unit}</strong>.
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={generateProblem}
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-md transition-colors flex items-center gap-2"
                    >
                        Next Problem <RefreshCw className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default MassCalculations;
