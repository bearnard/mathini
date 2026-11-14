import type { TopicScore } from './mockTest';
import { track } from '../../../../lib/client/analytics';

// Single place where the mock tests report to analytics (ADR 0002). The tests
// themselves stay client-side; this only queues a usage event via track(), which
// never throws and never blocks.

const slug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

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
  track('mock_test_start', { grade: 6, subject: 'nst', topic: slug(info.title), meta: { questions: info.questionCount } });
}

/** Called once when the results screen is shown. */
export function onFinish(info: MockTestFinishInfo): void {
  track('mock_test_finish', {
    grade: 6,
    subject: 'nst',
    topic: slug(info.title),
    meta: { score: info.score, total: info.total, reask_fixed: info.reaskFixed, reask_total: info.reaskTotal },
  });
}
