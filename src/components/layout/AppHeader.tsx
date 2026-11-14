'use client';

import { Trophy, LogOut } from 'lucide-react';
import type { Student } from '../../lib/client/StudentContext';
import { cn } from '../../lib/utils';

interface AppHeaderProps {
  student: Student | null;
  leaderboardActive: boolean;
  onToggleLeaderboard: () => void;
  onSignOut: () => void;
}

export default function AppHeader({
  student,
  leaderboardActive,
  onToggleLeaderboard,
  onSignOut,
}: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 pt-safe backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4">
        <div className="flex min-w-0 items-center gap-2">
          {student && (
            <>
              <img
                src={student.avatar}
                alt=""
                className="h-8 w-8 shrink-0 rounded-full object-cover ring-2 ring-brand-yellow/60"
              />
              <span className="truncate text-sm font-semibold text-slate-700">
                {student.displayName}
              </span>
              <span className="shrink-0 rounded-full bg-brand-yellow/25 px-2 py-0.5 text-xs font-bold text-amber-800">
                {student.xp} XP
              </span>
            </>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={onToggleLeaderboard}
            className={cn(
              'inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors',
              leaderboardActive
                ? 'bg-brand-blue/15 text-brand-blue'
                : 'text-slate-500 hover:bg-slate-100',
            )}
            title="Leaderboard"
            aria-label="Leaderboard"
            aria-pressed={leaderboardActive}
          >
            <Trophy className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onSignOut}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            title="Switch student"
            aria-label="Log out"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
