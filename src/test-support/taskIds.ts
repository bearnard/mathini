// Every task id used by a lesson component, found with a plain text scan of src/curriculum (no component is imported). Shared by the guard test and by
// scripts/question-sync.ts, so a task id used by two lessons can never reach D1: questions are keyed by (task, prompt), so two lessons on one task id
// would share one question pool.
import fs from 'node:fs';
import path from 'node:path';

export interface TaskUse {
  task: string;
  file: string; // relative to the repository root
}

const TASK_ATTR = /\btask=\{?["'`]([^"'`]+)["'`]/g;

export function lessonTaskIds(root = path.join(process.cwd(), 'src', 'curriculum')): TaskUse[] {
  const out: TaskUse[] = [];
  const walk = (dir: string) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.tsx$/.test(e.name) && !/\.test\./.test(e.name)) {
        const src = fs.readFileSync(p, 'utf8');
        for (const m of src.matchAll(TASK_ATTR)) out.push({ task: m[1], file: path.relative(process.cwd(), p) });
      }
    }
  };
  walk(root);
  return out;
}

/** Task ids used by more than one lesson file, with the files. */
export function duplicateTaskIds(uses: TaskUse[] = lessonTaskIds()): Record<string, string[]> {
  const by = new Map<string, Set<string>>();
  for (const u of uses) (by.get(u.task) ?? by.set(u.task, new Set()).get(u.task)!).add(u.file);
  const dup: Record<string, string[]> = {};
  for (const [task, files] of by) if (files.size > 1) dup[task] = [...files].sort();
  return dup;
}

/** The task ids named in the AI prompt files (src/lib/server/caps/tasks/*.json), with the file each is in. */
export function promptTaskIds(dir = path.join(process.cwd(), 'src', 'lib', 'server', 'caps', 'tasks')): TaskUse[] {
  const out: TaskUse[] = [];
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.json')) continue;
    const j = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')) as { tasks?: Record<string, string> };
    for (const task of Object.keys(j.tasks ?? {})) out.push({ task, file: `src/lib/server/caps/tasks/${f}` });
  }
  return out;
}
