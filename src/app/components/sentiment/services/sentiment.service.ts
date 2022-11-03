import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { combineLatest, map, Observable } from 'rxjs';
import { Sentiment } from 'src/app/shared/interfaces/sentiment.interface';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Injectable({ providedIn: 'root' })
export class SentimentService {
  constructor(private api: ApiService) {}

  public getSentiment(symbol: string): Observable<Sentiment> {
    return this.generateSentiment(symbol, this.generateDateRange());
  }

  private generateSentiment(symbol: string, dateRange: { from: string; to: string }): Observable<Sentiment> {
    return combineLatest({ symbolLookup: this.api.getSymbolLookup(symbol), insiderSentiment: this.api.getInsiderSentiment(symbol, dateRange) }).pipe(
      map(({ symbolLookup, insiderSentiment }) => ({
        symbol: symbol,
        name: symbolLookup.result[0].description,
        data: insiderSentiment.data,
      }))
    );
  }

  private generateDateRange(): { from: string; to: string } {
    const today = new Date();
    const hour = 60 * 60 * 1000;
    const day = hour * 24;
    const threeMonth = 3 * (day * 30);
    const threeMonthAgo = today.getTime() - threeMonth;

    return { from: moment(new Date(threeMonthAgo)).format('YYYY-MM-DD'), to: moment(new Date(today)).format('YYYY-MM-DD') };
  }
}
