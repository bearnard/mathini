'use client';

import Formula from './Formula';
import { splitMath } from './mathSegments';
import { nbspNumbers } from '../../lib/shared/nbspNumbers';

interface MathTextProps {
  /** Text that may contain inline math delimited by $...$  */
  children: string;
  className?: string;
}

/**
 * Renders a string that may contain inline LaTeX math wrapped in $...$.
 * Plain text segments are rendered as-is; $...$ segments are rendered with KaTeX.
 *
 * `\$` is a literal dollar sign (see mathSegments.ts).
 *
 * Example: "Solve $x^2 + 3x = 0$ for x." → "Solve [KaTeX x²+3x=0] for x."
 */
const MathText = ({ children, className }: MathTextProps) => {
  // Fast path: no $ means no math
  if (!children.includes('$')) {
    return <span className={className}>{nbspNumbers(children)}</span>;
  }

  return (
    <span className={className}>
      {splitMath(children).map((seg, i) =>
        seg.math ? <Formula key={i}>{seg.text}</Formula> : <span key={i}>{nbspNumbers(seg.text)}</span>,
      )}
    </span>
  );
};

export default MathText;
