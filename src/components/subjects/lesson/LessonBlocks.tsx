import type { ReactNode } from 'react';

/**
 * Building blocks for a "one idea per slide" lesson: the rule, a worked example with every step,
 * a common mistake, and a self-check with the answer hidden until the learner asks for it.
 * Plain server-renderable markup (no state), so every slide is easy to test and screenshot.
 */

export const Rule = ({ children }: { children: ReactNode }) => (
  <div className="rounded-xl border-l-4 border-indigo-500 bg-indigo-50 p-4 text-left">
    <p className="text-xs font-bold uppercase tracking-wide text-indigo-700">The rule</p>
    <div className="mt-1 text-lg font-semibold text-slate-800">{children}</div>
  </div>
);

export const Worked = ({ title, steps }: { title?: ReactNode; steps: ReactNode[] }) => (
  <div className="rounded-xl bg-emerald-50 p-4 text-left">
    <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">Worked example</p>
    {title ? <p className="mt-1 font-semibold text-slate-800">{title}</p> : null}
    <ol className="mt-2 space-y-1.5">
      {steps.map((s, i) => (
        <li key={i} className="flex gap-2 text-slate-700">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">{i + 1}</span>
          <span className="min-w-0 flex-1 break-words">{s}</span>
        </li>
      ))}
    </ol>
  </div>
);

export const Mistake = ({ children }: { children: ReactNode }) => (
  <div className="rounded-xl border-l-4 border-rose-500 bg-rose-50 p-4 text-left">
    <p className="text-xs font-bold uppercase tracking-wide text-rose-700">Common mistake</p>
    <div className="mt-1 text-slate-700">{children}</div>
  </div>
);

/**
 * A "Check yourself" block. Two shapes:
 *  - one question: `<Check question={...} answer={...} />`
 *  - several questions: `<Check questions={[<>Q1</>, <>Q2</>]} answers={[<>A1</>, <>A2</>]} />`: ONE hidden answer per question, so the learner
 *    can try each question and reveal only its own answer. The lists must have the same length.
 * Never put a list of questions under one answer (src/checkPerQuestion.test.ts fails on that).
 */
export const Check = (
  props: { question: ReactNode; answer: ReactNode; questions?: undefined; answers?: undefined } | { questions: ReactNode[]; answers: ReactNode[]; question?: undefined; answer?: undefined },
) => {
  const header = <p className="text-xs font-bold uppercase tracking-wide text-amber-700">Check yourself</p>;
  if (props.questions) {
    const answers = props.answers;
    return (
      <div className="rounded-xl bg-amber-50 p-4 text-left">
        {header}
        <ol className="mt-1 list-decimal space-y-4 pl-5 text-lg text-slate-800">
          {props.questions.map((q, i) => (
            <li key={i}>
              <div>{q}</div>
              <details className="mt-2 rounded-lg bg-white/70 p-3 text-base">
                <summary className="cursor-pointer font-semibold text-amber-800">Show the answer</summary>
                <div className="mt-2 text-slate-700">{answers[i]}</div>
              </details>
            </li>
          ))}
        </ol>
      </div>
    );
  }
  return (
    <div className="rounded-xl bg-amber-50 p-4 text-left">
      {header}
      <div className="mt-1 text-lg text-slate-800">{props.question}</div>
      <details className="mt-3 rounded-lg bg-white/70 p-3">
        <summary className="cursor-pointer font-semibold text-amber-800">Show the answer</summary>
        <div className="mt-2 text-slate-700">{props.answer}</div>
      </details>
    </div>
  );
};
