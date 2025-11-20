import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

const LargeNumbers = () => {
    const [number, setNumber] = useState<number>(0);
    const [targetDigitIndex, setTargetDigitIndex] = useState<number>(0);
    const [options, setOptions] = useState<number[]>([]);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    const generateProblem = () => {
        // Generate number between 10,000,000 and 999,999,999 (9 digits)
        const newNum = Math.floor(Math.random() * 900000000) + 100000000;
        setNumber(newNum);

        // Pick a random digit index (0 to 8)
        const digitIdx = Math.floor(Math.random() * 9);
        setTargetDigitIndex(digitIdx);

        // Calculate correct value
        const digit = parseInt(newNum.toString().split('').reverse().join('')[digitIdx]);
        const correctValue = digit * Math.pow(10, digitIdx);

        // Generate distractors
        const distractors = new Set<number>();
        distractors.add(correctValue);

        while (distractors.size < 4) {
            const type = Math.random();
            let val;

            if (type < 0.33) {
                // Same digit, random power of 10
                const randomPower = Math.floor(Math.random() * 9);
                val = digit * Math.pow(10, randomPower);
            } else if (type < 0.66) {
                // Random digit (1-9), same power
                const randomDigit = Math.floor(Math.random() * 9) + 1;
                val = randomDigit * Math.pow(10, digitIdx);
            } else {
                // Face value
                val = digit;
            }

            if (val !== correctValue && val > 0) {
                distractors.add(val);
            }
            if (distractors.size < 4 && Math.random() < 0.1) {
                distractors.add(Math.floor(Math.random() * 1000000));
            }
        }

        setOptions(Array.from(distractors).sort((a, b) => a - b));
        setSelectedOption(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleCheck = (val: number) => {
        if (selectedOption !== null) return;

        setSelectedOption(val);

        const digit = parseInt(number.toString().split('').reverse().join('')[targetDigitIndex]);
        const correctValue = digit * Math.pow(10, targetDigitIndex);

        if (val === correctValue) {
            setIsCorrect(true);
            setStreak(s => s + 1);
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    const getPlaceName = (index: number) => {
        const names = [
            "Ones", "Tens", "Hundreds",
            "Thousands", "Ten Thousands", "Hundred Thousands",
            "Millions", "Ten Millions", "Hundred Millions"
        ];
        return names[index];
    };

    const formatNumber = (num: number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    const digitStr = number.toString();
    const highlightedIndex = digitStr.length - 1 - targetDigitIndex;

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Large Numbers Challenge</h2>
                <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm">
                    Streak: {streak} 🔥
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center mb-8">
                <p className="text-slate-500 mb-4 text-lg">What is the value of the highlighted digit?</p>

                <div className="text-4xl md:text-6xl font-mono font-bold tracking-wider mb-8 text-slate-800 overflow-x-auto pb-4">
                    {digitStr.split('').map((d, i) => (
                        <span key={i} className={`inline-block transition-all ${i === highlightedIndex ? 'text-indigo-600 transform -translate-y-2 scale-110' : ''}`}>
                            {d}
                            {(digitStr.length - 1 - i) % 3 === 0 && i !== digitStr.length - 1 ? <span className="mx-1 md:mx-2"> </span> : ''}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {options.map((opt, idx) => {
                        let btnClass = "p-4 md:p-6 rounded-xl text-lg md:text-xl font-bold border-2 transition-all hover:scale-105 ";
                        if (selectedOption === null) {
                            btnClass += "bg-white border-slate-200 hover:border-indigo-400 hover:shadow-md text-slate-700";
                        } else {
                            const digit = parseInt(number.toString().split('').reverse().join('')[targetDigitIndex]);
                            const correctValue = digit * Math.pow(10, targetDigitIndex);

                            if (opt === correctValue) {
                                btnClass += "bg-emerald-100 border-emerald-500 text-emerald-700";
                            } else if (opt === selectedOption) {
                                btnClass += "bg-red-100 border-red-500 text-red-700";
                            } else {
                                btnClass += "bg-slate-50 border-slate-100 text-slate-400 opacity-50";
                            }
                        }

                        return (
                            <button
                                key={idx}
                                onClick={() => handleCheck(opt)}
                                disabled={selectedOption !== null}
                                className={btnClass}
                            >
                                {formatNumber(opt)}
                            </button>
                        );
                    })}
                </div>
            </div>

            {selectedOption !== null && (
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
                                The digit is in the <strong>{getPlaceName(targetDigitIndex)}</strong> place.
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={generateProblem}
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-md transition-colors flex items-center gap-2"
                    >
                        Next Number <RefreshCw className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default LargeNumbers;
