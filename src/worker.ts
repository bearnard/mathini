// Custom Worker entry (ADR 0003 section 1a, "make the cron run"). OpenNext's generated worker (.open-next/worker.js) handles
// every request but exports no `scheduled` handler, so the weekly cron trigger in wrangler.jsonc never ran anything. This entry
// re-exports OpenNext's fetch handler unchanged and adds scheduled(). wrangler.jsonc "main" points here; `opennextjs-cloudflare
// build` still writes .open-next/worker.js, which is imported below.
// @ts-ignore generated at build time by `opennextjs-cloudflare build`
import openNext from '../.open-next/worker.js';
import { runScheduled } from './lib/server/scheduled';
import { runWeeklySummaryFromEnv, WEEKLY_CRON, type SummaryEnv } from './lib/server/parents/summaryJob';

// OpenNext's worker also exports its Durable Object classes. No bindings use them today; re-exporting keeps them available
// if a feature that needs them is enabled later.
// @ts-ignore generated at build time
export { DOQueueHandler, DOShardedTagCache, BucketCachePurge } from '../.open-next/worker.js';

type Env = Parameters<typeof runScheduled>[0];

export default {
  fetch(request: Request, env: unknown, ctx: ExecutionContext): Promise<Response> {
    return (openNext as { fetch: (r: Request, e: unknown, c: ExecutionContext) => Promise<Response> }).fetch(request, env, ctx);
  },
  async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    // The weekly parent summary has its own trigger (and so its own subrequest budget); every other trigger is the daily job.
    if (controller.cron === WEEKLY_CRON) ctx.waitUntil(runWeeklySummaryFromEnv(env as unknown as SummaryEnv).then(() => undefined, () => undefined));
    else ctx.waitUntil(runScheduled(env));
  },
};
