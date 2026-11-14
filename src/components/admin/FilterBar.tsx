'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const PRESETS = [
  { id: 'today', label: 'Today' },
  { id: '7d', label: '7 days' },
  { id: '30d', label: '30 days' },
  { id: '90d', label: '90 days' },
  { id: 'custom', label: 'Custom' },
] as const;

/** Global filters. They live in the URL (?range=&from=&to=&grade=&subject=) so any view can be bookmarked or shared. */
export default function FilterBar({ subjects }: { subjects: string[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const range = sp.get('range') ?? '30d';
  // Values the API would ignore are treated as "all", so junk in the URL never shows up in a dropdown.
  const g = Number(sp.get('grade'));
  const grade = Number.isInteger(g) && g >= 5 && g <= 12 ? String(g) : '';
  const rawSubject = sp.get('subject') ?? '';
  const subject = /^[a-z0-9-]{1,32}$/.test(rawSubject) ? rawSubject : '';

  const update = (changes: Record<string, string | null>) => {
    const next = new URLSearchParams(sp.toString());
    for (const [k, v] of Object.entries(changes)) {
      if (v === null || v === '') next.delete(k);
      else next.set(k, v);
    }
    if (next.get('range') === '30d') next.delete('range'); // default
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const subjectOptions = Array.from(new Set([...(subject ? [subject] : []), ...subjects])).sort();

  return (
    <div role="group" aria-label="Filters" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
      <div role="group" aria-label="Date range" style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            className="admin-btn"
            aria-pressed={range === p.id}
            onClick={() => update(p.id === 'custom' ? { range: 'custom', from: sp.get('from') ?? '', to: sp.get('to') ?? '' } : { range: p.id, from: null, to: null })}
          >
            {p.label}
          </button>
        ))}
      </div>
      {range === 'custom' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <label className="admin-secondary" style={{ fontSize: 13 }}>
            From{' '}
            <input type="date" className="admin-input" value={sp.get('from') ?? ''} onChange={(e) => update({ range: 'custom', from: e.target.value })} />
          </label>
          <label className="admin-secondary" style={{ fontSize: 13 }}>
            To{' '}
            <input type="date" className="admin-input" value={sp.get('to') ?? ''} onChange={(e) => update({ range: 'custom', to: e.target.value })} />
          </label>
        </div>
      )}
      <select className="admin-input" aria-label="Grade" value={grade} onChange={(e) => update({ grade: e.target.value })}>
        <option value="">All grades</option>
        {[5, 6, 7, 8, 9, 10, 11, 12].map((g) => (
          <option key={g} value={g}>Grade {g}</option>
        ))}
      </select>
      <select className="admin-input" aria-label="Subject" value={subject} onChange={(e) => update({ subject: e.target.value })}>
        <option value="">All subjects</option>
        {subjectOptions.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <div style={{ marginLeft: 'auto' }}>
        <ThemeToggle />
      </div>
    </div>
  );
}
