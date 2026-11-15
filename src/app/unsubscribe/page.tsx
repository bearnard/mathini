import type { Metadata } from 'next';
import UnsubscribePage from '../../components/parents/UnsubscribePage';

// Never indexed or cached (next.config.ts adds the same rules as response headers).
export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Weekly summary email', robots: { index: false, follow: false, nocache: true }, referrer: 'no-referrer' };

export default function Page() {
  return <UnsubscribePage />;
}
