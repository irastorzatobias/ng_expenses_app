import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
import { StorageService } from '../../storage.service';
import { FinancialOverviewService } from '../../../overview/financial-overview.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
})
export class TransactionComponent {
  @Input() transaction!: Transaction;

  constructor(
    private storageService: StorageService,
    private financialOverviewService: FinancialOverviewService
  ) {}

  deleteTransaction(id: number) {
    let transactions = this.storageService.getItem('transactions') || [];

    const updatedTransactions = transactions.filter(
      (t: Transaction) => t.id !== id
    );

    this.storageService.setItem('transactions', updatedTransactions);

    this.financialOverviewService.updateTransactions(updatedTransactions);
  }
}
