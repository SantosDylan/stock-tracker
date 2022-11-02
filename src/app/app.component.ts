import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { StocksListService } from './components/stocks-list/services/stocks-list/stocks-list.service';
import { LocalStorageService } from './shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public stockInput: string = '';

  constructor(private localStorage: LocalStorageService, private stockList: StocksListService) {}

  ngOnInit(): void {}

  public trackIt(stockInput: string): void {
    const currentEnteredSymbols = this.localStorage.get('entered_symbols');

    if (_.find(currentEnteredSymbols, (enteredSymbol) => enteredSymbol === stockInput)) {
      alert(`${stockInput} already exists in stock list`);
    } 
    else {
      if (currentEnteredSymbols) {
        this.localStorage.set('entered_symbols', [...currentEnteredSymbols, stockInput]);
      } else {
        this.localStorage.set('entered_symbols', [stockInput]);
      }
      this.stockList.addStock(stockInput);
    }
    
    this.stockInput = '';
  }
}
