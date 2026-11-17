'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { nbspTextNodes } from '../lib/shared/nbspNumbers';

/** Keeps every big number in the lesson and question text on one line (see lib/shared/nbspNumbers.ts). Draws no box of its own. */
const NbspScope = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  // After every render, so text that React rewrites (a new question, a new slide) is fixed too.
  useEffect(() => {
    if (ref.current) nbspTextNodes(ref.current);
  });
  return <div ref={ref} className="contents">{children}</div>;
};

export default NbspScope;
