import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
})
export class AddCategoryComponent {
  categoryForm: FormGroup;
  showModal: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService
  ) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const categories = this.storageService.getItem('categories') || [];
      categories.push(this.categoryForm.value);

      this.storageService.setItem('categories', categories);

      this.categoryForm.reset();
      this.showModal = false;
    }
  }
}
