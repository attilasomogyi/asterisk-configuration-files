#!/usr/bin/env sh
set -e

shellcheck_url="https://github.com/koalaman/shellcheck"

which shellcheck >/dev/null || {
    echo "shellcheck not found, please install: $shellcheck_url"
    exit 1
}

scripts=$(find . -name '*.sh')
for script in $scripts; do
    shellcheck "$script"
done
