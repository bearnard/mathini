/**
 * What humans need on a planet: Earth compared with Mars, as a checklist.
 * Five needs, one word each: water, air, warmth, shield (an atmosphere that blocks the
 * Sun's harmful rays) and food (soil to grow it in).
 *
 * Earth: all five are met (tick). Mars: water exists only as ICE and not as liquid on the
 * surface (amber snowflake); the air is very thin and mostly carbon dioxide, so there is no
 * oxygen to breathe; it is very cold (about -60 C on average); the thin atmosphere gives
 * little protection from the Sun; and the soil cannot grow food as it is (crosses).
 */

const INK = '#0f172a';
const OK = '#22c55e';
const NO = '#ef4444';
const ICE = '#f59e0b';

interface DiagramProps {
  className?: string;
}

const ROWS = ['water', 'air', 'warmth', 'shield', 'food'] as const;
type Need = (typeof ROWS)[number];
const LABEL: Record<Need, string> = { water: 'Water', air: 'Air', warmth: 'Warmth', shield: 'Shield', food: 'Food' };

const Icon = ({ kind }: { kind: Need }) => {
  switch (kind) {
    case 'water':
      return <path d="M0 -6 C 4 -1 5.5 1.5 5.5 3 A5.5 5.5 0 0 1 -5.5 3 C -5.5 1.5 -4 -1 0 -6Z" fill="#38bdf8" />;
    case 'air':
      return (
        <g>
          <circle r={6} fill="#bae6fd" />
          <text y={2.1} textAnchor="middle" fontSize={5.6} fill={INK} fontWeight={800}>O₂</text>
        </g>
      );
    case 'warmth':
      return (
        <g>
          <rect x={-1.6} y={-6.4} width={3.2} height={9} rx={1.6} fill="#e2e8f0" />
          <circle cy={4} r={3.2} fill="#f87171" />
          <rect x={-0.8} y={-2} width={1.6} height={6} fill="#f87171" />
        </g>
      );
    case 'shield':
      return (
        <g>
          <path d="M0 -6.4 L5.6 -4 V0.6 C5.6 3.8 3 5.8 0 7 C-3 5.8 -5.6 3.8 -5.6 0.6 V-4Z" fill="#818cf8" />
          <circle cy={-0.4} r={1.8} fill="#fde68a" />
        </g>
      );
    case 'food':
      return (
        <g>
          <rect x={-6} y={2.4} width={12} height={3.6} rx={1} fill="#92400e" />
          <path d="M0 2.4 V-3.4" stroke="#4ade80" strokeWidth={1.4} strokeLinecap="round" />
          <path d="M0 -1 C-4 -1 -5 -4 -5 -5.6 C-1.6 -5.6 0 -3.4 0 -1Z M0 -3 C3.6 -3 4.6 -5.6 4.6 -7 C1.4 -7 0 -5.2 0 -3Z" fill="#4ade80" />
        </g>
      );
  }
};

const Tick = () => (
  <g>
    <circle r={5.2} fill={OK} />
    <path d="M-2.6 0.2 L-0.7 2.2 L2.8 -2" fill="none" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </g>
);
const Cross = () => (
  <g>
    <circle r={5.2} fill={NO} />
    <path d="M-2.4 -2.4 L2.4 2.4 M2.4 -2.4 L-2.4 2.4" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" />
  </g>
);
/** Water exists on Mars only as ice: amber, with a little snowflake. */
const Ice = () => (
  <g>
    <circle r={5.2} fill={ICE} />
    <path d="M0 -3 V3 M-2.6 -1.5 L2.6 1.5 M-2.6 1.5 L2.6 -1.5" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
  </g>
);

const EX = 62;
const MX = 86;

const PlanetNeeds = ({ className }: DiagramProps) => (
  <svg
    viewBox="0 0 100 118"
    role="img"
    aria-labelledby="pn-title pn-desc"
    className={`mx-auto block w-full rounded-2xl ${className ?? ''}`}
    style={{ background: INK, fontFamily: 'inherit', maxWidth: '26rem', aspectRatio: '100 / 118' }}
  >
    <title id="pn-title">What humans need on a planet: Earth compared with Mars</title>
    <desc id="pn-desc">
      A checklist of five needs: water, air to breathe, warmth, a shield from the Sun&apos;s harmful rays, and food. Earth has a green tick for all five. Mars has an amber mark for water, because its water is only ice and not liquid on the surface, and a red cross for each of the others: the air is thin with no oxygen, it is very cold, the thin atmosphere gives little protection, and food cannot be grown in its soil.
    </desc>

    {/* the two planets */}
    <circle cx={EX} cy={13} r={8} fill="#2563eb" />
    <path d="M57 9 q3 -2 5 1 q-1 3 -4 3 q-2 -1 -1 -4Z M64 15 q3 0 3 3 q-2 2 -4 0 q-1 -2 1 -3Z" fill="#22c55e" />
    <circle cx={MX} cy={13} r={8} fill="#c2410c" />
    <circle cx={MX - 2.6} cy={11} r={1.5} fill="#9a3412" />
    <circle cx={MX + 2.4} cy={15.6} r={2} fill="#9a3412" />
    <g fontSize={5} fontWeight={800} textAnchor="middle" fill="#f8fafc">
      <text x={EX} y={29}>Earth</text>
      <text x={MX} y={29}>Mars</text>
    </g>

    {ROWS.map((need, i) => {
      const y = 44 + i * 16;
      return (
        <g key={need}>
          <rect x={3} y={y - 7} width={94} height={14} rx={3} fill="#1e293b" />
          <g transform={`translate(13 ${y}) scale(0.82)`}><Icon kind={need} /></g>
          <text x={23} y={y + 2} fontSize={5.2} fill="#f8fafc" fontWeight={700}>{LABEL[need]}</text>
          <g transform={`translate(${EX} ${y})`}><Tick /></g>
          <g transform={`translate(${MX} ${y})`}>{need === 'water' ? <Ice /> : <Cross />}</g>
        </g>
      );
    })}
  </svg>
);

export default PlanetNeeds;
