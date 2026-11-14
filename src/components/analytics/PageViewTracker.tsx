'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '../../lib/client/analytics';

/** Sends one page_view per route change. Only the path is sent, never the query string. */
export default function PageViewTracker() {
  const pathname = usePathname();
  useEffect(() => {
    track('page_view', { path: pathname });
  }, [pathname]);
  return null;
}
