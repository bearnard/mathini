import type { Metadata } from 'next';
import ReviewApp from '../../components/teacherReview/ReviewApp';

// A reviewer's link is /teacher-review#<token>. The token is in the URL fragment, which browsers never send to a server, so it
// is not in request logs. The page is still never indexed, cached or sent as a referrer (next.config.ts adds the same rules
// as response headers).
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Content review',
  robots: { index: false, follow: false, nocache: true },
  referrer: 'no-referrer',
};

export default function TeacherReviewPage() {
  return <ReviewApp />;
}
