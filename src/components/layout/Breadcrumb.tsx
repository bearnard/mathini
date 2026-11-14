'use client';

import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface BreadcrumbItem {
  id: string;
  label: string;
  onClick?: () => void;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  if (items.length === 0) return null;
  return (
    <nav aria-label="Breadcrumb" className="w-full overflow-x-auto">
      <ol className="flex min-w-0 items-center gap-1 py-1 text-sm">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.id} className="flex min-w-0 items-center gap-1">
              {i > 0 && (
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-300" aria-hidden />
              )}
              {item.onClick && !last ? (
                <button
                  type="button"
                  onClick={item.onClick}
                  className="truncate rounded-md px-1.5 py-1 font-semibold text-brand-blue hover:bg-brand-blue/10"
                >
                  {item.label}
                </button>
              ) : (
                <span
                  className={cn(
                    'truncate px-1.5 py-1 font-semibold',
                    last ? 'text-slate-700' : 'text-slate-500',
                  )}
                  aria-current={last ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
