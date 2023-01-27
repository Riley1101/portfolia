import Hero from "@/components/pages/hero";
import VideoTimeLine from "@/components/pages/videos/video-list";

const hero = {
  title: "Videos",
  subtitle: "Videos",
  description: "My playlists on Youtube",
};

function VideoPage() {
  return (
    <div>
      <Hero
        title={hero.title}
        description={hero.description}
        subtitle={hero.subtitle}
      />

      <VideoTimeLine />
    </div>
  );
}
export default VideoPage;
