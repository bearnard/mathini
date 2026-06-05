#!/usr/bin/env bash
# scripts/seed.sh — populate D1 + Vectorize with CAPS questions
#
# Target a grade by forwarding flags to the seed script, e.g.:
#   ./scripts/seed.sh --grade 12
# (defaults to grade 6). All seed-questions.ts flags pass through unchanged.
#
# Secrets are sourced via scripts/load-secrets.sh (GEMINI_API_KEY from .dev.vars,
# CF_ACCOUNT_ID hardcoded, CF_API_TOKEN from the wrangler OAuth token). Any can be
# overridden by exporting it before calling this script.

set -euo pipefail

source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/load-secrets.sh"

echo ""
echo "Starting question seed…"
echo ""

run_tsx scripts/seed-questions.ts "$@"
