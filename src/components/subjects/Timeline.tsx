'use client';

export interface TimelineEvent {
  date: string;
  title: string;
  description?: string;
  color?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

const COLORS = [
  'bg-blue-500',
  'bg-emerald-500',
  'bg-amber-500',
  'bg-red-500',
  'bg-purple-500',
  'bg-cyan-500',
  'bg-rose-500',
  'bg-indigo-500',
];

/**
 * Vertical timeline for history and sequential topics.
 *
 * Usage:
 *   <Timeline events={[
 *     { date: '1917', title: 'Russian Revolution', description: 'Tsar Nicholas II abdicates.' },
 *     { date: '1918', title: 'End of WWI', description: 'Armistice signed on 11 November.' },
 *   ]} />
 */
const Timeline = ({ events, className }: TimelineProps) => {
  return (
    <div className={`relative ${className ?? ''}`}>
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" />
      <div className="space-y-4">
        {events.map((ev, i) => {
          const dot = ev.color ?? COLORS[i % COLORS.length];
          return (
            <div key={i} className="relative flex gap-4 pl-10">
              {/* Dot */}
              <div className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full ${dot} ring-2 ring-white z-10`} />
              <div className="flex-1 rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-bold text-slate-500 text-xs uppercase tracking-wide">{ev.date}</span>
                  <span className="font-semibold text-slate-800">{ev.title}</span>
                </div>
                {ev.description && (
                  <p className="mt-1 text-sm text-slate-600">{ev.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
