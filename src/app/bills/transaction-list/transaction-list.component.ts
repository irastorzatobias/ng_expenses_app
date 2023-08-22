import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillsStorageService } from '../bills-storage.service';
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

  constructor(private billsStorageService: BillsStorageService) {}

  ngOnInit(): void {
    this.transactions = this.billsStorageService.getItem('transactions') || [];
    this.filteredTransactions = this.transactions;

    this.transactionsSub =
      this.billsStorageService.transactionsUpdated$.subscribe(() => {
        this.transactions =
          this.billsStorageService.getItem('transactions') || [];
        this.filteredTransactions = this.transactions;
      });
  }

  filterByCategory(category: string): void {
    if (Number(category)) {
      this.filteredTransactions = this.transactions.filter(
        (transaction) => transaction.category === category
      );
    } else {
      this.filteredTransactions = this.transactions;
    }
  }

  ngOnDestroy(): void {
    this.transactionsSub.unsubscribe();
  }
}
