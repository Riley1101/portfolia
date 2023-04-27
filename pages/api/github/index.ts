import type { NextApiRequest, NextApiResponse } from "next";
import { octokit } from "@/utils/octokit";
import { PublicEventData } from "@/types/github";
interface NotFound {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PublicEventData | NotFound>
) {
  const name = req.query.username as string;

  try {
    const data: PublicEventData = await octokit.request(
      `GET /users/${name}/events/public`,
      {
        username: "Riley1101",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    if (data.status === 200) {
      res.status(data.status).json({ ...data });
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch {
    res.status(404).json({ message: "Not found" });
  }
}
