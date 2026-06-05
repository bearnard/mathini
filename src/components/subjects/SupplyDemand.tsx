'use client';

import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface SupplyDemandProps {
  title?: string;
  /** Optional label for the equilibrium price */
  eqPrice?: number;
  /** Optional label for the equilibrium quantity */
  eqQty?: number;
  /** Show shift scenario buttons */
  showShifts?: boolean;
  className?: string;
}

// Generate standard linear supply & demand curves
const makeCurves = (demandShift = 0, supplyShift = 0) => {
  const points = [];
  for (let q = 0; q <= 10; q++) {
    points.push({
      qty: q,
      demand: Math.max(0, 10 - q + demandShift),
      supply: Math.max(0, q + supplyShift),
    });
  }
  return points;
};

/**
 * Supply & demand graph using Recharts, with optional shift scenario controls.
 */
const SupplyDemand = ({ title = 'Supply & Demand', eqPrice, eqQty, showShifts = false, className }: SupplyDemandProps) => {
  const [scenario, setScenario] = useState<'normal' | 'demandUp' | 'supplyDown'>('normal');

  const shifts: Record<string, [number, number]> = {
    normal: [0, 0],
    demandUp: [3, 0],
    supplyDown: [0, 3],
  };

  const [ds, ss] = shifts[scenario];
  const data = makeCurves(ds, ss);

  // Find equilibrium index
  const eq = data.reduce((best, d) => (Math.abs(d.demand - d.supply) < Math.abs(best.demand - best.supply) ? d : best));

  return (
    <div className={`space-y-3 ${className ?? ''}`}>
      <div className="font-semibold text-slate-700 text-center text-sm">{title}</div>
      {showShifts && (
        <div className="flex gap-2 justify-center flex-wrap">
          {(['normal', 'demandUp', 'supplyDown'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setScenario(s)}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${scenario === s ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'}`}
            >
              {s === 'normal' ? 'Normal' : s === 'demandUp' ? 'Demand ↑' : 'Supply ↓'}
            </button>
          ))}
        </div>
      )}
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="qty" label={{ value: 'Quantity', position: 'insideBottom', offset: -4, fontSize: 12 }} tick={{ fontSize: 11 }} />
          <YAxis label={{ value: 'Price', angle: -90, position: 'insideLeft', fontSize: 12 }} tick={{ fontSize: 11 }} />
          <Tooltip formatter={(v, name) => [(v as number) ?? 0, name === 'demand' ? 'Demand (D)' : 'Supply (S)']} />
          <Legend formatter={(v) => (v === 'demand' ? 'Demand (D)' : 'Supply (S)')} />
          <Line type="linear" dataKey="demand" stroke="#ef4444" strokeWidth={2.5} dot={false} name="demand" />
          <Line type="linear" dataKey="supply" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="supply" />
          <ReferenceLine x={eq.qty} stroke="#94a3b8" strokeDasharray="4 2" label={{ value: `Q*=${eq.qty}`, fill: '#64748b', fontSize: 11, position: 'top' }} />
          <ReferenceLine y={eq.demand} stroke="#94a3b8" strokeDasharray="4 2" label={{ value: `P*=${eq.demand}`, fill: '#64748b', fontSize: 11, position: 'right' }} />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-center text-xs text-slate-500">
        Equilibrium: Price = {eqPrice ?? eq.demand}, Quantity = {eqQty ?? eq.qty}
      </p>
    </div>
  );
};

export default SupplyDemand;
