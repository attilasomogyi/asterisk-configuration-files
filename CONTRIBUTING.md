# Contributing

This Project would love for you to contribute and help
make it even better than it's today. As a contributor, here are the guidelines
Project wants you to follow:

- [Code of conduct](#code-of-conduct)
- [Question or problem](#question-or-problem)
- [Issues and bugs](#found-a-bug)
- [Feature requests](#missing-a-feature)
- [Submission guidelines](#submission-guidelines)
- [Coding rules](#coding-rules)
- [Commit message guidelines](#commit-message-format)

## Code of conduct

Help the Project keep it open and inclusive.
Please read and follow [Code of conduct][coc] of the Project.

## Question or problem

Please read the [support]

## Found a bug

If you find a bug in the source code, you can help the Project by [submitting an
issue](#submitting-an-issue) to [GitHub Repository][github] of the Project. Even better,
you can [submit a Pull Request](#submitting-a-pull-request) with a fix.

## Missing a feature

You can _request_ a new feature by [submitting an issue](#submitting-an-issue)
to GitHub Repository of the Project. If you want to _implement_ a new feature,
please consider the size of the change to decide the right steps
to proceed:

- For a **Major Feature**, first open an issue and outline your proposal so that
  the project can discuss it. This process allows the Project to better coordinate Project efforts,
  prevent duplication of work, and help you to craft the change so that it's
  successfully accepted into the project.

  **Note**: adding a new topic to the documentation, or significantly re-writing
  a topic, counts because a major feature.

- **Small Features** can craft and directly [submitted because a Pull
  Request](#submitting-a-pull-request).

## Submission guidelines

### Submitting an issue

Before you submit an issue, please search the issue tracker. An issue for your
problem might already exist and the discussion might inform you of workarounds
available.

The Project wants to fix all the issues immediately, but before fixing a bug.
Project needs to reproduce and confirm it, to reproduce bugs. Project requires that
you give a minimal reproduction. Having a minimal reproducible scenario
gives to Project a wealth of important information without going back and forth to you
with extra questions.

A minimal reproduction allows the Project to immediately confirm a bug (or point out a coding
problem) while confirm that the Project is fixing the right problem.

Project requires a minimal reproduction to save maintainers' time and be
able to fix more bugs. Often, developers find coding problems themselves while
preparing a minimal reproduction. Project understands that sometimes it might be hard
to extract essential bits of code from a larger codebase. The Project needs to
isolate the problem before Project can fix it.

Project isn't able to investigate and fix bugs without a minimal
reproduction. So if the Project doesn't hear back from you, the Project is going to close an issue
that doesn't have enough info to the Project reproduces it.

You can file new issues by selecting from [new issue
templates](https://github.com/attilasomogyi/asterisk-configuration-files/issues/new/choose) of The Project
and filling out the issue template.

### Submitting a pull request

Before you submit your Pull Request **PR** consider the following guidelines:

1. Search [GitHub](https://github.com/attilasomogyi/attilasomogyi/pulls) for
   an open or closed PR that relates to your submission. You don't want to
   duplicate existing efforts.

2. Be sure that an issue describes the problem you're fixing, or documents the
   design for the feature you'd like to add. Discussing the design upfront
   helps to ensure that the Project is ready to accept your work.

3. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)
   the attilasomogyi and repository name.

4. In your forked repository, make your changes in a new Git branch:

   ```shell
   git checkout -b my-fix-branch main
   ```

5. Create your patch, **including appropriate test cases**.

6. Follow the [Coding Rules](#coding-rules) of Project.

7. Run the full test suite, because described in the [developer
   documentation][dev-doc], and ensure that all tests pass.

8. Commit your changes by using a descriptive commit message that follows the Project
   [commit message conventions](#commit-message-format). Adherence to these
   conventions is necessary because release notes are automatically generated
   from these messages.

   ```shell
   git commit --all
   ```

   Note: the optional commit `-a` command line option is going to automatically "add"
   and "rm" edited files.

9. Push your branch to GitHub:

   ```shell
   git push origin my-fix-branch
   ```

10. In GitHub, send a pull request to `repository_name:main`.

### Reviewing a pull request

The Project team reserves the right not to accept pull
requests from community members who haven't been good citizens of the community.
Such behavior includes not following the [Project code of
conduct][coc] and applies within or outside of Project
managed channels.

#### Addressing review feedback

If the Project asks for changes on code reviews then:

1. Make the required updates to the code.

2. Re-run the test suites to ensure tests are still passing.

3. Create a fixup commit and push to your GitHub repository (this is going to update
   your Pull Request):

   ```shell
   git commit --all --fixup HEAD
   git push
   ```

That's it. Thank you for your contribution.

##### Updating the commit message

A reviewer might often suggest changes to a commit message (for example, to add
more context for a change or adhere to [commit message
guidelines](#commit-message-format) of the Project). To update the commit
message of the last commit on your branch:

1. Check out your branch:

   ```shell
   git checkout my-fix-branch
   ```

2. Change the last commit and change the commit message:

   ```shell
   git commit --amend
   ```

3. Push to your GitHub repository:

   ```shell
   git push --force-with-lease
   ```

<!-- vale RedHat.CaseSensitiveTerms = NO -->

> NOTE:
> If you need to update the commit message of an earlier commit, you can use
> `git rebase` in interactive mode.
> See the [git docs](https://git-scm.com/docs/git-rebase#_interactive_mode) for
> more details.

<!-- vale RedHat.CaseSensitiveTerms = error -->

#### After the project have merged your pull request

Vou can delete your branch and pull
the changes from the main **upstream** repository:

<!-- vale custom.terms-suggestions = NO -->

- Delete the remote branch on GitHub either through the GitHub web UI or your
  local shell as follows:

  ```shell
  git push origin --delete my-fix-branch
  ```

- Check out the main branch:

  ```shell
  git checkout main -f
  ```

- Delete the local branch:

  ```shell
  git branch -D my-fix-branch
  ```

- Update your local `main` with the latest upstream version:

  ```shell
  git pull --ff upstream main
  ```

  <!-- vale custom.term-suggestions = error -->

## Coding rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

- One or more specs _unit-tests_ **must test** all features or bug fixes.
- Documenting all public API methods **is a requirement**.

### Project follows

- [JavaScript style guide][js-style-guide]
- [Python style guide][py-style-guide]
- [Java style guide][java-style-guide]
- [Rust style guide][rust-style-guide]
- [Shell Style guide][shell-style-guide]
- [HTML and CSS style guide][html-css-style-guide]
- [SQL style guide][sql-style-guide]

## File and directory name conventions

- File name regexp select: `^[a-z0-9]+(?:-[a-z0-9]+)*\.[a-z0-9]+$`
- Directory name regexp select: `^[a-z0-9]+(?:-[a-z0-9]+)*$`
- Keep it simple
- Don’t capitalize letters
- Use hyphens for spaces
- Separate words with hyphens
- Avoid special characters

## Commit message format

_This specification draws inspiration from the [**Angular JS** commit message format][commit-message-format], and supersedes it._

The Project enforces specific rules on how to format Git commit messages.
This format leads to **easier to read commit history**.

Each commit message consists of a **header**, a **body**, and a **footer**.

```text
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory and must conform to the [Commit Message
Header](#commit-message-header) format.

The `body` is mandatory for all commits except for those of classification **docs**. When
the body is present it must be at least 20 characters long and must conform to
the [Commit message body](#commit-message-body) format.

The `footer` is optional. The [Commit message footer](#commit-message-footer) format
explains the purpose of the footer and outlines its required structure.

### Commit message header

```text
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense.
  |       |                  Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: directory name or file name without extension
  |                         (for example: changelog, code-of-conduct, readme)
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is
optional.

#### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies
  _example scopes: gulp, broccoli, npm_
- **ci**: Changes to Project CI configuration files and scripts _examples: Circle Ci,
  Sauce Labs_
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests

##### Scope

The scope should be the name of the npm package affected (like perceived by the
person reading the changelog generated from commit messages).

The following is the list of supported scopes:

<!-- vale off -->

- filename without extension _for example: changelog, code-of-conduct, readme_
- none or empty string: useful for `test` and `refactor` changes that are done
across all packages (for example: `test: add missing unit tests`) and for docs changes
that aren't related to a specific package (for example: `docs: fix typo in tutorial`).
<!-- vale on -->

##### Summary

Use the summary field to give a succinct description of the change:

- use the imperative, present tense: **change** not **changed** nor **changes**
- don't capitalize the first letter
- no dot **.** at the end

#### Commit message body

Just like in the summary, use the imperative, present tense: **fix** not **fixed** nor
**fixes**

Explain the motivation for the change in the commit message body. This commit
message should explain _why_ you are making the change. You can include a
comparison of the earlier behavior with the new behavior to illustrate
the impact of the change.

#### Commit message footer

The footer can contain information about breaking changes and deprecations. It
is also the place to reference GitHub issues, Jira tickets, and other PRs that
this commit closes or it's relate to. For example:

```text
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>
```

or

```text
DEPRECATED: <what is deprecated>
<BLANK LINE>
<deprecation description + recommended update path>
<BLANK LINE>
<BLANK LINE>
Closes #<pr number>
```

Breaking Change section should start with the phrase **BREAKING CHANGE:**.
It follow by a summary of the breaking change, a blank line, and a detailed
description of the breaking change that also includes migration instructions.

Similarly, a Deprecation section should start with **DEPRECATED:**.
It follow by a short description of what's deprecated, a blank line, and a detailed
description of the deprecation that also mentions the recommended update path.

### Revert commits

If the commit reverts a earlier commit, it should begin with `revert:`,
followed by the header of the reverted commit.

The content of the commit message body should contain:

- information about the Secure Hash Algorithm of the commit reverts in the following
  format: `This reverts commit <Secure Hash Algorithm>`,
- a clear description of the reason for reverting the commit message.

[coc]: https://github.com/attilasomogyi/asterisk-configuration-files/blob/main/CODE_OF_CONDUCT.md
[commit-message-format]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#
[github]: https://github.com/attilasomogyi/asterisk-configuration-files
[js-style-guide]: https://google.github.io/styleguide/jsguide.html
[java-style-guide]: https://github.com/twitter-archive/commons/blob/master/src/java/com/twitter/common/styleguide.md
[rust-style-guide]: https://rustc-dev-guide.rust-lang.org/conventions.html
[shell-style-guide]: https://google.github.io/styleguide/shellguide.html
[html-css-style-guide]: https://google.github.io/styleguide/htmlcssguide.html
[py-style-guide]: https://peps.python.org/pep-0008/
[sql-style-guide]: https://github.com/treffynnon/sqlstyle.guide/blob/gh-pages/_includes/sqlstyle.guide.md
[dev-doc]: https://github.com/attilasomogyi/asterisk-configuration-files/blob/main/CONTRIBUTING.md
[support]: https://github.com/attilasomogyi/asterisk-configuration-files/blob/main/SUPPORT.md
