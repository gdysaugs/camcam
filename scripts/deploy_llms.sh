#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"
# Load committed production defaults first.
if [[ -f .env.production ]]; then
set -a
# shellcheck disable=SC1091
source .env.production
set +a
fi

# Optionally load local, git-ignored production vars.
if [[ -f .env.production.local ]]; then
  set -a
  # shellcheck disable=SC1091
  source .env.production.local
  set +a
fi

: "${VITE_SUPABASE_URL:?missing VITE_SUPABASE_URL}"
: "${VITE_SUPABASE_ANON_KEY:?missing VITE_SUPABASE_ANON_KEY}"
: "${VITE_SUPABASE_REDIRECT_URL:?missing VITE_SUPABASE_REDIRECT_URL}"

npm run build

# Guard rail: fail deployment if build does not contain Supabase config.
if ! grep -R --binary-files=without-match "$VITE_SUPABASE_URL" dist/assets >/dev/null; then
  echo "Build validation failed: VITE_SUPABASE_URL is not embedded in dist/assets."
  exit 1
fi

if ! grep -R --binary-files=without-match "$VITE_SUPABASE_REDIRECT_URL" dist/assets >/dev/null; then
  echo "Build validation failed: VITE_SUPABASE_REDIRECT_URL is not embedded in dist/assets."
  exit 1
fi

npx wrangler pages deploy dist --project-name llms --branch main
