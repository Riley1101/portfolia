"use client";

import React from "react";
import Img from "next/image";
import { useImage } from "./getImage";
import { rgbDataURL } from "@/utils/image-blur";
import type { SanityImage } from "@/types/sanity-image";

// extend native html image props
interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  image: SanityImage;
}

export default function SanityImageComponent(props: Props) {
  const { image } = props;
  const imageProps = useImage(image);
  return (
    // @ts-ignore
    <Img
      {...imageProps}
      {...props}
      style={{ width: "100%", height: "auto" }}
      placeholder="blur"
      blurDataURL={image?.metadata?.lqip || rgbDataURL(29, 25, 39)}
      sizes="(max-width: 800px) 100vw, 800px"
    />
  );
}
