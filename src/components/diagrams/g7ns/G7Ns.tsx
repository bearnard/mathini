import { r3 } from '../round';
import { COLUMNS, FIRST_20, groupOf, periodOf, countOf, type Category } from './g7nsMatterEnergy';
import { axisPos, calendarGap, lunarYearDays, YEAR_DAYS, DISCOVERIES, type Bin } from './g7nsHelpers';

/** Pictures for the Grade 7 Natural Sciences lessons. Every position comes from g7nsHelpers.ts. */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const BLUE = '#818cf8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);
const T = ({ x, y, children, size = 4.6, fill = LINE, anchor = 'middle', weight = 700 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>{children}</text>
);

// ---------- people of one species, different heights ----------

export const HeightFigures = ({ heights, names }: { heights: number[]; names: string[] }) => {
  const base = 52;
  const scale = 0.27; // units per cm
  const gap = 108 / heights.length;
  return (
    <Panel h={66} aria={`${heights.length} learners of the same species standing side by side. Their heights are ${heights.map((h, i) => `${names[i]} ${h} centimetres`).join(', ')}. They are all human, but they differ in height.`}>
      <line x1={4} y1={base} x2={116} y2={base} stroke={MUTED} strokeWidth={0.6} />
      {heights.map((h, i) => {
        const cx = r3(10 + gap * i + gap / 2 - 5);
        const top = r3(base - h * scale);
        const head = 3.4;
        return (
          <g key={names[i]}>
            <circle cx={cx} cy={r3(top + head)} r={head} fill={BLUE} />
            <line x1={cx} y1={r3(top + head * 2)} x2={cx} y2={base - 11} stroke={BLUE} strokeWidth={1.6} strokeLinecap="round" />
            <line x1={cx} y1={r3(top + head * 2 + 2)} x2={r3(cx - 3.6)} y2={r3(top + head * 2 + 8)} stroke={BLUE} strokeWidth={1.2} strokeLinecap="round" />
            <line x1={cx} y1={r3(top + head * 2 + 2)} x2={r3(cx + 3.6)} y2={r3(top + head * 2 + 8)} stroke={BLUE} strokeWidth={1.2} strokeLinecap="round" />
            <line x1={cx} y1={base - 11} x2={r3(cx - 2.8)} y2={base} stroke={BLUE} strokeWidth={1.4} strokeLinecap="round" />
            <line x1={cx} y1={base - 11} x2={r3(cx + 2.8)} y2={base} stroke={BLUE} strokeWidth={1.4} strokeLinecap="round" />
            <T x={cx} y={base + 6} size={3.6} fill={AMBER}>{h}</T>
            <T x={cx} y={base + 11} size={3.2} weight={600}>{names[i]}</T>
          </g>
        );
      })}
      <T x={60} y={6} size={4.4} fill={GREEN}>Same species (human), different heights</T>
    </Panel>
  );
};

// ---------- bar graph of a survey ----------

export const SurveyBars = ({ bins, title, unit }: { bins: Bin[]; title: string; unit: string }) => {
  const max = Math.max(...bins.map((b) => b.count));
  const top = Math.ceil(max / 2) * 2;
  const x0 = 18, y0 = 54, w = 96, h = 40;
  const bw = w / bins.length;
  return (
    <Panel h={70} aria={`Bar graph: ${title}. ${bins.map((b) => `${b.label} ${unit}: ${b.count} learners`).join('; ')}.`}>
      <T x={60} y={7} size={4.4} fill={AMBER}>{title}</T>
      {[0, top / 2, top].map((v) => {
        const y = r3(y0 - (v / top) * h);
        return (
          <g key={v}>
            <line x1={x0} y1={y} x2={x0 + w} y2={y} stroke="#334155" strokeWidth={0.4} />
            <T x={x0 - 2} y={y + 1.4} size={3.6} anchor="end" fill={MUTED}>{v}</T>
          </g>
        );
      })}
      {bins.map((b, i) => {
        const bh = r3((b.count / top) * h);
        const x = r3(x0 + i * bw + bw * 0.15);
        return (
          <g key={b.label}>
            <rect x={x} y={r3(y0 - bh)} width={r3(bw * 0.7)} height={bh} rx={1} fill={GREEN} />
            <T x={r3(x + bw * 0.35)} y={r3(y0 - bh - 1.6)} size={3.8} fill={LINE}>{b.count}</T>
            <T x={r3(x + bw * 0.35)} y={y0 + 5} size={3.4} fill={MUTED} weight={600}>{b.label}</T>
          </g>
        );
      })}
      <T x={60} y={67} size={3.6} fill={MUTED} weight={600}>{unit}</T>
    </Panel>
  );
};

// ---------- percentage bar ----------

export const PercentBar = ({ yes, no, yesLabel, noLabel, pct }: { yes: number; no: number; yesLabel: string; noLabel: string; pct: number }) => {
  const total = yes + no;
  const w = 104;
  const yw = r3((yes / total) * w);
  return (
    <Panel h={40} aria={`${yes} of ${total} learners ${yesLabel}, which is ${pct} percent. ${no} ${noLabel}.`}>
      <rect x={8} y={12} width={yw} height={14} rx={2} fill={GREEN} />
      <rect x={r3(8 + yw)} y={12} width={r3(w - yw)} height={14} rx={2} fill={ROSE} />
      <T x={r3(8 + yw / 2)} y={21.6} size={5} fill={INK} weight={800}>{yes}</T>
      <T x={r3(8 + yw + (w - yw) / 2)} y={21.6} size={5} fill={INK} weight={800}>{no}</T>
      <T x={r3(8 + yw / 2)} y={34} size={3.8} fill={GREEN}>{yesLabel}</T>
      <T x={r3(8 + yw + (w - yw) / 2)} y={34} size={3.8} fill={ROSE}>{noLabel}</T>
      <T x={60} y={7} size={4.6} fill={AMBER}>{`${yes} out of ${total} = ${pct}%`}</T>
    </Panel>
  );
};

// ---------- early calendars ----------

export const YearBars = () => {
  const w = 100;
  const lunar = lunarYearDays();
  const lw = r3((lunar / YEAR_DAYS) * w);
  return (
    <Panel h={50} aria={`Two bars. A year of the four seasons is ${YEAR_DAYS} days. Twelve moons from full moon to full moon add up to ${lunar} days. The moon calendar is ${calendarGap()} days shorter, so early calendars had to be adjusted.`}>
      <T x={60} y={7} size={4.4} fill={AMBER}>Twelve moons are shorter than a year</T>
      <rect x={14} y={13} width={w} height={9} rx={2} fill={BLUE} />
      <T x={64} y={19.4} size={4.2} fill={INK} weight={800}>{`a year of seasons: ${YEAR_DAYS} days`}</T>
      <rect x={14} y={27} width={lw} height={9} rx={2} fill={GREEN} />
      <rect x={r3(14 + lw)} y={27} width={r3(w - lw)} height={9} rx={2} fill="none" stroke={ROSE} strokeWidth={0.7} strokeDasharray="1.4 1.2" />
      <T x={r3(14 + lw / 2)} y={33.4} size={4.2} fill={INK} weight={800}>{`12 moons: ${lunar} days`}</T>
      <T x={60} y={44} size={4.2} fill={ROSE}>{`gap: ${calendarGap()} days`}</T>
    </Panel>
  );
};

// ---------- the Southern Cross as a pointer ----------

export const SouthernCross = () => (
  <Panel h={74} aria="Sketch of the Southern Cross, not to scale. Four bright stars make a cross. A line drawn along the long arm of the cross, from the top star down through the bottom star and carried on for about four and a half times the length of the arm, points to the south celestial pole, the point in the sky above due south.">
    {[[40, 12], [40, 34], [30, 23], [51, 20]].map(([x, y]) => (
      <circle key={`${x}-${y}`} cx={x} cy={y} r={1.9} fill={AMBER} />
    ))}
    <line x1={40} y1={12} x2={40} y2={34} stroke={AMBER} strokeWidth={0.5} />
    <line x1={40} y1={34} x2={40} y2={67} strokeDasharray="1.6 1.2" stroke={GREEN} strokeWidth={0.7} />
    <circle cx={40} cy={67} r={1.7} fill="none" stroke={GREEN} strokeWidth={0.7} />
    <line x1={14} y1={70} x2={106} y2={70} stroke={MUTED} strokeWidth={0.5} />
    <T x={40} y={9} size={4.4} fill={AMBER}>top star</T>
    <T x={62} y={37} size={4.4} anchor="start" fill={AMBER}>bottom star</T>
    <T x={48} y={52} size={4.4} anchor="start" fill={GREEN}>carry on about 4½ arm lengths</T>
    <T x={48} y={66} size={4.4} anchor="start" fill={GREEN}>south celestial pole</T>
    <T x={60} y={73.6} size={3.8} fill={MUTED} weight={600}>horizon: due south is below this point</T>
  </Panel>
);

// ---------- the two models of the Solar System ----------

const Orbits = ({ cx, centre, mover, centreLabel, moverLabel }: { cx: number; centre: string; mover: string; centreLabel: string; moverLabel: string }) => (
  <g>
    <circle cx={cx} cy={32} r={19} fill="none" stroke="#334155" strokeWidth={0.6} strokeDasharray="1.4 1.2" />
    <circle cx={cx} cy={32} r={5.4} fill={centre} />
    <circle cx={r3(cx + 19 * Math.cos(-0.7))} cy={r3(32 + 19 * Math.sin(-0.7))} r={2.6} fill={mover} />
    <T x={cx} y={33.4} size={3.4} fill={INK} weight={800}>{centreLabel}</T>
    <T x={cx} y={57} size={3.8} fill={LINE}>{moverLabel}</T>
  </g>
);

export const TwoModels = () => (
  <Panel h={64} aria="Two models of the Solar System. In the old Earth-centred model the Sun and planets go around the Earth. Copernicus suggested that the Sun is at the centre and the planets, including the Earth, go around the Sun.">
    <T x={30} y={9} size={4.6} fill={ROSE}>Before: Earth centre</T>
    <T x={90} y={9} size={4.6} fill={GREEN}>Copernicus: Sun centre</T>
    <Orbits cx={30} centre={BLUE} mover={AMBER} centreLabel="Earth" moverLabel="the Sun goes round" />
    <Orbits cx={90} centre={AMBER} mover={BLUE} centreLabel="Sun" moverLabel="the Earth goes round" />
  </Panel>
);

// ---------- timeline ----------

export const AstronomyTimeline = () => {
  const from = 1500, to = 1700;
  const x = (y: number) => r3(10 + axisPos(y, from, to) * 100);
  
  return (
    <Panel h={62} aria={`Timeline from 1500 to 1700. ${DISCOVERIES.map((d) => `${d.year}, ${d.who}: ${d.what}`).join('. ')}.`}>
      <line x1={10} y1={30} x2={110} y2={30} stroke={MUTED} strokeWidth={0.8} />
      {[1500, 1600, 1700].map((y) => (
        <g key={y}>
          <line x1={x(y)} y1={28} x2={x(y)} y2={32} stroke={MUTED} strokeWidth={0.6} />
          <T x={x(y)} y={37} size={3.4} fill={MUTED} weight={600}>{y}</T>
        </g>
      ))}
      {DISCOVERIES.map((d, i) => (
        <g key={d.who}>
          <circle cx={x(d.year)} cy={30} r={2} fill={AMBER} />
          <line x1={x(d.year)} y1={28} x2={x(d.year)} y2={i % 2 === 0 ? 20 : 41} stroke={AMBER} strokeWidth={0.5} />
          <T x={x(d.year)} y={i % 2 === 0 ? 14 : 48} size={4.2} fill={AMBER}>{d.who}</T>
          <T x={x(d.year)} y={i % 2 === 0 ? 18 : 52} size={3.8} fill={LINE} weight={600}>{d.year}</T>
        </g>
      ))}
    </Panel>
  );
};

// ---------- the first 20 elements ----------


const CAT_COLOR: Record<Category, string> = { metal: AMBER, 'semi-metal': GREEN, 'non-metal': BLUE };

export const PeriodicMini = ({ show = 'category' }: { show?: 'category' | 'plain' }) => {
  const cw = 13, ch = 12, x0 = 12, y0 = 14;
  return (
    <Panel h={76} aria={`The first 20 elements of the Periodic Table. Metals are on the left, non-metals on the right and semi-metals between them: ${countOf('metal')} metals, ${countOf('semi-metal')} semi-metals (boron and silicon) and ${countOf('non-metal')} non-metals. The transition elements that come between group 2 and group 13 are left out.`}>
      <T x={60} y={7} size={4.6} fill={AMBER}>The first 20 elements</T>
      {COLUMNS.map((g, i) => (
        <T key={g} x={x0 + i * cw + cw / 2} y={y0 - 1.5} size={3.2} fill={MUTED} weight={600}>{g}</T>
      ))}
      {[1, 2, 3, 4].map((p) => (
        <T key={p} x={x0 - 3} y={y0 + (p - 1) * ch + ch / 2 + 1.3} size={3.2} fill={MUTED} weight={600}>{p}</T>
      ))}
      {FIRST_20.map((e) => {
        const col = COLUMNS.indexOf(groupOf(e.z) as (typeof COLUMNS)[number]);
        const x = x0 + col * cw;
        const y = y0 + (periodOf(e.z) - 1) * ch;
        const c = CAT_COLOR[e.category];
        return (
          <g key={e.z}>
            <rect x={x + 0.5} y={y + 0.5} width={cw - 1} height={ch - 1} rx={1.4} fill={show === 'category' ? c : '#cbd5e1'} fillOpacity={0.92} />
            <T x={x + cw / 2} y={y + 3.8} size={2.8} fill={INK} weight={600}>{e.z}</T>
            <T x={x + cw / 2} y={y + 8.4} size={5} fill={INK} weight={800}>{e.symbol}</T>
          </g>
        );
      })}
      {(['metal', 'semi-metal', 'non-metal'] as Category[]).map((c, i) => (
        <g key={c}>
          <rect x={14 + i * 36} y={66} width={5} height={5} rx={1} fill={CAT_COLOR[c]} />
          <T x={21 + i * 36} y={70.2} size={3.8} anchor="start" weight={600}>{c}s</T>
        </g>
      ))}
    </Panel>
  );
};

// ---------- a vertical chain of steps ----------

export const Chain = ({ steps, aria, color = GREEN }: { steps: readonly { title: string; note: string }[]; aria: string; color?: string }) => {
  const rowH = 14;
  const h = 6 + steps.length * rowH;
  return (
    <Panel h={h} aria={aria}>
      {steps.map((s, i) => {
        const y = 4 + i * rowH;
        return (
          <g key={s.title}>
            <rect x={6} y={y} width={30} height={rowH - 4} rx={2} fill={color} fillOpacity={0.9} />
            <T x={21} y={y + 5.6} size={4} fill={INK} weight={800}>{s.title}</T>
            <T x={40} y={y + 5.8} size={4.2} anchor="start" weight={600}>{s.note}</T>
            {i < steps.length - 1 ? <path d={`M21 ${y + rowH - 4} v4`} stroke={color} strokeWidth={0.9} /> : null}
          </g>
        );
      })}
    </Panel>
  );
};

// ---------- wattage bars ----------

export const WattBars = ({ items }: { items: { name: string; watts: number }[] }) => {
  const max = Math.max(...items.map((i) => i.watts));
  return (
    <Panel h={14 + items.length * 15} aria={`Bars of power in watts. ${items.map((i) => `${i.name}: ${i.watts} watts`).join('; ')}.`}>
      <T x={60} y={7} size={4.4} fill={AMBER}>Power used (watts)</T>
      {items.map((it, i) => {
        const w = Math.round((it.watts / max) * 70 * 1000) / 1000;
        const y = 12 + i * 15;
        return (
          <g key={it.name}>
            <T x={8} y={y + 3.6} size={3.8} anchor="start" fill={LINE} weight={600}>{it.name}</T>
            <rect x={8} y={y + 5} width={w} height={6} rx={1.5} fill={i === 0 ? ROSE : GREEN} />
            <T x={Math.round((8 + w + 2) * 1000) / 1000} y={y + 10} size={4.4} anchor="start" fill={LINE}>{`${it.watts} W`}</T>
          </g>
        );
      })}
    </Panel>
  );
};

// ---------- properties of the three groups ----------

export const PROPERTY_CARDS = [
  { title: 'Metals', color: AMBER, lines: ['shiny', 'ductile', 'malleable', 'solid (not Hg)'] },
  { title: 'Semi-metals', color: GREEN, lines: ['solids', 'part metal,', 'part non-metal'] },
  { title: 'Non-metals', color: BLUE, lines: ['gases or', 'dull solids', 'many different', 'properties'] },
] as const;

export const PropertyCards = () => (
  <Panel h={50} aria="Three cards. Metals are shiny, ductile and malleable, solid except mercury, with high melting points. Semi-metals are solids with some properties of metals and some of non-metals. Non-metals are gases or dull solids with many different properties.">
    {PROPERTY_CARDS.map((c, i) => {
      const x = 4 + i * 39;
      return (
        <g key={c.title}>
          <rect x={x} y={4} width={37} height={42} rx={3} fill={c.color} fillOpacity={0.16} stroke={c.color} strokeWidth={0.8} />
          <T x={x + 18.5} y={12} size={5.2} fill={c.color} weight={800}>{c.title}</T>
          {c.lines.map((l, j) => (
            <T key={l} x={x + 18.5} y={21 + j * 6.2} size={4.4} weight={600}>{l}</T>
          ))}
        </g>
      );
    })}
  </Panel>
);

// ---------- elements at home ----------

export const ElementCards = ({ cards }: { cards: { symbol: string; name: string; use: string; color: string }[] }) => (
  <Panel h={46} aria={`Elements in everyday life. ${cards.map((c) => `${c.name}, symbol ${c.symbol}, used in ${c.use}`).join('. ')}.`}>
    {cards.map((c, i) => {
      const x = 3 + i * 29;
      return (
        <g key={c.symbol}>
          <rect x={x} y={4} width={27} height={38} rx={3} fill={c.color} fillOpacity={0.16} stroke={c.color} strokeWidth={0.8} />
          <T x={x + 13.5} y={19} size={10} fill={c.color} weight={800}>{c.symbol}</T>
          <T x={x + 13.5} y={27} size={4.2} weight={700}>{c.name}</T>
          <T x={x + 13.5} y={34} size={4} fill={MUTED} weight={600}>{c.use}</T>
        </g>
      );
    })}
  </Panel>
);

// ---------- two columns: renewable and non-renewable ----------

export const SourceColumns = ({ sources }: { sources: { name: string; renewable: boolean }[] }) => {
  const cols = [
    { title: 'Non-renewable', color: ROSE, items: sources.filter((s) => !s.renewable) },
    { title: 'Renewable', color: GREEN, items: sources.filter((s) => s.renewable) },
  ];
  const rows = Math.max(...cols.map((c) => c.items.length));
  return (
    <Panel h={16 + rows * 9} aria={`Energy sources for the grid in two columns. Non-renewable: ${cols[0].items.map((s) => s.name).join(', ')}. Renewable: ${cols[1].items.map((s) => s.name).join(', ')}.`}>
      {cols.map((c, i) => {
        const x = 4 + i * 58;
        return (
          <g key={c.title}>
            <rect x={x} y={3} width={54} height={10 + rows * 9} rx={3} fill={c.color} fillOpacity={0.14} stroke={c.color} strokeWidth={0.8} />
            <T x={x + 27} y={10} size={5} fill={c.color} weight={800}>{c.title}</T>
            {c.items.map((s, j) => (
              <T key={s.name} x={x + 27} y={19 + j * 9} size={4.8} weight={600}>{s.name}</T>
            ))}
          </g>
        );
      })}
    </Panel>
  );
};
