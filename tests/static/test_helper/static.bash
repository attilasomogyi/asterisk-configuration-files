#!/usr/bin/env bash

function print_errors() {
  for line in "${lines[@]}"; do
    echo "$line"
  done
}

function shellcheck_test() {
  shellcheck_url="https://github.com/koalaman/shellcheck"

  which shellcheck > /dev/null || {
    echo "shellcheck not found, please install: $shellcheck_url"
    exit 1
  }

  scripts=$(find . -name '*.sh' -name '*.bash')
  for script in $scripts; do
    shellcheck "$script"
  done
}
