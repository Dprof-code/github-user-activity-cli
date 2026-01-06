#!/usr/bin/env node

console.log("Welcome to my CLI tool!");
console.log(
  "This is a simple command-line interface application that fetches user activity from GitHub and displays it in the terminal."
);

const args = process.argv.slice(2);

const command = args[0];
