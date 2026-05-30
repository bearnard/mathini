'use client';

import dynamic from 'next/dynamic';

// The app is a fully client-side interactive SPA (three.js, framer-motion,
// canvas-confetti). Render it client-only to avoid running browser APIs
// during SSR on the Cloudflare Worker.
const App = dynamic(() => import('../App'), { ssr: false });

export default function Page() {
  return <App />;
}
