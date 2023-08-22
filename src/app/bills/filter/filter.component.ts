import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent {
  @Output() categorySelected = new EventEmitter<string>();
  selectedCategory: string = 'all';

  onCategoryChange() {
    this.categorySelected.emit(this.selectedCategory);
  }
}
