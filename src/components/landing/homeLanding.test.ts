import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import ProgressShowcase, { sampleProgress } from './ProgressShowcase';
import AudienceSamples from './AudienceSamples';
import Trust from './Trust';
import HomeFaq from './HomeFaq';
import { HOME_FAQ } from '../../lib/seo/homeFaq';
import { faqLd, jsonLdText } from '../../lib/seo/structuredData';

const sections = { Hero, HowItWorks, ProgressShowcase, AudienceSamples, Trust, HomeFaq };
const html = Object.fromEntries(Object.entries(sections).map(([k, C]) => [k, renderToStaticMarkup(createElement(C))])) as Record<keyof typeof sections, string>;

test('the landing sections are light: no script, no image, no video, no client directive, a size budget', () => {
  for (const [name, h] of Object.entries(html)) {
    assert.ok(!/<script|<img|<iframe|<video|<canvas/i.test(h), `${name} has a heavy element`);
    assert.ok(h.length < 60_000, `${name} is ${h.length} bytes`);
    assert.ok(h.length > 500, name);
  }
  for (const f of ['Hero', 'HowItWorks', 'ProgressShowcase', 'AudienceSamples', 'Trust', 'HomeFaq']) {
    assert.ok(!/['"]use client['"]/.test(fs.readFileSync(`src/components/landing/${f}.tsx`, 'utf8')), `${f} must stay a server component`);
  }
  assert.ok(!/['"]use client['"]/.test(fs.readFileSync('src/components/progress/ProgressCards.tsx', 'utf8')), 'ProgressCards carries no client code');
});

test('hero: one promise, a main button to sign-up, a way in for parents and teachers, and a described hand-built diagram', () => {
  const h = html.Hero;
  assert.match(h, /<h1[^>]*>CAPS exam practice that feels like a game<\/h1>/);
  assert.match(h, /href="\/app\?start=register"[^>]*>Start practising free</);
  assert.match(h, /href="\/for-parents"/);
  assert.match(h, /href="\/for-teachers"/);
  const svgs = [...h.matchAll(/<svg[^>]*>/g)].map((m) => m[0]);
  assert.ok(svgs.length >= 1 && svgs.every((s) => /role="img"/.test(s) && /aria-label="[^"]{20,}/.test(s)), 'every picture has a description');
  for (const svg of h.match(/<svg[\s\S]*?<\/svg>/g) ?? []) assert.ok((svg.match(/<text\b/g) ?? []).length <= 6, 'at most six labels per picture');
});

test('the progress showcase is the real cards with sample data, labelled as a sample, with decimal commas and links only to sign-up', () => {
  const h = html.ProgressShowcase;
  assert.match(h, /Sample data/);
  const visible = h.replace(/<[^>]*>/g, ' ');
  assert.match(visible, /68,5%/, 'decimal comma');
  assert.ok(!/\d\.\d%/.test(visible), 'no decimal point in the text a learner reads');
  assert.match(h, /Exam readiness/);
  assert.match(h, /Your next best step/);
  const hrefs = [...h.matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, '&'));
  assert.ok(hrefs.length >= 3 && hrefs.every((x) => x === '/app?start=register'), hrefs.join(' '));
  const p = sampleProgress();
  assert.ok(p.subjects.every((s) => s.topics.every((t) => t.practiseHref === '/app?start=register')));
});

test('parents and teachers sections: concrete benefits, both samples labelled, links to the two landing pages, no ranking', () => {
  const h = html.AudienceSamples;
  assert.equal((h.match(/>Sample</g) ?? []).length, 2);
  assert.match(h, /href="\/for-parents"/);
  assert.match(h, /href="\/for-teachers"/);
  assert.match(h, /SACE/);
  assert.match(h, /no ranking/i);
  assert.ok(!/leaderboard|rank 1|top learner/i.test(h));
});

test('how it works: three steps, a real question with its real explanation, and the sample is labelled', () => {
  const h = html.HowItWorks;
  assert.equal((h.match(/<li class="flex flex-col rounded-2xl/g) ?? []).length, 3);
  for (const t of ['Learn', 'Practise', 'See progress']) assert.ok(h.includes(t), t);
  assert.match(h, /Which fraction is equivalent to 1\/2\?/);
  assert.match(h, /Multiplying both numerator and denominator by 2 gives an equivalent fraction/);
  assert.match(h, />Sample</);
});

test('trust section: real-number slot, privacy facts, and no testimonials or invented praise', () => {
  const h = html.Trust;
  assert.match(h, /PrepPals in numbers/, 'the build-time numbers are shown');
  assert.match(h, /POPIA/);
  assert.match(h, /href="\/privacy"/);
  assert.ok(!/testimonial|loved by|\d+,?\d* (happy )?(learners|students) (use|trust)|five.star|★/i.test(h));
});

test('FAQ: every question is shown and published as FAQPage data from the same list', () => {
  for (const f of HOME_FAQ) {
    assert.ok(html.HomeFaq.includes(f.q.replace(/’/g, '&#x27;')) || html.HomeFaq.includes(f.q), f.q);
    assert.ok(f.q.endsWith('?') && f.a.length >= 20 && f.a.length <= 500, f.q);
  }
  const ld = faqLd(HOME_FAQ);
  assert.equal(ld['@type'], 'FAQPage');
  assert.equal(ld.mainEntity.length, HOME_FAQ.length);
  assert.ok(!jsonLdText(ld).includes('<'));
  assert.ok(!/coming soon/i.test(JSON.stringify(HOME_FAQ)));
});

test('the page puts the sections in the order of the brief and imports the owned slots', () => {
  const src = fs.readFileSync('src/app/page.tsx', 'utf8');
  const order = ['<Hero />', '<TryItDemo />', '<HowItWorks />', '<ProgressShowcase />', '<GradeExplorer />', '<HomePaths />', '<AudienceSamples />', '<Trust />', '<HomeFaq />'];
  let at = -1;
  for (const tag of order) { const i = src.indexOf(tag); assert.ok(i > at, `${tag} is out of order or missing`); at = i; }
  assert.match(src, /faqLd\(HOME_FAQ\)/);
  assert.match(src, /redirect\('\/app'\)/, 'returning learners still skip the page');
});
