import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';

const EquivalentFractions = () => {
    const [targetNum, setTargetNum] = useState<number>(1);
    const [targetDen, setTargetDen] = useState<number>(2);
    const [userNum, setUserNum] = useState<string>("");
    const [userDen, setUserDen] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    const generateProblem = () => {
        // Generate simple fractions: 1/2, 1/3, 1/4, 2/3, 3/4, 2/5, 3/5, 4/5
        const fractions = [
            [1, 2], [1, 3], [1, 4], [2, 3], [3, 4],
            [2, 5], [3, 5], [4, 5], [1, 6], [5, 6]
        ];

        const [num, den] = fractions[Math.floor(Math.random() * fractions.length)];

        setTargetNum(num);
        setTargetDen(den);
        setUserNum("");
        setUserDen("");
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!userNum || !userDen) return;

        const uNum = parseInt(userNum);
        const uDen = parseInt(userDen);

        // Check if equivalent: targetNum/targetDen = uNum/uDen
        // Cross multiply: targetNum * uDen = uNum * targetDen
        if (targetNum * uDen === uNum * targetDen && uNum > 0 && uDen > 0) {
            setIsCorrect(true);
            setStreak(s => s + 1);
            triggerConfetti();
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    // SVG Fraction Bar
    const renderFractionBar = (num: number, den: number, color: string) => {
        const parts = [];
        for (let i = 0; i < den; i++) {
            parts.push(
                <rect
                    key={i}
                    x={i * (300 / den)}
                    y={0}
                    width={300 / den - 2}
                    height={50}
                    fill={i < num ? color : '#f1f5f9'}
                    stroke="#cbd5e1"
                    strokeWidth={2}
                    rx={4}
                />
            );
        }
        return (
            <svg width="100%" height="50" viewBox="0 0 300 50" className="mx-auto max-w-[300px]">
                {parts}
            </svg>
        );
    };

    return (
        <div className="max-w-2xl mx-auto p-4 md:p-6 space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-800">Equivalent Fractions</h2>
                <Streak count={streak} />
            </div>

            <Card className="p-8 text-center space-y-8">
                <p className="text-slate-500 text-lg">Find an equivalent fraction</p>

                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 text-5xl font-black text-indigo-600">
                        <span>{targetNum}</span>
                        <span className="text-slate-300 font-light">/</span>
                        <span>{targetDen}</span>
                    </div>
                    {renderFractionBar(targetNum, targetDen, '#6366f1')}
                </div>

                <div className="flex items-center justify-center gap-4 md:gap-8">
                    <span className="text-4xl text-slate-300 font-light">=</span>

                    <form onSubmit={handleSubmit} className="flex items-center gap-2">
                        <input
                            type="number"
                            min="1"
                            max="20"
                            value={userNum}
                            onChange={(e) => setUserNum(e.target.value)}
                            disabled={isCorrect !== null}
                            className={cn(
                                "w-20 h-20 text-center text-3xl font-bold border-2 rounded-xl outline-none transition-all",
                                isCorrect === true ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                                    isCorrect === false ? 'border-red-500 bg-red-50 text-red-700' :
                                        'border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
                            )}
                            placeholder="?"
                            autoFocus
                        />
                        <span className="text-4xl text-slate-300 font-light">/</span>
                        <input
                            type="number"
                            min="1"
                            max="20"
                            value={userDen}
                            onChange={(e) => setUserDen(e.target.value)}
                            disabled={isCorrect !== null}
                            className={cn(
                                "w-20 h-20 text-center text-3xl font-bold border-2 rounded-xl outline-none transition-all",
                                isCorrect === true ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                                    isCorrect === false ? 'border-red-500 bg-red-50 text-red-700' :
                                        'border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
                            )}
                            placeholder="?"
                        />
                        {isCorrect === null && (
                            <Button type="submit" className="hidden">Check</Button>
                        )}
                    </form>
                </div>

                {userNum && userDen && parseInt(userNum) > 0 && parseInt(userDen) > 0 && isCorrect === null && (
                    <div className="animate-in fade-in slide-in-from-bottom-2">
                        {renderFractionBar(parseInt(userNum), parseInt(userDen), '#10b981')}
                    </div>
                )}

                <div className="bg-slate-50 p-4 rounded-xl">
                    <p className="text-sm text-slate-500 font-medium">
                        💡 Hint: Multiply or divide both the numerator and denominator by the same number
                    </p>
                </div>
            </Card>

            <div className="h-24"> {/* Spacer for layout stability */}
                <Feedback
                    isCorrect={isCorrect}
                    correctMessage={`${targetNum}/${targetDen} is equal to ${userNum}/${userDen}`}
                    incorrectMessage={`Those fractions are not equivalent. Try multiplying ${targetNum}/${targetDen} by 2, 3, or 4.`}
                    onNext={generateProblem}
                />
            </div>
        </div>
    );
};

export default EquivalentFractions;
