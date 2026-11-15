import { partsText, shareWidths, totalMinutes } from './lessonHelpers';
import type { Role, RolePart, TimeShare } from './lessonHelpers';

/**
 * Pictures for the Grade 7 English lessons (drama, project language, persuasive texts, exam
 * writing). Hand-built SVG or plain HTML and CSS so the words stay real text and wrap on a phone.
 * Every picture has an aria description and at most six labels.
 */

const INK = '#0f172a';
const SOFT = '#cbd5e1';
const COLORS = ['#60a5fa', '#34d399', '#fbbf24', '#fb7185'];
const panel = 'mx-auto w-full max-w-md rounded-2xl p-4 text-left';
const panelStyle = { background: INK, fontFamily: 'inherit' } as const;

/* ------------------------------------------------------------------ FlowSteps */

export interface Step { title: string; note: string }

/** Boxes stacked top to bottom with arrows: one idea leads to the next. Up to four steps. */
export const FlowSteps = ({ steps, aria }: { steps: readonly Step[]; aria: string }) => {
  const h = 46;
  const gap = 16;
  const height = steps.length * h + (steps.length - 1) * gap + 12;
  return (
    <svg viewBox={`0 0 280 ${height}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
      {steps.map((s, i) => {
        const y = 6 + i * (h + gap);
        const c = COLORS[i % COLORS.length];
        return (
          <g key={s.title}>
            <rect x={12} y={y} width={256} height={h} rx={10} fill={c} />
            <text x={140} y={y + 19} textAnchor="middle" fontSize={14} fontWeight={800} fill={INK}>{s.title}</text>
            <text x={140} y={y + 36} textAnchor="middle" fontSize={11.5} fontWeight={600} fill={INK}>{s.note}</text>
            {i < steps.length - 1 && <path d={`M140 ${y + h + 2} v${gap - 8} m-5 -5 l5 5 l5 -5`} stroke={SOFT} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />}
          </g>
        );
      })}
    </svg>
  );
};

/* ------------------------------------------------------------------- TimeBar */

/** One bar split in proportion to the minutes given to each step. */
export const TimeBar = ({ shares }: { shares: readonly TimeShare[] }) => {
  const widths = shareWidths(shares, 280);
  let x = 10;
  return (
    <svg
      viewBox="0 0 300 92"
      role="img"
      aria-label={`One bar showing how to share ${totalMinutes(shares)} minutes: ${shares.map((s) => `${s.label} ${s.minutes} minutes`).join(', ')}.`}
      className="mx-auto block w-full max-w-md rounded-2xl"
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      {shares.map((s, i) => {
        const x0 = x;
        x += widths[i];
        return (
          <g key={s.label}>
            <rect x={x0} y={12} width={widths[i] - 2} height={46} rx={6} fill={COLORS[i % COLORS.length]} />
            <text x={x0 + widths[i] / 2 - 1} y={31} textAnchor="middle" fontSize={12} fontWeight={800} fill={INK}>{s.label}</text>
            <text x={x0 + widths[i] / 2 - 1} y={48} textAnchor="middle" fontSize={11} fontWeight={700} fill={INK}>{s.minutes} min</text>
          </g>
        );
      })}
      <text x={150} y={82} textAnchor="middle" fontSize={12} fontWeight={700} fill={SOFT}>{totalMinutes(shares)} minutes in all</text>
    </svg>
  );
};

/* -------------------------------------------------------------- ScriptSample */

export interface ScriptLine { speaker: string; direction: string; speech: string }

const SPEAKER = '#60a5fa';
const DIRECTION = '#fbbf24';
const SPEECH = '#f1f5f9';

/** A few lines of a script with the three features coloured and keyed underneath. */
export const ScriptSample = ({ lines }: { lines: readonly ScriptLine[] }) => (
  <div className={`${panel} space-y-3`} style={panelStyle}>
    <div role="group" aria-label={`A script. ${lines.map((l) => `${l.speaker}, stage direction ${l.direction}, says: ${l.speech}`).join(' ')}`} className="space-y-2.5">
      {lines.map((l) => (
        <p key={l.speaker} className="text-[15px] leading-snug">
          <span className="font-extrabold uppercase tracking-wide" style={{ color: SPEAKER }}>{l.speaker}</span>{' '}
          <span className="font-semibold italic" style={{ color: DIRECTION }}>({l.direction})</span>{' '}
          <span className="font-semibold" style={{ color: SPEECH }}>{l.speech}</span>
        </p>
      ))}
    </div>
    <ul className="space-y-1 border-t border-slate-700 pt-2.5 text-sm font-bold">
      <li style={{ color: SPEAKER }}>Name: who is speaking</li>
      <li style={{ color: DIRECTION }}>(Stage direction): action, movement, mood</li>
      <li style={{ color: SPEECH }}>Dialogue: the words spoken aloud</li>
    </ul>
  </div>
);

/* ------------------------------------------------------------------ VoiceSwap */

const ROLE_COLOR: Record<Role, string> = { subject: '#60a5fa', verb: '#2dd4bf', object: '#fbbf24', be: '#fb7185', by: '#fb7185' };

const Chips = ({ parts, label }: { parts: readonly RolePart[]; label: string }) => (
  <div role="group" aria-label={`${label}: ${partsText(parts)}`} className="space-y-1">
    <p className="text-xs font-extrabold uppercase tracking-wide text-slate-300">{label}</p>
    <div className="flex flex-wrap items-center gap-1.5">
      {parts.map((p, i) => (
        <span key={i} className="rounded-md px-2 py-1 text-sm font-extrabold" style={{ background: ROLE_COLOR[p.role], color: INK }}>{p.text}</span>
      ))}
    </div>
  </div>
);

/** Active and passive side by side: the doer and the receiver swap places, "be" and "by" appear. */
export const VoiceSwap = ({ active, passive }: { active: readonly RolePart[]; passive: readonly RolePart[] }) => (
  <div className={`${panel} space-y-2.5`} style={panelStyle}>
    <Chips parts={active} label="Active: the doer comes first" />
    <p aria-hidden className="text-center text-xl font-black text-slate-400">↓</p>
    <Chips parts={passive} label="Passive: the receiver comes first" />
    <ul className="space-y-1 border-t border-slate-700 pt-2.5 text-xs font-bold text-slate-300">
      <li><span style={{ color: ROLE_COLOR.subject }}>Blue</span> = starts the sentence, <span style={{ color: ROLE_COLOR.object }}>amber</span> = the other noun</li>
      <li><span style={{ color: ROLE_COLOR.verb }}>Teal</span> = the main verb, <span style={{ color: ROLE_COLOR.be }}>rose</span> = new helper words (be, by)</li>
    </ul>
  </div>
);

/* -------------------------------------------------------------- PosterLayout */

export const POSTER_KEY = ['Hook: the biggest words, read first', 'Image: bright, shows the product', 'Slogan: short and catchy', 'Action: what to do next'] as const;

/** A poster drawn as plain boxes, numbered in reading order, with the key underneath. */
export const PosterLayout = () => (
  <div className={`${panel} space-y-2.5`} style={panelStyle}>
    <svg viewBox="0 0 160 190" role="img" aria-label={`A poster drawn as boxes, numbered in the order the eye reads it: ${POSTER_KEY.map((k, i) => `${i + 1}, ${k}`).join('; ')}.`} className="mx-auto block w-40">
      <rect x={4} y={4} width={152} height={182} rx={8} fill="#f8fafc" />
      <rect x={14} y={14} width={132} height={30} rx={5} fill={COLORS[0]} />
      <rect x={14} y={52} width={132} height={74} rx={5} fill={COLORS[1]} />
      <path d="M14 126 L50 82 L76 108 L100 74 L146 126 Z" fill="#047857" opacity={0.55} />
      <rect x={14} y={134} width={132} height={22} rx={5} fill={COLORS[2]} />
      <rect x={44} y={162} width={72} height={18} rx={9} fill={COLORS[3]} />
      {[29, 89, 145, 171].map((cy, i) => (
        <g key={i}>
          <circle cx={26} cy={cy} r={8} fill={INK} />
          <text x={26} y={cy + 4} textAnchor="middle" fontSize={11} fontWeight={800} fill="#fff">{i + 1}</text>
        </g>
      ))}
    </svg>
    <ol className="space-y-1 text-sm font-bold text-slate-200">
      {POSTER_KEY.map((k, i) => (
        <li key={k} className="flex items-center gap-2">
          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full text-[11px] font-black" style={{ background: COLORS[i], color: INK }}>{i + 1}</span>
          {k}
        </li>
      ))}
    </ol>
  </div>
);
