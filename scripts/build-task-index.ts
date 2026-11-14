// Writes src/lib/server/caps/taskIndex.generated.ts. Run: node --import tsx scripts/build-task-index.ts
import fs from 'node:fs';
import path from 'node:path';
import { registry } from '../src/lib/server/caps/registry';
import { buildTaskIndex, renderTaskIndexModule } from '../src/lib/server/caps/taskIndexBuild';
import { TOPIC_NAMES } from '../src/components/admin/topicNames.generated';

const index = buildTaskIndex(registry, TOPIC_NAMES);
const out = path.join(process.cwd(), 'src/lib/server/caps/taskIndex.generated.ts');
fs.writeFileSync(out, renderTaskIndexModule(index));
console.log(`wrote ${Object.keys(index).length} tasks to ${path.relative(process.cwd(), out)}`);
