import { Suspense } from 'react';
import LearnersPage from '../../../components/admin/LearnersPage';

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
      <LearnersPage />
    </Suspense>
  );
}
