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

  deleteTransaction(id?: number) {
    this.storageService.removeBill(id);

    const transactions = this.storageService.getItem('transactions');

    this.financialOverviewService.updateTransactions(transactions);
  }
}
