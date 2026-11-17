import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { nbspNumbers, nbspNode } from './lib/shared/nbspNumbers';
import { stubCss } from './components/subjects/lesson/lessonTest';

stubCss();
const { default: MathText } = await import('./components/subjects/MathText');
const N = '\u00a0';

test('big numbers get a non-breaking space between the thousands', () => {
  assert.equal(nbspNumbers('R100 000'), `R100${N}000`);
  assert.equal(nbspNumbers('R1 200 000 and R950'), `R1${N}200${N}000 and R950`);
  assert.equal(nbspNumbers('2 000 people'), `2${N}000 people`);
  assert.equal(nbspNumbers('R12 345,67'), `R12${N}345,67`);
});

test('ordinary text and other numbers are left alone', () => {
  for (const t of ['Grade 12 learners', 'Question 2 of 14', 'in 2020 and 2021', 'Term 1 2026', 'x = 3,14', 'a 12 34 b', 'No numbers here', '1234 567']) assert.equal(nbspNumbers(t), t, t);
  assert.equal(nbspNumbers('12 2020'), '12 2020');
});

test('a React tree: text, nested elements, arrays and text props are all changed; nothing else is', () => {
  const tree = (
    <div className="a b" aria-label="Total R100 000 now">
      <p>The CC has R100 000 and R56 028.</p>
      <ul>{['R22 572 charged', 'R14 000 paid'].map((x) => <li key={x}>{x}</li>)}</ul>
      <Wrapper steps={['Add R100 000 and R56 028']} flags={[true, false]} />
    </div>
  );
  const h = renderToStaticMarkup(nbspNode(tree) as never);
  assert.ok(!/\d \d{3}/.test(h), h);
  for (const f of [`R100${N}000`, `R56${N}028`, `R22${N}572`, `R14${N}000`]) assert.ok(h.includes(f), f);
  assert.ok(h.includes('class="a b"'));
});

function Wrapper({ steps, flags }: { steps: string[]; flags: boolean[] }) {
  return <ol data-n={flags.length}>{steps.map((s) => <li key={s}>{s}</li>)}</ol>;
}

test('MathText keeps a number whole in a question prompt and an option', () => {
  const h = renderToStaticMarkup(<MathText>{'What is R2 500 × 12?'}</MathText>);
  assert.ok(h.includes(`R2${N}500`));
  const m = renderToStaticMarkup(<MathText>{'The total is R30 000 and $x^2$ is a power'}</MathText>);
  assert.ok(m.includes(`R30${N}000`));
});

test('the close corporation balance sheet slide no longer breaks R100 000 across lines', async () => {
  const { learnSteps } = await import('./curriculum/grade12/accounting/term2/close-corporations/Slides');
  const step = learnSteps.find((s) => s.title === 'The balance sheet')!;
  const plain = renderToStaticMarkup(step.content as never);
  assert.ok(/R\d+ \d{3}/.test(plain), 'before: the slide has ordinary spaces');
  const fixed = renderToStaticMarkup(nbspNode(step.content) as never);
  assert.ok(fixed.includes(`R100${N}000`));
  // the worked-example sentence (the text that wrapped on a phone) is fixed in the tree
  assert.ok(!/Members. interest: R\d+ \d{3}/.test(fixed.replace(/&#x27;|&rsquo;|’/g, "'")), 'worked example');
});

test('nbspTextNodes fixes the text nodes under a root and counts them', async () => {
  const { nbspTextNodes } = await import('./lib/shared/nbspNumbers');
  const nodes = [{ nodeValue: 'R100 000 paid' }, { nodeValue: 'Grade 12' }, { nodeValue: null }, { nodeValue: '2 500 m' }];
  let i = 0;
  const root = { ownerDocument: { createTreeWalker: () => ({ nextNode: () => nodes[i++] ?? null }) } };
  assert.equal(nbspTextNodes(root), 2);
  assert.equal(nodes[0].nodeValue, `R100${N}000 paid`);
  assert.equal(nodes[1].nodeValue, 'Grade 12');
  assert.equal(nodes[3].nodeValue, `2${N}500 m`);
  assert.equal(nbspTextNodes({ ownerDocument: null }), 0);
});
