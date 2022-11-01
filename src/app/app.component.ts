import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/api/api.service';
import { EnteredSymbolsService } from './shared/services/entered-symbols/entered-symbols.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public stockInput: string = '';

  constructor(private enteredSymbols: EnteredSymbolsService, private api: ApiService) {
    this.api.getCompanyProfile('AAPL').subscribe(console.log);
  }

  ngOnInit(): void {
    this.enteredSymbols.loadEnteredSymbols();

    this.enteredSymbols.getEnteredSymbols$().subscribe(console.log);
  }

  public trackIt(stockInput: string) : void {
    this.enteredSymbols.updateEnteredSymbols(stockInput);
    this.stockInput = '';
  }
}
