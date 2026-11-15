import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { applyChanges, checkPath, countOccurrences, parseQueueExport, reportMarkdown, statusSql, type QueueRow } from './applyChanges';

const row = (o: Partial<QueueRow> & { id: number }): QueueRow => ({ file: 'a/B.tsx', old_text: 'x', new_text: 'y', item_id: null, status: 'pending', ...o });
const reader = (files: Record<string, string>) => (f: string) => (f in files ? files[f] : null);

test('countOccurrences counts non-overlapping matches and 0 for an empty needle', () => {
  assert.equal(countOccurrences('aaaa', 'aa'), 2);
  assert.equal(countOccurrences('abc', 'd'), 0);
  assert.equal(countOccurrences('abc', ''), 0);
});

test('applies a change whose old text occurs exactly once', () => {
  const r = applyChanges([row({ id: 1, old_text: 'Die kat', new_text: 'Die hond' })], reader({ 'a/B.tsx': 'x Die kat sit. y' }));
  assert.equal(r.results[0].outcome, 'applied');
  assert.equal(r.files.get('a/B.tsx'), 'x Die hond sit. y');
});

test('refuses when old is missing, ambiguous, empty, unchanged or the file is missing', () => {
  const files = reader({ 'a/B.tsx': 'one two one' });
  const out = (o: Partial<QueueRow> & { id: number }) => applyChanges([row(o)], files).results[0];
  assert.match(out({ id: 1, old_text: 'three', new_text: 'z' }).reason, /not found/);
  assert.match(out({ id: 2, old_text: 'one', new_text: 'z' }).reason, /2 times/);
  assert.match(out({ id: 3, old_text: '', new_text: 'z' }).reason, /empty/);
  assert.match(out({ id: 4, old_text: 'two', new_text: 'two' }).reason, /same/);
  assert.match(out({ id: 5, file: 'a/Missing.tsx', old_text: 'one', new_text: 'z' }).reason, /file not found/);
  for (const i of [1, 2, 3, 4, 5]) assert.equal(out({ id: i, old_text: i === 3 ? '' : 'one', new_text: 'z', file: i === 5 ? 'q/N.tsx' : 'a/B.tsx' }).outcome, 'refused');
});

test('a refused row never changes the file, and the other rows still apply', () => {
  const r = applyChanges(
    [row({ id: 1, old_text: 'zzz', new_text: 'q' }), row({ id: 2, old_text: 'two', new_text: '2' })],
    reader({ 'a/B.tsx': 'one two' }),
  );
  assert.deepEqual(r.results.map((x) => x.outcome), ['refused', 'applied']);
  assert.equal(r.files.get('a/B.tsx'), 'one 2');
});

test('changes to one file run in id order and each sees the result of the one before', () => {
  const rows = [row({ id: 2, old_text: 'B', new_text: 'C' }), row({ id: 1, old_text: 'A', new_text: 'B' })];
  // id 1 turns A into B, so at id 2 "B" occurs twice and is refused; applied in the wrong order it would give "C B".
  const r = applyChanges(rows, reader({ 'a/B.tsx': 'A B' }));
  assert.deepEqual(r.results.map((x) => [x.id, x.outcome]), [[1, 'applied'], [2, 'refused']]);
  assert.equal(r.files.get('a/B.tsx'), 'B B');
});

test('only pending rows are processed', () => {
  const r = applyChanges([row({ id: 1, status: 'applied' }), row({ id: 2, status: 'failed' })], reader({ 'a/B.tsx': 'x' }));
  assert.deepEqual(r.results.map((x) => x.outcome), ['skipped', 'skipped']);
  assert.equal(r.files.size, 0);
});

test('"$&" and "$1" in the new text are written literally', () => {
  const r = applyChanges([row({ id: 1, old_text: 'cost', new_text: 'R$& and $1' })], reader({ 'a/B.tsx': 'the cost is' }));
  assert.equal(r.files.get('a/B.tsx'), 'the R$& and $1 is');
});

test('checkPath allows relative .ts/.tsx lesson paths only', () => {
  assert.equal(checkPath('grade6/afrikaans/term2/x/X.tsx'), null);
  for (const bad of ['', '/etc/passwd', 'C:/x.tsx', '../x.tsx', 'a/../../x.tsx', 'a//x.tsx', './x.tsx', 'a\\b.tsx', 'a/b.json', 'a/b.test.ts', 'a/b\0.tsx', '.env']) {
    assert.notEqual(checkPath(bad), null, `should refuse ${JSON.stringify(bad)}`);
  }
  const r = applyChanges([row({ id: 1, file: '../../.dev.vars.ts' })], reader({}));
  assert.equal(r.results[0].outcome, 'refused');
});

test('parseQueueExport accepts the three export shapes and rejects bad rows', () => {
  const rows = [{ id: 1, file: 'a.tsx', old_text: 'o', new_text: 'n', status: 'pending' }];
  assert.equal(parseQueueExport(rows).length, 1);
  assert.equal(parseQueueExport({ results: rows }).length, 1);
  assert.equal(parseQueueExport([{ results: rows, success: true }, { results: rows }]).length, 2);
  assert.equal(parseQueueExport([{ id: 1, file: 'a.tsx', old_text: 'o', new_text: 'n' }])[0].status, 'pending');
  assert.throws(() => parseQueueExport('nope'));
  assert.throws(() => parseQueueExport([{ id: 1, file: 'a.tsx', old_text: 'o' }]), /new_text/);
  assert.throws(() => parseQueueExport([{ id: 1, file: 'a.tsx', old_text: 1, new_text: 'n' }]), /strings/);
});

test('statusSql escapes quotes, marks refused rows failed and ignores skipped rows', () => {
  const sql = statusSql(
    [
      { id: 1, file: 'a.tsx', outcome: 'applied', reason: 'ok' },
      { id: 2, file: 'a.tsx', outcome: 'refused', reason: "old text not found\nsecond line" },
      { id: 3, file: 'a.tsx', outcome: 'skipped', reason: 'status' },
      { id: '4; DROP TABLE x', file: 'a.tsx', outcome: 'applied', reason: 'ok' },
    ],
    "ab'c",
  );
  assert.match(sql, /status = 'applied', applied_commit = 'ab''c' WHERE id = 1 /);
  assert.match(sql, /status = 'failed' WHERE id = 2 AND status = 'pending'; -- old text not found second line/);
  assert.doesNotMatch(sql, /id = 3/);
  assert.doesNotMatch(sql, /DROP/);
});

test('reportMarkdown counts outcomes and escapes pipes', () => {
  const md = reportMarkdown([{ id: 1, file: 'a.tsx', outcome: 'refused', reason: 'a | b' }], 'dry-run');
  assert.match(md, /0 would apply, 1 refused, 0 skipped/);
  assert.match(md, /a \\\| b/);
});

// End to end: a temporary git repo, the real CLI.
test('CLI: dry run writes nothing; --apply changes the file; dirty files and bad rows are refused', () => {
  const tsxLoader = import.meta.resolve('tsx');
  const script = path.resolve('scripts/apply-review-changes.ts');
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'review-changes-'));
  try {
    const git = (...a: string[]) => execFileSync('git', a, { cwd: dir, encoding: 'utf8' });
    git('init', '-q');
    git('config', 'user.email', 't@example.invalid');
    git('config', 'user.name', 't');
    fs.mkdirSync(path.join(dir, 'src/curriculum/g6'), { recursive: true });
    fs.writeFileSync(path.join(dir, 'src/curriculum/g6/A.tsx'), 'const a = "Die kat sit.";\n');
    fs.writeFileSync(path.join(dir, 'src/curriculum/g6/D.tsx'), 'const d = "Die kat sit.";\n');
    git('add', '-A');
    git('commit', '-q', '-m', 'init');
    const queue = [
      { id: 1, file: 'g6/A.tsx', old_text: 'Die kat sit.', new_text: 'Die hond slaap.', status: 'pending' },
      { id: 2, file: 'g6/A.tsx', old_text: 'nowhere', new_text: 'x', status: 'pending' },
      { id: 3, file: 'g6/D.tsx', old_text: 'Die kat sit.', new_text: 'Die vis swem.', status: 'pending' },
      { id: 4, file: '../../outside.tsx', old_text: 'a', new_text: 'b', status: 'pending' },
    ];
    fs.writeFileSync(path.join(dir, 'queue.json'), JSON.stringify(queue));
    const run = (...a: string[]) => spawnSync('node', ['--import', tsxLoader, script, 'queue.json', ...a], { cwd: dir, encoding: 'utf8' });

    const dry = run('--sql', 'out.sql');
    assert.equal(dry.status, 1, dry.stderr);
    assert.match(dry.stdout, /dry-run: 4 rows, 2 would apply, 2 refused/);
    assert.equal(fs.readFileSync(path.join(dir, 'src/curriculum/g6/A.tsx'), 'utf8'), 'const a = "Die kat sit.";\n');
    assert.ok(fs.existsSync(path.join(dir, 'review-changes-report.md')));
    assert.match(fs.readFileSync(path.join(dir, 'out.sql'), 'utf8'), /status = 'applied'/);

    fs.writeFileSync(path.join(dir, 'src/curriculum/g6/D.tsx'), 'const d = "Die kat sit.";\n// edited\n'); // uncommitted edit
    const real = run('--apply');
    assert.equal(real.status, 1);
    assert.match(real.stdout, /apply: 4 rows, 1 applied, 3 refused/);
    assert.equal(fs.readFileSync(path.join(dir, 'src/curriculum/g6/A.tsx'), 'utf8'), 'const a = "Die hond slaap.";\n');
    assert.match(fs.readFileSync(path.join(dir, 'src/curriculum/g6/D.tsx'), 'utf8'), /Die kat sit\./);
    assert.match(fs.readFileSync(path.join(dir, 'review-changes-report.md'), 'utf8'), /uncommitted/);
    assert.equal(run().status, 1); // second dry run: id 1 is now "not found"
    assert.equal(spawnSync('node', ['--import', tsxLoader, script], { cwd: dir }).status, 2); // no queue argument
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
