'use client';
import { useState } from 'react';
import { Flag } from 'lucide-react';
import { makeQkey } from '../../lib/shared/qkey';
import { REPORT_NOTE_MAX, REPORT_REASONS, REPORT_REASON_LABELS, type ReportReason } from '../../lib/shared/questionReport';

interface Props {
  /** Task slug the question belongs to. Without it the control is not shown. */
  task?: string;
  /** The question text (used to identify it and, for questions the server does not know yet, as a short snapshot). */
  prompt: string;
  /** item_cache id when the question came from the D1 pool. */
  itemId?: number;
}

type Phase = 'closed' | 'open' | 'sending' | 'done' | 'error';

/**
 * "Report a problem" under a question (ADR 0003 section 4). Small and out of the way: it never blocks answering and
 * is not on the learner's path. Give it `key={prompt}` (or the question index) so it resets for the next question.
 */
const ReportProblem = ({ task, prompt, itemId }: Props) => {
  const [phase, setPhase] = useState<Phase>('closed');
  const [reason, setReason] = useState<ReportReason | null>(null);
  const [note, setNote] = useState('');
  const [message, setMessage] = useState('');
  if (!task) return null;

  const send = async () => {
    if (!reason) return;
    setPhase('sending');
    try {
      const res = await fetch('/api/questions/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task, reason, note: note.trim() || undefined, qkey: makeQkey(task, prompt), itemId, prompt: prompt.slice(0, 300) }),
      });
      if (res.ok) { setPhase('done'); return; }
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      setMessage(res.status === 401 ? 'Please log in to send a report.' : data.error || 'Sorry, that did not send. Please try again.');
      setPhase('error');
    } catch {
      setMessage('Sorry, that did not send. Please try again.');
      setPhase('error');
    }
  };

  if (phase === 'done') {
    return <p role="status" className="py-2 text-center text-sm text-slate-600">Thank you! We will check this question.</p>;
  }

  if (phase === 'closed') {
    return (
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setPhase('open')}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm text-slate-600 underline-offset-2 hover:bg-slate-100 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
        >
          <Flag className="h-4 w-4" aria-hidden="true" />
          Report a problem
        </button>
      </div>
    );
  }

  const busy = phase === 'sending';
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); void send(); }}
      className="mx-auto w-full max-w-xl space-y-3 rounded-xl border border-slate-300 bg-white p-4 text-left"
      aria-label="Report a problem with this question"
    >
      <fieldset className="space-y-1" disabled={busy}>
        <legend className="mb-1 text-sm font-semibold text-slate-800">What is wrong with this question?</legend>
        {REPORT_REASONS.map((r) => (
          <label key={r} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg px-2 text-base text-slate-800 hover:bg-slate-50">
            <input type="radio" name="report-reason" value={r} checked={reason === r} onChange={() => setReason(r)} className="h-5 w-5 accent-slate-700" />
            {REPORT_REASON_LABELS[r]}
          </label>
        ))}
      </fieldset>
      <div>
        <label htmlFor="report-note" className="text-sm text-slate-700">Tell us more (you do not have to)</label>
        <textarea
          id="report-note"
          value={note}
          onChange={(e) => setNote(e.target.value.slice(0, REPORT_NOTE_MAX))}
          maxLength={REPORT_NOTE_MAX}
          rows={2}
          disabled={busy}
          className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-base text-slate-800"
        />
        <p className="text-right text-xs text-slate-500">{note.length}/{REPORT_NOTE_MAX}</p>
      </div>
      <p className="text-xs text-slate-500">Please do not write your name or where you live.</p>
      {phase === 'error' && <p role="alert" className="text-sm font-medium text-red-700">{message}</p>}
      <div className="flex gap-3">
        <button type="submit" disabled={!reason || busy} className="min-h-11 flex-1 rounded-lg bg-slate-800 px-4 text-base font-semibold text-white disabled:opacity-50">
          {busy ? 'Sending…' : 'Send'}
        </button>
        <button type="button" onClick={() => setPhase('closed')} disabled={busy} className="min-h-11 rounded-lg border border-slate-300 px-4 text-base text-slate-700">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ReportProblem;
