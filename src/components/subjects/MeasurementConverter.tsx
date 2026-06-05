'use client';

import { useMemo, useState } from 'react';

import { cn } from '../../lib/utils';

type ConverterTab = 'length' | 'mass' | 'volume' | 'temperature' | 'time';

interface MeasurementConverterProps {
  defaultTab?: ConverterTab;
  className?: string;
}

interface LinearUnit {
  key: string;
  label: string;
  toBase: number;
}

const LINEAR_UNITS: Record<Exclude<ConverterTab, 'temperature'>, LinearUnit[]> = {
  length: [
    { key: 'mm', label: 'Millimetres (mm)', toBase: 0.001 },
    { key: 'cm', label: 'Centimetres (cm)', toBase: 0.01 },
    { key: 'm', label: 'Metres (m)', toBase: 1 },
    { key: 'km', label: 'Kilometres (km)', toBase: 1000 },
    { key: 'in', label: 'Inches (in)', toBase: 0.0254 },
    { key: 'ft', label: 'Feet (ft)', toBase: 0.3048 },
  ],
  mass: [
    { key: 'mg', label: 'Milligrams (mg)', toBase: 0.001 },
    { key: 'g', label: 'Grams (g)', toBase: 1 },
    { key: 'kg', label: 'Kilograms (kg)', toBase: 1000 },
    { key: 't', label: 'Tonnes (t)', toBase: 1000000 },
    { key: 'lb', label: 'Pounds (lb)', toBase: 453.59237 },
  ],
  volume: [
    { key: 'ml', label: 'Millilitres (ml)', toBase: 0.001 },
    { key: 'l', label: 'Litres (L)', toBase: 1 },
    { key: 'kl', label: 'Kilolitres (kl)', toBase: 1000 },
    { key: 'cm3', label: 'Cubic centimetres (cm³)', toBase: 0.001 },
    { key: 'm3', label: 'Cubic metres (m³)', toBase: 1000 },
  ],
  time: [
    { key: 's', label: 'Seconds (s)', toBase: 1 },
    { key: 'min', label: 'Minutes (min)', toBase: 60 },
    { key: 'h', label: 'Hours (h)', toBase: 3600 },
    { key: 'd', label: 'Days (d)', toBase: 86400 },
    { key: 'w', label: 'Weeks (w)', toBase: 604800 },
  ],
};

const FORMULAS: Record<ConverterTab, string[]> = {
  length: ['m = cm ÷ 100', 'km = m ÷ 1000', 'inches = cm ÷ 2.54'],
  mass: ['g = kg × 1000', 'tonnes = kg ÷ 1000', 'lb = g ÷ 453.59237'],
  volume: ['L = ml ÷ 1000', '1 cm³ = 1 ml', 'm³ = L ÷ 1000'],
  temperature: ['°F = (°C × 9/5) + 32', '°C = (°F - 32) × 5/9', 'K = °C + 273.15'],
  time: ['minutes = seconds ÷ 60', 'hours = minutes ÷ 60', 'weeks = days ÷ 7'],
};

const formatValue = (value: number | null) => {
  if (value === null || Number.isNaN(value)) {
    return '';
  }

  return `${Number(value.toFixed(6))}`;
};

export default function MeasurementConverter({ defaultTab = 'length', className }: MeasurementConverterProps) {
  const [activeTab, setActiveTab] = useState<ConverterTab>(defaultTab);
  const [baseValues, setBaseValues] = useState<Record<ConverterTab, number | null>>({
    length: 1,
    mass: 1,
    volume: 1,
    temperature: 0,
    time: 1,
  });

  const units = useMemo(() => {
    if (activeTab === 'temperature') {
      return [] as LinearUnit[];
    }

    return LINEAR_UNITS[activeTab];
  }, [activeTab]);

  const activeValue = baseValues[activeTab];

  const handleLinearChange = (tab: Exclude<ConverterTab, 'temperature'>, unit: LinearUnit, rawValue: string) => {
    const parsedValue = Number(rawValue);

    setBaseValues((current) => ({
      ...current,
      [tab]: rawValue === '' || Number.isNaN(parsedValue) ? null : parsedValue * unit.toBase,
    }));
  };

  const handleTemperatureChange = (unit: 'c' | 'f' | 'k', rawValue: string) => {
    const parsedValue = Number(rawValue);

    setBaseValues((current) => {
      if (rawValue === '' || Number.isNaN(parsedValue)) {
        return { ...current, temperature: null };
      }

      const celsiusValue = unit === 'c' ? parsedValue : unit === 'f' ? ((parsedValue - 32) * 5) / 9 : parsedValue - 273.15;
      return { ...current, temperature: celsiusValue };
    });
  };

  return (
    <div className={cn('rounded-2xl border border-slate-200 bg-white shadow-sm', className)}>
      <div className="border-b border-slate-100 px-4 py-3 sm:px-6">
        <h3 className="text-lg font-semibold text-slate-900">Measurement Converter</h3>
        <p className="mt-1 text-sm text-slate-500">Type in any unit field and all matching units update live.</p>
      </div>

      <div className="space-y-6 p-4 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {([
            { key: 'length', label: 'Length' },
            { key: 'mass', label: 'Mass' },
            { key: 'volume', label: 'Volume' },
            { key: 'temperature', label: 'Temperature' },
            { key: 'time', label: 'Time' },
          ] as const).map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                activeTab === tab.key ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {activeTab === 'temperature'
                ? [
                    { key: 'c' as const, label: 'Celsius (°C)', value: activeValue, convert: (value: number) => value },
                    { key: 'f' as const, label: 'Fahrenheit (°F)', value: activeValue, convert: (value: number) => (value * 9) / 5 + 32 },
                    { key: 'k' as const, label: 'Kelvin (K)', value: activeValue, convert: (value: number) => value + 273.15 },
                  ].map((unit) => (
                    <label key={unit.key} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <span className="text-sm font-medium text-slate-700">{unit.label}</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        value={formatValue(unit.value === null ? null : unit.convert(unit.value))}
                        onChange={(event) => handleTemperatureChange(unit.key, event.target.value)}
                        className="mt-3 w-full rounded-xl border border-slate-200 px-3 py-3 text-lg font-semibold text-slate-900 outline-none"
                      />
                    </label>
                  ))
                : units.map((unit) => (
                    <label key={unit.key} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <span className="text-sm font-medium text-slate-700">{unit.label}</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        value={formatValue(activeValue === null ? null : activeValue / unit.toBase)}
                        onChange={(event) => handleLinearChange(activeTab as Exclude<ConverterTab, 'temperature'>, unit, event.target.value)}
                        className="mt-3 w-full rounded-xl border border-slate-200 px-3 py-3 text-lg font-semibold text-slate-900 outline-none"
                      />
                    </label>
                  ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h4 className="text-sm font-semibold text-slate-900">Active category</h4>
              <p className="mt-2 text-sm capitalize text-slate-600">{activeTab}</p>
              <p className="mt-3 text-sm text-slate-500">
                {activeTab === 'temperature'
                  ? 'Temperature uses direct formulas instead of a single multiplication factor.'
                  : 'The converter stores one base unit for the current category and recalculates all related units from it.'}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h4 className="text-sm font-semibold text-slate-900">Useful formulas</h4>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                {FORMULAS[activeTab].map((formula) => (
                  <div key={formula} className="rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                    {formula}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
