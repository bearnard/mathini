import type { Metadata } from 'next';
import InviteMaker from '../../components/parents/InviteMaker';

// Never indexed or cached (next.config.ts adds the same rules as response headers).
export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Link a parent', robots: { index: false, follow: false, nocache: true }, referrer: 'no-referrer' };

export default function Page() {
  return <InviteMaker />;
}
