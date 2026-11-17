import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';
import { BREAD, BREAD_PRICES, DISPUTE_STEPS, SECTORS, equilibrium, marketTable, shiftDemand, shiftSupply } from './components/diagrams/ems/ems9d-helpers';
import { grade9 } from './curriculum/grade9';

// Grade 9 EMS price theory, sectors of the economy and trade union lessons: shape, bank quality, and every number or classification recomputed from the helpers.

stubCss();
const price = await import('./curriculum/grade9/economic-management-sciences/term2/price-theory/Slides');
const sectors = await import('./curriculum/grade9/economic-management-sciences/term2/sectors-economy/Slides');
const unions = await import('./curriculum/grade9/economic-management-sciences/term3/trade-unions/Slides');
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const text = (steps: { content: unknown }[]) => steps.map((s) => html(s).replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/\s+/g, ' ')).join(' ');
const LESSONS = { 'term2/price-theory': price, 'term2/sectors-economy': sectors, 'term3/trade-unions': unions } as const;
const bankOf = (name: string) => extractCuratedBanks().filter((q) => q.file.includes(name));
const find = (name: string, start: string) => { const hits = bankOf(name).filter((q) => q.prompt.includes(start)); assert.equal(hits.length, 1, start); return hits[0]; };

test('the three lessons are registered (Terms 2 and 3) with a task instruction each', () => {
  const ems = grade9.subjects.find((s) => s.id === 'ems')!;
  const ids = (t: number) => ems.terms.find((x) => x.id === t)!.topics.map((p) => p.id);
  assert.ok(ids(2).includes('gr9-price-theory-t2') && ids(2).includes('gr9-sectors-economy-t2') && ids(3).includes('gr9-trade-unions-t3'));
  for (const [file, id] of [['term2', 'gr9-price-theory-t2'], ['term2', 'gr9-sectors-economy-t2'], ['term3', 'gr9-trade-unions-t3']]) {
    assert.ok(id in JSON.parse(fs.readFileSync(`src/lib/server/caps/tasks/ems-gr9-${file}.json`, 'utf8')).tasks, id);
  }
});

for (const [name, mod] of Object.entries(LESSONS)) {
  test(`${name}: 4 to 6 slides with the standard blocks and a described picture, final Check yourself, 14 clean questions in all four positions`, () => {
    const steps = mod.learnSteps;
    assert.ok(steps.length >= 4 && steps.length <= 6);
    assert.equal(steps.at(-1)!.title, 'Check yourself');
    for (const s of steps.slice(0, -1)) {
      const h = html(s);
      assert.match(h, /The rule/); assert.match(h, /Worked example/); assert.match(h, /Common mistake/); assert.match(h, /aria-label="[^"]+"/, `${s.title}: picture`);
    }
    assert.match(html(steps.at(-1)!), /<details/);
    const bank = bankOf(name);
    assert.equal(bank.length, 14);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.severity}:${x.code}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
  });
}

test('PRICE THEORY: every quantity, equilibrium, shortage and surplus in the lesson and the bank is what the market gives', () => {
  const rows = marketTable(BREAD, BREAD_PRICES);
  const row = (p: number) => rows.find((r) => r.price === p)!;
  assert.deepEqual(equilibrium(BREAD), { price: 12, qty: 100 });
  assert.deepEqual([row(8).demanded, row(8).supplied, row(8).gap, row(8).result], [140, 60, 80, 'shortage']);
  assert.deepEqual([row(16).demanded, row(16).supplied, row(16).gap, row(16).result], [60, 140, 80, 'surplus']);
  assert.deepEqual([row(12).demanded, row(12).supplied], [100, 100]);
  assert.deepEqual(equilibrium(shiftDemand(BREAD, 40)), { price: 14, qty: 120 });
  assert.deepEqual(equilibrium(shiftSupply(BREAD, -40)), { price: 14, qty: 80 });
  const n = 'term2/price-theory';
  assert.ok(find(n, 'buyers want 140 loaves at R8 and 60 loaves at R16').prompt.includes('140') && find(n, 'Bakers supply 60 loaves at R8 and 140').prompt.includes('140'));
  assert.equal(find(n, 'How big is the shortage').answer, `${row(8).gap} loaves`);
  assert.equal(find(n, 'At R16 a loaf, buyers want 60').answer, `A surplus of ${row(16).gap} loaves`);
  assert.equal(find(n, 'Incomes rise, and buyers want 40 more').answer, 'R14 and 120 loaves');
  assert.equal(find(n, 'The cost of wheat rises').answer, 'R14 and 80 loaves');
  assert.equal(find(n, 'buyers want 100 loaves and bakers supply 100').answer, 'The equilibrium price');
  const t = text(price.learnSteps);
  for (const frag of ['R12 and 100 loaves', 'R14 and 120 loaves', 'R14 and 80 loaves', 'shortage of 80', 'surplus of 80']) assert.ok(t.includes(frag.replace(/ /g, ' ')) || t.replace(/ /g, ' ').includes(frag), frag);
});

test('SECTORS: every classification in the questions agrees with the table, and the lesson lists the same activities', () => {
  const ask = SECTORS.map((s) => s.activity);
  const label: Record<string, string> = { primary: 'Primary', secondary: 'Secondary', tertiary: 'Tertiary' };
  const named: [string, string, string?][] = [['A farmer grows wheat', 'primary'], ['A miner digs out iron ore', 'primary'], ['A mill grinds wheat into flour', 'secondary'], ['A factory assembles cars', 'secondary', 'Cars are put together in a factory'], ['A builder constructs a house', 'secondary'], ['A shop sells bread', 'tertiary'], ['A teacher teaches a class', 'tertiary'], ['A fisher catches hake', 'primary'], ['A taxi driver transports', 'tertiary']];
  for (const [start, sector, asked] of named) {
    const table = SECTORS.find((s) => s.activity.startsWith(start))!;
    assert.equal(table.sector, sector, start);
    assert.equal(find('term2/sectors-economy', asked ?? start).answer, label[sector], start);
  }
  const t = text(sectors.learnSteps);
  for (const a of ask) assert.ok(t.includes(a), a);
});

test('TRADE UNIONS: the dispute steps are in the right order and the lesson keeps both sides of a strike', () => {
  assert.deepEqual([...DISPUTE_STEPS], ['Negotiation', 'Conciliation', 'Strike or arbitration']);
  const t = text(unions.learnSteps);
  assert.ok(t.indexOf('Negotiation: the union') < t.indexOf('Conciliation: a neutral') && t.indexOf('Conciliation: a neutral') < t.indexOf('Arbitration: a neutral'));
  assert.ok(/For workers/.test(t) && /For the employer/.test(t) && /For the economy/.test(t));
  assert.ok(/A conciliator helps the two sides to agree; an arbitrator decides/.test(t));
  assert.equal(find('term3/trade-unions', 'Which step comes first').answer, 'Negotiation between the sides');
  assert.equal(find('term3/trade-unions', 'What happens in conciliation').answer.startsWith('A neutral person helps'), true);
  assert.equal(find('term3/trade-unions', 'What happens in arbitration').answer.startsWith('A neutral person decides'), true);
  assert.ok(!/\b(\d+ days|48 hours|30 days)\b/.test(t) && !bankOf('term3/trade-unions').some((q) => /\b(\d+ days|48 hours)\b/.test(q.prompt)), 'no legal time limits are taught');
});
