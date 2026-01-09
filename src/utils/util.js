let events = [];

function parseGithubAPIResponse(response) {
  try {
    response.map((event) => {
      if (event.type === "PushEvent") {
        // check if repo already exists in events
        const existingEvent = events.find((e) => e.repo === event.repo.name);
        if (existingEvent) {
          existingEvent.commits += 1;
        } else {
          events.push({
            eventType: "PushEvent",
            repo: event.repo.name,
            commits: 1,
          });
        }
      } else {
        const parsedEvent = {
          eventType: event.type,
          repo: event.repo.name,
        };
        events.push(parsedEvent);
      }
    });
    return events;
  } catch (error) {
    console.error("Error parsing GitHub API response:", error);
    return null;
  }
}

export default parseGithubAPIResponse;
