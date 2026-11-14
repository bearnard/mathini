'use client';

import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
  type ReactNode,
} from 'react';

export interface Student {
  id: string;
  displayName: string;
  avatar: string;
  grade: number;
  xp: number;
  xpByScope: Record<string, number>;
  /** A parent/guardian has agreed to activity and approximate-location recording. */
  consented: boolean;
}

interface StudentContextValue {
  student: Student | null;
  status: 'loading' | 'active' | 'anonymous';
  setStudent: (student: Student | null) => void;
  signOut: () => void;
  refreshStudent: () => void;
}

const StudentContext = createContext<StudentContextValue | undefined>(undefined);

const STORAGE_KEY = 'preppals_student_id';

export function StudentProvider({ children }: { children: ReactNode }) {
  const [student, setStudentState] = useState<Student | null>(null);
  const [status, setStatus] = useState<'loading' | 'active' | 'anonymous'>('loading');

  const fetchMe = useCallback(async (): Promise<Student | null> => {
    try {
      const res = await fetch('/api/session');
      if (!res.ok) return null;
      const data = (await res.json()) as { studentId: string; displayName: string; avatar?: string; grade: number; xp?: number; xpByScope?: Record<string, number>; consented?: boolean };
      return {
        id: data.studentId,
        displayName: data.displayName,
        avatar: data.avatar ?? '/avatars/avatar-1.webp',
        grade: data.grade,
        xp: data.xp ?? 0,
        xpByScope: data.xpByScope ?? {},
        // Only an explicit `false` from the server triggers the one-time prompt.
        consented: data.consented !== false,
      };
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    // Read from cookie — the session route validates it server-side
    setStatus('loading');
    fetchMe().then((s) => {
      if (s) {
        setStudentState(s);
        setStatus('active');
      } else {
        setStatus('anonymous');
      }
    });
  }, [fetchMe]);

  const setStudent = useCallback((s: Student | null) => {
    setStudentState(s);
    setStatus(s ? 'active' : 'anonymous');
    if (s) {
      try {
        localStorage.setItem(STORAGE_KEY, s.id);
      } catch {}
    }
  }, []);

  const signOut = useCallback(() => {
    fetch('/api/session', { method: 'DELETE' }).catch(() => {});
    setStudentState(null);
    setStatus('anonymous');
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  }, []);

  const refreshStudent = useCallback(async () => {
    const s = await fetchMe();
    if (s) setStudentState(s);
  }, [fetchMe, setStudentState]);

  return (
    <StudentContext.Provider
      value={{ student, status, setStudent, signOut, refreshStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent(): StudentContextValue {
  const ctx = useContext(StudentContext);
  if (!ctx) throw new Error('useStudent must be used within StudentProvider');
  return ctx;
}
