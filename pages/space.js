import SpaceGrid from "@/components/space/grid";
import MainContainer from "@/layouts/container";
import Meta from "@/components/common/meta";

let defaultMeta = {
  title: "Space — An Inspiring Developer, travelling in CS",
  description: "Explore - General space in my blog.",
  url: "https://arkardev.space/space",
  image: "/static/general/meta.png",
  tags: ["Explore", "Space"],
};
const Space = () => {
  return (
    <MainContainer>
      <Meta meta={defaultMeta} />
      <SpaceGrid />
    </MainContainer>
  );
};
export default Space;
