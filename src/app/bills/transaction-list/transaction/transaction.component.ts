import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
import { BillsStorageService } from '../../bills-storage.service';
import { FinancialOverviewService } from '../../../overview/financial-overview.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
})
export class TransactionComponent {
  @Input() transaction!: Transaction;

  constructor(
    private billStorageService: BillsStorageService,
    private financialOverviewService: FinancialOverviewService
  ) {}

  deleteTransaction(id?: number) {
    this.billStorageService.removeBill(id);

    const transactions = this.billStorageService.getItem('transactions');

    this.financialOverviewService.updateTransactions(transactions);
  }
}
