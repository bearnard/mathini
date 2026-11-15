import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderToStaticMarkup } from 'react-dom/server';
import MyProgressCard from './MyProgressCard';
import AppHeader from '../layout/AppHeader';
import { pickTeaser } from './teaser';
import { MOCK_PROGRESS, MOCK_PROGRESS_NEW } from '../../lib/shared/progressMock';
import type { ProgressResponse } from '../../lib/shared/progressTypes';

const here = path.dirname(fileURLToPath(import.meta.url));
const text = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

test('teaser: the first improving topic the server lists, with the server\'s number and the decimal comma; else the streak; else nothing', () => {
  assert.deepEqual(pickTeaser(MOCK_PROGRESS), { tone: 'improving', text: '↑ 12,5 in Electric circuits' });
  const noGain: ProgressResponse = { ...MOCK_PROGRESS, subjects: MOCK_PROGRESS.subjects.map((s) => ({ ...s, topics: s.topics.map((t) => ({ ...t, changePoints: t.changePoints !== null && t.changePoints > 0 ? 0 : t.changePoints })) })) };
  assert.deepEqual(pickTeaser(noGain), { tone: 'streak', text: '3-day practice streak' });
  assert.equal(pickTeaser(MOCK_PROGRESS_NEW), null);
  // a drop is never shown as a teaser
  const dip: ProgressResponse = { ...MOCK_PROGRESS_NEW, subjects: [{ ...MOCK_PROGRESS.subjects[0], topics: [{ ...MOCK_PROGRESS.subjects[0].topics[0], changePoints: -9 }] }] };
  assert.equal(pickTeaser(dip), null);
});

test('the dashboard card links to /progress, says "My progress", and shows the teaser or a gentle default', () => {
  const withTeaser = renderToStaticMarkup(<MyProgressCard teaser={{ tone: 'improving', text: '↑ 12,5 in Electric circuits' }} />);
  assert.match(withTeaser, /href="\/progress"/);
  const t = text(withTeaser);
  assert.ok(t.includes('My progress') && t.includes('↑ 12,5 in Electric circuits'));
  const plain = text(renderToStaticMarkup(<MyProgressCard teaser={null} />));
  assert.ok(plain.includes('See how you are growing'));
});

test('the header has a "My progress" link on every width (icon on phones, icon and words from sm up)', () => {
  const html = renderToStaticMarkup(<AppHeader student={{ id: 'x', displayName: 'Lerato', avatar: '/a.webp', xp: 10, grade: 6 } as never} leaderboardActive={false} onToggleLeaderboard={() => {}} onSignOut={() => {}} />);
  const link = html.match(/<a [^>]*>/g)?.find((a) => a.includes('href="/progress"')) ?? '';
  assert.ok(link.includes('aria-label="My progress"'), link);
  assert.match(html, /hidden sm:inline">My progress</);
});

test('the app shows the card on the signed-in home screen only, and the teaser hook reads the API without caching and fails quietly', () => {
  const app = fs.readFileSync(path.join(here, '../../App.tsx'), 'utf8');
  assert.match(app, /<MyProgressCard teaser=\{progressTeaser\} \/>/);
  assert.match(app, /useProgressTeaser\(status === 'active' && view === 'home'\)/);
  const hook = fs.readFileSync(path.join(here, 'useProgressTeaser.ts'), 'utf8');
  assert.match(hook, /fetch\('\/api\/progress', \{ cache: 'no-store' \}\)/);
  assert.match(hook, /\.catch\(\(\) => undefined\)/);
  // the anonymous screen (OnboardingGate) is returned before the home screen, so it has no card
  assert.ok(app.indexOf("status === 'anonymous'") < app.indexOf('<MyProgressCard'));
});
