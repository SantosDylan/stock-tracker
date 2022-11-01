import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { EnteredSymbolsStoreService } from './entered-symbols-store.service';

@Injectable({
  providedIn: 'root',
})
export class EnteredSymbolsService {
  constructor(
    private store: EnteredSymbolsStoreService, private localStorage: LocalStorageService) {}

  public getEnteredSymbols$(): Observable<string[]> {
    return this.store.getEnteredSymbols$();
  }

  public getEnteredSymbols(): string[] {
    return this.store.getEnteredSymbols();
  }

  public updateEnteredSymbols(enteredSymbols: string): void {
    this.store.updateEnteredSymbols(enteredSymbols);
  }

  public loadEnteredSymbols(): void {
    const enteredSymbols = this.localStorage.get('entered_symbols');
    if (enteredSymbols) {
      this.store.setEnteredSymbols(enteredSymbols);
    }
  }
}
