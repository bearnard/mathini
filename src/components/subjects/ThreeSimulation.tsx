'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

interface ThreeSimulationProps {
  title?: string;
  height?: number;
  /** Disable orbit controls (for 2D simulations) */
  noOrbit?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * Base wrapper for all Three.js / R3F physics simulations.
 * Provides Canvas, lighting, orbit controls and loading fallback.
 *
 * Usage:
 *   <ThreeSimulation title="Projectile Motion">
 *     <ProjectileScene />
 *   </ThreeSimulation>
 */
const ThreeSimulation = ({ title, height = 360, noOrbit = false, className, children }: ThreeSimulationProps) => {
  return (
    <div className={`rounded-xl border border-slate-200 overflow-hidden ${className ?? ''}`}>
      {title && (
        <div className="bg-slate-800 text-white px-4 py-2 text-sm font-semibold flex items-center gap-2">
          <span>🔬</span> {title}
        </div>
      )}
      <div style={{ height }}>
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-slate-400 text-sm bg-slate-50">Loading simulation…</div>}>
          <Canvas camera={{ position: [0, 2, 8], fov: 50 }} shadows>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
            <Environment preset="city" />
            {!noOrbit && <OrbitControls enablePan={false} />}
            {children}
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
};

export default ThreeSimulation;
