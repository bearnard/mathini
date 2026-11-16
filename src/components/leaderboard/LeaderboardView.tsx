'use client';

import { useState, useEffect } from 'react';
import { Trophy, Flame, Star } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { AreaResponse, LeaderboardOverview, PeopleBoard } from '../../lib/shared/leaderboardTypes';

type Tab = 'class' | 'school' | 'area';

async function getJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url);
    return res.ok ? ((await res.json()) as T) : null;
  } catch {
    return null;
  }
}

const Spin = () => (
  <div className="flex justify-center py-12">
    <span className="h-8 w-8 animate-spin rounded-full border-4 border-brand-blue/30 border-t-brand-blue" />
  </div>
);

function Row({ rank, name, avatar, value, unit, mine }: { rank: number | null; name: string; avatar?: string; value: string; unit: string; mine: boolean }) {
  return (
    <li
      className={cn(
        'flex items-center gap-3 rounded-xl border px-3 py-3',
        mine ? 'border-brand-yellow/40 bg-brand-yellow/20 ring-1 ring-brand-yellow/50' : rank === 1 ? 'border-amber-200 bg-amber-50' : 'border-slate-100 bg-white',
      )}
    >
      <div className="w-9 shrink-0 text-center text-lg font-bold text-slate-400">{rank === null ? '–' : rank <= 3 ? ['🥇', '🥈', '🥉'][rank - 1] : `#${rank}`}</div>
      {avatar !== undefined && (avatar ? <img src={avatar} alt="" className="h-9 w-9 shrink-0 rounded-full object-cover" /> : <span className="h-9 w-9 shrink-0 rounded-full bg-slate-100" />)}
      <div className="min-w-0 flex-1">
        <span className="block truncate font-medium text-slate-800">{name}</span>
      </div>
      {mine && <span className="shrink-0 rounded-full bg-brand-yellow/40 px-2 py-0.5 text-xs font-bold text-amber-800">You</span>}
      <div className="shrink-0 text-right">
        <div className="font-bold text-brand-blue">{value}</div>
        <div className="text-xs text-slate-500">{unit}</div>
      </div>
    </li>
  );
}

function PeopleList({ board, empty }: { board: PeopleBoard; empty: string }) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-600">
        {board.myRank !== null ? `You are #${board.myRank} of ${board.size} this week. Great effort!` : 'Answer some new questions this week to get on the board.'}
      </p>
      {board.entries.every((e) => e.points === 0) && <p className="text-sm text-slate-500">{empty}</p>}
      <ul className="space-y-2">
        {board.entries.map((e, i) => (
          <Row key={`${e.nickname}-${i}`} rank={e.points > 0 ? e.rank : null} name={e.nickname} avatar={e.avatar} value={String(e.points)} unit="points" mine={e.isMe} />
        ))}
      </ul>
    </div>
  );
}

function Personal({ p }: { p: LeaderboardOverview['personal'] }) {
  const Stat = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
    <div className="flex-1 rounded-xl border border-slate-100 bg-white p-3 text-center">
      <div className="mx-auto mb-1 flex h-6 w-6 items-center justify-center text-brand-orange">{icon}</div>
      <div className="text-xl font-bold text-slate-800">{value}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
  return (
    <div className="flex gap-2">
      <Stat icon={<Star className="h-5 w-5" />} label="points this week" value={String(p.weekPoints)} />
      <Stat icon={<Trophy className="h-5 w-5" />} label="your best week" value={String(p.bestWeekPoints)} />
      <Stat icon={<Flame className="h-5 w-5" />} label="day streak" value={String(p.streakDays)} />
    </div>
  );
}

function AreaPanel({ ov }: { ov: LeaderboardOverview }) {
  const school = ov.schools[0];
  const [level, setLevel] = useState<'district' | 'province'>(school?.hasDistrict ? 'district' : 'province');
  const [data, setData] = useState<AreaResponse | null | undefined>(undefined);
  useEffect(() => {
    let live = true;
    setData(undefined);
    void getJson<AreaResponse>(`/api/leaderboard/area?level=${level}&school=${school.id}`).then((d) => live && setData(d));
    return () => { live = false; };
  }, [level, school.id]);
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        {(['district', 'province'] as const).map((l) => (
          <button type="button" key={l} onClick={() => setLevel(l)} className={cn('min-h-11 rounded-full px-4 text-sm font-medium', level === l ? 'bg-brand-blue text-white' : 'border border-slate-200 bg-white text-slate-600')}>
            {l === 'district' ? 'District' : 'Province'}
          </button>
        ))}
      </div>
      {data === undefined ? <Spin /> : data === null ? <p className="py-6 text-center text-slate-500">We could not load this board. Try again later.</p> : !data.available ? (
        <p className="py-6 text-center text-slate-500">Your school has no district set yet, so there is no district board. Try the province board.</p>
      ) : (
        <>
          <p className="text-sm text-slate-600">
            Schools in {data.board.area}, ranked by the average points of their active learners this week. Everyone helps their school shine!
          </p>
          <ul className="space-y-2">
            {data.board.schools.map((s) => (
              <Row key={`${s.rank}-${s.name}`} rank={s.rank} name={s.name} value={String(s.score)} unit={`avg · ${s.activeLearners} learners`} mine={s.isMine} />
            ))}
          </ul>
          {data.board.mine.rank === null && (
            <p className="rounded-xl bg-brand-blue/10 p-3 text-sm text-slate-700">
              {data.board.mine.name} joins the board once {data.board.mine.minActive} learners have practised this week ({data.board.mine.activeLearners} so far). Invite your classmates!
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default function LeaderboardView({ onBack }: { onBack: () => void; onRefresh?: () => void }) {
  const [ov, setOv] = useState<LeaderboardOverview | null | undefined>(undefined);
  const [tab, setTab] = useState<Tab>('class');
  const [classId, setClassId] = useState('');
  const [board, setBoard] = useState<PeopleBoard | null | undefined>(undefined);

  useEffect(() => {
    void getJson<LeaderboardOverview>('/api/leaderboard').then((o) => {
      setOv(o);
      if (o?.classes[0]) setClassId(o.classes[0].id);
    });
  }, []);

  const schoolId = ov?.schools[0]?.id ?? '';
  useEffect(() => {
    if (!ov || tab === 'area') return;
    const url = tab === 'class' ? (classId ? `/api/leaderboard/class/${classId}` : '') : schoolId ? `/api/leaderboard/school/${schoolId}` : '';
    if (!url) return;
    let live = true;
    setBoard(undefined);
    void getJson<{ board: PeopleBoard }>(url).then((d) => live && setBoard(d?.board ?? null));
    return () => { live = false; };
  }, [ov, tab, classId, schoolId]);

  const tabs: { key: Tab; label: string }[] = [
    { key: 'class', label: 'Class' },
    { key: 'school', label: 'School' },
    { key: 'area', label: 'Area' },
  ];

  return (
    <div className="mx-auto max-w-2xl space-y-4 p-4">
      <button type="button" onClick={onBack} className="flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-700">
        ← Back
      </button>
      <div className="flex items-center gap-3">
        <Trophy className="h-7 w-7 text-brand-yellow" />
        <h1 className="text-2xl font-bold text-slate-800">This week</h1>
      </div>

      {ov === undefined ? <Spin /> : ov === null ? (
        <p className="py-10 text-center text-slate-500">Sign in to see your week.</p>
      ) : ov.classes.length === 0 ? (
        <div className="space-y-4">
          <Personal p={ov.personal} />
          <div className="rounded-2xl border border-brand-blue/20 bg-brand-blue/10 p-4 text-slate-700">
            <p className="font-semibold">Practise with your class!</p>
            <p className="mt-1 text-sm">Ask your teacher for a class code and join a class from the home screen. Then you can cheer on your classmates and see how your school is doing. Until then, keep beating your own best week.</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <Personal p={ov.personal} />
          <p className="text-xs text-slate-500">Points reward learning: new right answers, remembering reviews, mastering topics and beating your best test. A new week starts every Monday.</p>
          <div className="flex gap-2" role="tablist">
            {tabs.map((t) => (
              <button
                type="button"
                role="tab"
                aria-selected={tab === t.key}
                key={t.key}
                onClick={() => setTab(t.key)}
                className={cn('min-h-11 flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors', tab === t.key ? 'bg-brand-blue text-white shadow-md' : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50')}
              >
                {t.label}
              </button>
            ))}
          </div>
          {tab === 'class' && ov.classes.length > 1 && (
            <select value={classId} onChange={(e) => setClassId(e.target.value)} aria-label="Class" className="min-h-11 w-full rounded-xl border-2 border-slate-200 bg-white px-4 text-sm">
              {ov.classes.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          )}
          {tab === 'area' ? <AreaPanel ov={ov} /> : board === undefined ? <Spin /> : board === null ? (
            <p className="py-6 text-center text-slate-500">We could not load this board. Try again later.</p>
          ) : (
            <>
              <h2 className="font-semibold text-slate-700">{board.name}</h2>
              <PeopleList board={board} empty="Nobody has points yet this week. Be the first!" />
            </>
          )}
        </div>
      )}
    </div>
  );
}
