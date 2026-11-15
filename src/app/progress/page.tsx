import type { Metadata } from 'next';
import ProgressPage from '../../components/progress/ProgressPage';

export const metadata: Metadata = {
  title: 'My progress',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ProgressPage />;
}
