import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { StorageService } from '../storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit, OnDestroy {
  @Output() categorySelected = new EventEmitter<string>();
  selectedCategory: string = 'all';
  categories: Array<{ name: string }> = [];

  private categorySubscription!: Subscription;
  private transactionSubscription!: Subscription;

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.categorySubscription = this.storageService.categories$.subscribe(
      (categories) => {
        this.categories = categories;
      }
    );

    this.transactionSubscription = this.storageService.transactionsUpdated$.subscribe(
     () => {
      this.selectedCategory = 'all';
     }
    )
  }

  onCategoryChange() {
    this.categorySelected.emit(this.selectedCategory);
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
    this.transactionSubscription.unsubscribe();
  }
}
