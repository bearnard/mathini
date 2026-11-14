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

/** From this many categories the labels are treated as dense: the axis is sized for labels turned on end. */
export const DENSE_FROM = 7;
export const isDense = (labels: readonly string[]): boolean => labels.length >= DENSE_FROM;

/** Font size of a label turned on end. */
export const ROTATED_FONT = 10;

/** Measured average glyph width of the page font as a fraction of the font size (22 real labels: 0.42 to 0.57). */
const MEASURED_W = 0.5;

let canvas: CanvasRenderingContext2D | null | undefined;

/** Text width in px: measured in the browser, estimated (MEASURED_W) where there is no canvas (tests, server). */
export const textWidth = (text: string, px: number): number => {
  if (typeof document !== 'undefined') {
    try {
      canvas ??= document.createElement('canvas').getContext('2d');
      if (canvas) {
        canvas.font = `${px}px Helvetica, Arial, sans-serif`;
        return canvas.measureText(text).width * 1.04;
      }
    } catch {
      /* fall through to the estimate */
    }
  }
  return text.length * MEASURED_W * px;
};

/** Width of the widest single word of a label (a wrapped label is as wide as its longest word). */
export const labelWidth = (label: string, px = ROTATED_FONT): number => Math.max(1, ...labelTokens(label).map((t) => textWidth(t, px)));

/** Font size for a label turned on end: 10 px, a little smaller when the slots are very narrow (never below 8). */
export const rotatedFont = (slot: number): number => Math.max(8, Math.min(ROTATED_FONT, Math.floor((slot - 0.5) / 1.15)));

/**
 * Would two neighbouring labels collide in slots this wide? Decided once for the whole axis, so
 * labels never mix flat and turned on end. A word too wide for its slot cannot be saved by
 * wrapping ("Entrepreneurship" in four slots, six income bands, twelve months on a two-axis chart).
 */
export const needsRotationAt = (labels: readonly string[], slot: number): boolean =>
  labels.some((l, i) => i + 1 < labels.length && (labelWidth(l) + labelWidth(labels[i + 1])) / 2 + 4 > slot);

/** The plot width a phone leaves for the categories, after the y axis(es) and margins. */
export const PHONE_PLOT = { single: 220, dual: 140 } as const;

/** Height to give the x axis: room for labels turned on end if a phone would need that, else the wrapped rows. */
export const axisHeight = (labels: readonly string[], plot: number = PHONE_PLOT.single, base = 12): number => {
  if (labels.length > 1 && (isDense(labels) || needsRotationAt(labels, plot / labels.length))) {
    const longest = Math.max(...labels.map((l) => l.length));
    return Math.min(110, Math.round(14 + longest * MEASURED_W * ROTATED_FONT * 1.1));
  }
  const rows = Math.min(MAX_LINES, Math.max(1, ...labels.map((l) => labelTokens(l).length)));
  return 18 + rows * (base + 1);
};

/** Room at one end of a line or area chart so the first or last label is not cut off. */
export const edgePadding = (label: string, base = 12): number => Math.min(60, Math.ceil((label.length * CHAR_W * base) / 2) + 4);
