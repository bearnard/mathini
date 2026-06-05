'use client';

import { useEffect, useMemo, useState } from 'react';

import { cn } from '../../lib/utils';

interface IncomeItem {
  name: string;
  amount: number;
}

interface ExpenseItem {
  name: string;
  amount: number;
}

interface BudgetPlannerProps {
  defaultIncome?: IncomeItem[];
  defaultExpenses?: ExpenseItem[];
  className?: string;
}

const DEFAULT_INCOME: IncomeItem[] = [
  { name: 'Monthly salary', amount: 12000 },
  { name: 'Part-time work', amount: 2500 },
];

const DEFAULT_EXPENSES: ExpenseItem[] = [
  { name: 'Rent', amount: 4500 },
  { name: 'Groceries', amount: 1800 },
  { name: 'Transport', amount: 600 },
  { name: 'Electricity & water', amount: 450 },
  { name: 'Clothing', amount: 300 },
  { name: 'Phone/data', amount: 250 },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    maximumFractionDigits: 2,
  }).format(value);

export default function BudgetPlanner({
  defaultIncome = DEFAULT_INCOME,
  defaultExpenses = DEFAULT_EXPENSES,
  className,
}: BudgetPlannerProps) {
  const [income, setIncome] = useState<IncomeItem[]>(defaultIncome);
  const [expenses, setExpenses] = useState<ExpenseItem[]>(defaultExpenses);
  const [applyVat, setApplyVat] = useState(true);
  const [vatExpenseIndex, setVatExpenseIndex] = useState(() => {
    const groceriesIndex = defaultExpenses.findIndex((item) => item.name.toLowerCase().includes('grocer'));
    return groceriesIndex >= 0 ? groceriesIndex : 0;
  });

  useEffect(() => {
    if (expenses.length === 0) {
      setVatExpenseIndex(0);
      return;
    }

    if (vatExpenseIndex > expenses.length - 1) {
      setVatExpenseIndex(expenses.length - 1);
    }
  }, [expenses, vatExpenseIndex]);

  const adjustedExpenses = useMemo(
    () =>
      expenses.map((item, index) => {
        const vatAmount = applyVat && index === vatExpenseIndex ? item.amount * 0.15 : 0;

        return {
          ...item,
          vatAmount,
          totalAmount: item.amount + vatAmount,
        };
      }),
    [applyVat, expenses, vatExpenseIndex],
  );

  const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = adjustedExpenses.reduce((sum, item) => sum + item.totalAmount, 0);
  const balance = totalIncome - totalExpenses;
  const spentPercentage = totalIncome <= 0 ? 0 : (totalExpenses / totalIncome) * 100;
  const scaleMax = Math.max(totalIncome, totalExpenses, 1);

  const updateIncome = (index: number, key: keyof IncomeItem, value: string) => {
    setIncome((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              [key]: key === 'amount' ? Number(value) || 0 : value,
            }
          : item,
      ),
    );
  };

  const updateExpense = (index: number, key: keyof ExpenseItem, value: string) => {
    setExpenses((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              [key]: key === 'amount' ? Number(value) || 0 : value,
            }
          : item,
      ),
    );
  };

  return (
    <div className={cn('rounded-2xl border border-slate-200 bg-white shadow-sm', className)}>
      <div className="border-b border-slate-100 px-4 py-3 sm:px-6">
        <h3 className="text-lg font-semibold text-slate-900">Monthly Budget Planner</h3>
        <p className="mt-1 text-sm text-slate-500">Edit the example data or add your own rows to plan a monthly budget.</p>
      </div>

      <div className="space-y-6 p-4 sm:p-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: 'Total income', value: formatCurrency(totalIncome), tone: 'text-emerald-600' },
            { label: 'Total expenses', value: formatCurrency(totalExpenses), tone: 'text-slate-900' },
            {
              label: balance >= 0 ? 'Surplus' : 'Deficit',
              value: formatCurrency(Math.abs(balance)),
              tone: balance >= 0 ? 'text-emerald-600' : 'text-red-600',
            },
            {
              label: 'Income spent',
              value: `${spentPercentage.toFixed(0)}% of income spent`,
              tone: spentPercentage > 100 ? 'text-red-600' : 'text-indigo-600',
            },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">{item.label}</p>
              <p className={cn('mt-3 text-2xl font-bold', item.tone)}>{item.value}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="grid gap-3 sm:grid-cols-[7rem_1fr] sm:items-center">
            <span className="font-semibold text-slate-700">Income</span>
            <div className="h-5 overflow-hidden rounded-full bg-white">
              <div className="h-full rounded-full bg-emerald-500" style={{ width: `${(totalIncome / scaleMax) * 100}%` }} />
            </div>
            <span className="font-semibold text-slate-700">Expenses</span>
            <div className="h-5 overflow-hidden rounded-full bg-white">
              <div className="h-full rounded-full bg-indigo-500" style={{ width: `${(totalExpenses / scaleMax) * 100}%` }} />
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h4 className="text-sm font-semibold text-slate-900">Income</h4>
              <button
                type="button"
                onClick={() => setIncome((current) => [...current, { name: 'New income', amount: 0 }])}
                className="rounded-full bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-200"
              >
                Add income
              </button>
            </div>

            <div className="space-y-3">
              {income.map((item, index) => (
                <div key={`${item.name}-${index}`} className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:grid-cols-[minmax(0,1fr)_9rem]">
                  <input
                    value={item.name}
                    onChange={(event) => updateIncome(index, 'name', event.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none"
                    placeholder="Income source"
                  />
                  <input
                    type="number"
                    min={0}
                    step="0.01"
                    value={item.amount}
                    onChange={(event) => updateIncome(index, 'amount', event.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-right text-sm font-semibold text-slate-900 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h4 className="text-sm font-semibold text-slate-900">Expenses</h4>
                <button
                  type="button"
                  onClick={() => setExpenses((current) => [...current, { name: 'New expense', amount: 0 }])}
                  className="rounded-full bg-indigo-100 px-3 py-2 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-200"
                >
                  Add expense
                </button>
              </div>

              <div className="space-y-3">
                {adjustedExpenses.map((item, index) => (
                  <div key={`${item.name}-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_9rem]">
                      <input
                        value={expenses[index]?.name ?? ''}
                        onChange={(event) => updateExpense(index, 'name', event.target.value)}
                        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none"
                        placeholder="Expense name"
                      />
                      <input
                        type="number"
                        min={0}
                        step="0.01"
                        value={expenses[index]?.amount ?? 0}
                        onChange={(event) => updateExpense(index, 'amount', event.target.value)}
                        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-right text-sm font-semibold text-slate-900 outline-none"
                      />
                    </div>
                    {applyVat && index === vatExpenseIndex ? (
                      <p className="mt-2 text-xs text-indigo-600">
                        VAT added: {formatCurrency(item.vatAmount)} → total {formatCurrency(item.totalAmount)}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">VAT (15%) on groceries</h4>
                  <p className="text-xs text-slate-500">Apply VAT to one selected expense item.</p>
                </div>
                <label className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
                  <input
                    type="checkbox"
                    checked={applyVat}
                    onChange={(event) => setApplyVat(event.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-indigo-600"
                  />
                  Add VAT
                </label>
              </div>

              <div className="mt-4">
                <select
                  value={vatExpenseIndex}
                  onChange={(event) => setVatExpenseIndex(Number(event.target.value))}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none"
                >
                  {expenses.map((item, index) => (
                    <option key={`${item.name}-${index}`} value={index}>
                      {item.name || `Expense ${index + 1}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
