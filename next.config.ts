import type { NextConfig } from 'next';

// Teacher-review pages and API are private: never cache them, never send a Referer, never index them.
const privateHeaders = [
  { key: 'Cache-Control', value: 'no-store' },
  { key: 'Referrer-Policy', value: 'no-referrer' },
  { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ['scholar.hibbins.org', '192.168.0.12', '127.0.0.1'],
  async headers() {
    return [
      { source: '/teacher-review', headers: privateHeaders },
      { source: '/teacher-review/:path*', headers: privateHeaders },
      { source: '/api/teacher-review/:path*', headers: privateHeaders },
      { source: '/api/teacher-review', headers: privateHeaders },
    ];
  },
};

export default nextConfig;

// Enables local Cloudflare bindings (getCloudflareContext) during `next dev`.
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
