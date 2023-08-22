import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BillsStorageService {
  private transactionsUpdated = new Subject<void>();

  get transactionsUpdated$() {
    return this.transactionsUpdated.asObservable();
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
    if (key === 'transactions') {
      this.transactionsUpdated.next();
    }
  }

  getItem(key: string): any {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
