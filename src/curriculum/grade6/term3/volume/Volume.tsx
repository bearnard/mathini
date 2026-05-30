import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';


type Prism = {
    length: number;
    breadth: number;
    height: number;
};

const Volume = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [prism, setPrism] = useState<Prism>({ length: 2, breadth: 2, height: 2 });
    const [options, setOptions] = useState<number[]>([]);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const getVolume = (shape: Prism) => shape.length * shape.breadth * shape.height;

    const generateProblem = () => {
        const newPrism: Prism = {
            length: Math.floor(Math.random() * 5) + 3,
            breadth: Math.floor(Math.random() * 4) + 2,
            height: Math.floor(Math.random() * 4) + 2
        };
        const correctVolume = getVolume(newPrism);

        const choices = new Set<number>();
        choices.add(correctVolume);

        const plausible = [
            newPrism.length * newPrism.breadth,
            newPrism.length * newPrism.height,
            newPrism.breadth * newPrism.height,
            newPrism.length * newPrism.breadth * Math.max(1, newPrism.height - 1),
            newPrism.length * newPrism.breadth * (newPrism.height + 1),
            (newPrism.length + newPrism.breadth + newPrism.height) * 2,
            correctVolume + newPrism.length * newPrism.breadth,
            Math.max(1, correctVolume - newPrism.breadth * newPrism.height)
        ];

        plausible.forEach(value => {
            if (choices.size < 4 && value > 0 && value !== correctVolume) {
                choices.add(value);
            }
        });

        while (choices.size < 4) {
            const offset = (Math.floor(Math.random() * 5) - 2) * newPrism.length;
            const value = Math.max(1, correctVolume + offset + Math.floor(Math.random() * 7) - 3);
            if (value !== correctVolume) {
                choices.add(value);
            }
        }

        setPrism(newPrism);
        setOptions(Array.from(choices).sort((a, b) => a - b));
        setSelectedOption(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleCheck = (val: number) => {
        if (selectedOption !== null) return;

        setSelectedOption(val);

        const correctVolume = getVolume(prism);

        if (val === correctVolume) {
            setIsCorrect(true);
            setStreak(s => s + 1);
            triggerConfetti();
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    const UnitCubeStack = ({ shape }: { shape: Prism }) => {
        const layers = Array.from({ length: shape.height }, (_, layer) => layer);
        const rows = Array.from({ length: shape.breadth }, (_, row) => row);
        const columns = Array.from({ length: shape.length }, (_, column) => column);

        return (
            <div className="flex justify-center py-4 overflow-x-auto">
                <div className="relative h-44 w-64 md:w-80">
                    {layers.map(layer => (
                        <div
                            key={layer}
                            className="absolute grid gap-1"
                            style={{
                                gridTemplateColumns: `repeat(${shape.length}, minmax(0, 1fr))`,
                                width: `${shape.length * 1.9}rem`,
                                left: `${layer * 0.9}rem`,
                                bottom: `${layer * 1.1}rem`
                            }}
                        >
                            {rows.flatMap(row => columns.map(column => (
                                <div
                                    key={`${layer}-${row}-${column}`}
                                    className="h-6 w-6 rounded-md border border-indigo-300 bg-indigo-100 shadow-sm md:h-7 md:w-7"
                                />
                            )))}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const LearnContent = () => {
        const steps = [
            {
                title: "What is volume?",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Volume tells us how much <strong>space</strong> a solid object takes up.</p>
                        <div className="bg-slate-50 p-6 rounded-xl inline-block">
                            <div className="grid grid-cols-4 gap-2 mb-4">
                                {Array.from({ length: 12 }, (_, i) => (
                                    <div key={i} className="h-8 w-8 rounded-lg border border-indigo-300 bg-indigo-100 shadow-sm" />
                                ))}
                            </div>
                            <p className="text-slate-500">Count the unit cubes to find the volume.</p>
                            <p className="text-slate-500">This model has <strong>12 cubic units</strong>.</p>
                        </div>
                    </div>
                )
            },
            {
                title: "Cubic centimetres",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">A cube that is 1 cm long, 1 cm wide and 1 cm high has a volume of <strong>1 cm³</strong>.</p>
                        <div className="flex justify-center">
                            <div className="relative h-28 w-28 rounded-2xl border-4 border-emerald-300 bg-emerald-100 shadow-xl">
                                <span className="absolute -bottom-8 left-8 text-sm font-bold text-emerald-700">1 cm</span>
                                <span className="absolute -right-10 top-12 text-sm font-bold text-emerald-700">1 cm</span>
                                <span className="absolute left-9 top-9 text-lg font-bold text-emerald-800">1 cm³</span>
                            </div>
                        </div>
                        <p className="text-slate-500 text-sm mt-10">We use cubic units such as cm³ because volume fills three dimensions.</p>
                    </div>
                )
            },
            {
                title: "Length × breadth × height",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">For a rectangular prism, multiply the three dimensions.</p>
                        <div className="bg-indigo-50 p-6 rounded-xl max-w-md mx-auto">
                            <p className="text-xl font-bold text-indigo-900 mb-4">Volume = length × breadth × height</p>
                            <p className="text-slate-600">Example: 4 cm × 3 cm × 2 cm</p>
                            <p className="text-3xl font-bold text-indigo-700 mt-2">= 24 cm³</p>
                        </div>
                        <p className="text-slate-500 text-sm">This is the same as counting 24 unit cubes.</p>
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

    const correctVolume = getVolume(prism);

    return (
        <TopicContainer
            title="Volume"
            subtitle="Counting cubes and measuring space"
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
                        <p className="text-slate-500 text-lg">What is the volume of this rectangular prism?</p>

                        <UnitCubeStack shape={prism} />

                        <div className="bg-slate-50 p-5 rounded-xl max-w-lg mx-auto">
                            <p className="text-slate-600 text-lg">
                                length = <strong>{prism.length} cm</strong>, breadth = <strong>{prism.breadth} cm</strong>, height = <strong>{prism.height} cm</strong>
                            </p>
                            <p className="text-slate-500 text-sm mt-2">Volume = length × breadth × height</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {options.map((opt, idx) => {
                                let variant: 'default' | 'outline' | 'success' | 'danger' = 'outline';
                                if (selectedOption !== null) {
                                    if (opt === correctVolume) variant = 'success';
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
                                        {opt} cm³
                                    </Button>
                                );
                            })}
                        </div>
                    </Card>

                    <div className="h-24">
                        <Feedback
                            isCorrect={isCorrect}
                            correctMessage={`Correct! ${prism.length} × ${prism.breadth} × ${prism.height} = ${correctVolume} cm³.`}
                            incorrectMessage={`Not quite. Multiply ${prism.length} × ${prism.breadth} × ${prism.height} to get ${correctVolume} cm³.`}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default Volume;
