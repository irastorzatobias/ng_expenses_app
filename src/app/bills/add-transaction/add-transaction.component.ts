import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BillsStorageService } from '../bills-storage.service';
import { FinancialOverviewService } from 'src/app/overview/financial-overview.service';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
})
export class AddTransactionComponent {
  showModal: Boolean = false;
  transactionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private billsStorageService: BillsStorageService,
    private financialOverviewService: FinancialOverviewService
  ) {
    this.transactionForm = this.fb.group({
      amount: [''],
      description: [''],
      dueDate: [''],
      category: [''],
      type: [''],
    });
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      const newTransaction: Transaction = this.transactionForm.value;

      this.addTransaction(newTransaction);

      this.showModal = false;
      this.transactionForm.reset();
    }
  }

  addTransaction(newTransaction: Transaction) {
    const transactions = this.getTransactions();

    const transactionWithId: Transaction = {
      ...newTransaction,
      id: this.generateUniqueId(transactions),
    };

    transactions.push(transactionWithId);
    this.billsStorageService.setItem('transactions', transactions);
    this.financialOverviewService.updateTransactions(transactions);
  }

  getTransactions(): Transaction[] {
    return this.billsStorageService.getItem('transactions') || [];
  }

  generateUniqueId(transactions: Transaction[]): number {
    return transactions.length > 0 ? Math.max(...transactions.map((t) => t.id)) + 1 : 1;
  }
}
