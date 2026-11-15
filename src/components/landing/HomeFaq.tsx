import { HOME_FAQ } from '../../lib/seo/homeFaq';

/** Landing section 8. Native <details>, so it needs no script. The same list is published as FAQPage structured data by the page. */
export default function HomeFaq() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-20" aria-labelledby="faq-h">
      <h2 id="faq-h" className="text-center text-2xl font-black text-slate-900">Questions</h2>
      <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {HOME_FAQ.map((f) => (
          <details key={f.q} className="group p-4">
            <summary className="cursor-pointer list-none font-bold text-slate-800 marker:hidden">
              <span className="flex items-start justify-between gap-3">{f.q}<span aria-hidden="true" className="text-[#3285bc] group-open:rotate-45">+</span></span>
            </summary>
            <p className="mt-2 text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
