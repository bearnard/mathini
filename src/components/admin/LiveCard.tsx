'use client';

import { useEffect, useState } from 'react';
import { countryName, formatAge } from './format';
import { plural, subjectTitle, topicInfo } from './names';
import type { LiveData } from '../../lib/server/admin/live';

const REFRESH_MS = 30_000;

/** Who is active in the last 5 minutes. Refreshes every 30 s while the tab is visible. Filters do not apply. */
export default function LiveCard() {
  const [data, setData] = useState<LiveData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let alive = true;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const ctrl = new AbortController();
    const load = async () => {
      try {
        const res = await fetch('/api/admin/live', { cache: 'no-store', signal: ctrl.signal });
        if (!res.ok) throw new Error('bad');
        const json = (await res.json()) as LiveData;
        if (alive) {
          setData(json);
          setError(false);
        }
      } catch (e) {
        if ((e as { name?: string }).name !== 'AbortError' && alive) setError(true);
      } finally {
        if (alive) timer = setTimeout(load, REFRESH_MS);
      }
    };
    void load();
    return () => {
      alive = false;
      ctrl.abort();
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <section className="admin-card" style={{ padding: 16 }} aria-label="Live activity" aria-live="polite">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700 }}>Live</h2>
        <span className="admin-muted" style={{ fontSize: 12 }}>Last 5 minutes · refreshes every 30 s · filters do not apply</span>
      </div>
      {error && !data ? (
        <p role="alert" style={{ marginTop: 10 }}>Sorry, live activity could not be loaded.</p>
      ) : !data ? (
        <p aria-busy="true" style={{ marginTop: 10 }}>Loading…</p>
      ) : data.active === 0 ? (
        <p className="admin-muted" style={{ marginTop: 10, fontSize: 14 }}>Nobody is active right now.</p>
      ) : (
        <>
          <p style={{ marginTop: 6, fontSize: 14 }}>
            <strong>{plural(data.active, 'active visit')}</strong>
            <span className="admin-muted"> · {plural(data.learners, 'learner')} signed in, {data.anonymous} anonymous</span>
          </p>
          <div style={{ overflowX: 'auto', marginTop: 6 }}>
            <table className="admin-table">
              <thead>
                <tr>
                  <th scope="col" style={{ textAlign: 'left' }}>Who</th>
                  <th scope="col" style={{ textAlign: 'left' }}>Where</th>
                  <th scope="col" style={{ textAlign: 'left' }}>Doing</th>
                  <th scope="col">Last activity</th>
                </tr>
              </thead>
              <tbody>
                {data.sessions.map((s, i) => {
                  const place = s.city ?? s.region ?? (s.country ? countryName(s.country) : 'Unknown');
                  const topic = s.topic ? topicInfo(s.grade, s.topic).title : null;
                  return (
                    <tr key={i}>
                      <td style={{ textAlign: 'left', fontWeight: 600 }}>
                        {s.nickname ?? 'Anonymous visitor'}
                        {s.device && <span className="admin-muted" style={{ fontWeight: 400, fontSize: 12 }}> · {s.device}</span>}
                      </td>
                      <td style={{ textAlign: 'left' }}>{place}</td>
                      <td style={{ textAlign: 'left' }}>
                        {topic ? (
                          <>
                            {topic}
                            <span className="admin-muted" style={{ fontSize: 12 }}> · {subjectTitle(s.subject, s.grade)}{s.grade ? ` · Grade ${s.grade}` : ''}</span>
                          </>
                        ) : (
                          <span className="admin-muted">Browsing</span>
                        )}
                      </td>
                      <td style={{ whiteSpace: 'nowrap' }}>{formatAge(s.ageSeconds)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {data.active > data.sessions.length && <p className="admin-muted" style={{ fontSize: 12, marginTop: 6 }}>Showing the {data.sessions.length} most recent of {data.active}.</p>}
        </>
      )}
    </section>
  );
}
