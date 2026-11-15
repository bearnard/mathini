// ADR 0004, part 5: reads audit/teacher-check.md and lists the things a teacher is asked to check. Pure: no file access, so it is unit-tested.
//
// The file was written by several agents over several days, so it has a few shapes. This parser understands:
//   1. tables whose rows have a `path:line` cell, a question cell and a current-answer cell  -> kind 'row' (a bank question) or 'quoted' (lesson text)
//   2. per-file blocks: `**`path`**: notes`, `### path`, `- `path`` or `- path: notes`        -> 'quoted' (a "…" or `…` string), 'segment' (a ;-separated phrase)
//   3. "Lines by file" bullets `- isiXhosa sentence — English gloss` under a file heading     -> 'line'
//   4. the one scope table (no file)                                                          -> 'scope'
// Everything it cannot attach to a file is reported by the resolver, never dropped silently, except 'segment' phrases that are simply prose.

export type RawKind = 'row' | 'quoted' | 'segment' | 'line' | 'scope' | 'bankrange';

export interface RawItem {
  kind: RawKind;
  section: string; // 'A', 'H', 'E', 'T' ... as in the file
  mdLine: number; // 1-based line in teacher-check.md
  file: string | null; // path under src/curriculum (a file or a folder), or null when the note names none
  baseName?: string; // a bare file name such as LanguageStructuresT1.data.ts, to be located with grade/term
  grade?: number;
  term?: number;
  text: string; // prompt (row), anchor candidate (quoted/segment/line), assumption (scope)
  answer?: string; // row: the current answer
  doubt: string;
  hints?: string[]; // bankrange: quoted strings the note says to look at first
}

const MAX_DOUBT = 500;
const clip = (s: string, n = MAX_DOUBT) => (s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s);
const unwrap = (s: string) => s.replace(/^`+|`+$/g, '').trim();
export const cleanCell = (s: string) => s.replace(/\\\|/g, '|').trim();

/** Normal form for comparing teacher-check text with source text: NFC, straight quotes, collapsed spaces, lower case. */
export const norm = (s: string): string =>
  s
    .normalize('NFC')
    .replace(/[’‘`´]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

const PATH_RE = /^(?:src\/curriculum\/)?(grade\d+\/[A-Za-z0-9_\-./]+)(?::\d+)?$/;
const FILE_EXT = /\.tsx?$/;

const cellPath = (cell: string): { file: string; line?: number } | null => {
  const m = cell.match(/`(?:src\/curriculum\/)?(grade\d+\/[A-Za-z0-9_\-./]+?\.tsx?)(?::(\d+))?`/);
  return m ? { file: m[1], line: m[2] ? Number(m[2]) : undefined } : null;
};

/** Strings a note quotes explicitly: `code`, "double" or “curly”. Paths, code fragments and very short strings are skipped. */
export const quotedStrings = (text: string): string[] => {
  const out: string[] = [];
  const re = /`([^`]+)`|“([^”]+)”|"([^"]+)"/g;
  for (let m = re.exec(text); m; m = re.exec(text)) {
    const s = (m[1] ?? m[2] ?? m[3]).trim();
    if (s.length < 6) continue;
    if (PATH_RE.test(s) || FILE_EXT.test(s) || /^term\d\//.test(s)) continue;
    if (/^[-+*/=→\s\w]{0,3}$/.test(s)) continue;
    out.push(s);
  }
  return out;
};

/** Phrases between `;` and ` / ` in a note line, with labels such as "Sentences:" and glosses in brackets removed. */
export const segments = (text: string): string[] => {
  const body = text.replace(/`|“|”|"/g, '').replace(/\([^)]*\)/g, ' ');
  const out: string[] = [];
  for (const chunk of body.split(/;|\s\/\s|\n/)) {
    let s = chunk.replace(/^[-*\s]+/, '').replace(/^[A-Za-z' -]{2,30}:\s+/, '').replace(/[.,:\s]+$/, '').trim();
    s = s.replace(/^(?:and|or)\s+/i, '');
    if (s.length >= 8 && /\s/.test(s) && /\p{L}/u.test(s)) out.push(s);
  }
  return out;
};

interface Section { id: string; title: string; startLine: number; lines: { n: number; text: string }[] }

const splitSections = (md: string): Section[] => {
  const out: Section[] = [];
  let cur: Section | null = null;
  md.split('\n').forEach((text, i) => {
    const m = text.match(/^##\s+([A-Z]\d?)\.\s*(.*)$/);
    if (m) {
      cur = { id: m[1], title: m[2], startLine: i + 1, lines: [] };
      out.push(cur);
      return;
    }
    const x = text.match(/^##\s+(Cross-review fixes.*)$/);
    if (x) {
      cur = { id: 'XR', title: x[1], startLine: i + 1, lines: [] };
      out.push(cur);
      return;
    }
    if (cur) cur.lines.push({ n: i + 1, text });
  });
  return out;
};

const baseFrom = (lines: { text: string }[], title = ''): string | null => {
  const t = title.match(/\bGrade (\d+) (Afrikaans|isiXhosa)\b/);
  for (const l of lines.slice(0, 12)) {
    const m = l.text.match(/[Pp]aths? (?:are )?under `(?:src\/curriculum\/)?(grade\d+\/[^`]*?)\/?`/);
    if (m) return m[1];
  }
  return t ? `grade${t[1]}/${t[2].toLowerCase()}` : null;
};

const joinPath = (base: string | null, p: string): string => {
  const q = p.replace(/^src\/curriculum\//, '').replace(/\/$/, '');
  return /^grade\d+\//.test(q) || !base ? q : `${base}/${q}`;
};

const parseTable = (sec: Section, out: RawItem[]) => {
  let header: string[] | null = null;
  for (let i = 0; i < sec.lines.length; i++) {
    const { n, text } = sec.lines[i];
    if (!text.startsWith('|')) { header = null; continue; }
    const cells = text.replace(/^\||\|\s*$/g, '').split(/(?<!\\)\|/).map(cleanCell);
    if (cells.every((c) => /^:?-{2,}:?$/.test(c))) continue;
    if (!header) { header = cells.map((c) => c.toLowerCase()); continue; }
    const col = (re: RegExp) => header!.findIndex((h) => re.test(h));
    const doubtI = col(/doubt/);
    const doubt = doubtI >= 0 ? cells[doubtI] : '';
    const fileI = col(/file/);
    const qI = col(/question|passage/);
    const aI = col(/current answer/);
    const p = fileI >= 0 ? cellPath(cells[fileI]) : null;
    if (p && qI >= 0) {
      const q = cells[qI];
      const lesson = q.match(/^Lesson text:\s*`([^`]+)`/i);
      if (lesson) out.push({ kind: 'quoted', section: sec.id, mdLine: n, file: p.file, text: lesson[1].replace(/^[A-Za-z ]+:\s*"?|"$/g, '').trim() || lesson[1], doubt: clip(doubt) });
      else out.push({ kind: 'row', section: sec.id, mdLine: n, file: p.file, text: q, answer: aI >= 0 ? unwrap(cells[aI]).replace(/\s*\(explanation:.*$/, '') : undefined, doubt: clip(doubt) });
    } else if (header.some((h) => h.includes('assumption')) && cells.length >= 2) {
      out.push({ kind: 'scope', section: sec.id, mdLine: n, file: null, text: `${cells[0]}: ${cells[1]}`, doubt: clip(doubt) });
    }
  }
};

/** A line that starts a new file context in a notes section, or null. */
const contextOf = (t: string): { path: string; rest: string; folder?: boolean } | null => {
  let m = t.match(/^\*\*`([^`]+)`\*\*\s*:?\s*(.*)$/);
  if (m) return { path: m[1], rest: m[2] };
  m = t.match(/^###\s+(?:src\/curriculum\/)?(\S+\.tsx?)\s*$/);
  if (m) return { path: m[1], rest: '' };
  m = t.match(/^-\s+`([^`]+\.tsx?)`\s*(.*)$/);
  if (m) return { path: m[1], rest: m[2] };
  m = t.match(/^-\s+((?:grade\d+|term\d)\/[A-Za-z0-9_\-./]+?)(?:\s+(?:bank|lesson|rule|check)[^:]*)?(?:\s*\([^)]*\))?:\s*(.*)$/);
  if (m) return { path: m[1], rest: m[2], folder: !FILE_EXT.test(m[1]) };
  return null;
};

const parseNotes = (sec: Section, out: RawItem[]) => {
  const base = baseFrom(sec.lines, sec.title);
  let grade: number | undefined;
  let term: number | undefined;
  let ctx: { path: string | null; base?: string; folder?: boolean; bullet?: boolean; line: number; buf: string[]; lineBullets: { n: number; anchor: string }[] } | null = null;
  const doubtBullets: string[] = [];
  let inDoubts = false;

  const flush = () => {
    if (!ctx) return;
    const text = ctx.buf.join('\n');
    const notes = ctx.buf.filter((l) => !/^\s*-?\s*(Sentences|Forms|Pairs|Phrases)\b/i.test(l)).join(' ').replace(/\s+/g, ' ').trim();
    const generic = 'Please check that this is correct, natural and suited to the grade.';
    const doubt = clip(notes ? `Notes for this lesson: ${notes}` : generic);
    const file = ctx.path ? joinPath(base, ctx.path) : null;
    const baseName = ctx.path && !/\//.test(ctx.path) && FILE_EXT.test(ctx.path) ? ctx.path : undefined;
    const common = { section: sec.id, mdLine: ctx.line, file: baseName ? null : file, baseName, grade, term } as const;
    for (const s of quotedStrings(text)) out.push({ ...common, kind: 'quoted', text: s, doubt });
    for (const s of segments(text)) out.push({ ...common, kind: 'segment', text: s, doubt });
    for (const b of ctx.lineBullets) {
      const hit = doubtBullets.find((d) => norm(d).includes(norm(b.anchor)) || (quotedStrings(d).some((q) => norm(b.anchor).includes(norm(q)))));
      out.push({ ...common, mdLine: b.n, kind: 'line', text: b.anchor, doubt: hit ? clip(`Doubt noted for this lesson: ${hit}`) : generic });
    }
    ctx = null;
  };

  for (const { n, text } of sec.lines) {
    const g = text.match(/\bGrade (\d+)\b/);
    if (/^#{1,4}\s/.test(text) && g) grade = Number(g[1]);
    const t = text.match(/^##\s+Term (\d)/);
    if (t) { term = Number(t[1]); flush(); }
    if (/^#{2,4}\s+(?:Doubts|Specific doubts)/i.test(text) || /^Specific doubts:/i.test(text)) { inDoubts = true; flush(); continue; }
    if (/^#{2,4}\s+/.test(text) && !/^###\s+\S+\.tsx?\s*$/.test(text) && !/^###\s+src\//.test(text)) { inDoubts = /doubts/i.test(text); if (!inDoubts) flush(); }
    if (/^(Full list|Lines by file)/i.test(text) || /^## Lines by file/.test(text)) { inDoubts = false; flush(); }
    if (inDoubts && /^\s*-\s+/.test(text)) { doubtBullets.push(text.replace(/^\s*-\s+/, '')); continue; }
    const c = contextOf(text);
    if (!c && ctx?.bullet && /^-\s/.test(text)) flush(); // a one-bullet context ends at the next top-level bullet
    if (c) {
      flush();
      inDoubts = false;
      ctx = { path: c.path, folder: c.folder, bullet: /^-\s/.test(text) && c.rest !== '', line: n, buf: c.rest ? [c.rest] : [], lineBullets: [] };
      continue;
    }
    if (!ctx) {
      // A bullet or paragraph with no file: its quoted strings cannot be placed. The resolver reports them.
      if (/^\s*-\s+/.test(text) || /^\*\*/.test(text)) {
        const doubt = clip(text.replace(/^\s*-\s+/, ''));
        for (const s of quotedStrings(text)) out.push({ kind: 'quoted', section: sec.id, mdLine: n, file: null, grade, term, text: s, doubt });
      }
      continue;
    }
    if (/^\s*-\s+(.+?)\s+—\s+(.+)$/.test(text) && !text.includes('`')) {
      const m = text.match(/^\s*-\s+(.+?)\s+—\s+(.+)$/)!;
      ctx.lineBullets.push({ n, anchor: m[1].trim() });
      continue;
    }
    if (/^\s*$/.test(text)) continue;
    if (/^(Branch|Banks|Written by|Every isiXhosa)/.test(text)) continue;
    ctx.buf.push(text.replace(/^\s*-\s+/, ''));
  }
  flush();
};

/** True for the sections that are tables of rows (A, C, D, E-scope, F) and false for note sections. */
const isTableSection = (sec: Section) => sec.lines.some((l) => l.text.startsWith('| ') && /file|assumption/i.test(l.text)) && !/^G$|^T$/.test(sec.id) && !/^\| File \| Items/.test(sec.lines.find((l) => l.text.startsWith('|'))?.text ?? '');

export const parseTeacherCheck = (md: string): RawItem[] => {
  const out: RawItem[] = [];
  for (const sec of splitSections(md)) {
    if (sec.id === 'G') continue; // the 72 original vocabulary items: not in the packs the orchestrator listed
    if (sec.id === 'T' && /Grade 9 Afrikaans: 72 NEW/.test(sec.title)) {
      const first = sec.lines.find((l) => /Questions to look at first/i.test(l.text))?.text ?? '';
      out.push({
        kind: 'bankrange', section: 'T', mdLine: sec.startLine, file: 'grade9/afrikaans', text: 'items 7-12 of each bank', hints: quotedStrings(first),
        doubt: 'New Grade 9 Afrikaans question, not yet teacher-checked: is the Afrikaans correct and natural, and is the marked answer the only correct one?',
      });
      continue;
    }
    if (isTableSection(sec)) parseTable(sec, out);
    if (sec.id === 'B') continue; // general: "all the example words in the isiXhosa G6 lessons", no anchors
    parseNotes(sec, out);
  }
  return out;
};
