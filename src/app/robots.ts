import type { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/seo/site';
import { PRIVATE_PREFIXES } from '../lib/seo/publicPaths';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: [...PRIVATE_PREFIXES] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
