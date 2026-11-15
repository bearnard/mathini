import { r3 } from '../round';
import { Arrow, T, cls, st, SOFT } from '../science/SciencePictures';
import { desert, matureStructure, mediterranean, project, rainforest, settlement, tempAtHeight, year, youngStructure, type Month } from './geoHelpers';

/**
 * Hand-built Geography pictures for Grades 7-8: plate boundary, flood plain, population growth
 * lines and age structures, climate patterns, a mountain and rainfall, settlement patterns and a
 * city. Positions come from geoHelpers.ts. At most six labels each. These are schematic: the climate
 * patterns and population numbers are examples, not real data, and the pictures say so.
 */

/* ---------- a plate boundary with a volcano and earthquakes ---------- */

export const PlateBoundary = () => {
  // The sinking plate runs from (46, 40) down to (112, 80). Earthquakes are marked along it.
  const A = { x: 46, y: 40 };
  const B = { x: 112, y: 80 };
  const at = (t: number) => ({ x: r3(A.x + (B.x - A.x) * t), y: r3(A.y + (B.y - A.y) * t) });
  return (
    <svg viewBox="0 0 160 100" role="img" aria-labelledby="pb-t pb-d" className={cls} style={st}>
      <title id="pb-t">Where two tectonic plates meet</title>
      <desc id="pb-d">Two plates push together. One plate slides down under the other. The movement along the boundary causes earthquakes, and melting rock rises to form a volcano on the plate above.</desc>
      <polygon points="0,40 46,40 112,80 112,100 0,100" fill="#1d4ed8" opacity={0.55} />
      <polygon points="46,40 160,40 160,100 112,100 112,80" fill="#a16207" opacity={0.65} />
      <polygon points="120,40 132,18 144,40" fill="#78350f" />
      <polygon points="128,24 132,18 136,24" fill="#ef4444" />
      <path d="M126 78 Q122 60 132 38" fill="none" stroke="#fb923c" strokeWidth={1.4} strokeDasharray="2 2" />
      {[0.3, 0.55, 0.8].map((t) => {
        const p = at(t);
        return <circle key={t} cx={p.x} cy={p.y} r={2.6} fill="#fde047" stroke="#0f172a" strokeWidth={0.6} />;
      })}
      <Arrow x1={8} y1={30} x2={30} y2={30} color="#e2e8f0" w={1.4} />
      <T x={22} y={24} size={5.2} fill="#bfdbfe">plate</T>
      <T x={6} y={93} anchor="start" size={5.2} fill="#fde047">yellow dots: earthquakes on the boundary</T>
      <T x={132} y={12} size={5.2} fill="#fca5a5">volcano</T>
      <T x={150} y={92} anchor="end" size={5.2} fill="#fde68a">plate above</T>
    </svg>
  );
};

/* ---------- a river and its floodplain ---------- */

export const FloodPlain = () => (
  <svg viewBox="0 0 160 90" role="img" aria-labelledby="fl-t fl-d" className={cls} style={st}>
    <title id="fl-t">A river channel and its floodplain</title>
    <desc id="fl-d">After heavy rain the water rises above the channel and spreads across the flat floodplain. Houses built on the floodplain are flooded. Keeping drainage clear and building away from the floodplain reduces the damage.</desc>
    <polygon points="0,50 50,50 58,72 102,72 110,50 160,50 160,90 0,90" fill="#78350f" />
    <polygon points="58,72 102,72 110,50 50,50" fill="#38bdf8" opacity={0.55} />
    <rect x={51} y={50} width={58} height={22} fill="none" />
    <rect x={0} y={44} width={160} height={6} fill="#38bdf8" opacity={0.35} />
    <line x1={0} y1={44} x2={160} y2={44} stroke="#7dd3fc" strokeWidth={0.8} strokeDasharray="3 2" />
    <polygon points="18,50 18,40 26,34 34,40 34,50" fill="#cbd5e1" />
    <polygon points="128,50 128,40 136,34 144,40 144,50" fill="#cbd5e1" />
    <line x1={58} y1={72} x2={102} y2={72} stroke="#7dd3fc" strokeWidth={1} />
    <T x={80} y={84} size={5.2} fill="#7dd3fc">river channel</T>
    <T x={26} y={64} size={5.2} fill="#fde68a">floodplain</T>
    <T x={140} y={24} anchor="end" size={5.2} fill="#7dd3fc">flood level</T>
    <T x={80} y={30} size={4.8} fill={SOFT}>houses on the floodplain are flooded</T>
  </svg>
);

/* ---------- population growth: births and deaths ---------- */

export const GrowthLines = ({ years = 20 }: { years?: number }) => {
  const X0 = 20;
  const W = 120;
  const Y0 = 10;
  const H = 52;
  const rows = [
    { label: 'births far above deaths', b: 30, d: 10, color: '#34d399' },
    { label: 'births equal deaths', b: 15, d: 15, color: '#fbbf24' },
  ].map((r) => ({ ...r, v: project(1000, r.b, r.d, years) }));
  const top = Math.max(...rows.flatMap((r) => r.v));
  const px = (i: number) => r3(X0 + (i / years) * W);
  const py = (v: number) => r3(Y0 + H - ((v - 800) / (top - 800)) * H);
  return (
    <svg viewBox="0 0 160 84" role="img" aria-labelledby="gl-t gl-d" className={cls} style={st}>
      <title id="gl-t">Population over time with different birth and death rates</title>
      <desc id="gl-d">{`Example only. Starting from 1 000 000 people: when births are far above deaths (30 against 10 per 1 000 each year) the line climbs steadily; when births equal deaths (15 each) the line stays flat.`}</desc>
      <line x1={X0} y1={Y0 - 2} x2={X0} y2={Y0 + H} stroke="#94a3b8" strokeWidth={0.8} />
      <line x1={X0} y1={Y0 + H} x2={X0 + W + 4} y2={Y0 + H} stroke="#94a3b8" strokeWidth={0.8} />
      {rows.map((r) => <polyline key={r.label} points={r.v.map((v, i) => `${px(i)},${py(v)}`).join(' ')} fill="none" stroke={r.color} strokeWidth={1.8} />)}
      <T x={X0 + W / 2} y={Y0 + H + 10} size={5} fill={SOFT}>years</T>
      <T x={X0 + 2} y={Y0 + 2} anchor="start" size={5} fill={SOFT}>population</T>
      <T x={X0 + 4} y={Y0 + 16} anchor="start" size={5.2} fill="#6ee7b7">{rows[0].label}</T>
      <T x={X0 + W - 2} y={py(rows[1].v[years]) - 3} anchor="end" size={5.2} fill="#fcd34d">{rows[1].label}</T>
      <T x={80} y={80} size={4.6} fill={SOFT}>example numbers, not real data</T>
    </svg>
  );
};

/* ---------- age structure: young and older populations ---------- */

export const AgeShapes = () => {
  const bands = ['0-14', '15-29', '30-44', '45-59', '60+'];
  const draw = (ox: number, share: number[], color: string, title: string, sub: string) => (
    <g>
      {share.map((s, i) => {
        const w = r3(s * 1.5);
        return <rect key={bands[i]} x={r3(ox - w / 2)} y={64 - i * 10} width={w} height={8.4} rx={1} fill={color} />;
      })}
      <T x={ox} y={12} size={5.6} fill={color}>{title}</T>
      <T x={ox} y={20} size={4.6} fill={SOFT}>{sub}</T>
    </g>
  );
  return (
    <svg viewBox="0 0 160 84" role="img" aria-labelledby="ag-t ag-d" className={cls} style={st}>
      <title id="ag-t">Younger and older age structures</title>
      <desc id="ag-d">Each bar is an age group, with the youngest at the bottom. When birth rates are high and life expectancy is low, the base is wide and the top is narrow, a younger population. When birth rates are lower and people live longer, the bars are more even, an older population. The shapes are examples.</desc>
      {draw(42, youngStructure, '#34d399', 'younger', 'high births, short lives')}
      {draw(118, matureStructure, '#a5b4fc', 'older', 'fewer births, long lives')}
      <T x={80} y={80} size={4.6} fill={SOFT}>youngest group at the bottom; example shapes</T>
    </svg>
  );
};

/* ---------- three climate patterns ---------- */

export const ClimatePatterns = () => {
  const panels: { name: string; f: (m: number) => Month; note: string; color: string }[] = [
    { name: 'tropical rainforest', f: rainforest, note: 'hot and very wet all year', color: '#34d399' },
    { name: 'hot desert', f: desert, note: 'very low rainfall', color: '#fbbf24' },
    { name: 'Mediterranean', f: mediterranean, note: 'dry summer, wet winter', color: '#7dd3fc' },
  ];
  const W = 44;
  const H = 38;
  return (
    <svg viewBox="0 0 160 84" role="img" aria-labelledby="cl-t cl-d" className={cls} style={st}>
      <title id="cl-t">Three climate patterns through the year</title>
      <desc id="cl-d">Bars show rainfall month by month and the line shows temperature. A tropical rainforest is hot and very wet in every month. A hot desert is hot with very little rain. A Mediterranean climate in the southern hemisphere has hot, dry summers (December to February) and mild, wet winters (June to August). These are schematic patterns, not real measurements.</desc>
      {panels.map((p, i) => {
        const ox = 6 + i * 52;
        const data = year(p.f);
        return (
          <g key={p.name}>
            <line x1={ox} y1={14 + H} x2={ox + W} y2={14 + H} stroke="#64748b" strokeWidth={0.6} />
            {data.map((d, m) => (
              <rect key={m} x={r3(ox + m * (W / 12) + 0.4)} y={r3(14 + H - (d.rain / 100) * H)} width={r3(W / 12 - 0.8)} height={r3((d.rain / 100) * H)} fill="#38bdf8" opacity={0.85} />
            ))}
            <polyline points={data.map((d, m) => `${r3(ox + m * (W / 12) + W / 24)},${r3(14 + H - (d.temp / 100) * H)}`).join(' ')} fill="none" stroke="#fb923c" strokeWidth={1.4} />
            <T x={ox + W / 2} y={9} size={5} fill={p.color}>{p.name}</T>
            <T x={ox + W / 2} y={14 + H + 8} size={4.2} fill={SOFT}>{p.note}</T>
          </g>
        );
      })}
      <T x={80} y={80} size={4.4} fill={SOFT}>blue bars: rainfall   orange line: temperature   (schematic)</T>
    </svg>
  );
};

/* ---------- a mountain: temperature with height, windward and leeward rain ---------- */

export const MountainRain = ({ seaTemp = 25, height = 2000 }: { seaTemp?: number; height?: number }) => {
  const top = tempAtHeight(seaTemp, height);
  const s = (n: number) => String(n).replace('.', ',');
  return (
    <svg viewBox="0 0 160 90" role="img" aria-labelledby="mr-t mr-d" className={cls} style={st}>
      <title id="mr-t">A mountain: temperature and rainfall</title>
      <desc id="mr-d">{`Temperature falls with height: ${s(seaTemp)} degrees at sea level is about ${s(top)} degrees at ${height} metres. Moist air from the sea rises up the windward slope, cools and drops rain, so the windward slope is wetter. The air that descends the leeward slope is drier.`}</desc>
      <polygon points="0,78 70,16 160,78" fill="#475569" />
      <polygon points="70,16 62,26 78,26" fill="#f1f5f9" />
      <Arrow x1={6} y1={50} x2={34} y2={42} color="#7dd3fc" w={1.6} />
      <ellipse cx={46} cy={34} rx={14} ry={6} fill="#94a3b8" />
      {[40, 46, 52].map((x) => <line key={x} x1={x} y1={42} x2={x - 3} y2={52} stroke="#38bdf8" strokeWidth={1} />)}
      <T x={30} y={24} size={5} fill="#7dd3fc">windward: wetter</T>
      <T x={122} y={52} size={5} fill="#fcd34d">leeward: drier</T>
      <T x={70} y={11} size={5} fill="#e2e8f0">{`${s(top)} °C at ${height === 2000 ? '2 000' : height} m`}</T>
      <T x={14} y={88} anchor="start" size={5} fill="#fdba74">{`${s(seaTemp)} °C at sea level`}</T>
    </svg>
  );
};

/* ---------- three settlement patterns ---------- */

export const SettlementPatterns = () => {
  const kinds = [
    { k: 'nucleated', title: 'nucleated', note: 'houses clustered', color: '#34d399' },
    { k: 'linear', title: 'linear', note: 'along a road or river', color: '#fbbf24' },
    { k: 'dispersed', title: 'dispersed', note: 'spread out', color: '#a5b4fc' },
  ] as const;
  return (
    <svg viewBox="0 0 160 84" role="img" aria-labelledby="sp2-t sp2-d" className={cls} style={st}>
      <title id="sp2-t">Three settlement patterns</title>
      <desc id="sp2-d">In a nucleated settlement the houses are clustered close together. In a linear settlement they line up along a road or river. In a dispersed settlement they are spread far apart.</desc>
      {kinds.map((o, i) => {
        const ox = 4 + i * 53;
        return (
          <g key={o.k}>
            <rect x={ox} y={6} width={48} height={50} rx={3} fill="#0b1220" stroke="#334155" strokeWidth={0.8} />
            {o.k === 'linear' && <line x1={ox + 2} y1={31} x2={ox + 46} y2={31} stroke="#64748b" strokeWidth={1.4} />}
            {settlement(o.k, 10, 48, 50).map((p, j) => <rect key={j} x={r3(ox + p.x - 2)} y={r3(6 + p.y - 2)} width={4} height={4} fill={o.color} />)}
            <T x={ox + 24} y={66} size={5.6} fill={o.color}>{o.title}</T>
            <T x={ox + 24} y={74} size={4.4} fill={SOFT}>{o.note}</T>
          </g>
        );
      })}
    </svg>
  );
};

/* ---------- a city seen from above ---------- */

export const CityZones = () => {
  const cx = 62;
  const cy = 46;
  return (
    <svg viewBox="0 0 160 92" role="img" aria-labelledby="cz-t cz-d" className={cls} style={st}>
      <title id="cz-t">A city seen from above</title>
      <desc id="cz-d">The central business district (CBD) is the centre of the city, where services and firms cluster. Around it are residential areas, and beyond the edge of the built-up area is rural land. An aerial photograph shows this pattern of land use from above.</desc>
      <rect x={0} y={0} width={160} height={92} fill="#14532d" opacity={0.5} />
      <circle cx={cx} cy={cy} r={42} fill="#475569" />
      <circle cx={cx} cy={cy} r={16} fill="#f59e0b" />
      {Array.from({ length: 24 }, (_, i) => {
        const a = (i / 24) * 2 * Math.PI;
        const r = i % 2 ? 26 : 33;
        return <rect key={i} x={r3(cx + r * Math.cos(a) - 2)} y={r3(cy + r * Math.sin(a) - 2)} width={4} height={4} fill="#cbd5e1" />;
      })}
      <T x={cx} y={cy + 2} size={5.6} fill="#451a03">CBD</T>
      <T x={cx} y={cy + 40} size={4.4} fill="#f8fafc">residential</T>
      <T x={142} y={30} size={5.2} fill="#bbf7d0">rural land</T>
      <T x={142} y={40} size={4.4} fill={SOFT}>open space,</T>
      <T x={142} y={46} size={4.4} fill={SOFT}>few people</T>
    </svg>
  );
};
