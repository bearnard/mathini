'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { triggerConfetti } from '../../lib/confetti';

interface BadgeUnlockModalProps {
  badges: string[];
  onDismiss: () => void;
}

interface BadgeMeta {
  title: string;
  emoji: string;
}

const BADGE_META: Record<string, BadgeMeta> = {
  'first-correct':    { title: 'First Correct',     emoji: '⭐' },
  'streak-3':         { title: '3-Answer Streak',    emoji: '🔥' },
  'streak-5':         { title: '5-Answer Streak',    emoji: '🔥' },
  'streak-10':        { title: '10-Answer Streak',   emoji: '🔥' },
  'xp-500':           { title: '500 XP',             emoji: '🏅' },
  'xp-2000':          { title: '2 000 XP',           emoji: '🥈' },
  'xp-5000':          { title: '5 000 XP',           emoji: '🏆' },
  'topic-complete-5': { title: 'Topic Starter',      emoji: '📖' },
  'topic-complete-20':{ title: 'Topic Master',       emoji: '📖' },
  'perfect-set-5':    { title: 'Perfect 5',          emoji: '✨' },
  'perfect-set-10':   { title: 'Perfect 10',         emoji: '👑' },
};

export default function BadgeUnlockModal({ badges, onDismiss }: BadgeUnlockModalProps) {
  const [index, setIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (badges.length > 0) {
      triggerConfetti();
      setIndex(0);
      setImgError(false);
    }
  }, [badges]);

  if (badges.length === 0) return null;

  const id = badges[index];
  const meta = BADGE_META[id] ?? { title: id, emoji: '🏅' };
  const isLast = index === badges.length - 1;
  const hasMultiple = badges.length > 1;

  const handleNext = () => {
    if (isLast) {
      onDismiss();
    } else {
      setImgError(false);
      setIndex((i) => i + 1);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        onClick={() => {}}
      >
        <motion.div
          key={id}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full text-center space-y-4"
          onClick={(e) => e.stopPropagation()}
        >
          {hasMultiple && (
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {index + 1} of {badges.length}
            </p>
          )}

          <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest">
            Badge Unlocked!
          </p>

          <div className="flex justify-center">
            {imgError ? (
              <span className="text-6xl">{meta.emoji}</span>
            ) : (
              <img
                src={`/badges/${id}.webp`}
                alt={meta.title}
                className="w-24 h-24 rounded-full object-cover ring-4 ring-indigo-100"
                onError={() => setImgError(true)}
              />
            )}
          </div>

          <h2 className="text-2xl font-bold text-slate-800">{meta.title}</h2>

          <button
            onClick={handleNext}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            {isLast ? 'Keep going!' : 'Next →'}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
