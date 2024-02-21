import Link from "next/link";
import type { VideoCardType } from "@/types/videos";
import dateformat from "dateformat";
import Image from "next/image";
const VideoCard = ({ data }: { data: VideoCardType }) => {
  return (
    <Link
      href={`https://www.youtube.com/playlist?list=${data.id}`}
      target="_blank"
      className="group flex flex-col gap-4  transition-all duration-500 rounded-md cursor-pointer "
    >
      <Image
        className="w-full object-cover rounded-sm brightness-75 blur-[3px] group-hover:blur-0 group-hover:brightness-100 transition-all duration-500"
        src={data.snippet.thumbnails.standard.url}
        alt={data.snippet.title}
        width={200}
        height={200}
      ></Image>
      <div>
        <h2 className="text-lg font-bold text-white">{data.snippet.title}</h2>
        <span className="block my-1 text-sm  text-theme-primary">
          {dateformat(data.snippet.publishedAt, "mediumDate")}
        </span>
        <p className="my-2 text-sm text-gray-400 line-clamp-3">{data.snippet.description}</p>
      </div>
    </Link>
  );
};

export default VideoCard;
