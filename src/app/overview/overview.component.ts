import { Component, OnInit } from '@angular/core';
import { FinancialOverviewService } from './financial-overview.service';
import { MonthlyBalance } from '../models/monthy-balance.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  monthlyBalances: MonthlyBalance[] = [];

  constructor(private financialOverviewService: FinancialOverviewService) {}

  ngOnInit(): void {
    const transactions = this.getTransactionsFromLocalStorage();

    this.monthlyBalances =
      this.financialOverviewService.getMonthlyBalances(transactions);
  }

  getTransactionsFromLocalStorage(): any[] {
    return JSON.parse(localStorage.getItem('transactions') || '[]');
  }
}
