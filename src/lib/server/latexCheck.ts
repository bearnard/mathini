import katex from 'katex';

/** Injected into acceptItems as QualityContext.validateMath on the insert path: the KaTeX error for a `$...$` run, or null. */
export function katexError(latex: string): string | null {
  try {
    katex.renderToString(latex, { throwOnError: true, output: 'html' });
    return null;
  } catch (e) {
    return e instanceof Error ? e.message.slice(0, 160) : 'parse error';
  }
}
