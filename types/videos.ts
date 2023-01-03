export interface VideoCardType {
  id: string;
  title: string;
  description: string;
  preview: string;
  href: string;
}

export interface VideoAPIType {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: any[];
}
