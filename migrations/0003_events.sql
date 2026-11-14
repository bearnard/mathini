-- PrepPals D1 migration: usage events for the admin console (ADR 0002, P1).
--
-- One row per tracked moment (page view, topic open, practice start/finish, ...).
-- Answered questions stay in `attempts`; they are not duplicated here.
-- Privacy: no IP address, no full user-agent string. Location is Cloudflare's
-- city-level estimate (lat/lon rounded to 1 decimal place, about 10 km).
-- student_id is set on the server from the session cookie, never by the client.
-- Raw events are kept 400 days (purged opportunistically by /api/events).

CREATE TABLE IF NOT EXISTS events (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  ts          INTEGER NOT NULL,              -- ms epoch, set by the server
  type        TEXT NOT NULL,                 -- allowlisted event type
  device_id   TEXT NOT NULL,                 -- random id from localStorage; 'dnt' when Do Not Track is on
  session_id  TEXT NOT NULL,                 -- random id per visit; new after 30 min idle
  student_id  TEXT,                          -- NULL when anonymous (or Do Not Track)
  grade       INTEGER,
  subject     TEXT,
  topic       TEXT,
  path        TEXT,
  country     TEXT,
  region      TEXT,
  region_code TEXT,
  city        TEXT,
  timezone    TEXT,
  lat         REAL,                          -- rounded to 1 dp
  lon         REAL,                          -- rounded to 1 dp
  device      TEXT,                          -- mobile | tablet | desktop
  browser     TEXT,                          -- family only
  os          TEXT,                          -- family only
  referrer    TEXT,                          -- host only
  meta        TEXT                           -- small JSON, <= 1 KB
);

CREATE INDEX IF NOT EXISTS idx_events_ts        ON events (ts);
CREATE INDEX IF NOT EXISTS idx_events_student   ON events (student_id, ts);
CREATE INDEX IF NOT EXISTS idx_events_device    ON events (device_id, ts);
CREATE INDEX IF NOT EXISTS idx_events_type      ON events (type, ts);
CREATE INDEX IF NOT EXISTS idx_events_geo       ON events (country, region, city);
