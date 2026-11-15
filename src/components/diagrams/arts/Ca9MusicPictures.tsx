import { r3 } from '../round';
import { NOTE_BEATS, TEMPO_LADDER, barCheck, formMap, ledgerSteps, pieceBars } from './ca9-music-helpers';
import type { NoteName, TimeSig } from './ca9-music-helpers';

/**
 * Pictures for the Grade 9 music lessons: a dark panel, a 120-unit-wide viewBox and a few named
 * parts. Block widths, staff positions and bar counts are drawn from the numbers passed in (from
 * ca9-music-helpers.ts), never by eye. Every picture has an `aria` description.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const BLUE = '#818cf8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';
const PALETTE = [BLUE, GREEN, AMBER, ROSE];

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

const T = ({ x, y, children, size = 4.8, fill = LINE, anchor = 'middle', weight = 800 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>
    {children}
  </text>
);

// ---------- rhythm bars: block width = number of beats ----------

const NOTE_COLOR: Record<NoteName, string> = { semibreve: BLUE, minim: GREEN, crotchet: AMBER, quaver: ROSE, semiquaver: '#38bdf8' };
const BEAT_TEXT: Record<NoteName, string> = { semibreve: '4', minim: '2', crotchet: '1', quaver: '½', semiquaver: '¼' };

export const RhythmBars = ({ bars, sig, aria }: { bars: readonly (readonly NoteName[])[]; sig: TimeSig; aria: string }) => {
  const X0 = 22;
  const W = 92;
  const rowH = 17;
  const h = 10 + bars.length * rowH + 12;
  const need = (sig.beats * 4) / sig.unit;
  const used = new Set(bars.flat());
  const legend = (Object.keys(NOTE_BEATS) as NoteName[]).filter((n) => used.has(n));
  return (
    <Panel h={h} aria={aria}>
      {bars.map((bar, bi) => {
        const y = 8 + bi * rowH;
        let x = X0;
        const { total } = barCheck(bar, sig);
        return (
          <g key={bi}>
            <T x={3} y={y + 7.5} anchor="start" size={4.6} fill={MUTED}>Bar {bi + 1}</T>
            {bar.map((n, i) => {
              const w = r3((NOTE_BEATS[n] / need) * W);
              const el = (
                <g key={i}>
                  <rect x={x + 0.4} y={y} width={Math.max(w - 0.8, 0.5)} height={10} rx={1.6} fill={NOTE_COLOR[n]} fillOpacity={0.9} />
                  <T x={r3(x + w / 2)} y={y + 7} size={5} fill={INK}>{BEAT_TEXT[n]}</T>
                </g>
              );
              x += w;
              return el;
            })}
            <T x={X0 + W} y={y + 14} anchor="end" size={4.4} fill={MUTED}>{total} of {need} beats</T>
          </g>
        );
      })}
      <T x={3} y={h - 3} anchor="start" size={4.4} fill={MUTED}>{legend.map((n) => `${n} ${BEAT_TEXT[n]}`).join(' · ')}</T>
    </Panel>
  );
};

// ---------- the treble staff ----------

export interface StaffColumn {
  steps: readonly number[];
  /** one entry per step: -1 flat, 0 natural, 1 sharp */
  accs?: readonly (-1 | 0 | 1)[];
  below?: string;
  above?: string;
}

export const Staff = ({ columns, caption, aria }: { columns: readonly StaffColumn[]; caption?: string; aria: string }) => {
  const Y0 = 46; // y of step 0 (the bottom line)
  const y = (s: number) => r3(Y0 - s * 2.5);
  const left = 14;
  const right = 114;
  const gap = columns.length > 1 ? (right - 12 - left - 6) / (columns.length - 1) : 0;
  const cx = (i: number) => (columns.length === 1 ? r3((left + right) / 2) : r3(left + 12 + i * gap));
  const all = columns.flatMap((c) => c.steps);
  return (
    <Panel h={74} aria={aria}>
      <T x={3} y={71} anchor="start" size={4.6} fill={MUTED}>Treble staff</T>
      {[0, 2, 4, 6, 8].map((s) => (
        <line key={s} x1={left} y1={y(s)} x2={right} y2={y(s)} stroke={LINE} strokeWidth={0.6} />
      ))}
      {columns.map((c, i) => {
        const x = cx(i);
        const ledgers = ledgerSteps(c.steps);
        return (
          <g key={i}>
            {ledgers.map((l) => (
              <line key={l} x1={x - 4.4} y1={y(l)} x2={x + 4.4} y2={y(l)} stroke={LINE} strokeWidth={0.6} />
            ))}
            {c.steps.map((s, k) => (
              <g key={k}>
                <ellipse cx={x} cy={y(s)} rx={2.7} ry={1.95} fill={GREEN} transform={`rotate(-18 ${x} ${y(s)})`} />
                {c.accs && c.accs[k] === 1 && <T x={x - 6} y={y(s) + 1.7} size={5.4} fill={AMBER}>♯</T>}
                {c.accs && c.accs[k] === -1 && <T x={x - 6} y={y(s) + 1.7} size={5.4} fill={AMBER}>♭</T>}
              </g>
            ))}
            {c.steps.length === 1 && <line x1={x + 2.5} y1={y(c.steps[0])} x2={x + 2.5} y2={y(c.steps[0] + (c.steps[0] >= 4 ? -6 : 6))} stroke={GREEN} strokeWidth={0.7} />}
            {c.below && <T x={x} y={62} size={4.6}>{c.below}</T>}
            {c.above && <T x={x} y={Math.min(y(Math.max(...all)) - 8, y(8) - 4)} size={4.6} fill={AMBER}>{c.above}</T>}
          </g>
        );
      })}
      {caption && <T x={60} y={71} size={4.4} fill={MUTED}>{caption}</T>}
    </Panel>
  );
};

// ---------- a phrase: an arc over notes, louder then softer ----------

export const PhraseArc = ({ notes = 8, bars, beats, aria }: { notes?: number; bars: number; beats: number; aria: string }) => {
  const X0 = 14;
  const X1 = 108;
  const pts = Array.from({ length: notes }, (_, i) => {
    const t = i / (notes - 1);
    return { x: r3(X0 + t * (X1 - X0)), y: r3(46 - 18 * Math.sin(Math.PI * t) * 0.9 - 4 * Math.sin(2 * Math.PI * t) * 0.3) };
  });
  const peak = Math.floor(notes / 2) - 1;
  return (
    <Panel h={76} aria={aria}>
      <path d={`M${X0 - 2} ${r3(pts[0].y - 7)} Q60 4 ${X1 + 2} ${r3(pts[notes - 1].y - 7)}`} fill="none" stroke={BLUE} strokeWidth={1} strokeLinecap="round" />
      <T x={60} y={12} size={4.8} fill={BLUE}>one phrase, one breath</T>
      <polyline points={pts.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke={MUTED} strokeWidth={0.6} strokeDasharray="1.5 1.5" />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={i === peak ? 2.6 : 2} fill={i === peak ? AMBER : GREEN} />
      ))}
      <T x={pts[peak].x} y={r3(pts[peak].y + 8)} size={4.6} fill={AMBER}>peak</T>
      <path d={`M${X0} 62 L${r3((X0 + X1) / 2)} 58 M${X0} 62 L${r3((X0 + X1) / 2)} 66`} stroke={LINE} strokeWidth={0.7} fill="none" />
      <path d={`M${r3((X0 + X1) / 2)} 58 L${X1} 62 M${r3((X0 + X1) / 2)} 66 L${X1} 62`} stroke={LINE} strokeWidth={0.7} fill="none" />
      <T x={r3((X0 + (X0 + X1) / 2) / 2)} y={73} size={4.4} fill={MUTED}>gradually louder</T>
      <T x={r3(((X0 + X1) / 2 + X1) / 2)} y={73} size={4.4} fill={MUTED}>gradually softer</T>
      <T x={60} y={50} size={4.4} fill={MUTED}>{bars} bars = {beats} beats</T>
    </Panel>
  );
};

// ---------- tempo ladder ----------

export const TempoLadder = ({ aria }: { aria: string }) => (
  <Panel h={62} aria={aria}>
    {TEMPO_LADDER.map((t, i) => {
      const w = 20;
      const x = 6 + i * 22.6;
      const hgt = 8 + i * 5;
      return (
        <g key={t.term}>
          <rect x={x} y={r3(40 - hgt)} width={w} height={hgt} rx={2} fill={PALETTE[i % 4]} fillOpacity={0.85} />
          <T x={x + w / 2} y={48} size={4.4}>{t.term}</T>
          <T x={x + w / 2} y={54.5} size={4.4} fill={MUTED} weight={600}>{t.meaning}</T>
        </g>
      );
    })}
    <T x={6} y={8} anchor="start" size={4.8} fill={AMBER}>slower</T>
    <T x={114} y={8} anchor="end" size={4.8} fill={AMBER}>faster</T>
  </Panel>
);

// ---------- call and response ----------

export const CallResponse = ({ slots, aria }: { slots: number; aria: string }) => {
  const X0 = 24;
  const W = (112 - X0) / slots;
  return (
    <Panel h={46} aria={aria}>
      <T x={3} y={15} anchor="start" size={4.8} fill={BLUE}>Leader</T>
      <T x={3} y={34} anchor="start" size={4.8} fill={GREEN}>Group</T>
      {Array.from({ length: slots }, (_, i) => {
        const leader = i % 2 === 0;
        const x = r3(X0 + i * W);
        return (
          <g key={i}>
            <rect x={x + 0.8} y={leader ? 8 : 27} width={W - 1.6} height={10} rx={2} fill={leader ? BLUE : GREEN} />
            <T x={r3(x + W / 2)} y={leader ? 15 : 34} size={4.4} fill={INK}>{leader ? 'call' : 'answer'}</T>
          </g>
        );
      })}
      <T x={68} y={44} size={4.4} fill={MUTED}>taking turns, one after the other</T>
    </Panel>
  );
};

// ---------- texture: how many layers at once ----------

export const TextureLayers = ({ sparse, dense, aria }: { sparse: number; dense: number; aria: string }) => {
  const col = (n: number, x0: number, label: string, color: string) => (
    <g>
      {Array.from({ length: n }, (_, k) => (
        <g key={k}>
          {Array.from({ length: 6 }, (_, j) => (
            <rect key={j} x={x0 + j * 8 + (k % 2) * 2} y={10 + k * 8} width={5.4} height={4.2} rx={1.4} fill={color} fillOpacity={0.9 - k * 0.1} />
          ))}
        </g>
      ))}
      <T x={x0 + 24} y={52} size={4.8} fill={color}>{label}</T>
    </g>
  );
  return (
    <Panel h={58} aria={aria}>
      {col(sparse, 6, `${sparse} layer: thin`, BLUE)}
      {col(dense, 66, `${dense} layers: thick`, GREEN)}
    </Panel>
  );
};

// ---------- form blocks ----------

export const FormBlocks = ({ form, barsEach, aria }: { form: string; barsEach: number; aria: string }) => {
  const f = formMap(form);
  const W = 100 / f.sections.length;
  const colorOf = (s: string) => PALETTE[[...new Set(f.sections)].indexOf(s) % 4];
  return (
    <Panel h={40} aria={aria}>
      {f.sections.map((s, i) => (
        <g key={i}>
          <rect x={r3(10 + i * W + 0.8)} y={8} width={r3(W - 1.6)} height={16} rx={3} fill={colorOf(s)} />
          <T x={r3(10 + i * W + W / 2)} y={19} size={8} fill={INK}>{s}</T>
        </g>
      ))}
      <T x={60} y={34} size={4.6} fill={MUTED}>{form}: {f.name} · {pieceBars(form, barsEach)} bars in all</T>
    </Panel>
  );
};

// ---------- an ostinato under a melody ----------

export const OstinatoRepeat = ({ total, bars, aria }: { total: number; bars: number; aria: string }) => {
  const X0 = 24;
  const W = (112 - X0) / total;
  const reps = Math.floor(total / bars);
  return (
    <Panel h={50} aria={aria}>
      <T x={3} y={15} anchor="start" size={4.8} fill={BLUE}>Melody</T>
      <rect x={X0} y={8} width={r3(W * total)} height={10} rx={2} fill={BLUE} fillOpacity={0.35} stroke={BLUE} strokeWidth={0.6} />
      <T x={3} y={34} anchor="start" size={4.8} fill={GREEN}>Ostinato</T>
      {Array.from({ length: reps }, (_, i) => (
        <rect key={i} x={r3(X0 + i * bars * W + 0.6)} y={27} width={r3(bars * W - 1.2)} height={10} rx={2} fill={GREEN} />
      ))}
      <T x={68} y={47} size={4.4} fill={MUTED}>a {bars}-bar pattern repeated {reps} times</T>
    </Panel>
  );
};

// ---------- key signatures as chips ----------

export const KeyChips = ({ keys, aria }: { keys: readonly { key: string; text: string }[]; aria: string }) => (
  <ul aria-label={aria} className="mx-auto grid w-full max-w-md grid-cols-2 gap-2 rounded-2xl p-3 text-left" style={{ background: INK }}>
    {keys.map((k, i) => (
      <li key={k.key} className="rounded-xl px-3 py-2 text-[13px] text-slate-100" style={{ border: `1.5px solid ${PALETTE[i % 4]}` }}>
        <span className="font-extrabold" style={{ color: PALETTE[i % 4] }}>{k.key}</span>
        <span className="block text-slate-200">{k.text}</span>
      </li>
    ))}
  </ul>
);
