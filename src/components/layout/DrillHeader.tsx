'use client';

import type { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';

interface DrillHeaderProps {
  onBack?: () => void;
  title: string;
  countLabel?: string;
  icon?: ReactNode;
}

export default function DrillHeader({ onBack, title, countLabel, icon }: DrillHeaderProps) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <div className="w-20 shrink-0">
        {onBack ? (
          <Button variant="ghost" size="sm" onClick={onBack} className="min-h-11 px-2">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back
          </Button>
        ) : null}
      </div>
      <div className="flex min-w-0 flex-1 items-center justify-center gap-2 text-brand-blue">
        {icon}
        <h2 className="truncate text-center text-lg font-bold tracking-tight md:text-xl">
          {title}
        </h2>
      </div>
      <div className="flex w-20 shrink-0 justify-end">
        {countLabel ? (
          <span className="rounded-full bg-brand-blue/10 px-2 py-1 text-xs font-bold text-brand-blue">
            {countLabel}
          </span>
        ) : null}
      </div>
    </div>
  );
}
