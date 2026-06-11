'use client';

import { Award } from 'lucide-react';
import { cn } from '../../lib/utils';

interface BadgeChipProps {
  id: string;
  title: string;
  tier?: 'bronze' | 'silver' | 'gold';
  iconPath?: string; // generated image path (e.g. /badges/streak-10.webp)
  size?: 'sm' | 'md';
}

const TIER_COLORS = {
  bronze: 'text-amber-700 bg-amber-50 border-amber-200',
  silver: 'text-slate-500 bg-slate-100 border-slate-300',
  gold: 'text-amber-500 bg-amber-100 border-amber-300',
};

const TIER_ICONS = {
  bronze: '🥉',
  silver: '🥈',
  gold: '🥇',
};

export default function BadgeChip({
  id,
  title,
  tier = 'bronze',
  iconPath,
  size = 'sm',
}: BadgeChipProps) {
  const sizeClasses = size === 'sm'
    ? 'px-2 py-0.5 text-xs'
    : 'px-3 py-1 text-sm';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border font-medium transition-colors',
        TIER_COLORS[tier],
        sizeClasses,
      )}
      title={title}
    >
      {iconPath ? (
        <img
          src={iconPath}
          alt={title}
          className="w-4 h-4 rounded-full"
        />
      ) : (
        <span>{TIER_ICONS[tier]}</span>
      )}
      <span>{title}</span>
      <Award className="w-3 h-3 opacity-50" />
    </span>
  );
}
