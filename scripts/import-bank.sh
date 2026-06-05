#!/usr/bin/env bash
# scripts/import-bank.sh — import each topic's curated static bank into
# D1 + Vectorize (dedup-aware), so a topic is never empty before AI seeding.
#
# Forwards flags to import-bank.ts, e.g.:
#   ./scripts/import-bank.sh --grade 12          # one grade
#   ./scripts/import-bank.sh --local             # all grades, Ollama embeddings
#   ./scripts/import-bank.sh --grade 12 --dry    # preview, no writes
#
# Secrets are sourced the same way as the seeder (scripts/load-secrets.sh).

set -euo pipefail

source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/load-secrets.sh"

echo ""
echo "Starting static-bank import…"
echo ""

run_tsx scripts/import-bank.ts "$@"
