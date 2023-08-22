import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillsStorageService } from '../bills-storage.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
})
export class AddCategoryComponent {
  categoryForm: FormGroup;
  showModal: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private billsStorageService: BillsStorageService
  ) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const categories = this.billsStorageService.getItem('categories') || [];
      categories.push(this.categoryForm.value);
      this.billsStorageService.setItem('categories', categories);
      console.log('Categoría agregada:', this.categoryForm.value);
      this.categoryForm.reset();
      this.showModal = false;
    }
  }
}
