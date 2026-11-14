'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '../../lib/client/analytics';
import { isTrackablePath } from '../../lib/client/analyticsCore';

/** Sends one page_view per route change. Only the path is sent, never the query string. */
export default function PageViewTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (isTrackablePath(pathname)) track('page_view', { path: pathname });
  }, [pathname]);
  return null;
}
