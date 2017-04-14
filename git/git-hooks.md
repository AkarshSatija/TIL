# Git hooks

Git hooks are the hooks work with various prelisted triggers supported by git. These are the scripts that Git executes before or after events such as: commit, push, and receive. Git hooks are a built-in feature - no need to download anything. Git hooks are run locally.

Every Git repository has a `.git/hooks` folder with a script for each hook you can bind to. You're free to change or update these scripts as necessary, and Git will execute them when those events occur.

Here's a full list of hooks you can attach scripts to:

- applypatch-msg
- pre-applypatch
- post-applypatch
- pre-commit
- prepare-commit-msg
- commit-msg
- post-commit
- pre-rebase
- post-checkout
- post-merge
- pre-receive
- update
- post-receive
- post-update
- pre-auto-gc
- post-rewrite
- pre-push

### Ref: http://githooks.com/
### Tool to automate git hooks
https://github.com/brigade/overcommit
Use git-hooks with gulp: https://github.com/therealklanni/git-guppy
