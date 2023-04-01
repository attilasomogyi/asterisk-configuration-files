load test_helper/static.bash

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
  run shellcheck_test
  print_errors
  [ "$status" -eq 0 ]
}

@test "editorconfig-checker" {
  run editorconfig-checker
  print_errors
  [ "$status" -eq 0 ]
}

@test "markdownlint-cli" {
  run yarn markdownlint '**/*.md'
  print_errors
  [ "$status" -eq 0 ]
}

@test "rstcheck" {
  run rstcheck --recursive .
  print_errors
  [ "$status" -eq 0 ]
}

@test "yamllint" {
  run yamllint .
  print_errors
  [ "$status" -eq 0 ]
}

@test "sphinx doctest and linkcheck" {
  run sphinx_doctest_and_linkcheck
  print_errors
  [ "$status" -eq 0 ]
}

