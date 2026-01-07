import axios from "axios";

async function fetchUserGithubActivity(username) {
  //https://api.github.com/users/<username>/events
  console.log(`Fetching Github Activity for: ${username}`);

  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/events`
    );
    console.log(response.data);
  } catch (error) {
    //console.error("Error fetching Github activity:", error);
    //console.log(error.message);
    if (error.response && error.response.status === 404) {
      console.error("User not found. Please check the username and try again.");
    } else {
      console.error("An error occurred while fetching Github activity.");
    }
  }
}

export default fetchUserGithubActivity;
