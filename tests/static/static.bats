function print_errors() {
  for line in "${lines[@]}"; do
    echo "$line"
  done
}

@test "jsonlint" {
  run dash ./tests/static/jsonlint.sh
  print_errors
  [ "$status" -eq 0 ]
}

@test "actionlint" {
  run dash ./tests/static/actionlint.sh
  print_errors
  [ "$status" -eq 0 ]
}

@test "cspell" {
  run dash ./tests/static/cspell.sh
  print_errors
  [ "$status" -eq 0 ]
}

@test "shellcheck" {
  run dash ./tests/static/shellcheck.sh
  print_errors
  [ "$status" -eq 0 ]
}
