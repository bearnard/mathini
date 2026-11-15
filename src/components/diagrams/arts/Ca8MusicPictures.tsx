import { r3 } from '../round';
import { barLayout, barSeconds, beatsPerBar, DYNAMICS, formName, noteStep, onLine, secondsPerBeat } from './ca8-music-helpers';
import type { Part, Sound, TimeSig } from './ca8-music-helpers';

/**
 * Pictures for the Grade 8 Creative Arts music lessons: a dark panel, a 120-unit-wide viewBox and a
 * few named parts. Every position comes from ca8-music-helpers.ts (beats, staff steps, form
 * letters, tempo), so a picture always matches its worked example. Each has an `aria` description.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const BLUE = '#818cf8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

const T = ({ x, y, children, size = 5, fill = LINE, anchor = 'middle', weight = 800 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>
    {children}
  </text>
);

const comma = (n: number): string => String(n).replace('.', ',');

// ---------- beats grouped into bars ----------

export const BeatPulse = ({ sig, bars, aria }: { sig: TimeSig; bars: number; aria: string }) => {
  const per = beatsPerBar(sig);
  const total = per * bars;
  const x0 = 10;
  const w = 100;
  const gap = w / total;
  return (
    <Panel h={46} aria={aria}>
      {Array.from({ length: total }, (_, i) => {
        const inBar = i % per;
        const cx = r3(x0 + gap * (i + 0.5));
        return (
          <g key={i}>
            <circle cx={cx} cy={20} r={inBar === 0 ? 5 : 3.4} fill={inBar === 0 ? AMBER : BLUE} />
            <T x={cx} y={35} size={5} fill={inBar === 0 ? AMBER : LINE}>{inBar + 1}</T>
          </g>
        );
      })}
      {Array.from({ length: bars + 1 }, (_, b) => (
        <line key={b} x1={r3(x0 + gap * per * b)} y1={9} x2={r3(x0 + gap * per * b)} y2={31} stroke={MUTED} strokeWidth={0.8} />
      ))}
      <T x={x0 + 1} y={43} anchor="start" size={4.4} fill={MUTED}>{sig}: {per} beats in every bar</T>
    </Panel>
  );
};

// ---------- note and rest values drawn to scale ----------

const BLOCK_COLOUR: Record<string, string> = { semibreve: ROSE, minim: AMBER, crotchet: GREEN, quaver: BLUE };

export const RhythmBars = ({ rows, aria }: { rows: readonly { sig: TimeSig; bar: readonly Sound[]; total: number }[]; aria: string }) => {
  const x0 = 12;
  const scale = 24; // units per beat
  const rowH = 24;
  return (
    <Panel h={rows.length * rowH + 8} aria={aria}>
      {rows.map((row, ri) => {
        const y = 8 + ri * rowH;
        return (
          <g key={ri}>
            <T x={2} y={y + 11} anchor="start" size={4.8} fill={MUTED}>{row.sig}</T>
            {barLayout(row.bar).map((s, i) => {
              const x = r3(x0 + s.start * scale);
              const w = r3(s.beats * scale - 1.2);
              const c = BLOCK_COLOUR[s.value];
              const name = s.value === 'semibreve' ? 'semib.' : s.value;
              return (
                <g key={i}>
                  <rect x={x} y={y} width={w} height={16} rx={2.5} fill={s.rest ? 'none' : c} fillOpacity={s.rest ? 0 : 0.9} stroke={c} strokeWidth={s.rest ? 0.9 : 0} strokeDasharray={s.rest ? '2 1.4' : undefined} />
                  <T x={r3(x + w / 2)} y={y + 6.4} size={s.beats < 1 ? 3.6 : 4.4} fill={s.rest ? c : INK}>{s.beats < 1 ? 'q' : name}</T>
                  {s.rest ? <T x={r3(x + w / 2)} y={y + 12.4} size={4.2} fill={c}>rest</T> : null}
                </g>
              );
            })}
            <T x={r3(x0 + beatsPerBar(row.sig) * scale + 2)} y={y + 11} anchor="start" size={4.8}>= {row.total}</T>
          </g>
        );
      })}
    </Panel>
  );
};

// ---------- pitch on the staff ----------

export const StaffNotes = ({ notes, aria }: { notes: readonly string[]; aria: string }) => {
  const bottom = 40; // y of the bottom line (E4)
  const half = 2.6; // y per staff step
  const y = (step: number) => r3(bottom - step * half);
  const xs = (i: number) => r3(24 + (i * 86) / Math.max(notes.length - 1, 1));
  return (
    <Panel h={66} aria={aria}>
      {[0, 2, 4, 6, 8].map((s) => (
        <line key={s} x1={8} y1={y(s)} x2={114} y2={y(s)} stroke={MUTED} strokeWidth={0.7} />
      ))}
      {notes.map((n, i) => {
        const step = noteStep(n);
        return (
          <g key={`${n}${i}`}>
            {step <= -2 && step % 2 === 0 ? <line x1={xs(i) - 5} y1={y(step)} x2={xs(i) + 5} y2={y(step)} stroke={MUTED} strokeWidth={0.7} /> : null}
            <ellipse cx={xs(i)} cy={y(step)} rx={3.4} ry={2.5} fill={onLine(step) ? AMBER : GREEN} transform={`rotate(-15 ${xs(i)} ${y(step)})`} />
            <T x={xs(i)} y={60} size={5} fill={LINE}>{n.replace(/[0-9]/, '')}</T>
          </g>
        );
      })}
      <T x={8} y={11} anchor="start" size={4.6} fill={MUTED}>higher on the staff = higher pitch</T>
    </Panel>
  );
};

// ---------- dynamics from pp to ff ----------

export const DynamicsScale = ({ aria }: { aria: string }) => (
  <Panel h={54} aria={aria}>
    {DYNAMICS.map((d, i) => {
      const h = 6 + i * 5.4;
      const x = 10 + i * 17.5;
      return (
        <g key={d.mark}>
          <rect x={x} y={42 - h} width={13} height={h} rx={2} fill={GREEN} fillOpacity={0.35 + i * 0.13} />
          <T x={x + 6.5} y={50} size={5.6} fill={LINE}>{d.mark}</T>
        </g>
      );
    })}
  </Panel>
);

// ---------- call and response ----------

export const CallResponse = ({ sequence, aria }: { sequence: readonly ('call' | 'response')[]; aria: string }) => {
  const w = 100 / sequence.length;
  return (
    <Panel h={44} aria={aria}>
      {sequence.map((s, i) => (
        <g key={i}>
          <rect x={r3(10 + i * w)} y={s === 'call' ? 8 : 22} width={r3(w - 2)} height={12} rx={2.5} fill={s === 'call' ? BLUE : GREEN} />
          {i < 2 ? <T x={r3(10 + i * w + (w - 2) / 2)} y={s === 'call' ? 16.4 : 30.4} size={4.6} fill={INK}>{s}</T> : null}
        </g>
      ))}
      <T x={10} y={41} anchor="start" size={4.4} fill={MUTED}>one phrase is answered by another</T>
    </Panel>
  );
};

// ---------- layers of sound (texture) ----------

export const LayersStack = ({ parts, aria }: { parts: readonly { name: string; playing: boolean }[]; aria: string }) => (
  <Panel h={8 + parts.length * 13 + 4} aria={aria}>
    {parts.map((p, i) => (
      <g key={p.name}>
        <T x={4} y={8 + i * 13 + 8} anchor="start" size={4.8} fill={p.playing ? LINE : MUTED}>{p.name}</T>
        <rect x={42} y={8 + i * 13} width={72} height={9} rx={2} fill={p.playing ? GREEN : 'none'} stroke={p.playing ? GREEN : MUTED} strokeWidth={0.7} strokeDasharray={p.playing ? undefined : '2 1.5'} fillOpacity={0.85} />
      </g>
    ))}
  </Panel>
);

// ---------- binary and ternary form ----------

export const FormBlocks = ({ sections, aria }: { sections: string; aria: string }) => {
  const letters = sections.split('');
  const w = 26;
  const gap = 4;
  const total = letters.length * w + (letters.length - 1) * gap;
  const x0 = (120 - total) / 2;
  const colour = (l: string) => (l === 'A' ? BLUE : l === 'B' ? AMBER : GREEN);
  return (
    <Panel h={46} aria={aria}>
      {letters.map((l, i) => (
        <g key={i}>
          <rect x={r3(x0 + i * (w + gap))} y={8} width={w} height={20} rx={3} fill={colour(l)} fillOpacity={0.9} />
          <T x={r3(x0 + i * (w + gap) + w / 2)} y={22} size={10} fill={INK}>{l}</T>
        </g>
      ))}
      <T x={60} y={40} size={5.4} fill={LINE}>{formName(sections)} form: {sections}</T>
    </Panel>
  );
};

// ---------- an ostinato ----------

export const OstinatoLoop = ({ cell, times, aria }: { cell: readonly string[]; times: number; aria: string }) => {
  const n = cell.length * times;
  const w = Math.min(14, 104 / n - 1.5);
  const step = w + 1.5;
  const x0 = (120 - n * step) / 2 + 0.75;
  return (
    <Panel h={48} aria={aria}>
      {Array.from({ length: n }, (_, i) => (
        <g key={i}>
          <rect x={r3(x0 + i * step)} y={14} width={r3(w)} height={14} rx={2} fill={Math.floor(i / cell.length) === 0 ? AMBER : BLUE} fillOpacity={Math.floor(i / cell.length) === 0 ? 1 : 0.8} />
          <T x={r3(x0 + i * step + w / 2)} y={23.5} size={5} fill={INK}>{cell[i % cell.length].replace(/[0-9]/, '')}</T>
        </g>
      ))}
      <T x={r3(x0 + (cell.length * step) / 2)} y={10} size={4.6} fill={AMBER}>pattern</T>
      <T x={60} y={42} size={4.6} fill={MUTED}>the same pattern repeats {times} times</T>
    </Panel>
  );
};

// ---------- ensemble balance ----------

export const BalanceBars = ({ before, after, aria }: { before: readonly Part[]; after: readonly Part[]; aria: string }) => {
  const draw = (parts: readonly Part[], x0: number, tag: string, colourOf: (p: Part) => string) => (
    <g>
      <T x={x0 + 24} y={9} size={4.8} fill={MUTED}>{tag}</T>
      {parts.map((p, i) => (
        <g key={p.name}>
          <rect x={x0 + i * 16 + 2} y={r3(42 - p.level * 5)} width={12} height={r3(p.level * 5)} rx={1.5} fill={colourOf(p)} />
          <T x={x0 + i * 16 + 8} y={50} size={4.2} fill={LINE}>{p.name}</T>
        </g>
      ))}
    </g>
  );
  const max = Math.max(...after.map((p) => p.level));
  return (
    <Panel h={56} aria={aria}>
      {draw(before, 6, 'before', (p) => (p.level > max ? ROSE : GREEN))}
      {draw(after, 66, 'after', () => GREEN)}
    </Panel>
  );
};

// ---------- tempo on a time line ----------

export const TempoTicks = ({ bpm, sig, aria }: { bpm: number; sig: TimeSig; aria: string }) => {
  const per = beatsPerBar(sig);
  const spb = secondsPerBeat(bpm);
  const bar = barSeconds(bpm, sig);
  const scale = 100 / (bar * 2); // two bars across the panel
  return (
    <Panel h={52} aria={aria}>
      <line x1={10} y1={22} x2={110} y2={22} stroke={MUTED} strokeWidth={0.8} />
      {Array.from({ length: per * 2 }, (_, i) => (
        <g key={i}>
          <line x1={r3(10 + i * spb * scale)} y1={i % per === 0 ? 14 : 17} x2={r3(10 + i * spb * scale)} y2={26} stroke={i % per === 0 ? AMBER : BLUE} strokeWidth={i % per === 0 ? 1.6 : 1.1} />
        </g>
      ))}
      <T x={10} y={9} anchor="start" size={5} fill={AMBER}>{bpm} beats a minute</T>
      <T x={r3(10 + (spb * scale) / 2)} y={36} size={4.4} fill={LINE}>{comma(spb)} s</T>
      <T x={r3(10 + (bar * scale) / 2)} y={46} size={4.8} fill={GREEN}>one bar: {comma(bar)} s</T>
    </Panel>
  );
};
