import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

const DecimalPlaceValue = () => {
    const [number, setNumber] = useState<number>(0);
    const [targetDigitIndex, setTargetDigitIndex] = useState<number>(0);
    const [options, setOptions] = useState<number[]>([]);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    const generateProblem = () => {
        // Generate decimal with 2 decimal places
        // e.g., 12.34, 5.67, 123.45
        const wholeNum = Math.floor(Math.random() * 200);
        const decimal = Math.floor(Math.random() * 100);
        const newNum = parseFloat(`${wholeNum}.${decimal.toString().padStart(2, '0')}`);
        setNumber(newNum);

        // Pick a digit (including decimal places)
        const numStr = newNum.toString();
        const dotIndex = numStr.indexOf('.');

        // Pick random digit
        const allDigits = numStr.replace('.', '');
        const digitIdx = Math.floor(Math.random() * allDigits.length);

        setTargetDigitIndex(digitIdx);

        // Calculate correct value
        const digit = parseInt(allDigits[digitIdx]);

        // Determine position: before decimal or after?
        const digitsBeforeDot = dotIndex;
        let correctValue = 0;

        if (digitIdx < digitsBeforeDot) {
            // Before decimal
            const positionFromRight = digitsBeforeDot - 1 - digitIdx;
            correctValue = digit * Math.pow(10, positionFromRight);
        } else {
            // After decimal
            const positionAfterDot = digitIdx - digitsBeforeDot;
            correctValue = digit / Math.pow(10, positionAfterDot + 1);
        }

        // Generate distractors
        const distractors = new Set<number>();
        distractors.add(correctValue);

        while (distractors.size < 4) {
            const type = Math.random();
            let val;

            if (type < 0.33) {
                // Face value
                val = digit;
            } else if (type < 0.66) {
                // Random decimal position
                val = digit / Math.pow(10, Math.floor(Math.random() * 3) + 1);
            } else {
                // Random whole number position
                val = digit * Math.pow(10, Math.floor(Math.random() * 3));
            }

            if (val !== correctValue && val > 0) {
                distractors.add(val);
            }
        }

        setOptions(Array.from(distractors).sort((a, b) => b - a));
        setSelectedOption(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleCheck = (val: number) => {
        if (selectedOption !== null) return;

        setSelectedOption(val);

        const numStr = number.toString();
        const dotIndex = numStr.indexOf('.');
        const allDigits = numStr.replace('.', '');
        const digit = parseInt(allDigits[targetDigitIndex]);

        const digitsBeforeDot = dotIndex;
        let correctValue = 0;

        if (targetDigitIndex < digitsBeforeDot) {
            const positionFromRight = digitsBeforeDot - 1 - targetDigitIndex;
            correctValue = digit * Math.pow(10, positionFromRight);
        } else {
            const positionAfterDot = targetDigitIndex - digitsBeforeDot;
            correctValue = digit / Math.pow(10, positionAfterDot + 1);
        }

        if (Math.abs(val - correctValue) < 0.0001) {
            setIsCorrect(true);
            setStreak(s => s + 1);
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    const getPlaceName = (idx: number) => {
        const numStr = number.toString();
        const dotIndex = numStr.indexOf('.');
        const digitsBeforeDot = dotIndex;

        if (idx < digitsBeforeDot) {
            const positionFromRight = digitsBeforeDot - 1 - idx;
            const names = ["Ones", "Tens", "Hundreds"];
            return names[positionFromRight] || "Unknown";
        } else {
            const positionAfterDot = idx - digitsBeforeDot;
            const names = ["Tenths", "Hundredths"];
            return names[positionAfterDot] || "Unknown";
        }
    };

    const numStr = number.toString();

    const dotIndex = numStr.indexOf('.');

    // Find the highlighted digit's position in the original string
    let highlightedIndex = targetDigitIndex;
    if (targetDigitIndex >= dotIndex) {
        highlightedIndex = targetDigitIndex + 1; // Account for the dot
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Decimal Place Value</h2>
                <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm">
                    Streak: {streak} 🔥
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center mb-8">
                <p className="text-slate-500 mb-4 text-lg">What is the value of the highlighted digit?</p>

                <div className="text-5xl md:text-7xl font-mono font-bold tracking-wider mb-12 text-slate-800">
                    {numStr.split('').map((d, i) => (
                        <span key={i} className={`inline-block transition-all ${i === highlightedIndex ? 'text-indigo-600 transform -translate-y-2 scale-110' : ''}`}>
                            {d}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {options.map((opt, idx) => {
                        const numStr = number.toString();
                        const dotIndex = numStr.indexOf('.');
                        const allDigits = numStr.replace('.', '');
                        const digit = parseInt(allDigits[targetDigitIndex]);

                        const digitsBeforeDot = dotIndex;
                        let correctValue = 0;

                        if (targetDigitIndex < digitsBeforeDot) {
                            const positionFromRight = digitsBeforeDot - 1 - targetDigitIndex;
                            correctValue = digit * Math.pow(10, positionFromRight);
                        } else {
                            const positionAfterDot = targetDigitIndex - digitsBeforeDot;
                            correctValue = digit / Math.pow(10, positionAfterDot + 1);
                        }

                        let btnClass = "p-4 md:p-6 rounded-xl text-lg md:text-xl font-bold border-2 transition-all hover:scale-105 ";
                        if (selectedOption === null) {
                            btnClass += "bg-white border-slate-200 hover:border-indigo-400 hover:shadow-md text-slate-700";
                        } else {
                            if (Math.abs(opt - correctValue) < 0.0001) {
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
                                {opt}
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

export default DecimalPlaceValue;
