export type TransactionsCategoryType = {
  category: string;
  transactionType: string;
};

export type OptionsMaster = {
  boardTypes: string[];
  subjectTypes: string[];
  studentStatusTypes: string[];
  gradeTypes: string[];
  paymentTypes: string[];
  transactionsCategoryTypes: TransactionsCategoryType[];
  transactionTypes: string[];
};

export type OptionsMasterUpdate = {
  boardTypes?: string[];
  subjectTypes?: string[];
  studentStatusTypes?: string[];
  gradeTypes?: string[];
  paymentTypes?: string[];
  transactionsCategoryTypes?: any;
  transactionTypes?: string[];
};
