'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * A box that scrolls sideways when its content is wider than the screen, and SAYS so: a fade on the edge that has more to see, and a line under it
 * ("Swipe to see more") while there is more to the right. Nothing shows when the content fits.
 */
export default function ScrollBox({ children, label = 'Swipe sideways to see more columns' }: { children: ReactNode; label?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [more, setMore] = useState({ left: false, right: false });
  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const left = el.scrollLeft > 4;
    const right = el.scrollLeft + el.clientWidth < el.scrollWidth - 4;
    setMore((m) => (m.left === left && m.right === right ? m : { left, right }));
  }, []);
  useEffect(() => {
    measure();
    const el = ref.current;
    window.addEventListener('resize', measure);
    const ro = typeof ResizeObserver === 'undefined' || !el ? null : new ResizeObserver(measure);
    if (el && ro) { ro.observe(el); if (el.firstElementChild) ro.observe(el.firstElementChild); }
    return () => { window.removeEventListener('resize', measure); ro?.disconnect(); };
  }, [measure]);
  return (
    <div>
      {(more.right || more.left) && <p className="mb-1.5 text-xs font-medium text-slate-600" role="note">{label} →</p>}
      <div className="relative rounded-xl border border-slate-200">
        <div ref={ref} onScroll={measure} className="overflow-x-auto rounded-xl">{children}</div>
        {more.right && <span aria-hidden="true" data-scroll-cue="right" className="pointer-events-none absolute inset-y-0 right-0 w-8 rounded-r-xl bg-gradient-to-l from-slate-400/40 to-transparent" />}
        {more.left && <span aria-hidden="true" data-scroll-cue="left" className="pointer-events-none absolute inset-y-0 left-0 w-8 rounded-l-xl bg-gradient-to-r from-slate-400/40 to-transparent" />}
      </div>
    </div>
  );
}
