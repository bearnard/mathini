import type { TopicScore } from './mockTest';

// Single place to hook analytics into the mock tests later. Intentionally empty:
// nothing is tracked or sent today, and the tests stay fully client-side.

export interface MockTestStartInfo {
  title: string;
  questionCount: number;
}

export interface MockTestFinishInfo {
  title: string;
  /** First-attempt score, before the re-ask round. */
  score: number;
  total: number;
  byTopic: TopicScore[];
  /** How many missed items were answered correctly in the re-ask round. */
  reaskFixed: number;
  reaskTotal: number;
}

/** Called once when a test begins (including "Take a new test"). */
export function onStart(info: MockTestStartInfo): void {
  void info;
}

/** Called once when the results screen is shown. */
export function onFinish(info: MockTestFinishInfo): void {
  void info;
}
