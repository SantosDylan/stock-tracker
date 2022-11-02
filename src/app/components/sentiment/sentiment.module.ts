import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentimentComponent } from './sentiment.component';



const routes: Routes = [
    {
      path: '',
      component: SentimentComponent
    }
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [
    ]
  })
  export class SentimentRoutingModule { }

@NgModule({
    declarations: [SentimentComponent],
    imports: [CommonModule, SentimentRoutingModule],
    providers: [],
})
export class SentimentModule { }
