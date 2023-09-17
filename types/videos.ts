export interface VideoCardType {
  id: string;
  kind: string;
  etag: string;
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    preview: string;
    href: string;
    thumbnails: Thumbnail;
  };
}

type Thumbnail = {
  standard: {
    url: string;
  };
  medium: {
    url: string;
  };
  high: {
    url: string;
  };
};

export interface VideoAPIType {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: any[];
}
