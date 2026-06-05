'use client';

import katex from 'katex';
import 'katex/dist/katex.min.css';

interface FormulaProps {
  /** LaTeX source, e.g. "E = mc^2" */
  children?: string;
  /** Backward-compatible prop for older curriculum topic files. */
  latex?: string;
  /** When true renders as a centred display block; default is inline. */
  block?: boolean;
  className?: string;
}

/**
 * Renders LaTeX mathematics using KaTeX.
 * Usage:
 *   <Formula>a^2 + b^2 = c^2</Formula>
 *   <Formula block>\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}</Formula>
 */
const Formula = ({ children, latex, block = false, className }: FormulaProps) => {
  const source = latex ?? children ?? '';

  let html: string;
  try {
    html = katex.renderToString(source, {
      throwOnError: false,
      displayMode: block,
      output: 'html',
    });
  } catch {
    html = `<span class="text-red-500 font-mono text-sm">${source}</span>`;
  }

  if (block) {
    return (
      <div
        className={`my-4 overflow-x-auto text-center ${className ?? ''}`}
        // biome-ignore lint: KaTeX produces safe HTML
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={className}
      // biome-ignore lint: KaTeX produces safe HTML
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Formula;
