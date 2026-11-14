'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/admin', label: 'Overview' },
  { href: '/admin/learners', label: 'Learners' },
  { href: '/admin/questions', label: 'Questions' },
];

export default function AdminNav() {
  const path = usePathname() ?? '';
  return (
    <nav aria-label="Admin" style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface-1)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 16px', display: 'flex', gap: 4, alignItems: 'center', minHeight: 44, flexWrap: 'wrap' }}>
        <strong style={{ marginRight: 12, fontSize: 14 }}>PrepPals admin</strong>
        {LINKS.map((l) => {
          const active = l.href === '/admin' ? path === '/admin' : path.startsWith(l.href);
          return (
            <Link key={l.href} href={l.href} aria-current={active ? 'page' : undefined} className="admin-link" style={{ padding: '8px 10px', borderRadius: 8, background: active ? 'var(--surface-2)' : 'transparent', color: active ? 'var(--text-primary)' : undefined }}>
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
