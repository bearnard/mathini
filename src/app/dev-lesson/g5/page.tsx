import { notFound } from 'next/navigation';
import type { ComponentType } from 'react';

// DEV ONLY: renders any Grade 5 lesson by position so a browser check can open it (docs/notes/browser-check.md).
// In a production build NODE_ENV is "production", the branch below is removed and this grade's Preview.tsx is not bundled; the route answers 404.
export const dynamic = 'force-dynamic';

export default async function DevLessonGrade5Page() {
  if (process.env.NODE_ENV !== 'production') {
    const mod = await import('./Preview');
    const Preview = mod.default as ComponentType;
    return <Preview />;
  }
  notFound();
}
