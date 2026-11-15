import type { ReactNode } from 'react';
import type { LearnStep } from '@/components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';
import { Check, Mistake, Rule, Worked } from './LessonBlocks';
import type { XhLesson, XhWordParts } from './xhosaLessonData';

const palette = ['bg-indigo-100 text-indigo-800', 'bg-emerald-100 text-emerald-800', 'bg-amber-100 text-amber-800', 'bg-rose-100 text-rose-800', 'bg-sky-100 text-sky-800', 'bg-violet-100 text-violet-800'];

/** A word broken into labelled parts. Plain markup, wraps on a phone. */
export const WordParts = ({ word, en, parts }: XhWordParts) => (
  <figure className="rounded-xl bg-white p-4 text-center shadow-sm" aria-label={`${word} (${en}) is built from: ${parts.map((p) => `${p.t} (${p.label})`).join(', ')}`}>
    <div className="flex flex-wrap items-start justify-center gap-1.5" aria-hidden="true">
      {parts.map((p, i) => (
        <div key={i} className={`min-w-0 rounded-lg px-3 py-2 ${palette[i % palette.length]}`}>
          <div className="text-xl font-bold">{p.t}</div>
          <div className="text-xs font-semibold">{p.label}</div>
        </div>
      ))}
    </div>
    <figcaption className="mt-2 text-sm text-slate-600"><strong>{word}</strong> = {en}</figcaption>
  </figure>
);

const slide = (children: ReactNode) => <div className="space-y-4">{children}</div>;

/** Turns structured lesson data into the "one idea per slide" steps, ending with "Check yourself". */
export function xhosaSteps(lesson: XhLesson): LearnStep[] {
  const steps: LearnStep[] = lesson.slides.map((s) => ({
    title: s.title,
    content: slide(
      <>
        <Rule>{s.rule}</Rule>
        {s.wordParts ? <WordParts {...s.wordParts} /> : null}
        <Worked
          title={s.workedTitle}
          steps={s.examples.map((e, i) => (
            <span key={i}>
              <strong lang="xh">{e.xh}</strong> <span className="text-slate-500">— {e.en}</span>
            </span>
          ))}
        />
        {s.mistake ? <Mistake>{s.mistake}</Mistake> : null}
        {s.vocab ? (
          <div className="flex flex-wrap justify-center gap-3">
            {s.vocab.map((v) => (
              <PronunciationPlayer key={v.word} word={v.word} phonetic={v.phonetic} meaning={v.meaning} lang="xh" />
            ))}
          </div>
        ) : null}
      </>,
    ),
  }));
  steps.push({
    title: 'Check yourself',
    content: slide(
      <>
        {lesson.checks.map((c, i) => (
          <Check key={i} question={c.q} answer={c.a} />
        ))}
      </>,
    ),
  });
  return steps;
}
