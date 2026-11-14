#!/usr/bin/env node
// Fails (exit 1) if the admin dev-bypass flag name appears anywhere in a PRODUCTION build output.
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

const NEEDLE = 'ADMIN_DEV_BYPASS';
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
        if (fs.readFileSync(p, 'utf8').includes(NEEDLE)) hits.push(p);
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
    console.error(`FAIL: "${NEEDLE}" is present in the production build:\n  ${bad.join('\n  ')}`);
    process.exit(1);
  }
  console.log(`OK: scanned ${total} build files; "${NEEDLE}" is not present.`);
}
