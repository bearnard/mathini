import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';


type MassProblem = {
    question: string;
    answer: number;
    unit: 'g' | 'kg' | 't';
    correctMessage: string;
    incorrectMessage: string;
};

const MassG6 = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [problem, setProblem] = useState<MassProblem>({
        question: 'How many grams are in 2 kg?',
        answer: 2000,
        unit: 'g',
        correctMessage: 'Correct! 1 kg = 1 000 g, so 2 kg = 2 000 g.',
        incorrectMessage: 'Not quite. Remember: 1 kg = 1 000 g.'
    });
    const [options, setOptions] = useState<number[]>([]);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const formatNumber = (num: number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    const shuffle = (values: number[]) => {
        return [...values].sort(() => Math.random() - 0.5);
    };

    const buildOptions = (answer: number, unit: MassProblem['unit']) => {
        const distractors = new Set<number>();
        distractors.add(answer);

        const changes = unit === 't' || answer < 20 ? [1, 2, 3, 4, 5] : [100, 500, 1000, 2000];
        while (distractors.size < 4) {
            const change = changes[Math.floor(Math.random() * changes.length)];
            const direction = Math.random() < 0.5 ? -1 : 1;
            const candidate = answer + (change * direction);

            if (candidate > 0 && candidate !== answer) {
                distractors.add(candidate);
            }
        }

        return shuffle(Array.from(distractors));
    };

    const generateProblem = () => {
        const problemType = Math.floor(Math.random() * 6);
        let nextProblem: MassProblem;

        switch (problemType) {
            case 0: {
                const kilograms = Math.floor(Math.random() * 8) + 2;
                const grams = kilograms * 1000;
                nextProblem = {
                    question: `How many grams are in ${kilograms} kg?`,
                    answer: grams,
                    unit: 'g',
                    correctMessage: `Correct! ${kilograms} kg = ${formatNumber(grams)} g because 1 kg = 1 000 g.`,
                    incorrectMessage: 'Not quite. Multiply kilograms by 1 000 to change kg to g.'
                };
                break;
            }
            case 1: {
                const kilograms = Math.floor(Math.random() * 8) + 2;
                const grams = kilograms * 1000;
                nextProblem = {
                    question: `${formatNumber(grams)} g is equal to how many kilograms?`,
                    answer: kilograms,
                    unit: 'kg',
                    correctMessage: `Correct! ${formatNumber(grams)} g = ${kilograms} kg because 1 000 g = 1 kg.`,
                    incorrectMessage: 'Not quite. Divide grams by 1 000 to change g to kg.'
                };
                break;
            }
            case 2: {
                const tonnes = Math.floor(Math.random() * 4) + 1;
                const kilograms = tonnes * 1000;
                nextProblem = {
                    question: `How many kilograms are in ${tonnes} t?`,
                    answer: kilograms,
                    unit: 'kg',
                    correctMessage: `Correct! ${tonnes} t = ${formatNumber(kilograms)} kg because 1 t = 1 000 kg.`,
                    incorrectMessage: 'Not quite. Multiply tonnes by 1 000 to change t to kg.'
                };
                break;
            }
            case 3: {
                const tonnes = Math.floor(Math.random() * 4) + 1;
                const kilograms = tonnes * 1000;
                nextProblem = {
                    question: `${formatNumber(kilograms)} kg is equal to how many tonnes?`,
                    answer: tonnes,
                    unit: 't',
                    correctMessage: `Correct! ${formatNumber(kilograms)} kg = ${tonnes} t because 1 000 kg = 1 t.`,
                    incorrectMessage: 'Not quite. Divide kilograms by 1 000 to change kg to t.'
                };
                break;
            }
            case 4: {
                const kilograms = Math.floor(Math.random() * 5) + 1;
                const extraGrams = (Math.floor(Math.random() * 8) + 1) * 100;
                const totalGrams = (kilograms * 1000) + extraGrams;
                nextProblem = {
                    question: `A kitchen scale shows ${kilograms} kg and ${extraGrams} g. What is the total mass in grams?`,
                    answer: totalGrams,
                    unit: 'g',
                    correctMessage: `Correct! ${kilograms} kg = ${formatNumber(kilograms * 1000)} g, then add ${extraGrams} g.`,
                    incorrectMessage: 'Not quite. First change kilograms to grams, then add the extra grams.'
                };
                break;
            }
            default: {
                const bagMass = Math.floor(Math.random() * 4) + 2;
                const addedGrams = (Math.floor(Math.random() * 7) + 2) * 100;
                const totalGrams = (bagMass * 1000) + addedGrams;
                nextProblem = {
                    question: `A bag of mealie meal has a mass of ${bagMass} kg. Thabo adds ${addedGrams} g more. What is the total mass in grams?`,
                    answer: totalGrams,
                    unit: 'g',
                    correctMessage: `Correct! ${bagMass} kg = ${formatNumber(bagMass * 1000)} g, plus ${addedGrams} g.`,
                    incorrectMessage: 'Not quite. Convert the kilograms to grams before adding.'
                };
            }
        }

        setProblem(nextProblem);
        setOptions(buildOptions(nextProblem.answer, nextProblem.unit));
        setSelectedOption(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleCheck = (val: number) => {
        if (selectedOption !== null) return;

        setSelectedOption(val);

        if (val === problem.answer) {
            setIsCorrect(true);
            setStreak(s => s + 1);
            triggerConfetti();
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    const LearnContent = () => {
        const steps = [
            {
                title: 'Mass Units',
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Mass tells us how heavy something is. We use <strong>grams</strong>, <strong>kilograms</strong> and <strong>tonnes</strong>.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                            <div className="bg-amber-50 p-4 rounded-xl">
                                <div className="text-3xl font-bold text-amber-700">g</div>
                                <p className="text-slate-600">small masses, like a pencil</p>
                            </div>
                            <div className="bg-indigo-50 p-4 rounded-xl">
                                <div className="text-3xl font-bold text-indigo-700">kg</div>
                                <p className="text-slate-600">everyday masses, like a school bag</p>
                            </div>
                            <div className="bg-emerald-50 p-4 rounded-xl">
                                <div className="text-3xl font-bold text-emerald-700">t</div>
                                <p className="text-slate-600">very heavy masses, like a truck</p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: 'Converting Mass',
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Use the conversion facts to move between units.</p>
                        <div className="bg-slate-50 p-6 rounded-xl inline-block space-y-3">
                            <p className="text-2xl font-bold text-slate-800">1 kg = 1 000 g</p>
                            <p className="text-2xl font-bold text-slate-800">1 t = 1 000 kg</p>
                        </div>
                        <p className="text-slate-500">Multiply by 1 000 to change to a smaller unit. Divide by 1 000 to change to a larger unit.</p>
                    </div>
                )
            },
            {
                title: 'Reading Scales',
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Look carefully at the unit and the size of each mark on a scale.</p>
                        <div className="bg-slate-50 p-6 rounded-xl max-w-lg mx-auto">
                            <div className="flex justify-between items-end text-sm text-slate-500 mb-2">
                                <span>0 kg</span>
                                <span>1 kg</span>
                                <span>2 kg</span>
                                <span>3 kg</span>
                            </div>
                            <div className="relative h-4 bg-slate-200 rounded-full">
                                <div className="absolute left-0 top-0 h-4 w-1/2 bg-indigo-500 rounded-full" />
                                <div className="absolute left-1/2 -top-2 w-1 h-8 bg-indigo-800 rounded" />
                            </div>
                            <p className="mt-6 text-slate-600">Halfway between 1 kg and 2 kg is <strong>1,5 kg</strong>, or <strong>1 500 g</strong>.</p>
                        </div>
                    </div>
                )
            },
            {
                title: 'Solving Problems',
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">For mass problems, convert first, then calculate.</p>
                        <div className="bg-indigo-50 p-6 rounded-xl max-w-lg mx-auto text-left space-y-3">
                            <p className="font-semibold text-indigo-900">Example: 2 kg + 750 g</p>
                            <p className="text-slate-600">2 kg = 2 000 g</p>
                            <p className="text-slate-600">2 000 g + 750 g = <strong>2 750 g</strong></p>
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
            title="Mass"
            subtitle="Grams, kilograms and tonnes"
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
                        <p className="text-slate-500 text-lg">Choose the correct answer.</p>

                        <div className="bg-slate-50 p-6 rounded-xl text-2xl md:text-3xl font-bold text-slate-800">
                            {problem.question}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {options.map((opt, idx) => {
                                let variant: 'default' | 'outline' | 'success' | 'danger' = 'outline';
                                if (selectedOption !== null) {
                                    if (opt === problem.answer) variant = 'success';
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
                                        {formatNumber(opt)} {problem.unit}
                                    </Button>
                                );
                            })}
                        </div>
                    </Card>

                    <div className="h-24">
                        <Feedback
                            isCorrect={isCorrect}
                            correctMessage={problem.correctMessage}
                            incorrectMessage={problem.incorrectMessage}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default MassG6;
