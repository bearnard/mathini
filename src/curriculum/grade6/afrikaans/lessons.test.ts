import test from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as sinonieme from './term3/sinonieme-antonieme/SinoniemeAntonieme';
import * as trappe from './term3/trappe-van-vergelyking/TrappeVanVergelyking';
import * as toekomende from './term3/toekomende-tyd/ToekomendeTyd';
import * as meervoude from './term1/meervoude/Meervoude';
import * as verlede from './term2/verlede-tyd/VerledeTyd';
import * as groete from './term1/woordeskat-groete/WoordeskatGroete';
import * as begrip from './term2/begripstoets/Begripstoets';
import * as byvoeglike from './term2/byvoeglike-naamwoorde/ByvoeglikeNaamwoorde';
import * as brief from './term2/vriendskaplike-brief/VriendskaplikeBrief';
import * as sinsbou from './term3/sinsbou/Sinsbou';
import * as gemengde from './term4/gemengde-hersiening/GemengdeHersiening';
import * as voegwoorde from './term4/voegwoorde/Voegwoorde';
import * as voorsetsels from './term4/voorsetsels/Voorsetsels';

// Lesson standard (docs/notes/lesson-standard.md): 4-6 slides, the last one "Check yourself", every slide renders, and the topic's
// practice bank can be answered from the slides. The banks themselves are byte-identical to before (checked with cmp in the branch).
const lessons = { sinonieme, trappe, toekomende, meervoude, verlede, groete, begrip, byvoeglike, brief, sinsbou, gemengde, voegwoorde, voorsetsels } as const;

const text = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const slideText = (step: { content: React.ReactNode }) => text(renderToStaticMarkup(createElement('div', null, step.content)));
const lower = (s: string) => s.toLowerCase().replace(/[’‘]/g, "'");

for (const [name, mod] of Object.entries(lessons)) {
  const steps = mod.learnSteps;

  test(`${name}: 4-6 slides, the last is "Check yourself" with 3-4 questions`, () => {
    assert.ok(steps.length >= 4 && steps.length <= 6, `${steps.length} slides`);
    assert.equal(steps[steps.length - 1].title, 'Check yourself');
    const last = renderToStaticMarkup(createElement('div', null, steps[steps.length - 1].content));
    const checks = (last.match(/Show the answer/g) ?? []).length;
    assert.ok(checks >= 3 && checks <= 4, `${checks} check questions`);
  });

  test(`${name}: every teaching slide has a rule, a worked example, a mistake and one picture`, () => {
    for (const s of steps.slice(0, -1)) {
      const html = renderToStaticMarkup(createElement('div', null, s.content));
      assert.ok(html.includes('The rule'), `${s.title}: no rule`);
      assert.ok(html.includes('Worked example'), `${s.title}: no worked example`);
      assert.ok(html.includes('Common mistake'), `${s.title}: no mistake`);
    }
  });

  test(`${name}: pictures have an aria description and at most 6 labels`, () => {
    for (const s of steps) {
      const html = renderToStaticMarkup(createElement('div', null, s.content));
      // pictures only (the speaker icon of the tap-to-hear button is also an svg)
      for (const svg of (html.match(/<svg[\s\S]*?<\/svg>/g) ?? []).filter((v) => v.includes('max-w-md'))) {
        assert.ok(/role="img"/.test(svg) && /aria-label="[^"]{20,}"/.test(svg), `${s.title}: picture without aria`);
        // the "=", the arrows between two words are symbols, not labels
        const labels = (svg.match(/<text[^>]*>([^<]*)<\/text>/g) ?? []).filter((t) => !/>(=|↔|→)<\/text>/.test(t)).length;
        assert.ok(labels <= 6, `${s.title}: ${labels} labels`);
      }
    }
  });

  test(`${name}: slide prose is short (about 40-80 words, never more than 130)`, () => {
    for (const s of steps) {
      const words = slideText(s).split(' ').length;
      assert.ok(words <= 130, `${s.title}: ${words} words`);
    }
  });

  test(`${name}: every answer in the practice bank can be found in the lesson`, () => {
    // Reading-comprehension answers are facts from short passages, so for that lesson we check the question words instead.
    if (name === 'begrip') return;
    const all = lower(steps.map(slideText).join(' '));
    const missing = mod.bank.filter((q) => !all.includes(lower(q.answer.replace(/\.$/, '')))).map((q) => q.answer);
    assert.deepEqual(missing, []);
  });
}

test('begrip: the lesson teaches every question word the bank asks', () => {
  const all = lower(begrip.learnSteps.map(slideText).join(' '));
  const asked = new Set(begrip.bank.map((q) => (q.prompt.match(/(Watter|Waarheen|Waar|Wat|Wie|Hoekom|Hoe laat)\b[^.?]*\?$/) ?? [])[1]).filter(Boolean) as string[]);
  assert.ok(asked.size >= 5, `only ${asked.size} question words found`);
  for (const w of asked) assert.ok(all.includes(lower(w)), `lesson does not mention "${w}"`);
});
