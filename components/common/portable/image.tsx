import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import client from "@/utils/client";
// TODO check type
function NextImage(props: any) {
  const { value, alt } = props;
  const url = urlBuilder(client).image(value).url();
  return (
    <Image
      src={url}
      className={"mx-auto rounded-md my-8"}
      width={600}
      height={250}
      //   placeholder="blur"
      alt={alt}
    ></Image>
  );
}
export default NextImage;
