import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private transactionsUpdated = new Subject<void>();
  private categoriesSubject = new BehaviorSubject<Array<{ name: string }>>(
    this.getItem('categories') || []
  );

  categories$ = this.categoriesSubject.asObservable();

  transactionsUpdated$ =  this.transactionsUpdated.asObservable();

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));

    if (key === 'transactions') {
      this.transactionsUpdated.next();
    }

    if (key === 'categories') {
      this.categoriesSubject.next(value);
    }
  }

  getItem(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key) || 'null');
    } catch {
      console.error(`Error parsing JSON for ${key}`);
      return null;
    }
  }

  clear(): void {
    localStorage.clear();
  }
}
