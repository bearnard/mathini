import { Suspense } from 'react';
import ProposalsPage from '../../../components/admin/proposals/ProposalsPage';

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
      <ProposalsPage />
    </Suspense>
  );
}
