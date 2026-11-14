import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '../lib/seo/site';
import PageViewTracker from '../components/analytics/PageViewTracker';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — CAPS Practice for Grades 5–12`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: SITE_NAME,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — CAPS Practice for Grades 5–12`,
    description: SITE_DESCRIPTION,
    // images intentionally omitted — auto-populated from opengraph-image.tsx
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — CAPS Practice for Grades 5–12`,
    description: SITE_DESCRIPTION,
    // images intentionally omitted — auto-populated from opengraph-image.tsx
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f7f6f0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PageViewTracker />
        {children}
      </body>
    </html>
  );
}
