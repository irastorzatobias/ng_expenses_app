import { Injectable } from '@angular/core';
import { MonthlyBalance } from '../models/monthy-balance.model';
import { Subject } from 'rxjs';
import { Transaction } from '../models/transaction.model';

enum Entry {
  Income  = '1',
  Expense = '2'
}

@Injectable({
  providedIn: 'root',
})
export class FinancialOverviewService {
  private monthlyBalancesUpdated = new Subject<MonthlyBalance[]>();
  monthlyBalancesUpdated$ = this.monthlyBalancesUpdated.asObservable();

  constructor() {}

  updateTransactions(transactions: Transaction[]): void {
    const updatedBalances = this.calculateMonthlyBalances(transactions);
    this.monthlyBalancesUpdated.next(updatedBalances);
  }

  private calculateMonthlyBalances(transactions: Transaction[]): MonthlyBalance[] {
    let monthlyData: { [key: string]: MonthlyBalance } = {};

    transactions.forEach((transaction) => {
      this.updateMonthlyData(transaction, monthlyData);
    });

    return Object.values(monthlyData);
  }

  private updateMonthlyData(transaction: Transaction, monthlyData: { [key: string]: MonthlyBalance }): void {
    const dateKey = this.getDateKey(transaction.dueDate);

    if (!monthlyData[dateKey]) {
      monthlyData[dateKey] = this.initializeMonthlyBalance(transaction.dueDate);
    }

    this.updateBalanceData(transaction, monthlyData[dateKey]);
  }

  private getDateKey(dueDate: Date): string {
    const date = new Date(dueDate);
    return `${date.getMonth() + 1}-${date.getFullYear()}`;
  }

  private initializeMonthlyBalance(dueDate: Date): MonthlyBalance {
    const date = new Date(dueDate);
    return {
      month: date,
      income: 0,
      expenses: 0,
      balance: 0
    };
  }

  private updateBalanceData(transaction: Transaction, monthlyBalance: MonthlyBalance): void {
    if (transaction.type === Entry.Income) {
      monthlyBalance.income += transaction.amount;
    } else if (transaction.type === Entry.Expense) {
      monthlyBalance.expenses += transaction.amount;
    }

    monthlyBalance.balance = monthlyBalance.income - monthlyBalance.expenses;
  }
}
