import { rand } from './rand';
import type { Line } from './closeCorporation';

/** A statement drawn as a real table (label and rand amount, bold totals), with a description for screen readers. Every amount comes from closeCorporation.ts. */
export const StatementTable = ({ title, lines, aria }: { title: string; lines: readonly Line[]; aria: string }) => (
  <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-slate-900 text-left">
    <table aria-label={aria} className="w-full border-collapse text-[13px] text-slate-100">
      <caption className="px-3 pt-2.5 text-left text-sm font-extrabold text-amber-300">{title}</caption>
      <tbody>
        {lines.map((l) => (
          <tr key={l.label} className="border-t border-slate-700">
            <td className={`px-3 py-1.5 ${l.indent ? 'pl-6' : ''} ${l.bold ? 'font-extrabold text-emerald-300' : ''}`}>{l.label}</td>
            <td className={`whitespace-nowrap px-3 py-1.5 text-right ${l.bold ? 'font-extrabold text-emerald-300' : 'font-semibold'}`}>{rand(l.amount)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
