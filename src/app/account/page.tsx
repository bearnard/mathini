import type { Metadata } from 'next';
import AccountPanel from '../../components/adultAuth/AccountPanel';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Your account', robots: { index: false, follow: false, nocache: true }, referrer: 'no-referrer' };

export default function AccountPage() {
  return <AccountPanel />;
}
