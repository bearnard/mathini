'use client';

import { useMemo, useRef } from 'react';
import { useStudent } from '../StudentContext';
import { createBrowserRunTracker } from './runClient';
import type { RunTracker } from './runTracker';

/** One run tracker per component. It reads "is a learner signed in" through a ref, so it stays stable while the student loads. */
export function useRunTracker(): RunTracker {
  const { student } = useStudent();
  const ref = useRef(student);
  ref.current = student;
  return useMemo(() => createBrowserRunTracker(() => !!ref.current), []);
}
