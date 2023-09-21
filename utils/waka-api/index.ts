import type { WakaTimeData, CodingActivity } from "./types";

export async function getWakaTime(url: string) {
  const API_KEY = process.env.NEXT_PUBLIC_WAKATIME_SECRET;
  const URL = "https://wakatime.com" + url + `?api_key=${API_KEY}`;
  return await fetch(URL).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      return res.status;
    }
  });
}

export async function getGoals(): Promise<WakaTimeData<CodingActivity>> {
  const data = await getWakaTime("/api/v1/users/current/goals");
  return data;
}

export async function getCommits(): Promise<WakaTimeData<CodingActivity>> {
  const data = await getWakaTime(
    "/api/v1/users/current/projects/56cc364a-f095-4ed9-b874-6c93af962e78/commits",
  );
  return data;
}
