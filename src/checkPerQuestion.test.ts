import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Check } from './components/subjects/lesson/LessonBlocks';

// A "Check yourself" block must hide ONE answer per question. A list of questions (an <ol> or several <li>) under a single "Show the answer" is
// the old bundled shape; use <Check questions={[...]} answers={[...]} /> instead (same length: one answer per question).

const ROOT = path.join(process.cwd(), 'src');
const walk = (dir: string): string[] =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : /\.tsx$/.test(e.name) && !/\.test\./.test(e.name) ? [path.join(dir, e.name)] : []));

const li = (s: string) => (s.match(/<li\b/g) ?? []).length;

export function bundledChecks(file: string): string[] {
  const src = fs.readFileSync(file, 'utf8');
  if (!/<Check\b/.test(src)) return [];
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const bad: string[] = [];
  const visit = (n: ts.Node) => {
    if ((ts.isJsxSelfClosingElement(n) || ts.isJsxOpeningElement(n)) && n.tagName.getText() === 'Check') {
      const where = `${path.relative(process.cwd(), file)}:${sf.getLineAndCharacterOfPosition(n.getStart()).line + 1}`;
      const attrs = new Map<string, ts.JsxAttribute>();
      for (const p of n.attributes.properties) if (ts.isJsxAttribute(p)) attrs.set(p.name.getText(), p);
      for (const name of ['question', 'answer']) {
        const a = attrs.get(name);
        if (a && li(a.getText()) >= 2) bad.push(`${where} (${name} holds ${li(a.getText())} list items under one answer)`);
      }
      const len = (name: string): number | null => {
        const init = attrs.get(name)?.initializer;
        const e = init && ts.isJsxExpression(init) ? init.expression : undefined;
        return e && ts.isArrayLiteralExpression(e) ? e.elements.length : null;
      };
      const q = len('questions'), a = len('answers');
      if (attrs.has('questions') || attrs.has('answers')) {
        if (q === null || a === null) bad.push(`${where} (questions and answers must both be array literals)`);
        else if (q !== a) bad.push(`${where} (${q} questions but ${a} answers: one answer per question)`);
        else if (q < 2) bad.push(`${where} (use question/answer for a single question)`);
      }
    }
    ts.forEachChild(n, visit);
  };
  visit(sf);
  return bad;
}

test('no lesson bundles several questions under one answer', () => {
  const bad = walk(ROOT).flatMap(bundledChecks);
  assert.deepEqual(bad, [], `Use <Check items={[{ question, answer }, ...]} />:\n${bad.join('\n')}`);
});

test('the scanner flags the old bundled shape and a mismatched count, and accepts the per-question shape', () => {
  const tmp = path.join(process.cwd(), 'node_modules', '.cache-check-test');
  fs.mkdirSync(tmp, { recursive: true });
  const write = (name: string, code: string) => { const p = path.join(tmp, name); fs.writeFileSync(p, code); return p; };
  try {
    assert.equal(bundledChecks(write('Old.tsx', 'export const x = <Check question={<ol><li>A?</li><li>B?</li></ol>} answer={<ol><li>a</li><li>b</li></ol>} />;')).length, 2);
    assert.equal(bundledChecks(write('Short.tsx', 'export const x = <Check questions={[<>A?</>, <>B?</>]} answers={[<>a</>]} />;')).length, 1);
    assert.equal(bundledChecks(write('Dyn.tsx', 'const q = [<>A?</>]; export const x = <Check questions={q} answers={q} />;')).length, 1);
    assert.deepEqual(bundledChecks(write('New.tsx', 'export const x = <Check questions={[<>A?</>, <>B?</>]} answers={[<>a</>, <>b</>]} />;')), []);
    assert.deepEqual(bundledChecks(write('One.tsx', 'export const x = <Check question={<>A?</>} answer={<>a</>} />;')), []);
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

test('Check renders one hidden answer per question in the several-questions shape, and one for the single shape', () => {
  const html = renderToStaticMarkup(createElement(Check, { questions: ['Q1?', 'Q2?', 'Q3?'], answers: ['A1', 'A2', 'A3'] }));
  assert.equal((html.match(/<details/g) ?? []).length, 3);
  assert.equal((html.match(/Show the answer/g) ?? []).length, 3);
  assert.equal((html.match(/Check yourself/g) ?? []).length, 1);
  assert.match(html, /Q2\?.*?<details.*?A2/s);
  assert.ok(html.indexOf('A1') < html.indexOf('Q2?'), 'each answer sits right after its own question');
  const one = renderToStaticMarkup(createElement(Check, { question: 'Q?', answer: 'A' }));
  assert.equal((one.match(/<details/g) ?? []).length, 1);
});
