import { Schematic } from '../Schematic';
import { ADO_LINK, CUSTOMERS, KEYED, KEYED_DESC, KEYED_LABELS, KEY_COLOURS, ORDERS, VALIDATION } from './g11DataPictures';

/** Two tables joined by a key: colour shows which customer. Schematic, no data. */
export const KeyedTables = () => {
  const { pk, fk, customersData, ordersData } = KEYED;
  const colour = (id: number) => KEY_COLOURS[(id - 1) % KEY_COLOURS.length];
  const rowOf = (id: number) => CUSTOMERS.findIndex((c) => c.id === id);
  return (
    <svg
      viewBox={`0 0 ${KEYED.width} ${KEYED.height}`}
      role="img"
      aria-label={`A primary key and a foreign key. ${KEYED_DESC}`}
      className="mx-auto block w-full max-w-lg rounded-2xl"
      style={{ background: '#0f172a', fontFamily: 'inherit' }}
    >
      <text x={35} y={18} textAnchor="middle" fontSize={6.2} fontWeight={800} fill="#f1f5f9">{KEYED_LABELS[0]}</text>
      <text x={134} y={18} textAnchor="middle" fontSize={6.2} fontWeight={800} fill="#f1f5f9">{KEYED_LABELS[1]}</text>
      {ORDERS.map((o, i) => (
        <line
          key={`l${o.id}`}
          x1={fk.x} y1={fk.rowY(i) + fk.h / 2} x2={pk.x + pk.w} y2={pk.rowY(rowOf(o.customerId)) + pk.h / 2}
          stroke={colour(o.customerId)} strokeWidth={0.9}
        />
      ))}
      {CUSTOMERS.map((c, i) => (
        <g key={`c${c.id}`}>
          <rect x={customersData.x} y={pk.rowY(i)} width={customersData.w} height={pk.h} rx={1.6} fill="#334155" />
          <rect x={pk.x} y={pk.rowY(i)} width={pk.w} height={pk.h} rx={1.6} fill={colour(c.id)} />
        </g>
      ))}
      {ORDERS.map((o, i) => (
        <g key={`o${o.id}`}>
          <rect x={fk.x} y={fk.rowY(i)} width={fk.w} height={fk.h} rx={1.6} fill={colour(o.customerId)} />
          <rect x={ordersData.x} y={fk.rowY(i)} width={ordersData.w} height={fk.h} rx={1.6} fill="#334155" />
        </g>
      ))}
      <text x={pk.x + pk.w / 2} y={72} textAnchor="middle" fontSize={6.2} fontWeight={800} fill="#fde68a">{KEYED_LABELS[2]}</text>
      <text x={fk.x + fk.w / 2} y={72} textAnchor="middle" fontSize={6.2} fontWeight={800} fill="#fde68a">{KEYED_LABELS[3]}</text>
    </svg>
  );
};

export const AdoLink = () => <Schematic spec={ADO_LINK} />;
export const ValidationGates = () => <Schematic spec={VALIDATION} />;
