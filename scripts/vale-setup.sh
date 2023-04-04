#!/usr/bin/env bash

set -e

function edit_yaml() {
  yaml_file="$1"
  yq -i '.level = "error"' "$yaml_file"
}

function main() {
  vale sync || exit 1
  styles=$(git ls-files --ignored --exclude /styles/ --other -- "*.yml")

  export -f edit_yaml
  if [ -n "$styles" ]; then
    printf '%s\n' "$styles" | xargs -n1 -P "$(nproc)" bash -c 'edit_yaml "$@"' _
  fi
}

if [ "$(basename "$0")" != "bash" ]; then
  main
fi
