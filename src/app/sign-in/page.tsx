import type { Metadata } from 'next';
import SignInForm from '../../components/adultAuth/SignInForm';

// Adult sign-in (ADR 0003 section 2). Never indexed or cached (next.config.ts adds the same rules as response headers).
export const metadata: Metadata = { title: 'Sign in', robots: { index: false, follow: false, nocache: true }, referrer: 'no-referrer' };

export default function SignInPage() {
  return <SignInForm />;
}
