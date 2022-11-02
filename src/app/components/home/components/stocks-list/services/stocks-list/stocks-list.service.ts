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
    const stockListHttpCall$ = _.map(stockList, (stock) => this.generator.generateStock(stock.symbol));
    merge(...stockListHttpCall$).subscribe((stock) => this.updateStockList(stock));
  }

  public updateStockList(stock: Stock): void {
    var newStockList = this.getStockList();
    const id = _.findIndex(newStockList, { symbol: stock.symbol });
    newStockList[id] = stock;
    this.store.setStocksList(newStockList);
  }

  public addStock(symbol: string): void {
    const stockList = this.getStockList();
    this.setStockList([...stockList, { symbol: symbol, isLoaded: false }]);
    this.generator.generateStock(symbol).subscribe((newStock) => this.updateStockList(newStock));
  }

  public removeStock(removedStock: Stock): void {
    const enteredSymbols = this.localStorage.get('entered_symbols');
    _.remove(enteredSymbols, symbol => symbol === removedStock.symbol);
    this.localStorage.set('entered_symbols', enteredSymbols);

    const stocksList = this.getStockList();
    _.remove(stocksList, stock => stock === removedStock);
    this.setStockList(stocksList);
  }

  public getStockList$(): Observable<Stock[]> {
    return this.store.getStocksList$();
  }

  private getStockList(): Stock[] {
    return this.store.getStocksList();
  }

  private setStockList(newStockList: Stock[]): void {
    this.store.setStocksList(newStockList);
  }
}
