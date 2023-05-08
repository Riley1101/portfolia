import Link from "next/link";
import type { VideoCardType } from "@/types/videos";
import dateformat from "dateformat";
const VideoCard = ({ data }: { data: VideoCardType }) => {
  return (
    <Link
      href={`https://www.youtube.com/playlist?list=${data.id}`}
      target="_blank"
      className="flex flex-col gap-4 p-4 cursor-pointer transition-all duration-500 border rounded-md cursor-pointer hover:from-theme-primary-opaque hover:bg-gradient-to-r border-theme-accent-opaque"
    >
      <div>
        <h2 className="text-lg font-bold text-white">{data.snippet.title}</h2>
        <span className="block my-1 text-sm  text-theme-primary">
          {dateformat(data.snippet.publishedAt, "mediumDate")}
        </span>
        <p className="my-2 text-sm text-gray-400">{data.snippet.description}</p>
      </div>
    </Link>
  );
};

export default VideoCard;
