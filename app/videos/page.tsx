import React from "react";
import Hero from "@/components/pages/hero";
import VideoTimeLine from "@/components/pages/videos/video-list";

const hero = {
  title: "Videos",
  subtitle: "Videos",
  description: "My latest videos",
};

const tmp = [
  {
    id: "lorem",
    title: "Next.js in 2022",
    description: "A deep dive to next.js in 2023",
    preview: "/dummy/video.png",
    href: "https://youtube.com",
  },
  {
    id: "qwaewoef",
    title: "Routing in Next.js",
    description: "Explore new app api in nextjs 13",
    preview: "/dummy/video.png",
    href: "https://youtube.com",
  },
  {
    id: "qwaefiwoef",
    title: "Deploying Next.js application in 2023",
    description: "Deployment options for nextjs 13 with server components",
    preview: "/dummy/video.png",
    href: "https://youtube.com",
  },
];
function VideoPage() {
  return (
    <div>
      <Hero
        title={hero.title}
        description={hero.description}
        subtitle={hero.subtitle}
      />

      <VideoTimeLine videos={tmp} />
    </div>
  );
}
export default VideoPage;
