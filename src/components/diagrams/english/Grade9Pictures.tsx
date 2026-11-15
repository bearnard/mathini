import { Block } from './SentenceBlocks';
import { sentenceText } from './grammar';
import type { Part } from './grammar';
import { BACKSHIFT, LETTER_PARTS, POEM, ROLE_G9, rhymeScheme, active, passive } from './grade9';
import type { Clause, LetterKind } from './grade9';
import { ROLE_COLOR, ROLE_NOTE } from './tense';

/**
 * Pictures for the Grade 9 English lessons. Dark panels with real, wrapping text where possible;
 * the two SVGs (letter layout, voice swap) use at most six labels. Every picture carries an aria text.
 */

const INK = '#0f172a';
const SOFT = '#cbd5e1';
const panel = 'mx-auto w-full max-w-md space-y-3 rounded-2xl p-4 text-left';
const panelStyle = { background: INK, fontFamily: 'inherit' } as const;

/** Noun / adjective / verb colours on "The old car needs repair." */
export const RoleChips = () => (
  <div className={panel} style={panelStyle}>
    <p
      role="group"
      aria-label={ROLE_G9.map((w) => (w.role === 'other' ? w.text : `${w.text} (${w.role})`)).join(' ')}
      className="flex flex-wrap justify-center gap-x-2 gap-y-1.5 text-xl font-extrabold"
    >
      {ROLE_G9.map((w, i) =>
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

/** Direct verb → reported verb, from BACKSHIFT. */
export const BackshiftTable = () => (
  <div className={panel} style={panelStyle}>
    <p className="text-xs font-extrabold uppercase tracking-wide text-slate-300">Verb steps back</p>
    <ul aria-label={`Backshift: ${BACKSHIFT.map(([d, r]) => `${d} becomes ${r}`).join(', ')}`} className="grid grid-cols-2 gap-x-2 gap-y-1.5 sm:grid-cols-3">
      {BACKSHIFT.map(([d, r]) => (
        <li key={d} className="flex items-center gap-1.5 text-sm font-extrabold">
          <span className="rounded px-1.5 py-0.5" style={{ background: '#22d3ee', color: INK }}>{d}</span>
          <span aria-hidden className="text-slate-400">→</span>
          <span className="rounded px-1.5 py-0.5" style={{ background: '#a78bfa', color: INK }}>{r}</span>
        </li>
      ))}
    </ul>
  </div>
);

/** A friendly or formal letter drawn as labelled blocks, in the order they are written. */
export const LetterLayout = ({ kind }: { kind: LetterKind }) => {
  const parts = LETTER_PARTS[kind];
  const color = kind === 'formal' ? '#60a5fa' : '#34d399';
  const rowH = 18;
  const h = parts.length * rowH + 8;
  return (
    <svg
      viewBox={`0 0 150 ${h}`}
      role="img"
      aria-label={`A ${kind} letter laid out from top to bottom: ${parts.join(', then ')}.`}
      className="mx-auto block w-full max-w-sm rounded-2xl"
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      {parts.map((p, i) => (
        <g key={i}>
          <rect x={10} y={4 + i * rowH} width={130} height={rowH - 4} rx={3} fill={color} opacity={i === parts.length - 2 ? 0.55 : 0.9} />
          <text x={75} y={4 + i * rowH + 9.5} textAnchor="middle" fontSize={7} fontWeight={700} fill={INK}>{p}</text>
        </g>
      ))}
    </svg>
  );
};

/** The invented poem, one line per row, with the rhyme letter from rhymeScheme. */
export const RhymeLines = () => {
  const letters = rhymeScheme(POEM);
  const col: Record<string, string> = { A: '#fb923c', B: '#60a5fa' };
  return (
    <div className={panel} style={panelStyle}>
      <ul aria-label={`A four-line poem with the rhyme scheme ${letters.split('').join(' ')}`} className="space-y-1.5">
        {POEM.map((l, i) => (
          <li key={i} className="flex items-baseline gap-2 text-[15px] font-semibold leading-snug text-slate-100">
            <span className="w-5 shrink-0 rounded text-center text-sm font-black" style={{ background: col[letters[i]], color: INK }}>{letters[i]}</span>
            <span>
              {l.text.slice(0, l.text.lastIndexOf(l.end))}
              <span className="font-extrabold underline" style={{ color: col[letters[i]] }}>{l.end}</span>
              {l.text.slice(l.text.lastIndexOf(l.end) + l.end.length)}
            </span>
          </li>
        ))}
      </ul>
      <p className="text-sm font-bold text-slate-300">Rhyme scheme: {letters.split('').join(' ')}</p>
    </div>
  );
};

/** Sentences drawn as clause blocks (reusing the shared Block). */
export const SentenceRows = ({ rows }: { rows: { label: string; parts: Part[] }[] }) => (
  <div className={panel} style={panelStyle}>
    {rows.map((r) => (
      <div key={r.label} role="group" aria-label={`${r.label}: ${sentenceText(r.parts)}`} className="space-y-1.5">
        <p className="text-xs font-extrabold uppercase tracking-wide text-slate-300">{r.label}</p>
        <div className="flex flex-wrap items-center gap-1">
          {r.parts.map((p, i) => <Block key={i} part={p} />)}
        </div>
      </div>
    ))}
  </div>
);


/** Two names and one pronoun: which does "she" point to? */
export const PronounLink = ({ names, pronoun }: { names: [string, string]; pronoun: string }) => (
  <svg
    viewBox="0 0 150 70"
    role="img"
    aria-label={`The pronoun ${pronoun} could point to ${names[0]} or to ${names[1]}, so the reader cannot tell.`}
    className="mx-auto block w-full max-w-sm rounded-2xl"
    style={{ background: INK, fontFamily: 'inherit' }}
  >
    <rect x={10} y={8} width={50} height={16} rx={4} fill="#fb923c" />
    <text x={35} y={19} textAnchor="middle" fontSize={8} fontWeight={800} fill={INK}>{names[0]}</text>
    <rect x={90} y={8} width={50} height={16} rx={4} fill="#60a5fa" />
    <text x={115} y={19} textAnchor="middle" fontSize={8} fontWeight={800} fill={INK}>{names[1]}</text>
    <rect x={55} y={46} width={40} height={16} rx={8} fill="#fb7185" />
    <text x={75} y={57} textAnchor="middle" fontSize={8} fontWeight={800} fill={INK}>{pronoun}</text>
    <path d="M70 46 L40 28" stroke="#cbd5e1" strokeWidth={1.5} strokeDasharray="3 2" fill="none" />
    <path d="M80 46 L110 28" stroke="#cbd5e1" strokeWidth={1.5} strokeDasharray="3 2" fill="none" />
    <text x={75} y={38} textAnchor="middle" fontSize={9} fontWeight={900} fill={SOFT}>?</text>
  </svg>
);

/** Active and passive built from the same clause: subject and object swap places. */
export const VoiceSwap = ({ clause }: { clause: Clause }) => {
  const a = active(clause);
  const p = passive(clause);
  return (
    <div className={panel} style={panelStyle}>
      <div role="group" aria-label={`Active: ${a} Passive: ${p}`} className="space-y-3">
        <div className="space-y-1">
          <p className="text-xs font-extrabold uppercase tracking-wide text-slate-300">Active: the doer comes first</p>
          <div className="flex flex-wrap gap-1.5 text-sm font-extrabold">
            <span className="rounded px-2 py-1" style={{ background: '#fb923c', color: INK }}>{clause.subject}</span>
            <span className="rounded px-2 py-1" style={{ background: '#2dd4bf', color: INK }}>{clause.verb}</span>
            <span className="rounded px-2 py-1" style={{ background: '#60a5fa', color: INK }}>{clause.object}</span>
          </div>
        </div>
        <p aria-hidden className="text-center text-slate-400">⇅ swap</p>
        <div className="space-y-1">
          <p className="text-xs font-extrabold uppercase tracking-wide text-slate-300">Passive: the receiver comes first</p>
          <div className="flex flex-wrap gap-1.5 text-sm font-extrabold">
            <span className="rounded px-2 py-1" style={{ background: '#60a5fa', color: INK }}>{p.split(' was ')[0]}</span>
            <span className="rounded px-2 py-1" style={{ background: '#2dd4bf', color: INK }}>was {clause.participle}</span>
            <span className="rounded px-2 py-1" style={{ background: '#fb923c', color: INK }}>by {clause.subject.replace(/^The/, 'the')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
