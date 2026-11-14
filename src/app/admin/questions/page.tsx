import { Suspense } from 'react';
import QuestionsPage from '../../../components/admin/QuestionsPage';

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
      <QuestionsPage />
    </Suspense>
  );
}
