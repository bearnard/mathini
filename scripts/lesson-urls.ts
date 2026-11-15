// Prints one preview URL per lesson in Grades 5 to 12 (every term, every subject), for scripts/shoot.ts --walk.
//   node --import tsx scripts/lesson-urls.ts [--base 127.0.0.1:3000] [--grade 8] [--json]
// Each line is a URL; with --json it prints [{url, grade, subject, term, title}].
import { grade5 } from '../src/curriculum/grade5';
import { grade6 } from '../src/curriculum/grade6';
import { grade7 } from '../src/curriculum/grade7';
import { grade8 } from '../src/curriculum/grade8';
import { grade9 } from '../src/curriculum/grade9';
import { grade10 } from '../src/curriculum/grade10';
import { grade11 } from '../src/curriculum/grade11';
import { grade12 } from '../src/curriculum/grade12';
import { listTopics, topicPath } from '../src/lib/devLessonPreview';

const args = process.argv.slice(2);
const opt = (name: string, d: string) => (args.includes(name) ? args[args.indexOf(name) + 1] : d);
const base = opt('--base', '127.0.0.1:3000');
const only = args.includes('--grade') ? Number(opt('--grade', '0')) : null;

const rows = listTopics([grade5, grade6, grade7, grade8, grade9, grade10, grade11, grade12])
  .filter((e) => only === null || e.g === only)
  .map((e) => ({ url: `${base}${topicPath(e)}`, grade: e.gradeTitle, subject: e.subjectTitle, term: e.termTitle, title: e.topic.title }));

if (args.includes('--json')) console.log(JSON.stringify(rows, null, 1));
else rows.forEach((r) => console.log(r.url));
