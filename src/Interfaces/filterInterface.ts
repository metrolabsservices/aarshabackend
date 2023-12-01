export type filterInterface = {
  type: string;
  key: string;
  value: string;
};

export type pageInfoInterface = {
  Filters: { status: boolean; data?: filterInterface[] };
  Paginaton: { status: boolean; data?: string };
};

export type filterReturnType = {
  status: boolean;
  params: any;
};
