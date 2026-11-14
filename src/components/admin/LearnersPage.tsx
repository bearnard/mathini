'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import FilterBar from './FilterBar';
import { formatDay, formatInt, formatPercent } from './format';
import { plural } from './names';
import { shellRecordingNote } from './coverage';
import { useAdminData } from './useAdminData';
import type { LearnerSort, LearnersData } from '../../lib/server/admin/learners';

const COLUMNS: { key: LearnerSort | 'consent' | 'city'; label: string; sort?: LearnerSort; align?: 'left' | 'right' }[] = [
  { key: 'nickname', label: 'Nickname', sort: 'nickname', align: 'left' },
  { key: 'grade', label: 'Grade', sort: 'grade' },
  { key: 'consent', label: 'Parent agreement' },
  { key: 'city', label: 'Last city', align: 'left' },
  { key: 'first_seen', label: 'First seen', sort: 'first_seen' },
  { key: 'last_seen', label: 'Last seen', sort: 'last_seen' },
  { key: 'questions', label: 'Questions', sort: 'questions' },
  { key: 'accuracy', label: 'Accuracy', sort: 'accuracy' },
  { key: 'xp', label: 'XP', sort: 'xp' },
  { key: 'badges', label: 'Badges', sort: 'badges' },
];

export default function LearnersPage() {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const sort = (sp.get('sort') as LearnerSort) || 'last_seen';
  const dir = sp.get('dir') === 'asc' ? 'asc' : 'desc';
  const urlQ = sp.get('q') ?? '';
  const [q, setQ] = useState(urlQ);
  const [withNames, setWithNames] = useState(false);

  const update = (changes: Record<string, string | null>) => {
    const next = new URLSearchParams(sp.toString());
    for (const [k, v] of Object.entries(changes)) {
      if (v === null || v === '') next.delete(k);
      else next.set(k, v);
    }
    next.delete('deleted');
    const s = next.toString();
    router.replace(s ? `${pathname}?${s}` : pathname, { scroll: false });
  };

  // Debounced search -> URL
  useEffect(() => {
    if (q === urlQ) return;
    const t = setTimeout(() => update({ q: q.trim() || null }), 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  const filterQs = useMemo(() => {
    const p = new URLSearchParams();
    for (const k of ['range', 'from', 'to', 'grade', 'subject']) {
      const v = sp.get(k);
      if (v) p.set(k, v);
    }
    return p;
  }, [sp]);
  const apiQs = useMemo(() => {
    const p = new URLSearchParams(filterQs);
    if (urlQ) p.set('search', urlQ);
    p.set('sort', sort);
    p.set('dir', dir);
    return p.toString();
  }, [filterQs, urlQ, sort, dir]);
  const csvHref = useMemo(() => {
    const p = new URLSearchParams(apiQs);
    p.set('format', 'csv');
    if (withNames) p.set('names', '1');
    return `/api/admin/learners?${p.toString()}`;
  }, [apiQs, withNames]);

  const state = useAdminData<LearnersData>('/api/admin/learners', apiQs);
  const overview = useAdminData<{ options: { subjects: string[] }; recordedSince: string | null }>('/api/admin/overview', filterQs.toString());
  const subjects = overview.status === 'ok' ? overview.data.options.subjects : [];

  const detailQs = filterQs.toString();
  return (
    <main style={{ maxWidth: 1180, margin: '0 auto', padding: '20px 16px 48px', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <header>
        <h1 style={{ fontSize: 26, fontWeight: 800 }}>Learners</h1>
        <p className="admin-muted" style={{ fontSize: 13, marginTop: 2 }}>
          Nicknames only. Real names and schools are never shown in this list; open a learner to reveal them deliberately.
        </p>
      </header>

      {sp.get('deleted') === '1' && (
        <div role="status" className="admin-card" style={{ padding: 12, fontSize: 14 }}>
          Learner deleted. They and the data linked to them are gone.
        </div>
      )}

      <FilterBar subjects={subjects} />
      <p className="admin-muted" style={{ fontSize: 12, marginTop: -6, lineHeight: 1.5 }}>
        The date range, grade and subject filters apply to the learners listed (grade) and to their question counts and accuracy.
      </p>

      <section className="admin-card" style={{ padding: 16 }} aria-label="Learners">
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <label className="admin-secondary" style={{ fontSize: 13 }}>
            Search nickname{' '}
            <input type="search" className="admin-input" value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. lion" style={{ minWidth: 200 }} />
          </label>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
            <label style={{ fontSize: 13, display: 'flex', gap: 6, alignItems: 'center' }}>
              <input type="checkbox" checked={withNames} onChange={(e) => setWithNames(e.target.checked)} />
              Include real names and school
            </label>
            <a className="admin-btn" href={csvHref} style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }} download>
              Download CSV{withNames ? ' with real names' : ''}
            </a>
          </div>
        </div>
        {withNames && (
          <p role="note" style={{ fontSize: 13, marginTop: 8, padding: '8px 10px', borderRadius: 8, background: 'var(--surface-2)' }}>
            <strong>Personal information about children.</strong> This file will contain real names and schools. Keep it private, share it with no one who does not need it, and delete it when you are done.
          </p>
        )}

        {state.status === 'error' ? (
          <p role="alert" style={{ marginTop: 12 }}>Sorry, the learners could not be loaded.</p>
        ) : state.status === 'loading' ? (
          <p aria-busy="true" style={{ marginTop: 12 }}>Loading…</p>
        ) : (
          <>
            <p className="admin-muted" style={{ fontSize: 12, marginTop: 10 }}>
              Showing {formatInt(state.data.learners.length)} of {plural(state.data.total, 'learner')}.
            </p>
            <div style={{ overflowX: 'auto', marginTop: 6 }}>
              <table className="admin-table">
                <thead>
                  <tr>
                    {COLUMNS.map((c) => (
                      <th key={c.key} scope="col" aria-sort={c.sort && c.sort === sort ? (dir === 'asc' ? 'ascending' : 'descending') : undefined} style={{ textAlign: c.align ?? 'right', whiteSpace: 'nowrap' }}>
                        {c.sort ? (
                          <button type="button" className="admin-th-sort" onClick={() => update({ sort: c.sort!, dir: c.sort === sort && dir === 'desc' ? 'asc' : 'desc' })}>
                            {c.label}
                            {c.sort === sort ? (dir === 'asc' ? ' ▲' : ' ▼') : ''}
                          </button>
                        ) : (
                          c.label
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {state.data.learners.length === 0 ? (
                    <tr><td colSpan={COLUMNS.length} className="admin-muted" style={{ textAlign: 'left' }}>No learners match.</td></tr>
                  ) : (
                    state.data.learners.map((l) => (
                      <tr key={l.id}>
                        <td style={{ textAlign: 'left', fontWeight: 600 }}>
                          <Link className="admin-link" href={`/admin/learners/${l.id}${detailQs ? `?${detailQs}` : ''}`}>{l.nickname}</Link>
                        </td>
                        <td>{l.grade}</td>
                        <td>{l.consented ? <span title="A parent or guardian agreed">✓ yes</span> : <span className="admin-muted" title="No agreement on file">– no</span>}</td>
                        <td style={{ textAlign: 'left' }} className={l.lastCity ? undefined : 'admin-muted'}>{l.lastCity ?? 'not recorded'}</td>
                        <td style={{ whiteSpace: 'nowrap' }}>{formatDay(l.firstSeen)}</td>
                        <td style={{ whiteSpace: 'nowrap' }}>{formatDay(l.lastSeen)}</td>
                        <td style={{ fontVariantNumeric: 'tabular-nums' }}>{formatInt(l.questions)}</td>
                        <td style={{ fontVariantNumeric: 'tabular-nums' }}>{formatPercent(l.accuracy)}</td>
                        <td style={{ fontVariantNumeric: 'tabular-nums' }}>{formatInt(l.xp)}</td>
                        <td style={{ fontVariantNumeric: 'tabular-nums' }}>{formatInt(l.badges)}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <p className="admin-muted" style={{ fontSize: 12, marginTop: 8, lineHeight: 1.5 }}>
              “Last city” is only recorded for learners whose parent agreed. Questions and accuracy count recorded answers. {shellRecordingNote(overview.status === 'ok' ? overview.data.recordedSince : null)}
            </p>
          </>
        )}
      </section>
    </main>
  );
}
