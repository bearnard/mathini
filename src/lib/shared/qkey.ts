// Stable question identity ("qkey") for spaced review.
//
// A qkey names ONE question for ONE task, independent of where it was served from
// (curated bank or D1 item_cache; item_cache is unique on (task, prompt)). It is a
// 64-bit FNV-1a hash of `task \n normalised prompt`, truncated to 12 hex chars.
//
// DO NOT CHANGE the normalisation or the hash: stored qkeys would stop matching.
// qkey.test.ts pins known prompts to known keys so a change cannot slip through.
// Pure and synchronous, so it runs identically on the client and in the Worker.

/** Lower-case, fold look-alike punctuation, collapse whitespace. Wording changes still change the key. */
export function normalisePrompt(prompt: string): string {
  return prompt
    .normalize('NFKC')
    .replace(/[‘’‛′]/g, "'")
    .replace(/[“”‟″]/g, '"')
    .replace(/[‐-―−]/g, '-')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

const FNV_OFFSET = 0xcbf29ce484222325n;
const FNV_PRIME = 0x100000001b3n;
const MASK64 = 0xffffffffffffffffn;

function fnv1a64(text: string): bigint {
  let h = FNV_OFFSET;
  const bytes = new TextEncoder().encode(text);
  for (const b of bytes) {
    h ^= BigInt(b);
    h = (h * FNV_PRIME) & MASK64;
  }
  return h;
}

export function makeQkey(task: string, prompt: string): string {
  return fnv1a64(`${task.trim()}\n${normalisePrompt(prompt)}`).toString(16).padStart(16, '0').slice(0, 12);
}

export const QKEY_PATTERN = /^[0-9a-f]{12}$/;
export function isQkey(v: unknown): v is string {
  return typeof v === 'string' && QKEY_PATTERN.test(v);
}
