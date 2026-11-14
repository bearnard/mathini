// `scripts/seed-questions.ts --grade N --slugs a,b,c`: refill exactly the named pools.
// The seed script discovers tasks from components that pass apiPath="/api/caps/<code>", so it cannot see the Grade 6
// History, Geography and Natural Sciences shells (they pass only task=). The task index (slug -> subject code, grade) knows every task,
// so --slugs resolves through it. It is deliberately an explicit list and never "everything in the index", so a full-grade run can
// not reseed pools that are empty on purpose (e.g. the Grade 6 NST Term 3/4 tasks, served from curated banks).
import { TASK_INDEX } from './taskIndex.generated';

export interface SlugSpec {
  slug: string;
  code: string;
  instruction: string;
}

export function specsFromSlugs(list: string, grade: number, index: Record<string, [string, number]> = TASK_INDEX): SlugSpec[] {
  const slugs = [...new Set(list.split(',').map((s) => s.trim()).filter(Boolean))];
  if (slugs.length === 0) throw new Error('--slugs needs a comma-separated list of task slugs');
  const problems: string[] = [];
  const out: SlugSpec[] = [];
  for (const slug of slugs) {
    const hit = index[slug];
    if (!hit) problems.push(`${slug}: not in the task index (no instruction to generate from)`);
    else if (hit[1] !== grade) problems.push(`${slug}: is a Grade ${hit[1]} task, but --grade ${grade} was given`);
    else out.push({ slug, code: hit[0], instruction: '' });
  }
  if (problems.length) throw new Error(`--slugs refused:\n  ${problems.join('\n  ')}`);
  return out.sort((a, b) => a.slug.localeCompare(b.slug));
}
