// model TransactionsList {
//   id          Int       @id @default(autoincrement())
//   itemName String
//   description String
//   category String
//   dateOfPayment DateTime
//   amount Int
//   modeOfPayment String
//   transactionMode String
// }

export type transactionlistInterface = {
  itemName: string;
  description: string;
  category: string;
  dateOfPayment: Date;
  amount: number;
  modeOfPayment: string;
  transactionMode: string;
};

export type transactionlistUpdateInterface = {
  itemName?: string;
  description?: string;
  category?: string;
  dateOfPayment?: Date;
  amount?: number;
  modeOfPayment?: string;
  transactionMode?: string;
};

export type TransactionChartFilter = {
  type: string;
  key: string;
  value: string | string[] | Date[];
};

export type TransactionChartFilters = {
  [index: number]: TransactionChartFilter;
};
