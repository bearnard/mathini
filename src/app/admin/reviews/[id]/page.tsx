import { Suspense } from 'react';
import ReviewPackPage from '../../../../components/admin/reviews/ReviewPackPage';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
      <ReviewPackPage packId={id} />
    </Suspense>
  );
}
