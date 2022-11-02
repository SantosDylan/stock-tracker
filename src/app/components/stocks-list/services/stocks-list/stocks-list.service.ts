import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { merge, Observable } from 'rxjs';
import { Stock } from 'src/app/shared/interfaces/stock.interface';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { StockListGeneratorService } from './stocks-list-generator.service';
import { StocksListStoreService } from './stocks-list-store.service';

@Injectable({ providedIn: 'root' })
export class StocksListService {
  constructor(private store: StocksListStoreService, private generator: StockListGeneratorService, private localStorage: LocalStorageService) {}

  public initStockList(): void {
    const initStockList = this.generator.initStockList(this.localStorage.get('entered_symbols'));
    this.setStockList(initStockList);
    this.loadStockList(initStockList);
  }

  public loadStockList(stockList: Stock[]): void {
    const stockListHttpCall$ = _.map(stockList, stock => this.generator.generateStock(stock));
    merge(...stockListHttpCall$)
      .subscribe((stock) => this.updateStockList(stock));
  }

  public getStockList$(): Observable<Stock[]> {
    return this.store.getStocksList$();
  }

  public getStockList(): Stock[] {
    return this.store.getStocksList();
  }

  public setStockList(newStockList: Stock[]): void {
    this.store.setStocksList(newStockList);
  }

  public updateStockList(stock: Stock): void {
    const newStockList = this.getStockList();
    const id = _.findIndex(newStockList, { symbol: stock.symbol });
    newStockList[id] = stock;
    this.store.setStocksList(newStockList);    
  }
}
