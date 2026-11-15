-- ADR 0003 section 2: adult accounts (parents, teachers, moderators, school admins) and magic-link sign-in.
-- Additive only: five new tables, nothing existing is altered, so the old code ignores all of it. No foreign keys, like the other tables.
-- Timestamps are epoch milliseconds. Emails are stored lower-cased. NO plain token is ever stored: only SHA-256 (hex).
-- Learners keep code + PIN and the pp_session cookie; none of this touches them.

-- One row per adult. The role set is in user_roles; the admin (the owner) is NOT here, the admin is Cloudflare Access (ADR 0002).
CREATE TABLE IF NOT EXISTS users (
  id            TEXT    PRIMARY KEY,                 -- uuid
  email         TEXT    NOT NULL UNIQUE,             -- lower-cased, trimmed
  created_at    INTEGER NOT NULL,
  last_login_at INTEGER
);

CREATE TABLE IF NOT EXISTS user_roles (
  user_id    TEXT    NOT NULL,
  role       TEXT    NOT NULL CHECK (role IN ('parent', 'teacher', 'moderator', 'school_admin')),
  granted_by TEXT    NOT NULL,                       -- 'self' (a new sign-in becomes a parent), 'admin', or the granting user id
  granted_at INTEGER NOT NULL,
  PRIMARY KEY (user_id, role)
);

-- A sign-in link: single use, 15 minutes. token_hash is the SHA-256 of the 32-byte token that is in the email link.
CREATE TABLE IF NOT EXISTS magic_links (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  email      TEXT    NOT NULL,
  token_hash TEXT    NOT NULL UNIQUE,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL,
  used_at    INTEGER
);
CREATE INDEX IF NOT EXISTS idx_magic_links_created ON magic_links (created_at);

-- An adult's browser session (cookie pp_adult). token_hash is the SHA-256 of the cookie's random token; revocable.
CREATE TABLE IF NOT EXISTS sessions (
  id           TEXT    PRIMARY KEY,                  -- uuid
  user_id      TEXT    NOT NULL,
  token_hash   TEXT    NOT NULL UNIQUE,
  created_at   INTEGER NOT NULL,
  expires_at   INTEGER NOT NULL,                     -- 30 days
  revoked_at   INTEGER,
  last_seen_at INTEGER
);
CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions (user_id);

-- A small durable counter for rate limits (per email and per IP), on top of the in-memory limit. key is a hash, never a raw email or IP.
-- A blocked key costs a read only: the counter is not written once the limit is reached.
CREATE TABLE IF NOT EXISTS auth_rate (
  key          TEXT    PRIMARY KEY,
  window_start INTEGER NOT NULL,
  count        INTEGER NOT NULL
);
