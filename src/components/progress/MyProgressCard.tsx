'use client';

import Link from 'next/link';
import { TrendingUp, ChevronRight } from 'lucide-react';
import Card from '../ui/Card';
import type { Teaser } from './teaser';

/** The dashboard's way into /progress. Shown to signed-in learners; the optional teaser comes from the API. */
export default function MyProgressCard({ teaser }: { teaser: Teaser | null }) {
  return (
    <Link href="/progress" aria-label="My progress" className="mb-4 block">
      <Card variant="interactive" className="flex min-h-14 items-center justify-between gap-3 border-indigo-200 bg-indigo-50 p-4 md:p-5">
        <div className="flex min-w-0 items-center gap-3 md:gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-bold text-slate-800 md:text-lg">My progress</h3>
            <p className="text-sm font-medium text-slate-600">
              {teaser ? <span className="font-bold text-emerald-700">{teaser.text}</span> : 'See how you are growing'}
            </p>
          </div>
        </div>
        <ChevronRight className="h-5 w-5 shrink-0 text-indigo-400" />
      </Card>
    </Link>
  );
}
