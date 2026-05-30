import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';


type Problem = {
    question: string;
    answer: string;
    explanation: string;
    options: string[];
};

const minuteChoices = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

const padTime = (value: number) => value.toString().padStart(2, '0');

const format24Hour = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60) % 24;
    const minutes = totalMinutes % 60;
    return `${padTime(hours)}:${padTime(minutes)}`;
};

const format12Hour = (totalMinutes: number) => {
    const hours24 = Math.floor(totalMinutes / 60) % 24;
    const minutes = totalMinutes % 60;
    const period = hours24 < 12 ? 'am' : 'pm';
    const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
    return `${hours12}:${padTime(minutes)} ${period}`;
};

const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (hours === 0) return `${mins} min`;
    if (mins === 0) return `${hours} h`;
    return `${hours} h ${mins} min`;
};

const shuffleOptions = (values: string[]) => [...values].sort(() => Math.random() - 0.5);

const Time = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [problem, setProblem] = useState<Problem | null>(null);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const generateConversionOptions = (correctMinutes: number, use12Hour: boolean) => {
        const formatter = use12Hour ? format12Hour : format24Hour;
        const distractors = new Set<string>();
        distractors.add(formatter(correctMinutes));

        const candidates = [
            correctMinutes + 12 * 60,
            correctMinutes - 12 * 60,
            correctMinutes + 60,
            correctMinutes - 60,
            correctMinutes + 30,
            correctMinutes - 30
        ];

        candidates.forEach(candidate => {
            const normalised = (candidate + 24 * 60) % (24 * 60);
            distractors.add(formatter(normalised));
        });

        while (distractors.size < 4) {
            const randomTime = Math.floor(Math.random() * 24) * 60 + minuteChoices[Math.floor(Math.random() * minuteChoices.length)];
            distractors.add(formatter(randomTime));
        }

        return shuffleOptions(Array.from(distractors).slice(0, 4));
    };

    const generateDurationOptions = (correctDuration: number) => {
        const distractors = new Set<string>();
        distractors.add(formatDuration(correctDuration));

        [correctDuration - 30, correctDuration - 15, correctDuration + 15, correctDuration + 30, correctDuration + 60].forEach(duration => {
            if (duration > 0) {
                distractors.add(formatDuration(duration));
            }
        });

        while (distractors.size < 4) {
            const randomDuration = (Math.floor(Math.random() * 10) + 1) * 15;
            distractors.add(formatDuration(randomDuration));
        }

        return shuffleOptions(Array.from(distractors).slice(0, 4));
    };

    const generateProblem = () => {
        const problemType = Math.floor(Math.random() * 3);
        const hour = Math.floor(Math.random() * 24);
        const minute = minuteChoices[Math.floor(Math.random() * minuteChoices.length)];
        const totalMinutes = hour * 60 + minute;

        if (problemType === 0) {
            const answer = format12Hour(totalMinutes);
            setProblem({
                question: `Write ${format24Hour(totalMinutes)} in 12-hour time.`,
                answer,
                explanation: `${format24Hour(totalMinutes)} is the same as ${answer}.`,
                options: generateConversionOptions(totalMinutes, true)
            });
        } else if (problemType === 1) {
            const answer = format24Hour(totalMinutes);
            setProblem({
                question: `Write ${format12Hour(totalMinutes)} in 24-hour time.`,
                answer,
                explanation: `${format12Hour(totalMinutes)} is written as ${answer}.`,
                options: generateConversionOptions(totalMinutes, false)
            });
        } else {
            const start = (Math.floor(Math.random() * 48) + 24) * 15;
            const duration = (Math.floor(Math.random() * 10) + 1) * 15;
            const end = start + duration;
            const answer = formatDuration(duration);

            setProblem({
                question: `How long from ${format24Hour(start)} to ${format24Hour(end)}?`,
                answer,
                explanation: `Count on from ${format24Hour(start)} to ${format24Hour(end)}: the elapsed time is ${answer}.`,
                options: generateDurationOptions(duration)
            });
        }

        setSelectedOption(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleCheck = (val: string) => {
        if (selectedOption !== null || problem === null) return;

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
                title: "Reading Clocks",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Analogue clocks have an <strong>hour hand</strong> and a <strong>minute hand</strong>. Digital clocks show the time with numbers.</p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <div className="relative w-40 h-40 rounded-full border-8 border-indigo-100 bg-white shadow-inner">
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 font-bold text-slate-500">12</div>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 font-bold text-slate-500">3</div>
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-bold text-slate-500">6</div>
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-slate-500">9</div>
                                <div className="absolute left-1/2 top-1/2 h-12 w-1 -translate-x-1/2 -translate-y-full origin-bottom rotate-90 rounded-full bg-indigo-600" />
                                <div className="absolute left-1/2 top-1/2 h-9 w-1.5 -translate-x-1/2 -translate-y-full origin-bottom rounded-full bg-emerald-500" />
                                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-700" />
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <p className="text-4xl font-mono font-bold text-slate-800">3:00</p>
                                <p className="text-slate-500 mt-2">The minute hand points to 12, so it is exactly three o'clock.</p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: "12-hour and 24-hour Time",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">In 24-hour time, afternoon and evening times keep counting after 12:00.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
                            <div className="bg-indigo-50 p-4 rounded-xl">
                                <p className="text-sm font-bold text-indigo-700 uppercase">Morning</p>
                                <p className="text-2xl font-mono font-bold text-indigo-900">09:15</p>
                                <p className="text-slate-500">9:15 am</p>
                            </div>
                            <div className="bg-emerald-50 p-4 rounded-xl">
                                <p className="text-sm font-bold text-emerald-700 uppercase">Afternoon</p>
                                <p className="text-2xl font-mono font-bold text-emerald-900">14:30</p>
                                <p className="text-slate-500">2:30 pm</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-xl">
                                <p className="text-sm font-bold text-amber-700 uppercase">Evening</p>
                                <p className="text-2xl font-mono font-bold text-amber-900">20:45</p>
                                <p className="text-slate-500">8:45 pm</p>
                            </div>
                        </div>
                        <p className="text-slate-500">For pm times after noon, add 12 to the hour: 2:30 pm becomes 14:30.</p>
                    </div>
                )
            },
            {
                title: "Elapsed Time",
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">Elapsed time is how long something takes. Count on in hours and minutes.</p>
                        <div className="bg-slate-50 p-6 rounded-xl max-w-xl mx-auto">
                            <div className="flex items-center justify-between gap-3 text-center">
                                <div>
                                    <p className="text-sm text-slate-500">Start</p>
                                    <p className="text-2xl font-mono font-bold text-indigo-700">13:15</p>
                                </div>
                                <div className="flex-1 border-t-4 border-dotted border-slate-300" />
                                <div>
                                    <p className="text-sm text-slate-500">Finish</p>
                                    <p className="text-2xl font-mono font-bold text-emerald-700">14:45</p>
                                </div>
                            </div>
                            <p className="mt-5 text-slate-600">13:15 to 14:15 is <strong>1 hour</strong>, then to 14:45 is <strong>30 minutes</strong>.</p>
                            <p className="text-xl font-bold text-slate-800">Total: 1 h 30 min</p>
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
            title="Time"
            subtitle="Clocks, 24-hour time and durations"
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

                        <div className="bg-slate-50 rounded-2xl p-6">
                            <p className="text-2xl md:text-4xl font-bold text-slate-800">{problem?.question ?? 'Loading time question...'}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {(problem?.options ?? []).map(opt => {
                                let variant: 'outline' | 'success' | 'danger' = 'outline';
                                if (selectedOption !== null && problem !== null) {
                                    if (opt === problem.answer) variant = 'success';
                                    else if (opt === selectedOption) variant = 'danger';
                                }

                                return (
                                    <Button
                                        key={opt}
                                        onClick={() => handleCheck(opt)}
                                        disabled={selectedOption !== null}
                                        variant={variant}
                                        className="text-lg md:text-xl py-6 font-mono"
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
                            correctMessage={`Correct! ${problem?.answer ?? ''} is the right time.`}
                            incorrectMessage={problem?.explanation ?? 'Not quite. Try the next time question.'}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default Time;
