import { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float } from '@react-three/drei';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import * as THREE from 'three';

interface Object3DData {
    name: string;
    faces: number;
    edges: number;
    vertices: number;
    color: string;
    geometry: 'box' | 'sphere' | 'cone' | 'cylinder' | 'torus' | 'pyramid' | 'prism';
    args?: any[];
}

// Specialized components for correct edge rendering
const ShapeMesh = ({ data }: { data: Object3DData }) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.5;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    let geometry;
    switch (data.geometry) {
        case 'box': geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5); break;
        case 'sphere': geometry = new THREE.SphereGeometry(1.8, 32, 32); break;
        case 'cone': geometry = new THREE.ConeGeometry(1.8, 3.5, 32); break;
        case 'cylinder': geometry = new THREE.CylinderGeometry(1.5, 1.5, 3.5, 32); break;
        case 'pyramid': geometry = new THREE.ConeGeometry(2, 3, 4); break;
        case 'prism': geometry = new THREE.CylinderGeometry(1.5, 1.5, 3.5, 3); break;
        default: geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
    }

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group>
                <mesh ref={meshRef} geometry={geometry}>
                    <meshStandardMaterial color={data.color} roughness={0.2} metalness={0.1} />
                </mesh>
                {/* Edges for non-smooth shapes */}
                {data.geometry !== 'sphere' && data.geometry !== 'cone' && data.geometry !== 'cylinder' && (
                    <lineSegments>
                        <edgesGeometry args={[geometry]} />
                        <lineBasicMaterial color="white" linewidth={2} />
                    </lineSegments>
                )}
                {/* Special edges for cone/cylinder base if needed, but simplified for now */}
            </group>
        </Float>
    );
};


const Objects3D = () => {
    const [targetObject, setTargetObject] = useState<Object3DData>({ name: 'Cube', faces: 6, edges: 12, vertices: 8, color: '#6366f1', geometry: 'box' });
    const [questionType, setQuestionType] = useState<'faces' | 'edges' | 'vertices'>('faces');
    const [options, setOptions] = useState<number[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);

    const allObjects: Object3DData[] = [
        { name: 'Cube', faces: 6, edges: 12, vertices: 8, color: '#6366f1', geometry: 'box' },
        { name: 'Triangular Prism', faces: 5, edges: 9, vertices: 6, color: '#10b981', geometry: 'prism' },
        { name: 'Square Pyramid', faces: 5, edges: 8, vertices: 5, color: '#f59e0b', geometry: 'pyramid' },
        { name: 'Sphere', faces: 1, edges: 0, vertices: 0, color: '#ef4444', geometry: 'sphere' },
        { name: 'Cylinder', faces: 3, edges: 2, vertices: 0, color: '#8b5cf6', geometry: 'cylinder' },
        { name: 'Cone', faces: 2, edges: 1, vertices: 1, color: '#06b6d4', geometry: 'cone' },
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
            const random = Math.floor(Math.random() * 12);
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
            triggerConfetti();
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
        <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-800">3D Objects</h2>
                <Streak count={streak} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 3D Viewport */}
                <Card className="h-[400px] lg:h-[500px] overflow-hidden relative bg-slate-900 border-slate-800">
                    <div className="absolute top-4 left-4 z-10 bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold border border-white/10">
                        Drag to rotate 3D model
                    </div>
                    <Canvas shadows dpr={[1, 2]}>
                        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                        <pointLight position={[-10, -10, -10]} intensity={0.5} />
                        <Environment preset="city" />

                        <ShapeMesh data={targetObject} />
                    </Canvas>
                </Card>

                {/* Question & Options */}
                <div className="space-y-6">
                    <Card className="p-6 text-center space-y-6">
                        <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-bold text-sm uppercase tracking-wider">
                            {targetObject.name}
                        </div>

                        <h3 className="text-2xl font-bold text-slate-800">
                            {getQuestionText()}
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            {options.map((opt) => {
                                let variant: 'primary' | 'secondary' | 'outline' | 'success' | 'danger' | 'ghost' = 'outline';

                                if (selectedAnswer !== null) {
                                    const correct = targetObject[questionType];
                                    if (opt === correct) {
                                        variant = 'success';
                                    } else if (opt === selectedAnswer) {
                                        variant = 'danger';
                                    } else {
                                        variant = 'ghost';
                                    }
                                }

                                return (
                                    <Button
                                        key={opt}
                                        onClick={() => handleSelect(opt)}
                                        disabled={selectedAnswer !== null}
                                        variant={variant}
                                        className={cn(
                                            "h-16 text-2xl font-bold",
                                            selectedAnswer === null && "hover:border-indigo-400 hover:bg-indigo-50"
                                        )}
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
                            correctMessage={`Correct! A ${targetObject.name} has ${targetObject[questionType]} ${questionType}.`}
                            incorrectMessage={`Not quite. A ${targetObject.name} has ${targetObject[questionType]} ${questionType}.`}
                            onNext={generateProblem}
                        />
                    </div>

                    <Card className="p-4 bg-indigo-50 border-indigo-100">
                        <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                            <span className="text-xl">💡</span> Quick Guide
                        </h4>
                        <ul className="text-sm text-indigo-800 space-y-1 ml-6 list-disc">
                            <li><strong>Faces:</strong> The flat surfaces of the shape.</li>
                            <li><strong>Edges:</strong> The lines where two faces meet.</li>
                            <li><strong>Vertices:</strong> The corners where edges meet.</li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Objects3D;
