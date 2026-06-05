// Augments the global CloudflareEnv interface with bindings declared in wrangler.jsonc.
// This file must remain in sync with wrangler.jsonc.
declare global {
  interface CloudflareEnv {
    // D1 database
    DB: D1Database;
    // R2 audio cache
    AUDIO: R2Bucket;
    // Vectorize semantic search index (Grade 6 question dedup)
    QUESTIONS_IDX: VectorizeIndex;
    // Gemini API key (set via `wrangler secret put GEMINI_API_KEY`)
    GEMINI_API_KEY: string;
    // Optional secret for manual cron trigger (set via `wrangler secret put CRON_SECRET`)
    CRON_SECRET?: string;
  }
}

export {};
