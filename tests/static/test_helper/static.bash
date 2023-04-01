#!/usr/bin/env bash

# shellcheck disable=SC2154
function print_errors() {
  for line in "${lines[@]}"; do
    echo "$line"
  done
}
# shellcheck enable=all

function shellcheck_test() {
  shellcheck_url="https://github.com/koalaman/shellcheck"

  set -e

  if ! command -v shellcheck > /dev/null; then
    echo "shellcheck not found, please install: $shellcheck_url" >&2
    exit 1
  fi

  readarray -d '' scripts < <(git ls-files --cached --modified --other --exclude-standard --deduplicate -z '*.sh' '*.bash')

  if ((${#scripts[@]})); then
    printf '%s\0' "${scripts[@]}" | xargs -0 -P "$(nproc)" shellcheck
  fi
}

function sphinx_doctest_and_linkcheck() {
  bash scripts/md-to-rst.sh || exit 1
  (cd docs && make -b html) || exit 1
  (cd docs && make -b linkcheck) || exit 1
  (cd docs && make -b clean) || exit 1
}
