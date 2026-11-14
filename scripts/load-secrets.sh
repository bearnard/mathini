#!/usr/bin/env bash
# scripts/load-secrets.sh — sourceable secret loader shared by the seed/import
# wrappers. Sets GEMINI_API_KEY, CF_ACCOUNT_ID and CF_API_TOKEN (each overridable
# by exporting it beforehand) and defines run_tsx() to run a project tsx script
# with the correct node.
#
# Secrets are sourced from:
#   GEMINI_API_KEY   ← mathini/.dev.vars
#   CF_ACCOUNT_ID    ← hardcoded (Bearnard@gmail.com's Account)
#   CF_API_TOKEN     ← wrangler OAuth token (~/.config/.wrangler/config/default.toml)
#
# Usage from another script:
#   source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/load-secrets.sh"
#   run_tsx scripts/<name>.ts "$@"

_SECRETS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$_SECRETS_DIR")"

# Fail in a way that works whether this file is sourced or executed.
_fail() { echo "$1" >&2; return 1 2>/dev/null || exit 1; }

# ── GEMINI_API_KEY from .dev.vars ─────────────────────────────────────────────
if [[ -z "${GEMINI_API_KEY:-}" ]]; then
  DEV_VARS="$PROJECT_DIR/.dev.vars"
  if [[ -f "$DEV_VARS" ]]; then
    GEMINI_API_KEY=$(grep -E '^GEMINI_API_KEY=' "$DEV_VARS" | cut -d= -f2- | tr -d '"' | tr -d "'")
    export GEMINI_API_KEY
    echo "✓ GEMINI_API_KEY loaded from .dev.vars"
  else
    _fail "✗ GEMINI_API_KEY not set and .dev.vars not found"
  fi
else
  echo "✓ GEMINI_API_KEY from environment"
fi

# ── CF_ACCOUNT_ID ─────────────────────────────────────────────────────────────
if [[ -z "${CF_ACCOUNT_ID:-}" ]]; then
  export CF_ACCOUNT_ID="11254be5e09325decc39bdfede8c9da5"
  echo "✓ CF_ACCOUNT_ID set (Bearnard@gmail.com's Account)"
else
  echo "✓ CF_ACCOUNT_ID from environment"
fi

# ── CF_API_TOKEN from wrangler OAuth token ────────────────────────────────────
# The OAuth token EXPIRES (about an hour). So (1) it is REFRESHED before it is read (`wrangler whoami` makes an authenticated call, which
# refreshes an expired token and rewrites the config), and (2) CF_TOKEN_SOURCE=wrangler-oauth tells scripts/seed-questions.ts that the token
# is refreshable: it re-reads the config and runs the refresh again every 30 minutes and on the first 401/403 (src/lib/server/seedRuntime.ts).
# A CF_API_TOKEN you export yourself is used as is (CF_TOKEN_SOURCE=env): it cannot be refreshed, so a 401/403 aborts the run.
# WRANGLER_REFRESH_CMD overrides the refresh command (tests).
if [[ -z "${CF_API_TOKEN:-}" ]]; then
  WRANGLER_CONFIG="${WRANGLER_HOME:-$HOME/.config/.wrangler}/config/default.toml"
  echo "  refreshing the wrangler OAuth token..."
  if ! (cd "$PROJECT_DIR" && bash -c "${WRANGLER_REFRESH_CMD:-npx wrangler whoami}" >/dev/null 2>&1); then
    echo "  ! could not refresh the wrangler token (run: npx wrangler login). Continuing with whatever is in the config." >&2
  fi
  if [[ -f "$WRANGLER_CONFIG" ]]; then
    CF_API_TOKEN=$(grep -E '^oauth_token' "$WRANGLER_CONFIG" | sed 's/oauth_token = "\(.*\)"/\1/')
    export CF_API_TOKEN
    export CF_TOKEN_SOURCE=wrangler-oauth
    echo "✓ CF_API_TOKEN loaded from the (refreshed) wrangler OAuth token (~/.config/.wrangler/config/default.toml)"
  else
    echo "  Run: npx wrangler login" >&2
    _fail "✗ CF_API_TOKEN not set and wrangler config not found at $WRANGLER_CONFIG"
  fi
else
  export CF_TOKEN_SOURCE="${CF_TOKEN_SOURCE:-env}"
  echo "✓ CF_API_TOKEN from environment (not refreshable: a 401/403 aborts the run)"
fi

# ── run_tsx <script.ts> [args…] — run with nvm node (linuxbrew node lacks libllhttp)
run_tsx() {
  cd "$PROJECT_DIR"
  local NODE_BIN="${NVM_BIN:-$(dirname "$(command -v node)")}/node"
  [[ -x "$NODE_BIN" ]] || NODE_BIN="$(command -v node)"
  PATH="$(dirname "$NODE_BIN"):$PATH" "$NODE_BIN" ./node_modules/.bin/tsx "$@"
}
