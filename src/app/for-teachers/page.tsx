import AdultLanding from '../../components/seo/AdultLanding';
import { FOR_TEACHERS } from '../../lib/seo/adultPages';
import { adultPageMeta } from '../../lib/seo/pageMeta';

export const metadata = adultPageMeta(FOR_TEACHERS);

export default function ForTeachersPage() {
  return <AdultLanding page={FOR_TEACHERS} other={{ href: '/for-parents', label: 'PrepPals for parents' }} />;
}
