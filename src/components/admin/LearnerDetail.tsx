'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import FilterBar from './FilterBar';
import RankedList from './RankedList';
import StatTile from './StatTile';
import { countryName, eventLabel, formatDateTime, formatDay, formatInt, formatPercent, longDate, shortDate } from './format';
import { plural, subjectTitle, topicInfo, topicSubline } from './names';
import { shellRecordingNote } from './coverage';
import { useAdminData } from './useAdminData';
import type { LearnerDetail as Detail } from '../../lib/server/admin/learners';

const NONE = { text: '', direction: 'none' } as const;

interface PrivateInfo { realName: string; school: string | null; age: number | null }

export default function LearnerDetail({ id }: { id: string }) {
  const sp = useSearchParams();
  const qs = useMemo(() => {
    const p = new URLSearchParams();
    for (const k of ['range', 'from', 'to', 'grade', 'subject']) {
      const v = sp.get(k);
      if (v) p.set(k, v);
    }
    return p.toString();
  }, [sp]);
  const state = useAdminData<Detail>(`/api/admin/learners/${encodeURIComponent(id)}`, qs);
  const overview = useAdminData<{ options: { subjects: string[] }; recordedSince: string | null }>('/api/admin/overview', qs);
  const subjects = overview.status === 'ok' ? overview.data.options.subjects : [];
  const back = `/admin/learners${qs ? `?${qs}` : ''}`;

  return (
    <main style={{ maxWidth: 1180, margin: '0 auto', padding: '20px 16px 48px', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Link className="admin-link" href={back} style={{ fontSize: 14 }}>← All learners</Link>
      {state.status === 'error' ? (
        <div className="admin-card" role="alert" style={{ padding: 20 }}>
          {state.code === 404 ? 'This learner was not found. They may have been deleted.' : 'Sorry, this learner could not be loaded.'}
        </div>
      ) : state.status === 'loading' ? (
        <div className="admin-card" style={{ padding: 20 }} aria-busy="true">Loading…</div>
      ) : (
        <>
          <Header d={state.data} id={id} />
          <FilterBar subjects={subjects} />
          <p className="admin-muted" style={{ fontSize: 12, marginTop: -6 }}>The date range and subject filters apply to the accuracy chart, topics and weak sections.</p>
          <Body d={state.data} recordingNote={shellRecordingNote(overview.status === 'ok' ? overview.data.recordedSince : null)} />
          <DangerZone d={state.data} id={id} />
        </>
      )}
    </main>
  );
}

function Header({ d, id }: { d: Detail; id: string }) {
  const [info, setInfo] = useState<PrivateInfo | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  const reveal = async () => {
    setBusy(true);
    setErr('');
    try {
      const res = await fetch(`/api/admin/learners/${encodeURIComponent(id)}/private`, { cache: 'no-store' });
      if (!res.ok) throw new Error('bad');
      setInfo((await res.json()) as PrivateInfo);
    } catch {
      setErr('Sorry, the private details could not be loaded.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <header className="admin-card" style={{ padding: 16 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
        <h1 style={{ fontSize: 26, fontWeight: 800 }}>{d.nickname}</h1>
        <span className="admin-secondary">Grade {d.grade}</span>
        <span className="admin-muted" style={{ fontSize: 13 }}>
          First seen {formatDay(d.firstSeen)} · last seen {formatDateTime(d.lastSeen)}
        </span>
      </div>
      <p style={{ fontSize: 14, marginTop: 6 }}>
        {d.consent.agreedAt ? (
          <>Parent or guardian agreed on {formatDay(d.consent.agreedAt)} <span className="admin-muted">(notice {d.consent.version ?? 'unknown'})</span></>
        ) : (
          <span className="admin-secondary">No parent agreement on file: this learner’s activity is not linked to them and no city is recorded.</span>
        )}
      </p>
      <div style={{ marginTop: 10 }}>
        {info ? (
          <div role="group" aria-label="Private details" style={{ padding: 12, borderRadius: 10, background: 'var(--surface-2)', fontSize: 14 }}>
            <strong>Private details</strong> <span className="admin-muted">(personal information about a child)</span>
            <dl style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px 12px', marginTop: 6 }}>
              <dt className="admin-muted">Real name</dt><dd>{info.realName}</dd>
              <dt className="admin-muted">School</dt><dd>{info.school || 'not given'}</dd>
              <dt className="admin-muted">Age</dt><dd>{info.age ?? 'not given'}</dd>
            </dl>
            <button type="button" className="admin-btn" style={{ marginTop: 8 }} onClick={() => setInfo(null)}>Hide private details</button>
          </div>
        ) : (
          <>
            <button type="button" className="admin-btn" onClick={reveal} disabled={busy}>{busy ? 'Loading…' : 'Show private details'}</button>
            <span className="admin-muted" style={{ fontSize: 12, marginLeft: 8 }}>Real name, school and age are hidden until you ask (so a shared screen does not reveal them).</span>
            {err && <p role="alert" style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 6 }}>{err}</p>}
          </>
        )}
      </div>
    </header>
  );
}

function Body({ d, recordingNote }: { d: Detail; recordingNote: string }) {
  const acc = d.totals.questions > 0 ? d.totals.correct / d.totals.questions : null;
  const series = d.accuracy.map((p) => ({ date: p.date, accuracy: p.questions > 0 ? Math.round((p.correct / p.questions) * 1000) / 10 : null, questions: p.questions }));
  const hasSeries = series.some((p) => p.accuracy !== null);
  const topics = [...d.topics].sort((a, b) => a.correct / a.questions - b.correct / b.questions || b.questions - a.questions).slice(0, 12);
  const tickEvery = Math.max(1, Math.ceil(series.length / 8));

  return (
    <>
      <section aria-label="Summary" className="admin-tiles">
        <StatTile label="XP" value={formatInt(d.xp)} delta={NONE} deltaContext="" help="Experience points earned from recorded answers." />
        <StatTile label="Questions answered" value={formatInt(d.totals.questions)} delta={NONE} deltaContext="" help={`All recorded answers, ever (not limited to the date range). ${recordingNote}`} />
        <StatTile label="Accuracy" value={formatPercent(acc)} delta={NONE} deltaContext="" help="Share of all recorded answers that were correct." />
        <StatTile label="Badges" value={formatInt(d.badges.length)} delta={NONE} deltaContext="" help="Badges earned." />
      </section>

      <section className="admin-card" style={{ padding: 16 }} aria-label="Accuracy over time">
        <h2 style={{ fontSize: 18, fontWeight: 700 }}>Accuracy over time</h2>
        <p className="admin-muted" style={{ fontSize: 12, marginTop: 4 }}>Share of recorded answers that were correct, per day in the selected range. Days without answers are gaps.</p>
        {hasSeries ? (
          <div style={{ height: 200, marginTop: 8 }} role="img" aria-label="Daily accuracy for this learner">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={series} margin={{ top: 8, right: 10, bottom: 0, left: 0 }}>
                <CartesianGrid vertical={false} stroke="var(--grid)" />
                <XAxis dataKey="date" tickFormatter={shortDate} interval={tickEvery - 1} tick={{ fill: 'var(--text-muted)', fontSize: 11 }} tickLine={false} axisLine={{ stroke: 'var(--grid)' }} />
                <YAxis domain={[0, 100]} ticks={[0, 50, 100]} width={38} tickFormatter={(v) => `${v}%`} tick={{ fill: 'var(--text-muted)', fontSize: 11 }} tickLine={false} axisLine={false} />
                <Tooltip
                  isAnimationActive={false}
                  cursor={{ stroke: 'var(--text-muted)', strokeWidth: 1 }}
                  content={({ active, payload }) => {
                    const p = payload?.[0]?.payload as { date: string; accuracy: number | null; questions: number } | undefined;
                    if (!active || !p) return null;
                    return (
                      <div className="admin-card" style={{ padding: '8px 10px', fontSize: 13, boxShadow: '0 4px 14px rgba(0,0,0,.15)' }}>
                        <div className="admin-secondary" style={{ fontWeight: 600 }}>{longDate(p.date)}</div>
                        <div>{p.accuracy === null ? 'No answers' : <><strong>{p.accuracy}%</strong> <span className="admin-muted">of {plural(p.questions, 'answer')}</span></>}</div>
                      </div>
                    );
                  }}
                />
                <Line type="linear" dataKey="accuracy" stroke="var(--series-1)" strokeWidth={2} connectNulls={false} dot={{ r: 4, fill: 'var(--series-1)', stroke: 'var(--surface-1)', strokeWidth: 2 }} activeDot={{ r: 5 }} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p className="admin-muted" style={{ marginTop: 10, fontSize: 14 }}>No recorded answers in this range.</p>
        )}
      </section>

      <section className="admin-card" style={{ padding: 16 }} aria-label="Topics and weak sections">
        <h2 style={{ fontSize: 18, fontWeight: 700 }}>Topics and weak sections</h2>
        <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: 8 }}>
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700 }}>Accuracy by topic (lowest first)</h3>
            <RankedList
              max={1}
              empty="No recorded answers in this range."
              items={topics.map((t, i) => ({
                key: `${i}-${t.task}`,
                label: topicInfo(t.grade, t.task).title,
                sub: `${topicSubline(t.grade, t.task, t.subject)} · ${plural(t.questions, 'answer')}`,
                value: t.correct / t.questions,
                text: formatPercent(t.correct / t.questions),
              }))}
            />
          </div>
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700 }}>Weak sections</h3>
            <p className="admin-muted" style={{ fontSize: 12, marginTop: 2 }}>Sections with 4 or more answers and under 60% correct.</p>
            {d.weakSections.length === 0 ? (
              <p className="admin-muted" style={{ fontSize: 13, marginTop: 8 }}>No weak sections found.</p>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {d.weakSections.map((w, i) => (
                  <li key={i} style={{ fontSize: 13 }}>
                    <strong>{w.section === 'general' ? 'General' : w.section}</strong> <span className="admin-muted">in {topicInfo(w.grade, w.task).title} · {w.correct} of {plural(w.questions, 'answer')} correct</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }} aria-label="Places and devices">
        <div className="admin-card" style={{ padding: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>Places seen</h2>
          <p className="admin-muted" style={{ fontSize: 12, marginTop: 4 }}>Only recorded with parent agreement. Approximate (about 10 km).</p>
          {d.locations.length === 0 ? (
            <p className="admin-muted" style={{ fontSize: 13, marginTop: 8 }}>No places recorded.</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
              {d.locations.map((l, i) => (
                <li key={i}>
                  <strong>{l.city ?? l.region ?? countryName(l.country)}</strong>
                  <span className="admin-muted"> · {[l.city ? l.region : null, countryName(l.country)].filter(Boolean).join(' · ')} · {plural(l.events, 'event')} · last {formatDateTime(l.lastSeen)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="admin-card" style={{ padding: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>Devices</h2>
          {d.devices.length === 0 ? (
            <p className="admin-muted" style={{ fontSize: 13, marginTop: 8 }}>No devices recorded.</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
              {d.devices.map((v, i) => (
                <li key={i}>
                  <strong>{[v.browser, v.os].filter(Boolean).join(' on ') || 'Unknown'}</strong>
                  <span className="admin-muted"> · {v.device ?? 'unknown type'} · {plural(v.events, 'event')} · last {formatDateTime(v.lastSeen)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="admin-card" style={{ padding: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>Badges</h2>
          {d.badges.length === 0 ? (
            <p className="admin-muted" style={{ fontSize: 13, marginTop: 8 }}>No badges yet.</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {d.badges.map((b) => (
                <li key={b.id} style={{ padding: '4px 10px', borderRadius: 14, background: 'var(--surface-2)', fontSize: 13 }} title={`Earned ${formatDay(b.earnedAt)}`}>
                  <strong>{b.title}</strong> <span className="admin-muted">{b.tier}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="admin-card" style={{ padding: 16 }} aria-label="Activity timeline">
        <h2 style={{ fontSize: 18, fontWeight: 700 }}>Activity timeline</h2>
        <p className="admin-muted" style={{ fontSize: 12, marginTop: 4 }}>The latest 80 recorded actions, newest first (only actions linked to this learner).</p>
        {d.timeline.length === 0 ? (
          <p className="admin-muted" style={{ fontSize: 13, marginTop: 8 }}>No activity is linked to this learner.</p>
        ) : (
          <ol style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13 }}>
            {d.timeline.map((e, i) => (
              <li key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 10 }}>
                <span className="admin-muted" style={{ whiteSpace: 'nowrap' }}>{formatDateTime(e.ts)}</span>
                <span>
                  {eventLabel(e.type)}
                  {e.topic && <span className="admin-muted"> · {topicInfo(e.grade, e.topic).title}{e.subject ? ` · ${subjectTitle(e.subject, e.grade)}` : ''}</span>}
                </span>
              </li>
            ))}
          </ol>
        )}
      </section>
    </>
  );
}

function DangerZone({ d, id }: { d: Detail; id: string }) {
  const router = useRouter();
  const [typed, setTyped] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const matches = typed === d.nickname;

  const remove = async () => {
    if (!matches) return;
    setBusy(true);
    setErr('');
    try {
      const res = await fetch(`/api/admin/learners/${encodeURIComponent(id)}/delete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Admin-Action': 'delete' },
        body: JSON.stringify({ confirm: typed }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? 'Delete failed');
      }
      router.push('/admin/learners?deleted=1');
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Delete failed');
      setBusy(false);
    }
  };

  return (
    <section className="admin-card" style={{ padding: 16, borderColor: '#d03b3b' }} aria-label="Delete learner">
      <h2 style={{ fontSize: 18, fontWeight: 700 }}>Delete learner</h2>
      <p style={{ fontSize: 14, marginTop: 6, lineHeight: 1.5 }}>
        Permanently deletes this learner and everything linked to them: their account, answers, XP, badges and the activity recorded against them. <strong>This cannot be undone.</strong> Use it for a deletion request from a parent or guardian.
      </p>
      <p className="admin-muted" style={{ fontSize: 12, marginTop: 4, lineHeight: 1.5 }}>
        Activity that was recorded before they signed in (not linked to them) stays. The deletion is logged as a count of rows, with your email and the time, but without their name or nickname.
      </p>
      <label style={{ display: 'block', marginTop: 12, fontSize: 13 }}>
        Type the nickname <strong>{d.nickname}</strong> to confirm
        <br />
        <input className="admin-input" value={typed} onChange={(e) => setTyped(e.target.value)} autoComplete="off" spellCheck={false} aria-label="Type the nickname to confirm deletion" style={{ marginTop: 6, minWidth: 240 }} />
      </label>
      <div style={{ marginTop: 10 }}>
        <button type="button" className="admin-btn-danger" disabled={!matches || busy} onClick={remove}>{busy ? 'Deleting…' : 'Delete learner permanently'}</button>
      </div>
      {err && <p role="alert" style={{ fontSize: 13, marginTop: 8, fontWeight: 600 }}>{err}</p>}
    </section>
  );
}
