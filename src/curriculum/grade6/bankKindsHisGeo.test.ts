import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { itemProblem, kindOf } from './natural-sciences/_shared/itemKinds';
import type { NstItem } from './natural-sciences/_shared/types';

// Every Grade 6 History and Geography bank: items are playable, prompts are unique within a subject
// (the stable question key is derived from the prompt), and order/label items follow the bank rules.
// History chronology items are also checked against the dates in the same file's own timeline slide.

const root = path.join(process.cwd(), 'src', 'curriculum', 'grade6');

function topicFiles(subject: 'history' | 'geography'): string[] {
  const out: string[] = [];
  for (const term of fs.readdirSync(path.join(root, subject))) {
    if (!term.startsWith('term')) continue;
    for (const topic of fs.readdirSync(path.join(root, subject, term))) {
      const dir = path.join(root, subject, term, topic);
      for (const f of fs.readdirSync(dir)) if (f.endsWith('.tsx')) out.push(path.join(dir, f));
    }
  }
  return out;
}

async function bankOf(file: string): Promise<NstItem[]> {
  const mod = (await import(file)) as { bank?: NstItem[] };
  assert.ok(Array.isArray(mod.bank), `${file}: no exported bank`);
  return mod.bank;
}

/** A sortable year from the timeline's date strings ("c. 440 BCE", "27 Apr 1994", "1811–1812", "1800s", "Long before 1652"). */
export function yearOf(date: string): number {
  const bce = /BCE/.test(date);
  const m = date.match(/\d{1,4}/g);
  assert.ok(m, `cannot read a year from "${date}"`);
  let n = parseInt(m[m.length === 1 || /^\d{1,2} [A-Z]/.test(date) ? m.length - 1 : 0], 10);
  if (/^\d{1,2} [A-Z][a-z]{2} \d{4}$/.test(date)) n = parseInt(m[1], 10);
  if (/before/i.test(date)) n -= 0.5;
  return bce ? -n : n;
}

const subjects = ['history', 'geography'] as const;

for (const subject of subjects) {
  test(`${subject}: every item is playable and prompts are unique`, async () => {
    const seen = new Map<string, string>();
    const files = topicFiles(subject);
    assert.ok(files.length >= 16, `found ${files.length} topic files`);
    for (const file of files) {
      for (const item of await bankOf(file)) {
        assert.equal(itemProblem(item), null, `${path.basename(file)} "${item.prompt}": ${itemProblem(item)}`);
        assert.ok(!seen.has(item.prompt), `"${item.prompt}" appears in ${seen.get(item.prompt)} and ${path.basename(file)}`);
        seen.set(item.prompt, path.basename(file));
      }
    }
  });

  test(`${subject}: order and label items follow the bank rules`, async () => {
    let recall = 0;
    for (const file of topicFiles(subject)) {
      const bank = await bankOf(file);
      const recallHere = bank.filter((i) => kindOf(i) !== 'mcq');
      assert.ok(recallHere.length <= 2, `${path.basename(file)}: at most 2 order/label items per topic`);
      for (const item of recallHere) {
        recall += 1;
        const where = `${path.basename(file)} "${item.prompt}"`;
        assert.ok(item.explanation, `${where}: needs an explanation`);
        assert.ok(item.section, `${where}: needs a section tag`);
        if (kindOf(item) === 'order') {
          assert.ok(item.options.length >= 3 && item.options.length <= 5, `${where}: 3-5 steps`);
          assert.match(item.prompt, /order/i, `${where}: the prompt must say it is an ordering question`);
        }
      }
    }
    assert.ok(recall >= 1, `${subject} has recall items`);
  });
}

test('history: order steps never give the answer away with a year, decade or century', async () => {
  for (const file of topicFiles('history')) {
    for (const item of await bankOf(file)) {
      if (kindOf(item) !== 'order') continue;
      for (const step of item.options) {
        assert.doesNotMatch(step, /\b\d{3,4}s?\b/, `${path.basename(file)}: step "${step}" contains a year`);
        // "AD dating proposed" is an event name, not a date; an era attached to a number (or a century) is.
        assert.doesNotMatch(step, /\d\s*(BCE|CE|AD|BC)\b|\b(AD|BC)\s*\d|century/i, `${path.basename(file)}: step "${step}" contains an era or century`);
      }
    }
  }
});

test('history: every chronology item matches the dates in the lesson timeline, strictly earliest first', async () => {
  let checked = 0;
  for (const file of topicFiles('history')) {
    const events = [...fs.readFileSync(file, 'utf8').matchAll(/"date": "([^"]*)", "title": "([^"]*)"/g)].map((m) => ({ date: m[1], title: m[2] }));
    for (const item of await bankOf(file)) {
      if (kindOf(item) !== 'order' || item.section !== 'chronology') continue;
      const where = `${path.basename(file)} "${item.prompt}"`;
      const years = item.answer.split('|').map((step) => {
        const ev = events.filter((e) => e.title === step);
        assert.equal(ev.length, 1, `${where}: step "${step}" is not a title in this lesson's timeline`);
        return yearOf(ev[0].date);
      });
      for (let i = 1; i < years.length; i++) {
        assert.ok(years[i] > years[i - 1], `${where}: "${item.answer.split('|')[i]}" is not strictly after the step before it`);
      }
      // the explanation lists the lesson's own dates, in the same order
      const dates = item.answer.split('|').map((step) => events.find((e) => e.title === step)!.date);
      for (const d of dates) assert.ok((item.explanation ?? '').includes(d), `${where}: explanation should mention "${d}"`);
      checked += 1;
    }
  }
  assert.ok(checked >= 10, `checked ${checked} chronology items`);
});

test('yearOf reads the date formats used in the timelines', () => {
  assert.equal(yearOf('c. 440 BCE'), -440);
  assert.equal(yearOf('c. 3200 BCE'), -3200);
  assert.equal(yearOf('508/507 BCE'), -508);
  assert.equal(yearOf('525 CE'), 525);
  assert.equal(yearOf('c. 370 CE'), 370);
  assert.equal(yearOf('27 Apr 1994'), 1994);
  assert.equal(yearOf('1811–1812'), 1811);
  assert.equal(yearOf('1800s'), 1800);
  assert.equal(yearOf('Long before 1652'), 1651.5);
  assert.ok(yearOf('c. 3200 BCE') < yearOf('c. 440 BCE'));
});
