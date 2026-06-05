'use client';

export interface FinancialLine {
  label: string;
  amount?: number;
  isSubtotal?: boolean;
  isTotal?: boolean;
  indent?: number;
  note?: string;
}

interface FinancialStatementProps {
  title: string;
  period?: string;
  sections: { heading: string; lines: FinancialLine[] }[];
  className?: string;
}

const fmt = (n: number) =>
  new Intl.NumberFormat('en-ZA', { minimumFractionDigits: 2 }).format(Math.abs(n));

/**
 * Income statement or balance sheet layout.
 *
 * Usage:
 *   <FinancialStatement
 *     title="Income Statement"
 *     period="Year ended 28 Feb 2025"
 *     sections={[{ heading: 'Revenue', lines: [{ label: 'Sales', amount: 250000 }] }]}
 *   />
 */
const FinancialStatement = ({ title, period, sections, className }: FinancialStatementProps) => {
  return (
    <div className={`rounded-xl border border-slate-200 overflow-hidden text-sm ${className ?? ''}`}>
      <div className="bg-slate-800 text-white px-4 py-3">
        <div className="font-bold text-base">{title}</div>
        {period && <div className="text-slate-300 text-xs mt-0.5">{period}</div>}
      </div>
      {sections.map((sec, si) => (
        <div key={si}>
          <div className="bg-slate-100 px-4 py-1.5 font-semibold text-slate-600 uppercase tracking-wide text-xs">
            {sec.heading}
          </div>
          <table className="w-full">
            <tbody>
              {sec.lines.map((line, li) => (
                <tr
                  key={li}
                  className={[
                    'border-b border-slate-100',
                    line.isTotal ? 'bg-slate-50 font-bold border-t-2 border-slate-300' : '',
                    line.isSubtotal ? 'font-semibold border-t border-slate-200' : '',
                  ].join(' ')}
                >
                  <td
                    className="px-4 py-1.5 text-slate-700"
                    style={{ paddingLeft: `${(line.indent ?? 0) * 16 + 16}px` }}
                  >
                    {line.label}
                    {line.note && <span className="ml-1 text-xs text-slate-400">({line.note})</span>}
                  </td>
                  <td className="px-4 py-1.5 text-right font-mono text-slate-800 w-32">
                    {line.amount !== undefined ? (
                      <span className={line.amount < 0 ? 'text-red-600' : ''}>
                        {line.amount < 0 ? '(' : ''}R {fmt(line.amount)}{line.amount < 0 ? ')' : ''}
                      </span>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default FinancialStatement;
