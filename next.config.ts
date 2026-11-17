import type { NextConfig } from 'next';
import { nextRedirects } from './src/lib/seo/legacyRedirects';

// Teacher-review pages and API are private: never cache them, never send a Referer, never index them.
const privateHeaders = [
  { key: 'Cache-Control', value: 'no-store' },
  { key: 'Referrer-Policy', value: 'no-referrer' },
  { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ['scholar.hibbins.org', '192.168.0.12', '127.0.0.1'],
  // Permanent (308) redirects for public pages that moved in a curriculum restructure; see src/lib/seo/legacyRedirects.ts.
  async redirects() {
    return nextRedirects();
  },
  async headers() {
    return [
      { source: '/teacher-review', headers: privateHeaders },
      { source: '/teacher-review/:path*', headers: privateHeaders },
      { source: '/api/teacher-review/:path*', headers: privateHeaders },
      { source: '/api/teacher-review', headers: privateHeaders },
      // Adult sign-in (ADR 0003): the pages and the API are never cached, indexed or sent as a referrer.
      { source: '/sign-in', headers: privateHeaders },
      { source: '/sign-in/:path*', headers: privateHeaders },
      { source: '/account', headers: privateHeaders },
      { source: '/parent', headers: privateHeaders },
      { source: '/parent/:path*', headers: privateHeaders },
      { source: '/invite-parent', headers: privateHeaders },
      { source: '/unsubscribe', headers: privateHeaders },
      { source: '/api/unsubscribe', headers: privateHeaders },
      { source: '/api/parent/:path*', headers: privateHeaders },
      { source: '/api/students/me/parent-invite', headers: privateHeaders },
      { source: '/api/auth/:path*', headers: privateHeaders },
    ];
  },
};

export default nextConfig;

// Enables local Cloudflare bindings (getCloudflareContext) during `next dev`.
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
