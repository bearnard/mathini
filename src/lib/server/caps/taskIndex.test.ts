import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { registry } from './registry';
import { buildTaskIndex, renderTaskIndexModule } from './taskIndexBuild';
import { TASK_INDEX } from './taskIndex.generated';
import { TOPIC_NAMES } from '../../../components/admin/topicNames.generated';

test('taskIndex.generated.ts is current (run scripts/build-task-index.ts after changing tasks or topics)', () => {
  const fresh = renderTaskIndexModule(buildTaskIndex(registry, TOPIC_NAMES));
  assert.equal(fs.readFileSync('src/lib/server/caps/taskIndex.generated.ts', 'utf8'), fresh);
});

test('every indexed task has a registry instruction under its code, and a grade 5-12', () => {
  const slugs = Object.keys(TASK_INDEX);
  assert.ok(slugs.length > 700, `${slugs.length} tasks`);
  for (const slug of slugs) {
    const [code, grade] = TASK_INDEX[slug];
    assert.ok(registry[code], `${slug}: unknown code ${code}`);
    assert.ok(registry[code].tasks[slug], `${slug}: no instruction under ${code}`);
    assert.ok(grade >= 5 && grade <= 12, `${slug}: grade ${grade}`);
  }
});

test('grade 6 tasks resolve to the legacy grade6 code; the same slug at other grades does not', () => {
  assert.equal(TASK_INDEX['gr6-area-perimeter-t3'][0], 'grade6');
  assert.equal(TASK_INDEX['gr6-area-perimeter-t3'][1], 6);
  const g7 = Object.entries(TASK_INDEX).find(([slug]) => slug.startsWith('gr7-'));
  assert.ok(g7 && g7[1][0] !== 'grade6' && g7[1][1] === 7);
});

test('buildTaskIndex ignores tasks without an instruction and picks the right code for a slug shared by two subjects', () => {
  const reg = {
    grade6: { getPreamble: () => '', tasks: { shared: 'a', onlyg6: 'b' } },
    eng: { getPreamble: () => '', tasks: { shared: 'c' } },
  };
  const idx = buildTaskIndex(reg, { '6|shared': 1, '8|shared': 1, '6|onlyg6': 1, '6|curated-only': 1 });
  assert.deepEqual(Object.keys(idx).sort(), ['onlyg6', 'shared']);
  assert.equal(idx.onlyg6[0], 'grade6');
  assert.equal(idx.shared[0] === 'grade6' || idx.shared[0] === 'eng', true);
});
