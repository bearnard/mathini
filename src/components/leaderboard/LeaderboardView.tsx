'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useStudent } from '../../lib/client/StudentContext';

type Scope = 'overall' | 'grade' | 'subject' | 'topic';

interface LeaderboardEntry {
  rank: number;
  displayName: string;
  avatar: string;
  xp: number;
  correctCount: number;
  totalCount: number;
}

export default function LeaderboardView({
  onBack,
  onRefresh,
}: {
  onBack: () => void;
  onRefresh: () => void;
}) {
  const { student } = useStudent();
  const [scope, setScope] = useState<Scope>('overall');
  const [filterValue, setFilterValue] = useState<string>(student?.grade.toString() ?? '');
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchLeaderboard = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set('scope', scope);
      if (scope === 'grade' && filterValue) params.set('grade', filterValue);
      if (scope === 'subject' && filterValue) params.set('subject', filterValue);
      if (scope === 'topic' && filterValue) params.set('topic', filterValue);

      const res = await fetch(`/api/leaderboard?${params}`);
      if (!res.ok) throw new Error('Failed to load leaderboard');
      const data = await res.json();
      setLeaderboard((data as { leaderboard?: LeaderboardEntry[] })?.leaderboard ?? []);
    } catch (err) {
      console.error('Leaderboard error:', err);
    } finally {
      setLoading(false);
    }
  }, [scope, filterValue]);

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  const scopes: { key: Scope; label: string }[] = [
    { key: 'overall', label: 'Overall' },
    { key: 'grade', label: 'Grade' },
    { key: 'subject', label: 'Subject' },
    { key: 'topic', label: 'Topic' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
      >
        ← Back
      </button>

      <div className="flex items-center gap-3">
        <Trophy className="w-7 h-7 text-amber-500" />
        <h1 className="text-2xl font-bold text-slate-800">Leaderboard</h1>
      </div>

      {/* Scope tabs */}
      <div className="flex flex-wrap gap-2">
        {scopes.map((s) => (
          <button
            key={s.key}
            onClick={() => setScope(s.key)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              scope === s.key
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50',
            )}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Filter controls */}
      {scope !== 'overall' && (
        <div className="flex gap-3">
          {scope === 'grade' && (
            <select
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="rounded-xl border-2 border-slate-200 bg-white px-4 py-2 text-sm"
            >
              {Array.from({ length: 8 }, (_, i) => (
                <option key={i + 5} value={i + 5}>
                  Grade {i + 5}
                </option>
              ))}
            </select>
          )}
          {scope === 'subject' && (
            <select
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="rounded-xl border-2 border-slate-200 bg-white px-4 py-2 text-sm"
            >
              <option value="">All subjects</option>
              <option value="math">Mathematics</option>
              <option value="nst">Natural Sciences & Technology</option>
              <option value="geo">Geography</option>
              <option value="his">History</option>
              <option value="eng">English</option>
              <option value="xho">isiXhosa</option>
              <option value="afr">Afrikaans</option>
            </select>
          )}
          {scope === 'topic' && (
            <input
              type="text"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              placeholder="Topic slug (e.g. whole-numbers)"
              className="rounded-xl border-2 border-slate-200 bg-white px-4 py-2 text-sm flex-1"
            />
          )}
        </div>
      )}

      {/* Leaderboard table */}
      {loading ? (
        <div className="flex justify-center py-12">
          <span className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
        </div>
      ) : (
        <div className="space-y-2">
          {leaderboard.map((entry) => {
            const isCurrentStudent = student && entry.displayName === student.displayName;
            const isTop3 = entry.rank <= 3;

            return (
              <motion.div
                key={entry.rank}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: entry.rank * 0.03 }}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl transition-colors',
                  isCurrentStudent
                    ? 'bg-indigo-50 border-2 border-indigo-300'
                    : 'bg-white border border-slate-100 hover:bg-slate-50',
                )}
              >
                {/* Rank */}
                <div className={cn(
                  'w-8 text-center font-bold text-lg',
                  entry.rank === 1 ? 'text-amber-500' :
                  entry.rank === 2 ? 'text-slate-400' :
                  entry.rank === 3 ? 'text-amber-700' :
                  'text-slate-400',
                )}>
                  {isTop3 ? <Award className="w-5 h-5 mx-auto" /> : `#${entry.rank}`}
                </div>

                {/* Avatar */}
                <img
                  src={entry.avatar}
                  alt={entry.displayName}
                  className="w-8 h-8 rounded-full object-cover"
                />

                {/* Name + You tag */}
                <div className="flex-1 min-w-0">
                  <span className="font-medium text-slate-800 truncate block">
                    {entry.displayName}
                  </span>
                </div>
                {isCurrentStudent && (
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">
                    You
                  </span>
                )}

                {/* XP */}
                <div className="text-right">
                  <div className="font-bold text-indigo-600">{entry.xp} XP</div>
                  <div className="text-xs text-slate-400">
                    {entry.correctCount}/{entry.totalCount}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {leaderboard.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              <p>No data yet — start practising to appear on the leaderboard!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
