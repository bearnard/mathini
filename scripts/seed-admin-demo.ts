// Seeds the LOCAL D1 with fake data for the admin dashboard. LOCAL ONLY.
//
//   node --import tsx scripts/seed-admin-demo.ts --setup   # create tables in the local DB if missing, then seed
//   node --import tsx scripts/seed-admin-demo.ts           # (re)seed demo data
//   node --import tsx scripts/seed-admin-demo.ts --clean   # remove ONLY the demo rows
//
// Safety: this script has no remote code path. Every database call below goes through
// run() which always passes "--local" to wrangler, and refuses to run if "--remote"
// (or a Cloudflare token) is present.

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { buildDemoSql, DEMO_CLEAN_SQL } from './demo-data';

const root = path.resolve(import.meta.dirname, '..');
const args = process.argv.slice(2);

if (args.includes('--remote') || process.env.CLOUDFLARE_API_TOKEN) {
  console.error('Refusing to run: this script only ever touches the LOCAL database.');
  process.exit(1);
}

const wrangler = path.join(root, 'node_modules', '.bin', 'wrangler');
const tmpDir = path.join(root, '.wrangler', 'demo');
fs.mkdirSync(tmpDir, { recursive: true });

function run(extra: string[]): string {
  const r = spawnSync(wrangler, ['d1', 'execute', 'preppals', '--local', ...extra], { cwd: root, encoding: 'utf8' });
  if (r.status !== 0) {
    console.error(r.stdout, r.stderr);
    throw new Error('wrangler failed');
  }
  return r.stdout;
}
const runFile = (sql: string, name: string) => {
  const f = path.join(tmpDir, name);
  fs.writeFileSync(f, sql);
  run(['--file', f]);
};
const queryOne = (sql: string): unknown => {
  const out = run(['--command', sql, '--json']);
  return JSON.parse(out)[0]?.results?.[0];
};

function setup() {
  // d1/schema.sql + migrations, skipping what is already there (0002 also alters
  // item_cache, which d1/schema.sql already includes, so that part is dropped).
  runFile(fs.readFileSync(path.join(root, 'd1', 'schema.sql'), 'utf8'), 'schema.sql');
  const m = (n: string) => fs.readFileSync(path.join(root, 'migrations', n), 'utf8');
  runFile(
    m('0002_students_results_gamification.sql')
      .replace(/ALTER TABLE item_cache[^;]*;/g, '')
      .replace(/CREATE INDEX IF NOT EXISTS idx_item_cache_task_section[^;]*;/g, ''),
    '0002.sql',
  );
  runFile(m('0003_events.sql'), '0003.sql');
  const hasConsent = queryOne("SELECT COUNT(*) AS n FROM pragma_table_info('students') WHERE name = 'parent_consent_at'") as { n: number } | undefined;
  if (!hasConsent || hasConsent.n === 0) runFile(m('0004_parent_consent.sql'), '0004.sql');
  console.log('Local tables are ready.');
}

if (args.includes('--setup')) setup();

if (args.includes('--clean')) {
  runFile(DEMO_CLEAN_SQL, 'clean.sql');
  console.log('Removed all demo rows from the LOCAL database.');
} else {
  const { sql, stats } = buildDemoSql();
  runFile(sql, 'seed.sql');
  console.log(`Seeded LOCAL demo data: ${stats.learners} learners (${stats.consented} with parent agreement), ${stats.events} events, ${stats.attempts} attempts, ${stats.badges} badges, ${stats.firstDay} to ${stats.lastDay}.`);
}
