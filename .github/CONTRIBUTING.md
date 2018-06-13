# Contribution

So, you want to start contribute, Great!

1. First step is to clone the repo (`git clone https://github.com/nirgn975/Angular-Sanic-Seed-Project.git`)

2. Take yourself an issue (or talk with a team member to get one). Create a new branch (`git branch -b <issue_number>-<optional_text>`), and start working on it.

		Example of a branch name `18-fix_server_docker`.

3. After you do your first commit create a PR (Pull Request) (you can do it from github GUI, Pycharm/Webstorm under _VCS -> Git -> Create Pull Request_, atom/ vscode, or even the command line) and if you don't finish the PR yet (what I assume is true because it's only the first commit) write `WIP` (stand for "Work In Progress") in the title.

		Example: `WIP: Create Docker image..`
		Please add a link to the issue in the body of the PR (write hashtag with the issue number).
        Example: `#11`

4. Before you finish you PR (Pull Request) make sure all the tests are pass in `Travis`. If some of them are failed, fix your code or tests (depends on the issue).

5. When you finish, remove the `WIP` from the title and assign it to `@nirgn975`, and write some text like "@nirgn975 Ready for review" (when you mention him like that, GitHub will send a notification to that person).

6. Please go through [PEP 8 -- Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/) and [Angular Style Guide](https://angular.io/styleguide) before submitting a PR.

7. Wait for code review and HAVE FUN!
