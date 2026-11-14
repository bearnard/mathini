'use client';

import RankedList, { type RankedItem } from './RankedList';
import MockHistogram from './MockHistogram';
import { formatInt, formatPercent, subjectLabel, topicLabel } from './format';
import { useAdminData } from './useAdminData';
import { lowestAccuracy, lowestRunScore, MIN_ANSWERS_FOR_ACCURACY, MIN_RUNS_FOR_SCORE, MIN_SESSIONS_FOR_CONVERSION, type AccuracyRow } from '../../lib/server/admin/contentView';
import type { ContentData } from '../../lib/server/admin/content';

const where = (subject: string | null, grade: number | null) => `${subjectLabel(subject)}${grade ? ` · Grade ${grade}` : ''}`;
const mockName = (t: string) => t.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase());

const accItems = (rows: AccuracyRow[], unit: string): RankedItem[] =>
  rows.map((r, i) => ({ key: `${i}-${r.label.subject}-${r.label.grade}-${r.label.topic}`, label: topicLabel(r.label.topic), sub: `${where(r.label.subject, r.label.grade)} · ${formatInt(r.n)} ${unit}`, value: r.value, text: formatPercent(r.value) }));

export default function WhatCard({ qs }: { qs: string }) {
  const state = useAdminData<ContentData>('/api/admin/content', qs);
  return (
    <section className="admin-card" style={{ padding: 16 }} aria-label="What learners practise">
      <h2 style={{ fontSize: 18, fontWeight: 700 }}>What</h2>
      <p className="admin-muted" style={{ fontSize: 12, marginTop: 4, lineHeight: 1.5 }}>
        Two sources, shown side by side and never added together. <strong>Recorded answers</strong> come from signed-in learners and exist for every subject except Grade 6 Natural Sciences, Geography, History and Afrikaans. <strong>Practice runs</strong> come from usage events for every topic (anonymous visitors too) but only since tracking began.
      </p>
      {state.status === 'error' ? (
        <p role="alert" style={{ marginTop: 12 }}>Sorry, this could not be loaded.</p>
      ) : state.status === 'loading' ? (
        <p aria-busy="true" style={{ marginTop: 12 }}>Loading…</p>
      ) : (
        <Body data={state.data} />
      )}
    </section>
  );
}

function Body({ data }: { data: ContentData }) {
  const topAnswers: RankedItem[] = data.answers.slice(0, 8).map((r, i) => ({ key: `a${i}`, label: topicLabel(r.topic), sub: `${where(r.subject, r.grade)} · ${formatInt(r.learners)} learners`, value: r.questions, text: `${formatInt(r.questions)} answers` }));
  const topRuns: RankedItem[] = data.runs.slice(0, 8).map((r, i) => ({ key: `r${i}`, label: topicLabel(r.topic), sub: `${where(r.subject, r.grade)} · ${formatInt(r.practisers)} devices`, value: r.runs, text: `${formatInt(r.runs)} runs` }));
  const struggleAnswers = lowestAccuracy(data.answers);
  const struggleRuns = lowestRunScore(data.runs);
  const conv = data.conversion.filter((c) => c.learnSessions + c.practiceSessions >= MIN_SESSIONS_FOR_CONVERSION).slice(0, 12);

  const col = (title: string, node: React.ReactNode, key?: string) => (
    <div key={key} style={{ minWidth: 0 }}>
      <h3 style={{ fontSize: 14, fontWeight: 700 }}>{title}</h3>
      {node}
    </div>
  );
  const grid = { display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: 10 } as const;

  return (
    <>
      <h3 style={{ fontSize: 15, fontWeight: 700, marginTop: 14 }}>Most practised topics</h3>
      <div style={grid}>
        {col('By recorded answers', <RankedList items={topAnswers} empty="No recorded answers in this period." />)}
        {col('By practice runs', <RankedList items={topRuns} color="var(--series-3)" empty="No finished practice runs in this period." />)}
      </div>

      <h3 style={{ fontSize: 15, fontWeight: 700, marginTop: 22 }}>Where learners struggle</h3>
      <p className="admin-muted" style={{ fontSize: 12, marginTop: 2 }}>Lowest first. Only topics with enough data are listed: {MIN_ANSWERS_FOR_ACCURACY}+ answers, or {MIN_RUNS_FOR_SCORE}+ runs.</p>
      <div style={grid}>
        {col('Accuracy of recorded answers', <RankedList items={accItems(struggleAnswers, 'answers')} max={1} empty="No topic has enough recorded answers yet." />)}
        {col('Average score of practice runs', <RankedList items={accItems(struggleRuns, 'runs')} max={1} color="var(--series-3)" empty="No topic has enough finished runs yet." />)}
      </div>

      <h3 style={{ fontSize: 15, fontWeight: 700, marginTop: 22 }}>Learn → practice</h3>
      <p className="admin-muted" style={{ fontSize: 12, marginTop: 2, lineHeight: 1.5 }}>
        Per visit and topic. “Went on to practise” = after finishing the learn slides, started practice in the same visit. “Finished the run” = of the visits that started practice, how many completed the question set. Topics with fewer than {MIN_SESSIONS_FOR_CONVERSION} visits are left out.
      </p>
      <div style={{ overflowX: 'auto', marginTop: 6 }}>
        <table className="admin-table">
          <thead>
            <tr>
              <th scope="col" style={{ textAlign: 'left' }}>Topic</th>
              <th scope="col">Finished learn</th>
              <th scope="col">Went on to practise</th>
              <th scope="col">Started practice</th>
              <th scope="col">Finished the run</th>
            </tr>
          </thead>
          <tbody>
            {conv.length === 0 ? (
              <tr><td colSpan={5} className="admin-muted" style={{ textAlign: 'left' }}>Not enough visits in this period.</td></tr>
            ) : (
              conv.map((c, i) => (
                <tr key={`${i}-${c.subject}-${c.grade}-${c.topic}`}>
                  <td style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 600 }}>{topicLabel(c.topic)}</div>
                    <div className="admin-muted" style={{ fontSize: 12 }}>{where(c.subject, c.grade)}</div>
                  </td>
                  <td style={{ fontVariantNumeric: 'tabular-nums' }}>{formatInt(c.learnSessions)}</td>
                  <td style={{ fontVariantNumeric: 'tabular-nums' }}>{c.learnSessions > 0 ? `${formatPercent(c.thenPractised / c.learnSessions)}` : '–'}</td>
                  <td style={{ fontVariantNumeric: 'tabular-nums' }}>{formatInt(c.practiceSessions)}</td>
                  <td style={{ fontVariantNumeric: 'tabular-nums' }}>{c.practiceSessions > 0 ? formatPercent(c.finished / c.practiceSessions) : '–'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <h3 style={{ fontSize: 15, fontWeight: 700, marginTop: 22 }}>Mock-test scores</h3>
      <p className="admin-muted" style={{ fontSize: 12, marginTop: 2 }}>First-attempt score of each finished mock test, before the second try.</p>
      {data.mock.length === 0 ? (
        <p className="admin-muted" style={{ fontSize: 13, marginTop: 6 }}>No mock tests finished in this period.</p>
      ) : (
        <div style={grid}>
          {data.mock.map((m) =>
            col(
              `${mockName(m.test)} · ${formatInt(m.tests)} ${m.tests === 1 ? 'test' : 'tests'}${m.average !== null ? ` · average ${m.average.toFixed(1)} / ${m.total}` : ''}`,
              <MockHistogram histogram={m.histogram} total={m.total} average={m.average} />,
              m.test,
            ),
          )}
        </div>
      )}
    </>
  );
}
