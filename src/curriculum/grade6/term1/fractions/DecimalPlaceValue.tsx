import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';
import { Hash } from 'lucide-react';

const DecimalPlaceValue = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [number, setNumber] = useState<number>(0);
    const [targetDigitIndex, setTargetDigitIndex] = useState<number>(0);
    const [options, setOptions] = useState<number[]>([]);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const generateProblem = () => {
        const wholeNum = Math.floor(Math.random() * 200);
        const decimal = Math.floor(Math.random() * 100);
        const newNum = parseFloat(`${wholeNum}.${decimal.toString().padStart(2, '0')}`);
        setNumber(newNum);

        const numStr = newNum.toString();
        const dotIndex = numStr.indexOf('.');

        const allDigits = numStr.replace('.', '');
        const digitIdx = Math.floor(Math.random() * allDigits.length);

        setTargetDigitIndex(digitIdx);

        const digit = parseInt(allDigits[digitIdx]);
        const digitsBeforeDot = dotIndex;
        let correctValue = 0;

        if (digitIdx < digitsBeforeDot) {
            const positionFromRight = digitsBeforeDot - 1 - digitIdx;
            correctValue = digit * Math.pow(10, positionFromRight);
        } else {
            const positionAfterDot = digitIdx - digitsBeforeDot;
            correctValue = digit / Math.pow(10, positionAfterDot + 1);
        }

        const distractors = new Set<number>();
        distractors.add(correctValue);

        while (distractors.size < 4) {
            const type = Math.random();
            let val;

            if (type < 0.33) {
                val = digit;
            } else if (type < 0.66) {
                val = digit / Math.pow(10, Math.floor(Math.random() * 3) + 1);
            } else {
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
            triggerConfetti();
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

    let highlightedIndex = targetDigitIndex;
    if (targetDigitIndex >= dotIndex) {
        highlightedIndex = targetDigitIndex + 1;
    }

    const LearnContent = () => {
        const steps = [
            {
                title: "Decimal Numbers",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Decimals help us write numbers smaller than one.</p>
                        <div className="flex justify-center gap-1 font-mono text-4xl font-bold">
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-indigo-100 w-12 h-16 flex items-center justify-center rounded-lg text-indigo-800">3</div>
                                <span className="text-xs text-slate-400 font-sans font-normal">Ones</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-slate-200 w-6 h-16 flex items-center justify-center rounded-lg text-slate-800">.</div>
                                <span className="text-xs text-slate-400 font-sans font-normal">Point</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-indigo-50 w-12 h-16 flex items-center justify-center rounded-lg text-indigo-800">5</div>
                                <span className="text-xs text-slate-400 font-sans font-normal">Tenths</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-indigo-50 w-12 h-16 flex items-center justify-center rounded-lg text-indigo-800">2</div>
                                <span className="text-xs text-slate-400 font-sans font-normal">Hundredths</span>
                            </div>
                        </div>
                        <p className="text-slate-500">3.52 = 3 + 0.5 + 0.02</p>
                    </div>
                )
            },
            {
                title: "Place Value After the Decimal",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Each position after the decimal point has a special value.</p>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 inline-block">
                            <div className="text-4xl font-bold text-slate-800 mb-4">12.34</div>
                            <div className="grid grid-cols-2 gap-4 text-left text-sm text-slate-500">
                                <div>
                                    <p><strong className="text-indigo-600">1</strong>0 (Tens)</p>
                                    <p><strong className="text-indigo-600">2</strong> (Ones)</p>
                                </div>
                                <div>
                                    <p><strong className="text-emerald-600">3</strong> (0.3 = Tenths)</p>
                                    <p><strong className="text-emerald-600">4</strong> (0.04 = Hundredths)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        ];

        return (
            <Card className="p-8 space-y-8">
                <h2 className="text-2xl font-bold text-slate-800">{steps[learnStep].title}</h2>
                {steps[learnStep].content}

                <div className="flex justify-between pt-8 border-t border-slate-100">
                    <Button
                        variant="secondary"
                        disabled={learnStep === 0}
                        onClick={() => setLearnStep(prev => prev - 1)}
                    >
                        Previous
                    </Button>
                    <div className="flex gap-1 items-center">
                        {steps.map((_, i) => (
                            <div key={i} className={cn("w-2 h-2 rounded-full transition-colors", i === learnStep ? "bg-indigo-600" : "bg-slate-200")} />
                        ))}
                    </div>
                    <Button
                        onClick={() => {
                            if (learnStep < steps.length - 1) {
                                setLearnStep(prev => prev + 1);
                            } else {
                                setMode('practice');
                            }
                        }}
                    >
                        {learnStep === steps.length - 1 ? "Start Practice" : "Next"}
                    </Button>
                </div>
            </Card>
        );
    };

    return (
        <TopicContainer
            title="Decimal Place Value"
            subtitle="Understand the value of digits in decimal numbers"
            onModeChange={setMode}
        >
            {mode === 'learn' ? (
                <LearnContent />
            ) : (
                <div className="space-y-8">
                    <div className="flex justify-end">
                        <Streak count={streak} />
                    </div>

                    <Card className="p-8 text-center space-y-8">
                        <div className="flex items-center justify-center gap-2 text-slate-500 mb-4">
                            <Hash className="w-5 h-5" />
                            <p className="text-lg">What is the value of the highlighted digit?</p>
                        </div>

                        <div className="text-5xl md:text-6xl font-mono font-bold tracking-wider mb-12 text-slate-800">
                            {numStr.split('').map((d, i) => (
                                <span key={i} className={cn(
                                    "inline-block transition-all",
                                    i === highlightedIndex ? 'text-indigo-600 transform -translate-y-2 scale-110' : ''
                                )}>
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

                                let variant: 'outline' | 'success' | 'danger' | 'secondary' = 'outline';

                                if (selectedOption !== null) {
                                    if (Math.abs(opt - correctValue) < 0.0001) {
                                        variant = 'success';
                                    } else if (opt === selectedOption) {
                                        variant = 'danger';
                                    } else {
                                        variant = 'secondary';
                                    }
                                }

                                return (
                                    <Button
                                        key={idx}
                                        onClick={() => handleCheck(opt)}
                                        disabled={selectedOption !== null}
                                        variant={variant}
                                        className="py-6 text-xl font-mono"
                                    >
                                        {opt}
                                    </Button>
                                );
                            })}
                        </div>
                    </Card>

                    <div className="h-24">
                        <Feedback
                            isCorrect={isCorrect}
                            correctMessage={`Correct! The digit is in the ${getPlaceName(targetDigitIndex)} place.`}
                            incorrectMessage={`Not quite. The digit is in the ${getPlaceName(targetDigitIndex)} place.`}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default DecimalPlaceValue;
