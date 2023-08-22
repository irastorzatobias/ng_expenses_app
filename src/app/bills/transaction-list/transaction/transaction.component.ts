import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
})
export class TransactionComponent {
  @Input() transaction!: Transaction;

  constructor() {}
}
