import { CLASS_COLOR, classify } from './lessonSkills';
import type { WordClass } from './lessonSkills';

/**
 * Hand-built pictures for the English lessons. Colour is paired with a word label, so meaning never
 * depends on colour alone. Real text wherever possible so it wraps on a phone.
 */

const INK = '#0f172a';
const panel = 'mx-auto w-full max-w-md rounded-2xl p-4 text-left';
const panelStyle = { background: INK, fontFamily: 'inherit' } as const;

export type Card = { title: string; clue: string; color: string };

/** Up to six cards, each a coloured heading with a one-line clue. */
export const ClueCards = ({ cards, aria }: { cards: Card[]; aria: string }) => (
  <div role="img" aria-label={aria} className={`${panel} grid grid-cols-2 gap-2`} style={panelStyle}>
    {cards.map((c) => (
      <div key={c.title} className="rounded-lg p-2.5" style={{ background: '#1e293b', borderTop: `4px solid ${c.color}` }}>
        <p className="text-sm font-extrabold" style={{ color: c.color }}>{c.title}</p>
        <p className="mt-0.5 text-xs leading-snug text-slate-300">{c.clue}</p>
      </div>
    ))}
  </div>
);

/** A sentence whose words are tagged with their word class. */
export const WordChips = ({ sentence, aria }: { sentence: string; aria: string }) => {
  const words = classify(sentence);
  const used = [...new Set(words.map((w) => w.cls))].filter((c) => c !== 'other') as WordClass[];
  return (
    <div role="img" aria-label={aria} className={panel} style={panelStyle}>
      <div className="flex flex-wrap items-end gap-1.5">
        {words.map((w, i) => (
          <span key={i} className="inline-flex flex-col items-center">
            <span className="rounded-md px-2 py-1 text-sm font-bold" style={{ background: CLASS_COLOR[w.cls], color: INK }}>{w.word}</span>
            <span className="mt-0.5 text-[10px] font-semibold text-slate-300">{w.cls === 'other' ? '' : w.cls}</span>
          </span>
        ))}
      </div>
      <p className="mt-2 text-[11px] text-slate-400">{used.length} word classes marked</p>
    </div>
  );
};

/** A poem in numbered stanzas; chosen lines are highlighted with a label. */
export const PoemLines = ({ stanzas, marks, aria }: { stanzas: readonly (readonly string[])[]; marks?: Record<string, string>; aria: string }) => (
  <div role="img" aria-label={aria} className={`${panel} space-y-3`} style={panelStyle}>
    {stanzas.map((st, si) => (
      <div key={si} className="flex gap-3">
        <span className="flex w-6 shrink-0 items-start justify-center pt-0.5 text-[10px] font-extrabold uppercase text-sky-300" style={{ writingMode: 'vertical-rl' }}>{`Stanza ${si + 1}`}</span>
        <div className="min-w-0 flex-1 border-l-2 border-sky-400 pl-3">
          {st.map((line, li) => {
            const key = `${si + 1}.${li + 1}`;
            const mark = marks?.[key];
            return (
              <p key={li} className="text-sm text-slate-100">
                <span className="mr-2 inline-block w-4 text-right text-[10px] text-slate-400">{li + 1}</span>
                <span className={mark ? 'rounded px-1 font-bold' : ''} style={mark ? { background: '#fbbf24', color: INK } : undefined}>{line}</span>
                {mark ? <span className="ml-2 text-[11px] font-bold text-amber-300">{mark}</span> : null}
              </p>
            );
          })}
        </div>
      </div>
    ))}
  </div>
);

/** A brochure page drawn as boxes, five labelled parts. */
export const BrochureLayout = ({ aria }: { aria: string }) => (
  <svg viewBox="0 0 160 110" role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    <rect x="30" y="6" width="100" height="98" rx="3" fill="#f8fafc" />
    <rect x="36" y="12" width="88" height="12" rx="2" fill="#6366f1" />
    <rect x="36" y="28" width="40" height="30" rx="2" fill="#34d399" />
    <rect x="80" y="28" width="44" height="3" rx="1" fill="#475569" />
    <rect x="80" y="34" width="44" height="2" rx="1" fill="#cbd5e1" />
    <rect x="80" y="39" width="44" height="2" rx="1" fill="#cbd5e1" />
    <rect x="80" y="44" width="30" height="2" rx="1" fill="#cbd5e1" />
    <rect x="36" y="64" width="40" height="3" rx="1" fill="#475569" />
    <rect x="36" y="70" width="40" height="2" rx="1" fill="#cbd5e1" />
    <rect x="36" y="75" width="40" height="2" rx="1" fill="#cbd5e1" />
    <rect x="36" y="90" width="88" height="9" rx="2" fill="#fb7185" />
    <g fontSize="6.3" fontWeight="700" fill="#e2e8f0">
      <text x="1" y="17">Heading</text>
      <text x="1" y="45">Image</text>
      <text x="132" y="31">Subhead</text>
      <text x="132" y="59">White</text>
      <text x="132" y="67">space</text>
      <text x="132" y="95">Call to</text>
      <text x="132" y="103">action</text>
    </g>
    <rect x="80" y="52" width="44" height="22" rx="2" fill="none" stroke="#fbbf24" strokeDasharray="2 2" />
  </svg>
);

/** A formal letter drawn as blocks; five labelled parts. */
export const LetterLayout = ({ aria }: { aria: string }) => (
  <svg viewBox="0 0 160 120" role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    <rect x="40" y="5" width="80" height="110" rx="3" fill="#f8fafc" />
    <rect x="76" y="11" width="38" height="2.5" rx="1" fill="#6366f1" />
    <rect x="76" y="16" width="30" height="2.5" rx="1" fill="#6366f1" />
    <rect x="46" y="28" width="30" height="2.5" rx="1" fill="#34d399" />
    <rect x="46" y="38" width="34" height="2.5" rx="1" fill="#fb7185" />
    <rect x="46" y="48" width="68" height="2" rx="1" fill="#cbd5e1" />
    <rect x="46" y="54" width="68" height="2" rx="1" fill="#cbd5e1" />
    <rect x="46" y="60" width="68" height="2" rx="1" fill="#cbd5e1" />
    <rect x="46" y="66" width="50" height="2" rx="1" fill="#cbd5e1" />
    <rect x="46" y="82" width="38" height="2.5" rx="1" fill="#fbbf24" />
    <rect x="46" y="92" width="28" height="2.5" rx="1" fill="#475569" />
    <g fontSize="6.3" fontWeight="700" fill="#e2e8f0">
      <text x="2" y="14">Address</text>
      <text x="2" y="21.5">and date</text>
      <text x="124" y="31">Recipient</text>
      <text x="124" y="41">Greeting</text>
      <text x="124" y="57">Body</text>
      <text x="124" y="85">Closing</text>
      <text x="124" y="95">Your name</text>
    </g>
  </svg>
);
