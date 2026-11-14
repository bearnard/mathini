'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
const KEY = 'pp_admin_theme';

function systemTheme(): Theme {
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

/** Auto (OS) by default; the button pins light or dark for this viewer (saved in localStorage, optional). */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  const root = () => document.querySelector<HTMLElement>('.admin-root');

  useEffect(() => {
    const stamped = root()?.dataset.theme;
    setTheme(stamped === 'light' || stamped === 'dark' ? stamped : systemTheme());
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    const r = root();
    if (r) r.dataset.theme = next;
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* the choice still applies for this page load */
    }
    setTheme(next);
  };

  return (
    <button type="button" className="admin-btn" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
      {theme === 'dark' ? '☀ Light' : '☾ Dark'}
    </button>
  );
}
