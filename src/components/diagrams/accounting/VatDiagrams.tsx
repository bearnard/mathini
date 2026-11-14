import { VAT_RATE, netVat, vatInclusive, vatOnExclusive, vatPortion } from './vat';
import { rand } from './rand';
import { r3 } from '../round';

/**
 * Two pictures for the Grade 11 VAT lesson, from the lesson's own figures:
 *   VatFlow     input VAT paid, output VAT collected, and the net amount that goes to SARS.
 *   VatPriceBar a price split into the amount without VAT and the VAT, showing why the VAT in a
 *               VAT-inclusive price is 15/115 of it.
 * Colour is the code: blue = input VAT, orange = output VAT, rose = what is paid to or from SARS.
 */

const INK = '#0f172a';
const BLUE = '#60a5fa';
const ORANGE = '#fb923c';
const ROSE = '#fb7185';
const SOFT = '#cbd5e1';
const frame = 'mx-auto block w-full max-w-md rounded-2xl';
const style = { background: INK, fontFamily: 'inherit' } as const;

const Node = ({ x, y, w, label, fill = '#1e293b' }: { x: number; y: number; w: number; label: string; fill?: string }) => (
  <g>
    <rect x={x} y={y} width={w} height={18} rx={4} fill={fill} stroke="#475569" strokeWidth={0.8} />
    <text x={x + w / 2} y={y + 11.4} textAnchor="middle" fontSize={5.8} fontWeight={800} fill="#f1f5f9">{label}</text>
  </g>
);

/** A broad arrow pointing right (dir "r") or down (dir "d"). */
const Arrow = ({ x, y, len, dir, color }: { x: number; y: number; len: number; dir: 'r' | 'd'; color: string }) => {
  const h = 4; // half width of the shaft
  const head = 6;
  const pts =
    dir === 'r'
      ? [[x, y - h], [x + len - head, y - h], [x + len - head, y - h - 3], [x + len, y], [x + len - head, y + h + 3], [x + len - head, y + h], [x, y + h]]
      : [[x - h, y], [x - h, y + len - head], [x - h - 3, y + len - head], [x, y + len], [x + h + 3, y + len - head], [x + h, y + len - head], [x + h, y]];
  return <polygon points={pts.map(([a, b]) => `${r3(a)},${r3(b)}`).join(' ')} fill={color} />;
};

export const VatFlow = ({ output, input }: { output: number; input: number }) => {
  const net = netVat(output, input);
  const payable = net.direction === 'payable';
  return (
    <svg
      viewBox="-3 0 156 96"
      role="img"
      aria-labelledby="vf-t vf-d"
      className={frame}
      style={style}
    >
      <title id="vf-t">How VAT flows between customers, the business and SARS</title>
      <desc id="vf-d">
        Customers pay the business output VAT of {rand(output)}. The business pays its suppliers input VAT of {rand(input)}. The difference, {rand(net.amount)}, is {payable ? 'paid by the business to SARS' : 'refunded by SARS to the business'}: output VAT minus input VAT.
      </desc>
      <Node x={1} y={14} w={32} label="Customers" />
      <Node x={59} y={14} w={32} label="Business" fill="#312e81" />
      <Node x={117} y={14} w={32} label="Suppliers" />
      <Arrow x={35} y={23} len={22} dir="r" color={ORANGE} />
      <text x={46} y={11} textAnchor="middle" fontSize={5.4} fontWeight={800} fill={ORANGE}>Output VAT</text>
      <text x={46} y={40} textAnchor="middle" fontSize={6.2} fontWeight={800} fill={ORANGE}>{rand(output)}</text>
      <Arrow x={93} y={23} len={22} dir="r" color={BLUE} />
      <text x={104} y={11} textAnchor="middle" fontSize={5.4} fontWeight={800} fill={BLUE}>Input VAT</text>
      <text x={104} y={40} textAnchor="middle" fontSize={6.2} fontWeight={800} fill={BLUE}>{rand(input)}</text>
      <Arrow x={75} y={34} len={28} dir="d" color={ROSE} />
      <Node x={50} y={66} w={50} label="SARS" />
      <text x={84} y={50} fontSize={5.8} fontWeight={800} fill={ROSE}>{payable ? 'Net VAT payable' : 'VAT refund'}</text>
      <text x={84} y={58} fontSize={6.6} fontWeight={800} fill="#f8fafc">{rand(net.amount)}</text>
      <text x={75} y={90} textAnchor="middle" fontSize={5.6} fontWeight={700} fill={SOFT}>{rand(output)} − {rand(input)} = {rand(net.amount)}</text>
    </svg>
  );
};

export const VatPriceBar = ({ exclusive }: { exclusive: number }) => {
  const incl = vatInclusive(exclusive);
  const vat = vatOnExclusive(exclusive);
  const X0 = 10;
  const W = 130;
  const exW = r3((exclusive / incl) * W);
  const vatW = r3(W - exW);
  const portion = vatPortion(incl);
  return (
    <svg
      viewBox="0 0 150 72"
      role="img"
      aria-labelledby="vp-t vp-d"
      className={frame}
      style={style}
    >
      <title id="vp-t">A VAT-inclusive price split into the price without VAT and the VAT</title>
      <desc id="vp-d">
        A bar for {rand(incl)} including VAT: {rand(exclusive)} without VAT plus {rand(vat)} VAT. The VAT in the inclusive price is {VAT_RATE}/{100 + VAT_RATE} of {rand(incl)}, which is {rand(portion)}.
      </desc>
      <path d={`M${X0} 22 v-4 H${X0 + W} v4`} fill="none" stroke="#e2e8f0" strokeWidth={1} />
      <text x={X0 + W / 2} y={13} textAnchor="middle" fontSize={7} fontWeight={800} fill="#f1f5f9">{rand(incl)} including VAT</text>
      <rect x={X0} y={24} width={exW} height={16} fill={BLUE} />
      <rect x={r3(X0 + exW)} y={24} width={vatW} height={16} fill={ORANGE} />
      <text x={r3(X0 + exW / 2)} y={34.4} textAnchor="middle" fontSize={7.2} fontWeight={800} fill={INK}>{rand(exclusive)}</text>
      <path d={`M${X0} 43 v3 H${r3(X0 + exW)} v-3`} fill="none" stroke={BLUE} strokeWidth={1} />
      <text x={r3(X0 + exW / 2)} y={54} textAnchor="middle" fontSize={6.4} fontWeight={800} fill={BLUE}>without VAT</text>
      <path d={`M${r3(X0 + exW)} 43 v3 H${X0 + W} v-3`} fill="none" stroke={ORANGE} strokeWidth={1} />
      <text x={X0 + W} y={54} textAnchor="end" fontSize={6.4} fontWeight={800} fill={ORANGE}>{rand(vat)} VAT</text>
      <text x={75} y={67} textAnchor="middle" fontSize={6} fontWeight={700} fill={SOFT}>VAT in {rand(incl)} = {VAT_RATE}/{100 + VAT_RATE} × {rand(incl)} = {rand(portion)}</text>
    </svg>
  );
};
