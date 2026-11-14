'use client';

import { ArrowLeft } from 'lucide-react';

interface TopicHeaderProps {
  gradeTitle?: string;
  subjectTitle?: string;
  termTitle?: string;
  topicTitle: string;
  onBack: () => void;
}

export default function TopicHeader({
  gradeTitle,
  subjectTitle,
  termTitle,
  topicTitle,
  onBack,
}: TopicHeaderProps) {
  const mobileCrumb = [gradeTitle, subjectTitle].filter(Boolean).join(' › ');
  const desktopCrumb = [gradeTitle, subjectTitle, termTitle].filter(Boolean).join(' · ');

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 pt-safe backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100"
          title="Back to topics"
          aria-label="Back to topics"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-xs font-semibold text-slate-400 md:hidden">
            {mobileCrumb}
          </span>
          <span className="hidden truncate text-xs font-semibold text-slate-400 md:block">
            {desktopCrumb}
          </span>
          <span className="truncate font-bold text-slate-800">{topicTitle}</span>
        </div>
      </div>
    </header>
  );
}
