// Lighthouse-style SEO check of the RENDERED public pages (not the metadata builders: src/lib/seo/seo.test.ts covers those). Run against a dev or
// production server:  node --import tsx scripts/seo-check.ts http://localhost:3000 [--all]
// Checks each page: 200, <title>, meta description, canonical equal to its own path, exactly one <h1>, valid JSON-LD with a BreadcrumbList,
// og:image, no noindex, and that every internal link on it answers 200 (sampled across the run). Exit 1 on any failure.
import { SEO_GRADES, allSeoTopics, gradePath, subjectPath, topicPath } from '../src/lib/seo/curriculumIndex';
import { SITE_URL } from '../src/lib/seo/site';

const base = (process.argv[2] ?? 'http://localhost:3000').replace(/\/$/, '');
const all = process.argv.includes('--all');
const paths = ['/', '/privacy', ...SEO_GRADES.map(gradePath), ...SEO_GRADES.flatMap((g) => g.subjects.map((s) => subjectPath(g, s)))];
const topics = allSeoTopics();
const step = all ? 1 : Math.max(1, Math.floor(topics.length / 40));
topics.forEach(({ grade, subject, topic }, i) => { if (i % step === 0) paths.push(topicPath(grade, subject, topic)); });

const failures: string[] = [];
const linkSeen = new Map<string, number>();
const attr = (html: string, re: RegExp) => re.exec(html)?.[1];

async function check(p: string): Promise<void> {
  const res = await fetch(base + p, { redirect: 'manual' });
  if (res.status !== 200) return void failures.push(`${p}: status ${res.status}`);
  const html = await res.text();
  const fail = (m: string) => failures.push(`${p}: ${m}`);
  const title = attr(html, /<title>([^<]*)<\/title>/);
  if (!title || title.length < 5) fail('no <title>');
  const desc = attr(html, /<meta name="description" content="([^"]*)"/);
  if (!desc || desc.length < 20 || desc.length > 170) fail(`description ${desc?.length ?? 'missing'}`);
  const canon = attr(html, /<link rel="canonical" href="([^"]*)"/);
  if (canon !== `${SITE_URL}${p === '/' ? '' : p}` && canon !== `${SITE_URL}${p}`) fail(`canonical ${canon}`);
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) fail(`${h1} <h1>`);
  if (!/<meta property="og:image" content="/.test(html)) fail('no og:image');
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) fail('noindex');
  const ld = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map((m) => { try { return JSON.parse(m[1]); } catch { fail('invalid JSON-LD'); return null; } });
  if (p !== '/' && !ld.some((x) => x?.['@type'] === 'BreadcrumbList')) fail('no BreadcrumbList');
  if (p === '/' && !ld.some((x) => x?.['@type'] === 'Organization')) fail('no Organization JSON-LD');
  for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\balt="/.test(m[0])) fail('image without alt');
  for (const m of html.matchAll(/<a [^>]*href="(\/[^"#?]*)(?:\?[^"]*)?"/g)) linkSeen.set(m[1], (linkSeen.get(m[1]) ?? 0) + 1);
}

for (const p of paths) await check(p);
const internal = [...linkSeen.keys()].filter((l) => !l.startsWith('/_next') && !/\.(png|ico|webp|svg|webmanifest)$/.test(l));
const sample = all ? internal : internal.filter((_, i) => i % Math.max(1, Math.floor(internal.length / 80)) === 0);
for (const l of sample) {
  const r = await fetch(base + l, { redirect: 'manual' });
  if (r.status >= 400) failures.push(`broken internal link ${l}: ${r.status}`);
}
console.log(`${paths.length} pages, ${sample.length} internal links checked, ${failures.length} problems`);
for (const f of failures) console.log('  ' + f);
process.exit(failures.length ? 1 : 0);
