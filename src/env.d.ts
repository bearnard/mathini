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
    // Session signing secret (set via `wrangler secret put SESSION_SECRET`)
    SESSION_SECRET: string;
    // Admin console (ADR 0002). All three must be set or /admin and /api/admin return 403.
    //   ACCESS_TEAM_DOMAIN  e.g. myteam.cloudflareaccess.com
    //   ACCESS_AUD          the Access application's Audience (AUD) tag
    //   ADMIN_EMAILS        comma-separated list of allowed admin emails
    ACCESS_TEAM_DOMAIN?: string;
    ACCESS_AUD?: string;
    ADMIN_EMAILS?: string;
  }
}

export {};
