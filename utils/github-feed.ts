import type {PublicEventData} from "@/types/github";
import { octokit } from "@/utils/octokit";

export async function getGithubFeed() : Promise<PublicEventData>{
    const data: PublicEventData = await octokit.request(
      `GET /users/Riley1101/events/public`,
      {
        username: "Riley1101",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    return data;
}
