import type { Metadata } from 'next';
import TeacherArea from '../../components/teacher/TeacherArea';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Your classes', robots: { index: false, follow: false, nocache: true }, referrer: 'no-referrer' };

export default function TeacherPage() {
  return <TeacherArea />;
}
