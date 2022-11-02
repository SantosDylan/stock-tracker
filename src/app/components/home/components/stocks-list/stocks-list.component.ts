import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/shared/interfaces/stock.interface';
import { StocksListService } from './services/stocks-list/stocks-list.service';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss'],
})
export class StocksListComponent implements OnInit {
  public stockList$: Observable<Stock[]>;

  constructor(private stockList: StocksListService) {
    this.stockList$ = this.stockList.getStockList$();
  }

  ngOnInit(): void {
    this.stockList.initStockList();
  }

  public removeStock(stock: Stock) {
    this.stockList.removeStock(stock);
  }
}
