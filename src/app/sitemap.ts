import type { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/seo/site';
import { SEO_GRADES } from '../lib/seo/curriculumIndex';

export default function sitemap(): MetadataRoute.Sitemap {
  const subjectPages: MetadataRoute.Sitemap = SEO_GRADES.flatMap((grade) =>
    grade.subjects.map((subject) => ({
      url: `${SITE_URL}/${grade.gradeSlug}/${subject.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  );

  return [
    {
      url: SITE_URL,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...subjectPages,
  ];
}
