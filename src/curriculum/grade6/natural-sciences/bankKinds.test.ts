import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { explainMarks, explainPoints, itemProblem, kindOf } from './_shared/itemKinds';
import type { NstItem } from './_shared/types';

// Checks every Grade 6 NST bank, with extra rules for the order and label items.
// (Banks are imported as modules, so Diagram components are checked too.)

const root = path.join(process.cwd(), 'src', 'curriculum', 'grade6', 'natural-sciences');
const topics = [
  'term3/electric-circuits', 'term3/conductors-insulators', 'term3/circuit-diagrams', 'term3/mains-electricity',
  'term3/systems-solve-problems', 'term4/solar-system', 'term4/earth-moon-movement', 'term4/day-night-seasons',
  'term4/space-exploration',
];

async function loadBank(topic: string): Promise<NstItem[]> {
  const dir = path.join(root, topic);
  const file = fs.readdirSync(dir).find((f) => f.endsWith('.tsx'));
  assert.ok(file, `${topic}: no component file`);
  const mod = (await import(path.join(dir, file))) as { bank?: NstItem[] };
  assert.ok(Array.isArray(mod.bank), `${topic}: no exported bank`);
  return mod.bank;
}

for (const topic of topics) {
  test(`${topic}: every item can be played, and prompts are unique`, async () => {
    const bank = await loadBank(topic);
    const seen = new Set<string>();
    for (const item of bank) {
      assert.equal(itemProblem(item), null, `"${item.prompt}": ${itemProblem(item)}`);
      assert.ok(!seen.has(item.prompt), `duplicate prompt "${item.prompt}"`);
      seen.add(item.prompt);
    }
  });

  test(`${topic}: order and label items follow the bank rules`, async () => {
    const bank = await loadBank(topic);
    for (const item of bank) {
      const kind = kindOf(item);
      if (kind === 'order') {
        assert.ok(item.options.length >= 3 && item.options.length <= 8, `"${item.prompt}": 3-8 steps`);
        assert.match(item.prompt, /order/i, `"${item.prompt}": the prompt must say it is an ordering question`);
        assert.ok(item.explanation, `"${item.prompt}": needs an explanation`);
        assert.ok(item.section, `"${item.prompt}": needs a section tag`);
      }
      if (kind === 'explain') {
        const where = `"${item.prompt}"`;
        const pts = explainPoints(item);
        assert.ok(pts.length >= 1 && pts.length <= 6, `${where}: 1-6 mark points (one mark each)`);
        assert.equal(explainMarks(item), pts.length, `${where}: marks must match the mark points`);
        assert.ok(item.explanation, `${where}: needs an explanation`);
        assert.ok(item.section, `${where}: needs a section tag`);
        assert.ok(pts.every((p) => p.length >= 12), `${where}: each mark point must be a full statement, not a word`);
        assert.match(item.prompt, /^(Explain|Describe|What|Name|Draw|You are|Give|List)/, `${where}: starts like an exam question`);
        if (item.paper) assert.ok(item.Diagram || item.image, `${where}: a paper question needs a reference diagram in the memo`);
      }
      if (kind === 'label') {
        assert.ok(item.explanation, `"${item.prompt}": needs an explanation`);
        assert.ok(item.section, `"${item.prompt}": needs a section tag`);
        assert.ok((item.hotspots?.length ?? 0) >= 3, `"${item.prompt}": at least 3 hotspots`);
        assert.ok(item.options.length > (item.hotspots?.length ?? 0), `"${item.prompt}": add at least one extra wrong label`);
        if (item.image) {
          const file = path.join(process.cwd(), 'public', item.image.src);
          assert.ok(fs.existsSync(file), `"${item.prompt}": image ${item.image.src} is missing`);
          assert.ok(item.image.alt, `"${item.prompt}": image needs alt text`);
        }
      }
    }
  });
}

test('every topic named in the plan has its new recall items', async () => {
  const count = async (topic: string) => (await loadBank(topic)).filter((i) => kindOf(i) !== 'mcq').length;
  assert.ok((await count('term3/mains-electricity')) >= 2);
  assert.ok((await count('term3/systems-solve-problems')) >= 2);
  assert.ok((await count('term4/earth-moon-movement')) >= 1);
  assert.ok((await count('term3/circuit-diagrams')) >= 1);
});

test('the moon-phase order item lists all eight phases in the right order', async () => {
  const bank = await loadBank('term4/earth-moon-movement');
  const item = bank.find((i) => kindOf(i) === 'order' && /phases of the Moon/.test(i.prompt));
  assert.ok(item);
  assert.deepEqual(item.answer.split('|'), [
    'New Moon', 'Waxing Crescent', 'First Quarter', 'Waxing Gibbous', 'Full Moon', 'Waning Gibbous', 'Last Quarter', 'Waning Crescent',
  ]);
});

test('the exam-style written questions exist, with the marks of the sample paper style', async () => {
  const all: NstItem[] = [];
  for (const t of topics) all.push(...(await loadBank(t)));
  const marksFor = (re: RegExp) => {
    const it = all.find((i) => kindOf(i) === 'explain' && re.test(i.prompt));
    assert.ok(it, `missing explain item: ${re}`);
    return explainMarks(it!);
  };
  assert.equal(marksFor(/insulators are important/), 2);
  assert.equal(marksFor(/why a switch is an important/), 2);
  assert.equal(marksFor(/illegal electrical connections are dangerous/), 2);
  assert.equal(marksFor(/appliances cost more to use/), 3);
  assert.equal(marksFor(/What are fossil fuels/), 3);
  assert.equal(marksFor(/one way to save electricity/), 2);
  assert.equal(marksFor(/why we can see the Moon/), 2);
  assert.equal(marksFor(/two vehicles used for space exploration/), 4);
  assert.equal(marksFor(/new planet for people to live on/), 6);
  assert.equal(marksFor(/Draw a simple circuit diagram/), 5);
  assert.equal(marksFor(/interesting fact about each/), 3);
  assert.equal(marksFor(/What is the Sun\?/), 1);
  assert.equal(marksFor(/What is the asteroid belt\?/), 1);
  const draw = all.find((i) => /Draw a simple circuit diagram/.test(i.prompt))!;
  assert.equal(draw.paper, true);
  assert.ok(draw.Diagram, 'the drawing question shows a labelled reference circuit in the memo');
  assert.ok(all.some((i) => i.prompt.startsWith('Why are electric circuits used in toys')), 'gap MCQ: toys and models');
  assert.ok(all.some((i) => i.prompt.startsWith('Which group contains only fossil fuels')), 'gap MCQ: fossil fuels');
  assert.ok(all.some((i) => /orbit the Sun\?$/.test(i.prompt) && i.answer === 'Anticlockwise'), 'gap MCQ: orbit direction');
});
