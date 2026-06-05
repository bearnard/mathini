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

  return (
    <div className={`rounded-xl border border-slate-200 overflow-hidden text-sm ${className ?? ''}`}>
      <div className="bg-slate-700 text-white text-center font-semibold py-2 px-4 tracking-wide">
        {title}
      </div>
      <div className="grid grid-cols-2 divide-x divide-slate-200">
        {/* Debit */}
        <div>
          <div className="bg-blue-50 text-blue-700 font-semibold text-center py-1 border-b border-slate-200">
            Dr (Debit)
          </div>
          <table className="w-full">
            <tbody>
              {debit.map((e, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="px-3 py-1.5 text-slate-700">{e.description}</td>
                  <td className="px-3 py-1.5 text-right font-mono text-slate-800">{fmt(e.amount)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-blue-50 font-semibold">
                <td className="px-3 py-1.5 text-blue-700">Total</td>
                <td className="px-3 py-1.5 text-right font-mono text-blue-700">{fmt(debitTotal)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        {/* Credit */}
        <div>
          <div className="bg-red-50 text-red-700 font-semibold text-center py-1 border-b border-slate-200">
            Cr (Credit)
          </div>
          <table className="w-full">
            <tbody>
              {credit.map((e, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="px-3 py-1.5 text-slate-700">{e.description}</td>
                  <td className="px-3 py-1.5 text-right font-mono text-slate-800">{fmt(e.amount)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-red-50 font-semibold">
                <td className="px-3 py-1.5 text-red-700">Total</td>
                <td className="px-3 py-1.5 text-right font-mono text-red-700">{fmt(creditTotal)}</td>
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
