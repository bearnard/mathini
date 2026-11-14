'use client';

/**
 * The 3D space view: the Sun on the left, Earth, and the Moon on its orbit, lit by a real
 * directional light so the half facing the Sun is always the lit half. This file is the only
 * one that imports three.js / @react-three/fiber, and it is loaded lazily (next/dynamic) by
 * MoonDual, so none of it reaches any other page. No drei, no Environment/HDR, no textures.
 */

import { useEffect, useRef } from 'react';
import { Canvas, type ThreeEvent } from '@react-three/fiber';
import { DoubleSide } from 'three';
import { elongationOf, elongationOfPoint, moonPosition, nearestPhaseIndex } from './helpers';

const R = 5; // orbit radius
const SUN_X = -8.2;

interface SceneProps {
  /** Moon's elongation in radians (continuous while dragging). */
  angle: number;
  onDrag: (elongation: number) => void;
  onRelease: () => void;
  onPick: (phaseIndex: number) => void;
  onContextLost: () => void;
}

const Scene = ({ angle, onDrag, onRelease, onPick }: Omit<SceneProps, 'onContextLost'>) => {
  const dragging = useRef(false);
  const moon = moonPosition(angle, R);

  const down = (e: ThreeEvent<PointerEvent>) => {
    const { x, z } = e.point;
    if (Math.hypot(x - moon.x, z - moon.z) < 1.7) {
      dragging.current = true;
      (e.target as unknown as Element).setPointerCapture?.(e.pointerId);
    } else if (Math.abs(Math.hypot(x, z) - R) < 1.5) {
      onPick(nearestPhaseIndex(elongationOfPoint(x, z)));
    }
  };
  const move = (e: ThreeEvent<PointerEvent>) => {
    if (dragging.current) onDrag(elongationOfPoint(e.point.x, e.point.z));
  };
  const up = () => {
    if (dragging.current) {
      dragging.current = false;
      onRelease();
    }
  };

  return (
    <>
      <ambientLight intensity={0.12} />
      <directionalLight position={[-10, 0, 0]} intensity={3.2} />

      {/* the Sun */}
      <mesh position={[SUN_X, 0, 0]}>
        <sphereGeometry args={[1.3, 24, 16]} />
        <meshBasicMaterial color="#f59e0b" />
      </mesh>

      {/* Earth */}
      <mesh>
        <sphereGeometry args={[1.3, 32, 24]} />
        <meshStandardMaterial color="#2563eb" roughness={0.9} />
      </mesh>

      {/* the orbit and the 8 positions */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[R - 0.03, R + 0.03, 96]} />
        <meshBasicMaterial color="#64748b" side={DoubleSide} />
      </mesh>
      {Array.from({ length: 8 }).map((_, i) => {
        const p = moonPosition(elongationOf(i), R);
        return (
          <mesh key={i} position={[p.x, 0, p.z]}>
            <sphereGeometry args={[0.16, 12, 8]} />
            <meshBasicMaterial color="#94a3b8" />
          </mesh>
        );
      })}

      {/* the Moon, with a ring so it is easy to see and grab */}
      <mesh position={[moon.x, 0, moon.z]}>
        <sphereGeometry args={[0.62, 32, 24]} />
        <meshStandardMaterial color="#d6d3d1" roughness={1} />
      </mesh>
      <mesh position={[moon.x, 0.02, moon.z]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.95, 1.1, 40]} />
        <meshBasicMaterial color="#fde68a" side={DoubleSide} />
      </mesh>

      {/* invisible drag plane on the orbit plane */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
      >
        <planeGeometry args={[30, 30]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
    </>
  );
};

const Moon3DScene = ({ angle, onDrag, onRelease, onPick, onContextLost }: SceneProps) => {
  // Unmounting the canvas also fires "webglcontextlost" (R3F releases the context on purpose).
  // Only a loss while we are still mounted is a real failure.
  const alive = useRef(false);
  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      camera={{ position: [0, 15, 13], fov: 40 }}
      gl={{ antialias: true, powerPreference: 'low-power' }}
      style={{ touchAction: 'none', cursor: 'grab', background: '#0f172a' }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener('webglcontextlost', (ev) => {
          ev.preventDefault();
          if (alive.current) onContextLost();
        });
      }}
    >
      <Scene angle={angle} onDrag={onDrag} onRelease={onRelease} onPick={onPick} />
    </Canvas>
  );
};

export default Moon3DScene;
