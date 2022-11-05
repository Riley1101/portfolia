export interface PageQuery<QueryData> {
  loading: boolean;
  networkStatus: number;
  data: QueryData;
}
