/**
 * A trace table for the Grade 11 IT lessons: one column per variable, one row per pass of the loop. Real HTML text, so it wraps on a
 * phone and a screen reader can read it. The values come from g11delphi.ts.
 */
export const TraceTable = ({ columns, rows, aria }: { columns: readonly string[]; rows: readonly (readonly (string | number)[])[]; aria: string }) => (
  <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl text-left" style={{ background: '#0f172a' }}>
    <table aria-label={aria} className="w-full border-collapse text-[13px] text-slate-100">
      <thead>
        <tr className="text-xs uppercase tracking-wide text-slate-400">
          {columns.map((c) => (
            <th key={c} scope="col" className="px-3 py-1.5 text-left font-mono font-bold normal-case">{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, ri) => (
          <tr key={ri} className="border-t border-slate-700">
            {r.map((cell, ci) => (
              <td key={ci} className="px-3 py-1.5 font-mono">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
