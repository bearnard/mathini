import { r3 } from '../round';
import { BAR_UNITS, countedBeats, majorScale, MAJOR_PATTERN, scaleOnStaff, TEMPO_ORDER, UNITS } from './ca8-music-gaps';
import type { Key, Metre } from './ca8-music-gaps';
import { noteStep, onLine } from './ca8-music-helpers';

/**
 * Pictures for the Grade 8 Creative Arts music lessons on scales and keys, 6/8 and the triplet, and tempo words. A dark panel, a
 * 120-unit-wide viewBox; every position comes from ca8-music-gaps.ts so a picture matches its worked example. Each has an `aria`.
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

// ---------- a major scale on the staff with tone / semitone gaps ----------

export const ScaleOnStaff = ({ keyName, aria }: { keyName: Key; aria: string }) => {
  const notes = scaleOnStaff(keyName);
  const names = majorScale(keyName);
  const bottom = 38;
  const half = 2.6;
  const y = (step: number) => r3(bottom - step * half);
  const xs = (i: number) => r3(16 + (i * 92) / 7);
  return (
    <Panel h={72} aria={aria}>
      {[0, 2, 4, 6, 8].map((s) => (
        <line key={s} x1={6} y1={y(s)} x2={114} y2={y(s)} stroke={MUTED} strokeWidth={0.7} />
      ))}
      {notes.map((n, i) => {
        const step = noteStep(n);
        const accidental = names[i].length > 1 ? names[i][1] : '';
        return (
          <g key={i}>
            {step <= -2 && step % 2 === 0 ? <line x1={xs(i) - 5} y1={y(step)} x2={xs(i) + 5} y2={y(step)} stroke={MUTED} strokeWidth={0.7} /> : null}
            <ellipse cx={xs(i)} cy={y(step)} rx={3.2} ry={2.4} fill={onLine(step) ? AMBER : GREEN} transform={`rotate(-15 ${xs(i)} ${y(step)})`} />
            {accidental ? <T x={r3(xs(i) - 6.4)} y={r3(y(step) + 1.8)} size={5.6} fill={ROSE}>{accidental}</T> : null}
            <T x={xs(i)} y={52} size={5} fill={LINE}>{names[i]}</T>
          </g>
        );
      })}
      {MAJOR_PATTERN.map((s, i) => (
        <T key={i} x={r3((xs(i) + xs(i + 1)) / 2)} y={64} size={4.6} fill={s === 2 ? BLUE : ROSE}>{s === 2 ? 'T' : 'S'}</T>
      ))}
      <T x={6} y={9} anchor="start" size={4.6} fill={MUTED}>{keyName} major: T = tone, S = semitone</T>
    </Panel>
  );
};

// ---------- how a bar is divided: 6/8 in two groups of three, or a crotchet split into three ----------

export const BarGroups = ({ metre, aria }: { metre: Metre; aria: string }) => {
  const quavers = BAR_UNITS[metre] / UNITS.quaver;
  const per = metre === '6/8' ? 3 : 2; // quavers grouped under one beat
  const w = Math.min(14, 100 / quavers - 1.4);
  const step = w + 1.4;
  const x0 = (120 - quavers * step) / 2 + 0.7;
  const beats = countedBeats(metre);
  return (
    <Panel h={50} aria={aria}>
      {Array.from({ length: quavers }, (_, i) => {
        const beat = Math.floor(i / per);
        return (
          <g key={i}>
            <rect x={r3(x0 + i * step)} y={16} width={r3(w)} height={13} rx={2} fill={beat % 2 === 0 ? AMBER : BLUE} fillOpacity={0.9} />
            <T x={r3(x0 + i * step + w / 2)} y={25} size={4.6} fill={INK}>{i % per === 0 ? String(beat + 1) : '·'}</T>
          </g>
        );
      })}
      <T x={60} y={10} size={4.8} fill={MUTED}>{metre}: {quavers} quavers in the bar</T>
      <T x={60} y={41} size={4.6} fill={GREEN}>{beats} beats counted, {per} quavers in each</T>
    </Panel>
  );
};

export const TripletBeat = ({ aria }: { aria: string }) => {
  const rows = [
    { label: 'crotchet', notes: 1, colour: GREEN },
    { label: 'two quavers', notes: 2, colour: AMBER },
    { label: 'triplet', notes: 3, colour: ROSE },
  ];
  const width = 66;
  return (
    <Panel h={60} aria={aria}>
      {rows.map((r, ri) => {
        const y = 6 + ri * 15;
        const w = (width - (r.notes - 1) * 1.2) / r.notes;
        return (
          <g key={r.label}>
            <T x={2} y={y + 8.4} anchor="start" size={4.4} fill={MUTED}>{r.label}</T>
            {Array.from({ length: r.notes }, (_, i) => (
              <rect key={i} x={r3(40 + i * (w + 1.2))} y={y} width={r3(w)} height={11} rx={2} fill={r.colour} fillOpacity={0.9} />
            ))}
          </g>
        );
      })}
      <T x={r3(40 + width / 2)} y={57} size={4.4} fill={LINE}>each row fills one beat</T>
    </Panel>
  );
};

// ---------- tempo words from slow to fast ----------

export const TempoLadder = ({ aria }: { aria: string }) => (
  <Panel h={52} aria={aria}>
    <line x1={10} y1={26} x2={110} y2={26} stroke={MUTED} strokeWidth={0.8} />
    {TEMPO_ORDER.map((w, i) => {
      const x = r3(18 + (i * 84) / (TEMPO_ORDER.length - 1));
      return (
        <g key={w}>
          <circle cx={x} cy={26} r={3.2} fill={[BLUE, GREEN, AMBER, ROSE][i]} />
          <T x={x} y={19} size={4.8} fill={LINE}>{w}</T>
          <T x={x} y={38} size={3.8} fill={MUTED}>{['walking', 'moderate', 'fast', 'very fast'][i]}</T>
        </g>
      );
    })}
    <T x={10} y={9} anchor="start" size={4.6} fill={MUTED}>slower</T>
    <T x={110} y={9} anchor="end" size={4.6} fill={MUTED}>faster</T>
    <T x={60} y={48} size={4.4} fill={AMBER}>ritardando slows down, a tempo goes back</T>
  </Panel>
);
