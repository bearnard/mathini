// Where an adult lands right after signing in (ADR 0003): a teacher goes to their classes, a school admin to their school, a parent to their children.
// Everyone who signs in is a parent first, so the more specific roles are checked first. Anyone else (for example a moderator on their own) lands on the account page.
export const ADULT_HOME = { teacher: '/teacher', school_admin: '/school', parent: '/parent', other: '/account' } as const;

export function adultLandingPath(roles: readonly string[] | null | undefined): string {
  const r = new Set(Array.isArray(roles) ? roles : []);
  if (r.has('teacher')) return ADULT_HOME.teacher;
  if (r.has('school_admin')) return ADULT_HOME.school_admin;
  if (r.has('parent')) return ADULT_HOME.parent;
  return ADULT_HOME.other;
}
