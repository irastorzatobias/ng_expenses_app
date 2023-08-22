import { Injectable } from '@angular/core';
import { MonthlyBalance } from '../models/monthy-balance.model';

@Injectable({
  providedIn: 'root',
})
export class FinancialOverviewService {
  constructor() {}

  getMonthlyBalances(transactions: any[]): MonthlyBalance[] {
    let monthlyData: { [key: string]: MonthlyBalance } = {};

    transactions.forEach((transaction) => {
      const date = new Date(transaction.dueDate);
      const monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;

      if (!monthlyData[monthYear]) {
        monthlyData[monthYear] = {
          month: date,
          income: 0,
          expenses: 0,
          balance: 0,
        };
      }

      if (transaction.type === '1') {
        monthlyData[monthYear].income += transaction.amount;
      } else if (transaction.type === '2') {
        monthlyData[monthYear].expenses += transaction.amount;
      }

      monthlyData[monthYear].balance =
        monthlyData[monthYear].income - monthlyData[monthYear].expenses;
    });

    return Object.values(monthlyData);
  }
}
