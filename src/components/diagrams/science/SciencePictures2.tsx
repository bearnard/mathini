import { r3 } from '../round';
import { Arrow, T, cls, st, SOFT } from './SciencePictures';
import { AXIAL_TILT, drivenTurns, leverEffort, mechanicalAdvantage, phaseName, tideType } from './systemsHelpers';

/**
 * More hand-built science and technology pictures: a lever, a pair of gears, a fixed pulley, an
 * input-process-output flow, series and parallel circuits, the seasons, and the Moon's orbit.
 * Numbers come from systemsHelpers.ts. At most six labels each.
 */

/* ---------- lever ---------- */

export const LeverDiagram = ({ load = 60, loadDistance = 0.2, effortDistance = 0.6 }: { load?: number; loadDistance?: number; effortDistance?: number }) => {
  const effort = leverEffort(load, loadDistance, effortDistance);
  const ma = mechanicalAdvantage(load, effort);
  const U = 80; // pixels per metre
  const fx = 50;
  const lx = fx - loadDistance * U;
  const ex = fx + effortDistance * U;
  const y = 52;
  return (
    <svg viewBox="0 0 150 97" role="img" aria-labelledby="lv-t lv-d" className={cls} style={st}>
      <title id="lv-t">A lever</title>
      <desc id="lv-d">{`A lever turns on a fulcrum. A load of ${load} newtons sits ${String(loadDistance).replace('.', ',')} metres from the fulcrum. An effort of ${effort} newtons ${String(effortDistance).replace('.', ',')} metres on the other side balances it, so the mechanical advantage is ${ma}.`}</desc>
      <rect x={r3(lx - 8)} y={y - 4} width={r3(ex - lx + 18)} height={4.5} rx={1.5} fill="#94a3b8" />
      <polygon points={`${fx},${y + 1} ${fx - 7},${y + 14} ${fx + 7},${y + 14}`} fill="#fbbf24" />
      <rect x={lx - 8} y={y - 18} width={16} height={14} rx={2} fill="#38bdf8" />
      <Arrow x1={ex} y1={y - 22} x2={ex} y2={y - 5} color="#fb923c" w={1.8} />
      <T x={lx} y={y - 22} fill="#7dd3fc">{`load ${load} N`}</T>
      <T x={ex} y={y - 26} fill="#fdba74">{`effort ${effort} N`}</T>
      <T x={fx} y={y + 29} fill="#fcd34d">fulcrum</T>
      <line x1={lx} y1={y + 8} x2={fx} y2={y + 8} stroke={SOFT} strokeWidth={0.5} />
      <line x1={fx} y1={y + 8} x2={ex} y2={y + 8} stroke={SOFT} strokeWidth={0.5} />
      <T x={r3((lx + fx) / 2)} y={y + 18} size={4.8}>{`${String(loadDistance).replace('.', ',')} m`}</T>
      <T x={r3((fx + ex) / 2)} y={y + 18} size={4.8}>{`${String(effortDistance).replace('.', ',')} m`}</T>
      <T x={75} y={92} fill="#e2e8f0" size={5.4}>{`mechanical advantage = ${ma} (the load is ${ma} times the effort)`}</T>
    </svg>
  );
};

/* ---------- gears ---------- */

const gearPath = (cx: number, cy: number, teeth: number, rOut: number, rIn: number, rot = 0) => {
  const pts: string[] = [];
  const step = (2 * Math.PI) / teeth;
  for (let i = 0; i < teeth; i++) {
    const a = rot + i * step;
    for (const [da, r] of [[0, rIn], [step * 0.25, rOut], [step * 0.5, rOut], [step * 0.75, rIn]] as const) {
      pts.push(`${r3(cx + r * Math.cos(a + da))},${r3(cy + r * Math.sin(a + da))}`);
    }
  }
  return pts.join(' ');
};

export const GearPair = ({ driver = 10, driven = 20 }: { driver?: number; driven?: number }) => {
  const k = Math.min(1.15, 28 / Math.max(driver, driven)); // pixels of radius per tooth, smaller for big gears so both fit
  const r1 = driver * k;
  const r2 = driven * k;
  const cy = 38;
  const c1 = (150 - 2 * r1 - 2 * r2) / 2 + r1;
  const c2 = c1 + r1 + r2;
  const turns = drivenTurns(driver, driven);
  return (
    <svg viewBox="0 0 150 90" role="img" aria-labelledby="gp-t gp-d" className={cls} style={st}>
      <title id="gp-t">A small gear driving a larger gear</title>
      <desc id="gp-d">{`A driver gear with ${driver} teeth turns a driven gear with ${driven} teeth. For each turn of the driver, the driven gear makes ${turns} of a turn: it turns more slowly, with more turning force.`}</desc>
      <polygon points={gearPath(c1, cy, driver, r1, r1 - 3.2)} fill="#38bdf8" stroke="#0c4a6e" strokeWidth={0.6} />
      <circle cx={c1} cy={cy} r={2.4} fill={'#0f172a'} />
      <polygon points={gearPath(c2, cy, driven, r2, r2 - 3.2, Math.PI / driven)} fill="#34d399" stroke="#064e3b" strokeWidth={0.6} />
      <circle cx={c2} cy={cy} r={2.4} fill={'#0f172a'} />
      <T x={c1} y={cy + r1 + 11} fill="#7dd3fc">{`driver: ${driver} teeth`}</T>
      <T x={c2} y={cy + r2 + 11} fill="#6ee7b7">{`driven: ${driven} teeth`}</T>
      <T x={75} y={86} fill="#e2e8f0" size={5.4}>{`${driver} ÷ ${driven} = ${String(turns).replace('.', ',')} turn of the driven gear per turn of the driver`}</T>
    </svg>
  );
};

/* ---------- fixed pulley ---------- */

export const FixedPulley = () => (
  <svg viewBox="0 0 150 90" role="img" aria-labelledby="fpu-t fpu-d" className={cls} style={st}>
    <title id="fpu-t">A fixed pulley</title>
    <desc id="fpu-d">A rope runs over a wheel fixed to a beam. Pulling down on one end of the rope lifts the load on the other end. The pulley changes the direction of the pulling force.</desc>
    <rect x={40} y={4} width={70} height={5} rx={1.5} fill="#94a3b8" />
    <line x1={75} y1={9} x2={75} y2={16} stroke="#94a3b8" strokeWidth={1.4} />
    <circle cx={75} cy={28} r={12} fill="#1e293b" stroke="#fbbf24" strokeWidth={1.6} />
    <circle cx={75} cy={28} r={2.2} fill="#fbbf24" />
    <line x1={63} y1={28} x2={63} y2={62} stroke="#e2e8f0" strokeWidth={1.2} />
    <line x1={87} y1={28} x2={87} y2={58} stroke="#e2e8f0" strokeWidth={1.2} />
    <rect x={55} y={62} width={16} height={14} rx={2} fill="#38bdf8" />
    <Arrow x1={87} y1={40} x2={87} y2={72} color="#fb923c" w={1.8} />
    <Arrow x1={50} y1={76} x2={50} y2={52} color="#34d399" w={1.8} />
    <T x={96} y={50} anchor="start" fill="#fdba74">pull down</T>
    <T x={46} y={46} anchor="end" fill="#6ee7b7">load goes up</T>
    <T x={75} y={86} size={5.2}>the pulley changes the direction of the force</T>
  </svg>
);

/* ---------- input, process, output ---------- */

export const IpoFlow = ({ input, process, output, id = 'ipo' }: { input: string; process: string; output: string; id?: string }) => (
  <svg viewBox="0 0 150 52" role="img" aria-labelledby={`${id}-t ${id}-d`} className={cls} style={st}>
    <title id={`${id}-t`}>Input, process, output</title>
    <desc id={`${id}-d`}>{`Input: ${input}. Process: ${process}. Output: ${output}.`}</desc>
    {[{ k: 'input', t: input, c: '#38bdf8', x: 4 }, { k: 'process', t: process, c: '#fbbf24', x: 54 }, { k: 'output', t: output, c: '#34d399', x: 104 }].map((b) => (
      <g key={b.k}>
        <rect x={b.x} y={8} width={42} height={36} rx={5} fill="#0b1220" stroke={b.c} strokeWidth={1} />
        <T x={b.x + 21} y={19} fill={b.c} size={6}>{b.k}</T>
        <T x={b.x + 21} y={31} size={4.8}>{b.t}</T>
      </g>
    ))}
    <Arrow x1={47} y1={26} x2={53} y2={26} color={SOFT} w={1} />
    <Arrow x1={97} y1={26} x2={103} y2={26} color={SOFT} w={1} />
  </svg>
);

/* ---------- series and parallel circuits ---------- */

const Bulb = ({ cx, cy }: { cx: number; cy: number }) => (
  <g>
    <circle cx={cx} cy={cy} r={5} fill="#fde047" stroke="#a16207" strokeWidth={0.8} />
    <line x1={cx - 3.2} y1={cy - 3.2} x2={cx + 3.2} y2={cy + 3.2} stroke="#a16207" strokeWidth={0.7} />
    <line x1={cx + 3.2} y1={cy - 3.2} x2={cx - 3.2} y2={cy + 3.2} stroke="#a16207" strokeWidth={0.7} />
  </g>
);

const Cell = ({ x, y }: { x: number; y: number }) => (
  <g>
    <line x1={x} y1={y - 5} x2={x} y2={y + 5} stroke="#e2e8f0" strokeWidth={1.2} />
    <line x1={x + 3} y1={y - 8} x2={x + 3} y2={y + 8} stroke="#e2e8f0" strokeWidth={2} />
  </g>
);

/** A cell drawn ACROSS a vertical wire: long thin plate = positive (top), short thick plate = negative. The wire joins each plate. */
const CellOnWire = ({ x, y }: { x: number; y: number }) => (
  <g>
    <rect x={x - 3} y={y - 2.4} width={6} height={4.8} fill="#0f172a" />
    <line x1={x - 7} y1={y - 2.2} x2={x + 7} y2={y - 2.2} stroke="#e2e8f0" strokeWidth={1.1} />
    <line x1={x - 3.5} y1={y + 2.2} x2={x + 3.5} y2={y + 2.2} stroke="#e2e8f0" strokeWidth={2.2} />
  </g>
);

export const CircuitPair = () => (
  <svg viewBox="0 0 160 84" role="img" aria-labelledby="cp-t cp-d" className={cls} style={st}>
    <title id="cp-t">A series circuit and a parallel circuit</title>
    <desc id="cp-d">In the series circuit the cell and two bulbs are in one loop, so the current has one path. In the parallel circuit each bulb is on its own branch, so the current has separate paths.</desc>
    <g stroke="#94a3b8" strokeWidth={1.1} fill="none">
      <polyline points="10,16 70,16 70,52 10,52 10,16" />
    </g>
    <CellOnWire x={10} y={34} />
    <Bulb cx={30} cy={16} />
    <Bulb cx={52} cy={16} />
    <T x={40} y={68} fill="#7dd3fc" size={6.4}>series</T>
    <T x={40} y={76} size={4.6}>one path for the current</T>
    <g stroke="#94a3b8" strokeWidth={1.1} fill="none">
      <polyline points="92,16 150,16 150,52 92,52 92,16" />
      <polyline points="116,16 116,52" />
    </g>
    <CellOnWire x={92} y={34} />
    <Bulb cx={116} cy={34} />
    <Bulb cx={150} cy={34} />
    <T x={121} y={68} fill="#6ee7b7" size={6.4}>parallel</T>
    <T x={121} y={76} size={4.6}>separate paths</T>
  </svg>
);

/* ---------- seasons ---------- */

export const SeasonsTilt = () => {
  const cx = 75;
  const cy = 40;
  const orbitX = 52;
  const R = 11;
  const tilt = (AXIAL_TILT * Math.PI) / 180;
  // The axis points the same way in space at both positions: its north end leans to the LEFT. In December Earth is left of the Sun,
  // so the north end leans away from the Sun (southern summer); in June Earth is right of the Sun and the north end leans towards it.
  const axis = (ex: number) => ({
    x1: r3(ex + Math.sin(tilt) * (R + 8)), y1: r3(cy + Math.cos(tilt) * (R + 8)),
    x2: r3(ex - Math.sin(tilt) * (R + 8)), y2: r3(cy - Math.cos(tilt) * (R + 8)),
  });
  const left = cx - orbitX;
  const right = cx + orbitX;
  return (
    <svg viewBox="0 0 150 92" role="img" aria-labelledby="se-t se-d" className={cls} style={st}>
      <title id="se-t">Earth's tilt and the seasons</title>
      <desc id="se-d">{`The Earth's axis is tilted ${AXIAL_TILT} degrees and points the same way all year as Earth orbits the Sun. In December the southern hemisphere, where South Africa is, leans towards the Sun and has summer. In June it leans away and has winter.`}</desc>
      <circle cx={cx} cy={cy} r={11} fill="#fbbf24" />
      <T x={cx} y={cy + 2} fill="#78350f" size={5.2}>Sun</T>
      <ellipse cx={cx} cy={cy} rx={orbitX} ry={22} fill="none" stroke="#475569" strokeWidth={0.7} strokeDasharray="2 2" />
      {[{ x: left, name: 'December', note: ['summer in', 'South Africa'], c: '#fdba74' }, { x: right, name: 'June', note: ['winter in', 'South Africa'], c: '#7dd3fc' }].map((e) => {
        const a = axis(e.x);
        return (
          <g key={e.name}>
            <line x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2} stroke="#e2e8f0" strokeWidth={1} />
            <circle cx={e.x} cy={cy} r={R} fill="#2563eb" />
            <path d={`M${e.x} ${cy - R} A${R} ${R} 0 0 ${e.x < cx ? 0 : 1} ${e.x} ${cy + R} Z`} fill="#0f172a" opacity={0.55} />
            <T x={e.x} y={cy + R + 16} fill={e.c} size={6.2}>{e.name}</T>
            {e.note.map((n, i) => <T key={n} x={e.x} y={cy + R + 23 + i * 6} size={4.6}>{n}</T>)}
          </g>
        );
      })}
      <T x={75} y={9} size={5.2}>{`axis tilted ${String(AXIAL_TILT).replace('.', ',')}°, pointing the same way all year`}</T>
    </svg>
  );
};

/* ---------- the Moon's orbit: phases, tides and eclipses ---------- */

export const MoonOrbit = ({ show = 'phases' }: { show?: 'phases' | 'tides' }) => {
  const cx = 78;
  const cy = 42;
  const R = 26; // Moon's orbit radius
  const MR = 6;
  // Sunlight comes from the left. Angle 0 = new moon: the Moon is between the Earth and the Sun (left of Earth).
  const spots = [0, 90, 180, 270].map((deg) => {
    const a = (deg * Math.PI) / 180;
    return { deg, x: r3(cx - R * Math.cos(a)), y: r3(cy + R * Math.sin(a)) };
  });
  return (
    <svg viewBox="0 0 160 92" role="img" aria-labelledby="mo-t mo-d" className={cls} style={st}>
      <title id="mo-t">{show === 'phases' ? "The Moon's phases" : 'Spring and neap tides'}</title>
      <desc id="mo-d">
        {show === 'phases'
          ? 'Sunlight comes from the left. The Moon orbits the Earth and always has one half lit. At new moon the lit half faces away from us; at full moon it faces us; at the quarters we see half of the lit half.'
          : 'Sunlight comes from the left. At new moon and full moon the Sun, Earth and Moon are lined up and the tides are spring tides, the largest. At the quarters the Sun and Moon are at right angles and the tides are neap tides, the smallest.'}
      </desc>
      <circle cx={10} cy={cy} r={8} fill="#fbbf24" />
      {[-12, 0, 12].map((d) => <Arrow key={d} x1={21} y1={cy + d} x2={33} y2={cy + d} color="#fde68a" w={0.8} />)}
      <T x={10} y={cy + 17} fill="#fbbf24" size={5}>Sun</T>
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="#475569" strokeWidth={0.6} strokeDasharray="2 2" />
      <circle cx={cx} cy={cy} r={8.5} fill="#2563eb" />
      <T x={cx} y={cy + 2} fill="#e2e8f0" size={4.6}>Earth</T>
      {spots.map((s) => {
        const label = show === 'phases' ? phaseName(s.deg) : tideType(s.deg);
        const tide = tideType(s.deg) === 'spring';
        const lx = s.deg === 90 || s.deg === 270 ? s.x : s.deg === 0 ? s.x - 2 : s.x + 2;
        const ly = s.deg === 270 ? s.y - MR - 3 : s.y + MR + 8;
        return (
          <g key={s.deg}>
            <circle cx={s.x} cy={s.y} r={MR} fill="#334155" />
            <path d={`M${s.x} ${s.y - MR} A${MR} ${MR} 0 0 0 ${s.x} ${s.y + MR} Z`} fill="#f1f5f9" />
            <T x={lx} y={ly} fill={show === 'tides' ? (tide ? '#fca5a5' : '#7dd3fc') : '#e2e8f0'} size={5.2} anchor={s.deg === 0 ? 'middle' : s.deg === 180 ? 'middle' : 'middle'}>
              {show === 'phases' ? label : `${label === 'spring' ? 'spring tides' : 'neap tides'}`}
            </T>
          </g>
        );
      })}
    </svg>
  );
};

/* ---------- eclipses ---------- */

const Row = ({ y, items, shadow, label, sub, color }: { y: number; items: { x: number; r: number; fill: string; name: string }[]; shadow: [number, number]; label: string; sub: string; color: string }) => (
  <g>
    <polygon points={`${shadow[0]},${y - 3.5} ${shadow[1]},${y - 1.2} ${shadow[1]},${y + 1.2} ${shadow[0]},${y + 3.5}`} fill="#1e293b" />
    {items.map((i) => (
      <g key={i.name}>
        <circle cx={i.x} cy={y} r={i.r} fill={i.fill} />
        <T x={i.x} y={y + i.r + 7} size={4.8}>{i.name}</T>
      </g>
    ))}
    <T x={75} y={y - 20} fill={color} size={6}>{label}</T>
    <T x={75} y={y - 13} size={4.8}>{sub}</T>
  </g>
);

export const EclipseLines = () => (
  <svg viewBox="0 0 150 104" role="img" aria-labelledby="ec-t ec-d" className={cls} style={st}>
    <title id="ec-t">Lunar and solar eclipses</title>
    <desc id="ec-d">In a lunar eclipse the Earth is between the Sun and the Moon, so the Moon is in Earth's shadow. In a solar eclipse the Moon is between the Sun and the Earth, so the Moon's shadow falls on the Earth.</desc>
    <Row y={30} label="lunar eclipse" sub="Earth is between the Sun and the Moon" color="#fca5a5" shadow={[78, 132]}
      items={[{ x: 14, r: 9, fill: '#fbbf24', name: 'Sun' }, { x: 70, r: 6, fill: '#2563eb', name: 'Earth' }, { x: 120, r: 3.4, fill: '#f1f5f9', name: 'Moon' }]} />
    <Row y={80} label="solar eclipse" sub="the Moon is between the Sun and the Earth" color="#fcd34d" shadow={[74, 128]}
      items={[{ x: 14, r: 9, fill: '#fbbf24', name: 'Sun' }, { x: 66, r: 3.4, fill: '#f1f5f9', name: 'Moon' }, { x: 120, r: 6, fill: '#2563eb', name: 'Earth' }]} />
  </svg>
);
