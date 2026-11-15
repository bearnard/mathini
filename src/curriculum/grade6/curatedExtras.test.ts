import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { registerHooks } from 'node:module';
import { topUpFromBank, usableForTopUp } from '../../lib/shared/topUpFromBank';
import { kindOf, withCuratedExtras } from './natural-sciences/_shared/itemKinds';
import type { ReviewBankItem } from '../../lib/client/review/types';

// Some topic modules import CSS, which Node cannot; the questions do not need it (same hook as scripts/gen-question-seed.ts).
registerHooks({ resolve: (specifier, context, next) => (specifier.endsWith('.css') ? { url: 'data:text/javascript,export default {}', shortCircuit: true } : next(specifier, context)) });

// D1 serving returns plain multiple-choice questions only. The Grade 6 NST, History and Geography hooks therefore ALWAYS add the bank's
// order / label / explain items to every batch that comes from the server, whatever its size (withCuratedExtras runs BEFORE the top-up, which
// itself only runs below 10 items). This pins that rule on the real banks, so switching the serve_from_d1 flag on cannot hide those items.

const HOOKS = ['natural-sciences/_shared/useNstItems.ts', 'history/_shared/useHisItems.ts', 'geography/_shared/useGeoItems.ts'];

test('the Grade 6 hooks that read the pool add the curated non-multiple-choice items to every batch', () => {
  for (const f of HOOKS) {
    const src = fs.readFileSync(`src/curriculum/grade6/${f}`, 'utf8');
    assert.match(src, /topUpFromBank\(withCuratedExtras\(data\.items, bank\), bank/, `${f} must build the batch with withCuratedExtras before the top-up`);
  }
});

test('with a full batch of 20 multiple-choice items from the server, every curated order/label/explain item of every Grade 6 task is still in the queue', async () => {
  const { GRADE6_BANKS } = await import('./reviewBanks');
  let checked = 0;
  for (const task of Object.keys(GRADE6_BANKS).sort()) {
    const bank = (await GRADE6_BANKS[task]()) as ReviewBankItem[];
    const extras = bank.filter((it) => kindOf(it as never) !== 'mcq');
    if (extras.length === 0) continue;
    const served = Array.from({ length: 20 }, (_, i) => ({ prompt: `Served question ${i} for ${task}?`, options: ['a', 'b', 'c'], answer: 'a', explanation: 'because it is the first option here' }));
    const queue = topUpFromBank(withCuratedExtras(served as never, bank as never), bank as never, undefined, undefined, usableForTopUp as never);
    for (const x of extras) assert.ok(queue.some((q) => (q as { prompt: string }).prompt === x.prompt), `${task}: "${x.prompt.slice(0, 40)}" is missing`);
    checked += extras.length;
  }
  assert.ok(checked >= 30, `only ${checked} non-multiple-choice bank items found`);
});

test('the Grade 6 Afrikaans bank has no non-multiple-choice items (its hook adds no extras): if one is added, the hook must use withCuratedExtras too', async () => {
  const { GRADE6_BANKS } = await import('./reviewBanks');
  const afr = Object.keys(GRADE6_BANKS).filter((t) => (GRADE6_BANKS[t].toString().match(/afrikaans\//) ?? []).length > 0);
  assert.ok(afr.length >= 5);
  for (const task of afr) {
    const bank = (await GRADE6_BANKS[task]()) as ReviewBankItem[];
    assert.deepEqual(bank.filter((it) => kindOf(it as never) !== 'mcq').map((it) => it.prompt), [], task);
  }
});
