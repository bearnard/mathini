import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';

interface SymmetryItem {
    name: string;
    lines: number;
    display: string;
    colour: string;
}

const symmetryItems: SymmetryItem[] = [
    { name: 'square', lines: 4, display: '□', colour: 'text-indigo-600' },
    { name: 'rectangle', lines: 2, display: '▭', colour: 'text-emerald-600' },
    { name: 'equilateral triangle', lines: 3, display: '△', colour: 'text-amber-600' },
    { name: 'regular pentagon', lines: 5, display: '⬠', colour: 'text-pink-600' },
    { name: 'regular hexagon', lines: 6, display: '⬡', colour: 'text-cyan-600' },
    { name: 'isosceles triangle', lines: 1, display: '△', colour: 'text-violet-600' },
    { name: 'letter A', lines: 1, display: 'A', colour: 'text-red-600' },
    { name: 'letter H', lines: 2, display: 'H', colour: 'text-blue-600' },
    { name: 'letter X', lines: 2, display: 'X', colour: 'text-teal-600' }
];

const Symmetry = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [currentItem, setCurrentItem] = useState<SymmetryItem | null>(null);
    const [options, setOptions] = useState<number[]>([]);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const generateProblem = () => {
        const item = symmetryItems[Math.floor(Math.random() * symmetryItems.length)];
        const choices = new Set<number>([item.lines]);
        const possibleChoices = [0, 1, 2, 3, 4, 5, 6];

        while (choices.size < 4) {
            choices.add(possibleChoices[Math.floor(Math.random() * possibleChoices.length)]);
        }

        setCurrentItem(item);
        setOptions(Array.from(choices).sort(() => Math.random() - 0.5));
        setSelectedOption(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleCheck = (val: number) => {
        if (selectedOption !== null || currentItem === null) return;

        setSelectedOption(val);

        if (val === currentItem.lines) {
            setIsCorrect(true);
            setStreak(s => s + 1);
            triggerConfetti();
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    const formatLines = (count: number) => `${count} line${count === 1 ? '' : 's'}`;

    const LearnContent = () => {
        const steps = [
            {
                title: 'What is symmetry?',
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">A shape has <strong>line symmetry</strong> if one half is a mirror image of the other half.</p>
                        <div className="relative bg-slate-50 p-6 rounded-xl inline-flex items-center justify-center min-w-56">
                            <div className="text-7xl font-bold text-indigo-600">♡</div>
                            <div className="absolute top-4 bottom-4 w-1 bg-indigo-400 rounded-full border border-indigo-200 border-dashed" />
                        </div>
                        <p className="text-slate-500">The dashed line shows where the heart can fold exactly in half.</p>
                    </div>
                )
            },
            {
                title: 'Counting lines',
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Some shapes have more than one line of symmetry. Count every different fold line that matches both sides.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                            <div className="bg-indigo-50 p-5 rounded-xl">
                                <div className="text-6xl text-indigo-600 mb-2">□</div>
                                <p className="font-bold text-indigo-900">Square</p>
                                <p className="text-indigo-700">4 lines</p>
                            </div>
                            <div className="bg-emerald-50 p-5 rounded-xl">
                                <div className="text-6xl text-emerald-600 mb-2">▭</div>
                                <p className="font-bold text-emerald-900">Rectangle</p>
                                <p className="text-emerald-700">2 lines</p>
                            </div>
                            <div className="bg-amber-50 p-5 rounded-xl">
                                <div className="text-6xl text-amber-600 mb-2">△</div>
                                <p className="font-bold text-amber-900">Equilateral triangle</p>
                                <p className="text-amber-700">3 lines</p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: 'Reflections',
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">A <strong>reflection</strong> is a mirror image. It flips a shape over a mirror line without changing its size.</p>
                        <div className="flex items-center justify-center gap-6 bg-slate-50 p-6 rounded-xl max-w-lg mx-auto">
                            <div className="text-6xl">🦋</div>
                            <div className="h-24 w-1 bg-slate-300 rounded-full" />
                            <div className="text-6xl scale-x-[-1]">🦋</div>
                        </div>
                        <p className="text-slate-500">The reflected image is the same distance from the mirror line on the opposite side.</p>
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
                            <div key={i} className={cn('w-2 h-2 rounded-full transition-colors', i === learnStep ? 'bg-indigo-600' : 'bg-slate-200')} />
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
                        {learnStep === steps.length - 1 ? 'Start Practice' : 'Next'}
                    </Button>
                </div>
            </Card>
        );
    };

    return (
        <TopicContainer
            title="Symmetry"
            subtitle="Lines of symmetry and reflections"
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
                        <p className="text-slate-500 text-lg">How many lines of symmetry does this have?</p>

                        {currentItem !== null ? (
                            <div className="space-y-4">
                                <div className={cn('text-8xl md:text-9xl font-bold leading-none', currentItem.colour)}>{currentItem.display}</div>
                                <p className="text-2xl font-bold text-slate-800 capitalize">{currentItem.name}</p>
                            </div>
                        ) : null}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {options.map((opt, idx) => {
                                let variant: 'outline' | 'success' | 'danger' = 'outline';
                                if (selectedOption !== null && currentItem !== null) {
                                    if (opt === currentItem.lines) variant = 'success';
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
                                        {formatLines(opt)}
                                    </Button>
                                );
                            })}
                        </div>
                    </Card>

                    <div className="h-24">
                        <Feedback
                            isCorrect={isCorrect}
                            correctMessage={currentItem === null ? 'Correct!' : `Correct! A ${currentItem.name} has ${formatLines(currentItem.lines)} of symmetry.`}
                            incorrectMessage={currentItem === null ? 'Not quite.' : `Not quite. A ${currentItem.name} has ${formatLines(currentItem.lines)} of symmetry.`}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default Symmetry;
