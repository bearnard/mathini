/**
 * Map scale, shown not told.
 *
 * MapScaleWays: the three ways a scale is written, side by side: in words, as a
 * ratio, and as a line (bar) scale. All three say the same thing: 1 cm on the map is
 * 1 km on the ground. 1 km = 1 000 m = 100 000 cm, so 1 cm : 1 km is 1 : 100 000.
 *
 * MapScaleRuler: a ruler laid between two places on a tiny map reads 3.5 cm, and the
 * same length on the bar scale reads 3.5 km.
 */

const INK = '#0f172a';
const GOLD = '#fbbf24';
const WORDS = '#38bdf8';
const RATIO = '#f472b6';
const LINE = '#4ade80';

interface DiagramProps {
  className?: string;
}

const Card = ({ y, color, tag, children }: { y: number; color: string; tag: string; children: React.ReactNode }) => (
  <g transform={`translate(0 ${y})`}>
    <rect x={3} y={0} width={94} height={26} rx={3} fill="#1e293b" />
    <rect x={3} y={0} width={4} height={26} rx={2} fill={color} />
    <text x={12} y={5.6} fontSize={3.6} fill={color} fontWeight={800}>{tag}</text>
    {children}
  </g>
);

export const MapScaleWays = ({ className }: DiagramProps) => (
  <svg
    viewBox="0 0 100 92"
    role="img"
    aria-labelledby="ms-ways-title ms-ways-desc"
    className={`mx-auto block w-full rounded-2xl ${className ?? ''}`}
    style={{ background: INK, fontFamily: 'inherit', maxWidth: '28rem', aspectRatio: '100 / 92' }}
  >
    <title id="ms-ways-title">Three ways to write the same map scale</title>
    <desc id="ms-ways-desc">
      In words: 1 centimetre on the map is 1 kilometre on the ground. As a ratio: 1 to 100 000. As a line scale: a bar marked 0, 1, 2 and 3 kilometres. All three mean the same thing.
    </desc>

    <Card y={2} color={WORDS} tag="Words">
      <text x={50} y={18.5} textAnchor="middle" fontSize={8.5} fill="#f8fafc" fontWeight={800}>1 cm = 1 km</text>
    </Card>

    <Card y={32} color={RATIO} tag="Ratio">
      <text x={50} y={18.5} textAnchor="middle" fontSize={9.5} fill="#f8fafc" fontWeight={800}>1 : 100 000</text>
    </Card>

    <Card y={62} color={LINE} tag="Line">
      {/* bar scale: alternating blocks, one block = 1 cm = 1 km */}
      {[0, 1, 2].map((k) => (
        <rect key={k} x={18 + k * 20} y={9} width={20} height={4.2} fill={k % 2 === 0 ? '#f8fafc' : '#475569'} stroke="#f8fafc" strokeWidth={0.4} />
      ))}
      <g fontSize={3.6} fill="#f8fafc" fontWeight={700} textAnchor="middle">
        <text x={18} y={20}>0</text>
        <text x={38} y={20}>1</text>
        <text x={58} y={20}>2</text>
        <text x={78} y={20}>3 km</text>
      </g>
    </Card>
  </svg>
);

/* ---------- Ruler on a map ---------- */

const CM = 12; // viewBox units per cm
const AX = 14;
const BX = AX + 3.5 * CM; // 3.5 cm away

export const MapScaleRuler = ({ className }: DiagramProps) => (
  <svg
    viewBox="0 0 100 86"
    role="img"
    aria-labelledby="ms-ruler-title ms-ruler-desc"
    className={`mx-auto block w-full rounded-2xl ${className ?? ''}`}
    style={{ background: INK, fontFamily: 'inherit', maxWidth: '28rem', aspectRatio: '100 / 86' }}
  >
    <title id="ms-ruler-title">Measure with a ruler, read kilometres from the scale bar</title>
    <desc id="ms-ruler-desc">
      A small map with two places, A and B. A ruler laid from A to B reads 3.5 centimetres. The scale bar says 1 centimetre is 1 kilometre, so the same length on the bar is 3.5 kilometres.
    </desc>

    {/* the map */}
    <rect x={5} y={5} width={90} height={28} rx={3} fill="#14532d" />
    <path d="M5 26 Q30 20 52 27 T95 21" stroke="#38bdf8" strokeWidth={2} fill="none" opacity={0.7} />
    <line x1={AX} y1={16} x2={BX} y2={16} stroke="#f8fafc" strokeWidth={0.6} strokeDasharray="1.4 1.2" />
    {[AX, BX].map((x, i) => (
      <g key={x}>
        <circle cx={x} cy={16} r={2.6} fill={GOLD} stroke={INK} strokeWidth={0.6} />
        <text x={x} y={11.2} textAnchor="middle" fontSize={4.4} fill="#f8fafc" fontWeight={800}>{i === 0 ? 'A' : 'B'}</text>
      </g>
    ))}

    {/* ruler laid along A to B, 0 at A */}
    <rect x={AX - 2} y={37} width={5 * CM + 6} height={8} rx={1} fill="#fde68a" />
    {Array.from({ length: 11 }).map((_, k) => (
      <line key={k} x1={AX + k * (CM / 2)} x2={AX + k * (CM / 2)} y1={37} y2={k % 2 === 0 ? 42 : 40} stroke={INK} strokeWidth={0.4} />
    ))}
    <g fontSize={2.8} fill={INK} fontWeight={700} textAnchor="middle">
      {[0, 1, 2, 3, 4, 5].map((k) => (
        <text key={k} x={AX + k * CM} y={44.2}>{k}</text>
      ))}
    </g>
    <text x={AX + 5 * CM + 6} y={43} fontSize={3.2} fill={INK} fontWeight={800}>cm</text>

    {/* from B down: the reading */}
    <line x1={BX} x2={BX} y1={18.5} y2={64} stroke={GOLD} strokeWidth={0.7} strokeDasharray="1.4 1.2" />
    <text x={BX + 3} y={50.5} fontSize={4.2} fill={GOLD} fontWeight={800}>3.5 cm</text>

    {/* the line scale: 1 cm = 1 km, so the same length reads in km */}
    {[0, 1, 2, 3].map((k) => (
      <rect key={k} x={AX + k * CM} y={62} width={CM} height={4.2} fill={k % 2 === 0 ? '#f8fafc' : '#475569'} stroke="#f8fafc" strokeWidth={0.4} />
    ))}
    <rect x={AX} y={62} width={3.5 * CM} height={4.2} fill="none" stroke={GOLD} strokeWidth={1.1} />
    <g fontSize={3.2} fill="#f8fafc" fontWeight={700} textAnchor="middle">
      <text x={AX} y={72}>0</text>
      <text x={AX + 4 * CM} y={72}>4 km</text>
    </g>
    <text x={AX + 1.75 * CM} y={80.6} textAnchor="middle" fontSize={5.2} fill={GOLD} fontWeight={800}>3.5 km</text>
  </svg>
);
