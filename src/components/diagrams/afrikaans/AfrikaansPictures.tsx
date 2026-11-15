import type { ReactNode } from 'react';
import { layoutBoxes } from './afrikaansHelpers';

// Hand-built SVG pictures for the Afrikaans lessons. Positions come from afrikaansHelpers.ts; at most 6 labels per picture.
const INDIGO = '#818cf8', GREEN = '#34d399', YELLOW = '#fbbf24', ROSE = '#fb7185', SLATE = '#475569';

/** An Afrikaans word or sentence in bold indigo. */
export const Af = ({ children }: { children: ReactNode }) => <strong className="font-bold text-indigo-700">{children}</strong>;
/** The English gloss, in italic grey. */
export const En = ({ children }: { children: ReactNode }) => <em className="text-slate-500">({children})</em>;

const Wrap = ({ aria, w, h, children }: { aria: string; w: number; h: number; children: ReactNode }) => (
  <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md">{children}</svg>
);

/** Past, present and future on one line, with one sentence for each. 6 labels. */
export function TenseTimeline({ past, present, future, aria }: { past: string; present: string; future: string; aria: string }) {
  const xs = [60, 180, 300];
  const items = [
    { when: 'gister', text: past, color: ROSE },
    { when: 'vandag', text: present, color: GREEN },
    { when: 'môre', text: future, color: INDIGO },
  ];
  return (
    <Wrap aria={aria} w={360} h={136}>
      <line x1={14} y1={44} x2={346} y2={44} stroke={SLATE} strokeWidth={3} />
      <polygon points="346,38 358,44 346,50" fill={SLATE} />
      {items.map((it, i) => (
        <g key={it.when}>
          <circle cx={xs[i]} cy={44} r={9} fill={it.color} />
          <text x={xs[i]} y={24} textAnchor="middle" fontSize={15} fontWeight={700} fill={SLATE}>{it.when}</text>
          <circle cx={22} cy={72 + i * 24} r={6} fill={it.color} />
          <text x={36} y={77 + i * 24} fontSize={15} fontWeight={600} fill={it.color === GREEN ? '#047857' : it.color === ROSE ? '#be123c' : '#4338ca'}>{it.text}</text>
        </g>
      ))}
    </Wrap>
  );
}

/** A sentence as boxes. `hot` = highlighted words; `arrow` curves from one box over to another; `bracket` joins two boxes underneath. */
export function WordBoxes({ words, hot = [], arrow, bracket, aria }: { words: string[]; hot?: number[]; arrow?: [number, number]; bracket?: [number, number]; aria: string }) {
  const { boxes, width } = layoutBoxes(words);
  const top = arrow ? 34 : 12;
  const h = top + 44 + (bracket ? 34 : 8);
  const mid = (i: number) => boxes[i].x + boxes[i].w / 2;
  return (
    <Wrap aria={aria} w={Math.max(width, 200)} h={h}>
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={top} width={b.w} height={40} rx={9} fill={hot.includes(i) ? YELLOW : '#e0e7ff'} stroke={hot.includes(i) ? '#d97706' : INDIGO} strokeWidth={2} />
          <text x={b.x + b.w / 2} y={top + 26} textAnchor="middle" fontSize={16} fontWeight={700} fill="#1e293b">{b.word}</text>
        </g>
      ))}
      {arrow ? (
        <g>
          <path d={`M ${mid(arrow[0])} ${top - 2} C ${mid(arrow[0])} 2, ${mid(arrow[1])} 2, ${mid(arrow[1])} ${top - 4}`} fill="none" stroke={ROSE} strokeWidth={2.5} />
          <polygon points={`${mid(arrow[1]) - 5},${top - 10} ${mid(arrow[1]) + 5},${top - 10} ${mid(arrow[1])},${top - 1}`} fill={ROSE} />
        </g>
      ) : null}
      {bracket ? (
        <path d={`M ${mid(bracket[0])} ${top + 44} V ${top + 58} H ${mid(bracket[1])} V ${top + 44}`} fill="none" stroke={GREEN} strokeWidth={3} />
      ) : null}
    </Wrap>
  );
}

/** Three steps that grow: positive, comparative, superlative. The bar heights are fixed (1, 2, 3 units). 6 labels. */
export function Ladder({ steps, aria }: { steps: { word: string; label: string }[]; aria: string }) {
  const colors = [GREEN, YELLOW, ROSE];
  return (
    <Wrap aria={aria} w={360} h={170}>
      {steps.map((s, i) => {
        const bh = 34 * (i + 1);
        const x = 24 + i * 112;
        return (
          <g key={s.word}>
            <rect x={x} y={130 - bh} width={96} height={bh} rx={8} fill={colors[i]} />
            <text x={x + 48} y={130 - bh + 24} textAnchor="middle" fontSize={16} fontWeight={800} fill="#1e293b">{s.word}</text>
            <text x={x + 48} y={150} textAnchor="middle" fontSize={13} fontWeight={600} fill={SLATE}>{s.label}</text>
          </g>
        );
      })}
    </Wrap>
  );
}

/** Singular to plural as dots: one dot, then `count` dots. Two words and a rule note. */
export function PluralPair({ sg, pl, note, count = 3, aria }: { sg: string; pl: string; note: string; count?: number; aria: string }) {
  return (
    <Wrap aria={aria} w={360} h={112}>
      <circle cx={52} cy={36} r={13} fill={INDIGO} />
      <text x={52} y={82} textAnchor="middle" fontSize={17} fontWeight={800} fill="#1e293b">{sg}</text>
      <path d="M 100 36 H 168" stroke={SLATE} strokeWidth={3} />
      <polygon points="168,29 182,36 168,43" fill={SLATE} />
      {Array.from({ length: count }, (_, i) => <circle key={i} cx={228 + i * 34} cy={36} r={13} fill={GREEN} />)}
      <text x={228 + ((count - 1) * 34) / 2} y={82} textAnchor="middle" fontSize={17} fontWeight={800} fill="#1e293b">{pl}</text>
      <text x={180} y={106} textAnchor="middle" fontSize={12} fontWeight={600} fill={SLATE}>{note}</text>
    </Wrap>
  );
}

/** Words that are the same (=) or opposite (↔). Up to 3 pairs, 6 labels. */
export function MeaningPairs({ pairs, kind, aria }: { pairs: [string, string][]; kind: 'same' | 'opposite'; aria: string }) {
  const rowH = 46;
  return (
    <Wrap aria={aria} w={360} h={rowH * pairs.length + 6}>
      {pairs.map(([a, b], i) => {
        const y = 4 + i * rowH;
        return (
          <g key={a + b}>
            <rect x={14} y={y} width={132} height={36} rx={9} fill="#e0e7ff" stroke={INDIGO} strokeWidth={2} />
            <text x={80} y={y + 24} textAnchor="middle" fontSize={16} fontWeight={700} fill="#1e293b">{a}</text>
            <text x={180} y={y + 25} textAnchor="middle" fontSize={22} fontWeight={800} fill={kind === 'same' ? '#047857' : '#be123c'}>{kind === 'same' ? '=' : '↔'}</text>
            <rect x={214} y={y} width={132} height={36} rx={9} fill={kind === 'same' ? '#d1fae5' : '#ffe4e6'} stroke={kind === 'same' ? GREEN : ROSE} strokeWidth={2} />
            <text x={280} y={y + 24} textAnchor="middle" fontSize={16} fontWeight={700} fill="#1e293b">{b}</text>
          </g>
        );
      })}
    </Wrap>
  );
}
