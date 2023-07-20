import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import client from "@/utils/client";
function NextImage(props: any) {
  const { value, alt } = props;
  const url = urlBuilder(client).image(value).url();
  return (
    <Image
      src={url}
      className={"mx-auto object-cover rounded-md my-8 w-full overflow-hidden "}
      width={1500}
      height={843}
      alt={alt}
    ></Image>
  );
}
export default NextImage;
