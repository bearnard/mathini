import { r3 } from '../round';
import { Arrow, T, cls, st, SOFT } from './SciencePictures';
import { EARTH_RADIUS_KM, LAYERS, heatChange, reactionKind } from './science9bHelpers';

/**
 * Grade 9 Natural Sciences pictures, part 2: hot and cold particles, heat in reactions, the layers
 * of the Earth, how plates move, the balance inside a star and the scale of the universe. Numbers
 * and positions come from science9bHelpers.ts. At most six labels each.
 */

/* ---------- hot and cold particles ---------- */

export const HotColdParticles = () => {
  const dots = [[14, 18], [34, 14], [24, 34], [44, 30], [12, 44], [38, 48]];
  const panel = (ox: number, speed: number, color: string, title: string, sub: string) => (
    <g>
      <rect x={ox} y={8} width={56} height={56} rx={3} fill="#0b1220" stroke="#334155" strokeWidth={0.8} />
      {dots.map(([x, y], i) => {
        const a = (i * 1.7) % 6.28;
        return (
          <g key={i}>
            <circle cx={r3(ox + 8 + x * 0.75)} cy={r3(10 + y * 0.8)} r={2.8} fill={color} />
            <Arrow x1={r3(ox + 8 + x * 0.75)} y1={r3(10 + y * 0.8)} x2={r3(ox + 8 + x * 0.75 + speed * 5 * Math.cos(a))} y2={r3(10 + y * 0.8 + speed * 5 * Math.sin(a))} color="#f8fafc" w={0.8} />
          </g>
        );
      })}
      <T x={ox + 28} y={74} size={5.6} fill={color}>{title}</T>
      <T x={ox + 28} y={82} size={4.4} fill={SOFT}>{sub}</T>
    </g>
  );
  return (
    <svg viewBox="0 0 160 90" role="img" aria-labelledby="hc-t hc-d" className={cls} style={st}>
      <title id="hc-t">Particles in a cold and a hot object</title>
      <desc id="hc-d">The particles of a hot object move faster, on average, than the particles of a cold one. The arrows are longer for the hot object. This is a schematic picture.</desc>
      {panel(14, 0.8, '#7dd3fc', 'cold', 'particles move slowly')}
      {panel(90, 2.2, '#fb923c', 'hot', 'particles move fast')}
    </svg>
  );
};

/* ---------- energy in a reaction ---------- */

export const EnergyProfile = () => {
  const panels = [
    { ox: 10, r: 56, p: 22, color: '#fb923c' },
    { ox: 88, r: 22, p: 56, color: '#7dd3fc' },
  ];
  return (
    <svg viewBox="0 0 160 90" role="img" aria-labelledby="ep2-t ep2-d" className={cls} style={st}>
      <title id="ep2-t">Energy in exothermic and endothermic reactions</title>
      <desc id="ep2-d">In an exothermic reaction the products have less energy than the reactants, so heat is released to the surroundings. In an endothermic reaction the products have more energy than the reactants, so heat is absorbed from the surroundings.</desc>
      {panels.map((p) => {
        const kind = reactionKind(p.r, p.p);
        const heat = heatChange(p.r, p.p);
        const y = (e: number) => 74 - e;
        return (
          <g key={kind}>
            <line x1={p.ox} y1={10} x2={p.ox} y2={76} stroke="#94a3b8" strokeWidth={0.8} />
            <T x={p.ox + 2} y={8} anchor="start" size={4.6} fill={SOFT}>energy</T>
            <line x1={p.ox + 4} y1={y(p.r)} x2={p.ox + 26} y2={y(p.r)} stroke="#e2e8f0" strokeWidth={1.8} />
            <line x1={p.ox + 44} y1={y(p.p)} x2={p.ox + 66} y2={y(p.p)} stroke="#e2e8f0" strokeWidth={1.8} />
            <line x1={p.ox + 26} y1={y(p.r)} x2={p.ox + 44} y2={y(p.p)} stroke="#64748b" strokeWidth={0.8} strokeDasharray="2 2" />
            <T x={p.ox + 15} y={y(p.r) - 3} size={4.4} fill={SOFT}>reactants</T>
            <T x={p.ox + 55} y={y(p.p) - 3} size={4.4} fill={SOFT}>products</T>
            <Arrow x1={p.ox + 35} y1={heat > 0 ? y(p.r) + 6 : y(p.r) - 8} x2={p.ox + 35} y2={heat > 0 ? y(p.p) - 8 : y(p.p) + 6} color={p.color} w={1.4} />
            <T x={p.ox + 35} y={84} size={5.4} fill={p.color}>{`${kind}: heat ${heat > 0 ? 'released' : 'absorbed'}`}</T>
          </g>
        );
      })}
    </svg>
  );
};

/* ---------- the layers of the Earth ---------- */

export const EarthLayers = () => {
  const cx = 48;
  const cy = 48;
  const R = 44;
  const scale = R / EARTH_RADIUS_KM;
  const colors = { crust: '#a16207', mantle: '#ea580c', 'outer core': '#fbbf24', 'inner core': '#fde68a' } as const;
  // radius of the outer edge of each layer, measured from the centre
  const outer = (l: (typeof LAYERS)[number]) => (EARTH_RADIUS_KM - l.from) * scale;
  return (
    <svg viewBox="0 0 160 96" role="img" aria-labelledby="el-t el-d" className={cls} style={st}>
      <title id="el-t">The layers of the Earth</title>
      <desc id="el-d">From the outside in: the thin crust, the mantle, which is the thickest layer, the liquid outer core and the solid inner core. The lithosphere is the crust together with the rigid top of the mantle. The crust is drawn thicker than its true size.</desc>
      {[...LAYERS].map((l) => (
        <circle key={l.name} cx={cx} cy={cy} r={r3(l.name === 'crust' ? R : outer(l) - (l.name === 'mantle' ? 3 : 0))} fill={colors[l.name]} stroke="#0f172a" strokeWidth={0.6} />
      ))}
      <circle cx={cx} cy={cy} r={r3(outer(LAYERS[3]))} fill={colors['inner core']} stroke="#0f172a" strokeWidth={0.6} />
      {[
        { name: 'crust: very thin', y: 14, tx: R },
        { name: 'mantle: the thickest layer', y: 36, tx: 30 },
        { name: 'outer core: liquid', y: 58, tx: 18 },
        { name: 'inner core: solid', y: 80, tx: 4 },
      ].map((l, i) => (
        <g key={l.name}>
          <line x1={cx + (i === 0 ? 40 : i === 1 ? 36 : i === 2 ? 22 : 6)} y1={cy - (i === 0 ? 30 : i === 1 ? 8 : i === 2 ? 2 : 0)} x2={96} y2={l.y - 2} stroke={SOFT} strokeWidth={0.4} />
          <T x={98} y={l.y} anchor="start" size={4.8} fill="#f8fafc">{l.name}</T>
        </g>
      ))}
      <T x={4} y={94} anchor="start" size={4.2} fill={SOFT}>lithosphere: crust and rigid top of mantle (crust drawn thicker)</T>
    </svg>
  );
};

/* ---------- how plates move ---------- */

export const PlateMotions = () => {
  const panel = (ox: number, title: string, note: string, left: [number, number, number, number], right: [number, number, number, number], color: string) => (
    <g>
      <rect x={ox} y={26} width={22} height={14} fill="#a16207" />
      <rect x={ox + 26} y={26} width={22} height={14} fill="#92400e" />
      <Arrow x1={left[0] + ox} y1={left[1]} x2={left[2] + ox} y2={left[3]} color={color} w={1.6} />
      <Arrow x1={right[0] + ox} y1={right[1]} x2={right[2] + ox} y2={right[3]} color={color} w={1.6} />
      <T x={ox + 24} y={58} size={5.4} fill={color}>{title}</T>
      <T x={ox + 24} y={66} size={4.4} fill={SOFT}>{note}</T>
    </g>
  );
  return (
    <svg viewBox="0 0 160 76" role="img" aria-labelledby="pm-t pm-d" className={cls} style={st}>
      <title id="pm-t">The three ways plates move</title>
      <desc id="pm-d">Plates can diverge, moving apart; converge, moving together and colliding; or slide past each other. Their movement causes earthquakes and volcanoes.</desc>
      {panel(4, 'diverge', 'move apart', [10, 20, 2, 20], [38, 20, 46, 20], '#7dd3fc')}
      {panel(58, 'converge', 'collide', [4, 20, 12, 20], [44, 20, 36, 20], '#fb923c')}
      {panel(112, 'slide past', 'side by side', [12, 44, 12, 52], [36, 22, 36, 14], '#a5b4fc')}
    </svg>
  );
};

/* ---------- inside a star ---------- */

export const StarBalance = () => (
  <svg viewBox="0 0 160 84" role="img" aria-labelledby="sb2-t sb2-d" className={cls} style={st}>
    <title id="sb2-t">A star: gravity in, energy out</title>
    <desc id="sb2-d">Gravity pulls the star's material inwards and holds it together. Nuclear fusion in the core, where hydrogen fuses into helium, releases energy that streams outwards as light and heat.</desc>
    <circle cx={56} cy={42} r={26} fill="#f59e0b" />
    <circle cx={56} cy={42} r={10} fill="#fde047" />
    {[0, 90, 180, 270].map((deg) => {
      const a = (deg * Math.PI) / 180;
      return (
        <g key={deg}>
          <Arrow x1={r3(56 + 40 * Math.cos(a))} y1={r3(42 + 40 * Math.sin(a))} x2={r3(56 + 29 * Math.cos(a))} y2={r3(42 + 29 * Math.sin(a))} color="#7dd3fc" w={1.6} />
        </g>
      );
    })}
    {[45, 135, 225, 315].map((deg) => {
      const a = (deg * Math.PI) / 180;
      return <Arrow key={deg} x1={r3(56 + 13 * Math.cos(a))} y1={r3(42 + 13 * Math.sin(a))} x2={r3(56 + 24 * Math.cos(a))} y2={r3(42 + 24 * Math.sin(a))} color="#fef3c7" w={1} />;
    })}
    <T x={104} y={22} anchor="start" size={5.2} fill="#7dd3fc">gravity pulls in</T>
    <T x={104} y={30} anchor="start" size={4.4} fill={SOFT}>holds the star together</T>
    <T x={104} y={50} anchor="start" size={5.2} fill="#fde68a">fusion in the core</T>
    <T x={104} y={58} anchor="start" size={4.4} fill={SOFT}>hydrogen to helium:</T>
    <T x={104} y={65} anchor="start" size={4.4} fill={SOFT}>energy, light and heat</T>
  </svg>
);

/* ---------- the scale of the universe ---------- */

export const ScaleBoxes = () => {
  const names = ['Universe', 'Supercluster', 'Local Group', 'Milky Way', 'Solar System'];
  const colors = ['#334155', '#3b4a63', '#475569', '#64748b', '#94a3b8'];
  return (
    <svg viewBox="0 0 160 116" role="img" aria-labelledby="sc2-t sc2-d" className={cls} style={st}>
      <title id="sc2-t">The scale of the universe</title>
      <desc id="sc2-d">Each box sits inside the next bigger one: the Solar System is in the Milky Way, our galaxy; the Milky Way is in the Local Group; the Local Group is in a supercluster; and the superclusters make up the universe. Not to scale.</desc>
      {names.map((n, i) => (
        <g key={n}>
          <rect x={4 + i * 9} y={4 + i * 9} width={152 - i * 18} height={102 - i * 18} rx={4} fill={colors[i]} stroke="#0f172a" strokeWidth={0.6} />
          <T x={80} y={i === 4 ? 58 : 11 + i * 9} size={i === 4 ? 4.8 : 5} fill={i < 3 ? '#e2e8f0' : '#0f172a'}>{n}</T>
        </g>
      ))}
      <T x={80} y={111} size={4.2} fill="#e2e8f0">not to scale: each box is far bigger than the one inside it</T>
    </svg>
  );
};
