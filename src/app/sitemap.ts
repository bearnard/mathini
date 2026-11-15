import type { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/seo/site';
import { publicPaths } from '../lib/seo/publicPaths';

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths().map((p) => ({ url: p.path === '/' ? SITE_URL : `${SITE_URL}${p.path}`, changeFrequency: p.changeFrequency, priority: p.priority }));
}
