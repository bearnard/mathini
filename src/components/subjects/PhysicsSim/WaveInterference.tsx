'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import ThreeSimulation from '../ThreeSimulation';
import * as THREE from 'three';

const POINTS = 200;

const WaveScene = ({ freq1, freq2, amp, running }: { freq1: number; freq2: number; amp: number; running: boolean }) => {
  const t = useRef(0);
  const w1Ref = useRef<{ points: THREE.Vector3[] }>({ points: [] });
  const w2Ref = useRef<{ points: THREE.Vector3[] }>({ points: [] });
  const sumRef = useRef<{ points: THREE.Vector3[] }>({ points: [] });
  const [tick, setTick] = useState(0);

  useFrame((_, delta) => {
    if (!running) return;
    t.current += delta;
    const pts1: THREE.Vector3[] = [];
    const pts2: THREE.Vector3[] = [];
    const sum: THREE.Vector3[] = [];
    for (let i = 0; i <= POINTS; i++) {
      const x = (i / POINTS) * 8 - 4;
      const y1 = amp * Math.sin(freq1 * x - t.current * 3);
      const y2 = amp * Math.sin(freq2 * x - t.current * 3);
      pts1.push(new THREE.Vector3(x, y1 + 2, 0));
      pts2.push(new THREE.Vector3(x, y2, 0));
      sum.push(new THREE.Vector3(x, (y1 + y2) * 0.5 - 2, 0));
    }
    w1Ref.current.points = pts1;
    w2Ref.current.points = pts2;
    sumRef.current.points = sum;
    setTick((n) => n + 1);
  });

  if (!w1Ref.current.points.length) return null;

  return (
    <>
      <Line points={w1Ref.current.points} color="#3b82f6" lineWidth={2} />
      <Line points={w2Ref.current.points} color="#ef4444" lineWidth={2} />
      <Line points={sumRef.current.points} color="#8b5cf6" lineWidth={2.5} />
    </>
  );
};

/**
 * Wave superposition / interference simulation.
 *
 * Usage:
 *   <WaveInterference />
 */
const WaveInterference = () => {
  const [freq1, setFreq1] = useState(2);
  const [freq2, setFreq2] = useState(3);
  const [amp, setAmp] = useState(0.8);
  const [running, setRunning] = useState(true);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-4 px-2 text-sm text-slate-600">
        <label className="flex flex-col gap-1 flex-1 min-w-28">
          Wave 1 freq: <span className="font-bold text-blue-600">{freq1} Hz</span>
          <input type="range" min={1} max={6} step={0.5} value={freq1} onChange={e => setFreq1(+e.target.value)} className="accent-blue-600" />
        </label>
        <label className="flex flex-col gap-1 flex-1 min-w-28">
          Wave 2 freq: <span className="font-bold text-red-600">{freq2} Hz</span>
          <input type="range" min={1} max={6} step={0.5} value={freq2} onChange={e => setFreq2(+e.target.value)} className="accent-red-600" />
        </label>
        <label className="flex flex-col gap-1 flex-1 min-w-28">
          Amplitude: <span className="font-bold text-slate-800">{amp}</span>
          <input type="range" min={0.2} max={1.5} step={0.1} value={amp} onChange={e => setAmp(+e.target.value)} className="accent-purple-600" />
        </label>
      </div>
      <ThreeSimulation title="Wave Superposition" height={320} noOrbit>
        <WaveScene freq1={freq1} freq2={freq2} amp={amp} running={running} />
      </ThreeSimulation>
      <div className="flex gap-3 px-2 text-xs">
        <span className="text-blue-600 font-medium">■ Wave 1</span>
        <span className="text-red-600 font-medium">■ Wave 2</span>
        <span className="text-purple-600 font-medium">■ Resultant</span>
        <button
          className="ml-auto px-3 py-1 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600"
          onClick={() => setRunning(r => !r)}
        >
          {running ? '⏸ Pause' : '▶ Play'}
        </button>
      </div>
    </div>
  );
};

export default WaveInterference;
