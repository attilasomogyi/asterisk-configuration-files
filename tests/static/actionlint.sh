#!/usr/bin/env sh
set -e

actionlint_url="https://github.com/rhysd/actionlint"

which actionlint >/dev/null || {
    echo "actionlint not found, please install: $actionlint_url"
    exit 1
}

actionlint
