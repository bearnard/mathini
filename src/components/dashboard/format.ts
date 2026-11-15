// Number text for the dashboards: decimal comma, "Not yet" for no data, signed changes. The same helpers as My progress, so every page reads alike.
export { numText, pctText } from '../progress/format';
import { commaText } from '../subjects/graphTicks';

/** "+3" / "−2" / "0" (a real minus sign, decimal comma); null gives the fallback. */
export const signedText = (n: number | null | undefined, suffix = '', fallback = '–'): string =>
  typeof n === 'number' ? `${n > 0 ? '+' : n < 0 ? '−' : ''}${commaText(Math.abs(n))}${suffix}` : fallback;

/** "5 learners" / "1 learner". */
export const plural = (n: number, one: string, many = `${one}s`): string => `${commaText(n)} ${n === 1 ? one : many}`;
