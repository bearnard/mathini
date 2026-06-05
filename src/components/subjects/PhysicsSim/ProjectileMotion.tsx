'use client';

import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, Text, Sphere } from '@react-three/drei';
import ThreeSimulation from '../ThreeSimulation';
import * as THREE from 'three';

const G = 9.8; // m/s²

interface ProjectileSceneProps {
  velocity: number;
  angleDeg: number;
  running: boolean;
  onLand: (range: number) => void;
}

const ProjectileScene = ({ velocity, angleDeg, running, onLand }: ProjectileSceneProps) => {
  const ballRef = useRef<THREE.Mesh>(null);
  const t = useRef(0);
  const landed = useRef(false);
  const trail = useRef<THREE.Vector3[]>([]);

  const angle = (angleDeg * Math.PI) / 180;
  const vx = velocity * Math.cos(angle);
  const vy = velocity * Math.sin(angle);

  useEffect(() => {
    t.current = 0;
    landed.current = false;
    trail.current = [];
    if (ballRef.current) {
      ballRef.current.position.set(0, 0, 0);
    }
  }, [velocity, angleDeg, running]);

  useFrame((_, delta) => {
    if (!running || landed.current || !ballRef.current) return;
    t.current += delta * 2; // 2× speed for visibility
    const x = vx * t.current;
    const y = vy * t.current - 0.5 * G * t.current ** 2;
    if (y <= 0 && t.current > 0.05) {
      ballRef.current.position.set(x, 0, 0);
      landed.current = true;
      onLand(Math.round(x));
      return;
    }
    ballRef.current.position.set(x, Math.max(0, y), 0);
    trail.current = [...trail.current.slice(-60), new THREE.Vector3(x, Math.max(0, y), 0)];
  });

  const scale = 0.3;

  return (
    <group scale={[scale, scale, scale]}>
      {/* Ground */}
      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[200, 20]} />
        <meshStandardMaterial color="#86efac" />
      </mesh>
      {/* Ball */}
      <mesh ref={ballRef} castShadow>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>
      {/* Trail */}
      {trail.current.length > 2 && (
        <Line points={trail.current} color="#ef4444" lineWidth={1.5} opacity={0.6} transparent />
      )}
      {/* Launch vector arrow */}
      <arrowHelper
        args={[
          new THREE.Vector3(Math.cos(angle), Math.sin(angle), 0),
          new THREE.Vector3(0, 0, 0),
          velocity * 0.4,
          '#facc15',
          0.4,
          0.2,
        ] as unknown as []}
      />
    </group>
  );
};

/**
 * Interactive projectile motion simulation (Three.js + R3F).
 *
 * Usage:
 *   <ProjectileMotion />
 */
const ProjectileMotion = () => {
  const [velocity, setVelocity] = useState(15);
  const [angle, setAngle] = useState(45);
  const [running, setRunning] = useState(false);
  const [range, setRange] = useState<number | null>(null);

  const launch = () => {
    setRange(null);
    setRunning(false);
    setTimeout(() => setRunning(true), 50);
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-4 px-2">
        <label className="flex flex-col gap-1 text-sm text-slate-600 flex-1 min-w-32">
          Initial velocity: <span className="font-bold text-slate-800">{velocity} m/s</span>
          <input type="range" min={5} max={30} value={velocity} onChange={e => setVelocity(+e.target.value)} className="accent-indigo-600" />
        </label>
        <label className="flex flex-col gap-1 text-sm text-slate-600 flex-1 min-w-32">
          Launch angle: <span className="font-bold text-slate-800">{angle}°</span>
          <input type="range" min={10} max={80} value={angle} onChange={e => setAngle(+e.target.value)} className="accent-indigo-600" />
        </label>
      </div>
      <ThreeSimulation title="Projectile Motion" height={300}>
        <ProjectileScene velocity={velocity} angleDeg={angle} running={running} onLand={setRange} />
      </ThreeSimulation>
      <div className="flex items-center gap-4 px-2">
        <button
          onClick={launch}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold text-sm hover:bg-indigo-700 transition-colors shadow"
        >
          🚀 Launch
        </button>
        {range !== null && (
          <span className="text-sm text-slate-600">
            Range ≈ <strong>{range} m</strong>
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectileMotion;
