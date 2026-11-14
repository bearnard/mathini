// Maps the region labels Cloudflare reports for South Africa to our nine province ids.
// Cloudflare's names and ISO codes have varied over time ("KwaZulu-Natal" / "KwaZulu Natal",
// code "NL" / "KZN", "North-West" / "North West"), so match generously on name, then on code.

export const PROVINCE_IDS = [
  'eastern-cape',
  'free-state',
  'gauteng',
  'kwazulu-natal',
  'limpopo',
  'mpumalanga',
  'north-west',
  'northern-cape',
  'western-cape',
] as const;
export type ProvinceId = (typeof PROVINCE_IDS)[number];

const ALIASES: Record<ProvinceId, string[]> = {
  'eastern-cape': ['eastern cape', 'ec'],
  'free-state': ['free state', 'orange free state', 'fs'],
  gauteng: ['gauteng', 'gt', 'gp'],
  'kwazulu-natal': ['kwazulu-natal', 'kwazulu natal', 'kzn', 'nl', 'natal'],
  limpopo: ['limpopo', 'northern province', 'lp', 'np'],
  mpumalanga: ['mpumalanga', 'eastern transvaal', 'mp'],
  'north-west': ['north west', 'north-west', 'northwest', 'north west province', 'nw'],
  'northern-cape': ['northern cape', 'nc'],
  'western-cape': ['western cape', 'wc'],
};

const norm = (s: string | null | undefined) =>
  (s ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();

const LOOKUP = new Map<string, ProvinceId>();
for (const id of PROVINCE_IDS) for (const a of ALIASES[id]) LOOKUP.set(a, id);

/** The province for a South African region label and/or code, or null when it is not one of the nine. */
export function provinceFor(region: string | null | undefined, regionCode?: string | null): ProvinceId | null {
  const byName = LOOKUP.get(norm(region));
  if (byName) return byName;
  const code = norm(regionCode);
  return code ? (LOOKUP.get(code) ?? null) : null;
}
