import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';


type Property = 'sides' | 'angles' | 'faces' | 'edges' | 'vertices';

type ShapeFact = {
    name: string;
    emoji: string;
    properties: Partial<Record<Property, number>>;
};

type Problem = {
    fact: ShapeFact;
    property: Property;
    answer: number;
    options: number[];
};

const shapeFacts: ShapeFact[] = [
    { name: 'triangle', emoji: '🔺', properties: { sides: 3, angles: 3 } },
    { name: 'quadrilateral', emoji: '⬛', properties: { sides: 4, angles: 4 } },
    { name: 'pentagon', emoji: '⬟', properties: { sides: 5, angles: 5 } },
    { name: 'hexagon', emoji: '⬢', properties: { sides: 6, angles: 6 } },
    { name: 'octagon', emoji: '🛑', properties: { sides: 8, angles: 8 } },
    { name: 'cube', emoji: '🎲', properties: { faces: 6, edges: 12, vertices: 8 } },
    { name: 'rectangular prism', emoji: '📦', properties: { faces: 6, edges: 12, vertices: 8 } },
    { name: 'cylinder', emoji: '🥫', properties: { faces: 3, edges: 2, vertices: 0 } },
    { name: 'cone', emoji: '🍦', properties: { faces: 2, edges: 1, vertices: 1 } },
    { name: 'sphere', emoji: '⚽', properties: { faces: 1, edges: 0, vertices: 0 } },
    { name: 'square pyramid', emoji: '🔶', properties: { faces: 5, edges: 8, vertices: 5 } },
    { name: 'triangular prism', emoji: '🏕️', properties: { faces: 5, edges: 9, vertices: 6 } }
];

const propertyLabels: Record<Property, string> = {
    sides: 'sides',
    angles: 'angles',
    faces: 'faces',
    edges: 'edges',
    vertices: 'vertices'
};

const singularPropertyLabels: Record<Property, string> = {
    sides: 'side',
    angles: 'angle',
    faces: 'face',
    edges: 'edge',
    vertices: 'vertex'
};

const ShapeProperties = () => {
    const [mode, setMode] = useState<'learn' | 'practice'>('learn');

    // Practice State
    const [problem, setProblem] = useState<Problem | null>(null);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    // Learn State
    const [learnStep, setLearnStep] = useState(0);

    const shuffleNumbers = (values: number[]) => [...values].sort(() => Math.random() - 0.5);

    const getArticle = (name: string) => (/^[aeiou]/.test(name) ? 'an' : 'a');

    const generateProblem = () => {
        const fact = shapeFacts[Math.floor(Math.random() * shapeFacts.length)];
        const availableProperties = Object.keys(fact.properties) as Property[];
        const property = availableProperties[Math.floor(Math.random() * availableProperties.length)];
        const answer = fact.properties[property] ?? 0;
        const choices = new Set<number>([answer]);

        while (choices.size < 4) {
            choices.add(Math.floor(Math.random() * 13));
        }

        setProblem({
            fact,
            property,
            answer,
            options: shuffleNumbers(Array.from(choices))
        });
        setSelectedOption(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleCheck = (val: number) => {
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

    const getQuestion = (currentProblem: Problem) => (
        `How many ${propertyLabels[currentProblem.property]} does ${getArticle(currentProblem.fact.name)} ${currentProblem.fact.name} have?`
    );

    const getPropertyLabel = (property: Property, count: number) => (
        count === 1 ? singularPropertyLabels[property] : propertyLabels[property]
    );

    const getAnswerMessage = (currentProblem: Problem) => {
        const article = getArticle(currentProblem.fact.name);
        const capitalised = article.charAt(0).toUpperCase() + article.slice(1);
        return `${capitalised} ${currentProblem.fact.name} has ${currentProblem.answer} ${getPropertyLabel(currentProblem.property, currentProblem.answer)}.`;
    };

    const LearnContent = () => {
        const steps = [
            {
                title: '2D Shapes',
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">A 2D shape is flat. Count its <strong>sides</strong> and <strong>angles</strong>.</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
                            {shapeFacts.slice(0, 4).map(fact => (
                                <div key={fact.name} className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                                    <div className="text-4xl mb-2">{fact.emoji}</div>
                                    <p className="font-bold text-slate-800 capitalize">{fact.name}</p>
                                    <p className="text-sm text-slate-500">{fact.properties.sides} sides</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            },
            {
                title: 'Polygons Have Angles',
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">For these polygons, the number of sides is the same as the number of angles.</p>
                        <div className="bg-emerald-50 p-6 rounded-xl inline-block border border-emerald-100">
                            <svg viewBox="0 0 160 140" className="w-56 h-44 mx-auto" aria-label="Hexagon with six corners">
                                <polygon points="80,12 134,43 134,97 80,128 26,97 26,43" fill="#d1fae5" stroke="#059669" strokeWidth="6" />
                                {[['80', '12'], ['134', '43'], ['134', '97'], ['80', '128'], ['26', '97'], ['26', '43']].map(([cx, cy]) => (
                                    <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" fill="#4f46e5" />
                                ))}
                            </svg>
                            <p className="text-slate-600">A hexagon has <strong>6 sides</strong> and <strong>6 angles</strong>.</p>
                        </div>
                    </div>
                )
            },
            {
                title: '3D Objects',
                content: (
                    <div className="space-y-6 text-center">
                        <p className="text-lg text-slate-600">A 3D object has <strong>faces</strong>, <strong>edges</strong> and <strong>vertices</strong>.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                            <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                                <div className="text-5xl mb-3">🎲</div>
                                <p className="font-bold text-slate-800">Cube</p>
                                <p className="text-sm text-slate-500">6 faces, 12 edges, 8 vertices</p>
                            </div>
                            <div className="bg-sky-50 p-5 rounded-xl border border-sky-100">
                                <div className="text-5xl mb-3">🥫</div>
                                <p className="font-bold text-slate-800">Cylinder</p>
                                <p className="text-sm text-slate-500">3 faces, 2 edges, 0 vertices</p>
                            </div>
                            <div className="bg-fuchsia-50 p-5 rounded-xl border border-fuchsia-100">
                                <div className="text-5xl mb-3">🔶</div>
                                <p className="font-bold text-slate-800">Square pyramid</p>
                                <p className="text-sm text-slate-500">5 faces, 8 edges, 5 vertices</p>
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
            title="2D Shapes & 3D Objects"
            subtitle="Sides, angles, faces, edges and vertices"
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
                        <p className="text-slate-500 text-lg">Choose the correct property count.</p>

                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <div className="text-6xl mb-4">{problem?.fact.emoji ?? '🔷'}</div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                                {problem === null ? 'Loading question...' : getQuestion(problem)}
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {(problem?.options ?? []).map((opt, idx) => {
                                let variant: 'outline' | 'success' | 'danger' = 'outline';
                                if (selectedOption !== null && problem !== null) {
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
                            correctMessage={problem === null ? 'Correct!' : `Correct! ${getAnswerMessage(problem)}`}
                            incorrectMessage={problem === null ? 'Not quite.' : `Not quite. ${getAnswerMessage(problem)}`}
                            onNext={generateProblem}
                        />
                    </div>
                </div>
            )}
        </TopicContainer>
    );
};

export default ShapeProperties;
