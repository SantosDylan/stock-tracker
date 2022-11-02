import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Stock } from 'src/app/shared/interfaces/stock.interface';
import { StocksListService } from '../home/components/stocks-list/services/stocks-list/stocks-list.service';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss'],
})
export class SentimentComponent implements OnInit {
  public selectedStock: Stock | undefined;

  constructor(private stockList: StocksListService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.selectedStock = _.find(this.stockList.getStockList(), {symbol: this.route.snapshot.params['symbol']});
    console.log(this.stockList.getStockList());
    console.log( this.route.snapshot.params['symbol']);

    
    

  }
}
