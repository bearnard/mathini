import type { NextConfig } from 'next';

const nextConfig: NextConfig = {};

export default nextConfig;

// Enables local Cloudflare bindings (getCloudflareContext) during `next dev`.
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
module.exports = {
  allowedDevOrigins: ['scholar.hibbins.org', '192.168.0.12', '127.0.0.1'],
}
