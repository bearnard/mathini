import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

interface Object3D {
    name: string;
    faces: number;
    edges: number;
    vertices: number;
}

const Objects3D = () => {
    const [targetObject, setTargetObject] = useState<Object3D>({ name: 'Cube', faces: 6, edges: 12, vertices: 8 });
    const [questionType, setQuestionType] = useState<'faces' | 'edges' | 'vertices'>('faces');
    const [options, setOptions] = useState<number[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    const allObjects: Object3D[] = [
        { name: 'Cube', faces: 6, edges: 12, vertices: 8 },
        { name: 'Rectangular Prism', faces: 6, edges: 12, vertices: 8 },
        { name: 'Triangular Prism', faces: 5, edges: 9, vertices: 6 },
        { name: 'Square Pyramid', faces: 5, edges: 8, vertices: 5 },
        { name: 'Triangular Pyramid', faces: 4, edges: 6, vertices: 4 },
        { name: 'Sphere', faces: 1, edges: 0, vertices: 0 },
        { name: 'Cylinder', faces: 3, edges: 2, vertices: 0 },
        { name: 'Cone', faces: 2, edges: 1, vertices: 1 },
    ];

    const generateProblem = () => {
        const target = allObjects[Math.floor(Math.random() * allObjects.length)];
        setTargetObject(target);

        const types: ('faces' | 'edges' | 'vertices')[] = ['faces', 'edges', 'vertices'];
        const qType = types[Math.floor(Math.random() * types.length)];
        setQuestionType(qType);

        // Generate options
        const correct = target[qType];
        const opts = new Set<number>();
        opts.add(correct);

        while (opts.size < 4) {
            const random = Math.floor(Math.random() * 15) + 1;
            if (random !== correct) {
                opts.add(random);
            }
        }

        setOptions(Array.from(opts).sort((a, b) => a - b));
        setSelectedAnswer(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleSelect = (answer: number) => {
        if (selectedAnswer !== null) return;

        setSelectedAnswer(answer);

        const correct = targetObject[questionType];
        if (answer === correct) {
            setIsCorrect(true);
            setStreak(s => s + 1);
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    const getQuestionText = () => {
        if (questionType === 'faces') return `How many faces does a ${targetObject.name} have?`;
        if (questionType === 'edges') return `How many edges does a ${targetObject.name} have?`;
        return `How many vertices does a ${targetObject.name} have?`;
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800">3D Objects</h2>
                <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm">
                    Streak: {streak} 🔥
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center mb-8">
                <div className="mb-8">
                    <div className="inline-block px-6 py-3 bg-indigo-100 text-indigo-800 rounded-xl font-bold text-2xl mb-6">
                        {targetObject.name}
                    </div>
                </div>

                <p className="text-xl text-slate-700 mb-8 font-medium">
                    {getQuestionText()}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
                    {options.map((opt) => {
                        const correct = targetObject[questionType];

                        let btnClass = "p-6 rounded-xl text-3xl font-bold border-2 transition-all hover:scale-105 ";
                        if (selectedAnswer === null) {
                            btnClass += "bg-white border-slate-200 hover:border-indigo-400 hover:shadow-md text-slate-700";
                        } else {
                            if (opt === correct) {
                                btnClass += "bg-emerald-100 border-emerald-500 text-emerald-700";
                            } else if (opt === selectedAnswer) {
                                btnClass += "bg-red-100 border-red-500 text-red-700";
                            } else {
                                btnClass += "bg-slate-50 border-slate-100 text-slate-400 opacity-50";
                            }
                        }

                        return (
                            <button
                                key={opt}
                                onClick={() => handleSelect(opt)}
                                disabled={selectedAnswer !== null}
                                className={btnClass}
                            >
                                {opt}
                            </button>
                        );
                    })}
                </div>

                <div className="mt-8 p-4 bg-slate-50 rounded-lg">
                    <p className="text-sm text-slate-500">
                        <strong>Hint:</strong> Faces are flat surfaces, edges are where two faces meet, and vertices are the corners.
                    </p>
                </div>
            </div>

            {selectedAnswer !== null && (
                <div className={`p-6 rounded-xl flex items-center justify-between animate-in fade-in slide-in-from-bottom-4 ${isCorrect ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'}`}>
                    <div className="flex items-center gap-4">
                        {isCorrect ? (
                            <div className="bg-emerald-100 p-2 rounded-full">
                                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                            </div>
                        ) : (
                            <div className="bg-red-100 p-2 rounded-full">
                                <XCircle className="w-8 h-8 text-red-600" />
                            </div>
                        )}
                        <div>
                            <h3 className={`font-bold text-lg ${isCorrect ? 'text-emerald-800' : 'text-red-800'}`}>
                                {isCorrect ? "Correct!" : "Not quite."}
                            </h3>
                            <p className={`${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
                                A {targetObject.name} has <strong>{targetObject[questionType]} {questionType}</strong>.
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={generateProblem}
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-md transition-colors flex items-center gap-2"
                    >
                        Next Object <RefreshCw className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Objects3D;
