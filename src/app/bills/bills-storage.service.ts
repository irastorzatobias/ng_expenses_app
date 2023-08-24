import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class BillsStorageService {
  private transactionsUpdated = new Subject<void>();

  get transactionsUpdated$() {
    return this.transactionsUpdated.asObservable();
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));

    if (key === 'transactions') {
      this.transactionsUpdated.next();
    }
  }

  getItem(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key) || 'null');
    } catch {
      console.error(`Error parsing JSON for ${key}`);
      return null;
    }
  }

  removeBill(id?: number): void {
    let transactions = this.getItem('transactions') || [];

    const updatedTransactions = transactions.filter(
      (t: Transaction) => t.id !== id
    );

    this.setItem('transactions', updatedTransactions);
  }

  clear(): void {
    localStorage.clear();
  }
}
