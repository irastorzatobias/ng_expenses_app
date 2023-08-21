import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BillsComponent } from './bills/bills.component';
import { FilterComponent } from './bills/filter/filter.component';
import { AddExpenseComponent } from './bills/add-expense/add-expense.component';
import { ExpenseListComponent } from './bills/expense-list/expense-list.component';
import { AddExpenseModalComponent } from './bills/add-expense-modal/add-expense-modal.component';
import { OverviewComponent } from './overview/overview.component';
import { OverviewExpensesComponent } from './overview/overview-expenses/overview-expenses.component';
import { OverviewSpendersComponent } from './overview/overview-spenders/overview-spenders.component';
import { OverviewSpenderComponent } from './overview/overview-spenders/overview-spender/overview-spender.component';
import { OverviewCategoriesComponent } from './overview/overview-categories/overview-categories.component';
import { OverviewCategoryComponent } from './overview/overview-categories/overview-category/overview-category.component';
import { ExpenseComponent } from './bills/expense-list/expense/expense.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BillsComponent,
    FilterComponent,
    AddExpenseComponent,
    ExpenseListComponent,
    AddExpenseModalComponent,
    OverviewComponent,
    OverviewExpensesComponent,
    OverviewSpendersComponent,
    OverviewSpenderComponent,
    OverviewCategoriesComponent,
    OverviewCategoryComponent,
    ExpenseComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
