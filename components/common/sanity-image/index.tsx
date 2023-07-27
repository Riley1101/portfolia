"use client";
import React from "react";
import Img from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useImage } from "./getImage";
import { rgbDataURL } from "@/utils/image-blur";

// extend native html image props
interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  image: SanityImageSource;
}

export default function SanityImage(props: Props) {
  const imageProps = useImage(props.image);
  return (
    // @ts-ignore
    <Img
      {...imageProps}
      {...props}
      style={{ width: "100%", height: "auto" }} // layout="responsive" prior to Next 13.0.0
      placeholder="blur"
      blurDataURL={rgbDataURL(29, 25, 39)}
      sizes="(max-width: 750px) 100vw, 800px"
    />
  );
}
