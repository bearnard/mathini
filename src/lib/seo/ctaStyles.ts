// Shared CTA link styling for server-rendered SEO pages (homepage, subject
// landing pages). Matches Button.tsx's `primary`/`outline` variants, but as
// plain classes applied to <Link> (an <a>) rather than a <button> — these
// CTAs navigate, and an <a> can't be nested inside a <button>.
export const ctaPrimary =
  'inline-flex items-center justify-center rounded-xl border-2 border-transparent bg-[#f68535] px-6 py-2.5 text-base font-bold text-white shadow-md transition-colors hover:bg-[#e06a20]';
export const ctaOutline =
  'inline-flex items-center justify-center rounded-xl border-2 border-[#3285bc]/70 bg-white px-6 py-2.5 text-base font-bold text-[#3285bc] transition-colors hover:bg-[#3285bc]/10';
export const ctaPrimarySmall =
  'inline-flex items-center justify-center rounded-xl border-2 border-transparent bg-[#f68535] px-4 py-1.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#e06a20]';
