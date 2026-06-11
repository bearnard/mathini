// Student storage helpers.
//
// Dual-write localStorage + cookie for resilience.
// localStorage is read first (fastest), with cookie as fallback.

const STORAGE_KEY = 'preppals_student_id';
const COOKIE_NAME = 'pp_sid';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year

/**
 * Read the stored student ID, preferring localStorage, then cookie.
 */
export function readStoredStudentId(): string | null {
  // 1. localStorage (fastest, most reliable in browser)
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
  }

  // 2. Cookie fallback
  if (typeof document !== 'undefined') {
    const match = document.cookie.match(new RegExp(`(?:^|;)\\s*${COOKIE_NAME}=([^;]*)`));
    if (match?.[1]) return decodeURIComponent(match[1]);
  }

  return null;
}

/**
 * Write the student ID to both localStorage and cookie.
 */
export function writeStudentId(id: string): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, id);
  }
  if (typeof document !== 'undefined') {
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(id)}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
  }
}

/**
 * Clear the stored student ID from both storage locations.
 */
export function clearStudentId(): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
  if (typeof document !== 'undefined') {
    document.cookie = `${COOKIE_NAME}=; Max-Age=0; Path=/; SameSite=Lax`;
  }
}
