import { Component, OnInit } from '@angular/core';
import { BillsStorageService } from '../bills-storage.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
})
export class TransactionListComponent implements OnInit {
  transactions: any[] = [];

  constructor(private billsStorageService: BillsStorageService) { }

  ngOnInit(): void {
    this.transactions = this.billsStorageService.getItem('transactions') || [];
  }
}
