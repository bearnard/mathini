import { Suspense } from 'react';
import TeachersPage from '../../../components/admin/teachers/TeachersPage';

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
      <TeachersPage />
    </Suspense>
  );
}
