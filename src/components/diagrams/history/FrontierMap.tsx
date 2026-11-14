import { SA_PROVINCES } from '../../admin/saProvinces';
import { PLACES, broadArrow, place } from './places';

/**
 * Simple, honest maps of the Cape and the eastern frontier on the real South Africa outline
 * (Natural Earth, public domain). Places are points from the tested projection; movement is a
 * broad arrow that shows DIRECTION ONLY. No boundaries, routes or dates are drawn, because the
 * frontier moved: the Great Fish River point is the frontier the lessons name.
 *   variant "trek": Trekboers moved inland from the Cape.
 *   variant "frontier": settlers moved east and met Xhosa communities at the Great Fish River.
 */

const INK = '#0f172a';
const LAND = '#334155';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';
const GREEN = '#4ade80';
const halo = { paintOrder: 'stroke', stroke: INK, strokeWidth: 5, strokeLinejoin: 'round' } as const;

export const FrontierMap = ({ variant }: { variant: 'trek' | 'frontier' }) => {
  const ct = place('capeTown');
  const gf = place('greatFishRiver');
  const trek = variant === 'trek';
  const arrow = trek ? broadArrow(ct.x + 14, ct.y - 12, ct.x + 150, ct.y - 92, 15) : broadArrow(ct.x + 30, ct.y - 22, gf.x - 38, gf.y - 30, 15);
  return (
    <svg
      viewBox="40 335 440 195"
      role="img"
      aria-labelledby={`fm-t-${variant} fm-d-${variant}`}
      className="mx-auto block w-full max-w-lg rounded-2xl"
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      <title id={`fm-t-${variant}`}>{trek ? 'Trekboers moved inland from the Cape' : 'The eastern frontier at the Great Fish River'}</title>
      <desc id={`fm-d-${variant}`}>
        {trek
          ? 'A map of the south of South Africa with Cape Town marked and a broad arrow pointing inland from it. The arrow shows direction only.'
          : 'A map of the south of South Africa. A broad arrow points east from the Cape towards the Great Fish River, where the Cape Colony met Xhosa communities. The arrow shows direction only.'}
      </desc>
      {/* province lines are hidden on purpose: only the coast and the places the lesson names are shown */}
      {SA_PROVINCES.map((p) => (
        <path key={p.id} d={p.path} fill={LAND} stroke={LAND} strokeWidth={0.8} />
      ))}
      <polygon points={arrow} fill={trek ? GREEN : AMBER} opacity={0.95} />
      <circle cx={ct.x} cy={ct.y} r={7} fill={AMBER} stroke={INK} strokeWidth={2} />
      <text x={ct.x + 12} y={ct.y + 22} fontSize={21} fontWeight={800} fill="#f8fafc" style={halo}>{PLACES.capeTown.name}</text>
      {trek ? (
        <text x={ct.x + 100} y={ct.y - 114} fontSize={21} fontWeight={800} fill={GREEN} style={halo}>moving inland</text>
      ) : (
        <>
          <text x={ct.x + 92} y={ct.y - 56} fontSize={21} fontWeight={800} fill={AMBER} style={halo} textAnchor="middle">settlers move east</text>
          <text x={ct.x + 8} y={ct.y - 100} fontSize={21} fontWeight={800} fill="#f8fafc" style={halo}>Cape Colony</text>
          <circle cx={gf.x} cy={gf.y} r={7} fill={ROSE} stroke={INK} strokeWidth={2} />
          <text x={gf.x - 8} y={gf.y + 26} fontSize={21} fontWeight={800} fill="#f8fafc" style={halo} textAnchor="middle">{PLACES.greatFishRiver.name}</text>
          <text x={gf.x + 4} y={gf.y - 92} fontSize={21} fontWeight={800} fill={ROSE} style={halo} textAnchor="middle">Xhosa</text>
          <text x={gf.x + 4} y={gf.y - 68} fontSize={21} fontWeight={800} fill={ROSE} style={halo} textAnchor="middle">communities</text>
        </>
      )}
      <text x={46} y={354} fontSize={14} fontWeight={700} fill="#94a3b8">arrows show direction only</text>
    </svg>
  );
};
