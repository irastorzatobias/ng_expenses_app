import { Component, ViewChild } from '@angular/core';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
})
export class BillsComponent {
  @ViewChild(TransactionListComponent, { static: false })
  transactionList!: TransactionListComponent;

  filterByCategory(category: string): void {
    this.transactionList.filterByCategory(category);
  }
}
