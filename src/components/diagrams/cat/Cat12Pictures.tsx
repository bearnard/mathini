import { Schematic } from '../Schematic';
import { HTML_TREE, LAN_WAN, NESTED_IF, TABLE, TABLE_DESC, TABLE_LABELS } from './cat12Pictures';

/** A database table drawn as bars: header row = field names, each row = one record. */
export const FieldsRecords = () => {
  const x0 = TABLE.cols[0];
  const x1 = TABLE.cols[TABLE.cols.length - 1] + TABLE.colW;
  const cx = (c: number) => TABLE.cols[c];
  const fieldMid = cx(TABLE.fieldCol) + TABLE.colW / 2;
  const lastY = TABLE.rowY(TABLE.rows - 1) + TABLE.rowH;
  return (
    <svg
      viewBox={`0 0 ${TABLE.width} ${TABLE.height}`}
      role="img"
      aria-label={`Fields and records in a table. ${TABLE_DESC}`}
      className="mx-auto block w-full max-w-lg rounded-2xl"
      style={{ background: '#0f172a', fontFamily: 'inherit' }}
    >
      {TABLE.cols.map((x, c) => (
        <rect key={`h${c}`} x={x} y={TABLE.headerY} width={TABLE.colW} height={TABLE.rowH} rx={1.6} fill="#fbbf24" fillOpacity={0.85} />
      ))}
      {Array.from({ length: TABLE.rows }, (_, r) =>
        TABLE.cols.map((x, c) => (
          <rect key={`c${r}-${c}`} x={x} y={TABLE.rowY(r)} width={TABLE.colW} height={TABLE.rowH} rx={1.6} fill="#334155" />
        )),
      )}
      <rect x={x0 - 1.5} y={TABLE.rowY(TABLE.recordRow) - 1.5} width={x1 - x0 + 3} height={TABLE.rowH + 3} rx={2.4} fill="none" stroke="#34d399" strokeWidth={1.1} />
      <rect x={cx(TABLE.fieldCol) - 1.5} y={TABLE.headerY - 1.5} width={TABLE.colW + 3} height={lastY - TABLE.headerY + 3} rx={2.4} fill="none" stroke="#38bdf8" strokeWidth={1.1} />
      <rect x={cx(TABLE.badCell.col)} y={TABLE.rowY(TABLE.badCell.row)} width={TABLE.colW} height={TABLE.rowH} rx={1.6} fill="#fb7185" fillOpacity={0.55} stroke="#fb7185" strokeWidth={1} />
      <text x={x1 + 8} y={TABLE.headerY + 7} fontSize={6.2} fontWeight={800} fill="#fde68a">{TABLE_LABELS[0]}</text>
      <text x={x1 + 8} y={TABLE.rowY(TABLE.recordRow) + 7} fontSize={6.2} fontWeight={800} fill="#6ee7b7">{TABLE_LABELS[1]}</text>
      <text x={x1 + 8} y={TABLE.rowY(TABLE.badCell.row) + 7} fontSize={6.2} fontWeight={800} fill="#fda4af">{TABLE_LABELS[2]}</text>
      <text x={fieldMid} y={lastY + 12} textAnchor="middle" fontSize={6.2} fontWeight={800} fill="#7dd3fc">{TABLE_LABELS[3]}</text>
    </svg>
  );
};

export const HtmlTree = () => <Schematic spec={HTML_TREE} />;
export const LanWan = () => <Schematic spec={LAN_WAN} />;
export const NestedIf = () => <Schematic spec={NESTED_IF} />;
