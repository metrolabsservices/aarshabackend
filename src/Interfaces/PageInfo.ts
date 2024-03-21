export type PageInfo = {
  Pagination?: any;
  Filters?: any[];
};

export type PageResponse<T> = {
  totalCount: number;
  items: T[];
};

export type Pagination = {
  curentPage: number;
  pageSize: number;
  count: number;
};

export type Pageresponse<T> = {
  totalCount: number;
  items: T[];
  pagination: Pagination;
};
