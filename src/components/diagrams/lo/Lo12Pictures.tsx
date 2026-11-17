/** A small table picture: a caption, rows of [label, value], and a description for screen readers. */
export const KeyTable = ({ title, rows, aria, head }: { title: string; rows: readonly (readonly [string, string])[]; aria: string; head?: readonly [string, string] }) => (
  <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-slate-900 text-left">
    <table aria-label={aria} className="w-full border-collapse text-[13px] text-slate-100">
      <caption className="px-3 pt-2.5 text-left text-sm font-extrabold text-amber-300">{title}</caption>
      {head && (
        <thead>
          <tr className="text-[11px] uppercase tracking-wide text-slate-400">
            <th scope="col" className="px-3 py-1.5 text-left font-bold">{head[0]}</th>
            <th scope="col" className="px-3 py-1.5 text-left font-bold">{head[1]}</th>
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map(([a, b]) => (
          <tr key={a} className="border-t border-slate-700">
            <td className="px-3 py-1.5 align-top">{a}</td>
            <td className="px-3 py-1.5 text-left font-semibold text-emerald-300">{b}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
