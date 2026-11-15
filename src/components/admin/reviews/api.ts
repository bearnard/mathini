// Small fetch helper for the review admin pages. Every write sends the X-Admin-Action header the server demands (see adminWrite).
export interface Failure { error: string; findings: { code: string; severity: string; detail: string }[] | null; needsAcknowledgement: boolean }

export async function postJson(url: string, action: string, body: unknown): Promise<{ ok: true; data: Record<string, unknown> } | { ok: false; failure: Failure }> {
  try {
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Admin-Action': action }, body: JSON.stringify(body) });
    const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
    if (res.ok) return { ok: true, data };
    return { ok: false, failure: { error: String(data.error ?? 'That did not work'), findings: (data.findings as Failure['findings']) ?? null, needsAcknowledgement: data.needsAcknowledgement === true } };
  } catch {
    return { ok: false, failure: { error: 'That did not work', findings: null, needsAcknowledgement: false } };
  }
}

export const when = (ms: number) => new Date(ms).toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg', dateStyle: 'medium', timeStyle: 'short' });
