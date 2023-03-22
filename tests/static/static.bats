function print_errors() {
  for line in "${lines[@]}"; do
    echo "$line"
  done
}

function shellcheck-test() {
  shellcheck_url="https://github.com/koalaman/shellcheck"

  which shellcheck >/dev/null || {
    echo "shellcheck not found, please install: $shellcheck_url"
    exit 1
  }

  scripts=$(find . -name '*.sh')
  for script in $scripts; do
    shellcheck "$script"
  done
}

@test "jsonlint" {
  run yarn jsonlint
  print_errors
  [ "$status" -eq 0 ]
}

@test "actionlint" {
  run actionlint
  print_errors
  [ "$status" -eq 0 ]
}

@test "cspell" {
  run yarn cspell lint --fail-fast .
  print_errors
  [ "$status" -eq 0 ]
}

@test "shellcheck" {
  run shellcheck-test
  print_errors
  [ "$status" -eq 0 ]
}
