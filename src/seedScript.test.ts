import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

// Wiring guards for scripts/seed-questions.ts and scripts/load-secrets.sh (the behaviour itself is unit-tested in lib/server/seedRuntime.test.ts).
// They exist because refill run 1 (2026-11-14) failed in exactly these places.
const seed = fs.readFileSync('scripts/seed-questions.ts', 'utf8');
const loader = fs.readFileSync('scripts/load-secrets.sh', 'utf8');

test('(a) every Cloudflare call goes through the auth guard; a failed auth aborts the run with exit code 3 and the run summary', () => {
  assert.doesNotMatch(seed, /CF_HEADERS/, 'no direct token headers: all calls use cf()');
  assert.match(seed, /authGuard\.call\(/);
  assert.match(seed, /throw new AuthError\(res\.status/);
  assert.match(seed, /if \(TOKEN_REFRESHABLE\) await authGuard\.ensureFresh\(\)/, 'refresh before the run');
  assert.match(seed, /await d1Query\("SELECT 1 AS ok"\)/, 'a cheap authenticated probe BEFORE any generation quota is spent');
  const probe = seed.indexOf('SELECT 1 AS ok'), generate = seed.indexOf('await generateTasks(chunk)');
  assert.ok(probe > 0 && generate > probe, 'the probe comes before the first generation call');
  assert.match(seed, /err instanceof AuthAbort[\s\S]{0,200}process\.exit\(3\)/);
  assert.match(seed, /wrangler whoami/);
});

test('(b) Gemini generation and embedding retry transient errors with backoff', () => {
  assert.match(seed, /async function generateTasks[\s\S]*retryTransient[\s\S]*tries: 4/);
  assert.match(seed, /genLimiter\.throttle\(\)/, 'the RPM/daily limiter still runs before every attempt');
  assert.match(seed, /throw new HttpError\(429, "Gemini rate limit", genLimiter\.fullWindowReset\(\)\)/);
  assert.match(seed, /async function embedBatch[\s\S]*retryTransient/);
  assert.match(seed, /marking these tasks for a later run/, 'out of attempts -> the batch tasks are marked failed, not silently skipped');
  assert.match(seed, /for \(const spec of chunk\) if \(!progress\.failed\.includes\(spec\.slug\)\) progress\.failed\.push\(spec\.slug\)/);
});

test('(c) the summary is THIS RUN only, with the progress-file total labelled separately', () => {
  assert.doesNotMatch(seed, /Seed complete!/);
  assert.doesNotMatch(seed, /total questions inserted across/);
  assert.match(seed, /runStats\.render\(\{ totalInserted: progress\.totalInserted/);
  assert.match(seed, /taskStats\.generated \+= generated\.length/);
  assert.match(seed, /taskStats\.rejected \+= qualityRejected\.length/);
});

test('(d) a failed duplicate check never becomes an insert', () => {
  assert.doesNotMatch(seed, /inserting anyway/);
  assert.match(seed, /processTaskItems\(/);
  assert.match(seed, /taskOutcome\(taskStats, stopped\)/);
  assert.doesNotMatch(seed, /catch \(err\) \{\s*console\.warn\(`\s*⚠️\s*Vectorize query failed/);
});

function sourceLoader(env: Record<string, string>) {
  return spawnSync('bash', ['-c', 'source scripts/load-secrets.sh >/dev/null 2>&1; echo "token=$CF_API_TOKEN source=$CF_TOKEN_SOURCE"'], { env: { PATH: process.env.PATH ?? '', HOME: process.env.HOME ?? '', ...env } as unknown as NodeJS.ProcessEnv, encoding: 'utf8' as const });
}

test('load-secrets.sh refreshes the wrangler OAuth token BEFORE reading it and marks it refreshable', () => {
  assert.match(loader, /wrangler whoami/);
  assert.match(loader, /export CF_TOKEN_SOURCE=wrangler-oauth/);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'wr-'));
  fs.mkdirSync(path.join(dir, 'config'));
  const cfg = path.join(dir, 'config', 'default.toml');
  fs.writeFileSync(cfg, 'oauth_token = "OLD.TOKEN"\n');
  // the "refresh" rewrites the config, as `wrangler whoami` does for an expired token: the loader must read the NEW token
  const refresh = `bash -c 'printf "oauth_token = \\"NEW.TOKEN\\"\\n" > ${cfg}'`;
  const r = sourceLoader({ WRANGLER_HOME: dir, WRANGLER_REFRESH_CMD: refresh, GEMINI_API_KEY: 'g', CF_ACCOUNT_ID: 'a' });
  assert.match(r.stdout, /token=NEW\.TOKEN source=wrangler-oauth/);
});

test('load-secrets.sh: a token you supply yourself is used as is and marked NOT refreshable; a failed refresh only warns', () => {
  const r = sourceLoader({ CF_API_TOKEN: 'mine', GEMINI_API_KEY: 'g', CF_ACCOUNT_ID: 'a' });
  assert.match(r.stdout, /token=mine source=env/);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'wr-'));
  fs.mkdirSync(path.join(dir, 'config'));
  fs.writeFileSync(path.join(dir, 'config', 'default.toml'), 'oauth_token = "STILL.THERE"\n');
  const failed = sourceLoader({ WRANGLER_HOME: dir, WRANGLER_REFRESH_CMD: 'false', GEMINI_API_KEY: 'g', CF_ACCOUNT_ID: 'a' });
  assert.match(failed.stdout, /token=STILL\.THERE source=wrangler-oauth/);
});
