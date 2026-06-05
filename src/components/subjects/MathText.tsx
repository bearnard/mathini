'use client';

import Formula from './Formula';

interface MathTextProps {
  /** Text that may contain inline math delimited by $...$  */
  children: string;
  className?: string;
}

/**
 * Renders a string that may contain inline LaTeX math wrapped in $...$.
 * Plain text segments are rendered as-is; $...$ segments are rendered with KaTeX.
 *
 * Example: "Solve $x^2 + 3x = 0$ for x." → "Solve [KaTeX x²+3x=0] for x."
 */
const MathText = ({ children, className }: MathTextProps) => {
  // Fast path: no $ means no math
  if (!children.includes('$')) {
    return <span className={className}>{children}</span>;
  }

  const parts = children.split(/(\$[^$]+\$)/g);

  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
          const latex = part.slice(1, -1);
          return <Formula key={i}>{latex}</Formula>;
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
};

export default MathText;
