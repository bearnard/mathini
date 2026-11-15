/**
 * Splits learner-visible text into plain and `$...$` maths segments, exactly as MathText renders them.
 * `\$` is an escape for a literal dollar sign (currency, spreadsheet references): it never opens or closes a maths run.
 */
export interface MathSegment {
  math: boolean;
  text: string;
}

const SHIELD = '';

export function splitMath(input: string): MathSegment[] {
  const shielded = input.split('\\$').join(SHIELD);
  return shielded
    .split(/(\$[^$]+\$)/g)
    .filter((part) => part !== '')
    .map((part) =>
      part.startsWith('$') && part.endsWith('$') && part.length > 2
        ? { math: true, text: part.slice(1, -1).split(SHIELD).join('\\$') }
        : { math: false, text: part.split(SHIELD).join('$') },
    );
}
