import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';
import { Hash } from 'lucide-react';

const PlaceValue = () => {
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
        const newNum = Math.floor(Math.random() * 900000) + 100000;
        setNumber(newNum);

        const digitIdx = Math.floor(Math.random() * 6);
        setTargetDigitIndex(digitIdx);

        const digit = parseInt(newNum.toString().split('').reverse().join('')[digitIdx]);
        const correctValue = digit * Math.pow(10, digitIdx);

        const distractors = new Set<number>();
        distractors.add(correctValue);

        while (distractors.size < 4) {
            const type = Math.random();
            let val;

            if (type < 0.33) {
                const randomPower = Math.floor(Math.random() * 6);
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
                distractors.add(Math.floor(Math.random() * 10000));
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
        const names = ["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands"];
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
                        <p className="text-lg text-slate-600">The value of a digit depends on its <strong>position</strong> in the number.</p>
                        <div className="flex justify-center gap-1 font-mono text-4xl font-bold">
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-indigo-100 w-12 h-16 flex items-center justify-center rounded-lg text-indigo-800">4</div>
                                <span className="text-xs text-slate-400 font-sans font-normal">Hundreds</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-indigo-50 w-12 h-16 flex items-center justify-center rounded-lg text-indigo-800">2</div>
                                <span className="text-xs text-slate-400 font-sans font-normal">Tens</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-indigo-50 w-12 h-16 flex items-center justify-center rounded-lg text-indigo-800">7</div>
                                <span className="text-xs text-slate-400 font-sans font-normal">Ones</span>
                            </div>
                        </div>
                        <p className="text-slate-500">427 = 400 + 20 + 7</p>
                    </div>
                )
            },
            {
                title: "Large Numbers",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">We group digits by threes to make them easier to read.</p>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 inline-block">
                            <div className="text-4xl font-bold text-slate-800 mb-2">352 819</div>
                            <div className="grid grid-cols-2 gap-8 text-left text-sm text-slate-500">
                                <div>
                                    <p><strong className="text-indigo-600">3</strong>00 000 (Hundred Thousands)</p>
                                    <p><strong className="text-indigo-600">5</strong>0 000 (Ten Thousands)</p>
                                    <p><strong className="text-indigo-600">2</strong> 000 (Thousands)</p>
                                </div>
                                <div>
                                    <p><strong className="text-indigo-600">8</strong>00 (Hundreds)</p>
                                    <p><strong className="text-indigo-600">1</strong>0 (Tens)</p>
                                    <p><strong className="text-indigo-600">9</strong> (Ones)</p>
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
            title="Place Value Challenge"
            subtitle="Understand the value of digits in large numbers"
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

                        <div className="text-5xl md:text-6xl font-mono font-bold tracking-wider mb-8 text-slate-800 flex justify-center flex-wrap">
                            {digitStr.split('').map((d, i) => (
                                <span key={i} className={cn(
                                    "inline-block transition-all duration-300",
                                    i === highlightedIndex ? 'text-indigo-600 transform -translate-y-2 scale-110' : ''
                                )}>
                                    {d}
                                    {(digitStr.length - 1 - i) % 3 === 0 && i !== digitStr.length - 1 ? <span className="mx-2"> </span> : ''}
                                </span>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {options.map((opt, idx) => {
                                let variant: 'outline' | 'success' | 'danger' | 'secondary' = 'outline';

                                if (selectedOption !== null) {
                                    const digit = parseInt(number.toString().split('').reverse().join('')[targetDigitIndex]);
                                    const correctValue = digit * Math.pow(10, targetDigitIndex);

                                    if (opt === correctValue) {
                                        variant = 'success';
                                    } else if (opt === selectedOption) {
                                        variant = 'danger';
                                    } else {
                                        variant = 'secondary'; // Dimmed
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

export default PlaceValue;
