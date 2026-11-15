import { PARAGRAPHS, scan, sentencesOf } from './readingStrategies';
import type { FeatureAnswer } from './featureEffect';
import type { EssayTime } from './examWriting';

/** Hand-built SVG pictures for the Grade 9 English revision lessons. Every picture has an aria description. */

const INK = '#0f172a';
const COLORS = ['#818cf8', '#34d399', '#fbbf24', '#fb7185', '#22d3ee', '#a78bfa'];

const Frame = ({ aria, children, h }: { aria: string; children: React.ReactNode; h: number }) => (
  <svg viewBox={`0 0 340 ${h}`} role="img" aria-label={aria} className="mx-auto w-full max-w-md rounded-2xl" style={{ background: INK }}>
    {children}
  </svg>
);

/** Stacked boxes, top to bottom: a report skeleton or the layout of a letter. At most 6 boxes. */
export const BoxStack = ({ items, aria }: { items: readonly { label: string; note: string }[]; aria: string }) => {
  const rowH = 46;
  const h = items.length * rowH + 16;
  return (
    <Frame aria={aria} h={h}>
      {items.map((it, i) => (
        <g key={it.label}>
          <rect x={14} y={10 + i * rowH} width={312} height={rowH - 8} rx={10} fill={COLORS[i % COLORS.length]} />
          <text x={26} y={10 + i * rowH + 17} fontSize={15} fontWeight={800} fill={INK}>{it.label}</text>
          <text x={26} y={10 + i * rowH + 32} fontSize={12.5} fontWeight={600} fill={INK}>{it.note}</text>
        </g>
      ))}
    </Frame>
  );
};

/** One bar split into plan / write / edit, widths from the minutes. */
export const TimeBar = ({ time }: { time: EssayTime }) => {
  const total = time.plan + time.write + time.edit;
  const w = 312;
  const parts = [
    { label: 'Plan', min: time.plan, color: COLORS[0] },
    { label: 'Write', min: time.write, color: COLORS[1] },
    { label: 'Edit', min: time.edit, color: COLORS[2] },
  ];
  let x = 14;
  return (
    <Frame aria={`A ${total} minute essay split into ${parts.map((p) => `${p.label.toLowerCase()} ${p.min} minutes`).join(', ')}.`} h={96}>
      <text x={14} y={22} fontSize={12} fontWeight={700} fill="#cbd5e1">{total}-minute essay</text>
      {parts.map((p) => {
        const pw = (p.min / total) * w;
        const node = (
          <g key={p.label}>
            <rect x={x} y={34} width={pw - 2} height={34} rx={6} fill={p.color} />
            <text x={x + (pw - 2) / 2} y={55} textAnchor="middle" fontSize={12} fontWeight={800} fill={INK}>{p.min} min</text>
            <text x={x + (pw - 2) / 2} y={86} textAnchor="middle" fontSize={12} fontWeight={700} fill="#e2e8f0">{p.label}</text>
          </g>
        );
        x += pw;
        return node;
      })}
    </Frame>
  );
};

/** Feature -> evidence -> effect: the three parts of a strong literature answer. */
export const FeatureChain = ({ answer }: { answer: FeatureAnswer }) => {
  const rows = [
    { tag: '1  Feature', text: answer.feature, color: COLORS[0] },
    { tag: '2  Evidence', text: answer.evidence, color: COLORS[2] },
    { tag: '3  Effect', text: answer.effect, color: COLORS[1] },
  ];
  return (
    <Frame aria={`A strong answer has three parts. Feature: ${answer.feature}. Evidence: ${answer.evidence}. Effect: ${answer.effect}.`} h={196}>
      {rows.map((r, i) => (
        <g key={r.tag}>
          <rect x={14} y={10 + i * 62} width={312} height={50} rx={10} fill={r.color} />
          <text x={26} y={28 + i * 62} fontSize={12} fontWeight={900} fill={INK}>{r.tag.toUpperCase()}</text>
          <text x={26} y={48 + i * 62} fontSize={13} fontWeight={700} fill={INK}>{r.text}</text>
          {i < 2 ? <text x={170} y={69 + i * 62} textAnchor="middle" fontSize={11} fontWeight={900} fill="#e2e8f0">↓</text> : null}
        </g>
      ))}
    </Frame>
  );
};

/** Skimming reads the first sentence of each paragraph; scanning jumps to the keyword. Computed from the passage. */
export const SkimScan = ({ keyword }: { keyword: string }) => {
  const hits = scan(PARAGRAPHS, keyword);
  const rowH = 20;
  const drawColumn = (x0: number, title: string, mode: 'skim' | 'scan') => (
    <g>
      <text x={x0} y={22} fontSize={13} fontWeight={800} fill="#e2e8f0">{title}</text>
      {PARAGRAPHS.map((p, pi) => {
        const ss = sentencesOf(p);
        return ss.map((s, si) => {
          const y = 36 + (pi * 3 + si) * rowH + pi * 12;
          const lit = mode === 'skim' ? si === 0 : hits.some((h) => h.paragraph === pi && h.sentence === s);
          return <rect key={`${pi}-${si}`} x={x0} y={y} width={Math.min(140, 40 + s.length * 2)} height={10} rx={5} fill={lit ? (mode === 'skim' ? COLORS[2] : COLORS[3]) : '#475569'} />;
        });
      })}
    </g>
  );
  return (
    <Frame aria={`Two copies of the same three-paragraph passage drawn as lines. Skimming lights up the first line of each paragraph. Scanning lights up only the line that holds the word ${keyword}.`} h={36 + 9 * rowH + 24 + 14}>
      {drawColumn(16, 'Skim: first lines', 'skim')}
      {drawColumn(182, `Scan: find "${keyword}"`, 'scan')}
    </Frame>
  );
};
