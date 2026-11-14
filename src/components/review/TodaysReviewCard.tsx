'use client';

import { RotateCcw, ChevronRight } from 'lucide-react';
import Card from '../ui/Card';
import { REVIEW_SESSION_SIZE } from '../../lib/server/review/due';

/** Entry point on the Grade 6 home screens. The parent only renders it when something is due. */
export default function TodaysReviewCard({ dueCount, onStart }: { dueCount: number; onStart: () => void }) {
  const n = Math.min(dueCount, REVIEW_SESSION_SIZE);
  return (
    <Card variant="interactive" onClick={onStart} className="mb-4 flex min-h-14 items-center justify-between gap-3 border-amber-200 bg-amber-50 p-4 md:p-5" aria-label={`Today's review, ${n} questions`}>
      <div className="flex min-w-0 items-center gap-3 md:gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
          <RotateCcw className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-bold text-slate-800 md:text-lg">Today&apos;s review</h3>
          <p className="text-sm font-medium text-slate-600">{n} {n === 1 ? 'question' : 'questions'} to bring back, mixed topics</p>
        </div>
      </div>
      <ChevronRight className="h-5 w-5 shrink-0 text-amber-400" />
    </Card>
  );
}
