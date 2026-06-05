'use client';

import { useState } from 'react';
import ThreeSimulation from '../ThreeSimulation';
import { Text, Line } from '@react-three/drei';
import * as THREE from 'three';

interface Component {
  type: 'resistor' | 'battery' | 'bulb' | 'switch';
  label: string;
  value?: string;
}

interface SimpleCircuitProps {
  components?: Component[];
  /** Voltage in volts */
  voltage?: number;
  /** Resistance in ohms */
  resistance?: number;
}

const CircuitScene = ({ voltage, resistance, closed }: { voltage: number; resistance: number; closed: boolean }) => {
  const current = closed ? (voltage / resistance).toFixed(2) : '0.00';
  const power = closed ? ((voltage ** 2) / resistance).toFixed(1) : '0.0';

  // Simple rectangle circuit layout
  const corners: [number, number, number][] = [[-2, 1, 0], [2, 1, 0], [2, -1, 0], [-2, -1, 0], [-2, 1, 0]];
  const pts = corners.map(([x, y, z]) => new THREE.Vector3(x, y, z));

  const wireColor = closed ? '#facc15' : '#64748b';

  return (
    <>
      <Line points={pts} color={wireColor} lineWidth={3} />
      {/* Battery (left) */}
      <Text position={[-2.3, 0, 0]} fontSize={0.22} color="#22d3ee" anchorX="right">
        {`${voltage}V`}
      </Text>
      {/* Resistor (top) */}
      <Text position={[0, 1.3, 0]} fontSize={0.22} color="#fb923c">
        {`R = ${resistance}Ω`}
      </Text>
      {/* Bulb (right) */}
      <mesh position={[2, 0, 0]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial
          color={closed ? '#fef08a' : '#374151'}
          emissive={closed ? '#fbbf24' : '#000000'}
          emissiveIntensity={closed ? 1.2 : 0}
        />
      </mesh>
      {/* Switch indicator (bottom) */}
      <Text position={[0, -1.3, 0]} fontSize={0.2} color={closed ? '#4ade80' : '#f87171'}>
        {closed ? 'Switch: CLOSED' : 'Switch: OPEN'}
      </Text>
      {/* Readings */}
      <Text position={[0, 0, 0]} fontSize={0.2} color="#e2e8f0">
        {`I = ${current} A   P = ${power} W`}
      </Text>
    </>
  );
};

/**
 * Simple DC circuit simulator — battery, resistor, bulb, switch.
 *
 * Usage:
 *   <SimpleCircuit voltage={12} resistance={6} />
 */
const SimpleCircuit = ({ voltage: initV = 9, resistance: initR = 3 }: SimpleCircuitProps) => {
  const [voltage, setVoltage] = useState(initV);
  const [resistance, setResistance] = useState(initR);
  const [closed, setClosed] = useState(true);

  const current = closed ? (voltage / resistance).toFixed(2) : '0.00';

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-4 px-2 text-sm text-slate-600">
        <label className="flex flex-col gap-1 flex-1 min-w-28">
          Voltage: <span className="font-bold text-cyan-600">{voltage} V</span>
          <input type="range" min={1} max={24} value={voltage} onChange={e => setVoltage(+e.target.value)} className="accent-cyan-600" />
        </label>
        <label className="flex flex-col gap-1 flex-1 min-w-28">
          Resistance: <span className="font-bold text-orange-500">{resistance} Ω</span>
          <input type="range" min={1} max={20} value={resistance} onChange={e => setResistance(+e.target.value)} className="accent-orange-500" />
        </label>
      </div>
      <ThreeSimulation title="Simple DC Circuit" height={280} noOrbit>
        <CircuitScene voltage={voltage} resistance={resistance} closed={closed} />
      </ThreeSimulation>
      <div className="flex items-center gap-4 px-2">
        <button
          onClick={() => setClosed(c => !c)}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors shadow ${closed ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-red-100 hover:bg-red-200 text-red-700'}`}
        >
          {closed ? '🔌 Switch Open' : '🔌 Switch Close'}
        </button>
        <span className="text-sm text-slate-600">
          I = V/R = {voltage}/{resistance} = <strong>{current} A</strong>
        </span>
      </div>
    </div>
  );
};

export default SimpleCircuit;
