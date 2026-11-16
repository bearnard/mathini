import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ChildSection from './ChildSection';
import InviteLanding from './InviteLanding';
import type { ChildSummary } from './api';

const read = (f: string) => fs.readFileSync(path.join(process.cwd(), 'src/components/parents', f), 'utf8');
const child: ChildSummary = { id: 'c1', displayName: 'QA-Bearn-1', grade: 6, avatar: null, linkedAt: 1, lastSeenAt: 1, consent: 'parent', consentVersion: 'v', activity: { answersThisWeek: 0, daysPractisedLast14: 0, lastPractisedAt: null, weekAccuracyPct: null, changeSinceLastWeek: null } };

test('Reset PIN and Unlink ask inside the page: no native confirm()/alert() anywhere in the parent screens', () => {
  for (const f of fs.readdirSync(path.join(process.cwd(), 'src/components/parents')).filter((n) => /\.tsx?$/.test(n) && !/\.test\./.test(n))) {
    assert.ok(!/\b(window\.)?(confirm|alert|prompt)\(/.test(read(f)), `${f} uses a native dialog`);
  }
});

test('the child card: Reset PIN and Unlink sit side by side on a phone (two columns, consent on its own row), and no confirm box shows until one is asked for', () => {
  const html = renderToStaticMarkup(createElement(ChildSection, { child, now: Date.now(), onChanged: () => undefined }));
  assert.match(html, /grid grid-cols-2 gap-2 sm:flex/);
  assert.match(html, /col-span-2[^"]*sm:col-span-1[^>]*>Withdraw consent/);
  assert.ok(html.includes('>Reset PIN<') && html.includes('>Unlink<'));
  assert.ok(!html.includes('Confirm a new PIN') && !html.includes('Confirm unlink'));
  assert.ok(!/underline[^"]*"[^>]*>Unlink/.test(html), 'Unlink is a real button, not an underlined link that wraps');
});

test('the confirm texts say what happens, and Unlink says the child\'s own account is not touched', () => {
  const src = read('ChildSection.tsx');
  assert.match(src, /The old PIN stops working, and \$\{child\.displayName\} is signed out on their other devices\./);
  assert.match(src, /You will no longer see their progress or be able to reset their PIN\. \$\{child\.displayName\}'s own account is not touched\./);
  assert.match(src, /Keep the old PIN/);
  assert.match(src, /Keep linked/);
});

test('the invite page reads who the link is for (read only) before the button, and the weekly box needs a linked child', () => {
  const src = read('InviteLanding.tsx');
  assert.match(src, /\/api\/parent\/link-invite\/preview/);
  assert.ok(src.indexOf('/api/parent/link-invite/preview') < src.indexOf("'/api/parent/link-invite', 'parent-link-invite'"), 'preview is asked before the link is used');
  const html = renderToStaticMarkup(createElement(InviteLanding));
  assert.match(html, /Link your child/);
  assert.match(read('ParentDashboard.tsx'), /children && children\.length > 0 \? <GridItem><SummarySwitch \/><\/GridItem> : null/);
});
