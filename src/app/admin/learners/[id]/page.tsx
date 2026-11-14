import { Suspense } from 'react';
import LearnerDetail from '../../../../components/admin/LearnerDetail';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
      <LearnerDetail id={id} />
    </Suspense>
  );
}
