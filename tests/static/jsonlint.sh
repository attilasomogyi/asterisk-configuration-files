#!/usr/bin/env sh
set -e

which jsonlint >/dev/null || {
  yarn global add @prantlf/jsonlint || exit 1
}

jsonlint
