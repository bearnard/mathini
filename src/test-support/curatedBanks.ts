// Test support: extracts every curated multiple-choice question from src/curriculum/** with the TypeScript parser (the same
// approach as the 2026-11 audit), so the bank tests also cover banks that are not exported (grades 7-9) and do not need to
// import any component. Read-only.
import ts from 'typescript';
import fs from 'node:fs';
import path from 'node:path';

export interface CuratedQuestion {
  file: string; // relative to src/curriculum
  grade: number;
  subject: string; // folder name, e.g. natural-sciences
  prompt: string;
  options: string[];
  answer: string;
  explanation: string | null;
  kind: string;
}

const str = (n: ts.Node): string | null => (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n) ? n.text : null);

export function extractCuratedBanks(root = path.join(process.cwd(), 'src', 'curriculum')): CuratedQuestion[] {
  const out: CuratedQuestion[] = [];
  const walk = (dir: string) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.tsx?$/.test(e.name) && !/\.test\./.test(e.name)) scan(p);
    }
  };
  const scan = (file: string) => {
    const src = fs.readFileSync(file, 'utf8');
    if (!/(prompt|question)\s*:/.test(src)) return;
    const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, file.endsWith('x') ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
    const rel = path.relative(root, file).split(path.sep);
    const visit = (n: ts.Node) => {
      if (ts.isObjectLiteralExpression(n)) {
        const props: Record<string, ts.Expression> = {};
        for (const p of n.properties) if (ts.isPropertyAssignment(p) && p.name) props[p.name.getText(sf).replace(/['"]/g, '')] = p.initializer;
        // Two shapes: {prompt, options, answer:'text'} (grades 6-11 and most of 12) and {question, options, answer:<index>} (the Grade 12
        // banks written by hand). The index is resolved to the option text so the validator sees the same thing in both.
        const promptNode = props.prompt ?? props.question;
        if (promptNode && props.options && props.answer && ts.isArrayLiteralExpression(props.options)) {
          const prompt = str(promptNode);
          const options = props.options.elements.map(str);
          let answer = str(props.answer);
          if (answer === null && ts.isNumericLiteral(props.answer)) answer = options[Number(props.answer.text)] ?? null;
          if (prompt !== null && answer !== null && options.every((o): o is string => o !== null)) {
            out.push({
              file: rel.join('/'),
              grade: Number(rel[0].replace(/\D/g, '')) || 0,
              subject: rel[1],
              prompt, options: options as string[], answer,
              explanation: props.explanation ? str(props.explanation) : null,
              kind: props.kind ? (str(props.kind) ?? 'mcq') : 'mcq',
            });
          }
        }
      }
      ts.forEachChild(n, visit);
    };
    visit(sf);
  };
  walk(root);
  return out;
}
