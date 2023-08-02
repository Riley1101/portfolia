import Hero from "@/components/pages/hero";
import VideoTimeLine from "@/components/pages/videos/video-list";
import type { Metadata } from "next";
import { getOpenGraph, getTwitterCard, metaData } from "@/utils/metadata";

const hero = {
  title: "Videos",
  subtitle: "Videos",
  description: "My sharing videos on Youtube",
};

export const metadata: Metadata = {
  title: "Videos",
  openGraph: getOpenGraph(
    "/images/videos.png",
    "Videos | " + metaData.title,
    metaData.description,
    new URL("/videos", metaData.url)
  ),
  twitter: getTwitterCard(
    "/images/videos.png",
    "Videos | " + metaData.title,
    metaData.description
  ),
};
function VideoPage() {
  return (
    <div className="page-container">
      <div>
        <Hero
          title={hero.title}
          description={hero.description}
          subtitle={hero.subtitle}
        />

        <VideoTimeLine />
      </div>
    </div>
  );
}
export default VideoPage;
