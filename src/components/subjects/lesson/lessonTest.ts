import { registerHooks } from 'node:module';
import assert from 'node:assert/strict';
import { createElement, type ReactNode } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

/**
 * Test helpers for rewritten lessons (docs/notes/lesson-standard.md). A lesson exports its `learnSteps`;
 * a test calls stubCss() first, imports the lesson, and renders every slide to text and HTML.
 *
 *   stubCss();
 *   const { learnSteps } = await import('./Exponents');
 *   const slides = renderSlides(learnSteps);
 *   assertLessonShape(slides);
 *   assert.match(slides[3].text, /5 × 5/);
 */

let stubbed = false;
/** Topic modules import CSS (KaTeX); Node cannot, and the slides do not need it. Call before importing a lesson. */
export const stubCss = (): void => {
  if (stubbed) return;
  stubbed = true;
  registerHooks({
    resolve: (specifier, context, next) =>
      specifier.endsWith('.css') ? { url: 'data:text/javascript,export default {}', shortCircuit: true } : next(specifier, context),
  });
};

export interface RenderedSlide {
  title: string;
  html: string;
  /** Visible text, tags removed, whitespace collapsed. Maths symbols appear as separate tokens. */
  text: string;
  /** Number of pictures (<svg role="img"> or a role="table" grid) and how many have an aria-label. */
  pictures: number;
  labelled: number;
}

const decode = (s: string) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'");

export const renderSlides = (steps: { title: string; content: ReactNode }[]): RenderedSlide[] =>
  steps.map((s) => {
    const html = renderToStaticMarkup(createElement('div', null, s.content));
    const svgs = html.match(/<(?:svg|div)[^>]*role="(?:img|table)"[^>]*>/g) ?? [];
    return {
      title: s.title,
      html,
      text: decode(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim(),
      pictures: svgs.length,
      labelled: svgs.filter((t) => /aria-label="[^"]+"/.test(t)).length,
    };
  });

/** The shape the standard asks for: 4 to 6 slides, a rule/worked/mistake on each teaching slide, a final Check, accessible pictures. */
export const assertLessonShape = (slides: RenderedSlide[]): void => {
  assert.ok(slides.length >= 4 && slides.length <= 6, `expected 4-6 slides, got ${slides.length}`);
  const last = slides[slides.length - 1];
  assert.equal(last.title, 'Check yourself', 'the last slide is "Check yourself"');
  assert.match(last.html, /<details/, 'the check slide hides its answers behind <details>');
  for (const s of slides.slice(0, -1)) {
    assert.match(s.text, /The rule/, `${s.title}: has a rule`);
    assert.match(s.text, /Worked example/, `${s.title}: has a worked example`);
    assert.match(s.text, /Common mistake/, `${s.title}: has a common mistake`);
    assert.ok(s.pictures >= 1, `${s.title}: has a picture`);
  }
  for (const s of slides) assert.equal(s.labelled, s.pictures, `${s.title}: every picture has an aria-label`);
  for (const s of slides) assert.ok(!/NaN|undefined|\[object Object\]/.test(s.text), `${s.title}: no NaN/undefined in the text`);
};
