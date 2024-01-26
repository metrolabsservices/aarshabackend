export type filterInterface = {
  operation: string;
  key: string;
  value: string | string[];
};

export type pageInfoInterface = {
  Filters: { status: boolean; data?: filterInterface[] };
  Paginaton: { status: boolean; data?: string };
};

export type filterReturnType = {
  status: boolean;
  params: any;
};
