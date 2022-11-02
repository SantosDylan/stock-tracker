import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Stock } from 'src/app/shared/interfaces/stock.interface';

@Injectable({providedIn: 'root'})
export class StocksListStoreService {
    private readonly stocksList$ = new BehaviorSubject<Stock[]>([]);

  constructor() {}

  public getStocksList$(): Observable<Stock[]> {
    return this.stocksList$.asObservable();
  }

  public getStocksList(): Stock[] {
    return this.stocksList$.value;
  }

  public setStocksList(stocksList: Stock[]): void {
    this.stocksList$.next(stocksList);
  }
    
}