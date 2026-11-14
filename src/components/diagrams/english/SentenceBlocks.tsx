import { CONJUNCTIONS, EXAMPLES, KIND_COLOR, sentenceText } from './grammar';
import type { Part } from './grammar';

/**
 * Sentences as coloured building blocks. One code for the whole set:
 *   independent clause = solid blue block (stands alone)
 *   dependent clause   = green block with torn ends (cannot stand alone), joining word in rose
 *   phrase             = small amber pill (no verb of its own)
 *   conjunction        = rose connector
 * Plain HTML and CSS, so the words wrap on a phone and stay real, readable text.
 */

const INK = '#0f172a';
const TORN = 'polygon(0 0, 100% 0, calc(100% - 6px) 25%, 100% 50%, calc(100% - 6px) 75%, 100% 100%, 0 100%, 6px 75%, 0 50%, 6px 25%)';

const panel = 'mx-auto w-full max-w-md space-y-3 rounded-2xl p-4 text-left';
const panelStyle = { background: INK, fontFamily: 'inherit' } as const;

export const Block = ({ part }: { part: Part }) => {
  const color = KIND_COLOR[part.kind];
  if (part.kind === 'conjunction') {
    return (
      <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-extrabold" style={{ background: color, color: INK }}>
        {part.text}
      </span>
    );
  }
  if (part.kind === 'phrase') {
    return (
      <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-bold" style={{ background: color, color: INK }}>
        {part.text}
      </span>
    );
  }
  const dependent = part.kind === 'dependent';
  const rest = dependent && part.lead && part.text.startsWith(part.lead) ? part.text.slice(part.lead.length) : null;
  return (
    <span
      className={`inline-flex items-center py-1.5 text-[13px] font-bold leading-tight ${dependent ? 'px-3.5' : 'rounded-md px-2.5'}`}
      style={{ background: color, color: INK, clipPath: dependent ? TORN : undefined }}
    >
      <span>
        {rest !== null && (
          <span className="mr-1 rounded px-1.5 py-0.5 font-extrabold" style={{ background: KIND_COLOR.conjunction }}>
            {part.lead}
          </span>
        )}
        {rest !== null ? rest.trimStart() : part.text}
      </span>
    </span>
  );
};

const Row = ({ parts, label }: { parts: readonly Part[]; label?: string }) => (
  <div role="group" aria-label={`${label ? `${label}: ` : ''}${sentenceText([...parts])}`} className="space-y-1.5">
    {label && <p className="text-xs font-extrabold uppercase tracking-wide text-slate-300">{label}</p>}
    <div className="flex flex-wrap items-center gap-1">
      {parts.map((p, i) => (
        <Block key={i} part={p} />
      ))}
    </div>
  </div>
);

/** Slide 1: phrase, independent clause, dependent clause, side by side. */
export const SentenceKey = () => {
  const items = [
    { part: EXAMPLES.phrase as Part, name: 'Phrase', note: 'useful words without a full idea' },
    { part: EXAMPLES.independent as Part, name: 'Independent clause', note: 'can stand alone as a sentence' },
    { part: EXAMPLES.dependent as Part, name: 'Dependent clause', note: 'needs another clause to complete it' },
  ];
  return (
    <div className={panel} style={panelStyle}>
      {items.map((it) => (
        <div key={it.name} className="space-y-1.5">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-extrabold" style={{ color: KIND_COLOR[it.part.kind] }}>{it.name}</span>
            <span className="text-xs font-semibold text-slate-300">{it.note}</span>
          </div>
          <Block part={it.part} />
        </div>
      ))}
    </div>
  );
};

/** Slide 2: compound and complex built from blocks, and the joining words. */
export const CompoundComplex = () => (
  <div className={panel} style={panelStyle}>
    <Row label="Compound: two full ideas joined" parts={EXAMPLES.compound} />
    <Row label="Complex: one full idea plus one dependent clause" parts={EXAMPLES.complex} />
    <div className="space-y-1.5">
      <p className="text-xs font-extrabold uppercase tracking-wide text-slate-300">Conjunctions</p>
      <div className="flex flex-wrap gap-1.5">
        {CONJUNCTIONS.map((c) => (
          <Block key={c} part={{ kind: 'conjunction', text: c }} />
        ))}
      </div>
    </div>
  </div>
);

/** Slide 3: join two short ideas, split a run-on, vary the length. */
export const JoinSplitVary = () => (
  <div className={panel} style={panelStyle}>
    <div className="space-y-1.5">
      <p className="text-xs font-extrabold uppercase tracking-wide text-slate-300">Join</p>
      <div className="flex flex-wrap items-center gap-1.5">
        <Block part={{ kind: 'independent', text: 'Thandi finished her homework' }} />
        <span aria-hidden className="text-lg font-black text-slate-400">+</span>
        <Block part={{ kind: 'independent', text: 'she went outside' }} />
      </div>
      <p aria-hidden className="text-slate-400">↓</p>
      <Row parts={EXAMPLES.joined} />
    </div>
    <div className="space-y-1.5">
      <p className="text-xs font-extrabold uppercase tracking-wide text-slate-300">Split</p>
      <div role="group" aria-label={`Run-on: ${sentenceText([...EXAMPLES.runOn])}`} className="flex flex-wrap items-center gap-0">
        <Block part={EXAMPLES.runOn[0]} />
        <span aria-hidden className="mx-0.5 text-lg font-black" style={{ color: '#f87171' }}>✂</span>
        <Block part={EXAMPLES.runOn[1]} />
      </div>
      <p aria-hidden className="text-slate-400">↓</p>
      <Row parts={EXAMPLES.split} />
    </div>
    <div className="space-y-1.5">
      <p className="text-xs font-extrabold uppercase tracking-wide text-slate-300">Vary</p>
      <div className="flex flex-wrap items-center gap-1.5">
        <Block part={EXAMPLES.short[0]} />
        {EXAMPLES.complex.map((p, i) => (
          <Block key={i} part={p} />
        ))}
      </div>
    </div>
  </div>
);
