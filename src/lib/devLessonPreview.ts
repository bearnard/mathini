// Dev-only lesson preview (see src/app/dev-lesson). Pure helpers: which topic a URL names, and the list of every topic. No React, no I/O.

import type { Grade, Topic } from '../types/curriculum';

/** The preview exists only outside production builds. next build inlines NODE_ENV, so a production bundle drops it. */
export const devPreviewEnabled = (env: { NODE_ENV?: string }): boolean => env.NODE_ENV !== 'production';

export interface TopicRef {
  /** Grade id (5 to 12), then the subject, term and topic positions within it. */
  g: number;
  s: number;
  t: number;
  i: number;
}

export interface TopicEntry extends TopicRef {
  gradeTitle: string;
  subjectTitle: string;
  termTitle: string;
  topic: Topic;
}

export function listTopics(grades: Grade[]): TopicEntry[] {
  const out: TopicEntry[] = [];
  for (const grade of grades) {
    grade.subjects.forEach((subject, s) => {
      subject.terms.forEach((term, t) => {
        term.topics.forEach((topic, i) => out.push({ g: grade.id, s, t, i, gradeTitle: grade.title, subjectTitle: subject.title, termTitle: term.title, topic }));
      });
    });
  }
  return out;
}

const int = (v: string | null | undefined): number | null => (v !== null && v !== undefined && /^\d{1,3}$/.test(v) ? Number(v) : null);

/** Reads ?s=3&t=0&i=2 (and the optional &step=4) for grade `g` (the route says which). Null when anything is missing or not a small whole number. */
export function parseTopicRef(q: { get(name: string): string | null }, g: number): (TopicRef & { step: number }) | null {
  const s = int(q.get('s'));
  const t = int(q.get('t'));
  const i = int(q.get('i'));
  if (s === null || t === null || i === null) return null;
  return { g, s, t, i, step: int(q.get('step')) ?? 0 };
}

export function findTopic(entries: TopicEntry[], ref: TopicRef): TopicEntry | null {
  return entries.find((e) => e.g === ref.g && e.s === ref.s && e.t === ref.t && e.i === ref.i) ?? null;
}

/** The query string of a lesson's preview URL (the grade is in the path: /dev-lesson/g8). */
export const topicQuery = (r: TopicRef, step?: number): string => `s=${r.s}&t=${r.t}&i=${r.i}${step ? `&step=${step}` : ''}`;
export const topicPath = (r: TopicRef, step?: number): string => `/dev-lesson/g${r.g}?${topicQuery(r, step)}`;
