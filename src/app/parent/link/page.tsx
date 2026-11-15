import type { Metadata } from 'next';
import InviteLanding from '../../../components/parents/InviteLanding';

// Never indexed or cached (next.config.ts adds the same rules as response headers).
export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Link your child', robots: { index: false, follow: false, nocache: true }, referrer: 'no-referrer' };

export default function Page() {
  return <InviteLanding />;
}
