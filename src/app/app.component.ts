import { Component, OnInit } from '@angular/core';
import { EnteredSymbolsService } from './shared/services/entered-symbols/entered-symbols.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public stockInput: string = '';

  constructor(private enteredSymbols: EnteredSymbolsService) {
  }

  ngOnInit(): void {
    this.enteredSymbols.loadEnteredSymbols();
  }

  public trackIt(stockInput: string) : void {
    this.enteredSymbols.updateEnteredSymbols(stockInput);
    this.stockInput = '';
  }
}
