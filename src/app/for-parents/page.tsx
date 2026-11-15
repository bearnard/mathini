import AdultLanding from '../../components/seo/AdultLanding';
import { FOR_PARENTS } from '../../lib/seo/adultPages';
import { adultPageMeta } from '../../lib/seo/pageMeta';

export const metadata = adultPageMeta(FOR_PARENTS);

export default function ForParentsPage() {
  return <AdultLanding page={FOR_PARENTS} other={{ href: '/for-teachers', label: 'PrepPals for teachers' }} />;
}
