export interface CollectionType {
  objectID: string;
  title: string;
  slug: string;
}
export interface AutoCompleteStateType {
  query: string;
  status: string;
  error: string;
  activeItemId?: number;
  completion: null;
  collections: any[];
  isOpen: boolean;
}
