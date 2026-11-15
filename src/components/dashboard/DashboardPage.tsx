import type { ReactNode } from 'react';

/**
 * The frame of a dashboard page (teacher, parent): one column on a phone, centred and at most about 1200 px wide on a desktop. Server-safe: no state.
 * Colours, radius and type follow the landing page and My progress: white cards with a slate border and a soft shadow, indigo for emphasis, orange for the main action.
 */
export function DashboardPage({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <main className={`mx-auto w-full max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8 ${className}`}>{children}</main>;
}

/** A grid of cards: one column on a phone, two from md, three from xl. Give a card `span` to make it wider. */
export function DashboardGrid({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 ${className}`}>{children}</div>;
}

/** `wide`: two columns from md (two thirds on a big screen). `full`: the whole row. `min-w-0` lets wide content shrink instead of pushing the grid. */
const SPAN = { one: '', wide: 'md:col-span-2', full: 'md:col-span-2 xl:col-span-3' } as const;
export function GridItem({ children, span = 'one', className = '' }: { children: ReactNode; span?: keyof typeof SPAN; className?: string }) {
  return <div className={`min-w-0 ${SPAN[span]} ${className}`}>{children}</div>;
}
