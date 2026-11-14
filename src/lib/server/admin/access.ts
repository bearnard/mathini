// Cloudflare Access JWT verification (ADR 0002, section 2). WebCrypto, RS256 ONLY,
// no JWT dependency. Everything here FAILS CLOSED: a missing config value, a bad
// token or any thrown error means "not allowed", never "allowed".

export interface AccessConfig {
  /** e.g. "myteam.cloudflareaccess.com" */
  teamDomain: string;
  /** The Access application's Audience (AUD) tag. */
  aud: string;
  /** Lower-cased allowed admin emails. */
  adminEmails: string[];
}

export interface Jwk {
  kid?: string;
  kty?: string;
  n?: string;
  e?: string;
  alg?: string;
  use?: string;
}

/** Fetches the team's JWKS. Injected so tests can use a fake key set. */
export type JwksFetcher = (teamDomain: string) => Promise<Jwk[]>;

export type AccessResult = { ok: true; email: string } | { ok: false; reason: string };

const TEAM_DOMAIN_RE = /^[a-z0-9][a-z0-9-]{0,62}\.cloudflareaccess\.com$/;
const LEEWAY_S = 30;
const MAX_TOKEN_CHARS = 8192;

/** Reads the three settings. Returns null (= deny everything) unless ALL are present and valid. */
export function parseAccessConfig(raw: {
  ACCESS_TEAM_DOMAIN?: string | null;
  ACCESS_AUD?: string | null;
  ADMIN_EMAILS?: string | null;
}): AccessConfig | null {
  const teamDomain = (raw.ACCESS_TEAM_DOMAIN ?? '').trim().toLowerCase();
  const aud = (raw.ACCESS_AUD ?? '').trim();
  const adminEmails = (raw.ADMIN_EMAILS ?? '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter((e) => e.includes('@'));
  if (!TEAM_DOMAIN_RE.test(teamDomain) || aud === '' || adminEmails.length === 0) return null;
  return { teamDomain, aud, adminEmails };
}

function b64urlToBytes(s: string): Uint8Array<ArrayBuffer> {
  if (!/^[A-Za-z0-9_-]*$/.test(s)) throw new Error('bad base64url');
  const pad = s.length % 4 === 0 ? '' : '='.repeat(4 - (s.length % 4));
  const bin = atob(s.replace(/-/g, '+').replace(/_/g, '/') + pad);
  const out = new Uint8Array(new ArrayBuffer(bin.length));
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function decodeJson(part: string): Record<string, unknown> {
  const v = JSON.parse(new TextDecoder().decode(b64urlToBytes(part)));
  if (!v || typeof v !== 'object' || Array.isArray(v)) throw new Error('not an object');
  return v as Record<string, unknown>;
}

async function importRsaKey(jwk: Jwk): Promise<CryptoKey> {
  if (jwk.kty !== 'RSA' || !jwk.n || !jwk.e) throw new Error('not an RSA key');
  return crypto.subtle.importKey(
    'jwk',
    { kty: 'RSA', n: jwk.n, e: jwk.e, alg: 'RS256', ext: true },
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['verify'],
  );
}

/**
 * JWKS cache: 10 minutes, and at most one forced refetch per minute when a token
 * names a `kid` we do not have (key rotation), so a flood of bad tokens cannot
 * hammer Cloudflare.
 */
export function createJwksCache(fetcher: JwksFetcher, opts: { ttlMs?: number; refetchCooldownMs?: number } = {}) {
  const ttlMs = opts.ttlMs ?? 10 * 60 * 1000;
  const cooldownMs = opts.refetchCooldownMs ?? 60 * 1000;
  let keys: Jwk[] | null = null;
  let fetchedAt = 0;
  let team = '';

  return async function getKey(teamDomain: string, kid: string, now: number): Promise<Jwk | null> {
    const stale = !keys || team !== teamDomain || now - fetchedAt >= ttlMs;
    if (stale) {
      keys = await fetcher(teamDomain);
      fetchedAt = now;
      team = teamDomain;
    }
    let found = keys!.find((k) => k.kid === kid) ?? null;
    if (!found && !stale && now - fetchedAt >= cooldownMs) {
      keys = await fetcher(teamDomain);
      fetchedAt = now;
      found = keys.find((k) => k.kid === kid) ?? null;
    }
    return found;
  };
}

export type KeyGetter = (teamDomain: string, kid: string, now: number) => Promise<Jwk | null>;

/**
 * Verifies a Cloudflare Access assertion. Checks, in order: config present, token
 * shape, alg is exactly RS256 (rejects none/HS256 key-confusion), signature,
 * iss, aud, exp, nbf, and that the email is an allowed admin.
 */
export async function verifyAccessJwt(
  token: string | null | undefined,
  config: AccessConfig | null,
  getKey: KeyGetter,
  now: number = Date.now(),
): Promise<AccessResult> {
  const deny = (reason: string): AccessResult => ({ ok: false, reason });
  try {
    if (!config) return deny('not configured');
    if (!token || token.length > MAX_TOKEN_CHARS) return deny('no token');
    const parts = token.split('.');
    if (parts.length !== 3 || parts.some((p) => p === '')) return deny('malformed');

    const header = decodeJson(parts[0]);
    if (header.alg !== 'RS256') return deny('alg not allowed');
    if (typeof header.kid !== 'string' || header.kid === '') return deny('no kid');

    const jwk = await getKey(config.teamDomain, header.kid, now);
    if (!jwk) return deny('unknown key');
    const key = await importRsaKey(jwk);
    const valid = await crypto.subtle.verify(
      'RSASSA-PKCS1-v1_5',
      key,
      b64urlToBytes(parts[2]),
      new TextEncoder().encode(`${parts[0]}.${parts[1]}`),
    );
    if (!valid) return deny('bad signature');

    const p = decodeJson(parts[1]);
    if (p.iss !== `https://${config.teamDomain}`) return deny('wrong issuer');
    const aud = Array.isArray(p.aud) ? p.aud : typeof p.aud === 'string' ? [p.aud] : [];
    if (!aud.includes(config.aud)) return deny('wrong audience');
    const nowS = Math.floor(now / 1000);
    if (typeof p.exp !== 'number' || nowS > p.exp + LEEWAY_S) return deny('expired');
    if (p.nbf !== undefined && (typeof p.nbf !== 'number' || nowS + LEEWAY_S < p.nbf)) return deny('not yet valid');
    const email = typeof p.email === 'string' ? p.email.trim().toLowerCase() : '';
    if (!email || !config.adminEmails.includes(email)) return deny('email not allowed');
    return { ok: true, email };
  } catch {
    return deny('error');
  }
}

/** Production JWKS fetcher (Cloudflare's certs endpoint). */
export const fetchAccessJwks: JwksFetcher = async (teamDomain) => {
  if (!TEAM_DOMAIN_RE.test(teamDomain)) throw new Error('bad team domain');
  const res = await fetch(`https://${teamDomain}/cdn-cgi/access/certs`, { headers: { Accept: 'application/json' } });
  if (!res.ok) throw new Error(`certs ${res.status}`);
  const body = (await res.json()) as { keys?: Jwk[] };
  return Array.isArray(body.keys) ? body.keys : [];
};
