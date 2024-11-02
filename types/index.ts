export * as article from "./articles";

export type DetailPageParamTypes = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    search?: string;
  }>;
};
