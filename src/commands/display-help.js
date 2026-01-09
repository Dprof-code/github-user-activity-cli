function displayHelp() {
  const help = `
# Fetching and Displaying User Github Activity
github-activity <username>

# Output:
- Pushed 3 commits to username/repo
- Opened a new issue in username/repo
- Starred username/repo
- ...
    `;
  console.log(help);
}

export default displayHelp;
