#!/usr/bin/env sh
set -e

dev_null=/dev/null

which node >$dev_null || {
    echo "node not found"
    exit 1
}

which npm >$dev_null || {
    echo "npm not found"
    exit 1
}

which yarn >$dev_null || npm install --global yarn
which cspell >$dev_null || yarn global add cspell

cspell lint --fail-fast .
