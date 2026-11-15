import type { Metadata } from 'next';
import ParentDashboard from '../../components/parents/ParentDashboard';

// Never indexed or cached (next.config.ts adds the same rules as response headers).
export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Your children', robots: { index: false, follow: false, nocache: true }, referrer: 'no-referrer' };

export default function Page() {
  return <ParentDashboard />;
}
