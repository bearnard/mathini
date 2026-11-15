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

/** Words that are the same (=), opposite (↔) or that turn into / point to another (→). Up to 3 pairs, 6 labels. */
export function MeaningPairs({ pairs, kind, aria }: { pairs: [string, string][]; kind: 'same' | 'opposite' | 'becomes'; aria: string }) {
  const rowH = 46;
  return (
    <Wrap aria={aria} w={360} h={rowH * pairs.length + 6}>
      {pairs.map(([a, b], i) => {
        const y = 4 + i * rowH;
        return (
          <g key={a + b}>
            <rect x={14} y={y} width={132} height={36} rx={9} fill="#e0e7ff" stroke={INDIGO} strokeWidth={2} />
            <text x={80} y={y + 24} textAnchor="middle" fontSize={16} fontWeight={700} fill="#1e293b">{a}</text>
            <text x={180} y={y + 25} textAnchor="middle" fontSize={22} fontWeight={800} fill={kind === 'opposite' ? '#be123c' : kind === 'becomes' ? '#4338ca' : '#047857'}>{kind === 'same' ? '=' : kind === 'opposite' ? '↔' : '→'}</text>
            <rect x={214} y={y} width={132} height={36} rx={9} fill={kind === 'opposite' ? '#ffe4e6' : kind === 'becomes' ? '#fef3c7' : '#d1fae5'} stroke={kind === 'opposite' ? ROSE : kind === 'becomes' ? YELLOW : GREEN} strokeWidth={2} />
            <text x={280} y={y + 24} textAnchor="middle" fontSize={16} fontWeight={700} fill="#1e293b">{b}</text>
          </g>
        );
      })}
    </Wrap>
  );
}

/** Up to three boxes in a row, each with a small tag underneath. 6 labels. */
export function TaggedBoxes({ items, aria }: { items: { word: string; tag: string }[]; aria: string }) {
  const { boxes, width } = layoutBoxes(items.map((i) => i.word));
  return (
    <Wrap aria={aria} w={Math.max(width, 200)} h={84}>
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={8} width={b.w} height={40} rx={9} fill="#e0e7ff" stroke={INDIGO} strokeWidth={2} />
          <text x={b.x + b.w / 2} y={34} textAnchor="middle" fontSize={16} fontWeight={700} fill="#1e293b">{b.word}</text>
          <text x={b.x + b.w / 2} y={70} textAnchor="middle" fontSize={13} fontWeight={600} fill={SLATE}>{items[i].tag}</text>
        </g>
      ))}
    </Wrap>
  );
}

/** Up to six tiles in order, joined by a line. Each tile is one label. */
export function OrderTiles({ tiles, aria }: { tiles: string[]; aria: string }) {
  const colors = [INDIGO, GREEN, YELLOW, ROSE, '#38bdf8', '#a78bfa'];
  const gap = 8, w = Math.min(96, (344 - gap * (tiles.length - 1)) / tiles.length);
  return (
    <Wrap aria={aria} w={360} h={78}>
      <line x1={14} y1={36} x2={346} y2={36} stroke={SLATE} strokeWidth={2} />
      {tiles.map((t, i) => {
        const x = 8 + i * (w + gap);
        return (
          <g key={t + i}>
            <rect x={x} y={12} width={w} height={48} rx={10} fill={colors[i % colors.length]} />
            <text x={x + w / 2} y={43} textAnchor="middle" fontSize={tiles.length > 4 ? 22 : 20} fontWeight={800} fill="#1e293b">{t}</text>
          </g>
        );
      })}
    </Wrap>
  );
}

/** A letter as five stacked strips, top to bottom. 5 labels. */
export function LetterLayout({ parts, aria }: { parts: string[]; aria: string }) {
  const colors = ['#fde68a', '#c7d2fe', '#d1fae5', '#fecdd3', '#e0f2fe'];
  const heights = [28, 28, 64, 28, 28];
  const total = 8 + heights.reduce((a, b) => a + b + 6, 0);
  let y = 8;
  return (
    <Wrap aria={aria} w={260} h={total}>
      <rect x={4} y={2} width={252} height={total - 4} rx={10} fill="#fff" stroke={SLATE} strokeWidth={2} />
      {parts.map((t, i) => {
        const top = y;
        y += heights[i] + 6;
        return (
          <g key={t}>
            <rect x={14} y={top + 2} width={232} height={heights[i]} rx={7} fill={colors[i]} />
            <text x={130} y={top + 2 + heights[i] / 2 + 5} textAnchor="middle" fontSize={15} fontWeight={700} fill="#1e293b">{t}</text>
          </g>
        );
      })}
    </Wrap>
  );
}

export type Place = 'op' | 'onder' | 'in' | 'voor' | 'agter' | 'langs' | 'tussen';

/** Up to three small scenes of a ball and a box. Each scene has one label: the preposition. */
export function PlaceScene({ scenes, aria }: { scenes: Place[]; aria: string }) {
  const Ball = ({ cx, cy }: { cx: number; cy: number }) => <circle cx={cx} cy={cy} r={11} fill={ROSE} stroke="#be123c" strokeWidth={2} />;
  const Box = ({ x, w = 60, open }: { x: number; w?: number; open?: boolean }) => (
    <rect x={x} y={34} width={w} height={36} rx={5} fill={open ? '#fff' : '#c7d2fe'} stroke={INDIGO} strokeWidth={3} />
  );
  return (
    <Wrap aria={aria} w={360} h={122}>
      {scenes.map((p, i) => {
        const ox = scenes.length === 1 ? 125 : 10 + i * 118;
        return (
          <g key={p}>
            {p === 'agter' ? <Ball cx={ox + 82} cy={40} /> : null}
            {p === 'tussen' ? (
              <>
                <Box x={ox + 5} w={36} />
                <Box x={ox + 69} w={36} />
              </>
            ) : (
              <Box x={ox + 25} open={p === 'in'} />
            )}
            {p === 'op' ? <Ball cx={ox + 55} cy={23} /> : null}
            {p === 'onder' ? <Ball cx={ox + 55} cy={84} /> : null}
            {p === 'in' ? <Ball cx={ox + 55} cy={52} /> : null}
            {p === 'voor' ? <Ball cx={ox + 38} cy={70} /> : null}
            {p === 'langs' ? <Ball cx={ox + 98} cy={52} /> : null}
            {p === 'tussen' ? <Ball cx={ox + 55} cy={52} /> : null}
            <text x={ox + 55} y={116} textAnchor="middle" fontSize={16} fontWeight={800} fill="#1e293b">{p}</text>
          </g>
        );
      })}
    </Wrap>
  );
}
