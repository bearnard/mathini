import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';


const LargeNumbers = () => {
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
        const newNum = Math.floor(Math.random() * 900000000) + 100000000;
        setNumber(newNum);

        const digitIdx = Math.floor(Math.random() * 9);
        setTargetDigitIndex(digitIdx);

        const digit = parseInt(newNum.toString().split('').reverse().join('')[digitIdx]);
        const correctValue = digit * Math.pow(10, digitIdx);

        const distractors = new Set<number>();
        distractors.add(correctValue);

        while (distractors.size < 4) {
            const type = Math.random();
            let val;

            if (type < 0.33) {
                const randomPower = Math.floor(Math.random() * 9);
                val = digit * Math.pow(10, randomPower);
            } else if (type < 0.66) {
                const randomDigit = Math.floor(Math.random() * 9) + 1;
                val = randomDigit * Math.pow(10, digitIdx);
            } else {
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
            triggerConfetti();
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

    const LearnContent = () => {
        const steps = [
            {
                title: "Place Value",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Every digit in a number has a <strong>place</strong> and a <strong>value</strong>.</p>
                        <div className="bg-slate-50 p-6 rounded-xl inline-block">
                            <div className="flex justify-center gap-1 text-4xl font-mono font-bold mb-2">
                                <span className="text-slate-400">3</span>
                                <span className="text-slate-400">4</span>
                                <span className="text-indigo-600">5</span>
                                <span className="text-slate-400">2</span>
                            </div>
                            <p className="text-slate-500">The 5 is in the <strong>Tens</strong> place.</p>
                            <p className="text-slate-500">Its value is <strong>50</strong>.</p>
                        </div>
                    </div>
                )
            },
            {
                title: "Millions",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Large numbers are grouped by threes: Ones, Thousands, and Millions.</p>
                        <div className="grid grid-cols-3 gap-2 text-center max-w-lg mx-auto">
                            <div className="bg-indigo-100 p-2 rounded-t-lg text-indigo-800 font-bold text-xs uppercase">Millions</div>
                            <div className="bg-emerald-100 p-2 rounded-t-lg text-emerald-800 font-bold text-xs uppercase">Thousands</div>
                            <div className="bg-amber-100 p-2 rounded-t-lg text-amber-800 font-bold text-xs uppercase">Ones</div>

                            <div className="bg-indigo-50 p-4 rounded-b-lg text-2xl font-mono font-bold text-indigo-900">123</div>
                            <div className="bg-emerald-50 p-4 rounded-b-lg text-2xl font-mono font-bold text-emerald-900">456</div>
                            <div className="bg-amber-50 p-4 rounded-b-lg text-2xl font-mono font-bold text-amber-900">789</div>
                        </div>
                        <p className="text-slate-500 text-sm mt-4">123 Million, 456 Thousand, 789</p>
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
            title="Large Numbers"
            subtitle="Master place value up to 9 digits"
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
                        <p className="text-slate-500 text-lg">What is the value of the highlighted digit?</p>

                        <div className="text-4xl md:text-6xl font-mono font-bold tracking-wider mb-8 text-slate-800 overflow-x-auto pb-4 flex justify-center">
                            {digitStr.split('').map((d, i) => (
                                <span key={i} className={cn(
                                    "inline-block transition-all duration-300",
                                    i === highlightedIndex ? 'text-indigo-600 transform -translate-y-2 scale-125' : 'text-slate-300'
                                )}>
                                    {d}
                                    {(digitStr.length - 1 - i) % 3 === 0 && i !== digitStr.length - 1 ? <span className="mx-1 md:mx-2 opacity-30"> </span> : ''}
                                </span>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {options.map((opt, idx) => {
                                let variant: 'default' | 'outline' | 'success' | 'danger' = 'outline';
                                if (selectedOption !== null) {
                                    const digit = parseInt(number.toString().split('').reverse().join('')[targetDigitIndex]);
                                    const correctValue = digit * Math.pow(10, targetDigitIndex);
                                    if (opt === correctValue) variant = 'success';
                                    else if (opt === selectedOption) variant = 'danger';
                                }

                                return (
                                    <Button
                                        key={idx}
                                        onClick={() => handleCheck(opt)}
                                        disabled={selectedOption !== null}
                                        variant={variant}
                                        className="text-lg md:text-xl py-6"
                                    >
                                        {formatNumber(opt)}
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

export default LargeNumbers;
