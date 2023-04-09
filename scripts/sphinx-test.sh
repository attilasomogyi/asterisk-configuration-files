#!/bin/usr/env bash

set -e

function main() {
  docs_dir="docs/"
  bash scripts/md-to-rst.sh || exit 1
  make -C "$docs_dir" -j"$(nproc)" -b html || exit 1
  make -C "$docs_dir" -j"$(nproc)" -b linkcheck || exit 1
  make -C "$docs_dir" -j"$(nproc)" -b clean || exit 1
}

if [ "$(basename "$0")" != "bash" ]; then
  main
fi
