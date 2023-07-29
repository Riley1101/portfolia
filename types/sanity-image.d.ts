import type { SanityImageObject } from "@sanity/image-url/lib/types/types";

export interface SanityImage extends SanityImageObject {
  metadata: {
    blurHash: string;
    lqip: string;
  };
}
