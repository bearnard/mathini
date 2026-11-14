import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './admin.css';
import { authorizeRequest } from '../../lib/server/admin/guard';

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
};
export const dynamic = 'force-dynamic';

// Sets the viewer's saved theme before first paint (no flash). Per-viewer convenience only.
// It runs while the HTML is parsed, so it stamps the wrapper that contains it.
const themeScript = `try{var t=localStorage.getItem('pp_admin_theme');if(t==='light'||t==='dark')document.currentScript.parentElement.dataset.theme=t}catch(e){}`;

/**
 * Defence in depth: Cloudflare Access sits in front of /admin, and this layout verifies the
 * Access assertion again. If it fails (or the config is missing) nothing from the console is rendered.
 * The data itself is only reachable through /api/admin/*, which is guarded separately.
 */
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const h = await headers();
  const auth = await authorizeRequest((name) => h.get(name));
  if (!auth.ok) {
    return (
      <main className="admin-root" style={{ display: 'grid', placeItems: 'center', padding: 24 }}>
        <div className="admin-card" style={{ padding: 32, maxWidth: 420, textAlign: 'center' }}>
          <h1 style={{ fontSize: 22, fontWeight: 700 }}>403 Forbidden</h1>
          <p className="admin-secondary" style={{ marginTop: 8 }}>You do not have access to this page.</p>
        </div>
      </main>
    );
  }
  return (
    // suppressHydrationWarning: the inline script below may set data-theme on this element before React hydrates.
    <div className="admin-root" suppressHydrationWarning>
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      {children}
    </div>
  );
}
