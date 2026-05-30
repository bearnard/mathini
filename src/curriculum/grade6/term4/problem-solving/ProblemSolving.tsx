import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';


type AnswerType = 'money' | 'km' | 'kmh';

type PracticeProblem = {
    question: string;
    correctValue: number;
    answerType: AnswerType;
    correctMessage: string;
    incorrectMessage: string;
};

type AnswerOption = {
    value: number;
    label: string;
};

const randInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const formatMoney = (cents: number) => `R${(cents / 100).toFixed(2)}`;

const formatAnswer = (value: number, answerType: AnswerType) => {
    if (answerType === 'money') return formatMoney(value);
    if (answerType === 'km') return `${value} km`;
    return `${value} km/h`;
};

const shuffleOptions = (options: AnswerOption[]) => [...options].sort(() => Math.random() - 0.5);

const createShoppingProblem = (): PracticeProblem => {
    const itemCount = randInt(3, 6);
    const itemPriceCents = randInt(8, 24) * 100 + randInt(0, 1) * 50;
    const extraCents = randInt(5, 18) * 100 + randInt(0, 1) * 50;
    const totalCents = itemCount * itemPriceCents + extraCents;
    const paidCents = Math.ceil((totalCents + randInt(600, 1800)) / 1000) * 1000;
    const correctValue = paidCents - totalCents;

    return {
        question: `Naledi buys ${itemCount} notebooks at ${formatMoney(itemPriceCents)} each and a pen for ${formatMoney(extraCents)}. She pays with ${formatMoney(paidCents)}. How much change should she get?`,
        correctValue,
        answerType: 'money',
        correctMessage: `Correct! Total cost is ${formatMoney(totalCents)}, so the change is ${formatMoney(correctValue)}.`,
        incorrectMessage: `Not quite. First find the total cost (${formatMoney(totalCents)}), then subtract it from ${formatMoney(paidCents)}.`
    };
};

const createSharingProblem = (): PracticeProblem => {
    const friends = randInt(3, 6);
    const ticketCents = randInt(35, 55) * 100;
    const shareCents = ticketCents + randInt(8, 18) * 100;
    const snacksCents = (shareCents - ticketCents) * friends;
    const totalCents = friends * ticketCents + snacksCents;

    return {
        question: `${friends} friends each buy a bus ticket costing ${formatMoney(ticketCents)}. They also share snacks costing ${formatMoney(snacksCents)} in total. How much should each friend pay altogether?`,
        correctValue: shareCents,
        answerType: 'money',
        correctMessage: `Correct! The full cost is ${formatMoney(totalCents)}, shared equally between ${friends} friends.`,
        incorrectMessage: `Not quite. Add all the ticket costs and snacks, then divide the total by ${friends}.`
    };
};

const createDistanceProblem = (): PracticeProblem => {
    const speed = randInt(45, 80);
    const hours = randInt(2, 4);
    const extraDistance = randInt(10, 35);
    const firstDistance = speed * hours;
    const correctValue = firstDistance + extraDistance;

    return {
        question: `A taxi travels at ${speed} km/h for ${hours} hours, then travels another ${extraDistance} km. What total distance does it travel?`,
        correctValue,
        answerType: 'km',
        correctMessage: `Correct! ${speed} × ${hours} = ${firstDistance} km, then add ${extraDistance} km.`,
        incorrectMessage: `Not quite. Multiply speed by time first, then add the extra distance.`
    };
};

const createSpeedProblem = (): PracticeProblem => {
    const hours = randInt(2, 5);
    const speed = randInt(12, 24);
    const distance = speed * hours;

    return {
        question: `A cyclist travels ${distance} km in ${hours} hours at a steady speed. What is the cyclist's speed?`,
        correctValue: speed,
        answerType: 'kmh',
        correctMessage: `Correct! Speed = distance ÷ time = ${distance} ÷ ${hours} = ${speed} km/h.`,
        incorrectMessage: `Not quite. To find speed, divide the distance by the time.`
    };
};

const createProblem = (): PracticeProblem => {
    const templates = [
        createShoppingProblem,
        createSharingProblem,
        createDistanceProblem,
        createSpeedProblem
    ];
    return templates[randInt(0, templates.length - 1)]();
};

const createOptions = (problem: PracticeProblem): AnswerOption[] => {
    const values = new Set<number>([problem.correctValue]);
    const offsets = problem.answerType === 'money'
        ? [-1500, -1000, -500, -200, 200, 500, 1000, 1500]
        : [-10, -5, -2, -1, 1, 2, 5, 10];

    while (values.size < 4) {
        const offset = offsets[randInt(0, offsets.length - 1)];
        const candidate = problem.correctValue + offset;
        if (candidate > 0) values.add(candidate);
        if (values.size < 4 && Math.random() < 0.25) {
            values.add(problem.correctValue + values.size * (problem.answerType === 'money' ? 250 : 3));
        }
    }

    return shuffleOptions(Array.from(values).map(value => ({
        value,
        label: formatAnswer(value, problem.answerType)
    })));
};

const ProblemSolving = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [problem, setProblem] = useState<PracticeProblem>(() => createProblem());
    const [options, setOptions] = useState<AnswerOption[]>([]);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const generateProblem = () => {
        const newProblem = createProblem();
        setProblem(newProblem);
        setOptions(createOptions(newProblem));
        setSelectedOption(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleCheck = (val: number) => {
        if (selectedOption !== null) return;

        setSelectedOption(val);

        if (val === problem.correctValue) {
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
                title: "Read Carefully",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Word problems often hide the maths inside a story. Read the whole question first.</p>
                        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left space-y-3">
                            <p className="font-bold text-slate-800">Ask yourself:</p>
                            <p className="text-slate-500">What numbers are given?</p>
                            <p className="text-slate-500">What is the question asking me to find?</p>
                            <p className="text-slate-500">Are the units rands, kilometres, hours, or something else?</p>
                        </div>
                    </div>
                )
            },
            {
                title: "Plan the Steps",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Most Grade 6 problems need more than one operation. Decide the order before you calculate.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
                            <div className="bg-indigo-50 p-4 rounded-xl text-indigo-800 font-bold">1. Total</div>
                            <div className="bg-emerald-50 p-4 rounded-xl text-emerald-800 font-bold">2. Share or Compare</div>
                            <div className="bg-amber-50 p-4 rounded-xl text-amber-800 font-bold">3. Answer</div>
                        </div>
                        <p className="text-slate-500">For shopping: multiply first, add the costs, then subtract to find change.</p>
                    </div>
                )
            },
            {
                title: "Calculate and Check",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Write each step clearly, then check whether your answer is reasonable.</p>
                        <div className="bg-slate-50 p-6 rounded-xl inline-block space-y-2">
                            <p className="text-slate-500">R18.50 + R12.00 = <strong>R30.50</strong></p>
                            <p className="text-slate-500">R50.00 - R30.50 = <strong>R19.50 change</strong></p>
                            <p className="text-indigo-600 font-bold">Check: R30.50 + R19.50 = R50.00</p>
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
            title="Problem Solving"
            subtitle="Multi-step word problems"
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
                        <p className="text-slate-500 text-lg">Solve the problem step by step.</p>

                        <div className="bg-slate-50 p-6 rounded-xl text-xl md:text-2xl font-bold text-slate-800 leading-relaxed">
                            {problem.question}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {options.map((opt, idx) => {
                                let variant: 'default' | 'outline' | 'success' | 'danger' = 'outline';
                                if (selectedOption !== null) {
                                    if (opt.value === problem.correctValue) variant = 'success';
                                    else if (opt.value === selectedOption) variant = 'danger';
                                }

                                return (
                                    <Button
                                        key={idx}
                                        onClick={() => handleCheck(opt.value)}
                                        disabled={selectedOption !== null}
                                        variant={variant}
                                        className="text-lg md:text-xl py-6"
                                    >
                                        {opt.label}
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

export default ProblemSolving;
