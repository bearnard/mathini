// Shared by the pool scripts: run wrangler without a shell, and read rows from local D1, production D1 (READ ONLY) or a JSON file.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

export const DATABASE_NAME = 'preppals';
export const DATABASE_ID = '46f7b6a0-c555-4168-ae45-681dba2ceec2';
export const VECTORIZE_INDEX = 'preppals-questions';

export function wrangler(args: string[], opts: { persistTo?: string } = {}): string {
  const full = ['wrangler', ...args, ...(opts.persistTo && args.includes('--local') ? ['--persist-to', opts.persistTo] : [])];
  return execFileSync('npx', full, { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] });
}

export function argValue(argv: string[], name: string): string | undefined {
  const i = argv.indexOf(name);
  if (i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--')) return argv[i + 1];
  const eq = argv.find((a) => a.startsWith(`${name}=`));
  return eq?.slice(name.length + 1);
}

/** SELECT rows with wrangler --json. `source`: "local", "remote" (production, read only) or "file:PATH" (wrangler --json output or a plain array). */
export function selectRows<T>(sql: string, source: string, persistTo?: string): T[] {
  if (source.startsWith('file:')) {
    const parsed = JSON.parse(fs.readFileSync(source.slice(5), 'utf8')) as unknown;
    if (Array.isArray(parsed) && parsed[0] && typeof parsed[0] === 'object' && 'results' in (parsed[0] as object)) return (parsed as { results: T[] }[]).flatMap((p) => p.results);
    return parsed as T[];
  }
  if (source !== 'local' && source !== 'remote') throw new Error(`--source must be local, remote or file:PATH, got "${source}"`);
  const out = wrangler(['d1', 'execute', DATABASE_NAME, `--${source}`, '--json', '--command', sql], { persistTo });
  const parsed = JSON.parse(out) as { results: T[] }[];
  return parsed.flatMap((p) => p.results);
}

export function chunk<T>(a: T[], n: number): T[][] {
  return Array.from({ length: Math.ceil(a.length / n) }, (_, i) => a.slice(i * n, (i + 1) * n));
}

/**
 * item_cache ids whose question is RETIRED by moderation (questions.status = 'retired', joined by questions.legacy_item_id). The quality
 * backfill and the pool purge must leave those rows alone: moderation stores quality_score = 0 on them and keeps the old score for a reinstate.
 * An exported FILE source has no questions table, so nothing is skipped there (a warning says so).
 */
export function retiredItemIds(source: string, persistTo?: string): Set<number> {
  if (source.startsWith('file:')) { console.warn('warning: --source file:... has no questions table, so retired questions cannot be skipped'); return new Set(); }
  try {
    return new Set(selectRows<{ id: number }>("SELECT legacy_item_id AS id FROM questions WHERE status = 'retired' AND legacy_item_id IS NOT NULL", source, persistTo).map((r) => r.id));
  } catch (e) {
    console.warn(`warning: could not read retired questions (is migration 0008 applied?): ${(e as Error).message.split('\n')[0]}`);
    return new Set();
  }
}
