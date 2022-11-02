import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { combineLatest, map, Observable } from 'rxjs';
import { Stock } from 'src/app/shared/interfaces/stock.interface';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Injectable({ providedIn: 'root' })
export class StockListGeneratorService {
  constructor(private api: ApiService) {}

  public initStockList(enteredSymbols: string[]): Stock[] {
    return _.map(enteredSymbols, (symbol) => ({ symbol: symbol, isLoaded: false }));
  }

  public generateStock(stock: Stock): Observable<Stock> {
    return combineLatest({ symbolLookup: this.api.getSymbolLookup(stock.symbol), quote: this.api.getQuote(stock.symbol) }).pipe(
      map(({ symbolLookup, quote }) => ({
        ...stock,
        isLoaded: true,
        data: { name: symbolLookup.result[0].description, currentPrice: quote.c, percentChange: quote.dp, highPrice: quote.h, openingPrice: quote.o },
      }))
    );
  }
}
