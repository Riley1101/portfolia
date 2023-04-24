import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import client from "@/utils/client";
// TODO check type
function NextImage(props: any) {
  const { value, alt } = props;
  const url = urlBuilder(client).image(value).url();
  return (
    <Image
      src={url}
      className={"mx-auto rounded-md my-8 w-full lg:max-h-[300px]"}
      width={500}
      height={350}
      alt={alt}
    ></Image>
  );
}
export default NextImage;
