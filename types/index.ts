export * as article from "./articles";

export type DetailPageParamTypes = {
  params?: {
    slug?: string;
  };
  searchParams?: {
    search?: string;
  };
};
