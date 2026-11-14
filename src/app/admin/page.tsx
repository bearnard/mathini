import { Suspense } from 'react';
import Dashboard from '../../components/admin/Dashboard';

export default function AdminPage() {
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
      <Dashboard />
    </Suspense>
  );
}
