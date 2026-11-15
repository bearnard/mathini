'use client';
// ADR 0003 sections 1 and 4: teachers propose an edit, a retirement or a new question (with a reason and a source), follow their proposals, and
// discuss questions with other teachers. No learner data is shown anywhere here. Every action is checked again on the server by role.
import { useEffect, useState } from 'react';
import { LIMITS, SOURCE_KINDS, SOURCE_LABEL, type SourceKind } from '../../lib/shared/moderation';

interface Finding { code: string; severity: string; detail?: string }
interface BankQuestion { id: string; versionId: number; prompt: string; options: string[]; answer: string; explanation: string; verified: boolean; editable: boolean; myProposalId: string | null }
interface Proposal { id: string; kind: 'edit' | 'retire' | 'new'; questionId: string | null; baseVersionId: number | null; task: string; proposed: { prompt: string; options: string[]; answer: string; explanation: string } | null; reason: string; sourceKind: SourceKind; sourceRef: string; status: string; findings: Finding[]; decisionReason: string | null; createdAt: number }
interface Comment { id: string; author: string; mine: boolean; body: string; createdAt: number; removed: boolean }
interface Me { user: { email: string } | null; roles: string[] }
interface Subject { code: string; title: string }
interface Topic { task: string; label: string }

const field = 'mt-1 block min-h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-base text-slate-900';
const area = 'mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-base text-slate-900';
const btn = 'min-h-12 rounded-xl border border-slate-300 bg-white px-4 text-base font-semibold text-slate-800 disabled:opacity-60';
const btnPrimary = 'min-h-12 rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white disabled:opacity-60';
const STATUS: Record<string, string> = { returned: 'Sent back to you', submitted: 'Waiting for a decision', applying: 'Being applied', approved: 'Accepted', rejected: 'Not accepted', stale: 'Out of date', withdrawn: 'Withdrawn' };

async function api<T>(url: string, action?: string, body?: unknown, method = 'POST'): Promise<{ ok: true; data: T } | { ok: false; error: string; data?: Record<string, unknown> }> {
  try {
    const res = await fetch(url, action ? { method, headers: { 'Content-Type': 'application/json', 'X-Auth-Action': action }, body: JSON.stringify(body ?? {}) } : { cache: 'no-store' });
    const data = (await res.json().catch(() => ({}))) as T & { error?: string };
    return res.ok ? { ok: true, data } : { ok: false, error: String((data as { error?: string }).error ?? 'That did not work. Try again.'), data: data as Record<string, unknown> };
  } catch {
    return { ok: false, error: 'That did not work. Check your connection and try again.' };
  }
}

const Findings = ({ items }: { items: Finding[] }) => items.length === 0 ? null : (
  <ul className="mt-2 space-y-1 text-sm" aria-label="Automated checks">
    {items.map((f, i) => <li key={i} className={f.severity === 'reject' ? 'text-red-700' : 'text-amber-800'}>{f.severity === 'reject' ? 'Must fix: ' : 'Check: '}{f.detail ?? f.code}</li>)}
  </ul>
);

/** The discussion on one question or proposal. Teachers and moderators only. */
function Discussion({ target }: { target: { question: string } | { proposal: string } }) {
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [text, setText] = useState('');
  const [err, setErr] = useState('');
  const qs = 'question' in target ? `question=${target.question}` : `proposal=${target.proposal}`;
  const load = () => { void api<{ comments: Comment[] }>(`/api/teacher/comments?${qs}`).then((r) => setComments(r.ok ? r.data.comments : [])); };
  useEffect(load, [qs]); // eslint-disable-line react-hooks/exhaustive-deps
  const post = async () => {
    setErr('');
    const r = await api<{ id: string }>('/api/teacher/comments', 'comment-create', { ...target, body: text });
    if (!r.ok) { setErr(r.error); return; }
    setText(''); load();
  };
  const remove = async (id: string) => { const r = await api(`/api/teacher/comments/${id}`, 'comment-remove', {}, 'DELETE'); if (r.ok) load(); else setErr(r.error); };
  return (
    <div className="mt-3 rounded-xl bg-slate-50 p-3" aria-label="Discussion">
      <p className="text-sm font-semibold text-slate-800">Discussion (teachers and moderators only)</p>
      {comments === null && <p className="text-sm text-slate-600" role="status">Loading…</p>}
      {comments && comments.length === 0 && <p className="text-sm text-slate-600">No comments yet.</p>}
      <ul className="mt-1 space-y-2">
        {comments?.map((c) => (
          <li key={c.id} className="text-sm text-slate-800">
            <span className="font-semibold">{c.author}</span> <span className="text-slate-500">{new Date(c.createdAt).toLocaleDateString('en-ZA')}</span>
            <p className="whitespace-pre-wrap break-words">{c.removed ? <em className="text-slate-500">Removed</em> : c.body}</p>
            {c.mine && !c.removed && <button className="text-xs text-slate-600 underline" onClick={() => void remove(c.id)}>Remove my comment</button>}
          </li>
        ))}
      </ul>
      <label className="mt-2 block text-sm font-semibold text-slate-800">Add a comment
        <textarea className={area} rows={2} maxLength={LIMITS.commentMax} value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      {err && <p className="mt-1 text-sm text-red-700" role="alert">{err}</p>}
      <button className={`${btn} mt-2`} disabled={!text.trim()} onClick={() => void post()}>Post comment</button>
    </div>
  );
}

interface FormProps {
  kind: 'edit' | 'retire' | 'new';
  task: string;
  question?: BankQuestion;
  existing?: Proposal;
  onDone: () => void;
  onCancel: () => void;
}

/** One form for a new proposal and for fixing a returned one. */
function ProposalForm({ kind, task, question, existing, onDone, onCancel }: FormProps) {
  const start = existing?.proposed ?? (question ? { prompt: question.prompt, options: question.options, answer: question.answer, explanation: question.explanation } : { prompt: '', options: ['', '', '', ''], answer: '', explanation: '' });
  const [prompt, setPrompt] = useState(start.prompt);
  const [options, setOptions] = useState(start.options.join('\n'));
  const [answer, setAnswer] = useState(start.answer);
  const [explanation, setExplanation] = useState(start.explanation);
  const [reason, setReason] = useState(existing?.reason ?? '');
  const [sourceKind, setSourceKind] = useState<SourceKind>(existing?.sourceKind ?? 'caps');
  const [sourceRef, setSourceRef] = useState(existing?.sourceRef ?? '');
  const [err, setErr] = useState('');
  const [findings, setFindings] = useState<Finding[]>(existing?.findings ?? []);
  const [busy, setBusy] = useState(false);
  const opts = options.split('\n').map((o) => o.trim()).filter(Boolean);
  const content = kind === 'retire' ? undefined : { prompt, options: opts, answer, explanation };
  const submit = async () => {
    setBusy(true); setErr('');
    const payload = { kind, questionId: question?.id ?? existing?.questionId ?? undefined, baseVersionId: question?.versionId ?? existing?.baseVersionId ?? undefined, task: kind === 'new' ? task : undefined, content, reason, sourceKind, sourceRef };
    const r = existing ? await api(`/api/teacher/proposals/${existing.id}`, 'proposal-revise', payload) : await api('/api/teacher/proposals', 'proposal-create', payload);
    setBusy(false);
    if (r.ok) { onDone(); return; }
    setErr(r.error);
    setFindings((r.data?.findings as Finding[] | undefined) ?? []);
    if (r.data?.id) onDone(); // a returned proposal is saved: it shows under My proposals with the reasons
  };
  return (
    <form className="mt-3 rounded-2xl border border-indigo-200 bg-white p-4" onSubmit={(e) => { e.preventDefault(); void submit(); }}>
      <h3 className="text-lg font-bold text-slate-900">{kind === 'edit' ? 'Propose a change' : kind === 'retire' ? 'Propose to retire this question' : 'Propose a new question'}</h3>
      {kind === 'retire' && question && <p className="mt-1 text-slate-800">{question.prompt}</p>}
      {kind !== 'retire' && (
        <>
          <label className="mt-2 block text-sm font-semibold text-slate-800">Question
            <textarea className={area} rows={3} value={prompt} onChange={(e) => setPrompt(e.target.value)} />
          </label>
          <label className="mt-2 block text-sm font-semibold text-slate-800">Options (one per line, 2 to 6)
            <textarea className={area} rows={5} value={options} onChange={(e) => setOptions(e.target.value)} />
          </label>
          <label className="mt-2 block text-sm font-semibold text-slate-800">Correct answer
            <select className={field} value={answer} onChange={(e) => setAnswer(e.target.value)}>
              <option value="">Choose…</option>
              {opts.map((o, i) => <option key={i} value={o}>{o}</option>)}
            </select>
          </label>
          <label className="mt-2 block text-sm font-semibold text-slate-800">Explanation shown to learners
            <textarea className={area} rows={3} value={explanation} onChange={(e) => setExplanation(e.target.value)} />
          </label>
        </>
      )}
      <label className="mt-2 block text-sm font-semibold text-slate-800">Why? ({LIMITS.reasonMin} to {LIMITS.reasonMax} characters)
        <textarea className={area} rows={2} maxLength={LIMITS.reasonMax} value={reason} onChange={(e) => setReason(e.target.value)} />
      </label>
      <label className="mt-2 block text-sm font-semibold text-slate-800">Where does this come from?
        <select className={field} value={sourceKind} onChange={(e) => setSourceKind(e.target.value as SourceKind)}>
          {SOURCE_KINDS.map((k) => <option key={k} value={k}>{SOURCE_LABEL[k]}</option>)}
        </select>
      </label>
      <label className="mt-2 block text-sm font-semibold text-slate-800">Which one, and the page or slide
        <input className={field} maxLength={LIMITS.sourceMax} value={sourceRef} onChange={(e) => setSourceRef(e.target.value)} placeholder="CAPS Grade 6 Natural Sciences, page 41" />
      </label>
      {err && <p className="mt-2 text-red-700" role="alert">{err}</p>}
      <Findings items={findings} />
      <div className="mt-3 flex gap-2">
        <button type="submit" className={btnPrimary} disabled={busy}>{busy ? 'Sending…' : existing ? 'Send again' : 'Send proposal'}</button>
        <button type="button" className={btn} onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

function Browse({ onProposed }: { onProposed: () => void }) {
  const [grade, setGrade] = useState(6);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [subject, setSubject] = useState('');
  const [topics, setTopics] = useState<Topic[]>([]);
  const [task, setTask] = useState('');
  const [bank, setBank] = useState<{ topic: string; subject: string; questions: BankQuestion[] } | null>(null);
  const [form, setForm] = useState<{ kind: 'edit' | 'retire' | 'new'; question?: BankQuestion } | null>(null);
  const [talk, setTalk] = useState<string | null>(null);
  const [msg, setMsg] = useState('');
  useEffect(() => { setSubject(''); setTask(''); setSubjects([]); void api<{ subjects: Subject[] }>(`/api/teacher/catalog?grade=${grade}`).then((r) => { if (r.ok) setSubjects(r.data.subjects); }); }, [grade]);
  useEffect(() => { setTask(''); setTopics([]); if (subject) void api<{ topics: Topic[] }>(`/api/teacher/catalog?grade=${grade}&subject=${encodeURIComponent(subject)}`).then((r) => { if (r.ok) setTopics(r.data.topics); }); }, [subject, grade]);
  const loadBank = (t: string) => { void api<NonNullable<typeof bank>>(`/api/teacher/questions?task=${encodeURIComponent(t)}`).then((r) => setBank(r.ok ? r.data : null)); };
  useEffect(() => { setBank(null); setForm(null); if (task) loadBank(task); }, [task]);
  const done = () => { setForm(null); setMsg('Sent. You can follow it under My proposals.'); loadBank(task); onProposed(); };

  return (
    <section aria-label="Question bank">
      <div className="mt-3 grid gap-2">
        <label className="text-sm font-semibold text-slate-800">Grade
          <select className={field} value={grade} onChange={(e) => setGrade(Number(e.target.value))}>{[4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => <option key={g} value={g}>Grade {g}</option>)}</select>
        </label>
        <label className="text-sm font-semibold text-slate-800">Subject
          <select className={field} value={subject} onChange={(e) => setSubject(e.target.value)}><option value="">Choose…</option>{subjects.map((s) => <option key={s.code} value={s.code}>{s.title}</option>)}</select>
        </label>
        <label className="text-sm font-semibold text-slate-800">Topic
          <select className={field} value={task} onChange={(e) => setTask(e.target.value)}><option value="">Choose…</option>{topics.map((t) => <option key={t.task} value={t.task}>{t.label}</option>)}</select>
        </label>
      </div>
      {msg && <p className="mt-3 text-green-800" role="status">{msg}</p>}
      {bank && (
        <>
          <h2 className="mt-4 text-lg font-bold text-slate-900">{bank.topic}</h2>
          <button className={`${btn} mt-1`} onClick={() => { setMsg(''); setForm({ kind: 'new' }); }}>Propose a new question</button>
          {form && form.kind === 'new' && <ProposalForm kind="new" task={task} onDone={done} onCancel={() => setForm(null)} />}
          <ul className="mt-3 space-y-3">
            {bank.questions.map((q) => (
              <li key={q.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="break-words font-semibold text-slate-900">{q.prompt}{q.verified && <span className="ml-2 rounded-lg bg-green-100 px-2 py-0.5 text-xs font-bold text-green-900">Teacher-verified</span>}</p>
                <ul className="mt-1 text-sm text-slate-700">{q.options.map((o) => <li key={o}>{o === q.answer ? '✓ ' : '• '}{o}</li>)}</ul>
                <div className="mt-2 flex flex-wrap gap-2">
                  {q.myProposalId ? <span className="text-sm text-slate-600">You have a proposal on this question.</span> : q.editable ? (
                    <>
                      <button className={btn} onClick={() => { setMsg(''); setForm({ kind: 'edit', question: q }); }}>Propose a change</button>
                      <button className={btn} onClick={() => { setMsg(''); setForm({ kind: 'retire', question: q }); }}>Propose to retire</button>
                    </>
                  ) : <span className="text-sm text-slate-600">This question stays in the code.</span>}
                  <button className={btn} onClick={() => setTalk(talk === q.id ? null : q.id)}>{talk === q.id ? 'Hide discussion' : 'Discussion'}</button>
                </div>
                {form?.question?.id === q.id && <ProposalForm kind={form.kind} task={task} question={q} onDone={done} onCancel={() => setForm(null)} />}
                {talk === q.id && <Discussion target={{ question: q.id }} />}
              </li>
            ))}
            {bank.questions.length === 0 && <li className="text-slate-600">No questions in this topic yet.</li>}
          </ul>
        </>
      )}
    </section>
  );
}

function Mine({ refresh }: { refresh: number }) {
  const [data, setData] = useState<{ proposals: Proposal[]; points: number } | null>(null);
  const [fixing, setFixing] = useState<string | null>(null);
  const [talk, setTalk] = useState<string | null>(null);
  const [err, setErr] = useState('');
  const load = () => { void api<{ proposals: Proposal[]; points: number }>('/api/teacher/proposals').then((r) => setData(r.ok ? r.data : { proposals: [], points: 0 })); };
  useEffect(load, [refresh]); // eslint-disable-line react-hooks/exhaustive-deps
  const withdraw = async (id: string) => { const r = await api(`/api/teacher/proposals/${id}`, 'proposal-withdraw', {}, 'DELETE'); if (r.ok) load(); else setErr(r.error); };
  return (
    <section aria-label="My proposals" className="mt-3">
      {data === null && <p className="text-slate-600" role="status">Loading…</p>}
      {data && <p className="text-slate-700">Your points: <strong>{data.points}</strong>. You earn points when a proposal is accepted.</p>}
      {err && <p className="mt-2 text-red-700" role="alert">{err}</p>}
      {data && data.proposals.length === 0 && <p className="mt-2 text-slate-700">You have not proposed anything yet. Choose a question under Question bank.</p>}
      <ul className="mt-3 space-y-3">
        {data?.proposals.map((p) => (
          <li key={p.id} className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-bold uppercase tracking-wide text-indigo-700">{p.kind === 'edit' ? 'Change' : p.kind === 'retire' ? 'Retire' : 'New question'} · {STATUS[p.status] ?? p.status}</p>
            {p.proposed && <p className="mt-1 break-words font-semibold text-slate-900">{p.proposed.prompt}</p>}
            <p className="mt-1 text-sm text-slate-700">Why: {p.reason}</p>
            <p className="text-sm text-slate-600">{SOURCE_LABEL[p.sourceKind]}: {p.sourceRef}</p>
            {p.status === 'returned' && <Findings items={p.findings} />}
            {p.decisionReason && <p className="mt-1 text-sm text-slate-800">Decision: {p.decisionReason}</p>}
            <div className="mt-2 flex flex-wrap gap-2">
              {p.status === 'returned' && <button className={btnPrimary} onClick={() => setFixing(fixing === p.id ? null : p.id)}>Fix and send again</button>}
              {(p.status === 'returned' || p.status === 'submitted') && <button className={btn} onClick={() => void withdraw(p.id)}>Withdraw</button>}
              <button className={btn} onClick={() => setTalk(talk === p.id ? null : p.id)}>{talk === p.id ? 'Hide discussion' : 'Discussion'}</button>
            </div>
            {fixing === p.id && <ProposalForm kind={p.kind} task={p.task} existing={p} onDone={() => { setFixing(null); load(); }} onCancel={() => setFixing(null)} />}
            {talk === p.id && <Discussion target={{ proposal: p.id }} />}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function TeacherQuestions() {
  const [me, setMe] = useState<Me | null | 'error'>(null);
  const [tab, setTab] = useState<'bank' | 'mine'>('bank');
  const [refresh, setRefresh] = useState(0);
  useEffect(() => { void api<Me>('/api/auth/me').then((r) => setMe(r.ok ? r.data : 'error')); }, []);
  const ok = !!me && me !== 'error' && !!me.user && (me.roles.includes('teacher') || me.roles.includes('moderator'));
  const tabBtn = (t: 'bank' | 'mine', label: string) => (
    <button role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className={`min-h-12 flex-1 rounded-xl px-3 text-base font-semibold ${tab === t ? 'bg-indigo-600 text-white' : 'border border-slate-300 bg-white text-slate-800'}`}>{label}</button>
  );
  return (
    <main className="mx-auto min-h-screen max-w-md bg-slate-50 px-4 py-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">PrepPals</p>
      <h1 className="mt-1 text-2xl font-bold text-slate-900">Question bank</h1>
      <a href="/teacher" className="text-sm text-indigo-700 underline">Back to your classes</a>
      {me === null && <p className="mt-3 text-slate-600" role="status">Loading…</p>}
      {me === 'error' && <p className="mt-3 text-red-700" role="alert">Could not load your account. Try again.</p>}
      {me && me !== 'error' && !me.user && <a href="/sign-in" className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white">Sign in</a>}
      {me && me !== 'error' && me.user && !ok && <p className="mt-3 text-slate-700">This area is for approved teachers.</p>}
      {ok && (
        <>
          <p className="mt-2 text-slate-700">Suggest a better question, or a new one. We run automated checks first, then a moderator or the owner decides, and always says why.</p>
          <div role="tablist" className="mt-3 flex gap-2">{tabBtn('bank', 'Question bank')}{tabBtn('mine', 'My proposals')}</div>
          {tab === 'bank' ? <Browse onProposed={() => setRefresh((n) => n + 1)} /> : <Mine refresh={refresh} />}
        </>
      )}
    </main>
  );
}
