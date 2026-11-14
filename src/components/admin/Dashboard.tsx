'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import FilterBar from './FilterBar';
import StatTile from './StatTile';
import ActivityCharts, { type Day } from './ActivityCharts';
import WhereCard from './WhereCard';
import WhenCard from './WhenCard';
import WhatCard from './WhatCard';
import FunnelCard from './FunnelCard';
import DevicesCard from './DevicesCard';
import LiveCard from './LiveCard';
import { useAdminData } from './useAdminData';
import { plural } from './names';
import { formatDelta, formatDuration, formatInt, formatPercent, formatPoints, longDate, shortDate, todaySast } from './format';

interface Tile {
  value: number | null;
  prev: number | null;
  delta: number | null;
  spark: (number | null)[];
}
interface OverviewData {
  range: { from: string; to: string; days: number; previousFrom: string; previousTo: string };
  tiles: {
    visitors: Tile & { dntSessions: number };
    learners: Tile;
    signups: Tile;
    questions: Tile;
    accuracy: Tile & { deltaPoints: number | null };
    runs: Tile;
    runScore: Tile & { deltaPoints: number | null };
    sessionSeconds: Tile;
  };
  options: { subjects: string[] };
  consent: { learners: number; consented: number };
  eventsSince: string | null;
}

export default function Dashboard() {
  const sp = useSearchParams();
  // Only the filter parameters are forwarded to the API.
  const qs = useMemo(() => {
    const p = new URLSearchParams();
    for (const k of ['range', 'from', 'to', 'grade', 'subject']) {
      const v = sp.get(k);
      if (v) p.set(k, v);
    }
    return p.toString();
  }, [sp]);

  const overview = useAdminData<OverviewData>('/api/admin/overview', qs);
  const series = useAdminData<{ days: Day[] }>('/api/admin/timeseries', qs);

  const subjects = overview.status === 'ok' ? overview.data.options.subjects : [];

  return (
    <main style={{ maxWidth: 1180, margin: '0 auto', padding: '20px 16px 48px', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <header>
        <h1 style={{ fontSize: 26, fontWeight: 800 }}>Usage console</h1>
        <p className="admin-muted" style={{ fontSize: 13, marginTop: 2 }}>How PrepPals is being used. All dates and times are South Africa time (SAST).</p>
      </header>

      <FilterBar subjects={subjects} />
      {(sp.get('grade') || sp.get('subject')) && (
        <p className="admin-muted" role="note" style={{ fontSize: 12, marginTop: -6, lineHeight: 1.5 }}>
          Grade and subject filters count only activity that is tagged with them: topic opens, practice and recorded answers. General visits and page views carry no grade or subject, so they drop out of visitor, location and visit counts while a filter is on. Practice runs and answers filter fully.
        </p>
      )}

      {overview.status === 'error' ? (
        <div className="admin-card" role="alert" style={{ padding: 20 }}>
          {overview.code === 403 ? 'You are not authorised to view this console.' : 'Sorry, the numbers could not be loaded. Try again in a moment.'}
        </div>
      ) : overview.status === 'loading' ? (
        <div className="admin-card" style={{ padding: 20 }} aria-busy="true">Loading the numbers…</div>
      ) : (
        <Overview data={overview.data} />
      )}

      <LiveCard />

      {series.status === 'ok' ? (
        <ActivityCharts days={series.data.days} partialDate={todaySast()} />
      ) : series.status === 'error' ? null : (
        <div className="admin-card" style={{ padding: 20 }} aria-busy="true">Loading the charts…</div>
      )}

      <WhereCard qs={qs} />
      <WhenCard qs={qs} />
      <WhatCard qs={qs} />
      <FunnelCard qs={qs} />
      <DevicesCard qs={qs} />
    </main>
  );
}

function Overview({ data }: { data: OverviewData }) {
  const t = data.tiles;
  const partial = data.range.to === todaySast();
  const ctx = `vs ${shortDate(data.range.previousFrom)} – ${shortDate(data.range.previousTo)}`;
  const coverage = data.consent.learners > 0 ? data.consent.consented / data.consent.learners : 0;
  const attemptsHelp =
    'Answers recorded for signed-in learners. Grade 6 Natural Sciences, Geography, History and Afrikaans practice does not record answers, so use “Practice runs” for those.';

  return (
    <>
      <section aria-label="Overview" className="admin-tiles">
        <StatTile
          label="Visitors"
          value={formatInt(t.visitors.value)}
          delta={formatDelta(t.visitors.value, t.visitors.prev, t.visitors.delta)}
          deltaContext={ctx}
          spark={t.visitors.spark}
          sparkPartial={partial}
          sparkColor="var(--series-1)"
          footnote={t.visitors.dntSessions > 0 ? `+ ${plural(t.visitors.dntSessions, 'private (Do Not Track) visit')}` : undefined}
          help="Unique devices that visited. A device is a random id kept in the browser, so one person on two devices counts twice. Do Not Track visits have no device id and are counted separately, by visit."
        />
        <StatTile
          label="Active learners"
          value={formatInt(t.learners.value)}
          delta={formatDelta(t.learners.value, t.learners.prev, t.learners.delta)}
          deltaContext={ctx}
          spark={t.learners.spark}
          sparkPartial={partial}
          sparkColor="var(--series-2)"
          help="Signed-in learners with any recorded activity in the period. Activity is only linked to a learner when a parent or guardian has agreed."
        />
        <StatTile
          label="New sign-ups"
          value={formatInt(t.signups.value)}
          delta={formatDelta(t.signups.value, t.signups.prev, t.signups.delta)}
          deltaContext={ctx}
          spark={t.signups.spark}
          sparkPartial={partial}
          sparkColor="var(--text-secondary)"
          help="Accounts created in the period (from the learner records, so it includes sign-ups before tracking began). The subject filter does not apply."
        />
        <StatTile
          label="Questions answered"
          value={formatInt(t.questions.value)}
          delta={formatDelta(t.questions.value, t.questions.prev, t.questions.delta)}
          deltaContext={ctx}
          spark={t.questions.spark}
          sparkPartial={partial}
          sparkColor="var(--text-secondary)"
          help={attemptsHelp}
        />
        <StatTile
          label="Accuracy"
          value={formatPercent(t.accuracy.value)}
          delta={formatPoints(t.accuracy.deltaPoints)}
          deltaContext={ctx}
          spark={t.accuracy.spark}
          sparkPartial={partial}
          sparkColor="var(--text-secondary)"
          help={`Share of recorded answers that were correct. ${attemptsHelp}`}
        />
        <StatTile
          label="Practice runs"
          value={formatInt(t.runs.value)}
          delta={formatDelta(t.runs.value, t.runs.prev, t.runs.delta)}
          deltaContext={ctx}
          spark={t.runs.spark}
          sparkPartial={partial}
          sparkColor="var(--series-3)"
          help="Finished practice runs across ALL topics (a run is one pass through a question set). Counted from usage events, so it also covers anonymous visitors and the Grade 6 subjects that do not record answers. Data starts when tracking started."
        />
        <StatTile
          label="Average run score"
          value={formatPercent(t.runScore.value)}
          delta={formatPoints(t.runScore.deltaPoints)}
          deltaContext={ctx}
          help="Total score divided by total questions across finished practice runs, all topics."
        />
        <StatTile
          label="Average session"
          value={formatDuration(t.sessionSeconds.value)}
          delta={formatDelta(t.sessionSeconds.value, t.sessionSeconds.prev, t.sessionSeconds.delta)}
          deltaContext={ctx}
          help="Time between a visit’s first and last recorded event, for visits with at least two events, counting at most 2 hours per visit."
        />
      </section>

      <section className="admin-card" style={{ padding: 16 }} aria-label="Consent coverage">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: 16, fontWeight: 700 }}>Consent coverage</h2>
          <span style={{ fontVariantNumeric: 'tabular-nums' }}>
            <strong>{formatInt(data.consent.consented)}</strong> of <strong>{formatInt(data.consent.learners)}</strong> learners have parent agreement
          </span>
        </div>
        <div
          role="meter"
          aria-valuemin={0}
          aria-valuemax={data.consent.learners}
          aria-valuenow={data.consent.consented}
          aria-label="Learners with parent agreement"
          style={{ height: 10, borderRadius: 5, background: 'var(--ramp-track)', marginTop: 10, overflow: 'hidden' }}
        >
          <div style={{ width: `${Math.round(coverage * 100)}%`, height: '100%', background: 'var(--ramp-fill)', borderRadius: 5 }} />
        </div>
        <p className="admin-muted" style={{ fontSize: 12, marginTop: 8, lineHeight: 1.5 }}>
          City is shown only for learners whose parent or guardian agreed; everyone else appears by province only. Activity from learners without agreement is not linked to them.{' '}
          {data.eventsSince ? `Usage data (visits, locations, devices) starts ${longDate(data.eventsSince)}.` : 'No usage data has been recorded yet.'}
        </p>
      </section>
    </>
  );
}
