'use client';

// The reviewer's page (ADR 0004): intro, then one item at a time. Mobile first. Talks only to /api/teacher-review. The link's token comes from the URL fragment and goes in a header, never in a URL.
// Imports nothing from the learner or admin code (guard.test.ts), so it has its own small styles.

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import {
  counts, draftFromContent, formatExpiry, initialDraft, itemChips, progressPercent, resumeIndex, saveDecision,
  type ItemDraft, type LineDraft, type QuestionDraft,
} from './reviewState';
import { LIMITS } from '../../lib/server/teacherReview/proposal';
import { isWellFormedToken } from '../../lib/server/teacherReview/reviewerLink';
import type {
  LessonLineItemContext, QuestionContent, QuestionItemContext, ReviewConfidence, ReviewVerdict, ReviewerItemView, ReviewerPackView,
} from '../../lib/server/teacherReview/types';

type Load = { s: 'loading' } | { s: 'error'; kind: 'expired' | 'revoked' | 'closed' | 'notfound' | 'network' | 'busy' } | { s: 'ready'; pack: ReviewerPackView };
type Screen = 'intro' | 'finish' | 'thanks' | number;
type SaveState = 'idle' | 'saving' | 'saved' | 'error';

const SAVE_DELAY_MS = 700;
const ERRORS: Record<string, { title: string; text: string }> = {
  expired: { title: 'This link has expired', text: 'Please ask the person who sent it for a new link.' },
  revoked: { title: 'This link is no longer active', text: 'Please ask the person who sent it for a new link.' },
  closed: { title: 'This review is finished', text: 'Thank you. There is nothing more to do here.' },
  notfound: { title: 'We could not find this review', text: 'Check that the whole link was copied, or ask for a new one.' },
  network: { title: 'No connection', text: 'Check your internet and try again.' },
  busy: { title: 'Too many requests', text: 'Please wait a few minutes and try again.' },
};

const btn = 'min-h-12 rounded-xl px-4 py-3 text-base font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-50';
const field = 'w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 focus:border-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300';

const api = (token: string, action: 'load' | 'save' | 'done', body?: unknown) =>
  fetch(`/api/teacher-review${action === 'save' ? '/response' : action === 'done' ? '/done' : ''}`, {
    method: action === 'load' ? 'GET' : 'POST',
    headers: { 'X-Review-Action': action, Authorization: `Bearer ${token}`, ...(body === undefined ? {} : { 'Content-Type': 'application/json' }) },
    body: body === undefined ? undefined : JSON.stringify(body),
    cache: 'no-store',
    referrerPolicy: 'no-referrer',
  });

const errorKind = async (res: Response): Promise<Extract<Load, { s: 'error' }>['kind']> => {
  if (res.status === 429) return 'busy';
  if (res.status === 404) return 'notfound';
  const j = (await res.json().catch(() => ({}))) as { error?: string };
  return j.error === 'revoked' || j.error === 'closed' || j.error === 'expired' ? j.error : 'notfound';
};

const STORAGE_KEY = 'teacher_review_token';

/**
 * The link is /teacher-review#<token>. The fragment is never sent to the server, so request logs do not hold it. Read it once,
 * remove it from the address bar, and keep it in sessionStorage so a reload of this tab still works.
 */
function readToken(): string | null {
  let fromHash: string | null = null;
  try {
    const h = window.location.hash.replace(/^#/, '');
    if (isWellFormedToken(h)) fromHash = h;
    if (window.location.hash) window.history.replaceState(null, '', window.location.pathname + window.location.search);
  } catch {
    /* no history API: carry on */
  }
  try {
    if (fromHash) window.sessionStorage.setItem(STORAGE_KEY, fromHash);
    else {
      const s = window.sessionStorage.getItem(STORAGE_KEY);
      if (isWellFormedToken(s)) return s;
    }
  } catch {
    /* storage blocked: the token only lives in memory for this visit */
  }
  return fromHash;
}

export default function ReviewApp() {
  const [token, setToken] = useState<string | null>(null);
  const [load, setLoad] = useState<Load>({ s: 'loading' });
  const [screen, setScreen] = useState<Screen>('intro');
  const [drafts, setDrafts] = useState<Record<number, ItemDraft>>({});
  const [saved, setSaved] = useState<Set<number>>(new Set());
  const [saveState, setSaveState] = useState<Record<number, SaveState>>({});
  const [hint, setHint] = useState<Record<number, string | null>>({});
  const [now] = useState(() => Date.now());
  const timers = useRef<Record<number, ReturnType<typeof setTimeout>>>({});
  const latest = useRef<Record<number, ItemDraft>>({});

  const items = load.s === 'ready' ? load.pack.items : [];

  const fetchPack = useCallback(async () => {
    if (!token) return;
    try {
      const res = await api(token, 'load');
      if (!res.ok) return setLoad({ s: 'error', kind: await errorKind(res) });
      const pack = (await res.json()) as ReviewerPackView;
      const d: Record<number, ItemDraft> = {};
      for (const it of pack.items) d[it.id] = initialDraft(it);
      latest.current = d;
      setDrafts(d);
      setSaved(new Set(pack.items.filter((i) => i.response).map((i) => i.id)));
      setLoad({ s: 'ready', pack });
    } catch {
      setLoad({ s: 'error', kind: 'network' });
    }
  }, [token]);

  useEffect(() => {
    const t = readToken();
    if (!t) return setLoad({ s: 'error', kind: 'notfound' });
    setToken(t);
  }, []);

  useEffect(() => {
    void fetchPack();
    const t = timers.current;
    return () => Object.values(t).forEach(clearTimeout);
  }, [fetchPack]);

  const itemById = useMemo(() => new Map(items.map((i) => [i.id, i])), [items]);

  const send = useCallback(async (itemId: number) => {
    if (!token) return;
    const item = itemById.get(itemId);
    const draft = latest.current[itemId];
    if (!item || !draft) return;
    const decision = saveDecision(item, draft);
    setHint((h) => ({ ...h, [itemId]: decision.send ? null : decision.hint }));
    if (!decision.send) return setSaveState((s) => ({ ...s, [itemId]: 'idle' }));
    setSaveState((s) => ({ ...s, [itemId]: 'saving' }));
    try {
      const res = await api(token, 'save', decision.body);
      if (!res.ok) {
        if (res.status === 400) {
          const j = (await res.json().catch(() => ({}))) as { error?: string };
          setHint((h) => ({ ...h, [itemId]: j.error ?? 'This answer could not be saved.' }));
          return setSaveState((s) => ({ ...s, [itemId]: 'idle' }));
        }
        if (res.status === 429) {
          setHint((h) => ({ ...h, [itemId]: 'Too many saves for now. Wait a few minutes, or ask the person who sent you this link.' }));
          return setSaveState((s) => ({ ...s, [itemId]: 'error' }));
        }
        if (res.status === 410 || res.status === 404) return setLoad({ s: 'error', kind: await errorKind(res) });
        throw new Error('save failed');
      }
      setSaved((p) => new Set(p).add(itemId));
      setSaveState((s) => ({ ...s, [itemId]: 'saved' }));
    } catch {
      setSaveState((s) => ({ ...s, [itemId]: 'error' }));
    }
  }, [itemById, token]);

  const change = useCallback((itemId: number, patch: Partial<ItemDraft>, immediate = false) => {
    const next = { ...latest.current[itemId], ...patch };
    latest.current = { ...latest.current, [itemId]: next };
    setDrafts(latest.current);
    clearTimeout(timers.current[itemId]);
    setSaveState((s) => ({ ...s, [itemId]: 'idle' }));
    timers.current[itemId] = setTimeout(() => void send(itemId), immediate ? 0 : SAVE_DELAY_MS);
  }, [send]);

  /** Sends anything waiting before the page moves on. */
  const flush = useCallback(() => {
    for (const [id, t] of Object.entries(timers.current)) {
      clearTimeout(t);
      delete timers.current[Number(id)];
      void send(Number(id));
    }
  }, [send]);

  const go = (s: Screen) => {
    flush();
    setScreen(s);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0 });
  };

  const finish = async () => {
    flush();
    if (!token) return;
    try {
      const res = await api(token, 'done', {});
      if (res.ok) return go('thanks');
      setLoad({ s: 'error', kind: await errorKind(res) });
    } catch {
      setSaveState((s) => ({ ...s, [-1]: 'error' }));
    }
  };

  if (load.s === 'loading') return <Shell><p className="py-16 text-center text-slate-600" role="status">Loading…</p></Shell>;
  if (load.s === 'error') {
    const e = ERRORS[load.kind];
    return (
      <Shell>
        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
          <h1 className="text-xl font-bold text-slate-900">{e.title}</h1>
          <p className="mt-2 text-slate-600">{e.text}</p>
          {(load.kind === 'network' || load.kind === 'busy') && <button className={`${btn} mt-4 bg-indigo-600 text-white`} onClick={() => { setLoad({ s: 'loading' }); void fetchPack(); }}>Try again</button>}
        </div>
      </Shell>
    );
  }

  const pack = load.pack;
  const c = counts(items, drafts, saved);

  if (screen === 'intro') {
    return (
      <Shell>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">Content review</p>
          <h1 className="mt-1 text-2xl font-bold text-slate-900">{pack.packTitle}</h1>
          <p className="mt-3 text-slate-700">Hello {pack.reviewerName}, thank you for helping us make sure our learning content is correct.</p>
          <h2 className="mt-5 text-base font-bold text-slate-900">What we need</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
            <li>You will see {pack.total} {pack.total === 1 ? 'item' : 'items'}, one at a time, as a learner sees them.</li>
            <li>For each one, tell us if it is correct, suggest a change, or say you are not sure.</li>
            <li>A short reason helps a lot, especially when you suggest a change.</li>
            <li>Your answers save by themselves. You can stop and come back with this same link, until it expires {formatExpiry(pack.expiresAt, now)}.</li>
            <li>For your safety, this page takes the secret part out of the address bar and remembers it in this browser tab only, so a reload still works. To come back later, open your original link again.</li>
          </ul>
          <p className="mt-4 text-sm text-slate-600">You only see this review. Learners and other reviewers are never shown to you.</p>
          {pack.total === 0 ? (
            <p className="mt-6 text-slate-700">There is nothing to review in this pack yet.</p>
          ) : (
            <button className={`${btn} mt-6 w-full bg-indigo-600 text-white hover:bg-indigo-700`} onClick={() => go(resumeIndex(items, saved))}>
              {c.answered > 0 ? `Continue (${c.answered} of ${c.total} done)` : 'Start'}
            </button>
          )}
        </div>
      </Shell>
    );
  }

  if (screen === 'thanks') {
    return (
      <Shell>
        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">Thank you, {pack.reviewerName}</h1>
          <p className="mt-2 text-slate-700">Your answers are saved. You can open this link again to change anything until it expires {formatExpiry(pack.expiresAt, now)}.</p>
          <button className={`${btn} mt-5 border border-slate-300 bg-white text-slate-800`} onClick={() => go(0)}>Look at my answers again</button>
        </div>
      </Shell>
    );
  }

  if (screen === 'finish') {
    return (
      <Shell progress={<Progress answered={c.answered} total={c.total} label="All items" />}>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">{c.remaining === 0 ? 'All done' : `${c.remaining} still to answer`}</h1>
          <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
            <Stat label="Correct" value={c.correct} tone="bg-emerald-50 text-emerald-800" />
            <Stat label="Changes" value={c.change} tone="bg-indigo-50 text-indigo-800" />
            <Stat label="Not sure" value={c.unsure} tone="bg-amber-50 text-amber-800" />
          </dl>
          {c.remaining > 0 && (
            <div className="mt-4">
              <p className="text-sm text-slate-600">Items without an answer:</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {items.map((it, i) => (saved.has(it.id) ? null : <button key={it.id} className="min-h-11 min-w-11 rounded-lg border border-slate-300 bg-white px-3 text-base font-semibold text-slate-800" onClick={() => go(i)}>{i + 1}</button>))}
              </div>
            </div>
          )}
          <button className={`${btn} mt-6 w-full bg-indigo-600 text-white hover:bg-indigo-700`} onClick={() => void finish()}>I am finished</button>
          {saveState[-1] === 'error' && <p className="mt-2 text-sm text-red-700" role="alert">Could not send. Check your connection and try again.</p>}
          <button className={`${btn} mt-2 w-full text-slate-700`} onClick={() => go(items.length - 1)}>Back</button>
        </div>
      </Shell>
    );
  }

  const index = screen;
  const item = items[index];
  const draft = drafts[item.id];
  return (
    <Shell progress={<Progress answered={c.answered} total={c.total} label={`Item ${index + 1} of ${c.total}`} />}>
      <ItemCard
        key={item.id}
        item={item}
        draft={draft}
        hint={hint[item.id] ?? null}
        state={saveState[item.id] ?? (saved.has(item.id) ? 'saved' : 'idle')}
        onChange={(patch, immediate) => change(item.id, patch, immediate)}
        onRetry={() => void send(item.id)}
      />
      <nav className="sticky bottom-0 -mx-4 mt-4 flex gap-3 border-t border-slate-200 bg-slate-50/95 px-4 py-3 backdrop-blur" aria-label="Move between items">
        <button className={`${btn} flex-1 border border-slate-300 bg-white text-slate-800`} onClick={() => go(index === 0 ? 'intro' : index - 1)}>Back</button>
        <button className={`${btn} flex-1 bg-indigo-600 text-white hover:bg-indigo-700`} onClick={() => go(index + 1 >= items.length ? 'finish' : index + 1)}>
          {index + 1 >= items.length ? 'Finish' : saved.has(item.id) ? 'Next' : 'Skip'}
        </button>
      </nav>
    </Shell>
  );
}

function Shell({ children, progress }: { children: ReactNode; progress?: ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {progress}
      <div className="mx-auto w-full max-w-xl px-4 pb-6 pt-4">{children}</div>
    </main>
  );
}

function Progress({ answered, total, label }: { answered: number; total: number; label: string }) {
  const pct = progressPercent(answered, total);
  return (
    <div className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 px-4 py-2 backdrop-blur">
      <div className="mx-auto max-w-xl">
        <div className="flex justify-between text-sm text-slate-700"><span className="font-semibold">{label}</span><span>{answered} answered</span></div>
        <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={answered} aria-label="Items answered">
          <div className="h-full rounded-full bg-indigo-600 transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: number; tone: string }) {
  return <div className={`rounded-xl p-3 ${tone}`}><dd className="text-2xl font-bold">{value}</dd><dt className="text-xs font-semibold uppercase">{label}</dt></div>;
}

const LETTERS = 'ABCDEF';

function ItemCard({ item, draft, hint, state, onChange, onRetry }: {
  item: ReviewerItemView; draft: ItemDraft; hint: string | null; state: SaveState;
  onChange: (patch: Partial<ItemDraft>, immediate?: boolean) => void; onRetry: () => void;
}) {
  const verdicts: { v: ReviewVerdict; label: string; on: string }[] = [
    { v: 'correct', label: 'Correct as is', on: 'border-emerald-600 bg-emerald-600 text-white' },
    { v: 'change', label: 'Suggest a change', on: 'border-indigo-600 bg-indigo-600 text-white' },
    { v: 'unsure', label: 'Not sure', on: 'border-amber-500 bg-amber-500 text-white' },
  ];
  const conf: { v: ReviewConfidence; label: string }[] = [{ v: 'sure', label: 'Sure' }, { v: 'fairly_sure', label: 'Fairly sure' }];
  const ctx = item.context as (QuestionItemContext & LessonLineItemContext) | null;
  const chips = itemChips(item.kind, ctx);

  return (
    <article className="space-y-4">
      <section className="rounded-2xl bg-white p-4 shadow-sm" aria-label="As a learner sees it">
        <div className="mb-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
          {chips.map((c) => <span key={c} className="rounded-full bg-slate-100 px-2 py-1">{c}</span>)}
        </div>
        {item.kind === 'question' ? <QuestionView q={item.content as QuestionContent} /> : <LineView text={(item.content as LineDraft).text} ctx={ctx} />}
      </section>

      {item.doubt && (
        <section className="rounded-2xl border border-amber-300 bg-amber-50 p-4" aria-label="Why we are asking">
          <p className="text-xs font-bold uppercase tracking-wide text-amber-800">Why we are asking</p>
          <p className="mt-1 text-base text-amber-950">{item.doubt}</p>
        </section>
      )}

      <section className="space-y-3" aria-label="Your answer">
        <div className="grid gap-2" role="group" aria-label="Your verdict">
          {verdicts.map(({ v, label, on }) => (
            <button
              key={v}
              aria-pressed={draft.verdict === v}
              className={`${btn} border-2 ${draft.verdict === v ? on : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}`}
              onClick={() => onChange({ verdict: v }, true)}
            >
              {label}
            </button>
          ))}
        </div>

        {draft.verdict === 'change' && (
          <div className="rounded-2xl border border-indigo-200 bg-white p-4">
            <p className="mb-3 text-sm font-semibold text-indigo-800">Edit it the way it should read</p>
            {item.kind === 'question'
              ? <QuestionEditor d={draft.content as QuestionDraft} onChange={(content) => onChange({ content })} />
              : <LineEditor d={draft.content as LineDraft} onChange={(content) => onChange({ content })} />}
            <button className="mt-3 text-sm font-semibold text-slate-600 underline" onClick={() => onChange({ content: draftFromContent(item.kind, item.content) })}>Undo my edits</button>
          </div>
        )}

        {draft.verdict && (
          <div className="space-y-3 rounded-2xl bg-white p-4">
            <fieldset>
              <legend className="text-sm font-semibold text-slate-800">How sure are you? (optional)</legend>
              <div className="mt-2 flex gap-2">
                {conf.map(({ v, label }) => (
                  <button key={v} aria-pressed={draft.confidence === v} className={`${btn} flex-1 border-2 ${draft.confidence === v ? 'border-slate-800 bg-slate-800 text-white' : 'border-slate-300 bg-white text-slate-800'}`} onClick={() => onChange({ confidence: draft.confidence === v ? null : v })}>{label}</button>
                ))}
              </div>
            </fieldset>
            <label className="block">
              <span className="text-sm font-semibold text-slate-800">{draft.verdict === 'unsure' ? 'What are you unsure about?' : draft.verdict === 'change' ? 'Why this change?' : 'Anything to add? (optional)'}</span>
              <textarea className={`${field} mt-1 min-h-24`} maxLength={LIMITS.reason} value={draft.reason} onChange={(e) => onChange({ reason: e.target.value })} />
            </label>
          </div>
        )}

        <p className={`min-h-6 text-sm ${state === 'error' ? 'text-red-700' : 'text-slate-600'}`} role="status" aria-live="polite">
          {hint ? hint : state === 'saving' ? 'Saving…' : state === 'saved' ? 'Saved' : state === 'error' ? 'Not saved yet. ' : draft.verdict ? '' : 'Choose an answer to save it.'}
          {state === 'error' && <button className="font-semibold underline" onClick={onRetry}>Try again</button>}
        </p>
      </section>
    </article>
  );
}

function QuestionView({ q }: { q: QuestionContent }) {
  return (
    <div>
      <p className="whitespace-pre-line text-lg font-semibold leading-snug text-slate-900">{q.prompt}</p>
      <ol className="mt-3 space-y-2">
        {q.options.map((o, i) => {
          const key = o === q.answer;
          return (
            <li key={`${i}-${o}`} className={`flex items-start gap-3 rounded-xl border-2 px-3 py-2 ${key ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200'}`}>
              <span className={`mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full text-sm font-bold ${key ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>{LETTERS[i]}</span>
              <span className="text-base text-slate-900">{o}{key && <span className="ml-2 text-xs font-bold uppercase text-emerald-800">marked correct</span>}</span>
            </li>
          );
        })}
      </ol>
      {q.explanation && <p className="mt-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-700"><span className="font-semibold">Explanation shown after answering: </span>{q.explanation}</p>}
    </div>
  );
}

function LineView({ text, ctx }: { text: string; ctx: LessonLineItemContext | null }) {
  return (
    <div>
      {ctx?.before && <p className="text-sm text-slate-500">{ctx.before}</p>}
      <p className="my-2 whitespace-pre-line rounded-xl border-l-4 border-indigo-500 bg-indigo-50 p-3 text-lg font-semibold leading-snug text-slate-900">{text}</p>
      {ctx?.after && <p className="text-sm text-slate-500">{ctx.after}</p>}
    </div>
  );
}

function QuestionEditor({ d, onChange }: { d: QuestionDraft; onChange: (d: QuestionDraft) => void }) {
  const setOption = (i: number, v: string) => onChange({ ...d, options: d.options.map((o, j) => (j === i ? v : o)) });
  const remove = (i: number) => onChange({ ...d, options: d.options.filter((_, j) => j !== i), keyIndex: d.keyIndex === i ? 0 : d.keyIndex > i ? d.keyIndex - 1 : d.keyIndex });
  return (
    <div className="space-y-3">
      <label className="block"><span className="text-sm font-semibold text-slate-800">Question</span>
        <textarea className={`${field} mt-1 min-h-24`} maxLength={LIMITS.prompt} value={d.prompt} onChange={(e) => onChange({ ...d, prompt: e.target.value })} /></label>
      <fieldset>
        <legend className="text-sm font-semibold text-slate-800">Options (tick the correct one)</legend>
        <div className="mt-1 space-y-2">
          {d.options.map((o, i) => (
            <div key={i} className="flex items-center gap-2">
              <input type="radio" name="key" className="h-6 w-6 flex-none accent-emerald-600" checked={d.keyIndex === i} onChange={() => onChange({ ...d, keyIndex: i })} aria-label={`Option ${LETTERS[i]} is correct`} />
              <input className={field} maxLength={LIMITS.option} value={o} onChange={(e) => setOption(i, e.target.value)} aria-label={`Option ${LETTERS[i]}`} />
              {d.options.length > LIMITS.minOptions && <button className="min-h-11 min-w-11 flex-none rounded-lg border border-slate-300 text-lg text-slate-700" onClick={() => remove(i)} aria-label={`Remove option ${LETTERS[i]}`}>×</button>}
            </div>
          ))}
        </div>
        {d.options.length < LIMITS.maxOptions && <button className="mt-2 text-sm font-semibold text-indigo-700 underline" onClick={() => onChange({ ...d, options: [...d.options, ''] })}>Add an option</button>}
      </fieldset>
      <label className="block"><span className="text-sm font-semibold text-slate-800">Explanation</span>
        <textarea className={`${field} mt-1 min-h-20`} maxLength={LIMITS.explanation} value={d.explanation} onChange={(e) => onChange({ ...d, explanation: e.target.value })} /></label>
    </div>
  );
}

function LineEditor({ d, onChange }: { d: LineDraft; onChange: (d: LineDraft) => void }) {
  return (
    <label className="block"><span className="text-sm font-semibold text-slate-800">Text</span>
      <textarea className={`${field} mt-1 min-h-28`} maxLength={LIMITS.lineText} value={d.text} onChange={(e) => onChange({ text: e.target.value })} /></label>
  );
}

