import { r3 } from '../round';
import { criticalAngle, firstMinimum, refractAngle, slitIntensity } from './optics11Helpers';

/** Pictures for the Grade 11 optics lessons. Every angle comes from optics11Helpers.ts. */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const BLUE = '#818cf8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';
const SKY = '#38bdf8';

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);
const T = ({ x, y, children, size = 4.4, fill = LINE, anchor = 'middle', weight = 700 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>{children}</text>
);
const rad = (d: number) => (d * Math.PI) / 180;
const dc = (n: number, d = 1) => (Math.round(n * 10 ** d) / 10 ** d).toFixed(d).replace('.', ',');
/** A point at distance len from (x, y) at an angle from the vertical normal; up = true goes upward. dir -1 = left, +1 = right. */
const along = (x: number, y: number, len: number, angleDeg: number, up: boolean, dir: -1 | 1) => ({
  x: r3(x + dir * len * Math.sin(rad(angleDeg))),
  y: r3(y + (up ? -1 : 1) * len * Math.cos(rad(angleDeg))),
});

// ---------- a ray at a boundary ----------

export const RayAtBoundary = ({ n1, n2, theta1, name1, name2 }: { n1: number; n2: number; theta1: number; name1: string; name2: string }) => {
  const x = 60, y = 36, L = 30;
  const t2 = refractAngle(n1, n2, theta1);
  const inc = along(x, y, L, theta1, true, -1);
  return (
    <Panel h={72} aria={`A light ray travels from ${name1} (n = ${dc(n1, 2)}) into ${name2} (n = ${dc(n2, 2)}). The angle of incidence is ${theta1} degrees, measured from the normal. ${t2 === null ? 'All the light is reflected.' : `The angle of refraction is ${dc(t2)} degrees, ${t2 < theta1 ? 'so the ray bends towards the normal' : 'so the ray bends away from the normal'}.`}`}>
      <rect x={0} y={0} width={120} height={y} fill={SKY} fillOpacity={0.08} />
      <rect x={0} y={y} width={120} height={72 - y} fill={BLUE} fillOpacity={t2 === null ? 0.08 : 0.2} />
      <line x1={0} y1={y} x2={120} y2={y} stroke={MUTED} strokeWidth={0.7} />
      <line x1={x} y1={y - 32} x2={x} y2={y + 32} stroke={MUTED} strokeWidth={0.5} strokeDasharray="1.6 1.4" />
      <T x={x + 3} y={6} size={3.6} anchor="start" fill={MUTED} weight={600}>normal</T>
      <line x1={inc.x} y1={inc.y} x2={x} y2={y} stroke={AMBER} strokeWidth={1.5} />
      {t2 !== null ? (() => { const out = along(x, y, L, t2, false, 1); return <line x1={x} y1={y} x2={out.x} y2={out.y} stroke={AMBER} strokeWidth={1.5} />; })() : (() => { const out = along(x, y, L, theta1, true, 1); return <line x1={x} y1={y} x2={out.x} y2={out.y} stroke={ROSE} strokeWidth={1.5} />; })()}
      <T x={6} y={y - 4} size={4} anchor="start" fill={SKY} weight={800}>{`${name1}  n = ${dc(n1, 2)}`}</T>
      <T x={6} y={y + 9} size={4} anchor="start" fill={BLUE} weight={800}>{`${name2}  n = ${dc(n2, 2)}`}</T>
      <T x={r3(x - 8)} y={y - 11} size={4} fill={AMBER}>{`${theta1}°`}</T>
      {t2 !== null ? <T x={r3(x + 8)} y={y + 14} size={4} fill={AMBER}>{`${dc(t2)}°`}</T> : <T x={r3(x + 14)} y={y - 12} size={3.8} fill={ROSE}>all reflected</T>}
    </Panel>
  );
};

// ---------- three rays around the critical angle ----------

export const CriticalRays = ({ n1, n2, name1, name2 }: { n1: number; n2: number; name1: string; name2: string }) => {
  const tc = criticalAngle(n1, n2);
  const y = 34, L = 24;
  const cases = [
    { x: 24, a: tc - 15, kind: 'refracts' as const },
    { x: 60, a: tc, kind: 'along' as const },
    { x: 96, a: tc + 15, kind: 'tir' as const },
  ];
  return (
    <Panel h={74} aria={`Three rays in ${name1}, n = ${dc(n1, 2)}, meeting the boundary with ${name2}, n = ${dc(n2, 2)}. The critical angle is ${dc(tc)} degrees. A ray below the critical angle is refracted away from the normal. A ray at the critical angle leaves along the boundary. A ray above the critical angle is totally internally reflected.`}>
      <rect x={0} y={0} width={120} height={y} fill={SKY} fillOpacity={0.08} />
      <rect x={0} y={y} width={120} height={74 - y} fill={BLUE} fillOpacity={0.2} />
      <line x1={0} y1={y} x2={120} y2={y} stroke={MUTED} strokeWidth={0.7} />
      <T x={4} y={8} size={3.8} anchor="start" fill={SKY} weight={800}>{`${name2} n = ${dc(n2, 2)}`}</T>
      <T x={4} y={72} size={3.8} anchor="start" fill={BLUE} weight={800}>{`${name1} n = ${dc(n1, 2)}`}</T>
      {cases.map((c, i) => {
        const inc = along(c.x, y, L, c.a, false, -1);
        const t2 = c.kind === 'refracts' ? refractAngle(n1, n2, c.a)! : 90;
        const out = c.kind === 'tir' ? along(c.x, y, L, c.a, false, 1) : along(c.x, y, L, Math.min(t2, 89.9), true, 1);
        return (
          <g key={i}>
            <line x1={c.x} y1={y - 22} x2={c.x} y2={y + 22} stroke={MUTED} strokeWidth={0.4} strokeDasharray="1.4 1.2" />
            <line x1={inc.x} y1={inc.y} x2={c.x} y2={y} stroke={AMBER} strokeWidth={1.4} />
            <line x1={c.x} y1={y} x2={out.x} y2={out.y} stroke={c.kind === 'tir' ? ROSE : GREEN} strokeWidth={1.4} />
            <T x={c.x} y={r3(y + 24)} size={3.8} fill={LINE}>{`${dc(c.a)}°`}</T>
          </g>
        );
      })}
      <T x={24} y={15} size={3.8} fill={GREEN}>refracts</T>
      <T x={60} y={15} size={3.8} fill={GREEN}>at θc: along</T>
      <T x={96} y={15} size={3.8} fill={ROSE}>total reflection</T>
    </Panel>
  );
};

// ---------- wavefronts ----------

export const WavefrontPair = ({ lambda }: { lambda: number }) => {
  const sp = r3(lambda);
  return (
    <Panel h={60} aria={`Wavefronts. On the left, circular wavefronts spread out from a point source, a distance of one wavelength apart. On the right, straight wavefronts of a plane wave travel to the right, also one wavelength apart. Each wavefront joins points that are in phase.`}>
      {[1, 2, 3, 4].map((k) => (
        <circle key={k} cx={30} cy={30} r={r3(k * sp)} fill="none" stroke={SKY} strokeWidth={1} opacity={1 - k * 0.15} />
      ))}
      <circle cx={30} cy={30} r={1.8} fill={AMBER} />
      <T x={30} y={55} size={3.8} fill={MUTED} weight={600}>point source</T>
      {[0, 1, 2, 3].map((k) => (
        <line key={k} x1={r3(76 + k * sp)} y1={10} x2={r3(76 + k * sp)} y2={50} stroke={SKY} strokeWidth={1} />
      ))}
      <line x1={70} y1={56} x2={r3(76 + 3 * sp)} y2={56} stroke={MUTED} strokeWidth={0.5} />
      <T x={95} y={55} size={3.8} fill={MUTED} weight={600}>plane wave, moving right</T>
    </Panel>
  );
};

// ---------- a wave meeting a gap ----------

export const SlitSpread = ({ ratio, label }: { ratio: number; label: string }) => {
  // wavelength fixed in the picture; the gap width is lambda / ratio, and the spread follows the first minimum
  const lam = 4;
  const a = Math.max(2.5, Math.min(30, lam / ratio));
  const half = firstMinimum(lam, a);
  const spread = half === null ? 90 : half;
  const cy = 32, bx = 52;
  return (
    <Panel h={64} aria={`A plane wave meets a barrier with a gap. ${label} The wave ${spread >= 60 ? 'spreads out strongly on the far side, almost in semicircles' : spread >= 25 ? 'spreads out a fair amount on the far side' : 'passes through as a narrow beam, spreading very little'}.`}>
      {[0, 1, 2].map((k) => <line key={k} x1={r3(10 + k * 12)} y1={6} x2={r3(10 + k * 12)} y2={58} stroke={SKY} strokeWidth={0.9} opacity={0.8} />)}
      <rect x={bx - 1.5} y={0} width={3} height={r3(cy - a / 2)} fill={MUTED} />
      <rect x={bx - 1.5} y={r3(cy + a / 2)} width={3} height={r3(64 - cy - a / 2)} fill={MUTED} />
      {[1, 2, 3].map((k) => {
        const R = k * 12;
        const a1 = rad(-spread), a2 = rad(spread);
        const p1 = { x: r3(bx + R * Math.cos(a1)), y: r3(cy + R * Math.sin(a1)) };
        const p2 = { x: r3(bx + R * Math.cos(a2)), y: r3(cy + R * Math.sin(a2)) };
        return <path key={k} d={`M${p1.x} ${p1.y} A${R} ${R} 0 0 1 ${p2.x} ${p2.y}`} fill="none" stroke={GREEN} strokeWidth={0.9} opacity={1 - k * 0.15} />;
      })}
      <T x={r3(bx + 36)} y={60} size={3.8} fill={AMBER}>{label}</T>
    </Panel>
  );
};

// ---------- single-slit pattern ----------

export const SlitPattern = ({ lambda, a }: { lambda: number; a: number }) => {
  const x0 = 10, w = 100, y0 = 50, h = 34;
  const pts = Array.from({ length: 121 }, (_, i) => {
    const th = -30 + i * 0.5;
    return `${i === 0 ? 'M' : 'L'}${r3(x0 + ((th + 30) / 60) * w)} ${r3(y0 - slitIntensity(lambda, a, th) * h)}`;
  }).join(' ');
  const min = firstMinimum(lambda, a);
  return (
    <Panel h={66} aria="A graph of the light intensity on a screen after a single slit. There is a wide bright central band, with narrow dark places on each side where the secondary wavelets interfere destructively, and fainter bright bands further out where they interfere constructively.">
      <T x={60} y={7} size={4.4} fill={AMBER}>Light and dark bands after a single slit</T>
      <line x1={x0} y1={y0} x2={x0 + w} y2={y0} stroke={MUTED} strokeWidth={0.5} />
      <path d={pts} fill="none" stroke={GREEN} strokeWidth={1.2} />
      {min !== null ? [-1, 1].map((s) => <line key={s} x1={r3(x0 + ((s * min + 30) / 60) * w)} y1={y0} x2={r3(x0 + ((s * min + 30) / 60) * w)} y2={y0 + 4} stroke={ROSE} strokeWidth={1} />) : null}
      <T x={60} y={r3(y0 + 9)} size={3.8} fill={MUTED} weight={600}>position on the screen</T>
      <T x={60} y={r3(y0 - h - 2)} size={3.6} fill={GREEN}>bright centre</T>
      <T x={r3(x0 + 10)} y={y0 + 14} size={3.6} fill={ROSE} anchor="start">red ticks: first dark places</T>
    </Panel>
  );
};
