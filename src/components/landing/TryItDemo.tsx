'use client';

// "Try it now" (landing page, section 2): pick a grade, answer 3 real curated questions, see instant feedback and the explanation, finish with a mini
// "2/3" result and "Start practising free". It RECORDS NOTHING and never touches an account: the only request is the public, read-only GET /api/demo.
// Light on purpose: no animation or chart libraries; KaTeX (MathText) is loaded only when a question actually contains maths.
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
import { DEMO_GRADE_CHOICES, DEMO_QUESTION_COUNT, RIGHT_LINE, SIGNUP_HREF, WRONG_PREFIX, barLabel, fetchDemo, resultLine, type DemoQuestion } from './demoClient';

const MathText = dynamic(() => import('../subjects/MathText'), { ssr: false, loading: () => <span className="opacity-60">…</span> });

/** Plain text unless it holds $...$ maths, so the maths library is only fetched when needed. */
const Text = ({ children }: { children: string }) => (children.includes('$') ? <MathText>{children}</MathText> : <span>{children}</span>);

type View =
  | { kind: 'pick' }
  | { kind: 'loading'; grade: number }
  | { kind: 'error'; grade: number }
  | { kind: 'quiz'; grade: number; questions: DemoQuestion[]; index: number; picked: string | null; score: number }
  | { kind: 'done'; grade: number; score: number };

const optionLetter = (i: number) => String.fromCharCode(65 + i);

export default function TryItDemo() {
  const [view, setView] = useState<View>({ kind: 'pick' });
  const nextRef = useRef<HTMLButtonElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const start = useCallback(async (grade: number) => {
    abortRef.current?.abort();
    const ctl = new AbortController();
    abortRef.current = ctl;
    setView({ kind: 'loading', grade });
    const questions = await fetchDemo(grade, ctl.signal);
    if (ctl.signal.aborted) return;
    setView(questions ? { kind: 'quiz', grade, questions, index: 0, picked: null, score: 0 } : { kind: 'error', grade });
  }, []);
  useEffect(() => () => abortRef.current?.abort(), []);

  // After an answer, move focus to "Next" so a keyboard or screen-reader user carries straight on; on a new question, to its heading.
  const answered = view.kind === 'quiz' && view.picked !== null;
  useEffect(() => {
    if (answered) nextRef.current?.focus();
  }, [answered]);
  const qIndex = view.kind === 'quiz' ? view.index : -1;
  useEffect(() => {
    if (qIndex > 0 || view.kind === 'done') headingRef.current?.focus();
  }, [qIndex, view.kind]);

  const answer = (option: string) =>
    setView((v) => (v.kind === 'quiz' && v.picked === null ? { ...v, picked: option, score: v.score + (option === v.questions[v.index].answer ? 1 : 0) } : v));
  const next = () =>
    setView((v) => (v.kind !== 'quiz' ? v : v.index + 1 >= v.questions.length ? { kind: 'done', grade: v.grade, score: v.score } : { ...v, index: v.index + 1, picked: null }));

  return (
    <section aria-labelledby="try-heading" className="mx-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <h2 id="try-heading" ref={headingRef} tabIndex={-1} className="text-2xl font-extrabold text-slate-900 outline-none">Try it now</h2>
      <p className="mt-1 text-slate-600">No sign-up. Pick your grade and answer 3 real questions. Nothing is saved.</p>

      {view.kind === 'pick' && <GradePicker onPick={start} />}

      {view.kind === 'loading' && (
        <p role="status" className="mt-6 text-slate-700">Finding questions for Grade {view.grade}…</p>
      )}

      {view.kind === 'error' && (
        <div className="mt-6" role="alert">
          <p className="text-slate-700">We could not load questions just now. Please try again.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" onClick={() => start(view.grade)} className="min-h-11 rounded-xl bg-brand-orange px-5 py-2 font-extrabold text-white">Try again</button>
            <button type="button" onClick={() => setView({ kind: 'pick' })} className="min-h-11 rounded-xl border-2 border-slate-200 px-5 py-2 font-bold text-slate-700">Pick another grade</button>
          </div>
        </div>
      )}

      {view.kind === 'quiz' && <Quiz view={view} onAnswer={answer} onNext={next} nextRef={nextRef} />}

      {view.kind === 'done' && (
        <div className="mt-6">
          <p className="text-sm font-bold uppercase tracking-wide text-indigo-700">Grade {view.grade} mini quiz</p>
          <p className="mt-1 text-5xl font-extrabold text-slate-900" aria-label={barLabel(view.score, DEMO_QUESTION_COUNT)}>{view.score}/{DEMO_QUESTION_COUNT}</p>
          <div className="mt-3 flex gap-1.5" role="img" aria-label={barLabel(view.score, DEMO_QUESTION_COUNT)}>
            {Array.from({ length: DEMO_QUESTION_COUNT }, (_, i) => (
              <span key={i} className={`h-3 flex-1 rounded-full ${i < view.score ? 'bg-emerald-500' : 'bg-slate-200'}`} />
            ))}
          </div>
          <p className="mt-3 text-lg text-slate-800">{resultLine(view.score, DEMO_QUESTION_COUNT)}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={SIGNUP_HREF} className="inline-flex min-h-12 items-center justify-center rounded-xl bg-brand-orange px-6 py-3 text-lg font-extrabold text-white shadow-sm">Start practising free</a>
            <button type="button" onClick={() => start(view.grade)} className="min-h-12 rounded-xl border-2 border-slate-200 px-5 py-2 font-bold text-slate-700">Try 3 more</button>
            <button type="button" onClick={() => setView({ kind: 'pick' })} className="min-h-12 rounded-xl border-2 border-slate-200 px-5 py-2 font-bold text-slate-700">Another grade</button>
          </div>
        </div>
      )}
    </section>
  );
}

const GradePicker = ({ onPick }: { onPick: (g: number) => void }) => (
  <fieldset className="mt-5">
    <legend className="mb-2 font-bold text-slate-800">Which grade are you in?</legend>
    <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
      {DEMO_GRADE_CHOICES.map((g) => (
        <button key={g} type="button" onClick={() => onPick(g)} className="min-h-12 rounded-xl border-2 border-indigo-200 bg-indigo-50 px-2 py-2 text-lg font-extrabold text-indigo-800 hover:bg-indigo-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" aria-label={`Grade ${g}`}>
          {g}
        </button>
      ))}
    </div>
  </fieldset>
);

const Quiz = ({ view, onAnswer, onNext, nextRef }: { view: Extract<View, { kind: 'quiz' }>; onAnswer: (o: string) => void; onNext: () => void; nextRef: React.RefObject<HTMLButtonElement | null> }) => {
  const q = view.questions[view.index];
  const answered = view.picked !== null;
  const correct = view.picked === q.answer;
  const last = view.index + 1 >= view.questions.length;
  return (
    <div className="mt-5">
      <p className="text-sm font-bold text-slate-600">Question {view.index + 1} of {view.questions.length} · {q.subject}</p>
      <div className="mt-1 flex gap-1.5" aria-hidden>
        {view.questions.map((_, i) => <span key={i} className={`h-1.5 flex-1 rounded-full ${i <= view.index ? 'bg-indigo-500' : 'bg-slate-200'}`} />)}
      </div>
      <h3 className="mt-3 text-lg font-extrabold leading-snug text-slate-900" id={`demo-q-${view.index}`}><Text>{q.prompt}</Text></h3>
      <ul className="mt-3 flex flex-col gap-2" aria-labelledby={`demo-q-${view.index}`}>
        {q.options.map((o, i) => {
          const isKey = o === q.answer;
          const isPicked = o === view.picked;
          const style = !answered
            ? 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50'
            : isKey
              ? 'border-emerald-500 bg-emerald-50'
              : isPicked
                ? 'border-amber-400 bg-amber-50'
                : 'border-slate-200 bg-white opacity-70';
          return (
            <li key={o}>
              <button
                type="button"
                onClick={() => onAnswer(o)}
                aria-disabled={answered}
                aria-pressed={isPicked}
                className={`flex min-h-12 w-full items-center gap-3 rounded-xl border-2 px-3 py-2 text-left font-semibold text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${style}`}
              >
                <span aria-hidden className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-extrabold text-slate-700">{optionLetter(i)}</span>
                <span className="min-w-0 flex-1"><Text>{o}</Text></span>
                {answered && isKey && <span className="shrink-0 text-sm font-extrabold text-emerald-700">✓ Answer</span>}
                {answered && isPicked && !isKey && <span className="shrink-0 text-sm font-bold text-amber-800">Your answer</span>}
              </button>
            </li>
          );
        })}
      </ul>
      <div role="status" aria-live="polite" className="mt-3 min-h-6">
        {answered && (
          <div className={`rounded-xl p-3 ${correct ? 'bg-emerald-50 text-emerald-900' : 'bg-amber-50 text-amber-900'}`}>
            <p className="font-extrabold">{correct ? RIGHT_LINE : <>{WRONG_PREFIX}<Text>{q.answer}</Text>{/[.!?]$/.test(q.answer.trim()) ? '' : '.'}</>}</p>
            {q.explanation && <p className="mt-1 text-slate-800"><Text>{q.explanation}</Text></p>}
          </div>
        )}
      </div>
      {answered && (
        <button ref={nextRef} type="button" onClick={onNext} className="mt-3 min-h-12 rounded-xl bg-indigo-600 px-6 py-2 text-lg font-extrabold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-800">
          {last ? 'See my result' : 'Next question'}
        </button>
      )}
    </div>
  );
};
