import VideoCard from "@/components/pages/videos/video-card";
import type { VideoAPIType } from "@/types/videos";
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
    <div className="grid gap-4 mt-4 grid-col-1">
      {data.items.map((item) => (
        <VideoCard data={item} key={item.id} />
      ))}
    </div>
  );
};

export default asyncComponent(VideoTimeLine);
