import { r3 } from '../round';
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
