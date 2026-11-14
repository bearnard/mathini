'use client';

import dynamic from 'next/dynamic';
import { Component, useCallback, useEffect, useState, type KeyboardEvent, type ReactNode } from 'react';
import MoonStepper from '../MoonStepper';
import { Face, MOON_PHASES } from '../MoonPhases';
import {
  PROMPTS,
  elongationOf,
  judge,
  litSide,
  nearestPhaseIndex,
  shouldUse3D,
  targetIndex,
  type Verdict,
} from './helpers';

/**
 * Where is the Moon? Two views that update together: the SPACE VIEW (3D, lazy-loaded) and
 * the VIEW FROM SOUTH AFRICA (the same Face drawing as MoonPhases/MoonStepper, waxing = lit on
 * the left). Predict first: the learner places the Moon for a full Moon, then a first quarter,
 * and is told right or wrong with one line, then explores freely.
 *
 * Falls back to the simple MoonStepper when WebGL is missing, the user prefers reduced motion,
 * the device looks weak (see shouldUse3D), the 3D part fails, or the learner picks
 * "Use simple view". Only this wrapper is in the normal bundle; three.js is not.
 */

const Moon3DScene = dynamic(() => import('./Moon3DScene'), {
  ssr: false,
  loading: () => (
    <div className="flex aspect-[5/4] w-full items-center justify-center rounded-2xl bg-slate-900 text-sm text-slate-300">
      Loading 3D view…
    </div>
  ),
});

class Boundary extends Component<{ onError: () => void; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onError();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

const probeWebGL = (): boolean => {
  try {
    const c = document.createElement('canvas');
    const gl = (c.getContext('webgl2') || c.getContext('webgl')) as WebGLRenderingContext | null;
    if (!gl) return false;
    gl.getExtension('WEBGL_lose_context')?.loseContext(); // free the probe context
    return true;
  } catch {
    return false;
  }
};

interface Feedback {
  kind: Verdict;
  text: string;
}

const MoonDual = ({ className }: { className?: string }) => {
  const [ready, setReady] = useState(false);
  const [can3D, setCan3D] = useState(false);
  const [simple, setSimple] = useState(false);
  const [failed, setFailed] = useState(false);

  const [angle, setAngle] = useState(elongationOf(0));
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [stage, setStage] = useState(0); // 0, 1 = prompts; 2 = explore
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  useEffect(() => {
    const nav = navigator as Navigator & { deviceMemory?: number };
    setCan3D(
      shouldUse3D({
        webgl: probeWebGL(),
        reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        hardwareConcurrency: nav.hardwareConcurrency,
        deviceMemory: nav.deviceMemory,
      }),
    );
    setReady(true);
  }, []);

  const goTo = useCallback((i: number) => {
    const k = ((i % 8) + 8) % 8;
    setIndex(k);
    setAngle(elongationOf(k));
    setFeedback((f) => (f && f.kind === 'right' ? f : null));
  }, []);

  const onDrag = useCallback((e: number) => {
    setAngle(e);
    setIndex(nearestPhaseIndex(e));
    setDragging(true);
  }, []);
  const onRelease = useCallback(() => {
    setDragging(false);
    setAngle((a) => elongationOf(nearestPhaseIndex(a)));
  }, []);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(index + 1);
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goTo(index - 1);
    else if (e.key === 'Home') goTo(0);
    else if (e.key === 'End') goTo(7);
    else return;
    e.preventDefault();
  };

  if (!ready) return <div className="mx-auto aspect-[5/4] w-full max-w-md rounded-2xl bg-slate-900" aria-hidden="true" />;

  if (!can3D || simple || failed) {
    return (
      <div className={className}>
        <MoonStepper />
        {can3D && !failed && (
          <button
            type="button"
            onClick={() => setSimple(false)}
            className="mx-auto mt-3 block min-h-[44px] rounded-xl border-2 border-slate-300 bg-white px-4 text-sm font-bold text-slate-700 hover:bg-slate-50"
          >
            Try the 3D view
          </button>
        )}
      </div>
    );
  }

  const prompt = stage < 2 ? PROMPTS[stage] : null;
  const phase = MOON_PHASES[index];
  const side = litSide(index);

  const check = () => {
    if (!prompt) return;
    const v = judge(prompt, index, attempts);
    if (v === 'right') {
      setFeedback({ kind: 'right', text: prompt.right });
    } else if (v === 'wrong') {
      setAttempts(attempts + 1);
      setFeedback({ kind: 'wrong', text: `Not quite. From there we would see the ${phase.name}. Try again.` });
    } else {
      goTo(targetIndex(prompt));
      setFeedback({ kind: 'reveal', text: `It goes here. ${prompt.right}` });
    }
  };
  const next = () => {
    setFeedback(null);
    setAttempts(0);
    setStage(stage + 1);
  };
  const restart = () => {
    setStage(0);
    setAttempts(0);
    setFeedback(null);
    goTo(0);
  };

  const answered = feedback && (feedback.kind === 'right' || feedback.kind === 'reveal');

  return (
    <div
      role="group"
      aria-label="Where is the Moon? Use the arrow keys, or drag the Moon round its orbit."
      tabIndex={0}
      onKeyDown={onKey}
      className={`mx-auto w-full max-w-3xl space-y-3 rounded-2xl outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 ${className ?? ''}`}
    >
      <div className="rounded-xl bg-indigo-50 p-4 text-center font-semibold text-indigo-800" aria-live="polite">
        {prompt ? prompt.question : 'Now explore: drag the Moon round its orbit and watch both views change.'}
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {/* SPACE VIEW */}
        <div>
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl bg-slate-900">
            <Boundary onError={() => setFailed(true)}>
              <Moon3DScene
                angle={angle}
                onDrag={onDrag}
                onRelease={onRelease}
                onPick={goTo}
                onContextLost={() => setFailed(true)}
              />
            </Boundary>
            <span className="pointer-events-none absolute left-2 top-2 rounded bg-slate-800/80 px-2 py-0.5 text-xs font-bold text-amber-300">Sun</span>
            <span className="pointer-events-none absolute bottom-2 left-2 rounded bg-slate-800/80 px-2 py-0.5 text-xs font-bold text-slate-200">Space view</span>
          </div>
        </div>

        {/* VIEW FROM SOUTH AFRICA */}
        <div className="flex flex-col items-center justify-center rounded-2xl bg-slate-900 p-4 text-center">
          <svg viewBox="0 0 24 24" className="h-28 w-28" role="img" aria-label={`The ${phase.name} as seen from South Africa`}>
            <Face index={index} cx={12} cy={12} r={10} />
          </svg>
          <p className="mt-2 text-xl font-black text-white" aria-live="polite">
            {phase.name}
          </p>
          <p className="text-sm text-slate-300">
            {side === 'left' ? 'lit on the left' : side === 'right' ? 'lit on the right' : side === 'full' ? 'whole face lit' : 'we cannot see it'}
          </p>
          <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-400">View from South Africa</p>
        </div>
      </div>

      {feedback && (
        <p
          role="status"
          className={`rounded-xl p-4 text-center font-semibold ${
            feedback.kind === 'wrong' ? 'bg-amber-50 text-amber-800' : 'bg-emerald-50 text-emerald-800'
          }`}
        >
          {feedback.text}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous phase"
          className="min-h-[44px] rounded-xl border-2 border-slate-300 bg-white px-4 font-bold text-slate-700 hover:bg-slate-50"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next phase"
          className="min-h-[44px] rounded-xl border-2 border-slate-300 bg-white px-4 font-bold text-slate-700 hover:bg-slate-50"
        >
          Next
        </button>
        {prompt && !answered && (
          <button
            type="button"
            onClick={check}
            disabled={dragging}
            className="min-h-[44px] rounded-xl bg-indigo-600 px-5 font-bold text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            Check
          </button>
        )}
        {prompt && answered && (
          <button type="button" onClick={next} className="min-h-[44px] rounded-xl bg-emerald-600 px-5 font-bold text-white hover:bg-emerald-700">
            {stage === PROMPTS.length - 1 ? 'Explore' : 'Next question'}
          </button>
        )}
        {!prompt && (
          <button type="button" onClick={restart} className="min-h-[44px] rounded-xl border-2 border-indigo-300 bg-white px-4 font-bold text-indigo-700 hover:bg-indigo-50">
            Start again
          </button>
        )}
        <button
          type="button"
          onClick={() => setSimple(true)}
          className="min-h-[44px] rounded-xl px-3 text-sm font-bold text-slate-500 underline hover:text-slate-700"
        >
          Use simple view
        </button>
      </div>
    </div>
  );
};

export default MoonDual;
