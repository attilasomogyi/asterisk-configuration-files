#!/usr/bin/env bash

set -e

function main() {
  vale sync || exit 1
}

if [ "$(basename "$0")" != "bash" ]; then
  main
fi
