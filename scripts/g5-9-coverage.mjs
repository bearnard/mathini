// Which Grade 5-9 bank answers can NOT be answered from their lesson? Same idea as the bearn lessons' `uncoveredAnswers`
// (src/components/diagrams/science/scienceHelpers.ts) and helper C's scripts/g10-12-coverage.ts: the content words (4+ letters)
// of each correct answer must appear in the lesson text. The lesson text here is what the learner actually SEES: every slide is
// rendered (react-dom/server) with the shell stubbed, plus the topic's title and subtitle and the topic folder's source up to the bank.
//   node scripts/g5-9-coverage.mjs [out.json]      (run from the repo root; esbuild and react come from node_modules)
import esbuild from 'esbuild'; import { createRequire } from 'module'; import fs from 'fs'; import path from 'path'; import vm from 'vm';
const ROOT = process.cwd(); const req = createRequire(ROOT + '/package.json');
const React = req('react'); const { renderToStaticMarkup } = req('react-dom/server');
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const SHELLS = /(CapsSubjectTopic|AfrikaansTopic|HisTopic|NstTopic|GeoTopic)$/;
const files = walk(path.join(ROOT, 'src/curriculum')).filter((f) => /grade[6-9]\//.test(f) && /\.tsx$/.test(f) && !/\.test\./.test(f) && /CapsSubjectTopic|AfrikaansTopic|HisTopic|NstTopic|GeoTopic/.test(fs.readFileSync(f, 'utf8')) && /learnSteps|steps/.test(fs.readFileSync(f, 'utf8')));
const plug = { name: 's', setup(b) {
  b.onResolve({ filter: SHELLS }, (a) => ({ path: a.path, namespace: 'stub' }));
  b.onResolve({ filter: /\.css$/ }, (a) => ({ path: a.path, namespace: 'empty' }));
  b.onLoad({ filter: /.*/, namespace: 'empty' }, () => ({ contents: '', loader: 'js' }));
  b.onLoad({ filter: /.*/, namespace: 'stub' }, () => ({ contents: 'export default function Shell(p){(globalThis.__cap=globalThis.__cap||[]).push({p});return null;}', loader: 'js' }));
} };
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;/g, ' ');
const textOf = (node) => { let h = ''; try { h = renderToStaticMarkup(node ?? null); } catch { h = ''; } return decode(h.replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ')); };
// words that carry no content: a missing 'with' or 'them' is not a gap
const STOP = new Set('with that them than from have they their there these those into over under before after also only more most much many used uses using each other what when where which while whose will would could should about between because being been both does done during else even every just like made make makes must never next once same some such then this very were your yours'.split(' '));
// a word counts as present when its stem is: multiply/multiplying, region/regions, recognize/recognise
const stem = (w) => w.replace(/(ing|ed|es|s|ly|ise|ize|ion|ation)$/,'').slice(0, 7);
export const answerWords = (a) => [...new Set(String(a).toLowerCase().replace(/[^\p{L}0-9\s-]/gu, ' ').split(/\s+/).filter((w) => w.length >= 4 && !/^[0-9-]+$/.test(w)))];
const folderSource = (dir) => { let t = ''; for (const f of fs.readdirSync(dir)) { if (!/\.tsx?$/.test(f) || /\.test\./.test(f)) continue; const s = fs.readFileSync(path.join(dir, f), 'utf8'); const i = s.search(/^(export )?const (bank|items)\b/m); t += '\n' + (i === -1 ? s : s.slice(0, i)); } return t; };
const gaps = []; let checked = 0, lessons = 0; const problems = []; const lessonText = {};
for (const f of files) {
  try {
    const r = await esbuild.build({ entryPoints: [f], bundle: true, write: false, format: 'cjs', platform: 'node', jsx: 'automatic', tsconfig: ROOT + '/tsconfig.json', plugins: [plug], external: ['react', 'react-dom', 'react/*', 'katex', 'next/*', 'next'], logLevel: 'silent', loader: { '.png': 'dataurl', '.svg': 'dataurl', '.jpg': 'dataurl', '.webp': 'dataurl' } });
    const ctx = { module: { exports: {} }, require: (m) => req(m), console, process, setTimeout, clearTimeout, window: undefined }; ctx.exports = ctx.module.exports; ctx.globalThis = ctx;
    vm.createContext(ctx); vm.runInContext(r.outputFiles[0].text, ctx, { filename: f }); ctx.__cap = [];
    try { renderToStaticMarkup(React.createElement(ctx.module.exports.default)); } catch (e) { if (!ctx.__cap.length) throw e; }
    const cap = ctx.__cap[0]?.p; if (!cap) { problems.push(f); continue; }
    const steps = cap.learnSteps || cap.steps || []; lessons++;
    const slideText = (steps.map((s) => (s.title || '') + ' ' + textOf(s.content)).join(' ') + ' ' + (cap.title || '') + ' ' + (cap.subtitle || '')).toLowerCase();
    const text = (steps.map((s) => (s.title || '') + ' ' + textOf(s.content)).join(' ') + ' ' + (cap.title || '') + ' ' + (cap.subtitle || '') + ' ' + folderSource(path.dirname(f))).toLowerCase();
    const rel = path.relative(ROOT, f).replace('src/curriculum/', ''); lessonText[rel] = slideText;
    for (const it of cap.bank || []) {
      if (!it || typeof it.answer !== 'string') continue; checked++;
      const promptL = String(it.prompt || '').toLowerCase();
      const cw = answerWords(it.answer).filter((w) => !STOP.has(w) && !promptL.includes(w));
      const missing = cw.filter((w) => !text.includes(w) && !(stem(w).length >= 4 && text.includes(stem(w))));
      const slideMissing = cw.filter((w) => !slideText.includes(w) && !(stem(w).length >= 4 && slideText.includes(stem(w))));
      if (missing.length || slideMissing.length) gaps.push({ file: rel, grade: Number(rel.match(/^grade(\d)/)[1]), subject: rel.split('/')[1], prompt: it.prompt, answer: it.answer, explanation: it.explanation || '', missing, slideMissing, nWords: cw.length });
    }
  } catch (e) { problems.push(f + ': ' + String(e.message).split('\n')[0]); }
}
const by = {}; for (const g of gaps) { const k = `grade${g.grade}/${g.subject}`; by[k] = (by[k] || 0) + 1; }
console.log(`lessons ${lessons}, bank answers checked ${checked}, not covered ${gaps.length}, topic problems ${problems.length}`); console.log(JSON.stringify(by));
if (process.argv[2]) fs.writeFileSync(process.argv[2], JSON.stringify({ lessons, checked, gaps, problems }, null, 1));
if (process.argv[3]) fs.writeFileSync(process.argv[3], JSON.stringify(lessonText));
