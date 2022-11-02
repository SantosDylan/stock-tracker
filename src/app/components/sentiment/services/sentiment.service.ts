import { Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { Sentiment } from 'src/app/shared/interfaces/sentiment.interface';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Injectable({ providedIn: 'root' })
export class SentimentService {
  constructor(private api: ApiService) {}

  public getSentiment(symbol: string): Observable<Sentiment> {
    return this.generateSentiment(symbol);
  }

  private generateSentiment(symbol: string): Observable<Sentiment> {
    return combineLatest({ symbolLookup: this.api.getSymbolLookup(symbol), insiderSentiment: this.api.getInsiderSentiment(symbol) }).pipe(
      map(({ symbolLookup, insiderSentiment }) => ({
        symbol: symbol,
        name: symbolLookup.result[0].description,
        data: insiderSentiment.data,
      }))
    );
  }
}
