import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BillsStorageService } from '../bills-storage.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
})
export class AddTransactionComponent {
  showModal: Boolean = false;
  transactionForm: FormGroup;

  constructor(private fb: FormBuilder, private billsStorageService: BillsStorageService) {
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
        const transactions = this.billsStorageService.getItem('transactions') || [];
        transactions.push(this.transactionForm.value);

        this.billsStorageService.setItem('transactions', transactions);
        this.transactionForm.reset();
      }
    }
}
