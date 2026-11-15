import Link from 'next/link';
import { SEO_GRADES, gradePath, subjectPath, topicPath } from '../../lib/seo/curriculumIndex';

/**
 * Pick a grade, then a subject, then a topic (landing brief section 5). SERVER-RENDERED and light: no client script at all. The grade choice is a
 * native radio group styled as tabs, so it works without JavaScript, with the keyboard and with a screen reader; every topic is a plain link to its
 * public page (the same pages the sitemap lists), and each subject also links to its own page.
 */
const DEFAULT_GRADE = 6;

/** The CSS that shows the panel of the checked grade. Built from the grade ids, so a new grade needs no edit here. */
const explorerCss = (ids: number[]): string =>
  // topic links carry no class (about 970 of them): they are styled here, which keeps the HTML small
  `#grade-explorer .ge-panel{display:none}` +
  `#grade-explorer .ge-topics{margin:.25rem 0 0;padding:0;list-style:none}` +
  `#grade-explorer .ge-topics a{display:inline-block;padding:.25rem 0;font-size:.875rem;color:#1e293b;text-decoration:none}` +
  `#grade-explorer .ge-topics a:hover,#grade-explorer .ge-topics a:focus-visible{text-decoration:underline}` +
  ids
    .map(
      (id) =>
        `#grade-explorer #ge-g${id}:checked ~ .ge-panels #ge-p${id}{display:block}` +
        `#grade-explorer #ge-g${id}:checked ~ .ge-tabs label[for="ge-g${id}"]{background:#3285bc;color:#fff;border-color:#3285bc}` +
        `#grade-explorer #ge-g${id}:focus-visible ~ .ge-tabs label[for="ge-g${id}"]{outline:3px solid #f68535;outline-offset:2px}`,
    )
    .join('');

export default function GradeExplorer({ defaultGrade = DEFAULT_GRADE, topicsPerSubject }: {
  defaultGrade?: number;
  /**
   * Show at most this many topics under each subject, then a link to the subject page for the rest. Default: every topic (about 180 KB of HTML,
   * about 23 KB compressed, mostly the link addresses). A small number (4 gives about 96 KB) makes the page lighter.
   */
  topicsPerSubject?: number;
}) {
  const ids = SEO_GRADES.map((g) => g.gradeId);
  const first = ids.includes(defaultGrade) ? defaultGrade : ids[0];
  return (
    <section id="grade-explorer" aria-labelledby="ge-title" className="py-10">
      <style>{explorerCss(ids)}</style>
      <h2 id="ge-title" className="text-2xl font-black text-slate-900 md:text-3xl">Find your grade</h2>
      <p className="mt-1 text-slate-600">Pick a grade, then a subject, then a topic. It is all free to browse.</p>
      <fieldset className="relative mt-5 border-0 p-0">
        <legend className="sr-only">Choose a grade</legend>
        {SEO_GRADES.map((g) => (
          <input key={g.gradeId} type="radio" name="ge-grade" id={`ge-g${g.gradeId}`} className="sr-only" defaultChecked={g.gradeId === first} />
        ))}
        <div className="ge-tabs grid grid-cols-4 gap-2 md:grid-cols-8">
          {SEO_GRADES.map((g) => (
            <label
              key={g.gradeId}
              htmlFor={`ge-g${g.gradeId}`}
              className="flex min-h-14 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-1 py-2 text-center font-bold text-slate-800 transition-colors hover:border-[#3285bc]/60"
            >
              <span className="text-base leading-tight">{g.title}</span>
              <span className="text-xs font-medium opacity-80">{g.subjects.length} subjects</span>
            </label>
          ))}
        </div>
        <div className="ge-panels mt-5">
          {SEO_GRADES.map((g) => (
            <div key={g.gradeId} id={`ge-p${g.gradeId}`} className="ge-panel">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold text-slate-900">{g.title}</h3>
                <Link href={gradePath(g)} className="text-sm font-semibold text-[#3285bc] underline">All {g.title} subjects</Link>
              </div>
              <ul className="mt-3 grid gap-3 md:grid-cols-2">
                {g.subjects.map((s) => {
                  const topicCount = s.terms.reduce((n, t) => n + t.topics.length, 0);
                  return (
                    <li key={s.slug} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <Link href={subjectPath(g, s)} className="text-base font-bold text-slate-900 hover:underline">{s.title}</Link>
                      <p className="text-xs text-slate-600">{topicCount} {topicCount === 1 ? 'topic' : 'topics'}</p>
                      <details className="mt-2">
                        <summary className="min-h-11 cursor-pointer py-2 text-sm font-semibold text-[#3285bc]">Show topics</summary>
                        {(() => {
                          let left = topicsPerSubject ?? Infinity;
                          return s.terms.map((term) => {
                            const shown = term.topics.slice(0, Math.max(0, left));
                            left -= shown.length;
                            if (shown.length === 0) return null;
                            return (
                              <div key={term.termId} className="mt-1">
                                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{term.title}</p>
                                <ul className="ge-topics">
                                  {shown.map((t) => (
                                    <li key={t.slug}><Link href={topicPath(g, s, t)}>{t.title}</Link></li>
                                  ))}
                                </ul>
                              </div>
                            );
                          });
                        })()}
                        {topicsPerSubject !== undefined && topicCount > topicsPerSubject && (
                          <p className="mt-1"><Link href={subjectPath(g, s)} className="text-sm font-semibold text-[#3285bc] underline">All {topicCount} topics</Link></p>
                        )}
                      </details>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </fieldset>
    </section>
  );
}
