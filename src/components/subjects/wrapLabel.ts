/**
 * Wrap a chart category label so EVERY label shows, even on a phone. recharts hides labels that
 * do not fit unless the axis interval is 0; with interval 0 each label must fit its own slot, so
 * long names wrap at spaces and after hyphens, and a word that is still too wide shrinks the
 * font a little (never below `min`).
 */

export interface WrappedLabel {
  lines: string[];
  fontSize: number;
}

/** Break at whitespace and after hyphens: "KwaZulu-Natal" -> ["KwaZulu-", "Natal"]. */
export const labelTokens = (label: string): string[] => label.split(/(?<=-)|\s+/).filter(Boolean);

const CHAR_W = 0.58; // average glyph width as a fraction of the font size
const MAX_LINES = 3;

export const wrapLabel = (label: string, slot: number, base = 12, min = 10): WrappedLabel => {
  const tokens = labelTokens(label);
  if (!(slot > 8) || tokens.length === 0) return { lines: [label], fontSize: base };
  const room = slot - 4;
  const longest = Math.max(...tokens.map((t) => t.length));
  const fontSize = Math.max(min, Math.min(base, Math.floor(room / (longest * CHAR_W))));
  const maxChars = Math.max(longest, Math.floor(room / (CHAR_W * fontSize)));
  const lines: string[] = [];
  let line = '';
  for (const t of tokens) {
    const glue = line === '' ? '' : line.endsWith('-') ? '' : ' ';
    if (line !== '' && (line + glue + t).length > maxChars) {
      lines.push(line);
      line = t;
    } else {
      line = line + glue + t;
    }
  }
  if (line) lines.push(line);
  // never more than MAX_LINES: fold the surplus into the last line
  while (lines.length > MAX_LINES) lines.splice(MAX_LINES - 1, 2, `${lines[MAX_LINES - 1]} ${lines[MAX_LINES] ?? ''}`.trim());
  return { lines, fontSize };
};

/** From this many categories the labels no longer fit side by side, so they are turned on end. */
export const DENSE_FROM = 7;
export const isDense = (labels: readonly string[]): boolean => labels.length >= DENSE_FROM;

/** Height to give the x axis so the labels have room: wrapped rows, or the length of a label turned on end. */
export const axisHeight = (labels: readonly string[], base = 12): number => {
  if (isDense(labels)) {
    const longest = Math.max(...labels.map((l) => l.length));
    return Math.min(90, Math.round(14 + longest * CHAR_W * base));
  }
  const rows = Math.min(MAX_LINES, Math.max(1, ...labels.map((l) => labelTokens(l).length)));
  return 18 + rows * (base + 1);
};
