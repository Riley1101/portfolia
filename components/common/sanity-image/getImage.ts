import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import client from "../../..//utils/client";
import { useNextSanityImage } from "next-sanity-image";
export function useImage(image: SanityImageSource) {
  const imageProps = useNextSanityImage(client, image);
  return imageProps;
}
