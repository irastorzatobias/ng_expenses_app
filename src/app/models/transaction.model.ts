export interface Transaction {
  id?: number;
  amount: number;
  description: string;
  dueDate: Date;
  category: string;
  type: string;
}
