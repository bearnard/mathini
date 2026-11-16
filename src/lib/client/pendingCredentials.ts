// The login code and PIN a new learner has not yet confirmed saving. Kept in sessionStorage (this tab only, gone when the tab closes) so a reload does not
// lose the one chance to see the PIN; cleared the moment the learner presses "I've saved it". It should not outlive the sitting, so it is not kept longer than this tab.
export interface PendingCredentials { loginCode: string; pin: string }
const KEY = 'pp_new_login';

type Store = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
const browserStore = (): Store | null => {
  try {
    return typeof sessionStorage === 'undefined' ? null : sessionStorage;
  } catch {
    return null;
  }
};

export function savePending(c: PendingCredentials, store: Store | null = browserStore()): void {
  try { store?.setItem(KEY, JSON.stringify({ loginCode: c.loginCode, pin: c.pin })); } catch { /* private mode: the screen still shows once */ }
}

export function readPending(store: Store | null = browserStore()): PendingCredentials | null {
  try {
    const v = JSON.parse(store?.getItem(KEY) ?? 'null') as Partial<PendingCredentials> | null;
    return v && typeof v.loginCode === 'string' && /^[A-Z0-9-]{4,30}$/.test(v.loginCode) && typeof v.pin === 'string' && /^\d{4}$/.test(v.pin) ? { loginCode: v.loginCode, pin: v.pin } : null;
  } catch {
    return null;
  }
}

export function clearPending(store: Store | null = browserStore()): void {
  try { store?.removeItem(KEY); } catch { /* nothing to clear */ }
}
