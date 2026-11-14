/**
 * South African food chain and a small savanna food web.
 *
 * Arrows point FOOD -> EATER (the convention exam questions use). Roles are shown by
 * colour, not words: green = producer, amber = herbivore, red = carnivore,
 * grey-brown = decomposer. Icons are simple white shapes inside a coloured disc.
 */
import type { ReactNode } from 'react';

export const ROLE_COLOR = {
  producer: '#22c55e',
  herbivore: '#f59e0b',
  carnivore: '#ef4444',
  decomposer: '#a8a29e',
} as const;
type Role = keyof typeof ROLE_COLOR;

const INK = '#0f172a';
const ARROW = '#e2e8f0';

/** Icons are drawn in a box of about +-12 around (0,0). */
const ICONS: Record<string, ReactNode> = {
  grass: (
    <g stroke="#fff" strokeWidth={1.8} strokeLinecap="round" fill="none">
      <path d="M-7 9 Q-8 1 -10 -6" />
      <path d="M-3 9 Q-3 -1 -4 -10" />
      <path d="M1 9 Q2 0 3 -8" />
      <path d="M5 9 Q7 2 9 -4" />
    </g>
  ),
  springbok: (
    <g>
      <g stroke="#fff" strokeWidth={1.3} strokeLinecap="round">
        <path d="M-5 3 L-5.5 10M-2.5 3.5 L-3 10M3 3.5 L3.5 10M5.5 3 L6 10" />
        <path d="M4 -0.5 L7.5 -6" />
        <path d="M7.4 -8 Q6.2 -11.6 7.8 -12.2M9.2 -8 Q10.2 -11.4 9 -12" fill="none" />
      </g>
      <ellipse cx={-0.5} cy={1} rx={7} ry={3.4} fill="#fff" />
      <ellipse cx={8.4} cy={-6.6} rx={2.6} ry={1.8} fill="#fff" />
      <path d="M-7 0 Q-9.5 -1 -10 1.5" stroke="#fff" strokeWidth={1.2} fill="none" strokeLinecap="round" />
      <path d="M-5 2.6 L5 2.6" stroke={INK} strokeWidth={0.7} opacity={0.5} />
    </g>
  ),
  zebra: (
    <g>
      <g stroke="#fff" strokeWidth={1.4} strokeLinecap="round">
        <path d="M-5 3 L-5.5 10M-2.5 3.5 L-3 10M3 3.5 L3.5 10M5.5 3 L6 10" />
        <path d="M4 -0.5 L7.2 -6.5" strokeWidth={2.4} />
      </g>
      <ellipse cx={-0.5} cy={1} rx={7.2} ry={3.8} fill="#fff" />
      <ellipse cx={8.6} cy={-7} rx={3} ry={1.9} fill="#fff" transform="rotate(25 8.6 -7)" />
      <path d="M6 -9 L6.8 -11.5 L8 -9.2Z" fill="#fff" />
      <g stroke={INK} strokeWidth={1.1}>
        <path d="M-4.5 -2 L-4.5 4M-2 -2.5 L-2 4.5M0.5 -2.5 L0.5 4.5M3 -2 L3 4" />
        <path d="M5.2 -2.2 L7.4 -4.4M6 -6 L8 -7.6" />
      </g>
      <path d="M-7.5 0 Q-9.5 -0.5 -10 2" stroke="#fff" strokeWidth={1.2} fill="none" strokeLinecap="round" />
    </g>
  ),
  lion: (
    <g>
      <circle cx={0} cy={0} r={10.5} fill="#fff" opacity={0.55} />
      <circle cx={-5.8} cy={-6.2} r={2.4} fill="#fff" />
      <circle cx={5.8} cy={-6.2} r={2.4} fill="#fff" />
      <circle cx={0} cy={0.5} r={6.4} fill="#fff" />
      <circle cx={-2.5} cy={-1.5} r={0.9} fill={INK} />
      <circle cx={2.5} cy={-1.5} r={0.9} fill={INK} />
      <path d="M-1.6 1.2 L1.6 1.2 L0 3Z" fill={INK} />
      <path d="M0 3 L0 4.6 M0 4.6 Q-1.8 5.6 -3 4.6 M0 4.6 Q1.8 5.6 3 4.6" stroke={INK} strokeWidth={0.7} fill="none" />
    </g>
  ),
  grasshopper: (
    <g stroke="#fff" strokeLinecap="round" fill="none">
      <ellipse cx={-1} cy={0} rx={8} ry={2.4} fill="#fff" stroke="none" />
      <circle cx={8} cy={-1} r={2.3} fill="#fff" stroke="none" />
      <path d="M-4 1 L-8 -7 L-12 6" strokeWidth={1.4} />
      <path d="M0 2 L0 8M3 2 L5 8" strokeWidth={1.2} />
      <path d="M9 -3 Q11 -8 14 -9" strokeWidth={0.9} />
    </g>
  ),
  bird: (
    <g>
      <path d="M-6 1 L-12 -2 L-11 4Z" fill="#fff" />
      <ellipse cx={-0.5} cy={1} rx={6.5} ry={4.2} fill="#fff" />
      <circle cx={6} cy={-3} r={3.2} fill="#fff" />
      <path d="M8.8 -3.8 L12.5 -2.6 L8.8 -1.8Z" fill="#fff" />
      <circle cx={6.8} cy={-3.6} r={0.7} fill={INK} />
      <path d="M-4 0.5 Q-1 -3 3 1 Q-1 4 -4 0.5Z" fill={INK} opacity={0.35} />
      <path d="M-1 5 L-1.5 10M2 5 L2.5 10" stroke="#fff" strokeWidth={1.1} strokeLinecap="round" />
    </g>
  ),
  fungus: (
    <g>
      <path d="M-10 1 A10 8.5 0 0 1 10 1Z" fill="#fff" />
      <circle cx={-4} cy={-3} r={1.3} fill={INK} opacity={0.3} />
      <circle cx={3} cy={-4.5} r={1.1} fill={INK} opacity={0.3} />
      <rect x={-3.2} y={1} width={6.4} height={9} rx={2.6} fill="#fff" />
    </g>
  ),
};

interface NodeSpec {
  id: string;
  icon: keyof typeof ICONS;
  role: Role;
  label: string;
  /** Put the name above the disc (when arrows arrive from below). */
  labelAbove?: boolean;
  x: number;
  y: number;
}
type Edge = [string, string, boolean?]; // from (food), to (eater), dashed (dead matter -> decomposer)

const NodeView = ({ n, r, scale, fontSize }: { n: NodeSpec; r: number; scale: number; fontSize: number }) => (
  <g>
    <circle cx={n.x} cy={n.y} r={r} fill={ROLE_COLOR[n.role]} />
    <g transform={`translate(${n.x} ${n.y}) scale(${scale})`}>{ICONS[n.icon]}</g>
    <text x={n.x} y={n.labelAbove ? n.y - r - 1.6 : n.y + r + fontSize + 0.8} textAnchor="middle" fontSize={fontSize} fill="#e2e8f0" fontWeight={700}>
      {n.label}
    </text>
  </g>
);

const EdgeView = ({ a, b, r, dashed, mid, labelH }: { a: NodeSpec; b: NodeSpec; r: number; dashed?: boolean; mid: string; labelH: number }) => {
  // Dashed (dead matter) arrows leave from under the name label so they never cross it.
  const ax = a.x;
  const ay = dashed ? a.y + r + labelH : a.y;
  const dx = b.x - ax;
  const dy = b.y - ay;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  const pad = r + 1.2;
  return (
    <line
      x1={dashed ? ax + ux * 0.5 : ax + ux * pad}
      y1={dashed ? ay + uy * 0.5 : ay + uy * pad}
      x2={b.x - ux * (pad + 1.2)}
      y2={b.y - uy * (pad + 1.2)}
      stroke={dashed ? '#d6d3d1' : ARROW}
      strokeWidth={dashed ? 1 : 1.5}
      strokeDasharray={dashed ? '1.8 1.6' : undefined}
      markerEnd={`url(#${mid}${dashed ? '-d' : ''})`}
    />
  );
};

interface GraphProps {
  nodes: NodeSpec[];
  edges: Edge[];
  viewBox: string;
  r: number;
  scale: number;
  fontSize: number;
  id: string;
  title: string;
  desc: string;
  className?: string;
}

const Graph = ({ nodes, edges, viewBox, r, scale, fontSize, id, title, desc, className }: GraphProps) => {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const [, , vw, vh] = viewBox.split(' ').map(Number);
  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-labelledby={`${id}-title ${id}-desc`}
      className={`mx-auto block w-full rounded-2xl ${className ?? ''}`}
      style={{ background: '#0f172a', fontFamily: 'inherit', maxWidth: '28rem', aspectRatio: `${vw} / ${vh}` }}
    >
      <title id={`${id}-title`}>{title}</title>
      <desc id={`${id}-desc`}>{desc}</desc>
      <defs>
        <marker id={id} markerWidth={5} markerHeight={5} refX={4} refY={2.5} orient="auto">
          <path d="M0,0 L5,2.5 L0,5Z" fill={ARROW} />
        </marker>
        <marker id={`${id}-d`} markerWidth={6} markerHeight={6} refX={5} refY={3} orient="auto">
          <path d="M0,0 L6,3 L0,6Z" fill="#d6d3d1" />
        </marker>
      </defs>
      {edges.map(([f, t, dashed]) => (
        <EdgeView key={`${f}-${t}`} a={byId[f]} b={byId[t]} r={r} dashed={dashed} mid={id} labelH={fontSize + 2} />
      ))}
      {nodes.map((n) => (
        <NodeView key={n.id} n={n} r={r} scale={scale} fontSize={fontSize} />
      ))}
    </svg>
  );
};

/** grass -> springbok -> lion, and all three feed the decomposer when they die (dashed). */
export const FoodChain = ({ className }: { className?: string }) => (
  <Graph
    id="fc-chain"
    className={className}
    viewBox="0 0 100 70"
    r={9}
    scale={0.68}
    fontSize={4.2}
    title="A South African food chain: grass, springbok, lion, with a fungus decomposer"
    desc="Arrows point from the food to the eater. Grass, the producer, is eaten by a springbok, a herbivore. The springbok is eaten by a lion, a carnivore. Dead plants and animals are broken down by a fungus, the decomposer, shown with dashed arrows."
    nodes={[
      { id: 'grass', icon: 'grass', role: 'producer', label: 'Grass', x: 16, y: 17 },
      { id: 'springbok', icon: 'springbok', role: 'herbivore', label: 'Springbok', x: 50, y: 17 },
      { id: 'lion', icon: 'lion', role: 'carnivore', label: 'Lion', x: 84, y: 17 },
      { id: 'fungus', icon: 'fungus', role: 'decomposer', label: 'Fungus', x: 50, y: 54 },
    ]}
    edges={[
      ['grass', 'springbok'],
      ['springbok', 'lion'],
      ['grass', 'fungus', true],
      ['springbok', 'fungus', true],
      ['lion', 'fungus', true],
    ]}
  />
);

/** A small savanna web: one producer, three plant-eaters, a bird that eats insects, one top predator. */
export const FoodWeb = ({ className }: { className?: string }) => (
  <Graph
    id="fc-web"
    className={className}
    viewBox="0 0 100 86"
    r={8}
    scale={0.6}
    fontSize={4}
    title="A small savanna food web"
    desc="Arrows point from the food to the eater. Grass is eaten by grasshoppers, springbok and zebra. Grasshoppers are eaten by a bird. Springbok and zebra are eaten by a lion."
    nodes={[
      { id: 'grass', icon: 'grass', role: 'producer', label: 'Grass', x: 14, y: 43 },
      { id: 'grasshopper', icon: 'grasshopper', role: 'herbivore', label: 'Grasshopper', labelAbove: true, x: 50, y: 19 },
      { id: 'springbok', icon: 'springbok', role: 'herbivore', label: 'Springbok', x: 50, y: 43 },
      { id: 'zebra', icon: 'zebra', role: 'herbivore', label: 'Zebra', x: 50, y: 70 },
      { id: 'bird', icon: 'bird', role: 'carnivore', label: 'Bird', x: 86, y: 19 },
      { id: 'lion', icon: 'lion', role: 'carnivore', label: 'Lion', x: 86, y: 56 },
    ]}
    edges={[
      ['grass', 'grasshopper'],
      ['grass', 'springbok'],
      ['grass', 'zebra'],
      ['grasshopper', 'bird'],
      ['springbok', 'lion'],
      ['zebra', 'lion'],
    ]}
  />
);
