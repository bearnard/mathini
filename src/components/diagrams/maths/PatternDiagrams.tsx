import { applyRules, axisMax, axisTicks, balanced, ruleText, sequence, unknownAddend } from './mathsHelpers';
import type { Rule } from './mathsHelpers';
import { r3 } from '../round';

/**
 * Pictures for Grade 6 patterns, flow diagrams, number sentences and bar graphs. Every number
 * drawn comes from the tested helpers in mathsHelpers.ts, never typed by hand.
 */

const INDIGO = '#818cf8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';
const INK = '#0f172a';
const SOFT = '#cbd5e1';

const frame = 'mx-auto block w-full max-w-md rounded-2xl';
const panel = { background: INK, fontFamily: 'inherit' } as const;

/* ------------------------------------------------------------------ JumpLine */

/** A pattern on a real number line: each term is a point, each jump an arc labelled with the rule. */
export const JumpLine = ({ start, rule, count, next = false }: { start: number; rule: Rule; count: number; next?: boolean }) => {
  const terms = sequence(start, rule, count + (next ? 1 : 0));
  const shown = next ? terms.slice(0, -1) : terms;
  const last = terms[terms.length - 1];
  const lo = Math.max(0, start - rule.n);
  const hi = last + rule.n;
  const X0 = 10;
  const W = 110;
  const Y = 44;
  const px = (v: number) => r3(X0 + ((v - lo) / (hi - lo)) * W);
  return (
    <svg
      viewBox="0 0 130 64"
      role="img"
      aria-label={`A number line. The pattern starts at ${start} and jumps ${ruleText([rule])} each time: ${shown.join(', ')}${next ? ', then the next number is the one to find' : ''}.`}
      className={frame}
      style={panel}
    >
      <line x1={X0} y1={Y} x2={X0 + W} y2={Y} stroke="#64748b" strokeWidth={1} />
      {terms.map((v, i) => {
        if (i === terms.length - 1) return null;
        const x1 = px(v);
        const x2 = px(terms[i + 1]);
        const mid = r3((x1 + x2) / 2);
        const dashed = next && i === terms.length - 2;
        return (
          <g key={`j${v}`}>
            <path d={`M${x1} ${Y - 3} Q${mid} ${Y - 25} ${x2} ${Y - 3}`} fill="none" stroke={dashed ? AMBER : GREEN} strokeWidth={1.2} strokeDasharray={dashed ? '2.5 2' : undefined} />
            <text x={mid} y={Y - 20} textAnchor="middle" fontSize={7} fontWeight={800} fill={dashed ? AMBER : GREEN}>{ruleText([rule])}</text>
          </g>
        );
      })}
      {terms.map((v, i) => {
        const hidden = next && i === terms.length - 1;
        return (
          <g key={`p${i}`}>
            <circle cx={px(v)} cy={Y} r={2.6} fill={hidden ? 'none' : INDIGO} stroke={hidden ? AMBER : INK} strokeWidth={hidden ? 1.2 : 0.8} />
            <text x={px(v)} y={Y + 11} textAnchor="middle" fontSize={7.6} fontWeight={800} fill={hidden ? AMBER : '#e2e8f0'}>{hidden ? '?' : v}</text>
          </g>
        );
      })}
    </svg>
  );
};

/* ---------------------------------------------------------------- ChainSteps */

/** Terms in boxes joined by arrows that carry the rule. A string term (such as "?") is the one to find. */
export const ChainSteps = ({ start, rule, count, hideLast = false }: { start: number; rule: Rule; count: number; hideLast?: boolean }) => {
  const terms = sequence(start, rule, count);
  const BW = 16;
  const GAP = (122 - count * BW) / (count - 1);
  const Y = 26;
  return (
    <svg
      viewBox="0 0 130 54"
      role="img"
      aria-label={`A pattern: ${terms.map((t, i) => (hideLast && i === count - 1 ? 'the number to find' : t)).join(', ')}. Each step is ${ruleText([rule])}.`}
      className={frame}
      style={panel}
    >
      {terms.map((t, i) => {
        const x = r3(4 + i * (BW + GAP));
        const hidden = hideLast && i === count - 1;
        return (
          <g key={i}>
            <rect x={x} y={Y} width={BW} height={16} rx={3} fill={hidden ? AMBER : INDIGO} />
            <text x={r3(x + BW / 2)} y={Y + 11} textAnchor="middle" fontSize={t >= 100 ? 6.6 : 8} fontWeight={800} fill={INK}>{hidden ? '?' : t}</text>
            {i < count - 1 && (
              <g>
                <path d={`M${r3(x + BW + 1)} ${Y + 8} H${r3(x + BW + GAP - 2.5)}`} stroke={GREEN} strokeWidth={1.2} />
                <path d={`M${r3(x + BW + GAP - 4)} ${Y + 5.5} L${r3(x + BW + GAP - 1.5)} ${Y + 8} L${r3(x + BW + GAP - 4)} ${Y + 10.5}`} fill="none" stroke={GREEN} strokeWidth={1.2} />
                <text x={r3(x + BW + GAP / 2)} y={Y - 3} textAnchor="middle" fontSize={6.4} fontWeight={800} fill={GREEN}>{rule.op}{rule.n}</text>
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
};

/* ------------------------------------------------------------------- FlowRows */

/** input -> rule machine -> output. `unknownRow` hides that row's output (the number to find). */
export const FlowRows = ({ rules, inputs, unknownRow }: { rules: Rule[]; inputs: number[]; unknownRow?: number }) => {
  const rows = inputs.map((x) => ({ x, y: applyRules(rules, x) }));
  const ROW = 20;
  const Y0 = 20;
  const H = Y0 + rows.length * ROW + 2;
  const label = ruleText(rules);
  return (
    <svg
      viewBox={`0 0 130 ${H}`}
      role="img"
      aria-label={`A flow diagram with the rule ${label}. ${rows.map((r, i) => `Input ${r.x} gives ${unknownRow === i ? 'an output to find' : `output ${r.y}`}`).join('. ')}.`}
      className={frame}
      style={panel}
    >
      <text x={20} y={11} textAnchor="middle" fontSize={6.2} fontWeight={800} fill={SOFT}>Input</text>
      <text x={65} y={11} textAnchor="middle" fontSize={6.2} fontWeight={800} fill={SOFT}>Rule</text>
      <text x={110} y={11} textAnchor="middle" fontSize={6.2} fontWeight={800} fill={SOFT}>Output</text>
      <rect x={43} y={Y0 - 3} width={44} height={rows.length * ROW + 3} rx={5} fill="#312e81" stroke={INDIGO} strokeWidth={1} />
      {rows.map((r, i) => {
        const cy = Y0 + i * ROW + 8;
        const hidden = unknownRow === i;
        return (
          <g key={i}>
            <rect x={8} y={cy - 7} width={24} height={14} rx={3} fill={INDIGO} />
            <text x={20} y={cy + 3.4} textAnchor="middle" fontSize={9} fontWeight={800} fill={INK}>{r.x}</text>
            <path d={`M33 ${cy} H42`} stroke={SOFT} strokeWidth={1} />
            <path d={`M40 ${cy - 2} L42.5 ${cy} L40 ${cy + 2}`} fill="none" stroke={SOFT} strokeWidth={1} />
            <text x={65} y={cy + 3.4} textAnchor="middle" fontSize={label.length > 6 ? 8 : 9.4} fontWeight={800} fill="#e0e7ff">{label}</text>
            <path d={`M88 ${cy} H97`} stroke={SOFT} strokeWidth={1} />
            <path d={`M95 ${cy - 2} L97.5 ${cy} L95 ${cy + 2}`} fill="none" stroke={SOFT} strokeWidth={1} />
            <rect x={98} y={cy - 7} width={24} height={14} rx={3} fill={hidden ? 'none' : GREEN} stroke={hidden ? AMBER : 'none'} strokeWidth={1.2} strokeDasharray={hidden ? '2.5 2' : undefined} />
            <text x={110} y={cy + 3.4} textAnchor="middle" fontSize={9} fontWeight={800} fill={hidden ? AMBER : INK}>{hidden ? '?' : r.y}</text>
          </g>
        );
      })}
    </svg>
  );
};

/* -------------------------------------------------------------- BalanceScale */

/**
 * A balance scale for a number sentence. The beam is level because the sentence is true; the
 * tiles on each pan are the numbers of the sentence. `unknown` marks one left tile as the number
 * to find (or, when `solved`, shows what it must be).
 */
export const BalanceScale = ({ left, right, unknown, solved = false }: { left: number[]; right: number[]; unknown?: number; solved?: boolean }) => {
  const total = right.reduce((a, b) => a + b, 0);
  const tiles = unknown === undefined ? left : left.map((v, i) => (i === unknown ? unknownAddend(left.filter((_, j) => j !== unknown).reduce((a, b) => a + b, 0), total) : v));
  if (!balanced(tiles, right)) throw new Error('BalanceScale: the two sides are not equal');
  const TW = 21;
  const pan = (items: { text: string | number; fill: string }[], cx: number) => {
    const w = items.length * TW + (items.length - 1) * 5;
    return (
      <g>
        <path d={`M${cx} 24 L${cx - 26} 56 M${cx} 24 L${cx + 26} 56`} stroke={SOFT} strokeWidth={0.8} />
        <path d={`M${cx - 28} 56 H${cx + 28} Q${cx + 26} 66 ${cx} 66 Q${cx - 26} 66 ${cx - 28} 56 Z`} fill="#475569" />
        {items.map((it, i) => {
          const x = r3(cx - w / 2 + i * (TW + 5));
          return (
            <g key={i}>
              <rect x={x} y={38} width={TW} height={17} rx={3} fill={it.fill} />
              <text x={r3(x + TW / 2)} y={49.6} textAnchor="middle" fontSize={9.6} fontWeight={800} fill={INK}>{it.text}</text>
            </g>
          );
        })}
      </g>
    );
  };
  const leftItems = left.map((v, i) => (i === unknown ? { text: solved ? tiles[i] : '?', fill: AMBER } : { text: v, fill: INDIGO }));
  const rightItems = right.map((v) => ({ text: v, fill: GREEN }));
  return (
    <svg
      viewBox="0 0 130 78"
      role="img"
      aria-label={`A balance scale that is level. On the left: ${leftItems.map((l) => l.text === '?' ? 'a number to find' : l.text).join(' and ')}. On the right: ${right.join(' and ')}. Both sides are worth ${total}.`}
      className={frame}
      style={panel}
    >
      <path d="M65 22 L56 72 H74 Z" fill="#64748b" />
      <path d="M33 24 H97" stroke="#e2e8f0" strokeWidth={2.2} strokeLinecap="round" />
      <circle cx={65} cy={24} r={3.2} fill={AMBER} />
      {pan(leftItems, 33)}
      {pan(rightItems, 97)}
      <text x={65} y={12} textAnchor="middle" fontSize={7.4} fontWeight={800} fill={ROSE}>both sides = {total}</text>
    </svg>
  );
};

/* ------------------------------------------------------------------ BarGraph */

/** A bar graph with a title, a labelled axis and a scale that goes up in `step`s. */
export const BarGraph = ({ title, yLabel, items, step }: { title: string; yLabel: string; items: { label: string; value: number }[]; step: number }) => {
  const max = axisMax(Math.max(...items.map((i) => i.value)), step);
  const ticks = axisTicks(Math.max(...items.map((i) => i.value)), step);
  const X0 = 26;
  const W = 98;
  const Y0 = 82; // the zero line
  const H = 54; // height of the scale
  const py = (v: number) => r3(Y0 - (v / max) * H);
  const slot = W / items.length;
  const colors = [ROSE, AMBER, '#fb923c', GREEN, INDIGO];
  return (
    <svg
      viewBox="0 0 130 100"
      role="img"
      aria-label={`A bar graph titled ${title}. The scale goes up in twos. ${items.map((i) => `${i.label}: ${i.value}`).join(', ')}.`}
      className={frame}
      style={panel}
    >
      <text x={65} y={11} textAnchor="middle" fontSize={7.4} fontWeight={800} fill="#e2e8f0">{title}</text>
      {ticks.map((t) => (
        <g key={t}>
          <line x1={X0} y1={py(t)} x2={X0 + W} y2={py(t)} stroke={t === 0 ? '#94a3b8' : '#334155'} strokeWidth={t === 0 ? 1 : 0.5} />
          <text x={X0 - 3} y={r3(py(t) + 2.2)} textAnchor="end" fontSize={6} fontWeight={700} fill={SOFT}>{t}</text>
        </g>
      ))}
      <line x1={X0} y1={py(max)} x2={X0} y2={Y0} stroke="#94a3b8" strokeWidth={1} />
      <text x={8} y={r3(Y0 - H / 2)} textAnchor="middle" fontSize={5.6} fontWeight={700} fill={SOFT} transform={`rotate(-90 8 ${r3(Y0 - H / 2)})`}>{yLabel}</text>
      {items.map((it, i) => {
        const bw = slot * 0.56;
        const x = r3(X0 + i * slot + (slot - bw) / 2);
        return (
          <g key={it.label}>
            <rect x={x} y={py(it.value)} width={r3(bw)} height={r3(Y0 - py(it.value))} fill={colors[i % colors.length]} rx={1.5} />
            <text x={r3(x + bw / 2)} y={r3(py(it.value) - 2.4)} textAnchor="middle" fontSize={6.6} fontWeight={800} fill="#e2e8f0">{it.value}</text>
            <text x={r3(x + bw / 2)} y={Y0 + 9} textAnchor="middle" fontSize={6.4} fontWeight={800} fill="#e2e8f0">{it.label}</text>
          </g>
        );
      })}
    </svg>
  );
};
