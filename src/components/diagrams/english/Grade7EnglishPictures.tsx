import {
  LINKS, POEM, RELATION_NOTE, RELATION_TINT, RHYME_TINT, ROLE_TINT, changedTail, linkSentence, poemLines, rhymeScheme, slotsText, stageHeights, taggedText,
} from './grade7english';
import type { Block, Slot, Stage, Tagged } from './grade7english';

/**
 * Pictures for the Grade 7 English lessons. Same dark panel style as the other English pictures;
 * every word shown comes from grade7english.ts, and colour is always paired with text.
 */

const INK = '#0f172a';
const SOFT = '#cbd5e1';
const panel = 'mx-auto w-full max-w-md rounded-2xl p-4 text-left';
const panelStyle = { background: INK, fontFamily: 'inherit' } as const;

/* ----------------------------------------------------------- WordChange */

/** Singular to plural: the stem stays, the new ending is highlighted. At most three pairs. */
export const WordChange = ({ pairs, aria }: { pairs: { from: string; to: string }[]; aria: string }) => (
  <div role="img" aria-label={aria} className={`${panel} space-y-2`} style={panelStyle}>
    {pairs.map((p) => {
      const { stem, tail } = changedTail(p.from, p.to);
      return (
        <div key={p.from} className="flex items-center gap-3 text-[17px] font-bold text-slate-100">
          <span className="w-24 shrink-0 text-slate-300">{p.from}</span>
          <span aria-hidden className="text-slate-500">→</span>
          <span>
            {stem}
            <span className="rounded px-1 font-extrabold" style={{ background: '#fbbf24', color: INK }}>{tail}</span>
          </span>
        </div>
      );
    })}
  </div>
);

/* ------------------------------------------------------------ WordOrder */

const SLOT_TINT: Record<Slot['role'], string> = { subject: '#fb923c', verb: '#2dd4bf', object: '#a78bfa' };
const SLOT_NOTE: Record<Slot['role'], string> = { subject: 'who or what', verb: 'the action', object: 'receives it' };

export const WordOrder = ({ slots }: { slots: Slot[] }) => (
  <div role="img" aria-label={`Word order: ${slots.map((s) => `${s.role} "${s.text}"`).join(', then ')}. The sentence reads: ${slotsText(slots)}`} className={panel} style={panelStyle}>
    <div className="flex flex-wrap items-stretch gap-2">
      {slots.map((s, i) => (
        <div key={s.role} className="flex items-center gap-2">
          <div className="rounded-xl px-3 py-2 text-center" style={{ background: SLOT_TINT[s.role], color: INK }}>
            <p className="text-[17px] font-extrabold">{s.text}</p>
            <p className="text-xs font-bold uppercase tracking-wide">{s.role}: {SLOT_NOTE[s.role]}</p>
          </div>
          {i < slots.length - 1 ? <span aria-hidden className="text-lg font-black text-slate-500">+</span> : null}
        </div>
      ))}
    </div>
  </div>
);

/* ------------------------------------------------------- TaggedSentence */

export const TaggedSentence = ({ tokens, roles }: { tokens: Tagged[]; roles: Tagged['role'][] }) => (
  <div role="img" aria-label={`${taggedText(tokens)} Highlighted: ${tokens.filter((t) => t.role).map((t) => `${t.text.replace(/[.,]$/, '')} is a ${t.role}`).join('; ')}.`} className={`${panel} space-y-2`} style={panelStyle}>
    <p className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1 text-[17px] font-semibold text-slate-100">
      {tokens.map((t, i) =>
        t.role ? (
          <span key={i} className="rounded px-1.5 py-0.5 font-extrabold" style={{ background: ROLE_TINT[t.role], color: INK }}>{t.text}</span>
        ) : (
          <span key={i}>{t.text}</span>
        ),
      )}
    </p>
    <ul className="flex flex-wrap gap-x-4 gap-y-1 border-t border-slate-700 pt-2 text-sm font-bold">
      {roles.map((r) => (
        <li key={r} className="flex items-center gap-1.5 text-slate-200">
          <span className="h-3 w-3 rounded-sm" style={{ background: ROLE_TINT[r!] }} aria-hidden />
          {r}
        </li>
      ))}
    </ul>
  </div>
);

/* ------------------------------------------------------------- LinkFlow */

/** Idea A, a linking word, idea B, for the three relations the Term 2 bank asks about. */
export const LinkFlow = () => (
  <div role="img" aria-label={`Three linking words: ${LINKS.map((l) => `${l.word} ${RELATION_NOTE[l.relation]}: ${linkSentence(l)}`).join(' ')}`} className={`${panel} space-y-2.5`} style={panelStyle}>
    {LINKS.map((l) => (
      <div key={l.word} className="space-y-1">
        <p className="text-xs font-extrabold uppercase tracking-wide" style={{ color: RELATION_TINT[l.relation] }}>{l.relation}: {RELATION_NOTE[l.relation]}</p>
        <p className="text-[15px] font-semibold text-slate-100">
          {linkSentence(l).split(new RegExp(`(\\b${l.word}\\b|\\b${l.word[0].toUpperCase()}${l.word.slice(1)}\\b)`)).map((bit, i) =>
            bit.toLowerCase() === l.word ? (
              <span key={i} className="rounded px-1.5 py-0.5 font-extrabold" style={{ background: RELATION_TINT[l.relation], color: INK }}>{bit}</span>
            ) : (
              <span key={i}>{bit}</span>
            ),
          )}
        </p>
      </div>
    ))}
  </div>
);

/* ------------------------------------------------------------ StoryArc */

/** The plot mountain: five stages, the climax at the top. Heights come from stageHeights. */
export const StoryArc = ({ stages }: { stages: Stage[] }) => {
  const hs = stageHeights(stages);
  const x = (i: number) => 30 + (i * 100) / (stages.length - 1);
  const y = (h: number) => 72 - h * 46;
  const pts = hs.map((h, i) => `${x(i)},${y(h)}`).join(' ');
  return (
    <svg
      viewBox="0 0 160 100"
      role="img"
      aria-label={`A plot mountain with five stages from left to right: ${stages.map((s) => s.name).join(', ')}. The line climbs to the climax at the top and then falls.`}
      className="mx-auto block w-full max-w-md rounded-2xl"
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      <line x1={8} y1={76} x2={152} y2={76} stroke="#475569" strokeWidth={1} />
      <polyline points={pts} fill="none" stroke="#38bdf8" strokeWidth={1.8} strokeLinejoin="round" />
      {stages.map((s, i) => {
        const peak = s.id === 'climax';
        return (
          <g key={s.id}>
            <circle cx={x(i)} cy={y(hs[i])} r={peak ? 3.4 : 2.4} fill={peak ? '#fbbf24' : '#f8fafc'} />
            <text x={x(i)} y={peak ? y(hs[i]) - 6 : 86 + (i % 2) * 9} textAnchor="middle" fontSize={6.6} fontWeight={800} fill={peak ? '#fbbf24' : SOFT}>
              {s.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

/* ------------------------------------------------------- StructureBlocks */

export const StructureBlocks = ({ blocks, aria }: { blocks: Block[]; aria: string }) => (
  <div role="img" aria-label={aria} className={`${panel} space-y-2`} style={panelStyle}>
    {blocks.map((b, i) => (
      <div key={b.label} className="flex items-center gap-3 rounded-xl bg-slate-800 px-3 py-2">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-black" style={{ background: '#38bdf8', color: INK }}>{i + 1}</span>
        <div className="min-w-0">
          <p className="font-extrabold text-slate-100">{b.label}</p>
          <p className="text-sm font-semibold text-slate-300">{b.hint}</p>
        </div>
      </div>
    ))}
  </div>
);

/* ---------------------------------------------------------- PoemPicture */

/** The poem laid out in stanzas. With `rhyme`, the end words are coloured by sound and the scheme is shown. */
export const PoemPicture = ({ rhyme }: { rhyme?: boolean }) => {
  const lines = poemLines();
  const scheme = rhymeScheme(lines);
  let n = 0;
  return (
    <div
      role="img"
      aria-label={`A poem of ${lines.length} lines in ${POEM.stanzas.length} stanzas. ${rhyme ? `The end words rhyme in the pattern ${scheme.join(' ')}.` : 'A stanza is a group of lines, like a paragraph.'}`}
      className={`${panel} space-y-3 px-3`}
      style={panelStyle}
    >
      {POEM.stanzas.map((st, si) => (
        <div key={si} className="border-l-4 border-sky-400 pl-2.5">
          <p className="text-xs font-extrabold uppercase tracking-wide text-sky-300">Stanza {si + 1}</p>
          {st.map((l) => {
            const letter = scheme[n++];
            const idx = letter.charCodeAt(0) - 65;
            const words = l.text.split(' ');
            const last = words.pop();
            return (
              <p key={l.text} className="text-[13px] font-semibold leading-snug text-slate-100">
                {words.join(' ')}{' '}
                {rhyme ? (
                  <span className="rounded px-1 font-extrabold" style={{ background: RHYME_TINT[idx], color: INK }}>{last}<sup className="ml-0.5 text-[10px]">{letter}</sup></span>
                ) : (
                  last
                )}
              </p>
            );
          })}
        </div>
      ))}
      <p className="border-t border-slate-700 pt-2 text-sm font-bold text-slate-300">
        {rhyme ? `Rhyme scheme: ${scheme.slice(0, 4).join(' ')} | ${scheme.slice(4).join(' ')}` : 'Each line starts a new row; each group of rows is a stanza.'}
      </p>
    </div>
  );
};
