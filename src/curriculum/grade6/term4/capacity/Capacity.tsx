import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';


type CapacityProblem = {
    question: string;
    answer: string;
    explanation: string;
    options: string[];
};

const Capacity = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [problem, setProblem] = useState<CapacityProblem>({
        question: '',
        answer: '',
        explanation: '',
        options: []
    });
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const shuffleOptions = (values: string[]) => {
        return [...values].sort(() => Math.random() - 0.5);
    };

    const generateProblem = () => {
        const problemType = Math.floor(Math.random() * 6);
        let nextProblem: CapacityProblem;

        if (problemType === 0) {
            const litres = Math.floor(Math.random() * 5) + 1;
            const answer = `${litres * 1000} ml`;
            nextProblem = {
                question: `How many ml are in ${litres} l?`,
                answer,
                explanation: `1 l = 1000 ml, so ${litres} l = ${litres * 1000} ml.`,
                options: shuffleOptions([answer, `${litres * 100} ml`, `${litres + 1000} ml`, `${litres * 1000} l`])
            };
        } else if (problemType === 1) {
            const kilolitres = Math.floor(Math.random() * 4) + 1;
            const answer = `${kilolitres * 1000} l`;
            nextProblem = {
                question: `How many litres are in ${kilolitres} kl?`,
                answer,
                explanation: `1 kl = 1000 l, so ${kilolitres} kl = ${kilolitres * 1000} l.`,
                options: shuffleOptions([answer, `${kilolitres * 100} l`, `${kilolitres * 1000} ml`, `${kilolitres + 1000} l`])
            };
        } else if (problemType === 2) {
            const litres = Math.floor(Math.random() * 3) + 1;
            const millilitres = (Math.floor(Math.random() * 3) + 1) * 250;
            const answer = `${litres * 1000 + millilitres} ml`;
            nextProblem = {
                question: `A jug contains ${litres} l and ${millilitres} ml. How many ml is that altogether?`,
                answer,
                explanation: `${litres} l = ${litres * 1000} ml, then add ${millilitres} ml.`,
                options: shuffleOptions([answer, `${litres * 100 + millilitres} ml`, `${litres * 1000 - millilitres} ml`, `${litres * 1000 + millilitres + 100} ml`])
            };
        } else if (problemType === 3) {
            const litres = Math.floor(Math.random() * 6) + 2;
            const millilitres = litres * 1000;
            const answer = `${litres} l`;
            nextProblem = {
                question: `How many litres are in ${millilitres} ml?`,
                answer,
                explanation: `1000 ml = 1 l, so ${millilitres} ml = ${litres} l.`,
                options: shuffleOptions([answer, `${litres * 10} l`, `${litres} ml`, `${litres * 1000} l`])
            };
        } else if (problemType === 4) {
            const markSize = 250;
            const marks = Math.floor(Math.random() * 5) + 2;
            const answer = `${marks * markSize} ml`;
            nextProblem = {
                question: `A measuring jug has marks every ${markSize} ml. The water reaches mark number ${marks} above 0. What is the reading?`,
                answer,
                explanation: `${marks} marks of ${markSize} ml each gives ${marks * markSize} ml.`,
                options: shuffleOptions([answer, `${marks * 100} ml`, `${(marks + 1) * markSize} ml`, `${marks * markSize} l`])
            };
        } else {
            nextProblem = {
                question: 'A bottle can hold 2 l when it is full. What does this describe?',
                answer: 'Capacity',
                explanation: 'Capacity is how much a container can hold. Volume is the space taken up by the liquid or object.',
                options: shuffleOptions(['Capacity', 'Mass', 'Length', 'Temperature'])
            };
        }

        setProblem(nextProblem);
        setSelectedOption(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleCheck = (val: string) => {
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
                title: "Capacity and Volume",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600"><strong>Capacity</strong> is how much a container can hold. <strong>Volume</strong> is how much space the liquid or object takes up.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
                            <div className="bg-indigo-50 p-5 rounded-xl">
                                <div className="text-4xl mb-2">🧃</div>
                                <p className="font-bold text-indigo-800">Carton capacity</p>
                                <p className="text-slate-500">It can hold 1 l.</p>
                            </div>
                            <div className="bg-emerald-50 p-5 rounded-xl">
                                <div className="text-4xl mb-2">💧</div>
                                <p className="font-bold text-emerald-800">Juice volume</p>
                                <p className="text-slate-500">It has 750 ml inside now.</p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: "Metric Units",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">We measure capacity in millilitres, litres and kilolitres.</p>
                        <div className="grid grid-cols-3 gap-2 text-center max-w-lg mx-auto">
                            <div className="bg-amber-100 p-2 rounded-t-lg text-amber-800 font-bold text-xs uppercase">ml</div>
                            <div className="bg-indigo-100 p-2 rounded-t-lg text-indigo-800 font-bold text-xs uppercase">l</div>
                            <div className="bg-emerald-100 p-2 rounded-t-lg text-emerald-800 font-bold text-xs uppercase">kl</div>

                            <div className="bg-amber-50 p-4 rounded-b-lg text-xl font-bold text-amber-900">medicine spoon</div>
                            <div className="bg-indigo-50 p-4 rounded-b-lg text-xl font-bold text-indigo-900">milk bottle</div>
                            <div className="bg-emerald-50 p-4 rounded-b-lg text-xl font-bold text-emerald-900">water tank</div>
                        </div>
                        <p className="text-slate-500 text-sm mt-4">1 l = 1000 ml and 1 kl = 1000 l</p>
                    </div>
                )
            },
            {
                title: "Reading a Measuring Jug",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Check the size of each interval before reading the water level.</p>
                        <div className="bg-slate-50 p-6 rounded-xl inline-block">
                            <div className="flex items-end gap-3 h-48">
                                <div className="w-24 h-44 border-4 border-slate-300 rounded-b-2xl rounded-t-md relative overflow-hidden bg-white">
                                    <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-cyan-200" />
                                    <div className="absolute top-3 left-2 right-2 border-t border-slate-400" />
                                    <div className="absolute top-12 left-2 right-2 border-t border-slate-400" />
                                    <div className="absolute top-24 left-2 right-2 border-t border-slate-400" />
                                    <div className="absolute top-36 left-2 right-2 border-t border-slate-400" />
                                </div>
                                <div className="space-y-4 text-left text-sm font-bold text-slate-600">
                                    <p>1000 ml</p>
                                    <p>750 ml</p>
                                    <p className="text-cyan-700">500 ml</p>
                                    <p>250 ml</p>
                                </div>
                            </div>
                            <p className="text-slate-500 mt-4">This jug reads <strong>500 ml</strong>, which is half a litre.</p>
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
            title="Capacity"
            subtitle="Millilitres, litres and how much it holds"
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
                        <p className="text-slate-500 text-lg">Solve the capacity problem.</p>

                        <div className="bg-slate-50 rounded-2xl p-6 max-w-2xl mx-auto">
                            <p className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">{problem.question}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {problem.options.map((opt, idx) => {
                                let variant: 'default' | 'outline' | 'success' | 'danger' = 'outline';
                                if (selectedOption !== null) {
                                    if (opt === problem.answer) variant = 'success';
                                    else if (opt === selectedOption) variant = 'danger';
                                }

                                return (
                                    <Button
                                        key={`${opt}-${idx}`}
                                        onClick={() => handleCheck(opt)}
                                        disabled={selectedOption !== null}
                                        variant={variant}
                                        className="text-lg md:text-xl py-6"
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
                            correctMessage={`Correct! ${problem.explanation}`}
                            incorrectMessage={`Not quite. ${problem.explanation}`}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default Capacity;
