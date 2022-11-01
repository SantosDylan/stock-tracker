import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class EnteredSymbolsStoreService {
  private readonly enteredSymbols$ = new BehaviorSubject<string[]>([]);

  constructor(private localStorage: LocalStorageService) {}

  public getEnteredSymbols$(): Observable<string[]> {
    return this.enteredSymbols$.asObservable();
  }

  public getEnteredSymbols(): string[] {
    return this.enteredSymbols$.value;
  }

  public updateEnteredSymbols(stockInput: string): void {
    const currentValue = this.getEnteredSymbols();

    if (!_.find(currentValue, stockInput)) {
      this.enteredSymbols$.next([...currentValue, stockInput]);
      this.localStorage.set('entered_symbols', [...currentValue, stockInput]);
    }
  }

  public setEnteredSymbols(enteredSymbols: string[]): void {
    this.enteredSymbols$.next(enteredSymbols);
  }
}
