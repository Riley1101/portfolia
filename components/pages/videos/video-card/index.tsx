import React from "react";
import Link from "next/link";
import type { VideoCardType } from "types/videos";
import Image from "next/image";
const VideoCard = ({ data }: { data: VideoCardType }) => {
  return (
    <Link
      href={data.href}
      target="_blank"
      className="flex flex-col gap-4 p-4 transition-all duration-500 border rounded-md cursor-pointer hover:from-theme-accent-opaque hover:bg-gradient-to-t border-theme-accent-opaque"
    >
      <Image
        alt="alt"
        width={340}
        className="w-full rounded-md aspect-video"
        height={230}
        src={data.preview}
      />
      <div>
        <h2 className="text-lg font-bold text-white">{data.title}</h2>

        <p className="my-2 text-sm">{data.description.slice(0, 200)}</p>
      </div>
    </Link>
  );
};

export default VideoCard;
