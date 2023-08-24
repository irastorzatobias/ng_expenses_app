import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../storage.service';
import { FinancialOverviewService } from 'src/app/overview/financial-overview.service';
import { Transaction } from 'src/app/models/transaction.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
})
export class AddTransactionComponent implements OnInit, OnDestroy {
  showModal: Boolean = false;
  transactionForm: FormGroup;
  categories: Array<{ name: string }> = [];

  private categorySubscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService,
    private financialOverviewService: FinancialOverviewService
  ) {
    this.transactionForm = this.fb.group({
      amount: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required],
      category: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.categorySubscription = this.storageService.categories$.subscribe(
      (categories) => {
        this.categories = categories;
      }
    );
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
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
    this.storageService.setItem('transactions', transactions);
    this.financialOverviewService.updateTransactions(transactions);
  }

  getTransactions(): Transaction[] {
    return this.storageService.getItem('transactions') || [];
  }

  generateUniqueId(transactions: Transaction[]): number {
    return transactions.length > 0
      ? Math.max(...transactions.map((t) => t.id)) + 1
      : 1;
  }
}
