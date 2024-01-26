export type PageInfo = {
  Pagination?: any;
  Filters?: any[];
};

export type PageResponse<T> = {
  totalCount: number;
  items: T[];
};
