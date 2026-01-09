#!/usr/bin/env node

import fetchUserGithubActivity from "../src/lib/fetchUserGithubActivity.js";
import displayHelp from "../src/commands/display-help.js";

console.log("Welcome to my CLI tool!");
console.log(
  "This is a simple command-line interface application that fetches user activity from GitHub and displays it on the terminal."
);

const args = process.argv.slice(2);

if (args[0] && args[0] !== "--help") {
  const username = args[0];
  fetchUserGithubActivity(username);
} else if (args[0] == "--help") {
  displayHelp();
} else {
  console.error("You must add a GitHub username as argument");
}
