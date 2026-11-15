import Link from 'next/link';
import SiteStats from './SiteStats';

/**
 * Landing section 7: why to trust it. The numbers are the real, build-time ones (SiteStats). No testimonials, no invented claims: each line
 * says only what is true today. The teacher-check line says "we send ... to teachers", because that is what is happening.
 */
const POINTS: { title: string; body: string }[] = [
  { title: 'Built on CAPS', body: 'Every topic sits under its CAPS grade, subject and term, so practice matches what is taught in class.' },
  { title: 'Checked before you see it', body: 'Questions go through automated quality checks: a clear answer key, no giveaways, no repeated options. Lessons are fact-checked, and wrong or misleading lines are fixed.' },
  { title: 'Teachers check the languages', body: 'We send Afrikaans and isiXhosa content to first-language teachers to check, and fix what they find. Learners can also report a question they think is wrong.' },
  { title: 'Private by design', body: 'The learner, parent and teacher areas never show ads and never use third-party analytics. Public information pages may show non-personalised Google ads, and only if you accept. We never sell or share learner information. A parent sees only their own child, and a class teacher sees only a nickname and progress. We follow POPIA.' },
];

export default function Trust() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-16" aria-labelledby="trust-h">
      <h2 id="trust-h" className="text-center text-2xl font-black text-slate-900">Content you can trust, privacy you can check</h2>
      <SiteStats className="mt-8" />
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {POINTS.map((p) => (
          <li key={p.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="font-bold text-slate-800">{p.title}</h3>
            <p className="mt-1 text-slate-600">{p.body}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-center text-sm text-slate-600">
        Read exactly what we collect and why on the <Link href="/privacy" className="font-bold text-[#3285bc] hover:underline">privacy page</Link>.
      </p>
    </section>
  );
}
