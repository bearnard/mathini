import type { Metadata } from 'next';
import SchoolArea from '../../components/school/SchoolArea';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Your school', robots: { index: false, follow: false, nocache: true }, referrer: 'no-referrer' };

export default function SchoolPage() {
  return <SchoolArea />;
}
