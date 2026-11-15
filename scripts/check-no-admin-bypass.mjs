#!/usr/bin/env node
// Fails (exit 1) if the admin dev-bypass flag name, or the dev-only lesson preview marker, appears anywhere in a PRODUCTION build output.
//
// The bypass is `process.env.NODE_ENV === 'development' && process.env.ADMIN_DEV_BYPASS === '1'`
// (src/lib/server/admin/guard.ts). `next build` inlines NODE_ENV as "production", so the whole
// expression is removed from the bundle. If the literal name is still in the output, the bypass
// could survive into production, so this check must fail.
//
// Source maps (.map) are skipped on purpose: they contain the ORIGINAL source text, including
// comments that name the flag, but they are never executed.
//
//   node scripts/check-no-admin-bypass.mjs [dir ...]      (default: .next/server and .next/static)

import fs from 'node:fs';
import path from 'node:path';

// ADMIN_DEV_BYPASS: the admin guard's dev bypass. DEV_LESSON_PREVIEW_ONLY: the marker in src/app/dev-lesson/Preview.tsx, the
// dev-only lesson preview, which must not be bundled into production either.
const NEEDLES = ['ADMIN_DEV_BYPASS', 'DEV_LESSON_PREVIEW_ONLY'];
const MAX_BYTES = 64 * 1024 * 1024;

export function scan(dir) {
  const hits = [];
  let files = 0;
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(m?js|cjs|json|html|rsc|txt)$/.test(e.name) && fs.statSync(p).size <= MAX_BYTES) {
        files++;
        const text = fs.readFileSync(p, 'utf8');
        for (const needle of NEEDLES) if (text.includes(needle)) hits.push({ file: p, needle });
      }
    }
  };
  if (fs.existsSync(dir)) walk(dir);
  return { hits, files };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const dirs = process.argv.slice(2);
  const targets = dirs.length ? dirs : ['.next/server', '.next/static'];
  let total = 0;
  const bad = [];
  for (const d of targets) {
    if (!fs.existsSync(d)) {
      console.error(`Directory not found: ${d} (run a production build first)`);
      process.exit(2);
    }
    const r = scan(d);
    total += r.files;
    bad.push(...r.hits);
  }
  if (total === 0) {
    console.error('No build files were scanned. Refusing to report success.');
    process.exit(2);
  }
  if (bad.length) {
    console.error(`FAIL: dev-only code is present in the production build:\n  ${bad.map((b) => `"${b.needle}" in ${b.file}`).join('\n  ')}`);
    process.exit(1);
  }
  console.log(`OK: scanned ${total} build files; ${NEEDLES.map((n) => `"${n}"`).join(' and ')} not present.`);
}
