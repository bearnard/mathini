import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { buildSeoContent } from '../../../scripts/lib/seoContent';
import { SEO_GRADES, allSeoTopics, findSeoTopic, gradePath, practiseHref, subjectPath, topicPath } from './curriculumIndex';
import { MAX_DESCRIPTION, fitDescription, gradeMeta, subjectMeta, topicMeta } from './pageMeta';
import { PRIVATE_PREFIXES, publicPaths } from './publicPaths';
import { breadcrumbLd, courseLd, gradeCrumbs, homeLd, jsonLdText, learningResourceLd, subjectCrumbs, topicCrumbs } from './structuredData';
import { SITE_DESCRIPTION, SITE_URL } from './site';
import sitemap from '../../app/sitemap';
import robots from '../../app/robots';
import { resolveDeepLink } from '../client/deepLink';
import { grade5 } from '../../curriculum/grade5';
import { grade6 } from '../../curriculum/grade6';
import { grade7 } from '../../curriculum/grade7';
import { grade8 } from '../../curriculum/grade8';
import { grade9 } from '../../curriculum/grade9';
import { grade10 } from '../../curriculum/grade10';
import { grade11 } from '../../curriculum/grade11';
import { grade12 } from '../../curriculum/grade12';
import type { Curriculum } from '../../types/curriculum';

const curriculum: Curriculum = { grades: [grade5, grade6, grade7, grade8, grade9, grade10, grade11, grade12] };

test('the committed SEO snapshot matches the live curriculum (re-run: node --import tsx scripts/generate-seo-content.ts)', () => {
  const file = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src/lib/seo/curriculum-content.generated.json'), 'utf8'));
  assert.deepEqual(file, JSON.parse(JSON.stringify(buildSeoContent())));
});

test('URL slugs are unique, and app ids are unique (within a term) where the "Practise now" link depends on them', () => {
  const grades = new Set<string>();
  for (const g of SEO_GRADES) {
    assert.ok(!grades.has(g.gradeSlug)); grades.add(g.gradeSlug);
    const subjects = new Set<string>(); const subjectIds = new Set<string>();
    for (const s of g.subjects) {
      assert.match(s.slug, /^[a-z0-9]+(-[a-z0-9]+)*$/, `${g.gradeSlug}/${s.title}`);
      assert.ok(!subjects.has(s.slug), `duplicate subject slug ${g.gradeSlug}/${s.slug}`); subjects.add(s.slug);
      assert.ok(!subjectIds.has(s.subjectId), `duplicate subject id ${g.gradeSlug}/${s.subjectId}`); subjectIds.add(s.subjectId);
      const slugs = new Set<string>(); const ids = new Set<string>();
      for (const t of s.terms) for (const p of t.topics) {
        const key = `${t.termId}/${p.topicId}`;
        assert.match(p.slug, /^[a-z0-9]+(-[a-z0-9]+)*$/, `${g.gradeSlug}/${s.slug}/${p.title}`);
        assert.ok(!slugs.has(p.slug), `duplicate topic slug ${g.gradeSlug}/${s.slug}/${p.slug}`); slugs.add(p.slug);
        assert.ok(!ids.has(key), `duplicate topic id in a term ${g.gradeSlug}/${s.slug}/${key}`); ids.add(key);
      }
    }
  }
});

type Page = { path: string; meta: Metadata; crumbs: ReturnType<typeof gradeCrumbs>; ld: unknown[] };
function pages(): Page[] {
  const out: Page[] = [];
  for (const g of SEO_GRADES) {
    out.push({ path: gradePath(g), meta: gradeMeta(g), crumbs: gradeCrumbs(g), ld: [breadcrumbLd(gradeCrumbs(g))] });
    for (const s of g.subjects) {
      out.push({ path: subjectPath(g, s), meta: subjectMeta(g, s), crumbs: subjectCrumbs(g, s), ld: [breadcrumbLd(subjectCrumbs(g, s)), courseLd(g, s, 'x')] });
      for (const term of s.terms) for (const t of term.topics) {
        out.push({ path: topicPath(g, s, t), meta: topicMeta(g, s, term, t), crumbs: topicCrumbs(g, s, t), ld: [breadcrumbLd(topicCrumbs(g, s, t)), learningResourceLd(g, s, term, t, 'x')] });
      }
    }
  }
  return out;
}

const titleOf = (m: Metadata): string => (typeof m.title === 'string' ? m.title : '');

test('every curriculum page has a title, a description, a canonical URL and Open Graph data', () => {
  const ps = pages();
  assert.ok(ps.length > 1000, `${ps.length} pages`);
  const titles = new Map<string, string>();
  for (const p of ps) {
    const title = titleOf(p.meta);
    assert.ok(title.length >= 8 && title.length <= 75, `${p.path}: title "${title}" (${title.length})`);
    assert.ok(!titles.has(title), `${p.path} and ${titles.get(title)} share the title "${title}"`);
    titles.set(title, p.path);
    const d = String(p.meta.description ?? '');
    assert.ok(d.length >= 50 && d.length <= MAX_DESCRIPTION, `${p.path}: description is ${d.length} characters: ${d}`);
    assert.equal((p.meta.alternates as { canonical?: string }).canonical, p.path, `${p.path}: canonical`);
    const og = p.meta.openGraph as { url?: string; title?: string; description?: string };
    assert.equal(og.url, `${SITE_URL}${p.path}`);
    assert.ok(og.title && og.description === d);
    assert.ok(p.meta.twitter);
    assert.ok((og as { images?: unknown[] }).images?.length === 1 && ((p.meta.twitter as { images?: unknown[] }).images?.length === 1), `${p.path}: share image`);
  }
});

test('the home and privacy pages have a title, a description and a canonical URL too', async () => {
  const home = (await import('../../app/page')).metadata;
  const privacy = (await import('../../app/privacy/page')).metadata;
  for (const [m, p] of [[home, '/'], [privacy, '/privacy']] as const) {
    const title = typeof m.title === 'string' ? m.title : (m.title as { absolute?: string } | null | undefined)?.absolute;
    assert.ok(title && title.length >= 5, p);
    assert.ok(String(m.description ?? '').length >= 20, p);
    assert.equal((m.alternates as { canonical?: string }).canonical, p);
  }
  assert.equal(String(home.description), SITE_DESCRIPTION.length <= MAX_DESCRIPTION ? SITE_DESCRIPTION : fitDescription(SITE_DESCRIPTION));
});

test('fitDescription cuts at a word end and never goes past 160 characters', () => {
  assert.equal(fitDescription('short text'), 'short text');
  const long = fitDescription('word '.repeat(60));
  assert.ok(long.length <= MAX_DESCRIPTION && long.endsWith('…') && !long.includes('  '));
});

test('structured data: breadcrumbs run from Home to the page, with absolute URLs; Course and LearningResource name their parent', () => {
  for (const p of pages()) {
    const bc = p.ld[0] as { '@type': string; itemListElement: { position: number; name: string; item: string }[] };
    assert.equal(bc['@type'], 'BreadcrumbList');
    assert.deepEqual(bc.itemListElement.map((i) => i.position), bc.itemListElement.map((_, i) => i + 1));
    assert.equal(bc.itemListElement[0].item, `${SITE_URL}/`);
    assert.equal(bc.itemListElement.at(-1)!.item, `${SITE_URL}${p.path}`, p.path);
    assert.ok(bc.itemListElement.every((i) => i.name && i.item.startsWith(SITE_URL)));
    for (const o of p.ld) assert.ok(!jsonLdText(o).includes('<'));
  }
  const g = SEO_GRADES[1]; const s = g.subjects[0]; const term = s.terms[0]; const t = term.topics[0];
  const course = courseLd(g, s, 'desc') as { '@type': string; '@id': string; provider: { name: string }; hasPart: unknown[]; isAccessibleForFree: boolean };
  assert.deepEqual([course['@type'], course.provider.name, course.isAccessibleForFree], ['Course', 'PrepPals', true]);
  assert.equal(course.hasPart.length, s.terms.reduce((n, x) => n + x.topics.length, 0));
  const lr = learningResourceLd(g, s, term, t, 'desc') as { '@type': string; isPartOf: { '@id': string }; teaches: string };
  assert.deepEqual([lr['@type'], lr.isPartOf['@id'], lr.teaches], ['LearningResource', course['@id'], t.title]);
  assert.deepEqual((homeLd() as { '@type': string }[]).map((x) => x['@type']), ['Organization', 'WebSite']);
});

test('structured data never carries a script-closing tag, even from odd titles', () => {
  assert.equal(jsonLdText({ name: '</script><script>alert(1)</script>' }).includes('<'), false);
});

test('sitemap: every public page once, absolute URLs, nothing private; robots: private prefixes disallowed, sitemap named', () => {
  const entries = sitemap();
  const urls = entries.map((e) => e.url);
  assert.equal(new Set(urls).size, urls.length, 'duplicate sitemap URLs');
  assert.deepEqual(new Set(urls), new Set(publicPaths().map((p) => (p.path === '/' ? SITE_URL : `${SITE_URL}${p.path}`))));
  assert.equal(urls.length, 2 + SEO_GRADES.length + SEO_GRADES.reduce((n, g) => n + g.subjects.length, 0) + allSeoTopics().length);
  for (const u of urls) {
    assert.ok(u.startsWith(`${SITE_URL}`), u);
    const p = u.slice(SITE_URL.length) || '/';
    for (const pre of PRIVATE_PREFIXES) assert.ok(!p.startsWith(pre.replace(/\/$/, '')), `${p} is private`);
  }
  const r = robots();
  const rule = Array.isArray(r.rules) ? r.rules[0] : r.rules;
  assert.deepEqual([...(rule.disallow as string[])].sort(), [...PRIVATE_PREFIXES].sort());
  for (const must of ['/admin', '/api/', '/teacher-review']) assert.ok((rule.disallow as string[]).includes(must), must);
  assert.equal(r.sitemap, `${SITE_URL}/sitemap.xml`);
});

test('every "Practise now" link opens exactly the topic (or subject) it names in the app', () => {
  let n = 0;
  for (const g of SEO_GRADES) for (const s of g.subjects) {
    const sub = new URL(practiseHref(g, s), 'https://x.test');
    assert.equal(sub.searchParams.get('start'), 'register');
    const rs = resolveDeepLink(curriculum, sub.searchParams);
    assert.deepEqual([rs?.grade.id, rs?.subject.id, rs?.topic], [g.gradeId, s.subjectId, null]);
    for (const term of s.terms) for (const t of term.topics) {
      const r = resolveDeepLink(curriculum, new URL(practiseHref(g, s, term, t), 'https://x.test').searchParams);
      assert.deepEqual([r?.grade.id, r?.subject.id, r?.term?.id, r?.topic?.id], [g.gradeId, s.subjectId, term.termId, t.topicId], `${g.gradeSlug}/${s.slug}/${t.slug}`);
      assert.equal(findSeoTopic(g.gradeSlug, s.slug, t.slug)?.topic, t);
      n++;
    }
  }
  assert.ok(n > 900);
  assert.equal(resolveDeepLink(curriculum, new URLSearchParams('grade=99&subject=x')), null);
  assert.equal(resolveDeepLink(curriculum, new URLSearchParams('grade=6')), null);
  const odd = resolveDeepLink(curriculum, new URLSearchParams(`grade=6&subject=${SEO_GRADES[1].subjects[0].subjectId}&topic=nope`));
  assert.deepEqual([odd?.topic, odd?.term], [null, null]);
});
