'use client';

interface Entry {
  description: string;
  amount: number;
}

interface TAccountProps {
  title: string;
  debit: Entry[];
  credit: Entry[];
  className?: string;
}

const fmt = (n: number) =>
  new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', minimumFractionDigits: 2 }).format(n);

/**
 * Visual double-entry T-account ledger.
 *
 * Usage:
 *   <TAccount
 *     title="Bank Account"
 *     debit={[{ description: 'Capital introduced', amount: 50000 }]}
 *     credit={[{ description: 'Equipment purchased', amount: 15000 }]}
 *   />
 */
const TAccount = ({ title, debit, credit, className }: TAccountProps) => {
  const debitTotal = debit.reduce((s, e) => s + e.amount, 0);
  const creditTotal = credit.reduce((s, e) => s + e.amount, 0);
  const balance = debitTotal - creditTotal;
  const fillers = (own: number, other: number) => Array.from({ length: Math.max(other - own, 0) }, (_, i) => i);

  return (
    <div className={`rounded-xl border border-slate-200 overflow-hidden text-sm ${className ?? ''}`}>
      <div className="bg-slate-700 text-white text-center font-semibold py-2 px-4 tracking-wide">
        {title}
      </div>
      <div className="grid grid-cols-1 divide-y divide-slate-200 min-[560px]:grid-cols-2 min-[560px]:divide-x min-[560px]:divide-y-0">
        {/* Debit */}
        <div className="min-w-0">
          <div className="bg-blue-50 text-blue-700 font-semibold text-center py-1 border-b border-slate-200">
            Dr (Debit)
          </div>
          <table className="w-full table-fixed">
            <tbody>
              {debit.map((e, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="break-words px-2 py-1.5 text-slate-700 min-[560px]:px-3">{e.description}</td>
                  <td className="w-[7.5rem] whitespace-nowrap px-2 py-1.5 text-right font-mono tabular-nums text-slate-800 min-[560px]:px-3">{fmt(e.amount)}</td>
                </tr>
              ))}
              {fillers(debit.length, credit.length).map((i) => (
                <tr key={`fill-${i}`} aria-hidden className="hidden border-b border-slate-100 min-[560px]:table-row">
                  <td className="px-3 py-1.5">&nbsp;</td>
                  <td className="w-[7.5rem] px-3 py-1.5">&nbsp;</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-blue-50 font-semibold">
                <td className="px-2 py-1.5 text-blue-700 min-[560px]:px-3">Total</td>
                <td className="w-[7.5rem] whitespace-nowrap px-2 py-1.5 text-right font-mono tabular-nums text-blue-700 min-[560px]:px-3">{fmt(debitTotal)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        {/* Credit */}
        <div className="min-w-0">
          <div className="bg-red-50 text-red-700 font-semibold text-center py-1 border-b border-slate-200">
            Cr (Credit)
          </div>
          <table className="w-full table-fixed">
            <tbody>
              {credit.map((e, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="break-words px-2 py-1.5 text-slate-700 min-[560px]:px-3">{e.description}</td>
                  <td className="w-[7.5rem] whitespace-nowrap px-2 py-1.5 text-right font-mono tabular-nums text-slate-800 min-[560px]:px-3">{fmt(e.amount)}</td>
                </tr>
              ))}
              {fillers(credit.length, debit.length).map((i) => (
                <tr key={`fill-${i}`} aria-hidden className="hidden border-b border-slate-100 min-[560px]:table-row">
                  <td className="px-3 py-1.5">&nbsp;</td>
                  <td className="w-[7.5rem] px-3 py-1.5">&nbsp;</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-red-50 font-semibold">
                <td className="px-2 py-1.5 text-red-700 min-[560px]:px-3">Total</td>
                <td className="w-[7.5rem] whitespace-nowrap px-2 py-1.5 text-right font-mono tabular-nums text-red-700 min-[560px]:px-3">{fmt(creditTotal)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className={`text-center py-2 font-semibold text-sm ${balance >= 0 ? 'bg-blue-50 text-blue-700' : 'bg-red-50 text-red-700'}`}>
        Balance: {fmt(Math.abs(balance))} {balance >= 0 ? '(Dr)' : '(Cr)'}
      </div>
    </div>
  );
};

export default TAccount;
