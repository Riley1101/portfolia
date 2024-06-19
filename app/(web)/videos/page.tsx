import Hero from "@/components/pages/hero";
import { VideoTimeline } from "@/components/pages/videos/video-list";
import { getOpenGraph, getTwitterCard, metaData } from "@/utils/metadata";
import type { Metadata } from "next";

const hero = {
  title: "Videos",
  subtitle: "Videos",
  description: "My sharing videos on Youtube.",
};

export const metadata: Metadata = {
  title: "Videos | Arkar",
  openGraph: getOpenGraph(
    "/images/videos.png",
    "Videos | " + metaData.title,
    metaData.description,
    new URL("/videos", metaData.url),
  ),
  twitter: getTwitterCard(
    "/images/videos.png",
    "Videos | " + metaData.title,
    metaData.description,
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

        <VideoTimeline />
      </div>
    </div>
  );
}
export default VideoPage;
