enum TransactionType {
  'INCOME',
  'EXPENSE',
}

export interface Transaction {
  id?: number;
  amount: number;
  description: string;
  dueDate: Date;
  category: string;
  type: TransactionType;
}
