'use client';

import { useEffect, useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

/**
 * Syntax-highlighted code block using Shiki (client-side highlight via CDN-free import).
 * Falls back to plain styled pre if Shiki fails.
 *
 * Usage:
 *   <CodeBlock language="python" code={`def greet(name):\n    return f"Hello, {name}!"`} />
 */
const CodeBlock = ({ code, language = 'text', filename, className }: CodeBlockProps) => {
  const [html, setHtml] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { codeToHtml } = await import('shiki');
        const result = await codeToHtml(code, {
          lang: language,
          theme: 'github-light',
        });
        if (!cancelled) setHtml(result);
      } catch {
        // Shiki load failure — plain fallback is shown
      }
    })();
    return () => { cancelled = true; };
  }, [code, language]);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`rounded-xl border border-slate-200 overflow-hidden text-sm font-mono ${className ?? ''}`}>
      <div className="flex items-center justify-between bg-slate-100 border-b border-slate-200 px-4 py-1.5">
        <span className="text-slate-500 text-xs">{filename ?? language}</span>
        <button
          onClick={copy}
          className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      {html ? (
        <div
          className="overflow-x-auto [&>pre]:!bg-transparent [&>pre]:p-4 [&>pre]:m-0"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre className="bg-white p-4 overflow-x-auto text-slate-800 leading-relaxed whitespace-pre-wrap">
          {code}
        </pre>
      )}
    </div>
  );
};

export default CodeBlock;
