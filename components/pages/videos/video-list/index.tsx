import React from "react";
import VideoCard from "@/components/pages/videos/video-card";
import type { VideoCardType, VideoAPIType } from "types/videos";
import { VideoCameraIcon } from "@heroicons/react/24/outline";
import asyncComponent from "@/utils/async-component";

const VideoTimeLine = async () => {
  const data: VideoAPIType = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&part=id&channelId=UC_RfEQCC3gL2AzsFFAABikg&maxResults=20&key=AIzaSyAtWf4t83KhLS48fEgqwPKDTDWLZrTBbds`,
    {
      //@ts-ignore
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_YT_API}`,
    }
  ).then((res) => res.json());
  return (
    <>
      {/* <div className="flex items-center px-4 my-4 border rounded-md border-theme-accent-opaque group hover:from-theme-accent-opaque bg-gradient-to-l">
        <VideoCameraIcon className="w-6 h-6 group-focus-within:text-theme-accent group" />
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 bg-transparent rounded-md outline-none text-bg-theme-accent"
        />
      </div> */}

      <div className="grid gap-4 mt-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((item) => (
          <VideoCard data={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default asyncComponent(VideoTimeLine);
