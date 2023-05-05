import type { PublicEventData } from "@/types/github";
const headers = {
  Accept: "application/vnd.github.v3+json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  "X-GitHub-Api-Version": "2022-11-28",
};

async function getGithubFeed(
): Promise<PublicEventData> {
  return await fetch(
    `https://api.github.com/users/Riley1101/events/public`,
    {
      headers,
    }
  ).then((response) => response.json());
}
export { getGithubFeed };
