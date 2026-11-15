import { SITE_STATS, formatCount, gradeRangeText } from '../../lib/seo/siteStats';
import type { SiteStats as Stats } from '../../../scripts/lib/siteStats';

/**
 * The real numbers behind the site (landing brief section 7). Server-rendered: no script, no image, no database. The counts are made at build time
 * from the curriculum registry and the code question banks (see scripts/generate-site-stats.ts), and a test fails if they go stale. Nothing here is
 * typed in by hand and nothing is rounded up.
 */
export default function SiteStats({ stats = SITE_STATS, className = '' }: { stats?: Stats; className?: string }) {
  const tiles = [
    { value: formatCount(stats.topics), label: 'topics', note: 'each with a lesson and practice' },
    { value: formatCount(stats.questions), label: 'exam-style questions', note: 'written for the CAPS topics' },
    { value: String(stats.grades), label: 'grades', note: gradeRangeText(stats) },
    { value: String(stats.subjects), label: 'subjects', note: `${formatCount(stats.subjectAreas)} subject areas across the grades` },
  ];
  return (
    <section aria-label="PrepPals in numbers" className={className}>
      <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {tiles.map((t) => (
          <div key={t.label} className="rounded-2xl border border-slate-200 bg-white p-4 text-center">
            <dd className="text-3xl font-black text-[#3285bc] md:text-4xl">{t.value}</dd>
            <dt className="mt-1 text-sm font-bold text-slate-900">{t.label}</dt>
            <dd className="mt-0.5 text-xs text-slate-600">{t.note}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-2 text-center text-xs text-slate-500">Counted from the content on this site when it was last built.</p>
    </section>
  );
}
