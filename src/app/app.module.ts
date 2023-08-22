import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BillsComponent } from './bills/bills.component';
import { FilterComponent } from './bills/filter/filter.component';
import { AddTransactionComponent } from './bills/add-transaction/add-transaction.component';
import { TransactionListComponent } from './bills/transaction-list/transaction-list.component';
import { OverviewComponent } from './overview/overview.component';
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
    TransactionComponent,
    AddCategoryComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
