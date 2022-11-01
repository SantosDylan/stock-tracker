import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksListComponent } from './components/stocks-list/stocks-list.component';
import { SentimentComponent } from './components/sentiment/sentiment.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksListComponent,
    SentimentComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
