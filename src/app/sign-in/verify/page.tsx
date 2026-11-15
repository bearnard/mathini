import type { Metadata } from 'next';
import VerifyLink from '../../../components/adultAuth/VerifyLink';

// A sign-in link is /sign-in/verify#<token>. The token is in the fragment, so it never reaches a server log.
export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Sign in', robots: { index: false, follow: false, nocache: true }, referrer: 'no-referrer' };

export default function VerifyPage() {
  return <VerifyLink />;
}
