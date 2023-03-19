@test "actionlint" {
  run dash ./tests/static/actionlint.sh
  echo "${lines[@]}"
  [ "$status" -eq 0 ]
}

@test "cspell" {
  run dash ./tests/static/cspell.sh
  echo "${lines[@]}"
  [ "$status" -eq 0 ]
}

@test "shellcheck" {
  run dash ./tests/static/shellcheck.sh
  echo "${lines[@]}"
  [ "$status" -eq 0 ]
}
