import React from "react";
import VideoCard from "@/components/pages/videos/video-card";
import type { VideoCardType } from "types/videos";
import { VideoCameraIcon } from "@heroicons/react/24/outline";
type Props = {
  videos: VideoCardType[];
};

const VideoTimeLine = (props: Props) => {
  const { videos } = props;
  return (
    <>
      <div className="flex items-center px-4 my-4 border rounded-md border-theme-accent-opaque group hover:from-theme-accent-opaque bg-gradient-to-l">
        <VideoCameraIcon className="w-6 h-6 group-focus-within:text-theme-accent group" />
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 bg-transparent rounded-md outline-none text-bg-theme-accent"
        />
      </div>

      <div className="grid gap-4 mt-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((item) => (
          <VideoCard data={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default VideoTimeLine;
