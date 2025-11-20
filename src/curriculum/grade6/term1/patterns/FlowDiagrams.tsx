import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, RefreshCw, ArrowRight } from 'lucide-react';

interface FlowRule {
    operation: string;
    value: number;
    display: string;
}

const FlowDiagrams = () => {
    const [rule, setRule] = useState<FlowRule>({ operation: '+', value: 5, display: '+ 5' });
    const [inputs, setInputs] = useState<number[]>([]);
    const [outputs, setOutputs] = useState<number[]>([]);
    const [missingIndex, setMissingIndex] = useState<number>(0);
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    const generateProblem = () => {
        // Generate rule
        const operations = [
            { op: '+', min: 2, max: 20 },
            { op: '-', min: 2, max: 10 },
            { op: '×', min: 2, max: 10 },
        ];

        const chosen = operations[Math.floor(Math.random() * operations.length)];
        const val = Math.floor(Math.random() * (chosen.max - chosen.min + 1)) + chosen.min;

        const newRule: FlowRule = {
            operation: chosen.op,
            value: val,
            display: `${chosen.op} ${val}`
        };

        setRule(newRule);

        // Generate input/output pairs
        const numPairs = 4;
        const ins: number[] = [];
        const outs: number[] = [];

        for (let i = 0; i < numPairs; i++) {
            const input = Math.floor(Math.random() * 20) + 1;
            ins.push(input);

            let output = 0;
            if (newRule.operation === '+') output = input + newRule.value;
            else if (newRule.operation === '-') output = input - newRule.value;
            else if (newRule.operation === '×') output = input * newRule.value;

            outs.push(output);
        }

        setInputs(ins);
        setOutputs(outs);

        // Randomly hide one output
        setMissingIndex(Math.floor(Math.random() * numPairs));
        setUserAnswer("");
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!userAnswer) return;

        const val = parseInt(userAnswer);
        const correctOutput = outputs[missingIndex];

        if (val === correctOutput) {
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
                <h2 className="text-2xl font-bold text-slate-800">Flow Diagrams</h2>
                <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm">
                    Streak: {streak} 🔥
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-8">
                <p className="text-slate-500 mb-8 text-lg text-center">Find the missing output</p>

                {/* Flow Machine */}
                <div className="flex justify-center items-center gap-4 mb-12">
                    <div className="text-slate-400 font-bold">Input</div>
                    <ArrowRight className="text-slate-300" />
                    <div className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-2xl shadow-lg">
                        {rule.display}
                    </div>
                    <ArrowRight className="text-slate-300" />
                    <div className="text-slate-400 font-bold">Output</div>
                </div>

                {/* Input/Output Table */}
                <div className="max-w-md mx-auto">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center font-bold text-slate-600">Input</div>
                        <div></div>
                        <div className="text-center font-bold text-slate-600">Output</div>
                    </div>

                    {inputs.map((input, idx) => (
                        <div key={idx} className="grid grid-cols-3 gap-4 mb-3 items-center">
                            <div className="text-center p-3 bg-slate-100 rounded-lg font-bold text-xl text-slate-700">
                                {input}
                            </div>
                            <ArrowRight className="mx-auto text-slate-300" />
                            {idx === missingIndex ? (
                                <form onSubmit={handleSubmit} className="relative">
                                    <input
                                        type="number"
                                        value={userAnswer}
                                        onChange={(e) => setUserAnswer(e.target.value)}
                                        disabled={isCorrect !== null}
                                        className={`w-full text-center text-xl font-bold p-3 border-2 rounded-lg outline-none transition-all ${isCorrect === true ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                                                isCorrect === false ? 'border-red-500 bg-red-50 text-red-700' :
                                                    'border-indigo-300 bg-indigo-50 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
                                            }`}
                                        placeholder="?"
                                        autoFocus
                                    />
                                    {isCorrect === null && (
                                        <button type="submit" className="hidden">Check</button>
                                    )}
                                </form>
                            ) : (
                                <div className="text-center p-3 bg-emerald-100 rounded-lg font-bold text-xl text-emerald-700">
                                    {outputs[idx]}
                                </div>
                            )}
                        </div>
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
                                {isCorrect ? "Correct!" : "Not quite."}
                            </h3>
                            <p className={`${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
                                {inputs[missingIndex]} {rule.display} = <strong>{outputs[missingIndex]}</strong>
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={generateProblem}
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-md transition-colors flex items-center gap-2"
                    >
                        Next Diagram <RefreshCw className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default FlowDiagrams;
