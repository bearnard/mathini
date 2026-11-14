import { SYMMETRY_LINES, reflectX, regularPolygon } from './mathsHelpers';
import { r3 } from '../round';

/**
 * Line symmetry and reflection drawn as pictures:
 *  - HeartFold: a heart with a dashed fold line; the two halves are tinted so one is clearly the
 *    mirror image of the other.
 *  - SymmetryLines: a square, a rectangle and an equilateral triangle with ALL their fold lines
 *    drawn (the counts come from SYMMETRY_LINES).
 *  - ReflectionGrid: a triangle reflected in a mirror line on a grid; each point and its image
 *    are joined by a dashed line crossing the mirror at the middle, so the distances are equal
 *    (the images come from reflectX).
 */

const INK = '#0f172a';
const FOLD = '#fbbf24';

export const HeartFold = ({ className }: { className?: string }) => {
  const heart = 'M50 62 C 10 36, 14 10, 34 10 C 44 10, 50 18, 50 22 C 50 18, 56 10, 66 10 C 86 10, 90 36, 50 62 Z';
  return (
    <svg
      viewBox="0 0 100 78"
      role="img"
      aria-label="A heart with a dashed line down the middle. The left half and the right half are mirror images of each other, so the heart folds exactly in half along the line."
      className={`mx-auto block w-full max-w-xs rounded-2xl ${className ?? ''}`}
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      <defs>
        <clipPath id="hf-left"><rect x={0} y={0} width={50} height={78} /></clipPath>
        <clipPath id="hf-right"><rect x={50} y={0} width={50} height={78} /></clipPath>
      </defs>
      <path d={heart} fill="#818cf8" clipPath="url(#hf-left)" />
      <path d={heart} fill="#a5b4fc" clipPath="url(#hf-right)" />
      <path d={heart} fill="none" stroke="#e0e7ff" strokeWidth={1} />
      <line x1={50} y1={4} x2={50} y2={68} stroke={FOLD} strokeWidth={1.6} strokeDasharray="3 2" />
      {/* a matching pair of points, the same distance from the fold */}
      <circle cx={30} cy={26} r={2.2} fill="#0f172a" />
      <circle cx={70} cy={26} r={2.2} fill="#0f172a" />
      <line x1={30} y1={26} x2={70} y2={26} stroke="#0f172a" strokeWidth={0.8} strokeDasharray="1.6 1.4" />
      <text x={50} y={75} textAnchor="middle" fontSize={5.4} fontWeight={800} fill={FOLD}>fold line</text>
    </svg>
  );
};

export const SymmetryLines = ({ className }: { className?: string }) => {
  const tiles = [
    { name: 'Square', key: 'square' as const, color: '#818cf8' },
    { name: 'Rectangle', key: 'rectangle' as const, color: '#34d399' },
    { name: 'Equilateral triangle', key: 'equilateral triangle' as const, color: '#fbbf24' },
  ];
  const w = 40;
  const lines = (key: keyof typeof SYMMETRY_LINES, cx: number, cy: number) => {
    const L: [number, number, number, number][] = [];
    if (key === 'square') {
      L.push([cx, cy - 12, cx, cy + 12], [cx - 12, cy, cx + 12, cy], [cx - 12, cy - 12, cx + 12, cy + 12], [cx + 12, cy - 12, cx - 12, cy + 12]);
    } else if (key === 'rectangle') {
      L.push([cx, cy - 9, cx, cy + 9], [cx - 15, cy, cx + 15, cy]);
    } else {
      const v = regularPolygon(3, cx, cy, 13);
      for (let i = 0; i < 3; i++) {
        const a = v[(i + 1) % 3];
        const b = v[(i + 2) % 3];
        L.push([v[i].x, v[i].y, r3((a.x + b.x) / 2), r3((a.y + b.y) / 2)]);
      }
    }
    return L;
  };
  return (
    <svg
      viewBox="0 0 120 62"
      role="img"
      aria-label={tiles.map((t) => `${t.name}: ${SYMMETRY_LINES[t.key]} lines of symmetry`).join('. ') + '.'}
      className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`}
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      {tiles.map((t, i) => {
        const cx = w * i + w / 2;
        const cy = 22;
        return (
          <g key={t.key}>
            {t.key === 'square' && <rect x={cx - 12} y={cy - 12} width={24} height={24} fill={t.color} fillOpacity={0.28} stroke={t.color} strokeWidth={1.8} />}
            {t.key === 'rectangle' && <rect x={cx - 15} y={cy - 9} width={30} height={18} fill={t.color} fillOpacity={0.28} stroke={t.color} strokeWidth={1.8} />}
            {t.key === 'equilateral triangle' && (
              <polygon points={regularPolygon(3, cx, cy, 13).map((p) => `${p.x},${p.y}`).join(' ')} fill={t.color} fillOpacity={0.28} stroke={t.color} strokeWidth={1.8} strokeLinejoin="round" />
            )}
            {lines(t.key, cx, cy).map((l, k) => (
              <line key={k} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke={FOLD} strokeWidth={1} strokeDasharray="2 1.4" strokeLinecap="round" />
            ))}
            <text textAnchor="middle" fontSize={5.2} fontWeight={800} fill="#f8fafc">
              {t.name.includes(' ') ? (
                <>
                  <tspan x={cx} y={46}>{t.name.split(' ')[0]}</tspan>
                  <tspan x={cx} y={52}>{t.name.split(' ')[1]}</tspan>
                </>
              ) : (
                <tspan x={cx} y={46}>{t.name}</tspan>
              )}
            </text>
            <text x={cx} y={t.name.includes(' ') ? 59 : 53} textAnchor="middle" fontSize={5.4} fontWeight={800} fill={FOLD}>{SYMMETRY_LINES[t.key]} lines</text>
          </g>
        );
      })}
    </svg>
  );
};

export const ReflectionGrid = ({ className }: { className?: string }) => {
  const U = 9;
  const X0 = 5;
  const Y0 = 6;
  const COLS = 10;
  const ROWS = 7;
  const M = 5; // mirror line at x = 5
  const pts = [
    { name: 'A', x: 3, y: 1 },
    { name: 'B', x: 4, y: 5 },
    { name: 'C', x: 1, y: 3 },
  ];
  const px = (x: number) => r3(X0 + x * U);
  const py = (y: number) => r3(Y0 + y * U);
  const img = pts.map((p) => ({ name: `${p.name}'`, x: reflectX(p.x, M), y: p.y }));
  const tri = (a: { x: number; y: number }[]) => a.map((p) => `${px(p.x)},${py(p.y)}`).join(' ');
  return (
    <svg
      viewBox="0 0 100 80"
      role="img"
      aria-label="A triangle on a grid and its reflection in a vertical mirror line. Each corner and its image are the same distance from the mirror line on opposite sides, joined by a dashed line that the mirror line cuts in half."
      className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`}
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      <g stroke="#334155" strokeWidth={0.4}>
        {Array.from({ length: COLS + 1 }).map((_, i) => <line key={`v${i}`} x1={px(i)} y1={py(0)} x2={px(i)} y2={py(ROWS)} />)}
        {Array.from({ length: ROWS + 1 }).map((_, j) => <line key={`h${j}`} x1={px(0)} y1={py(j)} x2={px(COLS)} y2={py(j)} />)}
      </g>
      <line x1={px(M)} y1={py(0) - 3} x2={px(M)} y2={py(ROWS) + 3} stroke={FOLD} strokeWidth={1.4} strokeDasharray="3 2" />
      <text x={px(M)} y={77} textAnchor="middle" fontSize={5} fontWeight={800} fill={FOLD}>mirror line</text>
      {pts.map((p, i) => (
        <line key={p.name} x1={px(p.x)} y1={py(p.y)} x2={px(img[i].x)} y2={py(img[i].y)} stroke="#e2e8f0" strokeWidth={0.6} strokeDasharray="1.4 1.4" />
      ))}
      <polygon points={tri(pts)} fill="#818cf8" fillOpacity={0.45} stroke="#818cf8" strokeWidth={1.4} strokeLinejoin="round" />
      <polygon points={tri(img)} fill="#34d399" fillOpacity={0.45} stroke="#34d399" strokeWidth={1.4} strokeLinejoin="round" />
      {pts.map((p, i) => (
        <g key={p.name} fontSize={4.8} fontWeight={800}>
          <circle cx={px(p.x)} cy={py(p.y)} r={1.4} fill="#e0e7ff" />
          <circle cx={px(img[i].x)} cy={py(img[i].y)} r={1.4} fill="#d1fae5" />
          <text x={px(p.x) + (p.x < M ? -4 : 2)} y={py(p.y) - 1.8} fill="#c7d2fe">{p.name}</text>
          <text x={px(img[i].x) + 2} y={py(img[i].y) - 1.8} fill="#a7f3d0">{img[i].name}</text>
        </g>
      ))}
    </svg>
  );
};
