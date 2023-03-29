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

  which shellcheck > /dev/null || {
    echo "shellcheck not found, please install: $shellcheck_url"
    exit 1
  }

  scripts=$(git ls-files --cached --modified --other --exclude-standard --deduplicate | grep --extended-regexp '\.sh$|\.bash$')
  for script in $scripts; do
    shellcheck "$script"
  done
}
