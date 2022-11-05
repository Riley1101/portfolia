export interface VideoSnippet {
  channelId: string;
  channelTitle: string;
  description: string;
  playlistId: string;
  position: number;
  videoOwnerChannelId: string;
  videoOwnerChannelTitle: string;
  publishedAt: string;
}

export interface VideoAPIType {
  etag: string;
  items: VideoSnippet[];
  kind: string;
}

export interface PaginationType {
  totalResults: number;
  resultsPerPage: number;
}
