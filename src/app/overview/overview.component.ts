import { Component, OnInit, OnDestroy } from '@angular/core';
import { FinancialOverviewService } from './financial-overview.service';
import { MonthlyBalance } from '../models/monthy-balance.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit, OnDestroy {
  monthlyBalances: MonthlyBalance[] = [];
  private monthlyBalancesSub!: Subscription;

  constructor(private financialOverviewService: FinancialOverviewService) {}

  ngOnInit(): void {
    this.monthlyBalancesSub =
      this.financialOverviewService.monthlyBalancesUpdated$.subscribe(
        (updatedBalances) => {
          this.monthlyBalances = updatedBalances;
        }
      );

    const transactions = this.getTransactionsFromLocalStorage();
    this.financialOverviewService.updateTransactions(transactions);
  }

  getTransactionsFromLocalStorage(): any[] {
    return JSON.parse(localStorage.getItem('transactions') || '[]');
  }

  ngOnDestroy(): void {
    this.monthlyBalancesSub.unsubscribe();
  }
}
