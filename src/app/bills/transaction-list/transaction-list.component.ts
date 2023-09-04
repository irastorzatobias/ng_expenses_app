import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService } from '../storage.service';
import { Subscription } from 'rxjs';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
})
export class TransactionListComponent implements OnInit, OnDestroy {
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];

  private transactionsSub!: Subscription;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.fetchTransactions();

    this.transactionsSub = this.storageService.transactionsUpdated$.subscribe(
      () => this.fetchTransactions()
    );
  }

  private fetchTransactions(): void {
    this.transactions = this.storageService.getItem('transactions') || [];
    this.filteredTransactions = [...this.transactions];
  }

  filterByCategory(category: string): void {
    this.filteredTransactions = category === 'all'
      ? [...this.transactions]
      : this.transactions.filter(transaction => transaction.category === category);
  }

  ngOnDestroy(): void {
    this.transactionsSub.unsubscribe();
  }
}
