import { Suspense } from 'react';
import ReviewsPage from '../../../components/admin/reviews/ReviewsPage';

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
      <ReviewsPage />
    </Suspense>
  );
}
