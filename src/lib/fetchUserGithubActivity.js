import axios from "axios";
import parseGithubAPIResponse from "../utils/util.js";

async function fetchUserGithubActivity(username) {
  console.log(`Fetching Github Activity for: ${username}`);

  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/events`
    );
    const events = parseGithubAPIResponse(response.data);
    console.log("Recent Github Activity:");
    events.forEach((event) => {
      switch (event.eventType) {
        case "PushEvent":
          console.log(`- Pushed ${event.commits} commit(s) to ${event.repo}`);
          break;
        case "IssuesEvent":
          console.log(`- Opened a new issue in ${event.repo}`);
          break;
        case "WatchEvent":
          console.log(`- Starred ${event.repo}`);
          break;
        case "ForkEvent":
          console.log(`- Forked ${event.repo}`);
          break;
      }
    });
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error("User not found. Please check the username and try again.");
    } else {
      console.error("An error occurred while fetching Github activity.");
    }
  }
}

export default fetchUserGithubActivity;
