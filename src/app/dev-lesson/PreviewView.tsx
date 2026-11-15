'use client';

// DEV_LESSON_PREVIEW_ONLY: this marker must never appear in a production build (scripts/check-no-admin-bypass.mjs looks for it).
// /dev-lesson/g8?s=3&t=0&i=2[&step=4] shows topic i of term t of subject s in Grade 8, opened at slide `step` (0 based).
// With no query it lists that grade's lessons with a link. One route per grade, so a dev server compiles one grade at a time.

import { Suspense, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { StudentProvider } from '../../lib/client/StudentContext';
import { findTopic, listTopics, parseTopicRef, topicQuery } from '../../lib/devLessonPreview';
import type { Grade } from '../../types/curriculum';

/** Clicks the lesson's Next button until the highlighted progress dot is slide `step`. */
function useOpenAtStep(step: number, key: string) {
  useEffect(() => {
    if (step <= 0) return;
    const iv = setInterval(() => {
      const dots = [...document.querySelectorAll('[class*="rounded-full"]')].filter((e) => /bg-(indigo-600|slate-200)/.test(String(e.className)));
      const idx = dots.findIndex((e) => /bg-indigo-600/.test(String(e.className)));
      const next = [...document.querySelectorAll('button')].find((b) => b.textContent?.trim() === 'Next');
      if (next && idx >= 0 && idx < step) next.click();
      else if (idx >= step) clearInterval(iv);
    }, 250);
    return () => clearInterval(iv);
  }, [step, key]);
}

function Inner({ grades }: { grades: Grade[] }) {
  const q = useSearchParams();
  const entries = useMemo(() => listTopics(grades), [grades]);
  const ref = parseTopicRef(q, grades[0].id);
  const entry = ref ? findTopic(entries, ref) : null;
  useOpenAtStep(ref?.step ?? 0, ref ? topicQuery(ref) : '');

  if (!ref) {
    return (
      <main style={{ padding: 16, fontFamily: 'sans-serif' }}>
        <h1>Lesson preview (dev only): {grades[0].title}, {entries.length} lessons</h1>
        <ul>
          {entries.map((e) => (
            <li key={topicQuery(e)}><a href={`?${topicQuery(e)}`}>{e.gradeTitle} · {e.subjectTitle} · {e.termTitle} · {e.topic.title}</a></li>
          ))}
        </ul>
      </main>
    );
  }
  if (!entry) return <p>No such lesson.</p>;
  const Lesson = entry.topic.component;
  return (
    <StudentProvider>
      <Suspense fallback={<p>loading</p>}>
        <Lesson />
      </Suspense>
    </StudentProvider>
  );
}

export default function PreviewView({ grades }: { grades: Grade[] }) {
  return (
    <Suspense fallback={null}>
      <Inner grades={grades} />
    </Suspense>
  );
}
