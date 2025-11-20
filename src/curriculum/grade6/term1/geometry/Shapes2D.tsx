import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

interface Shape {
    name: string;
    sides: number;
    color: string;
}

const Shapes2D = () => {
    const [targetShape, setTargetShape] = useState<Shape>({ name: 'Triangle', sides: 3, color: '#6366f1' });
    const [options, setOptions] = useState<Shape[]>([]);
    const [selectedShape, setSelectedShape] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    const allShapes: Shape[] = [
        { name: 'Triangle', sides: 3, color: '#6366f1' },
        { name: 'Square', sides: 4, color: '#10b981' },
        { name: 'Rectangle', sides: 4, color: '#f59e0b' },
        { name: 'Pentagon', sides: 5, color: '#ef4444' },
        { name: 'Hexagon', sides: 6, color: '#8b5cf6' },
        { name: 'Circle', sides: 0, color: '#06b6d4' },
    ];

    const generateProblem = () => {
        const target = allShapes[Math.floor(Math.random() * allShapes.length)];
        setTargetShape(target);

        // Generate 4 options including the correct one
        const opts = [target];
        const otherShapes = allShapes.filter(s => s.name !== target.name);

        while (opts.length < 4) {
            const random = otherShapes[Math.floor(Math.random() * otherShapes.length)];
            if (!opts.find(s => s.name === random.name)) {
                opts.push(random);
            }
        }

        // Shuffle
        setOptions(opts.sort(() => Math.random() - 0.5));
        setSelectedShape(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleSelect = (shapeName: string) => {
        if (selectedShape !== null) return;

        setSelectedShape(shapeName);

        if (shapeName === targetShape.name) {
            setIsCorrect(true);
            setStreak(s => s + 1);
        } else {
            setIsCorrect(false);
            setStreak(0);
        }
    };

    // SVG renderer
    const renderSVGShape = (shape: Shape, size: number = 100) => {
        const center = size / 2;

        if (shape.sides === 0) {
            // Circle
            return (
                <svg width={size} height={size}>
                    <circle cx={center} cy={center} r={center - 10} fill={shape.color} stroke="#1e293b" strokeWidth="3" />
                </svg>
            );
        } else if (shape.sides === 3) {
            // Triangle
            const height = (size - 20) * Math.sqrt(3) / 2;
            return (
                <svg width={size} height={size}>
                    <polygon
                        points={`${center},10 ${size - 10},${height + 10} 10,${height + 10}`}
                        fill={shape.color}
                        stroke="#1e293b"
                        strokeWidth="3"
                    />
                </svg>
            );
        } else if (shape.sides === 4) {
            // Square or Rectangle
            const width = shape.name === 'Square' ? size - 20 : size - 20;
            const height = shape.name === 'Square' ? size - 20 : (size - 20) * 0.6;
            const x = (size - width) / 2;
            const y = (size - height) / 2;

            return (
                <svg width={size} height={size}>
                    <rect
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={shape.color}
                        stroke="#1e293b"
                        strokeWidth="3"
                    />
                </svg>
            );
        } else {
            // Pentagon, Hexagon
            const radius = (size - 20) / 2;
            const points = [];
            for (let i = 0; i < shape.sides; i++) {
                const angle = (i * 2 * Math.PI / shape.sides) - Math.PI / 2;
                const x = center + radius * Math.cos(angle);
                const y = center + radius * Math.sin(angle);
                points.push(`${x},${y}`);
            }

            return (
                <svg width={size} height={size}>
                    <polygon
                        points={points.join(' ')}
                        fill={shape.color}
                        stroke="#1e293b"
                        strokeWidth="3"
                    />
                </svg>
            );
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800">2D Shapes</h2>
                <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm">
                    Streak: {streak} 🔥
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center mb-8">
                <p className="text-slate-500 mb-4 text-lg">Which shape is this?</p>

                <div className="mb-8 flex justify-center">
                    {renderSVGShape(targetShape, 200)}
                </div>

                <p className="text-sm text-slate-400 mb-8">
                    {targetShape.sides > 0 ? `This shape has ${targetShape.sides} sides` : 'This shape has no corners or edges'}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {options.map((shape) => {
                        let btnClass = "p-4 rounded-xl border-2 transition-all hover:scale-105 ";
                        if (selectedShape === null) {
                            btnClass += "bg-white border-slate-200 hover:border-indigo-400 hover:shadow-md";
                        } else {
                            if (shape.name === targetShape.name) {
                                btnClass += "bg-emerald-100 border-emerald-500";
                            } else if (shape.name === selectedShape) {
                                btnClass += "bg-red-100 border-red-500";
                            } else {
                                btnClass += "bg-slate-50 border-slate-100 opacity-50";
                            }
                        }

                        return (
                            <button
                                key={shape.name}
                                onClick={() => handleSelect(shape.name)}
                                disabled={selectedShape !== null}
                                className={btnClass}
                            >
                                {renderSVGShape(shape, 60)}
                                <p className="mt-2 font-bold text-slate-700">{shape.name}</p>
                            </button>
                        );
                    })}
                </div>
            </div>

            {selectedShape !== null && (
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
                                The shape is a <strong>{targetShape.name}</strong>.
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={generateProblem}
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-md transition-colors flex items-center gap-2"
                    >
                        Next Shape <RefreshCw className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Shapes2D;
