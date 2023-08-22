import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BillsComponent } from './bills/bills.component';
import { FilterComponent } from './bills/filter/filter.component';
import { AddTransactionComponent } from './bills/add-transaction/add-transaction.component';
import { TransactionListComponent } from './bills/transaction-list/transaction-list.component';
import { OverviewComponent } from './overview/overview.component';
import { OverviewExpensesComponent } from './overview/overview-expenses/overview-expenses.component';
import { OverviewSpendersComponent } from './overview/overview-spenders/overview-spenders.component';
import { OverviewSpenderComponent } from './overview/overview-spenders/overview-spender/overview-spender.component';
import { OverviewCategoriesComponent } from './overview/overview-categories/overview-categories.component';
import { OverviewCategoryComponent } from './overview/overview-categories/overview-category/overview-category.component';
import { TransactionComponent } from './bills/transaction-list/transaction/transaction.component';
import { AddCategoryComponent } from './bills/add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BillsComponent,
    FilterComponent,
    AddTransactionComponent,
    TransactionListComponent,
    OverviewComponent,
    OverviewExpensesComponent,
    OverviewSpendersComponent,
    OverviewSpenderComponent,
    OverviewCategoriesComponent,
    OverviewCategoryComponent,
    TransactionComponent,
    AddCategoryComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
