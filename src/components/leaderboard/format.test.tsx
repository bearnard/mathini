import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { Row } from './LeaderboardView';
import { numText } from '../progress/format';

test('area scores use the South African decimal comma, never a point', () => {
  const html = renderToStaticMarkup(<Row rank={1} name="Bravo Primary" value={numText(64.2)} unit={`avg · ${numText(31)} learners`} mine={false} />);
  assert.ok(html.includes('64,2'));
  assert.ok(!html.includes('64.2'));
});

test('the trophy screen formats every number with numText (no String(number) or raw interpolated counts)', () => {
  const src = fs.readFileSync('src/components/leaderboard/LeaderboardView.tsx', 'utf8');
  assert.ok(!/String\(/.test(src));
  assert.ok(!/\$\{(board\.size|board\.myRank|rank)\}/.test(src.replace(/numText\([^)]*\)/g, '')));
});
