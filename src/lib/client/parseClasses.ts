// What the learner's "Your classes" card does with the server's answer. The answer can be missing, an error body or a shape we did not expect (an old
// cached response, a proxy page, a stub): none of those may break the home screen, so anything unusable counts as "no classes" and the card still offers Join.
export interface JoinedClass { classId: string; name: string; grade: number; schoolName: string }

export function parseClasses(json: unknown): JoinedClass[] {
  const list = json && typeof json === 'object' ? (json as { classes?: unknown }).classes : undefined;
  if (!Array.isArray(list)) return [];
  const out: JoinedClass[] = [];
  for (const c of list) {
    if (!c || typeof c !== 'object') continue;
    const o = c as Record<string, unknown>;
    if (typeof o.classId !== 'string' || typeof o.name !== 'string' || !o.classId || !o.name) continue;
    out.push({ classId: o.classId, name: o.name, grade: Number(o.grade) || 0, schoolName: typeof o.schoolName === 'string' ? o.schoolName : '' });
  }
  return out;
}

/** The class a successful join answered with, or null when the answer has no usable class. */
export function parseJoined(json: unknown): JoinedClass | null {
  const j = json && typeof json === 'object' ? (json as { joined?: unknown }).joined : undefined;
  return parseClasses({ classes: j ? [j] : [] })[0] ?? null;
}
