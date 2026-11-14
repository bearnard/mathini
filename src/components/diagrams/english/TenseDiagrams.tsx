import { ROLE_COLOR, ROLE_NOTE, ROLE_SENTENCE, TENSE_COLOR, TENSE_NOTE, TENSE_CHECKS, keepsTense, tokensText, verbIn } from './tense';
import type { Tense, Token } from './tense';

/**
 * Tense on a timeline, the "keep one tense" check, and word roles in one sentence.
 * Colour carries the meaning: past violet, present cyan, future lime; noun orange, verb teal,
 * adjective fuchsia. The words are real text, the shape of the timeline does the teaching.
 */

const INK = '#0f172a';
const SOFT = '#cbd5e1';
const panel = 'mx-auto w-full max-w-md rounded-2xl p-4 text-left';
const panelStyle = { background: INK, fontFamily: 'inherit' } as const;

/* ------------------------------------------------------------ TenseTimeline */

const XS: Record<number, number[]> = { 2: [45, 105], 3: [27, 75, 123] };

/** One verb changing form along a time arrow. `frame` has `___` where the verb goes. */
export const TenseTimeline = ({ verb, plural, tenses, before, after }: { verb: string; plural: boolean; tenses: Tense[]; before: string; after: string }) => {
  const xs = XS[tenses.length];
  const presentX = xs[tenses.indexOf('present')];
  return (
    <svg
      viewBox="0 0 150 67"
      role="img"
      aria-label={`A time arrow from the past to the future with now in the middle. The verb ${verb} changes: ${tenses.map((t) => `${verbIn(verb, t, plural)}, ${TENSE_NOTE[t]}`).join('; ')}.`}
      className="mx-auto block w-full max-w-md rounded-2xl"
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      <text x={75} y={9.5} textAnchor="middle" fontSize={7} fontWeight={700} fill={SOFT}>
        {before} <tspan fill="#64748b">___</tspan> {after}
      </text>
      <line x1={4} y1={36} x2={141} y2={36} stroke="#64748b" strokeWidth={1.4} />
      <path d="M140 32.6 L146 36 L140 39.4" fill="none" stroke="#64748b" strokeWidth={1.4} />
      <circle cx={presentX} cy={36} r={3} fill="#f8fafc" />
      {tenses.map((t, i) => {
        const x = xs[i];
        const word = verbIn(verb, t, plural);
        const w = Math.max(30, word.length * 4.2 + 10);
        return (
          <g key={t}>
            <path d={`M${x} 28 V33`} stroke={TENSE_COLOR[t]} strokeWidth={1.2} />
            <rect x={x - w / 2} y={15} width={w} height={13} rx={4} fill={TENSE_COLOR[t]} />
            <text x={x} y={24.4} textAnchor="middle" fontSize={7.8} fontWeight={800} fill={INK}>{word}</text>
            <text x={x} y={48} textAnchor="middle" fontSize={6.6} fontWeight={800} fill={TENSE_COLOR[t]}>{t}</text>
            <text x={x} y={56} textAnchor="middle" fontSize={5.8} fontWeight={700} fill={SOFT}>{TENSE_NOTE[t].slice(0, TENSE_NOTE[t].lastIndexOf(' '))}</text>
            <text x={x} y={63} textAnchor="middle" fontSize={5.8} fontWeight={700} fill={SOFT}>{TENSE_NOTE[t].slice(TENSE_NOTE[t].lastIndexOf(' ') + 1)}</text>
          </g>
        );
      })}
    </svg>
  );
};

/* -------------------------------------------------------------- TenseCheck */

const Sentence = ({ tokens }: { tokens: readonly Token[] }) => (
  <p className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1 text-[15px] font-semibold text-slate-100">
    {tokens.map((tk, i) =>
      tk.tense ? (
        <span key={i} className="rounded px-1.5 py-0.5 font-extrabold" style={{ background: TENSE_COLOR[tk.tense], color: INK }}>
          {tk.text}
        </span>
      ) : (
        <span key={i}>{tk.text}</span>
      ),
    )}
  </p>
);

/** The exam mistake (a tense that jumps) and its correction, marked with a cross and a tick. */
export const TenseCheck = ({ which }: { which: keyof typeof TENSE_CHECKS }) => {
  const c = TENSE_CHECKS[which];
  const rows = [
    { tokens: c.wrong as readonly Token[], mark: '✗', color: '#f87171', note: 'tense jumps' },
    { tokens: c.right as readonly Token[], mark: '✓', color: '#4ade80', note: 'same tense' },
  ];
  return (
    <div className={`${panel} space-y-2.5`} style={panelStyle}>
      {rows.map((r) => (
        <div key={r.mark} role="group" aria-label={`${keepsTense(r.tokens) ? 'Correct' : 'Wrong'}: ${tokensText(r.tokens)}`} className="flex items-start gap-3">
          <span aria-hidden className="mt-0.5 w-5 shrink-0 text-center text-xl font-black leading-none" style={{ color: r.color }}>{r.mark}</span>
          <div className="space-y-0.5">
            <Sentence tokens={r.tokens} />
            <p className="text-xs font-bold" style={{ color: r.color }}>{r.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

/* --------------------------------------------------------------- WordRoles */

/** One sentence with each word coloured by its job, and the key underneath. */
export const WordRoles = () => (
  <div className={`${panel} space-y-3`} style={panelStyle}>
    <p role="group" aria-label={ROLE_SENTENCE.map((w) => (w.role === 'other' ? w.text : `${w.text} (${w.role})`)).join(' ')} className="flex flex-wrap justify-center gap-x-2 gap-y-1.5 text-xl font-extrabold">
      {ROLE_SENTENCE.map((w, i) =>
        w.role === 'other' ? (
          <span key={i} className="py-0.5 text-slate-400">{w.text}</span>
        ) : (
          <span key={i} className="rounded-md px-2 py-0.5" style={{ background: ROLE_COLOR[w.role], color: INK }}>{w.text}</span>
        ),
      )}
    </p>
    <ul className="space-y-1">
      {(Object.keys(ROLE_COLOR) as (keyof typeof ROLE_COLOR)[]).map((r) => (
        <li key={r} className="flex items-center gap-2 text-sm">
          <span aria-hidden className="h-3 w-3 shrink-0 rounded-sm" style={{ background: ROLE_COLOR[r] }} />
          <span className="font-extrabold capitalize" style={{ color: ROLE_COLOR[r] }}>{r}</span>
          <span className="font-semibold text-slate-300">{ROLE_NOTE[r]}</span>
        </li>
      ))}
    </ul>
  </div>
);
