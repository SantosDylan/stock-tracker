import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Sentiment } from 'src/app/shared/interfaces/sentiment.interface';
import { SentimentService } from './services/sentiment.service';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss'],
})
export class SentimentComponent implements OnInit {
  public sentiment$: Observable<Sentiment>;

  constructor(private sentiment: SentimentService, private route: ActivatedRoute) {
    this.sentiment$ = this.sentiment.getSentiment(this.route.snapshot.params['symbol']);
  }

  ngOnInit(): void {
  }
}
