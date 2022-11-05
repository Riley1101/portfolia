import { NextApiRequest, NextApiResponse } from "next";
import { VideoAPIType } from "@/types/index";

interface RequestPrarms<HeaderType> {
  method: "GET";
  headers: HeaderType;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let {
      query: { id },
    } = req;
    let key = process.env.NEXT_PUBLIC_YOUTUBE;
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${key}`,
    };
    const requestParams: RequestPrarms<typeof headers> = {
      method: "GET",
      headers: headers,
    };
    const response: VideoAPIType = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=id&part=snippet&playlistId=${id}&key=${key}`,
      requestParams
    )
      .then((res) => res.json())
      .then((res) => res);

    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({
        message: "Error with api credentials",
      });
    }
  } catch {
    res.status(404).json({
      message: "Error with api credentials",
    });
  }
}
export const config = {
  runtime: "nodejs",
};
