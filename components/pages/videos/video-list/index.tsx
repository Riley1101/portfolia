import VideoCard from "@/components/pages/videos/video-card";
import type { VideoAPIType } from "@/types/videos";

export async function VideoTimeline() {
  const data: VideoAPIType = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&part=id&channelId=UC_RfEQCC3gL2AzsFFAABikg&maxResults=20&key=AIzaSyAtWf4t83KhLS48fEgqwPKDTDWLZrTBbds`,
    {
      //@ts-ignore
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_YT_API}`,
    },
  ).then((res) => res.json());
  return (
    <div className="@container">
      <div
        className="relative grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))]
       grid-flow-dense gap-4 md:gap-6"
      >
        {data.items.map((item) => (
          <VideoCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
