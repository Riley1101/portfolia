import Link from "next/link";
import Image from "next/image";
const VideoCard = ({ data }: any) => {
  return (
    <Link
      href={`https://www.youtube.com/playlist?list=${data.id}`}
      target="_blank"
      className="flex flex-col gap-4 p-4 transition-all duration-500 border rounded-md cursor-pointer hover:from-theme-accent-opaque hover:bg-gradient-to-t border-theme-accent-opaque"
    >
      <Image
        alt="alt"
        width={340}
        className="w-full rounded-md aspect-video"
        height={230}
        src={data.snippet.thumbnails.medium.url}
      />
      <div>
        <h2 className="text-lg font-bold text-white">{data.snippet.title}</h2>

        <p className="my-2 text-sm text-gray-400">{data.snippet.description}</p>
      </div>
    </Link>
  );
};

export default VideoCard;
