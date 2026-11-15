import type { Metadata } from 'next';
import TeacherQuestions from '../../../components/teacher/TeacherQuestions';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Question bank', robots: { index: false, follow: false, nocache: true }, referrer: 'no-referrer' };

export default function TeacherQuestionsPage() {
  return <TeacherQuestions />;
}
