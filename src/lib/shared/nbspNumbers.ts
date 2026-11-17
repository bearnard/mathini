import { cloneElement, isValidElement, type ReactNode } from 'react';

// Rand amounts and other big numbers are written with a space between the thousands ("R100 000"). On a narrow
// phone the browser may break that line between "R100" and "000". A non-breaking space keeps the number whole.
// This is applied where lesson slides and questions are drawn (CapsSubjectTopic and MathText), so it covers the text in
// every lesson and question without editing the stored questions.

const NUMBER_WITH_SPACES = /(?<![\d.,])\d{1,3}(?: \d{3})+(?!\d)/g;

/** Replace the ordinary spaces inside a number grouped in thousands ("1 200 000") with non-breaking spaces. */
export const nbspNumbers = (text: string): string =>
  text.includes(' ') ? text.replace(NUMBER_WITH_SPACES, (m) => m.replace(/ /g, '\u00a0')) : text;

// Props that never hold text to show to the learner.
const SKIP = new Set(['className', 'style', 'key', 'id', 'href', 'src', 'ref', 'htmlFor', 'type', 'name', 'viewBox', 'd', 'points', 'transform', 'fill', 'stroke']);

const mapValue = (v: unknown): unknown => {
  if (typeof v === 'string') return nbspNumbers(v);
  if (Array.isArray(v)) {
    let changed = false;
    const out = v.map((x) => {
      const y = mapValue(x);
      if (y !== x) changed = true;
      return y;
    });
    return changed ? out : v;
  }
  if (isValidElement(v)) return nbspNode(v);
  return v;
};

/** Apply nbspNumbers to every piece of text in a React tree (children and text props such as steps, questions, aria-label). */
export const nbspNode = (node: ReactNode): ReactNode => {
  if (typeof node === 'string') return nbspNumbers(node);
  if (Array.isArray(node)) return mapValue(node) as ReactNode;
  if (!isValidElement(node)) return node;
  const props = node.props as Record<string, unknown>;
  const next: Record<string, unknown> = {};
  for (const k of Object.keys(props)) {
    if (SKIP.has(k)) continue;
    const v = props[k];
    const nv = mapValue(v);
    if (nv !== v) next[k] = nv;
  }
  if (!Object.keys(next).length) return node;
  // Children given as separate arguments are not key-checked; keep it that way when they are an array we rebuilt.
  if (Array.isArray(next.children)) {
    const { children, ...rest } = next;
    return cloneElement(node, rest, ...(children as ReactNode[]));
  }
  return cloneElement(node, next);
};

/** SHOW_TEXT for document.createTreeWalker. */
const SHOW_TEXT = 4;
interface TextNodeLike { nodeValue: string | null }
interface WalkerLike { nextNode(): TextNodeLike | null }
interface RootLike { ownerDocument: { createTreeWalker(root: unknown, what: number): WalkerLike } | null }

/** Safety net for text that a component builds itself (a table cell that prints a rand amount): fix every text node under the root. Returns how many nodes changed. */
export const nbspTextNodes = (root: RootLike): number => {
  const doc = root.ownerDocument;
  if (!doc) return 0;
  const walker = doc.createTreeWalker(root, SHOW_TEXT);
  let changed = 0;
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const before = n.nodeValue ?? '';
    const after = nbspNumbers(before);
    if (after !== before) {
      n.nodeValue = after;
      changed++;
    }
  }
  return changed;
};
