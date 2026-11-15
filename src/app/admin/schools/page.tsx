import { Suspense } from 'react';
import SchoolsPage from '../../../components/admin/schools/SchoolsPage';

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
      <SchoolsPage />
    </Suspense>
  );
}
