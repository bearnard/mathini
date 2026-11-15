// A linked child's progress for a PARENT, from the same ProgressResponse the learner's own page gets (ADR 0005). Every number is the server's; this
// only formats it. The cards are the learner's own cards (ExamCard, SubjectCard, TestsCard, RetentionCard) in a third-person, read-only voice
// (`who` = the child's name), laid out on the dashboard kit grid: one column on a phone, two from md, three from xl.
import type { ProgressResponse } from '../../lib/shared/progressTypes';
import { DashboardGrid, GridItem, SectionCard, numText, pctText } from '../dashboard';
import { ExamCard, RetentionCard, SubjectCard } from '../progress/ProgressCards';
import { TestsCard } from '../progress/ProgressView';
import { shortDate } from '../progress/format';

/** The last practice sessions: when, which topic, and how it went. */
export function RecentActivityCard({ p }: { p: ProgressResponse }) {
  const list = p.recentSessions ?? [];
  return (
    <SectionCard title="Recent activity" id="recent-activity">
      {list.length === 0 ? (
        <p className="text-slate-700">No practice sessions yet.</p>
      ) : (
        <ul>
          {list.map((r, i) => (
            <li key={`${r.at}-${i}`} className="flex items-center justify-between gap-3 border-t border-slate-100 py-2 first:border-t-0">
              <div className="min-w-0">
                <p className="break-words font-bold text-slate-800">{r.label}</p>
                <p className="text-sm text-slate-600">{shortDate(r.at)}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-lg font-extrabold text-slate-900">{pctText(r.scorePct)}</p>
                <p className="text-xs text-slate-600">{numText(r.correct)} of {numText(r.answered)} right</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </SectionCard>
  );
}

export function NextStepSummary({ p, who }: { p: ProgressResponse; who: string }) {
  return (
    <SectionCard title={`How to help ${who}`} id="next-step">
      <p className="font-bold text-slate-900">{p.nextStep.title}</p>
      <p className="mt-1 text-slate-700">{p.nextStep.reason}</p>
    </SectionCard>
  );
}

/** Everything under the child's header strip, as a responsive grid. Pure: no state, so it renders on the server as well. */
export function ChildProgressCards({ p, who }: { p: ProgressResponse; who: string }) {
  return (
    <DashboardGrid>
      <GridItem span="wide"><ExamCard exam={p.exam} who={who} /></GridItem>
      <GridItem><NextStepSummary p={p} who={who} /></GridItem>
      <GridItem><RecentActivityCard p={p} /></GridItem>
      {p.subjects.map((s) => <GridItem key={s.subject}><SubjectCard s={s} who={who} /></GridItem>)}
      <GridItem span="wide"><TestsCard tests={p.tests} series={p.testSeries} who={who} /></GridItem>
      <GridItem><RetentionCard r={p.retention} days={p.consistency.daysPractisedLast14} streak={p.consistency.streakDays} who={who} /></GridItem>
    </DashboardGrid>
  );
}
