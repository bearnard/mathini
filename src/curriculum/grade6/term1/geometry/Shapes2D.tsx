import { useState, useEffect } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';

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
            triggerConfetti();
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
        <div className="max-w-3xl mx-auto p-4 md:p-6 space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-800">2D Shapes</h2>
                <Streak count={streak} />
            </div>

            <Card className="p-8 text-center space-y-8">
                <p className="text-slate-500 text-lg">Which shape is this?</p>

                <div className="flex justify-center animate-in zoom-in duration-500">
                    {renderSVGShape(targetShape, 200)}
                </div>

                <p className="text-sm text-slate-400 font-medium">
                    {targetShape.sides > 0 ? `This shape has ${targetShape.sides} sides` : 'This shape has no corners or edges'}
                </p>

                <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
                    {options.map((shape) => {
                        let variant: 'primary' | 'secondary' | 'outline' | 'success' | 'danger' | 'ghost' = 'outline';

                        if (selectedShape !== null) {
                            if (shape.name === targetShape.name) {
                                variant = 'success';
                            } else if (shape.name === selectedShape) {
                                variant = 'danger';
                            } else {
                                variant = 'ghost';
                            }
                        }

                        return (
                            <Button
                                key={shape.name}
                                onClick={() => handleSelect(shape.name)}
                                disabled={selectedShape !== null}
                                variant={variant}
                                className={cn(
                                    "h-16 text-lg",
                                    selectedShape === null && "hover:border-indigo-400 hover:bg-indigo-50"
                                )}
                            >
                                {shape.name}
                            </Button>
                        );
                    })}
                </div>
            </Card>

            <div className="h-24">
                <Feedback
                    isCorrect={isCorrect}
                    correctMessage={`That is a ${targetShape.name}.`}
                    incorrectMessage={`That is not a ${selectedShape}. It is a ${targetShape.name}.`}
                    onNext={generateProblem}
                />
            </div>
        </div>
    );
};

export default Shapes2D;
