import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';


type ProblemType = 'area' | 'perimeter';
type ButtonVariant = 'outline' | 'success' | 'danger';

const AreaPerimeter = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [length, setLength] = useState<number>(0);
    const [breadth, setBreadth] = useState<number>(0);
    const [problemType, setProblemType] = useState<ProblemType>('area');
    const [options, setOptions] = useState<number[]>([]);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const getAnswer = (l: number, b: number, type: ProblemType) => {
        return type === 'area' ? l * b : 2 * (l + b);
    };

    const getUnit = (type: ProblemType) => {
        return type === 'area' ? 'cm²' : 'cm';
    };

    const buildOptions = (l: number, b: number, type: ProblemType) => {
        const correctAnswer = getAnswer(l, b, type);
        const distractors = new Set<number>();
        distractors.add(correctAnswer);

        const possibleDistractors = type === 'area'
            ? [2 * (l + b), l + b, l * b + l, l * b + b, Math.max(1, l * b - l)]
            : [l * b, l + b, 2 * l + b, l + 2 * b, Math.max(1, 2 * (l + b) - 2)];

        possibleDistractors.forEach(value => {
            if (value > 0 && value !== correctAnswer && distractors.size < 4) {
                distractors.add(value);
            }
        });

        while (distractors.size < 4) {
            const offset = Math.floor(Math.random() * 9) + 1;
            const sign = Math.random() < 0.5 ? -1 : 1;
            const value = correctAnswer + sign * offset;
            if (value > 0 && value !== correctAnswer) {
                distractors.add(value);
            }
        }

        return Array.from(distractors).sort((a, b) => a - b);
    };

    const generateProblem = () => {
        const newLength = Math.floor(Math.random() * 10) + 4;
        const newBreadth = Math.random() < 0.35 ? newLength : Math.floor(Math.random() * 9) + 3;
        const newProblemType: ProblemType = Math.random() < 0.5 ? 'area' : 'perimeter';

        setLength(newLength);
        setBreadth(newBreadth);
        setProblemType(newProblemType);
        setOptions(buildOptions(newLength, newBreadth, newProblemType));
        setSelectedOption(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleCheck = (val: number) => {
        if (selectedOption !== null) return;

        setSelectedOption(val);

        const correctAnswer = getAnswer(length, breadth, problemType);
        if (val === correctAnswer) {
            setIsCorrect(true);
            setStreak(s => s + 1);
            triggerConfetti();
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    const formatFormula = () => {
        if (problemType === 'area') {
            return `${length} × ${breadth} = ${getAnswer(length, breadth, problemType)} ${getUnit(problemType)}`;
        }

        return `2 × (${length} + ${breadth}) = ${getAnswer(length, breadth, problemType)} ${getUnit(problemType)}`;
    };

    const LearnContent = () => {
        const steps = [
            {
                title: "Perimeter",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Perimeter is the distance around the outside boundary of a shape.</p>
                        <div className="bg-slate-50 p-6 rounded-xl inline-block">
                            <div className="relative mx-auto h-32 w-56 border-4 border-indigo-500 rounded-lg bg-indigo-50">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-bold text-indigo-700">length</div>
                                <div className="absolute top-1/2 -left-16 -translate-y-1/2 font-bold text-indigo-700">breadth</div>
                            </div>
                            <p className="text-slate-500 mt-6">For a rectangle: <strong>P = 2 × (l + b)</strong></p>
                            <p className="text-slate-500">Perimeter is measured in <strong>cm</strong>.</p>
                        </div>
                    </div>
                )
            },
            {
                title: "Area",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Area is the space covered inside a flat shape.</p>
                        <div className="bg-emerald-50 p-6 rounded-xl inline-block">
                            <div className="grid grid-cols-5 gap-1">
                                {Array.from({ length: 15 }).map((_, i) => (
                                    <div key={i} className="h-8 w-8 rounded bg-emerald-200 border border-emerald-300" />
                                ))}
                            </div>
                            <p className="text-slate-500 mt-6">For a rectangle: <strong>A = l × b</strong></p>
                            <p className="text-slate-500">Area is measured in <strong>cm²</strong>.</p>
                        </div>
                    </div>
                )
            },
            {
                title: "Squares and Rectangles",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">A square is a special rectangle with all sides equal.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
                            <div className="bg-amber-50 p-5 rounded-xl">
                                <div className="h-28 w-28 mx-auto bg-amber-200 border-4 border-amber-500 rounded-lg" />
                                <p className="mt-4 font-bold text-amber-800">Square: 6 cm by 6 cm</p>
                                <p className="text-slate-600">Area = 36 cm²</p>
                            </div>
                            <div className="bg-indigo-50 p-5 rounded-xl">
                                <div className="h-24 w-40 mx-auto bg-indigo-200 border-4 border-indigo-500 rounded-lg" />
                                <p className="mt-4 font-bold text-indigo-800">Rectangle: 8 cm by 5 cm</p>
                                <p className="text-slate-600">Perimeter = 26 cm</p>
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

    const correctAnswer = getAnswer(length, breadth, problemType);
    const unit = getUnit(problemType);
    const rectangleWidth = Math.max(120, length * 18);
    const rectangleHeight = Math.max(90, breadth * 16);

    return (
        <TopicContainer
            title="Area & Perimeter"
            subtitle="Measure the space and the boundary"
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
                        <p className="text-slate-500 text-lg">
                            What is the {problemType} of this {length === breadth ? 'square' : 'rectangle'}?
                        </p>

                        <div className="flex justify-center py-8 overflow-x-auto">
                            <div className="relative flex items-center justify-center" style={{ width: rectangleWidth + 80, height: rectangleHeight + 80 }}>
                                <div
                                    className="rounded-xl border-4 border-indigo-500 bg-indigo-50 shadow-inner"
                                    style={{ width: rectangleWidth, height: rectangleHeight }}
                                />
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 font-bold text-indigo-700">
                                    {length} cm
                                </div>
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 font-bold text-indigo-700">
                                    {breadth} cm
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {options.map((opt, idx) => {
                                let variant: ButtonVariant = 'outline';
                                if (selectedOption !== null) {
                                    if (opt === correctAnswer) variant = 'success';
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
                                        {opt} {unit}
                                    </Button>
                                );
                            })}
                        </div>
                    </Card>

                    <div className="h-24">
                        <Feedback
                            isCorrect={isCorrect}
                            correctMessage={`Correct! ${formatFormula()}.`}
                            incorrectMessage={`Not quite. Use ${problemType === 'area' ? 'area = l × b' : 'perimeter = 2 × (l + b)'}.`}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default AreaPerimeter;
